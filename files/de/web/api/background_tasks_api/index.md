---
title: API für Hintergrundaufgaben
slug: Web/API/Background_Tasks_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Background Tasks")}}

Die **API zur kooperativen Planung von Hintergrundaufgaben** (auch als Hintergrundaufgaben-API oder `requestIdleCallback()`-API bezeichnet) ermöglicht es, Aufgaben in eine Warteschlange zu stellen, die automatisch vom Benutzeragenten ausgeführt werden, wenn dieser feststellt, dass freie Zeit dafür vorhanden ist.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API).

## Konzepte und Nutzung

Der Haupt-Thread eines Webbrowsers ist um seine Ereignisschleife herum zentriert. Dieser Code zeichnet alle ausstehenden Updates des aktuell angezeigten {{domxref("Document")}}, führt jeglichen JavaScript-Code aus, der auf der Seite laufen muss, akzeptiert Ereignisse von Eingabegeräten und leitet diese Ereignisse an die Elemente weiter, die sie erhalten sollen. Darüber hinaus verarbeitet die Ereignisschleife Interaktionen mit dem Betriebssystem, Updates der eigenen Benutzeroberfläche des Browsers und so weiter. Es handelt sich um einen extrem beschäftigten Codeabschnitt, und Ihr Haupt-JavaScript-Code läuft möglicherweise direkt in diesem Thread zusammen mit all diesen Aufgaben. Mit Sicherheit läuft der größte Teil, wenn nicht sogar der gesamte Code, der in der Lage ist, Änderungen am DOM vorzunehmen, im Haupt-Thread, da es üblich ist, dass Änderungen an der Benutzeroberfläche nur für den Haupt-Thread verfügbar sind.

Da die Ereignisbehandlung und Bildschirmaktualisierungen zwei der offensichtlichsten Wege sind, wie Benutzer Leistungsprobleme bemerken, ist es wichtig, dass Ihr Code ein guter Bürger des Webs ist und dazu beiträgt, Störungen in der Ausführung der Ereignisschleife zu verhindern. Bisher gab es keine zuverlässige Möglichkeit, dies zu tun, außer durch Schreiben von möglichst effizientem Code und durch Auslagern so viel Arbeit wie möglich an [workers](/de/docs/Web/API/Web_Workers_API). {{domxref("Window.requestIdleCallback()")}} macht es möglich, aktiv dazu beizutragen, dass die Ereignisschleife des Browsers reibungslos läuft, indem dem Browser erlaubt wird, Ihrem Code mitzuteilen, wie viel Zeit er sicher verwenden kann, ohne das System zu beeinträchtigen. Wenn Sie innerhalb des vorgegebenen Limits bleiben, können Sie das Benutzererlebnis erheblich verbessern.

### Maximale Nutzung von Leerlaufrückrufen

Da Leerlaufrückrufe dazu gedacht sind, Ihrem Code eine Möglichkeit zu geben, mit der Ereignisschleife zu kooperieren, um sicherzustellen, dass das System in vollem Umfang genutzt wird, ohne es zu überlasten, was zu Verzögerungen oder anderen Leistungsproblemen führen könnte, sollten Sie sorgfältig darüber nachdenken, wie Sie sie verwenden.

- **Verwenden Sie Leerlaufrückrufe für Aufgaben, die keine hohe Priorität haben.** Da Sie nicht wissen, wie viele Rückrufe bereits eingerichtet wurden und wie beschäftigt das System des Benutzers ist, wissen Sie nicht, wie oft Ihr Rückruf ausgeführt wird (es sei denn, Sie geben ein `timeout` an). Es gibt keine Garantie dafür, dass bei jedem Durchlauf der Ereignisschleife (oder sogar bei jedem Bildschirmaktualisierungszyklus) Leerlaufrückrufe ausgeführt werden; wenn die Ereignisschleife die gesamte verfügbare Zeit verbraucht, haben Sie Pech (es sei denn, Sie haben ein `timeout` verwendet).
- **Leerlaufrückrufe sollten ihr Bestes tun, um nicht die zugewiesene Zeit zu überziehen.** Während der Browser, Ihr Code und das Web im Allgemeinen normal weiterlaufen, wenn Sie über das festgelegte Zeitlimit hinausgehen (sogar wenn Sie _weit_ darüber hinausgehen), soll die zeitliche Begrenzung sicherstellen, dass Sie dem System genügend Zeit lassen, um den aktuellen Durchlauf der Ereignisschleife zu beenden und mit dem nächsten fortzufahren, ohne dass anderer Code stockt oder Animationseffekte verzögern. Derzeit hat {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} eine Obergrenze von 50 Millisekunden, tatsächlich haben Sie jedoch oft weniger Zeit, da die Ereignisschleife bei komplexen Websites möglicherweise bereits in diese Zeit hineinläuft, mit Browsererweiterungen, die Prozessorzeit benötigen, und so weiter.
- **Vermeiden Sie Änderungen am DOM innerhalb Ihres Leerlaufrückrufs.** Wenn Ihr Rückruf ausgeführt wird, ist der aktuelle Frame bereits gezeichnet, und alle Layout-Updates und Berechnungen sind abgeschlossen. Wenn Sie Änderungen vornehmen, die das Layout beeinflussen, können Sie das Problem auslösen, dass der Browser anhalten und Neuberechnungen durchführen muss, die sonst unnötig wären. Wenn Ihr Rückruf das DOM ändern muss, sollte er {{domxref("Window.requestAnimationFrame()")}} verwenden, um dies zu planen.
- **Vermeiden Sie Aufgaben, deren Laufzeit nicht vorhersehbar ist.** Ihr Leerlaufrückruf sollte alles vermeiden, was eine unvorhersehbare Menge an Zeit beanspruchen könnte. Beispielsweise sollte alles, was das Layout beeinflussen könnte, vermieden werden. Sie sollten auch vermeiden, {{jsxref("Promise")}}s aufzulösen oder zurückzuweisen, da dies den Handler für die Auflösung oder Ablehnung dieses Versprechens sofort nach der Rückgabe Ihres Rückrufs aufrufen würde.
- **Verwenden Sie Zeitlimits nur bei Bedarf, aber dann auch nur, wenn Sie sie wirklich benötigen.** Die Verwendung von Zeitlimits kann sicherstellen, dass Ihr Code rechtzeitig ausgeführt wird, es kann Ihnen aber auch erlauben, Verzögerungen oder Hakeln von Animationen zu verursachen, indem Sie vorschreiben, dass der Browser Sie aufrufen muss, wenn nicht genügend Zeit übrig bleibt, um ohne Leistungseinbußen zu laufen.

## Schnittstellen

Die Hintergrundaufgaben-API fügt nur eine neue Schnittstelle hinzu:

- {{domxref("IdleDeadline")}}
  - : Ein Objekt dieses Typs wird dem Leerlaufrückruf übergeben, um eine Schätzung der erwarteten Dauer der Leerlaufperiode zu liefern sowie anzugeben, ob der Rückruf läuft, weil seine Zeitablaufperiode abgelaufen ist.

Die {{domxref("Window")}}-Schnittstelle wird durch diese API ebenfalls erweitert, um die neuen Methoden {{domxref("window.requestIdleCallback", "requestIdleCallback()")}} und {{domxref("window.cancelIdleCallback", "cancelIdleCallback()")}} anzubieten.

## Beispiel

In diesem Beispiel schauen wir uns an, wie Sie {{domxref("window.requestIdleCallback", "requestIdleCallback()")}} verwenden können, um rechenintensive, niedrig priorisierte Aufgaben in Zeiten laufen zu lassen, in denen der Browser ansonsten im Leerlauf wäre. Zusätzlich zeigt dieses Beispiel, wie man Updates des Dokumentinhalts mit {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}} plant.

Nachfolgend finden Sie nur den HTML- und JavaScript-Code für dieses Beispiel. Das CSS wird nicht angezeigt, da es nicht besonders wichtig ist, um diese Funktionalität zu verstehen.

### HTML

Um zu verstehen, was wir zu erreichen versuchen, werfen wir einen Blick auf das HTML. Dies erstellt ein Feld (`id="container"`), das zum Anzeigen des Fortschritts einer Operation verwendet wird (schließlich weiß man nie, wie lange das Dekodieren von "quantenfilamentaren Tachyonemissionen" dauern wird) sowie ein zweites Hauptfeld (`id="logBox"`), das zur Anzeige von Textausgaben verwendet wird.

```html
<p>
  Demonstration der kooperativen Planung von Hintergrundaufgaben mithilfe der
  <code>requestIdleCallback()</code>-Methode.
</p>

<div id="container">
  <div class="label">Decodieren von quantenfilamentaren Tachyonemissionen…</div>

  <progress id="progress" value="0"></progress>

  <button class="button" id="startButton">Start</button>

  <div class="label counter">
    Aufgabe <span id="currentTaskNumber">0</span> von
    <span id="totalTaskCount">0</span>
  </div>
</div>

<div id="logBox">
  <div class="logHeader">Log</div>
  <div id="log"></div>
</div>
```

Das Fortschrittsfeld verwendet ein {{HTMLElement("progress")}}-Element, um den Fortschritt anzuzeigen, zusammen mit einem Label mit Abschnitten, die geändert werden, um numerische Informationen zum Fortschritt darzustellen. Außerdem gibt es einen "Start"-Button (kreativ mit der ID "startButton" versehen), den der Benutzer verwendet, um die Datenverarbeitung zu starten.

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

Jetzt, da die Dokumentstruktur definiert ist, konstruieren Sie den JavaScript-Code, der die Arbeit ausführt. Ziel: Die Möglichkeit, Anfragen zur Funktionsaufruf in eine Warteschlange zu stellen, mit einem Leerlaufrückruf, der diese Funktionen immer dann ausführt, wenn das System lange genug im Leerlauf ist, um Fortschritte zu machen.

#### Variablendeklarationen

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

Diese Variablen werden verwendet, um die Liste der Aufgaben zu verwalten, die auf die Durchführung warten, sowie Statusinformationen über die Aufgabenwarteschlange und deren Ausführung:

- `taskList` ist ein {{jsxref("Array")}} aus Objekten, die jeweils eine auszuführende Aufgabe darstellen.
- `totalTaskCount` ist ein Zähler für die Anzahl der Aufgaben, die zur Warteschlange hinzugefügt wurden; er steigt nur an, niemals ab. Wir verwenden dies, um die Mathematik zur Darstellung des Fortschritts als Prozentsatz der zu erledigenden Gesamtarbeit zu erledigen.
- `currentTaskNumber` wird verwendet, um zu verfolgen, wie viele Aufgaben bisher abgearbeitet wurden.
- `taskHandle` ist eine Referenz zur Aufgabe, die gerade ausgeführt wird.

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

Als Nächstes haben wir Variablen, die auf die DOM-Elemente verweisen, mit denen wir interagieren müssen. Diese Elemente sind:

- `totalTaskCountElem` ist das {{HTMLElement("span")}}, das wir verwenden, um die Gesamtzahl der erstellten Aufgaben in die Statusanzeige im Fortschrittsfeld einzufügen.
- `currentTaskNumberElem` ist das Element, das die Anzahl der bisher verarbeiteten Aufgaben anzeigt.
- `progressBarElem` ist das {{HTMLElement("progress")}}-Element, das den Prozentsatz der bisher verarbeiteten Aufgaben anzeigt.
- `startButtonElem` ist der Start-Button.
- `logElem` ist das {{HTMLElement("div")}}, in das wir Protokollierungen einfügen.

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

Schließlich richten wir ein paar Variablen für andere Elemente ein:

- `logFragment` wird verwendet, um ein {{domxref("DocumentFragment")}} zu speichern, das von unseren Protokollierungsfunktionen generiert wird, um Inhalt zu erstellen, der in das Protokoll eingefügt werden soll, wenn der nächste Animationsframe gerendert wird.
- `statusRefreshScheduled` wird verwendet, um zu verfolgen, ob wir bereits ein Update der Statusanzeige für den bevorstehenden Frame geplant haben, sodass wir dies nur einmal pro Frame durchführen

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

Als Nächstes sehen wir uns an, wie wir die zu erledigenden Aufgaben verwalten. Wir werden dies tun, indem wir eine FIFO-Warteschlange von Aufgaben erstellen, die wir, sobald die Zeit es erlaubt, während der Leerlaufrückrufphase ausführen.

##### Aufgaben in die Warteschlange stellen

Zuerst brauchen wir eine Funktion, die Aufgaben für die zukünftige Ausführung in die Warteschlange stellt. Diese Funktion, `enqueueTask()`, sieht folgendermaßen aus:

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
- `taskData` ist ein Objekt, das dem Aufgaben-Handler als Eingabeparameter übergeben wird, um der Aufgabe die Verwendung von benutzerdefinierten Daten zu ermöglichen.

Um die Aufgabe in die Warteschlange zu stellen, [fügen wir ein Objekt in das `taskList`-Array ein](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push); das Objekt enthält die `taskHandler`- und `taskData`-Werte unter den Namen `handler` bzw. `data`, dann erhöhen wir `totalTaskCount`, das die Gesamtanzahl der jemals in die Warteschlange gestellten Aufgaben widerspiegelt (wir verringern ihn nicht, wenn Aufgaben aus der Warteschlange entfernt werden).

Als Nächstes überprüfen wir, ob wir bereits einen Leerlaufrückruf erstellt haben; wenn `taskHandle` gleich 0 ist, wissen wir, dass noch kein Leerlaufrückruf existiert, daher rufen wir {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}} auf, um einen zu erstellen. Er ist so konfiguriert, dass eine Funktion namens `runTaskQueue()` aufgerufen wird, die wir uns gleich ansehen werden, und mit einem `timeout` von 1 Sekunde, damit sie mindestens einmal pro Sekunde ausgeführt wird, selbst wenn keine tatsächliche Leerlaufzeit verfügbar ist.

##### Aufgaben ausführen

Unser Leerlaufrückruf-Handler, `runTaskQueue()`, wird aufgerufen, wenn der Browser feststellt, dass genügend Leerlaufzeit verfügbar ist, um uns Arbeit machen zu lassen, oder unser Zeitlimit von einer Sekunde abläuft. Die Aufgabe dieser Funktion besteht darin, unsere in die Warteschlange gestellten Aufgaben auszuführen.

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

Der Kern von `runTaskQueue()` ist eine Schleife, die solange läuft, wie noch Zeit übrig ist (bestimmt durch Überprüfung von {{domxref("IdleDeadline.timeRemaining", "deadline.timeRemaining")}}), um sicherzustellen, dass sie mehr als 0 beträgt oder das Timeout-Limit erreicht wurde ({{domxref("IdleDeadline.didTimeout", "deadline.didTimeout")}} ist wahr), und solange Aufgaben in der Aufgabenliste sind.

Für jede Aufgabe in der Warteschlange, die wir ausführen können, tun wir Folgendes:

1. Wir [entfernen das Aufgabenobjekt aus der Warteschlange](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).
2. Wir erhöhen `currentTaskNumber`, um zu verfolgen, wie viele Aufgaben wir ausgeführt haben.
3. Wir rufen den Handler der Aufgabe auf, `task.handler`, und übergeben ihm das Datenobjekt der Aufgabe (`task.data`).
4. Wir rufen eine Funktion `scheduleStatusRefresh()` auf, um ein Update der Anzeige zur Darstellung von Änderungen an unserem Fortschritt zu planen.

Wenn die Zeit abläuft und noch Aufgaben in der Liste vorhanden sind, rufen wir {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}} erneut auf, damit wir die Aufgaben beim nächsten Zeitraum, in dem Leerlaufzeit verfügbar ist, weiter verarbeiten können. Wenn die Warteschlange leer ist, setzen wir `taskHandle` auf 0, um anzuzeigen, dass wir keinen Rückruf geplant haben. Auf diese Weise wissen wir, dass wir das nächste Mal, wenn `enqueueTask()` aufgerufen wird, einen Rückruf anfordern müssen.

#### Aktualisieren der Statusanzeige

Eine Sache, die wir tun möchten, ist, unser Dokument mit Protokollausgaben und Fortschrittsinformationen zu aktualisieren. Sie können jedoch nicht sicher das DOM von einem Leerlaufrückruf aus ändern. Stattdessen verwenden wir {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}, um den Browser darum zu bitten, uns aufzurufen, wenn es sicher ist, die Anzeige zu aktualisieren.

##### Planung von Anzeigeaktualisierungen

DOM-Änderungen werden durch Aufruf der Funktion `scheduleStatusRefresh()` geplant.

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

Dies ist eine einfache Funktion. Sie überprüft, ob wir bereits eine Anzeigeaktualisierung geplant haben, indem sie den Wert von `statusRefreshScheduled` überprüft. Wenn es `false` ist, rufen wir {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} auf, um eine Aktualisierung zu planen, und geben die Funktion `updateDisplay()` an, die diese Aufgabe erledigen soll.

##### Aktualisieren der Anzeige

Die Funktion `updateDisplay()` ist verantwortlich für das Zeichnen der Inhalte des Fortschrittsfelds und des Protokolls. Sie wird vom Browser aufgerufen, wenn das DOM in einem sicheren Zustand ist, um Änderungen während des Prozesses der nächsten Frame-Renderung vorzunehmen.

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

Zuerst wird `scrolledToEnd` auf `true` gesetzt, wenn der Text im Protokoll bis zum Ende gescrollt ist; andernfalls wird er auf `false` gesetzt. Wir verwenden dies, um zu bestimmen, ob wir die Scroll-Position aktualisieren sollten, um sicherzustellen, dass das Protokoll am Ende bleibt, wenn wir mit dem Hinzufügen von Inhalt fertig sind.

Als Nächstes aktualisieren wir den Fortschritt und die Statusinformationen, wenn Aufgaben in die Warteschlange gestellt wurden.

1. Wenn der aktuelle Maximalwert der Fortschrittsanzeige sich von der aktuellen Gesamtzahl der in die Warteschlange gestellten Aufgaben (`totalTaskCount`) unterscheidet, aktualisieren wir den Inhalt der angezeigten Gesamtzahl der Aufgaben (`totalTaskCountElem`) und den Maximalwert der Fortschrittsanzeige, damit sie richtig skaliert.
2. Wir tun dasselbe mit der Anzahl der bisher verarbeiteten Aufgaben; wenn `progressBarElem.value` sich von dem derzeit verarbeiteten Aufgaben-Nr. (`currentTaskNumber`) unterscheidet, aktualisieren wir den angezeigten Wert der derzeit verarbeiteten Aufgabe und den aktuellen Wert der Fortschrittsanzeige.

Dann, wenn es Text gibt, der darauf wartet, in das Protokoll eingefügt zu werden (d. h., wenn `logFragment` nicht `null` ist), hängen wir ihn an das Log-Element mit {{domxref("Node.appendChild", "Element.appendChild()")}} an und setzen `logFragment` auf `null`, damit wir ihn nicht erneut hinzufügen.

Wenn das Protokoll am Ende gescrollt war, sorgen wir dafür, dass es weiterhin so bleibt. Dann setzen wir `statusRefreshScheduled` auf `false`, um anzuzeigen, dass wir die Aktualisierung durchgeführt haben und es sicher ist, eine neue anzufordern.

#### Hinzufügen von Text zum Protokoll

Die Funktion `log()` fügt den angegebenen Text dem Protokoll hinzu. Da wir nicht wissen, ob es sicher ist, das DOM direkt zu ändern, speichern wir den Protokolltext, bis es sicher ist, die Anzeige zu aktualisieren. Oben im Code von `updateDisplay()` können Sie den Code finden, der tatsächlich die protokollierten Texte in das Protokollelement einfügt, während der Animationsframe aktualisiert wird.

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

Zuerst erstellen wir ein {{domxref("DocumentFragment")}}-Objekt namens `logFragment`, wenn noch kein solches existiert. Dieses Element ist ein Pseudo-DOM, in den wir Elemente einfügen können, ohne das Haupt-DOM sofort zu ändern.

Wir erstellen dann ein neues {{HTMLElement("div")}}-Element und setzen dessen Inhalt so, dass er dem Eingabe-`text` entspricht. Dann fügen wir das neue Element an das Ende des Pseudo-DOMs in `logFragment` an. `logFragment` sammelt Log-Einträge, bis das nächste Mal `updateDisplay()` aufgerufen wird, weil das DOM auf diese Änderungen reagiert.

### Ausführung von Aufgaben

Jetzt, da wir das Aufgabenmanagement und die Aktualisierungslogik der Anzeige abgeschlossen haben, können wir Code einrichten, um Aufgaben auszuführen, die Arbeit erledigen.

#### Der Aufgaben-Handler

Die Funktion, die wir als Aufgaben-Handler verwenden werden – das heißt, die Funktion, die als Wert der `handler`-Eigenschaft des Aufgabenobjekts verwendet wird – ist `logTaskHandler()`. Es ist eine einfache Funktion, die für jede Aufgabe eine Reihe von Dingen in das Protokoll ausgibt. In Ihrer eigenen Anwendung würden Sie diesen Code durch die jeweilige Aufgabe ersetzen, die Sie während der Leerlaufzeit ausführen möchten. Denken Sie daran, dass alles, was das DOM ändern soll, durch {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} behandelt werden muss.

```js
function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### Das Hauptprogramm

Alles wird ausgelöst, wenn der Benutzer den Start-Button klickt, wodurch die Funktion `decodeTechnoStuff()` aufgerufen wird.

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

`decodeTechnoStuff()` beginnt mit dem Nullsetzen der Werte von `totalTaskCount` (der Anzahl der Aufgaben, die bisher in die Warteschlange eingefügt wurden) und `currentTaskNumber` (die aktuell bearbeitete Aufgabe) und ruft dann `updateDisplay()` auf, um die Anzeige auf den Zustand "nichts ist noch passiert" zurückzusetzen.

Dieses Beispiel erstellt eine zufällige Anzahl von Aufgaben (zwischen 100 und 200 davon). Dazu verwenden wir die [Funktion `getRandomIntInclusive()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive), die als Beispiel in der Dokumentation von {{jsxref("Math.random()")}} bereitgestellt wird, um die Anzahl der zu erstellenden Aufgaben zu erhalten.

Dann beginnen wir eine Schleife, um die tatsächlichen Aufgaben zu erstellen. Für jede Aufgabe erstellen wir ein Objekt `taskData`, das zwei Eigenschaften enthält:

- `count` ist die Anzahl der Zeichenfolgen, die aus der Aufgabe in das Protokoll ausgegeben werden sollen.
- `text` ist der Text, der so oft im Protokoll ausgegeben werden soll, wie es `count` angibt.

Jede Aufgabe wird dann durch Aufruf von `enqueueTask()` in die Warteschlange eingefügt, wobei `logTaskHandler()` als Handlerfunktion und das `taskData`-Objekt als Objekt angegeben werden, das in die Funktion übergeben werden soll, wenn sie aufgerufen wird.

### Ergebnis

Unten sehen Sie das tatsächliche funktionale Ergebnis des obigen Codes. Probieren Sie es aus, spielen Sie damit in den Entwicklertools Ihres Browsers und experimentieren Sie damit in Ihrem eigenen Code.

{{ EmbedLiveSample('Example', 600, 700) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
