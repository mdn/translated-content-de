---
title: Navigations- und Ressourcenzeiten
slug: Web/Performance/Navigation_and_resource_timings
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Navigationszeiten** sind Metriken, die Ereignisse der Dokumentennavigation im Browser messen. **Ressourcenzeiten** sind detaillierte Netzwerkzeitmessungen bezüglich des Ladens von Ressourcen einer Anwendung. Beide bieten die gleichen schreibgeschützten Eigenschaften, aber die Navigationszeit misst die Zeiten des Hauptdokuments, während die Ressourcenzeit die Zeiten für alle Ressourcen liefert, die von diesem Hauptdokument und den angeforderten Ressourcen der Ressourcen aufgerufen werden.

Die allgemeinen Leistungszeiten, die nachfolgend beschrieben werden, sind zugunsten der Performance Entry API veraltet, die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourcenladeprozesses ermöglicht. Obwohl veraltet, werden sie in allen Browsern unterstützt.

## Leistungszeiten

Die [performanceTiming API](/de/docs/Web/API/PerformanceTiming), eine JavaScript-API zur Messung der Ladeleistung der angeforderten Seite, ist veraltet, wird jedoch in allen Browsern unterstützt. Sie wurde durch die [performanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API ersetzt.

Die Performance Timing API liefert schreibgeschützte Zeiten in Millisekunden (ms), die beschreiben, zu welchem Zeitpunkt jeder Punkt im Seitenladeprozess erreicht wurde. Wie im folgenden Bild gezeigt, reicht der Navigationsprozess von [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) und [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd).

![Navigationszeit-Ereignismetriken](screen_shot_2019-05-03_at_1.06.27_pm.png)

Mit den obigen Metriken und etwas Mathematik können wir viele wichtige Messgrößen berechnen, wie z.B. die [Zeit bis zum ersten Byte](/de/docs/Glossary/Time_to_first_byte), Seitenladezeit, DNS-Lookup und ob die Verbindung sicher ist.

Um die Zeit zu messen, die benötigt wird, um alle Schritte abzuschließen, stellt die Performance Timing API schreibgeschützte Messungen der Navigationszeiten bereit. Um die Zeitmessung unserer App zu sehen und zu erfassen, geben wir ein:

```js
let time = window.performance.timing;
```

Wir können dann die Ergebnisse nutzen, um zu messen, wie gut unsere App funktioniert.

![Das Eingeben von window.performance.timing in die Konsole listet alle Zeiten in der PerformanceNavigationTiming-Schnittstelle auf](navigatortiming.png)

Die Reihenfolge ist:

<table>
  <thead>
    <tr>
      <th>Leistungszeiten</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)
      </td>
      <td>
        Wenn das Beenden des Ausladens für das vorherige Dokument im gleichen Browsing-Kontext abgeschlossen ist. Wenn es kein vorheriges Dokument gibt, entspricht dieser Wert <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart)
      </td>
      <td>
          Wann das sichere Verbindungs-Handshake startet. Wenn keine solche Verbindung angefordert wird, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart)
      </td>
      <td>
          Wann die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung gibt oder eine der Weiterleitungen nicht vom gleichen Ursprung stammt, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd)
      </td>
      <td>
        <p>
          Wann die letzte HTTP-Weiterleitung abgeschlossen ist, das heißt, wenn das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt oder eine der Weiterleitungen nicht vom gleichen Ursprung stammt, wird <code>0</code> zurückgegeben.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd)
      </td>
      <td>
        Wann die Verbindung geöffnet ist. Wenn der Transport eine Fehler meldet und die Verbindung erneut gestartet wird, ist die letzte Verbindungsaufbau-Endzeit angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert der gleiche wie <code>PerformanceTiming.fetchStart</code>. Eine Verbindung gilt als geöffnet, wenn alle sicheren Verbindungs-Handshakes oder SOCKS-Authentifizierungen beendet sind.
      </td>
    </tr>
    <tr>
      <td>
        [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart)
      </td>
      <td>
        Wann die Anforderung zur Öffnung einer Verbindung an das Netzwerk gesendet wird. Wenn der Transport eine Fehler meldet und die Verbindung erneut gestartet wird, ist die letzte Verbindungsaufbau-Startzeit angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert der gleiche wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd)
      </td>
      <td>
        Wann der Domain-Lookup abgeschlossen ist. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, ist der Wert der gleiche wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart)
      </td>
      <td>
        Wann der Domain-Lookup beginnt. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, ist der Wert der gleiche wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart)
      </td>
      <td>
        Wenn der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen. Dieser Zeitpunkt liegt <em>vor</em> dem Überprüfen auf einen Anwendungscache.
      </td>
    </tr>
    <tr>
      <td>
        [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart)
      </td>
      <td>
        Wenn der Browser die Anforderung zur Beschaffung des eigentlichen Dokuments gesendet hat, vom Server oder aus einem Cache. Wenn der Transport fehlschlägt, nachdem die Anforderung gestartet wurde und die Verbindung wieder geöffnet wurde, wird diese Eigenschaft auf die entsprechende Zeit der neuen Anfrage gesetzt.
      </td>
    </tr>
    <tr>
      <td>
        [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart)
      </td>
      <td>
        Wenn der Browser das erste Byte der Antwort empfangen hat, vom Server, aus einem Cache oder aus einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd)
      </td>
      <td>
        Wenn der Browser das letzte Byte der Antwort empfangen hat oder wenn die Verbindung geschlossen wird, falls dies zuerst geschieht, vom Server, aus einem Cache oder aus einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading)
      </td>
      <td>
        Wann der Parser seine Arbeit begonnen hat, d.h. wenn dessen [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu <code>'loading'</code> wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart)
      </td>
      <td>
        Wann das [`unload`](/de/docs/Web/API/Window/unload_event) Ereignis geworfen wurde, was die Zeit angibt, zu der das vorherige Dokument im Fenster begonnen hat, sich zu entladen. Wenn es kein vorheriges Dokument gibt, oder wenn das vorherige Dokument oder einer der benötigten Redirects nicht vom gleichen Ursprung stammen, wird der Wert <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd)
      </td>
      <td>
        Wann das <code><a href="/de/docs/Web/API/Window/unload_event">unload</a></code> Ereignis beendet ist. Wenn es kein vorheriges Dokument gibt, oder wenn das vorherige Dokument oder einer der benötigten Redirects nicht vom gleichen Ursprung stammen, wird der Wert <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive)
      </td>
      <td>
        Wann der Parser seine Arbeit am Hauptdokument beendet hat, d.h. wenn dessen <a href="/de/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> zu <code>'interactive'</code> wechselt und das entsprechende <code><a href="/de/docs/Web/API/Document/readystatechange_event">readystatechange</a></code> Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart)
      </td>
      <td>
        Direkt bevor der Parser das <code><a href="/de/docs/Web/API/Document/DOMContentLoaded_event">DOMContentLoaded</a></code> Ereignis gesendet hat, d.h. direkt nachdem alle Skripte, die unmittelbar nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)
      </td>
      <td>
        Direkt nachdem alle Skripte, die so schnell wie möglich und in beliebiger Reihenfolge ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete)
      </td>
      <td>
        Wann der Parser seine Arbeit am Hauptdokument beendet hat, d.h. wenn dessen <a href="/de/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> auf <code>'complete'</code> wechselt und das entsprechende <code><a href="/de/docs/Web/API/Document/readystatechange_event">readystatechange</a></code> Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart)
      </td>
      <td>
        Wann das <code><a href="/de/docs/Web/API/Window/load_event">load</a></code> Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, wird <code>0.</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd)
      </td>
      <td>
        Wann der <code><a href="/de/docs/Web/API/Window/load_event">load</a></code> Ereignishandler abgeschlossen ist, d.h. wann das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet wurde oder nicht abgeschlossen ist, wird <code>0.</code> zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

### Berechnung der Zeiten

Wir können diese Werte verwenden, um spezifische interessante Zeiten zu messen:

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### Zeit bis zum ersten Byte

[Zeit bis zum ersten Byte](/de/docs/Glossary/Time_to_first_byte) ist die Zeit zwischen dem `navigationStart` (Beginn der Navigation) und `responseStart`, (wenn das erste Byte der Antwortdaten empfangen wird), verfügbar in der `performanceTiming` API:

```js
const ttfb = time.responseStart - time.navigationStart;
```

### Seitenladezeit

[Seitenladezeit](/de/docs/Glossary/Page_load_time) ist die Zeit zwischen `navigationStart` und dem Beginn des Ladeereignisses für das aktuelle Dokument. Sie sind nur in der performanceTiming API verfügbar.

```js
let pageloadtime = time.loadEventStart - time.navigationStart;
```

### DNS-Lookup-Zeit

Die DNS-Lookup-Zeit ist die Zeit zwischen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Diese sind in beiden APIs `performanceTiming` und `performanceNavigationTiming` verfügbar.

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Die Zeit, die für den [TCP](/de/docs/Glossary/TCP) Handshake benötigt wird, ist die Zeit zwischen dem Beginn und dem Ende der Verbindung:

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS-Verhandlung

[`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) wird `undefined` sein, wenn nicht verfügbar, `0`, wenn [HTTPS](/de/docs/Glossary/HTTPS) nicht verwendet wird, oder ein Zeitstempel, wenn verfügbar und verwendet. Mit anderen Worten, wenn eine sichere Verbindung verwendet wurde, ist `secureConnectionStart` [truthy](/de/docs/Glossary/Truthy), und die Zeit zwischen `secureConnectionStart` und `requestStart` ist größer als 0.

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Die oben genannten allgemeinen Leistungszeiten sind veraltet, werden jedoch vollständig unterstützt. Wir haben jetzt die [Performance Entry API](/de/docs/Web/API/PerformanceEntry), die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourcenladeprozesses ermöglicht. Sie können auch Markierungen erstellen:

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

In unterstützenden Browsern können Sie `performance.getEntriesByType('paint')` verwenden, um die Messung von `first-paint` und `first-contentful-paint` abzufragen. Wir verwenden `performance.getEntriesByType('navigation')` und `performance.getEntriesByType('resource')`, um die Navigations- beziehungsweise Ressourcenzeiten abzufragen.

## Navigation Timing

Wenn ein Benutzer eine Website oder Anwendung anfordert, durchläuft der Benutzeragent eine Reihe von Schritten, einschließlich eines [DNS](/de/docs/Glossary/DNS)-Lookups, eines [TCP Handshakes](/de/docs/Glossary/TCP_handshake) und einer TLS-Verhandlung, bevor der Benutzeragent die eigentliche Anforderung stellt und die Server die angeforderten Assets zurückgeben. Der Browser analysiert dann den empfangenen Inhalt, baut den DOM, CSSOM, Zugänglichkeits- und Rendering-Bäume auf, um schließlich die Seite darzustellen. Sobald der Benutzeragent das Dokument nicht mehr analysiert, setzt der Benutzeragent die Bereitschaft des Dokuments auf _interaktiv_. Wenn es verzögerte Skripte gibt, die analysiert werden müssen, wird dies durchgeführt und dann das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst, wonach die Bereitschaft auf _vollständig_ gesetzt wird. Das Dokument kann jetzt Nachladeaufgaben bearbeiten, wonach das Dokument als vollständig geladen markiert wird.

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

`performance.getEntriesByType('navigation')` gibt ein Array von [PerformanceEntry](/de/docs/Web/API/PerformanceEntry)-Objekten für den _Navigations_ _Typ_ zurück.

![Die Ergebnisse von wenn performance.getEntriesByType('navigation'); in die Konsole für dieses Dokument eingegeben wird](perfgentrybytypenavigation.png)

Viel kann aus diesen Zeiten gewonnen werden. Im obigen Bild sehen wir über die _name_ Eigenschaft, dass die Datei, die gemessen wird, dieses Dokument ist. Für den Rest dieser Erklärung verwenden wir die folgende Variable:

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### Protokoll

Wir können das verwendete Protokoll abfragen:

```js
const protocol = timing.nextHopProtocol;
```

Es gibt das Netzwerkprotokoll zurück, das zum Abrufen der Ressource verwendet wurde: in diesem Fall `h2` für `http/2`.

### Kompression

Um den Prozentsatz der Komprimierungseinsparungen zu erhalten, teilen wir die transferSize durch die decodedBodySize und ziehen das Ganze von 100% ab. Wir sehen eine Ersparnis von über 74%.

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

Wir hätten auch verwenden können

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

aber die Verwendung von `transferSize` beinhaltet die zusätzlichen Bytes.

Zum Vergleich können wir den Netzwerk-Tab ansehen und sehen, dass wir 22,04 KB für eine unkomprimierte Dateigröße von 87,24 KB übertragen haben.

![Ansicht der übertragenen Bytes und der Größe über den Netzwerk-Tab](bytesdownloaded.png)

Wenn wir die Berechnung mit diesen Zahlen durchführen, erhalten wir das gleiche Ergebnis: `1 - (22.04 / 87.24) = 0.747`. Die Navigation-Zeiten bieten uns eine Möglichkeit, die Übertragungsgrößen und Bandbreiteneinsparungen programmatisch zu überprüfen.

Beachten Sie, dass dies die Größe für dieses einzelne Dokument allein ist: für diese Ressource allein, nicht für alle Ressourcen zusammen. Allerdings beziehen sich die Dauer, Ladeereignisse und DOM-bezogene Zeiten auf die gesamte Navigation, nicht auf dieses einzelne Asset. Clientseitige Webanwendungen mögen schneller erscheinen als diese mit Übertragungsgrößen unter 10.000 und dekodierten Körpergrößen unter 30.000, aber das bedeutet nicht, dass JavaScript, CSS oder Medienressourcen nicht die Ursache für die aufgeblähte Größe sind. Die Überprüfen von Kompressionsverhältnissen ist wichtig, aber stellen Sie sicher, auch die Dauer und die Zeit zwischen dem Ende der DOMContentLoaded-Ereignisse und dem vollständigen DOM zu überprüfen, da die Ausführung von JavaScript im Hauptthread über einen längeren Zeitraum zu einer nicht reagierenden Benutzeroberfläche führen kann.

### Anfragezeit

Die API liefert nicht alle gewünschten Messergebnisse. Zum Beispiel, wie lange dauerte die Anfrage? Wir können die Messungen verwenden, die wir haben, um unsere Antwort zu finden.

Um die Antwortzeit zu messen, subtrahieren Sie die Anfrage-Startzeit von der Antwort-Startzeit. Der Anfrage-Start ist der Moment unmittelbar bevor der Benutzeragent anfängt, die Ressource vom Server anzufordern, aus den relevanten Anwendungscaches oder aus lokalen Ressourcen. Der Antwortbeginn ist die Zeit unmittelbar nachdem der HTTP-Parser des Benutzeragenten das erste Byte der Antwort von den relevanten Anwendungscaches, aus lokalen Ressourcen oder vom Server empfängt, was nach dem Empfang und der Verarbeitung der Anfrage geschieht.

```js
const request = timing.responseStart - timing.requestStart;
```

### Dauer des Ladeereignisses

Indem Sie den Zeitstempel unmittelbar vor dem Auslösen des Ladeereignisses des aktuellen Dokuments von der Zeit subtrahieren, zu der das Ladeereignis des aktuellen Dokuments abgeschlossen ist, können Sie die Dauer des Ladeereignisses messen.

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### Ereignis DOMContentLoaded

Die Dauer des DOMContentLoaded-Ereignisses wird gemessen, indem der Zeitwert unmittelbar bevor der Benutzeragent das DOMContentLoaded-Ereignis auslöst, von dem Zeitwert unmittelbar danach subtrahiert wird. Wenn Sie dies unter 50 ms oder schneller halten, können Sie eine reaktionsschnelle Benutzeroberfläche sicherstellen.

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Dauer

Uns wird die Dauer bereitgestellt. Die Dauer ist die Differenz zwischen den Eigenschaften [PerformanceNavigationTiming.loadEventEnd](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [PerformanceEntry.startTime](/de/docs/Web/API/PerformanceEntry/startTime).

Die PerformanceNavigationTiming-Schnittstelle liefert auch Informationen darüber, welche Art von Navigation Sie messen, mit den Rückgabewerten `navigate`, `reload`, `back_forward` oder `prerender`.

## Ressourcenzeiten

Während die Navigationszeit für die Messung der Leistung der _Hauptseite_ gedacht ist, der HTML-Datei, über die alle anderen Ressourcen aufgerufen werden, misst die Ressourcenzeit die Zeiten für _einzelne Ressourcen_, die von der Hauptseite aufgerufenen Assets und alle Ressourcen, die diese Ressourcen anfordern. Viele der Messungen sind ähnlich: Es gibt einen DNS-Lookup, einen TCP-Handshake und der Beginn der sicheren Verbindung wird einmal pro Domain durchgeführt.

![Grafik von Ressourcen-Zeitstempeln](resourcetiming-timestamps.jpg)

Das Hauptmerkmal, das für jede Ressource zu beachten ist.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
