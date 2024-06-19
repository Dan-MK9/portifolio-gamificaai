import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logoV from "./images/logo-vertical.png";
import Gamificacao from "./images/Icones-vetorizados.png";
import ImagemCaseA from "./images/funcionarioA.png";
import ImagemCaseB from "./images/funcionarioB.png";
import ImagemCaseC from "./images/funcionarioC.png";
import RitimadaBGM from "./sounds/ritmada_zelda.mp3";
import ClassicBGM from "./sounds/zelda.mp3";

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url";

import tsxParedesPath from "./maps/tileset_paredes.tsx?url";
import tsxGenericPath from "./maps/tileset_generic.tsx?url";
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url";
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url";

import tmxMapaPath from "./maps/showroom_map.tmx?url";

import playerSpritePath from"./sprites/player.png";
import npcASpritePath from "./sprites/npc_a.png";
import npcBSpritePath from"./sprites/npc_b.png";
import npcCSpritePath from"./sprites/npc_c.png";

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource(playerSpritePath, {filtering: ImageFiltering.Pixel}),
  npcASpriteSheet: new ImageSource(npcASpritePath, {filtering: ImageFiltering.Pixel}),
  npcBSpriteSheet: new ImageSource(npcBSpritePath, {filtering: ImageFiltering.Pixel}),
  npcCSpriteSheet: new ImageSource(npcCSpritePath, {filtering: ImageFiltering.Pixel}),
  LogoV: new ImageSource(logoV),
  ImagemCaseA: new ImageSource (ImagemCaseA),
  ImagemCaseB: new ImageSource (ImagemCaseB),
  ImagemCaseC: new ImageSource (ImagemCaseC),
  Gamificacao: new ImageSource(Gamificacao),
  RitimadaBGM: new Sound (RitimadaBGM),
  ClassicBGM: new Sound (ClassicBGM),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      {path: "showroom_map.tmx", output: tmxMapaPath},
      {path: "Room_Builder_32x32.png", output: pngTilesetPath}, 
      {path: "tileset_paredes.tsx", output: tsxParedesPath},
      {path: "tileset_generic.tsx", output: tsxGenericPath},
      {path: "tileset_estoque.tsx",output: tsxEstoquePath},
      {path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath}
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
