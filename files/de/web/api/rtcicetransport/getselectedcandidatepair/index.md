---
title: "RTCIceTransport: getSelectedCandidatePair()-Methode"
short-title: getSelectedCandidatePair()
slug: Web/API/RTCIceTransport/getSelectedCandidatePair
l10n:
  sourceCommit: 7dae8cc1bbde35982df7baaa495714f45a064913
---

{{APIRef("WebRTC")}}

Die **`getSelectedCandidatePair()`**-Methode der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt eine [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Instanz zurück, die das aktuell beste Paar von {{Glossary("ICE", "ICE")}}-Kandidaten enthält, welche die Konfiguration der Endpunkte des Transports beschreiben.

## Syntax

```js-nolint
getSelectedCandidatePair()
```

### Parameter

Keine.

### Rückgabewert

Eine [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Instanz, die die Konfigurationen des aktuell ausgewählten Kandidatenpaares der [`local`](/de/docs/Web/API/RTCIceCandidatePair/local) und [`remote`](/de/docs/Web/API/RTCIceCandidatePair/remote) Endpunkte beschreibt.

Der Rückgabewert ist `null`, wenn noch kein Kandidatenpaar ausgewählt wurde.

## Beschreibung

Während der ICE-Agent die Aushandlung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durchführt, sammelt und analysiert er Kandidatenkonfigurationen von jedem der beiden Peers.
Sobald er ein akzeptables übereinstimmendes Paar von Kandidaten findet, das die Anforderungen für die Verbindung erfüllt, wird ein [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)-Ereignis an der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ausgelöst.
Von diesem Zeitpunkt an kann das beste übereinstimmende Kandidatenpaar immer durch Aufrufen von `getSelectedCandidatePair()` abgerufen werden.

Während die ICE-Aushandlung weitergeht, wird jedes Mal, wenn ein Kandidatenpaar entdeckt wird, das besser ist als das aktuell ausgewählte Paar, das neue Paar ausgewählt, ersetzt das vorherige Paar und das `selectedcandidatepairchange`-Ereignis wird erneut ausgelöst.

> [!NOTE]
> Es ist möglich, dass eine der Konfigurationen im ausgewählten Kandidatenpaar unverändert bleibt, wenn ein neueres Paar gewählt wird.

## Beispiele

Siehe [`RTCIceTransport.onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
