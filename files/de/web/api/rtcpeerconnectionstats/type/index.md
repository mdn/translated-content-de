---
title: "RTCPeerConnectionStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCPeerConnectionStats/type
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCPeerConnectionStats")}}-Wörterbuchs ist ein Zeichenkette mit dem Wert `"peer-connection"`.

Verschiedene Statistiken werden durch Iteration des {{domxref("RTCStatsReport")}}-Objekts, das durch einen Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, erhalten. Der Typ gibt die Gruppe von Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt zur Verfügung stehen. Ein Wert von `"peer-connection"` zeigt an, dass die Statistiken, die im aktuellen Schritt zur Verfügung stehen, diejenigen sind, die in {{domxref("RTCPeerConnectionStats")}} definiert sind.

## Wert

Eine Zeichenkette mit dem Wert `"peer-connection"`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
