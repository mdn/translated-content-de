---
title: "RTCErrorEvent: error-Eigenschaft"
short-title: Fehler
slug: Web/API/RTCErrorEvent/error
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`error`** des {{domxref("RTCErrorEvent")}} enthält ein {{domxref("RTCError")}}-Objekt, das die Details des Fehlers beschreibt, den das Ereignis ankündigt.

## Wert

Ein {{domxref("RTCError")}}-Objekt, dessen Eigenschaften Details über den aufgetretenen Fehler im Kontext einer {{Glossary("WebRTC")}}-Operation bereitstellen.

## Beispiele

In diesem Beispiel wird ein Handler für das {{domxref("RTCDataChannel")}}'s {{domxref("RTCDataChannel.error_event", "error")}}-Ereignis eingerichtet.

```js
dataChannel.addEventListener("error", (event) => {
  let error = event.error;

  if (error.errorDetail === "sdp-syntax-error") {
    let errLine = error.sdpLineNumber;
    let errMessage = error.message;

    let alertMessage = `A syntax error occurred interpreting line ${errLine} of the SDP: ${errMessage}`;
    showMyAlertMessage("Data Channel Error", alertMessage);
  } else {
    terminateMyConnection();
  }
});
```

Wenn der Fehler ein SDP-Syntaxfehler ist—angezeigt durch seine {{domxref("RTCError.errorDetail", "errorDetail")}}-Eigenschaft als `sdp-syntax-error`—, wird eine Nachrichtenzeichenfolge erstellt, um die Fehlermeldung und die Zeilennummer innerhalb des SDP anzuzeigen, in der der Fehler aufgetreten ist. Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, die für den verwendeten Ausgabemechanismus steht.

Andere Fehler werden als tödlich behandelt und verursachen das Aufrufen einer `terminateMyConnection()`-Funktion.

Im obigen Beispiel wird {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwendet, um den Handler für `error`-Ereignisse hinzuzufügen. Sie können auch die {{domxref("RTCDataChannel.error_event", "onerror")}} Ereignis-Handler-Eigenschaft des `RTCDataChannel` Objekts verwenden, so:

```js
dataChannel.onerror = (event) => {
  let error = event.error;

  /* und so weiter */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
