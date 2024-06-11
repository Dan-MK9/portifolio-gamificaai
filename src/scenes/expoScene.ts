import { Color, Engine, FadeInOut, Resource, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        let tiledMap = Resources.Mapa

        let offsetX = 138
        let offsetY = 100

        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        this.camera.zoom = 1.4

        let Jogador = new Player()

        this.add(Jogador)
    }
    
}