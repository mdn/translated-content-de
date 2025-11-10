---
title: "RTCPeerConnection: icegatheringstatechange Ereignis"
short-title: icegatheringstatechange
slug: Web/API/RTCPeerConnection/icegatheringstatechange_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Das **`icegatheringstatechange`** Ereignis wird an den `onicegatheringstatechange` Ereignishandler auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Zustand des {{Glossary("ICE", "ICE")}} Kandidatensammlungsprozesses ändert. Dies bedeutet, dass sich der Wert der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) Eigenschaft der Verbindung geändert hat.

Wenn ICE erstmals beginnt, Verbindungskandidaten zu sammeln, ändert sich der Wert von `new` zu `gathering`, um anzuzeigen, dass der Prozess des Sammelns von Konfigurationskandidaten für die Verbindung begonnen hat. Sobald der Wert zu `complete` wechselt, haben alle Transports, die die `RTCPeerConnection` ausmachen, die Sammlung von ICE-Kandidaten abgeschlossen.

> [!NOTE]
> Während Sie feststellen können, dass die Sammlung von ICE-Kandidaten abgeschlossen ist, indem Sie auf `icegatheringstatechange` Ereignisse achten und überprüfen, ob der Wert von [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) zu `complete` geworden ist, können Sie auch Ihren Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis so konfigurieren, dass er überprüft, ob seine [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) Eigenschaft `null` ist. Dies zeigt ebenfalls an, dass die Sammlung von Kandidaten abgeschlossen ist.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("icegatheringstatechange", (event) => { })

onicegatheringstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel erstellt einen Handler für `icegatheringstatechange` Ereignisse.

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

Ebenso können Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um einen Listener für `icegatheringstatechange` Ereignisse hinzuzufügen:

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

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
