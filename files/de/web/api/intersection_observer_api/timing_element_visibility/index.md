---
title: Timing element visibility with the Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel bauen wir einen simulierten Blog, der eine Reihe von Anzeigen enthält, die über den gesamten Seiteninhalt verteilt sind. Dann verwenden wir die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Wenn eine Anzeige mehr als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der realen Anwendung entsprechen (insbesondere haben alle Artikel denselben Text und werden nicht aus einer Datenbank geladen, und es gibt nur eine Handvoll einfacher Textanzeigen, die aus einem Array ausgewählt werden), sollte dies ausreichend Verständnis der API bieten, um schnell zu lernen, wie man die Intersection Observer API auf Ihre eigene Seite anwendet.

Es gibt einen guten Grund, warum in diesem Beispiel die Nachverfolgung der Sichtbarkeit von Anzeigen verwendet wird. Es zeigt sich, dass eine der häufigsten Anwendungen von Flash oder anderen Skripten in der Web-Werbung darin besteht, aufzuzeichnen, wie lange jede Anzeige sichtbar ist, zum Zweck der Abrechnung und Zahlung von Einnahmen. Ohne die Intersection Observer API wird dies typischerweise durch Intervals und Timeouts für jede einzelne Anzeige oder andere Techniken durchgeführt, die dazu neigen, die Seite zu verlangsamen. Durch die Verwendung dieser API kann alles vom Browser optimiert werden, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Lassen Sie uns anfangen!

## Aufbau der Seite

### Seitenstruktur: Das HTML

Die Struktur der Seite ist nicht zu kompliziert. Wir verwenden [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout), um die Seite zu stylen und zu layouten, somit können wir hier ziemlich direkt vorgehen:

```html
<div class="wrapper">
  <header>
    <h1>A Fake Blog</h1>
    <h2>Showing Intersection Observer in action!</h2>
  </header>

  <aside>
    <nav>
      <ul>
        <li><a href="#link1">A link</a></li>
        <li><a href="#link2">Another link</a></li>
        <li><a href="#link3">One more link</a></li>
      </ul>
    </nav>
  </aside>

  <main>…</main>
</div>
```

Dies ist das Gerüst für die gesamte Seite. Oben befindet sich der Header-Bereich der Seite, der in einem {{HTMLElement("header")}} Block enthalten ist. Darunter definieren wir die Seitenleiste der Seite als eine Liste von Links in einem {{HTMLElement("aside")}} Block.

Schließlich kommt der Hauptteil. Wir beginnen hier mit einem leeren {{HTMLElement("main")}} Element. Diese Box wird später durch ein Skript befüllt.

### Styling der Seite mit CSS

Mit der Struktur der Seite definiert, wenden wir uns dem Styling der Seite zu. Schauen wir uns den Stil für jede Komponente der Seite einzeln an.

#### Die Grundlagen

Wir definieren Stile für die {{HTMLElement("body")}} und {{HTMLElement("main")}} Elemente, um den Hintergrund der Seite sowie das Grid, in dem die verschiedenen Teile der Seite platziert werden, zu definieren.

```css
body {
  font-family: "Open Sans", "Arial", "Helvetica", sans-serif;
  background-color: aliceblue;
}

.wrapper {
  display: grid;
  grid-template-columns: auto minmax(min-content, 1fr);
  grid-template-rows: auto minmax(min-content, 1fr);
  max-width: 700px;
  margin: 0 auto;
  background-color: aliceblue;
}
```

Das {{HTMLElement("body")}} der Seite ist hier so konfiguriert, dass es eine der gängigen serifenlosen Schriftarten verwendet und `"aliceblue"` als Hintergrundfarbe verwendet. Dann wird die Klasse `"wrapper"` definiert; sie umschließt den gesamten Blog, einschließlich Header, Seitenleiste und Hauptinhalt (Artikel und Anzeigen).

Der Wrapper stellt ein CSS-Grid mit zwei Spalten und zwei Reihen bereit. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Seitenleiste verwendet, und die zweite Spalte (die für den Hauptinhalt verwendet wird) wird so bemessen, dass sie mindestens die Breite des Inhalts der Spalte und maximal den gesamten verbleibenden verfügbaren Platz einnimmt.

Die erste Reihe wird speziell für den Seitenheader verwendet. Die Reihen sind auf die gleiche Weise bemessen wie die Spalten: Die erste wird automatisch dimensioniert und die zweite nutzt den verbleibenden Raum, bietet aber mindestens genug Platz, um alle darin enthaltenen Elemente unterzubringen.

Die Breite des Wrappers ist auf 700px festgelegt, damit er in den verfügbaren Raum passt, wenn er unten auf MDN eingebettet wird.

#### Der Header

Der Header ist ziemlich einfach, da er für dieses Beispiel nur etwas Text enthält. Sein Stil sieht so aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} ist auf 1 gesetzt, da wir möchten, dass der Header in der obersten Zeile des Grids der Seite platziert wird. Interessanter ist unsere Verwendung von {{cssxref("grid-column")}} hier; hier geben wir an, dass wir möchten, dass die Spalte in der ersten Spalte beginnt und in der ersten Spalte hinter der letzten Gitterlinie endet – mit anderen Worten, der Header erstreckt sich über alle Spalten innerhalb des Grids. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Website darzustellen. Keine von ihnen funktioniert in unserem Beispiel hier, aber sie existieren, um das Erlebnis eines Blogs zu präsentieren. Die Seitenleiste wird mit einem {{HTMLElement("aside")}} Element dargestellt und wie folgt gestylt:

```css
aside {
  grid-column: 1;
  grid-row: 2;
  background-color: cornsilk;
  padding: 5px 10px;
}

aside ul {
  padding-left: 0;
}

aside ul li {
  list-style: none;
}

aside ul li a {
  text-decoration: none;
}
```

Das Wichtigste, was hier zu beachten ist, ist, dass {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint sie rechts (obwohl einige andere Elemente einige Anpassungen an ihren Rändern benötigen, um die Abstände genau richtig zu erhalten). Die {{cssxref("grid-row")}} ist auf 2 gesetzt, um sie neben dem Hauptteil der Seite zu platzieren.

#### Der Hauptinhalt

Apropos Hauptteil der Seite: Der Hauptinhalt der Seite wird in einem {{HTMLElement("main")}} Element gehalten. Der folgende Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Gitterposition festgelegt ist, um den Hauptinhalt in Spalte 2, Reihe 2 zu platzieren.

#### Artikel

Jeder Artikel ist in einem {{HTMLElement("article")}} Element enthalten, das wie folgt gestylt ist:

```css
article {
  background-color: white;
  padding: 6px;
}

article:not(:last-child) {
  margin-bottom: 8px;
}

article h2 {
  margin-top: 0;
}
```

Dies erstellt Artikelboxen mit einem weißen Hintergrund, die auf dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel herum. Jeder Artikel, der nicht der letzte Eintrag im Container ist, hat einen unteren Rand von 8px, um die Dinge auseinander zu halten.

#### Anzeigen

Schließlich haben die Anzeigen das folgende Grundstil. Einzelne Anzeigen können den Stil etwas anpassen, wie wir später sehen werden.

```css
.ad {
  height: 96px;
  padding: 6px;
  border-color: #555;
  border-style: solid;
  border-width: 1px;
}

.ad:not(:last-child) {
  margin-bottom: 8px;
}

.ad h2 {
  margin-top: 0;
}

.ad div {
  position: relative;
  float: right;
  padding: 0 4px;
  height: 20px;
  width: 120px;
  font-size: 14px;
  bottom: 30px;
  border: 1px solid black;
  background-color: rgb(255 255 255 / 50%);
}
```

Hier gibt es nichts Magisches. Es ist ziemlich grundlegendes CSS.

### Zusammenführung mit JavaScript

Das bringt uns zum JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

```js
let contentBox;

let nextArticleID = 1;
let visibleAds = new Set();
let previouslyVisibleAds = null;

let adObserver;
let refreshIntervalID = 0;
```

Diese werden wie folgt verwendet:

- `contentBox`
  - : Ein Verweis auf das {{HTMLElement("main")}} Element's [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt im DOM. Hier werden wir die Artikel und Anzeigen einfügen.
- `nextArticleID`
  - : Jeder Artikel erhält eine eindeutige ID-Nummer; diese Variable verfolgt die nächste zu verwendende ID, beginnend mit 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, mit dem wir die gerade auf dem Bildschirm sichtbaren Anzeigen verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer zu einem anderen Tab gewechselt hat).
- `adObserver`
  - : Wird unseren [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) halten, der die Schnittstelle zwischen den Anzeigen und den Grenzen des `<main>` Elements verfolgt.
- `refreshIntervalID`
  - : Wird verwendet, um die von [`setInterval()`](/de/docs/Web/API/Window/setInterval) zurückgegebene Intervall-ID zu speichern. Dieses Intervall wird verwendet, um unsere periodischen Aktualisierungen des Anzeigensinhalts auszulösen.

#### Einrichtung

Um alles einzurichten, führen wir die `startup()` Funktion beim Laden der Seite aus:

```js
window.addEventListener("load", startup, false);

function startup() {
  contentBox = document.querySelector("main");

  document.addEventListener("visibilitychange", handleVisibilityChange, false);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0.0, 0.75],
  };

  adObserver = new IntersectionObserver(intersectionCallback, observerOptions);

  buildContents();
  refreshIntervalID = setInterval(handleRefreshInterval, 1000);
}
```

Zuerst wird eine Referenz auf das Inhalts-umgebende {{HTMLElement("main")}} Element erhalten, damit wir unseren Inhalt darin einfügen können. Dann richten wir einen Ereignislistener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument ausgeblendet oder sichtbar wird, zum Beispiel, wenn der Benutzer die Browsertabs wechselt. Die Intersection Observer API berücksichtigt dies nicht, wenn sie Schnittstellen erkennt, da die Schnittstelle nicht von der Seitensichtbarkeit beeinflusst wird. Daher müssen wir unsere Timer anhalten, während die Seite auf einen anderen Tab gewechselt ist; daher dieser Ereignislistener.

Als Nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der die Ziel-Elemente (in unserem Fall Anzeigen) auf Schnittstellenänderungen relativ zum Dokument überwachen wird. Die Optionen sind so konfiguriert, dass sie auf Schnittstellen mit dem Sichtfenster des Dokuments (durch Setzen von `root` auf `null`) achten. Wir haben keine Ränder, um das Rechteck der Schnittstellenwurzel zu erweitern oder zu verkleinern; wir möchten die Grenzen des Sichtfensters des Dokuments genau für Schnittstellenzwecke abgleichen. Und das `threshold` ist auf ein Array mit den Werten 0.0 und 0.75 gesetzt; dies wird dazu führen, dass unser Rückruf immer dann ausgeführt wird, wenn ein Ziel-Element vollständig verdeckt wird oder sich zu Beginn entblößt (Schnittstellenverhältnis 0.0) oder durch 75% sichtbar in beide Richtungen geht (Schnittstellenverhältnis 0.75).

Der Beobachter, `adObserver`, wird erstellt, indem der Konstruktor von `IntersectionObserver` aufgerufen wird, wobei die Rückruffunktion `intersectionCallback` und unsere Optionen übergeben werden.

Wir rufen dann eine Funktion `buildContents()` auf, die wir später definieren werden, um die Artikel und Anzeigen zu generieren und in das Dokument einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um alle notwendigen Aktualisierungen zu behandeln. Wir benötigen eine Sekunde Aktualisierung, da wir für die Zwecke dieses Beispiels Timer in allen sichtbaren Anzeigen anzeigen. Möglicherweise benötigen Sie überhaupt kein Intervall, oder Sie könnten es anders oder mit einem anderen Zeitintervall machen.

#### Umgang mit Änderungen der Dokumentensichtbarkeit

Schauen wir uns den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis an. Unser Skript empfängt dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer Tabs wechselt. Da der Intersection Observer sich nur um die Schnittstelle zwischen den Ziel-Elementen und der Schnittstellenwurzel kümmert und nicht um die Sichtbarkeit des Tabs (was ein völlig anderes Thema ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Tab-Wechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

```js
function handleVisibilityChange() {
  if (document.hidden) {
    if (!previouslyVisibleAds) {
      previouslyVisibleAds = visibleAds;
      visibleAds = new Set();
      previouslyVisibleAds.forEach((adBox) => {
        updateAdTimer(adBox);
        adBox.dataset.lastViewStarted = 0;
      });
    }
  } else {
    previouslyVisibleAds.forEach((adBox) => {
      adBox.dataset.lastViewStarted = performance.now();
    });
    visibleAds = previouslyVisibleAds;
    previouslyVisibleAds = null;
  }
}
```

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar zu unsichtbar oder umgekehrt gewechselt ist, wird die [`document.hidden`](/de/docs/Web/API/Document/hidden) Eigenschaft überprüft, um festzustellen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, mehrmals aufgerufen zu werden, fahren wir nur fort, wenn wir die Timer noch nicht pausiert haben und die Sichtbarkeitszustände der bestehenden Anzeigen gespeichert haben.

Um die Timer zu pausieren, müssen wir lediglich die Anzeigen aus dem Set der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv markieren. Dazu beginnen wir damit, das Set der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds` zu speichern, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer wieder ins Dokument zurückkehrt, und dann leeren wir das `visibleAds` Set, damit sie nicht als sichtbar behandelt werden. Dann rufen wir für jede der Anzeigen, die angehalten werden, unsere `updateAdTimer()` Funktion auf, die das Aktualisieren des gesamten sichtbaren Zeitgebers der Anzeige behandelt. Danach setzen wir ihre `dataset.lastViewStarted` Eigenschaft auf 0, um anzuzeigen, dass der Zeitspeicher des Tabs nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Vorgang um: Zuerst gehen wir durch `previouslyVisibleAds` und setzen für jedes die `dataset.lastViewStarted` auf die aktuelle Dokumentzeit (in Millisekunden seit Erstellung des Dokuments) unter Verwendung der [`performance.now()`](/de/docs/Web/API/Performance/now) Methode. Dann setzen wir `visibleAds` zurück auf `previouslyVisibleAds` und setzen letzteres auf `null`. Jetzt sind alle Anzeigen neu gestartet und konfiguriert, um zu wissen, dass sie zum aktuellen Zeitpunkt sichtbar wurden, damit sie beim nächsten Update nicht die Dauer der Zeit, in der die Seite weggetabbed war, hinzufügen.

#### Umgang mit Schnittstellenänderungen

Einmal pro Durchlauf durch die Ereignisschleife des Browsers überprüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Zielelemente einen der Schnittstellenverhältnis-Schwellenwerte des Beobachters durchlaufen hat. Für jeden Beobachter wird eine Liste von Zielen, die dies getan haben, erstellt und als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten an den Rückruf des Beobachters gesendet. Unser Rückruf `intersectionCallback()` sieht so aus:

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    const adBox = entry.target;

    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.75) {
        adBox.dataset.lastViewStarted = entry.time;
        visibleAds.add(adBox);
      }
    } else {
      visibleAds.delete(adBox);
      if (
        entry.intersectionRatio === 0.0 &&
        adBox.dataset.totalViewTime >= 60000
      ) {
        replaceAd(adBox);
      }
    }
  });
}
```

Wie bereits erwähnt, erhält der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Rückruf als Eingabe ein Array aller vom Beobachter anvisierten Elemente, die entweder mehr oder weniger sichtbar als eines der Schnittstellenverhältnisse des Beobachters geworden sind. Wir iterieren über jeden dieser Einträge – die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Zielelement mit der Wurzel Schnittpunkte hat, wissen wir, dass es gerade vom verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es mindestens zu 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und starten den Timer, indem wir das Attribut `dataset.lastViewStarted` der Anzeige auf die Übertragungszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen, dann fügen wir die Anzeige zum Set `visibleAds` hinzu, damit wir wissen, dass sie verarbeitet werden muss, während die Zeit vergeht.

Wenn die Anzeige in den nicht schneidenden Zustand übergegangen ist, entfernen wir die Anzeige aus dem Set der sichtbaren Anzeigen. Dann haben wir ein spezielles Verhalten: Wir schauen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) 0.0 ist; wenn dies der Fall ist, bedeutet das, dass das Element völlig verdeckt geworden ist. Wenn dies zutrifft und die Anzeige mindestens insgesamt eine Minute sichtbar war, rufen wir eine Funktion auf, die wir erstellen werden, genannt `replaceAd()`, um die bestehende Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Benutzer im Laufe der Zeit eine Vielzahl von Anzeigen, aber die Anzeigen werden nur dann ersetzt, wenn sie nicht mehr gesehen werden können, was zu einem reibungslosen Erlebnis führt.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird etwa einmal pro Sekunde dank des Aufrufs von [`setInterval()`](/de/docs/Web/API/Window/setInterval) in der `startup()` Funktion [wie oben beschrieben](#einrichtung) aufgerufen. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und ein Redraw zu planen, um die Timer zu aktualisieren, die wir in jeder Anzeige zeichnen werden.

```js
function handleRefreshInterval() {
  const redrawList = [];

  visibleAds.forEach((adBox) => {
    const previousTime = adBox.dataset.totalViewTime;
    updateAdTimer(adBox);

    if (previousTime !== adBox.dataset.totalViewTime) {
      redrawList.push(adBox);
    }
  });

  if (redrawList.length) {
    window.requestAnimationFrame((time) => {
      redrawList.forEach((adBox) => {
        drawAdTimer(adBox);
      });
    });
  }
}
```

Das Array `redrawList` wird verwendet, um eine Liste von allen Anzeigen zu speichern, die während dieses Aktualisierungszyklus neu gezeichnet werden müssen, da dies möglicherweise nicht genau die verstrichene Zeit widerspiegelt aufgrund von Systemaktivität oder weil Sie das Intervall auf etwas anderes als alle 1000 Millisekunden eingestellt haben.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtanzahl der Millisekunden, die die Anzeige derzeit sichtbar war, seit sie zuletzt aktualisiert wurde) und rufen dann `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn sich etwas verändert hat, dann schieben wir die Anzeige auf die `redrawList`, damit wir wissen, dass sie während des nächsten Animationsrahmens aktualisiert werden muss.

Schließlich, wenn mindestens ein Element neu gezeichnet werden muss, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsrahmens neu zeichnen wird.

#### Aktualisieren des Sichtbarkeitstimers einer Anzeige

Bisher (siehe [Handhabung von Änderungen der Dokumentensichtbarkeit](#umgang_mit_änderungen_der_dokumentensichtbarkeit) und [Handhabung periodischer Aktionen](#umgang_mit_periodischen_aktionen)) haben wir gesehen, dass wir, wenn wir den "Gesamtanzeigezeit"-Zähler einer Anzeige aktualisieren müssen, eine Funktion namens `updateAdTimer()` aufrufen, um dies zu tun. Diese Funktion nimmt als Eingabe ein [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement) Objekt einer Anzeige an. Hier ist es:

```js
function updateAdTimer(adBox) {
  const lastStarted = adBox.dataset.lastViewStarted;
  const currentTime = performance.now();

  if (lastStarted) {
    const diff = currentTime - lastStarted;

    adBox.dataset.totalViewTime =
      parseFloat(adBox.dataset.totalViewTime) + diff;
  }

  adBox.dataset.lastViewStarted = currentTime;
}
```

Um die sichtbare Zeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Datenattribute ( siehe [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)) auf jeder Anzeige:

- `lastViewStarted`
  - : Die Zeit in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, zu der der Sichtbarkeitszähler der Anzeige zuletzt aktualisiert oder die Anzeige zuletzt sichtbar wurde. 0, wenn die Anzeige bei der letzten Überprüfung nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtanzahl der Millisekunden, die die Anzeige sichtbar war.

Diese werden durch das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Attribut jeder Anzeige zugegriffen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Zuordnung von jedem benutzerdefinierten Attributnamen zu seinem Wert bereitstellt. Die Werte sind Zeichenfolgen, aber wir können diese leicht in Zahlen umwandeln – tatsächlich macht JavaScript dies normalerweise automatisch, obwohl wir an einer Stelle müssen, wo wir es selbst tun müssen.

Wir beginnen, indem wir die letzte Überprüfungszeit der Anzeige (`adBox.dataset.lastViewStarted`) in einer lokalen Variablen namens `lastStarted` abrufen. Wir erhalten auch den aktuellen Zeitwert seit Erstellung mithilfe der [`performance.now()`](/de/docs/Web/API/Performance/now) Methode in `currentTime`.

Wenn `lastStarted` ungleich null ist – was bedeutet, dass der Timer derzeit läuft, berechnen wir den Unterschied zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu ermitteln, die der Timer seit dem letzten Mal sichtbar war. Dies wird zum aktuellen Wert der `totalViewTime` der Anzeige hinzugefügt, um die Gesamtzeit auf den aktuellen Stand zu bringen. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; da diese Werte Zeichenfolgen sind, versucht JavaScript ohne es eine Zeichenfolgenverkettung anstelle einer Addition vorzunehmen.

Schließlich wird die zuletzt gesehene Zeit der Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht, egal ob der Timer beim Aufruf dieser Funktion lief oder nicht; dies führt dazu, dass der Timer der Anzeige immer läuft, wenn diese Funktion endet. Das macht Sinn, weil diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, auch wenn sie jetzt gerade sichtbar geworden ist.

#### Zeichnen des Timers einer Anzeige

In jeder Anzeige zeichnen wir zu Demonstrationszwecken den aktuellen Wert ihrer `totalViewTime`, umgerechnet in Minuten und Sekunden. Dies wird durch das Übergeben des Anzeigeelements an die Funktion `drawAdTimer()` behandelt:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige durch dessen ID, `"timer"`, und berechnet die Anzahl der vergangenen Sekunden, indem die `totalViewTime` der Anzeige durch 1000 geteilt wird. Dann berechnet er die Anzahl der verstrichenen Minuten und Sekunden, bevor er die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des Timers auf eine Zeichenfolge setzt, die diese Zeit in der Form von m:ss darstellt. Die Methode {{jsxref("String.padStart()")}} wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Ziffern aufgefüllt wird, wenn sie kleiner als 10 ist.

#### Erstellen der Seiteninhalte

Die `buildContents()` Funktion wird durch den [Startcode](#einrichtung) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, die dargestellt werden sollen:

```js
const loremIpsum =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing" +
  " elit. Cras at sem diam. Vestibulum venenatis massa in tincidunt" +
  " egestas. Morbi eu lorem vel est sodales auctor hendrerit placerat" +
  " risus. Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorper" +
  " eu. Donec nec imperdiet nibh, nec vehicula libero. Phasellus vel" +
  " malesuada nulla. Aliquam sed magna aliquam, vestibulum nisi at," +
  " cursus nunc.</p>";

function buildContents() {
  for (let i = 0; i < 5; i++) {
    contentBox.appendChild(createArticle(loremIpsum));

    if (!(i % 2)) {
      loadRandomAd();
    }
  }
}
```

Die Variable `loremIpsum` enthält den Text, den wir für den Inhalt all unserer Artikel verwenden. Natürlich hätten Sie in der realen Welt etwas Code, um Artikel aus einer Datenbank oder Ähnlichem abzurufen, aber das erfüllt unseren Zweck. Jeder Artikel verwendet denselben Text; Sie könnten das natürlich leicht ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeraden Artikel wird eine Anzeige "geladen" und in die Seite eingefügt. Artikel werden in das Inhaltsfeld (also das {{HTMLElement("main")}} Element, das den gesamten Seiteninhalt enthält) eingefügt, nachdem sie mit einer Methode namens `createArticle()` erstellt wurden, die wir uns als Nächstes anschauen werden.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erstellt als auch in die Seite einfügt. Wir werden später sehen, dass diese gleiche Funktion auch eine vorhandene Anzeige ersetzen kann, aber im Moment fügen wir Anzeigen zu den vorhandenen Inhalten hinzu.

#### Erstellen eines Artikels

Um ein {{HTMLElement("article")}} Element für einen Artikel sowie dessen gesamten Inhalt zu erstellen, verwenden wir die `createArticle()` Funktion, die als Eingabe eine Zeichenfolge erhält, die den vollständigen Text des Artikels darstellt, der auf die Seite hinzugefügt werden soll.

```js
function createArticle(contents) {
  const articleElem = document.createElement("article");
  articleElem.id = nextArticleID;

  const titleElem = document.createElement("h2");
  titleElem.innerText = `Article ${nextArticleID} title`;
  articleElem.appendChild(titleElem);

  articleElem.innerHTML += contents;
  nextArticleID += 1;

  return articleElem;
}
```

Zunächst wird das `<article>` Element erstellt und seine ID wird auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und für jeden Artikel nach oben geht). Dann erstellen wir ein {{HTMLElement("Heading_Elements", "h2")}} Element für den Artikeltitel und dann fügen wir das HTML von `contents` hinzu. Schließlich wird `nextArticleID` inkrementiert (damit das nächste Element eine neue eindeutige ID erhält) und wir geben das neue `<article>` Element an den Aufrufer zurück.

#### Erstellen einer Anzeige

Die `loadRandomAd()` Funktion simuliert das Laden einer Anzeige und das Hinzufügen zur Seite. Wenn Sie keinen Wert für `replaceBox` übergeben, wird ein neues Element erstellt, um die Anzeige aufzunehmen; die Anzeige wird dann der Seite hinzugefügt. Wenn Sie eine `replaceBox` angeben, wird diese Box als vorhandenes Anzeigenelement behandelt; anstatt ein neues zu erstellen, wird das vorhandene Element geändert, um den Stil, den Inhalt und andere Daten der neuen Anzeige zu enthalten. Dies vermeidet das Risiko, dass aufwendige Layoutarbeiten durchgeführt werden, wenn Sie die Anzeige aktualisieren, was passieren könnte, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

```js
function loadRandomAd(replaceBox) {
  const ads = [
    {
      bgcolor: "#cec",
      title: "Eat Green Beans",
      body: "Make your mother proud—they're good for you!",
    },
    {
      bgcolor: "aquamarine",
      title: "MillionsOfFreeBooks.whatever",
      body: "Read classic literature online free!",
    },
    {
      bgcolor: "lightgrey",
      title: "3.14 Shades of Gray: A novel",
      body: "Love really does make the world go round…",
    },
    {
      bgcolor: "#fee",
      title: "Flexbox Florist",
      body: "When life's layout gets complicated, send flowers.",
    },
  ];
  let adBox, title, body, timerElem;

  const ad = ads[Math.floor(Math.random() * ads.length)];

  if (replaceBox) {
    adObserver.unobserve(replaceBox);
    adBox = replaceBox;
    title = replaceBox.querySelector(".title");
    body = replaceBox.querySelector(".body");
    timerElem = replaceBox.querySelector(".timer");
  } else {
    adBox = document.createElement("div");
    adBox.className = "ad";
    title = document.createElement("h2");
    body = document.createElement("p");
    timerElem = document.createElement("div");
    adBox.appendChild(title);
    adBox.appendChild(body);
    adBox.appendChild(timerElem);
  }

  adBox.style.backgroundColor = ad.bgcolor;

  title.className = "title";
  body.className = "body";
  title.innerText = ad.title;
  body.innerHTML = ad.body;

  adBox.dataset.totalViewTime = 0;
  adBox.dataset.lastViewStarted = 0;

  timerElem.className = "timer";
  timerElem.innerText = "0:00";

  if (!replaceBox) {
    contentBox.appendChild(adBox);
  }

  adObserver.observe(adBox);
}
```

Zuerst wird das Array `ads` erstellt. Dieses Array enthält die Daten, die zum Erstellen jeder Anzeige benötigt werden. Wir haben hier vier zur Auswahl. In einem realen Szenario würden die Anzeigen natürlich aus einer Datenbank oder, wahrscheinlicher, von einem Werbeservice stammen, von dem Sie Anzeigen über eine API abrufen. Unsere Bedürfnisse sind jedoch einfach: Jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: eine Hintergrundfarbe (`bgcolor`), einen Titel (`title`) und eine Textzeichenfolge (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Diese wird auf das Element gesetzt, das die Anzeige darstellt. Für neue Anzeigen, die der Seite hinzugefügt werden, wird diese durch [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Beim Ersetzen einer vorhandenen Anzeige wird diese auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}} Element halten, das den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}} Element halten, das den Textkörper der Anzeige darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}} Element halten, das die Zeit enthält, die die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird ausgewählt, indem `Math.floor(Math.random() * ads.length)` berechnet wird; das Ergebnis ist ein Wert zwischen 0 und einer weniger als die Anzahl der Anzeigen. Die entsprechende Anzeige ist jetzt als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben wird, verwenden wir diesen als Anzeigenelement. Damit beginnen wir, die Beobachtung des Elements zu beenden, indem wir [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) aufrufen. Dann werden die lokalen Variablen für jedes der Elemente, die eine Anzeige ausmachen: die Anzeigebox selbst, der Titel, der Körper und die Timer-Box, auf die entsprechenden Elemente in der vorhandenen Anzeige gesetzt.

Wenn kein Wert für replaceBox angegeben ist, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}} Element der Anzeige wird erstellt und seine Eigenschaften werden durch Setzen seines Klassennamens auf `"ad"` festgelegt. Anschließend werden das Anzeigentitel-Element, der Textkörper und der Sichtbarkeitstimer erstellt; diese sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}}, und ein {{HTMLElement("div")}} Element,. Diese werden dem `adBox` Element hinzugefügt.

Danach konvergieren die Codepfade wieder. Die Hintergrundfarbe der Anzeige wird auf den im neuen Datensatz spezifizierten Wert gesetzt, und die Klassen und Inhalte der Elemente werden auch entsprechend gesetzt.

Als nächstes ist es an der Zeit, die benutzerdefinierten Dateneigenschaften einzurichten, um die Sichtbarkeit der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, das den Timer anzeigen soll, den wir in der Anzeige darstellen werden, und geben ihm die Klasse `"timer"`. Der Initialtext wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden zu repräsentieren, und er wird der Anzeige angefügt.

Wenn wir keine vorhandene Anzeige ersetzen, müssen wir das Element mit [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) in den Inhaltsbereich der Seite einfügen. Wenn wir eine Anzeige ersetzen, ist sie bereits da, mit ihrem Inhalt ersetzt durch die neue Anzeige. Dann rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) Methode auf unserem Intersection Observer, `adObserver`, auf, um mit dem Beobachten der Anzeige zu beginnen, ob sich deren Schnittstelle mit dem Sichtfenster verändert. Jetzt wird jedes Mal, wenn die Anzeige zu 100% verdeckt wird oder auch nur ein einziger Pixel sichtbar wird, oder die Anzeige durch 75% sichtbar in irgendeine Richtung geht, der [Rückruf des Beobachters](#umgang_mit_schnittstellenänderungen) ausgeführt.

#### Ersetzen einer vorhandenen Anzeige

Unser [Rückruf des Beobachters](#umgang_mit_schnittstellenänderungen) passt auf Anzeigen auf, die zu 100% verdeckt werden und eine gesamte Sichtzeit von mindestens einer Minute haben. Wenn dies geschieht, wird die `replaceAd()` Funktion mit dem Element dieser Anzeige als Eingabe aufgerufen, damit die alte Anzeige durch eine neue ersetzt werden kann.

```js
function replaceAd(adBox) {
  updateAdTimer(adBox);

  const visibleTime = adBox.dataset.totalViewTime;
  console.log(
    `Replacing ad: ${
      adBox.querySelector("h2").innerText
    } - visible for ${visibleTime}`,
  );

  loadRandomAd(adBox);
}
```

`replaceAd()` beginnt, indem `updateAdTimer()` auf der vorhandenen Anzeige aufgerufen wird, um sicherzustellen, dass ihr Timer auf dem neuesten Stand ist. Dies stellt sicher, dass wir beim Lesen ihrer `totalViewTime` den genauen Endwert dafür sehen, wie lange die Anzeige für den Benutzer sichtbar war. Wir berichten diese Daten dann; in diesem Fall, indem wir sie in die Konsole protokollieren, aber in der realen Welt würden Sie die Informationen an die API eines Anzeigenservice übermitteln oder in einer Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#erstellen_einer_anzeige) aufrufen und das zu ersetzende Element als Eingabeparameter angeben. Wie wir zuvor gesehen haben, wird `loadRandomAd()` eine bestehende Anzeige durch Inhalt und Daten einer neuen Anzeige ersetzen, wenn Sie ein bestehendes Anzeigenelement als Eingabeparameter angeben.

Das neue Elementobjekt der Anzeige wird zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie zu experimentieren, indem Sie hoch- und runterscrollen, und beachten Sie, wie Veränderungen der Sichtbarkeit die Timer in jeder Anzeige beeinflussen. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss zuerst außer Sicht scrollen und wieder zurückkehren), und wie die Timer pausieren, während das Dokument in den Hintergrund getabbed wird. Das Abdecken des Browsers mit einem anderen Fenster pausiert die Timer jedoch nicht.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
