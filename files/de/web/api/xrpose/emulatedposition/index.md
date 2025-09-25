---
title: "XRPose: emulatedPosition-Eigenschaft"
short-title: emulatedPosition
slug: Web/API/XRPose/emulatedPosition
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das schreibgeschützte Attribut `emulatedPosition` des [`XRPose`](/de/docs/Web/API/XRPose)-Interfaces ist ein Boolean-Wert, der anzeigt, ob die [`position`](/de/docs/Web/API/XRRigidTransform/position)-Komponente des Poses [`transform`](/de/docs/Web/API/XRPose/transform) direkt vom XR-Gerät stammt oder ob sie simuliert oder auf Basis anderer Quellen berechnet wird.

## Wert

Ein Boolean, der `true` ist, wenn die Position des Poses auf Schätzungen basiert oder aus Quellen außer direkten Sensordaten abgeleitet ist. Wenn die Position genau auf direkten Sensor-Eingaben basiert, ist der Wert `false`.

## Verwendungshinweise

Es gibt zwei grundlegende Kategorien von XR-Tracking-Systemen. Ein grundlegendes XR-Headset bietet drei Freiheitsgrade (3DoF), bei dem die Neigung, der Gierwinkel und die Drehung des Kopfes des Nutzers erfasst werden. Es sind keine Informationen über Bewegungen nach vorne, hinten oder zu den Seiten verfügbar. Solche Daten werden von anderen Quellen wie Tastatur- oder Mauseingaben oder Spielsteuerungen bezogen. Daher wird die Position als emuliert betrachtet, und die `emulatedPosition`-Eigenschaft ist `true`.

Im Gegensatz dazu benötigen XR-Geräte, die auch vorwärts und rückwärts sowie seitwärts Bewegungen verfolgen können—also Geräte mit sechs Freiheitsgraden (6DoF)—keine Informationen aus anderen Quellen, um die Position des Nutzers zu bestimmen, daher ist der Wert von `emulatedPosition` `false`.

Dieselbe Vorstellung gilt nicht nur für den Kopf des Nutzers, sondern auch für jedes andere Objekt. Ein Hand-Controller, der seine Position direkt melden kann, hätte den Wert `false` für diese Eigenschaft. Wenn seine Position als Versatz von einem anderen Objekt berechnet wird (zum Beispiel indem sie auf dem Modell basiert, das den Körper des Nutzers darstellt), dann ist dieser Wert `true`.

Diese Information ist wichtig, da Geräte, deren Position emuliert ist, dazu neigen, dass ihr Versatz im Verhältnis zum realen Raum im Laufe der Zeit driftet. Dies geschieht, weil das Emulieren einer Position basierend auf Beschleunigungssensoreingaben und Modellen dazu neigt, kleinere Fehler einzuführen, die sich im Laufe der Zeit anhäufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
