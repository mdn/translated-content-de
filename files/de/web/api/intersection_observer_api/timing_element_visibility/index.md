---
title: Timing element visibility with the Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir ein fiktives Blog, das mehrere Anzeigen zwischen den Seiteninhalten enthält, und verwenden die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Wenn eine Anzeige mehr als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der realen Nutzung entsprechen (insbesondere haben alle Artikel denselben Text und werden nicht aus einer Datenbank geladen, und es gibt nur einige wenige einfache Textanzeigen, die aus einem Array ausgewählt werden), sollte dies ausreichen, um die API zu verstehen und schnell zu lernen, wie Sie die Intersection Observer API auf Ihrer eigenen Website anwenden können.

Es gibt einen guten Grund, warum das Konzept der Verfolgung der Sichtbarkeit von Anzeigen in diesem Beispiel verwendet wird. Es stellt sich heraus, dass eine der häufigsten Anwendungen von Flash oder anderen Skripten in der Web-Werbung darin besteht, zu erfassen, wie lange jede Anzeige sichtbar ist, um Zwecke der Abrechnung und Einnahmezahlung zu erfüllen. Ohne die Intersection Observer API wird dies normalerweise mit Intervallen und Timeouts für jede einzelne Anzeige oder anderen Techniken durchgeführt, die dazu neigen, die Seite zu verlangsamen. Die Verwendung dieser API ermöglicht es, alles vom Browser zu optimieren, um die Auswirkung auf die Leistung erheblich zu reduzieren.

Lassen Sie uns anfangen!

## Erstellen der Website

### Seitenstruktur: Das HTML

Die Struktur der Website ist nicht zu kompliziert. Wir verwenden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), um die Seite zu stylen und zu layouten, sodass wir hier recht geradlinig vorgehen können:

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

Dies ist das Framework für die gesamte Seite. Oben befindet sich der Header-Bereich der Seite, der innerhalb eines {{HTMLElement("header")}}-Blocks enthalten ist. Darunter definieren wir die Seitenleiste der Website als Liste von Links innerhalb eines {{HTMLElement("aside")}}-Blocks.

Schließlich kommt der Hauptteil. Hier beginnen wir mit einem leeren {{HTMLElement("main")}}-Element. Dieser Bereich wird später mit einem Skript befüllt.

### Styling der Seite mit CSS

Mit der definierten Struktur der Seite wenden wir uns dem Styling der Website zu. Sehen wir uns das Styling für jede Komponente der Seite an.

#### Die Grundlagen

Wir geben den {{HTMLElement("body")}}- und {{HTMLElement("main")}}-Elementen Stile, um den Hintergrund der Website sowie das Raster zu definieren, in dem die verschiedenen Teile der Seite platziert werden.

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

Der {{HTMLElement("body")}} der Seite ist hier so konfiguriert, dass er eine der gängigen serifenlosen Schriftarten verwendet und `"aliceblue"` als Hintergrundfarbe verwendet. Dann wird die Klasse `"wrapper"` definiert; sie umschließt das gesamte Blog, einschließlich Header, Seitenleiste und Hauptinhalt (Artikel und Anzeigen).

Der Wrapper erstellt ein CSS-Grid mit zwei Spalten und zwei Zeilen. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Seitenleiste verwendet, und die zweite Spalte (die für den Hauptinhalt verwendet wird) wird so dimensioniert, dass sie mindestens die Breite des Inhalts der Spalte und höchstens den gesamten verbleibenden verfügbaren Platz hat.

Die erste Zeile wird speziell für den Seitenheader verwendet. Die Zeilen sind wie die Spalten dimensioniert: die erste wird automatisch dimensioniert, und die zweite verwendet den restlichen Platz, aber mindestens genug Platz für alle Elemente darin.

Die Breite des Wrappers ist fest auf 700px gesetzt, sodass er in den verfügbaren Platz passt, wenn er inline auf MDN dargestellt wird.

#### Der Header

Der Header ist ziemlich einfach, da er in diesem Beispiel nur etwas Text enthält. Sein Stil sieht folgendermaßen aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} ist auf 1 gesetzt, da wir wollen, dass der Header in der obersten Zeile des Grids der Website platziert wird. Interessanter ist die Verwendung von {{cssxref("grid-column")}} hier; wir geben an, dass wir möchten, dass die Spalte in der ersten Spalte beginnt und in der ersten Spalte nach der letzten Gitterlinie endet – mit anderen Worten, der Header überspannt alle Spalten innerhalb des Grids. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Website darzustellen. In unserem Beispiel funktionieren sie nicht, aber sie existieren, um mit der Präsentation einer blogähnlichen Erfahrung zu helfen. Die Seitenleiste wird mit einem {{HTMLElement("aside")}}-Element dargestellt und wie folgt gestylt:

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

Das Wichtigste hier ist, dass {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint es auf der rechten Seite (obwohl einige andere Elemente in ihren Abständen angepasst werden müssen, um die Abstände genau richtig zu machen). {{cssxref("grid-row")}} ist auf 2 festgelegt, um es neben dem Hauptteil der Seite zu platzieren.

#### Der Content-Bereich

Der Hauptinhalt der Website befindet sich in einem {{HTMLElement("main")}}-Element. Der folgende Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Grid-Position so eingestellt ist, dass der Hauptinhalt in Spalte 2, Zeile 2 platziert wird.

#### Artikel

Jeder Artikel ist in einem {{HTMLElement("article")}}-Element enthalten, das wie folgt gestylt ist:

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

Dies erstellt Artikelboxen mit einem weißen Hintergrund, die über dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht der letzte Artikel im Container ist, hat einen unteren Rand von 8px, um die Elemente voneinander zu trennen.

#### Anzeigen

Schließlich haben die Anzeigen das folgende anfängliche Styling. Einzelne Anzeigen können den Stil später etwas anpassen, wie wir sehen werden.

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

Hier gibt es nichts Magisches. Es ist ziemlich grundlegendes CSS.

### Verknüpfen mit JavaScript

Damit kommen wir zum JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

```js
const contentBox = document.querySelector("main");

let nextArticleID = 1;
let visibleAds = new Set();
let previouslyVisibleAds = null;
```

Diese werden wie folgt verwendet:

- `contentBox`
  - : Ein Verweis auf das {{HTMLElement("main")}}-Elementobjekt in der DOM. Hier werden wir die Artikel und Anzeigen einfügen.
- `nextArticleID`
  - : Jeder Artikel erhält eine eindeutige ID-Nummer; diese Variable verfolgt die nächste zu verwendende ID, beginnend mit 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, das wir verwenden, um die derzeit auf dem Bildschirm sichtbaren Anzeigen zu verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (z.B. wenn der Benutzer auf eine andere Seite getabbt hat).

#### Einrichtung

Um die Dinge einzurichten, führen wir den folgenden Code aus, wenn die Seite geladen wird:

```js
document.addEventListener("visibilitychange", handleVisibilityChange);

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

Zuerst richten wir einen Event-Listener für das Event [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) ein. Dieses Event wird gesendet, wenn das Dokument verborgen oder sichtbar wird, z.B. wenn der Benutzer in seinem Browser Tabs wechselt. Die Intersection Observer API berücksichtigt dies nicht, wenn sie Schnittpunkte erkennt, da die Sichtbarkeit der Seite den Schnittpunkt nicht beeinflusst. Daher müssen wir unsere Timer anhalten, während die Seite ausgetabbed wird; daher dieser Event-Listener.

Dann richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der Zielobjekte (in unserem Fall Anzeigen) für Schnittpunktänderungen relativ zum Dokument überwacht. Die Optionen sind so konfiguriert, dass sie nach Schnittpunkten mit dem Viewport des Dokuments suchen (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder, um das Rechteck der Schnittpunkt-Wurzel zu erweitern oder zu verkleinern; wir möchten die Grenzen des Viewports des Dokuments genau für den Schnittpunkt abgleichen. Und der `threshold` ist auf ein Array mit den Werten 0,0 und 0,75 eingestellt; dies wird dazu führen, dass unser Callback ausgeführt wird, wann immer ein Zielobjekt vollständig verdeckt wurde oder gerade beginnt, nicht verdeckt zu werden (Schnittpunktverhältnis 0,0) oder es durch 75% sichtbar in beide Richtungen geht (Schnittpunktverhältnis 0,75).

Der Beobachter, `adObserver`, wird erstellt, indem der Konstruktor `IntersectionObserver` mit der Callback-Funktion `intersectionCallback` und unseren Optionen aufgerufen wird.

Wir rufen dann eine Funktion `buildContents()` auf, die wir später definieren werden, um tatsächlich die Artikel und Anzeigen zu generieren und in das Dokument einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um jegliches notwendige Auffrischen zu erledigen. Wir benötigen eine einsekündige Auffrischung, da wir Timer in allen sichtbaren Anzeigen zu Demonstrationszwecken anzeigen. Möglicherweise benötigen Sie überhaupt kein Intervall, oder Sie könnten es anders handhaben oder mit einem anderen Zeitintervall.

#### Umgang mit Änderungen der Dokumentensichtbarkeit

Werfen wir einen Blick auf den Handler für das Event [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event). Unser Skript erhält dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer die Tabs wechselt. Da sich der Intersection Observer nur für den Schnittpunkt zwischen den Zielobjekten und der Schnittpunkt-Wurzel interessiert und nicht für die Sichtbarkeit des Tabs (was ein ganz anderes Problem ist), müssen wir die [Seiten-Sichtbarkeits-API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Tab-Wechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

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

Da das Event selbst nicht angibt, ob das Dokument von sichtbar auf unsichtbar oder umgekehrt gewechselt ist, wird die Eigenschaft [`document.hidden`](/de/docs/Web/API/Document/hidden) überprüft, um zu sehen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, mehrmals aufgerufen zu werden, fahren wir nur fort, wenn wir die Timer nicht bereits pausiert haben und die Sichtbarkeitszustände der bestehenden Anzeigen gespeichert haben.

Um die Timer zu pausieren, müssen wir nur die Anzeigen aus dem Set der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv markieren. Dazu speichern wir zuerst das Set der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer wieder auf das Dokument tabbt, und dann leeren wir das Set `visibleAds`, damit sie nicht als sichtbar behandelt werden. Dann rufen wir für jede der Anzeigen, die ausgesetzt werden, unsere Funktion `updateAdTimer()` auf, die den "gesamten sichtbaren Zeit"-Zähler der Anzeige aktualisiert, dann setzen wir ihre Eigenschaft `dataset.lastViewStarted` auf 0, was bedeutet, dass der Tab-Timer nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Vorgang um: zuerst durchlaufen wir `previouslyVisibleAds` und setzen für jede die Eigenschaft `dataset.lastViewStarted` auf die aktuelle Zeit des Dokuments (in Millisekunden seit dem Erstellen des Dokuments) mit der Methode [`performance.now()`](/de/docs/Web/API/Performance/now). Dann setzen wir `visibleAds` zurück auf `previouslyVisibleAds` und setzen letzteres auf `null`. Nun sind die Anzeigen alle neu gestartet und so konfiguriert, dass sie wissen, dass sie gerade jetzt sichtbar wurden, sodass sie die Dauer der Zeit, in der die Seite weggetabbt war, der nächsten Aktualisierung nicht hinzufügen.

#### Umgang mit Schnittpunktänderungen

Einmal pro Durchlauf durch die Ereignisschleife des Browsers überprüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Zielobjekte durch eines der "Intersection Observer"-Verhältnis-Schwellenwerte hindurchgegangen ist. Für jeden Beobachter wird eine Liste der Ziele erstellt, die dies getan haben, und als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten an den Callback des Beobachters gesendet. Unser Callback, `intersectionCallback()`, sieht so aus:

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

Wie bereits erwähnt, erhält der Callback des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) als Eingabe ein Array aller Zielobjekte des Beobachters, die entweder mehr oder weniger sichtbar als eines der "Intersection Observer"-Verhältnis-Schwellenwerte geworden sind. Wir durchlaufen jedes dieser Einträge–die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Zielobjekt mit der Wurzel überschneidet, wissen wir, dass es gerade von einem verdeckten Zustand in den sichtbaren gewechselt hat. Wenn es mindestens 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und starten den Timer, indem wir das Attribut `dataset.lastViewStarted` der Anzeige auf die Übergangszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen, dann fügen wir die Anzeige zum Set `visibleAds` hinzu, damit wir wissen, dass es im Laufe der Zeit verarbeitet werden muss.

Wenn die Anzeige in den nicht überschneidenden Zustand übergegangen ist, entfernen wir die Anzeige aus dem Set der sichtbaren Anzeigen. Dann haben wir ein besonderes Verhalten: wir schauen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) 0.0 ist; wenn ja, bedeutet dies, dass das Element vollständig verdeckt geworden ist. Wenn das der Fall ist und die Anzeige insgesamt mindestens eine Minute sichtbar war, rufen wir eine Funktion auf, die wir erstellen werden, namens `replaceAd()`, um die vorhandene Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Benutzer im Laufe der Zeit eine Vielzahl von Anzeigen, aber die Anzeigen werden nur ersetzt, während sie nicht gesehen werden können, was zu einem reibungslosen Erlebnis führt.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird etwa einmal pro Sekunde aufgrund des Aufrufs von [`setInterval()`](/de/docs/Web/API/Window/setInterval), der in der Funktion `startup()` [oben beschrieben](#einrichtung) gemacht wurde, aufgerufen. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und ein Neuzeichnen zu planen, um die Timer, die wir in jeder Anzeige zeichnen, zu aktualisieren.

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

Das Array `redrawList` wird verwendet, um eine Liste all der Anzeigen zu führen, die während dieses Auffrischzyklus neu gezeichnet werden müssen, da es möglicherweise nicht genau die gleiche Zeitspanne wie die verstrichene Zeit aufgrund der Systemaktivität ist oder weil Sie das Intervall auf etwas anderes als alle 1000 Millisekunden eingestellt haben.

Dann, für jede der sichtbaren Anzeigen, speichern wir den Wert von `dataset.totalViewTime` (die gesamte Anzahl der Millisekunden, die die Anzeige bisher sichtbar war, seit der letzten Aktualisierung) und rufen `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn sie sich geändert hat, dann schieben wir die Anzeige auf die `redrawList`, sodass wir wissen, dass sie während des nächsten Animationsframes aktualisiert werden muss.

Schließlich, wenn es mindestens ein Element zum Neuzeichnen gibt, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsframes neu zeichnet.

#### Aktualisieren des Sichtbarkeits-Timers einer Anzeige

Bisher (siehe [Umgang mit Änderungen der Dokumentensichtbarkeit](#umgang_mit_änderungen_der_dokumentensichtbarkeit) und [Umgang mit periodischen Aktionen](#umgang_mit_periodischen_aktionen)) haben wir gesehen, dass, wenn wir den "gesamten sichtbaren Zeit"-Zähler einer Anzeige aktualisieren müssen, wir eine Funktion namens `updateAdTimer()` aufrufen, um dies zu tun. Diese Funktion nimmt als Eingabe das [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)-Objekt einer Anzeige. Hier ist sie:

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
  - : Die Zeit in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, als der Sichtbarkeitszähler der Anzeige zuletzt aktualisiert wurde oder die Anzeige zuletzt sichtbar wurde. 0, wenn die Anzeige zum Zeitpunkt der letzten Überprüfung nicht sichtbar war.
- `totalViewTime`
  - : Die gesamte Anzahl der Millisekunden, in denen die Anzeige sichtbar war.

Diese werden über das Attribut [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) jeder Anzeige zugegriffen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bereitstellt, die jeden benutzerdefinierten Attributnamen seinem Wert zuordnet. Die Werte sind Zeichenfolgen, aber wir können diese leicht in Zahlen umwandeln – tatsächlich macht JavaScript dies im Allgemeinen automatisch, obwohl wir einen Fall haben werden, in dem wir es selbst tun müssen.

Wir beginnen damit, die Zeit, zu der die Anzeige zuletzt sichtbar war (`adBox.dataset.lastViewStarted`), in einer lokalen Variablen namens `lastStarted` abzurufen. Wir erhalten auch den aktuellen Zeit-since-creation-Wert mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` ungleich null ist – was bedeutet, dass der Timer gerade läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu bestimmen, die der Timer seit dem letzten Mal sichtbar war. Diese wird zum aktuellen Wert der `totalViewTime` der Anzeige addiert, um die Gesamtdauer auf den neuesten Stand zu bringen. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; da diese Werte Zeichenfolgen sind, versucht JavaScript ohne sie eine Zeichenfolgenverkettung statt einer Addition.

Schließlich wird die letzte Ansicht-Zeit für die Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht, egal ob die Anzeige lief, als diese Funktion aufgerufen wurde oder nicht; dies führt dazu, dass der Timer der Anzeige immer läuft, wenn diese Funktion zurückkehrt. Dies ist sinnvoll, da diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, auch wenn sie gerade jetzt sichtbar geworden ist.

#### Zeichnen des Timers einer Anzeige

Innerhalb jeder Anzeige zeichnen wir zu Demonstrationszwecken den aktuellen Wert seiner `totalViewTime`, umgerechnet in Minuten und Sekunden. Dies wird behandelt, indem das Element der Anzeige in die Funktion `drawAdTimer()` übergeben wird:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige mit seiner ID, `"timer"`, und berechnet die Anzahl der verstrichenen Sekunden, indem die `totalViewTime` der Anzeige durch 1000 geteilt wird. Dann berechnet er die Anzahl der verstrichenen Minuten und Sekunden, bevor er den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des Timers auf eine Zeichenfolge setzt, die diese Zeit in der Form m:ss darstellt. Die Methode {{jsxref("String.padStart()")}} wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Ziffern aufgefüllt wird, wenn sie weniger als 10 ist.

#### Erstellen der Seiteninhalte

Die Funktion `buildContents()` wird vom [Startup-Code](#einrichtung) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, die präsentiert werden sollen:

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

Die Variable `loremIpsum` enthält den Text, den wir für den Hauptteil aller unserer Artikel verwenden werden. Offensichtlich hätten Sie in der realen Welt einige Codezeilen, um Artikel aus einer Datenbank oder ähnlichem abzurufen, aber dies erfüllt unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie könnten dies natürlich leicht ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeradzahligen Artikel wird eine Anzeige "geladen" und in die Seite eingefügt. Artikel werden in das Inhaltsbox eingefügt (das heißt, das {{HTMLElement("main")}}-Element, das den gesamten Seiteninhalt enthält), nachdem sie mit einer Methode namens `createArticle()` erstellt wurden, die wir als nächstes betrachten.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, welche sowohl die Anzeige erstellt als auch in die Seite einfügt. Wir werden später sehen, dass dieselbe Funktion auch eine bestehende Anzeige ersetzen kann, aber für jetzt fügen wir Anzeigen zum bestehenden Inhalt hinzu.

#### Erstellen eines Artikels

Um das {{HTMLElement("article")}}-Element für einen Artikel sowie alle seine Inhalte zu erstellen, verwenden wir die Funktion `createArticle()`, die als Eingabe eine Zeichenfolge erwartet, welche der vollständige Text des Artikels ist, der zur Seite hinzugefügt werden soll.

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

Zuerst wird das `<article>`-Element erstellt und seine ID auf den eindeutigen Wert `nextArticleID` gesetzt (die bei 1 beginnt und für jeden Artikel um eins erhöht wird). Dann erstellen und fügen wir ein {{HTMLElement("Heading_Elements", "h2")}}-Element für den Titel des Artikels hinzu und fügen dann das HTML von `contents` an. Schließlich wird `nextArticleID` inkrementiert (so dass das nächste Element eine neue eindeutige ID erhält), und wir geben das neu erstellte `<article>`-Element an den Aufrufer zurück.

#### Erstellen einer Anzeige

Die Funktion `loadRandomAd()` simuliert das Laden einer Anzeige und das Hinzufügen zur Seite. Wenn Sie keinen Wert für `replaceBox` angeben, wird ein neues Element erstellt, um die Anzeige zu enthalten; die Anzeige wird dann der Seite hinzugefügt. Wenn Sie eine `replaceBox` angeben, wird diese Box als vorhandenes Anzeigenelement behandelt; anstatt eine neue zu erstellen, wird das vorhandene Element geändert, um den neuen Stil, Inhalt und andere Daten der Anzeige zu enthalten. Dies vermeidet das Risiko eines umfangreichen Layout-Aufwands beim Aktualisieren der Anzeige, was passieren könnte, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

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

Zuerst einmal wird das Array `ads` erstellt. Dieses Array enthält die Daten, die zum Erstellen jeder Anzeige benötigt werden. Wir haben hier vier zur zufälligen Auswahl. In einem echten Szenario würden die Anzeigen natürlich aus einer Datenbank oder wahrscheinlich aus einem Werbeservice stammen, von dem Sie Anzeigen über eine API abrufen. Unsere Bedürfnisse sind jedoch einfach: jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: eine Hintergrundfarbe (`bgcolor`), einen Titel (`title`) und eine Textzeile (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Dies wird auf das Element gesetzt, das die Anzeige darstellt. Für neue Anzeigen, die der Seite hinzugefügt werden, wird dieses mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Beim Ersetzen einer vorhandenen Anzeige wird dies auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}}-Element halten, das den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}}-Element halten, das den Anzeigentext darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}}-Element halten, das die Zeit enthält, wie lange die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird ausgewählt, indem `Math.floor(Math.random() * ads.length)` berechnet wird; das Ergebnis ist ein Wert zwischen 0 und um eins geringer als die Anzahl der Anzeigen. Die entsprechende Anzeige ist nun als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben wird, verwenden wir dieses als das Anzeigenelement. Dazu beginnen wir damit, die Beobachtung des Elements zu beenden, indem wir [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) aufrufen. Dann werden die lokalen Variablen für jedes der Elemente, die eine Anzeige ausmachen: das Anzeigenelement selbst, der Titel, der Text und das Zeitelement, auf die entsprechenden Elemente in der vorhandenen Anzeige gesetzt.

Wenn kein Wert für replaceBox angegeben wird, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}}-Element der Anzeige wird erstellt und seine Eigenschaften eingerichtet, indem der Klassenname auf `"ad"` gesetzt wird. Als nächstes werden das Anzeigentitel-Element, der Text und der Sichtbarkeits-Timer erstellt; sie sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}} und ein {{HTMLElement("div")}}-Element. Diese Elemente werden dem `adBox`-Element hinzugefügt.

Danach konvergieren die Codepfade erneut. Die Hintergrundfarbe der Anzeige wird auf den Wert gesetzt, der im Eintrag der neuen Anzeige angegeben ist, und die Klassen und Inhalte der Elemente werden entsprechend gesetzt.

Nun ist es Zeit, die benutzerdefinierten Datenattribute einzurichten, um die Sichtbarkeitsdaten der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, das den Timer zeigt, den wir in der Anzeige präsentieren werden, um zu zeigen, wie lange er sichtbar war, und geben ihm die Klasse `"timer"`. Der anfängliche Text wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen, und es wird der Anzeige hinzugefügt.

Wenn wir keine vorhandene Anzeige ersetzen, müssen wir das Element mit [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) in den Inhaltsbereich der Seite einfügen. Wenn wir eine Anzeige ersetzen, ist sie bereits vorhanden, mit ihrem Inhalt durch die neue Anzeige ersetzt. Dann rufen wir die Methode [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) bei unserem Intersection Observer, `adObserver`, auf, um zu beginnen, die Anzeige auf Änderungen ihrer Schnittpunkte mit dem Viewport zu überwachen. Von nun an, wann immer die Anzeige 100% verdeckt wird oder sogar ein einzelnes Pixel sichtbar wird, oder die Anzeige durch 75% sichtbar in irgendeiner Weise passiert, wird der [Callback des Beobachters](#umgang_mit_schnittpunktänderungen) ausgeführt.

#### Ersetzen einer vorhandenen Anzeige

Unser [Callback des Beobachters](#umgang_mit_schnittpunktänderungen) überwacht Anzeigen, die 100% verdeckt werden und eine gesamte sichtbare Zeit von mindestens einer Minute haben. Wenn das passiert, wird die Funktion `replaceAd()` aufgerufen mit dem Element dieser Anzeige als Eingabe, sodass die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt, indem `updateAdTimer()` auf der vorhandenen Anzeige aufgerufen wird, um sicherzustellen, dass sein Timer auf dem neuesten Stand ist. Dies stellt sicher, dass wir beim Lesen seiner `totalViewTime` den exakt endgültigen Wert sehen, wie lange die Anzeige für den Benutzer sichtbar war. Wir berichten dann diese Daten; in diesem Fall, indem wir sie in die Konsole protokollieren, aber in der realen Welt würden Sie die Informationen an eine API eines Werbedienstes übermitteln oder in eine Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#erstellen_einer_anzeige) aufrufen, wobei wir die zu ersetzende Anzeige als Eingabewert angeben. Wie wir bereits gesehen haben, ersetzt `loadRandomAd()` eine vorhandene Anzeige durch Inhalte und Daten, die einer neuen Anzeige entsprechen, wenn Sie das Element einer bestehenden Anzeige als Eingabewert angeben.

Das neue Anzeigenelement wird dem Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie zu experimentieren, indem Sie nach oben und unten scrollen und beobachten, wie Änderungen in der Sichtbarkeit die Timer in jeder Anzeige beeinflussen. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss zuerst aus dem Blickfeld gescrollt und dann wieder zurückgeblättert werden), und wie die Timer pausieren, während das Dokument in den Hintergrund getabbt ist. Allerdings pausiert das Abdecken des Browsers mit einem anderen Fenster die Timer nicht.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
