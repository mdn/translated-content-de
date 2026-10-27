---
title: "RTCPeerConnection: icegatheringstatechange-Ereignis"
short-title: icegatheringstatechange
slug: Web/API/RTCPeerConnection/icegatheringstatechange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Das **`icegatheringstatechange`**-Ereignis wird an den Event-Handler `onicegatheringstatechange` einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Zustand der Erfassung von {{Glossary("ICE", "ICE")}}-Kandidaten ändert. Das bedeutet, dass sich der Wert der Eigenschaft [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) der Verbindung geändert hat.

Wenn ICE mit der Erfassung von Verbindungskandidaten beginnt, ändert sich der Wert von `new` zu `gathering`. Dies zeigt an, dass die Erfassung möglicher Konfigurationen für die Verbindung begonnen hat. Wenn sich der Wert zu `complete` ändert, haben alle Transports der `RTCPeerConnection` die Erfassung von ICE-Kandidaten abgeschlossen.

> [!NOTE]
> Sie können feststellen, dass die Erfassung von ICE-Kandidaten abgeschlossen ist, indem Sie auf `icegatheringstatechange`-Ereignisse achten und prüfen, ob der Wert von [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) zu `complete` wechselt. Alternativ können Sie im Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis prüfen, ob dessen Eigenschaft [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) `null` ist. Auch dies zeigt an, dass die Erfassung von Kandidaten abgeschlossen ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("icegatheringstatechange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onicegatheringstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel erstellt mithilfe der Eigenschaft `onicegatheringstatechange` einen Handler für `icegatheringstatechange`-Ereignisse. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onicegatheringstatechange` hinzugefügte Event-Listener ersetzt werden.

```js
pc.onicegatheringstatechange = (ev) => {
  let connection = ev.target;

  switch (connection.iceGatheringState) {
    case "gathering":
      /* collection of candidates has begun */
      break;
    case "complete":
      /* collection of candidates is finished */
      break;
  }
};
```

Ebenso können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Listener für `icegatheringstatechange`-Ereignisse hinzufügen:

```js
pc.addEventListener("icegatheringstatechange", (ev) => {
  let connection = ev.target;

  switch (connection.iceGatheringState) {
    case "gathering":
      // collection of candidates has begun
      break;
    case "complete":
      // collection of candidates is finished
      break;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
