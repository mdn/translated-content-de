---
title: Zeitpunkt der Element-Sichtbarkeit mit der Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: 839b5e82a117678948392e77b81d64a7f6d03811
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir ein simuliertes Blog mit mehreren Anzeigen, die über den Inhalt der Seite verteilt sind. Anschließend verwenden wir die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Sobald eine Anzeige länger als eine Minute sichtbar ist, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der realen Nutzung entsprechen werden (insbesondere dass alle Artikel denselben Text haben und nicht aus einer Datenbank geladen werden, und es nur eine Handvoll einfacher textbasierter Anzeigen gibt, die aus einem Array ausgewählt werden), sollte dies genug Verständnis der API bieten, um schnell zu lernen, wie die Intersection Observer API auf Ihrer eigenen Website angewendet werden kann.

Es gibt einen guten Grund, warum die Verfolgung der Sichtbarkeit von Anzeigen in diesem Beispiel verwendet wird. Es stellt sich heraus, dass eine der häufigsten Anwendungen von Flash oder anderen Skripten in Web-Werbung darin besteht, aufzuzeichnen, wie lange jede Anzeige sichtbar ist, um die Abrechnung und Zahlung von Einnahmen zu ermöglichen. Ohne die Intersection Observer API wird dies normalerweise mit Intervallen und Timeouts für jede einzelne Anzeige durchgeführt oder mit anderen Techniken, die die Seite verlangsamen können. Mit dieser API kann alles durch den Browser optimiert werden, um die Auswirkungen auf die Leistung erheblich zu reduzieren.

Fangen wir an!

## Erstellung der Seite

### Seitenstruktur: Das HTML

Die Struktur der Seite ist nicht zu kompliziert. Wir verwenden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), um die Seite zu stylen und zu layouten, sodass wir hier ziemlich direkt vorgehen können:

```html
<div class="wrapper">
  <header>
    <h1>Ein Fake-Blog</h1>
    <h2>Zeigt Intersection Observer in Aktion!</h2>
  </header>

  <aside>
    <nav>
      <ul>
        <li><a href="#link1">Ein Link</a></li>
        <li><a href="#link2">Ein weiterer Link</a></li>
        <li><a href="#link3">Noch ein Link</a></li>
      </ul>
    </nav>
  </aside>

  <main>…</main>
</div>
```

Dies ist das Grundgerüst für die gesamte Seite. Oben befindet sich der Kopfbereich der Seite, der in einem {{HTMLElement("header")}}-Block enthalten ist. Darunter definieren wir die Seitenleiste der Seite als eine Liste von Links in einem {{HTMLElement("aside")}}-Block.

Zuletzt kommt der Hauptbereich. Hier beginnen wir mit einem leeren {{HTMLElement("main")}}-Element. Dieser Bereich wird später mit einem Skript gefüllt.

### Styling der Seite mit CSS

Mit der definierten Struktur der Seite wenden wir uns dem Styling der Seite zu. Sehen wir uns den Stil für die einzelnen Komponenten der Seite an.

#### Die Grundlagen

Wir stellen Stile für die {{HTMLElement("body")}}- und {{HTMLElement("main")}}-Elemente bereit, um den Hintergrund der Seite sowie das Grid festzulegen, in dem die verschiedenen Teile der Seite platziert werden.

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

Der {{HTMLElement("body")}} der Seite ist hier so konfiguriert, dass einer von mehreren gängigen Sans-Serif-Schriften verwendet wird und dass die Hintergrundfarbe `"aliceblue"` ist. Dann wird die Klasse `"wrapper"` definiert; sie umschließt das gesamte Blog, einschließlich des Headers, der Seitenleiste und des Inhalts des Hauptbereichs (Artikel und Anzeigen).

Der Wrapper erstellt ein CSS-Grid mit zwei Spalten und zwei Zeilen. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Seitenleiste verwendet, und die zweite Spalte (die für den Hauptinhalt verwendet wird) ist so dimensioniert, dass sie zumindest die Breite des Inhalts der Spalte aufweist und maximal den gesamten verbleibenden verfügbaren Platz ausfüllt.

Die erste Zeile wird speziell für den Seitenkopf verwendet. Die Zeilen sind genauso dimensioniert wie die Spalten: Die erste wird automatisch dimensioniert und die zweite nimmt den verbleibenden Platz ein, aber zumindest genug Platz, um allen darin enthaltenen Elementen Raum zu bieten.

Die Breite des Wrappers ist auf 700px festgelegt, sodass er in den verfügbaren Raum passt, wenn er unterhalb auf MDN inline dargestellt wird.

#### Der Header

Der Header ist relativ einfach, da er in diesem Beispiel nur Text enthält. Sein Stil sieht folgendermaßen aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} ist auf 1 gesetzt, da wir möchten, dass der Header in der obersten Zeile des Seitenrasters platziert wird. Interessanter ist unsere Verwendung von {{cssxref("grid-column")}} hier; hier geben wir an, dass die Spalte in der ersten Spalte und in der ersten Spalte nach der letzten Gitterlinie enden soll – mit anderen Worten, der Header erstreckt sich über alle Spalten innerhalb des Grids. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste dient zur Präsentation von Links zu anderen Seiten der Website. Keiner von ihnen funktioniert in unserem Beispiel hier, aber sie existieren, um den Eindruck eines Blog-Erlebnisses zu vermitteln. Die Seitenleiste wird mit einem {{HTMLElement("aside")}}-Element dargestellt und wie folgt gestylt:

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

Das Wichtigste hier ist, dass {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint sie auf der rechten Seite (obwohl einige andere Elemente Anpassungen an ihren Rändern benötigen, um den Abstand genau richtig zu machen). {{cssxref("grid-row")}} ist auf 2 gesetzt, um es neben dem Hauptbereich der Website zu platzieren.

#### Der Inhaltsbereich

Apropos Hauptbereich der Seite: der Hauptinhalt der Seite ist in einem {{HTMLElement("main")}}-Element untergebracht. Der folgende Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Die Hauptfunktion hier ist, dass die Gitterposition so gesetzt ist, dass der Hauptinhalt in Spalte 2, Zeile 2 platziert wird.

#### Artikel

Jeder Artikel ist in einem {{HTMLElement("article")}}-Element enthalten und wie folgt gestylt:

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

Dies erstellt Artikelboxen mit einem weißen Hintergrund, die auf dem blauen Hintergrund schweben, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen unteren Rand von 8px, um die Dinge auseinanderzuhalten.

#### Anzeigen

Schließlich haben die Anzeigen das folgende anfängliche Styling. Einzelne Anzeigen können den Stil etwas anpassen, wie wir später sehen werden.

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

Hier gibt es nichts Magisches. Es ist relativ einfaches CSS.

### Mit JavaScript verbinden

Damit kommen wir zum JavaScript-Code, der alles zum Laufen bringt. Beginnen wir mit den globalen Variablen:

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
  - : Ein Verweis auf das {{HTMLElement("main")}}-Element-Objekt im DOM. Hier fügen wir die Artikel und Anzeigen ein.
- `nextArticleID`
  - : Jedem Artikel wird eine eindeutige ID-Nummer zugewiesen; diese Variable verfolgt die nächste zu verwendende ID, beginnend mit 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, das wir verwenden, um die derzeit auf dem Bildschirm sichtbaren Anzeigen zu verfolgen.
- `previouslyVisibleAds`
  - : Wird verwendet, um die Liste der sichtbaren Anzeigen vorübergehend zu speichern, während das Dokument nicht sichtbar ist (z. B. wenn der Benutzer zu einer anderen Seite gewechselt hat).
- `adObserver`
  - : Enthält unser {{domxref("IntersectionObserver")}}, der die Schnittstelle zwischen den Anzeigen und den Grenzen des `<main>`-Elements verfolgt.
- `refreshIntervalID`
  - : Wird verwendet, um die von {{domxref("setInterval()")}} zurückgegebene Intervall-ID zu speichern. Dieses Intervall wird verwendet, um unsere regelmäßigen Aktualisierungen des Anzeigensystems auszulösen.

#### Einrichtung

Um die Dinge einzurichten, führen wir die `startup()`-Funktion aus, wenn die Seite geladen wird:

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

Zuerst wird ein Verweis auf das umschließende {{HTMLElement("main")}}-Element erhalten, sodass wir unseren Inhalt darin einfügen können. Dann richten wir einen Ereignis-Listener für das {{domxref("document.visibilitychange_event", "visibilitychange")}}-Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument verborgen oder sichtbar wird, z. B. wenn der Benutzer in seinem Browser zwischen Registerkarten wechselt. Die Intersection Observer API berücksichtigt dies nicht, da die Schnittstelle nicht von der Sichtbarkeit der Seite betroffen ist. Daher müssen wir unsere Timer anhalten, während die Seite in den Hintergrund tritt; daher dieser Ereignis-Listener.

Als nächstes definieren wir die Optionen für den {{domxref("IntersectionObserver")}}, der die Ziel-Elemente (in unserem Fall Anzeigen) auf Schnittstellenänderungen relativ zum Dokument überwacht. Die Optionen sind so konfiguriert, dass sie das Dokument-Viewport (indem `root` auf `null` gesetzt wird) als Schnittstellen-Wurzel verwenden. Wir haben keine Ränder, um das Rechteck der Schnittstellen-Wurzel zu erweitern oder zu verkleinern; wir möchten, dass die Grenzen des Dokuments exakt dem Schnitt entsprechen. Und das `threshold`-Feld ist auf ein Array mit den Werten 0.0 und 0.75 gesetzt; dies wird unsere Rückruf Funktion jedes Mal auslösen, wenn ein Ziel-Element vollständig verdeckt oder zum ersten Mal teilweise sichtbar wird (Schnittstellungsverhältnis 0.0) oder durch 75% Sichtbarkeit in beide Richtungen geht (Schnittstellungsverhältnis 0.75).

Der Beobachter, `adObserver`, wird durch Aufrufen des `IntersectionObserver`-Konstruktors erstellt, wobei die Rückruf Funktion `intersectionCallback` und unsere Optionen übergeben werden.

Dann rufen wir eine Funktion `buildContents()` auf, die wir später definieren, um tatsächlich die Artikel und Anzeigen zu erstellen und in das Dokument einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um eine erforderliche Aktualisierung zu steuern. Wir benötigen eine Aktualisierung von einer Sekunde, da wir in allen sichtbaren Anzeigen Timer für die Zwecke dieses Beispiels anzeigen. Es kann sein, dass Sie in Ihrem konkreten Fall kein Intervall benötigen oder es auf andere Weise oder mit einem anderen Zeitintervall durchführen.

#### Umgang mit Änderungen der Dokumenten Sichtbarkeit

Sehen wir uns den Handler für das {{domxref("document.visibilitychange_event", "visibilitychange")}}-Ereignis an. Unser Skript erhält dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer zwischen Registerkarten wechselt. Da der Intersection Observer nur die Schnittstelle zwischen den Ziel-Elementen und der Schnittstellen-Wurzel beachtet, ist es notwendig, die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) zu verwenden, um diese Registerkartenwechsel zu erkennen und unsere Timer für die Dauer des Wechsels zu deaktivieren.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar auf unsichtbar oder umgekehrt umgeschaltet wurde, wird die {{domxref("document.hidden")}}-Eigenschaft geprüft, um zu sehen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, mehrmals aufgerufen zu werden, fahren wir nur fort, wenn wir die Timer nicht bereits pausiert und die Sichtbarkeitszustände der vorhandenen Anzeigen gespeichert haben.

Um die Timer zu pausieren, müssen wir nur die Anzeigen aus der Menge der sichtbaren Anzeigen (`visibleAds`) entfernen und als inaktiv markieren. Dazu speichern wir zuerst die Menge der sichtbaren Anzeigen in einer bekannten Variablen `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer zurück ins Dokument wechselt, und wir leeren dann die `visibleAds`-Menge, damit sie nicht als sichtbar behandelt werden. Dann rufen wir für jede der Anzeigen, die in den Ruhezustand versetzt werden, unsere `updateAdTimer()`-Funktion auf, die die Gesamtanzeigezeit der Werbung aktualisiert, und setzen deren `dataset.lastViewStarted`-Eigenschaft auf 0, was anzeigt, dass der Tab-Timer nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Prozess um: Zuerst durchlaufen wir `previouslyVisibleAds` und setzen den `dataset.lastViewStarted` jedes Elements auf die aktuelle Dokumenten Zeit (in Millisekunden seit Erstellung des Dokuments) mit {{domxref("Performance.now", "performance.now()")}}. Dann setzen wir `visibleAds` wieder auf `previouslyVisibleAds` und setzen letztere auf `null`. Jetzt werden die Anzeigen alle neu gestartet und so konfiguriert, dass sie wissen, dass sie zu dem aktuellen Zeitpunkt sichtbar geworden sind, sodass sie nicht die Gesamtanzeigezeit addieren, in der die Seite beim nächsten Update abwesend war.

#### Umgang mit Schnittstellenänderungen

Einmal pro Durchlauf durch die Event-Schleife überprüft jeder {{domxref("IntersectionObserver")}}, ob einer seiner Ziel-Elemente einen ihrer Schnittstellen Verhältnis Schwellenwerte überschritten hat. Für jeden Beobachter wird eine Liste der Ziele erstellt, die dies getan haben, und bei denen wird die Rückruf Funktion aufgerufen, die als Array von {{domxref("IntersectionObserverEntry")}}-Objekten übergeben wird. Unsere Rückruf Funktion, `intersectionCallback()`, sieht wie folgt aus:

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

Wie bereits erwähnt, erhält der {{domxref("IntersectionObserver")}}-Rückruf als Eingabe ein Array aller Ziel-Elemente, die durch einen Schnittstellen Verhältnis-Schwellenwert gegangen sind. Wir iterieren über jeden dieser Einträge—die {{domxref("IntersectionObserverEntry")}}-Typ sind. Wenn das Ziel-Element mit der Wurzel schneidet, wissen wir, dass es gerade vom verdeckten in den sichtbaren Zustand übergegangen ist. Wenn es zu mindestens 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und starten den Timer, indem wir die `dataset.lastViewStarted`-Eigenschaft der Anzeige auf die Übergangszeit in {{domxref("IntersectionObserverEntry.time", "entry.time")}} setzen und dann die Anzeige zur `visibleAds`-Menge hinzufügen, damit klar ist, dass sie verarbeitet werden muss, wenn die Zeit weitergeht.

Wenn die Anzeige den nicht schneidenden Zustand erreicht hat, entfernen wir sie aus der Menge der sichtbaren Anzeigen. Dann haben wir ein besonderes Verhalten: Wir schauen, ob {{domxref("IntersectionObserverEntry.intersectionRatio", "entry.intersectionRatio")}} den Wert 0.0 hat; wenn das der Fall ist, bedeutet das, dass das Element vollständig verdeckt wurde. Wenn das der Fall ist und die Anzeige insgesamt mindestens eine Minute sichtbar war, rufen wir eine Funktion `replaceAd()` auf, die die bestehende Anzeige durch eine neue ersetzt. Auf diese Weise sieht der Benutzer im Laufe der Zeit verschiedene Anzeigen, aber die Anzeigen werden nur ersetzt, wenn sie nicht gesehen werden können, was zu einem nahtlosen Erlebnis führt.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird etwa einmal pro Sekunde durch den Aufruf von {{domxref("setInterval()")}} in der `startup()`-Funktion [oben beschrieben](#einrichtung) aufgerufen. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und einen Neuzeichnungsprozess zu planen, um die Timer zu aktualisieren, die wir in jeder Anzeige anzeigen.

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

Das Array `redrawList` wird verwendet, um eine Liste aller Anzeigen zu erstellen, die während dieses aktiven Erfrischungszyklus neu gezeichnet werden müssen, da die Gesamtanzahl an Sekunden aufgrund Schreibblockaden oder anderer Systeme die Zeit in den Intervallen oder dazwischen möglicherweise nicht exakt übereinstimmt.

Dann, für jede der sichtbaren Anzeigen, behalten wir den Wert von `dataset.totalViewTime` (die Gesamtanzahl an Millisekunden, die die Anzeige seit dem letzten Update sichtbar war), bevor wir `updateAdTimer()` aufrufen, um die Zeit zu aktualisieren. Wenn sich der Wert geändert hat, fügen wir die Anzeige zur `redrawList` hinzu, sodass wir wissen, dass sie während des nächsten Animationsframes aktualisiert werden muss.

Schließlich, wenn mindestens ein Element neu gezeichnet werden muss, verwenden wir {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}}, um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsframes neu zeichnet.

#### Aktualisieren eines Anzeige-Timers

Zuvor (siehe [Umgang mit Änderungen der Dokumentensichtbarkeit](#umgang_mit_änderungen_der_dokumenten_sichtbarkeit) und [Umgang mit periodischen Aktionen](#umgang_mit_periodischen_aktionen)) haben wir gesehen, dass wir zum Aktualisieren des „Gesamtanzeigezeit“-Zählers einer Anzeige eine Funktion namens `updateAdTimer()` aufrufen. Diese Funktion nimmt als Eingabe das {{domxref("HTMLDivElement")}}-Objekt einer Anzeige. Hier ist sie:

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

Um die sichtbare Zeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Datenattribute (siehe [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*`)) auf jeder Anzeige:

- `lastViewStarted`
  - : Die Zeit in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, an der die Sichtbarkeitsdauer der Anzeige zuletzt aktualisiert wurde oder die Anzeige zuletzt sichtbar wurde. 0, wenn die Anzeige bei der letzten Überprüfung nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtanzahl an Millisekunden, die die Anzeige sichtbar war.

Diese werden über das {{domxref("HTMLElement.dataset")}}-Attribut des Elements abgerufen, das eine {{domxref("DOMStringMap")}}-Zuordnung jedes benutzerdefinierten Attributs zu seinem Wert bereitstellt. Die Werte sind Zeichenfolgen, aber wir können diese leicht in Zahlen umwandeln—tatsächlich macht JavaScript dies normalerweise automatisch, obwohl wir eine Instanz haben werden, bei der wir es selbst tun müssen.

Wir beginnen damit, die Zeit, zu der die vorherige Sichtbarkeitsüberprüfung der Anzeige (`adBox.dataset.lastViewStarted`) durchgeführt wurde, in eine lokale Variable mit dem Namen `lastStarted` abzurufen. Wir holen uns auch den aktuellen Zeitwert relativ zur Erstellungszeit des Dokuments mit {{domxref("Performance.now", "performance.now()")}} in `currentTime`.

Wenn `lastStarted` ungleich null ist—was bedeutet, dass der Timer läuft, berechnen wir die Differenz zwischen der aktuellen Zeit und der Startzeit, um die Anzahl an Millisekunden zu bestimmen, in denen die Anzeige seit der letzten Zeit sichtbar war. Diese wird zum aktuellen Wert der `totalViewTime` der Anzeige addiert, um die Gesamtzeit auf den aktuellen Stand zu bringen. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; weil diese Werte Zeichenfolgen sind, führt JavaScript ohne sie eine Zeichenfolge Verkettung anstelle einer Addition durch.

Schließlich wird die zuletzt angezeigte Zeit für die Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht unabhängig davon, ob der Timer zu dem Zeitpunkt läuft, an dem diese Funktion aufgerufen wurde, oder nicht; dies führt dazu, dass der Timer der Anzeige beim Verlassen dieser Funktion immer läuft. Dies erscheint sinnvoll, weil diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, selbst wenn sie gerade erst sichtbar geworden ist.

#### Zeichnen eines Anzeige-Timers

In jeder der nachstehenden Anzeigen zeigen wir zu Demonstrationszwecken den aktuellen Wert ihrer `totalViewTime` an, umgerechnet in Minuten und Sekunden. Dies wird gehandhabt, indem das Anzeigeelement an die `drawAdTimer()`-Funktion übergeben wird:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code findet den Timer der Anzeige mit ihrer ID, `"timer"`, und berechnet die verstrichenen Sekunden, indem die `totalViewTime` der Anzeige durch 1000 dividiert wird. Anschließend wird die verstrichene Minutenanzahl und Sekundenanzahl berechnet, bevor die {{domxref("HTMLElement/innerText", "innerText")}} des Timers auf eine Zeichenfolge gesetzt wird, die diese Zeit in der Form m:ss darstellt. Die {{jsxref("String.padStart()")}}-Methode wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Stellen aufgefüllt wird, wenn sie weniger als 10 beträgt.

#### Erstellen der Seiteninhalte

Die `buildContents()`-Funktion wird vom [Startcode](#einrichtung) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, die präsentiert werden sollen:

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

Die Variable `loremIpsum` enthält den Text, den wir für den Körper all unserer Artikel verwenden werden. Offensichtlich haben Sie in der realen Welt ein Skript, um Artikel aus einer Datenbank oder dergleichen abzurufen, aber dieser Text ist ausreichend für unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie können dies natürlich leicht ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeraden Artikel wird eine Anzeige „geladen“ und in die Seite eingefügt. Die Artikel werden in das Content-Box-Div eingefügt (also das {{HTMLElement("main")}}-Element, das den gesamten Inhaltsbereich der Seite enthält), nachdem sie mit einer Methode namens `createArticle()` erstellt wurden, die wir uns als Nächstes ansehen werden.

Die Anzeigen werden mit einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige als auch deren Inhalte erstellt und zur Seite hinzufügt. Wenn eine vorhandene Anzeige ersetzt werden soll, wird dieselbe Funktion verwendet, wie wir später sehen werden—erst dann werden Anzeigen zu den bestehenden Inhalten hinzugefügt.

#### Erstellen eines Artikels

Um das {{HTMLElement("article")}}-Element für einen Artikel (sowie alle seine Inhalte) zu erstellen, verwenden wir die `createArticle()`-Funktion, die als Eingabe eine Zeichenfolge erhält, die den vollständigen Text des auf der Seite einzufügenden Artikels enthält.

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

Zuerst wird das `<article>`-Element erstellt und dessen ID auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und für jeden Artikel erhöht wird). Dann erstellen und fügen wir ein {{HTMLElement("Heading_Elements", "h2")}}-Element für den Titel des Artikels hinzu und dann die HTML-Inhalte aus `contents` hinzu. Schließlich erhöhen wir `nextArticleID` (damit das nächste Element eine neue eindeutige ID erhält) und geben das neue `<article>`-Element an den Aufrufer zurück.

#### Erstellen einer Anzeige

Die `loadRandomAd()`-Funktion simuliert das Laden und Hinzufügen einer Anzeige zur Seite. Geben Sie keinen Wert für `replaceBox` an, wird ein neues Element erstellt, um die Anzeige zu enthalten, und die Anzeige wird anschließend zur Seite hinzugefügt. Geben Sie eine `replaceBox` an, wird dieses Element als bestehende Anzeige behandelt; statt ein neues zu erstellen, wird das bestehende Anzeigeelement geändert, um den neuen Stil, Inhalt und andere Daten der Anzeige zu erhalten. Dies vermeidet die Gefahr der Erstellung umfangreicher Layoutarbeiten, die auftreten könnten, wenn man zuerst das alte Element löscht und anschließend ein neues Element einfügt.

```js
function loadRandomAd(replaceBox) {
  const ads = [
    {
      bgcolor: "#cec",
      title: "Essen Sie grüne Bohnen",
      body: "Machen Sie Ihre Mutter stolz – sie sind gut für Sie!",
    },
    {
      bgcolor: "aquamarine",
      title: "MillionenVonKostenlosenBüchern.whatever",
      body: "Lesen Sie klassische Literatur kostenlos online!",
    },
    {
      bgcolor: "lightgrey",
      title: "3.14 Schattierungen von Grau: Ein Roman",
      body: "Liebe macht die Welt wirklich rund...",
    },
    {
      bgcolor: "#fee",
      title: "Flexbox Florist",
      body: "Wenn das Layout des Lebens kompliziert wird, versenden Sie Blumen.",
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

Zunächst wird das Array `ads` definiert. Dieses enthält die Daten, die benötigt werden, um jede Anzeige zu erstellen. Hier haben wir vier zur Auswahl. In einem realen Szenario würden die Anzeigen natürlich aus einer Datenbank oder wahrscheinlicher von einem Werbeservice stammen, von dem Sie Anzeigen über eine API abrufen. Allerdings sind unsere Bedürfnisse einfach: Jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: einer Hintergrundfarbe (`bgcolor`), einem Titel (`title`) und einer Körpertext-Zeichenfolge (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Diese wird auf das Element gesetzt, das die Anzeige darstellt. Für neue Anzeigen, die der Seite hinzugefügt werden, wird sie mit {{domxref("Document.createElement()")}} erstellt. Beim Ersetzen einer bestehenden Anzeige wird dies auf das angegebene Anzeigenelement (`replaceBox`) gesetzt.
- `title`
  - : Enthält das {{HTMLElement("Heading_Elements", "h2")}}-Element, das den Titel der Anzeige darstellt.
- `body`
  - : Enthält das {{HTMLElement("p")}}, das den Inhalt der Anzeige darstellt.
- `timerElem`
  - : Enthält das {{HTMLElement("div")}}-Element, das die Zeit enthält, die die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird durch Berechnung von `Math.floor(Math.random() * ads.length)` ausgewählt; das Ergebnis ist ein Wert zwischen 0 und der Anzahl der Anzeigen minus eins. Die entsprechende Anzeige ist jetzt als `adBox` bekannt.

Wird ein Wert für `replaceBox` angegeben, verwenden wir diesen als Anzeigenelement. Um dies zu tun, beenden wir zuerst die Beobachtung des Elements durch Aufrufen von {{domxref("IntersectionObserver.unobserve()")}}. Anschließend werden die lokalen Variablen für jedes Element, aus dem eine Anzeige besteht: die Anzeige-Box selbst, der Titel, der Text, und die Zeit-Box, auf die entsprechenden Elemente in der vorhandenen Anzeige gesetzt.

Wird kein Wert für `replaceBox` angegeben, erstellen wir ein neues Anzeigenelement. Das neue {{HTMLElement("div")}}-Element der Anzeige wird erstellt und seine Eigenschaften durch Festlegen seines Klassennamens auf `"ad"` festgelegt. Als nächstes wird das Anzeigentitel-Element erstellt, zusammen mit dem Body und dem Sichtbarkeits-Timer; dies sind ein {{HTMLElement("Heading_Elements", "h2")}}, ein {{HTMLElement("p")}}, und ein {{HTMLElement("div")}}-Element, die dem `adBox`-Element hinzugefügt werden.

Anschließend konvergieren die Codepfade wieder. Die Hintergrundfarbe der Anzeige wird auf den neuen Farbwert im Anzeigen-Datenobjekt gesetzt und die Klassen und Inhalte der Elemente entsprechend festgelegt.

Danach wird es Zeit, die benutzerdefinierten Daten-Eigenschaften zur Nachverfolgung der Sichtbarkeitsdaten der Anzeige vorzubereiten, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, das den Timer zeigen wird, den wir in der Anzeige präsentieren werden, auf die Klasse `"timer"`. Der Initialtext wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen, und er wird zur Anzeige hinzugefügt.

Wird keine bestehende Anzeige ersetzt, fügen wir das Element in den Inhaltsbereich der Seite mit {{domxref("Node.appendChild", "Document.appendChild()")}} ein. Wenn eine Anzeige ersetzt wird, ist sie bereits vorhanden und deren Inhalte wurden durch die neue Anzeige ersetzt. Dann verwenden wir die {{domxref("IntersectionObserver.observe", "observe()")}}-Methode unseres Intersection Observers, `adObserver`, um mit der Beobachtung der Anzeige auf Änderungen bezüglich ihrer Schnittstelle mit dem Viewport zu beginnen. Von nun an wird jedes Mal, wenn die Anzeige zu 100% verdeckt wird oder auch nur ein einziges Pixel sichtbar wird, oder wenn die Anzeige durch mindestens 75% sichtbare Schnittbereichsanteile hindurchgeht, die [Rückruf Funktion des Observers](#umgang_mit_schnittstellenänderungen) ausgeführt.

#### Ersetzen einer bestehenden Anzeige

Unser [Observer's Callback](#umgang_mit_schnittstellenänderungen) beobachtet Anzeigen, die zu 100% verdeckt und insgesamt mindestens eine Minute sichtbar waren. Wenn dies geschieht, wird die `replaceAd()`-Funktion mit dem Element dieser Anzeige als Eingabe aufgerufen, sodass die alte Anzeige durch eine neue ersetzt werden kann.

```js
function replaceAd(adBox) {
  updateAdTimer(adBox);

  const visibleTime = adBox.dataset.totalViewTime;
  console.log(
    `Anzeige ersetzen: ${
      adBox.querySelector("h2").innerText
    } - sichtbar für ${visibleTime}`,
  );

  loadRandomAd(adBox);
}
```

`replaceAd()` beginnt mit dem Aufruf von `updateAdTimer()` der bestehenden Anzeige, um sicherzustellen, dass deren Timer aktuell ist. Dies stellt sicher, dass, wenn wir ihre `totalViewTime` lesen, wir den exakten letzten Wert dafür sehen, wie lange die Anzeige für den Benutzer sichtbar war. Anschließend melden wir diese Daten; in diesem Fall durch Protokollierung in die Konsole, aber in der realen Welt würden Sie die Informationen an eine API eines Werbedienstes senden oder in eine Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir `loadRandomAd()` aufrufen und die Anzeige, die ersetzt werden soll, als Eingabe parameter angeben. Wie wir zuvor gesehen haben, kann `loadRandomAd()` eine bestehende Anzeige mit Inhalten und Daten einer neuen Anzeige ersetzen, wenn Sie ein bestehendes Anzeigenelement als Parameter angeben.

Das neue Anzeigeobjekt wird an den Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht folgendermaßen aus. Versuchen Sie zu Experimentieren, indem Sie nach oben und unten scrollen und beobachten Sie, wie sich Änderungen in der Sichtbarkeit auf die Timer in jeder Anzeige auswirken. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (jedoch muss die Anzeige erst aus dem Sichtbereich gescrollt und erneut angezeigt werden) und dass die Timer pausieren, während das Dokument in den Hintergrund getabbt wird. Das Abdecken des Browsers mit einem anderen Fenster pausiert jedoch die Timer nicht.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
