---
title: Navigations- und Ressourcen-Timings
slug: Web/Performance/Navigation_and_resource_timings
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Navigationstimings** sind Metriken, die die Dokumentnavigationsereignisse eines Browsers messen. **Ressourcen-Timings** sind detaillierte Netzwerkzeitmessungen, die das Laden der Ressourcen einer Anwendung betreffen. Beide bieten dieselben schreibgeschützten Eigenschaften, aber die Navigationstiming misst die Zeiten des Hauptdokuments, während die Ressourcentiming die Zeiten für alle durch dieses Hauptdokument aufgerufenen Assets oder Ressourcen und deren angeforderte Ressourcen bereitstellt.

Die allgemeinen Leistungstimings unten sind zugunsten der Performance Entry API veraltet, die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourcenladeprozesses ermöglicht. Obwohl veraltet, werden sie in allen Browsern unterstützt.

## Leistungstimings

Die [performanceTiming API](/de/docs/Web/API/PerformanceTiming), eine JavaScript-API zur Messung der Ladeleistung der angeforderten Seite, ist veraltet, wird jedoch in allen Browsern unterstützt. Sie wurde durch die [performanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API ersetzt.

Die Performance Timing API bot schreibgeschützte Zeiten in Millisekunden(ms), die beschreiben, zu welchem Zeitpunkt jeder Punkt im Seitenladeprozess erreicht wurde. Wie im folgenden Bild dargestellt, reicht der Navigationsprozess von [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) und [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd).

![Metriken der Navigationstiming-Ereignisse](screen_shot_2019-05-03_at_1.06.27_pm.png)

Mit den oben genannten Metriken und einiger Mathematik können wir viele wichtige Metriken wie {{Glossary("Time_to_first_byte", "Time to first byte")}}, Seitenladezeit, DNS-Lookup und ob die Verbindung sicher ist, berechnen.

Um die Zeit zu messen, die benötigt wird, um alle Schritte abzuschließen, bietet die Performance Timing API schreibgeschützte Messungen von Navigationstimings. Um die Timing unserer App zu betrachten und aufzuzeichnen, geben wir ein:

```js
let time = window.performance.timing;
```

Wir können dann die Ergebnisse verwenden, um zu messen, wie gut unsere App läuft.

![Eingabe von window.performance.timing in der Konsole listet alle Timings im PerformanceNavigationTiming-Interface auf](navigatortiming.png)

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
        Wenn das Aufforderung zum Entladen im vorherigen Dokument im gleichen Browsing-Kontext endet. Wenn es kein vorheriges Dokument gibt, ist dieser Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart)
      </td>
      <td>
        Wenn der sichere Verbindungs-Handshake beginnt. Wenn keine solche Verbindung angefordert wird, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart)
      </td>
      <td>
        Wenn die erste HTTP-Umleitung startet. Wenn es keine Umleitung gibt oder eine der Umleitungen nicht von gleichem Ursprung ist, wird der zurückgegebene Wert <code>0</code> sein.
      </td>
    </tr>
    <tr>
      <td>
        [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd)
      </td>
      <td>
        <p>
          Wenn die letzte HTTP-Umleitung abgeschlossen ist, das heißt, wenn das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Umleitung gibt oder eine der Umleitungen nicht von gleichem Ursprung ist, wird der zurückgegebene Wert <code>0</code> sein.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd)
      </td>
      <td>
        Wenn die Verbindung im Netzwerk geöffnet ist. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Verbindungsaufbau-Endzeit angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>. Eine Verbindung gilt als geöffnet, wenn alle sicheren Verbindungs-Handshakes oder SOCKS-Authentifizierungen abgeschlossen sind.
      </td>
    </tr>
    <tr>
      <td>
        [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart)
      </td>
      <td>
        Wenn die Anforderung zum Öffnen einer Verbindung an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Verbindungsaufbau-Startzeit angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd)
      </td>
      <td>
        Wenn die Domänensuche abgeschlossen ist. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart)
      </td>
      <td>
        Wenn die Domänensuche beginnt. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, ist der Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart)
      </td>
      <td>
        Wenn der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen. Dieser Moment ist <em>vor</em> der Überprüfung eines Anwendungs-Caches.
      </td>
    </tr>
    <tr>
      <td>
        [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart)
      </td>
      <td>
        Wenn der Browser die Anfrage gesendet hat, um das eigentliche Dokument vom Server oder aus einem Cache zu erhalten. Wenn die Transportschicht nach dem Beginn der Anfrage fehlschlägt und die Verbindung erneut geöffnet wird, wird diese Eigenschaft auf die Zeit des neuen Anforderungskorrespondierenden eingestellt.
      </td>
    </tr>
    <tr>
      <td>
        [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart)
      </td>
      <td>
        Wenn der Browser das erste Byte der Antwort vom Server, aus einem Cache oder aus einer lokalen Ressource erhält.
      </td>
    </tr>
    <tr>
      <td>
        [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd)
      </td>
      <td>
        Wenn der Browser das letzte Byte der Antwort empfängt oder wenn die Verbindung geschlossen wird, wenn dies zuerst geschieht, vom Server, dem Cache oder von einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading)
      </td>
      <td>
        Wenn der Parser mit seiner Arbeit beginnt, also wenn dessen [`Document.readyState`](/de/docs/Web/API/Document/readyState) sich auf <code>'loading'</code> ändert und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart)
      </td>
      <td>
        Wenn das [`unload`](/de/docs/Web/API/Window/unload_event) Ereignis ausgelöst wurde, das die Zeit angibt, zu der das vorherige Dokument im Fenster begann, zu entladen. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der benötigten Umleitungen nicht denselben Ursprung hat, ist der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd)
      </td>
      <td>
        Wenn der <a href="/de/docs/Web/API/Window/unload_event">unload</a> Ereignishandler beendet ist. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der benötigten Umleitungen nicht denselben Ursprung hat, ist der zurückgegebene Wert <code>0</code>.
      </td>
    </tr>
    <tr>
      <td>
        [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive)
      </td>
      <td>
        Wenn der Parser seine Arbeit am Hauptdokument beendet hat, also wenn dessen <a href="/de/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> sich auf <code>'interactive'</code> ändert und das entsprechende <a href="/de/docs/Web/API/Document/readystatechange_event"><code>readystatechange</code></a> Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart)
      </td>
      <td>
        Unmittelbar bevor der Parser das <a href="/de/docs/Web/API/Document/DOMContentLoaded_event"><code>DOMContentLoaded</code></a> Ereignis sendet, also direkt nachdem alle Skripte, die sofort nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)
      </td>
      <td>
        Direkt nachdem alle Skripte, die so früh wie möglich in beliebiger Reihenfolge oder geordnet ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete)
      </td>
      <td>
        Wenn der Parser seine Arbeit am Hauptdokument beendet hat, also wenn dessen <a href="/de/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> sich auf <code>'complete'</code> ändert und das entsprechende <a href="/de/docs/Web/API/Document/readystatechange_event"><code>readystatechange</code></a> Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart)
      </td>
      <td>
        Wenn das <a href="/de/docs/Web/API/Window/load_event"><code>load</code></a> Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd)
      </td>
      <td>
        Wenn der <a href="/de/docs/Web/API/Window/load_event"><code>load</code></a> Ereignishandler beendet ist, also wenn das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet oder noch nicht abgeschlossen wurde, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

### Berechnung der Timings

Wir können diese Werte verwenden, um spezifische interessante Timings zu messen:

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### Time to First Byte

Die {{Glossary("Time_to_first_byte", "Time to First Byte")}} ist die Zeit zwischen dem `navigationStart` (Beginn der Navigation) und `responseStart`, (wenn das erste Byte der Antwort empfangen wird) verfügbar in der `performanceTiming` API:

```js
const ttfb = time.responseStart - time.navigationStart;
```

### Seite Ladezeit

Die {{Glossary("Page_load_time", "Seitenladezeit")}} ist die Zeit zwischen `navigationStart` und dem Zeitpunkt, an dem das Ladeereignis für das aktuelle Dokument gesendet wird. Sie sind nur in der performanceTiming API verfügbar.

```js
let pageloadTime = time.loadEventStart - time.navigationStart;
```

### DNS-Lookup-Zeit

Die DNS-Lookup-Zeit ist die Zeit zwischen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Diese sind sowohl in den `performanceTiming` als auch in den `performanceNavigationTiming` APIs verfügbar.

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Die Zeit, die für den {{Glossary("TCP", "TCP")}}-Handshake benötigt wird, ist die Zeit zwischen dem Beginn und Ende der Verbindung:

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS-Verhandlung

[`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) wird `undefined` sein, wenn nicht verfügbar, `0`, wenn {{Glossary("HTTPS", "HTTPS")}} nicht verwendet wird, oder ein Zeitstempel, wenn verfügbar und verwendet. Mit anderen Worten, wenn eine sichere Verbindung verwendet wurde, wird `secureConnectionStart` {{Glossary("Truthy", "wahr")}} sein, und die Zeit zwischen `secureConnectionStart` und `requestStart` wird größer als 0 sein.

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Die allgemeinen Leistungstimings oben sind veraltet, aber voll unterstützt. Wir haben jetzt die [Performance Entry API](/de/docs/Web/API/PerformanceEntry), die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourcenladeprozesses ermöglicht. Sie können auch Marken erstellen:

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

In unterstützenden Browsern können Sie `performance.getEntriesByType('paint')` verwenden, um die Messung für `first-paint` und `first-contentful-paint` abzufragen. Wir verwenden `performance.getEntriesByType('navigation')` und `performance.getEntriesByType('resource')`, um die Navigations- und Ressourcentimings entsprechend abzufragen.

## Navigationstiming

Wenn ein Benutzer eine Website oder Anwendung anfordert, um [den Browser zu füllen](/de/docs/Web/Performance/How_browsers_work), durchläuft der Benutzeragent eine Reihe von Schritten, einschließlich eines {{Glossary("DNS", "DNS")}}-Lookups, {{Glossary("TCP_handshake", "TCP-Handshake")}} und einer TLS-Verhandlung, bevor der Benutzeragent die eigentliche Anfrage sendet und die Server die angeforderten Assets zurückgeben. Der Browser analysiert dann den empfangenen Inhalt, baut die DOM, CSSOM, Zugänglichkeits- und Rendertrees auf und rendert schließlich die Seite. Sobald der Benutzeragent aufhört, das Dokument zu analysieren, wird die Dokumentbereitstellung auf _interaktiv_ gesetzt. Wenn es verzögerte Skripte gibt, die analysiert werden müssen, wird dies jetzt durchgeführt und dann das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst, wonach die Bereitschaft auf _komplett_ gesetzt wird. Das Dokument kann jetzt Nachladeaufgaben ausführen, wonach das Dokument als vollständig geladen markiert wird.

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

`performance.getEntriesByType('navigation')` gibt ein Array von [PerformanceEntry](/de/docs/Web/API/PerformanceEntry)-Objekten für den Typ _navigation_ zurück.

![Das Ergebnis, wenn performance.getEntriesByType('navigation'); in der Konsole für dieses Dokument eingegeben wird](perfgentrybytypenavigation.png)

Vieles kann aus diesen Timings abgeleitet werden. Im obigen Bild sehen wir über die _name_-Eigenschaft, dass die Datei, die gemessen wird, dieses Dokument ist. Für den Rest dieser Erklärung verwenden wir die folgende Variable:

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### Protokoll

Wir können das verwendete Protokoll überprüfen, indem wir abfragen:

```js
const protocol = timing.nextHopProtocol;
```

Es gibt das Netzwerkprotokoll zurück, das zum Abrufen der Ressource verwendet wurde: in diesem Fall `h2` für `http/2`.

### Kompression

Um den prozentualen Einsparungsbetrag bei der Kompression zu ermitteln, teilen wir die transferSize durch die decodedBodySize und ziehen das von 100% ab. Wir sehen Einsparungen von über 74%.

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

Wir könnten auch verwenden

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

aber die Verwendung von `transferSize` beinhaltet die Overhead-Bytes.

Zum Vergleich können wir den Netzwerk-Tab ansehen und sehen, dass wir 22,04 KB für eine unkomprimierte Dateigröße von 87,24 KB übertragen haben.

![Ansicht der übertragenen Bytes und der Größe über den Netzwerk-Tab](bytesdownloaded.png)

Wenn wir die Berechnung mit diesen Zahlen durchführen, erhalten wir dasselbe Ergebnis: `1 - (22,04 / 87,24) = 0,747`. Die Navigationstimings bieten uns eine Möglichkeit, die Übertragungssizinatorische und Bandbreiteneinsparungen programmatisch zu überprüfen.

Beachten Sie, dass dies die Größe nur für dieses einzelne Dokument ist: nur für diese Ressource allein, nicht für alle Ressourcen zusammen. Die Dauer, die Ladevorgänge und die DOM-bezogenen Timings beziehen sich jedoch auf die gesamte Navigation, nicht auf dieses einzelne Asset. Clientseitige Webanwendungen können schneller erscheinen als diese mit Übertragungsgrößen unter 10000 und decodierten Körpergrößen unter 30000, aber das bedeutet nicht, dass JavaScript, CSS oder Medienassets nicht zum Aufblähen beitragen. Das Überprüfen von Kompressionsverhältnissen ist wichtig, aber stellen Sie auch sicher, dass Sie die Dauer und die Zeit zwischen dem Ende des DOMContentLoaded-Ereignisses und dem vollständigen DOM überprüfen, da das Ausführen von JavaScript auf dem Main-Thread über längere Zeiträume zu einer nicht reagierenden Benutzeroberfläche führen kann.

### Anforderungszeit

Die API bietet nicht jede Messung, die Sie möglicherweise benötigen. Zum Beispiel, wie lange dauert die Anfrage? Wir können die Messungen, die wir haben, verwenden, um unsere Antwort zu erhalten.

Um die Antwortzeit zu messen, ziehen Sie die Anforderungsstartzeit von der Antwortstartzeit ab. Der Anforderungsstart ist der Moment direkt bevor der Benutzeragent beginnt, die Ressource vom Server, von relevanten Anwendungs-Caches oder von lokalen Ressourcen anzufordern. Der Antwortstart ist die Zeit unmittelbar nachdem der HTTP-Parser des Benutzeragents das erste Byte der Antwort von relevanten Anwendungs-Caches, von lokalen Ressourcen oder vom Server erhält, was nach dem Empfang und der Verarbeitung der Anfrage geschieht.

```js
const request = timing.responseStart - timing.requestStart;
```

### Ladevorgangsdauer

Indem Sie den Zeitstempel unmittelbar bevor das Ladeereignis des aktuellen Dokuments ausgelöst wird, von dem Zeitpunkt abziehen, wenn das Ladeereignis des aktuellen Dokuments abgeschlossen ist, können Sie die Dauer des Ladevorgangs messen.

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded-Ereignis

Die Dauer des DOMContentLoaded-Ereignisses wird gemessen, indem der Zeitwert unmittelbar bevor der Benutzeragent das DOMContentLoaded-Ereignis auslöst, von dem Zeitwert abgezogen wird, der unmittelbar nach dem Abschluss des Ereignisses liegt. Das Halten dieser Zeit bei 50ms oder schneller hilft sicherzustellen, dass die Benutzeroberfläche ansprechend bleibt.

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Dauer

Uns wird die Dauer bereitgestellt. Die Dauer ist die Differenz zwischen den Eigenschaften [PerformanceNavigationTiming.loadEventEnd](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [PerformanceEntry.startTime](/de/docs/Web/API/PerformanceEntry/startTime).

Die PerformanceNavigationTiming- Schnittstelle bietet auch Informationen darüber, welche Art von Navigation Sie messen, indem sie `navigate`, `reload`, `back_forward` oder `prerender` zurückgibt.

## Ressourcentiming

Während das Navigationstiming zur Messung der Leistung der _Hauptseite_ dient, in der Regel der HTML-Datei, über die alle anderen Assets angefordert werden, misst Ressourcentiming die Zeiten für _einzelne Ressourcen_, die Assets, die von der Hauptseite aufgerufen und von diesen Ressourcen angefordert werden. Viele der Messungen sind ähnlich: Es gibt eine DNS-Abfrage, einen TCP-Handshake und der Start der sicheren Verbindung wird pro Domäne einmal durchgeführt.

![Grafik der Ressourcentiming-Zeitstempel](resourcetiming-timestamps.jpg)

Das Hauptaugenmerk liegt auf jeder Ressource.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming),
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
