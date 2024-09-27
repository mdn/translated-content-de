---
title: "RTCIceCandidate: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCIceCandidate/priority
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`priority`**-Eigenschaft der **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Schnittstelle gibt die Priorität des Kandidaten gemäß dem entfernten Peer an. Je höher dieser Wert ist, desto besser wird der Kandidat vom entfernten Peer betrachtet.

Der Wert des `priority`-Felds wird aus dem Optionsobjekt `candidateInfo` gesetzt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `priority` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-Zeile des Objekts extrahiert, sofern sie richtig formatiert ist.

## Wert

Ein langer, vorzeichenloser Ganzzahlwert, der die Priorität des Kandidaten gemäß dem entfernten Peer angibt. Je größer dieser Wert ist, desto bevorzugter wird dieser Kandidat vom entfernten Peer betrachtet.

`priority` wird auf `null` initialisiert, wenn es im `candidate` nicht spezifiziert ist oder wenn die `candidate`-Zeichenfolge nicht richtig geparst werden kann.

> [!NOTE]
> Wenn `priority` `null` ist, schlägt die Übergabe des
> Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
> fehl und löst eine `OperationError`-Ausnahme aus. Dies gilt nur, wenn der
> Kandidat die `priority`-Eigenschaft implementiert.

## Verwendungshinweise

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Die Priorität ist die Zahl nach dem Protokoll, also das vierte Feld in der Kandidaten-Zeichenfolge.
In diesem Beispiel ist die Priorität 2043278322.

## Beispiele

Dieser Kandidat prüft die `priority` des Kandidaten und merkt sich den Kandidaten zur späteren Verwendung, wenn diese größer als die Priorität eines zuvor gesehenen Kandidaten ist.

```js
let bestCandidate = {
  candidate: "",
  sdpMid: null,
  sdpMLineIndex: null,
  priority: 0,
};

function handleCandidate(candidateString) {
  const candidate = new RTCIceCandidate(candidateString);

  if (candidate.priority > bestCandidate.priority) {
    bestCandidate = candidate;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
