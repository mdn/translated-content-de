---
title: Navigations- und Ressourcentimings
slug: Web/Performance/Guides/Navigation_and_resource_timings
l10n:
  sourceCommit: 4a1d696e78d9aa0a3ca571cbc0aab9ba90258235
---

**Navigationstiming** sind Metriken, die Ereignisse der Dokumentennavigation eines Browsers messen. **Ressourcentiming** sind detaillierte Netzwerkzeitmessungen im Hinblick auf das Laden der Ressourcen einer Anwendung. Beide bieten die gleichen schreibgeschützten Eigenschaften, aber das Navigationstiming misst die Zeitangaben des Hauptdokuments, während das Ressourcentiming die Zeiten für alle vom Hauptdokument aufgerufenen Assets oder Ressourcen sowie die angeforderten Ressourcen dieser Ressourcen bereitstellt.

Die allgemeinen Leistungsmessungen unten wurden zugunsten der Performance Entry API abgelehnt, die das Markieren und Messen von Zeiten während des Navigations- und Ressourceladevorgangs ermöglicht. Obwohl sie überholt sind, werden sie in allen Browsern unterstützt.

## Performance-Timings

Die [PerformanceTiming-API](/de/docs/Web/API/PerformanceTiming), eine JavaScript-API zur Messung der Ladeleistung der angeforderten Seite, ist veraltet, wird aber in allen Browsern unterstützt. Sie wurde durch die [PerformanceNavigationTiming-API](/de/docs/Web/API/PerformanceNavigationTiming) ersetzt.

Die PerformanceTiming-API bietet schreibgeschützte Zeiten in Millisekunden (ms), die beschreiben, zu welchem Zeitpunkt jeder Punkt im Seitenladevorgang erreicht wurde. Wie im Bild unten dargestellt, reicht der Navigationsvorgang von [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) und [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd).

![Navigation Timing Ereignismetriken](screen_shot_2019-05-03_at_1.06.27_pm.png)

Mit den obigen Metriken können wir durch etwas Mathematik viele wichtige Metriken berechnen, wie {{Glossary("Time_to_first_byte", "Time to First Byte")}}, Seitenladezeit, DNS-Lookup und ob die Verbindung sicher ist.

Um die Zeit zu messen, die benötigt wird, um alle Schritte abzuschließen, bietet die Performance Timing API schreibgeschützte Messungen von Navigationstimings. Um die Timing unserer App anzuzeigen und zu erfassen, geben Sie ein:

```js
let time = window.performance.timing;
```

Wir können dann die Ergebnisse verwenden, um zu messen, wie gut unsere App funktioniert.

![Das Eingeben von window.performance.timing in der Konsole listet alle Timings in der PerformanceNavigationTiming-Schnittstelle auf](navigatortiming.png)

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
        Wann das Auslösen des <code>unload</code>-Ereignisses im vorherigen Dokument im
        selben Browsing-Kontext endet. Wenn es kein vorheriges Dokument gibt, ist dieser Wert
        derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart)
      </td>
      <td>
        Wann das sichere Verbindungshandshake beginnt. Wenn keine solche Verbindung
        angefordert wird, gibt es <code>0</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart)
      </td>
      <td>
        Wann die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung gibt oder wenn eine
        der Weiterleitungen nicht vom gleichen Ursprung ist, ist der zurückgegebene Wert
        <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd)
      </td>
      <td>
        <p>
          Wann die letzte HTTP-Weiterleitung abgeschlossen ist, also wann das letzte Byte
          der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt oder wenn
          eine der Weiterleitungen nicht vom gleichen Ursprung ist, ist der zurückgegebene Wert
          <code>0</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd)
      </td>
      <td>
        Wann die Verbindung im Netzwerk geöffnet ist. Wenn die Transportschicht einen
        Fehler meldet und die Verbindungsherstellung erneut begonnen wird, wird die letzte
        Verbindungsherstellungs-Endzeit angegeben. Wenn eine persistente Verbindung verwendet wird,
        ist der Wert derselbe wie
        <code>PerformanceTiming.fetchStart</code>. Eine Verbindung gilt als
        geöffnet, wenn alle sicheren Verbindungshandshakes oder SOCKS-Authentifizierungen
        abgeschlossen sind.
      </td>
    </tr>
    <tr>
      <td>
        [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart)
      </td>
      <td>
        Wann die Anfrage, eine Verbindung zu öffnen, an das Netzwerk gesendet wird. Wenn die
        Transportschicht einen Fehler meldet und die Verbindungsherstellung erneut begonnen wird,
        wird die letzte Verbindungsherstellungs-Startzeit angegeben. Wenn eine persistente Verbindung
        verwendet wird, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd)
      </td>
      <td>
        Wann der Domain-Lookup abgeschlossen ist. Wenn eine persistente Verbindung verwendet wird,
        oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, ist der Wert
        derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart)
      </td>
      <td>
        Wann der Domain-Lookup beginnt. Wenn eine persistente Verbindung verwendet wird oder
        die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, ist der Wert
        derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart)
      </td>
      <td>
        Wann der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen.
        Dieser Moment liegt <em>vor</em> der Überprüfung des Application Caches.
      </td>
    </tr>
    <tr>
      <td>
        [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart)
      </td>
      <td>
        Wann der Browser die Anfrage gesendet hat, das eigentliche Dokument zu
        erhalten, vom Server oder aus einem Cache. Wenn die Transportschicht nach dem
        Start der Anfrage fehlschlägt und die Verbindung neu eröffnet wird, wird diese
        Eigenschaft auf die Zeit der neuen Anfrage gesetzt.
      </td>
    </tr>
    <tr>
      <td>
        [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart)
      </td>
      <td>
        Wann der Browser das erste Byte der Antwort empfangen hat, vom
        Server, aus einem Cache oder aus einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd)
      </td>
      <td>
        Wann der Browser das letzte Byte der Antwort empfangen hat oder
        wann die Verbindung geschlossen ist, falls dies zuerst geschieht, vom Server, dem Cache,
        oder aus einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading)
      </td>
      <td>
        Wann der Parser seine Arbeit begonnen hat, das heißt, wenn sein
        [`Document.readyState`](/de/docs/Web/API/Document/readyState) wechselt zu
        <code>'loading'</code> und das entsprechende
        [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
        Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart)
      </td>
      <td>
        Wann das [`unload`](/de/docs/Web/API/Window/unload_event)
        Ereignis ausgelöst wurde, das den Zeitpunkt anzeigt, zu dem das vorherige
        Dokument im Fenster mit dem Entladen begann. Wenn es kein vorheriges
        Dokument gibt oder das vorherige Dokument oder eine der benötigten Weiterleitungen
        nicht vom gleichen Ursprung ist, ist der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd)
      </td>
      <td>
        Wann der
        <code
          ><a href="/de/docs/Web/API/Window/unload_event">unload</a></code
        >
        Ereignis-Handler abgeschlossen ist. Wenn es kein vorheriges Dokument gibt oder das
        vorherige Dokument oder eine der benötigten Weiterleitungen nicht vom gleichen
        Ursprung ist, ist der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive)
      </td>
      <td>
        Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn sein
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
        Ereignis sendet, das heißt unmittelbar nachdem alle Skripte, die direkt nach dem
        Parsen ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)
      </td>
      <td>
        Unmittelbar nachdem alle Skripte, die so schnell wie möglich
        ausgeführt werden müssen, unabhängig von der Reihenfolge ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete)
      </td>
      <td>
        Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn sein
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
        Wann das
        <code><a href="/de/docs/Web/API/Window/load_event">load</a></code>
        Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet
        wurde, gibt es <code>0</code> zurück.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd)
      </td>
      <td>
        Wann der
        <code><a href="/de/docs/Web/API/Window/load_event">load</a></code>
        Ereignis-Handler beendet ist, das heißt, wenn das Ladeereignis abgeschlossen ist. Wenn
        dieses Ereignis noch nicht gesendet wurde oder noch nicht abgeschlossen ist, gibt es
        <code>0</code> zurück.
      </td>
    </tr>
  </tbody>
</table>

### Berechnung der Timings

Wir können diese Werte verwenden, um spezifische, interessante Timings zu messen:

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### Time to First Byte

{{Glossary("Time_to_first_byte", "Time to First Byte")}} ist die Zeit zwischen dem `navigationStart` (Beginn der Navigation) und `responseStart` (wenn das erste Byte der Antwortdaten empfangen wird), verfügbar in der `performanceTiming` API:

```js
const ttfb = time.responseStart - time.navigationStart;
```

### Seitenladezeit

{{Glossary("Page_load_time", "Seitenladezeit")}} ist die Zeit zwischen `navigationStart` und dem Beginn, wann das Ladeereignis für das aktuelle Dokument gesendet wird. Sie sind nur in der PerformanceTiming API verfügbar.

```js
let pageloadTime = time.loadEventStart - time.navigationStart;
```

### DNS-Lookup-Zeit

Die DNS-Lookup-Zeit ist die Zeit zwischen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Diese sind sowohl in den `performanceTiming` als auch den `performanceNavigationTiming` APIs verfügbar.

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Die Zeit für das {{Glossary("TCP", "TCP")}}-Handshake ist die Zeit zwischen dem Verbindungsstart und dem Verbindungsende:

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS-Verhandlung

[`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) wird `undefined` sein, wenn nicht verfügbar, `0`, wenn {{Glossary("HTTPS", "HTTPS")}} nicht verwendet wird, oder ein Zeitstempel, wenn verfügbar und verwendet. Mit anderen Worten, wenn eine sichere Verbindung verwendet wurde, wird `secureConnectionStart` {{Glossary("Truthy", "wahr")}} sein, und die Zeit zwischen `secureConnectionStart` und `requestStart` wird größer als 0 sein.

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Die allgemeinen oben genannten Leistungstiming sind veraltet, aber vollständig unterstützt. Jetzt haben wir die [Performance Entry API](/de/docs/Web/API/PerformanceEntry), die das Markieren und Messen von Zeiten während des Navigations- und Ressourceladevorgangs ermöglicht. Sie können auch Markierungen erstellen:

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

In unterstützten Browsern können Sie `performance.getEntriesByType('paint')` verwenden, um die Messungen für `first-paint` und `first-contentful-paint` abzufragen. Wir verwenden `performance.getEntriesByType('navigation')` und `performance.getEntriesByType('resource')`, um die Navigations- und Ressourcentimings abzufragen.

## Navigationstiming

Wenn ein Benutzer eine Website oder Anwendung anfordert, [um den Browser zu füllen](/de/docs/Web/Performance/Guides/How_browsers_work), durchläuft der User-Agent eine Reihe von Schritten, einschließlich eines {{Glossary("DNS", "DNS")}}-Lookups, {{Glossary("TCP_handshake", "TCP-Handshake")}} und TLS-Verhandlung, bevor der User-Agent die eigentliche Anfrage stellt und die Server die angeforderten Assets zurückgeben. Der Browser analysiert dann den erhaltenen Inhalt, erstellt das DOM, CSSOM, Barrierefreiheits- und Renderbäume und rendert schließlich die Seite. Sobald der User-Agent mit dem Parsen des Dokuments aufhört, setzt der User-Agent die Dokumentbereitschaft auf _interactive_. Wenn es aufgeschobene Skripte gibt, die geparst werden müssen, wird dies geschehen, dann wird das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst, wonach die Bereitschaft auf _complete_ gesetzt wird. Das Dokument kann nun Nachladeaufgaben verarbeiten, nach denen das Dokument als vollständig geladen markiert wird.

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

Das `performance.getEntriesByType('navigation')` liefert ein Array von [PerformanceEntry](/de/docs/Web/API/PerformanceEntry)-Objekten für den _Navigations-_ _Typ_.

![Die Ergebnisse, wenn performance.getEntriesByType('navigation'); in die Konsole für dieses Dokument eingegeben wird](perfgentrybytypenavigation.png)

Aus diesen Timings lässt sich viel gewinnen. Im obigen Bild sehen wir durch die _name_-Eigenschaft, dass die Datei, die zeitlich gemessen wird, dieses Dokument ist. Für den Rest dieser Erklärung verwenden wir die folgende Variable:

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### Protokoll

Wir können das verwendete Protokoll abfragen:

```js
const protocol = timing.nextHopProtocol;
```

Es gibt das Netzwerkprotokoll zurück, das verwendet wurde, um die Ressource abzurufen: in diesem Fall `h2` für `http/2`.

### Kompression

Um den prozentualen Kompressionseinsparungsanteil zu erhalten, teilen wir die transferSize durch die decodedBodySize und ziehen das von 100% ab. Wir sehen Einsparungen von über 74%.

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

Wir könnten auch

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

verwenden, aber die Verwendung der `transferSize` schließt die Overhead-Bytes mit ein.

Zum Vergleich können wir im Netzwerk-Tab sehen, dass wir 22,04KB für eine unkomprimierte Dateigröße von 87,24KB übertragen haben.

![Ansicht der übertragenen Bytes und der Größe über den Netzwerk-Tab](bytesdownloaded.png)

Wenn wir die Mathematik mit diesen Zahlen durchführen, erhalten wir das gleiche Ergebnis: `1 - (22.04 / 87.24) = 0.747`. Die Navigationstiming bietet uns eine Möglichkeit, die Übertragungsgrößen und Bandbreiteneinsparungen programmatisch zu überprüfen.

Beachten Sie, dass dies die Größe für dieses einzelne Dokument allein ist: für diese Ressource allein, nicht für alle kombinierten Ressourcen. Die Dauer, Ladeereignisse und DOM-bezogenen Timings betreffen jedoch die gesamte Navigation, nicht nur dieses einzelne Asset. Clientseitige Webanwendungen mögen schneller erscheinen als diese mit Übertragungsgrößen unter 10000 und dekomprimierten Körpergrößen unter 30000, aber das bedeutet nicht, dass JavaScript, CSS oder Medien-Assets keine Überfrachtung bilden. Die Überprüfung von Kompressionsverhältnissen ist wichtig, aber stellen Sie sicher, dass Sie auch die Dauer und die Zeit zwischen dem Ende des DOMContentLoaded-Ereignisses und dem Abschluss des DOM überprüfen, da die Ausführung von JavaScript im Hauptthread über längere Zeiträume zu einer nicht reagierenden Benutzeroberfläche führen kann.

### Anfragezeit

Die API bietet nicht jede gewünschte Messung. Zum Beispiel, wie lange hat die Anfrage gedauert? Wir können Messungen, die wir haben, nutzen, um unsere Antwort zu erhalten.

Um die Antwortzeit zu messen, ziehen Sie die Anfrage-Startzeit von der Antwort-Startzeit ab. Der Anfragestart ist der Moment unmittelbar bevor der User-Agent beginnt, die Ressource vom Server anzufordern, oder von relevanten Anwendungs-Caches oder von lokalen Ressourcen. Der Antwortstart ist der Zeitpunkt unmittelbar nachdem der HTTP-Parser des User-Agents das erste Byte der Antwort von relevanten Anwendungs-Caches, lokalen Ressourcen oder vom Server erhält, was nach dem Empfang und der Verarbeitung der Anfrage passiert.

```js
const request = timing.responseStart - timing.requestStart;
```

### Ladeereignisdauer

Indem Sie den Zeitstempel unmittelbar vor dem Auslösen des Ladeereignisses des aktuellen Dokuments von der Zeit, zu der das Ladeereignis des aktuellen Dokuments abgeschlossen ist, abziehen, können Sie die Dauer des Ladeereignisses messen.

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded-Ereignis

Die Dauer des DOMContentLoaded-Ereignisses wird gemessen, indem der Zeitwert unmittelbar vor dem Auslösen des DOMContentLoaded-Ereignisses von dem Zeitwert unmittelbar nach Abschluss des Ereignisses abgezogen wird. Wenn dies innerhalb von 50ms oder schneller gehalten wird, wird eine reaktionsschnelle Benutzeroberfläche sichergestellt.

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Dauer

Wir erhalten die Dauer. Die Dauer ist der Unterschied zwischen den [PerformanceNavigationTiming.loadEventEnd](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [PerformanceEntry.startTime](/de/docs/Web/API/PerformanceEntry/startTime) Eigenschaften.

Das PerformanceNavigationTiming-Interface bietet auch Informationen darüber, welche Art von Navigation Sie messen, indem `navigate`, `reload` oder `back_forward` zurückgegeben werden.

## Ressourcentiming

Während das Navigationstiming zur Messung der Leistung der _Hauptseite_ dient, im Allgemeinen der HTML-Datei, über die alle anderen Assets angefordert werden, misst das Ressourcentiming die Zeitmessungen für _einzelne Ressourcen_, die Assets, die von der Hauptseite aufgerufen werden, und alle Assets, die diese Ressourcen anfordern. Viele der Messungen sind ähnlich: Es gibt einen DNS-Lookup, ein TCP-Handshake und der sichere Verbindungsstart erfolgt einmal pro Domäne.

![Grafik der Resource Timing-Zeitstempel](resourcetiming-timestamps.jpg)

Das Hauptaugenmerk für jede Ressource liegt hierauf.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming),
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
