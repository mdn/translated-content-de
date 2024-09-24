---
title: Timing element visibility with the Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{DefaultAPISidebar("Intersection Observer API")}}

In diesem Artikel erstellen wir einen Mock-Blog, der eine Reihe von Anzeigen enthält, die über die Inhalte der Seite verteilt sind. Anschließend nutzen wir die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), um zu verfolgen, wie lange jede Anzeige für den Benutzer sichtbar ist. Wenn eine Anzeige eine sichtbare Zeit von einer Minute überschreitet, wird sie durch eine neue ersetzt.

Obwohl viele Aspekte dieses Beispiels nicht der realen Nutzung entsprechen (insbesondere verwenden alle Artikel denselben Text und werden nicht aus einer Datenbank geladen, und es gibt nur eine Handvoll einfacher textbasierter Anzeigen, die aus einem Array ausgewählt werden), sollte dies genug Verständnis der API vermitteln, um schnell zu lernen, wie man die Intersection Observer API auf Ihrer eigenen Website anwendet.

Es gibt einen guten Grund, warum das Konzept der Verfolgung der Sichtbarkeit von Anzeigen in diesem Beispiel verwendet wird. Es stellt sich heraus, dass eine der häufigsten Verwendungen von Flash oder anderen Skripten in der Web-Werbung darin besteht, die Sichtbarkeitsdauer jeder Anzeige zu protokollieren, um Abrechnung und Einnahmenzahlungen zu steuern. Ohne die Intersection Observer API wird dies in der Regel mithilfe von Intervallen und Timeouts für jede einzelne Anzeige durchgeführt oder mit anderen Techniken, die dazu neigen, die Seite zu verlangsamen. Mit dieser API kann alles vom Browser optimiert werden, um den Einfluss auf die Leistung erheblich zu reduzieren.

Lassen Sie uns beginnen!

## Erstellen der Website

### Seitenstruktur: Das HTML

Die Seitenstruktur ist nicht allzu kompliziert. Wir werden [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) verwenden, um die Seite zu stylen und zu layouten, daher können wir hier relativ einfach vorgehen:

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

Dies ist das Grundgerüst für die gesamte Website. Oben befindet sich der Kopfbereich der Seite, der in einem {{HTMLElement("header")}}-Block enthalten ist. Darunter definieren wir die Seitenleiste der Website als eine Liste von Links innerhalb eines {{HTMLElement("aside")}}-Blocks.

Zuletzt kommt der Hauptteil. Wir beginnen hier mit einem leeren {{HTMLElement("main")}}-Element. Dieses Feld wird später mithilfe von Skripten gefüllt.

### Die Seite mit CSS stylen

Mit der definierten Struktur der Seite wenden wir uns nun dem Styling der Seite zu. Lassen Sie uns den Stil für jede Komponente der Seite einzeln betrachten.

#### Die Grundlagen

Wir bieten Stile für die Elemente {{HTMLElement("body")}} und {{HTMLElement("main")}}, um den Hintergrund der Website sowie das Raster zu definieren, in dem die verschiedenen Teile der Seite platziert werden.

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

Das {{HTMLElement("body")}} der Website ist hier so konfiguriert, dass es eine der gängigen sans-serif-Schriftarten verwendet und `"aliceblue"` als Hintergrundfarbe festgelegt bekommt. Dann wird die Klasse `"wrapper"` definiert; sie umfasst den gesamten Blog, einschließlich des Headers, der Seitenleiste und des Hauptinhalts (Artikel und Anzeigen).

Der Wrapper erstellt ein CSS-Raster mit zwei Spalten und zwei Zeilen. Die erste Spalte (automatisch basierend auf ihrem Inhalt dimensioniert) wird für die Seitenleiste verwendet und die zweite Spalte (die für den Hauptinhalt verwendet wird) wird so dimensioniert, dass sie mindestens die Breite des Inhalts der Spalte und höchstens den gesamten verbleibenden verfügbaren Platz einnimmt.

Die erste Zeile wird speziell für den Seitenkopf verwendet. Die Zeilen sind genauso dimensioniert wie die Spalten: die erste wird automatisch dimensioniert und die zweite verwendet den restlichen Platz, jedoch mindestens so viel Platz, um Raum für alle darin enthaltenen Elemente zu bieten.

Die Breite des Wrappers ist auf 700px festgelegt, damit er in den verfügbaren Raum passt, wenn er inline auf MDN unten dargestellt wird.

#### Der Header

Der Header ist ziemlich einfach, da er in diesem Beispiel nur etwas Text enthält. Sein Stil sieht folgendermaßen aus:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} ist auf 1 gesetzt, da wir den Header in der oberen Zeile des Rasters der Seite platzieren möchten. Interessanter ist unsere Verwendung von {{cssxref("grid-column")}} hier; hier geben wir an, dass wir möchten, dass die Spalte in der ersten Spalte beginnt und in der Spalte hinter der letzten Rasterlinie endet—in anderen Worten, der Header spannt sich über alle Spalten im Raster. Perfekt für unsere Bedürfnisse.

#### Die Seitenleiste

Unsere Seitenleiste wird verwendet, um Links zu anderen Seiten auf der Website zu präsentieren. Keiner von ihnen funktioniert in unserem Beispiel hier, aber sie sind vorhanden, um mit der Präsentation eines blogähnlichen Erlebnisses zu helfen. Die Seitenleiste wird mithilfe eines {{HTMLElement("aside")}}-Elements dargestellt und ist wie folgt gestylt:

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

Das Wichtigste, das hier zu beachten ist, ist, dass {{cssxref("grid-column")}} auf 1 gesetzt ist, um die Seitenleiste auf der linken Seite des Bildschirms zu platzieren. Wenn Sie dies auf -1 ändern, erscheint sie auf der rechten Seite (obwohl einige andere Elemente leichte Anpassungen an ihren Rändern benötigen, um die Abstände korrekt einzustellen). {{cssxref("grid-row")}} ist auf 2 gesetzt, um es neben dem Inhaltsbereich der Seite zu platzieren.

#### Der Inhaltsbereich

Apropos das Inhaltsfeld der Seite: Der Hauptinhalt der Seite wird in einem {{HTMLElement("main")}}-Element gehalten. Folgender Stil wird darauf angewendet:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

Das Hauptmerkmal hier ist, dass die Rasterposition gesetzt ist, um den Hauptinhalt in Spalte 2, Zeile 2 zu platzieren.

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

Dies erzeugt Artikelkästen mit einem weißen Hintergrund, die auf dem blauen Hintergrund schwimmen, mit einem kleinen Rand um den Artikel. Jeder Artikel, der nicht das letzte Element im Container ist, hat einen unteren Rand von 8 Pixeln, um die Dinge zu eröffnen.

#### Anzeigen

Schließlich haben die Anzeigen das folgende ursprüngliche Styling. Einzelne Anzeigen können den Stil etwas anpassen, wie wir später sehen werden.

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

Hier ist nichts Magisches. Es ist ziemlich einfaches CSS.

### Alles mit JavaScript verknüpfen

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
  - : Eine Referenz auf das Objekt des {{HTMLElement("main")}}-Elements im DOM. Hier werden wir die Artikel und Anzeigen einfügen.
- `nextArticleID`
  - : Jeder Artikel erhält eine eindeutige ID-Nummer; diese Variable verfolgt die nächste zu verwendende ID, beginnend mit 1.
- `visibleAds`
  - : Ein {{jsxref("Set")}}, der verwendet wird, um die Anzeigen zu verfolgen, die derzeit auf dem Bildschirm sichtbar sind.
- `previouslyVisibleAds`
  - : Dient zur temporären Speicherung der Liste sichtbarer Anzeigen, während das Dokument nicht sichtbar ist (zum Beispiel, wenn der Benutzer zu einer anderen Seite gewechselt hat).
- `adObserver`
  - : Wird unseren [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) halten, der die Schnittstelle zwischen den Anzeigen und den Abmessungen des `<main>`-Elements verfolgt.
- `refreshIntervalID`
  - : Wird verwendet, um die von [`setInterval()`](/de/docs/Web/API/Window/setInterval) zurückgegebene Intervall-ID zu speichern. Dieses Intervall wird verwendet, um unsere regelmäßigen Aktualisierungen des Anzeigeinhalts auszulösen.

#### Einrichten

Um alles einzurichten, führen wir die Funktion `startup()` aus, wenn die Seite geladen wird:

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

Zuerst wird eine Referenz auf das Wrapping-Element {{HTMLElement("main")}} im Inhalt erhalten, sodass wir unseren Inhalt darin einfügen können. Dann richten wir einen Event-Listener für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis ein. Dieses Ereignis wird gesendet, wenn das Dokument ausgeblendet oder sichtbar wird, z.B. wenn der Benutzer die Tabs im Browser wechselt. Die Intersection Observer API berücksichtigt dies nicht, wenn sie die Schnittstelle erkennt, da die Schnittstelle nicht von der Sichtbarkeit der Seite beeinflusst wird. Daher müssen wir unsere Timer anhalten, während die Seite nicht betrachte;, daher dieser Ereignis-Listener.

Als nächstes richten wir die Optionen für den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) ein, die die Zielelemente (in unserem Fall Anzeigen) auf Schnittstellenänderungen im Vergleich zum Dokument überwacht. Die Optionen sind so konfiguriert, dass sie Überkreuzungen mit dem Viewport des Dokuments überwachen (indem `root` auf `null` gesetzt wird). Wir haben keine Ränder, um das Rechteck der Schnittstellenwurzel zu erweitern oder zu verkleinern; wir wollen für die Schnittstellenzwecke genau die Grenzen des Viewports des Dokuments treffen. Und der `threshold` ist auf ein Array gesetzt, das die Werte 0.0 und 0.75 enthält; dies wird unseren Rückruf immer dann ausführen, wenn ein gezieltes Element vollständig verdeckt oder erstmals sichtbar wird (Schnittstellenverhältnis 0.0) oder in beide Richtungen mehr als 75% sichtbar wird (Schnittstellenverhältnis 0.75).

Der Observer, `adObserver`, wird erstellt, indem der Konstruktor von `IntersectionObserver` mit der Rückruffunktion `intersectionCallback` und unseren Optionen aufgerufen wird.

Dann rufen wir eine Funktion `buildContents()` auf, die wir später definieren, um tatsächlich die Artikel und Anzeigen zu generieren und in das Dokument einzufügen, die wir präsentieren möchten.

Schließlich richten wir ein Intervall ein, das einmal pro Sekunde ausgelöst wird, um alle notwendigen Aktualisierungen durchzuführen. Wir benötigen ein Refresh pro Sekunde, da wir in diesem Beispiel Timer in allen sichtbaren Anzeigen anzeigen. Möglicherweise benötigen Sie überhaupt kein Intervall oder richten es anders oder mit einem anderen Zeitintervall ein.

#### Umgang mit Sichtbarkeitsänderungen des Dokuments

Schauen wir uns den Handler für das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis an. Unser Skript erhält dieses Ereignis, wenn das Dokument selbst sichtbar oder unsichtbar wird. Das wichtigste Szenario hier ist, wenn der Benutzer zwischen Tabs wechselt. Da der Intersection Observer nur an der Schnittstelle zwischen den gezielten Elementen und der Schnittstellenwurzel interessiert ist und nicht an der Sichtbarkeit der Tab (was ein völlig anderes Problem ist), müssen wir die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) verwenden, um diese Tab-Wechsel zu erkennen und unsere Timer für deren Dauer zu deaktivieren.

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

Da das Ereignis selbst nicht angibt, ob das Dokument von sichtbar zu unsichtbar gewechselt hat oder umgekehrt, wird die [`document.hidden`](/de/docs/Web/API/Document/hidden)-Eigenschaft überprüft, um festzustellen, ob das Dokument derzeit nicht sichtbar ist. Da es theoretisch möglich ist, dass wir bei mehreren Anrufen benachrichtigt werden, fahren wir nur fort, wenn wir die Timer noch nicht angehalten und die Sichtbarkeitszustände der bestehenden Anzeigen gespeichert haben.

Um die Timer anzuhalten, müssen wir nur die Anzeigen aus dem Set der sichtbaren Anzeigen (`visibleAds`) entfernen und sie als inaktiv markieren. Um dies zu tun, beginnen wir mit dem Speichern des Sets der sichtbaren Anzeigen in einer Variable namens `previouslyVisibleAds`, um sicherzustellen, dass wir sie wiederherstellen können, wenn der Benutzer auf das Dokument zurückwechselt, und leeren dann das `visibleAds`-Set, sodass sie nicht als sichtbar behandelt werden. Anschließend rufen wir für jede Anzeige, die ausgesetzt wird, unsere `updateAdTimer()`-Funktion auf, die das Aktualisieren des gesamten sichtbaren Zeitzählers der Anzeige übernimmt. Danach setzen wir ihre `dataset.lastViewStarted`-Eigenschaft auf 0, was anzeigt, dass der Timer der Anzeige nicht läuft.

Wenn das Dokument gerade sichtbar geworden ist, kehren wir diesen Prozess um: Zuerst gehen wir durch `previouslyVisibleAds` und setzen die `dataset.lastViewStarted` jedes Elements auf die aktuelle Dokumentzeit (in Millisekunden seit der Dokumenterstellung) mit der Methode [`performance.now()`](/de/docs/Web/API/Performance/now). Dann setzen wir `visibleAds` zurück auf `previouslyVisibleAds` und setzen letzteres auf `null`. Nun werden alle Anzeigen neu gestartet und so konfiguriert, dass sie wissen, dass sie zum aktuellen Zeitpunkt sichtbar wurden, sodass sie beim nächsten Update nicht die Dauer addieren, während der die Seite nicht sichtbar war.

#### Umgang mit Schnittstellenänderungen

Einmal pro Durchgang durch die Event-Schleife des Browsers überprüft jeder [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), ob einer seiner Ziel-Elemente durch eines der Schnittstellenverhältnisse des Beobachters gegangen ist. Für jeden Beobachter wird eine Liste von Zielen erstellt, die dies getan haben, und an den Rückruf des Observers als Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten gesendet. Unser Rückruf, `intersectionCallback()`, sieht wie folgt aus:

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

Wie bereits erwähnt, erhält der Rückruf des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) als Eingabe ein Array aller Ziel-Elemente des Beobachters, die entweder mehr oder weniger sichtbar als eines der Schnittstellenbeobachter-Verhältnisse geworden sind. Wir iterieren über jedes dieser Einträge, die vom Typ [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) sind. Wenn das Ziel-Element mit der Wurzel übereinstimmt, wissen wir, dass es gerade von einem verdeckten Zustand in den sichtbaren Zustand übergegangen ist. Wenn es mindestens 75% sichtbar geworden ist, betrachten wir die Anzeige als sichtbar und wir starten den Timer, indem wir das Attribut `dataset.lastViewStarted` der Anzeige auf die Übergangszeit in [`entry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) festlegen und die Anzeige anschließend dem Set `visibleAds` hinzufügen, damit wir sie im Laufe der Zeit verarbeiten können.

Wenn die Anzeige in einen Zustand von "nicht übereinstimmend" übergegangen ist, entfernen wir sie aus dem Set der sichtbaren Anzeigen. Dann haben wir ein spezielles Verhalten: Wir überprüfen, ob [`entry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) 0.0 ist; das bedeutet, dass das Element vollständig verdeckt wurde. Wenn dies der Fall ist und die Anzeige insgesamt mindestens eine Minute sichtbar war, rufen wir eine Funktion auf, die wir erstellen werden, und benennen sie `replaceAd()`, um die vorhandene Anzeige durch eine neue zu ersetzen. Auf diese Weise sieht der Benutzer im Laufe der Zeit eine Vielzahl von Anzeigen, aber die Anzeigen werden nur dann ersetzt, wenn sie nicht gesehen werden können, was zu einem nahtlosen Erlebnis führt.

#### Umgang mit periodischen Aktionen

Unser Intervall-Handler, `handleRefreshInterval()`, wird etwa einmal pro Sekunde durch den Aufruf von [`setInterval()`](/de/docs/Web/API/Window/setInterval) in der Funktion `startup()` [beschrieben oben](#einrichten) aufgerufen. Seine Hauptaufgabe besteht darin, die Timer jede Sekunde zu aktualisieren und einen Neuzeichnen-Zyklus für die Timer zu planen, die wir in jeder Anzeige zeichnen werden.

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

Das Array `redrawList` wird verwendet, um eine Liste aller Anzeigen zu führen, die während dieses Refresh-Zyklus neu gezeichnet werden müssen, da es nicht genau das gleiche wie die verstrichene Zeit aufgrund der Systemaktivität sein kann oder weil Sie das Intervall auf etwas anderes als jede 1000 Millisekunden gesetzt haben.

Dann speichern wir den Wert von `dataset.totalViewTime` (die Gesamtanzahl der Millisekunden, in denen die Anzeige zuletzt sichtbar war, ab dem letzten Update) und rufen dann `updateAdTimer()` auf, um die Zeit zu aktualisieren. Wenn es sich geändert hat, schieben wir die Anzeige auf die `redrawList`, damit wir wissen, dass sie während des nächsten Animationsrahmens aktualisiert werden muss.

Schließlich, wenn es mindestens ein Element zu aktualisieren gibt, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um eine Funktion zu planen, die jedes Element in der `redrawList` während des nächsten Animationsrahmens neu zeichnet.

#### Aktualisieren des Sichtbarkeitstimers einer Anzeige

Wie zuvor (siehe [Umgang mit Sichtbarkeitsänderungen des Dokuments](#umgang_mit_sichtbarkeitsänderungen_des_dokuments) und [Umgang mit periodischen Aktionen](#umgang_mit_periodischen_aktionen)) haben wir gesehen, dass, wenn wir den "gesamt sichtbaren Zeit"-Zähler einer Anzeige aktualisieren müssen, wir eine Funktion namens `updateAdTimer()` aufrufen, um dies zu tun. Diese Funktion erhält als Eingabe das Objekt eines `HTMLDivElement`s der Anzeige. Hier ist es:

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

Um die sichtbare Zeit eines Elements zu verfolgen, verwenden wir zwei benutzerdefinierte Datenattribute (siehe [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)) bei jeder Anzeige:

- `lastViewStarted`
  - : Die Zeit in Millisekunden, relativ zur Zeit, zu der das Dokument erstellt wurde, bei der sich die Sichtbarkeit der Anzeige zuletzt geändert hat, oder die Anzeige zuletzt sichtbar wurde. 0, wenn das Element beim letzten Check nicht sichtbar war.
- `totalViewTime`
  - : Die Gesamtanzahl an Millisekunden, bei der die Anzeige sichtbar war.

Diese werden über das Attribut [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) jede Anzeige aufgerufen, das eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) bietet, welches jede benutzerdefinierte Attributnamen-Zuordnung zu seinem WertMapping bereitstellt. Die Werte sind Zeichenfolgen, aber wir können diese in Zahlen ganz einfach konvertieren—in der Tat macht JavaScript dies im Allgemeinen automatisch, obwohl wir eine Instanz haben, in der wir dies selbst tun müssen.

Wir starten, indem wir die letzte Sichtbarkeitsstatus-Überprüfungszeit (`adBox.dataset.lastViewStarted`) eines Elements in eine lokale Variable namens `lastStarted` bringen. Wir erhalten auch die aktuelle `Zeit-seit-Erstellung`-Werte mit [`performance.now()`](/de/docs/Web/API/Performance/now) in `currentTime`.

Wenn `lastStarted` ungleich Null ist—was bedeutet, dass der Timer derzeit läuft, berechnen wir den Unterschied zwischen der aktuellen Zeit und der Startzeit, um die Anzahl der Millisekunden zu bestimmen, in denen die Anzeige seit dem letzten sichtbaren Zeitpunkt sichtbar war. Dies wird dem aktuellen Wert der Anzeige `totalViewTime` hinzugefügt, um die Summe auf den aktuellen Wert zu bringen. Beachten Sie die Verwendung von {{jsxref("parseFloat", "parseFloat()")}} hier; da diese Werte Zeichenfolgen sind, versucht JavaScript, eine Zeichenfolgenverbindung anstelle von Addition durchzuführen, ohne dass es das vorher explizit konvertiert.

Schließlich wird die Uhrzeitverschiebungszeit der Anzeige auf die aktuelle Zeit aktualisiert. Dies geschieht, ob der Timer lief, als diese Funktion aufgerufen wurde, oder nicht; Dies bewirkt, dass der Timer, wenn diese Funktion zurückkehrt, immer läuft. Dies ist sinnvoll, da diese Funktion nur aufgerufen wird, wenn die Anzeige sichtbar ist, auch wenn sie gerade jetzt sichtbar geworden ist.

#### Zeichnen des Timers einer Anzeige

In jede Anzeige wird zu Demonstrationszwecken der aktuelle Wert von `totalViewTime` in Minuten und Sekunden gezeichnet. Dies wird gehandhabt, indem das Anzeige-Element in die `drawAdTimer()`-Funktion übergeben wird:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

Dieser Code sucht den Timer der Anzeige mithilfe ihrer ID `"timer"` und berechnet die Anzahl der verstrichenen Sekunden durch Teilen der `totalViewTime` der Anzeige durch 1000. Dann berechnet er die verstrichene Minuten- und Sekundenzahl, bevor er den [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des Timers auf eine Zeichenfolge setzt, die diese Zeit in Form von m:ss darstellt. Die Methode {{jsxref("String.padStart()")}} wird verwendet, um sicherzustellen, dass die Anzahl der Sekunden auf zwei Stellen aufgefüllt wird, wenn sie kleiner als 10 ist.

#### Die Seiteninhalte erstellen

Die `buildContents()`-Funktion wird von dem [Startcode](#einrichten) aufgerufen, um die Artikel und Anzeigen auszuwählen und in das Dokument einzufügen, die präsentiert werden sollen:

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

Die Variable `loremIpsum` enthält den Text, den wir für den Textkörper aller unserer Artikel verwenden. Offensichtlich hätten Sie in der realen Welt etwas Code, um Artikel aus einer Datenbank oder dergleichen abzurufen, aber das erfüllt die Aufgabe für unsere Zwecke. Jeder Artikel verwendet denselben Text; Sie könnten das natürlich leicht ändern.

`buildContents()` erstellt eine Seite mit fünf Artikeln. Nach jedem ungeraden Artikel wird eine Anzeige "geladen" und in die Seite eingefügt. Artikel werden in das Inhaltsfeld (das heißt, das {{HTMLElement("main")}}-Element, das alle Website-Inhalte enthält) eingefügt, nachdem sie mithilfe einer Methode erstellt wurden, die `createArticle()` heißt, die wir uns als nächstes anschauen werden.

Die Anzeigen werden mithilfe einer Funktion namens `loadRandomAd()` erstellt, die sowohl die Anzeige erstellt als auch in die Seite einfügt. Wir werden später sehen, dass dieselbe Funktion auch eine bestehende Anzeige ersetzen kann, aber für den Moment fügen wir Anzeigen zum bestehenden Inhalt hinzu.

#### Einen Artikel erstellen

Um das {{HTMLElement("article")}}-Element für einen Artikel zu erstellen (sowie alle seine Inhalte), verwenden wir die Funktion `createArticle()`, die als Eingabe einen String nimmt, der den vollständigen Text des Artikels enthält, den es der Seite hinzufügt.

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

Zuerst wird das `<article>` Element erstellt und seine ID wird auf den eindeutigen Wert `nextArticleID` gesetzt (der bei 1 beginnt und für jeden Artikel steigt). Dann erstellen und fügen wir ein {{HTMLElement("Heading_Elements", "h2")}}-Element für den Artikeltitel ein und fügen anschließend das HTML aus `contents` hinzu. Schließlich wird `nextArticleID` inkrementiert (sodass das nächste Element eine neue eindeutige ID erhält), und wir geben das neue `<article>` Element an den Aufrufer zurück.

#### Eine Anzeige erstellen

Die `loadRandomAd()`-Funktion simuliert das Laden einer Anzeige und das Hinzufügen zur Seite. Wenn Sie keinen Wert für `replaceBox` angeben, wird ein neues Element erstellt, um die Anzeige zu enthalten; die Anzeige wird dann an die Seite angehängt. Wenn Sie eine `replaceBox` angeben, wird dieses Feld als bestehendes Anzeigen-Element behandelt; anstatt eine neue zu erstellen, wird das bestehende Element geändert, um den neuen Stil, den Inhalt und die anderen Daten der neuen Anzeige zu enthalten. Dadurch wird das Risiko von umfangreichen Layoutarbeiten beim Aktualisieren der Anzeige vermieden, die auftreten könnten, wenn Sie zuerst das alte Element löschen und dann ein neues einfügen.

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

Zuerst kommt das Array `ads`. Dieses Array enthält die Daten, die zum Erstellen jeder Anzeige benötigt werden. Wir haben hier vier zur Auswahl. In einem realen Szenario würden die Anzeigen natürlich aus einer Datenbank stammen oder, wahrscheinlicher, von einem Werbedienst, von dem Sie Anzeigen mithilfe einer API abrufen. Allerdings sind unsere Anforderungen einfach: Jede Anzeige wird durch ein Objekt mit drei Eigenschaften dargestellt: einer Hintergrundfarbe (`bgcolor`), einem Titel (`title`) und einer Textzeichenfolge für den Körper (`body`).

Dann definieren wir mehrere Variablen:

- `adBox`
  - : Das wird auf das Element gesetzt, das die Anzeige darstellt. Für neue Anzeigen, die an die Seite angehängt werden, wird dieser mithilfe von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt. Wenn eine bestehende Anzeige ersetzt wird, wird dies auf das angegebene Anzeigen-Element (`replaceBox`) gesetzt.
- `title`
  - : Wird das {{HTMLElement("Heading_Elements", "h2")}} Element enthalten, das den Titel der Anzeige darstellt.
- `body`
  - : Wird das {{HTMLElement("p")}} enthalten, das den Text des Anzeigetextes darstellt.
- `timerElem`
  - : Wird das {{HTMLElement("div")}} Element enthalten, das die Zeit darstellt, wie lange die Anzeige bisher sichtbar war.

Eine zufällige Anzeige wird ausgewählt, indem `Math.floor(Math.random() * ads.length)` berechnet wird; das Ergebnis ist ein Wert zwischen 0 und einer weniger als die Anzahl der Anzeigen. Die entsprechende Anzeige ist jetzt als `adBox` bekannt.

Wenn ein Wert für `replaceBox` angegeben ist, verwenden wir diesen als Anzeigenelement. Um dies zu tun, beginnen wir mit der Beendigung der Beobachtung des Elements durch Aufruf von [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve). Dann werden die lokalen Variablen für jeden der Elemente, die eine Anzeige umfassen: Die Anzeigebox selbst, der Titel, der Körper und die Timer-Box werden auf die jeweiligen Elemente der bestehenden Anzeige eingestellt.

Wenn kein Wert für `replaceBox` angegeben ist, erstellen wir ein neues Anzeigenelement. Das neue `{{HTMLElement("div")}}` Element der Anzeige wird erstellt und seine Eigenschaften durch Setzen seines Klassennamens auf `"ad"` festgelegt. Danach wird das Anzeigetitel-Element erstellt, sowie der Körper und der Sichtbarkeitstimer; diese sind ein `{{HTMLElement("Heading_Elements", "h2")}}`, ein `{{HTMLElement("p")}}` und ein `{{HTMLElement("div")}}` Element. Diese Elemente werden dem `adBox` Element hinzugefügt.

Danach konvergieren die Code-Pfade wieder. Die Hintergrundfarbe der Anzeige wird auf den im neuen Anzeigen-Datensatz angegebenen Wert gesetzt und die Klassen und Inhalte der Elemente werden ebenfalls entsprechend gesetzt.

Anschließend ist es Zeit, die benutzerdefinierten Dateneigenschaften einzurichten, um die Sichtbarkeitsdaten der Anzeige zu verfolgen, indem `adBox.dataset.totalViewTime` und `adBox.dataset.lastViewStarted` auf 0 gesetzt werden.

Schließlich setzen wir die ID des `<div>`, die den Timer anzeigen wird, den wir in der Anzeige zeigen möchten, um zu sehen, wie lange sie sichtbar war, und geben ihm die Klasse `"timer"`. Der anfängliche Text wird auf "0:00" gesetzt, um die Startzeit von 0 Minuten und 0 Sekunden darzustellen, und es wird der Anzeige hinzugefügt.

Wenn wir keine bestehende Anzeige ersetzen, müssen wir das Element an den Inhaltsbereich der Seite mithilfe von [`Document.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen. Wenn wir eine Anzeige ersetzen, ist sie bereits vorhanden, mit ihren Inhalten, die durch die neue Anzeige ersetzt wurden. Dann rufen wir die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe) Methode auf unserem Intersection Observer, `adObserver`, auf, um zu beginnen, die Anzeige auf Änderungen an ihren Schnittstellen mit dem Viewport zu beobachten. Von nun an wird jedes Mal, wenn die Anzeige zu 100% verdeckt oder sogar ein einzelnes Pixel sichtbar wird, oder die Anzeige durch 75% sichtbar in die eine oder andere Richtung verläuft, der [Rückruf des Observers](#umgang_mit_schnittstellenänderungen) ausgeführt.

#### Eine bestehende Anzeige ersetzen

Unser [Rückruf des Observers](#umgang_mit_schnittstellenänderungen) hält Ausschau nach Anzeigen, die vollständig verdeckt werden und mindestens eine Minute sichtbar waren. Wenn dies passiert, wird die `replaceAd()` Funktion mit diesem Anzeigenelement als Eingabe aufgerufen, sodass die alte Anzeige durch eine neue ersetzt werden kann.

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

`replaceAd()` beginnt damit, `updateAdTimer()` auf die bestehende Anzeige aufzurufen, um sicherzustellen, dass ihr Timer auf dem aktuellen Stand ist. Dies stellt sicher, dass wir bei der Abfrage von `totalViewTime` den exakten Endwert sehen, wie lange die Anzeige für den Benutzer sichtbar war. Anschließend berichten wir diese Daten; in diesem Fall, indem wir sie an die Konsole protokollieren, aber in der realen Welt würden Sie die Informationen an die API eines Anzeigedienstes senden oder in einer Datenbank speichern.

Dann laden wir eine neue Anzeige, indem wir [`loadRandomAd()`](#eine_anzeige_erstellen) aufrufen, wobei wir die zu ersetzende Anzeige als Eingabeparameter angeben. Wie wir zuvor gesehen haben, wird `loadRandomAd()` eine bestehende Anzeige mit den Inhalten und Daten einer neuen Anzeige ersetzen, wenn Sie ein bestehendes Element der Anzeige als Eingabeparameter angeben.

Das neue Element-Objekt der Anzeige wird an den Aufrufer zurückgegeben, falls es benötigt wird.

### Ergebnis

Die resultierende Seite sieht so aus. Versuchen Sie zu experimentieren, indem Sie nach oben und unten scrollen und beachten Sie, wie Änderungen in der Sichtbarkeit die Timer in jeder Anzeige beeinflussen. Beachten Sie auch, dass jede Anzeige nach einer Minute Sichtbarkeit ersetzt wird (aber zuerst aus der Ansicht herausgescrollt werden muss, bevor es wieder erscheint), und wie die Timer pausieren, während das Dokument in den Hintergrund getabbt wird. Das Bedecken des Browsers mit einem anderen Fenster pausiert jedoch die Timer nicht.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
