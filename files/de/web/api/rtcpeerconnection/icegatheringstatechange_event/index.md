---
title: "RTCPeerConnection: icegatheringstatechange Ereignis"
short-title: icegatheringstatechange
slug: Web/API/RTCPeerConnection/icegatheringstatechange_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`icegatheringstatechange`** Ereignis wird an den `onicegatheringstatechange` Ereignishandler eines [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Status des [ICE](/de/docs/Glossary/ICE) Kandidatensammlungsprozesses ändert. Dies bedeutet, dass sich der Wert der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) Eigenschaft der Verbindung geändert hat.

Wenn ICE erstmals beginnt, Verbindungskandidaten zu sammeln, ändert sich der Wert von `new` auf `gathering`, um anzuzeigen, dass der Prozess des Sammelns von Konfigurationskandidaten für die Verbindung begonnen hat. Wenn sich der Wert in `complete` ändert, haben alle Transporte, die das `RTCPeerConnection` bilden, das Sammeln von ICE-Kandidaten abgeschlossen.

> [!NOTE]
> Obwohl Sie feststellen können, dass das Sammeln von ICE-Kandidaten abgeschlossen ist, indem Sie auf `icegatheringstatechange` Ereignisse achten und überprüfen, ob der Wert von [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) `complete` wird, kann Ihr Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis auch überprüfen, ob dessen [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) Eigenschaft `null` ist. Dies zeigt ebenfalls an, dass das Sammeln von Kandidaten abgeschlossen ist.

Dieses Ereignis kann nicht abgebrochen werden und es steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("icegatheringstatechange", (event) => {});

onicegatheringstatechange = (event) => {};
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
pc.addEventListener(
  "icegatheringstatechange",
  (ev) => {
    let connection = ev.target;

    switch (connection.iceGatheringState) {
      case "gathering":
        // collection of candidates has begun
        break;
      case "complete":
        // collection of candidates is finished
        break;
    }
  },
  false,
);
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
