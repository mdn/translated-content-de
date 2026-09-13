---
title: "RTCErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/RTCErrorEvent/error
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`error`**-Schreibgeschützte Eigenschaft des [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent)-Interfaces enthält ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das die WebRTC-spezifischen Details des Fehlers beschreibt.

## Wert

Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird ein Handler für das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-`error`-Ereignis eingerichtet.

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

Wenn der Fehler ein SDP-Syntaxfehler ist — angezeigt durch die [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft, die den Wert `sdp-syntax-error` besitzt —, wird eine Nachrichtenzeichenfolge konstruiert, um die Fehlermeldung und die SDP-Nachrichtenzeilennummer, in der der Fehler aufgetreten ist, darzustellen. Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, die als Platzhalter für den jeweiligen Ausgabemechanismus dient, den dieser Code verwenden könnte.

Jeder andere Fehler wird als terminal behandelt und führt dazu, dass eine Funktion `terminateMyConnection()` aufgerufen wird.

Das obige Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um den Handler für `error`-Ereignisse hinzuzufügen. Sie können auch die `onerror`-Ereignishandler-Eigenschaft des `RTCDataChannel`-Objekts verwenden, so:

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
