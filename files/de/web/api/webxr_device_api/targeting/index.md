---
title: Zielerfassung und Treffererkennung
slug: Web/API/WebXR_Device_API/Targeting
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

## Virtuelles Objekt-Treffertesten

Die Erkennung von Kollisionen mit virtuellen Objekten umfasst normalerweise nicht das Testen der Schnittpunkte des Strahls mit einem der Polygone der Szene, da eine typische Szene Hunderte oder Tausende von Polygonen enthalten kann, was das direkte Verfolgen von Strahlen zu Polygonen in den meisten Fällen unpraktisch macht. Stattdessen finden die meisten Anwendungen eine Möglichkeit, die Implementierung ihrer Treffertest-Algorithmen zu vereinfachen.

Es ist möglich – oder sogar wahrscheinlich –, dass die verwendete 3D-Grafik-Engine Treffererkennung bietet, insbesondere wenn sie speziell für die Spieleentwicklung konzipiert ist.

### Vereinfachte repräsentative Objekte

Eine häufige Lösung besteht darin, vereinfachte, unsichtbare Objekte über die Objekte in Ihrer Szene zu legen. Diese Objekte dienen dann als eine Art Stellvertreter. Wenn Sie beispielsweise ein mehr oder weniger rechteckiges Objekt haben, verwenden Sie ein Rechteck als Stellvertreter für das Objekt, wenn Sie Treffertests durchführen. Ebenso, wenn ein Objekt im Wesentlichen rund ist, verwenden Sie den Radius des kleinsten umschreibenden Kreises, um ein Kollisionsprüfungsobjekt festzulegen.

## Treffererkennung in der realen Welt

Das Akronym „LIDAR“ hat je nach den spezifischen Implementierungen mehrere Definitionen, aber das Endergebnis ist dasselbe. Am häufigsten bezieht es sich auf "_Laser Imaging, Detection, And Ranging_" oder "_LIght Detection and Ranging_".

Das Testen von Kollisionen mit der realen Welt ist ein anderes Problem, das nicht nur die Interpretation von Bildern der Kamera des Geräts (falls verfügbar), sondern möglicherweise auch mehrere zusätzliche Sensoren umfassen kann. Einige Geräte beinhalten Infrarotsensoren zur Entfernungsbestimmung von Objekten, und andere bieten leistungsstarke [LIDAR](https://en.wikipedia.org/wiki/LIDAR)-Systeme, die Laser (normalerweise Infrarotlaser, die vom menschlichen Auge nicht gesehen werden können) verwenden, um die Reichweite zu Objekten in der Welt zu bestimmen.

Die Details zur Arbeit mit dem Abstandsmesssystem einer einzelnen Plattform liegen außerhalb des Umfangs dieses Artikels. Es gibt jedoch Hoffnung: Ein Vorschlag für ein WebXR Hit Test Module wurde eingebracht, das auf WebXR aufbauen würde, um eine API für Treffertests und Kollisionserkennung bereitzustellen.

## Siehe auch

- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [HTML5-Spiele: 3D-Kollisionserkennung](https://hacks.mozilla.org/2015/10/html-5-games-3d-collision-detection/) (Hacks Blog)
