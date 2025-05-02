---
title: "RTCPeerConnection: icegatheringstatechange Ereignis"
short-title: icegatheringstatechange
slug: Web/API/RTCPeerConnection/icegatheringstatechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Das **`icegatheringstatechange`** Ereignis wird an den `onicegatheringstatechange` Ereignis-Handler eines [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Zustand des {{Glossary("ICE", "ICE")}} Kandidaten-Sammlungsprozesses ändert. Dies bedeutet, dass sich der Wert der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) Eigenschaft der Verbindung geändert hat.

Wenn ICE beginnt, Verbindungskandidaten zu sammeln, ändert sich der Wert von `new` zu `gathering`, um anzuzeigen, dass der Prozess der Sammlung von Kandidatenkonfigurationen für die Verbindung begonnen hat. Wenn sich der Wert zu `complete` ändert, haben alle Transporte, die das `RTCPeerConnection` ausmachen, die Sammlung der ICE-Kandidaten abgeschlossen.

> [!NOTE]
> Während Sie feststellen können, dass die ICE-Kandidaten-Sammlung durch das Beobachten von `icegatheringstatechange` Ereignissen abgeschlossen ist und überprüfen, ob der Wert der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) `complete` wird, können Sie auch Ihren Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis verwenden, um zu sehen, ob seine [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) Eigenschaft `null` ist. Dies zeigt ebenfalls an, dass die Sammlung der Kandidaten abgeschlossen ist.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
- [Signaling und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
