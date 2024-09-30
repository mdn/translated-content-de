---
title: "RTCIceTransport: getSelectedCandidatePair() Methode"
short-title: getSelectedCandidatePair()
slug: Web/API/RTCIceTransport/getSelectedCandidatePair
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`getSelectedCandidatePair()`**-Methode der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt zurück, das das aktuell beste ICE-Kandidatenpaar beschreibt, welches die Konfiguration der Endpunkte des Transports darstellt.

## Syntax

```js-nolint
getSelectedCandidatePair()
```

### Parameter

Keine.

### Rückgabewert

Ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt, das die Konfigurationen der aktuell ausgewählten Endpunkte des Kandidatenpaares beschreibt.
[`local`](/de/docs/Web/API/RTCIceCandidatePair/local) beschreibt die Konfiguration des lokalen Endes der Verbindung, während [`remote`](/de/docs/Web/API/RTCIceCandidatePair/remote) die Konfiguration des entfernten Peers beschreibt.

Der Rückgabewert ist `null`, wenn noch kein Kandidatenpaar ausgewählt wurde.

## Verwendungshinweise

Während der ICE-Agent die Verhandlung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durchführt, sammelt und analysiert er Kandidatenkonfigurationen von beiden Peers. Sobald ein akzeptables übereinstimmendes Kandidatenpaar gefunden wird, das die Anforderungen für die Verbindung erfüllt, wird ein [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) Ereignis beim [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ausgelöst. Von diesem Zeitpunkt an ist das am besten passende Kandidatenpaar immer verfügbar, indem `getSelectedCandidatePair()` aufgerufen wird.

Wenn die ICE-Verhandlung fortgesetzt wird und ein Kandidatenpaar entdeckt wird, das besser ist als das derzeit ausgewählte, wird das neue Paar ausgewählt, das vorherige Paar wird ersetzt, und das `selectedcandidatepairchange` Ereignis wird erneut ausgelöst.

> [!NOTE]
> Es ist möglich, dass eine der Konfigurationen im ausgewählten Kandidatenpaar unverändert bleibt, wenn eine neue Paarung gewählt wird.

## Beispiele

Siehe [`RTCIceTransport.onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
