import { Actor, Animation, CollisionType, Color, Engine, FadeInOut, Scene, SpriteSheet, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { npc } from "../actors/npc";

export class expoScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        let musicaFundo = Resources.RitimadaBGM

        musicaFundo.loop = true
        musicaFundo.play(0.5)

        let tiledMap = Resources.Mapa

        let offsetX = 138
        let offsetY = 100

        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        this.camera.zoom = 1.4

        let spawnPoint = tiledMap.getObjectsByName("player_spawn")[0]

        let Jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))

        this.add(Jogador)

        let npcSpawnPointA = tiledMap.getObjectsByName("npc_a")[0]
        let npcSpawnPointB = tiledMap.getObjectsByName("npc_b")[0]
        let npcSpawnPointC = tiledMap.getObjectsByName("npc_c")[0]

        let npcA = new npc(
            vec(npcSpawnPointA.x + offsetX, npcSpawnPointA.y + offsetY),
            "NpcA",
            "a"
        )

        let npcB = new npc(
            vec(npcSpawnPointB.x + offsetX, npcSpawnPointB.y + offsetY),
            "NpcB",
            "b"
        )

        let npcC = new npc(
            vec(npcSpawnPointC.x + offsetX, npcSpawnPointC.y + offsetY),
            "NpcC",
            "c"
        )

        npcA.z = 2
        npcB.z = 2
        npcC.z = 2

        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        this.camera.strategy.lockToActor(Jogador)
        this.camera.zoom = 2
        Jogador.z = 1

        let camadaObjetosColisores = tiledMap.getObjectLayers("ObjetosColisores")[0]

        camadaObjetosColisores.objects.forEach(objeto => {
            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed
            })

            this.add(objetoAtual)
        })
    }

}