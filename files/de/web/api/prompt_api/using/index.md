---
title: Verwenden der Prompt API
slug: Web/API/Prompt_API/Using
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{DefaultAPISidebar("Prompt API")}}

Die [Prompt API](/de/docs/Web/API/Prompt_API) bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus, mit dem eine Website direkt ein Sprachmodell abfragen kann, das vom Benutzeragenten bereitgestellt wird, ohne die spezifischen Implementierungsdetails des verwendeten KI-Modells verwalten zu müssen. Ein auf dem Gerät verfügbares Modell ist nützlich und effizient, da sensible Daten auf dem Gerät des Benutzers verbleiben können, das Modell offline verfügbar ist und Entwickler die Kosten und Latenz von API-Aufrufen zu externen Diensten vermeiden können.

Dieser Artikel erklärt, wie man die grundlegenden Prinzipien der Prompt API verwendet. Die gesamte KI-Abfragefunktionalität wird über die [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle verwaltet.

## Überprüfung der Konfigurationsunterstützung

Bevor Sie versuchen, die Prompt API zu verwenden, sollten Sie zunächst überprüfen, ob Ihre gewünschte Modellkonfiguration vom aktuellen Browser unterstützt wird, damit Sie Ausfallsituationen und Fälle, bei denen zusätzliche Daten heruntergeladen werden müssen, um ein funktionierendes Modell bereitzustellen, elegant handhaben können.

Die Überprüfung der Konfigurationsunterstützung wird mit der statischen Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static) durchgeführt.

Zum Beispiel:

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Die Rückgabe dieses Versprechens erfüllt sich mit einem enumerierten Wert, der angibt, ob die Unterstützung für die angegebene Optionsmenge verfügbar ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber zusätzliche Daten herunterladen muss.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber einen laufenden Download abschließen muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne neue Downloads zu erfordern.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird er vom Browser automatisch gestartet, sobald eine `LanguageModel`-Instanz mit der Methode `create()` erstellt wird. Sie können den Fortschritt des Downloads automatisch mithilfe eines Monitors verfolgen, den wir im nächsten Abschnitt behandeln werden.

> [!NOTE]
> Auch wenn Sie nach einer Sprachmodellsitzung fragen können, die multimediale Ausgaben erwartet, wird dies fehlschlagen — die Verfügbarkeit wird `unavailable` sein. Die API unterstützt derzeit nur Textausgaben.

### Überwachung des Downloadfortschritts

Wenn das KI-Modell zusätzliche Daten herunterlädt (`availability()` gibt `downloading` zurück), ist es hilfreich, dem Benutzer ein Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bevor der Vorgang abgeschlossen ist.

Die `create()`-Methode kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument erhält. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis verfügbar, das ausgelöst wird, wenn Fortschritte beim Herunterladen der Daten erzielt werden.

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download eingeleitet, und ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Erstellen einer `LanguageModel`-Sitzung

Sobald Sie überprüft haben, dass Ihre Konfiguration unterstützt wird, ist der nächste Schritt, das KI-Modell abzufragen, eine `LanguageModel`-Objektinstanz zu erstellen. Dies geschieht mithilfe der statischen Methode [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static), die ein Optionsobjekt als Argument nimmt:

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Der Browser lädt automatisch die entsprechenden Modelldaten herunter, um das angeforderte Sprachmodell zu handhaben, wenn es noch nicht verfügbar ist und wenn der Browser dazu in der Lage ist.

> [!NOTE]
> Die `create()`-Methode (und andere Methoden, die über die Prompt API verfügbar sind) erfordern eine {{Glossary("Transient_activation", "transiente Aktivierung")}} zur Ausführung, als Vorsichtsmaßnahme, um zu verhindern, dass Apps Sprachmodellressourcen ohne Benutzerinteraktion verwenden.

Eine `LanguageModel`-Objektinstanz und die Aktivität, die durch die Verwendung ihrer Methoden und Eigenschaften erfolgt, wird als **Sitzung** bezeichnet. Der Browser speichert alle an die Prompt API gesendeten und empfangenen Aufforderungen und Antworten als Teil einer einzigen Sitzung, wodurch die API ihre Antworten basierend auf vorherigen Interaktionen anpassen und ein Gespräch führen kann.

Dies umfasst alle Aufforderungsnachrichten, die über die `initialPrompts`-Option der Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static), [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append) an sie gesendet werden.

> [!NOTE]
> Der Browser speichert Sitzungsinformationen standardmäßig nicht über Browser-Neuladungen hinweg. Um den Sitzungszusammenhang nach einer Neuladung oder einem Browser-Neustart wiederherzustellen, müssen Sie einen Mechanismus implementieren, um das Gespräch zu speichern und mit einer serverseitigen Lösung oder einem clientseitigen Mechanismus wie dem [Web Storage](/de/docs/Web/API/Web_Storage_API) wiederherzustellen. Ein solches Beispiel wird in [Erhaltung von Sitzungen über Neuladen hinweg](/de/docs/Web/API/Prompt_API/Preserving_sessions) behandelt.

Die Parameter [`expectedInputs`](/de/docs/Web/API/LanguageModel/create_static#expectedinputs) und [`expectedOutputs`](/de/docs/Web/API/LanguageModel/create_static#expectedOutputs) geben die Arten von Eingaben und Ausgaben sowie die Eingabe- und Ausgabesprachen an, die Sie bereitstellen und von der KI-Aufforderung empfangen möchten.

Die Prompt API behandelt standardmäßig Texteingaben und -ausgaben, ist jedoch multimodal — Sie können ihr auch Bilder und Audioeingaben geben, zum Beispiel um sie aufzufordern, ein Bild zu beschreiben oder eine Audiodatei zu transkribieren. Weitere Einzelheiten finden Sie unter [Multimodale Aufforderungen](/de/docs/Web/API/Prompt_API/Multimodal).

Die Prompt API behandelt standardmäßig mehrere Sprachen, aber möglicherweise nicht alle Sprachen, die Sie erwarten. Es ist daher eine gute Idee, sie explizit anzugeben, falls der Browser zusätzliche Ressourcen herunterladen muss.

## Modellanfragen

Wenn Sie eine `LanguageModel`-Instanz erstellt haben, können Sie das KI-Modell auffordern, indem Sie die Instanzmethode [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) darauf aufrufen und eine Eingabemeldung als Argument übergeben. Zum Beispiel:

```js
const response = await session.prompt(textarea.value);
```

Diese Methode gibt ein {{jsxref("Promise")}} zurück, das sich mit einem String erfüllt, der die KI-Antwort auf Ihre Aufforderung enthält.

### Mehrere Nachrichten übergeben

Sie können mehrere Eingabemeldungen als Array in die API übergeben, und sie können unterschiedliche Rollen haben. Zum Beispiel können Nachrichten Standard-`user`-Aufforderungen und Anweisungen des `assistant` enthalten, um die Antworten auf die `user`-Aufforderungen weiter zu gestalten. Um die KI zu veranlassen, auf Ihre Eingabe im Stil eines bösen Masterminds zu reagieren, könnten Sie diesen `prompt()`-Aufruf verwenden:

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

Sie erfahren mehr über diese Rollen im nächsten Artikel, [Hinzufügen von Kontext mit anfänglichen und fortlaufenden Eingabeaufforderungen](/de/docs/Web/API/Prompt_API/Adding_context).

### Streaming-Antworten

Wenn Sie die KI-Antwort schrittweise als [`ReadableStream`](/de/docs/Web/API/ReadableStream) anstatt als großen String zurückgeben möchten, können Sie die Methode [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) verwenden. Sie können den Stream mit `for await...of` konsumieren oder einen Leser über [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) anhängen.

Zum Beispiel:

```js
const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

Dies ist nützlich, um Benutzern schrittweise Antworten für Ausgaben anzuzeigen, die lange dauern, oder für jedes Szenario, in dem die wahrgenommene Latenz minimiert werden sollte.

## Das Kontextfenster

Jede `LanguageModel`-Sitzung hat ein begrenztes Kontextfenster, das die Gesamtanzahl der Eingabe- und Ausgabetokens einschränkt, die es gleichzeitig halten kann. Sobald Sie das Tokenkontingent Ihrer Sitzung ausgeschöpft haben, können Sie keine weiteren Aufforderungen stellen, und Sie müssen eine Technik wie [Sitzungsklonen](#klonen_einer_sitzung) verwenden, um die Nutzung fortzusetzen.

Die Eigenschaft [`contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) gibt die maximale Kapazität der Sitzung an, und [`contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) gibt an, wie viele Tokens bisher verbraucht wurden.

Zum Beispiel können Sie nach jeder Aufforderung melden, wie viele Tokens noch übrig sind, indem Sie etwas wie dies verwenden:

```js
console.log(`${session.contextUsage}/${session.contextWindow}`);
```

Wenn ein Methodenaufruf wie [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) oder [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) die verbleibende Anzahl von Tokens im Kontextfenster überschreiten würde, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst und das [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)-Ereignis wird ausgelöst.

Um zu überprüfen, wie viele Tokens eine Aufforderungsoperation verbrauchen würde, ohne sie tatsächlich zu senden, verwenden Sie [`measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage).

## Klonen einer Sitzung

Sie können eine vorhandene Sitzung mit der Funktion [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) kopieren. Dies erstellt eine Replik der `LanguageModel`-Objektinstanz, bei der die Konversation bis zu diesem Punkt und die anfängliche Aufforderung beibehalten werden, jedoch die Tokenanzahl (`contextUsage`) zurückgesetzt wird. Sie können die Sitzungskopie als einen Zweig der ursprünglichen Konversation mit einem eigenen Tokenkontingent betrachten.

```js
const clonedSession = await session.clone();

clonedSession.prompt("Let's talk about the weather.");
```

Sie können `clone()` verwenden, um den Kontext zu einem bestimmten Zeitpunkt zu speichern und dann divergierende Interaktionen mit dem KI-Modell basierend auf diesem _Speicherpunkt_ zu erstellen.

Zum Beispiel möchten Sie möglicherweise eine Quizmaster-KI-App erstellen, um Fragen für ein Quiz oder einen Test zu generieren und verschiedene Klone für verschiedene Themen verwenden:

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

Das Erstellen einer neuen Sitzung über `clone()` ist auch eine häufige Möglichkeit, das Problem des Tokenmangels zu umgehen.

## Abbrechen von Operationen und Zerstören von Instanzen

Sie können ausstehende `prompt()`, `clone()` und andere Operationen mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) innerhalb des Operationsoptionsobjekts als `signal`-Eigenschaftswert enthalten ist. Zum Beispiel könnte das Abbrechen einer `LanguageModel.prompt()`-Operation durch Drücken eines Knopfes so aussehen:

```js
const controller = new AbortController();

abortBtn.addEventListener("click", () => {
  controller.abort("Query aborted by user.");
});

const response = await session.prompt(textarea.value, {
  signal: controller.signal,
});
```

Nachdem ein `LanguageModel` erstellt wurde, können Sie seine zugewiesenen Ressourcen freigeben und jegliche weitere Aktivität stoppen, indem Sie die Methode [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das Objekt eingesetzt haben, da es viele Ressourcen verbrauchen kann.

```js
session.destroy();
```

Wenn ein `create()`-Aufruf einen zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) hat und Sie seine Methode [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen, nachdem der `create()`-Aufruf erfolgreich war, hat dies den gleichen Effekt wie der Aufruf von `destroy()` auf dem resultierenden `LanguageModel`-Objekt.

## Komplettes Beispiel

Lassen Sie uns ein vollständiges Beispiel betrachten, das die Prompt API in Aktion demonstriert. Dieses Beispiel bietet ein Texteingabefeld, um eine Aufforderung einzugeben, die an die API übermittelt werden kann, um eine Antwort anzufordern. Die Antwort wird dann in einem Ausgabefeld angezeigt.

### HTML

In unserem Markup definieren wir ein Eingabe-{{htmlelement("textarea")}}, das es dem Benutzer ermöglicht, eine Aufforderung einzugeben. Wir fügen auch zwei {{htmlelement("button")}}-Elemente hinzu — eines, um die Aufforderung/Abfrage einzureichen, und ein anderes, um eine laufende Abfrage abzubrechen.

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

Als nächstes fügen wir ein {{htmlelement("p")}}-Element hinzu, um die Antwort des Modells auf die Aufforderung des Benutzers anzuzeigen, sowie Details zu allen auftretenden Fehlern.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen werden, da keines davon relevant ist, um die Prompt API zu verstehen.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zum `<form>`, `<textarea>`, dem Senden-`<button>`, dem Abbrechen-`<button>` und dem Ausgabe-`<p>` zu erfassen. Wir deaktivieren anfänglich die Senden- und Abbrechen-Buttons, da wir nicht möchten, dass diese gedrückt werden, bevor die zugehörige Funktionalität verfügbar ist.

```js live-sample___prompt-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");
```

Als nächstes erstellen wir eine globale `session`-Variable, um unsere Sitzung zu halten. Da die Verwendung der API eine transiente Aktivierung erfordert, füllen wir `session` innerhalb eines `focus`-Eventhandlers auf dem `<textarea>`. Wenn der Benutzer den `<textarea>` fokussiert, prüfen wir zuerst, ob die API unterstützt wird; wenn nicht, drucken wir eine Nicht-Support-Nachricht und `return`en frühzeitig. Dann überprüfen wir, ob `session` bereits einen zugewiesenen Wert hat (wir wollen nicht jedes Mal eine neue Sitzung erstellen). Wenn nicht, führen wir die `init()`-Funktion aus, die eine `LanguageModel`-Instanz mit der später definierten benutzerdefinierten Funktion `getSession()` generiert.

Ist die Generierung erfolgreich, weisen wir die resultierende `LanguageModel`-Instanz der `session`-Variable zu, drucken eine Erfolgsnachricht an das Ausgabe-`<p>` und aktivieren den Senden-`<button>` (jetzt, da die Sitzung verfügbar ist, können wir damit beginnen, sie zu benutzen).

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

Als nächstes fügen wir ein `submit`-Eventlistener zum `<form>`-Element hinzu; wenn das Formular abgeschickt wird, wird die Funktion `handleSubmission()` aufgerufen.

```js live-sample___prompt-example
form.addEventListener("submit", handleSubmission);
```

Als nächstes definieren wir die Funktion `handleSubmission()`. Diese verhindert zunächst das Absenden des Formulars mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault), dann prüft sie, ob das Eingabe-`<textarea>` beim Absenden leer war. Wenn es leer war, schreiben wir eine Fehlermeldung in das Ausgabe-`<p>` und kehren aus der Funktion zurück. Wir wollen unsere Zeit nicht damit verschwenden, die KI mit einem leeren String aufzufordern.

Als nächstes, innerhalb eines `try`-Blocks, machen wir folgendes:

- Wir fügen eine Nachricht in das Ausgabe-`<p>` ein, um zu sagen, dass eine Antwort generiert wird, und ändern den `disabled`-Status der beiden Buttons. Zu diesem Zeitpunkt möchten wir Benutzern ermöglichen, die gerade beginnende Anfrageoperation abzubrechen, aber wir wollen nicht, dass sie versuchen, eine andere Anfrage zu starten, bevor diese abgeschlossen ist.
- Wir erstellen einen neuen [`AbortController`](/de/docs/Web/API/AbortController) und fügen dem Abbrechen-`<button>` einen `click`-Eventlistener hinzu, damit, wenn er geklickt wird, [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller ausgelöst wird, um die Anfrageoperation abzubrechen und die `<button>`-Deaktivierungszustände zurückgesetzt werden.
- Wir rufen `prompt()` auf der `session`-Instanz auf, um die Aufforderung zu starten und übergeben ihr den Inhalt des `<textarea>` als Anfragetext und ein Optionsobjekt mit einer `signal`-Eigenschaft, die dem [`signal`](/de/docs/Web/API/AbortController/signal) des Controllers entspricht. Dies ermöglicht es uns, die `prompt()`-Operation durch Drücken des Abbrechen-`<button>` zu beenden.
- Wir setzen die `textContent` des Ausgabe-`<p>` auf die `response` der API, wenn sie zurückgegeben wird, damit der Benutzer sie lesen kann.
- Wir setzen den `disabled`-Zustand der Buttons zurück.
- Wir protokollieren die verbleibenden Tokens im Konsolenprotokoll, als `contextUsage`/`contextWindow`.

Im `catch`-Teil des `try`-Blocks drucken wir alle aufgetretenen Fehler in das Ausgabe-`<p>`.

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

Jetzt definieren wir die Funktion `getSession()`, die unser `LanguageModel` in der Sitzung zurückgibt. Die Funktion beginnt damit, unsere gewünschten Modellanforderungen durch die Methode `availability()` zu schicken, um zu sehen, ob sie verfügbar sind:

- Wenn sie `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung ins Ausgabe-`<p>`.
- Wenn sie `available` zurückgibt, erstellen wir eine Sitzung mit der `create()`-Methode, übergeben die gewünschten Optionen und geben die Sitzung zurück. Die erforderliche Konfiguration ist verfügbar, also können wir sie sofort nutzen.
- Wenn sie einen anderen Wert zurückgibt (d.h. `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf durch, aber inkludieren diesmal einen `monitor`, der bei jedem Auftreten des `downloadprogress`-Ereignisses den Prozentsatz der heruntergeladenen zusätzlichen Daten im Ausgabe-`<p>` druckt.

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

Versuchen Sie, eine Frage oder Aussage in das `<textarea>` einzugeben, und drücken Sie dann den Senden-Knopf, um das KI-Modell aufzufordern und eine Antwort zu erzeugen.

## Komplettbeispiel mit Streaming

Dieses Beispiel zeigt die Verwendung der Methode `promptStreaming()`, um Antworten vom Modell als Stream zurückzugeben. Es ist genau das gleiche wie das vorherige Beispiel, außer dass der `prompt()`-Aufruf durch `promptStreaming()` ersetzt wurde, und eine `for await...of`-Schleife verwendet wurde, um die Modellantworten schrittweise auszugeben:

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

Geben Sie eine einfache Anfrage ein und beachten Sie, dass die Antwort schrittweise in die Ausgabe geschrieben wird, anstatt auf einmal zu erscheinen.

{{EmbedLiveSample("prompt-streaming-example", , "600px", , , , "language-model", "allow-forms")}}

## Siehe auch

- [Prompt API Playground](https://chrome.dev/web-ai-demos/prompt-api-playground/) auf chrome.dev (2026)
