---
title: Background Tasks API
slug: Web/API/Background_Tasks_API
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("Background Tasks")}}

Die **kooperative Terminplanung von Hintergrundaufgaben API** (auch bekannt als die Background Tasks API oder die `requestIdleCallback()` API) ermöglicht es, Aufgaben zu definieren, die automatisch durch den Benutzeragenten ausgeführt werden, wenn festgestellt wird, dass hierfür freie Zeit zur Verfügung steht.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API).

## Konzepte und Nutzung

Der Hauptthread eines Webbrowsers ist um seine Ereignisschleife herum organisiert. Dieser Code zeichnet alle anstehenden Updates des derzeit angezeigten [`Document`](/de/docs/Web/API/Document), führt den JavaScript-Code aus, der auf der Seite ausgeführt werden muss, nimmt Ereignisse von Eingabegeräten entgegen und weist diese den Elementen zu, die sie erhalten sollen. Darüber hinaus verwaltet die Ereignisschleife die Interaktionen mit dem Betriebssystem, Updates der Benutzeroberfläche des Browsers und mehr. Es handelt sich um einen extrem beschäftigten Codeabschnitt, und Ihr Haupt-JavaScript-Code kann direkt in diesem Thread zusammen mit allem anderen laufen. Sicherlich wird der meiste, wenn nicht sogar der gesamte Code, der in der Lage ist, Änderungen am DOM vorzunehmen, im Hauptthread ausgeführt, da Änderungen an der Benutzeroberfläche üblicherweise nur im Hauptthread verfügbar sind.

Da die Ereignisbehandlung und Bildschirmaktualisierungen zwei der offensichtlichsten Möglichkeiten sind, wie Benutzer Leistungsprobleme bemerken, ist es wichtig, dass Ihr Code ein guter Bürger des Webs ist und hilft, Wartezeiten in der Ausführung der Ereignisschleife zu verhindern. In der Vergangenheit gab es keine zuverlässige Möglichkeit, dies zu tun, außer den Code so effizient wie möglich zu schreiben und so viel Arbeit wie möglich auf [Workers](/de/docs/Web/API/Web_Workers_API) auszulagern. [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) ermöglicht es, sich aktiv daran zu beteiligen, sicherzustellen, dass die Ereignisschleife des Browsers reibungslos läuft, indem es dem Browser erlaubt, Ihren Code darüber zu informieren, wie viel Zeit er sicher nutzen kann, ohne das System zu verlangsamen. Wenn Sie sich innerhalb des vorgegebenen Limits halten, können Sie das Nutzungserlebnis des Benutzers erheblich verbessern.

### Das Beste aus Leerlaufrückrufen herausholen

Da Leerlaufrückrufe dazu gedacht sind, Ihrem Code eine Möglichkeit zu geben, mit der Ereignisschleife zu kooperieren, um sicherzustellen, dass das System in vollem Umfang genutzt wird, ohne es zu überlasten und so Verzögerungen oder andere Leistungsprobleme zu verursachen, sollten Sie sorgfältig überlegen, wie Sie sie einsetzen.

- **Verwenden Sie Leerlaufrückrufe für Aufgaben, die keine hohe Priorität haben.** Da Sie nicht wissen, wie viele Rückrufe eingerichtet sind und nicht wissen, wie beschäftigt das System des Benutzers ist, wissen Sie nicht, wie oft Ihr Rückruf ausgeführt wird (es sei denn, Sie geben eine `timeout` an). Es gibt keine Garantie dafür, dass jede Schleife durch die Ereignisschleife (oder sogar jede Bildschirmaktualisierungsrunde) Leerlaufrückrufe enthält, die ausgeführt werden; wenn die Ereignisschleife alle verfügbare Zeit nutzt, haben Sie Pech (es sei denn, Sie haben einen `timeout` verwendet).
- **Leerlaufrückrufe sollten versuchen, die zugewiesene Zeit nicht zu überschreiten.** Während der Browser, Ihr Code und das Web im Allgemeinen normal weiterlaufen, wenn Sie über die vorgegebene Zeit hinausgehen (selbst wenn Sie _weit_ darüber hinausgehen), ist die Zeitbeschränkung dazu gedacht, sicherzustellen, dass Sie dem System genügend Zeit lassen, um den aktuellen Durchlauf durch die Ereignisschleife abzuschließen und zum nächsten überzugehen, ohne dass anderer Code ins Stocken gerät oder Animationseffekte verzögert werden. Zurzeit hat [`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining) ein oberes Limit von 50 Millisekunden, aber in Wirklichkeit haben Sie oft weniger Zeit, da die Ereignisschleife diese Zeit bereits auf komplexen Websites in Anspruch nimmt, Browsererweiterungen Prozessorzeit benötigen usw.
- **Vermeiden Sie Änderungen am DOM innerhalb Ihres Leerlaufrückrufs.** Bis zum Zeitpunkt der Ausführung Ihres Rückrufs ist der aktuelle Frame bereits gezeichnet, und alle Layout-Updates und Berechnungen sind abgeschlossen. Wenn Sie Änderungen vornehmen, die das Layout beeinflussen, könnten Sie den Browser dazu zwingen, zu stoppen und Berechnungen durchzuführen, die ansonsten unnötig wären. Wenn Ihr Rückruf das DOM ändern muss, sollte er [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden, um dies zu planen.
- **Vermeiden Sie Aufgaben, deren Ausführungszeit nicht vorhergesagt werden kann.** Ihr Leerlaufrückruf sollte vermeiden, etwas zu tun, das eine unvorhersehbare Menge an Zeit in Anspruch nehmen könnte. Beispielsweise sollte alles vermieden werden, was das Layout beeinflussen könnte. Sie sollten auch das Auflösen oder Ablehnen von {{jsxref("Promise")}}s vermeiden, da dies den Handler für die Auflösung oder Ablehnung dieses Versprechens sofort nach der Rückgabe Ihres Rückrufs aufrufen würde.
- **Verwenden Sie Zeitüberschreitungen nur dann, wenn sie nötig sind.** Zeitüberschreitungen können sicherstellen, dass Ihr Code zeitnah ausgeführt wird, können aber auch Verzögerungen oder Ruckeln bei Animationen verursachen, indem sie erfordern, dass der Browser Sie aufruft, wenn nicht genügend Zeit bleibt, um ohne Leistungsbeeinträchtigungen auszuführen.

## Schnittstellen

Die Background Tasks API fügt nur eine neue Schnittstelle hinzu:

- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
  - : Ein Objekt dieses Typs wird dem Leerlaufrückruf übergeben, um eine Schätzung darüber bereitzustellen, wie lange der Leerlaufzeitraum voraussichtlich andauert und ob der Rückruf ausgeführt wird, weil sein Zeitüberschreitungszeitraum abgelaufen ist.

Die [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird auch durch diese API erweitert, um die neuen Methoden [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) und [`cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) anzubieten.

## Beispiel

In diesem Beispiel werden wir uns ansehen, wie Sie [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) verwenden können, um zeitaufwändige, niedriger-priorisierte Aufgaben während der Zeit auszuführen, in der der Browser ansonsten im Leerlauf wäre. Darüber hinaus wird in diesem Beispiel gezeigt, wie Dokumentinhalte mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) aktualisiert werden können.

Unten finden Sie nur das HTML und JavaScript für dieses Beispiel. Das CSS wird nicht angezeigt, da es nicht besonders entscheidend für das Verständnis dieser Funktionalität ist.

### HTML

Um zu verstehen, was wir erreichen wollen, werfen wir einen Blick auf das HTML. Dies etabliert ein Kästchen (`id="container"`), das verwendet wird, um den Fortschritt einer Operation zu präsentieren (denn man weiß ja nie, wie lange das Dekodieren von "quantum filament tachyon emissions" dauern wird), sowie ein zweites Hauptkästchen (`id="logBox"`), das zur Anzeige von Textausgaben verwendet wird.

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

Das Fortschrittskästchen verwendet ein {{HTMLElement("progress")}}-Element, um den Fortschritt anzuzeigen, zusammen mit einem Label mit Abschnitten, die geändert werden, um numerische Informationen über den Fortschritt zu präsentieren. Darüber hinaus gibt es einen "Start"-Button (kreativ mit der ID "startButton" versehen), den der Benutzer verwenden wird, um die Datenverarbeitung zu starten.

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

Nun, da die Dokumentstruktur definiert ist, konstruieren Sie den JavaScript-Code, der die Arbeit erledigen soll. Das Ziel: Die Fähigkeit, der Warteschlange Anfragen hinzuzufügen, um Funktionen aufzurufen, mit einem Leerlaufrückruf, der diese Funktionen ausführt, wann immer das System lang genug im Leerlauf ist, um Fortschritte zu erzielen.

#### Variablendeklarationen

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

Diese Variablen werden verwendet, um die Liste der Aufgaben zu verwalten, die darauf warten, ausgeführt zu werden, sowie Statusinformationen über die Aufgabenwarteschlange und deren Ausführung:

- `taskList` ist ein {{jsxref("Array")}} von Objekten, die jeweils eine Aufgabe repräsentieren, die ausgeführt werden soll.
- `totalTaskCount` ist ein Zähler für die Anzahl der Aufgaben, die der Warteschlange hinzugefügt wurden; er wird nur steigen, niemals fallen. Wir verwenden dies, um die Mathematik des Fortschritts als Prozentsatz der zu erledigenden Gesamtarbeit zu präsentieren.
- `currentTaskNumber` wird verwendet, um zu verfolgen, wie viele Aufgaben bisher bearbeitet wurden.
- `taskHandle` ist eine Referenz auf die derzeit verarbeitete Aufgabe.

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

Als nächstes haben wir Variablen, die auf die DOM-Elemente verweisen, mit denen wir interagieren müssen. Diese Elemente sind:

- `totalTaskCountElem` ist das {{HTMLElement("span")}}, das wir verwenden, um die Gesamtzahl der erstellten Aufgaben in die Statusanzeige im Fortschrittskästchen einzufügen.
- `currentTaskNumberElem` ist das Element, das verwendet wird, um die Anzahl der bisher verarbeiteten Aufgaben anzuzeigen.
- `progressBarElem` ist das {{HTMLElement("progress")}}-Element, das den Prozentsatz der bisher verarbeiteten Aufgaben anzeigt.
- `startButtonElem` ist der Start-Button.
- `logElem` ist das {{HTMLElement("div")}}, in das wir protokollierte Textnachrichten einfügen.

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

Schließlich richten wir ein paar Variablen für andere Elemente ein:

- `logFragment` wird verwendet, um ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu speichern, das von unseren Protokollfunktionen generiert wird, um Inhalte zu erstellen, die dem Protokoll hinzugefügt werden, wenn der nächste Animations-Frame gerendert wird.
- `statusRefreshScheduled` wird verwendet, um zu verfolgen, ob wir bereits eine Aktualisierung der Statusanzeigebox für den kommenden Frame geplant haben, sodass wir diese pro Frame nur einmal durchführen.

```js hidden
window.requestIdleCallback ||= (handler) => {
  const startTime = Date.now();

  return setTimeout(() => {
    handler({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50.0 - (Date.now() - startTime));
      },
    });
  }, 1);
};

window.cancelIdleCallback ||= (id) => {
  clearTimeout(id);
};
```

#### Verwaltung der Aufgabenwarteschlange

Als nächstes schauen wir uns an, wie wir die Aufgaben verwalten, die durchgeführt werden müssen. Wir werden dies tun, indem wir eine FIFO-Warteschlange von Aufgaben erstellen, die wir ausführen, sobald Zeit dafür im Leerlaufrückrufszeitraum ist.

##### Aufgaben in die Warteschlange stellen

Zuerst benötigen wir eine Funktion, die Aufgaben für die zukünftige Ausführung in die Warteschlange stellt. Diese Funktion, `enqueueTask()`, sieht wie folgt aus:

```js
function enqueueTask(taskHandler, taskData) {
  taskList.push({
    handler: taskHandler,
    data: taskData,
  });

  totalTaskCount++;

  taskHandle ||= requestIdleCallback(runTaskQueue, { timeout: 1000 });

  scheduleStatusRefresh();
}
```

`enqueueTask()` nimmt zwei Parameter als Eingabe entgegen:

- `taskHandler` ist eine Funktion, die aufgerufen wird, um die Aufgabe zu behandeln.
- `taskData` ist ein Objekt, das als Eingabeparameter an den Aufgabenverwalter übergeben wird, damit die Aufgabe benutzerdefinierte Daten empfangen kann.

Um die Aufgabe in die Warteschlange zu stellen, [fgen wir ein Objekt zum `taskList`-Array hinzu](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push); das Objekt enthält die Werte `taskHandler` und `taskData` unter den Namen `handler` und `data`, und dann erhöhen wir `totalTaskCount`, das die Gesamtzahl der jemals in die Warteschlange gestellten Aufgaben reflektiert (wir verringern es nicht, wenn Aufgaben aus der Warteschlange entfernt werden).

Als nächstes prüfen wir, ob bereits ein Leerlaufrückruf erstellt wurde; wenn `taskHandle` 0 ist, wissen wir, dass noch kein Leerlaufrückruf vorhanden ist, also rufen wir [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) auf, um einen zu erstellen. Es ist so konfiguriert, dass es eine Funktion namens `runTaskQueue()` aufruft, die wir uns in Kürze ansehen werden, und mit einem `timeout` von 1 Sekunde, damit sie mindestens einmal pro Sekunde ausgeführt wird, selbst wenn keine tatsächliche Leerlaufzeit verfügbar ist.

##### Aufgaben ausführen

Unser Leerlaufrückruf-Handler, `runTaskQueue()`, wird aufgerufen, wenn der Browser feststellt, dass es genügend verfügbare Leerlaufzeit gibt, um uns einige Arbeiten erledigen zu lassen, oder unser Timeout von einer Sekunde abläuft. Die Aufgabe dieser Funktion besteht darin, unsere in die Warteschlange gestellten Aufgaben auszuführen.

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

Der Kern von `runTaskQueue()` ist eine Schleife, die so lange läuft, wie Zeit übrig ist (wie durch die Überprüfung von [`deadline.timeRemaining`](/de/docs/Web/API/IdleDeadline/timeRemaining) festgelegt wird), um sicherzustellen, dass sie mehr als 0 beträgt oder das Zeitlimit erreicht wurde ([`deadline.didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout) ist wahr), und solange noch Aufgaben in der Aufgabenliste stehen.

Für jede Aufgabe in der Warteschlange, die wir ausführen können, tun wir Folgendes:

1. Wir [entfernen das Aufgabenobjekt aus der Warteschlange](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).
2. Wir erhöhen `currentTaskNumber`, um zu verfolgen, wie viele Aufgaben wir ausgeführt haben.
3. Wir rufen den Aufgabenverarbeiter der Aufgabe auf, `task.handler`, und übergeben ihm das Datenobjekt der Aufgabe (`task.data`).
4. Wir rufen eine Funktion namens `scheduleStatusRefresh()` auf, um eine Bildschirmaktualisierung zu planen, die Änderungen an unserem Fortschritt widerspiegelt.

Wenn die Zeit abläuft und noch Aufgaben in der Liste stehen, rufen wir erneut [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) auf, damit wir die Aufgaben beim nächsten Mal, wenn Leerlaufzeit verfügbar ist, weiter verarbeiten können. Wenn die Warteschlange leer ist, setzen wir `taskHandle` auf 0, um anzuzeigen, dass wir keinen Rückruf geplant haben. Auf diese Weise wissen wir, dass wir beim nächsten Aufruf von `enqueueTask()` einen Rückruf anfordern müssen.

#### Anzeige der Statusanzeige aktualisieren

Eine Sache, die wir tun möchten, ist, unser Dokument mit Protokollausgaben und Fortschrittsinformationen zu aktualisieren. Sie können jedoch das DOM nicht sicher aus einem Leerlaufrückruf heraus ändern. Stattdessen verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Browser zu bitten, uns aufzurufen, wenn es sicher ist, die Anzeige zu aktualisieren.

##### Anzeigeaktualisierungen planen

Änderungen am DOM werden durch den Aufruf der Funktion `scheduleStatusRefresh()` geplant.

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

Dies ist eine einfache Funktion. Es wird überprüft, ob wir bereits eine Anzeigeaktualisierung geplant haben, indem der Wert von `statusRefreshScheduled` überprüft wird. Falls `false`, rufen wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) auf, um eine Aktualisierung zu planen, indem die Funktion `updateDisplay()` bereitgestellt wird, um diese Arbeit zu erledigen.

##### Die Anzeige aktualisieren

Die `updateDisplay()`-Funktion ist verantwortlich für das Zeichnen der Inhalte des Fortschrittskästchens und des Protokolls. Sie wird vom Browser aufgerufen, wenn das DOM in einem sicheren Zustand ist, um Änderungen während des Renderns des nächsten Frames vorzunehmen.

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

Zuerst wird `scrolledToEnd` auf `true` gesetzt, wenn der Text im Protokoll bis zum Ende gescrollt ist; andernfalls wird es auf `false` gesetzt. Wir verwenden das, um zu bestimmen, ob wir die Bildlaufposition aktualisieren sollten, um sicherzustellen, dass das Protokoll am Ende bleibt.

Als nächstes aktualisieren wir die Fortschritts- und Statusinformationen, wenn Aufgaben in die Warteschlange gestellt wurden.

1. Wenn der aktuelle Maximalwert der Fortschrittsleiste sich von der aktuellen Gesamtzahl der in die Warteschlange gestellten Aufgaben unterscheidet (`totalTaskCount`), dann aktualisieren wir den Inhalt der angezeigten Gesamtzahl der Aufgaben (`totalTaskCountElem`) und den Maximalwert der Fortschrittsleiste, sodass diese korrekt skaliert.
2. Dasselbe gilt für die Anzahl der bisher verarbeiteten Aufgaben; wenn `progressBarElem.value` sich von der Zahl der derzeit verarbeiteten Aufgabe (`currentTaskNumber`) unterscheidet, dann aktualisieren wir den angezeigten Wert der gerade verarbeiteten Aufgabe und den aktuellen Wert der Fortschrittsleiste.

Dann, wenn es Text gibt, der dem Protokoll hinzugefügt werden soll (das heißt, wenn `logFragment` nicht `null` ist), fügen wir ihn dem Protokollelement mit [`Element.appendChild()`](/de/docs/Web/API/Node/appendChild) hinzu und setzen `logFragment` auf `null`, damit wir es nicht erneut hinzufügen.

Wenn das Protokoll zu Beginn bis ganz zum Ende gescrollt war, stellen wir sicher, dass es das immer noch ist. Dann setzen wir `statusRefreshScheduled` auf `false`, um anzuzeigen, dass wir die Aktualisierung durchgeführt haben und es sicher ist, eine neue anzufordern.

#### Text dem Protokoll hinzufügen

Die `log()`-Funktion fügt den angegebenen Text dem Protokoll hinzu. Da wir beim Aufruf von `log()` nicht wissen, ob es sicher ist, das DOM sofort zu berühren, werden wir den Protokolltext zwischenspeichern, bis es sicher ist, die Aktualisierung vorzunehmen. Oben im Code für `updateDisplay()` finden Sie den Code, der tatsächlich den protokollierten Text zu dem Protokollelement hinzufügt, wenn der Animations-Frame aktualisiert wird.

```js
function log(text) {
  logFragment ??= document.createDocumentFragment();
  const el = document.createElement("div");
  el.textContent = text;
  logFragment.appendChild(el);
}
```

Zunächst erstellen wir ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt namens `logFragment`, wenn derzeit keines existiert. Dieses Element ist ein Pseudo-DOM, in das wir Elemente einfügen können, ohne sofort das Haupt-DOM selbst zu ändern.

Dann erstellen wir ein neues {{HTMLElement("div")}}-Element und setzen dessen Inhalt auf den Eingabe-`text`.
Dann hängen wir das neue Element an das Ende des Pseudo-DOMs in `logFragment`.
`logFragment` wird Protokolleinträge bis zum nächsten Aufruf von `updateDisplay()` ansammeln, wenn das DOM bereit ist für die Änderungen.

### Aufgaben ausführen

Nun, da wir den Aufgabenverwaltungs- und Anzeigewartungscode abgeschlossen haben, können wir tatsächlich den Code einrichten, um Aufgaben auszuführen, die Arbeit erledigen.

#### Der Aufgabenverwalter

Die Funktion, die wir als unseren Aufgabenverwalter verwenden werden—das heißt die Funktion, die als Wert der `handler`-Eigenschaft des Aufgabenobjekts verwendet wird—ist `logTaskHandler()`. Es ist eine einfache Funktion, die für jede Aufgabe eine Menge Zeug im Protokoll ausgibt. In Ihrer eigenen Anwendung würden Sie diesen Code durch die Aufgabe ersetzen, die Sie während der Leerlaufzeit ausführen möchten. Denken Sie nur daran, dass alles, was Sie ändern möchten, das DOM betrifft, durch [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gehandhabt werden muss.

```js
function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### Das Hauptprogramm

Alles wird ausgelöst, wenn der Benutzer auf den Start-Button klickt, wodurch die `decodeTechnoStuff()`-Funktion aufgerufen wird.

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
  .addEventListener("click", decodeTechnoStuff);
```

`decodeTechnoStuff()` beginnt damit, die Werte von totalTaskCount (die Anzahl der bisher zur Warteschlange hinzugefügten Aufgaben) und currentTaskNumber (die derzeit ausgeführte Aufgabe) auf Null zu setzen und dann `updateDisplay()` aufzurufen, um die Anzeige in ihren "nichts ist passiert"-Zustand zurückzusetzen.

In diesem Beispiel wird eine zufällige Anzahl von Aufgaben erstellt (zwischen 100 und 200). Dazu verwenden wir die [`getRandomIntInclusive()`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive), die als Beispiel in der Dokumentation von {{jsxref("Math.random()")}} bereitgestellt wird, um die Anzahl der zu erstellenden Aufgaben zu erhalten.

Dann starten wir eine Schleife, um die tatsächlichen Aufgaben zu erstellen. Für jede Aufgabe erstellen wir ein Objekt `taskData`, das zwei Eigenschaften enthält:

- `count` ist die Anzahl der Zeichenfolgen, die von der Aufgabe im Protokoll ausgegeben werden sollen.
- `text` ist der Text, der im Protokoll die Anzahl der in `count` festgelegten Male ausgegeben werden soll.

Jede Aufgabe wird dann durch einen Anruf von `enqueueTask()` in die Warteschlange gestellt, wobei `logTaskHandler()` als Verarbeitungsfunktion und das `taskData`-Objekt als das objekt, das in die Funktion übergeben wird, wenn sie aufgerufen wird.

### Ergebnis

Unten ist das tatsächliche funktionierende Ergebnis des obenstehenden Codes. Probieren Sie es aus, spielen Sie damit in den Entwicklertools Ihres Browsers und experimentieren Sie, wie Sie es in Ihrem eigenen Code verwenden können.

{{ EmbedLiveSample('Example', 600, 700) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
