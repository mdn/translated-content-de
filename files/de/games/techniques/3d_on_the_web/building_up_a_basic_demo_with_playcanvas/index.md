---
title: Aufbau einer grundlegenden Demo mit PlayCanvas
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{GamesSidebar}}

**PlayCanvas** ist eine beliebte 3D-WebGL-Game-Engine, die ursprünglich von Will Eastcott und Dave Evans entwickelt wurde. Sie ist [als Open Source auf GitHub verfügbar](https://github.com/playcanvas/engine), mit einem [Editor](https://developer.playcanvas.com/user-manual/editor/), der online verfügbar ist, und einer guten [Dokumentation](https://developer.playcanvas.com/en/). Der Online-Editor ist kostenlos für öffentliche Projekte mit bis zu zwei Teammitgliedern, aber es gibt auch [kostenpflichtige Pläne](https://playcanvas.com/plans), wenn Sie ein kommerzielles privates Projekt mit mehr Entwicklern durchführen möchten.

![PlayCanvas Website.](playcanvas-cover.png)

## Spiele und Demos

PlayCanvas hat einige bekannte Demos veröffentlicht, die seine Möglichkeiten demonstrieren.

- [Tanx](https://tanx.io/) ist ein Multiplayer-Panzerspiel, bei dem Sie Ihren Panzer steuern und auf andere Spieler schießen können.
- [Swooop](https://playcanv.as/p/JtL2iqIH) ist ein Flugspiel, bei dem Sie Ihr Flugzeug um eine magische Insel steuern, während Sie Juwelen und Treibstoff sammeln.
- Visualisierungen wie der [Star Lord](https://playcanv.as/b/FQbBsJTd) und [BMW i8](https://playcanv.as/p/RqJJ9oU9) nutzen ebenfalls die Engine und zeigen auf, was möglich ist.

![Eine Liste von PlayCanvas-Demos: Tanx, Swooop, Star Lord, BMW i8.](playcanvas-demos.png)

> [!NOTE]
> Schauen Sie sich die Liste der [ausgewählten Demos](https://playcanvas.com/explore) an, um weitere Beispiele zu finden.

## Engine vs. Editor

Die Engine selbst kann als Standardbibliothek verwendet werden, indem ihre JavaScript-Datei direkt in Ihr HTML eingebunden wird, sodass Sie sofort mit der Codierung beginnen können. Zusätzlich bietet das PlayCanvas-Toolset einen Online-Editor, den Sie verwenden können, um Komponenten per Drag & Drop in die Szene zu ziehen — eine großartige Möglichkeit, Spiele und andere Anwendungen zu erstellen, die Szenen erfordern, wenn Sie mehr Designer als Programmierer sind. Diese Ansätze sind unterschiedlich, führen jedoch gleich gut zum Ziel.

## PlayCanvas Engine

PlayCanvas ist für moderne Browser gebaut und bietet eine voll ausgestattete 3D-Game-Engine mit Ressourcen-Loading, einem Entity- und Komponentensystem, fortschrittlicher Grafikmanipulation, Kollisions- und Physik-Engine (entwickelt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Einrichtungen zur Steuerung von Eingaben von verschiedenen Geräten (einschließlich Gamepads). Das ist eine beeindruckende Liste von Funktionen — lassen Sie uns einige davon in Aktion sehen. Schauen Sie sich den [Aufbau einer grundlegenden Demo mit PlayCanvas Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) für Details an.

## PlayCanvas Editor

Anstatt alles von Anfang an zu codieren, können Sie auch den Online-Editor verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht gerne programmieren. Siehe den [Aufbau einer grundlegenden Demo mit PlayCanvas Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) für Details.

## Zusammenfassung

Natürlich hängt es von Ihrem Ansatz ab — Designer bevorzugen möglicherweise den Online-Editor, während Programmierer die volle Kontrolle über die Programmierumgebung haben möchten und wahrscheinlich die Quellcodes der Engine verwenden. Das Gute daran ist, dass Sie die Wahl haben und die Werkzeuge wählen können, die Ihnen am besten passen.
