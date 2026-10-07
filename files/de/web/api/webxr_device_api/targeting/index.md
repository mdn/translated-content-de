---
title: Zielerfassung und Treffererkennung
slug: Web/API/WebXR_Device_API/Targeting
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("WebXR Device API")}}

## Trefferprüfung bei virtuellen Objekten

Bei der Erkennung von Kollisionen mit virtuellen Objekten wird üblicherweise nicht tatsächlich geprüft, ob ein Strahl eines der Polygone der Szene schneidet. Eine typische Szene kann Hunderte oder Tausende von Polygonen enthalten, sodass die direkte Prüfung von Strahlen gegen Polygone in den meisten Fällen unpraktikabel ist. Stattdessen suchen die meisten Anwendungen nach einer Möglichkeit, ihre Algorithmen zur Trefferprüfung zu vereinfachen.

Es ist möglich – oder sogar wahrscheinlich –, dass die von Ihnen verwendete 3D-Grafik-Engine eine Trefferprüfung bietet, insbesondere wenn sie speziell für die Spieleentwicklung konzipiert wurde.

### Vereinfachte Stellvertreterobjekte

Eine gängige Lösung besteht darin, vereinfachte, unsichtbare Objekte über die Objekte Ihrer Szene zu legen. Diese dienen dann als Stellvertreter bei der Trefferprüfung. Wenn Sie beispielsweise ein annähernd rechteckiges Objekt haben, verwenden Sie bei der Trefferprüfung ein Rechteck als Stellvertreter. Ist ein Objekt im Wesentlichen rund, verwenden Sie entsprechend den Radius des kleinsten umschließenden Kreises, um ein Objekt für die Kollisionsprüfung festzulegen.

## Trefferprüfung in der realen Welt

Das Akronym „LIDAR“ hat je nach Art der Implementierung mehrere Bedeutungen, bezeichnet im Ergebnis aber dasselbe. Am häufigsten steht es für „_Laser Imaging, Detection, And Ranging_“ oder „_LIght Detection and Ranging_“.

Die Prüfung auf Kollisionen mit der realen Welt ist eine andere Herausforderung. Dabei müssen möglicherweise nicht nur die Bilder der Gerätekamera (sofern vorhanden) ausgewertet werden, sondern auch Daten mehrerer zusätzlicher Sensoren. Manche Geräte verfügen über Infrarotsensoren zur Entfernungsmessung, andere über leistungsfähige [LIDAR](https://en.wikipedia.org/wiki/LIDAR)-Systeme. Diese verwenden Laser – meist Infrarotlaser, die für das menschliche Auge unsichtbar sind –, um die Entfernung zu Objekten in der Umgebung zu bestimmen.

Wie Sie mit dem Entfernungsmesssystem einer bestimmten Plattform arbeiten, geht über den Rahmen dieses Artikels hinaus. Es gibt jedoch einen vielversprechenden Vorschlag für ein WebXR Hit Test Module, das auf WebXR aufbauen und eine API für die Trefferprüfung und Kollisionserkennung bereitstellen würde.

## Siehe auch

- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [HTML5-Spiele: 3D-Kollisionserkennung](https://hacks.mozilla.org/2015/10/html-5-games-3d-collision-detection/) (Hacks-Blog)
