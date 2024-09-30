---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein `StreamFilter` ist ein Objekt, das Sie verwenden können, um HTTP-Antworten zu überwachen und zu modifizieren.

Um einen `StreamFilter` zu erstellen, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData()")}} auf und übergeben Sie die ID der Webanfrage, die Sie filtern möchten.

Sie können sich den Stream-Filter als eine Instanz vorstellen, die zwischen dem Netzwerk-Stack und der Rendering-Engine des Browsers sitzt. Der Filter erhält HTTP-Antwortdaten, während diese vom Netzwerk empfangen werden. Er kann die Daten untersuchen und modifizieren, bevor er sie an die Rendering-Engine weitergibt, wo sie analysiert und gerendert werden. Der Filter hat die volle Kontrolle über den Antwortkörper, und das Standardverhalten ohne jegliche Listener oder Schreibvorgänge ist ein Stream ohne Inhalt, der niemals endet.

Der Filter generiert vier verschiedene Ereignisse:

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}} wenn der Filter kurz davor steht, Antwortdaten zu empfangen.
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}} wenn einige Antwortdaten vom Filter empfangen wurden und zur Untersuchung oder Modifikation zur Verfügung stehen.
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}} wenn der Filter das Empfangen von Antwortdaten beendet hat.
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}} wenn ein Fehler beim Initialisieren und Betrieb des Filters aufgetreten ist.

Sie können auf jedes Ereignis lauschen, indem Sie eine Listener-Funktion seinem Attribut zuweisen:

```js
filter.onstart = (event) => {
  console.log("started");
};
```

Beachten Sie, dass die Anfrage während der Ausführung eines Listener-Ereignisses blockiert ist.

Der Filter bietet die Funktion {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}. Ab dem `onstart`-Ereignis können Sie diese Funktion verwenden, um Daten in den Ausgabestream zu schreiben.

Wenn Sie Listener zu einem der Filterereignisse hinzufügen, werden alle an die Rendering-Engine übergebenen Antwortdaten durch Aufrufe, die Sie an `write()` machen, bereitgestellt. Wenn Sie also einen Listener hinzufügen und `write()` nicht aufrufen, bleibt die gerenderte Seite leer.

Sobald Sie die Interaktion mit der Antwort abgeschlossen haben, rufen Sie eine der folgenden Funktionen auf:

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}: Trennt den Filter von der Anfrage, sodass der Rest der Antwort normal verarbeitet wird.
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: Schließt die Anfrage, sodass keine zusätzlichen Antwortdaten verarbeitet werden.

Der Filter bietet auch Funktionen zum {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} und {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}}, um die Anfrage zu pausieren oder fortzusetzen.

## Methoden

- {{WebExtAPIRef("webRequest.StreamFilter.close()")}}
  - : Schließt die Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.disconnect()")}}
  - : Trennt den Filter von der Anfrage.
- {{WebExtAPIRef("webRequest.StreamFilter.resume()")}}
  - : Setzt die Verarbeitung der Anfrage fort.
- {{WebExtAPIRef("webRequest.StreamFilter.suspend()")}}
  - : Pausiert die Verarbeitung der Anfrage.
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
  - : Ereignishandler, der aufgerufen wird, wenn der Stream keine Daten mehr liefert und geschlossen wurde.
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : Wenn {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} aufgerufen wird, beschreibt dies den Fehler.
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

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
