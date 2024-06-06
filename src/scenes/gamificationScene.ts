import { Actor, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    textoGamifica?: HTMLElement

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.textoGamifica = document.createElement("div") as HTMLElement
        this.textoGamifica.style.opacity = "1"

        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.textoGamifica)

        this.textoGamifica.classList.add("oq-gamificacao")

        this.textoGamifica.innerHTML = `<h2>O que é gamificação?</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de
            engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes
            como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos
            desejados e aumentar a participação e o comprometimento dos participantes.
        </p>`

        let actorImg = new Actor({
            pos: vec(350, 350)
        })

        let imagemGamificacao = Resources.Gamificacao.toSprite()

        imagemGamificacao.scale = vec(0.6, 0.6)

        actorImg.graphics.add(imagemGamificacao)

        this.add(actorImg)
    }
}