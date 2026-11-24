---
title: Eine einfache Demo mit PlayCanvas erstellen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
l10n:
  sourceCommit: d86a376c3e6e4761d747314a015fa6afe121600f
---

**PlayCanvas** ist eine beliebte 3D-Spiele-Engine für das Web, die Projekte mit [WebGL 2](/de/docs/Web/API/WebGL_API) und [WebGPU](/de/docs/Web/API/WebGPU_API) rendern kann. Sie ist [auf GitHub quelloffen verfügbar](https://github.com/playcanvas/engine), steht unter der MIT-Lizenz und bietet einen browserbasierten [Editor](https://developer.playcanvas.com/user-manual/editor/) sowie eine gute [Dokumentation](https://developer.playcanvas.com/). Der Editor kann für öffentliche Projekte kostenlos genutzt werden. Daneben gibt es [kostenpflichtige Tarife](https://playcanvas.com/plans) mit privaten Projekten, mehr Speicherplatz und Teamverwaltung.

![PlayCanvas-Website.](playcanvas-cover.png)

## Spiele und Demos

PlayCanvas hat einige bekannte Demos veröffentlicht, die seine Möglichkeiten zeigen.

- [Tanx](https://tanx.io/) ist ein Multiplayer-Panzerspiel, in dem Sie Ihren Panzer steuern und auf andere Spieler schießen können.
- [Swooop](https://playcanv.as/p/JtL2iqIH) ist ein Flugspiel, in dem Sie Ihr Flugzeug um eine magische Insel steuern und dabei Juwelen und Treibstoff sammeln.
- Visualisierungen wie [Star-Lord](https://playcanv.as/p/SA7hVBLt/) und [BMW i8](https://playcanv.as/p/RqJJ9oU9) nutzen ebenfalls die Engine und zeigen, was mit ihr möglich ist.

![Eine Auswahl von PlayCanvas-Demos: Tanx, Swooop, Star-Lord, BMW i8.](playcanvas-demos.png)

> [!NOTE]
> Weitere Beispiele finden Sie in der Liste der [ausgewählten Projekte](https://playcanvas.com/explore). In den [Engine-Beispielen](https://playcanvas.com/examples) können Sie einzelne Funktionen in Aktion sehen.

## PlayCanvas-Engine

Die für moderne Browser entwickelte [PlayCanvas-Engine](https://github.com/playcanvas/engine) ist eine voll ausgestattete 3D-Spiele-Engine. Sie bietet das Laden von Ressourcen, ein Entity-Component-System, erweiterte Grafikfunktionen, eine Physik-Engine (auf Basis von [ammo.js](https://github.com/kripken/ammo.js/)), Audiofunktionen und Möglichkeiten zur Verarbeitung von Eingaben verschiedener Geräte, einschließlich Gamepads.

Sie können die Engine als Standardbibliothek verwenden, indem Sie sie von einem CDN importieren oder mit npm installieren. So können Sie direkt mit dem Programmieren beginnen. PlayCanvas bietet außerdem Wrapper für [React](https://developer.playcanvas.com/user-manual/react/) und [Web Components](https://developer.playcanvas.com/user-manual/web-components/) an, falls Sie Szenen lieber deklarativ erstellen möchten.

Unter [Eine einfache Demo mit der PlayCanvas-Engine erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) sehen Sie einige Funktionen in Aktion.

## PlayCanvas-Editor

Anstatt alles von Grund auf zu programmieren, können Sie den [Online-Editor von PlayCanvas](https://developer.playcanvas.com/user-manual/editor/) verwenden. Damit können Sie Komponenten per Drag-and-drop zu einer Szene hinzufügen und diese in Echtzeit gemeinsam mit anderen bearbeiten. Wenn Sie lieber gestalten als programmieren, kann dies eine angenehmere Arbeitsumgebung sein.

Weitere Informationen finden Sie unter [Eine einfache Demo mit dem PlayCanvas-Editor erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor).
