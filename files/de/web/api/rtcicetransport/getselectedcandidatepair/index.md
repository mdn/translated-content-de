---
title: "RTCIceTransport: getSelectedCandidatePair() Methode"
short-title: getSelectedCandidatePair()
slug: Web/API/RTCIceTransport/getSelectedCandidatePair
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`getSelectedCandidatePair()`** Methode der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Schnittstelle gibt ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt zurück, das das aktuell beste Paar von [ICE](/de/docs/Glossary/ICE)-Kandidaten enthält, welches die Konfiguration der Endpunkte des Transports beschreibt.

## Syntax

```js-nolint
getSelectedCandidatePair()
```

### Parameter

Keine.

### Rückgabewert

Ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt, das die Konfigurationen der zwei Endpunkte des aktuell ausgewählten Kandidatenpaars beschreibt. [`local`](/de/docs/Web/API/RTCIceCandidatePair/local) beschreibt die Konfiguration des lokalen Endes der Verbindung, während [`remote`](/de/docs/Web/API/RTCIceCandidatePair/remote) die Konfiguration des entfernten Peers beschreibt.

Der Rückgabewert ist `null`, wenn noch kein Kandidatenpaar ausgewählt wurde.

## Nutzungshinweise

Während der ICE-Agent eine Verhandlung eines [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durchführt, sammelt und analysiert er Kandidatenkonfigurationen von jedem der beiden Peers. Sobald er ein akzeptables übereinstimmendes Paar von Kandidaten findet, welches die Anforderungen für die Verbindung erfüllt, wird ein [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) Ereignis bei dem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ausgelöst. Ab diesem Zeitpunkt wird das am besten passende Paar von Kandidaten immer durch Aufrufen von `getSelectedCandidatePair()` verfügbar sein.

Wenn die ICE-Verhandlung fortgesetzt wird, wird jedes Mal, wenn ein Kandidatenpaar entdeckt wird, das besser ist als das aktuell ausgewählte Paar, das neue Paar ausgewählt, das vorherige Paar wird ersetzt und das `selectedcandidatepairchange` Ereignis wird erneut ausgelöst.

> [!NOTE]
> Es ist möglich, dass eine der Konfigurationen im ausgewählten Kandidatenpaar unverändert bleibt, wenn ein neues Paar gewählt wird.

## Beispiele

Siehe [`RTCIceTransport.onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
