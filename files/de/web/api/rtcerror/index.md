---
title: RTCError
slug: Web/API/RTCError
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die **`RTCError`**-Schnittstelle beschreibt einen Fehler, der bei der Verarbeitung von [WebRTC](/de/docs/Web/API/WebRTC_API)-Operationen aufgetreten ist. Sie basiert auf der standardisierten [`DOMException`](/de/docs/Web/API/DOMException)-Schnittstelle, die allgemeine DOM-Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCError()`](/de/docs/Web/API/RTCError/RTCError)
  - : Erstellt und gibt ein neues `RTCError`-Objekt zurück, das mit den verschiedenen Parametern initialisiert ist und optional einen String enthält, der als Wert der [`message`](/de/docs/Web/API/DOMException/message)-Eigenschaft des Fehlers verwendet wird.

## Instanz-Eigenschaften

_Zusätzlich zu den Eigenschaften der übergeordneten Schnittstelle [`DOMException`](/de/docs/Web/API/DOMException) beinhaltet `RTCError` die folgenden Eigenschaften:_

- [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) {{ReadOnlyInline}}
  - : Ein String, der den WebRTC-spezifischen Fehlercode angibt, der den aufgetretenen Fehlertyp identifiziert.
- [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert) {{ReadOnlyInline}}
  - : Ein unsigned long Integer-Wert, der den fatalen [DTLS](/de/docs/Glossary/DTLS)-Fehler angibt, der vom Netzwerk empfangen wurde. Nur gültig, wenn der `errorDetail`-String `dtls-failure` ist. Wenn `null`, wurde kein DTLS-Fehler empfangen.
- [`sctpCauseCode`](/de/docs/Web/API/RTCError/sctpCauseCode) {{ReadOnlyInline}}
  - : Wenn `errorDetail` `sctp-failure` ist, ist diese Eigenschaft ein long Integer, der den [SCTP](/de/docs/Glossary/SCTP)-Ursachencode angibt, der die Ursache der fehlgeschlagenen SCTP-Verhandlung beschreibt. `null`, wenn der Fehler kein SCTP-Fehler ist.
- [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber) {{ReadOnlyInline}}
  - : Wenn `errorDetail` `sdp-syntax-error` ist, ist diese Eigenschaft ein long Integer, der die Zeilennummer des [SDP](/de/docs/Glossary/SDP) identifiziert, in der der Syntaxfehler aufgetreten ist. `null`, wenn der Fehler kein SDP-Syntaxfehler ist.
- [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) {{ReadOnlyInline}}
  - : Wenn `errorDetail` `dtls-failure` ist, ist diese Eigenschaft ein unsigned long Integer, der den fatalen DTLS-Fehler angibt, der von diesem Gerät gesendet wurde. Wenn `null`, wurde kein DTLS-Fehler gesendet.

> [!NOTE]
> Alle `RTCError`-Objekte haben ihren [`name`](/de/docs/Web/API/DOMException/name) auf `OperationError` gesetzt.

## Beispiele

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

Wenn der Fehler ein SDP-Syntaxfehler ist—angezeigt durch die Eigenschaft [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail), die `sdp-syntax-error` enthält—, wird eine Nachrichtenzeichenfolge erstellt, um die Fehlermeldung und die Zeilennummer im SDP anzuzeigen, bei der der Fehler aufgetreten ist. Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, die stellvertretend für den Ausgabe-Mechanismus steht, den dieser Code verwendet.

Jeder andere Fehler wird als terminal angesehen und löst die Ausführung einer Funktion `terminateMyConnection()` aus.

Das obige Beispiel verwendet [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um den Handler für `error`-Ereignisse hinzuzufügen. Sie können auch die `onerror`-Ereignis-Handler-Eigenschaft des `RTCDataChannel`-Objekts verwenden, wie folgt:

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
