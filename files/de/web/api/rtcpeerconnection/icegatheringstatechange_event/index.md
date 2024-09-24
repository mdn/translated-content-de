---
title: "RTCPeerConnection: icegatheringstatechange-Ereignis"
short-title: icegatheringstatechange
slug: Web/API/RTCPeerConnection/icegatheringstatechange_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Das **`icegatheringstatechange`** Ereignis wird an den `onicegatheringstatechange` Ereignishandler auf einem {{domxref("RTCPeerConnection")}} gesendet, wenn sich der Zustand des {{Glossary("ICE")}}-Kandidatensammelprozesses ändert.
Dies bedeutet, dass sich der Wert der {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} Eigenschaft der Verbindung geändert hat.

Wenn ICE beginnt, Verbindungskandidaten zu sammeln, ändert sich der Wert von `new` zu `gathering`, um anzuzeigen, dass der Prozess des Sammelns von Kandidatenkonfigurationen für die Verbindung begonnen hat. Wenn sich der Wert zu `complete` ändert, haben alle Transporte, die das `RTCPeerConnection` ausmachen, das Sammeln von ICE-Kandidaten abgeschlossen.

> [!NOTE]
> Während Sie bestimmen können, dass das Sammeln von ICE-Kandidaten abgeschlossen ist, indem Sie auf `icegatheringstatechange` Ereignisse achten und den Wert von {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} daraufhin überprüfen, ob er `complete` wird, kann Ihr Handler auch das {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} Ereignis überwachen und prüfen, ob die {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} Eigenschaft `null` ist. Dies zeigt ebenfalls an, dass das Sammeln von Kandidaten beendet ist.

Dieses Ereignis ist nicht stornierbar und bläst sich nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("icegatheringstatechange", (event) => {});

onicegatheringstatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

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

Ebenso können Sie {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden, um einen Listener für `icegatheringstatechange` Ereignisse hinzuzufügen:

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
- [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
