---
title: "RTCIceCandidate: Eigenschaft priority"
short-title: priority
slug: Web/API/RTCIceCandidate/priority
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`priority`**-Eigenschaft der **{{domxref("RTCIceCandidate")}}**-Schnittstelle gibt die Priorität des Kandidaten gemäß dem entfernten Teilnehmer an; je höher dieser Wert ist, desto besser wird der Kandidat vom entfernten Teilnehmer eingeschätzt.

Der Wert des `priority`-Feldes wird aus dem `candidateInfo` Optionsobjekt genommen, das an den {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}-Konstruktor übergeben wird. Sie können den Wert von `priority` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch von der `candidate`-a-line des Objekts extrahiert, wenn sie richtig formatiert ist.

## Wert

Ein langer, vorzeichenloser Ganzzahlwert, der die Priorität des Kandidaten gemäß dem entfernten Teilnehmer angibt. Je größer dieser Wert ist, desto bevorzugter wird dieser Kandidat vom entfernten Teilnehmer betrachtet.

`priority` wird auf `null` initialisiert, wenn es im `candidate` nicht angegeben ist oder wenn die `candidate`-Zeichenkette nicht korrekt geparst werden kann.

> [!NOTE]
> Wenn `priority` `null` ist, schlägt das Übergeben des
> Kandidaten an {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
> fehl und eine `OperationError`-Ausnahme wird ausgelöst. Dies gilt nur, wenn der
> Kandidat die `priority`-Eigenschaft implementiert.

## Anmerkungen zur Verwendung

Betrachten Sie diese {{Glossary("SDP")}}-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Die Priorität ist die Zahl nach dem Protokoll, also das vierte Feld in der Kandidatenzeichenkette. In diesem Beispiel ist die Priorität 2043278322.

## Beispiele

Dieser Kandidat prüft die `priority` des Kandidaten und merkt sich den Kandidaten für die spätere Verwendung, falls er höher ist als die Priorität eines zuvor gesehenen Kandidaten.

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
