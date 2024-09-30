---
title: Targeting und Treffererkennung
slug: Web/API/WebXR_Device_API/Targeting
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

## Treffererkennung von virtuellen Objekten

Die Erkennung von Kollisionen mit virtuellen Objekten beinhaltet normalerweise nicht den Test auf Überschneidung des Strahls mit einem der Polygone der Szene. Eine typische Szene kann Hunderte oder Tausende von Polygonen haben, was das direkte Verfolgen von Strahlen zu Polygonen in den meisten Fällen unpraktisch macht. Stattdessen finden die meisten Anwendungen einen Weg, ihre Algorithmen zur Treffererkennung zu vereinfachen.

Es ist möglich – oder sogar wahrscheinlich –, dass die von Ihnen verwendete 3D-Grafik-Engine eine Treffererkennung bietet, insbesondere wenn sie speziell für die Spieleentwicklung konzipiert ist.

### Vereinfachte Repräsentationsobjekte

Eine häufige Lösung besteht darin, über den Objekten in Ihrer Szene vereinfachte, unsichtbare Objekte zu überlagern. Diese Objekte dienen dann als Stellvertreter. Beispielsweise, wenn Sie ein mehr oder weniger rechteckiges Objekt haben, verwenden Sie ein Rechteck als Ersatz für das Objekt bei der Durchführung der Treffererkennung. Ebenso, wenn ein Objekt im Wesentlichen rund ist, verwenden Sie den Radius des minimal umschließenden Kreises, um ein Kollisionsprüfungsobjekt zu etablieren.

## Treffererkennung in der realen Welt

Das Akronym "LIDAR" hat je nach Implementierungsdetails mehrere Definitionen, aber das Endergebnis ist dasselbe. Meistens steht es für "_Laser Imaging, Detection, And Ranging_" oder "_LIght Detection and Ranging_").

Die Erkennung von Kollisionen in der realen Welt stellt ein anderes Problem dar, das nicht nur die Auswertung von Bildern der Kamera des Geräts (sofern verfügbar) umfassen kann, sondern auch möglicherweise mehrere zusätzliche Sensoren. Einige Geräte enthalten Infrarotsensoren, um Objekte zu vermessen, und andere bieten leistungsstarke [LIDAR](https://en.wikipedia.org/wiki/LIDAR)-Systeme, die Laser (normalerweise Infrarotlaser, die vom menschlichen Auge nicht gesehen werden können) verwenden, um die Entfernung zu Objekten in der Welt zu bestimmen.

Die Details zur Verwendung des Messeystems einer bestimmten Plattform liegen außerhalb des Rahmens dieses Artikels. Es gibt jedoch Hoffnung: Ein Vorschlag für ein WebXR Hit Test Module wurde vorgebracht, das auf WebXR aufsetzen würde, um eine API zur Durchführung von Treffererkennung und Kollisionsdetektion bereitzustellen.

## Siehe auch

- [3D-Kollisionsdetektion](/de/docs/Games/Techniques/3D_collision_detection)
- [HTML5-Spiele: 3D-Kollisionsdetektion](https://hacks.mozilla.org/2015/10/html-5-games-3d-collision-detection/) (Hacks-Blog)
