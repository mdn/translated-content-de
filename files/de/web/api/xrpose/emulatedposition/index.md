---
title: "XRPose: emulatedPosition-Eigenschaft"
short-title: emulatedPosition
slug: Web/API/XRPose/emulatedPosition
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef}}{{SecureContext_Header}}

Das schreibgeschützte Attribut `emulatedPosition` der [`XRPose`](/de/docs/Web/API/XRPose) Schnittstelle ist ein boolescher Wert, der angibt, ob die [`position`](/de/docs/Web/API/XRRigidTransform/position)-Komponente der Pose's [`transform`](/de/docs/Web/API/XRPose/transform) direkt vom XR-Gerät bezogen wird oder ob sie simuliert oder basierend auf anderen Quellen berechnet wird.

## Wert

Ein Boolescher Wert, der `true` ist, wenn die Position der Pose basierend auf Schätzungen berechnet oder aus anderen Quellen als den direkten Sensordaten abgeleitet wird. Wenn die Position genau auf direkten Sensoreingaben basiert, ist der Wert `false`.

## Verwendungshinweise

Es gibt zwei grundlegende Kategorien von XR-Tracking-Systemen. Ein grundlegendes XR-Headset bietet drei Freiheitsgrade (3DoF), indem es die Neigung, die Gier und die Rollbewegungen des Kopfes des Benutzers verfolgt. Es liegen keine Informationen über Bewegungen nach vorne, hinten oder zu den Seiten vor. Solche Daten werden aus anderen Quellen wie Tastatur- oder Mauseingaben oder Game-Controllern entnommen. Daher wird die Position als emuliert betrachtet, und die `emulatedPosition`-Eigenschaft ist `true`.

Im Gegensatz dazu erfordern XR-Geräte, die auch Bewegungen nach vorne und hinten sowie seitlich verfolgen können—sechs Freiheitsgrade (6DoF) Geräte—keine Informationen aus anderen Quellen, um die Position des Benutzers zu bestimmen, sodass der Wert von `emulatedPosition` `false` ist.

Dieselbe Vorstellung gilt nicht nur für den Kopf des Benutzers, sondern für jedes Objekt. Ein Hand-Controller, der seine Position direkt melden kann, hätte für diese Eigenschaft ebenfalls den Wert `false`. Wenn seine Position als Offset von einem anderen Objekt berechnet wird (z.B. basierend auf dem Modell, das den Körper des Benutzers darstellt), dann ist dieser Wert `true`.

Diese Informationen sind wichtig, da Geräte, deren Position emuliert ist, dazu neigen, im Verlauf der Zeit relativ zum realen Raum abzuweichen. Dies liegt daran, dass die Emulation einer Position basierend auf Beschleunigungsmessereingaben und Modellen dazu neigt, kleinere Fehler zu erzeugen, die sich mit der Zeit addieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
