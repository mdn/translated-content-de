---
title: "RTCErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/RTCErrorEvent/error
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die schreibgeschützte [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent)-Eigenschaft **`error`** enthält ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das die Details des Fehlers beschreibt, den das Ereignis ankündigt.

## Wert

Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, dessen Eigenschaften Details über den aufgetretenen Fehler im Kontext einer [WebRTC](/de/docs/Glossary/WebRTC)-Operation bereitstellen.

## Beispiele

In diesem Beispiel wird ein Handler für das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-[`error`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis eingerichtet.

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

Wenn der Fehler ein SDP-Syntaxfehler ist—angezeigt durch die [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft, die `sdp-syntax-error` ist—, wird eine Nachrichtenzeichenfolge erstellt, um die Fehlermeldung und die Zeilennummer innerhalb des SDP anzuzeigen, an der der Fehler aufgetreten ist. Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, die für welchen Output-Mechanismus auch immer dieser Code verwendet wird, steht.

Jeder andere Fehler wird als endgültig behandelt, was das Aufrufen einer `terminateMyConnection()`-Funktion zur Folge hat.

Das obige Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um den Handler für `error`-Ereignisse hinzuzufügen. Sie können auch die `RTCDataChannel`-Objekt-[`onerror`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignishandlereigenschaft verwenden, wie folgt:

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
