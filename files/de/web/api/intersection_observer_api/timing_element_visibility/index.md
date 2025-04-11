---
title: Element-Sichtbarkeit mit der Intersection Observer API zeitlich steuern
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir einen fiktiven Blog, der mehrere Anzeigen zwischen den Inhaltsbereichen der Seite platziert. Dann verwenden wir die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Sobald eine Anzeige mehr als eine Minute sichtbar war, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der realen Nutzung entsprechen (insbesondere haben alle Artikel denselben Text und werden nicht aus einer Datenbank geladen, und es gibt nur einige wenige einfache Textanzeigen, die aus einem Array ausgewählt werden), sollte dies ausreichen, um ein Verständnis der API zu erlangen und schnell zu lernen, wie man die Intersection Observer API auf Ihrer eigenen Seite anwendet.

Es gibt einen guten Grund, warum in diesem Beispiel die Sichtbarkeit von Anzeigen verfolgt wird. Es stellt sich heraus, dass eine der häufigsten Verwendungen von Flash oder anderen Skripten in der Werbung im Web darin besteht, aufzuzeichnen, wie lange jede Anzeige sichtbar ist, um die Abrechnung und Zahlung von Einnahmen zu ermöglichen. Ohne die Intersection Observer API wird dies in der Regel mit Intervallen und Zeitüberschreitungen für jede einzelne Anzeige durchgeführt oder mittels anderer Techniken, die die Seite verlangsamen können. Mit dieser API wird alles vom Browser optimiert, um den Einfluss auf die Leistung erheblich zu reduzieren.

Lassen Sie uns beginnen!

## Aufbau der Seite

### Seitenstruktur: Das HTML

Die Struktur der Seite ist nicht zu kompliziert. Wir verwenden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) zum Stylen und Layouten der Seite, daher können wir es hier ziemlich einfach halten:

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

Dies ist das Grundgerüst der gesamten Seite. Oben befindet sich der Header-Bereich der Seite, eingeschlossen in einem {{HTMLElement("header")}} Block. Darunter definieren wir die Seitenleiste als eine Liste von Links innerhalb eines {{HTMLElement("aside")}} Blocks.

Schließlich kommt der Hauptteil. Wir beginnen hier mit einem leeren {{HTMLElement("main")}} Element. Diese Box wird später mittels Skript befüllt.

### Styling der Seite mit CSS

Mit der definierten Struktur der Seite wenden wir uns nun dem Styling zu. Schauen wir uns den Stil für jedes Komponente der Seite einzeln an.

#### Die Grundlagen

Wir legen Stile für die {{HTMLElement("body")}} und {{HTMLElement("main")}} Elemente fest, um den Hintergrund der Seite sowie das Raster, in dem die verschiedenen Teile der Seite platziert werden, zu definieren.

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

Das {{HTMLElement("body")}} der Seite wird so konfiguriert, dass es eine der gebräuchlichen serifenlosen Schriftarten verwendet und `"aliceblue"` als Hintergrundfarbe setzt. Dann wird die `"wrapper"` Klasse definiert; sie umschließt den gesamten Blog, einschließlich des Headers, der Seitenleiste und des Hauptinhalts (Artikel und Anzeigen).

Der Wrapper stellt ein CSS-Raster mit zwei Spalten und zwei Reihen her. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Seitenleiste verwendet und die zweite Spalte (die für den Hauptinhalt verwendet wird) wird so dimensioniert, dass sie mindestens so breit wie der Inhalt der Spalte ist und höchstens den verbleibenden verfügbaren Platz einnimmt.

Die erste Reihe wird speziell für den Seitenheader verwendet. Die Reihen werden auf die gleiche Weise wie die Spalten dimensioniert: die erste wird automatisch dimensioniert und die zweite nutzt den verbleibenden Platz, aber zumindest genug, um Platz für alle darin enthaltenen Elemente zu schaffen.

Die Breite des Wrappers ist auf 700px festgelegt, sodass er in den verfügbaren Raum passt, wenn er inline auf MDN dargestellt wird.

#### Der Header

Der Header ist ziemlich einfach, da in diesem Beispiel nur etwas Text enthalten ist. Sein Stil sieht folgendermaßen aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} ist auf 1 gesetzt, da wir möchten, dass der Header in der obersten Reihe des Seitengitters platziert wird. Interessanter ist die Nutzung von {{cssxref("grid-column")}} hier; hier geben wir an, dass wir möchten, dass die Spalte in der ersten Spalte startet und in der ersten Spalte nach der letzten Gitterlinie endet—mit anderen Worten, der Header erstreckt sich über alle Spalten innerhalb des Gitters. Perfekt für unsere Zwecke.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Website zu präsentieren. In unserem Beispiel funktionieren sie nicht, aber sie existieren, um bei der Darstellung eines blog-ähnlichen Erlebnisses zu helfen. Die Seitenleiste wird durch ein {{HTMLElement("aside")}} Element dargestellt und wie folgt gestylt:

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

Das Wichtigste hier zu beachten ist, dass die {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint sie auf der rechten Seite (obwohl einige andere Elemente einige Anpassungen an ihren Rändern benötigen, um den Abstand genau richtig zu setzen). Die {{cssxref("grid-row")}} ist auf 2 gesetzt, um sie neben den Hauptkörper der Seite zu platzieren.

#### Der Hauptinhalt

Was den Hauptteil der Seite betrifft: der Hauptinhalt der Seite wird in einem {{HTMLElement("main")}} Element gehalten. Der folgende Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptelement hier ist, dass die Gitterposition festgelegt ist, um den Hauptinhalt in Spalte 2, Reihe 2 zu platzieren.

#### Artikel

Jeder Artikel ist in einem {{HTMLElement("article")}} Element enthalten, das folgendermaßen gestylt ist:

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

Dies erstellt Artikelfenster mit einem weißen Hintergrund, die auf dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen 8px unteren Rand, um die Dinge auseinanderzuhalten.

#### Anzeigen

Schließlich haben die Anzeigen das folgende anfängliche Styling. Einzelne Anzeigen können den Stil teilweise anpassen, wie wir später sehen werden.

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

Es gibt hier nichts Magisches. Es ist ziemlich grundlegendes CSS.

### Verknüpfen mit JavaScript

Das bringt uns zum JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

```js
let contentBox;

let nextArticleID = 1;
const visibleAds = new Set();
let previouslyVisibleAds = null;

let adObserver;
let refreshIntervalID = 0;
```

Diese werden wie folgt verwendet:

- `contentBox`
  - : Eine Referenz auf das {{HTMLElement("main")}} Element im DOM. Hier werden wir die Artikel und Anzeigen einfügen.
- `nextArticleID`
  - : Jedem Artikel wird eine eindeutige ID-Nummer zugewiesen; diese Variable verfolgt die nächste zu verwendende ID, beginnend mit 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, das wir verwenden, um die derzeit auf dem Bildschirm sichtbaren Anzeigen zu verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer zu einer anderen Seite gewechselt hat).
- `adObserver`
  - : Wird unseren [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) halten, der die Schnittmenge zwischen den Anzeigen und den Grenzen des `<main>` Elements verfolgt.
- `refreshIntervalID`
  - : Wird verwendet, um die Intervall-ID zu speichern, die von [`setInterval()`](/de/docs/Web/API/Window/setInterval) zurückgegeben wird. Dieses Intervall wird verwendet, um unsere periodischen Aktualisierungen des Anzeigeninhalts auszulösen.

#### Einrichtung

Um alles einzurichten, führen wir die `startup()` Funktion unten aus, wenn die Seite geladen wird:

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

Zuerst wird eine Referenz auf das `contentBox` Element erhalten, sodass wir darin unsere Inhalte einfügen können. Dann richten wir einen Event Listener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument verborgen oder sichtbar wird, wie wenn der Benutzer in seinem Browser die Tabs wechselt. Die Intersection Observer API berücksichtigt dies nicht beim Erkennen von Schnittmengen, da Schnittmengen nicht von der Sichtbarkeit der Seite beeinflusst werden. Daher müssen wir unsere Timer anhalten, während die Seite ausgeblendet ist; daher dieser Event Listener.

Als nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der die Zielelemente (in unserem Fall Anzeigen) auf Änderungen der Schnittmenge mit dem Dokument überwachen wird. Die Optionen sind so konfiguriert, dass sie Schnittmengen mit der Ansicht des Dokuments überwachen (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder, um das Rechteck des Übersichtspunktes zu erweitern oder zu verkleinern; wir möchten die Grenzen der Dokumentenansicht für Schnittzwecke genau treffen. Und das `threshold` ist auf ein Array mit den Werten 0.0 und 0.75 gesetzt; dies lässt unseren Callback jedes Mal ausführen, wenn ein Zielobjekt vollständig verdeckt wird oder zum ersten Mal beginnt, sichtbar zu werden (Schnittverhältnis 0.0) oder 75% sichtbar in irgendeiner Richtung durchläuft (Schnittverhältnis 0.75).

Der Beobachter, `adObserver`, wird als Ergebnis des Aufrufs des Konstruktors von `IntersectionObserver` erstellt, wobei die Callback-Funktion, `intersectionCallback`, und unsere Optionen übergeben werden.

Wir rufen dann eine Funktion `buildContents()` auf, die wir später definieren werden, um in das Dokument die Artikel und Anzeigen zu generieren und einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um alle notwendigen Aktualisierungen durchzuführen. Wir benötigen eine einmal pro Sekunde Aktualisierung, da wir Timer in allen sichtbaren Anzeigen für die Zwecke dieses Beispiels anzeigen. Möglicherweise benötigen Sie gar kein Intervall, oder Sie könnten es anders oder mit einem anderen Zeitintervall tun.

#### Umgang mit Sichtbarkeitsänderungen im Dokument

Schauen wir uns den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis an. Unser Skript erhält dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer die Tabs wechselt. Da der Intersection Observer nur an der Schnittmenge zwischen den Zielobjekten und dem Schnittwurzel interessiert ist und nicht an der Sichtbarkeit des Tabs (was ein völlig anderes Problem ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Tab-Wechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

```js
function handleVisibilityChange() {
  if (document.hidden) {
    if (!previouslyVisibleAds) {
      previouslyVisibleAds = visibleAds;
      visibleAds = [];
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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar zu unsichtbar oder umgekehrt gewechselt hat, wird die [`document.hidden`](/de/docs/Web/API/Document/hidden) Eigenschaft überprüft, um zu sehen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, mehrmals aufgerufen zu werden, fahren wir nur fort, wenn die Timer noch nicht angehalten und die Sichtbarkeitszustände der bestehenden Anzeigen noch nicht gespeichert wurden.

Um die Timer anzuhalten, müssen wir die Anzeigen nur aus dem Set der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv markieren. Um dies zu tun, speichern wir zunächst das Set der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer wieder zum Dokument wechselt, und dann leeren wir das `visibleAds` Set, damit sie nicht als sichtbar behandelt werden. Dann, für jede der Anzeigen, die ausgesetzt werden, rufen wir unsere `updateAdTimer()` Funktion auf, die den Gesamt-Sichtbarkeitszähler der Anzeige aktualisiert, dann setzen wir das `dataset.lastViewStarted` Attribut ihrer Anzeigenelemente auf 0, was anzeigt, dass der Tab Timer nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, führen wir den umgekehrten Prozess durch: zunächst durchlaufen wir `previouslyVisibleAds` und setzen das `dataset.lastViewStarted` Attribut jedes Elements auf die aktuelle Zeit des Dokuments (in Millisekunden seit das Dokument erstellt wurde) mithilfe der [`performance.now()`](/de/docs/Web/API/Performance/now) Methode. Dann setzen wir `visibleAds` auf `previouslyVisibleAds` zurück und setzen Letzteres auf `null`. Jetzt sind alle Anzeigen wieder gestartet und so konfiguriert, dass sie wissen, dass sie zu diesem Zeitpunkt sichtbar wurden, damit sie nicht die Dauer der ausgeblendeten Seite zu ihrem nächsten Update in Betracht ziehen.

#### Umgang mit Schnittmengenänderungen

Einmal pro Durchlauf der Ereignisschleife des Browsers überprüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Zielobjekte die Schnittverhältnisschwellen des Beobachters überschritten hat. Für jeden Beobachter wird eine Liste von Zielen, die dies getan haben, zusammengestellt und als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten an den Callback des Beobachters gesendet. Unser Callback, `intersectionCallback()`, sieht folgendermaßen aus:

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

Wie bereits erwähnt, erhält der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Callback als Eingabearray alle Zielobjekte, die sich entweder mehr oder weniger sichtbar als einer der Schnittverhältnisschwellen der Beobachtung bewegt haben. Wir iterieren über die Einträge, die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Zielobjekt mit dem Wurzelobjekt überschneidend ist, wissen wir, dass es gerade von einem verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es mindestens 75% sichtbar geworden ist, dann betrachten wir die Anzeige als sichtbar, und wir starten den Timer, indem wir das `dataset.lastViewStarted` Attribut der Anzeige auf die Übergangszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen und die Anzeige dem Set `visibleAds` hinzufügen, sodass wir wissen, dass sie im Laufe der Zeit verarbeitet werden muss.

Wenn die Anzeige in den Nicht-Überschneidungs-Zustand übergegangen ist, entfernen wir die Anzeige aus der Menge der sichtbaren Anzeigen. Dann haben wir ein spezielles Verhalten: Wir prüfen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) gleich 0.0 ist; wenn das der Fall ist, bedeutet das, dass das Element vollständig verdeckt ist. Wenn das der Fall ist, und die Anzeige war insgesamt mindestens eine Minute lang sichtbar, rufen wir eine Funktion auf, die wir `replaceAd()` nennen werden, um die vorhandene Anzeige durch eine neue zu ersetzen. So sieht der Benutzer im Laufe der Zeit eine Vielzahl von Anzeigen, aber die Anzeigen werden nur dann ersetzt, wenn sie nicht gesehen werden können, was ein reibungsloses Benutzererlebnis ergibt.

#### Umgang mit periodischen Aktionen

Unser Intervallhandler, `handleRefreshInterval()`, wird ungefähr einmal pro Sekunde durch den Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval) in der `startup()` Funktion [wie oben beschrieben](#einrichtung) aufgerufen. Seine Hauptaufgabe ist es, die Timer jede Sekunde zu aktualisieren und eine Neuzeichnung einzuplanen, um die Timer zu aktualisieren, die wir in jeder Anzeige einzeichnen werden.

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

Das Array `redrawList` wird verwendet, um eine Liste aller Anzeigen zu führen, die während dieses Auffrischungszyklus neu gezeichnet werden müssen, denn diese kann aufgrund der Systemaktivität oder weil Sie das Intervall auf etwas anderes als 1000 Millisekunden gesetzt haben, nicht genau mit der abgelaufenen Zeit übereinstimmen.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtzahl der Millisekunden, die die Anzeige derzeit sichtbar war, zum Zeitpunkt der letzten Aktualisierung) und rufen `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn sie sich geändert hat, fügen wir die Anzeige zur `redrawList` hinzu, sodass sie während des nächsten Animationsrahmens aktualisiert wird.

Schließlich verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um bei mindestens einem Element, das neu gezeichnet werden muss, eine Funktion zu planen, die während des nächsten Animationsrahmens jedes Element in der `redrawList` neu zeichnet.

#### Aktualisieren des Sichtbarkeits-Timers einer Anzeige

Wie bereits ([Umgang mit Dokumentensichtbarkeitsänderungen](#umgang_mit_sichtbarkeitsänderungen_im_dokument) und [Umgang mit periodischen Aktionen](#umgang_mit_periodischen_aktionen)) erwähnt, rufen wir eine Funktion namens `updateAdTimer()` auf, wenn wir den "Gesamt-Sichtbarkeitszeit"-Zähler einer Anzeige aktualisieren müssen. Diese Funktion nimmt das [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement) Objekt einer Anzeige als Eingabe. Hier ist sie:

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

Zur Verfolgung der sichtbaren Zeit eines Elements verwenden wir an allen Anzeigen zwei benutzerdefinierte Data-Attribute (siehe [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)):

- `lastViewStarted`
  - : Die Zeit in Millisekunden im Verhältnis zur Zeit der Dokumenterstellung, zu der der Sichtbarkeitszähler der Anzeige das letzte Mal aktualisiert wurde oder die Anzeige das letzte Mal sichtbar wurde. 0, wenn die Anzeige zum letzten Prüfzeitpunkt nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtzahl der Millisekunden, die die Anzeige sichtbar war.

Diese werden über das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Attribut jedes Anzeigenobjekts aufgerufen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bereitstellt, die jeden benutzerdefinierten Attributnamen seinem Wert zuordnet. Die Werte sind Strings, aber wir können sie leicht in Zahlen konvertieren—tatsächlich macht JavaScript dies in der Regel automatisch, obwohl wir in einem Fall dies selbst tun müssen.

Wir beginnen damit, die letzte vorherige Statusprüfzeit der Anzeige (`adBox.dataset.lastViewStarted`) in eine lokale Variable namens `lastStarted` zu holen. Wir erhalten auch den aktuellen Wert der Zeit-seit-Erstellung mit der [`performance.now()`](/de/docs/Web/API/Performance/now) Methode in `currentTime`.

Wenn `lastStarted` ungleich null ist—was bedeutet, dass der Timer derzeit läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu ermitteln, die die Timer seit dem letzten sichtbaren Zeitpunkt sichtbar war. Diese wird zum aktuellen Wert von `totalViewTime` der Anzeige hinzugefügt, um den Gesamtwert zu aktualisieren. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; weil diese Werte Strings sind, würde JavaScript ohne dies eine String-Verkettung anstelle einer Addition versuchen.

Schließlich wird die zuletzt gesehene Zeit für die Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht, egal ob der Timer aktiv war, als diese Funktion aufgerufen wurde oder nicht; dies führt dazu, dass der Timer der Anzeige immer läuft, wenn diese Funktion endet. Das ergibt Sinn, weil diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, selbst wenn sie gerade erst sichtbar geworden ist.

#### Zeichnen des Timers einer Anzeige

Innerhalb jeder Anzeige zeichnen wir zur Demonstration den aktuellen Wert ihrer `totalViewTime`, umgewandelt in Minuten und Sekunden. Das wird durch die Übergabe des Anzeigeelements an die `drawAdTimer()` Funktion gehandhabt:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige mit ihrer ID, `"timer"`, und berechnet die Anzahl der verstrichenen Sekunden, indem die `totalViewTime` der Anzeige durch 1000 geteilt wird. Anschließend werden die Anzahl der verstrichenen Minuten und Sekunden berechnet, bevor die [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des Timers auf einen String gesetzt wird, der diese Zeit in der Form m:ss darstellt. Die {{jsxref("String.padStart()")}} Methode wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Stellen gepolstert wird, wenn sie weniger als 10 beträgt.

#### Erstellen des Seiteninhalts

Die `buildContents()` Funktion wird vom [Startup Code](#einrichtung) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, die präsentiert werden sollen:

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

Die Variable `loremIpsum` enthält den Text, den wir für den Hauptteil aller unserer Artikel verwenden. Natürlich hätten Sie in der realen Welt einige Code, um Artikel aus einer Datenbank oder Ähnlichem zu holen, aber dies dient unseren Zwecken. Jeder Artikel verwendet denselben Text; Sie könnten dies natürlich leicht ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeradzahligen Artikel wird eine Anzeige "geladen" und auf der Seite eingefügt. Artikel werden in das `contentBox` eingefügt (das heißt, das {{HTMLElement("main")}} Element, das den gesamten Seitenelementinhalt enthält), nachdem sie mit einer Methode namens `createArticle()` erstellt wurden, die wir uns als nächstes ansehen werden.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erstellt als auch in die Seite einfügt. Wir werden später sehen, dass diese gleiche Funktion auch eine bestehende Anzeige ersetzen kann, aber jetzt hängen wir nur Anzeigen an die bestehenden Inhalte an.

#### Erstellung eines Artikels

Um das {{HTMLElement("article")}} Element für einen Artikel zu erstellen (sowie alle seine Inhalte), verwenden wir die `createArticle()` Funktion, die als Eingabe einen String erhält, der den vollständigen Text des Artikels enthält, der zur Seite hinzugefügt werden soll.

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

Zuerst wird das `<article>` Element erstellt und seine ID auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und für jeden Artikel steigt). Dann wird ein {{HTMLElement("Heading_Elements", "h2")}} Element für den Artikeltitel erstellt und angehängt, und danach wird das HTML von `contents` hinzugefügt. Schließlich wird `nextArticleID` erhöht (damit das nächste Element eine neue eindeutige ID erhält) und wir geben das neue `<article>` Element an den Aufrufer zurück.

#### Erstellung einer Anzeige

Die `loadRandomAd()` Funktion simuliert das Laden einer Anzeige und das Hinzufügen zur Seite. Wenn Sie keinen Wert für `replaceBox` angeben, wird ein neues Element erstellt, um die Anzeige zu enthalten; die Anzeige wird dann zur Seite hinzugefügt. Wenn Sie eine `replaceBox` angeben, wird dieser Kasten als bestehendes Anzeigenelement behandelt; anstelle einer Neuanlage wird das bestehende Element geändert, um den Stil, Inhalt und andere Daten der neuen Anzeige zu enthalten. Dies vermeidet das Risiko, dass bei einer Aktualisierung der Anzeige umfangreiche Layoutarbeiten durchgeführt werden, welche bei einem erstmaligen Löschen des alten Elements und anschließendem Einfügen eines neuen Elements auftreten könnten.

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

Das erste ist das Array `ads`. Dieses Array enthält die Daten, die benötigt werden, um jede Anzeige zu erstellen. Wir haben vier Anzeigen zur Auswahl per Zufall. In einem realen Szenario würden die Anzeigen natürlich aus einer Datenbank oder, noch wahrscheinlicher, einem Werbedienst kommen, von dem Sie Anzeigen über eine API abrufen. Unsere Anforderungen sind jedoch einfach: Jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: einer Hintergrundfarbe (`bgcolor`), einem Titel (`title`) und einem Body-Text-String (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Dies wird auf das Element gesetzt, das die Anzeige darstellt. Bei neuen Anzeigen, die zur Seite hinzugefügt werden, wird dieses mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Bei einem Austausch einer bestehenden Anzeige wird dies auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}} Element halten, das den Titel der Anzeige repräsentiert.
- `body`
  - : Wird das {{HTMLElement("p")}} halten, das den Body-Text der Anzeige repräsentiert.
- `timerElem`
  - : Wird das {{HTMLElement("div")}} Element halten, das die Zeit enthält, wie lange die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird ausgewählt, indem `Math.floor(Math.random() * ads.length)` berechnet wird; das Ergebnis ist ein Wert zwischen 0 und einer weniger als die Anzahl der Anzeigen. Die entsprechende Anzeige wird nun `adBox` genannt.

Wenn ein Wert für `replaceBox` angegeben ist, verwenden wir dieses als Anzeigenelement. Dazu beenden wir zuerst die Beobachtung des Elements, indem wir [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) aufrufen. Dann werden die lokalen Variablen für jedes der Elemente der Anzeige: die Anzeigebox selbst, der Titel, der Body und das Timerfeld, auf die entsprechenden Elemente in der bestehenden Anzeige gesetzt.

Wenn kein Wert für `replaceBox` angegeben ist, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}} Element der Anzeige wird erstellt und seine Eigenschaften werden durch das Setzen seines Klassennamens auf `"ad"` bestimmt. Als Nächstes werden das Anzeige-Titelelement erstellt, ebenso wie der Body und der Sichtbarkeitstimer; dies sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}} und ein {{HTMLElement("div")}} Element. Diese Elemente werden an das `adBox` Element angefügt.

Danach schließen sich die Codepfade wieder an. Die Hintergrundfarbe der Anzeige wird auf den in den neuen Anzeigendaten angegebenen Wert gesetzt, und die Klassen und Inhalte der Elemente werden entsprechend gesetzt.

Als nächstes ist es an der Zeit, die benutzerdefinierten Datenattribute zu setzen, um die Sichtbarkeitsdaten der Anzeige zu tracken, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, der den Timer darstellen wird, den wir in der Anzeige zeigen, um anzuzeigen, wie lange er sichtbar war, indem wir ihm die Klasse `"timer"` geben. Der Anfangstext wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen, und er wird an die Anzeige angehängt.

Wenn wir keine bestehende Anzeige ersetzen, müssen wir das Element mit [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) in den Inhaltsbereich der Seite einfügen. Wenn wir eine Anzeige ersetzen, ist sie bereits vorhanden, mit ihrem Inhalt, der durch die neue Anzeige ersetzt wurde. Dann rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) Methode auf unserem Intersection Observer, `adObserver`, auf, um die Anzeige auf Änderungen ihrer Schnittmenge mit der Ansicht zu überwachen. Von diesem Zeitpunkt an wird der [Callback des Beobachters](#umgang_mit_schnittmengenänderungen) jedes Mal ausgeführt, wenn die Anzeige um 100% verdeckt wird oder auch nur ein Pixel sichtbar wird, oder wenn die Anzeige in irgendeine Richtung 75% sichtbar überschreitet.

#### Austausch einer bestehenden Anzeige

Unser [Callback des Beobachters](#umgang_mit_schnittmengenänderungen) hält Ausschau nach Anzeigen, die um 100% verdeckt werden und eine Gesamt-Sichtzeit von mindestens einer Minute haben. Wenn dies geschieht, wird die `replaceAd()` Funktion mit dem Element dieser Anzeige als Eingabe aufgerufen, damit die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt mit dem Aufrufen von `updateAdTimer()` auf der bestehenden Anzeige, um sicherzustellen, dass ihr Timer aktuell ist. Das sorgt dafür, dass wir beim Auslesen ihrer `totalViewTime` den exakten Endwert sehen, wie lange die Anzeige dem Benutzer sichtbar war. Wir berichten dann diese Daten; in diesem Fall durch das Protokollieren in der Konsole, aber in der realen Welt würden Sie die Informationen an die API eines Werbedienstes oder in eine Datenbank übermitteln.

Dann laden wir eine neue Anzeige, indem wir den [`loadRandomAd()`](#erstellung_einer_anzeige) aufrufen und die anzuzeigende Anzeige als Eingabeparameter angeben. Wie wir bereits gesehen haben, wird `loadRandomAd()` eine bestehende Anzeige mit dem Inhalt und den Daten einer neuen Anzeige ersetzen, wenn Sie eine bestehende Anzeigeelement als Eingabeparameter angeben.

Das neue Anzeigeelement wird an den Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie es mit dem Scrollen nach oben und unten und beachten Sie, wie Änderungen in der Sichtbarkeit die Timer in jeder Anzeige beeinflussen. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit (die Anzeige muss jedoch zuerst aus dem Blickfeld gescrollt und wieder zurückgeklickt werden) ersetzt wird und wie die Timer anhalten, während das Dokument in den Hintergrund gedrückt wird. Das Abdecken des Browsers mit einem anderen Fenster pausiert jedoch die Timer nicht.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
