---
title: Timing-Element-Sichtbarkeit mit der Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir ein Beispiel-Blog, das eine Reihe von Anzeigen zwischen den Inhalten der Seite enthält, und verwenden dann die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Wenn eine Anzeige eine Minute Sichtbarkeit übersteigt, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der echten Nutzung entsprechen (insbesondere, da alle Artikel denselben Text haben und nicht aus einer Datenbank geladen wurden, und es nur eine Handvoll einfacher Textanzeigen gibt, die aus einem Array ausgewählt werden), sollte dies ausreichen, um das Verständnis der API zu fördern, sodass Sie schnell lernen, wie Sie die Intersection Observer API auf Ihrer eigenen Website anwenden können.

Es gibt einen guten Grund, warum das Konzept der Verfolgung der Sichtbarkeit von Anzeigen in diesem Beispiel verwendet wird. Es stellt sich heraus, dass eine der häufigsten Anwendungen von Flash oder anderen Skripten in der Webwerbung darin besteht, aufzuzeichnen, wie lange jede Anzeige sichtbar ist, um Abrechnung und Zahlung von Einnahmen durchzuführen. Ohne die Intersection Observer API wird dies letztendlich mit Intervallen und Timeouts für jede einzelne Anzeige oder anderen Techniken durchgeführt, die dazu neigen, die Seite zu verlangsamen. Mit dieser API kann der Browser alles optimieren, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Lassen Sie uns beginnen!

## Erstellen der Website

### Seitenstruktur: Das HTML

Die Struktur der Seite ist nicht zu kompliziert. Wir verwenden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), um die Website zu stylen und anzuordnen, sodass wir hier ziemlich direkt vorgehen können:

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

Dies ist das Gerüst für die gesamte Seite. Oben befindet sich der Header-Bereich der Seite, enthalten in einem {{HTMLElement("header")}} Block. Darunter definieren wir die Seitenleiste der Seite als Liste von Links innerhalb eines {{HTMLElement("aside")}} Blocks.

Zuletzt kommt der Hauptteil. Hier beginnen wir mit einem leeren {{HTMLElement("main")}} Element. Diese Box wird später per Skript gefüllt.

### Styling der Website mit CSS

Mit der definierten Struktur der Seite wenden wir uns nun dem Styling zu. Schauen wir uns den Stil für jede Komponente der Seite individuell an.

#### Die Grundlagen

Wir bieten Stile für die {{HTMLElement("body")}} und {{HTMLElement("main")}} Elemente an, um den Hintergrund der Seite und das Grid, in dem die verschiedenen Teile der Seite platziert werden, zu definieren.

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

Das {{HTMLElement("body")}} der Seite wird hier so konfiguriert, dass eine der zahlreichen üblichen sans-serif Schriftarten verwendet wird, und `"aliceblue"` als Hintergrundfarbe. Dann wird die Klasse `"wrapper"` definiert; sie umschließt das gesamte Blog einschließlich des Headers, der Seitenleiste und des Body-Inhalts (Artikel und Anzeigen).

Der Wrapper baut ein CSS Grid mit zwei Spalten und zwei Zeilen. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Seitenleiste genutzt, und die zweite Spalte (die für den Body-Inhalt verwendet wird) wird dimensioniert, um mindestens die Breite des Inhalts der Spalte und höchstens den gesamten verbleibenden verfügbaren Raum zu haben.

Die erste Zeile wird speziell für den Header der Seite verwendet. Die Zeilen sind auf die gleiche Weise dimensioniert wie die Spalten: die erste wird automatisch dimensioniert, und die zweite nutzt den verbleibenden Raum, aber mindestens genug Raum, um allen darin befindlichen Elementen Platz zu bieten.

Die Breite des Wrappers ist auf 700px fixiert, damit er in den verfügbaren Platz passt, wenn er inline auf MDN präsentiert wird.

#### Der Header

Der Header ist ziemlich einfach, da er für dieses Beispiel nur etwas Text enthält. Sein Stil sieht so aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} ist auf 1 gesetzt, da wir möchten, dass der Header in der obersten Zeile des Grids der Seite platziert wird. Interessanter ist unsere Verwendung von {{cssxref("grid-column")}} hier; hier spezifizieren wir, dass wir möchten, dass die Spalte in der ersten Spalte beginnt und in der Spalte direkt hinter der letzten Grid-Linie endet—mit anderen Worten, der Header erstreckt sich über alle Spalten innerhalb des Grids. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten der Website zu präsentieren. Keiner von ihnen funktioniert in unserem Beispiel hier, aber sie existieren, um das Erlebnis eines Blogs darzustellen. Die Seitenleiste wird durch ein {{HTMLElement("aside")}} Element repräsentiert und wird wie folgt gestylt:

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

Das Wichtigste, was hier zu beachten ist, ist, dass die {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint sie auf der rechten Seite (obwohl einige andere Elemente Anpassungen an ihren Rändern benötigen, um den Abstand genau richtig zu machen). Die {{cssxref("grid-row")}} ist auf 2 gesetzt, um sie neben dem Body der Seite zu platzieren.

#### Der Content-Body

Apropos Body der Seite: der Hauptinhalt der Seite wird in einem {{HTMLElement("main")}} Element aufbewahrt. Der folgende Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Grid-Position so festgelegt ist, dass der Body-Inhalt in Spalte 2, Reihe 2, platziert wird.

#### Artikel

Jeder Artikel ist in einem {{HTMLElement("article")}} Element enthalten, das so gestylt ist:

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

Dies erstellt Artikelboxen mit einem weißen Hintergrund, die oben auf dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen 8px unteren Rand, um die Dinge auseinander zu halten.

#### Anzeigen

Schließlich haben die Anzeigen folgendes Anfangsstyling. Einzelne Anzeigen können den Stil teilweise anpassen, wie wir später sehen werden.

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

Nichts hier ist magisch. Es ist relativ einfache CSS.

### Mit JavaScript alles zusammenfügen

Das bringt uns zum JavaScript Code, der alles zum Laufen bringt. Lassen Sie uns mit den globalen Variablen beginnen:

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
  - : Ein Verweis auf das {{HTMLElement("main")}} Element's [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt im DOM. Hier fügen wir die Artikel und Anzeigen ein.
- `nextArticleID`
  - : Jedem Artikel wird eine eindeutige ID-Nummer zugewiesen; diese Variable spürt die nächste zu verwendende ID auf, beginnend bei 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, das wir verwenden, um die derzeit sichtbaren Anzeigen auf dem Bildschirm zu verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer zu einer anderen Seite getabbt hat).
- `adObserver`
  - : Wird unseren [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) halten, der die Schnittmenge zwischen den Anzeigen und den Grenzen des `<main>` Elements verfolgt.
- `refreshIntervalID`
  - : Wird verwendet, um die von [`setInterval()`](/de/docs/Web/API/SetInterval) zurückgegebene Intervall-ID zu speichern. Dieses Intervall wird verwendet, um unsere periodischen Aktualisierungen der Anzeiginhalte auszulösen.

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

Zuerst wird ein Verweis auf das content wrapping {{HTMLElement("main")}} Element eingeholt, sodass wir unseren Inhalt darin einfügen können. Dann richten wir einen Ereignis-Listener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument versteckt oder sichtbar wird, zum Beispiel, wenn der Benutzer seine Tabs im Browser wechselt. Die Intersection Observer API berücksichtigt dies nicht, wenn sie Schnittmengen erkennt, da Schnittmengen nicht von der Sichtbarkeit der Seite betroffen sind. Daher müssen wir unsere Timer anhalten, während die Seite ausgeblendet ist; daher dieser Ereignislistener.

Als Nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der die Zielelemente (in unserem Fall Anzeigen) auf Schnittmusteränderungen relativ zum Dokument überwacht. Die Optionen sind so konfiguriert, dass sie Schnittpunkte mit dem Viewport des Dokuments beobachten (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder, um das Rechteck der Schnittmenge zu erweitern oder zu verkleinern; wir möchten die Grenzen des Viewports des Dokuments genau für Schnittzwecke abgleichen. Und die `threshold` ist auf ein Array mit den Werten 0,0 und 0,75 gesetzt; dies bewirkt, dass unser Callback ausgeführt wird, wann immer ein gezieltes Element vollständig verdeckt oder erstmals beginnt, sichtbar zu werden (Schnittverhältnis 0,0) oder durch 75% sichtbar in beide Richtungen wird (Schnittverhältnis 0,75).

Der Observer, `adObserver`, wird erstellt, indem der Konstruktor von `IntersectionObserver` aufgerufen wird, wobei die Callback-Funktion `intersectionCallback` und unsere Optionen übergeben werden.

Wir rufen dann eine Funktion `buildContents()` auf, die wir später definieren werden, um die Artikel und Anzeigen, die wir präsentieren möchten, tatsächlich zu generieren und in das Dokument einzufügen.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um alle erforderlichen Aktualisierungen durchzuführen. Wir benötigen eine eine Sekunde lange Aktualisierung, da wir in allen sichtbaren Anzeigen Timer anzeigen, um das Beispiel zu veranschaulichen. Sie benötigen möglicherweise überhaupt kein Intervall, oder Sie tun es auf andere Weise oder in einem anderen Zeitintervall.

#### Umgang mit Sichtbarkeitsänderungen des Dokuments

Werfen wir einen Blick auf den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis. Unser Skript erhält dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer die Tabs wechselt. Da der Intersection Observer sich nur um den Schnittpunkt zwischen den gezielten Elementen und der Schnittwurzel kümmert und nicht um die Sichtbarkeit der Tab-Ansicht (was eine völlig andere Frage ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Tab-Wechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar auf unsichtbar oder umgekehrt gewechselt hat, wird die Eigenschaft [`document.hidden`](/de/docs/Web/API/Document/hidden) überprüft, um zu sehen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, mehrmals aufgerufen zu werden, fahren wir nur fort, wenn wir die Timer noch nicht angehalten und die Sichtbarkeitszustände der vorhandenen Anzeigen gespeichert haben.

Um die Timer anzuhalten, müssen wir nur die Anzeigen aus der Menge der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv kennzeichnen. Dazu beginnen wir, indem wir die Menge der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds` speichern, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer wieder in das Dokument zurückkehrt. Dann leeren wir die Menge `visibleAds`, damit sie nicht mehr als sichtbar behandelt werden. Für jede der Anzeigen, die ausgesetzt werden, rufen wir unsere Funktion `updateAdTimer()` auf, die die Aktualisierung des Gesamtanzeigezeit-Zählers der Anzeige behandelt. Dann setzen wir ihre Eigenschaft `dataset.lastViewStarted` auf 0, was anzeigt, dass der Timer nicht läuft.

Sollte das Dokument gerade sichtbar geworden sein, kehren wir diesen Prozess um: zuerst bearbeiten wir `previouslyVisibleAds` und setzen das `dataset.lastViewStarted` jedes Elements auf die aktuelle Dokumentzeit (in Millisekunden seit der Erstellung des Dokuments) mithilfe der Methode [`performance.now()`](/de/docs/Web/API/Performance/now). Dann setzen wir `visibleAds` zurück auf `previouslyVisibleAds` und letztere auf `null`. Jetzt sind alle Anzeigen erneut gestartet und so konfiguriert, dass sie wissen, dass sie zur aktuellen Zeit sichtbar wurden, sodass sie beim nächsten Update nicht die Dauer der Zeit addieren, in der die Seite ausgeblendet war.

#### Umgang mit Schnittmusteränderungen

Einmal pro Durchlauf der Ereignisschleife des Browsers überprüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Zielelemente durch eines der Schnittmusterverhältnis-Schwellenwerte des Observers hindurchgegangen ist. Für jeden Observer wird eine Liste der Ziele erstellt, die dies getan haben, und als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten an den Callback des Observers gesendet. Unser Callback, `intersectionCallback()`, sieht so aus:

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

Wie bereits erwähnt, erhält der Callback des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) als Eingang ein Array aller gezielter Elemente des Beobachters, die entweder sichtbarer oder weniger sichtbar als eines der Schnittmusterverhältnisse des Observers geworden sind. Wir iterieren über jedes dieser Einträge—which sind vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry). Wenn das Ziel-Element mit der Wurzel schneidet, wissen wir, dass es gerade vom verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es mindestens zu 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und starten den Timer, indem wir das `dataset.lastViewStarted` Attribut der Anzeige auf die Übergangszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen und die Anzeige dann der Menge `visibleAds` hinzufügen, damit wir wissen, dass sie bei fortschreitender Zeit verarbeitet werden muss.

Sollte die Anzeige in den Zustand "nicht schneidend" übergegangen sein, entfernen wir sie aus der Menge der sichtbaren Anzeigen. Dann haben wir ein spezielles Verhalten: Wir prüfen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) gleich 0.0 ist; wenn dies der Fall ist, bedeutet das, dass das Element vollständig verdeckt wurde. Sollte dies der Fall sein und die Anzeige insgesamt mindestens eine Minute lang sichtbar gewesen sein, rufen wir eine Funktion namens `replaceAd()` auf, um die vorhandene Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Benutzer im Laufe der Zeit eine Vielzahl von Anzeigen, aber die Anzeigen werden nur während der Zeit ersetzt, in der sie nicht gesehen werden können, um ein reibungsloses Erlebnis zu gewährleisten.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler `handleRefreshInterval()` wird etwa einmal pro Sekunde dank des Aufrufs von [`setInterval()`](/de/docs/Web/API/SetInterval) in der [Einstiegsfunktion](#einrichtung) ausgeführt. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und eine Neuzeichnung einzuplanen, um die Timer zu aktualisieren, die wir innerhalb jeder Anzeige zeichnen.

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

Das Array `redrawList` wird verwendet, um eine Liste aller Anzeigen zu führen, die während dieses Aktualisierungszyklus neu gezeichnet werden müssen, da dies möglicherweise nicht genau der verstrichenen Zeit entspricht, aufgrund von Systemaktivität oder weil Sie das Intervall auf etwas anderes als 1000 Millisekunden eingestellt haben.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtanzahl der Millisekunden, die die Anzeige bisher sichtbar war, ab dem letzten Mal, als sie aktualisiert wurde) und rufen `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn sich diese ändert, fügen wir die Anzeige der `redrawList` hinzu, sodass wir wissen, dass sie während des nächsten Animationsrahmens aktualisiert werden muss.

Schließlich, wenn es mindestens ein Element zu neu zeichnen gibt, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsrahmens neu zeichnet.

#### Aktualisieren des Sichtzeittimers einer Anzeige

Vorher haben wir gesehen (siehe [Umgang mit Sichtbarkeitsänderungen des Dokuments](#umgang_mit_sichtbarkeitsänderungen_des_dokuments) und [Umgang mit periodischen Aktionen](#umgang_mit_periodischen_aktionen)), dass wir, wenn wir den "Gesamtsichtzeit"-Zähler einer Anzeige aktualisieren müssen, eine Funktion namens `updateAdTimer()` aufrufen, um dies zu tun. Diese Funktion nimmt als Eingabedatenobjekt eine Anzeige vom Typ [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement). Hier ist sie:

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

Um die Sichtzeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Datenattribute (siehe [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)) auf jeder Anzeige:

- `lastViewStarted`
  - : Die Zeit in Millisekunden relativ zur Zeit, zu der das Dokument erstellt wurde, zu der die Sichtbarkeitszählung der Anzeige zuletzt aktualisiert wurde oder die Anzeige zuletzt sichtbar geworden ist. 0, wenn die Anzeige zum letzten Mal, als sie geprüft wurde, nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtzahl der Millisekunden, in denen die Anzeige sichtbar war.

Diese greifen wir über das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) Attribut jeder Anzeige ab, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bereitstellt, die jedem benutzerdefinierten Attributnamen seinen Wert zuordnet. Die Werte sind Zeichenfolgen, aber wir können sie leicht in Zahlen umwandeln—tatsächlich macht JavaScript dies im Allgemeinen automatisch, obwohl wir eine Instanz haben werden, in der wir dies selbst tun müssen.

Wir beginnen, indem wir die Zeit abrufen, zu der die vorherige Sichtbarkeitsstatusprüfung der Anzeige (`adBox.dataset.lastViewStarted`) in eine lokale Variable namens `lastStarted` verschoben wurde. Wir erhalten auch den aktuellen Wert "Zeit-seit-Erstellung" mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` ungleich null ist—was bedeutet, dass der Timer derzeit läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu bestimmen, die der Timer seit der letzten Sichtbarkeit sichtbar war. Dies wird dem aktuellen Wert der `totalViewTime` der Anzeige hinzugefügt, um das Gesamtbild auf den neuesten Stand zu bringen. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; da diese Werte Zeichenfolgen sind, versucht JavaScript ohne diesen, eine Zeichenfolgenverkettung anstelle einer Addition durchzuführen.

Schließlich wird die letzte Anzeigezeit der Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht unabhängig davon, ob der Timer zum Zeitpunkt des Funktionsaufrufs lief oder nicht; dies bewirkt, dass der Timer der Anzeige immer läuft, wenn diese Funktion beendet wird. Dies macht Sinn, weil diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, auch wenn sie gerade erst sichtbar geworden ist.

#### Zeichnen eines Anzeigetimers

Innerhalb jeder Anzeige zeichnen wir zu Demonstrationszwecken den aktuellen Wert ihrer `totalViewTime`, umgewandelt in Minuten und Sekunden. Dies erfolgt, indem das Element der Anzeige in die `drawAdTimer()` Funktion übergeben wird:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige anhand seiner ID, `"timer"`, und berechnet die Anzahl der verstrichenen Sekunden, indem die `totalViewTime` der Anzeige durch 1000 geteilt wird. Anschließend werden die verstrichenen Minuten und Sekunden berechnet, bevor der Timer's [`innerText`](/de/docs/Web/API/HTMLElement/innerText) auf einen Zeichenfolgenwert eingestellt wird, der diese Zeit in der Form m:ss darstellt. Die Methode {{jsxref("String.padStart()")}} wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Stellen aufgefüllt wird, wenn sie weniger als 10 beträgt.

#### Erstellen des Seiteninhalts

Die `buildContents()` Funktion wird vom [Startup-Code](#einrichtung) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, die präsentiert werden sollen:

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

Die Variable `loremIpsum` enthält den Text, den wir für den Body aller unserer Artikel verwenden werden. Offensichtlich würden Sie in der realen Welt einen Code verwenden, um Artikel aus einer Datenbank oder ähnlichem abzurufen, aber dies erfüllt die Aufgabe für unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie könnten das natürlich leicht ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeraden Artikel wird eine Anzeige "geladen" und in die Seite eingefügt. Artikel werden in die contentBox (d.h. das {{HTMLElement("main")}} Element, das den gesamten Seiteninhalt enthält) eingefügt, nachdem sie mit einer Methode namens `createArticle()` erstellt wurden, die wir uns als nächstes ansehen werden.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erzeugt als auch in die Seite einfügt. Später werden wir sehen, dass dieselbe Funktion auch eine vorhandene Anzeige ersetzen kann, aber derzeit werden Anzeigen an den vorhandenen Inhalt angehängt.

#### Erstellen eines Artikels

Um das {{HTMLElement("article")}} Element für einen Artikel zu erstellen (sowie alle seine Inhalte), verwenden wir die `createArticle()` Funktion, die als Eingabe eine Zeichenfolge, die der vollständige Text des Artikels ist, erhält, der der Seite hinzugefügt werden soll.

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

Zunächst wird das `<article>` Element erstellt und seine ID auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und für jeden Artikel erhöht wird). Dann erstellen und fügen wir ein {{HTMLElement("Heading_Elements", "h2")}} Element für den Titel des Artikels hinzu und anschließend fügen wir den HTML-Inhalt von `contents` hinzu. Schließlich wird `nextArticleID` erhöht (sodass das nächste Element eine neue, eindeutige ID erhält), und wir geben das neue `<article>` Element an den Aufrufer zurück.

#### Erstellung einer Anzeige

Die `loadRandomAd()` Funktion simuliert das Laden einer Anzeige und das Hinzufügen zu der Seite. Wenn Sie keinen Wert für `replaceBox` übergeben, wird ein neues Element erstellt, um die Anzeige zu enthalten; die Anzeige wird dann an die Seite angehängt. Wenn Sie eine `replaceBox` angeben, wird diese Box als bestehendes Anzeigenelement behandelt; anstatt ein neues zu erstellen, wird das bestehende Element so geändert, dass es den Stil, Inhalt und andere Daten der neuen Anzeige enthält. Dies vermeidet das Risiko langer Layoutarbeiten, die beim Aktualisieren der Anzeige auftreten könnten, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

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

Zuerst ist das Array `ads`. Dieses Array enthält die Daten, die zum Erstellen jeder Anzeige benötigt werden. Wir haben hier vier zur zufälligen Auswahl. Natürlich stammen in einem realen Szenario die Anzeigen aus einer Datenbank oder, was wahrscheinlicher ist, einem Werbedienst, von dem Sie Anzeigen über eine API abrufen. Unsere Anforderungen sind jedoch einfach: Jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: einer Hintergrundfarbe (`bgcolor`), einem Titel (`title`) und einem Body-Text-String (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Dies wird auf das Element gesetzt, das die Anzeige darstellt. Bei neuen Anzeigen, die an die Seite angehängt werden, wird dies mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Beim Ersetzen einer vorhandenen Anzeige wird dies auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}} Element halten, das den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}} halten, das den Textinhalt der Anzeige darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}} Element halten, das die Zeit enthält, die die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird ausgewählt, indem `Math.floor(Math.random() * ads.length)` berechnet wird; das Ergebnis ist ein Wert zwischen 0 und einer weniger als die Anzahl der Anzeigen. Die entsprechende Anzeige ist jetzt als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben wird, verwenden wir diesen als Anzeigenelement. Dazu beenden wir die Beobachtung des Elements, indem wir [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) aufrufen. Dann setzen wir die lokalen Variablen für jedes der Elemente, aus dem sich eine Anzeige zusammensetzt: die Anzeigebox selbst, den Titel, den Body und die Timer-Box auf die entsprechenden Elemente in der bestehenden Anzeige.

Wird kein Wert für `replaceBox` angegeben, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}} Element der Anzeige wird erstellt und seine Eigenschaften werden festgelegt, indem der Klassenname auf `"ad"` gesetzt wird. Als Nächstes werden das Anzeigetitel-Element erstellt, sowie der Body und der Sichtbarkeits-Timer; diese sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}} und ein {{HTMLElement("div")}} Element, die entsprechend der `adBox` hinzugefügt werden.

Danach konvergieren die Codeschienen wieder. Die Hintergrundfarbe der Anzeige wird auf den im neuen Anzeigen-Datensatz festgelegten Wert gesetzt, und die Klassen und Inhalte der Elemente werden ebenfalls entsprechend festgelegt.

Als Nächstes ist es an der Zeit, die benutzerdefinierten Dateneigenschaften einzurichten, um die Sichtbarkeitsdaten der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, in dem der Timer angezeigt wird, den wir in der Anzeige präsentieren werden, um zu zeigen, wie lange er sichtbar war, und geben ihm die Klasse `"timer"`. Der anfängliche Text wird auf "0:00" gesetzt, um die Ausgangszeit von 0 Minuten und 0 Sekunden darzustellen, und er wird an die Anzeige angehängt.

Wenn wir eine bestehende Anzeige nicht ersetzen, müssen wir das Element unter Verwendung von [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) an den Inhaltsbereich der Seite anhängen. Wenn wir eine Anzeige ersetzen, ist sie bereits da, mit ihren Inhalten durch die neue Anzeige ersetzt. Dann rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) Methode auf unserem Intersection Observer `adObserver` auf, um die Anzeige zu überwachen, falls Verkehrsschnittänderungen auftreten. Von nun an wird jedes Mal, wenn die Anzeige 100% verdeckt wird oder ein einziger Pixel sichtbar wird oder die Anzeige in irgendeiner Weise durch 75% sichtbar wird, der [Callback des Observers](#umgang_mit_schnittmusteränderungen) ausgeführt.

#### Ersetzen einer bestehenden Anzeige

Unser [Callback des Observers](#umgang_mit_schnittmusteränderungen) behält Anzeigen im Auge, die 100% verdeckt werden und eine Gesamtanzeigezeit von mindestens einer Minute haben. In diesem Fall wird die Funktion `replaceAd()` mit diesem Anzeigeelement als Eingabe aufgerufen, sodass die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt damit, `updateAdTimer()` auf der bestehenden Anzeige aufzurufen, um sicherzustellen, dass der Timer der Anzeige auf dem neuesten Stand ist. Dies stellt sicher, dass wir beim Lesen ihrer `totalViewTime` den exakten Endwert dafür sehen, wie lange die Anzeige für den Benutzer sichtbar war. Wir protokollieren dann diese Daten; in diesem Fall durch Ausgeben ins Log der Konsole, aber in der realen Welt würden Sie die Informationen an eine API eines Werbedienstes senden oder in einer Datenbank speichern.

Dann laden wir eine neue Anzeige durch Aufrufen von [`loadRandomAd()`](#erstellung_einer_anzeige), wobei die zu ersetzende Anzeige als Eingabeparameter angegeben wird. Wie wir bereits gesehen haben, wird `loadRandomAd()` eine bestehende Anzeige durch Inhalt und entsprechende Daten einer neuen Anzeige ersetzen, wenn Sie das bestehende Anzeigenelement als Eingabeparameter angeben.

Das neue Elementobjekt der Anzeige wird an den Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie, durch Herauf- und Herunterscrollen zu experimentieren, und beachten Sie, wie sich Änderungen der Sichtbarkeit auf die Timer in jeder Anzeige auswirken. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss erst aus dem Blickfeld gescrollt und dann wieder zurückgeblendet werden), und wie die Timer pausieren, während das Dokument in den Hintergrund des Tabs geschoben wird. Das Abdecken des Browsers mit einem anderen Fenster pausiert jedoch nicht die Timer.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
