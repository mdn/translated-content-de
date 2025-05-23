---
title: Background Tasks API
slug: Web/API/Background_Tasks_API
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{DefaultAPISidebar("Background Tasks")}}

Die **Kooperative Planung der Hintergrundaufgaben-API** (auch als Hintergrundaufgaben-API oder `requestIdleCallback()`-API bezeichnet) bietet die Möglichkeit, Aufgaben in die Warteschlange zu stellen, die vom Benutzeragenten automatisch ausgeführt werden, wenn er feststellt, dass freie Zeit dafür vorhanden ist.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API).

## Konzepte und Verwendung

Der Haupt-Thread eines Webbrowsers dreht sich um seine Ereignisschleife. Dieser Code zeichnet alle ausstehenden Updates für das aktuell angezeigte [`Document`](/de/docs/Web/API/Document), führt erforderlichen JavaScript-Code auf der Seite aus, akzeptiert Ereignisse von Eingabegeräten und leitet diese Ereignisse an die Elemente weiter, die sie empfangen sollen. Zusätzlich verarbeitet die Ereignisschleife Interaktionen mit dem Betriebssystem, Updates der Benutzeroberfläche des Browsers usw. Es ist ein äußerst beschäftigter Codeblock, und Ihr Haupt-JavaScript-Code kann genau in diesem Thread zusammen mit all dem ausgeführt werden. Sicherlich wird der meiste, wenn nicht sogar der ganze Code, der in der Lage ist, Änderungen am DOM vorzunehmen, im Haupt-Thread ausgeführt, da Änderungen an der Benutzeroberfläche normalerweise nur im Haupt-Thread verfügbar sind.

Da die Ereignisverarbeitung und Bildschirmaktualisierungen zwei der offensichtlichsten Wege sind, wie Benutzer Leistungsprobleme bemerken, ist es wichtig, dass Ihr Code ein guter Web-Bürger ist und dazu beiträgt, Verzögerungen in der Ausführung der Ereignisschleife zu verhindern. Bisher gab es keine Möglichkeit, dies zuverlässig zu tun, außer durch das Schreiben von so effizienten Code wie möglich und durch das Auslagern von so viel Arbeit wie möglich an [Workers](/de/docs/Web/API/Web_Workers_API). [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) ermöglicht es, aktiv dazu beizutragen, dass die Ereignisschleife des Browsers reibungslos läuft, indem der Browser Ihrem Code mitteilen kann, wie viel Zeit er sicher verwenden kann, ohne das System zu verlangsamen. Wenn Sie sich an das gegebene Limit halten, können Sie die Benutzererfahrung erheblich verbessern.

### Das Beste aus Leerlauf-Rückrufen herausholen

Da Leerlauf-Rückrufe dazu gedacht sind, Ihrem Code eine Möglichkeit zu geben, mit der Ereignisschleife zu kooperieren, um sicherzustellen, dass das System optimal genutzt wird, ohne es zu überlasten, was in einer Verzögerung oder anderen Leistungsproblemen resultiert, sollten Sie sorgfältig überlegen, wie Sie sie verwenden.

- **Verwenden Sie Leerlauf-Rückrufe für Aufgaben mit geringer Priorität.** Da Sie nicht wissen, wie viele Rückrufe eingerichtet wurden, und Sie nicht wissen, wie beschäftigt das System des Benutzers ist, wissen Sie nicht, wie oft Ihr Rückruf ausgeführt wird (es sei denn, Sie geben einen `timeout` an). Es gibt keine Garantie, dass jeder Durchlauf durch die Ereignisschleife (oder sogar jeder Bildschirmaktualisierungszyklus) irgendwelche Leerlauf-Rückrufe enthält; wenn die Ereignisschleife die gesamte verfügbare Zeit verwendet, haben Sie Pech (nochmals, es sei denn, Sie haben einen `timeout` verwendet).
- **Leerlauf-Rückrufe sollten ihr Bestes tun, um die zugeteilte Zeit nicht zu überschreiten.** Während der Browser, Ihr Code und das Web im Allgemeinen normal weiterlaufen, wenn Sie das festgelegte Zeitlimit überschreiten (auch wenn Sie _weit_ darüber gehen), ist die Zeitbeschränkung dazu gedacht, sicherzustellen, dass Sie dem System genug Zeit lassen, um den aktuellen Durchlauf der Ereignisschleife zu beenden und zum nächsten zu gelangen, ohne dass anderer Code ins Stocken gerät oder Animationseffekte verzögern. Derzeit hat [`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining) eine Obergrenze von 50 Millisekunden, aber in Wirklichkeit werden Sie oft weniger Zeit haben, da die Ereignisschleife diese Zeit auf komplexen Websites bereits auffressen kann und Browsererweiterungen Prozessorzeit benötigen usw.
- **Vermeiden Sie Änderungen am DOM innerhalb Ihres Leerlauf-Rückrufs.** Wenn Ihr Rückruf ausgeführt wird, ist der aktuelle Frame bereits gezeichnet und alle Layout-Updates und Berechnungen sind abgeschlossen. Wenn Sie Änderungen vornehmen, die sich auf das Layout auswirken, könnten Sie eine Situation erzwingen, in der der Browser anhalten und Neuberechnungen durchführen muss, die sonst unnötig wären. Wenn Ihr Rückruf das DOM ändern muss, sollte er [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden, um es zu planen.
- **Vermeiden Sie Aufgaben, deren Laufzeit nicht vorhersehbar ist.** Ihr Leerlauf-Rückruf sollte vermeiden, irgendetwas zu tun, das eine unvorhersehbare Zeit in Anspruch nehmen könnte. Zum Beispiel sollte alles vermieden werden, was das Layout beeinflussen könnte. Sie sollten auch das Auflösen oder Ablehnen von {{jsxref("Promise")}}s vermeiden, da dies den Handler für die Erfüllung oder Ablehnung des Versprechens aufrufen würde, sobald Ihr Rückruf zurückkehrt.
- **Verwenden Sie nur dann Timeouts, wenn es notwendig ist.** Die Verwendung von Timeouts kann sicherstellen, dass Ihr Code rechtzeitig ausgeführt wird, aber es kann auch zulassen, dass Sie Verzögerungen oder Animationsruckler verursachen, indem Sie dem Browser vorschreiben, Sie aufzurufen, wenn nicht genügend Zeit übrig ist, damit Sie ohne Leistungsunterbrechungen laufen können.

## Schnittstellen

Die Hintergrundaufgaben-API fügt nur ein neues Interface hinzu:

- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
  - : Ein Objekt dieses Typs wird an den Leerlauf-Rückruf übergeben, um eine Schätzung darüber abzugeben, wie lange die Leerlaufperiode voraussichtlich dauern wird, sowie ob der Rückruf läuft, weil seine Timeout-Periode abgelaufen ist.

Die [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird auch durch diese API erweitert, um die neuen Methoden [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) und [`cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) anzubieten.

## Beispiel

In diesem Beispiel schauen wir uns an, wie Sie [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) verwenden können, um zeitaufwändige, niedrig priorisierte Aufgaben während der Zeit auszuführen, in der der Browser sonst im Leerlauf wäre. Darüber hinaus demonstriert dieses Beispiel, wie Dokumenteninhalt-Updates mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) geplant werden.

Nachfolgend finden Sie nur das HTML und JavaScript für dieses Beispiel. Das CSS wird nicht angezeigt, da es nicht besonders wichtig für das Verständnis dieser Funktionalität ist.

### HTML

Um sich darüber zu orientieren, was wir erreichen möchten, schauen wir uns das HTML an. Dies etabliert ein Feld (`id="container"`), das den Fortschritt einer Operation präsentiert (da Sie ja nie wissen, wie lange das Dekodieren von "Quantenfilament-Tachyonemissionen" dauert), sowie ein zweites Hauptfeld (`id="logBox"`), das zur Anzeige von Textausgaben verwendet wird.

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

Das Fortschrittsfeld verwendet ein {{HTMLElement("progress")}}-Element, um den Fortschritt anzuzeigen, zusammen mit einem Etikett mit Abschnitten, die geändert werden, um numerische Informationen über den Fortschritt zu präsentieren. Darüber hinaus gibt es einen "Start"-Button (kreativ mit der ID "startButton" versehen), den der Benutzer zum Starten der Datenverarbeitung verwenden wird.

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

Nun, da die Dokumentstruktur definiert ist, konstruieren wir den JavaScript-Code, der die Arbeit erledigen wird. Ziel: Anfragen zu Funktionen in eine Warteschlange stellen, die durch einen Leerlauf-Rückruf ausgeführt werden, wenn das System länger genug im Leerlauf ist, um Fortschritte zu machen.

#### Variablendeklarationen

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

Diese Variablen werden verwendet, um die Liste der zu erledigenden Aufgaben zu verwalten, sowie Statusinformationen über die Aufgabenwarteschlange und deren Ausführung:

- `taskList` ist ein {{jsxref("Array")}} von Objekten, wobei jedes eine Aufgabe darstellt, die auf die Ausführung wartet.
- `totalTaskCount` ist ein Zähler für die Anzahl der Aufgaben, die zur Warteschlange hinzugefügt wurden; er wird nur steigen, niemals sinken. Wir verwenden dies, um die Berechnung des Fortschritts als Prozentsatz der gesamten zu erledigenden Arbeit zu berechnen.
- `currentTaskNumber` wird verwendet, um zu verfolgen, wie viele Aufgaben bisher bearbeitet wurden.
- `taskHandle` ist eine Referenz auf die aktuell bearbeitete Aufgabe.

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

Als Nächstes haben wir Variablen, die auf die DOM-Elemente verweisen, mit denen wir interagieren müssen. Diese Elemente sind:

- `totalTaskCountElem` ist das {{HTMLElement("span")}}-Element, das wir verwenden, um die Gesamtzahl der erstellten Aufgaben in die Statusanzeige im Fortschrittsfeld einzufügen.
- `currentTaskNumberElem` ist das Element, das die Anzahl der bisher bearbeiteten Aufgaben anzeigt.
- `progressBarElem` ist das {{HTMLElement("progress")}}-Element, das den Prozentsatz der bisher bearbeiteten Aufgaben anzeigt.
- `startButtonElem` ist der Start-Button.
- `logElem` ist das {{HTMLElement("div")}}, in das wir geloggte Textnachrichten einfügen.

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

Schließlich richten wir ein paar Variablen für andere Elemente ein:

- `logFragment` wird verwendet, um ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu speichern, das von unseren Logging-Funktionen generiert wird, um einfügebare Inhalte zu erstellen, die dem Log hinzugefügt werden können, wenn der nächste Frame gerendert wird.
- `statusRefreshScheduled` wird verwendet, um zu verfolgen, ob wir bereits ein Update der Statusanzeigebox für den bevorstehenden Frame geplant haben, damit wir es nur einmal pro Frame tun.

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

Als Nächstes schauen wir uns an, wie wir die Aufgaben verwalten, die erledigt werden müssen. Wir werden dies tun, indem wir eine FIFO-Warteschlange von Aufgaben erstellen, die wir während des Leerlauf-Rückrufzeitraums ausführen, wenn Zeit vorhanden ist.

##### Aufgaben in die Warteschlange stellen

Zuerst benötigen wir eine Funktion, die Aufgaben für die zukünftige Ausführung in die Warteschlange stellt. Diese Funktion, `enqueueTask()`, sieht folgendermaßen aus:

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

`enqueueTask()` akzeptiert zwei Parameter als Eingabe:

- `taskHandler` ist eine Funktion, die aufgerufen wird, um die Aufgabe zu bearbeiten.
- `taskData` ist ein Objekt, das dem Aufgaben-Handler als Eingabeparameter übergeben wird, um der Aufgabe das Empfangen von benutzerdefinierten Daten zu ermöglichen.

Um die Aufgabe in die Warteschlange zu stellen, fügen wir ein Objekt an das `taskList`-Array an, das die `taskHandler`- und `taskData`-Werte unter den Namen `handler` bzw. `data` enthält, und erhöhen dann `totalTaskCount`, das die Gesamtzahl der jemals in die Warteschlange gestellten Aufgaben widerspiegelt (wir verringern es nicht, wenn Aufgaben aus der Warteschlange entfernt werden).

Als Nächstes überprüfen wir, ob bereits ein Leerlauf-Rückruf erstellt wurde; wenn `taskHandle` 0 ist, wissen wir, dass noch kein Leerlauf-Rückruf vorhanden ist, sodass wir [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) aufrufen, um einen zu erstellen. Dieser ist so konfiguriert, dass er eine Funktion namens `runTaskQueue()` aufruft, die wir uns gleich ansehen werden, mit einem `timeout` von 1 Sekunde, sodass er mindestens einmal pro Sekunde ausgeführt wird, selbst wenn keine tatsächliche Leerlaufzeit verfügbar ist.

##### Aufgaben ausführen

Unser Leerlauf-Rückruf-Handler, `runTaskQueue()`, wird aufgerufen, wenn der Browser feststellt, dass genügend Leerlaufzeit zur Verfügung steht, damit wir ein wenig Arbeit erledigen können, oder unser Timeout von einer Sekunde überschreitet. Die Aufgabe dieser Funktion besteht darin, unsere in die Warteschlange gestellten Aufgaben auszuführen.

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

Der Kern von `runTaskQueue()` ist eine Schleife, die so lange fortgesetzt wird, wie noch Zeit übrig ist (wie durch die Überprüfung von [`deadline.timeRemaining`](/de/docs/Web/API/IdleDeadline/timeRemaining) bestimmt), um sicherzugehen, dass diese mehr als 0 ist, oder wenn das Timeout-Limit erreicht wurde ([`deadline.didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout) ist wahr), und solange noch Aufgaben in der Aufgabenliste vorhanden sind.

Für jede Aufgabe in der Warteschlange, die wir ausführen können, tun wir Folgendes:

1. Wir [entfernen das Aufgabenobjekt aus der Warteschlange](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).
2. Wir erhöhen `currentTaskNumber`, um zu verfolgen, wie viele Aufgaben wir bisher ausgeführt haben.
3. Wir rufen den Aufgaben-Handler der Aufgabe, `task.handler`, auf und übergeben dabei das Datenobjekt der Aufgabe (`task.data`).
4. Wir rufen eine Funktion namens `scheduleStatusRefresh()` auf, um die Planung eines Bildschirms-Updates zur Aktualisierung unseres Fortschritts zu organisieren.

Wenn die Zeit abläuft und noch Aufgaben in der Liste sind, rufen wir erneut [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) auf, damit wir die Aufgaben fortsetzen können, die noch verfügbar sind, sobald es wieder Leerlaufzeit gibt. Wenn die Warteschlange leer ist, setzen wir den taskHandle auf 0, um anzuzeigen, dass wir keinen Rückruf geplant haben. Auf diese Weise wissen wir, dass wir beim nächsten Aufruf von `enqueueTask()` einen Rückruf anfordern müssen.

#### Aktualisierung der Statusanzeige

Eine Aufgabe, die wir ausführen müssen, ist die Aktualisierung unseres Dokuments mit Protokollausgaben und Fortschrittsinformationen. Da Sie das DOM nicht sicher innerhalb eines Leerlauf-Rückrufs ändern können, verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), um den Browser zu bitten, uns anzurufen, wenn es sicher ist, die Anzeige zu aktualisieren.

##### Anzeigenaktualisierungen planen

DOM-Änderungen werden geplant, indem die Funktion `scheduleStatusRefresh()` aufgerufen wird.

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

Dies ist eine einfache Funktion. Sie überprüft, ob wir bereits ein Update der Anzeige geplant haben, indem sie den Wert von `statusRefreshScheduled` überprüft. Wenn er `false` ist, rufen wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) auf, um ein Update zu planen, und geben dabei die Funktion `updateDisplay()` an, die diese Arbeit übernehmen soll.

##### Die Anzeige aktualisieren

Die `updateDisplay()`-Funktion ist verantwortlich für das Zeichnen der Inhalte der Fortschrittsanzeige und des Protokolls. Sie wird vom Browser aufgerufen, wenn das DOM in einem sicheren Zustand ist, um Änderungen während des Prozesses zum Rendern des nächsten Frames anzuwenden.

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

Als Nächstes aktualisieren wir den Fortschritt und die Statusinformationen, wenn Aufgaben in die Warteschlange gestellt wurden.

1. Wenn der aktuelle Höchstwert der Fortschrittsanzeige anders als die aktuelle Gesamtzahl der in die Warteschlange gestellten Aufgaben (`totalTaskCount`) ist, aktualisieren wir den angezeigten Gesamtnummer der Aufgaben (`totalTaskCountElem`) und den Höchstwert der Fortschrittsanzeige, damit er richtig skaliert.
2. Wir tun dasselbe mit der Anzahl der bisher bearbeiteten Aufgaben; wenn `progressBarElem.value` anders als die aktuell bearbeitete Aufgabe (`currentTaskNumber`) ist, aktualisieren wir den angezeigten Wert der aktuell bearbeiteten Aufgabe und den aktuellen Wert der Fortschrittsanzeige.

Dann, wenn Text darauf wartet, dem Protokoll hinzugefügt zu werden (d.h. wenn `logFragment` nicht `null` ist), fügen wir ihn dem Protokollelement mit [`Element.appendChild()`](/de/docs/Web/API/Node/appendChild) hinzu und setzen `logFragment` auf `null`, damit wir es nicht erneut hinzufügen.

Wenn das Protokoll zu Beginn nach unten gescrollt war, stellen wir sicher, dass es dies immer noch ist. Dann setzen wir `statusRefreshScheduled` auf `false`, um anzuzeigen, dass wir das Update verarbeitet haben und dass es sicher ist, ein neues anzufordern.

#### Text zum Protokoll hinzufügen

Die `log()`-Funktion fügt den angegebenen Text dem Protokoll hinzu. Da wir zum Zeitpunkt des Aufrufs von `log()` nicht wissen, ob es sicher ist, das DOM sofort zu berühren, werden wir den Protokolltext zwischenspeichern, bis es sicher ist, das Update durchzuführen. Oben, im Code für `updateDisplay()`, finden Sie den Code, der tatsächlich den geloggten Text zum Protokollelement hinzufügt, wenn der Animationsrahmen aktualisiert wird.

```js
function log(text) {
  logFragment ??= document.createDocumentFragment();
  const el = document.createElement("div");
  el.textContent = text;
  logFragment.appendChild(el);
}
```

Zuerst erstellen wir ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt namens `logFragment`, falls aktuell noch keines existiert. Dieses Element ist ein Pseudo-DOM, in das wir Elemente einfügen können, ohne das Haupt-DOM selbst sofort zu ändern.

Dann erstellen wir ein neues {{HTMLElement("div")}}-Element und setzen dessen Inhalt auf das eingegebene `text`.
Anschließend fügen wir das neue Element an das Ende des Pseudo-DOM in `logFragment`.
`logFragment` wird Protokolleinträge anhäufen, bis das nächste Mal `updateDisplay()` aufgerufen wird, sobald das DOM für die Änderungen bereit ist.

### Aufgaben ausführen

Jetzt, da wir die Aufgabenverwaltung und die Anzeigeaktualisierungscode erstellt haben, können wir tatsächlich beginnen, Code einzurichten, um Aufgaben auszuführen, die Arbeit erledigen.

#### Der Aufgaben-Handler

Die Funktion, die wir als unseren Aufgaben-Handler verwenden werden - das heißt, die Funktion, die als der Wert der `handler`-Eigenschaft des Aufgabenobjekts verwendet wird - ist `logTaskHandler()`. Es ist eine einfache Funktion, die für jede Aufgabe eine Menge Ausgaben ins Protokoll ausgibt. In Ihrer eigenen Anwendung würden Sie diesen Code durch die Aufgabe ersetzen, die Sie während der Leerlaufzeit ausführen möchten. Denken Sie daran, dass alles, was Sie tun möchten, das das DOM ändert, über [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) behandelt werden muss.

```js
function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### Das Hauptprogramm

Alles wird ausgelöst, wenn der Benutzer auf die Schaltfläche "Start" klickt, was dazu führt, dass die Funktion `decodeTechnoStuff()` aufgerufen wird.

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

`decodeTechnoStuff()` beginnt damit, die Werte von totalTaskCount (die Anzahl der Aufgaben, die bisher zur Warteschlange hinzugefügt wurden) und currentTaskNumber (die aktuell ausgeführte Aufgabe) auf null zu setzen und anschließend `updateDisplay()` aufzurufen, um die Anzeige in ihren "nichts ist bisher passiert" Zustand zurückzusetzen.

Dieses Beispiel wird eine zufällige Anzahl von Aufgaben erstellen (zwischen 100 und 200 davon). Dazu verwenden wir die [`getRandomIntInclusive()`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive), das als Beispiel in der Dokumentation für {{jsxref("Math.random()")}} bereitgestellt wird, um die Anzahl der zu erstellenden Aufgaben zu erhalten.

Dann starten wir eine Schleife, um die tatsächlichen Aufgaben zu erstellen. Für jede Aufgabe erstellen wir ein Objekt, `taskData`, das zwei Eigenschaften umfasst:

- `count` ist die Anzahl der Zeichenketten, die von der Aufgabe ins Protokoll ausgegeben werden sollen.
- `text` ist der Text, der so oft wie durch `count` angegeben ins Protokoll ausgegeben werden soll.

Jede Aufgabe wird dann durch Aufruf von `enqueueTask()` in die Warteschlange gestellt, wobei wir `logTaskHandler()` als Handler-Funktion und das `taskData`-Objekt als Objekt übergeben, das der Funktion bei ihrem Aufruf übergeben wird.

### Ergebnis

Unten ist das tatsächlich funktionierende Ergebnis des oben gezeigten Codes. Probieren Sie es aus, spielen Sie damit in den Entwicklertools Ihres Browsers und experimentieren Sie mit der Verwendung in Ihrem eigenen Code.

{{ EmbedLiveSample('Example', 600, 700) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
