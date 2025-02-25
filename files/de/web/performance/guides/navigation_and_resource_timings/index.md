---
title: Navigations- und Ressourcentimings
slug: Web/Performance/Guides/Navigation_and_resource_timings
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

**Navigationstiming** sind Metriken, die die Navigationsereignisse eines Browsers dokumentieren. **Ressourcentiming** sind detaillierte Netzwerkzeitmessungen, die das Laden von Ressourcen einer Anwendung betreffen. Beide bieten die gleichen nur lesbaren Eigenschaften, aber Navigationstiming misst die Zeiten des Hauptdokuments, während das Ressourcentiming die Zeiten für alle vom Hauptdokument aufgerufenen Assets oder Ressourcen und die angeforderten Ressourcen dieser Ressourcen bereitstellt.

Die allgemeinen Leistungstiming unten wurden zugunsten der Performance Entry API veraltet, die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourceladeprozesses ermöglicht. Obwohl veraltet, werden sie in allen Browsern unterstützt.

## Leistungstiming

Die [performanceTiming API](/de/docs/Web/API/PerformanceTiming), eine JavaScript-API zur Messung der Ladeleistung der angeforderten Seite, ist veraltet, wird jedoch in allen Browsern unterstützt. Sie wurde durch die [performanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API ersetzt.

Die Performance Timing API bietet nur lesbare Zeiten in Millisekunden(ms), die beschreiben, zu welchem Zeitpunkt jeder Punkt im Seitenladeprozess erreicht wurde. Wie im Bild unten dargestellt, reicht der Navigationsprozess von [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) und [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd).

![Navigation Timing Ereignismetriken](screen_shot_2019-05-03_at_1.06.27_pm.png)

Mit den obigen Metriken und etwas Mathematik können wir viele wichtige Metriken berechnen, wie {{Glossary("Time_to_first_byte", "Time to first byte")}}, Seitenladezeit, DNS-Lookup und ob die Verbindung sicher ist.

Um die Zeitmessungen aller Schritte zu erleichtern, bietet die Performance Timing API nur lesbare Messungen von Navigationstiming. Um die Zeit unseres Apps anzuzeigen und aufzuzeichnen, geben wir ein:

```js
let time = window.performance.timing;
```

Wir können dann die Ergebnisse nutzen, um zu messen, wie gut unsere App funktioniert.

![Eingeben von window.performance.timing in der Konsole listet alle Zeitmessungen in der PerformanceNavigationTiming-Schnittstelle auf](navigatortiming.png)

Die Reihenfolge ist:

<table>
  <thead>
    <tr>
      <th>Leistungstiming</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)
      </td>
      <td>
        Wenn die Aufforderung zum Entladen des vorherigen Dokuments im selben Browsing-Kontext beendet wird. Wenn es kein vorheriges Dokument gibt, ist dieser Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart)
      </td>
      <td>
        Wann der sichere Verbindungshandschlag beginnt. Wenn eine solche Verbindung nicht angefordert wird, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart)
      </td>
      <td>
        Wann die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung gibt oder eine der Weiterleitungen nicht vom selben Ursprung ist, beträgt der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd)
      </td>
      <td>
        <p>
          Wann die letzte HTTP-Weiterleitung abgeschlossen ist, das heißt, wann das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt oder eine der Weiterleitungen nicht vom selben Ursprung ist, beträgt der zurückgegebene Wert <code>0</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd)
      </td>
      <td>
        Wann die Verbindung im Netzwerk geöffnet wird. Wenn die Transportschicht einen Fehler meldet und die Verbindungserstellung erneut gestartet wird, wird die letzte Endzeit der Verbindungserstellung angegeben. Wenn eine dauerhafte Verbindung verwendet wird, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>. Eine Verbindung gilt als geöffnet, wenn alle sichere Verbindungshandschläge oder SOCKS-Authentifizierungen beendet sind.
      </td>
    </tr>
    <tr>
      <td>
        [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart)
      </td>
      <td>
        Wann die Anfrage zum Öffnen einer Verbindung an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und die Verbindungserstellung erneut gestartet wird, wird die letzte Startzeit der Verbindungserstellung angegeben. Wenn eine dauerhafte Verbindung verwendet wird, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd)
      </td>
      <td>
        Wenn das Domain-Lookup abgeschlossen ist. Wenn eine dauerhafte Verbindung verwendet wird oder die Information in einem Cache oder einer lokalen Ressource gespeichert ist, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart)
      </td>
      <td>
        Wenn das Domain-Lookup beginnt. Wenn eine dauerhafte Verbindung verwendet wird oder die Information in einem Cache oder einer lokalen Ressource gespeichert ist, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart)
      </td>
      <td>
        Wenn der Browser bereit ist, das Dokument mit einer HTTP-Anfrage zu holen. Dieser Moment ist <em>vor</em> der Überprüfung eines Anwendungscaches.
      </td>
    </tr>
    <tr>
      <td>
        [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart)
      </td>
      <td>
        Wann der Browser die Anfrage gesendet hat, um das eigentliche Dokument vom Server oder aus einem Cache zu erhalten. Wenn die Transportschicht nach Beginn der Anfrage fehlschlägt und die Verbindung neu eröffnet wird, wird diese Eigenschaft auf die Zeit der neuen Anforderung gesetzt.
      </td>
    </tr>
    <tr>
      <td>
        [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart)
      </td>
      <td>
        Wann der Browser das erste Byte der Antwort vom Server, aus einem Cache oder von einer lokalen Ressource empfangen hat.
      </td>
    </tr>
    <tr>
      <td>
        [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd)
      </td>
      <td>
        Wann der Browser das letzte Byte der Antwort empfangen hat oder wann die Verbindung geschlossen wird, wenn dies zuerst passiert, vom Server, dem Cache oder von einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading)
      </td>
      <td>
        Wann der Parser seine Arbeit begonnen hat, das heißt, wenn sich der [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu <code>'loading'</code> ändert und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart)
      </td>
      <td>
        Wann das [`unload`](/de/docs/Web/API/Window/unload_event) Ereignis ausgelöst wurde, was die Zeit angibt, zu der das vorherige Dokument im Fenster begann, entladen zu werden. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der benötigten Weiterleitungen nicht vom selben Ursprung ist, beträgt der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd)
      </td>
      <td>
        Wann der <code><a href="/de/docs/Web/API/Window/unload_event">unload</a></code> Ereignishandler beendet ist. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der benötigten Weiterleitungen nicht vom selben Ursprung ist, beträgt der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive)
      </td>
      <td>
        Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn sich der <a href="/de/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> zu <code>'interactive'</code> ändert und das entsprechende <code><a href="/de/docs/Web/API/Document/readystatechange_event">readystatechange</a></code> Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart)
      </td>
      <td>
        Direkt bevor der Parser das <code><a href="/de/docs/Web/API/Document/DOMContentLoaded_event">DOMContentLoaded</a></code> Ereignis gesendet hat, das heißt, direkt nachdem alle Skripte, die direkt nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)
      </td>
      <td>
        Direkt nachdem alle Skripte, die so schnell wie möglich in einer bestimmten Reihenfolge oder nicht ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete)
      </td>
      <td>
        Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn sich der <a href="/de/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> zu <code>'complete'</code> ändert und das entsprechende <code><a href="/de/docs/Web/API/Document/readystatechange_event">readystatechange</a></code> Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart)
      </td>
      <td>
        Wann das <code><a href="/de/docs/Web/API/Window/load_event">load</a></code> Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, wird <code>0.</code> zurückgegeben
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd)
      </td>
      <td>
        Wann der <code><a href="/de/docs/Web/API/Window/load_event">load</a></code> Ereignishandler beendet ist, das heißt, wann das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet wurde oder noch nicht abgeschlossen ist, wird <code>0.</code> zurückgegeben
      </td>
    </tr>
  </tbody>
</table>

### Berechnung von Zeitmessungen

Wir können diese Werte verwenden, um spezifische interessierende Zeiten zu messen:

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### Time to first byte

{{Glossary("Time_to_first_byte", "Time to First Byte")}} ist die Zeit zwischen `navigationStart` (Beginn der Navigation) und `responseStart`, (wenn das erste Byte der Antwortdaten empfangen wird), verfügbar in der `performanceTiming` API:

```js
const ttfb = time.responseStart - time.navigationStart;
```

### Seitenladezeit

{{Glossary("Page_load_time", "Seitenladezeit")}} ist die Zeit zwischen `navigationStart` und dem Beginn, wenn das Ladeereignis für das aktuelle Dokument gesendet wird. Sie sind nur in der performanceTiming API verfügbar.

```js
let pageloadTime = time.loadEventStart - time.navigationStart;
```

### DNS-Lookup-Zeit

Die DNS-Lookup-Zeit ist die Zeit zwischen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Diese sind in den `performanceTiming`- und `performanceNavigationTiming`-APIs verfügbar.

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Die Zeit, die für den {{Glossary("TCP", "TCP")}} Handshake benötigt wird, ist die Zeit zwischen dem Verbindungsbeginn und dem Verbindungsende:

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS-Verhandlung

[`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) ist `undefined` wenn nicht verfügbar, `0` wenn {{Glossary("HTTPS", "HTTPS")}} nicht verwendet wird oder ein Zeitstempel, wenn verfügbar und verwendet. Mit anderen Worten, wenn eine sichere Verbindung verwendet wurde, wird `secureConnectionStart` {{Glossary("Truthy", "truesy")}} sein, und die Zeit zwischen `secureConnectionStart` und `requestStart` wird größer als 0 sein.

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Die allgemeinen oben genannten Leistungstiming sind veraltet, werden aber vollständig unterstützt. Wir haben jetzt die [Performance Entry API](/de/docs/Web/API/PerformanceEntry), die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourceladeprozesses ermöglicht. Sie können auch Markierungen erstellen:

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

In unterstützenden Browsern können Sie `performance.getEntriesByType('paint')` verwenden, um das Maß für `first-paint` und `first-contentful-paint` abzufragen. Wir verwenden `performance.getEntriesByType('navigation')` und `performance.getEntriesByType('resource')` um die Navigations- bzw. Ressourcentiming abzufragen.

## Navigation Timing

Wenn ein Benutzer eine Website oder Anwendung anfordert, [um den Browser zu füllen](/de/docs/Web/Performance/Guides/How_browsers_work), durchläuft der User Agent eine Reihe von Schritten, einschließlich eines {{Glossary("DNS", "DNS")}} Lookups, {{Glossary("TCP_handshake", "TCP Handshakes")}} und einer TLS-Verhandlung, bevor der User Agent die eigentliche Anfrage macht und die Server die angeforderten Assets zurückgeben. Der Browser parst dann den Inhalt, den er empfängt, baut das DOM, CSSOM, Zugänglichkeit und Render-Bäume auf und rendert schließlich die Seite. Sobald der User Agent das Dokument nicht mehr parst, stellt der User Agent die Dokumentbereitschaft auf _interaktiv_. Wenn verzögerte Skripte geparst werden müssen, geschieht dies und dann wird die [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst, wonach die Bereitschaft auf _komplett_ gesetzt wird. Das Dokument kann jetzt nachladende Aufgaben verarbeiten, woraufhin das Dokument als vollständig geladen markiert wird.

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

Das `performance.getEntriesByType('navigation')` liefert ein Array von [PerformanceEntry](/de/docs/Web/API/PerformanceEntry) Objekten für den _navigation_-_Typ_.

![Die Ergebnisse, wenn performance.getEntriesByType('navigation'); in die Konsole für dieses Dokument eingegeben wird](perfgentrybytypenavigation.png)

Aus diesen Zeitmessungen lässt sich viel ableiten. Im obigen Bild sehen wir über die _name_-Eigenschaft, dass die Zeitmessung sich auf dieses Dokument bezieht. Für den Rest dieser Erklärung verwenden wir die folgende Variable:

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### Protokoll

Wir können das verwendete Protokoll abfragen:

```js
const protocol = timing.nextHopProtocol;
```

Es gibt das Netzwerkprotokoll zurück, das zum Abrufen der Ressource verwendet wurde: in diesem Fall `h2` für `http/2`.

### Komprimierung

Um den Prozentsatz der Komprimierungseinsparungen zu erhalten, teilen wir die `transferSize` durch die `decodedBodySize` und ziehen das von 100% ab. Wir sehen eine Einsparung von über 74%.

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

Wir hätten auch

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

verwenden können, aber die Verwendung von `transferSize` schließt die Overhead-Bytes ein.

Zum Vergleich können wir den Netzwerk-Tab betrachten und sehen, dass wir 22,04 KB für eine unkomprimierte Dateigröße von 87,24 KB übertragen haben.

![Ansicht der übertragenen Bytes und der Größe über den Netzwerk-Tab](bytesdownloaded.png)

Wenn wir mit diesen Zahlen die Mathematik ausführen, erhalten wir das gleiche Ergebnis: `1 - (22,04 / 87,24) = 0,747`. Die Navigationstiming bieten uns eine Möglichkeit zur programmatischen Überprüfung der Übertragungsgrößen und Bandbreiteneinsparungen.

Beachten Sie, dass dies die Größe nur für dieses Einzelressourcedokument ist: nur für diese Ressource allein, nicht für alle Ressourcen zusammen. Allerdings haben die Laufzeit, Ladeereignisse und DOM-bezogene Zeiterfassungen mit der gesamten Navigation zu tun, nicht mit diesem einzelnen Asset. Client-seitige Webanwendungen können schneller erscheinen als diese mit Übertragungsgrößen unter 10000 und decodierten Body-Größen unter 30000, aber das bedeutet nicht, dass JavaScript-, CSS- oder Medienassets nicht zusätzlich belasten. Das Überprüfen von Komprimierungsverhältnissen ist wichtig, aber stellen Sie sicher, dass auch die Dauer und die Zeit zwischen dem Ende des DOMContentLoaded-Ereignisses und bevor das DOM vollständig ist, überprüft werden, da das Ausführen von JavaScript im Hauptthread über längere Zeiträume zu einer nicht reagierenden Benutzeroberfläche führen kann.

### Anforderungszeit

Die API bietet nicht jede Messung, die Sie sich wünschen. Zum Beispiel, wie lange dauerte die Anfrage? Wir können die Messungen nutzen, die wir haben, um unsere Antwort zu erhalten.

Um die Antwortzeit zu messen, ziehen wir die Anfragestartzeit von der Antwortstartzeit ab. Der Anfragestart ist der Moment unmittelbar bevor der User Agent die Ressource vom Server, aus den relevanten Anwendungscaches oder von lokalen Ressourcen anfordert. Der Antwortstart ist die Zeit unmittelbar nachdem der HTTP-Parser des User Agents das erste Byte der Antwort aus den relevanten Anwendungscaches, lokalen Ressourcen oder vom Server empfängt, was nach Erhalt und Verarbeitung der Anfrage geschieht.

```js
const request = timing.responseStart - timing.requestStart;
```

### Ladeereignisdauer

Indem wir den Zeitstempel unmittelbar bevor das Ladeereignis des aktuellen Dokuments ausgelöst wird von der Zeit subtrahieren, wann das Ladeereignis des aktuellen Dokuments abgeschlossen ist, können wir die Dauer des Ladeereignis messen.

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded-Ereignis

Die Dauer des DOMContentLoaded-Ereignisses wird gemessen, indem der Zeitwert unmittelbar bevor der User Agent das DOMContentLoaded-Ereignis feuert von dem Zeitwert subtrahiert wird, unmittelbar nachdem das Ereignis beendet ist. Halten Sie dies bei 50ms oder schneller hilft, eine reaktionsfähige Benutzeroberfläche sicherzustellen.

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Dauer

Wir bekommen die Dauer bereitgestellt. Die Dauer ist die Differenz zwischen den [PerformanceNavigationTiming.loadEventEnd](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [PerformanceEntry.startTime](/de/docs/Web/API/PerformanceEntry/startTime) Eigenschaften.

Die PerformanceNavigationTiming-Schnittstelle gibt auch Informationen darüber, welchen Navigationstyp Sie messen, und gibt `navigate`, `reload`, `back_forward` oder `prerender` zurück.

## Ressourcentiming

Während das Navigationstiming für die Messung der Leistung der _Hauptseite_ vorgesehen ist, generell die HTML-Datei, über die alle anderen Assets angefordert werden, misst das Ressourcentiming die Zeitmessung für _einzelne Ressourcen_, die Assets, die durch die Hauptseite aufgerufen werden, und alle Assets, die diese Ressourcen anfordern. Viele der Messungen sind ähnlich: Es gibt eine DNS-Abfrage, einen TCP-Handshake und der Beginn der sicheren Verbindung wird einmal pro Domain durchgeführt.

![Grafik der Ressourcentiming-Zeitstempel](resourcetiming-timestamps.jpg)

Das Hauptaugenmerk liegt auf jeder Ressource.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming),
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
