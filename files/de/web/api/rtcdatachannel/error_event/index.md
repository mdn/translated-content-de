---
title: "RTCDataChannel: error-Ereignis"
short-title: error
slug: Web/API/RTCDataChannel/error_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Ein WebRTC-`error`-Ereignis wird an den `onerror`-Ereignishandler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn ein Fehler auf dem Datenkanal auftritt.

Das [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent)-Objekt liefert Details über den aufgetretenen Fehler; sehen Sie sich diesen Artikel für weitere Details an.

Dieses Ereignis ist nicht abbrechbar und wird nicht weiter propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das den aufgetretenen Fehler spezifiziert; dieses Objekt enthält die Art des aufgetretenen Fehlers sowie Informationen darüber, wo der Fehler aufgetreten ist (z. B. welche Zeilennummer im {{Glossary("SDP", "SDP")}} oder welcher {{Glossary("SCTP", "SCTP")}}-Ursachencode das Problem war).

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

Das empfangene Ereignis liefert Details in einem [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das [`error`](/de/docs/Web/API/RTCErrorEvent/error) genannt wird; `RTCError` ist eine Erweiterung der [`DOMException`](/de/docs/Web/API/DOMException)-Schnittstelle. Der [`name`](/de/docs/Web/API/DOMException/name) des Fehlers ist `RTCError` und die [`message`](/de/docs/Web/API/DOMException/message) ist ein vom WebRTC-Layer spezifizierter Fehlerstring.

Fehlerinformationen werden über [`console.error()`](/de/docs/Web/API/Console/error_static) an die Konsole ausgegeben. Der `message`-String wird immer ausgegeben, ebenso wie Informationen über den Namen der Quelldatei, die Zeilennummer und die Spaltennummer, an der der Fehler aufgetreten ist.

Je nach Wert von [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) können jedoch zusätzliche Informationen ausgegeben werden. Jeder Fehlertyp hat einen anderen Satz von ausgegebenen Informationen. Zum Beispiel zeigt ein SDP-Syntaxfehler die Zeilennummer des Fehlers innerhalb des SDP an, und ein SCTP-Fehler zeigt eine Nachricht entsprechend dem SCTP-Ursachencode an. Andere Fehlertypen geben ebenfalls geeignete Informationen aus.

Sie können auch einen Ereignishandler für `error`-Ereignisse einrichten, indem Sie die `onerror`-Ereignishandler-Eigenschaft der `RTCDataChannel`-Schnittstelle verwenden:

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
