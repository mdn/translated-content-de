---
title: Background Tasks API
slug: Web/API/Background_Tasks_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Background Tasks")}}

Die **Kooperative Planung von Hintergrundaufgaben-API** (auch als Background Tasks API oder `requestIdleCallback()` API bezeichnet) bietet die Möglichkeit, Aufgaben in eine Warteschlange zu stellen, die vom User Agent automatisch ausgeführt werden, wenn er feststellt, dass freie Zeit zur Verfügung steht.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API).

## Konzepte und Nutzung

Der Haupt-Thread eines Webbrowsers dreht sich um seine Event-Schleife. Dieser Code zeichnet anstehende Updates für das derzeit angezeigte [`Document`](/de/docs/Web/API/Document), führt JavaScript-Code aus, den die Seite ausführen muss, nimmt Ereignisse von Eingabegeräten entgegen und verteilt diese Ereignisse an die Elemente, die sie empfangen sollen. Zusätzlich behandelt die Event-Schleife Interaktionen mit dem Betriebssystem, Aktualisierungen der eigenen Benutzeroberfläche des Browsers und so weiter. Es ist ein äußerst beschäftigtes Stück Code, und Ihr Haupt-JavaScript-Code kann direkt in diesem Thread zusammen mit all dem laufen. Sicherlich wird der Großteil, wenn nicht sogar der gesamte Code, der in der Lage ist, Änderungen am DOM vorzunehmen, im Haupt-Thread ausgeführt, da es üblich ist, dass Änderungen an der Benutzeroberfläche nur im Haupt-Thread verfügbar sind.

Da die Behandlung von Ereignissen und Bildschirm-Updates zwei der offensichtlichsten Möglichkeiten sind, wie Benutzer Leistungsprobleme bemerken, ist es wichtig, dass Ihr Code ein guter Bürger des Webs ist und hilft, Unterbrechungen in der Ausführung der Event-Schleife zu vermeiden. In der Vergangenheit gab es keine verlässliche Methode dafür, außer durch das Schreiben von so effizient wie möglich geschriebenem Code und indem man so viel Arbeit wie möglich an [Workers](/de/docs/Web/API/Web_Workers_API) auslagert. [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) ermöglicht es, sich aktiv zu engagieren, um sicherzustellen, dass die Event-Schleife des Browsers reibungslos läuft, indem es dem Browser ermöglicht, Ihrem Code mitzuteilen, wie viel Zeit er sicher nutzen kann, ohne das System ins Stocken zu bringen. Wenn Sie sich innerhalb der gegebenen Grenze halten, können Sie die Benutzererfahrung erheblich verbessern.

### Das Beste aus Leerlauf-Rückrufen herausholen

Da Leerlauf-Rückrufe dazu gedacht sind, Ihrem Code eine Möglichkeit zu geben, mit der Event-Schleife zu kooperieren, um sicherzustellen, dass das System in vollem Umfang genutzt wird, ohne es zu überlasten, was zu Verzögerungen oder anderen Leistungsproblemen führen würde, sollten Sie sorgfältig überlegen, wie Sie diese einsetzen.

- **Verwenden Sie Leerlauf-Rückrufe für Aufgaben, die keine hohe Priorität haben.** Da Sie nicht wissen, wie viele Rückrufe festgelegt wurden und wie beschäftigt das System des Benutzers ist, wissen Sie nicht, wie oft Ihr Rückruf ausgeführt wird (es sei denn, Sie geben ein `timeout` an). Es gibt keine Garantie, dass jeder Durchlauf der Event-Schleife (oder sogar jeder Bildschirmaktualisierungszyklus) die Ausführung eines Leerlauf-Rückrufs beinhaltet; wenn die Event-Schleife die gesamte verfügbare Zeit nutzt, haben Sie Pech (es sei denn, Sie haben ein `timeout` verwendet).
- **Leerlauf-Rückrufe sollten ihr Bestes geben, um das zugewiesene Zeitfenster nicht zu überschreiten.** Während der Browser, Ihr Code und das Web im Allgemeinen weiterhin normal funktionieren, wenn Sie das angegebene Zeitlimit überschreiten (sogar weit darüber hinaus), dient die Zeitbeschränkung dazu, sicherzustellen, dass Sie dem System genügend Zeit lassen, um den aktuellen Durchlauf der Event-Schleife zu beenden und zum nächsten zu gelangen, ohne dass anderer Code ins Stocken gerät oder Animationseffekte verzögern. Derzeit hat [`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining) ein oberes Limit von 50 Millisekunden, aber in Wirklichkeit haben Sie oft weniger Zeit, da die Event-Schleife möglicherweise bereits in diese Zeit auf komplexen Seiten eingreift, mit Browser-Erweiterungen, die Prozessorzeit benötigen, und so weiter.
- **Vermeiden Sie Änderungen am DOM innerhalb Ihres Leerlauf-Rückrufs.** Wenn Ihr Rückruf ausgeführt wird, ist der aktuelle Frame bereits vollständig gezeichnet, und alle Layout-Updates und Berechnungen sind abgeschlossen. Wenn Sie Änderungen vornehmen, die sich auf das Layout auswirken, könnte es nötig sein, dass der Browser anhält und Neuberechnungen durchführt, die ansonsten unnötig wären. Wenn Ihr Rückruf das DOM ändern muss, sollte es [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden, um das zu planen.
- **Vermeiden Sie Aufgaben, deren Laufzeit nicht vorhersehbar ist.** Ihr Leerlauf-Rückruf sollte es vermeiden, etwas zu tun, das eine nicht vorhersehbare Menge an Zeit in Anspruch nehmen könnte. Beispielsweise sollte alles vermieden werden, was sich auf das Layout auswirken könnte. Auch das Auflösen oder Zurückweisen von {{jsxref("Promise")}}s sollte vermieden werden, da dies den Handler für die Auflösung oder Zurückweisung dieses Versprechens sofort nach der Rückkehr Ihres Rückrufs aufrufen würde.
- **Verwenden Sie Timeouts, wenn nötig, aber nur, wenn nötig.** Timeouts können sicherstellen, dass Ihr Code rechtzeitig ausgeführt wird, aber sie können auch dazu führen, dass Sie Verzögerungen oder Ruckler bei Animationen verursachen, indem Sie den Browser dazu zwingen, Sie aufzurufen, wenn nicht genügend Zeit bleibt, um Ihre Ausführung ohne Beeinträchtigung der Leistung zu ermöglichen.

## Schnittstellen

Die Hintergrundaufgaben-API fügt nur eine neue Schnittstelle hinzu:

- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
  - : Ein Objekt dieses Typs wird an den Leerlauf-Rückruf übergeben, um eine Schätzung zu erhalten, wie lange die Leerlaufperiode voraussichtlich dauern wird, sowie um zu bestimmen, ob der Rückruf ausgeführt wird, weil der Timeout-Zeitraum abgelaufen ist.

Die [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ebenfalls durch diese API erweitert, um die neuen Methoden [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) und [`cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) anzubieten.

## Beispiel

In diesem Beispiel schauen wir uns an, wie Sie [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) verwenden können, um zeitaufwändige Aufgaben mit niedriger Priorität auszuführen, während der Zeit, in der der Browser sonst im Leerlauf wäre. Zusätzlich zeigt dieses Beispiel, wie Sie Updates für den Dokumentinhalt mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) planen können.

Unten finden Sie nur das HTML und JavaScript für dieses Beispiel. Das CSS wird nicht gezeigt, da es nicht entscheidend für das Verständnis dieser Funktionalität ist.

### HTML

Um zu verstehen, was wir erreichen wollen, schauen wir uns das HTML an. Dies richtet eine Box (`id="container"`) ein, die verwendet wird, um den Fortschritt einer Operation darzustellen (weil Sie nie wissen, wie lange das Dekodieren von „Quantenfilament-Tachyonemissionen“ dauern wird, immerhin), sowie eine zweite Hauptbox (`id="logBox"`), die zum Anzeigen von Textausgaben verwendet wird.

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

Die Fortschrittsbox verwendet ein {{HTMLElement("progress")}}-Element, um den Fortschritt anzuzeigen, zusammen mit einem Etikett mit Abschnitten, die geändert werden, um numerische Informationen über den Fortschritt darzustellen. Darüber hinaus gibt es eine „Start“-Schaltfläche (kreativ mit der ID „startButton“ versehen), die der Benutzer verwenden wird, um die Datenverarbeitung zu starten.

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

Jetzt, da die Dokumentstruktur definiert ist, konstruieren Sie den JavaScript-Code, der die Arbeit erledigen wird. Ziel ist es, Anfragen zum Aufrufen von Funktionen in eine Warteschlange zu stellen, mit einem Leerlauf-Rückruf, der diese Funktionen immer dann ausführt, wenn das System lange genug im Leerlauf ist, um Fortschritte zu machen.

#### Variablendeklarationen

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

Diese Variablen werden verwendet, um die Liste der Aufgaben zu verwalten, die auf ihre Ausführung warten, sowie Statusinformationen über die Aufgabenwarteschlange und deren Ausführung:

- `taskList` ist ein {{jsxref("Array")}} von Objekten, von denen jedes eine Aufgabe darstellt, die auf ihre Ausführung wartet.
- `totalTaskCount` ist ein Zähler für die Anzahl der Aufgaben, die der Warteschlange hinzugefügt wurden; er wird nur hochzählen, nie runter. Wir verwenden dies, um die Mathematik zu erledigen, um den Fortschritt als Prozentsatz der gesamten zu erledigenden Arbeit darzustellen.
- `currentTaskNumber` wird verwendet, um zu verfolgen, wie viele Aufgaben bisher bearbeitet wurden.
- `taskHandle` ist eine Referenz auf die derzeit bearbeitete Aufgabe.

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

Als nächstes haben wir Variablen, die auf die DOM-Elemente verweisen, mit denen wir interagieren müssen. Diese Elemente sind:

- `totalTaskCountElem` ist das {{HTMLElement("span")}}, das wir verwenden, um die Gesamtzahl der erstellten Aufgaben in der Statusanzeige im Fortschrittsfeld einzufügen.
- `currentTaskNumberElem` ist das Element, das die Anzahl der bisher bearbeiteten Aufgaben anzeigt.
- `progressBarElem` ist das {{HTMLElement("progress")}}-Element, das den Prozentsatz der bisher bearbeiteten Aufgaben anzeigt.
- `startButtonElem` ist die Start-Schaltfläche.
- `logElem` ist das {{HTMLElement("div")}}, in das wir protokollierte Textnachrichten einfügen.

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

Schließlich richten wir ein paar Variablen für andere Elemente ein:

- `logFragment` wird verwendet, um ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu speichern, das von unseren Protokollfunktionen generiert wird, um Inhalte zu erstellen, die dem Protokoll hinzugefügt werden, wenn der nächste Animationsframe gerendert wird.
- `statusRefreshScheduled` wird verwendet, um zu verfolgen, ob wir bereits ein Update der Statusanzeigebox für den kommenden Frame geplant haben, damit wir es nur einmal pro Frame machen

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

Betrachten wir nun die Art und Weise, wie wir die auszuführenden Aufgaben verwalten. Wir werden dies tun, indem wir eine FIFO-Warteschlange von Aufgaben erstellen, die wir je nach verfügbaren Zeiten während der Leerlauf-Rückrufzeit ausführen.

##### Aufgaben in die Warteschlange stellen

Zuerst benötigen wir eine Funktion, die Aufgaben zur späteren Ausführung in die Warteschlange stellt. Diese Funktion, `enqueueTask()`, sieht folgendermaßen aus:

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

`enqueueTask()` akzeptiert zwei Eingabeparameter:

- `taskHandler` ist eine Funktion, die aufgerufen wird, um die Aufgabe zu bearbeiten.
- `taskData` ist ein Objekt, das dem Task-Handler als Eingabeparameter übergeben wird, um es der Aufgabe zu ermöglichen, benutzerdefinierte Daten zu erhalten.

Um die Aufgabe in die Warteschlange zu stellen, fügen wir ein Objekt in das `taskList`-Array ein; das Objekt enthält die `taskHandler`- und `taskData`-Werte unter den Namen `handler` und `data` und erhöht dann `totalTaskCount`, was die Gesamtzahl der jemals in die Warteschlange gestellten Aufgaben widerspiegelt (wir verringern sie nicht, wenn Aufgaben aus der Warteschlange entfernt werden).

Als nächstes überprüfen wir, ob bereits ein Leerlauf-Rückruf erstellt wurde; wenn `taskHandle` 0 ist, wissen wir, dass es noch keinen Leerlauf-Rückruf gibt, also rufen wir [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) auf, um einen zu erstellen. Es ist so konfiguriert, dass es eine Funktion mit dem Namen `runTaskQueue()` aufruft, die wir uns gleich ansehen werden, und mit einem `timeout` von 1 Sekunde, sodass es mindestens einmal pro Sekunde ausgeführt wird, selbst wenn keine tatsächliche Leerlaufzeit verfügbar ist.

##### Aufgaben ausführen

Unser Leerlauf-Rückruf-Handler, `runTaskQueue()`, wird aufgerufen, wenn der Browser feststellt, dass genügend Leerlaufzeit verfügbar ist, um uns einige Arbeiten erledigen zu lassen, oder wenn unser Timeout von einer Sekunde abläuft. Diese Funktion ist dafür verantwortlich, unsere in die Warteschlange gestellten Aufgaben auszuführen.

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

Der Kern von `runTaskQueue()` ist eine Schleife, die fortgesetzt wird, solange es Zeit gibt (was durch das Prüfen von [`deadline.timeRemaining`](/de/docs/Web/API/IdleDeadline/timeRemaining) festgestellt wird), um sicherzustellen, dass es mehr als 0 ist oder wenn das Zeitlimit erreicht wurde ([`deadline.didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout) ist wahr), und solange Aufgaben in der Aufgabenliste vorhanden sind.

Für jede Aufgabe in der Warteschlange, für die wir Zeit zur Ausführung haben, tun wir Folgendes:

1. Wir [entfernen das Aufgabenobjekt aus der Warteschlange](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).
2. Wir erhöhen `currentTaskNumber`, um zu verfolgen, wie viele Aufgaben wir bisher ausgeführt haben.
3. Wir rufen den Handler der Aufgabe auf, `task.handler`, und übergeben ihm das Datenobjekt der Aufgabe (`task.data`).
4. Wir rufen eine Funktion auf, `scheduleStatusRefresh()`, um einen Bildschirm-Update zu planen, um die Fortschrittsveränderungen widerzuspiegeln.

Wenn die Zeit abgelaufen ist und noch Aufgaben in der Liste sind, rufen wir [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) erneut auf, damit wir die Aufgaben weiterverarbeiten können, sobald Leerlaufzeit verfügbar ist. Wenn die Warteschlange leer ist, setzen wir taskHandle auf 0, um anzuzeigen, dass wir keinen Rückruf geplant haben. Auf diese Weise wissen wir, dass wir beim nächsten Aufruf von `enqueueTask()` einen Rückruf anfordern müssen.

#### Aktualisieren der Statusanzeige

Eine Sache, die wir tun wollen, ist, unsere Dokumentation mit Protokollausgaben und Fortschrittsinformationen zu aktualisieren. Sie können jedoch nicht sicher Änderungen am DOM aus einem Leerlauf-Rückruf heraus vornehmen. Stattdessen verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Browser zu bitten, uns aufzurufen, wenn es sicher ist, die Anzeige zu aktualisieren.

##### Planen von Anzeige-Updates

DOM-Änderungen werden durch Aufrufen der Funktion `scheduleStatusRefresh()` geplant.

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

Dies ist eine einfache Funktion. Sie überprüft, ob wir bereits ein Anzeigen-Update durch den Wert von `statusRefreshScheduled` geplant haben. Wenn es `false` ist, rufen wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) auf, um ein Update zu planen, indem wir der Funktion `updateDisplay()` bereitstellen, dass dies erledigt.

##### Aktualisieren der Anzeige

Die Funktion `updateDisplay()` ist verantwortlich für das Zeichnen der Inhalte des Fortschrittsfelds und des Protokolls. Sie wird vom Browser aufgerufen, wenn das DOM in einem sicheren Zustand ist, um Änderungen während der Verarbeitung des nächsten Frames vorzunehmen.

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

Zuerst wird `scrolledToEnd` auf `true` gesetzt, wenn der Text im Protokoll nach unten gescrollt ist; andernfalls wird es auf `false` gesetzt. Wir werden dies verwenden, um zu bestimmen, ob wir die Scrollposition aktualisieren sollten, um sicherzustellen, dass das Protokoll am Ende bleibt, wenn wir damit fertig sind, Inhalte hinzuzufügen.

Als nächstes aktualisieren wir die Fortschritts- und Statusinformationen, wenn Aufgaben in die Warteschlange gestellt wurden.

1. Wenn der aktuelle maximale Wert der Fortschrittsleiste von der aktuellen Gesamtzahl der enqueuerten Aufgaben (`totalTaskCount`) abweicht, aktualisieren wir die Inhalte der angezeigten Gesamtzahl der Aufgaben (`totalTaskCountElem`) und den maximalen Wert der Fortschrittsleiste, damit sie richtig skaliert.
2. Das Gleiche tun wir mit der Anzahl der bisher bearbeiteten Aufgaben; wenn `progressBarElem.value` sich von der derzeit in Bearbeitung befindlichen Aufgabennummer (`currentTaskNumber`) unterscheidet, aktualisieren wir die angezeigte Zahl der gerade bearbeiteten Aufgabe und den aktuellen Wert der Fortschrittsleiste.

Dann, wenn es Text gibt, der dem Protokoll hinzugefügt werden soll (das heißt, wenn `logFragment` nicht `null` ist), fügen wir es dem Protokollelement mit [`Element.appendChild()`](/de/docs/Web/API/Node/appendChild) hinzu und setzen `logFragment` auf `null`, so dass wir es nicht noch einmal hinzufügen.

Wenn das Protokoll beim Starten am Ende gescrollt war, sorgen wir dafür, dass es das auch bleibt. Dann setzen wir `statusRefreshScheduled` auf `false`, um anzuzeigen, dass wir das Update abgeschlossen haben und es sicher ist, ein neues zu beantragen.

#### Text zum Protokoll hinzufügen

Die Funktion `log()` fügt dem Protokoll den angegebenen Text hinzu. Da wir nicht wissen, ob es zum Zeitpunkt, zu dem `log()` aufgerufen wird, sicher ist, sofort das DOM zu ändern, werden wir den Protokolltext zwischenspeichern, bis es sicher ist, das Update vorzunehmen. Oben, im Code für `updateDisplay()`, finden Sie den Code, der tatsächlich den protokollierten Text in das Protokollelement hinzufügt, wenn der Animationsframe aktualisiert wird.

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

Zuerst erstellen wir ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt namens `logFragment`, wenn noch keines existiert. Dieses Element ist ein Pseudo-DOM, in das wir Elemente einfügen können, ohne sofort das Haupt-DOM selbst zu ändern.

Wir erstellen dann ein neues {{HTMLElement("div")}}-Element und setzen seinen Inhalt so, dass er mit dem Eingabetext `text` übereinstimmt. Dann fügen wir das neue Element am Ende des Pseudo-DOM in `logFragment` an. `logFragment` wird Protokolleinträge sammeln, bis das nächste Mal `updateDisplay()` aufgerufen wird, weil das DOM für die Änderungen.

### Aufgaben ausführen

Jetzt, da wir die Aufgabeverwaltung und die Anzeigeaktualisierungslogik abgeschlossen haben, können wir tatsächlich Code einrichten, um Aufgaben auszuführen, die die Arbeit erledigen.

#### Der Aufgaben-Handler

Die Funktion, die wir als Aufgaben-Handler verwenden werden, das heißt, die Funktion, die als Wert der `handler`-Eigenschaft des Aufgabenobjekts verwendet wird, ist `logTaskHandler()`. Es ist eine einfache Funktion, die eine Menge Dinge für jede Aufgabe an das Protokoll ausgibt. In Ihrer eigenen Anwendung würden Sie diesen Code durch welche auch immer Aufgabe ersetzen, die Sie während der Leerlaufzeit ausführen möchten. Denken Sie nur daran, dass alles, was Sie tun möchten, das das DOM verändert, durch [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) behandelt werden muss.

```js
function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### Das Hauptprogramm

Alles wird ausgelöst, wenn der Benutzer die Start-Schaltfläche klickt, die die Funktion `decodeTechnoStuff()` aufruft.

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

`decodeTechnoStuff()` beginnt damit, die Werte von totalTaskCount (die Anzahl der bisher zur Warteschlange hinzugefügten Aufgaben) und currentTaskNumber (die derzeit ausgeführte Aufgabe) auf null zu setzen und ruft dann `updateDisplay()` auf, um die Anzeige auf ihren Zustand „nichts ist bisher passiert“ zurückzusetzen.

Dieses Beispiel wird eine zufällige Anzahl von Aufgaben erstellen (zwischen 100 und 200 von ihnen). Dazu verwenden wir die [`getRandomIntInclusive()`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive), die als Beispiel in der Dokumentation zu {{jsxref("Math.random()")}} bereitgestellt wird, um die Anzahl der zu erstellenden Aufgaben zu ermitteln.

Dann beginnen wir eine Schleife, um die tatsächlichen Aufgaben zu erstellen. Für jede Aufgabe erstellen wir ein Objekt, `taskData`, das zwei Eigenschaften enthält:

- `count` ist die Anzahl der Strings, die die Aufgabe in das Protokoll ausgeben soll.
- `text` ist der Text, der so oft wie durch `count` angegeben ins Protokoll ausgegeben wird.

Jede Aufgabe wird dann durch Aufrufen von `enqueueTask()` mit `logTaskHandler()` als Handler-Funktion und dem `taskData`-Objekt als das an die Funktion zu übergebende Objekt zur Warteschlange hinzugefügt, wenn sie aufgerufen wird.

### Ergebnis

Unten sehen Sie das tatsächliche funktionierende Ergebnis des obigen Codes. Probieren Sie es aus, spielen Sie damit in den Entwicklertools Ihres Browsers und experimentieren Sie damit, es in Ihrem eigenen Code zu verwenden.

{{ EmbedLiveSample('Example', 600, 700) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
