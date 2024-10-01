---
title: Zeitliche Erfassung der Sichtbarkeit von Elementen mit der Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir einen Mock-Blog, auf dem mehrere Anzeigen zwischen den Inhalten der Seite verteilt sind, und verwenden die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie viel Zeit jede Anzeige für den Nutzer sichtbar ist. Wenn eine Anzeige mehr als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der realen Nutzung entsprechen (insbesondere haben alle Artikel denselben Text und werden nicht aus einer Datenbank geladen, und es gibt nur eine Handvoll einfacher Textanzeigen, die aus einem Array ausgewählt werden), sollte dies ausreichen, um ein Verständnis für die API zu gewinnen und schnell zu lernen, wie Sie die Intersection Observer API auf Ihrer eigenen Website anwenden können.

Es gibt einen guten Grund, warum in diesem Beispiel das Tracken der Sichtbarkeit von Anzeigen verwendet wird. Es stellt sich heraus, dass eine der häufigsten Anwendungen von Flash oder anderen Skripten in der Werbung im Web darin besteht, zu erfassen, wie lange jede Anzeige sichtbar ist, um Abrechnungs- und Einnahmezwecke zu erfüllen. Ohne die Intersection Observer API wird dies oft mit Intervallen und Timeouts für jede einzelne Anzeige oder anderen Techniken gemacht, die dazu neigen, die Seite zu verlangsamen. Mit dieser API kann alles vom Browser optimiert werden, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Lassen Sie uns beginnen!

## Erstellung der Website

### Seitenstruktur: Das HTML

Die Struktur der Website ist nicht zu kompliziert. Wir verwenden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), um die Seite zu gestalten und zu layouten, sodass wir hier ziemlich direkt vorgehen können:

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

Dies ist die Grundlage für die gesamte Website. Oben befindet sich der Header-Bereich der Seite, der in einem {{HTMLElement("header")}}-Block enthalten ist. Darunter definieren wir die Seitenleiste der Website als Liste von Links innerhalb eines {{HTMLElement("aside")}}-Blocks.

Zuletzt folgt der Hauptteil. Wir beginnen hier mit einem leeren {{HTMLElement("main")}}-Element. Dieser Bereich wird später mittels Skript gefüllt.

### Gestaltung der Website mit CSS

Nachdem die Struktur der Website definiert wurde, wenden wir uns dem Styling der Seite zu. Schauen wir uns den Stil für jede Komponente der Seite individuell an.

#### Die Grundlagen

Wir stellen Stile für die {{HTMLElement("body")}}- und {{HTMLElement("main")}}-Elemente bereit, um den Hintergrund der Site sowie das Raster zu definieren, in dem die verschiedenen Teile der Site platziert werden.

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

Der {{HTMLElement("body")}} der Website ist hier so konfiguriert, dass er eine von mehreren gängigen serifenlosen Schriftarten verwendet und `"aliceblue"` als Hintergrundfarbe hat. Dann wird die Klasse `"wrapper"` definiert; sie umfasst den gesamten Blog, einschließlich Header, Seitenleiste und Hauptinhalt (Artikel und Anzeigen).

Der Wrapper etabliert ein CSS-Gitter mit zwei Spalten und zwei Zeilen. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Seitenleiste verwendet und die zweite Spalte (die für den Hauptinhalt verwendet wird) ist so dimensioniert, dass sie mindestens die Breite des Inhalts der Spalte beträgt und höchstens den verbleibenden verfügbaren Platz einnimmt.

Die erste Zeile wird speziell für den Site-Header verwendet. Die Zeilen sind genauso dimensioniert wie die Spalten: die erste wird automatisch dimensioniert und die zweite verwendet den restlichen Platz, bietet jedoch genug Platz für alle darin enthaltenen Elemente.

Die Breite des Wrappers ist auf 700px festgesetzt, sodass er in den verfügbaren Raum passt, wenn er weiter unten auf MDN inline präsentiert wird.

#### Der Header

Der Header ist ziemlich einfach, da er für dieses Beispiel nur etwas Text enthält. Sein Stil sieht folgendermaßen aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} wird auf 1 gesetzt, da wir den Header in der obersten Zeile des Grid der Site platzieren möchten. Interessanter ist unsere Verwendung von {{cssxref("grid-column")}} hier; hier geben wir an, dass die Spalte in der ersten Spalte beginnen und in der ersten Spalte hinter der letzten Rasterlinie enden soll – mit anderen Worten, der Header erstreckt sich über alle Spalten innerhalb des Grids. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Site zu präsentieren. Keiner von ihnen funktioniert in unserem Beispiel hier, aber sie existieren, um zur Präsentation eines blogähnlichen Erlebnisses beizutragen. Die Seitenleiste wird durch ein {{HTMLElement("aside")}}-Element dargestellt und wie folgt gestaltet:

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

Das Wichtigste hier ist, dass {{cssxref("grid-column")}} auf 1 gesetzt wird, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint sie rechts (obwohl einige andere Elemente eine Anpassung ihrer Ränder benötigen, damit die Abstände genau stimmen). {{cssxref("grid-row")}} wird auf 2 gesetzt, um sie neben dem Körper der Seite zu platzieren.

#### Der Inhalt des Körpers

Apropos Körper der Seite: der Hauptinhalt der Site wird in einem {{HTMLElement("main")}}-Element aufbewahrt. Der folgende Stil wird auf dieses angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Die Hauptfunktion hier ist, dass die Gitterposition den Hauptinhalt in Spalte 2, Zeile 2 platziert.

#### Artikel

Jeder Artikel befindet sich in einem {{HTMLElement("article")}}-Element, das wie folgt gestaltet ist:

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

Dadurch entstehen Artikelboxen mit einem weißen Hintergrund, die über dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen unteren Rand von 8px, um den Abstand zu vergrößern.

#### Anzeigen

Schließlich haben die Anzeigen die folgende anfängliche Gestaltung. Einzelne Anzeigen können ihren Stil etwas anpassen, wie wir später sehen werden.

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

Hier ist nichts Magisches drin. Es ist ziemlich einfaches CSS.

### Alles mit JavaScript verbinden

Das bringt uns zu dem JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

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
  - : Eine Referenz auf das {{HTMLElement("main")}}-Element des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekts im DOM. Hier fügen wir die Artikel und Anzeigen ein.
- `nextArticleID`
  - : Jeder Artikel erhält eine eindeutige ID-Nummer; diese Variable verfolgt die nächste verwendbare ID, beginnend mit 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, den wir nutzen werden, um die derzeit sichtbaren Anzeigen auf dem Bildschirm zu verfolgen.
- `previouslyVisibleAds`
  - : Wird vorübergehend die Liste der sichtbaren Anzeigen speichern, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Nutzer zu einer anderen Seite gewechselt hat).
- `adObserver`
  - : Wird unseren [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) enthalten, der die Schnittmenge zwischen den Anzeigen und den Grenzen des `<main>`-Elements verfolgt.
- `refreshIntervalID`
  - : Wird die von [`setInterval()`](/de/docs/Web/API/SetInterval) zurückgegebene Intervall-ID speichern. Dieses Intervall wird verwendet, um unsere periodischen Aktualisierungen des Anzeigeninhalts auszulösen.

#### Einrichtung

Um die Einrichtung vorzunehmen, führen wir beim Laden der Seite die folgende `startup()`-Funktion aus:

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

Zuerst wird eine Referenz auf das den Inhalt umschließende {{HTMLElement("main")}}-Element erhalten, damit wir unseren Inhalt darin einfügen können. Dann richten wir einen Event-Listener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument unsichtbar oder sichtbar wird, z.B. wenn der Nutzer in seinem Browser die Registerkarte wechselt. Die Intersection Observer API berücksichtigt dies nicht, wenn sie die Schnittmenge erkennt, da die Schnittmenge nicht von der Sichtbarkeit der Seite betroffen ist. Daher müssen wir unsere Timer pausieren, während die Seite ausgeblendet ist; daher dieser Event-Listener.

Als nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, der Ziel-Elemente (in unserem Fall Anzeigen) auf Änderungen der Schnittmenge im Verhältnis zum Dokument beobachten wird. Die Optionen sind so konfiguriert, dass sie auf Schnitte mit dem Viewport des Dokuments achten (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder, um das Rechteck des Schnittmengewurzelbereichs zu erweitern oder zu verengen; wir möchten die Begrenzungen des Viewports des Dokuments genau für Schnittzwecke übereinstimmen. Und der `threshold` ist auf ein Array mit den Werten 0.0 und 0.75 gesetzt; dies führt dazu, dass unser Rückruf ausgeführt wird, immer wenn ein Ziel-Element vollständig verdeckt wird oder anfängt, freizugeben (Schnittmenge 0.0) oder durch 75% Sichtbarkeit in beide Richtungen läuft (Schnittmenge 0.75).

Der Observer, `adObserver`, wird erstellt, indem der Konstruktor von `IntersectionObserver` aufgerufen wird, der die Rückruffunktion `intersectionCallback` und unsere Optionen übergeben bekommt.

Dann rufen wir eine Funktion `buildContents()` auf, die wir später definieren werden, um tatsächlich die Artikel und Anzeigen zu generieren und in das Dokument einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um jede notwendige Aktualisierung durchzuführen. Wir benötigen ein einsekündiges Intervall, da wir für die Zwecke dieses Beispiels Timer in allen sichtbaren Anzeigen anzeigen. Möglicherweise benötigen Sie überhaupt kein Intervall, oder Sie machen es anders oder mit einem anderen Zeitintervall.

#### Handhabung von Änderungen der Sichtbarkeit des Dokuments

Werfen wir einen Blick auf den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis. Unser Skript empfängt dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Nutzer die Registerkarte wechselt. Da sich die Intersection Observer API nur um die Schnittmenge zwischen den Ziel-Elementen und dem Schnittwurzelbereich kümmert und nicht um die Sichtbarkeit der Registerkarte (die ein völlig anderes Problem ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Registerkartenwechsel zu erkennen und unsere Timer für die Dauer zu stoppen.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar zu unsichtbar oder umgekehrt gewechselt ist, wird die Eigenschaft [`document.hidden`](/de/docs/Web/API/Document/hidden) überprüft, um festzustellen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, mehrfach aufgerufen zu werden, fahren wir nur fort, wenn wir die Timer noch nicht gestoppt und die Sichtbarkeitszustände der bestehenden Anzeigen gespeichert haben.

Um die Timer zu pausieren, müssen wir lediglich die Anzeigen aus der Menge der sichtbaren Anzeigen (`visibleAds`) entfernen und als inaktiv markieren. Dazu beginnen wir, indem wir die Menge der sichtbaren Anzeigen in einer Variablen namens `previouslyVisibleAds` speichern, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Nutzer zur Registerkarte zurückkehrt, und wir räumen dann die `visibleAds`-Menge auf, damit sie nicht als sichtbar gelten. Danach rufen wir unsere `updateAdTimer()`-Funktion auf, die die Gesamtzeit, die die Anzeige sichtbar war, aktualisiert, und setzen deren `dataset.lastViewStarted`-Eigenschaft auf 0, was anzeigt, dass der Timer der Registerkarte nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Prozess um: zuerst gehen wir `previouslyVisibleAds` durch und setzen die `dataset.lastViewStarted` jeder auf die aktuelle Dokumentenzeit (in Millisekunden seit der Erstellung des Dokuments) unter Verwendung der [`performance.now()`](/de/docs/Web/API/Performance/now)-Methode. Dann setzen wir `visibleAds` zurück auf `previouslyVisibleAds` und setzen letzteres auf `null`. Jetzt sind die Anzeigen alle neu gestartet und so konfiguriert, dass sie wissen, dass sie zu diesem Zeitpunkt sichtbar geworden sind, damit sie beim nächsten Update nicht die Zeit hinzufügen, in der die Seite ausgetabbed war.

#### Handhabung von Schnittänderungen

Einmal pro Durchlauf der Ereignisschleife des Browsers überprüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob eines seiner Ziel-Elemente einen der Schnittbetrachtungen durchschritten hat. Für jede Beobachtung wird eine Liste der Ziele, die dies getan haben, erstellt und an die Rückruffunktion des Beobachters als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten übergeben. Unser Rückruf `intersectionCallback()` sieht so aus:

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

Wie bereits erwähnt, erhält der Rückruf von [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein Array aller Ziel-Elemente des Beobachters, die entweder mehr oder weniger sichtbar geworden sind als eines der Schnittbeobachtungen. Wir iterieren über jede dieser Instanzen - die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Ziel-Element mit der Wurzel überlagert ist, wissen wir, dass es gerade vom verdeckten in den sichtbaren Zustand übergegangen ist. Wenn es mindestens 75% sichtbar geworden ist, halten wir die Anzeige für sichtbar und starten den Timer, indem wir das `dataset.lastViewStarted`-Attribut der Anzeige auf den Übergangszeitpunkt in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) setzen, dann fügen wir die Anzeige zur Menge `visibleAds` hinzu, damit wir wissen, dass sie verarbeitet werden muss, wenn die Zeit vergeht.

Wenn die Anzeige in den Zustand "nicht überlagernd" übergegangen ist, entfernen wir sie aus der Menge der sichtbaren Anzeigen. Dann haben wir ein besonderes Verhalten: Wir achten darauf, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) 0.0 ist; wenn ja, bedeutet das, dass das Element vollständig verdeckt wurde. Wenn dies der Fall ist und die Anzeige insgesamt mindestens eine Minute sichtbar war, rufen wir eine Funktion namens `replaceAd()` auf, um die bestehende Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Nutzer im Laufe der Zeit verschiedene Anzeigen, aber die Anzeigen werden nur während sie nicht sichtbar sind ersetzt, was zu einem glatten Erlebnis führt.

#### Handhabung periodischer Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird etwa einmal pro Sekunde dank des Aufrufs von [`setInterval()`](/de/docs/Web/API/SetInterval) in der [`startup()`-Funktion](#einrichtung) aufgerufen. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und einen Neuzeichenvorgang zu planen, um die Timer zu aktualisieren, die wir in jeder Anzeige zeichnen.

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

Das Array `redrawList` wird verwendet, um eine Liste von allen Anzeigen zu führen, die während dieses Aktualisierungszyklus neu gezeichnet werden müssen, da es möglicherweise nicht genau der verstrichenen Zeit entspricht, aufgrund von Systemaktivität oder weil Sie das Intervall auf etwas anderes als alle 1.000 Millisekunden eingestellt haben.

Dann speichern wir für jede der sichtbaren Anzeigen den Wert von `dataset.totalViewTime` (die Gesamtanzahl der Millisekunden, die die Anzeige derzeit sichtbar war, seit sie zuletzt aktualisiert wurde) und rufen `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn sich dieser verändert hat, schieben wir die Anzeige auf die `redrawList`, sodass wir wissen, dass sie während des nächsten Animationsrahmens aktualisiert werden muss.

Schließlich, wenn es mindestens ein Element zum Neuzeichnen gibt, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsrahmens neu zeichnet.

#### Aktualisierung des Sichtbarkeitstimers einer Anzeige

Wie zuvor (siehe [Handhabung von Sichtbarkeitsänderungen des Dokuments](#handhabung_von_änderungen_der_sichtbarkeit_des_dokuments) und [Handhabung periodischer Aktionen](#handhabung_periodischer_aktionen)) haben wir gesehen, dass, wenn wir den Zähler für die "Gesamt sichtbare Zeit" einer Anzeige aktualisieren müssen, wir eine Funktion namens `updateAdTimer()` aufrufen, um dies zu tun. Diese Funktion nimmt das [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)-Objekt einer Anzeige als Eingabe an. Hier ist sie:

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

Um die sichtbare Zeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Dateneigenschaften (siehe [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)) auf jeder Anzeige:

- `lastViewStarted`
  - : Die Zeit in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, zu der die Sichtbarkeitszählung der Anzeige zuletzt aktualisiert oder die Anzeige zuletzt sichtbar wurde. 0, wenn die Anzeige zum letzten Sichtbarkeitszustand nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtzahl der Millisekunden, die die Anzeige sichtbar war.

Diese werden über das [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Attribut jeder Anzeige zugegriffen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bereitstellt, die jede benutzerdefinierte Eigenschaftsname auf ihren Wert abbildet. Die Werte sind Zeichenfolgen, aber wir können sie leicht in Zahlen konvertieren - tatsächlich macht JavaScript das im Allgemeinen automatisch, obwohl wir eine Instanz haben werden, in der wir es selbst tun müssen.

Wir beginnen damit, die Zeit, zu der `ad.lastViewStarted` war, in eine lokale Variable namens `lastStarted` zu holen. Wir holen auch den aktuellen Wert der Zeit seit Erstellung des Dokuments mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` nicht null ist, was bedeutet, dass der Timer derzeit läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu bestimmen, die der Timer seit letztem Mal sichtbar war. Dies wird dem aktuellen Wert der `totalViewTime`-Anzeige hinzugefügt, um die Gesamtzahl auf den neuesten Stand zu bringen. Beachten Sie hier die Verwendung von {{jsxref("parseFloat", "parseFloat()")}}; da diese Werte Zeichenfolgen sind, versucht JavaScript, eine Zeichenkettenverkettung anstelle der Addition ohne sie auszuführen.

Schließlich wird die letzte gesehene Zeit für die Anzeige auf die aktuelle Zeit aktualisiert. Dies wird sowohl dann gemacht, wenn die Anzeige beim Aufruf dieser Funktion lief als auch nicht; dies bewirkt, dass der Timer der Anzeige immer läuft, wenn diese Funktion zurückkehrt. Das macht Sinn, weil diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, auch wenn sie gerade erst sichtbar geworden ist.

#### Zeichnen eines Anzeigetimers

In jeder Anzeige zeichnen wir aus Demonstrationsgründen den aktuellen Wert ihrer `totalViewTime`, umgerechnet in Minuten und Sekunden. Dies wird behandelt, indem wir das Element der Anzeige an die `drawAdTimer()`-Funktion übergeben:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige mit ihrer ID, `"timer"`, und berechnet die Anzahl der verstrichenen Sekunden, indem `totalViewTime` der Anzeige durch 1.000 geteilt wird. Dann berechnet er die Anzahl der verstrichenen Minuten und Sekunden, bevor er den Timer's [`innerText`](/de/docs/Web/API/HTMLElement/innerText) auf einen String setzt, der diese Zeit in der Form m:ss darstellt. Die {{jsxref("String.padStart()")}}-Methode wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Stellen aufgefüllt wird, wenn sie kleiner als 10 ist.

#### Erstellen der Seiteninhalte

Die `buildContents()`-Funktion wird durch den [Startcode](#einrichtung) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, die präsentiert werden sollen:

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

Die Variable `loremIpsum` enthält den Text, den wir für den Hauptteil aller unserer Artikel verwenden werden. Offensichtlich hätten Sie in der realen Welt einen Code, um Artikel aus einer Datenbank oder ähnlichem zu ziehen, aber dies erledigt den Job für unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie könnten das natürlich leicht ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeraden Artikel wird eine Anzeige "geladen" und in die Seite eingefügt. Artikel werden in die Content-Box eingefügt (also das {{HTMLElement("main")}}-Element, das den gesamten Inhalt der Site enthält), nachdem sie mit einer Methode namens `createArticle()` erstellt wurden, auf die wir als nächstes eingehen werden.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erstellt als auch in die Seite einfügt. Wir werden später sehen, dass dieselbe Funktion auch eine bestehende Anzeige ersetzen kann, aber für jetzt hängen wir Anzeigen an den bestehenden Inhalt an.

#### Erstellung eines Artikels

Um das {{HTMLElement("article")}}-Element für einen Artikel zu erstellen (sowie alle seine Inhalte), verwenden wir die `createArticle()`-Funktion, die als Eingabe eine Zeichenfolge nimmt, die der vollständige Text des Artikels ist, der der Seite hinzugefügt werden soll.

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

Zuerst wird das `<article>`-Element erstellt und seine ID auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und mit jedem Artikel steigt). Danach erstellen wir und hängen ein {{HTMLElement("Heading_Elements", "h2")}}-Element für den Titel des Artikels an und hängen dann das HTML von `contents` daran. Schließlich wird `nextArticleID` inkrementiert (damit das nächste Element eine neue eindeutige ID erhält) und wir geben das neue `<article>`-Element an den Aufrufer zurück.

#### Erstellung einer Anzeige

Die `loadRandomAd()`-Funktion simuliert das Laden einer Anzeige und deren Hinzufügen zur Seite. Wenn Sie keinen Wert für `replaceBox` übergeben, wird ein neues Element erstellt, um die Anzeige zu enthalten; die Anzeige wird dann an die Seite angehängt. Wenn Sie eine `replaceBox` angeben, wird diese Box als bestehendes Anzeigenelement behandelt; anstatt eine neue zu erstellen, wird das bestehende Element geändert, um den neuen Stil, den Inhalt und die anderen Daten der Anzeige zu enthalten. Dies vermeidet das Risiko, dass aufwändige Layoutarbeiten durchgeführt werden, wenn Sie die Anzeige aktualisieren, was passieren könnte, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

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

Zuerst das Array `ads`. Dieses Array enthält die Daten, die zum Erstellen jeder Anzeige benötigt werden. Wir haben vier davon, die zufällig ausgewählt werden. In einem realen Szenario natürlich, würden die Anzeigen aus einer Datenbank oder, wahrscheinlicher, von einem Werbedienst kommen, bei dem Sie Anzeigen mit einer API abrufen. Unsere Anforderungen sind jedoch einfach: jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: einer Hintergrundfarbe (`bgcolor`), einem Titel (`title`) und einem Inhaltstext (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Dies wird auf das Element gesetzt, das die Anzeige darstellt. Für neue Anzeigen, die an die Seite angehängt werden, wird dies mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Beim Ersetzen einer bestehenden Anzeige wird dies auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}}-Element halten, das den Anzeigentitel darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}}-Element halten, das den Anzeigentext darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}}-Element halten, das die Anzeigezeit enthält, wie lange die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird durch Berechnen von `Math.floor(Math.random() * ads.length)` ausgewählt; das Ergebnis ist ein Wert zwischen 0 und einer weniger als die Anzahl der Anzeigen. Die entsprechende Anzeige ist jetzt als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben wird, verwenden wir dieses als Anzeigenelement. Dazu beginnen wir damit, die Beobachtung des Elements zu beenden, indem wir [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) auf den Anzeigenelement anwenden. Danach werden die lokalen Variablen für jedes der Bestandteile einer Anzeige: das Anzeigenelement selbst, der Titel, der Inhalt und der Timer-Bereich, alle auf die entsprechenden Elemente in der bestehenden Anzeige festgelegt.

Wenn kein Wert für `replaceBox` angegeben wird, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}}-Element der Anzeige wird erstellt und seine Eigenschaften festgelegt, indem der Klassenname auf `"ad"` gesetzt wird. Als nächstes wird das Titel-Element der Anzeige erstellt, zusammen mit dem Inhalt und dem Sichtbarkeits-Timer; diese sind jeweils ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}} und ein {{HTMLElement("div")}}-Element. Diese Elemente werden dem `adBox`-Element hinzugefügt.

Danach konvergieren die Codepfade wieder. Die Hintergrundfarbe der Anzeige wird auf den in der neuen Anzeige angegebenen Wert gesetzt, und die Klassen und Inhalte der Elemente werden entsprechend eingestellt.

Nächster Schritt: die Benutzerdefinierten Datenattribute setzen, um die Sichtbarkeitsdaten der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, die den Timer zeigt, den wir in der Anzeige präsentieren werden um zu zeigen, wie lange sie sichtbar war, indem wir ihm die Klasse `"timer"` geben. Der ursprüngliche Text wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen und er wird an die Anzeige angehängt.

Wenn wir keine bestehende Anzeige ersetzen, müssen wir das Element mithilfe von [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) in den Inhaltsbereich der Seite anhängen. Wenn wir eine Anzeige ersetzen, ist sie bereits da, mit ihrem Inhalt ersetzt durch den der neuen Anzeige. Dann rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf unserem Intersection Observer, `adObserver`, auf, um die Anzeige zu beobachten und auf Änderungen ihrer Schnittmenge mit dem Viewport zu achten. Von nun an wird jedes Mal, wenn die Anzeige zu 100% verdeckt wird oder ein Pixel sichtbar wird, oder die Anzeige zu 75% Sichtbarkeit in beide Richtungen verläuft, der [Rückruf des Observers](#handhabung_von_schnittänderungen) ausgeführt.

#### Ersetzen einer bestehenden Anzeige

Der [Rückruf des Observers](#handhabung_von_schnittänderungen) überwacht Anzeigen, die zu 100% verdeckt werden und insgesamt mindestens eine Minute sichtbar waren. Wenn dies passiert, wird die Funktion `replaceAd()` mit dem Element der Anzeige als Eingabe aufgerufen, so dass die alte Anzeige durch eine neue ersetzt wird.

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

`replaceAd()` beginnt damit, `updateAdTimer()` auf die bestehende Anzeige aufzurufen, um sicherzustellen, dass ihr Timer aktuell ist. Dies stellt sicher, dass wenn wir ihren `totalViewTime` lesen, wir den genauen Endwert sehen, wie lange die Anzeige für den Benutzer sichtbar war. Dann melden wir diese Daten; in diesem Fall, indem wir sie in der Konsole protokollieren, aber in der realen Welt würden Sie die Informationen über die API eines Werbedienstes einreichen oder in einer Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#erstellung_einer_anzeige) aufrufen und das zu ersetzende Anzeigenelement als Eingabeparameter angeben. Wie wir zuvor gesehen haben, wird `loadRandomAd()` eine bestehende Anzeige mit dem Inhalt und den Daten einer neuen Anzeige ersetzen, wenn Sie ein bestehendes Element als Eingabeparameter angeben.

Das neue Element der Anzeige wird dem Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie zu experimentieren, indem Sie auf- und abscrollen und beobachten Sie, wie sich die Sichtbarkeitsänderungen auf die Timer in jeder Anzeige auswirken. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber die Anzeige muss zuerst aus dem Sichtbereich heraus- und wieder hineingescrollt werden) und wie die Timer pausieren, während das Dokument in den Hintergrund getabbed ist. Das Abdecken des Browsers mit einem anderen Fenster hält die Timer jedoch nicht an.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
