---
title: Zeitliche Steuerung der Element-Sichtbarkeit mit der Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir ein fiktives Blog, das eine Anzahl von Anzeigen enthält, die über den Inhalt der Seite verteilt sind, und verwenden dann die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Wenn eine Anzeige mehr als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der realen Nutzung entsprechen (insbesondere haben alle Artikel denselben Text und werden nicht aus einer Datenbank geladen, und es gibt nur eine Handvoll einfacher textbasierter Anzeigen, die aus einem Array ausgewählt werden), sollte dies genügend Verständnis für die API vermitteln, um schnell zu lernen, wie die Intersection Observer API auf Ihrer eigenen Website angewendet werden kann.

Es gibt einen guten Grund, warum der Begriff der Sichtbarkeitsverfolgung von Anzeigen in diesem Beispiel verwendet wird. Es stellt sich heraus, dass eine der häufigsten Anwendungen von Flash oder anderen Skripten in der Web-Werbung darin besteht, aufzuzeichnen, wie lange jede Anzeige sichtbar ist, um Abrechnung und Zahlung von Einnahmen zu ermöglichen. Ohne die Intersection Observer API wird dies mit Intervallen und Timeouts für jede einzelne Anzeige oder mit anderen Techniken durchgeführt, die dazu neigen, die Seite zu verlangsamen. Mit dieser API kann alles vom Browser optimiert werden, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Lassen Sie uns beginnen!

## Aufbau der Website

### Seitenstruktur: Das HTML

Die Struktur der Website ist nicht zu kompliziert. Wir verwenden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), um die Seite zu stylen und zu layouten, sodass wir hier ziemlich geradlinig vorgehen können:

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

Dies ist das Framework für die gesamte Seite. Oben befindet sich der Kopfbereich der Website innerhalb eines {{HTMLElement("header")}}-Blocks. Darunter definieren wir die Seitenleiste der Website als Liste von Links innerhalb eines {{HTMLElement("aside")}}-Blocks.

Schließlich folgt der Hauptteil. Hier beginnen wir mit einem leeren {{HTMLElement("main")}}-Element. Diese Box wird später durch ein Skript gefüllt.

### Gestaltung der Website mit CSS

Nachdem die Struktur der Website definiert wurde, wenden wir uns der Gestaltung der Website zu. Schauen wir uns den Stil für jede Komponente der Seite einzeln an.

#### Die Grundlagen

Wir stellen Stile für die {{HTMLElement("body")}}- und {{HTMLElement("main")}}-Elemente bereit, um den Hintergrund der Website sowie das Raster zu definieren, in das die verschiedenen Teile der Website eingefügt werden.

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

Das {{HTMLElement("body")}} der Website ist hier so konfiguriert, dass es eine der üblichen serifenlosen Schriftarten verwendet und `"aliceblue"` als Hintergrundfarbe nutzt. Dann wird die `"wrapper"`-Klasse definiert; sie umhüllt das gesamte Blog, einschließlich des Headers, der Seitenleiste und des Inhaltsbereichs (Artikel und Anzeigen).

Der Wrapper erstellt ein CSS-Grid mit zwei Spalten und zwei Zeilen. Die erste Spalte (automatisch nach ihrem Inhalt dimensioniert) wird für die Seitenleiste verwendet, und die zweite Spalte (die für den Inhaltsbereich verwendet wird) ist dimensioniert, um mindestens die Breite des Inhalts der Spalte und höchstens den ganzen restlichen verfügbaren Platz zu umfassen.

Die erste Zeile wird speziell für den Kopfbereich der Website genutzt. Die Zeilen sind auf die gleiche Weise dimensioniert wie die Spalten: die erste wird automatisch dimensioniert, und die zweite nutzt den verfügbaren Restplatz, jedoch mindestens genug, um Platz für alle Elemente darin zu bieten.

Die Breite des Wrappers ist fest auf 700px eingestellt, sodass sie in den verfügbaren Raum passt, wenn sie inline auf MDN angezeigt wird.

#### Der Header

Der Header ist recht einfach, da er in diesem Beispiel nur etwas Text enthält. Sein Stil sieht so aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} wird auf 1 gesetzt, da wir möchten, dass der Header in der obersten Zeile des Grids der Website platziert wird. Interessanter ist unsere Verwendung von {{cssxref("grid-column")}} hier; wir geben an, dass die Spalte in der ersten Spalte beginnen und in der ersten Spalte nach der letzten Gridlinie enden soll – mit anderen Worten, der Header erstreckt sich über alle Spalten im Grid. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Website darzustellen. Keiner dieser Links funktioniert in unserem Beispiel, aber sie sollen helfen, ein Blog-ähnliches Erlebnis zu vermitteln. Die Seitenleiste wird durch ein {{HTMLElement("aside")}}-Element repräsentiert und wie folgt gestylt:

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

Das Wichtigste hier ist zu beachten, dass {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, wird sie auf der rechten Seite erscheinen (obwohl einige andere Elemente geringfügig angepasst werden müssen, um die Abstände richtig zu machen). {{cssxref("grid-row")}} ist auf 2 gesetzt, um sie neben dem Hauptteil der Website zu platzieren.

#### Der Inhaltsbereich

Apropos Hauptteil der Website: Der Hauptinhalt der Website wird in einem {{HTMLElement("main")}}-Element gehalten. Der folgende Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Rasterposition so eingestellt ist, dass der Hauptinhalt in Spalte 2, Zeile 2 platziert wird.

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

Dadurch werden Artikelboxen mit weißem Hintergrund erstellt, die auf dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen 8px unteren Rand, um Dinge auseinander zu halten.

#### Anzeigen

Schließlich haben die Anzeigen die folgende anfängliche Stilierung. Einzelne Anzeigen können den Stil etwas anpassen, wie wir später sehen werden.

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

### Verknüpfung mit JavaScript

Damit kommen wir zum JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

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
  - : Ein Verweis auf das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt des {{HTMLElement("main")}}-Elements im DOM. Hier werden wir die Artikel und Anzeigen einfügen.
- `nextArticleID`
  - : Jeder Artikel erhält eine einzigartige ID-Nummer; diese Variable verfolgt die nächste zu verwendende ID, beginnend bei 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, das zur Verfolgung der derzeit sichtbaren Anzeigen verwendet wird.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer zu einer anderen Seite gewechselt hat).
- `adObserver`
  - : Wird unseren [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) enthalten, der die Schnittmenge zwischen den Anzeigen und den Begrenzungen des `<main>`-Elements nachverfolgt.
- `refreshIntervalID`
  - : Wird verwendet, um die von [`setInterval()`](/de/docs/Web/API/Window/setInterval) zurückgegebene Intervall-ID zu speichern. Dieses Intervall wird verwendet, um unsere regelmäßigen Aktualisierungen des Anzeigeninhalts auszulösen.

#### Einrichtung

Um alles einzurichten, führen wir die `startup()`-Funktion aus, sobald die Seite geladen ist:

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

Zuerst wird ein Verweis auf das den Inhalt umschließende {{HTMLElement("main")}}-Element erhalten, damit wir unseren Inhalt darin einfügen können. Dann richten wir einen Event-Listener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument versteckt oder sichtbar wird, z. B. wenn der Benutzer in seinem Browser die Registerkarte wechselt. Die Intersection Observer API berücksichtigt diese Änderung der Sichtbarkeit nicht beim Erkennen von Übergängen, da die Überschneidung nicht durch die Sichtbarkeit der Seite beeinflusst wird. Aus diesem Grund müssen wir unsere Timer anhalten, während die Seite gewechselt wird; deshalb dieser Event-Listener.

Nächste richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der die Ziel-Elemente (in unserem Fall die Anzeigen) auf Änderungen der Überschneidung im Verhältnis zum Dokument überwacht. Die Optionen sind so konfiguriert, dass sie auf Überschneidungen mit dem Viewport des Dokuments achten (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder, um das Rechteck der Schnittwurzel zu erweitern oder zu verkleinern; wir möchten die Begrenzungen des Viewports des Dokuments genau für Überschneidungszwecke abgleichen. Der `threshold` ist auf ein Array mit den Werten 0.0 und 0.75 gesetzt; dies wird dazu führen, dass unser Callback immer dann ausgeführt wird, wenn ein Ziel-Element vollständig verdeckt oder sichtbar wird (Schnittverhältnis 0.0) oder zu mindestens 75% sichtbar wird oder auf diesem Niveau darüber hinweggeht (Schnittverhältnis 0.75).

Der Beobachter, `adObserver`, wird erstellt, indem der Konstruktor von `IntersectionObserver` aufgerufen wird, wobei die Callback-Funktion `intersectionCallback` und unsere Optionen übergeben werden.

Dann rufen wir eine Funktion `buildContents()` auf, die wir später definieren werden, um tatsächlich die Artikel und Anzeigen zu erstellen und in das Dokument einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um alle notwendigen Aktualisierungen zu handhaben. Wir benötigen ein einsekündiges Aktualisierungsintervall, da wir in allen sichtbaren Anzeigen Timer zu Demonstrationszwecken anzeigen. Vielleicht benötigen Sie gar kein Intervall oder Sie handhaben es anders oder verwenden ein anderes Zeitintervall.

#### Umgang mit Änderungen der Sichtbarkeit des Dokuments

Werfen wir einen Blick auf den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. Unser Skript erhält dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer die Registerkarte wechselt. Da Intersection Observer nur die Überschneidung zwischen den Ziel-Elementen und der Überschneidungswurzel betrifft und nicht die Sichtbarkeit der Registerkarte (was ein völlig anderes Problem ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Registerkartenwechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar zu unsichtbar oder umgekehrt gewechselt ist, wird die [`document.hidden`](/de/docs/Web/API/Document/hidden)-Eigenschaft geprüft, um zu sehen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, mehrmals aufgerufen zu werden, fahren wir nur fort, wenn wir die Timer nicht bereits pausiert und die Sichtbarkeitszustände der bestehenden Anzeigen gespeichert haben.

Um die Timer zu pausieren, müssen wir nur die Anzeigen aus der Menge der sichtbaren Anzeigen (`visibleAds`) entfernen und als inaktiv markieren. Dazu speichern wir zunächst die Menge der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer zum Dokument zurückwechselt, und dann leeren wir die `visibleAds`-Menge, damit sie nicht als sichtbar behandelt werden. Dann rufen wir für jede der auszusetzen Anzeigen unsere `updateAdTimer()`-Funktion auf, die die gesamte sichtbare Zeit der Anzeige aktualisiert, dann setzen wir ihre `dataset.lastViewStarted`-Eigenschaft auf 0, was bedeutet, dass der Timer der Registerkarte nicht läuft.

Falls das Dokument gerade sichtbar geworden ist, kehren wir diesen Prozess um: Zunächst gehen wir durch `previouslyVisibleAds` und setzen für jede Anzeige `dataset.lastViewStarted` auf die aktuelle Zeit des Dokuments (in Millisekunden seit Erstellen des Dokuments), die wir mit der Methode [`performance.now()`](/de/docs/Web/API/Performance/now) erhalten. Dann wird `visibleAds` wieder auf `previouslyVisibleAds` gesetzt und Letzteres auf `null` gesetzt. Jetzt werden die Anzeigen alle neu gestartet und so konfiguriert, dass sie wissen, dass sie zur aktuellen Zeit sichtbar wurden, sodass beim nächsten Update nicht die Dauer der Zeit, die die Seite gewechselt wurde, addiert wird.

#### Umgang mit Änderungen der Überschneidung

Einmal pro Durchlauf durch die Ereignisschleife des Browsers prüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Ziel-Elemente eine der Schnittverhältnisse des Observers überschritten hat. Für jeden Beobachter wird eine Liste von Zielen, die dies getan haben, kompiliert und als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten an den Callback des Beobachters gesendet. Unser Callback, `intersectionCallback()`, sieht so aus:

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

Wie bereits erwähnt, empfängt der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Callback als Eingabe ein Array aller Ziel-Elemente des Beobachters, die mehr oder weniger sichtbar geworden sind als eine der Schnittverhältnisse des Beobachters. Wir iterieren über alle diese Einträge, die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn sich das Ziel-Element mit der Wurzel überschneidet, wissen wir, dass es gerade vom verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es mindestens 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und starten den Timer, indem wir das `dataset.lastViewStarted`-Attribut der Anzeige auf die Übergangszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen und die Anzeige zur Menge `visibleAds` hinzufügen, damit wir wissen, dass wir sie mit der Zeit bearbeiten müssen.

Wenn die Anzeige in den nicht-überschneidenden Zustand übergegangen ist, entfernen wir die Anzeige aus der Menge der sichtbaren Anzeigen. Dann haben wir ein spezielles Verhalten: Wir prüfen, ob das [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) gleich 0.0 ist; wenn dem so ist, bedeutet dies, dass das Element vollständig verdeckt wurde. Wenn dies der Fall ist und die Anzeige insgesamt mindestens eine Minute sichtbar war, rufen wir eine Funktion auf, die wir erstellen werden, namens `replaceAd()`, um die bestehende Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Benutzer im Laufe der Zeit verschiedene Anzeigen, aber die Anzeigen werden nur ersetzt, während sie nicht gesehen werden können, was zu einem geschmeidigen Erlebnis führt.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird ungefähr einmal pro Sekunde aufgerufen, dank des Aufrufs von [`setInterval()`](/de/docs/Web/API/Window/setInterval), der in der in der [oben beschriebenen](#einrichtung) Funktion `startup()` gemacht wurde. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und einen Neuaufbau zu planen, um die Timer, die wir in jeder Anzeige zeichnen werden, zu aktualisieren.

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

Das Array `redrawList` wird verwendet, um eine Liste aller Anzeigen zu führen, die während dieses Aktualisierungszyklus neu gezeichnet werden müssen, da es möglicherweise nicht genau mit der verstrichenen Zeit übereinstimmt, aufgrund der Systemaktivität oder weil Sie das Intervall auf etwas anderes als alle 1000 Millisekunden eingestellt haben.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtzahl der Millisekunden, die die Anzeige derzeit sichtbar war, zum Zeitpunkt der letzten Aktualisierung) und rufen dann `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn sie sich geändert hat, dann schieben wir die Anzeige auf die `redrawList`, damit wir wissen, dass sie beim nächsten Animationsframe aktualisiert werden muss.

Schließlich, wenn es mindestens ein Element zum Neuzeichnen gibt, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` beim nächsten Animationsframe neu zeichnen wird.

#### Aktualisieren eines Sichtbarkeitstimers einer Anzeige

Früher (siehe [Umgang mit Änderungen der Dokumentensichtbarkeit](#umgang_mit_änderungen_der_sichtbarkeit_des_dokuments) und [Umgang mit periodischen Aktionen](#umgang_mit_periodischen_aktionen)) haben wir gesehen, dass wenn wir den "gesamt sichtbaren Zeit"-Zähler einer Anzeige aktualisieren müssen, rufen wir eine Funktion namens `updateAdTimer()` auf, um dies zu tun. Diese Funktion nimmt als Eingabe das [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)-Objekt einer Anzeige. Hier ist es:

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

Um die sichtbare Zeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Datenattribute (siehe [`data-*`](/de/docs/Web/HTML/Reference/Global_attributs/data-*)) auf jeder Anzeige:

- `lastViewStarted`
  - : Die Zeit in Millisekunden, relativ zur Zeit der Erstellung des Dokuments, zu der die Anzeige das letzte Mal aktualisiert oder sichtbar wurde. 0, wenn die Anzeige zuletzt nicht als sichtbar markiert war.
- `totalViewTime`
  - : Die Gesamtanzahl an Millisekunden, die die Anzeige sichtbar war.

Diese werden über das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Attribut jeder Anzeige zugegriffen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bereitstellt, die jede benutzerdefinierte Attributsbezeichnung ihrem Wert zuordnet. Die Werte sind Zeichenfolgen, aber wir können sie ziemlich einfach in Zahlen umwandeln – tatsächlich macht JavaScript das meist automatisch, obwohl es eine Instanz gibt, bei der wir es selbst tun müssen.

Wir beginnen, indem wir die Zeit, zu welcher der vorherige Sichtbarkeitsstatus der Anzeige geprüft wurde (`adBox.dataset.lastViewStarted`), in einer lokalen Variablen namens `lastStarted` ablegen. Wir erhalten auch die aktuelle Zeit-seit-Erstellung mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` nicht null ist – bedeutet, der Timer läuft derzeit – dann berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu bestimmen, die der Timer seit der letzten Aktivierung sichtbar war. Dies wird zum aktuellen Wert der `totalViewTime` der Anzeige addiert, um die Gesamtsumme aktuell zu halten. Beachten Sie dabei den Einsatz von {{jsxref("parseFloat", "parseFloat()")}} hier; da diese Werte Zeichenfolgen sind, versucht JavaScript ohne Vorsichtsmaßnahme eine Zeichenfolgenverkettung durchzuführen anstatt einer Addition.

Schließlich wird die letzte besuchte Zeit für die Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht unabhängig davon, ob der Timer lief, als diese Funktion aufgerufen wurde, oder nicht; dies führt dazu, dass der Timer der Anzeige immer läuft, wenn diese Funktion zurückkehrt. Dieses Verhalten ergibt sich, weil diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, selbst wenn sie gerade erst sichtbar geworden ist.

#### Den Timer einer Anzeige zeichnen

Innerhalb jeder Anzeige zeichnen wir zu Demonstrationszwecken den aktuellen Wert ihrer `totalViewTime`, konvertiert in Minuten und Sekunden. Dies wird behandelt, indem das Anzeigen-Element an die `drawAdTimer()`-Funktion übergeben wird:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code sucht die Timer-Herausforderung der Anzeige anhand ihrer ID, `"timer"`, und berechnet die Anzahl der verstrichenen Sekunden, indem die `totalViewTime` der Anzeige durch 1000 geteilt wird. Dann kalkuliert es die verstreichen Minuten und Sekunden und setzt den `innerText` des Timers auf eine Zeichenfolge, die diese Zeit im Format m:ss darstellt. Die {{jsxref("String.padStart()")}}-Methode wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden bis auf zwei Ziffern geführt wird, wenn sie weniger als 10 sind.

#### Den Seitena\[inhalt erstellen

Die Funktion `buildContents()` wird vom [Startcode](#einrichtung) aufgerufen, um die Artikel und Anzeigen, die gezeigt werden sollen, auszuwählen und in das Dokument einzufügen:

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

Die Variable `loremIpsum` enthält den Text, den wir für den Körper aller unserer Artikel verwenden werden. Offensichtlich würden Sie in der realen Welt etwas Code haben, um Artikel aus einer Datenbank oder Ähnlichem zu ziehen, aber das tut es in Bezug auf unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie könnten das natürlich einfach ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeradzahligen Artikel wird eine Anzeige „geladen“ und in die Seite eingefügt. Artikel werden in das Inhaltsfeld (also das {{HTMLElement("main")}}-Element, das den gesamten Seit\-eninhalt enthält) nach der Erstellung mit einer Methode namens `createArticle()`, die wir uns als nächstes ansehen, eingefügt.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erstellt und in die Seite einfügt. Wir werden später sehen, dass dieselbe Funktion auch bestehende Anzeigen ersetzen kann, aber für jetzt fügen wir Anzeigen zum bestehenden Inhalt hinzu.

#### Einen Artikel erstellen

Um das {{HTMLElement("article")}}-Element für einen Artikel (sowie alle seine Inhalte) zu erstellen, verwenden wir die `createArticle()`-Funktion, die als Eingabe eine Zeichenfolge entgegennimmt, die der volle Text des Artikels ist, der zur Seite hinzugefügt werden soll.

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

Zunächst wird das `<article>`-Element erstellt und seine ID auf den einzigartigen Wert `nextArticleID` (der bei 1 beginnt und für jede Artikel einhergeht) gesetzt. Dann erstellen und fügen wir ein {{HTMLElement("Heading_Elements", "h2")}}-Element für den Artikeltitel hinzu und fügen das HTML von `contents` an nach. Schließlich wird `nextArticleID` inkrementiert (damit das nächste Element eine neue eindeutige ID erhält) und wir geben das neue `<article>`-Element an den Aufrufer zurück.

#### Eine Anzeige erstellen

Die Funktion `loadRandomAd()` simuliert das Laden einer Anzeige und das Zusatz zur Seite. Wenn Sie keinen Wert für `replaceBox` angeben, wird ein neues Element erstellt, um die Anzeige zu enthalten; die Anzeige wird dann der Seite hinzugefügt. Wenn Sie eine `replaceBox` angeben, wird dieser Kasten als vorhandenes Anzeigen-Element behandelt; anstatt eine neue zu erstellen, wird der bestehende Kasten geändert, um den neuen Stil, Inhalt und andere Daten der Anzeige zu enthalten. Dies vermeidet das Risiko von aufwendiger Layoutarbeit bei der Aktualisierung der Anzeige, die erfolgen könnte, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

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

Zuerst kommt das Array `ads`. Dieses Array enthält die Daten, die benötigt werden, um jede Anzeige zu erstellen. Wir haben hier vier zur Auswahl. In einem realen Szenario würden die Anzeigen natürlich aus einer Datenbank oder eher einem Werbedienst kommen, über den Anzeigen durch eine API abgerufen werden. Unsere Anforderungen sind jedoch einfach: Jede Anzeige wird durch ein Objekt dargestellt, das drei Eigenschaften hat: eine Hintergrundfarbe (`bgcolor`), einen Titel (`title`) und einen Text String (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Dies wird auf das Element gesetzt, das die Anzeige repräsentiert. Für neue Anzeigen, die der Seite hinzugefügt werden, wird dies unter Verwendung von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Beim Ersetzen einer bestehenden Anzeige ist dies auf das angegebene Anzeigen-Element (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}}-Element halten, das den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}}-Element halten, das den Textkörper der Anzeige repräsentiert.
- `timerElem`
  - : Wird das {{HTMLElement("div")}}-Element halten, das die Zeit, die die Anzeige bisher sichtbar war, enthält.

Eine zufällige Anzeige wird ausgewählt durch Berechnung von `Math.floor(Math.random() * ads.length)`; das Ergebnis ist ein Wert zwischen 0 und eins weniger als die Anzahl der Anzeigen. Die entsprechende Anzeige ist nun als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben ist, verwenden wir diesen als Anzeigen-Element. Um dies zu tun, beginnen wir mit dem Beobachtungsende des Elements durch Aufrufen von [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve). Dann werden die lokalen Variablen für jedes der Elemente, die eine Anzeige ausmachen: die Anzeigen-Box selbst, der Titel, der Körper und die Timer-Box, alle auf die entsprechenden Elemente in der bestehenden Anzeige gesetzt.

Wenn kein Wert für `replaceBox` spezifiziert ist, erstellen wir ein neues Anzeigen-Element. Das neue {{HTMLElement("div")}}-Element der Anzeige wird erstellt und seine Eigenschaften werden durch Setzen seines Klassennamens auf `"ad"` etabliert. Als nächstes wird das Anzeige-Titel-Element erstellt, zusammen mit dem Körper und dem Sichtbarkeitstimer; diese sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}}, und ein {{HTMLElement("div")}}-Element. Diese Elemente werden zum `adBox`-Element hinzugefügt.

Danach konvergieren die Codepfade erneut. Die Hintergrundfarbe der Anzeige wird auf den im neuen Anzeigen-Datensatz angegebenen Wert gesetzt, und die Klassen und Inhalte der Elemente werden entsprechend gesetzt.

Dann ist es an der Zeit, die benutzerdefinierten Dateneigenschaften einzurichten, um die Sichtbarkeitsdaten der Anzeige durch Setzen von `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 zu verfolgen.

Schließlich setzen wir die ID des `<div>`, der den Timer anzeigen wird, den wir in der Anzeige präsentieren werden, wie lange er sichtbar war, und geben ihm die Klasse `"timer"`. Der anfängliche Text wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen und wird der Anzeige hinzugefügt.

Wenn wir eine bestehende Anzeige nicht ersetzen, müssen wir das Element mit [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) in den Inhaltsbereich der Seite einfügen. Wenn wir jedoch eine Anzeige ersetzen, ist sie bereits da, mit ihren Inhalten durch die neue Anzeige ersetzt. Dann rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf unserem Intersection Observer, `adObserver`, auf, um die Anzeige auf Änderungen der Überschneidung mit dem Viewport zu beobachten. Von nun an wird jedes Mal, wenn die Anzeige 100% verdeckt oder selbst nur ein einzelnes Pixel sichtbar wird, oder die Anzeige auf 75% sichtbar in eine oder andere Weise kommt, wird der [Callback des Beobachters](#umgang_mit_änderungen_der_überschneidung) ausgeführt.

#### Eine bestehende Anzeige ersetzen

Unser [Callback des Beobachters](#umgang_mit_änderungen_der_überschneidung) hält Ausschau nach Anzeigen, die 100% verdeckt werden und eine Gesamtansichtszeit von mindestens einer Minute haben. Wenn das geschieht, wird die `replaceAd()`-Funktion mit dem Element der betroffenen Anzeige als Eingabe aufgerufen, sodass die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt, indem es `updateAdTimer()` auf der bestehenden Anzeige aufruft, um sicherzustellen, dass sein Timer auf dem neuesten Stand ist. Dies stellt sicher, dass wenn wir ihre `totalViewTime` lesen, wir den genauen Endwert sehen, wie lange die Anzeige dem Benutzer sichtbar war. Wir berichten dann diese Daten; in diesem Fall, indem wir sie an die Konsole protokollieren, aber in der realen Welt würden Sie die Informationen mittels einer Werbe-Service-API oder in einer Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#eine_anzeige_erstellen) aufrufen und das zu ersetzende Anzeigen-Element als Eingabeparameter angeben. Wie wir zuvor gesehen haben, wird `loadRandomAd()` die Inhalte und Daten mit einer neuen Anzeige ersetzen, wenn Sie ein bestehendes Anzeigen-Element als Eingabeparameter angeben.

Das neue Anzeigen-Element wird an den Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie, herumzuspielen, indem Sie nach oben und unten scrollen und beobachten Sie, wie sich Änderungen der Sichtbarkeit auf die Timer in jeder Anzeige auswirken. Beobachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss zuerst aus dem Blick gescrollt und dann wieder zurück) und wie die Timer pausieren, während das Dokument in den Hintergrund gelagert wird. Das Überdecken des Browsers mit einem anderen Fenster pausiert die Timer jedoch nicht.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
