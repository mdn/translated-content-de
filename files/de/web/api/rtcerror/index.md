---
title: RTCError
slug: Web/API/RTCError
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die **`RTCError`**-Schnittstelle beschreibt einen Fehler, der bei der Handhabung von [WebRTC](/de/docs/Web/API/WebRTC_API)-Vorgängen aufgetreten ist. Sie basiert auf der Standard-{{domxref("DOMException")}}-Schnittstelle, die allgemeine DOM-Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("RTCError.RTCError", "RTCError()")}}
  - : Erstellt und gibt ein neues `RTCError`-Objekt zurück, das mit den verschiedenen Parametern initialisiert wird und optional einen String als Wert der {{domxref("DOMException.message", "message")}}-Eigenschaft des Fehlers verwendet.

## Instanz-Eigenschaften

_Zusätzlich zu den von der übergeordneten Schnittstelle {{domxref("DOMException")}} definierten Eigenschaften beinhaltet `RTCError` die folgenden Eigenschaften:_

- {{domxref("RTCError.errorDetail", "errorDetail")}} {{ReadOnlyInline}}
  - : Ein String, der den WebRTC-spezifischen Fehlercode angibt, der den Typ des aufgetretenen Fehlers identifiziert.
- {{domxref("RTCError.receivedAlert", "receivedAlert")}} {{ReadOnlyInline}}
  - : Ein nicht signierter langer Ganzzahlenwert, der den fatalen {{Glossary("DTLS")}}-Fehler angibt, der vom Netzwerk empfangen wurde. Nur gültig, wenn der `errorDetail`-String `dtls-failure` ist. Ist er `null`, wurde kein DTLS-Fehler empfangen.
- {{domxref("RTCError.sctpCauseCode", "sctpCauseCode")}} {{ReadOnlyInline}}
  - : Wenn `errorDetail` `sctp-failure` ist, gibt diese Eigenschaft einen langen Ganzzahlenwert an, der den {{Glossary("SCTP")}}-Ursachencode angibt, der die Ursache des fehlgeschlagenen SCTP-Aushandlung beschreibt. `null`, wenn es sich nicht um einen SCTP-Fehler handelt.
- {{domxref("RTCError.sdpLineNumber", "sdpLineNumber")}} {{ReadOnlyInline}}
  - : Wenn `errorDetail` `sdp-syntax-error` ist, gibt diese Eigenschaft einen langen Ganzzahlenwert an, der die Zeilennummer des {{Glossary("SDP")}} identifiziert, auf der der Syntaxfehler aufgetreten ist. `null`, wenn es sich nicht um einen SDP-Syntaxfehler handelt.
- {{domxref("RTCError.sentAlert", "sentAlert")}} {{ReadOnlyInline}}
  - : Wenn `errorDetail` `dtls-failure` ist, gibt diese Eigenschaft einen nicht signierten langen Ganzzahlenwert an, der den fatalen DTLS-Fehler angibt, der von diesem Gerät gesendet wurde. Wenn `null`, wurde kein DTLS-Fehler übertragen.

> [!NOTE]
> Alle `RTCError`-Objekte haben ihren {{domxref("DOMException.name", "name")}} auf `OperationError` gesetzt.

## Beispiele

In diesem Beispiel wird ein Handler für das {{domxref("RTCDataChannel")}}-Objekt
{{domxref("RTCDataChannel.error_event", "error")}}-Ereignis eingerichtet.

```js
dataChannel.addEventListener("error", (event) => {
  let error = event.error; // event.error ist ein RTCError

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

Wenn der Fehler ein SDP-Syntaxfehler ist, - angezeigt durch die {{domxref("RTCError.errorDetail", "errorDetail")}}-Eigenschaft, die `sdp-syntax-error` ist -, wird ein Nachrichtenstring konstruiert, um die Fehlermeldung und die Zeilennummer innerhalb des SDP, an der der Fehler aufgetreten ist, anzuzeigen. Diese Nachricht wird dann mit einer Funktion namens `showMyAlertMessage()` angezeigt, welche als Platzhalter für irgendein Ausgabemechanismus dient, den dieser Code verwenden könnte.

Jeder andere Fehler wird als terminal behandelt, wodurch eine `terminateMyConnection()` Funktion aufgerufen wird.

Das obige Beispiel verwendet {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um den Handler für `error`-Ereignisse hinzuzufügen. Sie können auch die {{domxref("RTCDataChannel.error_event", "onerror")}}-Ereignishandler-Eigenschaft des `RTCDataChannel`-Objekts verwenden, wie dieses:

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
