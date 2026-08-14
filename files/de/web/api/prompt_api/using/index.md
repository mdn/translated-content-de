---
title: Verwendung der Prompt-API
slug: Web/API/Prompt_API/Using
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{DefaultAPISidebar("Prompt API")}}

Die [Prompt-API](/de/docs/Web/API/Prompt_API) bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Website, um ein Sprachmodell, das vom Nutzeragenten bereitgestellt wird, direkt abzufragen, ohne dass die implementationsspezifischen Details des verwendeten KI-Modells verwaltet werden müssen. Ein Modell auf dem Gerät ist nützlich und effizient, da sensible Daten auf dem Gerät des Nutzers bleiben können, das Modell offline verfügbar ist und Entwickler die Kosten und Latenzen von API-Aufrufen zu externen Diensten vermeiden können.

Dieser Artikel erklärt, wie Sie die grundlegenden Funktionen der Prompt-API nutzen. Alle Funktionen zur KI-Abfrage werden über das [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Interface verwaltet.

## Überprüfung der Konfigurationsunterstützung

Bevor Sie versuchen, die Prompt-API zu verwenden, sollten Sie überprüfen, ob Ihre gewünschte Modellkonfiguration vom aktuellen Browser unterstützt wird, damit Sie mit vollständigen Ausfällen und Situationen, in denen zusätzliche Daten heruntergeladen werden müssen, um ein funktionierendes Modell bereitzustellen, elegant umgehen können.

Die Überprüfung der Konfigurationsunterstützung erfolgt mithilfe der statischen Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static).

Zum Beispiel:

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Das Promise, das von dieser Methode zurückgegeben wird, erfüllt sich mit einem enumerierten Wert, der angibt, ob die Unterstützung für die angegebenen Optionen verfügbar ist, oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber zusätzliche Daten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber einen laufenden Download abschließen muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `LanguageModel`-Instanz mit der `create()`-Methode erstellt wird. Sie können den Fortschritt dieses Downloads automatisch mit einem Monitor verfolgen, den wir im nächsten Abschnitt besprechen werden.

> [!NOTE]
> Auch wenn Sie eine Sprachmodell-Session anfordern können, die Multimedia-Ausgaben erwartet, schlägt dies fehl – die Verfügbarkeit wird `unavailable` sein. Die API unterstützt derzeit nur Textausgaben.

### Überwachung des Download-Fortschritts

Wenn das KI-Modell zusätzliche Daten herunterlädt (`availability()` gibt `downloading` zurück), ist es hilfreich, dem Nutzer eine Rückmeldung zu geben, um ihm mitzuteilen, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die `create()`-Methode kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument nimmt. `CreateMonitor` verfügt über ein verfügbares [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis, das ausgelöst wird, wenn Fortschritte beim Herunterladen der Daten gemacht werden.

Sie können dieses Ereignis verwenden, um den Ladefortschritt zu ermitteln:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download initiiert und ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Erstellen einer `LanguageModel`-Session

Nachdem Sie überprüft haben, dass Ihre Konfiguration unterstützt wird, besteht der nächste Schritt zur Abfrage des KI-Modells darin, ein `LanguageModel`-Objekt zu erstellen. Dies geschieht mit der statischen Methode [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static), die ein Optionsobjekt als Argument nimmt:

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Der Browser lädt automatisch die entsprechenden Modelldaten herunter, um das angeforderte Sprachmodell zu verarbeiten, falls es noch nicht verfügbar ist und wenn der Browser dazu in der Lage ist.

> [!NOTE]
> Die Methode `create()` (und andere Methoden der Prompt-API) erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}, um aufgerufen zu werden, als Vorsichtsmaßnahme, um zu verhindern, dass Apps Modellressourcen ohne Benutzerinteraktion nutzen.

Eine `LanguageModel`-Objektinstanz und die Aktivität, die durch die Verwendung ihrer Methoden und Eigenschaften entsteht, wird als **Sitzung** bezeichnet. Der Browser speichert alle an die Prompt-API gesendeten und von ihr empfangenen Aufforderungen und Antworten als Teil einer einzigen Sitzung, was der API ermöglicht, ihre Antworten basierend auf früheren Interaktionen zu individualisieren und ein Gespräch zu führen.

Dies umfasst alle Aufforderungsnachrichten, die über die `create()`-Methode (`initialPrompts`-Option), [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append) an sie gesendet werden.

> [!NOTE]
> Der Browser speichert standardmäßig keine Sitzungsinformationen über Browser-Neustarts hinweg. Um die Sitzungsinformationen nach einem Neustart oder einem Browserschließen wiederherzustellen, müssen Sie einen Mechanismus implementieren, um das Gespräch zu speichern und wiederherzustellen, entweder serverseitig oder clientseitig mit einem Mechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API). Ein solches Beispiel wird in [Sitzungen über Neustarts hinweg bewahren](/de/docs/Web/API/Prompt_API/Preserving_sessions) behandelt.

Die Parameter [`expectedInputs`](/de/docs/Web/API/LanguageModel/create_static#expectedinputs) und [`expectedOutputs`](/de/docs/Web/API/LanguageModel/create_static#expectedoutputs) geben die Arten von Eingaben und Ausgaben sowie die Eingabe-/Ausgabesprachen an, die Sie an die KI-Abfrage übergeben und von ihr empfangen möchten.

Die Prompt-API verarbeitet standardmäßig Texteingaben und -ausgaben, ist jedoch multimodal - Sie können ihr auch Bilder und Audiodatenüberlieferungen geben, zum Beispiel um sie zu bitten, ein Bild zu beschreiben oder eine Audiodatei zu transkribieren. Weitere Details finden Sie unter [Multimodale Eingaben](/de/docs/Web/API/Prompt_API/Multimodal).

Die Prompt-API unterstützt standardmäßig mehrere Sprachen, es ist jedoch möglich, dass sie nicht alle von Ihnen erwarteten Sprachen unterstützt, daher ist es ratsam, diese explizit anzugeben, falls der Browser zusätzliche Ressourcen herunterladen muss.

## Modellabfrage

Nachdem Sie eine `LanguageModel`-Instanz erstellt haben, können Sie die KI-Modelle abfragen, indem Sie die Instanzmethode [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufrufen und ihr eine Eingabemeldung als Argument übergeben. Zum Beispiel:

```js
const response = await session.prompt(textarea.value);
```

Diese Methode gibt ein {{jsxref("Promise")}} zurück, das sich mit einem String erfüllt, der die Antwort der KI auf Ihre Abfrage enthält.

### Übermittlung mehrerer Nachrichten

Sie können der API mehrere Eingabemeldungen als Array übergeben, und sie können unterschiedliche Rollen haben. Zum Beispiel können Nachrichten Standardbenutzeranfragen beinhalten, sowie Anweisungen von einem `assistant`, um weiter zu beeinflussen, wie die `user`-Anfragen beantwortet werden. Um die KI zu veranlassen, auf Ihre Eingabe im Stil eines schurkischen Masterminds zu antworten, könnten Sie diesen `prompt()`-Aufruf verwenden:

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

Weitere Informationen zu diesen Rollen finden Sie im nächsten Artikel, [Hinzufügen von Kontext mit ersten und fortlaufenden Abfrageeingaben](/de/docs/Web/API/Prompt_API/Adding_context).

### Streamende Antworten

Wenn Sie möchten, dass die KI-Antwort allmählich als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückgegeben wird, anstatt als einzelner großer String, können Sie die Methode [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) verwenden. Sie können den Stream mithilfe von `for await...of` konsumieren oder indem Sie einen Leser über [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) anhängen.

Zum Beispiel:

```js
const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

Dies ist nützlich, um Nutzern inkrementell Antworten anzuzeigen, für Ausgaben, die lange dauern, oder in jedem Szenario, in dem die wahrgenommene Latenz minimiert werden sollte.

## Das Kontextfenster

Jede `LanguageModel`-Sitzung hat ein endliches Kontextfenster, das die Gesamtzahl der Eingabe- und Ausgabetokens beschränkt, die es gleichzeitig halten kann. Sobald Sie die Token-Zulage Ihrer Sitzung aufgebraucht haben, können Sie keine weiteren Aufforderungen mehr stellen und müssen eine Technik wie [Sitzungsklonen](#klonen_einer_sitzung) verwenden, um die Nutzung fortzusetzen.

Die Eigenschaft [`contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) gibt die maximale Kapazität der Sitzung an, und [`contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) zeigt an, wie viele Tokens bisher verbraucht wurden.

Zum Beispiel können Sie nach jeder Aufforderung berichten, wie viele Tokens noch übrig sind, indem Sie so etwas wie das folgende verwenden:

```js
console.log(`${session.contextUsage}/${session.contextWindow}`);
```

Wenn ein Methodenaufruf wie [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) oder [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) die verbleibende Anzahl von Tokens im Kontextfenster überschreiten würde, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst und das [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)-Ereignis wird ausgelöst.

Um zu überprüfen, wie viele Tokens eine Abfrageoperation verbrauchen würde, ohne sie tatsächlich zu senden, verwenden Sie [`measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage).

## Klonen einer Sitzung

Sie können eine vorhandene Sitzung mithilfe der Funktion [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) kopieren. Dies erstellt eine Kopie der `LanguageModel`-Objektinstanz, bei der das Gespräch bis zu diesem Punkt und die anfängliche Aufforderung beibehalten werden, aber die Token-Zählung (`contextUsage`) zurückgesetzt wird. Sie können sich die Sitzungskopie als Abzweigung des ursprünglichen Gesprächs vorstellen, mit eigener Token-Zulage.

```js
const clonedSession = await session.clone();

clonedSession.prompt("Let's talk about the weather.");
```

Sie können `clone()` verwenden, um den Kontext zu einem bestimmten Zeitpunkt zu speichern und dann abweichende Interaktionen mit dem KI-Modell basierend auf diesem _Speicherpunkt_ zu schaffen.

Zum Beispiel könnten Sie eine Quizmaster-KI-App erstellen, um Fragen für ein Quiz oder einen Test zu generieren, und für verschiedene Themen unterschiedliche Kopien verwenden:

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

Das Erstellen einer neuen Sitzung über `clone()` ist auch eine gängige Methode, um das Problem des Aufbrauchens von Tokens zu umgehen.

## Abbrechen von Vorgängen und Zerstörung von Instanzen

Sie können ausstehende `prompt()`, `clone()` und andere Vorgänge mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, indem das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) als `signal`-Eigenschaftswert im Methodenoptionsobjekt enthalten ist. Zum Beispiel könnte das Abbrechen einer `LanguageModel.prompt()`-Operation durch Drücken eines Buttons folgendermaßen aussehen:

```js
const controller = new AbortController();

abortBtn.addEventListener("click", () => {
  controller.abort("Query aborted by user.");
});

const response = await session.prompt(textarea.value, {
  signal: controller.signal,
});
```

Nachdem ein `LanguageModel` erstellt wurde, können Sie seine zugewiesenen Ressourcen freigeben und weitere Aktivitäten stoppen, indem Sie seine [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy)-Methode aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie mit dem Objekt fertig sind, da es viele Ressourcen verbrauchen kann.

```js
session.destroy();
```

Wenn ein `create()`-Aufruf einen zugeordneten [`AbortController`](/de/docs/Web/API/AbortController) hat und Sie dessen [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort)-Methode nach dem erfolgreichen `create()`-Aufruf aufrufen, hat dies den gleichen Effekt, als würde `destroy()` auf dem resultierenden `LanguageModel`-Objekt aufgerufen werden.

## Komplettes Beispiel

Betrachten wir ein vollständiges Beispiel, das die Prompt-API in Aktion demonstriert. Dieses Beispiel bietet ein Texteingabefeld, um eine Eingabeaufforderung einzugeben, die an die API gesendet werden kann, um eine Antwort zu erhalten. Die Antwort wird dann in einem Ausgabefeld ausgedruckt.

### HTML

In unserem Markup definieren wir ein Eingabe-{{htmlelement("textarea")}}, das es dem Nutzer ermöglicht, eine Eingabeaufforderung einzugeben. Wir enthalten auch zwei {{htmlelement("button")}}-Elemente — eines, um die Eingabeaufforderung/die Anfrage zu übermitteln, und ein weiteres, um eine laufende Anfrage abzubrechen.

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

Als Nächstes fügen wir ein {{htmlelement("p")}}-Element hinzu, um die Antwort des Modells auf die Eingabeaufforderung des Benutzers anzuzeigen, sowie Details zu allen Fehlern, die aufgetreten sind.

```html live-sample___prompt-example live-sample___prompt-streaming-example
<h2>Output</h2>
<p class="prompt-output"></p>
```

```css hidden live-sample___prompt-example live-sample___prompt-streaming-example
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial";
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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht anzeigen werden, da keines davon relevant ist, um die Prompt-API zu verstehen.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen auf das `<form>`, `<textarea>`, das Senden-`<button>`, das Abbrechen-`<button>` und das Ausgabefeld `<p>` zu erhalten. Wir deaktivieren die Sende- und Abbrechen-Buttons zunächst, da wir nicht möchten, dass sie gedrückt werden, bevor die zugehörigen Funktionen verfügbar sind.

```js live-sample___prompt-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");
```

Als Nächstes erstellen wir eine globale `session`-Variable, um unsere Sitzung zu halten. Da die Nutzung der API eine transiente Aktivierung erfordert, füllen wir `session` innerhalb eines `focus`-Ereignishandlers auf dem `<textarea>`. Wenn der Benutzer das `<textarea>` fokussiert, überprüfen wir zuerst, ob die API unterstützt wird; wenn nicht, drucken wir eine Meldung über die Nichterfüllung und kehren frühzeitig zurück. Als Nächstes überprüfen wir, ob `session` bereits einen zugewiesenen Wert hat (wir möchten nicht jedes Mal eine neue Sitzung erstellen). Wenn nicht, führen wir die Funktion `init()` aus, die eine `LanguageModel`-Instanz mit der später definierten benutzerdefinierten `getSession()`-Funktion generiert.

Wenn die Generierung erfolgreich ist, weisen wir die resultierende `LanguageModel`-Instanz der `session`-Variable zu, drucken eine Erfolgsmeldung in das `<p>`-Ausgabefeld und aktivieren das Sende-`<button>` (jetzt, da die Sitzung verfügbar ist, können wir anfangen, sie abzufragen).

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

Als Nächstes fügen wir einen `submit`-Ereignis-Listener zu dem `<form>`-Element hinzu; wenn das Formular gesendet wird, wird die Funktion `handleSubmission()` aufgerufen.

```js live-sample___prompt-example
form.addEventListener("submit", handleSubmission);
```

Als Nächstes definieren wir die Funktion `handleSubmission()`. Diese verhindert zunächst das Absenden des Formulars durch Verwendung von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), und überprüft dann, ob das Eingabe-`<textarea>` beim Senden leer war. Wenn dies der Fall war, schreiben wir eine Fehlermeldung in das `<p>`-Ausgabefeld und kehren aus der Funktion zurück. Wir möchten keine Zeit damit verschwenden, zu versuchen, die KI mit einem leeren String zu befragen.

Als Nächstes, innerhalb eines `try`-Blocks, führen wir Folgendes aus:

- Wir fügen eine Nachricht in das `<p>`-Ausgabefeld ein, um zu sagen, dass eine Antwort generiert wird, und flippen den `disabled`-Status der beiden Buttons. Zu diesem Zeitpunkt möchten wir den Nutzern ermöglichen, die bevorstehende Abfrageoperation abzubrechen, aber wir möchten nicht, dass sie versuchen, eine weitere Abfrage zu starten, bevor diese abgeschlossen ist.
- Erstellen eines neuen [`AbortController`](/de/docs/Web/API/AbortController) und Hinzufügen eines `click`-Ereignis-Listeners zu dem Abbrechen-`<button>`, sodass wenn er geklickt wird, [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller ausgelöst wird, um die Abfrageoperation abzubrechen und die `<button>`-Deaktivierungszustände zurückgesetzt werden.
- Aufrufen von `prompt()` auf der `session`, um die Eingabeforderung zu starten, indem der Inhalt des `<textarea>` als Abfrage an die Funktion übergeben wird, und ein Optionsobjekt, das eine `signal`-Eigenschaft enthält, die dem [`signal`](/de/docs/Web/API/AbortController/signal) des Controllers entspricht. Dies ermöglicht uns, die `prompt()`-Operation durch Drücken des Abbruch-`<button>` abzubrechen.
- Setzen des `textContent` des `<p>`-Ausgabefeldes auf die `response` der API, wenn sie zurückgegeben wird, sodass der Benutzer sie lesen kann.
- Zurücksetzen des `disabled`-Zustands der Buttons.
- Protokollieren der verbleibenden Tokens zur Konsole, als `contextUsage`/`contextWindow`.

Im `catch`-Gegenstück des `try`-Blocks drucken wir alle aufgetretenen Fehler in das `<p>`-Ausgabefeld.

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

Nun definieren wir die Funktion `getSession()`, die verwendet wird, um unsere `LanguageModel`-Sitzung zurückzugeben. Die Funktion beginnt damit, unsere gewünschten Modellanforderungen durch die `availability()`-Methode laufen zu lassen, um zu sehen, ob sie verfügbar sind:

- Wenn sie `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in das `<p>`-Ausgabefeld.
- Wenn sie `available` zurückgibt, erstellen wir eine Sitzung mit der `create()`-Methode, übergeben ihr die gewünschten Optionen und geben sie zurück. Die erforderliche Konfiguration ist verfügbar, sodass wir sie sofort verwenden können.
- Wenn sie einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, fügen aber diesmal einen `monitor` hinzu, der den Prozentsatz der heruntergeladenen zusätzlichen Daten jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird, in das `<p>`-Ausgabefeld druckt.

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
  }
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
```

### Ergebnis

{{EmbedLiveSample("prompt-example", , "600px", , , , "language-model", "allow-forms")}}

Versuchen Sie, eine Frage oder Aussage in das `<textarea>` einzugeben, und drücken Sie dann die Senden-Schaltfläche, um das KI-Modell abzufragen und eine Antwort zu generieren.

## Komplettes Streaming-Beispiel

Dieses Beispiel demonstriert die Verwendung der `promptStreaming()`-Methode, um Antworten vom Modell als Stream zurückzugeben. Es ist genau das gleiche wie das vorherige Beispiel, außer dass der `prompt()`-Aufruf durch `promptStreaming()` ersetzt wurde und eine `for await...of`-Schleife verwendet wurde, um die Modellantworten inkrementell auszugeben:

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
  }
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
```

Geben Sie eine einfache Abfrage ein und beachten Sie, wie die Antwort inkrementell in das Ausgabefeld geschrieben wird, anstatt auf einmal zu erscheinen.

{{EmbedLiveSample("prompt-streaming-example", , "600px", , , , "language-model", "allow-forms")}}

## Siehe auch

- [Prompt API Playground](https://chrome.dev/web-ai-demos/prompt-api-playground/) auf chrome.dev (2026)
