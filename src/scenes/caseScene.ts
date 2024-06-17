import { Color, Engine, FadeInOut, Scene, SceneActivationContext, Transition, } from "excalibur";

export class caseScene extends Scene {
    private objetoInteração: any
    private textoDaCena: string = ""
    textoGamifica?: HTMLElement

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.textoGamifica = document.createElement("div") as HTMLElement
        this.textoGamifica.style.opacity = "1"

        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.textoGamifica)

        this.textoGamifica.classList.add("caseMesa")

        this.textoGamifica.innerHTML = `<h2>${this.textoDaCena}?</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de
            engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes
            como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos
            desejados e aumentar a participação e o comprometimento dos participantes.
        </p>`
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        this.objetoInteração = context.data

        console.log(this.objetoInteração);

        if(this.objetoInteração.nomeDoActor == "mesa_a") {
            this.textoDaCena = "Essa é a descrição do case A"
        }

        if(this.objetoInteração.nomeDoActor == "mesa_b") {
            this.textoDaCena = "Essa é a descrição do case B"
        }

        if(this.objetoInteração.nomeDoActor == "mesa_c") {
            this.textoDaCena = "Essa é a descrição do case C"
        }
    }
}