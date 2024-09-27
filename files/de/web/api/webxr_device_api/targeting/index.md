---
title: Zielsetzung und Treffererkennung
slug: Web/API/WebXR_Device_API/Targeting
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

## Hit-Testing virtueller Objekte

Die Erkennung von Kollisionen mit virtuellen Objekten erfolgt in der Regel nicht durch das Testen der Schnittmenge des Strahls mit einem der Polygone der Szene, da eine typische Szene Hunderte oder Tausende von Polygonen enthalten kann, was das direkte Nachverfolgen von Strahlen zu Polygonen in den meisten Fällen unpraktisch macht. Stattdessen finden die meisten Anwendungen eine Möglichkeit, die Implementierung ihrer Treffererkennungsalgorithmen zu vereinfachen.

Es ist möglich – oder sogar wahrscheinlich –, dass die von Ihnen verwendete 3D-Grafik-Engine Treffererkennung anbietet, insbesondere wenn sie speziell für die Spieleentwicklung konzipiert ist.

### Vereinfachte repräsentative Objekte

Eine gängige Lösung besteht darin, vereinfachte, unsichtbare Objekte über die Objekte in Ihrer Szene zu legen. Diese Objekte dienen dann als Stellvertreter: Wenn Sie beispielsweise ein mehr oder weniger rechteckiges Objekt haben, verwenden Sie ein Rechteck als Ersatz für das Objekt beim Durchführen der Treffererkennung. Ebenso, wenn ein Objekt im Wesentlichen rund ist, verwenden Sie den Radius des kleinsten umschließenden Kreises, um ein Kollisions-Testobjekt zu erstellen.

## Hit-Testing der realen Welt

Die Abkürzung "LIDAR" hat je nach der spezifischen Implementierung mehrere Definitionen, doch das Endergebnis ist dasselbe. Am häufigsten bezieht es sich auf "_Laser Imaging, Detection, And Ranging_" oder "_Light Detection and Ranging_".

Das Testen auf Kollisionen mit der realen Welt ist ein anderes Problem, das möglicherweise nicht nur die Interpretation der Bildgebung von der Kamera des Geräts (falls verfügbar), sondern auch potenziell mehrere zusätzliche Sensoren erfordert. Einige Geräte verfügen über Infrarotsensoren zur besseren Entfernungsbestimmung von Objekten, und andere bieten leistungsstarke [LIDAR](https://en.wikipedia.org/wiki/LIDAR)-Systeme, die Laser (in der Regel Infrarotlaser, die mit dem menschlichen Auge nicht sichtbar sind) verwenden, um die Entfernung zu Objekten in der Welt zu bestimmen.

Die Details zur Arbeit mit dem Distanzsystem einer bestimmten Plattform liegen außerhalb des Umfangs dieses Artikels. Es gibt jedoch Hoffnung: Ein Vorschlag wurde gemacht, ein WebXR Hit Test Module zu entwickeln, das über WebXR liegt, um eine API zur Durchführung von Treffererkennung und Kollisionsdetektion bereitzustellen.

## Siehe auch

- [3D-Kollisionsdetektion](/de/docs/Games/Techniques/3D_collision_detection)
- [HTML5-Spiele: 3D-Kollisionsdetektion](https://hacks.mozilla.org/2015/10/html-5-games-3d-collision-detection/) (Hacks-Blog)
