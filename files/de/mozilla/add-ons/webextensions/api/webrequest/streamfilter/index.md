---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein `StreamFilter` ist ein Objekt, mit dem Sie HTTP-Antworten überwachen und modifizieren können.

Um einen `StreamFilter` zu erstellen, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData()")}} auf und übergeben Sie die ID der Webanfrage, die Sie filtern möchten.

Sie können sich den Stream-Filter so vorstellen, dass er sich zwischen dem Netzwerk-Stack und der Rendermaschine des Browsers befindet. Der Filter erhält HTTP-Antwortdaten, wie sie vom Netzwerk empfangen werden. Er kann die Daten untersuchen und modifizieren, bevor er sie an die Rendermaschine weiterleitet, wo sie analysiert und gerendert werden. Der Filter hat die volle Kontrolle über den Antwortkörper, und ohne jegliche Listener oder Schreibaufrufe führt das zu einem Stream ohne Inhalt, der niemals geschlossen wird.

Der Filter generiert vier verschiedene Ereignisse:

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}} wenn der Filter kurz davor ist, Antwortdaten zu empfangen.
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}} wenn einige Antwortdaten vom Filter empfangen wurden und untersucht oder modifiziert werden können.
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}} wenn der Filter abgeschlossen hat, Antwortdaten zu empfangen.
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}} wenn ein Fehler bei der Initialisierung und dem Betrieb des Filters aufgetreten ist.

Sie können jedem Ereignis zuhören, indem Sie eine Listener-Funktion zu dessen Attribut zuweisen:

```js
filter.onstart = (event) => {
  console.log("started");
};
```

Beachten Sie, dass die Anfrage während der Ausführung eines beliebigen Event-Listeners blockiert wird.

Der Filter bietet eine {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}-Funktion. Ab dem `onstart`-Ereignis können Sie diese Funktion jederzeit verwenden, um Daten in den Ausgabestream zu schreiben.

Wenn Sie Listener zu einem beliebigen Ereignis des Filters zuweisen, werden alle Antwortdaten, die an die Rendermaschine übergeben werden, durch die Aufrufe, die Sie an `write()` machen, geliefert. Wenn Sie also einen Listener hinzufügen und nicht `write()` aufrufen, wird die gerenderte Seite leer sein.

Sobald Sie die Interaktion mit der Antwort abgeschlossen haben, rufen Sie eine der folgenden Funktionen auf:

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}: Dies trennt den Filter von der Anfrage, sodass der Rest der Antwort normal verarbeitet wird.
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: Dies schließt die Anfrage, sodass keine zusätzlichen Antwortdaten mehr verarbeitet werden.

Der Filter bietet auch Funktionen an, um die Anfrage zu {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} und {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}}.

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
  - : Ereignishandler, der aufgerufen wird, wenn eingehende Daten verfügbar sind.
- {{WebExtAPIRef("webRequest.StreamFilter.onerror")}}
  - : Ereignishandler, der aufgerufen wird, wenn ein Fehler aufgetreten ist.
- {{WebExtAPIRef("webRequest.StreamFilter.onstart")}}
  - : Ereignishandler, der aufgerufen wird, wenn der Stream kurz davor ist, Daten zu empfangen.
- {{WebExtAPIRef("webRequest.StreamFilter.onstop")}}
  - : Ereignishandler, der aufgerufen wird, wenn der Stream keine Daten mehr zu liefern hat und geschlossen ist.
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : Wenn {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} aufgerufen wird, wird dieser die Beschreibung des Fehlers enthalten.
- {{WebExtAPIRef("webRequest.StreamFilter.status")}}
  - : Beschreibt den aktuellen Status des Streams.

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

## Browser-Kompatibilität

{{Compat}}
