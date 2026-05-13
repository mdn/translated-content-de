---
title: "RTCErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/RTCErrorEvent/error
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

Die **`error`** schreibgeschützte Eigenschaft des [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent)-Interfaces enthält ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das die für {{Glossary("WebRTC", "WebRTC")}} spezifischen Details des Fehlers beschreibt.

## Wert

Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt.

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel wird ein Handler für ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)'s [`error`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis eingerichtet.

```js
dataChannel.addEventListener("error", (event) => {
  let error = event.error;

  if (error.errorDetail === "sdp-syntax-error") {
    const errLine = error.sdpLineNumber;
    const errMessage = error.message;

    const alertMessage = `A syntax error occurred interpreting line ${errLine} of the SDP: ${errMessage}`;
    showMyAlertMessage("Data Channel Error", alertMessage);
  } else {
    terminateMyConnection();
  }
});
```

Wenn der Fehler ein SDP-Syntaxfehler ist — angezeigt durch seine [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft, die den Wert `sdp-syntax-error` hat — wird eine Nachrichtenzeichenkette erstellt, um die Fehlermeldung und die SDP-Nachrichtenzeilennummer, bei der der Fehler aufgetreten ist, zu präsentieren. Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, die als Platzhalter für welchen Ausgabemechanismus auch immer dieser Code verwendet, fungiert.

Alle anderen Fehler werden als kritisch betrachtet, was dazu führt, dass eine `terminateMyConnection()`-Funktion aufgerufen wird.

Das obige Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um den Handler für `error`-Ereignisse hinzuzufügen. Sie können auch die [`onerror`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignishandler-Eigenschaft des `RTCDataChannel`-Objekts verwenden, so wie hier:

```js
dataChannel.onerror = (event) => {
  let error = event.error;

  /* and so forth */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
