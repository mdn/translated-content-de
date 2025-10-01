---
title: Timing element visibility with the Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel bauen wir einen Beispiel-Blog, der eine Anzahl von Anzeigen enthält, die über den Inhalt der Seite verteilt sind. Dann verwenden wir die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Wenn eine Anzeige länger als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht dem realen Gebrauch entsprechen werden (insbesondere haben die Artikel alle denselben Text und werden nicht aus einer Datenbank geladen, und es gibt nur ein paar einfache Textanzeigen, die aus einem Array ausgewählt werden), sollte dies genug Verständnis der API bieten, um schnell zu lernen, wie Sie die Intersection Observer API auf Ihre eigene Seite anwenden können.

Es gibt einen guten Grund, warum die Idee, die Sichtbarkeit von Anzeigen zu verfolgen, in diesem Beispiel verwendet wird. Es stellt sich heraus, dass eine der häufigsten Verwendungen von Flash oder anderen Skripten in der Webwerbung darin besteht, aufzuzeichnen, wie lange jede Anzeige sichtbar ist, um die Abrechnung und Zahlung von Einnahmen zu steuern. Ohne die Intersection Observer API wird dies häufig durch Intervalle und Timeouts für jede einzelne Anzeige oder andere Techniken erledigt, die dazu neigen, die Seite zu verlangsamen. Mit dieser API kann alles durch den Browser optimiert werden, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Lassen Sie uns beginnen!

## Die Website erstellen

### Seitenstruktur: Das HTML

Die Struktur der Seite ist nicht allzu kompliziert. Wir werden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) verwenden, um die Seite zu gestalten und anzuordnen, sodass wir hier ziemlich direkt vorgehen können:

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

Dies ist das Grundgerüst für die gesamte Seite. Oben befindet sich der Header-Bereich der Seite, der in einem {{HTMLElement("header")}}-Block enthalten ist. Darunter definieren wir die Seitenleiste als Liste von Links innerhalb eines {{HTMLElement("aside")}}-Blocks.

Schließlich kommt der Hauptteil. Wir beginnen hier mit einem leeren {{HTMLElement("main")}}-Element. Dieses Feld wird später mit einem Skript gefüllt.

### Die Seite mit CSS gestalten

Mit der definierten Struktur der Seite wenden wir uns der Gestaltung der Seite zu. Schauen wir uns den Stil für jede Komponente der Seite einzeln an.

#### Die Grundlagen

Wir stellen Stile für die {{HTMLElement("body")}}- und {{HTMLElement("main")}}-Elemente bereit, um den Hintergrund der Seite sowie das Raster zu definieren, in dem die verschiedenen Teile der Seite platziert werden.

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

Das {{HTMLElement("body")}} der Seite wird hier so konfiguriert, dass eines von mehreren häufigen serifenlosen Schriftarten verwendet wird und `"aliceblue"` als Hintergrundfarbe eingestellt ist. Dann wird die `"wrapper"`-Klasse definiert, die den gesamten Blog umschließt, einschließlich Header, Seitenleiste und Body-Inhalt (Artikel und Anzeigen).

Der Wrapper erstellt ein CSS-Raster mit zwei Spalten und zwei Zeilen. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Seitenleiste verwendet und die zweite Spalte (die für den Body-Inhalt verwendet wird) ist so dimensioniert, dass sie mindestens die Breite des Inhalts der Spalte und höchstens den gesamten verbleibenden verfügbaren Platz hat.

Die erste Zeile wird speziell für den Header der Seite verwendet. Die Zeilen sind auf die gleiche Weise wie die Spalten dimensioniert: die erste wird automatisch dimensioniert und die zweite verwendet den verbleibenden Platz, bietet aber mindestens genügend Platz, um allen darin befindlichen Elementen Raum zu geben.

Die Breite des Wrappers ist auf 700px festgelegt, damit er in den verfügbaren Raum passt, wenn er unten auf MDN in der Reihe dargestellt wird.

#### Der Header

Der Header ist ziemlich einfach, da er in diesem Beispiel nur etwas Text enthält. Sein Stil sieht so aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} wird auf 1 gesetzt, da wir den Header in der obersten Zeile des Rasters der Seite platzieren möchten. Interessant ist hier unser Einsatz von {{cssxref("grid-column")}}; hier geben wir an, dass wir möchten, dass die Spalte in der ersten Spalte beginnt und in der ersten Spalte nach der letzten Rasterlinie endet – mit anderen Worten, der Header spannt sich über alle Spalten im Raster. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Website anzuzeigen. Keiner von ihnen funktioniert in unserem Beispiel hier, aber sie existieren, um bei der Präsentation eines blogartigen Erlebnisses zu helfen. Die Seitenleiste wird mit einem {{HTMLElement("aside")}}-Element dargestellt und wie folgt gestaltet:

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

Das Wichtigste hier ist, dass {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint es auf der rechten Seite (obwohl einige andere Elemente einige Anpassungen ihrer Ränder benötigen, um den Abstand genau richtig zu bekommen). {{cssxref("grid-row")}} ist auf 2 gesetzt, um es neben dem Body der Seite zu platzieren.

#### Der Inhaltsbereich

Apropos Body der Seite: der Hauptinhalt der Seite wird in einem {{HTMLElement("main")}}-Element aufbewahrt. Folgender Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Rasterposition so eingestellt ist, dass der Body-Inhalt in Spalte 2, Zeile 2 platziert wird.

#### Artikel

Jeder Artikel ist in einem {{HTMLElement("article")}}-Element enthalten, das wie folgt gestaltet ist:

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

Dies erstellt Artikelboxen mit einem weißen Hintergrund, die über dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen 8px-Rand unten, um die Dinge auseinander zu halten.

#### Anzeigen

Schließlich haben die Anzeigen die folgende Anfangsgestaltung. Einzelne Anzeigen können den Stil etwas anpassen, wie wir später sehen werden.

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

Da ist nichts Magisches drin. Es ist ziemlich einfaches CSS.

### Mit JavaScript verknüpfen

Damit kommen wir zum JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

```js
const contentBox = document.querySelector("main");

let nextArticleID = 1;
let visibleAds = new Set();
let previouslyVisibleAds = null;
```

Diese werden wie folgt verwendet:

- `contentBox`
  - : Eine Referenz auf das {{HTMLElement("main")}}-Elementobjekt im DOM. Hier werden wir die Artikel und Anzeigen einfügen.
- `nextArticleID`
  - : Jeder Artikel erhält eine eindeutige ID-Nummer; diese Variable verfolgt die nächste zu verwendende ID, beginnend bei 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, den wir verwenden, um die gerade sichtbaren Anzeigen auf dem Bildschirm zu verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer auf eine andere Seite gewechselt hat).

#### Einrichten

Um die Einrichtung vorzunehmen, führen wir folgenden Code aus, wenn die Seite geladen wird:

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

Zunächst richten wir einen Ereignislistener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument ausgeblendet oder sichtbar wird, zum Beispiel wenn der Benutzer in seinem Browser die Registerkarte wechselt. Die Intersection Observer API berücksichtigt dies nicht, wenn sie die Schnittstelle erkennt, da die Schnittstelle nicht von der Sichtbarkeit der Seite beeinflusst wird. Daher müssen wir unsere Timer pausieren, während die Seite weggeklappt ist; daher dieser Ereignislistener.

Als Nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der die Ziel-Elemente (hier also die Anzeigen) relativ zum Dokument für Schnittänderungen überwacht. Die Optionen sind konfiguriert, um auf Schnittstellen mit dem Ansichtsfenster des Dokuments zu achten (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder um das Rechteck des Schnittpunktursprungs zu erweitern oder zu verkleinern; wir möchten die Grenzen des Ansichtsfensters des Dokuments genau für Schnittzwecke übereinstimmen. Und der `threshold` ist auf ein Array mit den Werten 0.0 und 0.75 gesetzt; dies sorgt dafür, dass unser Rückruf ausgeführt wird, wenn ein gezieltes Element vollständig verdeckt wird oder sich zum ersten Mal zu lichten beginnt (Schnittpunktsquote 0.0) oder zu 75% sichtbar in eine Richtung oder die andere bewegt (Schnittpunktsquote 0.75).

Der Beobachter, `adObserver`, wird durch Aufrufen des Konstruktors von `IntersectionObserver` erstellt und übergibt die Rückruf-Funktion `intersectionCallback` und unsere Optionen.

Die Variable `loremIpsum` enthält den Text, den wir für den Body aller unserer Artikel verwenden werden. Offensichtlich hätten Sie in der echten Welt einige Codezeilen, um Artikel aus einer Datenbank oder Ähnlichem zu laden, aber das reicht hier für unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie könnten ihn natürlich einfach ändern.

Wir rufen dann eine Funktion `buildContents()` auf, die wir später definieren werden, um tatsächlich die Artikel und Anzeigen zu generieren und in das Dokument einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um alle erforderlichen Aktualisierungen durchzuführen. Wir benötigen eine Aktualisierung pro Sekunde, da wir Timer in allen sichtbaren Anzeigen zu Demonstrationszwecken anzeigen. Möglicherweise benötigen Sie überhaupt kein Intervall, oder Sie können es anders oder in einem anderen Zeitintervall tun.

#### Umgang mit Änderungen der Dokumentensichtbarkeit

Schauen wir uns den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis an. Unser Skript erhält dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer die Registerkarten wechselt. Da sich der Intersection Observer nur um die Schnittstelle zwischen den gezielten Elementen und dem Schnittpunktursprung kümmert und nicht um die Sichtbarkeit der Registerkarte (was eine ganz andere Frage ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Registerkartenwechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar nach unsichtbar oder umgekehrt gewechselt wurde, wird die Eigenschaft [`document.hidden`](/de/docs/Web/API/Document/hidden) überprüft, um zu sehen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, mehrmals aufgerufen zu werden, fahren wir nur fort, wenn wir die Timer nicht bereits pausiert und die Sichtbarkeitszustände der vorhandenen Anzeigen gespeichert haben.

Um die Timer zu pausieren, müssen wir lediglich die Anzeigen aus der Menge der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv markieren. Dazu speichern wir zunächst die Menge der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer zurück zum Dokument wechselt. Dann leeren wir die Menge `visibleAds`, damit sie nicht mehr als sichtbar behandelt werden. Dann rufen wir für jede der ausgesetzten Anzeigen unsere `updateAdTimer()`-Funktion auf, die den Gesamtbesuchszeitmesser der Anzeige aktualisiert, und dann setzen wir ihre `dataset.lastViewStarted`-Eigenschaft auf 0, was darauf hinweist, dass der Tab-Zähler nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Prozess um: zuerst durchlaufen wir `previouslyVisibleAds` und setzen jedes Einzelne `dataset.lastViewStarted` auf die aktuelle Dokumentzeit (in Millisekunden seit Dokumenterstellung) mit der Methode [`performance.now()`](/de/docs/Web/API/Performance/now). Dann setzen wir `visibleAds` zurück auf `previouslyVisibleAds` und setzen letzteres auf `null`. Jetzt sind alle Anzeigen neu gestartet und so konfiguriert, dass sie wissen, dass sie zur aktuellen Zeit sichtbar geworden sind, sodass sie die Dauer der Zeit, in der die Seite weggetabbt wurde, nicht addieren, wenn sie das nächste Mal aktualisiert werden.

#### Umgang mit Schnittänderungen

Einmal pro Durchlauf der Ereignisschleife des Browsers prüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner gezielten Elemente einen seiner Schnittpunktsquotenpegel durchlaufen hat. Für jeden Beobachter wird eine Liste der Ziele, die dies getan haben, kompiliert und als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten an den Rückruf des Beobachters gesendet. Unser Rückruf, `intersectionCallback()`, sieht so aus:

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

Wie bereits erwähnt, erhält der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Rückruf als Eingabe ein Array aller gezielten Elemente des Beobachters, die entweder mehr oder weniger sichtbar als eine der Schnittpunkt Überwachungsverhältnisse wurden. Wir durchlaufen jedes dieser Einträge, die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Zielelement mit dem Ursprung überschneidet, wissen wir, dass es gerade vom verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es zu mindestens 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und starten den Timer, indem wir das Attribut `dataset.lastViewStarted` der Anzeige auf die Übergangszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) einstellen und dann die Anzeige in die Menge `visibleAds` aufnehmen, damit wir wissen, dass sie im Laufe der Zeit verarbeitet werden muss.

Wenn die Anzeige in den nicht-überschneidenden Zustand übergegangen ist, entfernen wir die Anzeige aus der Menge der sichtbaren Anzeigen. Dann haben wir ein spezielles Verhalten: wir prüfen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) 0.0 ist; wenn das der Fall ist, bedeutet das, dass das Element vollständig verdeckt wurde. Wenn das der Fall ist und die Anzeige insgesamt mindestens eine Minute sichtbar gewesen ist, rufen wir eine Funktion auf, die wir erstellen werden, namens `replaceAd()`, um die bestehende Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Benutzer im Laufe der Zeit eine Vielzahl von Anzeigen, aber die Anzeigen werden nur ersetzt, während sie nicht gesehen werden können, was zu einer reibungslosen Erfahrung führt.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird ungefähr einmal pro Sekunde aufgerufen, dank der Aufrufe von [`setInterval()`](/de/docs/Web/API/Window/setInterval) im [oben beschriebenen](#einrichten) `startup()`-Funktion. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und eine Neuzeichnung zu planen, um die Timer zu aktualisieren, die wir innerhalb jeder Anzeige zeichnen werden.

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

Das Array `redrawList` wird verwendet, um eine Liste aller Anzeigen zu behalten, die während dieses Aktualisierungszyklus neu gezeichnet werden müssen, da es aufgrund der Systemaktivität oder weil Sie das Intervall auf etwas anderes als alle 1000 Millisekunden eingestellt haben, möglicherweise nicht genau derselbe vergangene Zeitwert ist.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtzahl der Millisekunden, die die Anzeige derzeit sichtbar war, ab dem letzten Mal, als sie aktualisiert wurde) und rufen dann `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn es sich geändert hat, dann schieben wir die Anzeige auf die `redrawList`, damit wir wissen, dass sie während des nächsten Animation Frames aktualisiert werden muss.

Schließlich, wenn es mindestens ein Element gibt, das neu gezeichnet werden muss, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animation Frames neu zeichnet.

#### Aktualisieren des Sichtbarkeitstimers einer Anzeige

Zuvor (siehe [Umgang mit Änderungen der Dokumentensichtbarkeit](#umgang_mit_änderungen_der_dokumentensichtbarkeit) und [Umgang mit periodischen Aktionen](#umgang_mit_periodischen_aktionen)) haben wir gesehen, dass wir, wenn wir den "Gesamtsichtbarkeitszeit"-Zähler einer Anzeige aktualisieren müssen, eine Funktion namens `updateAdTimer()` aufrufen. Diese Funktion nimmt als Eingabe das [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)-Objekt der Anzeige. Hier ist sie:

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
  - : Die Zeit in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, zu der die Sichtbarkeitszählung der Anzeige zuletzt aktualisiert wurde oder die Anzeige zuletzt sichtbar wurde. 0, wenn die Anzeige nicht sichtbar war, als sie zuletzt überprüft wurde.
- `totalViewTime`
  - : Die Gesamtzahl der Millisekunden, die die Anzeige sichtbar war.

Diese werden über das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Attribut jedes Anzeigenelements abgerufen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bereitstellt, die jede Eigenschaft des benutzerdefinierten Attributs mit seinem Wert abbildet. Die Werte sind Zeichenfolgen, können aber leicht in Zahlen umgewandelt werden – in der Tat macht JavaScript das im Allgemeinen automatisch, obwohl wir einen Fall haben, wo wir dies manuell machen müssen.

Wir beginnen damit, die Zeit, zu der die Anzeige zuvor sichtbar war (im `adBox.dataset.lastViewStarted`) in einer lokalen Variablen namens `lastStarted` abzurufen. Wir erhalten auch das aktuelle Zeit-seit-Erstellungswert mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` ungleich Null ist – was bedeutet, dass der Timer aktuell läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu bestimmen, die der Timer seit dem letzten Mal sichtbar war. Diese wird der aktuellen `totalViewTime` der Anzeige hinzugefügt, um die Gesamtzeit auf den neuesten Stand zu bringen. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; da diese Werte Zeichenfolgen sind, versucht JavaScript, ohne sie eine Zeichenfolgenverkettung statt einer Addition durchzuführen.

Schließlich wird die letzte Sichtbarkeitszeit der Anzeige mit der aktuellen Zeit aktualisiert. Dies wird durchgeführt, unabhängig davon, ob die Anzeige lief, als diese Funktion aufgerufen wurde oder nicht; auf diese Weise wird der Timer der Anzeige immer ausgeführt, wenn diese Funktion endet. Dies macht Sinn, da diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, selbst wenn sie gerade sichtbar geworden ist.

#### Zeichnen des Timers einer Anzeige

In jeder Anzeige zeichnen wir zu Demonstrationszwecken den aktuellen Wert der `totalViewTime`, umgewandelt in Minuten und Sekunden. Dies wird durch Übergeben des Anzeigenelements an die Funktion `drawAdTimer()` gehandhabt:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige anhand seiner ID, `"timer"`, und berechnet die Anzahl der vergangenen Sekunden, indem `totalViewTime` durch 1000 geteilt wird. Dann berechnet er die Anzahl der vergangenen Minuten und Sekunden, bevor der Timer gesetzt wird [`innerText`](/de/docs/Web/API/HTMLElement/innerText) auf eine Zeichenfolge, die die Zeit in der Form m:ss darstellt. Die Methode {{jsxref("String.padStart()")}} wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Ziffern geformt wird, wenn sie weniger als 10 ist.

#### Erstellen des Seiteninhalts

Die Funktion `buildContents()` wird vom [Startcode](#einrichten) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, das präsentiert werden soll:

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

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeraden Artikel wird eine Anzeige "geladen" und in die Seite eingefügt. Artikel werden in die Inhaltsbox (also das {{HTMLElement("main")}}-Element, das alle Inhalte der Seite enthält) nach ihrer Erstellung mit einer Methode namens `createArticle()` eingefügt, die wir als nächstes betrachten.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erstellt als sie auch in die Seite einfügt. Wir werden später sehen, dass dieselbe Funktion auch eine bestehende Anzeige ersetzen kann, aber fürs Erste hängen wir Anzeigen an den bestehenden Inhalt an.

#### Erstellen eines Artikels

Um das {{HTMLElement("article")}}-Element für einen Artikel zu erstellen (sowie all seine Inhalte), verwenden wir die Funktion `createArticle()`, die als Eingabe eine Zeichenfolge nimmt, die den vollständigen Text des Artikels hat, der der Seite hinzugefügt werden soll.

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

Zuerst wird das `<article>`-Element erstellt und seine ID wird auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und bei jedem Artikel erhöht wird). Dann erstellen und hängen wir ein {{HTMLElement("Heading_Elements", "h2")}}-Element für den Artikeltitel an und dann hängen wir das HTML aus `contents` daran. Schließlich wird `nextArticleID` erhöht (damit das nächste Element eine neue eindeutige ID erhält) und wir geben das neue `<article>`-Element an den Anrufer zurück.

#### Erstellen einer Anzeige

Die Funktion `loadRandomAd()` simuliert das Laden einer Anzeige und das Hinzugefügt-Werden zur Seite. Wenn Sie keinen Wert für `replaceBox` angeben, wird ein neues Element erstellt, um die Anzeige aufzunehmen; die Anzeige wird dann der Seite angehängt. Wenn Sie eine `replaceBox` angeben, wird diese Box als bestehendes Anzeigeelement behandelt; anstatt ein neues zu erstellen, wird das bestehende Element geändert, um den neuen Stil, den Inhalt und andere Daten der Anzeige zu enthalten. Dies vermeidet das Risiko, dass umfangreiche Layoutarbeiten durchgeführt werden, wenn Sie die Anzeige aktualisieren, was passieren könnte, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

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

Zuerst kommt das Array `ads`. Dieses Array enthält die Daten, die benötigt werden, um jede Anzeige zu erstellen. Wir haben vier zur Auswahl, die zufällig ausgewählt werden. Natürlich kämen die Anzeigen in einer realen Anwendung aus einer Datenbank oder, noch wahrscheinlicher, ein Anzeigenservice, von dem Sie Anzeigen über eine API abrufen. Unsere Anforderungen sind jedoch einfach: jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: eine Hintergrundfarbe (`bgcolor`), ein Titel (`title`) und ein Textkörperstring (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Dies wird auf das Element gesetzt, das die Anzeige darstellt. Für neue Anzeigen, die der Seite hinzugefügt werden, wird dies durch die Nutzung von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Beim Ersetzen einer bestehenden Anzeige wird dies auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}}-Element halten, welches den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}}-Element halten, welches den Text der Anzeige darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}}-Element halten, das die Zeit enthält, seit die Anzeige sichtbar war.

Eine zufällige Anzeige wird ausgewählt, indem `Math.floor(Math.random() * ads.length)` berechnet wird; das Ergebnis ist ein Wert zwischen 0 und eins weniger als die Anzahl der Anzeigen. Die entsprechende Anzeige ist jetzt als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben wird, verwenden wir diesen als Anzeigenelement. Dazu beenden wir die Beobachtung des Elements, indem wir [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) aufrufen. Dann werden die lokalen Variablen für jedes der Elemente, die eine Anzeige ausmachen: die Anzeigebox selbst, der Titel, der Text und der Timer-Bereich, alle auf die entsprechenden Elemente in der bestehenden Anzeige gesetzt.

Wenn kein Wert für replaceBox angegeben wurde, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}}-Element der Anzeige wird erstellt, und seine Eigenschaften werden durch Zuordnung des Klassennamens `"ad"` festgelegt. Als nächstes wird das Anzeigentitelelement erstellt, zusammen mit dem Textkörper und dem Sichtbarkeitstimer; dies sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}} und ein {{HTMLElement("div")}}-Element, jeweils. Diese Elemente werden zum `adBox`-Element hinzugefügt.

Danach vereinen sich die Codepfade wieder. Die Hintergrundfarbe der Anzeige wird auf den im neuen Anzeigeneintrag angegebenen Wert festgelegt, und die Klassen und Inhalte der Elemente werden entsprechend gesetzt.

Als nächstes ist es an der Zeit, die benutzerdefinierten Dateneigenschaften einzurichten, um die Sichtbarkeitsdaten der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`-Elements, das den in der Anzeige zu zeigenden Timer anzeigt, auf `"timer"`. Der anfängliche Text wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen, und wird an die Anzeige angehängt.

Wenn wir keine bestehende Anzeige ersetzen, müssen wir das Element mithilfe von [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) in den Inhaltsbereich der Seite einfügen. Wenn wir eine Anzeige ersetzen, ist sie bereits vorhanden, mit ihren Inhalten, die durch die neue Anzeige ersetzt wurden. Dann rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf unserem Intersection Observer, `adObserver`, auf, um die Beobachtung der Anzeige für Änderungen an ihrem Schnittpunkt mit dem Ansichtsfenster zu starten. Von nun an wird jedes Mal, wenn die Anzeige zu 100% verdeckt wird oder sogar ein einzelnes Pixel sichtbar wird, oder die Anzeige zu 75% sichtbar in die eine oder andere Richtung wird, der [Rückruf des Beobachters](#umgang_mit_schnittänderungen) ausgeführt.

#### Ersetzen einer bestehenden Anzeige

Unser [Rückruf des Beobachters](#umgang_mit_schnittänderungen) behält die Anzeigen im Auge, die zu 100% verdeckt werden und eine Gesamtsichtbarkeitszeit von mindestens einer Minute haben. Wenn das passiert, wird die Funktion `replaceAd()` mit dem Element dieser Anzeige als Eingabe aufgerufen, damit die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt, indem sie `updateAdTimer()` auf die bestehende Anzeige aufruft, um sicherzustellen, dass ihr Timer auf dem aktuellen Stand ist. Dies stellt sicher, dass wir beim Lesen des `totalViewTime` den genauen Endwert sehen, wie lange die Anzeige für den Benutzer sichtbar war. Dann berichten wir diese Daten; in diesem Fall, indem wir sie in die Konsole protokollieren, aber in der echten Welt würden Sie die Informationen an eine API eines Werbedienstes übermitteln oder in einer Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#erstellen_einer_anzeige) aufrufen und die zu ersetzende Anzeige als Eingabeparameter angeben. Wie wir zuvor gesehen haben, wird `loadRandomAd()` eine bestehende Anzeige gegen Inhalt und Daten einer neuen Anzeige ersetzen, wenn Sie ein bestehendes Anzeigenelement als Eingabeparameter angeben.

Das Elementobjekt der neuen Anzeige wird an den Anrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht folgendermaßen aus. Versuchen Sie, experimentierend aufzublättern und aufzublättern und bemerken Sie, wie Änderungen in der Sichtbarkeit die Timer in jeder Anzeige beeinflussen. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss zuerst aus dem Blickfeld gescrollt und erneut gescrollt werden), und wie die Timer pausieren, während das Dokument im Hintergrund auf eine andere Registerkarte getabbt wird. Das Überdecken des Browsers mit einem anderen Fenster pausiert jedoch nicht die Timer.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
