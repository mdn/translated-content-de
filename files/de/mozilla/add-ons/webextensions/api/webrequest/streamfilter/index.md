---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein `StreamFilter` ist ein Objekt, das zur Überwachung und Modifizierung von HTTP-Antworten verwendet wird.

Um einen `StreamFilter` zu erstellen, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData()")}} auf und übergeben die ID der Webanfrage, die Sie filtern möchten.

Sie können sich den Stream-Filter als eine Schicht zwischen dem Netzwerk-Stack und der Rendering-Engine des Browsers vorstellen. Der Filter erhält HTTP-Antwortdaten, sobald sie vom Netzwerk empfangen werden. Er kann die Daten untersuchen und modifizieren, bevor sie an die Rendering-Engine weitergeleitet werden, wo sie geparst und gerendert werden. Der Filter hat vollständige Kontrolle über den Antworttextkörper, und das Standardverhalten ohne jegliche Listener oder Schreibaufrufe ist, einen Stream ohne Inhalt zu haben, der niemals geschlossen wird.

Der Filter generiert vier verschiedene Ereignisse:

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}} wenn der Filter beginnt, Antwortdaten zu empfangen.
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}} wenn einige Antwortdaten vom Filter empfangen wurden und zur Untersuchung oder Modifikation bereitstehen.
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}} wenn der Filter den Empfang von Antwortdaten abgeschlossen hat.
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}} wenn beim Initialisieren und Betreiben des Filters ein Fehler aufgetreten ist.

Sie können jedes Ereignis überwachen, indem Sie eine Listener-Funktion seinem Attribut zuweisen:

```js
filter.onstart = (event) => {
  console.log("started");
};
```

Beachten Sie, dass die Anfrage während der Ausführung von Event-Listenern blockiert ist.

Der Filter stellt eine Funktion {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} bereit. Ab dem `onstart`-Ereignis können Sie diese Funktion verwenden, um Daten in den Ausgabestream zu schreiben.

Wenn Sie Listener für irgendein Ereignis des Filters zuweisen, werden alle an die Rendering-Engine übermittelten Antwortdaten durch von Ihnen erstellte `write()`-Aufrufe bereitgestellt. Wenn Sie also einen Listener hinzufügen und `write()` nicht aufrufen, bleibt die gerenderte Seite leer.

Sobald Sie die Interaktion mit der Antwort abgeschlossen haben, rufen Sie eine der folgenden Funktionen auf:

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}: Dies trennt den Filter von der Anfrage, sodass der Rest der Antwort normal verarbeitet wird.
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: Dies schließt die Anfrage, sodass keine weiteren Antwortdaten verarbeitet werden.

Der Filter stellt auch Funktionen zur Verfügung, um die Anfrage {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} und {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}} zu unterbrechen und fortzusetzen.

## Methoden

- {{WebExtAPIRef("webRequest.StreamFilter.close()")}}
  - : Schließt die Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.disconnect()")}}
  - : Trennt den Filter von der Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.resume()")}}
  - : Setzt die Verarbeitung der Anfrage fort.
- {{WebExtAPIRef("webRequest.StreamFilter.suspend()")}}
  - : Unterbricht die Verarbeitung der Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.write()")}}
  - : Schreibt einige Daten in den Ausgabestream.

## Eigenschaften

- {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}
  - : Event-Handler, der aufgerufen wird, wenn eingehende Daten verfügbar sind.
- {{WebExtAPIRef("webRequest.StreamFilter.onerror")}}
  - : Event-Handler, der aufgerufen wird, wenn ein Fehler aufgetreten ist.
- {{WebExtAPIRef("webRequest.StreamFilter.onstart")}}
  - : Event-Handler, der aufgerufen wird, wenn der Stream beginnt, Daten zu empfangen.
- {{WebExtAPIRef("webRequest.StreamFilter.onstop")}}
  - : Event-Handler, der aufgerufen wird, wenn der Stream keine Daten mehr zu liefern hat und geschlossen wird.
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : Wenn {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} aufgerufen wird, wird hier der Fehler beschrieben.
- {{WebExtAPIRef("webRequest.StreamFilter.status")}}
  - : Beschreibt den aktuellen Status des Streams.

## Beispiele

Dieser Code überwacht `onstart`, `ondata` und `onstop`. Er protokolliert diese Ereignisse und die Antwortdaten als {{jsxref("ArrayBuffer")}} selbst:

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

## Browser-Kompatibilität

{{Compat}}
