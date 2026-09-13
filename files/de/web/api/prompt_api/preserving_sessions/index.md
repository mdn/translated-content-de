---
title: Sitzungen über Neuladen hinweg erhalten
short-title: Sitzungen erhalten
slug: Web/API/Prompt_API/Preserving_sessions
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{DefaultAPISidebar("Prompt API")}}

Ein Problem mit der [Prompt API](/de/docs/Web/API/Prompt_API) ist, dass der Browser keine Sitzungsinformationen über Browser-Neuladen hinweg speichert – dies ist keine Überraschung, da das Web standardmäßig zustandslos ist, aber es ist dennoch ein Problem. Um den Sitzungszusammenhang nach einem Neuladen oder Browser-Neustart wiederherzustellen, müssen Sie einen Mechanismus implementieren, um das Gespräch zu speichern und es mit einer server- oder clientseitigen Lösung wiederherzustellen.

Dieser Artikel zeigt Ihnen, wie Sie ein einfaches Beispiel für Abfrage und Antwort implementieren (ähnlich dem [kompletten Beispiel](/de/docs/Web/API/Prompt_API/Using#complete_example) im ersten Prompt API-Leitfaden), das eine mit [Web Storage](/de/docs/Web/API/Web_Storage_API) erstellte sitzungserhaltende Lösung enthält.

> [!NOTE]
> Um den vollständigen Code ausführlicher zu betrachten, sehen Sie sich [den vollständigen Quellcode](https://github.com/mdn/dom-examples/tree/main/prompt-api-web-storage) an.

## Die Benutzeroberfläche

Das HTML für dieses Beispiel enthält ein {{htmlelement("textarea")}}-Element zum Eingeben von Eingabeaufforderungen und ein {{htmlelement("p")}} zum Schreiben der Antworten der API. Es enthält außerdem drei {{htmlelement("button")}}-Elemente – eines, um die Eingabeaufforderung an die API zu senden, eines, um eine laufende Eingabeaufforderungsanfrage abzubrechen, und eines, um den gespeicherten Sitzungsverlauf zu löschen.

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

Aus Gründen der Kürze zeigen wir das CSS nicht; es gibt stilistisch nichts Wesentliches zu diskutieren.

## Abrufen des Eingabeaufforderungsverlaufs

Wenn die Seite zum ersten Mal geladen wird, müssen wir prüfen, ob ein Verlauf von Eingabeaufforderungen gespeichert ist und, falls ja, ihn in die Sitzung laden.

Wir beginnen damit, eine Variable namens `promptHistory` zum Speichern des gespeicherten Verlaufs zu definieren:

```js
let promptHistory;
```

Dann überprüfen wir, ob es eine Eigenschaft in [`localStorage`](/de/docs/Web/API/Window/localStorage) namens `promptHistory` gibt, was der Schlüssel ist, unter dem wir unseren Eingabeaufforderungsverlauf speichern werden. Wenn es eine gibt, rufen wir diesen Speichereintrag mit [`getItem()`](/de/docs/Web/API/Storage/getItem) ab, analysieren ihn in ein Array mit {{jsxref("JSON.parse()")}} und speichern ihn in der Variable. Wir aktivieren auch die Lösch-`<button>`, da es jetzt einen zu löschenden Verlauf gibt. Wenn kein gespeicherter Schlüssel namens `promptHistory` vorhanden ist, setzen wir die Variable `promptHistory` auf ein leeres Array.

```js
if (localStorage.promptHistory) {
  promptHistory = JSON.parse(localStorage.getItem("promptHistory"));
  deleteBtn.disabled = false;
} else {
  promptHistory = [];
}
```

## Hinzufügen des Eingabeaufforderungsverlaufs zur Sitzung

Als nächstes erstellen wir eine `session`-Variable, um unsere Sitzung zu halten. Da die Verwendung der API {{Glossary("Transient_activation", "transiente Aktivierung")}} erfordert, füllen wir `session` innerhalb eines `focus`-Ereignishandlers auf dem `<textarea>` aus. Wenn der Benutzer das `<textarea>` fokussiert, prüfen wir zunächst, ob die API unterstützt wird; wenn nicht, drucken wir eine Nicht-Unterstützungsnachricht und `return` frühzeitig. Dann überprüfen wir, ob `session` bereits einen Wert zugewiesen hat (wir möchten nicht jedes Mal eine neue Sitzung erstellen). Wenn nicht, führen wir die `init()`-Funktion aus, die mit der benutzerdefinierten `getSession()`-Funktion eine `LanguageModel`-Instanz generiert. Wir übergeben `getSession()` die `promptHistory`-Variable von früher, um den gespeicherten Verlauf bei der Erstellung zur Sitzung hinzuzufügen.

Wenn die Generierung erfolgreich ist, weisen wir die resultierende `LanguageModel`-Instanz der `session`-Variable zu, drucken eine Erfolgsnachricht auf das Ausgabe-`<p>` und aktivieren den Senden-`<button>` (da die Sitzung jetzt verfügbar ist, können wir beginnen, sie abzufragen).

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

Nun werfen wir einen Blick auf die `getSession()`-Funktion. Die Funktion beginnt damit, unsere gewünschten Modellanforderungen durch die `availability()`-Methode laufen zu lassen, um zu sehen, ob sie verfügbar sind:

- Wenn sie `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung auf das Ausgabe-`<p>`.
- Wenn sie `available` zurückgibt, erstellen wir eine Sitzung mit der `create()`-Methode und übergeben ihr mehrere Optionen, einschließlich `initialPrompts`, die wir auf unseren Verlauf-Parameter setzen. Dies ist das, was der Sitzung den vorherigen Eingabeaufforderungsverlauf als Kontext nach jedem Seitenladen gibt.
- Wenn sie einen anderen Wert zurückgibt (das heißt `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber diesmal schließen wir einen `monitor` ein, der bei jedem Auslösen des [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignisses den Prozentsatz der heruntergeladenen zusätzlichen Daten auf das Ausgabe-`<p>` druckt.

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
  }
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
```

## Aktualisieren des Verlaufs nach jeder Eingabeaufforderung

Wenn das Formular gesendet wird, werden die Inhalte des `<textarea>` in einen [`prompt()`](/de/docs/Web/API/LanguageModel/prompt)-Aufruf einbezogen und das zurückgegebene Ergebnis in das Ausgabe-`<p>` aufgenommen, damit der Benutzer es sehen kann.

Der bedeutendste Teil dieses Beispiels ist, wie wir den Verlauf für später speichern – beachten Sie, wie wir nach jedem erfolgreichen Vorgang zwei Objekte an das `promptHistory`-Array anhängen, eines, das die `user`-Eingabeaufforderung und eines, das die `assistant`-Antwort darstellt, im richtigen Format für die API-Interpretation. Dann speichern wir das aktualisierte `promptHistory`, indem wir es mithilfe von {{jsxref("JSON.stringify", "stringify()")}} in den `promptHistory`-Web-Speichereintrag mit [`setItem()`](/de/docs/Web/API/Storage/setItem) konvertieren. Zu diesem Zeitpunkt aktivieren wir auch den Lösch-`<button>`, da jetzt definitiv ein Verlauf vorhanden ist, der gelöscht werden kann.

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

## Verkabelung des Löschbuttons

Wenn der Lösch-`<button>` geklickt wird, entfernen wir das `promptHistory`-Element aus dem lokalen Speicher mit [`removeItem()`](/de/docs/Web/API/Storage/removeItem). Wir laden die Seite auch mit [`Location.reload()`](/de/docs/Web/API/Location/reload) neu, um auf einfache Weise Kontinuitätsprobleme zwischen dem lokalen Speicher und der Modellsitzung zu vermeiden.

```js
deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("promptHistory");
  window.location.reload();
});
```

## Ergebnis

[Starten Sie die Demo](https://mdn.github.io/dom-examples/prompt-api-web-storage/) in einem neuen Tab, um ihre Funktionalität zu beobachten (siehe auch [den vollständigen Quellcode](https://github.com/mdn/dom-examples/tree/main/prompt-api-web-storage)). Wir konnten keine funktionierende Version dieser Demo auf der Seite bereitstellen, da MDN alle Speicherdaten löscht.

Versuchen Sie, eine Eingabeaufforderung wie "Meine Lieblingsfarbe ist Rot" abzuschicken, laden Sie dann die Seite neu und versuchen Sie, "Was ist meine Lieblingsfarbe?" einzugeben. Das Modell sollte sich an Ihr vorheriges Gespräch erinnern.

Versuchen Sie nun dasselbe, drücken Sie jedoch in der Zwischenzeit "Gespeicherte Eingabeaufforderungsverlauf löschen". Diesmal wird sich das Modell nicht an Ihr vorheriges Gespräch erinnern.
