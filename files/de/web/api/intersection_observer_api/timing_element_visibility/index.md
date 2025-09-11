---
title: Sichtbarkeit von Elementen mit der Intersection Observer API zeitlich messen
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel bauen wir einen Beispiel-Blog, der eine Anzahl von Anzeigen enthält, die über die Seite verteilt sind. Dann nutzen wir die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Nutzer sichtbar ist. Wenn eine Anzeige länger als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Auch wenn viele Aspekte dieses Beispiels nicht der realen Nutzung entsprechen (insbesondere haben alle Artikel denselben Text und werden nicht aus einer Datenbank geladen, und es gibt nur eine Handvoll einfacher Textanzeigen, die aus einem Array ausgewählt werden), sollte dies genug Verständnis der API bieten, um zu lernen, wie Sie die Intersection Observer API auf Ihrer eigenen Seite anwenden können.

Es gibt einen guten Grund, warum in diesem Beispiel das Verfolgen der Sichtbarkeit von Anzeigen verwendet wird. Es stellt sich heraus, dass eine der häufigsten Anwendungen von Flash oder anderen Skripten in Werbung im Internet darin besteht, zu protokollieren, wie lange jede Anzeige sichtbar ist, um Abrechnungen und Zahlungsflüsse zu verwalten. Ohne die Intersection Observer API geschieht dies durch Intervalle und Timeouts für jede einzelne Anzeige oder andere Techniken, die dazu tendieren, die Seite zu verlangsamen. Mit dieser API kann alles vom Browser optimiert werden, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Lassen Sie uns beginnen!

## Aufbau der Seite

### Seitenstruktur: Das HTML

Die Struktur der Seite ist nicht zu kompliziert. Wir verwenden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), um die Seite zu stylen und zu layouten, sodass wir hier ziemlich geradlinig vorgehen können:

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

Dies ist das Gerüst für die gesamte Seite. Oben befindet sich der Header-Bereich der Seite in einem {{HTMLElement("header")}} Block. Darunter definieren wir die Seitenleiste der Seite als eine Liste von Links innerhalb eines {{HTMLElement("aside")}} Blocks.

Schließlich kommt der Hauptteil. Wir beginnen hier mit einem leeren {{HTMLElement("main")}} Element. Dieses Feld wird später mit Skripten gefüllt.

### Styling der Seite mit CSS

Mit der definierten Struktur der Seite wenden wir uns dem Styling der Seite zu. Schauen wir uns die Stile für jeden Bestandteil der Seite individuell an.

#### Die Grundlagen

Wir stellen Stile für die {{HTMLElement("body")}} und {{HTMLElement("main")}} Elemente bereit, um den Hintergrund der Seite sowie das Raster zu definieren, in dem die verschiedenen Teile der Seite platziert werden.

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

Der {{HTMLElement("body")}} der Seite ist hier so konfiguriert, dass er eine der gebräuchlichen serifenlosen Schriftarten verwendet und `"aliceblue"` als Hintergrundfarbe festlegt. Dann wird die `"wrapper"` Klasse definiert; sie umschließt den gesamten Blog, einschließlich Header, Seitenleiste und Hauptinhalt (Artikel und Anzeigen).

Der Wrapper legt ein CSS-Grid mit zwei Spalten und zwei Reihen fest. Die erste Spalte (automatisch je nach Inhalt dimensioniert) wird für die Seitenleiste verwendet, und die zweite Spalte (die für den Hauptinhalt genutzt wird) ist so dimensioniert, dass sie mindestens die Breite des Inhalts der Spalte hat und höchstens den gesamten verbleibenden Raum einnimmt.

Die erste Reihe wird speziell für den Header der Seite verwendet. Die Reihen sind genauso dimensioniert wie die Spalten: Die erste wird automatisch dimensioniert, und die zweite nutzt den verbleibenden Raum, aber mindestens genug, um Platz für alle darin befindlichen Elemente zu bieten.

Die Breite des Wrappers ist auf 700px festgelegt, damit er in den verfügbaren Raum passt, wenn er inline auf MDN dargestellt wird.

#### Der Header

Der Header ist ziemlich einfach, da er für dieses Beispiel nur etwas Text enthält. Sein Stil sieht folgendermaßen aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} ist auf 1 gesetzt, da wir möchten, dass der Header in der obersten Zeile des Rasters der Seite platziert wird. Interessanter ist hier unsere Verwendung von {{cssxref("grid-column")}}; hier spezifizieren wir, dass wir möchten, dass die Spalte in der ersten Spalte beginnt und in der ersten Spalte jenseits der letzten Rasterlinie endet — mit anderen Worten, der Header erstreckt sich über alle Spalten innerhalb des Rasters. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Website anzuzeigen. Keiner von ihnen funktioniert in unserem Beispiel hier, aber sie existieren, um bei der Darstellung einer Blog-ähnlichen Erfahrung zu helfen. Die Seitenleiste wird durch ein {{HTMLElement("aside")}} Element dargestellt und wie folgt gestylt:

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

Das Wichtigste hier ist, dass {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint sie rechts (obwohl einige andere Elemente einige Anpassungen ihrer Ränder benötigen, um den Abstand genau richtig zu gestalten). {{cssxref("grid-row")}} ist auf 2 gesetzt, um es neben dem Hauptteil der Seite zu platzieren.

#### Der Hauptinhalt

Was den Hauptteil der Seite betrifft: Der Hauptinhalt der Seite wird in einem {{HTMLElement("main")}} Element gehalten. Der folgende Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Position im Raster festgelegt ist, um den Hauptinhalt in Spalte 2, Zeile 2 zu platzieren.

#### Artikel

Jeder Artikel ist in ein {{HTMLElement("article")}}-Element eingefasst, das wie folgt gestylt ist:

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

Dies erstellt Artikelboxen mit weißem Hintergrund, die über dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen 8px Rande nach unten, um den Abstand zu vergrößern.

#### Anzeigen

Schließlich haben die Anzeigen das folgende anfängliche Styling. Einzelne Anzeigen können den Stil etwas anpassen, wie wir später sehen werden.

```css
.ad {
  height: 96px;
  padding: 6px;
  border-color: #555555;
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

Hier ist nichts Magisches dabei. Es ist ziemlich grundlegendes CSS.

### Verbindung mit JavaScript

Das bringt uns zum JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

```js
const contentBox = document.querySelector("main");

let nextArticleID = 1;
let visibleAds = new Set();
let previouslyVisibleAds = null;
```

Diese werden wie folgt verwendet:

- `contentBox`
  - : Ein Verweis auf das {{HTMLElement("main")}} Element's [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt im DOM. Hier werden wir die Artikel und Anzeigen einfügen.
- `nextArticleID`
  - : Jedem Artikel wird eine eindeutige ID-Nummer zugewiesen; diese Variable verfolgt die nächste zu verwendende ID, beginnend bei 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, das wir verwenden werden, um die derzeit auf dem Bildschirm sichtbaren Anzeigen zu verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer in einen anderen Tab wechselt).

#### Einrichtung

Um die Dinge einzurichten, führen wir den folgenden Code aus, wenn die Seite geladen wird:

```js
document.addEventListener("visibilitychange", handleVisibilityChange, false);

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0.0, 0.75],
};
const adObserver = new IntersectionObserver(
  intersectionCallback,
  observerOptions,
);
const refreshIntervalID = setInterval(handleRefreshInterval, 1000);

buildContents();
```

Zuerst richten wir einen Event-Listener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis ein. Dieses Ereignis wird ausgelöst, wenn das Dokument ausgeblendet oder sichtbar wird, beispielsweise wenn der Benutzer in seinem Browser die Tabs wechselt. Die Intersection Observer API berücksichtigt dies nicht bei der Erkennung der Schnittmenge, da die Überschneidung nicht von der Sichtbarkeit der Seite beeinflusst wird. Daher müssen wir unsere Timer anhalten, während die Seite in den Hintergrund geschoben wird; daher dieser Event-Listener.

Als nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der die Zielelemente (in unserem Fall Anzeigen) auf Schnittstellenänderungen relativ zum Dokument überwachen wird. Die Optionen sind so konfiguriert, dass sie nach Überschneidungen mit dem Ansichtsfenster des Dokuments suchen (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder, um das Rechteck der Schnittstellenwurzel zu erweitern oder zu verkleinern; wir möchten genau die Grenzen des Ansichtsfensters des Dokuments für Schnittstellenzwecke abgleichen. Und die `threshold` ist auf ein Array gesetzt, das die Werte 0.0 und 0.75 enthält; dies wird dazu führen, dass unser Callback ausgeführt wird, immer wenn ein Ziel-Element vollständig verdeckt wird oder anfängt, nicht mehr verdeckt zu werden (Schnittstellenverhältnis 0.0) oder 75% sichtbare Schnittstelle in beide Richtungen erreicht (Schnittstellenverhältnis 0.75).

Der Beobachter, `adObserver`, wird erstellt, indem der Konstruktor von `IntersectionObserver` aufgerufen wird, wobei die Callback-Funktion `intersectionCallback` und unsere Optionen übergeben werden.

Wir rufen dann eine Funktion `buildContents()` auf, die wir später definieren werden, um die tatsächlich zu präsentierenden Artikel und Anzeigen zu generieren und in das Dokument einzufügen.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um alle notwendigen Aktualisierungen durchzuführen. Wir benötigen eine Aktualisierung jede Sekunde, da wir Timer in allen sichtbaren Anzeigen für die Zwecke dieses Beispiels anzeigen. Möglicherweise benötigen Sie überhaupt kein Intervall, oder Sie könnten es anders oder mit einem anderen Zeitintervall machen.

#### Umgang mit Sichtbarkeitsänderungen im Dokument

Werfen wir einen Blick auf den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis. Unser Skript empfängt dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer die Tabs wechselt. Da der Intersection Observer nur an der Überschneidung zwischen den Ziel-Elementen und der Schnittstellenwurzel interessiert ist und nicht an der Sichtbarkeit des Tabs (was ein völlig anderes Thema ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Tab-Wechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar zu unsichtbar gewechselt ist oder umgekehrt, wird die [`document.hidden`](/de/docs/Web/API/Document/hidden) Eigenschaft überprüft, um zu sehen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, dass der Aufruf mehrfach erfolgt, fahren wir nur dann fort, wenn wir die Timer noch nicht pausiert haben und die Sichtbarkeitszustände der vorhandenen Anzeigen gespeichert haben.

Um die Timer zu pausieren, müssen wir nur die Anzeigen aus der Menge der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv markieren. Dazu speichern wir zuerst die Menge der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer zurück ins Dokument wechselt. Dann leeren wir das Set `visibleAds`, damit die Anzeigen nicht als sichtbar betrachtet werden. Danach rufen wir für jede der unterbrochenen Anzeigen unsere Funktion `updateAdTimer()` auf, die den Gesamt-Zeitmesser der Sichtbarkeit der Anzeige aktualisiert, und dann setzen wir deren `dataset.lastViewStarted` Eigenschaft auf 0, was anzeigt, dass der Tab-Timer nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Prozess um: zuerst durchlaufen wir `previouslyVisibleAds` und setzen für jede Anzeige deren `dataset.lastViewStarted` auf die aktuelle Zeit des Dokuments (in Millisekunden seit der Erstellung des Dokuments) mit Hilfe der Methode [`performance.now()`](/de/docs/Web/API/Performance/now). Dann setzen wir `visibleAds` wieder auf `previouslyVisibleAds` und setzen das letztere auf `null`. Jetzt sind alle Anzeigen neu gestartet und so konfiguriert, dass sie wissen, dass sie zum aktuellen Zeitpunkt sichtbar wurden, sodass sie die Dauer der Zeit, in der die Seite weggeblättert wurde, nicht beim nächsten Update addieren.

#### Umgang mit Schnittänderungsereignissen

Einmal pro Durchlauf durch die Ereignisschleife des Browsers prüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Zielelemente einen der Schnittverhältnisschwellenwerte des Beobachters überschritten hat. Für jeden Beobachter wird eine Liste der Ziele erstellt, die dies getan haben, und dem Callback des Beobachters als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten übergeben. Unser Callback, `intersectionCallback()`, sieht folgendermaßen aus:

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

Wie bereits erwähnt, erhält der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Callback als Eingabe ein Array aller Ziel-Elemente des Beobachters, die entweder mehr oder weniger sichtbar geworden sind als eines der Schnittverhältnisse des Beobachters. Wir iterieren über jeden dieser Einträge — die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Ziel-Element mit der Wurzel übereinstimmt, wissen wir, dass es gerade von einem verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es mindestens 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und starten den Timer, indem wir das `dataset.lastViewStarted` Attribut der Anzeige auf die Übergangszeit im [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen, dann fügen wir die Anzeige dem `visibleAds` Set hinzu, damit wir wissen, dass sie mit fortschreitender Zeit verarbeitet werden muss.

Wenn die Anzeige nicht mehr übereinstimmt mit dem Zustand, entfernen wir die Anzeige aus dem Set der sichtbaren Anzeigen. Dann haben wir ein spezielles Verhalten: Wir prüfen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) 0.0 ist; wenn dies der Fall ist, bedeutet dies, dass das Element vollständig verdeckt ist. Wenn dies der Fall ist und die Anzeige insgesamt mindestens eine Minute sichtbar war, rufen wir eine Funktion auf, die wir erstellen, `replaceAd()`, um die vorhandene Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Benutzer im Laufe der Zeit eine Vielzahl von Anzeigen, aber die Anzeigen werden nur dann ersetzt, wenn sie nicht mehr sichtbar sind, was zu einem reibungslosen Erlebnis führt.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird etwa einmal pro Sekunde dank des Aufrufs von [`setInterval()`](/de/docs/Web/API/Window/setInterval) in der Funktion `startup()` [oben beschrieben](#einrichtung), aufgerufen. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und eine Neuzeichnung zu planen, um die Timer zu aktualisieren, die wir in jede Anzeige zeichnen werden.

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

Das Array `redrawList` wird verwendet, um eine Liste aller Anzeigen zu führen, die während dieses Aktualisierungszyklus neu gezeichnet werden müssen, da es möglicherweise nicht genau der verstrichenen Zeit entspricht, aufgrund von Systemaktivität oder weil Sie das Intervall auf etwas anderes als alle 1000 Millisekunden eingestellt haben.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtanzahl der Millisekunden, die die Anzeige bisher sichtbar war, seit dem letzten Check) und rufen `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn sich etwas geändert hat, schieben wir die Anzeige auf die `redrawList`, damit wir wissen, dass sie während des nächsten Animationsframes aktualisiert werden muss.

Schließlich, wenn es mindestens ein Element zum Neuzeichnen gibt, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsframes neu zeichnet.

#### Aktualisieren des Sichtbarkeits-Timers einer Anzeige

Zuvor haben wir gesehen, dass wir beim Aktualisieren des "Gesamt-Sichtbarkeits-Zähler" einer Anzeige eine Funktion namens `updateAdTimer()` aufriefen, um dies zu tun. Diese Funktion nimmt als Eingabe das [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement) Objekt einer Anzeige. Hier ist es:

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

Um die sichtbare Zeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Datenattribute (siehe [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)) auf jeder Anzeige:

- `lastViewStarted`
  - : Die Zeit in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, zu der die Sichtbarkeitszählung der Anzeige zuletzt aktualisiert wurde oder die Anzeige zuletzt sichtbar wurde. 0, wenn die Anzeige beim letzten Check nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtanzahl an Millisekunden, die die Anzeige sichtbar war.

Diese werden über das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Attribut jeder Anzeige abgerufen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bereitstellt, die jede benutzerdefinierte Attributsnamen auf ihre Werte abbildet. Die Werte sind Zeichenfolgen, aber wir können diese problemlos in Zahlen umwandeln — tatsächlich macht JavaScript es normalerweise automatisch, obwohl wir einen Fall haben werden, in dem wir es selbst tun müssen.

Wir beginnen, indem wir die Zeit, zu der die vorherige Sichtbarkeitsstatusprüfung der Anzeige (`adBox.dataset.lastViewStarted`) in einer lokalen Variablen namens `lastStarted` abgerufen wurde. Wir erhalten auch den Wert der aktuellen Zeit-seit-Erstellung mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` ungleich null ist — was bedeutet, dass der Timer derzeit läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu berechnen, die der Timer seit dem letzten Mal sichtbar ist. Dies wird zum aktuellen Wert des `totalViewTime` der Anzeige hinzugefügt, um die Gesamtzeit auf den neuesten Stand zu bringen. Beachten Sie hier die Verwendung von {{jsxref("parseFloat", "parseFloat()")}}; da es sich um Zeichenfolgen handelt, versucht JavaScript, eine Zeichenfolgenverkettung statt einer Addition durchzuführen, ohne es.

Schließlich wird die zuletzt gesehene Zeit für die Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht unabhängig davon, ob der Timer beim Aufruf dieser Funktion lief oder nicht; das führt dazu, dass der Timer der Anzeige immer läuft, wenn diese Funktion zurückkehrt. Das macht Sinn, da diese Funktion nur dann aufgerufen wird, wenn die Anzeige sichtbar ist, selbst wenn sie gerade erst sichtbar geworden ist.

#### Zeichnen des Timers einer Anzeige

In jeder Anzeige zeichnen wir zu Demonstrationszwecken den aktuellen Wert seiner `totalViewTime`, umgerechnet in Minuten und Sekunden. Dies wird durch übergeben des Anzeige-Elements an die Funktion `drawAdTimer()` gehandhabt:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige anhand seiner ID `"timer"` und berechnet die Anzahl der verstrichenen Sekunden, indem die `totalViewTime` der Anzeige durch 1000 geteilt wird. Dann berechnet er die verstrichenen Minuten und Sekunden, bevor er die `innerText` des Timers auf eine Zeichenfolge setzt, die diese Zeit in der Form m:ss darstellt. Die Methode {{jsxref("String.padStart()")}} wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Ziffern aufgestockt wird, wenn sie weniger als 10 beträgt.

#### Erstellen von Seiteninhalten

Die `buildContents()` Funktion wird vom [Startup-Code](#einrichtung) aufgerufen, um die auszuwählenden Artikel und Anzeigen in das Dokument einzufügen:

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

Die Variable `loremIpsum` enthält den Text, den wir für den Körper aller unserer Artikel verwenden werden. Offensichtlich würde man in der realen Welt einen Code haben, um Artikel aus einer Datenbank oder dergleichen zu ziehen, aber das erfüllt seinen Zweck für unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie könnten das natürlich leicht ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeraden Artikel wird eine Anzeige "geladen" und in die Seite eingefügt. Artikel werden in das Inhaltsfeld (das heißt das {{HTMLElement("main")}} Element, das den gesamten Inhalt der Seite enthält) nach ihrer Erstellung mit einer Methode namens `createArticle()` eingefügt, die wir als Nächstes ansehen werden.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die gleichzeitig die Anzeige erstellt und sie in die Seite einfügt. Wir werden später sehen, dass diese gleiche Funktion auch eine bestehende Anzeige ersetzen kann, aber für den Moment fügen wir Anzeigen in den vorhandenen Inhalt ein.

#### Einen Artikel erstellen

Um das {{HTMLElement("article")}} Element für einen Artikel (sowie all seinen Inhalt) zu erstellen, verwenden wir `createArticle()`, das als Eingabe eine Zeichenfolge nimmt, welche der vollständige Text des Artikels, der der Seite hinzugefügt werden soll, ist.

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

Zuerst wird das `<article>` Element erstellt und seine ID wird auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und für jeden Artikel steigt). Dann erstellen und fügen wir ein {{HTMLElement("Heading_Elements", "h2")}} Element für den Artikel-Titel hinzu und dann fügen wir das HTML von `contents` hinzu. Schließlich wird `nextArticleID` inkrementiert (sodass das nächste Element eine neue eindeutige ID erhält) und das neue `<article>` Element wird an den Aufrufer zurückgegeben.

#### Eine Anzeige erstellen

Die `loadRandomAd()` Funktion simuliert das Laden einer Anzeige und das Hinzufügen zu der Seite. Wenn Sie keinen Wert für `replaceBox` übergeben, wird ein neues Element erstellt, um die Anzeige zu enthalten; die Anzeige wird dann der Seite angehangen. Wenn Sie eine `replaceBox` angeben, wird dieser Block als bestehendes Anzeigenelement behandelt; statt ein neues zu erstellen, wird das bestehende Element geändert, um den Stil, den Inhalt und andere Daten der neuen Anzeige zu enthalten. Dies vermeidet das Risiko, dass zeitaufwändige Layout-Arbeiten durchgeführt werden, wenn Sie die Anzeige aktualisieren, was passieren könnte, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

```js
function loadRandomAd(replaceBox) {
  const ads = [
    {
      bgcolor: "#cceecc",
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
      bgcolor: "#ffeeee",
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

Zuerst ist das Array `ads`. Dieses Array enthält die Daten, die benötigt werden, um jede Anzeige zu erstellen. Wir haben hier vier, aus denen wir zufällig auswählen. In einem realen Szenario würden die Anzeigen natürlich aus einer Datenbank oder, wahrscheinlicher, einem Werbedienst kommen, von dem Sie Anzeigen über eine API abrufen. Unsere Bedürfnisse sind jedoch einfach: Jede Anzeige wird durch ein Objekt mit drei Eigenschaften repräsentiert: eine Hintergrundfarbe (`bgcolor`), einen Titel (`title`) und einen Textstring (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Dies wird auf das Element gesetzt, das die Anzeige darstellt. Für neue Anzeigen, die der Seite hinzugefügt werden, wird dies mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Beim Ersetzen einer bestehenden Anzeige wird dies auf das angegebene Element (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}} Element enthalten, das den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}} enthalten, das den Text der Anzeige darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}} Element enthalten, das die Zeit enthält, die die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird ausgewählt, indem `Math.floor(Math.random() * ads.length)` berechnet wird; das Ergebnis ist ein Wert zwischen 0 und eins weniger als die Anzahl der Anzeigen. Die entsprechende Anzeige ist jetzt als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben ist, verwenden wir dies als das Anzeigenelement. Um dies zu tun, beginnen wir, indem wir die Beobachtung des Elements durch Aufrufen von [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) beenden. Dann werden die lokalen Variablen für jedes der Elemente, die eine Anzeige zusammenstellen: die Anzeigebox selbst, der Titel, der Textkörper und die Timerbox, auf die entsprechenden Elemente in der bestehenden Anzeige gesetzt.

Wenn kein Wert für `replaceBox` angegeben ist, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}} Element der Anzeige wird erstellt und seine Eigenschaften durch Festlegen seines Klassennamens auf `"ad"` festgelegt. Danach werden das Anzeigentitel-Element, der Textkörper und der Sichtbarkeitstimer erstellt; diese sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}}, und ein {{HTMLElement("div")}} Element, jeweils. Diese Elemente werden an das `adBox` Element angehängt.

Danach konvergieren die Code-Pfade wieder. Die Hintergrundfarbe der Anzeige wird auf den in der neuen Anzeigeneintrag angegebenen Wert festgelegt, und die Elemente-Klassen und Inhalte werden entsprechend festgelegt.

Als nächstes ist es an der Zeit, die benutzerdefinierten Datenattribute einzurichten, um die Sichtbarkeitsdaten der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, die den Timer anzeigt, den wir in der Anzeige präsentieren werden, um zu zeigen, wie lange es sichtbar war, und geben ihm die Klasse `"timer"`. Der Initialtext wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen, und er wird an die Anzeige angehängt.

Wenn wir keine bestehende Anzeige ersetzen, müssen wir das Element mit [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) an den Inhaltsbereich der Seite anhängen. Wenn wir eine Anzeige ersetzen, ist sie bereits da, mit ihrem Inhalt durch die neue Anzeige ersetzt. Dann rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) Methode auf unserem Intersection Observer, `adObserver`, auf, um zu beginnen, die Anzeige auf Änderungen ihrer Schnittstelle mit dem Ansichtsfenster zu beobachten. Von nun an wird jedes Mal, wenn die Anzeige zu 100% verdeckt ist oder auch nur ein einziger Pixel sichtbar wird, oder die Anzeige durch 75% sichtbar in die eine oder andere Richtung geht, der [Callback des Beobachters](#umgang_mit_schnittänderungsereignissen) ausgeführt.

#### Ersetzen einer bestehenden Anzeige

Unser [Callback des Beobachters](#umgang_mit_schnittänderungsereignissen) behält Anzeigen im Auge, die zu 100% verdeckt werden und eine Gesamt-Sichtbarkeitszeit von mindestens einer Minute haben. Wenn das passiert, wird die `replaceAd()` Funktion mit diesem Anzeigenelement als Eingabe aufgerufen, damit die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt, indem sie `updateAdTimer()` auf der vorhandenen Anzeige aufruft, um sicherzustellen, dass sein Timer auf dem neuesten Stand ist. Das stellt sicher, dass wir beim Lesen seiner `totalViewTime` den genauen Endwert dafür sehen, wie lange die Anzeige für den Benutzer sichtbar war. Dann berichten wir diese Daten; in diesem Fall, indem wir sie in die Konsole protokollieren, aber in der realen Welt würden Sie die Informationen an die API eines Anzeigendienstes übermitteln oder in eine Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#eine_anzeige_erstellen) aufrufen, wobei wir das zu ersetzende Anzeigenelement als Eingabeparameter spezifizieren. Wie wir zuvor gesehen haben, wird `loadRandomAd()` eine bestehende Anzeige mit Inhalten und Daten ersetzen, die einer neuen Anzeige entsprechen, wenn Sie ein bestehendes Anzeigenelement als Eingabeparameter angeben.

Das neue Anzeigenelement-Objekt wird an den Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie, zu experimentieren, indem Sie nach oben und unten scrollen und bemerken, wie sich Änderungen in der Sichtbarkeit auf die Timer in jeder Anzeige auswirken. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss zuerst aus dem Blickfeld gescrollt und dann wieder zurückgescrollt werden), und wie die Timer pausiert werden, während das Dokument in den Hintergrund getabbed wird. Das Abdecken des Browsers mit einem anderen Fenster pausiert die Timer jedoch nicht.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
