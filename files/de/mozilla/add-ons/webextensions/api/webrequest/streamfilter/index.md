---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{AddonSidebar}}

Ein `StreamFilter` ist ein Objekt, das dazu verwendet wird, HTTP-Antworten zu überwachen und zu modifizieren.

Um einen `StreamFilter` zu erstellen, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData()")}} auf und übergeben die ID der Webanfrage, die Sie filtern möchten.

Sie können sich den Stream-Filter so vorstellen, dass er zwischen dem Netzwerk-Stack und der Rendering-Engine des Browsers sitzt. Der Filter erhält HTTP-Antwortdaten, sobald diese vom Netzwerk empfangen werden. Er kann die Daten prüfen und modifizieren, bevor sie an die Rendering-Engine weitergeleitet werden, wo sie geparst und gerendert werden. Der Filter hat die volle Kontrolle über den Antwortinhalt, und das Standardverhalten ohne jegliche Listener oder Schreibaufrufe ist ein Stream ohne Inhalt, der nie geschlossen wird.

Der Filter erzeugt vier verschiedene Ereignisse:

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}}, wenn der Filter kurz davor steht, Antwortdaten zu empfangen.
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}}, wenn einige Antwortdaten vom Filter empfangen wurden und zur Überprüfung oder Modifikation bereitstehen.
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}}, wenn der Filter das Empfangen von Antwortdaten beendet hat.
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}}, falls beim Initialisieren oder Betrieb des Filters ein Fehler aufgetreten ist.

Sie können jedem Ereignis lauschen, indem Sie eine Listener-Funktion seinem Attribut zuweisen:

```js
filter.onstart = (event) => {
  console.log("started");
};
```

Beachten Sie, dass die Anfrage während der Ausführung von Event-Listenern blockiert ist.

Der Filter stellt eine Funktion {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} bereit. Ab dem `onstart`-Ereignis können Sie diese Funktion jederzeit verwenden, um Daten in den Ausgabestream zu schreiben.

Wenn Sie Listener zu einem der Events des Filters zuweisen, werden alle an die Rendering-Engine übergebenen Antwortdaten über Aufrufe, die Sie an `write()` machen, bereitgestellt. Wenn Sie also einen Listener hinzufügen und `write()` nicht aufrufen, bleibt die gerenderte Seite leer.

Sobald Sie die Interaktion mit der Antwort abgeschlossen haben, rufen Sie eine der folgenden Funktionen auf:

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}: Dadurch wird der Filter von der Anfrage getrennt, sodass der Rest der Antwort normal verarbeitet wird.
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: Dadurch wird die Anfrage geschlossen, sodass keine zusätzlichen Antwortdaten verarbeitet werden.

Der Filter bietet auch Funktionen zum {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} und {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}} der Anfrage.

## Methoden

- {{WebExtAPIRef("webRequest.StreamFilter.close()")}}
  - : Schließt die Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.disconnect()")}}
  - : Trennt den Filter von der Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.resume()")}}
  - : Nimmt die Verarbeitung der Anfrage wieder auf.
- {{WebExtAPIRef("webRequest.StreamFilter.suspend()")}}
  - : Setzt die Verarbeitung der Anfrage aus.
- {{WebExtAPIRef("webRequest.StreamFilter.write()")}}
  - : Schreibt Daten in den Ausgabestream.

## Eigenschaften

- {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}
  - : Event-Handler, der aufgerufen wird, wenn eingehende Daten verfügbar sind.
- {{WebExtAPIRef("webRequest.StreamFilter.onerror")}}
  - : Event-Handler, der aufgerufen wird, wenn ein Fehler aufgetreten ist.
- {{WebExtAPIRef("webRequest.StreamFilter.onstart")}}
  - : Event-Handler, der aufgerufen wird, wenn der Stream kurz davor steht, Daten zu empfangen.
- {{WebExtAPIRef("webRequest.StreamFilter.onstop")}}
  - : Event-Handler, der aufgerufen wird, wenn der Stream keine Daten mehr liefert und geschlossen ist.
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : Wenn {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} aufgerufen wird, wird dieser die Fehlermeldung beschreiben.
- {{WebExtAPIRef("webRequest.StreamFilter.status")}}
  - : Beschreibt den aktuellen Status des Streams.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code lauscht auf `onstart`, `ondata` und `onstop`. Er protokolliert diese Ereignisse und die Antwortdaten selbst als {{jsxref("ArrayBuffer")}}:

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

  // return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
