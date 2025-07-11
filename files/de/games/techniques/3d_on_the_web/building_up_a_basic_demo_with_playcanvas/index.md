---
title: Erstellen eines einfachen Demos mit PlayCanvas
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

**PlayCanvas** ist eine beliebte 3D-WebGL-Engine, ursprünglich entwickelt von Will Eastcott und Dave Evans. Sie ist [als Open Source auf GitHub verfügbar](https://github.com/playcanvas/engine) und ein [Editor](https://developer.playcanvas.com/user-manual/editor/) ist online verfügbar sowie gute [Dokumentation](https://developer.playcanvas.com/en/). Der Online-Editor ist kostenlos für öffentliche Projekte mit bis zu zwei Teammitgliedern, aber es gibt auch [kostenpflichtige Pläne](https://playcanvas.com/plans), wenn Sie ein kommerzielles privates Projekt mit mehr Entwicklern durchführen möchten.

![PlayCanvas-Website.](playcanvas-cover.png)

## Spiele und Demos

PlayCanvas hat einige bekannte Demos veröffentlicht, die seine Möglichkeiten zeigen.

- [Tanx](https://tanx.io/) ist ein Mehrspieler-Panzer-Spiel, bei dem Sie Ihren Panzer herumfahren und auf andere Spieler schießen können.
- [Swooop](https://playcanv.as/p/JtL2iqIH) ist ein Flugspiel, bei dem Sie Ihr Flugzeug um eine magische Insel steuern und Juwelen und Treibstoff einsammeln.
- Visualisierungen wie der [Star Lord](https://playcanv.as/b/FQbBsJTd) und [BMW i8](https://playcanv.as/p/RqJJ9oU9) nutzen ebenfalls die Engine und zeigen, was möglich ist.

![Eine Liste von PlayCanvas-Demos: Tanx, Swooop, Star Lord, BMW i8.](playcanvas-demos.png)

> [!NOTE]
> Schauen Sie sich die Liste der [vorgestellten Demos](https://playcanvas.com/explore) an, um weitere Beispiele zu finden.

## Engine vs. Editor

Die Engine selbst kann als Standardbibliothek verwendet werden, indem Sie die JavaScript-Datei direkt in Ihr HTML einbinden, sodass Sie sofort mit dem Codieren anfangen können; zusätzlich bietet das PlayCanvas-Toolset einen Online-Editor, den Sie nutzen können, um Komponenten per Drag & Drop in die Szene zu ziehen — eine großartige Möglichkeit, Spiele und andere Apps zu erstellen, die Szenen erfordern, wenn Sie eher ein Designer als ein Programmierer sind. Diese Ansätze sind unterschiedlich, ermöglichen jedoch gleichermaßen das Erreichen der Endziele.

## PlayCanvas-Engine

Entwickelt für moderne Browser, ist PlayCanvas eine voll ausgestattete 3D-Spiel-Engine mit Ressourcenverwaltung, einem Entity- und Komponentensystem, fortgeschrittener Grafikmanipulation, einer Kollisions- und Physik-Engine (entwickelt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Funktionen zur Steuerungseingabe von verschiedenen Geräten (einschließlich Gamepads). Das ist eine beeindruckende Liste von Funktionen – lassen Sie uns einige davon in Aktion sehen und schauen Sie sich die [Erstellen eines einfachen Demos mit der PlayCanvas-Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) für weitere Details an.

## PlayCanvas-Editor

Statt alles von Grund auf zu programmieren, können Sie auch den Online-Editor verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht jemand sind, der gerne programmiert. Sehen Sie sich die [Erstellen eines einfachen Demos mit dem PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) für weitere Details an.

## Zusammenfassung

Natürlich hängt es von Ihrem Ansatz ab — Designer bevorzugen möglicherweise den Online-Editor, während Programmierer wahrscheinlich die volle Kontrolle über die Programmierumgebung haben möchten und wahrscheinlich die Quelldateien der Engine nutzen werden. Das Gute ist, dass Sie die Wahl haben und die Werkzeuge auswählen können, die Ihnen am besten gefallen.
