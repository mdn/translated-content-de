---
title: "XRPose: emulatedPosition-Eigenschaft"
short-title: emulatedPosition
slug: Web/API/XRPose/emulatedPosition
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef}}{{SecureContext_Header}}

Das `emulatedPosition` schreibgeschützte Attribut der
[`XRPose`](/de/docs/Web/API/XRPose) Schnittstelle ist ein Boolescher Wert, der angibt, ob die
[`position`](/de/docs/Web/API/XRRigidTransform/position) Komponente des Posen
[`transform`](/de/docs/Web/API/XRPose/transform) direkt vom XR-Gerät übernommen wird oder
ob sie simuliert oder basierend auf anderen Quellen berechnet wird.

## Wert

Ein Boolescher Wert, der `true` ist, wenn die Position der Pose basierend auf
Schätzungen berechnet oder von anderen als direkten Sensordaten abgeleitet wird. Wenn die Position
präzise auf direkten Sensor-Eingaben basiert, ist der Wert `false`.

## Nutzungshinweise

Es gibt zwei grundlegende Kategorien von XR-Trackingsystemen. Ein einfaches XR-Headset bietet
drei Freiheitsgrade (3DoF), indem es die Neigung, Gierung und Rollbewegung des Kopfes des Benutzers verfolgt.
Es sind keine Informationen über Bewegungen vorwärts, rückwärts oder seitlich verfügbar. Solche
Daten stammen aus anderen Quellen, wie Tastatur- oder Mauseingaben oder Game-Controllern.
Daher gilt die Position als emuliert, sodass die `emulatedPosition`-
Eigenschaft `true` ist.

Im Gegensatz dazu erfordern XR-Geräte, die auch Bewegungen vorwärts und rückwärts sowie
seitlich verfolgen können—Sechs Freiheitsgrad (6DoF) Geräte—keine Informationen aus anderen
Quellen, um die Position des Benutzers zu bestimmen, sodass der Wert der `emulatedPosition`
`false` ist.

Dasselbe Konzept gilt nicht nur für den Kopf des Benutzers, sondern für jedes Objekt. Ein Hand-
Controller, der seine Position direkt melden kann, hätte ebenfalls den Wert
`false` für diese Eigenschaft. Wenn seine Position als Offset
von einem anderen Objekt berechnet wird (etwa basierend auf dem Modell des Körpers des Benutzers),
dann ist dieser Wert `true`.

Diese Information ist wichtig, weil Geräte, deren Position emuliert wird, dazu neigen,
dass ihr Offset im Laufe der Zeit relativ zur realen Welt driftet. Das liegt daran,
dass die Emulation einer Position auf Basis von Beschleunigungsmessereingaben und Modellen
dazu neigt, kleinere Fehler einzuführen, die sich über die Zeit aufaddieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
