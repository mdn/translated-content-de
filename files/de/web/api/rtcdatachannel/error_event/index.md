---
title: "RTCDataChannel: error-Ereignis"
short-title: error
slug: Web/API/RTCDataChannel/error_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Ein WebRTC `error`-Ereignis wird an den `onerror`-Ereignishandler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn ein Fehler auf dem Datenkanal auftritt.

Das [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent)-Objekt bietet Details über den aufgetretenen Fehler. Weitere Informationen finden Sie in diesem Artikel.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Blasenbildung aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das den aufgetretenen Fehler spezifiziert; dieses Objekt enthält den Fehler-Typ und Informationen darüber, wo der Fehler aufgetreten ist (wie zum Beispiel welche Zeilennummer im [SDP](/de/docs/Glossary/SDP) problematisch war oder welcher [SCTP](/de/docs/Glossary/SCTP)-Ursachencode betroffen war).

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

dc.addEventListener(
  "error",
  (ev) => {
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
          console.error("    Received DLTS failure alert: ", err.receivedAlert);
        }
        if (err.sentAlert) {
          console.error("    Sent DLTS failure alert: ", err.receivedAlert);
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
  },
  false,
);
```

Das empfangene Ereignis stellt Details in einem [`RTCError`](/de/docs/Web/API/RTCError)-Objekt bereit, das [`error`](/de/docs/Web/API/RTCErrorEvent/error) genannt wird; `RTCError` ist eine Erweiterung der [`DOMException`](/de/docs/Web/API/DOMException)-Schnittstelle. Der [`name`](/de/docs/Web/API/DOMException/name) des Fehlers ist `RTCError` und die [`message`](/de/docs/Web/API/DOMException/message) ist eine Fehlermeldung, die von der WebRTC-Schicht spezifiziert wird.

Fehlerinformationen werden mit [`console.error()`](/de/docs/Web/API/Console/error_static) zur Konsole ausgegeben. Die `message`-Zeichenfolge wird immer ausgegeben, ebenso wie Informationen über den Namen der Quelldatei, die Zeilennummer und die Spaltennummer, an der der Fehler aufgetreten ist.

Zusätzlich dazu können jedoch, abhängig vom Wert von [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail), zusätzliche Informationen ausgegeben werden. Jeder Fehlertyp hat einen unterschiedlichen Satz an ausgegebenen Informationen. Beispielsweise zeigt ein SDP-Syntaxfehler die Zeilennummer des Fehlers innerhalb des SDP an und ein SCTP-Fehler zeigt eine Nachricht an, die dem SCTP-Ursachencode entspricht. Andere Fehlertypen geben ebenfalls angemessene Informationen aus.

Sie können auch einen Ereignishandler für `error`-Ereignisse mit der `onerror`-Ereignishandler-Eigenschaft der `RTCDataChannel`-Schnittstelle einrichten:

```js
dc.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> [!NOTE]
> Da `RTCError` nicht zu den veralteten Fehlern gehört, ist der Wert von [`RTCError.code`](/de/docs/Web/API/DOMException/code) immer 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`message`](/de/docs/Web/API/RTCDataChannel/message_event) und [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
