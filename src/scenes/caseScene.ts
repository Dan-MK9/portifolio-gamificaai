import { Actor, Color, Engine, FadeInOut, ImageSource, Resource, Scene, SceneActivationContext, Transition, vec, } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteração: any
    textoA?: HTMLElement

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 200
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.textoA = document.createElement("div") as HTMLElement
        this.textoA.style.opacity = "1"

        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.textoA)
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        this.objetoInteração = context.data

        if (this.objetoInteração.nomeDoActor == "mesa_a") {
            let actorImagemCaseA = new Actor({
                pos: vec(925, 400)
            })

            let ImagemCaseA = Resources.ImagemCaseA.toSprite()

            ImagemCaseA.scale = vec(0.7, 0.7)

            actorImagemCaseA.graphics.add(ImagemCaseA)

            this.add(actorImagemCaseA)

            this.backgroundColor = Color.fromHex("#3e4758")

            this.textoA = document.createElement("div") as HTMLElement
            this.textoA.style.opacity = "1"

            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.textoA)

            this.textoA.classList.add("sobre-gamifica")

            this.textoA.innerHTML = `<h2>Programa Vitalidade em Jogo</h2>
        <p>A empresa enfrentava baixa adesão aos programas de saúde corporativa, com muitos funcionários não participando ativamente de iniciativas de promoção da saúde.

        Implementamos uma plataforma de gamificação que incluiu desafios semanais de atividade física, hábitos alimentares saudáveis e bem-estar mental.
         Os funcionários acumulavam pontos através da participação e conquistas nos desafios,
         podendo trocá-los por benefícios como dias de folga adicionais,
         vales-compra ou reduções no prêmio do plano de saúde.

         Como resultado a implementação de uma plataforma de gamificação aumentou a adesão aos programas de saúde em 40%, melhorou significativamente a saúde dos colaboradores,
          reduziu faltas e custos com planos de saúde, demonstrando o impacto positivo da estratégia na empresa.
        </p>`
        }

        if (this.objetoInteração.nomeDoActor == "mesa_b") {
            let actorImageCaseB = new Actor({
                pos: vec(925, 400)
            })

            let ImagemCaseB = Resources.ImagemCaseB.toSprite()

            ImagemCaseB.scale = vec(0.7, 0.7)

            actorImageCaseB.graphics.add(ImagemCaseB)

            this.add(actorImageCaseB)

            this.backgroundColor = Color.fromHex("#272b34")

            this.textoA = document.createElement("div") as HTMLElement
            this.textoA.style.opacity = "1"

            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.textoA)

            this.textoA.classList.add("sobre-gamifica")

            this.textoA.innerHTML = `<h2>TechGamer Solutions</h2>
        <p>A TechGamer Solutions enfrentava o desafio de melhorar a eficácia dos treinamentos internos e aumentar o engajamento dos funcionários com conteúdos educativos.

        Como solução, implementaram a plataforma "Gameducate", uma solução de gamificação que transformou os treinamentos em experiências envolventes e interativas.
         Introduziram elementos como missões, desafios e recompensas para motivar os colaboradores.
        
        Resultado: Com a "Gameducate", a TechGamer Solutions viu um aumento significativo na participação e no interesse dos funcionários pelos treinamentos.
         Houve também um aumento na retenção do conhecimento e na aplicação prática das habilidades adquiridas,
          resultando em melhorias perceptíveis na eficiência operacional e na qualidade dos serviços prestados.
        </p>`
        }

        if (this.objetoInteração.nomeDoActor == "mesa_c") {
            let actorImagemCaseC = new Actor({
                pos: vec(925, 400)
            })

            let ImagemCaseC = Resources.ImagemCaseC.toSprite()

            ImagemCaseC.scale = vec(0.7, 0.7)

            actorImagemCaseC.graphics.add(ImagemCaseC)

            this.add(actorImagemCaseC)

            this.backgroundColor = Color.fromHex("#222631")

            this.textoA = document.createElement("div") as HTMLElement
            this.textoA.style.opacity = "1"

            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.textoA)

            this.textoA.classList.add("sobre-gamifica")

            this.textoA.innerHTML = `<h2> InnovateCorp</h2>
        <p>InnovateCorp enfrentava o desafio de melhorar a comunicação e integração entre equipes distribuídas geograficamente,
         o que impactava negativamente na colaboração e na inovação dentro da empresa.

        Realizamos a implementação da plataforma "InnovaQuest", uma solução de gamificação que incentivava a colaboração através de desafios colaborativos e competições entre equipes.
         Introduziram também sistemas de pontos e reconhecimento público para os participantes mais engajados.
        
        Com a "InnovaQuest", InnovateCorp viu uma melhoria significativa na comunicação entre equipes dispersas,
         além de um aumento na colaboração e na geração de ideias inovadoras. Os funcionários se tornaram mais engajados e motivados,
          o que resultou em um ambiente de trabalho mais integrado e produtivo, com impactos positivos nos resultados financeiros e na satisfação dos clientes.
        </p>`
        }
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.textoA!.style.opacity = "0"
    }
}