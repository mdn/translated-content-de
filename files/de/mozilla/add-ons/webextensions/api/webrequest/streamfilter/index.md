---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein `StreamFilter` ist ein Objekt, das Sie verwenden können, um HTTP-Antworten zu überwachen und zu ändern.

Um einen `StreamFilter` zu erstellen, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData()")}} auf und übergeben die ID der Webanfrage, die Sie filtern möchten.

Sie können sich den Stream-Filter als zwischen dem Netzwerk-Stack und der Rendering-Engine des Browsers sitzend vorstellen. Der Filter empfängt HTTP-Antwortdaten, während sie aus dem Netzwerk kommen. Er kann die Daten prüfen und ändern, bevor er sie an die Rendering-Engine weiterleitet, wo sie analysiert und gerendert werden. Der Filter hat die vollständige Kontrolle über den Antwortkörper, und das Standardverhalten ohne Listener oder Schreibaufrufe ist ein Stream ohne Inhalt, der nie schließt.

Der Filter generiert vier verschiedene Ereignisse:

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}} wenn der Filter kurz davorsteht, Antwortdaten zu empfangen.
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}} wenn einige Antwortdaten vom Filter empfangen wurden und geprüft oder geändert werden können.
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}} wenn der Filter das Empfangen von Antwortdaten abgeschlossen hat.
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}} wenn ein Fehler bei der Initialisierung und dem Betrieb des Filters aufgetreten ist.

Sie können jedem Ereignis lauschen, indem Sie eine Listener-Funktion seinem Attribut zuweisen:

```js
filter.onstart = (event) => {
  console.log("started");
};
```

Beachten Sie, dass die Anfrage während der Ausführung von Event-Listenern blockiert ist.

Der Filter bietet eine {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}-Funktion. Sie können ab dem `onstart`-Ereignis jederzeit diese Funktion nutzen, um Daten in den Ausgabestream zu schreiben.

Wenn Sie Listener für eines der Ereignisse des Filters zuweisen, werden alle Antwortdaten, die an die Rendering-Engine weitergeleitet werden, durch Aufrufe, die Sie an `write()` machen, geliefert. Wenn Sie also einen Listener hinzufügen und `write()` nicht aufrufen, bleibt die gerenderte Seite leer.

Nachdem Sie mit der Interaktion mit der Antwort fertig sind, rufen Sie eine der folgenden Methoden auf:

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}: Hiermit wird der Filter von der Anfrage getrennt, sodass der Rest der Antwort normal verarbeitet wird.
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: Hiermit wird die Anfrage geschlossen, sodass keine zusätzlichen Antwortdaten verarbeitet werden.

Der Filter bietet auch Funktionen zum {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} und {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} der Anfrage.

## Methoden

- {{WebExtAPIRef("webRequest.StreamFilter.close()")}}
  - : Schließt die Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.disconnect()")}}
  - : Trennt den Filter von der Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.resume()")}}
  - : Setzt die Verarbeitung der Anfrage fort.
- {{WebExtAPIRef("webRequest.StreamFilter.suspend()")}}
  - : Setzt die Verarbeitung der Anfrage aus.
- {{WebExtAPIRef("webRequest.StreamFilter.write()")}}
  - : Schreibt einige Daten in den Ausgabestream.

## Eigenschaften

- {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}
  - : Event-Handler, der aufgerufen wird, wenn eingehende Daten verfügbar sind.
- {{WebExtAPIRef("webRequest.StreamFilter.onerror")}}
  - : Event-Handler, der aufgerufen wird, wenn ein Fehler aufgetreten ist.
- {{WebExtAPIRef("webRequest.StreamFilter.onstart")}}
  - : Event-Handler, der aufgerufen wird, wenn der Stream kurz davorsteht, Daten zu empfangen.
- {{WebExtAPIRef("webRequest.StreamFilter.onstop")}}
  - : Event-Handler, der aufgerufen wird, wenn der Stream keine weiteren Daten mehr liefert und geschlossen wurde.
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : Wenn {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} aufgerufen wird, wird hier der Fehler beschrieben.
- {{WebExtAPIRef("webRequest.StreamFilter.status")}}
  - : Beschreibt den aktuellen Status des Streams.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code hört auf `onstart`, `ondata` und `onstop`. Er protokolliert diese Ereignisse und die Antwortdaten selbst als {{jsxref("ArrayBuffer")}}:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("started");
  };

  filter.ondata = (event) => {
    console.log(event.data);
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    console.log("finished");
    filter.disconnect();
  };

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
