---
title: Timing element visibility with the Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir einen Musterblog, der eine Reihe von Anzeigen zwischen den Inhalten der Seite hat, und nutzen dann die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Nutzer sichtbar ist. Wenn eine Anzeige mehr als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht mit der realen Nutzung übereinstimmen (insbesondere haben alle Artikel denselben Text, werden nicht aus einer Datenbank geladen und es gibt nur eine Handvoll einfacher Textanzeigen, die aus einem Array ausgewählt werden), sollte dies ein ausreichendes Verständnis der API vermitteln, um schnell zu lernen, wie die Intersection Observer API auf Ihrer eigenen Seite angewendet wird.

Es gibt einen guten Grund, warum das Konzept der Verfolgung der Sichtbarkeit von Anzeigen in diesem Beispiel verwendet wird. Es stellt sich heraus, dass einer der häufigsten Verwendungen von Flash oder anderen Skripten in Webanzeigen darin besteht, aufzuzeichnen, wie lange jede Anzeige sichtbar ist, um die Abrechnung und Zahlung von Einnahmen zu ermöglichen. Ohne die Intersection Observer API wird dies häufig mit Intervallen und Timeouts für jede einzelne Anzeige oder mit anderen Techniken erledigt, die die Seite verlangsamen können. Die Verwendung dieser API ermöglicht es, dass alles vom Browser optimiert wird, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Lassen Sie uns beginnen!

## Erstellen der Seite

### Seitenstruktur: Das HTML

Die Struktur der Seite ist nicht zu kompliziert. Wir werden [CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout) verwenden, um die Seite zu gestalten und anzuordnen, sodass wir hier relativ einfach vorgehen können:

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

Dies ist das Gerüst für die gesamte Website. Oben befindet sich der Header-Bereich der Website, der in einem {{HTMLElement("header")}}-Block enthalten ist. Darunter definieren wir die Seitenleiste der Website als eine Liste von Links in einem {{HTMLElement("aside")}}-Block.

Zuletzt kommt der Hauptteil. Wir beginnen hier mit einem leeren {{HTMLElement("main")}}-Element. Diese Box wird später mit einem Skript befüllt.

### Gestaltung der Seite mit CSS

Nachdem die Struktur der Seite definiert ist, widmen wir uns der Gestaltung der Seite. Sehen wir uns den Stil für jede Komponente der Seite einzeln an.

#### Die Grundlagen

Wir stellen Stile für die {{HTMLElement("body")}}- und {{HTMLElement("main")}}-Elemente bereit, um den Hintergrund der Website sowie das Raster zu definieren, in dem die verschiedenen Teile der Website platziert werden.

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

Das {{HTMLElement("body")}} der Website ist hier so konfiguriert, dass es eine der vielen üblichen serifenlosen Schriftarten verwendet und `"aliceblue"` als Hintergrundfarbe verwendet. Dann wird die `"wrapper"`-Klasse definiert; sie umschließt den gesamten Blog, einschließlich Header, Seitenleiste und Hauptinhalt (Artikel und Anzeigen).

Das Wrapper-Element erstellt ein CSS-Grid mit zwei Spalten und zwei Zeilen. Die erste Spalte (automatisch nach dem Inhalt dimensioniert) wird für die Seitenleiste verwendet, und die zweite Spalte (die für den Hauptinhalt verwendet wird) wird so dimensioniert, dass sie mindestens die Breite des Inhalts der Spalte und höchstens den gesamten verbleibenden verfügbaren Platz einnimmt.

Die erste Zeile wird speziell für den Site-Header verwendet. Die Zeilen sind auf die gleiche Weise dimensioniert wie die Spalten: Die erste ist automatisch dimensioniert, und die zweite verwendet den verbleibenden Platz, jedoch mindestens genug Platz, um alle darin befindlichen Elemente unterzubringen.

Die Breite des Wrappers ist auf 700px festgelegt, sodass er in den verfügbaren Platz passt, wenn er unten auf MDN inline dargestellt wird.

#### Der Header

Der Header ist recht einfach, da er in diesem Beispiel nur aus etwas Text besteht. Sein Stil sieht so aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} wird auf 1 gesetzt, da wir möchten, dass der Header in der obersten Zeile des Site-Rasters platziert wird. Interessanter ist die Verwendung von {{cssxref("grid-column")}} hier; hier geben wir an, dass wir möchten, dass die Spalte in der ersten Spalte beginnt und in der ersten Spalte nach der letzten Gitterlinie endet—in anderen Worten, der Header erstreckt sich über alle Spalten im Grid. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Website zu präsentieren. Keine von ihnen funktioniert in unserem Beispiel hier, aber sie existieren, um das Erlebnis eines Blogs zu simulieren. Die Seitenleiste wird als {{HTMLElement("aside")}}-Element dargestellt und wie folgt gestaltet:

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

Das Wichtigste hier ist, dass {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint sie auf der rechten Seite (obwohl einige andere Elemente kleine Anpassungen ihrer Margen benötigen, um den Abstand korrekt zu gestalten). {{cssxref("grid-row")}} ist auf 2 gesetzt, um sie neben den Hauptteil der Seite zu platzieren.

#### Der Hauptinhalt

Apropos Hauptteil der Seite: Der Hauptinhalt der Website ist in einem {{HTMLElement("main")}}-Element untergebracht. Dazu wird der folgende Stil angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Rasterposition so gesetzt ist, dass der Hauptinhalt in Spalte 2, Zeile 2 platziert wird.

#### Artikel

Jeder Artikel ist in einem {{HTMLElement("article")}}-Element enthalten, das so gestaltet ist:

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

Dies erstellt Artikelboxen mit weißem Hintergrund, die über dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen unteren Rand von 8px, um den Abstand zu gewährleisten.

#### Anzeigen

Schließlich haben die Anzeigen die folgende anfängliche Gestaltung. Einzelne Anzeigen können den Stil in gewissem Maße anpassen, wie wir später sehen werden.

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

Hier ist nichts Magisches. Es ist ziemlich grundlegendes CSS.

### Alles mit JavaScript verknüpfen

Das bringt uns zu dem JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

```js
const contentBox = document.querySelector("main");

let nextArticleID = 1;
let visibleAds = new Set();
let previouslyVisibleAds = null;
```

Diese werden wie folgt verwendet:

- `contentBox`
  - : Ein Verweis auf das {{HTMLElement("main")}}-Element-Objekt im DOM. Hier fügen wir die Artikel und Anzeigen ein.
- `nextArticleID`
  - : Jeder Artikel erhält eine eindeutige ID-Nummer; diese Variable verfolgt die nächste zu verwendende ID, beginnend mit 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, das wir verwenden, um die derzeit auf dem Bildschirm sichtbaren Anzeigen zu verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer auf eine andere Seite gewechselt hat).

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

Zuerst richten wir einen Event-Listener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument ausgeblendet oder sichtbar wird, z. B. wenn der Benutzer die Tabs in seinem Browser wechselt. Die Intersection Observer API berücksichtigt dies nicht, wenn sie die Schnittstelle ermittelt, da die Schnittstelle nicht von der Sichtbarkeit der Seite beeinflusst wird. Daher müssen wir unsere Timer anhalten, während die Seite in einem anderen Tab geöffnet ist; daher dieser Event-Listener.

Als Nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der die Ziel-Elemente (in unserem Fall die Anzeigen) auf Schnittstellenänderungen relativ zum Dokument überwachen wird. Die Optionen sind so konfiguriert, dass sie Schnittstellen mit dem Ansichtsfenster des Dokuments überwachen (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder, um das Rechteck der Schnittstelle zu erweitern oder zu verkleinern; wir wollen die Grenzen des Ansichtsfensters des Dokuments genau für die Schnittstellenermittlung abgleichen. Und der `threshold` ist auf ein Array mit den Werten 0.0 und 0.75 gesetzt; dies wird unseren Rückruf immer dann auslösen, wenn ein Ziel-Element vollständig verdeckt wird oder von einem vollständig verdeckten Zustand beginnt sichtbar zu werden (Schnittstellenverhältnis 0.0) oder über eine Sichtbarkeit von 75 % in beide Richtungen bewegt wird (Schnittstellenverhältnis 0.75).

Der Beoabachter, `adObserver`, wird erstellt, indem der Konstruktor von `IntersectionObserver` aufgerufen wird, wobei die Rückruffunktion `intersectionCallback` und unsere Optionen übergeben werden.

Die Variable `loremIpsum` enthält den Text, den wir für den Körper all unserer Artikel verwenden werden. Offensichtlich hätten Sie in der realen Welt einen Code, um Artikel aus einer Datenbank abzurufen oder Ähnliches, aber dies tut den Zweck für unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie könnten das natürlich leicht ändern.

Dann rufen wir eine Funktion `buildContents()` auf, die wir später definieren werden, um tatsächlich die Artikel und Anzeigen in das Dokument zu generieren und einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um alle erforderlichen Aktualisierungen vorzunehmen. Wir benötigen eine einsekündige Aktualisierung, da wir in allen sichtbaren Anzeigen Timer für die Zwecke dieses Beispiels anzeigen. Möglicherweise benötigen Sie überhaupt kein Intervall oder Sie machen es anders oder mit einem anderen Zeitintervall.

#### Änderung der Dokumentensichtbarkeit handhaben

Sehen wir uns den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis an. Unser Skript empfängt dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer die Tabs wechselt. Da der Intersection Observer nur die Schnittstelle zwischen den Ziel-Elementen und der Schnittstelle beobachtet, und nicht die Sichtbarkeit des Tabs (was ein völlig anderes Thema ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Tab-Wechsel zu erkennen und unsere Timer für die Dauer zu deaktivieren.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar auf unsichtbar oder umgekehrt umgeschaltet wurde, wird die Eigenschaft [`document.hidden`](/de/docs/Web/API/Document/hidden) überprüft, um festzustellen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, dass dieser Aufruf mehrfach erfolgt, fahren wir nur fort, wenn wir die Timer noch nicht angehalten und die Sichtbarkeitszustände der vorhandenen Anzeigen gespeichert haben.

Um die Timer anzuhalten, müssen wir lediglich die Anzeigen aus der Menge der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv kennzeichnen. Dazu speichern wir zunächst die Menge der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer zurück in das Dokument wechselt, und leeren dann die `visibleAds`-Menge, damit sie nicht als sichtbar behandelt werden. Anschließend rufen wir für jede der Anzeigen, die ausgesetzt werden, unsere Funktion `updateAdTimer()` auf, die den Gesamtzeitmesser für die Anzeige aktualisiert, und setzen dann ihre Eigenschaft `dataset.lastViewStarted` auf 0, was anzeigt, dass der Timer des Tabs nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Prozess um: Zuerst gehen wir durch `previouslyVisibleAds` und setzen die Eigenschaft `dataset.lastViewStarted` jedes einzelnen auf die aktuelle Dokumentzeit (in Millisekunden seit der Erstellung des Dokuments) mithilfe der Methode [`performance.now()`](/de/docs/Web/API/Performance/now). Dann setzen wir `visibleAds` wieder auf `previouslyVisibleAds` und setzen Letzteres auf `null`. Jetzt sind alle Anzeigen neu gestartet und so konfiguriert, dass sie wissen, dass sie zum aktuellen Zeitpunkt sichtbar wurden, sodass sie die Zeit, in der die Seite weggekürzt war, nicht beim nächsten Update addieren.

#### Schnittstellenänderungen handhaben

Einmal pro Durchlauf der Ereignisschleife des Browsers prüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Ziel-Elemente eines der Schnittstellenverhältnisschwellenwerte des Beobachters durchlaufen hat. Für jeden Beobachter wird eine Liste der Ziele erstellt, die dies getan haben, und sie wird als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten an den Rückruf des Beobachters gesendet. Unser Rückruf, `intersectionCallback()`, sieht folgendermaßen aus:

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

Wie bereits erwähnt, empfängt der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Rückruf als Eingabe ein Array aller Ziel-Elemente des Beobachters, die entweder mehr oder weniger sichtbar geworden sind als eines der Schnittstellenverhältnisse des Beobachters. Wir iterieren über jedes dieser Einträge - die Objekte vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Ziel-Element mit dem Root-Element schneidet, wissen wir, dass es gerade von einem verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es mindestens 75% sichtbar geworden ist, halten wir die Anzeige für sichtbar und starten den Timer, indem wir das Attribut `dataset.lastViewStarted` der Anzeige auf die Übergangszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen und die Anzeige dann zur Menge `visibleAds` hinzufügen, damit wir wissen, dass sie im Laufe der Zeit zu verarbeiten ist.

Wenn die Anzeige in den nicht schneidenden Zustand übergeht, wird die Anzeige aus der Menge der sichtbaren Anzeigen entfernt. Dann haben wir ein spezielles Verhalten: Wir schauen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) 0.0 ist; das bedeutet, dass das Element vollständig verdeckt wurde. Wenn dies der Fall ist und die Anzeige insgesamt mindestens eine Minute lang sichtbar war, rufen wir eine Funktion auf, die wir `replaceAd()` erstellen werden, um die vorhandene Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Nutzer mit der Zeit eine Vielzahl von Anzeigen, aber die Anzeigen werden nur dann ersetzt, wenn sie nicht gesehen werden können, was zu einem reibungslosen Erlebnis führt.

#### Periodische Aktionen handhaben

Unser Intervall-Handler, `handleRefreshInterval()`, wird etwa einmal pro Sekunde durch den Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval) aufgerufen, der in der [oben beschriebenen](#einrichtung) `startup()`-Funktion gemacht wird. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und ein Neuzeichnen zu planen, um die Timer zu aktualisieren, die wir innerhalb jeder Anzeige anzeigen werden.

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

Das Array `redrawList` dient dazu, eine Liste aller Anzeigen zu führen, die während dieses Aktualisierungszyklus neu gezeichnet werden müssen, da es nicht genau derselbe verstrichene Zeit sein kann aufgrund der Systemaktivität oder weil Sie das Intervall auf etwas anderes als jede 1000 Millisekunden eingestellt haben.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtanzahl von Millisekunden, die die Anzeige zuletzt sichtbar war, als sie aktualisiert wurde) und dann rufen wir `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn es sich geändert hat, fügen wir die Anzeige zur `redrawList` hinzu, damit wir wissen, dass sie während des nächsten Animationsrahmens aktualisiert werden muss.

Schließlich, wenn mindestens ein Element neu gezeichnet werden muss, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsrahmens neu zeichnet.

#### Aktualisieren eines Anzeigenelements Sichtbarkeitstimer

Früher (siehe [Handhaben von Dokumentensichtbarkeitsänderungen](#änderung_der_dokumentensichtbarkeit_handhaben) und [Handhaben periodischer Aktionen](#periodische_aktionen_handhaben)) haben wir gesehen, dass wir, wenn wir den "Gesamt-Sichtbarkeitszeit"-Zähler einer Anzeige aktualisieren müssen, `updateAdTimer()` aufrufen, um dies zu machen. Diese Funktion nimmt als Eingabe das [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)-Objekt einer Anzeige. Hier ist sie:

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

Um die sichtbare Zeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Datenattribute (siehe [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)) an jeder Anzeige:

- `lastViewStarted`
  - : Der Zeitpunkt in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, als die Sichtbarkeitszählung der Anzeige zuletzt aktualisiert wurde oder die Anzeige zuletzt sichtbar wurde. 0, wenn die Anzeige zum Zeitpunkt der letzten Überprüfung nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtanzahl von Millisekunden, die die Anzeige sichtbar war.

Diese werden über das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Attribut der Anzeige aufgerufen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bereitstellt, die jeden benutzerdefinierten Attributnamen mit seinem Wert abbildet. Die Werte sind Strings, aber wir können diese leicht in Zahlen umwandeln—tatsächlich erledigt JavaScript dies im Allgemeinen automatisch, obwohl wir einen Fall haben werden, in dem wir es selbst machen müssen.

Wir beginnen mit dem Abrufen der Zeit, zu der die vorherige Sichtbarkeitsstatusüberprüfung des Anzeigens `adBox.dataset.lastViewStarted` in eine lokale Variable namens `lastStarted` erfolgt ist. Wir holen auch den aktuellen Zeit-seit-Erstellung-Wert mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` ungleich Null ist - was bedeutet, dass der Timer derzeit läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu bestimmen, die der Timer seit dem letzten Mal, als es sichtbar wurde, sichtbar war. Dies wird zur aktuellen Anzeige des `totalViewTime` hinzugefügt, um die Summe auf den neuesten Stand zu bringen. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; da diese Werte Strings sind, versucht JavaScript ohne sie eine String-Verkettung statt einer Addition zu machen.

Schließlich wird die letzte Anzeigestartzeit für die Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht unabhängig davon, ob der Timer während des Aufrufs dieser Funktion läuft oder nicht; das führt dazu, dass der Timer der Anzeige immer läuft, wenn diese Funktion zurückkehrt. Das ergibt Sinn, da diese Funktion nur dann aufgerufen wird, wenn die Anzeige sichtbar ist, auch wenn sie gerade jetzt wieder sichtbar geworden ist.

#### Zeichnen eines Timers einer Anzeige

Innerhalb jeder Anzeige, zu Demonstrationszwecken, zeichnen wir den aktuellen Wert des `totalViewTime`, umgerechnet in Minuten und Sekunden. Dies wird durchgeführt, indem das Element der Anzeige an die Funktion `drawAdTimer()` übergeben wird:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code sucht den Timer der Anzeige mithilfe ihrer ID, `"timer"`, und berechnet die Anzahl der verstrichenen Sekunden, indem der `totalViewTime` der Anzeige durch 1000 geteilt wird. Dann berechnet es die verstrichenen Minuten und Sekunden, bevor es den Timer's [`innerText`](/de/docs/Web/API/HTMLElement/innerText) zu einem String festlegt, der die Zeit in der Form m:ss repräsentiert. Die Methode {{jsxref("String.padStart()")}} wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Ziffern ergänzt wird, wenn sie unter 10 liegt.

#### Erstellen des Seiteninhalts

Die `buildContents()`-Funktion wird vom [Startup-Code](#einrichtung) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, die präsentiert werden sollen:

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

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeradzahligen Artikel wird eine Anzeige "geladen" und auf der Seite eingefügt. Artikel werden in die Inhaltsbox eingefügt (das ist das {{HTMLElement("main")}}-Element, das den gesamten Webinhalt enthält), nachdem sie mit einer Methode namens `createArticle()` erstellt wurden, die wir uns als nächstes ansehen werden.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erstellt als auch in die Seite einfügt. Später werden wir sehen, dass diese Funktion auch eine bestehende Anzeige ersetzen kann, aber zunächst fügen wir Anzeigen zum bestehenden Inhalt hinzu.

#### Einen Artikel erstellen

Um das {{HTMLElement("article")}}-Element für einen Artikel (sowie alle dessen Inhalte) zu erstellen, verwenden wir die Funktion `createArticle()`, die als Eingabe einen String entgegennimmt, der den vollständigen Text des Artikels enthält, der zur Seite hinzugefügt werden soll.

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

Zuerst wird das `<article>`-Element erstellt und seine ID wird auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und für jeden Artikel erhöht wird). Dann erstellen wir ein {{HTMLElement("Heading_Elements", "h2")}}-Element für den Titel des Artikels und fügen dem das HTML aus `contents` hinzu. Schließlich wird `nextArticleID` inkrementiert (damit das nächste Element eine neue eindeutige ID erhält) und wir geben das neue `<article>`-Element an den Aufrufer zurück.

#### Eine Anzeige erstellen

Die `loadRandomAd()`-Funktion simuliert das Laden einer Anzeige und deren Hinzufügen zur Seite. Wenn Sie keinen Wert für `replaceBox` übergeben, wird ein neues Element erstellt, das die Anzeige enthält; die Anzeige wird dann zur Seite hinzugefügt. Wenn Sie eine `replaceBox` angeben, wird diese Box als bestehendes Anzeigenelement betrachtet; statt eines neuen wird das bestehende Element geändert, um den Stil, den Inhalt und andere Daten der neuen Anzeige zu enthalten. Dies verringert das Risiko, dass umfangreiche Layoutarbeiten durchgeführt werden, wenn Sie die Anzeige aktualisieren, was passieren könnte, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

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

Zuerst ist da das Array `ads`. Dieses Array enthält die Daten, die benötigt werden, um jede Anzeige zu erstellen. Wir haben vier zur Auswahl. Im realen Szenario würden die Anzeigen natürlich aus einer Datenbank oder eher von einem Werbedienst stammen, bei dem Sie Anzeigen über eine API abrufen. Unsere Anforderungen sind jedoch einfach: Jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: einer Hintergrundfarbe (`bgcolor`), einem Titel (`title`) und einem Body-Text-String (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Diese wird auf das Element gesetzt, das die Anzeige repräsentiert. Bei neuen Anzeigen, die zur Seite hinzugefügt werden, wird sie durch [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Wenn eine bestehende Anzeige ersetzt wird, wird sie auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}}-Element enthalten, das den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}}-Element enthalten, das den Body-Text der Anzeige darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}}-Element enthalten, das die Zeit enthält, seit der die Anzeige bisher sichtbar ist.

Eine zufällige Anzeige wird ausgewählt, indem `Math.floor(Math.random() * ads.length)` berechnet wird; das Ergebnis ist ein Wert zwischen 0 und der Anzahl der Anzeigen minus eins. Die entsprechende Anzeige ist jetzt bekannt als `adBox`.

Wenn ein Wert für `replaceBox` angegeben ist, verwenden wir dieses als Anzeigenelement. Dazu beginnen wir mit dem Ende der Beobachtung des Elements, indem wir [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) aufrufen. Dann werden die lokalen Variablen für jedes der Elemente, aus denen eine Anzeige besteht: die Anzeigebox selbst, der Titel, der Körper und das Timer-Box, alle auf die entsprechenden Elemente in der bestehenden Anzeige gesetzt.

Wenn kein Wert für `replaceBox` angegeben ist, erstellen wir ein neues Anzeige-Element. Das neue {{HTMLElement("div")}} der Anzeige wird erstellt und seine Eigenschaften werden durch das Setzen des Klassennamens auf `"ad"` festgelegt. Als Nächstes werden das Anzeige-Titelelement erstellt sowie der Body und der Sichtbarkeitstimer; dies sind jeweils ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}} und ein {{HTMLElement("div")}}-Element. Diese Elemente werden dem `adBox`-Element hinzugefügt.

Danach konvergieren die Codepfade wieder. Die Hintergrundfarbe der Anzeige wird auf den im neuen Anzeigen-Datensatz angegebenen Wert gesetzt und die Elemente und Inhalte werden entsprechend festgelegt.

Als Nächstes ist es an der Zeit, die benutzerdefinierten Dateneigenschaften einzurichten, um die Sichtbarkeitsdaten der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, das den Timer anzeigt, den wir Ihnen in der Anzeige präsentieren werden, um zu zeigen, wie lange sie sichtbar war, und geben ihm die Klasse `"timer"`. Der anfängliche Text wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen, und schließlich der Anzeige hinzugefügt.

Wenn wir keine bestehende Anzeige ersetzen, müssen wir das Element mit [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) in den Inhaltsbereich der Seite einfügen. Wenn wir eine Anzeige ersetzen, ist sie bereits vorhanden, mit ihren Inhalten, die durch die neue Anzeige ersetzt wurden. Danach rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf unserem Intersection Observer, `adObserver`, auf, um die Anzeige für Änderungen ihrer Schnittstelle mit dem Ansichtsfenster zu überwachen. Von nun an, jedes Mal, wenn die Anzeige zu 100 % verdeckt wird oder auch nur ein einzelnes Pixel sichtbar wird oder die Anzeige durch 75 % sichtbar in eine Weise oder eine andere Weise bewegt wird, wird der [Rückruf des Observers](#schnittstellenänderungen_handhaben) ausgeführt.

#### Ersetzen einer bestehenden Anzeige

Unser [Rückruf des Observers](#schnittstellenänderungen_handhaben) behält Anzeigen im Blick, die 100 % verdeckt werden und eine Gesamtanzeitzeit von mindestens einer Minute haben. Wenn das passiert, wird die Funktion `replaceAd()` mit dem Element der Anzeige als Eingabe aufgerufen, damit die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt mit dem Aufruf von `updateAdTimer()` auf der bestehenden Anzeige, um sicherzustellen, dass ihr Timer auf dem neuesten Stand ist. So wird gewährleistet, dass wir beim Auslesen des `totalViewTime` den exakten Endwert dafür sehen, wie lange die Anzeige für den Benutzer sichtbar war. Wir protokollieren dann diese Daten; in diesem Fall, indem wir sie in der Konsole protokollieren, aber in der realen Welt würden Sie diese Informationen an eine API eines Ad-Dienstes übermitteln oder in eine Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#eine_anzeige_erstellen) aufrufen, wobei das zu ersetzende Werbeelement als Eingabeparameter angegeben wird. Wie wir zuvor gesehen haben, wird `loadRandomAd()` den Inhalt und die Daten einer neuen Anzeige mit einer bestehenden Anzeige ersetzen, wenn Sie ein bestehendes Anzeigenelement als Eingabeparameter angeben.

Das Elementobjekt der neuen Anzeige wird an den Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie zu experimentieren, indem Sie nach oben und unten scrollen und beachten Sie, wie sich Änderungen in der Sichtbarkeit auf die Timer in jeder Anzeige auswirken. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss zuerst aus dem Blickfeld gescrollt und dann wieder angezeigt werden), und wie die Timer anhalten, während das Dokument in den Hintergrund verschoben wird. Das Abdecken des Browsers mit einem anderen Fenster hält die Timer jedoch nicht an.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
