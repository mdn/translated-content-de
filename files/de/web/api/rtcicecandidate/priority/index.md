---
title: "RTCIceCandidate: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCIceCandidate/priority
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`priority`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces gibt die Priorität des Kandidaten gemäß dem entfernten Peer an; je höher dieser Wert ist, desto besser bewertet der entfernte Peer den Kandidaten.

Der Wert des `priority`-Feldes wird aus dem `candidateInfo`-Optionsobjekt übernommen, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `priority` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-line des Objekts extrahiert, wenn diese richtig formatiert ist.

## Wert

Ein langer, nicht signierter ganzzahliger Wert, der die Priorität des Kandidaten gemäß dem entfernten Peer angibt. Je größer dieser Wert ist, desto bevorzugter wird dieser Kandidat vom entfernten Peer betrachtet.

`priority` wird auf `null` gesetzt, wenn es im `candidate` nicht angegeben ist oder wenn die `candidate`-Zeichenkette nicht richtig geparst werden kann.

> [!NOTE]
> Wenn `priority` `null` ist, schlägt das Übergeben des
> Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
> fehl und löst eine `OperationError`-Ausnahme aus. Dies gilt nur, wenn der
> Kandidat die `priority`-Eigenschaft implementiert.

## Anwendungshinweise

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Die Priorität ist die Zahl nach dem Protokoll, somit ist es das vierte Feld in der Kandidatenzeichenkette.
In diesem Beispiel beträgt die Priorität 2043278322.

## Beispiele

Dieser Kandidat überprüft die `priority` des Kandidaten und, falls sie größer
ist als die Priorität eines zuvor gesehenen Kandidaten, merkt er sich den Kandidaten zur späteren Verwendung.

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
