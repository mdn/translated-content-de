---
title: Timing element visibility with the Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir einen Beispiel-Blog, in dem eine Anzahl von Anzeigen zwischen den Inhalten der Seite verteilt ist. Dann verwenden wir die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Wenn eine Anzeige mehr als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der realen Nutzung entsprechen (insbesondere haben alle Artikel den gleichen Text und werden nicht aus einer Datenbank geladen, und es gibt nur eine Handvoll einfacher Textanzeigen, die aus einem Array ausgewählt werden), sollte es genug Verständnis der API bieten, um schnell zu lernen, wie man die Intersection Observer API auf Ihrer eigenen Website anwendet.

Es gibt einen guten Grund, warum das Konzept des Trackens der Sichtbarkeit von Anzeigen in diesem Beispiel verwendet wird. Es stellt sich heraus, dass eine der häufigsten Verwendungen von Flash oder anderen Skripten in der Werbung im Web darin besteht, aufzuzeichnen, wie lange jede Anzeige sichtbar ist, um Abrechnung und Zahlung von Einnahmen zu ermöglichen. Ohne die Intersection Observer API wird dies oft durch Intervalle und Timeouts für jede einzelne Anzeige erledigt oder durch andere Techniken, die dazu tendieren, die Seite zu verlangsamen. Mit dieser API kann alles vom Browser optimiert werden, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Lassen Sie uns loslegen!

## Die Webseite erstellen

### Seitenstruktur: Das HTML

Die Struktur der Seite ist nicht zu kompliziert. Wir werden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) verwenden, um die Seite zu stylen und anzuordnen, sodass wir hier ziemlich unkompliziert sein können:

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

Dies ist das Framework für die gesamte Seite. Oben befindet sich der Kopfbereich der Webseite, enthalten innerhalb eines {{HTMLElement("header")}} Blocks. Darunter definieren wir die Sidebar der Seite als eine Liste von Links innerhalb eines {{HTMLElement("aside")}} Blocks.

Schließlich kommt der Hauptteil. Wir starten hier mit einem leeren {{HTMLElement("main")}} Element. Dieses Feld wird später mit Skript gefüllt.

### Styling der Seite mit CSS

Mit der definierten Struktur der Seite wenden wir uns dem Styling der Seite zu. Lassen Sie uns den Stil für jede Komponente der Seite einzeln betrachten.

#### Die Grundlagen

Wir stellen Stile für die {{HTMLElement("body")}} und {{HTMLElement("main")}} Elemente bereit, um den Hintergrund der Seite sowie das Raster festzulegen, in dem die verschiedenen Teile der Seite platziert werden.

```css
body {
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
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

Das {{HTMLElement("body")}} der Seite wird hier konfiguriert, um eine der vielen üblichen serifenlosen Schriftarten zu verwenden und `"aliceblue"` als Hintergrundfarbe zu nutzen. Dann wird die `"wrapper"` Klasse definiert; sie umschließt den gesamten Blog, einschließlich des Headers, der Sidebar und des Inhalts (Artikel und Anzeigen).

Der Wrapper stellt ein CSS Grid mit zwei Spalten und zwei Zeilen her. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Sidebar verwendet und die zweite Spalte (die für den Inhaltsbereich verwendet wird) wird so dimensioniert, dass sie mindestens so breit ist wie der Inhalt der Spalte und höchstens so viel Platz wie verfügbar bleibt.

Die erste Zeile wird speziell für den Seitenkopf verwendet. Die Zeilen sind auf die gleiche Weise dimensioniert wie die Spalten: die erste wird automatisch dimensioniert und die zweite nutzt den verbleibenden Platz, aber mindestens genug Platz, um Raum für alle darin enthaltenen Elemente zu bieten.

Die Breite des Wrappers ist auf 700px festgelegt, sodass er in den verfügbaren Raum passt, wenn er auf MDN inline dargestellt wird.

#### Der Kopfbereich

Der Kopfbereich ist ziemlich einfach, da er in diesem Beispiel nur aus ein wenig Text besteht. Sein Stil sieht folgendermaßen aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} ist auf 1 gesetzt, da wir möchten, dass der Kopfbereich in der obersten Zeile des Gitters der Seite platziert wird. Interessanter ist unsere Verwendung von {{cssxref("grid-column")}} hier; wir geben an, dass wir möchten, dass die Spalte in der ersten Spalte beginnt und in der ersten Spalte nach der letzten Gitterlinie endet—mit anderen Worten, der Kopfbereich erstreckt sich über alle Spalten innerhalb des Gitters. Perfekt für unsere Bedürfnisse.

#### Die Sidebar

Unsere Sidebar wird verwendet, um Links zu anderen Seiten auf der Website zu präsentieren. Keiner von ihnen funktioniert in unserem Beispiel hier, aber sie existieren, um bei der Präsentation eines blogähnlichen Erlebnisses zu helfen. Die Sidebar wird mit einem {{HTMLElement("aside")}} Element dargestellt und wie folgt gestylt:

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

Das Wichtigste hier ist, dass die {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Sidebar auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, wird sie auf der rechten Seite erscheinen (obwohl einige andere Elemente dann einige Anpassungen bei ihren Rändern benötigen, um die Abstände genau richtig zu bekommen). Die {{cssxref("grid-row")}} ist auf 2 gesetzt, um sie neben dem Hauptteil der Seite zu platzieren.

#### Der Hauptinhalt

Apropos Hauptteil der Seite: Der Hauptinhalt der Seite wird in einem {{HTMLElement("main")}} Element aufbewahrt. Der folgende Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Gitterposition so gesetzt ist, dass der Hauptinhalt in Spalte 2, Zeile 2 platziert wird.

#### Artikel

Jeder Artikel ist in einem {{HTMLElement("article")}} Element enthalten und wie folgt gestylt:

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

Dies erstellt Artikelfelder mit einem weißen Hintergrund, die auf dem blauen Hintergrund schweben, mit einem kleinen Abstand um den Artikel herum. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen unteren Rand von 8px, um die Dinge auseinander zu halten.

#### Anzeigen

Schließlich haben die Anzeigen das folgende anfängliche Styling. Einzelne Anzeigen dürfen den Stil etwas anpassen, wie wir später sehen werden.

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

### Zusammenspiel mit JavaScript

Das bringt uns zu dem JavaScript-Code, der alles zum Laufen bringt. Lassen Sie uns mit den globalen Variablen beginnen:

```js
const contentBox = document.querySelector("main");

let nextArticleID = 1;
let visibleAds = new Set();
let previouslyVisibleAds = null;
```

Diese werden wie folgt verwendet:

- `contentBox`
  - : Eine Referenz auf das {{HTMLElement("main")}} Element-Objekt im DOM. Hier werden wir die Artikel und Anzeigen einfügen.
- `nextArticleID`
  - : Jedem Artikel wird eine eindeutige ID-Nummer gegeben; diese Variable verfolgt die nächste zu verwendende ID, beginnend bei 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, das wir verwenden, um die aktuell auf dem Bildschirm sichtbaren Anzeigen zu verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer zu einer anderen Seite gewechselt hat).

#### Einrichtung

Um alles einzurichten, führen wir den folgenden Code aus, wenn die Seite geladen wird:

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

const loremIpsum =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing" +
  " elit. Cras at sem diam. Vestibulum venenatis massa in tincidunt" +
  " egestas. Morbi eu lorem vel est sodales auctor hendrerit placerat" +
  " risus. Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorper" +
  " eu. Donec nec imperdiet nibh, nec vehicula libero. Phasellus vel" +
  " malesuada nulla. Aliquam sed magna aliquam, vestibulum nisi at," +
  " cursus nunc.</p>";

buildContents();
```

Zuerst richten wir einen Event-Listener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument versteckt oder sichtbar wird, etwa wenn der Benutzer Tabs in seinem Browser wechselt. Die Intersection Observer API berücksichtigt dies nicht, wenn sie Intersektionen erkennt, da Intersektionen nicht von der Sichtbarkeit der Seite betroffen sind. Daher müssen wir unsere Timer pausieren, während die Seite auf einem anderen Tab ist; deshalb dieser Event-Listener.

Als Nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der Target-Elemente (in unserem Fall Anzeigen) auf Interektionsänderungen relativ zum Dokument überwachen wird. Die Optionen sind so eingerichtet, dass sie auf Intersektionen mit dem Viewport des Dokuments achten (indem `root` auf `null` gesetzt wird). Wir haben keine Margen, um das Intersektionswurzelrechteck zu erweitern oder zu verkleinern; wir wollen die Grenzen des Viewports des Dokuments genau für Intersektionszwecke abgleichen. Und der `threshold` ist auf ein Array gesetzt, das die Werte 0.0 und 0.75 enthält; dies wird unsere Callback-Funktion immer dann auslösen, wenn ein Ziel-Element vollständig verdeckt wird oder erstmals sichtbar wird (Intersektionsverhältnis 0.0) oder zu 75% sichtbar in eine Richtung geht (Intersektionsverhältnis 0.75).

Der Beobachter, `adObserver`, wird durch Aufruf des Konstruktors von `IntersectionObserver` erstellt, wobei die Callback-Funktion `intersectionCallback` und unsere Optionen übergeben werden.

Die Variable `loremIpsum` enthält den Text, den wir für den Hauptkörper all unserer Artikel verwenden werden. Offensichtlich hätten Sie in der realen Welt etwas Code, um Artikel aus einer Datenbank oder Ähnlichem abzurufen, aber das tut für unsere Zwecke seinen Zweck. Jeder Artikel verwendet den gleichen Text; Sie könnten das natürlich leicht ändern.

Wir rufen dann eine Funktion `buildContents()` auf, die wir später definieren werden, um tatsächlich die Artikel und Anzeigen zu generieren und in das Dokument einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um jegliche notwendige Aktualisierung zu behandeln. Wir brauchen eine einsekündige Aktualisierung, da wir in allen sichtbaren Anzeigen Timer für die Zwecke dieses Beispiels anzeigen. Sie benötigen möglicherweise überhaupt kein Intervall, oder Sie könnten es anders machen oder ein anderes Zeitintervall verwenden.

#### Umgang mit Änderungen der Dokumentensichtbarkeit

Schauen wir uns den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis an. Unser Skript empfängt dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer die Tabs wechselt. Da der Intersection Observer sich nur für die Intersektion zwischen den zielgerichteten Elementen und der Intersektionswurzel interessiert und nicht für die Sichtbarkeit des Tabs (was ein ganz anderes Problem ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Tab-Wechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar zu unsichtbar oder umgekehrt gewechselt ist, wird die [`document.hidden`](/de/docs/Web/API/Document/hidden) Eigenschaft überprüft, um festzustellen, ob das Dokument momentan nicht sichtbar ist. Da es theoretisch möglich ist, mehrmals aufgerufen zu werden, machen wir nur weiter, wenn wir die Timer noch nicht pausiert und die Sichtbarkeitszustände der vorhandenen Anzeigen gespeichert haben.

Um die Timer zu pausieren, müssen wir nur die Anzeigen aus dem Set der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv kennzeichnen. Dazu speichern wir zunächst das Set der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer zurück in das Dokument wechselt, und dann leeren wir das Set `visibleAds`, damit sie nicht als sichtbar behandelt werden. Dann rufen wir für jede der Anzeigen, die ausgesetzt werden, unsere Funktion `updateAdTimer()` auf, die sich um die Aktualisierung des gesamten sichtbaren Zeitzählers der Anzeige kümmert. Dann setzen wir ihre Eigenschaft `dataset.lastViewStarted` auf 0, was anzeigt, dass der Timer des Tabs nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Prozess um: zuerst durchlaufen wir `previouslyVisibleAds` und setzen den `dataset.lastViewStarted` jeder Anzeige auf die aktuelle Dokumentzeit (in Millisekunden seit Erstellung des Dokuments) mit der Methode [`performance.now()`](/de/docs/Web/API/Performance/now). Dann setzen wir `visibleAds` zurück auf `previouslyVisibleAds` und setzen letzteres auf `null`. Nun werden alle Anzeigen neu gestartet und so konfiguriert, dass sie wissen, dass sie seit der aktuellen Zeit sichtbar geworden sind, sodass sie beim nächsten Mal keine Zeit addieren, in der die Seite weggetabbt war, wenn sie aktualisiert werden.

#### Umgang mit Änderungen der Intersektion

Einmal pro Pass durch die Ereignisschleife des Browsers überprüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Zielelemente eines der Intersektionsverhältnisse des Beobachters durchlaufen hat. Für jeden Beobachter wird eine Liste von Zielen erstellt, die dies getan haben, und an den Callback des Beobachters als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten übergeben. Unser Callback, `intersectionCallback()`, sieht so aus:

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

Wie zuvor erwähnt, erhält der Callback des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) als Eingabe ein Array aller gezielten Elemente des Beobachters, die entweder mehr oder weniger sichtbar geworden sind als eines der Intersektionsbeobachtungs-Verhältnisse. Wir iterieren über jeden dieser Einträge—die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Zielelement mit der Wurzel intersektiert, wissen wir, dass es gerade vom verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es mindestens 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und starten den Timer, indem wir das `dataset.lastViewStarted` Attribut der Anzeige auf die Übergangszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen, dann fügen wir die Anzeige dem Set `visibleAds` hinzu, damit wir wissen, dass sie verarbeitet werden muss, während die Zeit vergeht.

Wenn die Anzeige in den nicht-intersektierenden Zustand übergegangen ist, entfernen wir die Anzeige aus dem Set der sichtbaren Anzeigen. Dann haben wir ein besonderes Verhalten: Wir schauen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) 0.0 ist; wenn dies der Fall ist, bedeutet dies, dass das Element völlig verdeckt geworden ist. Sollte dies so sein und die Anzeige mindestens eine Minute lang sichtbar gewesen sein, rufen wir eine Funktion auf, die wir erstellen werden, die `replaceAd()` genannt wird, um die bestehende Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Benutzer im Laufe der Zeit verschiedene Anzeigen, aber die Anzeigen werden nur ersetzt, während sie nicht gesehen werden können, was zu einer reibungslosen Erfahrung führt.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird etwa einmal pro Sekunde aufgerufen, dank des Aufrufs von [`setInterval()`](/de/docs/Web/API/Window/setInterval), der in der `startup()` Funktion [wie oben beschrieben](#einrichtung) gemacht wird. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und eine Neuzeichnung zu planen, um die Timer, die wir in jeder Anzeige zeichnen, zu aktualisieren.

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

Das Array `redrawList` wird verwendet, um eine Liste all der Anzeigen zu führen, die während dieses Aktualisierungszyklus neu gezeichnet werden müssen, da es möglicherweise nicht genau die verstrichene Zeit ist, aufgrund von Systemaktivitäten oder weil Sie das Intervall auf etwas anderes als alle 1000 Millisekunden gesetzt haben.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtanzahl der Millisekunden, die die Anzeige derzeit sichtbar war, zum letzten Mal, als sie aktualisiert wurde) und rufen dann `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn sie sich geändert hat, dann schieben wir die Anzeige auf die `redrawList`, damit wir wissen, dass sie während des nächsten Animationsframes aktualisiert werden muss.

Schließlich, wenn mindestens ein Element neu gezeichnet werden muss, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsframes neu zeichnet.

#### Sichtbarkeitstimer einer Anzeige aktualisieren

Wie zuvor gesehen (siehe [Umgang mit Änderungen der Dokumentensichtbarkeit](#umgang_mit_änderungen_der_dokumentensichtbarkeit) und [Umgang mit periodischen Aktionen](#umgang_mit_periodischen_aktionen)), haben wir gesehen, dass, wenn wir den "totalen Sichtbarkeitszeitraum" einer Anzeige aktualisieren müssen, wir eine Funktion namens `updateAdTimer()` aufrufen, um dies zu tun. Diese Funktion nimmt als Eingabe das [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement) Objekt einer Anzeige. Hier ist es:

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

Um die sichbare Zeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Datenattribute (siehe [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)) auf jeder Anzeige:

- `lastViewStarted`
  - : Die Zeit in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, zu der der Sichtbarkeitszähler der Anzeige zuletzt aktualisiert wurde oder die Anzeige zuletzt sichtbar wurde. 0, wenn die Anzeige zum letzten Mal, als sie überprüft wurde, nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtanzahl der Millisekunden, die die Anzeige sichtbar war.

Diese werden über das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Attribut der Anzeige abgerufen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bietet, die jedem benutzerdefinierten Attributnamen seinen Wert zuordnet. Die Werte sind Zeichenketten, aber wir können diese leicht in Zahlen umwandeln—tatsächlich macht JavaScript es im Allgemeinen automatisch, obwohl wir einen Fall haben werden, in dem wir es selbst tun müssen.

Wir beginnen damit, die Zeit, zu der die Anzeige das letzte Mal als sichtbar angesehen wurde (`adBox.dataset.lastViewStarted`), in eine lokale Variable namens `lastStarted` abzurufen. Wir erhalten auch den aktuellen "Zeiten-seit-Erstellung" Wert mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` ungleich 0 ist—was bedeutet, dass der Timer derzeit läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu bestimmen, die der Timer seit dem letzten Mal, als er sichtbar wurde, sichtbar war. Diese wird dem aktuellen Wert der `totalViewTime` der Anzeige hinzugefügt, um die Gesamtzeit auf dem neuesten Stand zu bringen. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; da diese Werte Zeichenketten sind, versucht JavaScript, eine Zeichenkettenverkettung statt einer Addition ohne sie durchzuführen.

Schließlich wird die zuletzt gesehene Zeit für die Anzeige auf die aktuelle Zeit gesetzt. Dies wird unabhängig davon gemacht, ob der Timer beim Aufruf dieser Funktion lief oder nicht; dies bewirkt, dass der Timer der Anzeige stets läuft, wenn diese Funktion zurückkehrt. Das macht Sinn, weil diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, auch wenn sie gerade jetzt sichtbar geworden ist.

#### Eine Anzeige-Timer zeichnen

Innerhalb jeder Anzeige zeichnen wir zum Demonstrationszweck den aktuellen Wert ihres `totalViewTime`, umgerechnet in Minuten und Sekunden. Dies wird gehandhabt, indem das Element der Anzeige in die `drawAdTimer()` Funktion übergeben wird:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige durch seine ID, `"timer"`, und berechnet die Anzahl der verstrichenen Sekunden, indem er die `totalViewTime` der Anzeige durch 1000 teilt. Dann berechnet er die Anzahl der verstrichenen Minuten und Sekunden, bevor er den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des Timers auf eine Zeichenkette setzt, die diese Zeit in der Form m:ss darstellt. Die Methode {{jsxref("String.padStart()")}} wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Ziffern gefüllt ist, falls sie kleiner als 10 ist.

#### Seiteneinhalte erstellen

Die `buildContents()` Funktion wird vom [Startcode](#einrichtung) aufgerufen, um die auszuwählenden Artikel und Anzeigen in das Dokument einzufügen, die präsentiert werden sollen:

```js
function buildContents() {
  for (let i = 0; i < 5; i++) {
    contentBox.appendChild(createArticle(loremIpsum));

    if (!(i % 2)) {
      loadRandomAd();
    }
  }
}
```

`buildContents()` erzeugt eine Seite mit fünf Artikeln. Nach jedem ungeradzahligen Artikel wird eine Anzeige "geladen" und auf der Seite eingefügt. Artikel werden in die Inhaltsbox eingefügt (das heißt, das {{HTMLElement("main")}} Element, das alle Inhalte der Webseite enthält), nachdem sie mit einer Methode namens `createArticle()` erstellt wurden, die wir als nächstes ansehen werden.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erstellt als auch in die Seite einfügt. Später werden wir sehen, dass diese Funktion auch eine bestehende Anzeige ersetzen kann, aber im Moment fügen wir Anzeigen zum bestehenden Inhalt hinzu.

#### Einen Artikel erstellen

Um das {{HTMLElement("article")}} Element für einen Artikel (sowie alle seine Inhalte) zu erstellen, verwenden wir die `createArticle()` Funktion, die als Eingabe einen String annimmt, der den vollständigen Text des Artikels darstellt, der zur Seite hinzugefügt werden soll.

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

Zuerst wird das `<article>` Element erstellt und seine ID wird auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und für jeden Artikel erhöht wird). Dann erstellen wir ein {{HTMLElement("Heading_Elements", "h2")}} Element für den Titel des Artikels und fügen dann das HTML aus `contents` hinzu. Schließlich wird `nextArticleID` erhöht (damit das nächste Element eine neue eindeutige ID erhält) und wir geben das neue `<article>` Element an den Aufrufer zurück.

#### Eine Anzeige erstellen

Die `loadRandomAd()` Funktion simuliert das Laden einer Anzeige und deren Hinzufügen zur Seite. Wenn Sie keinen Wert für `replaceBox` übergeben, wird ein neues Element erstellt, um die Anzeige zu enthalten; die Anzeige wird dann auf der Seite angefügt. Wenn Sie eine `replaceBox` angeben, wird diese Box als ein bestehendes Anzeigenelement behandelt; anstatt ein neues zu erstellen, wird das bestehende Element geändert, um den Stil, Inhalt und andere Daten der neuen Anzeige zu enthalten. Dies vermeidet das Risiko aufwendiger Layoutarbeiten, die durchgeführt werden könnten, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

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

Zuerst das Array `ads`. Dieses Array enthält die Daten, die benötigt werden, um jede Anzeige zu erstellen. Wir haben hier vier zur Auswahl. In einem realen Szenario kämen die Anzeigen natürlich aus einer Datenbank oder, wahrscheinlicher, einem Werbedienst, von dem Sie Anzeigen über eine API abrufen. Unsere Anforderungen sind jedoch einfach: Jede Anzeige wird durch ein Objekt mit drei Eigenschaften repräsentiert: eine Hintergrundfarbe (`bgcolor`), einen Titel (`title`) und einen Textstring (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Dies wird auf das Element gesetzt, das die Anzeige darstellt. Für neue Anzeigen, die auf der Seite angefügt werden, wird dies mit [`.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Bei der Ersetzung einer vorhandenen Anzeige wird diese auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}} Element halten, das den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}} enthalten, das den Text der Anzeige darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}} Element enthalten, das die Zeit enthält, die die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird ausgewählt durch Berechnung von `Math.floor(Math.random() * ads.length)`; das Ergebnis ist ein Wert zwischen 0 und einem weniger als der Anzahl der Anzeigen. Die entsprechende Anzeige ist jetzt als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben wird, verwenden wir das als das Anzeigenelement. Dazu beenden wir zunächst die Beobachtung des Elements durch Aufruf von [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve). Danach werden die lokalen Variablen für jedes der Elemente, die eine Anzeige bilden: die Anzeigebox selbst, der Titel, der Text und die Timer-Box, auf die entsprechenden Elemente in der vorhandenen Anzeige gesetzt.

Wenn kein Wert für `replaceBox` spezifiziert wurde, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}} Element der Anzeige wird erstellt und seine Eigenschaften werden durch Festlegung des Klassennamens auf `"ad"` festgelegt. Als nächstes wird das Anzeigentitel-Element erstellt, zusammen mit dem Text und dem Sichtbarkeitstimer; diese sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}} und ein {{HTMLElement("div")}} Element, jeweils. Diese Elemente werden dem `adBox` Element hinzugefügt.

Danach konvergieren die Codepfade erneut. Die Hintergrundfarbe der Anzeige wird auf den im neuen Anzeigendatensatz angegebenen Wert gesetzt, und die Klassen und Inhalte der Elemente werden entsprechend gesetzt.

Als Nächstes ist es an der Zeit, die benutzerdefinierten Dateneigenschaften einzurichten, um die Sichtbarkeitsdaten der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, das den Timer zeigen wird, den wir in der Anzeige präsentieren werden, um anzuzeigen, wie lange es sichtbar war, und geben es die Klasse `"timer"`. Der Anfangstext ist auf "0:00" gesetzt, um die Ausgangszeit von 0 Minuten und 0 Sekunden darzustellen, und es wird der Anzeige hinzugefügt.

Wenn wir keine bestehende Anzeige ersetzen, müssen wir das Element mit [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) an den Inhaltsbereich der Seite anhängen. Wenn wir eine Anzeige ersetzen, ist sie schon da, mit ihrem Inhalt ersetzt durch die neue Anzeige. Dann rufen wir die Methode [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) auf unserem Intersection Observer `adObserver` auf, um die Anzeige auf Änderungen ihrer Intersektion mit dem Viewport zu beobachten. Von nun an wird jedes Mal, wenn die Anzeige 100% verdeckt oder auch nur ein einziger Pixel sichtbar wird, oder die Anzeige zu 75% sichtbar in die eine oder andere Richtung geht, der [Callback des Beobachters](#umgang_mit_änderungen_der_intersektion) ausgeführt.

#### Eine bestehende Anzeige ersetzen

Der [Callback des Beobachters](#umgang_mit_änderungen_der_intersektion) überwacht Anzeigen, die 100% verdeckt werden und einen gesamten sichtbaren Zeitraum von mindestens einer Minute haben. Wenn dies passiert, wird die `replaceAd()` Funktion mit dem Element dieser Anzeige als Eingabe aufgerufen, damit die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt mit dem Aufruf von `updateAdTimer()` auf der bestehenden Anzeige, um sicherzustellen, dass ihr Timer aktuell ist. Dies stellt sicher, dass, wenn wir ihre `totalViewTime` lesen, wir den exakten Endwert für die Dauer, zu der die Anzeige für den Benutzer sichtbar war, sehen. Wir melden dann diese Daten; in diesem Fall, indem wir es in der Konsole protokollieren, aber in der realen Welt würden Sie die Informationen an die API eines Werbedienstes senden oder in einer Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#eine_anzeige_erstellen) aufrufen und das zu ersetzende Element als Eingabeparameter angeben. Wie wir zuvor gesehen haben, wird `loadRandomAd()` den Inhalt und die Daten einer bestehenden Anzeige durch eine neue Anzeige ersetzen, wenn Sie das Element einer bestehenden Anzeige als Eingabeparameter spezifizieren.

Das Element-Objekt der neuen Anzeige wird an den Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie zu experimentieren, indem Sie auf- und abscrollen und beachten Sie, wie Änderungen in der Sichtbarkeit die Timer in jeder Anzeige beeinflussen. Beachtet auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss zuerst aus dem Sichtfeld gerollt und dann wieder zurückgebracht werden) und wie die Timer pausiert werden, während das Dokument im Hintergrund geöffnet ist. Das Überdeckenze einer anderen Nachrichtsparesscheibe deckt die Zeit jedoch nicht auf über.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
