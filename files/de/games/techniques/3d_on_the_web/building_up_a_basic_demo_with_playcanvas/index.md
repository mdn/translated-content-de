---
title: Aufbau einer einfachen Demo mit PlayCanvas
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

**PlayCanvas** ist eine beliebte 3D-WebGL-Spiele-Engine, ursprünglich erstellt von Will Eastcott und Dave Evans. Sie ist [open source auf GitHub](https://github.com/playcanvas/engine), mit einem [Editor](https://developer.playcanvas.com/en/user-manual/designer/), der online verfügbar ist, und guter [Dokumentation](https://developer.playcanvas.com/en/). Der Online-Editor ist kostenlos für öffentliche Projekte mit bis zu zwei Teammitgliedern, es gibt jedoch auch [kostenpflichtige Pläne](https://playcanvas.com/plans), wenn Sie ein kommerzielles, privates Projekt mit mehr Entwicklern betreiben möchten.

![PlayCanvas-Website.](playcanvas-cover.png)

## Spiele und Demos

PlayCanvas hat einige bekannte Demos veröffentlicht, die seine Möglichkeiten zeigen.

- [Tanx](https://tanx.io/) ist ein Multiplayer-Panzer-Spiel, bei dem Sie Ihren Panzer steuern und auf andere Spieler schießen können.
- [Swooop](https://playcanv.as/p/JtL2iqIH) ist ein Flugspiel, bei dem Sie Ihr Flugzeug über eine magische Insel fliegen und dabei Juwelen und Treibstoff sammeln.
- Visualisierungen wie der [Star Lord](https://playcanv.as/b/FQbBsJTd) und [BMW i8](https://playcanv.as/p/RqJJ9oU9) nutzen ebenfalls die Engine und zeigen, was möglich ist.

![Eine Liste von PlayCanvas-Demos: Tanx, Swooop, Star Lord, BMW i8.](playcanvas-demos.png)

> [!NOTE]
> Sehen Sie sich die Liste der [vorgestellten Demos](https://playcanvas.com/explore) an, um weitere Beispiele zu finden.

## Engine vs. Editor

Die Engine selbst kann als Standardbibliothek verwendet werden, indem die JavaScript-Datei direkt in Ihr HTML eingebunden wird, sodass Sie sofort mit der Programmierung beginnen können. Zusätzlich bietet das PlayCanvas-Toolset einen Online-Editor, mit dem Sie Komponenten per Drag-and-Drop in die Szene ziehen können – ideal zum Erstellen von Spielen und anderen Anwendungen, die Szenen erfordern, wenn Sie eher Designer als Programmierer sind. Diese Ansätze sind unterschiedlich, funktionieren jedoch gleichermaßen gut, um die Ziele zu erreichen.

## PlayCanvas-Engine

Die PlayCanvas-Engine, die für moderne Browser entwickelt wurde, ist eine voll ausgestattete 3D-Spiele-Engine mit Ressourcenladen, einem Entitäten- und Komponentensystem, fortschrittlicher Grafikmanipulation, Kollisions- und Physik-Engine (entwickelt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Einrichtungen zur Handhabung von Eingabesteuerungen von verschiedenen Geräten (einschließlich Gamepads). Das ist eine beeindruckende Liste von Features – lassen Sie uns einige in Aktion sehen, sehen Sie sich dazu den [Aufbau einer einfachen Demo mit PlayCanvas-Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) für Details an.

## PlayCanvas-Editor

Anstatt alles von Anfang an zu programmieren, können Sie auch den Online-Editor verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht gerne programmieren. Sehen Sie sich den [Aufbau einer einfachen Demo mit PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) für Details an.

## Zusammenfassung

Natürlich hängt es von Ihrer Herangehensweise ab – Designer bevorzugen möglicherweise den Online-Editor, während Programmierer die volle Kontrolle über die Programmierumgebung haben möchten und wahrscheinlich die Quelldateien der Engine verwenden werden. Das Gute dabei ist, dass Sie die Wahl haben und die Werkzeuge auswählen können, die Ihnen am besten passen.
