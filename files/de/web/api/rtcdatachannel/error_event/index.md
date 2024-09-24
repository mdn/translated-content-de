---
title: "RTCDataChannel: Fehlerereignis"
short-title: Fehler
slug: Web/API/RTCDataChannel/error_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Ein WebRTC-`error`-Ereignis wird an den `onerror`-Ereignishandler eines {{domxref("RTCDataChannel")}}-Objekts gesendet, wenn ein Fehler auf dem Datenkanal auftritt.

Das {{domxref("RTCErrorEvent")}}-Objekt liefert Details über den aufgetretenen Fehler; siehe diesen Artikel für weitere Informationen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder legen Sie eine Ereignishändler-Eigenschaft fest.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCErrorEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCErrorEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("RTCErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : Ein {{domxref("RTCError")}}-Objekt, das den aufgetretenen Fehler angibt; dieses Objekt enthält den Fehler-Typ und Informationen darüber, wo der Fehler aufgetreten ist (zum Beispiel welche Zeilennummer im {{Glossary("SDP")}} oder welcher {{Glossary("SCTP")}}-Ursachencode betroffen war).

## Beispiele

```js
// Strings für jeden der SCTP-Ursachencodes, die in RFC
// 4960, Abschnitt 3.3.10 gefunden werden:
// https://datatracker.ietf.org/doc/html/rfc4960#section-3.3.10

const sctpCauseCodes = [
  "Kein SCTP-Fehler",
  "Ungültige Stream-Kennung",
  "Fehlender obligatorischer Parameter",
  "Veralteter Cookie-Fehler",
  "Absender ist ohne Ressourcen (z.B. Speicher)",
  "Adresse konnte nicht aufgelöst werden",
  "Nicht erkannter SCTP-Chunktype empfangen",
  "Ungültiger obligatorischer Parameter",
  "Nicht erkannte Parameter",
  "Keine Benutzerdaten (SCTP DATA-Chunk hat keine Daten)",
  "Cookie empfangen während Herunterfahren",
  "Neustart einer Assoziation mit neuen Adressen",
  "Vom Benutzer initiierter Abbruch",
  "Protokollverletzung",
];

dc.addEventListener(
  "error",
  (ev) => {
    const err = ev.error;

    console.error("WebRTC-Fehler: ", err.message);

    // Spezifische Fehlerdetails behandeln

    switch (err.errorDetail) {
      case "sdp-syntax-error":
        console.error("    SDP-Syntaxfehler in Zeile ", err.sdpLineNumber);
        break;
      case "idp-load-failure":
        console.error(
          "    Identitätsanbieter-Ladefehler: HTTP-Fehler ",
          err.httpRequestStatusCode,
        );
        break;
      case "sctp-failure":
        if (err.sctpCauseCode < sctpCauseCodes.length) {
          console.error("    SCTP-Fehler: ", err.sctpCauseCode);
        } else {
          console.error("    Unbekannter SCTP-Fehler");
        }
        break;
      case "dtls-failure":
        if (err.receivedAlert) {
          console.error("    Empfangene DLTS-Fehlerbenachrichtigung: ", err.receivedAlert);
        }
        if (err.sentAlert) {
          console.error("    Gesendete DLTS-Fehlerbenachrichtigung: ", err.receivedAlert);
        }
        break;
    }

    // Quell-Dateiname und Zeileninformationen hinzufügen

    console.error(
      "    Fehler in Datei ",
      err.filename,
      " in Zeile ",
      err.lineNumber,
      ", Spalte ",
      err.columnNumber,
    );
  },
  false,
);
```

Das empfangene Ereignis liefert Details in einem {{domxref("RTCError")}}-Objekt namens {{domxref("RTCErrorEvent.error", "error")}}; `RTCError` ist eine Erweiterung der {{domxref("DOMException")}}-Schnittstelle. Der Fehlername {{domxref("DOMException.name", "name")}} ist `RTCError`, und die {{domxref("DOMException.message", "message")}} ist ein Fehlerstring, der von der WebRTC-Schicht angegeben wird.

Fehlerinformationen werden mit {{domxref("console/error_static", "console.error()")}} in die Konsole ausgegeben. Der `message`-String wird immer ausgegeben, ebenso wie Informationen über den Namen der Quelldatei, die Zeilennummer und die Spaltennummer, an der der Fehler auftrat.

Darüber hinaus können, abhängig vom Wert der {{domxref("RTCError.errorDetail", "errorDetail")}}, zusätzliche Informationen ausgegeben werden. Jeder Fehlertyp hat eine unterschiedliche Menge an Informationen, die ausgegeben werden. Zum Beispiel zeigt ein SDP-Syntaxfehler die Zeilennummer des Fehlers innerhalb des SDP an, und ein SCTP-Fehler zeigt eine Nachricht entsprechend dem SCTP-Ursachencode an. Andere Fehlertypen geben ähnlich angemessene Informationen aus.

Sie können auch einen Ereignishandler für `error`-Ereignisse einrichten, indem Sie die `onerror`-Ereignishändlereigenschaft der `RTCDataChannel`-Schnittstelle verwenden:

```js
dc.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> [!NOTE]
> Da `RTCError` nicht zu den alten Fehlern gehört, ist der Wert von {{domxref("DOMException.code", "RTCError.code")}} immer 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: {{domxref("RTCDataChannel.open_event", "open")}}, {{domxref("RTCDataChannel.message_event", "message")}}, und {{domxref("RTCDataChannel.close_event", "close")}}
