---
title: Navigation und Ressourcentimings
slug: Web/Performance/Guides/Navigation_and_resource_timings
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

**Navigationstimings** sind Metriken, die die Navigationsereignisse eines Browsers messen. **Ressourcentimings** sind detaillierte Netzwerktimings, die das Laden von Anwendungsressourcen betreffen. Beide bieten die gleichen schreibgeschützten Eigenschaften, aber Navigationstimings messen die Zeiten des Hauptdokuments, während Ressourcentimings die Zeiten für alle vom Hauptdokument aufgerufenen Assets oder Ressourcen und deren angeforderte Ressourcen bereitstellen.

Die allgemeinen Leistungstimings unten wurden zugunsten der Performance Entry API veraltet, die das Markieren und Messen von Zeiten während des Navigations- und Ressourcenladeprozesses ermöglicht. Obwohl veraltet, werden sie in allen Browsern unterstützt.

## Leistungstimings

Die [performanceTiming-API](/de/docs/Web/API/PerformanceTiming), eine JavaScript-API zur Messung der Ladeleistung der angeforderten Seite, ist veraltet, wird jedoch in allen Browsern unterstützt. Sie wurde durch die [performanceNavigationTiming-API](/de/docs/Web/API/PerformanceNavigationTiming) ersetzt.

Die Performance Timing API bot schreibgeschützte Zeiten in Millisekunden (ms), die beschreiben, zu welchem Zeitpunkt jeder Punkt im Seitenladeprozess erreicht wurde. Wie im Bild unten dargestellt, umfasst der Navigationsprozess [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) und [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd).

![Navigation Timing Ereignismetriken](screen_shot_2019-05-03_at_1.06.27_pm.png)

Mit den oben genannten Metriken und etwas Mathematik können wir viele wichtige Metriken wie {{Glossary("Time_to_first_byte", "time to first byte")}}, Seitenladezeit und DNS-Lookup berechnen und feststellen, ob die Verbindung sicher ist.

Um die Zeit zu messen, die benötigt wird, um alle Schritte abzuschließen, bietet die Performance Timing API schreibgeschützte Messungen der Navigationstimings. Um die Timings unserer App anzuzeigen und zu erfassen, geben wir ein:

```js
let time = window.performance.timing;
```

Wir können dann die Ergebnisse nutzen, um zu messen, wie gut unsere App funktioniert.

![Die Eingabe von window.performance.timing im Konsolenfenster listet alle Timings in der PerformanceNavigationTiming-Schnittstelle auf](navigatortiming.png)

Die Reihenfolge ist:

<table>
  <thead>
    <tr>
      <th>Leistungstimings</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)
      </td>
      <td>
        Wann die Aufforderung zum Entladen des vorherigen Dokuments im gleichen Browsing-Kontext endet. Wenn es kein vorheriges Dokument gibt, ist dieser Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart)
      </td>
      <td>
        Wann der sichere Verbindungshandshake beginnt. Wenn keine solche Verbindung angefordert wird, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart)
      </td>
      <td>
        Wann die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung gibt oder eine der Weiterleitungen nicht vom gleichen Ursprung stammt, ist der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd)
      </td>
      <td>
        <p>
          Wann die letzte HTTP-Weiterleitung abgeschlossen ist, d.h. wann das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt oder eine der Weiterleitungen nicht vom gleichen Ursprung stammt, ist der zurückgegebene Wert <code>0</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd)
      </td>
      <td>
        Wann die Verbindung zum Netzwerk geöffnet wird. Wenn die Transportschicht einen Fehler meldet und die Verbindung erneut gestartet wird, wird die letzte Zeit des Verbindungsaufbaus angegeben. Wenn eine dauerhafte Verbindung verwendet wird, entspricht der Wert <code>PerformanceTiming.fetchStart</code>. Eine Verbindung gilt als geöffnet, wenn alle sicheren Verbindungshandshakes oder SOCKS-Authentifizierungen abgeschlossen sind.
      </td>
    </tr>
    <tr>
      <td>
        [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart)
      </td>
      <td>
        Wann die Anforderung zum Öffnen einer Verbindung an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Startzeit des Verbindungsaufbaus angegeben. Wenn eine dauerhafte Verbindung verwendet wird, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd)
      </td>
      <td>
        Wann die Domain-Suche abgeschlossen ist. Wenn eine dauerhafte Verbindung verwendet wird oder die Informationen im Cache oder in einer lokalen Ressource gespeichert sind, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart)
      </td>
      <td>
        Wann die Domain-Suche beginnt. Wenn eine dauerhafte Verbindung verwendet wird oder die Informationen im Cache oder in einer lokalen Ressource gespeichert sind, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart)
      </td>
      <td>
        Wann der Browser bereit ist, das Dokument über eine HTTP-Anfrage abzurufen. Dieser Moment ist <em>vor</em> der Überprüfung des Anwendungs-Caches.
      </td>
    </tr>
    <tr>
      <td>
        [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart)
      </td>
      <td>
        Wann der Browser die Anfrage gesendet hat, um das eigentliche Dokument vom Server oder aus einem Cache zu erhalten. Wenn die Transportschicht nach dem Start der Anfrage fehlschlägt und die Verbindung erneut geöffnet wird, wird diese Eigenschaft auf die Zeit gesetzt, die der neuen Anfrage entspricht.
      </td>
    </tr>
    <tr>
      <td>
        [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart)
      </td>
      <td>
        Wann der Browser das erste Byte der Antwort vom Server, einem Cache oder einer lokalen Ressource erhalten hat.
      </td>
    </tr>
    <tr>
      <td>
        [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd)
      </td>
      <td>
        Wann der Browser das letzte Byte der Antwort erhalten hat oder wann die Verbindung geschlossen wird, wenn dies zuerst geschieht, vom Server, Cache oder von einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading)
      </td>
      <td>
        Wann der Parser seine Arbeit begonnen hat, das heißt, wann sein [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf <code>'loading'</code> wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart)
      </td>
      <td>
        Wann das [`unload`](/de/docs/Web/API/Window/unload_event) Ereignis ausgelöst wurde, das den Zeitpunkt angibt, zu dem das vorherige Dokument im Fenster zu entladen begann. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der erforderlichen Weiterleitungen nicht vom selben Ursprung stammt, ist der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd)
      </td>
      <td>
        Wann der <code><a href="/de/docs/Web/API/Window/unload_event">unload</a></code>-Ereignishandler endet. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der erforderlichen Weiterleitungen nicht vom selben Ursprung stammt, ist der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive)
      </td>
      <td>
        Wann der Parser seine Arbeit am Hauptdokument abgeschlossen hat, das heißt, wann sein <a href="/de/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> auf <code>'interactive'</code> wechselt und das entsprechende <code><a href="/de/docs/Web/API/Document/readystatechange_event">readystatechange</a></code>-Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart)
      </td>
      <td>
        Unmittelbar bevor der Parser das <code><a href="/de/docs/Web/API/Document/DOMContentLoaded_event">DOMContentLoaded</a></code>-Ereignis gesendet hat, das heißt, nachdem alle Skripte, die unmittelbar nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)
      </td>
      <td>
        Unmittelbar nachdem alle Skripte ausgeführt wurden, die so schnell wie möglich, in der richtigen Reihenfolge oder nicht, ausgeführt werden müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete)
      </td>
      <td>
        Wann der Parser seine Arbeit am Hauptdokument abgeschlossen hat, das heißt, wann sein <a href="/de/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> auf <code>'complete'</code> wechselt und das entsprechende <code><a href="/de/docs/Web/API/Document/readystatechange_event">readystatechange</a></code>-Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart)
      </td>
      <td>
        Wann das <code><a href="/de/docs/Web/API/Window/load_event">load</a></code>-Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd)
      </td>
      <td>
        Wann der <code><a href="/de/docs/Web/API/Window/load_event">load</a></code>-Ereignishandler abgeschlossen ist, das heißt, wann das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet wurde oder noch nicht abgeschlossen ist, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

### Berechnung von Timings

Wir können diese Werte verwenden, um spezifische Timings von Interesse zu messen:

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### Time to first byte

{{Glossary("Time_to_first_byte", "Time to First Byte")}} ist die Zeit zwischen dem `navigationStart` (Beginn der Navigation) und `responseStart`, (wenn das erste Byte der Antwortdaten empfangen wird), verfügbar in der `performanceTiming` API:

```js
const ttfb = time.responseStart - time.navigationStart;
```

### Seitenladezeit

{{Glossary("Page_load_time", "Seitenladezeit")}} ist die Zeit zwischen `navigationStart` und dem Beginn, wann das Ladeereignis für das aktuelle Dokument gesendet wird. Diese sind nur in der performanceTiming API verfügbar.

```js
let pageloadTime = time.loadEventStart - time.navigationStart;
```

### DNS-Lookup-Zeit

Die DNS-Lookup-Zeit ist die Zeit zwischen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Diese sind sowohl in den `performanceTiming`- als auch in den `performanceNavigationTiming`-APIs verfügbar.

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Die Zeit, die das {{Glossary("TCP", "TCP")}}-Handshake dauert, ist die Zeit zwischen dem Verbindungsstart und dem Verbindungsende:

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS-Verhandlung

[`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) wird `undefined` sein, wenn nicht verfügbar, `0`, wenn {{Glossary("HTTPS", "HTTPS")}} nicht verwendet wird, oder ein Zeitstempel, wenn verfügbar und verwendet. Mit anderen Worten, wenn eine sichere Verbindung verwendet wurde, wird `secureConnectionStart` {{Glossary("Truthy", "truthy")}} sein, und die Zeit zwischen `secureConnectionStart` und `requestStart` wird größer als 0 sein.

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Die allgemeinen oben erwähnten Leistungstimings sind veraltet, aber vollständig unterstützt. Wir haben jetzt die [Performance Entry API](/de/docs/Web/API/PerformanceEntry), die Markierungen und Messungen während des Navigations- und Ressourcenladeprozesses bereitstellt. Sie können auch Markierungen erstellen:

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

In unterstützten Browsern können Sie `performance.getEntriesByType('paint')` verwenden, um die Messung für `first-paint` und `first-contentful-paint` abzufragen. Wir verwenden `performance.getEntriesByType('navigation')` und `performance.getEntriesByType('resource')`, um die Navigations- bzw. Ressourcentimings abzufragen.

## Navigationstiming

Wenn ein Benutzer eine Website oder Anwendung anfordert, [um den Browser zu füllen](/de/docs/Web/Performance/Guides/How_browsers_work), durchläuft der Benutzeragent eine Reihe von Schritten, einschließlich eines {{Glossary("DNS", "DNS")}}-Lookups, eines {{Glossary("TCP_handshake", "TCP-Handshakes")}} und einer TLS-Verhandlung, bevor der Benutzeragent die eigentliche Anfrage stellt und die Server die angeforderten Assets zurückgeben. Der Browser analysiert dann die empfangenen Inhalte, erstellt den DOM, CSSOM, Zugänglichkeits- und Renderbaum und rendert schließlich die Seite. Sobald der Benutzeragent die Analyse des Dokuments beendet, setzt er die Dokumentbereitschaft auf _interactive_. Wenn es aufgeschobene Skripte gibt, die analysiert werden müssen, wird er dies tun und dann das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) auslösen, wonach die Bereitschaft auf _complete_ gesetzt wird. Das Dokument kann nun Aufgaben nach dem Laden bearbeiten, wonach das Dokument als vollständig geladen markiert wird.

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

Die `performance.getEntriesByType('navigation')` gibt ein Array von [PerformanceEntry](/de/docs/Web/API/PerformanceEntry)-Objekten für den _navigation_-_type_ zurück.

![Die Ergebnisse der Eingabe von performance.getEntriesByType('navigation'); in die Konsole für dieses Dokument](perfgentrybytypenavigation.png)

Aus diesen Timings kann viel gewonnen werden. Im obigen Bild sehen wir über die _name_-Eigenschaft, dass die Datei, die gemessen wird, dieses Dokument ist. Für den Rest dieser Erklärung verwenden wir die folgende Variable:

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### Protokoll

Wir können das verwendete Protokoll durch Abfrage prüfen:

```js
const protocol = timing.nextHopProtocol;
```

Es gibt das Netzwerkprotokoll zurück, das zum Abrufen der Ressource verwendet wurde: in diesem Fall `h2` für `http/2`.

### Komprimierung

Um den Prozentsatz der Komprimierungseinsparungen zu erhalten, teilen wir die `transferSize` durch die `decodedBodySize` und ziehen diesen von 100% ab. Wir sehen eine Einsparung von über 74%.

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

Wir hätten auch

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

verwenden können, aber die Verwendung von `transferSize` enthält die Overhead-Bytes.

Zum Vergleich können wir uns den Netzwerk-Tab ansehen und sehen, dass wir für eine unkomprimierte Dateigröße von 87,24 KB 22,04 KB übertragen haben.

![Ansicht der heruntergeladenen Bytes und Größe über den Netzwerk-Tab](bytesdownloaded.png)

Wenn wir die Mathematik mit diesen Zahlen anstellen, erhalten wir das gleiche Ergebnis: `1 - (22.04 / 87.24) = 0.747`. Die Navigationstimings bieten uns eine Möglichkeit, die Übertragungsgrößen und die Bandbreiteneinsparungen programmatisch zu überprüfen.

Beachten Sie, dass dies die Größe für dieses einzelne Dokument allein ist: nur für diese Ressource und nicht für alle kombinierten Ressourcen. Die Dauer, Ladeereignisse und DOM-bezogene Timings beziehen sich jedoch auf die gesamte Navigation, nicht nur auf dieses einzelne Asset. Clientseitige Webanwendungen können schneller erscheinen als diese mit Übertragungsgrößen unter 10000 und decodierten Body-Größen unter 30000, aber das bedeutet nicht, dass JavaScript, CSS oder Medien-Assets nicht zur Aufblähung beitragen. Die Überprüfung von Kompressionsverhältnissen ist wichtig, aber stellen Sie sicher, auch die Dauer und die Zeit zwischen dem Ende des DOMContentLoaded-Ereignisses und der Fertigstellung des DOM zu überprüfen, da das Ausführen von JavaScript im Hauptthread über längere Zeiträume eine nicht ansprechbare Benutzeroberfläche verursachen kann.

### Anforderungszeit

Die API bietet nicht jede Messung, die Sie möglicherweise wünschen. Zum Beispiel, wie lange dauerte die Anfrage? Wir können Messungen, die wir haben, verwenden, um unsere Antwort zu erhalten.

Um die Antwortzeit zu messen, ziehen Sie die Startzeit der Anfrage von der Startzeit der Antwort ab. Der Anfragebeginn ist der Moment unmittelbar bevor der Benutzeragent die Ressource vom Server, aus relevanten Anwendungs-Caches oder aus lokalen Ressourcen anfordert. Die Antwort startet, sobald der HTTP-Parser des Benutzeragenten das erste Byte der Antwort von relevanten Anwendungs-Caches, lokalen Ressourcen oder vom Server erhält, was nach dem Empfang und der Verarbeitung der Anfrage geschieht.

```js
const request = timing.responseStart - timing.requestStart;
```

### Ladeereignisdauer

Indem Sie den Zeitstempel unmittelbar bevor das Ladeereignis des aktuellen Dokuments ausgelöst wird von der Zeit abziehen, wann das Ladeereignis des aktuellen Dokuments abgeschlossen ist, können Sie die Dauer des Ladeereignisses messen.

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded-Ereignis

Die Dauer des DOMContentLoaded-Ereignisses wird durch das Abziehen des Zeitwerts unmittelbar bevor der Benutzeragent das DOMContentLoaded-Ereignis auslöst von dem Zeitwert unmittelbar nach dem Ende des Ereignisses gemessen. Wenn Sie dies bei 50 ms oder schneller halten, hilft dies, eine ansprechende Benutzeroberfläche sicherzustellen.

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Dauer

Wir erhalten die Dauer. Die Dauer ist die Differenz zwischen den Eigenschaften [PerformanceNavigationTiming.loadEventEnd](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [PerformanceEntry.startTime](/de/docs/Web/API/PerformanceEntry/startTime).

Die Schnittstelle PerformanceNavigationTiming bietet auch Informationen darüber, welche Art von Navigation Sie messen, und gibt `navigate`, `reload`, `back_forward` oder `prerender` zurück.

## Ressourcentiming

Während Navigationstimings zur Messung der Leistung der _Hauptseite_ dienen, also in der Regel der HTML-Datei, über die alle anderen Assets angefordert werden, messen Ressourcentimings die Zeit für _individuelle Ressourcen_, die von der Hauptseite aufgerufenen Assets und alle Ressourcen, die diese Ressourcen anfordern. Viele der Messungen sind ähnlich: Es gibt eine DNS-Abfrage, einen TCP-Handshake und der sichere Verbindungsstart wird einmal pro Domäne durchgeführt.

![Grafik der Zeitstempel des Ressourcentimings](resourcetiming-timestamps.jpg)

Das Hauptaugenmerk auf jede Ressource.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming),
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
