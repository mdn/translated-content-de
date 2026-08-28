---
title: Verwendung der Prompt-API
slug: Web/API/Prompt_API/Using
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{DefaultAPISidebar("Prompt API")}}

Die [Prompt-API](/de/docs/Web/API/Prompt_API) bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Website, um direkt ein Sprachmodell vom Benutzeragenten abzufragen, ohne dass implementierungsspezifische Details des verwendeten KI-Modells verwaltet werden müssen. Ein Modell auf dem Gerät ist nützlich und effizient, da sensible Daten auf dem Gerät des Benutzers bleiben können, das Modell offline verfügbar ist und Entwickler die Kosten und die Latenz der API-Aufrufe an externe Dienste vermeiden können.

Dieser Artikel erklärt, wie Sie die grundlegenden Elemente der Prompt-API verwenden. Alle KI-Abfragefunktionen werden über die [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle verwaltet.

## Überprüfung der Konfigurationsunterstützung

Bevor Sie versuchen, die Prompt-API zu verwenden, sollten Sie zunächst überprüfen, ob Ihre gewünschte Modellkonfiguration vom aktuellen Browser unterstützt wird, sodass Sie Situationen, in denen zusätzliche Daten heruntergeladen werden müssen, oder absolute Fehlerfälle elegant handhaben können.

Die Überprüfung der Konfigurationsunterstützung erfolgt mit der statischen Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static).

Zum Beispiel:

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Das Rückgabepromise dieser Methode erfüllt sich mit einem enumerierten Wert, der angibt, ob die Unterstützung für die angegebene Optionsmenge verfügbar ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber zusätzliche Daten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber einen laufenden Download abschließen muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `LanguageModel`-Instanz mit der `create()`-Methode erstellt wird. Sie können den Downloadfortschritt automatisch mit einem Monitor verfolgen, den wir im nächsten Abschnitt behandeln werden.

> [!NOTE]
> Auch wenn Sie eine Sprachmodell-Sitzung anfordern können, die multimediale Ausgaben erwartet, wird dies fehlschlagen — die Verfügbarkeit wird `unavailable` sein. Die API unterstützt derzeit nur Textausgaben.

### Überwachung des Download-Fortschritts

Wenn das KI-Modell zusätzliche Daten herunterlädt (`availability()` gibt `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, wie lange er warten muss, bevor der Vorgang abgeschlossen ist.

Die `create()`-Methode kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument annimmt. `CreateMonitor` verfügt über ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis, das ausgelöst wird, wenn Fortschritte beim Herunterladen der Daten erzielt werden.

Sie können dieses Ereignis verwenden, um den Ladefortschritt zu erfassen:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet, und es wird ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Erstellen einer `LanguageModel`-Sitzung

Sobald Sie festgestellt haben, dass Ihre Konfiguration unterstützt wird, ist der nächste Schritt bei der Aufforderung des KI-Modells die Erstellung einer `LanguageModel`-Objektinstanz. Dies erfolgt mit der statischen Methode [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static), die ein Optionsobjekt als Argument annimmt:

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Der Browser lädt automatisch die entsprechenden Modelldaten herunter, um das angeforderte Sprachmodell zu bearbeiten, wenn es noch nicht verfügbar ist und wenn der Browser dazu in der Lage ist.

> [!NOTE]
> Die `create()`-Methode (sowie andere Methoden, die über die Prompt-API verfügbar sind) erfordern {{Glossary("Transient_activation", "transiente Aktivierung")}}, um aufgerufen zu werden, als Vorsichtsmaßnahme, um Apps daran zu hindern, Sprachmodell-Ressourcen ohne Benutzerinteraktion zu nutzen.

Eine Instanz eines `LanguageModel`-Objekts und die Aktivitäten, die durch die Nutzung seiner Methoden und Eigenschaften stattfinden, werden als **Sitzung** bezeichnet. Der Browser speichert alle an die Prompt-API gesendeten und von ihr empfangenen Aufforderungen und Antworten im Rahmen einer einzigen Sitzung, sodass die API ihre Antworten basierend auf früheren Interaktionen anpassen und eine Konversation führen kann.

Dies umfasst alle Aufforderungsnachrichten, die ihm über die `initialPrompts`-Option der [`create()`](/de/docs/Web/API/LanguageModel/create_static)-Methode, [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), oder [`append()`](/de/docs/Web/API/LanguageModel/append) gesendet werden.

> [!NOTE]
> Der Browser speichert standardmäßig keine Sitzungsinformationen über Browser-Neuladungen hinweg. Um den Sitzungs-Kontext nach einem Neuladen oder Browser-Neustart wiederherzustellen, müssen Sie einen Mechanismus implementieren, um die Konversation zu speichern und wiederherzustellen, entweder mit einer serverseitigen Lösung oder einem clientseitigen Mechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API). Ein solches Beispiel wird in [Sitzungen über Neuladungen hinweg bewahren](/de/docs/Web/API/Prompt_API/Preserving_sessions) behandelt.

Die Parameter [`expectedInputs`](/de/docs/Web/API/LanguageModel/create_static#expectedinputs) und [`expectedOutputs`](/de/docs/Web/API/LanguageModel/create_static#expectedoutputs) geben die Arten von Ein- und Ausgaben sowie die Ein-/Ausgabesprachen an, die Sie dem KI-Dialog bereitstellen und von ihm empfangen möchten.

Die Prompt-API verarbeitet standardmäßig Text-Eingaben und -Ausgaben, ist jedoch multimodal — Sie können ihr auch Bilder und Audiodaten bereitstellen, um sie beispielsweise zu bitten, ein Bild zu beschreiben oder eine Audiodatei zu transkribieren. Weitere Informationen finden Sie unter [Multimodale Abfragen](/de/docs/Web/API/Prompt_API/Multimodal).

Die Prompt-API verarbeitet standardmäßig mehrere Sprachen, aber möglicherweise nicht alle, die Sie erwarten. Daher ist es ratsam, sie explizit anzugeben, falls der Browser zusätzliche Ressourcen herunterladen muss.

## Abfragen des Modells

Nachdem Sie eine `LanguageModel`-Instanz erstellt haben, können Sie beginnen, das KI-Modell abzufragen, indem Sie die [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt)-Instanzmethode darauf aufrufen und eine Eingabemeldung als Argument übergeben. Zum Beispiel:

```js
const response = await session.prompt(textarea.value);
```

Diese Methode gibt ein {{jsxref("Promise")}} zurück, das mit einer Zeichenkette erfüllt wird, die die AI-Antwort auf Ihre Abfrage enthält.

### Übermittlung mehrerer Nachrichten

Sie können mehrere Eingabemeldungen als Array in die API übergeben, und sie können unterschiedliche Rollen haben. Beispielsweise können Nachrichten standardmäßige `user`-Eingaben enthalten und Anweisungen des `assistant`, um zusätzliche Einflussnahme darauf zu haben, wie es auf die `user`-Eingaben reagiert. Um die KI dazu zu bringen, auf Ihre Eingabe im Stil eines bösen Masterminds zu reagieren, könnten Sie diesen `prompt()`-Aufruf verwenden:

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

Im nächsten Artikel erfahren Sie mehr über diese Rollen, [Kontext hinzufügen mit initialen und laufenden Abfrageeingaben](/de/docs/Web/API/Prompt_API/Adding_context).

### Streaming-Antworten

Wenn Sie möchten, dass die KI-Antwort schrittweise als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückgegeben wird, anstatt als eine große Zeichenkette, können Sie die [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)-Methode verwenden. Sie können den Stream mit `for await...of` konsumieren oder einen Leser über [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) anhängen.

Zum Beispiel:

```js
const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

Dies ist nützlich, um Benutzern Antworten schrittweise anzuzeigen, für Ausgaben, die lange dauern, oder für jedes Szenario, bei dem die wahrgenommene Latenz minimiert werden soll.

## Das Kontextfenster

Jede `LanguageModel`-Sitzung hat ein begrenztes Kontextfenster, das die maximale Anzahl an Ein- und Ausgabetokens begrenzt, die es gleichzeitig aufnehmen kann. Sobald das Token-Kontingent Ihrer Sitzung ausgeschöpft ist, können Sie keine weiteren Abfragen mehr stellen. Sie müssen eine Technik wie das [Klonen einer Sitzung](#klonen_einer_sitzung) verwenden, um die Nutzung fortzusetzen.

Die [`contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow)-Eigenschaft gibt die maximale Kapazität der Sitzung an, und [`contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) zeigt an, wie viele Tokens bisher verbraucht wurden.

Zum Beispiel können Sie nach jeder Abfrage angeben, wie viele Tokens noch übrig sind:

```js
console.log(`${session.contextUsage}/${session.contextWindow}`);
```

Wenn ein Methodenaufruf wie [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) oder [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) die verbleibende Anzahl von Tokens im Kontextfenster überschreiten würde, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst und das [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)-Ereignis wird ausgelöst.

Um zu überprüfen, wie viele Tokens eine Abfrageaktion verbrauchen würde, ohne sie tatsächlich zu senden, verwenden Sie [`measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage).

## Klonen einer Sitzung

Sie können eine bestehende Sitzung mithilfe der Funktion [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) kopieren. Dies erzeugt eine exakte Kopie der `LanguageModel`-Objektinstanz, bei der die bis zu diesem Punkt geführte Konversation und die anfängliche Eingabe erhalten bleiben, der Token-Zähler (`contextUsage`) jedoch zurückgesetzt wird. Sie können sich den Sitzungs-Klon als eine Gabelung der ursprünglichen Konversation vorstellen, mit ihrem eigenen Token-Kontingent.

```js
const clonedSession = await session.clone();

clonedSession.prompt("Let's talk about the weather.");
```

Sie können `clone()` verwenden, um den Kontext zu einem bestimmten Zeitpunkt zu speichern und dann basierend auf diesem _Speicherpunkt_ divergierende Interaktionen mit dem KI-Modell zu erstellen.

Zum Beispiel könnten Sie eine Quizmaster-KI-App erstellen, die hilft, Fragen für ein Quiz oder einen Test zu generieren, und verschiedene Klone für unterschiedliche Themen verwenden:

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

Das Erstellen einer neuen Sitzung über `clone()` ist auch ein üblicher Weg, um das Problem zu umgehen, dass die Tokens ausgehen.

## Abbrechen von Operationen und Zerstörung von Instanzen

Sie können ausstehende `prompt()`, `clone()` und andere Operationen mithilfe eines [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das dazugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) innerhalb des Methodenosptionsobjekts als `signal`-Eigenschaftswert enthalten ist. Zum Beispiel könnte das Abbrechen eines `LanguageModel.prompt()`-Vorgangs durch Drücken einer Taste so aussehen:

```js
const controller = new AbortController();

abortBtn.addEventListener("click", () => {
  controller.abort("Query aborted by user.");
});

const response = await session.prompt(textarea.value, {
  signal: controller.signal,
});
```

Nachdem ein `LanguageModel` erstellt wurde, können Sie dessen zugewiesene Ressourcen freigeben und jede weitere Aktivität stoppen, indem Sie seine [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy)-Methode aufrufen. Sie sollten dies tun, nachdem Sie das Objekt fertig verwendet haben, da es viele Ressourcen verbrauchen kann.

```js
session.destroy();
```

Wenn ein `create()`-Aufruf mit einem assoziierten [`AbortController`](/de/docs/Web/API/AbortController) erfolgt, und Sie dessen [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort)-Methode nach dem erfolgreichen `create()`-Aufruf aufrufen, hat dies denselben Effekt, wie `destroy()` auf das resultierende `LanguageModel`-Objekt zu rufen.

## Vollständiges Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Prompt-API in Aktion zeigt. Dieses Beispiel bietet ein Texteingabefeld, um eine Eingabeaufforderung einzugeben, die an die API gesendet werden kann, um eine Antwort anzufordern. Die Antwort wird dann in einer Ausgabebox angezeigt.

### HTML

In unserem Markup definieren wir ein Eingabe-{{htmlelement("textarea")}}, das es dem Benutzer erlaubt, eine Eingabeaufforderung einzugeben. Wir fügen auch zwei {{htmlelement("button")}}-Elemente hinzu — eines, um die Eingabeaufforderung abzusenden, und ein weiteres, um eine laufende Abfrage abzubrechen.

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

Als nächstes fügen wir ein {{htmlelement("p")}}-Element hinzu, um die Antwort des Modells auf die Eingabeaufforderung des Benutzers anzuzeigen sowie Details zu etwaigen Fehlern, die geworfen werden.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen werden, da nichts davon relevant für das Verständnis der Prompt-API ist.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zum `<form>`, `<textarea>`, Submit-`<button>`, Abbruch-`<button>` und zur Ausgabe-`<p>` zu erfassen. Wir deaktivieren zunächst die Submit- und Abbruch-Buttons, da wir nicht wollen, dass diese gedrückt werden, bevor die zugehörige Funktionalität verfügbar ist.

```js live-sample___prompt-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");
```

Als nächstes erstellen wir eine globale Variable `session`, um unsere Sitzung zu halten. Da die Verwendung der API eine transiente Aktivierung erfordert, befüllen wir `session` innerhalb eines `focus`-Ereignisbehandlers auf dem `<textarea>`. Wenn der Benutzer das `<textarea>` fokussiert, prüfen wir zuerst, ob die API unterstützt wird; wenn nicht, geben wir eine Nicht-Unterstützungsnachricht aus und `return` früh. Als nächstes prüfen wir, ob `session` bereits einen Wert zugewiesen hat (wir wollen nicht jedes Mal eine neue Sitzung erstellen). Falls nicht, führen wir die `init()`-Funktion aus, die eine `LanguageModel`-Instanz mithilfe der später definierten benutzerdefinierten `getSession()`-Funktion generiert.

Bei erfolgreicher Erstellung weisen wir die resultierende `LanguageModel`-Instanz der `session`-Variable zu, geben eine Erfolgsmeldung an das Ausgabe-`<p>` aus und aktivieren den Submit-`<button>` (da jetzt die Sitzung verfügbar ist, können wir mit der Abfrage beginnen).

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

Als nächstes fügen wir einen `submit`-Ereignislistener für das `<form>`-Element hinzu; wenn das Formular abgesendet wird, wird die `handleSubmission()`-Funktion aufgerufen.

```js live-sample___prompt-example
form.addEventListener("submit", handleSubmission);
```

Als nächstes definieren wir die `handleSubmission()`-Funktion. Diese stoppt zuerst die Formularübermittlung mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), dann wird geprüft, ob das Eingabe-`<textarea>` bei der Übermittlung leer war. Falls ja, schreiben wir eine Fehlermeldung in das Ausgabe-`<p>` und verlassen die Funktion. Wir wollen unsere Zeit nicht damit vergeuden, die KI mit einem leeren String aufzufordern.

Als nächstes, innerhalb eines `try`-Blocks:

- Fügen wir eine Nachricht in das Ausgabe-`<p>` ein, um zu sagen, dass eine Antwort generiert wird, und ändern den `disabled`-Status der beiden Tasten. Zu diesem Zeitpunkt möchten wir es Benutzern erlauben, die Abfrageoperation abzubrechen, die zu starten im Begriff ist, aber wir möchten nicht, dass sie versuchen, eine andere Abfrage zu starten, bis diese abgeschlossen ist.
- Erstellen wir einen neuen [`AbortController`](/de/docs/Web/API/AbortController) und fügen dem Abbruch-`<button>` einen `click`-Ereignislistener hinzu, sodass beim Klicken [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller ausgelöst wird, um die Abfrageoperation abzubrechen und die deaktivierten Zustände der `<button>`-Elemente zurückgesetzt werden.
- Rufen wir `prompt()` auf der `session` auf, um die Abfrage zu starten, übergeben ihr den Inhalt des `<textarea>` als Abfrageeingabe und ein Optionsobjekt, das eine `signal`-Eigenschaft enthält, deren Wert gleich dem [`signal`](/de/docs/Web/API/AbortController/signal) des Controllers ist. Dies ermöglicht es uns, die `prompt()`-Operation durch Drücken des Abbruch-`<button>` abzubrechen.
- Setzen wir den `textContent` des Ausgabe-`<p>` auf die `response` der API, wenn sie zurückgegeben wird, damit der Benutzer sie lesen kann.
- Setzen wir den `disabled`-Status der Tasten zurück.
- Protokollieren wir die verbleibenden verfügbaren Tokens in der Konsole, in Form von `contextUsage`/`contextWindow`.

Im `catch`-Gegenstück des `try`-Blocks drucken wir alle geworfenen Fehler in das Ausgabe-`<p>`.

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

Jetzt definieren wir die `getSession()`-Funktion, die unser `LanguageModel`-Sitzung zurückgeben soll. Die Funktion beginnt damit, unsere gewünschten Modellanforderungen durch die `availability()`-Methode laufen zu lassen, um zu prüfen, ob sie verfügbar ist:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung in das Ausgabe-`<p>` aus.
- Wenn es `available` zurückgibt, erstellen wir eine Sitzung mit der `create()`-Methode, übergeben ihr die gewünschten Optionen, und geben sie zurück. Die erforderliche Konfiguration ist verfügbar, sodass wir sie sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf durch, aber diesmal fügen wir einen `monitor` hinzu, der jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird, den Prozentsatz der heruntergeladenen zusätzlichen Daten in das Ausgabe-`<p>` ausgibt.

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

Versuchen Sie, eine Frage oder Aussage in das `<textarea>` einzugeben, und drücken Sie dann die Senden-Taste, um das KI-Modell abzufragen und eine Antwort zu generieren.

## Vollständiges Streaming-Beispiel

Dieses Beispiel demonstriert die Verwendung der `promptStreaming()`-Methode, um Antworten des Modells als Stream zurückzugeben. Es ist genau dasselbe wie das vorherige Beispiel, außer dass der `prompt()`-Aufruf durch `promptStreaming()` ersetzt wurde und eine `for await...of`-Schleife verwendet wurde, um die Modellantworten schrittweise auszugeben:

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

Geben Sie eine einfache Abfrage ein, und beachten Sie, wie die Antwort schrittweise in die Ausgabe geschrieben wird, anstatt auf einmal zu erscheinen.

{{EmbedLiveSample("prompt-streaming-example", , "600px", , , , "language-model", "allow-forms")}}

## Siehe auch

- [Prompt API Playground](https://chrome.dev/web-ai-demos/prompt-api-playground/) auf chrome.dev (2026)
