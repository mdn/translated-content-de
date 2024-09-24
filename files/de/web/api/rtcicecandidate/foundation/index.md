---
title: "RTCIceCandidate: foundation-Eigenschaft"
short-title: foundation
slug: Web/API/RTCIceCandidate/foundation
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`foundation`**-Eigenschaft der **{{domxref("RTCIceCandidate")}}**-Schnittstelle ist eine Zeichenkette, die den Kandidaten eindeutig über mehrere Transporte hinweg identifiziert.

Die `foundation` kann daher verwendet werden, um Kandidaten zu korrelieren, die auf mehreren {{domxref("RTCIceTransport")}}-Objekten vorhanden sind.

## Wert

Eine Zeichenkette, die den Kandidaten eindeutig über alle `RTCIceTransport`s identifiziert, auf denen er verfügbar ist.

> [!NOTE]
> Wenn `port` `null` ist — und `port` vom {{Glossary("user agent")}} unterstützt wird — führt die Übergabe des Kandidaten an {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} zu einem Fehler und löst eine `OperationError`-Ausnahme aus.

## Nutzungshinweise

Betrachten Sie diese {{Glossary("SDP")}}-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das Feld `"4234997325"` ist die foundation.

## Beispiele

Dieses Codebeispiel verwendet die `foundation` von zwei Kandidaten, um festzustellen, ob es sich tatsächlich um denselben Kandidaten handelt.

```js
if (candidate1.foundation === candidate2.foundation) {
  /* die beiden Kandidaten sind gleich, auch wenn sie sich auf
     verschiedenen Transporten befinden */
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
