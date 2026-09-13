---
title: Navigations- und Ressourcen-Timings
slug: Web/Performance/Guides/Navigation_and_resource_timings
l10n:
  sourceCommit: 03d7663c2965d67eca296f6a27aa8a651de7dfee
---

**Navigations-Timings** sind Metriken zur Messung der Navigationsereignisse eines Browsers. **Ressourcen-Timings** sind detaillierte Netzwerk-Timing-Messungen zum Laden von Ressourcen einer Anwendung. Beide bieten dieselben schreibgeschützten Eigenschaften, aber die Navigations-Timing misst die Zeitmessungen des Hauptdokuments, während die Ressourcen-Timing die Zeiten für alle vom Hauptdokument aufgerufenen Ressourcen und die angeforderten Ressourcen der Ressourcen bereitstellt.

Die generellen Performance-Timings unten wurden zugunsten der Performance Entry API, die es ermöglicht, entlang des Navigations- und Ressourcenladeprozesses Zeiten zu markieren und zu messen, als veraltet markiert. Obwohl veraltet, werden sie in allen Browsern unterstützt.

## Performance Timings

Die [performanceTiming API](/de/docs/Web/API/PerformanceTiming), eine JavaScript-API zur Messung der Ladeperformance der angeforderten Seite, ist veraltet, wird jedoch in allen Browsern unterstützt. Sie wurde durch die [performanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API ersetzt.

Die Performance-Timing-API bot schreibgeschützte Zeiten in Millisekunden(ms), die beschreiben, wann jeder Punkt im Seitenladeprozess erreicht wurde. Wie im Bild unten gezeigt, geht der Navigationsprozess von [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) und [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd).

![Navigation Timing Ereignismetriken](screen_shot_2019-05-03_at_1.06.27_pm.png)

Mit den obigen Metriken und etwas Mathematik können wir viele wichtige Metriken berechnen, wie {{Glossary("Time_to_first_byte", "Time to First Byte")}}, Seitenladezeit, DNS-Abfrage und ob die Verbindung sicher ist.

Um den Zeitaufwand für alle Schritte zu messen, bietet die Performance-Timing-API schreibgeschützte Messungen der Navigations-Timings. Um unsere App-Timings zu betrachten und zu erfassen, geben wir ein:

```js
let time = window.performance.timing;
```

Wir können dann die Ergebnisse nutzen, um zu messen, wie gut unsere App funktioniert.

![Eingeben von window.performance.timing in der Konsole listet alle Timings in der PerformanceNavigationTiming-Schnittstelle auf](navigatortiming.png)

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
        Wenn die Aufforderung zum Entladen des vorherigen Dokuments im selben
        Browsing-Kontext endet. Wenn es kein vorheriges Dokument gibt, wird
        dieser Wert derselbe sein wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart)
      </td>
      <td>
        Wenn der sichere Verbindungs-Handshake beginnt. Wenn keine solche
        Verbindung angefordert wird, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart)
      </td>
      <td>
        Wenn die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung
        gibt oder eine der Weiterleitungen nicht vom selben Ursprung stammt,
        ist der zurückgegebene Wert <code>0</code>.
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
          Weiterleitung gibt oder eine der Weiterleitungen nicht vom selben
          Ursprung stammt, ist der zurückgegebene Wert <code>0</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd)
      </td>
      <td>
        Wenn die Netzwerkverbindung geöffnet ist. Wenn die Transportschicht
        einen Fehler meldet und die Verbindung erneut gestartet wird, wird die
        Endzeit der letzten Verbindungsherstellung angegeben. Wenn eine
        persistente Verbindung verwendet wird, ist der Wert derselbe wie
        <code>PerformanceTiming.fetchStart</code>. Eine Verbindung gilt als
        geöffnet, wenn alle sicheren Verbindungs-Handshakes oder
        SOCKS-Authentifizierungen beendet sind.
      </td>
    </tr>
    <tr>
      <td>
        [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart)
      </td>
      <td>
        Wenn die Anfrage zum Öffnen einer Verbindung an das Netzwerk gesendet
        wird. Wenn die Transportschicht einen Fehler meldet und die Verbindung
        erneut gestartet wird, wird die Startzeit der letzten
        Verbindungsherstellung angegeben. Wenn eine persistente Verbindung
        verwendet wird, ist der Wert derselbe wie
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd)
      </td>
      <td>
        Wenn die Domain-Abfrage abgeschlossen ist. Wenn eine persistente
        Verbindung verwendet wird oder die Information im Cache oder einer
        lokalen Ressource gespeichert ist, ist der Wert derselbe wie
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart)
      </td>
      <td>
        Wenn die Domain-Abfrage beginnt. Wenn eine persistente Verbindung
        verwendet wird oder die Information im Cache oder einer lokalen
        Ressource gespeichert ist, ist der Wert derselbe wie
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart)
      </td>
      <td>
        Wenn der Browser bereit ist, das Dokument mit einer HTTP-Anfrage
        abzurufen. Dieser Moment liegt <em>vor</em> der Überprüfung eines
        Anwendungs-Caches.
      </td>
    </tr>
    <tr>
      <td>
        [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart)
      </td>
      <td>
        Wenn der Browser die Anfrage gesendet hat, um das aktuelle Dokument vom
        Server oder aus einem Cache zu erhalten. Wenn die Transportschicht nach
        Beginn der Anfrage fehlschlägt und die Verbindung erneut geöffnet wird,
        wird diese Eigenschaft auf die Zeit der neuen Anfrage gesetzt.
      </td>
    </tr>
    <tr>
      <td>
        [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart)
      </td>
      <td>
        Wenn der Browser das erste Byte der Antwort vom Server, aus einem
        Cache oder einer lokalen Ressource empfangen hat.
      </td>
    </tr>
    <tr>
      <td>
        [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd)
      </td>
      <td>
        Wenn der Browser das letzte Byte der Antwort empfangen hat oder wenn
        die Verbindung geschlossen wird, falls dies zuerst geschah, vom Server,
        dem Cache oder einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading)
      </td>
      <td>
        Wenn der Parser seine Arbeit begonnen hat, also wenn sein
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
        Ereignis ausgelöst wurde, das die Zeit angibt, zu der das vorherige
        Dokument im Fenster mit dem Entladen begonnen hat. Wenn es kein
        vorheriges Dokument gibt oder wenn das vorherige Dokument oder einer
        der benötigten Weiterleitungen nicht vom selben Ursprung stammt, wird
        der Wert <code>0</code> zurückgegeben.
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
        Ereignishandler abgeschlossen ist. Wenn es kein vorheriges Dokument
        gibt oder wenn das vorherige Dokument oder eine der benötigten
        Weiterleitungen nicht vom selben Ursprung stammt, wird der Wert
        <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive)
      </td>
      <td>
        Wenn der Parser seine Arbeit am Hauptdokument beendet hat, also wenn
        sein
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
        Unmittelbar bevor der Parser das
        <code
          ><a href="/de/docs/Web/API/Document/DOMContentLoaded_event"
            >DOMContentLoaded</a
          ></code
        >
        Ereignis gesendet hat, das heißt direkt nachdem alle Skripte, die
        direkt nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)
      </td>
      <td>
        Unmittelbar nachdem alle Skripte, die so schnell wie möglich in
        beliebiger Reihenfolge ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete)
      </td>
      <td>
        Wenn der Parser seine Arbeit am Hauptdokument beendet hat, also wenn
        sein
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
        noch nicht gesendet wurde, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd)
      </td>
      <td>
        Wenn der
        <code><a href="/de/docs/Web/API/Window/load_event">load</a></code>
        Ereignishandler beendet ist, das heißt, wenn das Ladeereignis
        abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet oder
        abgeschlossen ist, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

### Berechnung von Zeiten

Wir können diese Werte verwenden, um spezifische, interessante Zeiten zu messen:

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### Time to First Byte

{{Glossary("Time_to_first_byte", "Time to First Byte")}} ist die Zeit zwischen `navigationStart` (Beginn der Navigation) und `responseStart` (wenn das erste Byte der Antwortdaten empfangen wird), verfügbar in der `performanceTiming` API:

```js
const ttfb = time.responseStart - time.navigationStart;
```

### Seitenladezeit

{{Glossary("Page_load_time", "Seitenladezeit")}} ist die Zeit zwischen `navigationStart` und dem Beginn des Ladevorgangs des aktuellen Dokuments. Diese sind nur in der performanceTiming API verfügbar.

```js
let pageloadTime = time.loadEventStart - time.navigationStart;
```

### DNS-Abfragezeit

Die DNS-Abfragezeit ist die Zeit zwischen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Diese sind in beiden, der `performanceTiming` und der `performanceNavigationTiming` APIs, verfügbar.

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Die Zeit, die für das {{Glossary("TCP", "TCP")}} Handshake benötigt wird, ist die Zeit zwischen Verbindungsbeginn und Verbindungsende:

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS-Verhandlung

[`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) wird `undefined`, wenn nicht verfügbar, `0`, wenn {{Glossary("HTTPS", "HTTPS")}} nicht verwendet wird, oder ein Zeitstempel, wenn verfügbar und verwendet. Mit anderen Worten, wenn eine sichere Verbindung verwendet wurde, ist `secureConnectionStart` {{Glossary("Truthy", "truthy")}}, und die Zeit zwischen `secureConnectionStart` und `requestStart` wird größer als 0 sein.

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Die oben genannten allgemeinen Performance-Timings sind veraltet, aber vollständig unterstützt. Wir haben jetzt die [Performance Entry API](/de/docs/Web/API/PerformanceEntry), die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourcenladeprozesses ermöglicht. Sie können auch Markierungen erstellen:

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

In unterstützenden Browsern können Sie `performance.getEntriesByType('paint')` verwenden, um das Maß für `first-paint` und `first-contentful-paint` abzufragen. Wir verwenden `performance.getEntriesByType('navigation')` und `performance.getEntriesByType('resource')`, um die Navigations- und Ressourcen-Zeiten abzufragen.

## Navigation Timing

Wenn ein Nutzer eine Website oder Anwendung anfordert, durchläuft der Nutzeragent eine Reihe von Schritten, darunter eine {{Glossary("DNS", "DNS")}}-Abfrage, {{Glossary("TCP_handshake", "TCP-Handshakes")}} und TLS-Verhandlung, bevor der Nutzeragent die eigentliche Anfrage stellt und die Server die angeforderten Assets zurücksenden. Der Browser parst dann die empfangenen Inhalte, baut den DOM, CSSOM, Zugänglichkeit und Render-Bäume auf und rendert schließlich die Seite. Sobald der Nutzeragent das Parsen des Dokuments beendet hat, setzt der Nutzeragent die Dokumentbereitschaft auf _interaktiv_. Wenn es verzögerte Skripte gibt, die geparst werden müssen, wird er es tun, dann das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) auslösen, danach wird die Bereitschaft auf _vollständig_ gesetzt. Das Dokument kann nun nachgelagerte Aufgaben bearbeiten, nach denen das Dokument als vollständig geladen markiert wird.

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

Das `performance.getEntriesByType('navigation')` gibt ein Array von [PerformanceEntry](/de/docs/Web/API/PerformanceEntry) Objekten für den _navigation_ _type_ zurück.

![Die Ergebnisse, wenn performance.getEntriesByType('navigation'); in die Konsole für dieses Dokument eingegeben wird.](perfgentrybytypenavigation.png)

Vieles kann aus diesen Timings gewonnen werden. Im obigen Bild sehen wir über die _name_ Eigenschaft, dass die Datei, die gemessen wird, dieses Dokument ist. Für die weitere Erklärung verwenden wir die folgende Variable:

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### Protokoll

Wir können das verwendete Protokoll durch Abfrage überprüfen:

```js
const protocol = timing.nextHopProtocol;
```

Es gibt das Netzwerkprotokoll zurück, das verwendet wurde, um die Ressource abzurufen: in diesem Fall `h2` für `http/2`.

### Komprimierung

Um die Einsparungsprozentsätze bei der Komprimierung zu erhalten, teilen wir die transferSize durch die decodedBodySize und subtrahieren das von 100%. Wir sehen eine Einsparung von über 74%.

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

Wir hätten

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

verwenden können, aber die Verwendung von `transferSize` schließt die Overhead-Bytes ein.

Zum Vergleich können wir auf den Netzwerk-Tab schauen und sehen, dass wir 22,04 KB für eine unkomprimierte Dateigröße von 87,24 KB transferiert haben.

![Ansicht der übertragenen Bytes und der Größe über den Netzwerk-Tab](bytesdownloaded.png)

Wenn wir die Mathematik mit diesen Zahlen durchführen, erhalten wir dasselbe Ergebnis: `1 - (22,04 / 87,24) = 0,747`. Die Navigationstiming ermöglicht es uns, programmgesteuert Transfergrößen und Bandbreiteneinsparungen zu überprüfen.

Beachten Sie, dass dies die Größe für dieses einzelne Dokument allein ist: für diese Ressource allein, nicht für alle Ressourcen zusammen. Die Dauer, Ladeereignisse und DOM-bezogene Timings beziehen sich jedoch auf die gesamte Navigation, nicht auf dieses einzelne Asset. Client-seitige Webanwendungen können schneller erscheinen als diese mit Transfergrößen unter 10000 und dekodierten Körpergrößen unter 30000, aber das bedeutet nicht, dass JavaScript, CSS oder Medien-Assets keinen Ballast hinzufügen. Das Überprüfen von Kompressionsverhältnissen ist wichtig, aber stellen Sie sicher, dass Sie auch die Dauer und die Zeit zwischen dem Ende des DOMContentLoaded-Events und dem vollständigen DOM überprüfen, da das Ausführen von JavaScript im Hauptthread über lange Zeiträume zu einer nicht antwortenden Benutzeroberfläche führen kann.

### Anfragetime

Die API liefert nicht jede Messung, die Sie möglicherweise wünschen. Zum Beispiel, wie lange hat die Anfrage gedauert? Wir können die Messungen, die wir haben, verwenden, um unsere Antwort zu bekommen.

Um die Antwortzeit zu messen, ziehen Sie die Startzeit der Anforderung von der Startzeit der Antwort ab. Der Anfragebeginn ist der Moment unmittelbar bevor der Nutzeragent die Ressource vom Server, den relevanten Anwendungs-Caches oder den lokalen Ressourcen anfordert. Die Antwortbeginn ist die Zeit unmittelbar nachdem der HTTP-Parser des Nutzeragenten das erste Byte der Antwort von den relevanten Anwendungs-Caches, den lokalen Ressourcen oder dem Server erhält, was geschieht, nachdem die Anfrage empfangen und verarbeitet wurde.

```js
const request = timing.responseStart - timing.requestStart;
```

### Ladeereignisdauer

Indem Sie den Zeitstempel von unmittelbar bevor das Ladeereignis des aktuellen Dokuments ausgelöst wird von der Zeit subtrahieren, zu der das Ladeereignis des aktuellen Dokuments abgeschlossen ist, können Sie die Dauer des Ladeereignisses messen.

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded-Ereignis

Die Dauer des DOMContentLoaded-Ereignisses wird gemessen, indem der Zeitwert unmittelbar bevor der Nutzeragent das DOMContentLoaded-Ereignis auslöst von dem Zeitwert unmittelbar nach Abschluss des Ereignisses subtrahiert wird. Dieses Ereignis auf 50 ms oder schneller zu halten, trägt dazu bei, eine ansprechende Benutzeroberfläche sicherzustellen.

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Dauer

Wir erhalten die Dauer. Die Dauer ist der Unterschied zwischen den Eigenschaften [PerformanceNavigationTiming.loadEventEnd](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [PerformanceEntry.startTime](/de/docs/Web/API/PerformanceEntry/startTime).

Die PerformanceNavigationTiming-Schnittstelle bietet zudem Informationen darüber, welche Navigationsart Sie messen, indem sie `navigate`, `reload` oder `back_forward` zurückgibt.

## Ressourcen-Timing

Während das Navigations-Timing zur Messung der Leistung der _Hauptseite_ dient, in der Regel die HTML-Datei, über die alle anderen Assets angefordert werden, misst das Ressourcen-Timing die Zeiten für _einzelne Ressourcen_, die vom Hauptdokument aufgerufenen Assets und alle Ressourcen, die diese Ressourcen anfordern. Viele der Messungen sind ähnlich: Es gibt eine DNS-Abfrage, ein TCP-Handshake und der Beginn der sicheren Verbindung wird einmal pro Domäne durchgeführt.

![Grafik der Resource Timing Zeitstempel](resourcetiming-timestamps.jpg)

Das Hauptaugenmerk liegt auf den einzelnen Ressourcen.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
