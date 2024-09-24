---
title: Erstellen einer grundlegenden Demo mit PlayCanvas
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

**PlayCanvas** ist eine beliebte 3D-WebGL-Spiel-Engine, ursprünglich erstellt von Will Eastcott und Dave Evans. Sie ist [als Open Source auf GitHub verfügbar](https://github.com/playcanvas/engine), mit einem [Editor](https://developer.playcanvas.com/en/user-manual/designer/), der online verfügbar ist, und einer guten [Dokumentation](https://developer.playcanvas.com/en/). Der Online-Editor ist kostenlos für öffentliche Projekte mit bis zu zwei Teammitgliedern, aber es gibt auch [bezahlte Pläne](https://playcanvas.com/plans), wenn Sie ein kommerzielles privates Projekt mit mehr Entwicklern betreiben möchten.

![PlayCanvas Website.](playcanvas-cover.png)

## Spiele und Demos

PlayCanvas hat einige bekannte Demos veröffentlicht, die seine Möglichkeiten demonstrieren.

- [Tanx](https://tanx.io/) ist ein Mehrspieler-Panzerspiel, in dem Sie Ihren Panzer steuern und andere Spieler abschießen können.
- [Swooop](https://playcanv.as/p/JtL2iqIH) ist ein Flugspiel, in dem Sie Ihr Flugzeug über eine magische Insel steuern und Edelsteine und Treibstoff sammeln.
- Visualisierungen wie [Star Lord](https://playcanv.as/b/FQbBsJTd) und [BMW i8](https://playcanv.as/p/RqJJ9oU9) nutzen ebenfalls die Engine und zeigen, was möglich ist.

![Eine Liste von PlayCanvas Demos: Tanx, Swooop, Star Lord, BMW i8.](playcanvas-demos.png)

> [!NOTE]
> Schauen Sie sich die Liste der [vorgestellten Demos](https://playcanvas.com/explore) an, um weitere Beispiele zu finden.

## Engine vs. Editor

Die Engine selbst kann als Standardbibliothek verwendet werden, indem ihre JavaScript-Datei direkt in Ihr HTML eingebunden wird, sodass Sie sofort mit dem Programmieren beginnen können; zusätzlich bietet das PlayCanvas-Toolset einen Online-Editor, mit dem Sie Komponenten per Drag & Drop auf die Szene ziehen können — eine großartige Möglichkeit, Spiele und andere Apps zu erstellen, die Szenen benötigen, wenn Sie eher Designer als Programmierer sind. Diese Ansätze sind unterschiedlich, funktionieren jedoch gleichermaßen gut, um Endziele zu erreichen.

## PlayCanvas Engine

Entwickelt für moderne Browser, ist PlayCanvas eine voll ausgestattete 3D-Spiel-Engine mit Ressourcenladen, einem Entitäten- und Komponentensystem, fortgeschrittener Grafikmanipulation, Kollisions- und Physik-Engine (erstellt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Funktionen zur Steuerungseingabe von verschiedenen Geräten (einschließlich Gamepads). Das ist eine beeindruckende Liste von Funktionen — lassen Sie uns einige davon in Aktion sehen, schauen Sie sich die [Erstellung einer grundlegenden Demo mit PlayCanvas Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) für Details an.

## PlayCanvas Editor

Anstatt alles von Anfang an zu programmieren, können Sie auch den Online-Editor verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht gerne programmieren. Siehe die [Erstellung einer grundlegenden Demo mit PlayCanvas Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) für Details.

## Zusammenfassung

Natürlich hängt es von Ihrem Ansatz ab — Designer bevorzugen möglicherweise den Online-Editor, während Programmierer die vollständige Kontrolle über die Programmierumgebung bevorzugen und wahrscheinlich die Quelldateien der Engine verwenden werden. Das Gute ist, dass Sie die Wahl haben und die Tools auswählen können, die am besten zu Ihnen passen.
