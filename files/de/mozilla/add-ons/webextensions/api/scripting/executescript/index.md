---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

Fügt ein Skript in einen Zielkontext ein. Das Skript wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie eine Berechtigung für die URL des Ziels haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mit der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich Leseansicht, Quelltextansicht und PDF-Viewer-Seiten.

In Firefox und Safari kann ein teilweiser Mangel an Host-Berechtigungen zu einer erfolgreichen Ausführung führen (mit den Teilergebnissen im gelösten Promise). In Chrome verhindert jede fehlende Berechtigung, dass eine Ausführung stattfindet (siehe [Issue 1325114](https://crbug.com/1325114)).

Die Skripte, die Sie einfügen, werden [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let results = await browser.scripting.executeScript(
  details             // object
)
```

### Parameter

- `details`

  - : Ein Objekt, das das einzufügende Skript beschreibt. Es enthält folgende Eigenschaften:

    - `args` {{optional_inline}}
      - : Ein Array von Argumenten, die in die Funktion übergeben werden. Dies ist nur gültig, wenn der `func`-Parameter angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden der einzufügenden JS-Dateien relativ zum Stammverzeichnis der Erweiterung. Genau eine von `files` und `func` muss angegeben werden.
    - `func` {{optional_inline}}
      - : `function`. Eine JavaScript-Funktion, die eingefügt werden soll. Diese Funktion wird serialisiert und dann zum Einfügen deserialisiert. Das bedeutet, dass gebundene Parameter und der Ausführungskontext verloren gehen. Genau eine von `files` und `func` muss angegeben werden.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Ob die Einfügung ins Ziel so schnell wie möglich ausgelöst wird, aber nicht unbedingt vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel spezifizieren, in das das Skript eingefügt werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung für ein Skript, in der es ausgeführt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `InjectionResult`-Objekten erfüllt wird, die das Ergebnis des eingefügten Skripts in jedem eingefügten Frame darstellen.

Das Promise wird abgelehnt, wenn die Einfügung fehlschlägt, z. B. wenn das Einfügungsziel ungültig ist. Wenn die Skriptausführung begonnen hat, ist ihr Ergebnis im Ergebnis enthalten, ob erfolgreich (als `result`) oder erfolglos (als `error`).

Jedes `InjectionResult`-Objekt hat folgende Eigenschaften:

- `frameId`
  - : `number`. Die Frame-ID, die mit der Einfügung verknüpft ist.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}

  - : `any`. Wenn ein Fehler auftritt, enthält es den Wert, den das Skript geworfen oder mit dem es abgelehnt wurde. Typischerweise ist dies ein Fehlerobjekt mit einer Nachrichteneigenschaft, aber es könnte jeder Wert sein (einschließlich primitiver Werte und undefined).

    Chrome unterstützt die `error`-Eigenschaft noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Als Alternative können Laufzeitfehler abgefangen werden, indem der auszuführende Code in einer try-catch-Anweisung gewrappt wird. Nicht abgefangene Fehler werden auch in der Konsole des Ziel-Tabs gemeldet.

Das Ergebnis des Skripts ist die zuletzt ausgewertete Anweisung, was den Ergebnissen ähnelt, die Sie erhalten würden, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen (nicht die Ausgabe von `console.log()`). Zum Beispiel, betrachten Sie ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisse-Array die Zeichenkette `"my result"` als Element.

Das Skriptergebnis muss in Firefox ein [strukturiert kopierbarer](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Wert oder in Chrome ein [JSON-serialisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert sein. Der Artikel [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) behandelt diesen Unterschied ausführlicher im Abschnitt [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

## Beispiele

Dieses Beispiel führt einen einzeiligen Code-Snippet im aktiven Tab aus:

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      func: () => {
        document.body.style.border = "5px solid green";
      },
    });
  } catch (err) {
    console.error(`failed to execute script: ${err}`);
  }
});
```

Dieses Beispiel führt ein Skript aus einer Datei aus (die mit der Erweiterung verpackt ist) namens `"content-script.js"`. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird in Unterrahmen und dem Hauptdokument ausgeführt:

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.executeScript({
      target: {
        tabId: tab.id,
        allFrames: true,
      },
      files: ["content-script.js"],
    });
  } catch (err) {
    console.error(`failed to execute script: ${err}`);
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-executeScript) API von Chromium.
