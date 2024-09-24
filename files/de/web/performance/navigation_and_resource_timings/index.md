---
title: Navigations- und Ressourcentimings
slug: Web/Performance/Navigation_and_resource_timings
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Navigationstimmings** sind Metriken, die die Dokumentennavigationsereignisse eines Browsers messen. **Ressourcentimmings** sind detaillierte Netzwerktimingsmessungen in Bezug auf das Laden von Anwendungsressourcen. Beide bieten dieselben schreibgeschützten Eigenschaften, aber die Navigationstiming misst die Zeiten des Hauptdokuments, während das Ressourcentiming die Zeiten für alle vom Hauptdokument geladenen Assets oder Ressourcen und deren angeforderte Ressourcen bietet.

Die allgemeinen Leistungstimings unten wurden zugunsten der Performance Entry API, die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourcenladeprozesses ermöglicht, veraltet. Obwohl veraltet, werden sie in allen Browsern unterstützt.

## Performance Timings

Die [performanceTiming-API](/de/docs/Web/API/PerformanceTiming), eine JavaScript-API zur Messung der Ladeleistung der angeforderten Seite, ist veraltet, aber wird in allen Browsern unterstützt. Sie wurde durch die [performanceNavigationTiming-API](/de/docs/Web/API/PerformanceNavigationTiming) ersetzt.

Die performaceTiming-API bot schreibgeschützte Zeiten, in Millisekunden (ms), die angeben, zu welchem Zeitpunkt jeder Punkt im Seitenladeprozess erreicht wurde. Wie im Bild unten gezeigt, geht der Navigationsprozess von [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) und [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd).

![Navigation Timing event metrics](screen_shot_2019-05-03_at_1.06.27_pm.png)

Mit den obigen Metriken und ein wenig Mathematik können wir viele wichtige Metriken berechnen, wie z.B. [Time to First Byte](/de/docs/Glossary/Time_to_first_byte), Seitenladezeit, DNS-Lookup und ob die Verbindung sicher ist.

Um die Zeit zu messen, die benötigt wird, um alle Schritte abzuschließen, bietet die Performance Timing API schreibgeschützte Messungen der Navigationstimings. Um die Timing unserer App zu sehen und zu erfassen, gehen wir wie folgt vor:

```js
let time = window.performance.timing;
```

Wir können dann die Ergebnisse verwenden, um zu messen, wie gut unsere App funktioniert.

![entering window.performance.timing in the console lists all the timings in the PerformanceNavigationTiming interface](navigatortiming.png)

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
        {{domxref("PerformanceTiming.navigationStart","navigationStart")}}
      </td>
      <td>
        Wenn die Aufforderung zum Entladen des vorherigen Dokuments im selben
        Browsing-Kontext beendet wird. Wenn es kein vorheriges Dokument gibt,
        ist dieser Wert derselbe wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.secureConnectionStart","secureConnectionStart")}}
      </td>
      <td>
        Wenn der sichere Verbindungshandschlag beginnt. Wenn eine solche
        Verbindung nicht angefordert wird, wird <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.redirectStart","redirectStart")}}
      </td>
      <td>
        Wenn die erste HTTP-Umleitung beginnt. Wenn keine Umleitung vorliegt
        oder eine der Umleitungen nicht von derselben Herkunft ist, wird der
        Wert <code>0</code> zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.redirectEnd","redirectEnd")}}
      </td>
      <td>
        <p>
          Wenn die letzte HTTP-Umleitung abgeschlossen ist, das heißt, wenn das
          letzte Byte der HTTP-Antwort empfangen wurde. Wenn keine Umleitung
          vorliegt oder eine der Umleitungen nicht von derselben Herkunft ist,
          wird der Wert <code>0</code> zurückgegeben.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.connectEnd","connectEnd")}}
      </td>
      <td>
        Wenn die Verbindung im Netzwerk geöffnet ist. Wenn die Transportschicht
        einen Fehler meldet und die Verbindung erneut geöffnet wird, wird die
        letzte Endzeit angegeben. Wenn eine persistente Verbindung verwendet
        wird, ist der Wert derselbe wie
        <code>PerformanceTiming.fetchStart</code>. Eine Verbindung wird als
        geöffnet angesehen, wenn alle sicheren Verbindungshandschläge oder
        SOCKS-Authentifizierungen beendet sind.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.connectStart","connectStart")}}
      </td>
      <td>
        Wenn die Anforderung zum Öffnen einer Verbindung an das Netzwerk
        gesendet wird. Wenn die Transportschicht einen Fehler meldet und die
        Verbindung erneut geöffnet wird, wird die letzte Startzeit angegeben.
        Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe
        wie <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domainLookupEnd","domainLookupEnd")}}
      </td>
      <td>
        Wenn die Domänensuche abgeschlossen ist. Wenn eine persistente
        Verbindung verwendet wird oder die Informationen im Cache oder in einer
        lokalen Ressource gespeichert sind, ist der Wert derselbe wie
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domainLookupStart","domainLookupStart")}}
      </td>
      <td>
        Wenn die Domänensuche beginnt. Wenn eine persistente Verbindung
        verwendet wird oder die Informationen im Cache oder in einer lokalen
        Ressource gespeichert sind, ist der Wert derselbe wie
        <code>PerformanceTiming.fetchStart</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.fetchStart","fetchStart")}}
      </td>
      <td>
        Wenn der Browser bereit ist, das Dokument mithilfe einer HTTP-Anforderung
        abzurufen. Dieser Moment ist <em>vor</em> der Überprüfung eines
        Anwendungscaches.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.requestStart","requestStart")}}
      </td>
      <td>
        Wenn der Browser die Anforderung gesendet hat, um das tatsächliche Dokument
        vom Server oder aus einem Cache zu erhalten. Wenn die Transportschicht
        nach dem Beginn der Anforderung fehlschlägt und die Verbindung erneut
        geöffnet wird, wird diese Eigenschaft auf die Zeit der neuen
        Anforderung gesetzt.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.responseStart","responseStart")}}
      </td>
      <td>
        Wenn der Browser das erste Byte der Antwort vom Server, aus einem Cache
        oder einer lokalen Ressource empfängt.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.responseEnd","responseEnd")}}
      </td>
      <td>
        Wenn der Browser das letzte Byte der Antwort empfängt oder wenn die
        Verbindung geschlossen ist, falls dies zuerst geschieht, vom Server, dem
        Cache oder einer lokalen Ressource.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domLoading","domLoading")}}
      </td>
      <td>
        Wenn der Parser seine Arbeit beginnt, das heißt, wenn sein
        {{domxref('Document.readyState')}} zu <code>'loading'</code> wechselt
        und das entsprechende
        {{DOMxRef("Document.readystatechange_event", "readystatechange")}}
        Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.unloadEventStart","unloadEventStart")}}
      </td>
      <td>
        Wenn das {{DOMxRef("Window.unload_event", "unload")}}
        Ereignis ausgelöst wird, das den Zeitpunkt anzeigt, an dem das vorherige
        Dokument im Fenster zu entladen beginnt. Wenn kein vorheriges Dokument
        vorhanden ist oder das Dokument oder eine der benötigten Umleitungen
        nicht von derselben Herkunft ist, wird der Wert <code>0</code>
        zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.unloadEventEnd","unloadEventEnd")}}
      </td>
      <td>
        Wenn der <code><a href="/de/docs/Web/API/Window/unload_event">unload</a></code>
        Ereignishandler beendet wird. Wenn kein vorheriges Dokument vorhanden
        ist oder das vorherige Dokument oder eine der benötigten Umleitungen
        nicht von derselben Herkunft ist, wird der Wert <code>0</code>
        zurückgegeben.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domInteractive","domInteractive")}}
      </td>
      <td>
        Wenn der Parser seine Arbeit am Hauptdokument beendet hat, das heißt,
        wenn sein <a href="/de/docs/Web/API/Document/readyState"
          ><code>Document.readyState</code></a> zu
        <code>'interactive'</code> wechselt und das entsprechende
        <code><a href="/de/docs/Web/API/Document/readystatechange_event"
            >readystatechange</a></code> Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domContentLoadedEventStart","domContentLoadedEventStart")}}
      </td>
      <td>
        Direkt bevor der Parser das
        <code
          ><a href="/de/docs/Web/API/Document/DOMContentLoaded_event"
            >DOMContentLoaded</a></code> Ereignis gesendet hat, das heißt direkt
        nachdem alle Skripte, die direkt nach dem Parsen ausgeführt werden müssen,
        ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domContentLoadedEventEnd","domContentLoadedEventEnd")}}
      </td>
      <td>
        Direkt nachdem alle Skripte, die so bald wie möglich in welcher Reihenfolge
        auch immer ausgeführt werden müssen, ausgeführt wurden.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.domComplete","domComplete")}}
      </td>
      <td>
        Wenn der Parser seine Arbeit am Hauptdokument beendet hat, das heißt,
        wenn sein <a href="/de/docs/Web/API/Document/readyState"
          ><code>Document.readyState</code></a> zu <code>'complete'</code>
        wechselt und das entsprechende
        <code><a href="/de/docs/Web/API/Document/readystatechange_event"
            >readystatechange</a></code> Ereignis ausgelöst wird.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("PerformanceTiming.loadEventStart","loadEventStart")}}
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
        {{domxref("PerformanceTiming.loadEventEnd","loadEventEnd")}}
      </td>
      <td>
        Wenn das
        <code><a href="/de/docs/Web/API/Window/load_event">load</a></code>
        Ereignis-Handler beendet wurde, das heißt, wenn das Ladevorgang beendet
        ist. Wenn dieses Ereignis noch nicht gesendet wurde oder noch nicht
        abgeschlossen ist, wird <code>0.</code> zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

### Berechnung von Timings

Wir können diese Werte verwenden, um bestimmte interessante Timings zu messen:

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
const tcp = time.connectEnd - time.connectStart;
const tls = time.requestStart - time.secureConnectionStart;
```

### Time to first byte

[Time to First Byte](/de/docs/Glossary/Time_to_first_byte) ist die Zeit zwischen `navigationStart` (Start der Navigation) und `responseStart` (wenn das erste Byte der Antwort empfangen wird), verfügbar in der `performanceTiming` API:

```js
const ttfb = time.responseStart - time.navigationStart;
```

### Seitensladezeit

[Seitensladezeit](/de/docs/Glossary/Page_load_time) ist die Zeit zwischen `navigationStart` und dem Beginn der Load-Ereignisbenachrichtigung für das aktuelle Dokument. Sie sind nur in der performanceTiming API verfügbar.

```js
let pageloadtime = time.loadEventStart - time.navigationStart;
```

### DNS-Lookup-Zeit

Die DNS-Lookup-Zeit ist die Zeit zwischen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Diese Zeiten sind sowohl in den APIs `performanceTiming` als auch `performanceNavigationTiming` verfügbar.

```js
const dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Die Zeit, die für das [TCP](/de/docs/Glossary/TCP)-Handshake benötigt wird, ist die Zeit zwischen dem Verbindungsstart und dem Verbindungsende:

```js
const tcp = time.connectEnd - time.connectStart;
```

### TLS-Verhandlung

[`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) ist `undefined`, wenn nicht verfügbar, `0`, wenn [HTTPS](/de/docs/Glossary/HTTPS) nicht verwendet wird, oder ein Zeitstempel, wenn verfügbar und verwendet. Mit anderen Worten, wenn eine sichere Verbindung verwendet wurde, wird `secureConnectionStart` [truthy](/de/docs/Glossary/Truthy) sein, und die Zeit zwischen `secureConnectionStart` und `requestStart` wird größer als 0 sein.

```js
const tls = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Die oben genannten allgemeinen Leistungstimings sind veraltet, aber vollständig unterstützt. Wir haben nun die [Performance Entry API](/de/docs/Web/API/PerformanceEntry), die das Markieren und Messen von Zeiten entlang des Navigations- und Ressourcenladeprozesses ermöglicht. Sie können auch Markierungen erstellen:

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

In unterstützenden Browsern können Sie `performance.getEntriesByType('paint')` verwenden, um das Measure für `first-paint` und `first-contentful-paint` abzufragen. Wir verwenden `performance.getEntriesByType('navigation')` und `performance.getEntriesByType('resource')`, um die Navigations- bzw. Ressourcentimings abzufragen.

## Navigation Timing

Wenn ein Benutzer eine Website oder Anwendung anfordert, um den Browser zu befüllen, durchläuft der Benutzeragent eine Reihe von Schritten, einschließlich eines {{glossary('DNS')}}-Lookups, {{glossary('TCP handshakes')}} und TLS-Negotiationen, bevor der Benutzeragent die tatsächliche Anforderung stellt und die Server die angeforderten Assets zurückgeben. Der Browser parst dann den empfangenen Inhalt, erstellt den DOM, CSSOM, Zugänglichkeits- und Rendertrees und rendert schließlich die Seite. Sobald der Benutzeragent das Dokument nicht mehr parst, setzt der Benutzeragent die Dokumentbereitschaft auf _interactive_. Wenn es verzögerte Skripte gibt, die geparst werden müssen, tut er dies und feuert dann das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event), wonach die Bereitschaft auf _complete_ gesetzt wird. Das Dokument kann nun Aufgaben nach dem Laden ausführen, nach denen das Dokument als vollständig geladen markiert wird.

```js
const navigationTimings = performance.getEntriesByType("navigation");
```

Die `performance.getEntriesByType('navigation')` gibt ein Array von [PerformanceEntry](/de/docs/Web/API/PerformanceEntry)-Objekten für den _navigation_ _type_ zurück.

![The results of when performance.getEntriesByType('navigation'); is entered into the console for this document](perfgentrybytypenavigation.png)

Viel kann aus diesen Timings herausgelesen werden. Im obigen Bild sehen wir über die _name_ Eigenschaft, dass die Datei, die getimed wird, dieses Dokument ist. Für den Rest dieser Erklärung verwenden wir die folgende Variable:

```js
const timing = performance.getEntriesByType("navigation")[0];
```

### Protokoll

Wir können das verwendete Protokoll überprüfen, indem wir abfragen:

```js
const protocol = timing.nextHopProtocol;
```

Es gibt das Netzwerkprotokoll zurück, das zur Abrufung der Ressource verwendet wurde: in diesem Fall `h2` für `http/2`.

### Kompression

Um den Kompressionseinsparungsprozentsatz zu erhalten, dividieren wir die transferSize durch die decodedBodySize und ziehen das von 100% ab. Wir sehen eine Einsparung von über 74%.

```js
const compressionSavings = 1 - timing.transferSize / timing.decodedBodySize;
```

Wir hätten auch

```js
const compressionSavings = 1 - timing.encodedBodySize / timing.decodedBodySize;
```

verwenden können, aber die Verwendung von `transferSize` beinhaltet die Overhead-Bytes.

Zum Vergleich können wir uns den Netzreiter ansehen und sehen, dass wir 22,04KB für eine unkomprimierte Dateigröße von 87,24KB übertragen haben.

![View of the bytes transferred and the size via the network tab](bytesdownloaded.png)

Wenn wir die Mathematik mit diesen Zahlen durchführen, erhalten wir dasselbe Ergebnis: `1 - (22.04 / 87.24) = 0.747`. Die Navigationstimings bieten uns eine Möglichkeit, die Übertragungssizing und Bandbreiteneinsparungen programmgesteuert zu überprüfen.

Beachten Sie, dass dies die Größe für dieses einzelne Dokument allein ist: für diese Ressource allein, nicht für alle kombinierten Ressourcen. Jedoch haben die Dauer, Ladeereignisse und DOM-bezogene Timings mit der gesamten Navigation zu tun, nicht mit diesem einzelnen Asset. Client-seitige Webanwendungen scheinen möglicherweise schneller zu sein als diese mit Übertragungsgrößen unter 10000 und decodierten Körpergrößen unter 30000, aber das bedeutet nicht, dass JavaScript, CSS oder Medienressourcen nicht Ballast hinzufügen. Das Überprüfen von Kompressionsverhältnissen ist wichtig, aber stellen Sie sicher, dass Sie auch Dauer und Zeit zwischen dem Ende des DOMContentLoaded-Ereignisses und dem vollständigen DOM überprüfen, da JavaScript auf dem Hauptthread über längere Zeiträume eine nicht-responsive Benutzeroberfläche verursachen kann.

### Anforderungszeit

Die API bietet nicht jede Messung, die Sie sich wünschen könnten. Zum Beispiel, wie lange hat die Anforderung gedauert? Wir können die Messungen verwenden, die wir haben, um unsere Antwort zu erhalten.

Um die Antwortzeit zu messen, subtrahieren wir die Anforderungsstartzeit von der Antwortstartzeit. Der Anforderungsstart ist der Moment unmittelbar vor dem Beginn des Benutzeragenten, die Ressource vom Server, aus relevanten Anwendungs-Caches oder aus lokalen Ressourcen anzufordern. Der Antwortstart ist die Zeit, nachdem der HTTP-Parser des Benutzeragents das erste Byte der Antwort aus relevanten Anwendungs-Caches, aus lokalen Ressourcen oder vom Server empfängt, was nach dem Empfangen und Verarbeiten der Anforderung geschieht.

```js
const request = timing.responseStart - timing.requestStart;
```

### Load-Eventdauer

Indem wir den Zeitstempel unmittelbar bevor das Ladeereignis des aktuellen Dokuments ausgelöst wird von der Zeit, wenn das Ladeereignis des aktuellen Dokuments abgeschlossen ist, subtrahieren, können wir die Dauer des Ladeereignisses messen.

```js
const load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded-Ereignis

Die DOMContentLoaded-Ereignisdauer wird gemessen, indem der Zeitwert unmittelbar bevor der Benutzeragent das DOMContentLoaded-Ereignis auslöst, von dem Wert unmittelbar nachdem das Ereignis abgeschlossen ist, subtrahiert wird. Dies auf 50ms oder schneller zu halten, hilft, eine responsive Benutzeroberfläche sicherzustellen.

```js
const DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Dauer

Wir erhalten die Dauer. Die Dauer ist der Unterschied zwischen den Eigenschaften [PerformanceNavigationTiming.loadEventEnd](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [PerformanceEntry.startTime](/de/docs/Web/API/PerformanceEntry/startTime).

Das PerformanceNavigationTiming-Interface bietet auch Informationen darüber, welche Art von Navigation Sie messen, und gibt `navigate`, `reload`, `back_forward` oder `prerender` zurück.

## Ressourcentiming

Während das Navigationstiming dazu dient, die Leistung der _Hauptseite_ zu messen, im Allgemeinen die HTML-Datei, über die alle anderen Ressourcen angefordert werden, misst das Ressourcentiming die Timings für _einzelne Ressourcen_, die von der Hauptseite geladenen Assets und alle Ressourcen, die diese Ressourcen anfordern. Viele der Messungen sind ähnlich: es gibt einen DNS-lookup, TCP-Handshake und den sicheren Verbindungsstart, der einmal pro Domain durchgeführt wird.

![Graphic of Resource Timing timestamps](resourcetiming-timestamps.jpg)

Das Hauptaugenmerk für jede Ressource.

## Siehe auch

- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}},
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
