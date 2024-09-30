---
title: Navigation und Resource Timings
slug: Web/Performance/Navigation_and_resource_timings
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Navigation Timings** sind Metriken, die die Navigationsereignisse eines Browsers messen. **Resource Timings** sind detaillierte Netzwerkzeitmessungen bezüglich des Ladens der Ressourcen einer Anwendung. Beide bieten die gleichen schreibgeschützten Eigenschaften, aber die Navigation Timing misst die Zeiten des Hauptdokuments, während die Resource Timing die Zeiten für alle vom Hauptdokument aufgerufenen Ressourcen und die von diesen Ressourcen angeforderten Ressourcen bereitstellt.

Die allgemeinen Leistungszeiten unten sind zugunsten der Performance Entry API veraltet, die das Markieren und Messen von Zeiten während des Navigations- und Ressourcenladeprozesses ermöglicht. Obwohl veraltet, werden sie in allen Browsern unterstützt.

## Performance Timings

Die [performanceTiming API](/de/docs/Web/API/PerformanceTiming), eine JavaScript-API zur Messung der Ladeleistung der angeforderten Seite, ist veraltet, wird jedoch in allen Browsern unterstützt. Sie wurde durch die [performanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API ersetzt.

Die performanceTiming API lieferte nur lesbare Zeiten in Millisekunden (ms), die beschreiben, zu welchem Zeitpunkt jeder Punkt im Seitenladeprozess erreicht wurde. Wie im untenstehenden Bild dargestellt, reicht der Navigationsprozess von [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart), und [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd).

![Navigationsereignis-Metriken](screen_shot_2019-05-03_at_1.06.27_pm.png)

Mit den oben genannten Metriken und ein wenig Mathematik können wir viele wichtige Metriken berechnen, wie [Time to First Byte](/de/docs/Glossary/Time_to_first_byte), Seitenladezeit, DNS-Lookup und ob die Verbindung sicher ist.

Um die Zeit zu messen, die benötigt wird, um alle Schritte abzuschließen, bietet die Performance Timing API schreibgeschützte Messungen der Navigationszeiten. Um die Zeitmessungen unserer App anzuzeigen und zu erfassen, geben wir ein:

```js
let time = window.performance.timing;
```

Wir können dann die Ergebnisse verwenden, um zu messen, wie gut unsere App funktioniert.

![Die Eingabe von window.performance.timing in der Konsole listet alle Zeiten in der PerformanceNavigationTiming-Schnittstelle auf](navigatortiming.png)

Die Reihenfolge ist:

<table>
  <thead>
    <tr>
      <th>Performance Timings</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)
      </td>
      <td>
        Wenn die Eingabeaufforderung zum Entladen des vorherigen Dokuments im
        gleichen Browsing-Kontext beendet ist. Wenn es kein vorheriges Dokument
        gibt, entspricht dieser Wert
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart)
      </td>
      <td>
        Wenn der sichere Verbindungshandschlag beginnt. Wenn keine solche
        Verbindung angefordert wird, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart)
      </td>
      <td>
        Wenn die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung
        gibt oder eine der Weiterleitungen nicht aus demselben Ursprung stammt,
        wird der Wert <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd)
      </td>
      <td>
        <p>
          Wenn die letzte HTTP-Weiterleitung abgeschlossen ist, also wenn das
          letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine
          Weiterleitung gibt oder eine der Weiterleitungen nicht aus demselben
          Ursprung stammt, wird der Wert <code>0</code> zurückgegeben.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd)
      </td>
      <td>
        Wenn die Verbindung zum Netzwerk geöffnet wurde. Wenn die Transportschicht
        einen Fehler meldet und die Verbindungsherstellung erneut gestartet wird,
        wird die letzte Verbindungsherstellungs-Endzeit angegeben. Wenn eine
        persistente Verbindung verwendet wird, entspricht der Wert
        <code>PerformanceTiming.fetchStart</code>. Eine Verbindung gilt als
        geöffnet, wenn alle sicheren Verbindungs-Handshake- oder
        SOCKS-Authentifizierungen abgeschlossen sind.
      </td>
    </tr>
    <tr>
      <td>
        [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart)
      </td>
      <td>
        Wenn die Anfrage zum Öffnen einer Verbindung an das Netzwerk gesendet
        wird. Wenn die Transportschicht einen Fehler meldet und die
        Verbindungsherstellung erneut gestartet wird, wird die letzte
        Verbindungsherstellungs-Startzeit angegeben. Wenn eine persistente
        Verbindung verwendet wird, entspricht der Wert
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd)
      </td>
      <td>
        Wenn die Domain-Abfrage abgeschlossen ist. Wenn eine persistente
        Verbindung verwendet wird oder die Informationen in einem Cache oder
        einer lokalen Ressource gespeichert sind, entspricht der Wert
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart)
      </td>
      <td>
        Wenn die Domain-Abfrage beginnt. Wenn eine persistente Verbindung
        verwendet wird oder die Informationen in einem Cache oder einer lokalen
        Ressource gespeichert sind, entspricht der Wert
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart)
      </td>
      <td>
        Wenn der Browser bereit ist, das Dokument mit einer HTTP-Anfrage
        abzurufen. Dieser Moment ist <em>bevor</em> die Überprüfung auf einen
        Anwendungscache erfolgt.
      </td>
    </tr>
    <tr>
      <td>
        [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart)
      </td>
      <td>
        Wenn der Browser die Anfrage gesendet hat, um das tatsächliche Dokument
        vom Server oder aus einem Cache zu erhalten. Wenn die Transportschicht
        nach Beginn der Anfrage fehlschlägt und die Verbindung erneut geöffnet
        wird, wird diese Eigenschaft auf die entsprechende Zeit der neuen
        Anfrage gesetzt.
      </td>
    </tr>
    <tr>
      <td>
        [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart)
      </td>
      <td>
        Wenn der Browser das erste Byte der Antwort vom Server aus einem Cache
        oder einer lokalen Ressource erhält.
      </td>
    </tr>
    <tr>
      <td>
        [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd)
      </td>
      <td>
        Wenn der Browser das letzte Byte der Antwort erhält oder wenn die
        Verbindung geschlossen wird, falls dies zuerst passiert, vom Server, dem
        Cache oder von einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading)
      </td>
      <td>
        Wenn der Parser seine Arbeit begonnen hat, das heißt, wenn ihr
        [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu
        <code>'loading'</code> wechselt und das entsprechende
        [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
        Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart)
      </td>
      <td>
        Wenn das [`unload`](/de/docs/Web/API/Window/unload_event)
        Ereignis ausgelöst wurde, das den Zeitpunkt angibt, zu dem das vorherige
        Dokument im Fenster mit der Entladung begonnen hat. Wenn es kein
        vorheriges Dokument gibt oder wenn das vorherige Dokument oder einer der
        erforderlichen Redirects nicht aus demselben Ursprung stammen, wird der Wert <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd)
      </td>
      <td>
        Wenn der
        <code
          ><a href="/de/docs/Web/API/Window/unload_event">unload</a></code
        >
        Ereignishandler abgeschlossen wird. Wenn es kein vorheriges Dokument
        gibt oder wenn das vorherige Dokument oder einer der erforderlichen
        Redirects nicht aus demselben Ursprung stammen, wird der Wert
        <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive)
      </td>
      <td>
        Wenn der Parser seine Arbeit am Hauptdokument abgeschlossen hat, das
        heißt, wenn ihr
        <a href="/de/docs/Web/API/Document/readyState"
          ><code>Document.readyState</code></a
        >
        zu <code>'interactive'</code> wechselt und das entsprechende
        <code
          ><a href="/de/docs/Web/API/Document/readystatechange_event"
            >readystatechange</a
          ></code
        >
        Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart)
      </td>
      <td>
        Direkt bevor der Parser das
        <code
          ><a href="/de/docs/Web/API/Document/DOMContentLoaded_event"
            >DOMContentLoaded</a
          ></code
        >
        Ereignis gesendet hat, das ist direkt nachdem alle Skripte, die direkt
        nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)
      </td>
      <td>
        Direkt nachdem alle Skripte, die so schnell wie möglich, in
        Reihenfolge oder nicht, ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete)
      </td>
      <td>
        Wenn der Parser seine Arbeit am Hauptdokument abgeschlossen hat, das
        heißt, wenn ihr
        <a href="/de/docs/Web/API/Document/readyState"
          ><code>Document.readyState</code></a
        >
        zu <code>'complete'</code> wechselt und das entsprechende
        <code
          ><a href="/de/docs/Web/API/Document/readystatechange_event"
            >readystatechange</a
          ></code
        >
        Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart)
      </td>
      <td>
        Wenn das
        <code><a href="/de/docs/Web/API/Window/load_event">load</a></code>
        Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis
        noch nicht gesendet wurde, wird <code>0.</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd)
      </td>
      <td>
        Wenn der
        <code><a href="/de/docs/Web/API/Window/load_event">load</a></code>
        Ereignishandler abgeschlossen ist, das heißt, wenn das Ladeereignis
        abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet wurde oder
        noch nicht abgeschlossen ist, wird <code>0.</code> zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

### Berechnung der Zeiten

Wir können diese Werte verwenden, um bestimmte interessierende Zeiten zu messen:

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### Time to First Byte

[Time to First Byte](/de/docs/Glossary/Time_to_first_byte) ist die Zeit zwischen `navigationStart` (Beginn der Navigation) und `responseStart` (wenn das erste Byte der Antwortdaten empfangen wird), verfügbar in der `performanceTiming` API:

```js
const ttfb = time.responseStart - time.navigationStart;
```

### Seitenladezeit

[Seitenladezeit](/de/docs/Glossary/Page_load_time) ist die Zeit zwischen `navigationStart` und dem Beginn, wann das Ladeereignis für das aktuelle Dokument gesendet wird. Sie sind nur in der performanceTiming API verfügbar.

```js
let pageloadtime = time.loadEventStart - time.navigationStart;
```

### DNS-Lookup-Zeit

Die DNS-Lookup-Zeit ist die Zeit zwischen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Diese sind sowohl in den `performanceTiming`- als auch `performanceNavigationTiming`-APIs verfügbar.

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Die Zeit, die der [TCP](/de/docs/Glossary/TCP) Handshake benötigt, ist die Zeit zwischen dem Verbindungsbeginn und dem Verbindungsende:

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS-Verhandlung

[`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) wird `undefined` sein, wenn es nicht verfügbar ist, `0`, wenn [HTTPS](/de/docs/Glossary/HTTPS) nicht verwendet wird, oder ein Zeitstempel, wenn es verfügbar und verwendet wird. Mit anderen Worten, wenn eine sichere Verbindung verwendet wurde, wird `secureConnectionStart` [truthy](/de/docs/Glossary/Truthy) sein, und die Zeit zwischen `secureConnectionStart` und `requestStart` wird größer als 0 sein.

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Die allgemeinen Leistungszeiten oben sind veraltet, aber vollständig unterstützt. Wir haben jetzt die [Performance Entry API](/de/docs/Web/API/PerformanceEntry), die das Markieren und Messen von Zeiten während des Navigations- und Ressourcenladeprozesses ermöglicht. Sie können auch Markierungen erstellen:

```js
performance.getEntriesByType("navigation").forEach((navigation) => {
  console.dir(navigation);
});

performance.getEntriesByType("resource").forEach((resource) => {
  console.dir(resource);
});

performance.getEntriesByType("mark").forEach((mark) => {
  console.dir(mark);
});

performance.getEntriesByType("measure").forEach((measure) => {
  console.dir(measure);
});

performance.getEntriesByType("paint").forEach((paint) => {
  console.dir(paint);
});

performance.getEntriesByType("frame").forEach((frame) => {
  console.dir(frame);
});
```

In unterstützenden Browsern können Sie `performance.getEntriesByType('paint')` verwenden, um die Messung für `first-paint` und `first-contentful-paint` abzufragen. Wir verwenden `performance.getEntriesByType('navigation')` und `performance.getEntriesByType('resource')`, um die Navigations- und Ressourcetimes entsprechend abzufragen.

## Navigation Timing

Wenn ein Benutzer eine Website oder Anwendung anfordert, [um den Browser zu bevölkern](/de/docs/Web/Performance/How_browsers_work), durchläuft der Benutzeragent eine Reihe von Schritten, einschließlich einer [DNS](/de/docs/Glossary/DNS) Abfrage, [TCP-Handshake](/de/docs/Glossary/TCP_handshake) und TLS-Verhandlungen, bevor der Benutzeragent die eigentliche Anfrage stellt und die Server die angeforderten Assets zurückgeben. Der Browser parst dann den empfangenen Inhalt, erstellt die DOM-, CSSOM-, Zugänglichkeits- und Rendertrees und rendert schließlich die Seite. Sobald der Benutzeragent das Dokument nicht mehr parst, setzt der Benutzeragent die Dokumentbereitschaft auf _interaktiv_. Wenn Skripte vorhanden sind, die verzögert ausgeführt werden müssen, tut er dies und löst dann das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) aus, nach dem die Bereitschaft auf _vollständig_ gesetzt wird. Das Dokument kann nun Nachladeaufgaben behandeln, danach wird das Dokument als vollständig geladen markiert.

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

Das `performance.getEntriesByType('navigation')` gibt ein Array von [PerformanceEntry](/de/docs/Web/API/PerformanceEntry) Objekten für den _navigation_ _type_ zurück.

![Das Ergebnis, wenn performance.getEntriesByType('navigation'); für dieses Dokument in die Konsole eingegeben wird](perfgentrybytypenavigation.png)

Vieles kann aus diesen Zeiten gewonnen werden. Im obigen Bild sehen wir über die _name_ Eigenschaft, dass die Datei, die gemessen wird, dieses Dokument ist. Für den Rest dieser Erklärung verwenden wir die folgende Variable:

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### Protokoll

Wir können das verwendete Protokoll abfragen:

```js
const protocol = timing.nextHopProtocol;
```

Es gibt das Netzwerkprotokoll zurück, das verwendet wurde, um die Ressource abzurufen: in diesem Fall `h2` für `http/2`.

### Komprimierung

Um den Kompressionsersparnis-Prozentsatz zu erhalten, dividieren wir `transferSize` durch `decodedBodySize` und ziehen das von 100% ab. Wir sehen eine Ersparnis von über 74%.

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

Wir hätten auch

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

verwenden können, aber die Verwendung von `transferSize` umfasst die Overhead-Bytes.

Zum Vergleich können wir den Netzwerk-Tab betrachten und sehen, dass wir 22,04 KB für eine unkomprimierte Dateigröße von 87,24 KB übertragen haben.

![Ansicht der übertragenen Bytes und der Größe über den Netzwerk-Tab](bytesdownloaded.png)

Wenn wir mit diesen Zahlen rechnen, erhalten wir dasselbe Ergebnis: `1 - (22.04 / 87.24) = 0.747`. Die Navigation Timings bieten uns eine Möglichkeit, die Transfersizing und Bandbreiteneinsparungen programmgesteuert zu überprüfen.

Beachten Sie, dass dies die Größe für dieses einzelne Dokument allein ist: für diese Ressource allein, nicht für alle Ressourcen zusammen. Die Dauer, die Ladeereignisse und die DOM-bezogenen Timings betreffen die gesamte Navigation, nicht dieses einzelne Asset. Client-seitige Webanwendungen können schneller erscheinen als diese mit Transfergrößen unter 10000 und dekodierten Körpergrößen unter 30000, aber das bedeutet nicht, dass JavaScript, CSS oder Medien-Assets nicht zusätzlichen Ballast erzeugen. Überprüfen Sie die Kompressionsverhältnisse, stellen Sie jedoch auch sicher, dass Sie die Dauer und die Zeit zwischen dem Ende des DOMContentLoaded-Events und dem vollständigen DOM überprüfen, da das Ausführen von JavaScript im Hauptthread für längere Zeiträume zu einer nicht reagierenden Benutzeroberfläche führen kann.

### Anfragezeit

Die API liefert nicht jede Messung, die Sie sich wünschen könnten. Zum Beispiel, wie lange dauerte die Anfrage? Wir können die Messungen verwenden, die wir haben, um unsere Antwort zu erhalten.

Um die Antwortzeit zu messen, subtrahieren Sie die Anfrage-Startzeit von der Antwort-Startzeit. Der Anfrage-Start ist der Moment unmittelbar bevor der Benutzeragent beginnt, die Ressource vom Server, von relevanten Anwendungscaches oder von lokalen Ressourcen anzufordern. Der Antwortbeginn ist die Zeit unmittelbar nachdem der HTTP-Parser des Benutzeragenten das erste Byte der Antwort von relevanten Anwendungscaches, von lokalen Ressourcen oder vom Server erhält, welche nach dem Empfang und der Verarbeitung der Anfrage erfolgen.

```js
const request = timing.responseStart - timing.requestStart;
```

### Ladeereignis-Dauer

Indem Sie den Zeitstempel unmittelbar bevor das Ladeereignis des aktuellen Dokuments ausgelöst wird von der Zeit subtrahieren, zu welcher das Ladeereignis des aktuellen Dokuments abgeschlossen ist, können Sie die Dauer des Ladeereignisses messen.

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded-Ereignis

Die DOMContentLoaded-Ereignisdauer wird gemessen, indem Sie den Zeitwert unmittelbar bevor der Benutzeragent das DOMContentLoaded-Ereignis auslöst von dem Zeitwert subtrahieren, der unmittelbar nach dem Abschluss des Ereignisses vorhanden ist. Diese bei 50 ms oder schneller zu halten, hilft, eine reaktionsfähige Benutzeroberfläche sicherzustellen.

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Dauer

Wir bekommen die Dauer zur Verfügung gestellt. Die Dauer ist der Unterschied zwischen den [PerformanceNavigationTiming.loadEventEnd](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd)- und [PerformanceEntry.startTime](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaften.

Die PerformanceNavigationTiming-Schnittstelle bietet auch Informationen darüber, welchen Navigationsart Sie messen, zurückgebend `navigate`, `reload`, `back_forward` oder `prerender`.

## Resource Timing

Während die Navigation Timing zur Messung der Leistung der _Hauptseite_, im Allgemeinen der HTML-Datei, über die alle anderen Assets angefordert werden, dient, misst Resource Timing die Zeitmessung für _einzelne Ressourcen_, die Assets, die von der Hauptseite aufgerufen werden, und alle Assets, die diese Ressourcen anfordern. Viele der Messungen sind ähnlich: Es gibt eine DNS-Abfrage, einen TCP-Handshake und der sichere Verbindungsstart wird einmal pro Domain durchgeführt.

![Grafik der Resource Timing Zeitstempel](resourcetiming-timestamps.jpg)

Das Hauptaugenmerk bei jeder Ressource liegt darauf.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming),
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
