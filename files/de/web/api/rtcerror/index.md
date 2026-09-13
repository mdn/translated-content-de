---
title: RTCError
slug: Web/API/RTCError
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`RTCError`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) beschreibt einen Fehler, der beim Umgang mit RTC-Operationen aufgetreten ist.
Es basiert auf dem standardmäßigen [`DOMException`](/de/docs/Web/API/DOMException)-Interface, das allgemeine DOM-Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCError()`](/de/docs/Web/API/RTCError/RTCError)
  - : Erstellt und gibt eine neue Instanz des `RTCError`-Objekts zurück.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`DOMException`](/de/docs/Web/API/DOMException)._

- [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) {{ReadOnlyInline}}
  - : Ein String, der den WebRTC-spezifischen Fehlercode angibt, der den Typ des aufgetretenen Fehlers identifiziert.
- [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert) {{ReadOnlyInline}}
  - : Ein positiver Ganzzahlwert, der den schwerwiegenden {{Glossary("DTLS", "DTLS")}}-Fehler angibt, der vom Netzwerk empfangen wurde.
    Nur gültig, wenn der `errorDetail`-String `dtls-failure` ist.
    Falls `null`, wurde kein DTLS-Fehler empfangen.
- [`sctpCauseCode`](/de/docs/Web/API/RTCError/sctpCauseCode) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die den {{Glossary("SCTP", "SCTP")}}-Ursachencode angibt, der die Ursache der fehlgeschlagenen SCTP-Verhandlung beschreibt.
    Wird gesetzt, wenn `errorDetail` `sctp-failure` ist.
    `null`, wenn der Fehler kein SCTP-Fehler ist.
- [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Zeilennummer des {{Glossary("SDP", "SDP")}} angibt, in der der Syntaxfehler aufgetreten ist.
    Wird gesetzt, wenn `errorDetail` `sdp-syntax-error` ist.
    `null`, wenn der Fehler kein SDP-Syntaxfehler ist.
- [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) {{ReadOnlyInline}}
  - : Eine positive Ganzzahl, die den schwerwiegenden DTLS-Fehler angibt, der von diesem Gerät gesendet wurde.
    Wird gesetzt, wenn `errorDetail` `dtls-failure` ist.
    Falls `null`, wurde kein DTLS-Fehler übertragen.

> [!NOTE]
> Alle `RTCError`-Objekte haben ihren [`name`](/de/docs/Web/API/DOMException/name) auf `OperationError` gesetzt.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird ein Handler für das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-[`error`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis eingerichtet.

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

Wenn der Fehler ein SDP-Syntaxfehler ist – wie durch die [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft, die auf `sdp-syntax-error` gesetzt ist, angezeigt – wird ein Nachrichtenstring erstellt, um die Fehlermeldung und die Zeilennummer innerhalb der SDP-Nachricht darzustellen, wo der Fehler aufgetreten ist.
Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, die als Platzhalter für das Ausgabemechanismus dient, das dieser Code verwenden könnte.

Jeder andere Fehler wird als terminal behandelt, wodurch eine Funktion `terminateMyConnection()` aufgerufen wird.

Das obige Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um den Handler für `error`-Ereignisse hinzuzufügen.
Sie können auch die [`onerror`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis-Handler-Eigenschaft des `RTCDataChannel`-Objekts verwenden, wie hier:

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
