---
title: RTCError
slug: Web/API/RTCError
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCError`**-Interface beschreibt einen Fehler, der bei der Verarbeitung von [WebRTC](/de/docs/Web/API/WebRTC_API)-Operationen aufgetreten ist. Es basiert auf dem standardmäßigen [`DOMException`](/de/docs/Web/API/DOMException)-Interface, das allgemeine DOM-Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCError()`](/de/docs/Web/API/RTCError/RTCError)
  - : Erstellt und gibt ein neues `RTCError`-Objekt zurück, das mit verschiedenen Parametern und optional einem String initialisiert wird, der als Wert der [`message`](/de/docs/Web/API/DOMException/message)-Eigenschaft des Fehlers verwendet wird.

## Instanz-Eigenschaften

_Neben den von der übergeordneten Schnittstelle [`DOMException`](/de/docs/Web/API/DOMException) definierten Eigenschaften enthält `RTCError` folgende Eigenschaften:_

- [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) {{ReadOnlyInline}}
  - : Ein String, der den WebRTC-spezifischen Fehlercode angibt, der den Typ des aufgetretenen Fehlers identifiziert.
- [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert) {{ReadOnlyInline}}
  - : Ein unsignierter langer Integer-Wert, der den fatalen [DTLS](/de/docs/Glossary/DTLS)-Fehler angibt, der aus dem Netzwerk empfangen wurde. Nur gültig, wenn der `errorDetail`-String `dtls-failure` ist. Wenn `null`, wurde kein DTLS-Fehler empfangen.
- [`sctpCauseCode`](/de/docs/Web/API/RTCError/sctpCauseCode) {{ReadOnlyInline}}
  - : Wenn `errorDetail` `sctp-failure` ist, handelt es sich bei dieser Eigenschaft um einen langen Integer, der den [SCTP](/de/docs/Glossary/SCTP)-Ursachencode angibt, der die Ursache für das Scheitern der SCTP-Verhandlung angibt. `null`, wenn der Fehler kein SCTP-Fehler ist.
- [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber) {{ReadOnlyInline}}
  - : Wenn `errorDetail` `sdp-syntax-error` ist, handelt es sich bei dieser Eigenschaft um einen langen Integer, der die Zeilennummer des [SDP](/de/docs/Glossary/SDP) identifiziert, auf der der Syntaxfehler aufgetreten ist. `null`, wenn der Fehler kein SDP-Syntaxfehler ist.
- [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) {{ReadOnlyInline}}
  - : Wenn `errorDetail` `dtls-failure` ist, handelt es sich bei dieser Eigenschaft um einen unsignierten langen Integer, der den fatalen DTLS-Fehler angibt, der von diesem Gerät gesendet wurde. Wenn `null`, wurde kein DTLS-Fehler gesendet.

> [!NOTE]
> Alle `RTCError`-Objekte haben ihren [`name`](/de/docs/Web/API/DOMException/name) auf `OperationError` gesetzt.

## Beispiele

In diesem Beispiel wird ein Handler für das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) [`error`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis eingerichtet.

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

Wenn der Fehler ein SDP-Syntaxfehler ist – angezeigt durch die [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft als `sdp-syntax-error` – wird ein Nachrichten-String zusammengestellt, um die Fehlermeldung und die Zeilennummer innerhalb der SDP, an der der Fehler aufgetreten ist, darzustellen. Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, die als Platzhalter für einen beliebigen Ausgabemechanismus dient, den dieser Code verwenden könnte.

Jeder andere Fehler wird als terminal behandelt, wodurch eine Funktion namens `terminateMyConnection()` aufgerufen wird.

Das obige Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um den Handler für `error`-Ereignisse hinzuzufügen. Sie können auch die [`onerror`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignishandler-Eigenschaft des `RTCDataChannel`-Objekts wie folgt verwenden:

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
