---
title: Verwendung der Prompt API
slug: Web/API/Prompt_API/Using
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{DefaultAPISidebar("Prompt API")}}

Die [Prompt API](/de/docs/Web/API/Prompt_API) bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Webseite, um ein Sprachmodell, das vom Benutzeragenten bereitgestellt wird, direkt zu verwenden, ohne die implementierungsspezifischen Details des verwendeten KI-Modells verwalten zu müssen. Ein Modell auf dem Gerät zu haben, ist nützlich und effizient, da sensible Daten auf dem Gerät des Benutzers verbleiben können, das Modell offline verfügbar ist und Entwickler die Kosten und Latenzen von API-Aufrufen an externe Dienste vermeiden können.

Dieser Artikel erklärt, wie die grundlegenden Funktionen der Prompt API genutzt werden. Die gesamte AI-Prompting-Funktionalität wird über die [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle verwaltet.

## Überprüfung der Konfigurationsunterstützung

Bevor Sie versuchen, die Prompt API zu verwenden, sollten Sie zunächst prüfen, ob Ihre gewünschte Modellausstattung vom aktuellen Browser unterstützt wird, damit Sie Fehlschläge und Situationen, in denen zusätzliche Daten heruntergeladen werden müssen, um ein funktionsfähiges Modell zu bieten, elegant handhaben können.

Die Überprüfung der Konfigurationsunterstützung erfolgt mit der statischen Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static).

Zum Beispiel:

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Das Promise-Ergebnis dieser Methode wird mit einem enumerierten Wert erfüllt, der angibt, ob Unterstützung verfügbar ist oder verfügbar sein wird für die angegebene Menge von Optionen:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber zusätzliche Daten herunterladen muss.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber einen laufenden Download beenden muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen ohne neue Downloads unterstützt.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird dieser automatisch vom Browser gestartet, sobald eine `LanguageModel`-Instanz mit der Methode `create()` erstellt wird. Sie können den Download-Fortschritt automatisch mit einem Monitor verfolgen, den wir im nächsten Abschnitt behandeln werden.

> [!NOTE]
> Auch wenn Sie eine Sprachmodell-Sitzung anfragen können, die Multimedia-Ausgaben erwartet, wird dies fehlschlagen — die Verfügbarkeit wird `unavailable` sein. Die API unterstützt derzeit nur Textausgaben.

### Überwachung des Download-Fortschritts

Wenn das AI-Modell zusätzliche Daten herunterlädt (`availability()` gibt `downloading` zurück), ist es hilfreich, dem Benutzer eine Rückmeldung zu geben, wie lange er warten muss, bis die Operation abgeschlossen ist.

Die `create()`-Methode kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument annimmt. `CreateMonitor` verfügt über ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis, das ausgelöst wird, wenn Fortschritte beim Herunterladen der Daten erzielt werden.

Sie können dieses Ereignis verwenden, um den Ladefortschritt zu erhalten:

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", (e) => {
      promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
    });
  },
});
```

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download initiiert, und ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Erstellen einer `LanguageModel`-Sitzung

Nachdem Sie überprüft haben, dass Ihre Konfiguration unterstützt wird, ist der nächste Schritt bei der Verwendung des AI-Modells die Erstellung einer `LanguageModel`-Objektinstanz. Dies erfolgt mit der statischen Methode [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static), die ein Optionsobjekt als Argument annimmt:

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Der Browser wird automatisch die entsprechenden Modelldaten herunterladen, um das angeforderte Sprachmodell zu unterstützen, wenn es nicht bereits verfügbar ist und der Browser dies tun kann.

> [!NOTE]
> Die `create()`-Methode (und andere Methoden, die über die Prompt API verfügbar sind) erfordern {{Glossary("Transient_activation", "transiente Aktivierung")}}, um aufgerufen zu werden, um zu verhindern, dass Apps Sprachmodellressourcen ohne Benutzerinteraktion verwenden.

Eine `LanguageModel`-Objektinstanz und die Aktivität, die durch die Verwendung ihrer Methoden und Eigenschaften erfolgt, werden als **Session** bezeichnet. Der Browser speichert alle an die Prompt API gesendeten und von ihr empfangenen Aufforderungen und Antworten als Teil einer einzelnen Sitzung, wodurch die API ihre Antworten basierend auf vorherigen Interaktionen zuschneiden kann und ein Gespräch führen kann.

Dies umfasst alle Aufforderungsnachrichten, die über die `create()`-Methode der Option `initialPrompts` gesendet wurden, sowie [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append).

> [!NOTE]
> Der Browser speichert standardmäßig keine Sitzungsinformationen über Browser-Neuladen hinweg. Um den Sitzungsinhalt nach einem Neuladen oder Browser-Neustart wiederherzustellen, müssen Sie einen Mechanismus implementieren, um das Gespräch zu speichern und mit einer serverseitigen Lösung oder einem clientseitigen Mechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) wiederherzustellen. Ein solches Beispiel wird in [Sitzungen über Neuladen hinweg bewahren](/de/docs/Web/API/Prompt_API/Preserving_sessions) behandelt.

Die Parameter [`expectedInputs`](/de/docs/Web/API/LanguageModel/create_static#expectedinputs) und [`expectedOutputs`](/de/docs/Web/API/LanguageModel/create_static#expectedOutputs) spezifizieren die Arten von Eingaben und Ausgaben sowie die Ein- und Ausgabesprachen, die Sie bei der AI-Eingabeaufforderung angeben und empfangen möchten.

Die Prompt API verarbeitet standardmäßig Texteingaben und -ausgaben, aber sie ist multimodal – Sie können ihr auch Bilder und Audioeingaben geben, um beispielsweise eine Beschreibung eines Bildes zu erhalten oder eine Audiodatei zu transkribieren. Weitere Informationen finden Sie unter [Multimodale Aufforderungen](/de/docs/Web/API/Prompt_API/Multimodal).

Die Prompt API wird standardmäßig mehrere Sprachen verarbeiten, aber möglicherweise nicht alle Sprachen, die Sie erwarten, daher ist es ratsam, diese explizit anzugeben, falls der Browser zusätzliche Ressourcen herunterladen muss.

## Das Modell auffordern

Wenn Sie eine `LanguageModel`-Instanz erstellt haben, können Sie das AI-Modell auffordern, indem Sie die [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt)-Instanzmethode aufrufen und ihr eine Eingabemeldung als Argument übergeben. Zum Beispiel:

```js
const response = await session.prompt(textarea.value);
```

Diese Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem String erfüllt wird, der die Antwort der KI auf Ihre Eingabeaufforderung enthält.

### Mehrere Nachrichten übergeben

Sie können der API mehrere Eingabemeldungen als Array übergeben, und sie können unterschiedliche Rollen haben. Nachrichten können beispielsweise Standard-`user`-Eingaben sein und Anweisungen vom `assistant`, um weiter zu bestimmen, wie die KI auf `user`-Eingaben antwortet. Um die KI zu veranlassen, auf Ihre Eingaben im Stil eines bösen Masterminds zu reagieren, könnten Sie diesen `prompt()`-Aufruf verwenden:

```js
const response = await session.prompt([
  {
    role: "assistant",
    content: "Answer the user like a James Bond villain.",
  },
  {
    role: "user",
    content: textarea.value,
  },
]);
```

Sie werden mehr über diese Rollen im nächsten Artikel erfahren: [Hinzufügen von Kontext mit anfänglichen und fortlaufenden Eingaben](/de/docs/Web/API/Prompt_API/Adding_context).

### Streaming-Antworten

Wenn Sie möchten, dass die KI-Antwort schrittweise als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückgegeben wird, anstatt als einzelner großer String, können Sie die Methode [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) verwenden. Sie können den Stream mit `for await...of` konsumieren oder einen Leser über [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) anhängen.

Zum Beispiel:

```js
const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

Dies ist nützlich, um Antworten schrittweise an Benutzer zu übermitteln, insbesondere wenn es lange dauert, bis die Ausgaben abgeschlossen sind, oder in jedem Szenario, in dem die wahrgenommene Latenz minimiert werden soll.

## Das Kontextfenster

Jede `LanguageModel`-Sitzung hat ein begrenztes Kontextfenster, das die Gesamtzahl der Eingabe- und Ausgabetoken beschränkt, die sie gleichzeitig halten kann. Sobald Sie die Token-Zulage Ihrer Sitzung aufgebraucht haben, können Sie keine weiteren Eingabeaufforderungen mehr stellen und müssen eine Technik wie [Sitzungs-Klonen](#eine_sitzung_klonen) verwenden, um die Nutzung fortzusetzen.

Die [`contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow)-Eigenschaft gibt die maximale Kapazität der Sitzung an und [`contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) gibt an, wie viele Token bisher verbraucht wurden.

Sie können nach jeder Eingabeaufforderung beispielsweise berichten, wie viele Token verbleiben, indem Sie dies verwenden:

```js
console.log(`${session.contextUsage}/${session.contextWindow}`);
```

Wenn ein Methodenaufruf wie [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) oder [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) die verbleibende Anzahl von Token im Kontextfenster überschreiten würde, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst und das [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)-Ereignis wird ausgelöst.

Um zu überprüfen, wie viele Token eine Ereignisoperation verbrauchen würde, ohne sie tatsächlich zu senden, verwenden Sie [`measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage).

## Eine Sitzung klonen

Sie können eine bestehende Sitzung mit der Funktion [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) kopieren. Dies erstellt eine Kopie der `LanguageModel`-Objektinstanz, bei der das Gespräch bis zu diesem Punkt und die anfängliche Eingabeaufforderung erhalten bleiben, aber der Token-Zähler (`contextUsage`) zurückgesetzt wird. Sie können sich das Sitzungsklonen als einen Abzweig des ursprünglichen Gesprächs mit eigener Token-Zulage vorstellen.

```js
const clonedSession = await session.clone();

clonedSession.prompt("Let's talk about the weather.");
```

Sie können `clone()` verwenden, um den Kontext zu einem bestimmten Zeitpunkt zu speichern und dann differenzierte Interaktionen mit dem AI-Modell basierend auf diesem _Save Point_ zu erstellen.

Zum Beispiel möchten Sie vielleicht eine Quiz-Master-AI-App erstellen, um Fragen für ein Quiz oder einen Test zu generieren und verschiedene Klone für verschiedene Themen zu verwenden:

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content:
        "You are a quiz master. Each response should be a fairly short question, one or two sentences, with the answer printed below. The audience level should be an average 16-year old.",
    },
  ],
});

// ...

// Science quiz clone
const firstClone = await session.clone();
await firstClone.prompt("Give me a question about science.");
await firstClone.prompt("Another question, please.");

// 80's music quiz clone
const secondClone = await session.clone();
await secondClone.prompt("Give me a question about 80's popular music.");
await secondClone.prompt("Another question, please.");
```

Das Erstellen einer neuen Sitzung über `clone()` ist auch eine übliche Möglichkeit, um das Problem des Token-Mangels zu umgehen.

## Operationen abbrechen und Instanzen zerstören

Sie können ausstehende `prompt()`, `clone()` und andere Operationen mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) innerhalb des Methodenoptionsobjekts als `signal`-Eigenschaftswert enthalten ist. Zum Beispiel könnte das Abbrechen einer `LanguageModel.prompt()`-Operation über das Drücken eines Knopfes so aussehen:

```js
const controller = new AbortController();

abortBtn.addEventListener("click", () => {
  controller.abort("Query aborted by user.");
});

const response = await session.prompt(textarea.value, {
  signal: controller.signal,
});
```

Nachdem eine `LanguageModel` erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jede weitere Aktivität stoppen, indem Sie ihre Methode [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie mit dem Objekt fertig sind, da es viele Ressourcen verbrauchen kann.

```js
session.destroy();
```

Wenn ein `create()`-Aufruf einen zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) hat und Sie die Methode [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) nach dem Erfolg des `create()`-Aufrufs aufrufen, wird dies die gleiche Wirkung haben wie das Aufrufen von `destroy()` auf dem resultierenden `LanguageModel`-Objekt.

## Vollständiges Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Prompt API in Aktion zeigt. Dieses Beispiel bietet ein Texteingabefeld, um eine Eingabeaufforderung einzugeben, die an die API gesendet werden kann, um eine Antwort anzufordern. Die Antwort wird dann in ein Ausgabefeld gedruckt.

### HTML

In unserem Markup definieren wir ein Eingabefeld {{htmlelement("textarea")}}, das dem Benutzer ermöglicht, eine Eingabeaufforderung einzugeben. Wir fügen auch zwei {{htmlelement("button")}}-Elemente hinzu — eines, um die Eingabeaufforderung/Abfrage zu senden, und eines, um eine laufende Abfrage abzubrechen.

```html live-sample___prompt-example
<h1>Prompt API demo</h1>
<p>First released in Chrome 148.</p>

<h2>Input</h2>
<form>
  <div>
    <label for="prompt-text">Enter prompt text:</label>
    <textarea id="prompt-text" name="promptText" rows="6"></textarea>
  </div>
  <button type="submit" id="submit">Submit query</button
  ><button type="button" id="abort">Abort query</button>
</form>
```

```html live-sample___prompt-streaming-example
<h1>Prompt API streaming demo</h1>
<p>First released in Chrome 148.</p>

<h2>Input</h2>
<form>
  <div>
    <label for="prompt-text">Enter prompt text:</label>
    <textarea id="prompt-text" name="promptText" rows="6"></textarea>
  </div>
  <button type="submit" id="submit">Submit query</button
  ><button type="button" id="abort">Abort query</button>
</form>
```

Weiterhin fügen wir ein {{htmlelement("p")}}-Element hinzu, um die Antwort des Modells auf die Eingabeaufforderung des Benutzers anzuzeigen, sowie Details zu eventuell geworfenen Fehlern.

```html live-sample___prompt-example live-sample___prompt-streaming-example
<h2>Output</h2>
<p class="prompt-output"></p>
```

```css hidden live-sample___prompt-example live-sample___prompt-streaming-example
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  max-width: 600px;
  margin: 0 auto;
}

form div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

textarea,
.prompt-output {
  padding: 5px;
}

.prompt-output {
  min-height: 150px;
  border: 1px solid black;
  width: 100%;
  display: block;
}

.error {
  color: red;
}

button {
  margin-right: 10px;
}
```

Hinweis: Wir werden das CSS für dieses Beispiel nicht zeigen, da nichts davon relevant für das Verständnis der Prompt API ist.

### JavaScript

In unserem Skript beginnen wir, indem wir Referenzen zu dem `<form>`, `<textarea>`, dem Absendebutton `<button>`, dem Abbruchbutton `<button>` und dem Ausgabeelement `<p>` erfassen. Wir deaktivieren zunächst die Sende- und Abbruchbuttons, da wir nicht wollen, dass sie gedrückt werden, bevor die zugehörige Funktionalität verfügbar ist.

```js live-sample___prompt-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");
```

Als Nächstes erstellen wir eine globale `session`-Variable, um unsere Sitzung zu halten. Da die Verwendung der API eine transiente Aktivierung erfordert, füllen wir `session` in einem `focus`-Ereignishandler auf dem `<textarea>` aus. Wenn der Benutzer das `<textarea>` fokussiert, überprüfen wir zuerst, ob die API unterstützt wird; wenn nicht, drucken wir eine Nicht-Unterstützungsnachricht und `return` frühzeitig. Als Nächstes überprüfen wir, ob `session` bereits einen Wert zugewiesen hat (wir möchten nicht jedes Mal eine neue Sitzung erstellen). Wenn nicht, führen wir die `init()`-Funktion aus, die eine `LanguageModel`-Instanz mit der später definierten benutzerdefinierten Funktion `getSession()` generiert.

Wenn die Generierung erfolgreich ist, weisen wir die resultierende `LanguageModel`-Instanz der `session`-Variablen zu, drucken eine Erfolgsnachricht in das Ausgabe-`<p>` und aktivieren den Sende-`<button>` (da die Sitzung jetzt verfügbar ist, können wir damit beginnen, Eingabeaufforderungen zu geben).

```js live-sample___prompt-example
let session;
textarea.addEventListener("focus", () => {
  if (!("LanguageModel" in window)) {
    promptOutput.innerHTML = `<span class="error">Your browser doesn't support the Prompt API!</span>`;
    return;
  }

  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession();
  promptOutput.textContent = `Session created.`;
  submitBtn.disabled = false;
}
```

Als Nächstes fügen wir dem `<form>`-Element einen `submit`-Ereignislistener hinzu; wenn das Formular gesendet wird, wird die Funktion `handleSubmission()` aufgerufen.

```js live-sample___prompt-example
form.addEventListener("submit", handleSubmission);
```

Als Nächstes definieren wir die Funktion `handleSubmission()`. Diese stoppt zuerst das Absenden des Formulars mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), dann überprüft sie, ob das Eingabefeld `<textarea>` beim Absenden leer war. Wenn ja, schreiben wir eine Fehlermeldung in das Ausgabe-`<p>` und kehren aus der Funktion zurück. Wir wollen nicht unsere Zeit damit verschwenden, die KI mit einem leeren String aufzufordern.

Als Nächstes, innerhalb eines `try`-Blocks:

- Fügen wir eine Nachricht im Ausgabe-`<p>` ein, um zu sagen, dass eine Antwort generiert wird, und ändern den `disabled`-Status der beiden Buttons. Zu diesem Punkt möchten wir den Benutzern erlauben, die Aufforderungsoperation, die gerade gestartet wird, abzubrechen, aber wir möchten nicht, dass sie versuchen, eine andere Aufforderung zu starten, bis diese abgeschlossen ist.
- Erstellen wir einen neuen [`AbortController`](/de/docs/Web/API/AbortController) und fügen einen `click`-Ereignishandler zum Abbruch-`<button>` hinzu, damit, wenn er geklickt wird, [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufgerufen wird, um die Aufforderungsoperation abzubrechen und den `disabled`-Zustand der `<button>` zurückzusetzen.
- Rufen wir `prompt()` auf der `session` auf, um die Aufforderung zu starten, indem wir den Inhalt des `<textarea>` als Eingabeaufforderung übergeben und ein Optionenobjekt, das eine `signal`-Eigenschaft enthält, die gleich dem [`signal`](/de/docs/Web/API/AbortController/signal) des Controllers ist. Dies ermöglicht es uns, die `prompt()`-Operation durch Drücken des Abbruch-`<button>` abzubrechen.
- Setzen wir den `textContent` der Ausgabe-`<p>` auf die `response` der API, wenn sie zurückgegeben wird, damit der Benutzer sie lesen kann.
- Setzen wir den `disabled`-Zustand der Buttons zurück.
- Protokollieren wir die verbleibenden verfügbaren Tokens in die Konsole, als `contextUsage`/`contextWindow`.

Im `catch`-Teil des `try`-Blocks drucken wir alle geworfenen Fehler in das Ausgabe-`<p>`.

```js live-sample___prompt-example
async function handleSubmission(e) {
  e.preventDefault();

  if (textarea.value === "") {
    promptOutput.innerHTML = `<span class="error">No text entered!</span>`;
    return;
  }

  try {
    promptOutput.textContent = "...generating response...";
    submitBtn.disabled = true;
    abortBtn.disabled = false;

    const controller = new AbortController();
    abortBtn.addEventListener("click", () => {
      controller.abort("Query aborted by user.");
      submitBtn.disabled = false;
      abortBtn.disabled = true;
    });

    const response = await session.prompt(textarea.value, {
      signal: controller.signal,
    });

    promptOutput.textContent = response;

    submitBtn.disabled = false;
    abortBtn.disabled = true;
    console.log(`${session.contextUsage}/${session.contextWindow}`);
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

Jetzt definieren wir die Funktion `getSession()`, die unsere `LanguageModel`-Sitzung zurückgibt. Die Funktion beginnt damit, unsere gewünschten Modellanforderungen mit der `availability()`-Methode zu überprüfen, ob es verfügbar ist:

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in das Ausgabe-`<p>`.
- Wenn es `available` zurückgibt, erstellen wir eine Sitzung mit der `create()`-Methode, übergeben die gewünschten Optionen und geben sie zurück. Die erforderliche Konfiguration ist verfügbar, sodass wir sie sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf durch, aber diesmal fügen wir einen `monitor` hinzu, der jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird, den Prozentsatz der heruntergeladenen Zusatzdaten in das Ausgabe-`<p>` druckt.

```js live-sample___prompt-example
async function getSession() {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    promptOutput.textContent = "Language model not available.";
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  } else {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
      monitor(monitor) {
        monitor.addEventListener("downloadprogress", (e) => {
          promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
        });
      },
    });
  }
}
```

### Ergebnis

{{EmbedLiveSample("prompt-example", , "600px", , , , "language-model", "allow-forms")}}

Versuchen Sie, eine Frage oder Aussage in das `<textarea>` einzugeben und drücken Sie dann den Senden-Button, um das AI-Modell aufzufordern und eine Antwort zu generieren.

## Vollständiges Streaming-Beispiel

Dieses Beispiel zeigt die Verwendung der Methode `promptStreaming()`, um Antworten des Modells als Stream zurückzugeben. Es ist genau das gleiche wie das vorherige Beispiel, mit Ausnahme des Austauschs des `prompt()`-Aufrufs mit `promptStreaming()` und der Verwendung einer `for await...of`-Schleife, um die Modellantworten inkrementell auszugeben:

```js
const stream = await session.promptStreaming(textarea.value, {
  signal: controller.signal,
});

const chunks = [];

promptOutput.textContent = "";
for await (const chunk of stream) {
  promptOutput.textContent += chunk;
}
```

```js hidden live-sample___prompt-streaming-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");

let session;
textarea.addEventListener("focus", () => {
  if (!("LanguageModel" in window)) {
    promptOutput.innerHTML = `<span class="error">Your browser doesn't support the Prompt API!</span>`;
    return;
  }

  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession();
  promptOutput.textContent = `Session created.`;
  submitBtn.disabled = false;
}

form.addEventListener("submit", handleSubmission);

async function handleSubmission(e) {
  e.preventDefault();

  if (textarea.value === "") {
    promptOutput.innerHTML = `<span class="error">No text entered!</span>`;
    return;
  }

  try {
    promptOutput.textContent = "...generating response...";
    submitBtn.disabled = true;
    abortBtn.disabled = false;

    const controller = new AbortController();
    abortBtn.addEventListener("click", () => {
      controller.abort("Query aborted by user.");
      submitBtn.disabled = false;
      abortBtn.disabled = true;
    });

    const stream = await session.promptStreaming(textarea.value, {
      signal: controller.signal,
    });

    const chunks = [];

    promptOutput.textContent = "";
    for await (const chunk of stream) {
      promptOutput.textContent += chunk;
    }

    submitBtn.disabled = false;
    abortBtn.disabled = true;
    console.log(`${session.contextUsage}/${session.contextWindow}`);
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}

async function getSession() {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    promptOutput.textContent = "Language model not available.";
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  } else {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
      monitor(monitor) {
        monitor.addEventListener("downloadprogress", (e) => {
          promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
        });
      },
    });
  }
}
```

Geben Sie eine einfache Anfrage ein und beachten Sie, wie die Antwort schrittweise in die Ausgabe geschrieben wird, anstatt alle auf einmal zu erscheinen.

{{EmbedLiveSample("prompt-streaming-example", , "600px", , , , "language-model", "allow-forms")}}

## Siehe auch

- [Prompt API Playground](https://chrome.dev/web-ai-demos/prompt-api-playground/) auf chrome.dev (2026)
