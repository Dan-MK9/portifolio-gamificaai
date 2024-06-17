import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Keys, Side, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    private velocidade: number = 180
    private ultimaDirecao: string = "down"

    private temObjetoProximo: boolean = false
    private ultimoColisor?: Collider

    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })
    }

    onInitialize(engine: Engine<any>): void {
        engine.toggleDebug()
        const PlayerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0
                }
            }
        })
        const duracaoFrameAnimacao = 70

        
        const leftIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(12, 1) },
                { graphic: PlayerSpriteSheet.getSprite(13, 1) },
                { graphic: PlayerSpriteSheet.getSprite(14, 1) },
                { graphic: PlayerSpriteSheet.getSprite(15, 1) },
                { graphic: PlayerSpriteSheet.getSprite(16, 1) },
                { graphic: PlayerSpriteSheet.getSprite(17, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-Idle", leftIdle)
        // this.graphics.use("left-Idle")

        const rightIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(0, 1) },
                { graphic: PlayerSpriteSheet.getSprite(1, 1) },
                { graphic: PlayerSpriteSheet.getSprite(2, 1) },
                { graphic: PlayerSpriteSheet.getSprite(3, 1) },
                { graphic: PlayerSpriteSheet.getSprite(4, 1) },
                { graphic: PlayerSpriteSheet.getSprite(5, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-Idle", rightIdle)
        // this.graphics.use("right-Idle")

        const downIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(18, 1) },
                { graphic: PlayerSpriteSheet.getSprite(19, 1) },
                { graphic: PlayerSpriteSheet.getSprite(20, 1) },
                { graphic: PlayerSpriteSheet.getSprite(21, 1) },
                { graphic: PlayerSpriteSheet.getSprite(22, 1) },
                { graphic: PlayerSpriteSheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-Idle", downIdle)
        this.graphics.use("down-Idle")

        const upIdle = new Animation({
            frames:[
                { graphic: PlayerSpriteSheet.getSprite(6, 1) },
                { graphic: PlayerSpriteSheet.getSprite(7, 1) },
                { graphic: PlayerSpriteSheet.getSprite(8, 1) },
                { graphic: PlayerSpriteSheet.getSprite(9, 1) },
                { graphic: PlayerSpriteSheet.getSprite(10, 1) },
                { graphic: PlayerSpriteSheet.getSprite(11, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-Idle", upIdle)
        // this.graphics.use("up-Idle")

        const rightWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(0, 2) },
                { graphic: PlayerSpriteSheet.getSprite(1, 2) },
                { graphic: PlayerSpriteSheet.getSprite(2, 2) },
                { graphic: PlayerSpriteSheet.getSprite(3, 2) },
                { graphic: PlayerSpriteSheet.getSprite(4, 2) },
                { graphic: PlayerSpriteSheet.getSprite(5, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-Walk", rightWalk)
        // this.graphics.use("right-Walk")

        const leftWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(12, 2) },
                { graphic: PlayerSpriteSheet.getSprite(13, 2) },
                { graphic: PlayerSpriteSheet.getSprite(14, 2) },
                { graphic: PlayerSpriteSheet.getSprite(15, 2) },
                { graphic: PlayerSpriteSheet.getSprite(16, 2) },
                { graphic: PlayerSpriteSheet.getSprite(17, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-Walk", leftWalk)
        // this.graphics.use("left-Walk")


        const upWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(6, 2) },
                { graphic: PlayerSpriteSheet.getSprite(7, 2) },
                { graphic: PlayerSpriteSheet.getSprite(8, 2) },
                { graphic: PlayerSpriteSheet.getSprite(9, 2) },
                { graphic: PlayerSpriteSheet.getSprite(10, 2) },
                { graphic: PlayerSpriteSheet.getSprite(11, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-Walk", upWalk)
        // this.graphics.use("up-Walk")

        const downWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(18, 2) },
                { graphic: PlayerSpriteSheet.getSprite(19, 2) },
                { graphic: PlayerSpriteSheet.getSprite(20, 2) },
                { graphic: PlayerSpriteSheet.getSprite(21, 2) },
                { graphic: PlayerSpriteSheet.getSprite(21, 2) },
                { graphic: PlayerSpriteSheet.getSprite(22, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-Walk", downWalk)
        // this.graphics.use("down-Walk")

        engine.input.keyboard.on("hold", (event) => {
            switch (event.key) {
                case Keys.Left:
                case Keys.A:
                    this.vel.x = -this.velocidade
                    
                    this.graphics.use("left-Walk")
                    this.ultimaDirecao = "left"
                    break;
            
                case Keys.Right:
                case Keys.D:
                    this.vel.x = this.velocidade
                    
                    this.graphics.use("right-Walk")
                    this.ultimaDirecao = "right"
                    break;
                
                case Keys.Up:
                case Keys.W:
                    this.vel.y = -this.velocidade

                    this.graphics.use("up-Walk")
                    this.ultimaDirecao = "up"
                    break;

                case Keys.Down:
                case Keys.S:
                    this.vel.y = this.velocidade

                    this.graphics.use("down-Walk")
                    this.ultimaDirecao = "down"
                    break;

                default:
                    this.vel.y = 0
                    this.vel.x = 0
                    break;
            }
        })

        engine.input.keyboard.on("release",(event) => {
            if(
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ) {
               this.vel.x = 0 
            }

            if(
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            ) {
                this.vel.y = 0
            }

            if (this.vel.x == 0 && this.vel.y == 0) {
                this.graphics.use(this.ultimaDirecao + "-Idle")
            }
        })

        engine.input.keyboard.on("press", (event) => {
            if (event.key == Keys.F && this.temObjetoProximo) {
                
                if(this.ultimoColisor?.owner.name == "mesa_a") {
                    console.log("Essa é a mesa A")

                    engine.goToScene("case", {
                        sceneActivationData: {
                            nomeDoActor: this.ultimoColisor.owner.name
                        }
                    })
                }

                if(this.ultimoColisor?.owner.name == "mesa_b") {
                    console.log("Essa é a mesa B")

                    engine.goToScene("case", {
                        sceneActivationData: {
                            nomeDoActor: this.ultimoColisor.owner.name
                        }
                    })
                }

                if(this.ultimoColisor?.owner.name == "mesa_c") {
                    console.log("Essa é a mesa C")

                    engine.goToScene("case", {
                        sceneActivationData: {
                            nomeDoActor: this.ultimoColisor.owner.name
                        }
                    })
                }
            }
        })
    }

    onPreCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        this.temObjetoProximo = true

        this.ultimoColisor = other
    }

    onPostUpdate(engine: Engine<any>, delta: number): void {
        if (this.ultimoColisor && this.pos.distance(this.ultimoColisor.worldPos) > 40) {
            this.temObjetoProximo = false

            console.log("Longe");
        }
    }

}