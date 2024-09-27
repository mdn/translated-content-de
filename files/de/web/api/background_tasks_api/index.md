---
title: Background Tasks API
slug: Web/API/Background_Tasks_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Background Tasks")}}

Die **Kooperative Planung von Hintergrundaufgaben-API** (auch als Hintergrundaufgaben-API oder `requestIdleCallback()` API bezeichnet) bietet die Möglichkeit, Aufgaben in eine Warteschlange zu stellen, die vom Benutzeragenten automatisch ausgeführt werden, wenn er feststellt, dass es freie Zeit dafür gibt.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API).

## Konzepte und Verwendung

Der Haupt-Thread eines Webbrowsers dreht sich um seine Ereignisschleife. Dieser Code führt alle anstehenden Aktualisierungen des aktuell angezeigten [`Document`](/de/docs/Web/API/Document) aus, führt den benötigten JavaScript-Code der Seite aus, akzeptiert Ereignisse von Eingabegeräten und verteilt diese Ereignisse an die Elemente, die sie empfangen sollen. Darüber hinaus verwaltet die Ereignisschleife Interaktionen mit dem Betriebssystem, Aktualisierungen der Benutzeroberfläche des Browsers und so weiter. Es handelt sich um ein extrem ausgelastetes Stück Code, und Ihr Haupt-JavaScript-Code kann direkt in diesem Thread zusammen mit all dem laufen. Sicherlich läuft der meiste, wenn nicht sogar der gesamte Code, der Änderungen am DOM vornehmen kann, im Haupt-Thread, da es üblich ist, dass Benutzeroberflächenänderungen nur dem Haupt-Thread zur Verfügung stehen.

Da die Ereignisverarbeitung und Bildschirmaktualisierungen zwei der offensichtlichsten Möglichkeiten sind, wie Benutzer Leistungsprobleme bemerken, ist es wichtig, dass Ihr Code ein guter Bürger des Webs ist und dazu beiträgt, Verzögerungen in der Ausführung der Ereignisschleife zu verhindern. In der Vergangenheit gab es keine zuverlässige Möglichkeit, dies zu tun, außer durch das Schreiben möglichst effizienter Codes und durch das Auslagern so vieler Arbeiten wie möglich an [Workers](/de/docs/Web/API/Web_Workers_API). [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) macht es möglich, aktiv dabei mitzuhelfen, dass die Ereignisschleife des Browsers reibungslos abläuft, indem sie dem Browser erlaubt, Ihrem Code mitzuteilen, wie viel Zeit sicher genutzt werden kann, ohne das System zu verzögern. Wenn Sie innerhalb des angegebenen Limits bleiben, können Sie das Benutzererlebnis erheblich verbessern.

### Das Beste aus Leerlauf-Callbacks herausholen

Da Leerlauf-Callbacks dazu gedacht sind, Ihrem Code eine Möglichkeit zu geben, mit der Ereignisschleife zu kooperieren, um sicherzustellen, dass das System sein volles Potenzial ausschöpft, ohne es zu überlasten und dadurch Verzögerungen oder andere Leistungsprobleme zu verursachen, sollten Sie sorgfältig überlegen, wie Sie sie verwenden.

- **Verwenden Sie Leerlauf-Callbacks für Aufgaben, die keine hohe Priorität haben.** Da Sie nicht wissen, wie viele Callbacks eingerichtet sind und wie beschäftigt das System des Benutzers ist, wissen Sie nicht, wie häufig Ihr Callback ausgeführt wird (es sei denn, Sie geben eine `timeout` an). Es gibt keine Garantie dafür, dass jeder Durchlauf der Ereignisschleife (oder sogar jeder Bildschirmaktualisierungszyklus) ausgeführt wird; wenn die Ereignisschleife die gesamte verfügbare Zeit beansprucht, haben Sie Pech (es sei denn, Sie haben eine `timeout` verwendet).
- **Leerlauf-Callbacks sollten ihr Bestes tun, um die zugewiesene Zeit nicht zu überschreiten.** Obwohl der Browser, Ihr Code und das Web im Allgemeinen normal weiterlaufen, wenn Sie die angegebene Zeit überschreiten (selbst wenn Sie _weit_ darüber hinausgehen), soll die Zeitbeschränkung sicherstellen, dass Sie dem System genügend Zeit lassen, um den aktuellen Durchlauf der Ereignisschleife zu beenden und zum nächsten überzugehen, ohne dass anderer Code stockt oder Animationseffekte verzögern. Derzeit hat [`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining) ein oberes Limit von 50 Millisekunden, aber in Wirklichkeit haben Sie oft weniger Zeit, da die Ereignisschleife bereits in diese Zeit auf komplexen Seiten eingreift und Browsererweiterungen Prozessortime benötigen.
- **Vermeiden Sie Änderungen am DOM innerhalb Ihres Leerlauf-Callbacks.** Wenn Ihr Callback ausgeführt wird, ist der aktuelle Frame bereits fertig gezeichnet, und alle Layoutaktualisierungen und -berechnungen wurden abgeschlossen. Wenn Sie Änderungen vornehmen, die das Layout beeinflussen, können Sie eine Situation erzwingen, in der der Browser anhalten und Neuberechnungen durchführen muss, die sonst nicht erforderlich wären. Wenn Ihr Callback das DOM ändern muss, sollte er [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden, um dies zu planen.
- **Vermeiden Sie Aufgaben, deren Laufzeit nicht vorhersehbar ist.** Ihr Leerlauf-Callback sollte alles vermeiden, was eine unvorhersehbare Zeit in Anspruch nehmen könnte. Zum Beispiel sollte alles, was das Layout beeinflussen könnte, vermieden werden. Sie sollten auch das Auflösen oder Ablehnen von {{jsxref("Promise")}}s vermeiden, da dies den Handler für die Auflösung oder Ablehnung dieser Promise sofort nach der Rückkehr Ihres Callbacks aufruft.
- **Verwenden Sie Zeitlimits, wenn es nötig ist, aber nur dann.** Zeitlimits können sicherstellen, dass Ihr Code rechtzeitig ausgeführt wird, aber sie können auch dazu führen, dass Sie Verzögerungen oder Animationsruckler verursachen, indem sie den Browser zwingen, Sie aufzurufen, wenn nicht genügend Zeit bleibt, um ohne Unterbrechung der Leistung zu laufen.

## Schnittstellen

Die Hintergrundaufgaben-API fügt nur eine neue Schnittstelle hinzu:

- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
  - : Ein Objekt dieses Typs wird dem Leerlauf-Callback übergeben, um eine Schätzung zu geben, wie lange der Leerlaufzeitraum voraussichtlich dauern wird, sowie um anzugeben, ob der Callback ausgeführt wird, weil seine Timeout-Periode abgelaufen ist.

Die [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird auch durch diese API erweitert, um die neuen Methoden [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) und [`cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) anzubieten.

## Beispiel

In diesem Beispiel werden wir sehen, wie Sie [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) verwenden können, um zeitaufwendige, niedrig priorisierte Aufgaben während der Zeit auszuführen, in der der Browser sonst im Leerlauf sein würde. Darüber hinaus zeigt dieses Beispiel, wie Dokumentinhalt-Updates mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) geplant werden können.

Unten finden Sie nur das HTML und JavaScript für dieses Beispiel. Das CSS wird nicht gezeigt, da es nicht entscheidend für das Verständnis dieser Funktionalität ist.

### HTML

Um sich zu orientieren, was wir erreichen wollen, werfen wir einen Blick auf das HTML. Dies erstellt ein Feld (`id="container"`), das verwendet wird, um den Fortschritt einer Operation darzustellen (da Sie schließlich nie wissen, wie lange die Dekodierung von "Quantenfilament-Tachyonenemissionen" dauern wird), sowie ein zweites Hauptfeld (`id="logBox"`), das verwendet wird, um textuelle Ausgaben anzuzeigen.

```html
<p>
  Demonstration of using cooperatively scheduled background tasks using the
  <code>requestIdleCallback()</code> method.
</p>

<div id="container">
  <div class="label">Decoding quantum filament tachyon emissions…</div>

  <progress id="progress" value="0"></progress>

  <button class="button" id="startButton">Start</button>

  <div class="label counter">
    Task <span id="currentTaskNumber">0</span> of
    <span id="totalTaskCount">0</span>
  </div>
</div>

<div id="logBox">
  <div class="logHeader">Log</div>
  <div id="log"></div>
</div>
```

Das Fortschrittsfeld verwendet ein {{HTMLElement("progress")}}-Element, um den Fortschritt anzuzeigen, zusammen mit einem Etikett mit Abschnitten, die geändert werden, um numerische Informationen über den Fortschritt zu präsentieren. Außerdem gibt es eine Schaltfläche "Start" (kreativ mit der ID "startButton" versehen), die der Benutzer verwendet, um die Datenverarbeitung zu starten.

```css hidden
body {
  font-family: "Open Sans", "Lucida Grande", "Arial", sans-serif;
  font-size: 16px;
}

#logBox {
  margin-top: 16px;
  width: 400px;
  height: 500px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
}

.logHeader {
  margin: 0;
  padding: 0 6px 4px;
  height: 22px;
  background-color: lightblue;
  border-bottom: 1px solid black;
  border-radius: 6px 6px 0 0;
}

#log {
  font:
    12px "Courier",
    monospace;
  padding: 6px;
  overflow: auto;
  overflow-y: scroll;
  width: 388px;
  height: 460px;
}

#container {
  width: 400px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
  display: block;
  overflow: auto;
}

.label {
  display: inline-block;
}

.counter {
  text-align: right;
  padding-top: 4px;
  float: right;
}

.button {
  padding-top: 2px;
  padding-bottom: 4px;
  width: 100px;
  display: inline-block;
  float: left;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  margin-top: 0;
  color: white;
  background-color: darkgreen;
}

#progress {
  width: 100%;
  padding-top: 6px;
}
```

### JavaScript

Da die Dokumentstruktur definiert ist, konstruieren Sie den JavaScript-Code, der die Arbeit erledigen wird. Das Ziel: In der Lage zu sein, Anfragen zum Aufrufen von Funktionen in eine Warteschlange zu stellen, mit einem Leerlauf-Callback, das diese Funktionen immer dann ausführt, wenn das System lange genug im Leerlauf ist, um Fortschritte zu machen.

#### Variablendeklarationen

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

Diese Variablen werden verwendet, um die Liste der Aufgaben zu verwalten, die auf die Ausführung warten, sowie Statusinformationen über die Aufgabenwarteschlange und ihre Ausführung:

- `taskList` ist ein {{jsxref("Array")}} von Objekten, von denen jedes eine Aufgabe darstellt, die auf die Ausführung wartet.
- `totalTaskCount` ist ein Zähler für die Anzahl der Aufgaben, die zur Warteschlange hinzugefügt wurden; er geht nur nach oben, nie nach unten. Wir verwenden dies, um den Fortschritt als Prozentsatz der gesamten Arbeit zu präsentieren.
- `currentTaskNumber` wird verwendet, um zu verfolgen, wie viele Aufgaben bisher bearbeitet wurden.
- `taskHandle` ist eine Referenz auf die gerade bearbeitete Aufgabe.

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

Als nächstes haben wir Variablen, die auf die DOM-Elemente verweisen, mit denen wir interagieren müssen. Diese Elemente sind:

- `totalTaskCountElem` ist der {{HTMLElement("span")}}, den wir verwenden, um die Gesamtanzahl der erstellten Aufgaben in die Statusanzeige im Fortschrittsfeld einzufügen.
- `currentTaskNumberElem` ist das Element, das die Anzahl der bisher bearbeiteten Aufgaben anzeigt.
- `progressBarElem` ist das {{HTMLElement("progress")}}-Element, das den Prozentsatz der bisher bearbeiteten Aufgaben anzeigt.
- `startButtonElem` ist die Startschaltfläche.
- `logElem` ist der {{HTMLElement("div")}}, in den wir Protokolltextnachrichten einfügen werden.

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

Schließlich richten wir ein paar Variablen für andere Elemente ein:

- `logFragment` wird verwendet, um ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu speichern, das von unseren Protokollierungsfunktionen generiert wird, um Inhalte für das Protokoll zu erstellen, die beim nächsten Animationsframe angehängt werden.
- `statusRefreshScheduled` wird verwendet, um zu verfolgen, ob wir bereits ein Update des Statusanzeigefeldes für den kommenden Frame geplant haben, damit wir dies nur einmal pro Frame tun.

```js hidden
requestIdleCallback =
  requestIdleCallback ||
  ((handler) => {
    const startTime = Date.now();

    return setTimeout(() => {
      handler({
        didTimeout: false,
        timeRemaining() {
          return Math.max(0, 50.0 - (Date.now() - startTime));
        },
      });
    }, 1);
  });

cancelIdleCallback =
  cancelIdleCallback ||
  ((id) => {
    clearTimeout(id);
  });
```

#### Verwaltung der Aufgabenwarteschlange

Als nächstes werfen wir einen Blick darauf, wie wir die Aufgaben verwalten, die ausgeführt werden müssen. Wir werden dies durch die Erstellung einer FIFO-Warteschlange von Aufgaben tun, die wir als Zeit während der Leerlauf-Callback-Periode ausführen.

##### Aufgaben einreihen

Zuerst benötigen wir eine Funktion, die Aufgaben für die zukünftige Ausführung einreiht. Diese Funktion, `enqueueTask()`, sieht wie folgt aus:

```js
function enqueueTask(taskHandler, taskData) {
  taskList.push({
    handler: taskHandler,
    data: taskData,
  });

  totalTaskCount++;

  if (!taskHandle) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  }

  scheduleStatusRefresh();
}
```

`enqueueTask()` akzeptiert zwei Parameter als Eingabe:

- `taskHandler` ist eine Funktion, die aufgerufen wird, um die Aufgabe zu bearbeiten.
- `taskData` ist ein Objekt, das beim Aufruf des Aufgabenhandlers als Eingabeparameter übergeben wird, um der Aufgabe benutzerdefinierte Daten zu übermitteln.

Um die Aufgabe einzureihen, [drücken](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) wir ein Objekt auf das `taskList` Array; das Objekt enthält die `taskHandler`- und `taskData`-Werte unter den Namen `handler` und `data` und inkrementieren dann `totalTaskCount`, das die Gesamtzahl der Aufgaben widerspiegelt, die jemals in die Warteschlange gestellt wurden (wir dekrementieren es nicht, wenn Aufgaben aus der Warteschlange entfernt werden).

Als nächstes überprüfen wir, ob wir bereits einen Leerlauf-Callback erstellt haben; wenn `taskHandle` 0 ist, wissen wir, dass noch kein Leerlauf-Callback existiert, also rufen wir [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) auf, um eines zu erstellen. Es ist so konfiguriert, dass es eine Funktion namens `runTaskQueue()` aufruft, die wir uns gleich ansehen werden, mit einem `timeout` von 1 Sekunde, damit es mindestens einmal pro Sekunde ausgeführt wird, selbst wenn keine tatsächliche Leerlaufzeit verfügbar ist.

##### Aufgaben ausführen

Unser Leerlauf-Callback-Handler, `runTaskQueue()`, wird aufgerufen, wenn der Browser feststellt, dass ausreichend Leerlaufzeit verfügbar ist, um uns etwas Arbeit zu ermöglichen, oder unser Timeout von einer Sekunde abläuft. Diese Funktion hat die Aufgabe, unsere eingereihten Aufgaben auszuführen.

```js
function runTaskQueue(deadline) {
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    taskList.length
  ) {
    const task = taskList.shift();
    currentTaskNumber++;

    task.handler(task.data);
    scheduleStatusRefresh();
  }

  if (taskList.length) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  } else {
    taskHandle = 0;
  }
}
```

Der Kern von `runTaskQueue()` ist eine Schleife, die fortfährt, während noch Zeit übrig ist (wie durch Überprüfen von [`deadline.timeRemaining`](/de/docs/Web/API/IdleDeadline/timeRemaining) festgestellt), um sicherzustellen, dass es mehr als 0 ist, oder wenn das Timeout-Limit erreicht wurde ([`deadline.didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout) ist wahr), und solange es noch Aufgaben in der Aufgabenliste gibt.

Für jede Aufgabe in der Warteschlange, die wir ausführen können, tun wir Folgendes:

1. Wir [entfernen das Aufgabenobjekt aus der Warteschlange](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).
2. Wir inkrementieren `currentTaskNumber`, um zu verfolgen, wie viele Aufgaben wir bereits ausgeführt haben.
3. Wir rufen den Handler der Aufgabe auf, `task.handler`, und übergeben ihm das Datenobjekt der Aufgabe (`task.data`).
4. Wir rufen eine Funktion, `scheduleStatusRefresh()`, auf, um ein Bildschirmupdate zu planen, das Änderungen an unseren Fortschritten widerspiegelt.

Wenn die Zeit abläuft und noch Aufgaben in der Liste verbleiben, rufen wir erneut [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) auf, damit wir die Aufgaben weiterverarbeiten können, wenn das nächste Mal Leerlaufzeit verfügbar ist. Wenn die Warteschlange leer ist, setzen wir `taskHandle` auf 0, um anzuzeigen, dass kein Callback geplant ist. So wissen wir, dass wir beim nächsten Aufruf von `enqueueTask()` einen Callback anfordern müssen.

#### Aktualisierung der Statusanzeige

Eine Sache, die wir tun möchten, ist, unser Dokument mit Protokollausgaben und Fortschrittsinformationen zu aktualisieren. Sie können das DOM jedoch nicht sicher von einem Leerlauf-Callback aus ändern. Stattdessen verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Browser zu bitten, uns aufzurufen, wenn es sicher ist, die Anzeige zu aktualisieren.

##### Anzeigeaktualisierungen planen

DOM-Änderungen werden durch Aufrufen der Funktion `scheduleStatusRefresh()` geplant.

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

Dies ist eine einfache Funktion. Sie überprüft, ob wir bereits eine Anzeigeaktualisierung geplant haben, indem sie den Wert von `statusRefreshScheduled` überprüft. Wenn es `false` ist, rufen wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) auf, um eine Aktualisierung zu planen, und geben die Funktion `updateDisplay()` an, die diese Arbeit übernimmt.

##### Die Anzeige aktualisieren

Die Funktion `updateDisplay()` ist dafür verantwortlich, den Inhalt des Fortschrittsfeldes und des Protokolls zu zeichnen. Sie wird vom Browser aufgerufen, wenn das DOM in einem sicheren Zustand ist, damit wir Änderungen während des Renderns des nächsten Frames anwenden können.

```js
function updateDisplay() {
  const scrolledToEnd =
    logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

  if (totalTaskCount) {
    if (progressBarElem.max !== totalTaskCount) {
      totalTaskCountElem.textContent = totalTaskCount;
      progressBarElem.max = totalTaskCount;
    }

    if (progressBarElem.value !== currentTaskNumber) {
      currentTaskNumberElem.textContent = currentTaskNumber;
      progressBarElem.value = currentTaskNumber;
    }
  }

  if (logFragment) {
    logElem.appendChild(logFragment);
    logFragment = null;
  }

  if (scrolledToEnd) {
    logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
  }

  statusRefreshScheduled = false;
}
```

Zuerst wird `scrolledToEnd` auf `true` gesetzt, wenn der Text im Protokoll nach unten gescrollt ist; andernfalls wird er auf `false` gesetzt. Wir verwenden das, um zu bestimmen, ob wir die Scrollposition aktualisieren sollten, um sicherzustellen, dass das Protokoll am Ende bleibt, wenn wir fertig sind, Inhalte hinzuzufügen.

Als nächstes aktualisieren wir die Fortschritts- und Statusinformationen, wenn Aufgaben in die Warteschlange eingereiht wurden.

1. Wenn der aktuelle Höchstwert der Fortschrittsleiste sich von der aktuellen Gesamtzahl der eingereihten Aufgaben (`totalTaskCount`) unterscheidet, aktualisieren wir den Inhalt der angezeigten Gesamtzahl der Aufgaben (`totalTaskCountElem`) und den Höchstwert der Fortschrittsleiste, damit er richtig skaliert.
2. Wir machen dasselbe mit der Anzahl der bisher bearbeiteten Aufgaben; wenn `progressBarElem.value` sich von der aktuellen Nummer der bearbeiteten Aufgabe (`currentTaskNumber`) unterscheidet, aktualisieren wir den angezeigten Wert der aktuell bearbeiteten Aufgabe und den aktuellen Wert der Fortschrittsleiste.

Dann, wenn es Text gibt, der dem Protokoll hinzugefügt werden soll (das heißt, wenn `logFragment` nicht `null` ist), fügen wir es mit [`Element.appendChild()`](/de/docs/Web/API/Node/appendChild) an das Protokollelement an und setzen `logFragment` auf `null`, damit wir es nicht erneut hinzufügen.

Wenn das Protokoll beim Starten bis zum Ende gescrollt war, stellen wir sicher, dass es das weiterhin bleibt. Dann setzen wir `statusRefreshScheduled` auf `false`, um anzuzeigen, dass wir die Aktualisierung bearbeitet haben und es sicher ist, eine neue anzufordern.

#### Text dem Protokoll hinzufügen

Die Funktion `log()` fügt den angegebenen Text dem Protokoll hinzu. Da wir nicht wissen, ob es zum Zeitpunkt des Aufrufs von `log()` sicher ist, das DOM sofort zu ändern, werden wir den Protokolltext zwischenspeichern, bis es sicher ist, ihn zu aktualisieren. Oben im Code für `updateDisplay()` können Sie den Code finden, der tatsächlich den protokollierten Text zum Protokoll-Element hinzufügt, wenn der Animationsrahmen aktualisiert wird.

```js
function log(text) {
  if (!logFragment) {
    logFragment = document.createDocumentFragment();
  }

  const el = document.createElement("div");
  el.textContent = text;
  logFragment.appendChild(el);
}
```

Zuerst erstellen wir ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt namens `logFragment`, wenn aktuell keines existiert. Dieses Element ist ein pseudo-DOM, in das wir Elemente einfügen können, ohne das Haupt-DOM selbst sofort zu ändern.

Dann erstellen wir ein neues {{HTMLElement("div")}}-Element und setzen dessen Inhalt so, dass er dem Eingabetext `text` entspricht. Dann hängen wir das neue Element an das Ende des pseudo-DOMs in `logFragment` an. `logFragment` wird Protokolleinträge ansammeln, bis das nächste Mal `updateDisplay()` aufgerufen wird, weil sich das DOM ändert.

### Aufgaben ausführen

Jetzt, wo wir den Aufgabenmanagement- und Anzeige-Wartungscode fertiggestellt haben, können wir tatsächlich damit beginnen, Code einzurichten, um Aufgaben auszuführen, die Arbeiten erledigen.

#### Der Aufgaben-Handler

Die Funktion, die wir als unseren Aufgaben-Handler verwenden werden - das heißt, die Funktion, die als Wert der `handler`-Eigenschaft des Aufgabenobjekts verwendet wird - ist `logTaskHandler()`. Es handelt sich um eine einfache Funktion, die für jede Aufgabe eine Menge Dinge ins Protokoll ausgibt. In Ihrer eigenen Anwendung würden Sie diesen Code durch welche Aufgabe auch immer ersetzen, die Sie während der Leerlaufzeit ausführen möchten. Denken Sie nur daran, dass alles, was Sie tun möchten und das das DOM verändert, über [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gehandhabt werden muss.

```js
function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### Das Hauptprogramm

Alles wird ausgelöst, wenn der Benutzer auf die Start-Schaltfläche klickt, wodurch die Funktion `decodeTechnoStuff()` aufgerufen wird.

```js hidden
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

```js
function decodeTechnoStuff() {
  totalTaskCount = 0;
  currentTaskNumber = 0;
  updateDisplay();

  const n = getRandomIntInclusive(100, 200);

  for (let i = 0; i < n; i++) {
    const taskData = {
      count: getRandomIntInclusive(75, 150),
      text: `This text is from task number ${i + 1} of ${n}`,
    };

    enqueueTask(logTaskHandler, taskData);
  }
}

document
  .getElementById("startButton")
  .addEventListener("click", decodeTechnoStuff, false);
```

`decodeTechnoStuff()` beginnt, indem es die Werte von totalTaskCount (die Anzahl der so far zur Warteschlange hinzugefügten Aufgaben) und currentTaskNumber (die aktuell zu bearbeitende Aufgabe) auf null setzt, und dann `updateDisplay()` aufruft, um die Anzeige auf ihren "Es ist noch nichts passiert"-Zustand zurückzusetzen.

Dieses Beispiel wird eine zufällige Anzahl von Aufgaben erstellen (zwischen 100 und 200 von ihnen). Dazu verwenden wir die [`getRandomIntInclusive()`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive), die als Beispiel in der Dokumentation für {{jsxref("Math.random()")}} bereitgestellt wird, um die Anzahl der zu erstellenden Aufgaben zu erhalten.

Dann starten wir eine Schleife, um die tatsächlichen Aufgaben zu erstellen. Für jede Aufgabe erzeugen wir ein Objekt, `taskData`, das zwei Eigenschaften enthält:

- `count` ist die Anzahl der Zeichenfolgen, die von der Aufgabe in das Protokoll ausgegeben werden.
- `text` ist der Text, der entsprechend der durch `count` angegebenen Anzahl Male ins Protokoll ausgegeben wird.

Jede Aufgabe wird dann durch Aufrufen von `enqueueTask()`, wobei `logTaskHandler()` als Handler-Funktion und das `taskData`-Objekt als das zu übergebende Objekt beim Aufruf angegeben wird, eingereiht.

### Ergebnis

Unten ist das tatsächlich funktionierende Ergebnis des obigen Codes. Probieren Sie es aus, spielen Sie damit in den Entwicklertools Ihres Browsers und experimentieren Sie mit dessen Verwendung in Ihrem eigenen Code.

{{ EmbedLiveSample('Example', 600, 700) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
