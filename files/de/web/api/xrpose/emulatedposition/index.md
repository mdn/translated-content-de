---
title: "XRPose: emulatedPosition-Eigenschaft"
short-title: emulatedPosition
slug: Web/API/XRPose/emulatedPosition
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef}}{{SecureContext_Header}}

Das schreibgeschützte Attribut `emulatedPosition` der {{DOMxRef("XRPose")}}-Schnittstelle ist ein boolescher Wert, der angibt, ob die {{domxref("XRRigidTransform.position", "Position")}}-Komponente der Pose {{domxref("XRPose.transform", "Transform")}} direkt vom XR-Gerät übernommen oder simuliert oder auf der Grundlage anderer Quellen berechnet wird.

## Wert

Ein Boolean, der `true` ist, wenn die Position der Pose auf Schätzungen basiert oder von anderen Quellen als direkten Sensordaten abgeleitet wird. Wenn die Position präzise auf direkten Sensor-Eingaben basiert, ist der Wert `false`.

## Anwendungshinweise

Es gibt zwei grundlegende Kategorien von XR-Tracking-Systemen. Ein einfaches XR-Headset bietet drei Freiheitsgrade (3DoF) und verfolgt die Neigung, Gierung und Rollbewegung des Kopfes des Benutzers. Es sind keine Informationen über Vorwärts-, Rückwärts- oder Seitwärtsbewegungen verfügbar. Solche Daten werden aus anderen Quellen wie Tastatur- oder Mauseingaben oder Spielecontrollern entnommen. Daher wird die Position als emuliert angesehen, und die `emulatedPosition`-Eigenschaft ist `true`.

Im Gegensatz dazu benötigen XR-Geräte, die Vorwärts- und Rückwärtsbewegungen sowie seitliche Bewegungen verfolgen können—sechs Freiheitsgrad (6DoF) Geräte—keine Informationen aus anderen Quellen, um die Position des Benutzers zu bestimmen, sodass der Wert von `emulatedPosition` `false` ist.

Dieselbe Vorstellung gilt nicht nur für den Kopf des Benutzers, sondern für jedes Objekt. Ein Handcontroller, der seine Position direkt melden kann, würde ebenfalls einen Wert von `false` für diese Eigenschaft haben. Wenn seine Position als Versatz von einem anderen Objekt berechnet wird (zum Beispiel durch die Modellierung des Körpers des Benutzers), dann ist dieser Wert `true`.

Diese Information ist wichtig, da bei Geräten, deren Position emuliert wird, die Möglichkeit besteht, dass ihr Offset im Laufe der Zeit relativ zum realen Raum driftet. Dies liegt daran, dass die Emulation einer Position auf Basis von Beschleunigungsmessereingaben und Modellen dazu tendiert, kleinere Fehler einzuführen, die sich im Laufe der Zeit summieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
