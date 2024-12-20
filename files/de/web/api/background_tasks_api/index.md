---
title: Background Tasks API
slug: Web/API/Background_Tasks_API
l10n:
  sourceCommit: c30698b4a2affde9c64c6f6eb479e16f7b8fe481
---

{{DefaultAPISidebar("Background Tasks")}}

Die **Kooperative Planung der Hintergrundaufgaben-API** (auch bekannt als Hintergrundaufgaben-API oder `requestIdleCallback()`-API) bietet die Möglichkeit, Aufgaben zu planen, die vom Benutzeragenten automatisch ausgeführt werden, wenn er feststellt, dass es dafür freie Zeit gibt.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API).

## Konzepte und Verwendung

Der Hauptthread eines Webbrowsers dreht sich um seine Ereignisschleife. Dieser Code zeichnet alle anstehenden Updates auf das [`Document`](/de/docs/Web/API/Document), das derzeit angezeigt wird, führt den JavaScript-Code aus, den die Seite ausführen muss, akzeptiert Ereignisse von Eingabegeräten und verteilt diese Ereignisse an die Elemente, die sie empfangen sollen. Darüber hinaus behandelt die Ereignisschleife Interaktionen mit dem Betriebssystem, Updates der Benutzeroberfläche des Browsers und so weiter. Es ist ein extrem beschäftigtes Stück Code, und Ihr Haupt-JavaScript-Code kann genau in diesem Thread zusammen mit all dem ausgeführt werden. Sicherlich läuft der meiste, wenn nicht sogar der gesamte Code, der Änderungen am DOM vornehmen kann, im Hauptthread, da es üblich ist, dass Änderungen der Benutzeroberfläche nur für den Hauptthread verfügbar sind.

Da Ereignisverarbeitung und Bildschirmaktualisierungen zwei der offensichtlichsten Möglichkeiten sind, wie Nutzer Leistungsprobleme bemerken, ist es wichtig, dass Ihr Code ein guter Webbürger ist und dazu beiträgt, Verzögerungen bei der Ausführung der Ereignisschleife zu verhindern. Bisher gab es keine Möglichkeit, dies zuverlässig zu tun, außer durch das Schreiben von Code, der so effizient wie möglich ist, und durch das Auslagern von so viel Arbeit wie möglich an [workers](/de/docs/Web/API/Web_Workers_API). [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) ermöglicht es, aktiv daran teilzunehmen, dass die Ereignisschleife des Browsers reibungslos läuft, indem der Browser Ihrem Code mitteilt, wie viel Zeit er sicher nutzen kann, ohne das System zum Verlangsamen zu bringen. Wenn Sie innerhalb des vorgegebenen Limits bleiben, können Sie die Benutzererfahrung erheblich verbessern.

### Das Beste aus Leerlaufrückrufen herausholen

Da Leerlaufrückrufe dazu vorgesehen sind, Ihrem Code eine Möglichkeit zu geben, mit der Ereignisschleife zu kooperieren, um sicherzustellen, dass das System ohne Überlastung optimal genutzt wird, was zu Verzögerungen oder anderen Leistungsproblemen führt, sollten Sie überlegen, wie Sie diese verwenden.

- **Verwenden Sie Leerlaufrückrufe für Aufgaben, die keine hohe Priorität haben.** Da Sie nicht wissen, wie viele Rückrufe eingerichtet wurden und wie ausgelastet das System des Nutzers ist, wissen Sie nicht, wie oft Ihr Rückruf ausgeführt wird (es sei denn, Sie spezifizieren einen `timeout`). Es gibt keine Garantie, dass jeder Durchlauf durch die Ereignisschleife (oder sogar jeder Bildschirmaktualisierungszyklus) Leerlaufrückrufe umfasst; wenn die Ereignisschleife die gesamte verfügbare Zeit verwendet, haben Sie Pech (es sei denn, Sie haben einen `timeout` verwendet).
- **Leerlaufrückrufe sollten ihr Bestes tun, um die zugewiesene Zeit nicht zu überziehen.** Während der Browser, Ihr Code und das Web im Allgemeinen normal weiterlaufen, wenn Sie die vorgegebene Zeitgrenze überschreiten (selbst wenn Sie _weit_ darüber hinausgehen), dient die Zeitbeschränkung dazu, sicherzustellen, dass Sie dem System genug Zeit lassen, um den aktuellen Durchgang der Ereignisschleife abzuschließen und den nächsten zu beginnen, ohne dass anderer Code ins Stocken gerät oder Animationseffekte verzögert werden. Derzeit hat [`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining) ein oberes Limit von 50 Millisekunden, aber in der Realität haben Sie oft weniger Zeit als das, da die Ereignisschleife bereits in diese Zeit hineinfrisst bei komplexen Seiten, mit Browser-Erweiterungen, die Zeit beanspruchen, und so weiter.
- **Vermeiden Sie Änderungen am DOM innerhalb Ihres Leerlaufrückrufs.** Wenn Ihr Rückruf ausgeführt wird, ist der aktuelle Frame bereits gezeichnet und alle Layout-Updates und Berechnungen sind abgeschlossen. Wenn Sie Änderungen vornehmen, die das Layout beeinflussen, könnten Sie eine Situation erzwingen, in der der Browser anhalten und Neuberechnungen durchführen muss, die ansonsten nicht notwendig wären. Wenn Ihr Rückruf das DOM ändern muss, sollte er [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden, um dies einzuplanen.
- **Vermeiden Sie Aufgaben, deren Ausführungszeit nicht vorhersehbar ist.** Ihr Leerlaufrückruf sollte vermeiden, irgendetwas zu tun, das eine unvorhersehbare Zeit dauern könnte. Zum Beispiel sollte alles, was das Layout beeinflussen könnte, vermieden werden. Sie sollten auch vermeiden, {{jsxref("Promise")}}s aufzulösen oder abzulehnen, da dies den Handler für die Auflösung oder Ablehnung dieses Versprechens unmittelbar nach der Rückkehr Ihres Rückrufs aufrufen würde.
- **Verwenden Sie Zeitlimits, wenn Sie es müssen, aber nur dann.** Die Verwendung von Zeitlimits kann sicherstellen, dass Ihr Code rechtzeitig ausgeführt wird, aber es kann Ihnen auch ermöglichen, Verzögerungen oder Animationsstörungen zu verursachen, indem Sie den Browser dazu zwingen, Sie aufzurufen, wenn nicht mehr genügend Zeit vorhanden ist, um ohne Beeinträchtigung der Leistung zu laufen.

## Schnittstellen

Die Hintergrundaufgaben-API fügt nur eine neue Schnittstelle hinzu:

- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
  - : Ein Objekt dieses Typs wird an den Leerlaufrückruf weitergegeben und liefert eine Schätzung, wie lange die Leerlaufperiode voraussichtlich dauern wird, sowie ob der Rückruf ausgeführt wird, weil seine Timeout-Periode abgelaufen ist.

Die [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird auch durch diese API erweitert, um die neuen Methoden [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) und [`cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) anzubieten.

## Beispiel

In diesem Beispiel schauen wir uns an, wie Sie [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) verwenden können, um zeitaufwändige, niederrangige Aufgaben während der Zeit auszuführen, in der der Browser ansonsten im Leerlauf wäre. Darüber hinaus demonstriert dieses Beispiel, wie Sie Updates an den Dokumentinhalt mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) planen können.

Im Folgenden finden Sie nur das HTML und JavaScript für dieses Beispiel. Das CSS wird nicht gezeigt, da es nicht besonders entscheidend für das Verständnis dieser Funktionalität ist.

### HTML

Um zu verstehen, was wir erreichen wollen, werfen wir einen Blick auf das HTML. Dies erstellt ein Feld (`id="container"`), das verwendet wird, um den Fortschritt einer Operation darzustellen (weil man ja nie weiß, wie lange das Dekodieren von "Quantenfilament-Tachyon-Emissionen" dauern wird), sowie ein zweites Hauptfeld (`id="logBox"`), das zur Anzeige von Textausgaben dient.

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

Das Fortschrittsfeld verwendet ein {{HTMLElement("progress")}}-Element, um den Fortschritt zu zeigen, zusammen mit einem Label mit Abschnitten, die geändert werden, um numerische Informationen über den Fortschritt darzustellen. Darüber hinaus gibt es einen "Start"-Button (kreativ mit der ID "startButton" versehen), den der Benutzer verwendet, um die Datenverarbeitung zu starten.

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

Jetzt, da die Dokumentenstruktur definiert ist, konstruieren Sie den JavaScript-Code, der die Arbeit übernehmen wird. Das Ziel: in der Lage sein, Anfragen zu stellen, um Funktionen in einer Warteschlange aufzurufen, mit einem Leerlaufrückruf, der diese Funktionen ausführt, wann immer das System lange genug im Leerlauf ist, um Fortschritte zu machen.

#### Variablendeklarationen

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

Diese Variablen werden verwendet, um die Liste der Aufgaben zu verwalten, die auf die Ausführung warten, sowie Statusinformationen über die Aufgabenwarteschlange und deren Ausführung:

- `taskList` ist ein {{jsxref("Array")}} von Objekten, die jeweils eine Aufgabe repräsentieren, die ausgeführt werden soll.
- `totalTaskCount` ist ein Zähler für die Anzahl der Aufgaben, die zur Warteschlange hinzugefügt wurden; er wird nur nach oben gehen, niemals nach unten. Wir verwenden dies, um die Mathematik zu betreiben, um den Fortschritt als Prozentsatz der zu erledigenden Gesamtarbeit darzustellen.
- `currentTaskNumber` wird verwendet, um zu verfolgen, wie viele Aufgaben bisher bearbeitet wurden.
- `taskHandle` ist eine Referenz auf die Aufgabe, die gerade bearbeitet wird.

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

Als Nächstes haben wir Variablen, die auf die DOM-Elemente verweisen, mit denen wir interagieren müssen. Diese Elemente sind:

- `totalTaskCountElem` ist das {{HTMLElement("span")}}, das wir verwenden, um die Gesamtzahl der erstellten Aufgaben in die Statusanzeige im Fortschrittsfeld einzufügen.
- `currentTaskNumberElem` ist das Element, das die Anzahl der bisher bearbeiteten Aufgaben anzeigt.
- `progressBarElem` ist das {{HTMLElement("progress")}}-Element, das den Prozentsatz der bisher bearbeiteten Aufgaben anzeigt.
- `startButtonElem` ist der Startknopf.
- `logElem` ist das {{HTMLElement("div")}}, in das wir protokollierte Textnachrichten einfügen.

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

Schließlich richten wir ein paar Variablen für andere Elemente ein:

- `logFragment` wird verwendet, um ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu speichern, das von unseren Protokollierungsfunktionen generiert wird, um Inhalte zu erstellen, die in das Protokoll eingefügt werden sollen, wenn der nächste Animationsframe gerendert wird.
- `statusRefreshScheduled` wird verwendet, um zu verfolgen, ob wir bereits ein Update des Statusanzeigefelds für den kommenden Frame eingeplant haben, damit wir es nur einmal pro Frame tun

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

Als Nächstes schauen wir uns die Art und Weise an, wie wir die Aufgaben verwalten, die ausgeführt werden müssen. Wir werden dies tun, indem wir eine FIFO-Warteschlange von Aufgaben erstellen, die wir während der Leerlaufrückrufperiode ausführen, soweit die Zeit dies zulässt.

##### Aufgaben in die Warteschlange einreihen

Zuerst brauchen wir eine Funktion, die Aufgaben zur späteren Ausführung in die Warteschlange einreiht. Diese Funktion, `enqueueTask()`, sieht folgendermaßen aus:

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

`enqueueTask()` akzeptiert als Eingabe zwei Parameter:

- `taskHandler` ist eine Funktion, die aufgerufen wird, um die Aufgabe zu bearbeiten.
- `taskData` ist ein Objekt, das als Eingabeparameter in den Aufgaben-Handler übergeben wird, damit die Aufgabe benutzerspezifische Daten erhalten kann.

Um die Aufgabe in die Warteschlange einzureihen, [fügen wir ein Objekt in das `taskList`-Array ein](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push); das Objekt enthält die Werte `taskHandler` und `taskData` unter den Namen `handler` und `data`, und wir erhöhen `totalTaskCount`, das die Gesamtanzahl der jemals in die Warteschlange eingefügten Aufgaben widerspiegelt (wir verringern diesen Wert nicht, wenn Aufgaben aus der Warteschlange entfernt werden).

Als nächstes überprüfen wir, ob wir bereits einen Leerlaufrückruf erstellt haben; wenn `taskHandle` 0 ist, wissen wir, dass noch kein Leerlaufrückruf vorhanden ist, also rufen wir [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) auf, um einen zu erstellen. Er ist so konfiguriert, dass er eine Funktion namens `runTaskQueue()` aufruft, die wir uns gleich ansehen werden, und mit einem `timeout` von 1 Sekunde, damit er mindestens einmal pro Sekunde ausgeführt wird, auch wenn nicht wirklich Leerlaufzeit verfügbar ist.

##### Aufgaben ausführen

Unser Leerlaufrückruf-Handler, `runTaskQueue()`, wird aufgerufen, wenn der Browser feststellt, dass genug Leerlaufzeit verfügbar ist, um uns etwas Arbeit machen zu lassen oder unser Timeout von einer Sekunde abläuft. Diese Funktion hat die Aufgabe, unsere in die Warteschlange gestellten Aufgaben auszuführen.

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

`runTaskQueue()`s Kern ist eine Schleife, die fortfährt, solange noch Zeit übrig ist (ermittelt durch die Prüfung von [`deadline.timeRemaining`](/de/docs/Web/API/IdleDeadline/timeRemaining)), um sicherzustellen, dass es mehr als 0 ist oder das Zeitlimit erreicht wurde ([`deadline.didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout) ist wahr), und solange Aufgaben in der Aufgabenliste vorhanden sind.

Für jede Aufgabe in der Warteschlange, die wir ausführen können, tun wir Folgendes:

1. Wir [entfernen das Aufgabenobjekt aus der Warteschlange](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).
2. Wir erhöhen `currentTaskNumber`, um zu verfolgen, wie viele Aufgaben wir ausgeführt haben.
3. Wir rufen den Handler der Aufgabe auf, `task.handler`, und übergeben ihm das Datenobjekt der Aufgabe (`task.data`).
4. Wir rufen eine Funktion `scheduleStatusRefresh()` auf, um die Planung eines Bildschirmupdates zur Aktualisierung der Fortschrittsanzeige zu bearbeiten.

Wenn die Zeit abläuft und noch Aufgaben in der Liste sind, rufen wir [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) erneut auf, damit wir die Aufgaben fortsetzen können, sobald wieder Leerlaufzeit verfügbar ist. Wenn die Warteschlange leer ist, setzen wir `taskHandle` auf 0, um anzuzeigen, dass wir keinen Rückruf geplant haben. So wissen wir beim nächsten Aufruf von `enqueueTask()`, dass wir einen Rückruf anfordern müssen.

#### Aktualisieren der Statusanzeige

Eine Sache, die wir tun wollen, ist, unser Dokument mit Protokollausgaben und Fortschrittsinformationen zu aktualisieren. Sie können jedoch das DOM nicht sicher innerhalb eines Leerlaufrückrufs ändern. Stattdessen verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Browser zu bitten, uns zu benachrichtigen, wenn es sicher ist, das Display zu aktualisieren.

##### Anzeigeaktualisierungen planen

DOM-Änderungen werden durch den Aufruf der Funktion `scheduleStatusRefresh()` geplant.

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

Dies ist eine einfache Funktion. Sie überprüft, ob wir bereits eine Anzeigeaktualisierung geplant haben, indem sie den Wert von `statusRefreshScheduled` überprüft. Wenn er `false` ist, rufen wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) auf, um eine Aktualisierung zu planen, wobei wir die Funktion `updateDisplay()` zur Handhabung dieser Arbeit bereitstellen.

##### Die Anzeige aktualisieren

Die Funktion `updateDisplay()` ist verantwortlich für das Zeichnen der Inhalte des Fortschrittsfelds und des Protokolls. Sie wird vom Browser aufgerufen, wenn das DOM in einem sicheren Zustand ist, um während des Renderns des nächsten Frames Änderungen vorzunehmen.

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

Zuerst wird `scrolledToEnd` auf `true` gesetzt, wenn der Text im Protokoll bis zum Ende gescrollt ist; andernfalls wird er auf `false` gesetzt. Wir werden das verwenden, um zu bestimmen, ob wir die Scrollposition aktualisieren sollten, um sicherzustellen, dass das Protokoll am Ende bleibt, wenn wir mit dem Hinzufügen von Inhalten fertig sind.

Als nächstes aktualisieren wir die Fortschritts- und Statusinformationen, wenn Aufgaben in die Warteschlange eingereiht wurden.

1. Wenn der aktuelle Maximalwert der Fortschrittsanzeige von der aktuellen Gesamtzahl der in die Warteschlange eingereihten Aufgaben (`totalTaskCount`) abweicht, aktualisieren wir den Inhalt der angezeigten Gesamtzahl der Aufgaben (`totalTaskCountElem`) und den Maximalwert der Fortschrittsleiste, damit sie richtig skaliert wird.
2. Wir tun dasselbe mit der Anzahl der bisher verarbeiteten Aufgaben; wenn `progressBarElem.value` vom aktuell verarbeiteten Aufgabenanzahl (`currentTaskNumber`) abweicht, aktualisieren wir den angezeigten Wert der aktuell verarbeiteten Aufgabe und den aktuellen Wert der Fortschrittsleiste.

Dann, wenn es Text gibt, der dem Protokoll hinzugefügt werden soll (das heißt, wenn `logFragment` nicht `null` ist), fügen wir ihn dem Protokollelement mit [`Element.appendChild()`](/de/docs/Web/API/Node/appendChild) hinzu und setzen `logFragment` auf `null`, damit wir es nicht nochmal hinzufügen.

Wenn das Protokoll beim Start bis zum Ende gescrollt war, stellen wir sicher, dass es das immer noch ist. Dann setzen wir `statusRefreshScheduled` auf `false`, um anzuzeigen, dass wir die Aktualisierung bearbeitet haben und dass es sicher ist, eine neue anzufordern.

#### Text dem Protokoll hinzufügen

Die Funktion `log()` fügt dem Protokoll den angegebenen Text hinzu. Da wir zum Zeitpunkt des Aufrufs von `log()` nicht wissen, ob es sicher ist, das DOM sofort zu berühren, werden wir den Protokolltext zwischenspeichern, bis es sicher ist, das Update vorzunehmen. Oben, im Code für `updateDisplay()`, finden Sie den Code, der den geloggten Text tatsächlich dem Protokollelement hinzufügt, wenn der Animationsframe aktualisiert wird.

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

Zuerst erstellen wir ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt namens `logFragment`, falls noch keines existiert. Dieses Element ist ein Pseudo-DOM, in das wir Elemente einfügen können, ohne sofort das Haupt-DOM selbst zu ändern.

Dann erstellen wir ein neues {{HTMLElement("div")}}-Element und setzen dessen Inhalt, um dem Eingabe-`text` zu entsprechen. Anschließend fügen wir das neue Element an das Ende des Pseudo-DOM in `logFragment` an. `logFragment` wird Protokolleinträge bis zum nächsten Aufruf von `updateDisplay()` anhäufen, sobald das DOM bereit für die Änderungen ist.

### Aufgaben ausführen

Nun, da wir den Aufgabenverwaltungs- und Anzeigepflegecode erstellt haben, können wir tatsächlich anfangen, Code einzurichten, der Aufgaben zum Erledigen von Arbeit ausführt.

#### Der Aufgaben-Handler

Die Funktion, die wir als Aufgabenhandler verwenden werden - das heißt, die Funktion, die als Wert der `handler`-Eigenschaft des Aufgabenobjekts verwendet wird - ist `logTaskHandler()`. Es ist eine einfache Funktion, die für jede Aufgabe eine Reihe von Dingen in das Protokoll ausgibt. In Ihrer eigenen Anwendung würden Sie diesen Code durch die Aufgabe ersetzen, die Sie während der Leerlaufzeit durchführen möchten. Denken Sie einfach daran, dass alles, was Sie tun möchten, das das DOM verändert, über [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) behandelt werden muss.

```js
function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### Das Hauptprogramm

Alles wird ausgelöst, wenn der Nutzer den Startknopf klickt, was dazu führt, dass die Funktion `decodeTechnoStuff()` aufgerufen wird.

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

`decodeTechnoStuff()` beginnt mit dem Nullstellen der Werte `totalTaskCount` (die Anzahl der so far in die Warteschlange eingefügten Aufgaben) und `currentTaskNumber` (die gerade ausgeführte Aufgabe) und ruft dann `updateDisplay()` auf, um die Anzeige auf den Zustand "es ist noch nichts passiert" zurückzusetzen.

In diesem Beispiel wird eine zufällige Anzahl von Aufgaben (zwischen 100 und 200) erstellt. Dazu verwenden wir die in der Dokumentation zu {{jsxref("Math.random()")}} bereitgestellte Funktion [`getRandomIntInclusive()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive), um die Anzahl der zu erstellenden Aufgaben zu erhalten.

Dann starten wir eine Schleife, um die tatsächlichen Aufgaben zu erstellen. Für jede Aufgabe erstellen wir ein Objekt, `taskData`, das zwei Attribute beinhaltet:

- `count` ist die Anzahl der Zeichenfolgen, die die Aufgabe in das Protokoll ausgeben soll.
- `text` ist der Text, der die Anzahl der in `count` angegebenen Male in das Protokoll ausgegeben werden soll.

Jede Aufgabe wird dann durch den Aufruf von `enqueueTask()`, wobei `logTaskHandler()` als Handlerfunktion und das `taskData`-Objekt als das an die Funktion zu übergebende Objekt angegeben wird, in die Warteschlange gestellt.

### Ergebnis

Unten ist das tatsächliche funktionierende Ergebnis des obigen Codes. Probieren Sie es aus, experimentieren Sie damit in den Entwicklerwerkzeugen Ihres Browsers und experimentieren Sie mit dem Einsatz in Ihrem eigenen Code.

{{ EmbedLiveSample('Example', 600, 700) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
