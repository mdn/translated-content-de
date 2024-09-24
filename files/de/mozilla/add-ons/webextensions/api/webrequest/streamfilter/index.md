---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein `StreamFilter` ist ein Objekt, das Sie verwenden, um HTTP-Antworten zu überwachen und zu modifizieren.

Um einen `StreamFilter` zu erstellen, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData()")}} auf und übergeben die ID der Webanfrage, die Sie filtern möchten.

Sie können sich den Stream-Filter als zwischen dem Netzwerk-Stack und der Rendering-Engine des Browsers positioniert vorstellen. Der Filter erhält HTTP-Antwortdaten, sobald sie aus dem Netzwerk eingehen. Er kann die Daten untersuchen und modifizieren, bevor er sie an die Rendering-Engine weiterleitet, wo sie analysiert und gerendert werden. Der Filter hat die volle Kontrolle über den Antwortkörper, und das Standardverhalten ohne irgendwelche Listener oder Schreibaufrufe besteht darin, einen Strom ohne Inhalt zu haben, der nie geschlossen wird.

Der Filter erzeugt vier verschiedene Ereignisse:

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}} wenn der Filter gerade dabei ist, mit dem Empfang von Antwortdaten zu beginnen.
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}} wenn einige Antwortdaten vom Filter empfangen wurden und zur Überprüfung oder Modifikation zur Verfügung stehen.
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}} wenn der Filter den Empfang von Antwortdaten abgeschlossen hat.
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}} wenn ein Fehler beim Initialisieren und Betreiben des Filters aufgetreten ist.

Sie können auf jedes Ereignis hören, indem Sie eine Listener-Funktion seinem Attribut zuweisen:

```js
filter.onstart = (event) => {
  console.log("started");
};
```

Beachten Sie, dass die Anforderung während der Ausführung von Ereignis-Listenern blockiert ist.

Der Filter bietet eine {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}-Funktion. Ab dem `onstart`-Ereignis können Sie diese Funktion jederzeit nutzen, um Daten in den Ausgabestrom zu schreiben.

Wenn Sie Listener zu irgendeinem der Ereignisse des Filters hinzufügen, werden alle an die Rendering-Engine weitergeleiteten Antwortdaten durch die von Ihnen veranlassten `write()`-Aufrufe bereitgestellt. Wenn Sie also einen Listener hinzufügen und `write()` nicht aufrufen, bleibt die gerenderte Seite leer.

Sobald Sie die Interaktion mit der Antwort abgeschlossen haben, rufen Sie eine der folgenden Funktionen auf:

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}: Dies trennt den Filter von der Anfrage, sodass der Rest der Antwort normal verarbeitet wird.
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: Dies schließt die Anfrage, sodass keine zusätzlichen Antwortdaten verarbeitet werden.

Der Filter bietet auch Funktionen zum {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} und {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}} der Anfrage.

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
  - : Schreibt einige Daten in den Ausgabestrom.

## Eigenschaften

- {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}
  - : Ereignishandler, der aufgerufen wird, wenn eingehende Daten verfügbar sind.
- {{WebExtAPIRef("webRequest.StreamFilter.onerror")}}
  - : Ereignishandler, der aufgerufen wird, wenn ein Fehler aufgetreten ist.
- {{WebExtAPIRef("webRequest.StreamFilter.onstart")}}
  - : Ereignishandler, der aufgerufen wird, wenn der Strom kurz davor steht, Daten zu empfangen.
- {{WebExtAPIRef("webRequest.StreamFilter.onstop")}}
  - : Ereignishandler, der aufgerufen wird, wenn der Strom keine Daten mehr liefert und geschlossen ist.
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : Wenn {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} aufgerufen wird, beschreibt dies den Fehler.
- {{WebExtAPIRef("webRequest.StreamFilter.status")}}
  - : Beschreibt den aktuellen Status des Stroms.

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
