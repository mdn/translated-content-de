---
title: Aufbau eines einfachen Demos mit PlayCanvas
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

**PlayCanvas** ist eine beliebte 3D-WebGL-Spiele-Engine, ursprünglich erstellt von Will Eastcott und Dave Evans. Sie ist [auf GitHub quelloffen](https://github.com/playcanvas/engine), verfügt über einen [Online-Editor](https://developer.playcanvas.com/en/user-manual/designer/) und eine gute [Dokumentation](https://developer.playcanvas.com/en/). Der Online-Editor ist kostenlos für öffentliche Projekte mit bis zu zwei Teammitgliedern, es gibt jedoch auch [kostenpflichtige Pläne](https://playcanvas.com/plans) für kommerzielle, private Projekte mit mehr Entwicklern.

![PlayCanvas-Website.](playcanvas-cover.png)

## Spiele und Demos

PlayCanvas hat einige bekannte veröffentlichte Demos, die seine Möglichkeiten demonstrieren.

- [Tanx](https://tanx.io/) ist ein Multiplayer-Panzer-Spiel, bei dem Sie Ihren Panzer herumfahren können und andere Spieler abschießen.
- [Swooop](https://playcanv.as/p/JtL2iqIH) ist ein Flugspiel, bei dem Sie Ihr Flugzeug um eine magische Insel steuern und dabei Juwelen und Treibstoff sammeln.
- Visualisierungen wie der [Star Lord](https://playcanv.as/b/FQbBsJTd) und [BMW i8](https://playcanv.as/p/RqJJ9oU9) nutzen ebenfalls die Engine und zeigen, was möglich ist.

![Eine Liste von PlayCanvas-Demos: Tanx, Swooop, Star Lord, BMW i8.](playcanvas-demos.png)

> [!NOTE]
> Schauen Sie sich die Liste der [vorgestellten Demos](https://playcanvas.com/explore) an, um weitere Beispiele zu finden.

## Engine vs. Editor

Die Engine selbst kann als Standardbibliothek verwendet werden, indem ihre JavaScript-Datei direkt in Ihr HTML aufgenommen wird, sodass Sie sofort mit dem Codieren beginnen können. Darüber hinaus bietet das PlayCanvas-Toolset einen Online-Editor, mit dem Sie Komponenten per Drag & Drop in die Szene ziehen können – eine großartige Möglichkeit, Spiele und andere Apps mit Szenen zu erstellen, wenn Sie eher Designer als Programmierer sind. Diese Ansätze sind unterschiedlich, dienen jedoch gleichermaßen gut dazu, die Endziele zu erreichen.

## PlayCanvas Engine

Entwickelt für moderne Browser, ist PlayCanvas eine vollständig ausgestattete 3D-Spiele-Engine mit Ressourcen-Loading, einem Entitäten- und Komponentensystem, fortgeschrittener Grafikmanipulation, Kollisionen und Physik-Engine (erstellt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Einrichtungen zur Steuerungseingabe von verschiedenen Geräten (einschließlich Gamepads). Das ist eine beeindruckende Liste von Funktionen — lassen Sie uns einige in Aktion sehen. Schauen Sie sich die [Aufbau eines einfachen Demos mit PlayCanvas Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) für Details an.

## PlayCanvas Editor

Anstatt alles von Anfang an zu programmieren, können Sie auch den Online-Editor verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht jemand sind, der gerne programmiert. Sehen Sie sich die [Aufbau eines einfachen Demos mit PlayCanvas Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) für Details an.

## Zusammenfassung

Natürlich hängt es von Ihrem Ansatz ab – Designer favorisieren möglicherweise den Online-Editor, während Programmierer die volle Kontrolle über die Programmierumgebung bevorzugen und wahrscheinlich die Quelldateien der Engine verwenden. Das Gute ist, dass Sie eine Wahl haben und die Werkzeuge auswählen können, die am besten zu Ihnen passen.
