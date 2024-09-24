---
title: "RTCIceTransport: getSelectedCandidatePair()-Methode"
short-title: getSelectedCandidatePair()
slug: Web/API/RTCIceTransport/getSelectedCandidatePair
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`getSelectedCandidatePair()`**-Methode der {{domxref("RTCIceTransport")}}-Schnittstelle gibt ein {{domxref("RTCIceCandidatePair")}}-Objekt zurück, das das aktuelle beste Paar von {{Glossary("ICE")}}-Kandidaten enthält, das die Konfiguration der Endpunkte des Transports beschreibt.

## Syntax

```js-nolint
getSelectedCandidatePair()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("RTCIceCandidatePair")}}-Objekt, das die Konfigurationen des derzeit ausgewählten Kandidatenpaares für die beiden Endpunkte beschreibt.
{{domxref("RTCIceCandidatePair.local", "local")}} beschreibt die Konfiguration des lokalen Endes der Verbindung, während {{domxref("RTCIceCandidatePair.remote", "remote")}} die Konfiguration des entfernten Peers beschreibt.

Der Rückgabewert ist `null`, wenn noch kein Kandidatenpaar ausgewählt wurde.

## Anwendungshinweise

Während der ICE-Agent die Aushandlung einer {{domxref("RTCPeerConnection")}} durchführt, sammelt und analysiert er Kandidatenkonfigurationen von den beiden Peers.
Sobald er ein akzeptables übereinstimmendes Paar von Kandidaten findet, das die Anforderungen für die Verbindung erfüllt, wird ein {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}-Ereignis auf der {{domxref("RTCIceTransport")}} ausgelöst.
Von diesem Zeitpunkt an wird das am besten passende Kandidatenpaar immer durch Aufrufen von `getSelectedCandidatePair()` verfügbar sein.

Während die ICE-Verhandlung fortgesetzt wird, wird jedes Mal, wenn ein Kandidatenpaar entdeckt wird, das besser ist als das derzeit ausgewählte Paar, das neue Paar ausgewählt, das vorherige Paar ersetzt und das `selectedcandidatepairchange`-Ereignis erneut ausgelöst.

> [!NOTE]
> Es ist möglich, dass eine der Konfigurationen im ausgewählten Kandidatenpaar unverändert bleibt, wenn ein neues Paar gewählt wird.

## Beispiele

Siehe [`RTCIceTransport.onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#examples) für ein Beispielcode.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
