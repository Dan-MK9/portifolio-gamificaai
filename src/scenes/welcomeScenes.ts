import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class welcomeScene extends Scene {

    fraseEnter?: Label

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black

        let fraseBemVindo = new Label({
            text: "Bem vindo ao Portfolio",
            width: 400,
            height: 50,
            pos: vec(engine.drawWidth / 2, 300),
            font: new Font({
                color: Color.White,
                size: 40,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })

        this.fraseEnter = new Label({
            text: `Pressione "Enter" para iniciar...`,
            width: 400,
            height: 50,
            pos: vec(engine.drawWidth / 2, 600),
            font: new Font({
                color: Color.White,
                size: 20,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })

        this.add(fraseBemVindo)

        this.add(this.fraseEnter)

        this.fraseEnter?.actions.repeatForever(context => {
            context.fade(0, 1000)
            context.fade(1, 1000)
        })

        let actorLogo = new Actor({
            pos: vec(engine.drawWidth / 2, 430),
            color: Color.Red
        })

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                engine.goToScene("historia")
            }
        })

        let imagemLogo = Resources.Logo.toSprite()

        imagemLogo.scale = vec(0.4, 0.4)

        actorLogo.graphics.add(imagemLogo)

        this.add(actorLogo)
    }

}