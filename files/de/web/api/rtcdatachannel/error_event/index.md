---
title: "RTCDataChannel: error-Ereignis"
short-title: error
slug: Web/API/RTCDataChannel/error_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein WebRTC-`error`-Ereignis wird an den `onerror`-Event-Handler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn auf dem Datenkanal ein Fehler auftritt.

Das [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent)-Objekt enthält Einzelheiten zum aufgetretenen Fehler. Weitere Informationen finden Sie im verlinkten Artikel.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Es erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Beispiele

```js
// Strings for each of the SCTP cause codes found in RFC
// 4960, section 3.3.10:
// https://datatracker.ietf.org/doc/html/rfc4960#section-3.3.10

const sctpCauseCodes = [
  "No SCTP error",
  "Invalid stream identifier",
  "Missing mandatory parameter",
  "Stale cookie error",
  "Sender is out of resource (i.e., memory)",
  "Unable to resolve address",
  "Unrecognized SCTP chunk type received",
  "Invalid mandatory parameter",
  "Unrecognized parameters",
  "No user data (SCTP DATA chunk has no data)",
  "Cookie received while shutting down",
  "Restart of an association with new addresses",
  "User-initiated abort",
  "Protocol violation",
];

dc.addEventListener("error", (ev) => {
  const err = ev.error;

  console.error("WebRTC error: ", err.message);

  // Handle specific error detail types

  switch (err.errorDetail) {
    case "sdp-syntax-error":
      console.error("    SDP syntax error in line ", err.sdpLineNumber);
      break;
    case "idp-load-failure":
      console.error(
        "    Identity provider load failure: HTTP error ",
        err.httpRequestStatusCode,
      );
      break;
    case "sctp-failure":
      if (err.sctpCauseCode < sctpCauseCodes.length) {
        console.error("    SCTP failure: ", err.sctpCauseCode);
      } else {
        console.error("    Unknown SCTP error");
      }
      break;
    case "dtls-failure":
      if (err.receivedAlert) {
        console.error("    Received DTLS failure alert: ", err.receivedAlert);
      }
      if (err.sentAlert) {
        console.error("    Sent DTLS failure alert: ", err.sentAlert);
      }
      break;
  }

  // Add source file name and line information

  console.error(
    "    Error in file ",
    err.filename,
    " at line ",
    err.lineNumber,
    ", column ",
    err.columnNumber,
  );
});
```

Das empfangene Ereignis stellt Einzelheiten in einem [`RTCError`](/de/docs/Web/API/RTCError)-Objekt namens [`error`](/de/docs/Web/API/RTCErrorEvent/error) bereit. `RTCError` ist eine Erweiterung der [`DOMException`](/de/docs/Web/API/DOMException)-Schnittstelle. Der [`name`](/de/docs/Web/API/DOMException/name) des Fehlers ist `RTCError`, und die [`message`](/de/docs/Web/API/DOMException/message) ist eine von der WebRTC-Schicht festgelegte Fehlermeldung.

Die Fehlerinformationen werden mit [`console.error()`](/de/docs/Web/API/console/error_static) in der Konsole ausgegeben. Die Zeichenfolge `message` wird immer ausgegeben, ebenso wie Informationen zum Namen der Quelldatei sowie zur Zeilen- und Spaltennummer, an der der Fehler aufgetreten ist.

Abhängig vom Wert von [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) können darüber hinaus zusätzliche Informationen ausgegeben werden. Für jeden Fehlertyp werden andere Informationen ausgegeben. Bei einem SDP-Syntaxfehler wird beispielsweise die Zeilennummer des Fehlers innerhalb des SDP angezeigt; bei einem SCTP-Fehler wird eine Meldung ausgegeben, die dem SCTP-Ursachencode entspricht. Auch bei anderen Fehlertypen werden entsprechende Informationen ausgegeben.

Sie können einen Event-Handler für `error`-Ereignisse auch über die `onerror`-Event-Handler-Eigenschaft der `RTCDataChannel`-Schnittstelle einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onerror` hinzugefügte Event-Listener ersetzt werden:

```js
dc.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> [!NOTE]
> Da `RTCError` nicht zu den älteren Fehlertypen gehört, ist der Wert von [`RTCError.code`](/de/docs/Web/API/DOMException/code) immer 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`message`](/de/docs/Web/API/RTCDataChannel/message_event) und [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
