---
title: RTCError
slug: Web/API/RTCError
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

Die **`RTCError`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) beschreibt einen Fehler, der bei der Verarbeitung von RTC-Operationen aufgetreten ist.
Sie basiert auf der Standard-[`DOMException`](/de/docs/Web/API/DOMException)-Schnittstelle, die allgemeine DOM-Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCError()`](/de/docs/Web/API/RTCError/RTCError)
  - : Erstellt und gibt eine neue `RTCError`-Objektinstanz zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`DOMException`](/de/docs/Web/API/DOMException)._

- [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert, der den WebRTC-spezifischen Fehlercode angibt, der den Typ des aufgetretenen Fehlers identifiziert.
- [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert) {{ReadOnlyInline}}
  - : Ein positiver Ganzzahlenwert, der den schwerwiegenden {{Glossary("DTLS", "DTLS")}}-Fehler angibt, der vom Netzwerk empfangen wurde.
    Nur gültig, wenn die `errorDetail`-Zeichenfolge `dtls-failure` ist.
    Wenn `null`, wurde kein DTLS-Fehler empfangen.
- [`sctpCauseCode`](/de/docs/Web/API/RTCError/sctpCauseCode) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die den {{Glossary("SCTP", "SCTP")}}-Ursachencode angibt, der die Ursache der fehlgeschlagenen SCTP-Verhandlung anzeigt.
    Wird gesetzt, wenn `errorDetail` `sctp-failure` ist.
    `null`, wenn der Fehler kein SCTP-Fehler ist.
- [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Zeilennummer der {{Glossary("SDP", "SDP")}} angibt, in der der Syntaxfehler aufgetreten ist.
    Wird gesetzt, wenn `errorDetail` `sdp-syntax-error` ist.
    `null`, wenn der Fehler kein SDP-Syntaxfehler ist.
- [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) {{ReadOnlyInline}}
  - : Eine positive Ganzzahl, die den schwerwiegenden DTLS-Fehler angibt, der von diesem Gerät gesendet wurde.
    Wird gesetzt, wenn `errorDetail` `dtls-failure` ist.
    Wenn `null`, wurde kein DTLS-Fehler gesendet.

> [!NOTE]
> Alle `RTCError`-Objekte haben ihren [`name`](/de/docs/Web/API/DOMException/name) auf `OperationError` gesetzt.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird ein Handler für das [`error`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) eingerichtet.

```js
dataChannel.addEventListener("error", (event) => {
  let error = event.error; // event.error is an RTCError

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

Wenn der Fehler ein SDP-Syntaxfehler ist - was daran erkennbar ist, dass die Eigenschaft [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `sdp-syntax-error` gesetzt ist - wird eine Nachricht konstruiert, um die Fehlermeldung und die Zeilennummer innerhalb der SDP-Nachricht darzustellen, bei der der Fehler aufgetreten ist. Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, die für welche Ausgabemethode auch immer dieser Code verwenden mag, steht.

Jeder andere Fehler wird als endgültig behandelt, indem eine Funktion `terminateMyConnection()` aufgerufen wird.

Das obige Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um den Handler für `error`-Ereignisse hinzuzufügen. Sie können auch die `onerror`-Ereignishandler-Eigenschaft des `RTCDataChannel`-Objekts verwenden, wie folgt:

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
