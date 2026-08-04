---
title: Sitzungen über Neuladen hinaus beibehalten
short-title: Sitzungen beibehalten
slug: Web/API/Prompt_API/Preserving_sessions
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{DefaultAPISidebar("Prompt API")}}

Ein Problem mit der [Prompt API](/de/docs/Web/API/Prompt_API) besteht darin, dass der Browser keine Sitzungsinformationen über Browser-Neuladungen hinweg speichert — das ist keine Überraschung, da das Web standardmäßig zustandslos ist, aber es ist dennoch ein Problem. Um den Sitzungs-Kontext nach einem Neuladen oder Browser-Neustart wiederherzustellen, müssen Sie einen Mechanismus implementieren, um das Gespräch zu speichern und auf Server- oder Client-Seite wiederherzustellen.

Dieser Artikel zeigt Ihnen, wie Sie ein einfaches Abfrage-und-Antwort-Beispiel umsetzen können (ähnlich wie das [vollständige Beispiel](/de/docs/Web/API/Prompt_API/Using#complete_example) in unserem ersten Prompt API Leitfaden), das eine lösungsbewahrende Lösung enthält, die mit [Web Storage](/de/docs/Web/API/Web_Storage_API) erstellt wurde.

> [!NOTE]
> Um den vollständigen Quellcode detaillierter zu betrachten, sehen Sie sich [den vollständigen Quellcode](https://github.com/mdn/dom-examples/tree/main/prompt-api-web-storage) an.

## Die Benutzeroberfläche

Das HTML für dieses Beispiel enthält ein {{htmlelement("textarea")}}-Element zum Eingeben der Eingabeaufforderungen und ein {{htmlelement("p")}}-Element zum Schreiben der API-Antworten. Es enthält außerdem drei {{htmlelement("button")}}-Elemente — eines, um die Eingabeaufforderung an die API zu übermitteln, eines, um eine laufende Eingabeaufforderung abzubrechen, und eines, um den gespeicherten Sitzungsverlauf zu löschen.

```html
<h1>Prompt API demo</h1>
<p>
  This demo stores your previous session prompt history using the Web Storage
  API, and provides an option to delete it. First released in Chrome 148.
</p>

<h2>Input</h2>

<form>
  <div>
    <label for="prompt-text">Enter prompt text:</label>
    <textarea id="prompt-text" name="promptText" rows="6"></textarea>
  </div>
  <button type="submit" id="submit">Submit query</button
  ><button type="button" id="abort">Abort query</button>
  <button type="button" id="delete-session">Delete saved prompt history</button>
</form>

<h2>Output</h2>

<p class="prompt-output"></p>
```

Aus Gründen der Kürze zeigen wir das CSS nicht; es gibt stilistisch nichts Bedeutendes zu besprechen.

## Den Verlauf der Eingabeaufforderungen abrufen

Wenn die Seite zum ersten Mal geladen wird, müssen wir prüfen, ob wir einen gespeicherten Verlauf der Eingabeaufforderungen haben und diesen gegebenenfalls in die Sitzung laden.

Wir beginnen mit der Definition einer Variablen namens `promptHistory`, um den gespeicherten Verlauf zu speichern:

```js
let promptHistory;
```

Wir prüfen dann, ob es eine Eigenschaft in [`localStorage`](/de/docs/Web/API/Window/localStorage) namens `promptHistory` gibt, unter der wir unseren Verlauf der Eingabeaufforderungen speichern werden. Wenn ja, rufen wir dieses Speicherelement mit [`getItem()`](/de/docs/Web/API/Storage/getItem) ab, parsen es mit {{jsxref("JSON.parse()")}} in ein Array und speichern es in der Variablen. Wir aktivieren auch den Löschen-`<button>`, da es nun einen Verlauf zum Löschen gibt. Wenn kein gespeicherter Schlüssel namens `promptHistory` vorhanden ist, setzen wir die `promptHistory`-Variable auf ein leeres Array.

```js
if (localStorage.promptHistory) {
  promptHistory = JSON.parse(localStorage.getItem("promptHistory"));
  deleteBtn.disabled = false;
} else {
  promptHistory = [];
}
```

## Den Verlauf zur Sitzung hinzufügen

Als Nächstes erstellen wir eine `session`-Variable, um unsere Sitzung zu halten. Da die Verwendung der API eine {{Glossary("Transient_activation", "transiente Aktivierung")}} erfordert, füllen wir `session` innerhalb eines `focus`-Ereignis-Handlers auf dem `<textarea>` aus. Wenn der Benutzer das `<textarea>` fokussiert, prüfen wir zunächst, ob die API unterstützt wird; falls nicht, geben wir eine Nicht-Unterstützungsmeldung aus und `return` frühzeitig. Anschließend überprüfen wir, ob `session` bereits einen Wert zugewiesen bekommen hat (wir möchten nicht jedes Mal eine neue Sitzung erstellen). Wenn nicht, führen wir die `init()`-Funktion aus, die eine `LanguageModel`-Instanz mithilfe der benutzerdefinierten `getSession()`-Funktion generiert. Wir übergeben `getSession()` die `promptHistory`-Variable von früher, um den gespeicherten Verlauf der Sitzung bei der Erstellung hinzuzufügen.

Wenn die Erstellung erfolgreich ist, weisen wir die resultierende `LanguageModel`-Instanz der `session`-Variablen zu, geben eine Erfolgsmeldung in das Ausgabe-`<p>` aus und aktivieren den Abschicken-`<button>` (nun, da die Sitzung verfügbar ist, können wir sie anfragen).

```js
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
  session = await getSession(promptHistory);
  promptOutput.textContent = `Session created.`;
  submitBtn.disabled = false;
}
```

Nun betrachten wir die `getSession()`-Funktion. Die Funktion beginnt damit, unsere gewünschten Modellanforderungen durch die `availability()`-Methode laufen zu lassen, um zu sehen, ob sie verfügbar sind:

- Wenn sie `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung in das Ausgabe-`<p>` aus.
- Wenn sie `available` zurückgibt, erstellen wir eine Sitzung mit der `create()`-Methode, wobei wir mehrere Optionen übergeben, einschließlich `initialPrompts`, die wir auf unseren Verlauf-Parameter setzen. Dies gibt der Sitzung den vorherigen Verlauf der Eingabeaufforderungen als Kontext nach jedem Seitenladen.
- Wenn ein anderer Wert zurückgegeben wird (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, fügen jedoch diesmal einen `monitor` hinzu, der den Prozentsatz der zusätzlichen heruntergeladenen Daten jedes Mal ausgibt, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis ausgelöst wird.

```js
async function getSession(history) {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    console.log(`Language model not available.`);
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      initialPrompts: history,
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  } else {
    return await LanguageModel.create({
      initialPrompts: history,
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

## Den Verlauf nach jeder Eingabeaufforderung aktualisieren

Wenn das Formular abgeschickt wird, werden die Inhalte des `<textarea>` in einen [`prompt()`](/de/docs/Web/API/LanguageModel/prompt)-Aufruf einbezogen und das zurückgegebene Ergebnis wird in das Ausgabe-`<p>` einbezogen, sodass der Benutzer es sehen kann.

Der bedeutendste Teil dieses Beispiels ist, wie wir den Verlauf für später speichern — beachten Sie, wie wir nach jeder erfolgreichen Operation zwei Objekte mit {{jsxref("Array.push", "push()")}} in das `promptHistory`-Array einfügen, eines, das die `user`-Eingabeaufforderung darstellt, und eines, das die `assistant`-Antwort darstellt, im korrekten Format, damit die API sie interpretieren kann. Wir {{jsxref("JSON.stringify", "stringify()")}} den aktualisierten `promptHistory` und speichern ihn mit [`setItem()`](/de/docs/Web/API/Storage/setItem) im `promptHistory`-Webspeicherelement. Zu diesem Zeitpunkt aktivieren wir auch den Löschen-`<button>`, da es zu diesem Zeitpunkt definitiv einen Verlauf zu löschen gibt.

```js
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

    const response = await session.prompt(textarea.value, {
      signal: controller.signal,
    });

    promptOutput.textContent = response;

    submitBtn.disabled = false;
    abortBtn.disabled = true;
    console.log(`${session.contextUsage}/${session.contextWindow}`);

    promptHistory.push({ role: "user", content: textarea.value });
    promptHistory.push({ role: "assistant", content: response });
    localStorage.setItem("promptHistory", JSON.stringify(promptHistory));
    deleteBtn.disabled = false;
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

## Den Löschen-Button verbinden

Wenn der Löschen-`<button>` angeklickt wird, entfernen wir das `promptHistory`-Element aus dem lokalen Speicher mit [`removeItem()`](/de/docs/Web/API/Storage/removeItem). Wir laden auch die Seite mit [`Location.reload()`](/de/docs/Web/API/Location/reload) neu, als kostengünstige Möglichkeit, Kontinuitätsprobleme zwischen dem lokalen Speicher und der Modellsitzung zu vermeiden.

```js
deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("promptHistory");
  window.location.reload();
});
```

## Ergebnis

[Führen Sie die Demo aus](https://mdn.github.io/dom-examples/prompt-api-web-storage/) in einem neuen Tab, um ihre Funktionalität zu beobachten (siehe auch [den vollständigen Quellcode](https://github.com/mdn/dom-examples/tree/main/prompt-api-web-storage)). Wir konnten keine funktionierende Version dieser Demo eingebettet auf der Seite bereitstellen, da MDN alle Speicherdaten löscht.

Versuchen Sie, eine Eingabeaufforderung wie "Meine Lieblingsfarbe ist Rot" einzureichen, laden Sie dann die Seite neu und versuchen Sie, "Was ist meine Lieblingsfarbe?" zum Beispiel einzureichen. Das Modell sollte sich an Ihr vorheriges Gespräch erinnern.

Versuchen Sie dasselbe jetzt noch einmal, aber drücken Sie zwischendurch auf "Gespeicherten Verlauf der Eingabeaufforderungen löschen". Dieses Mal wird sich das Modell nicht an Ihr vorheriges Gespräch erinnern.
