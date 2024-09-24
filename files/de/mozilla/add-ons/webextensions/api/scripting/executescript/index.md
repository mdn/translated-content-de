---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt ein Skript in einen Zielkontext ein. Das Skript wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die Berechtigung `"scripting"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und Berechtigung für die URL des Ziels besitzen, entweder explizit als [host permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mit der [activeTab permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, darunter Leseransicht, Quelltextansicht und PDF-Anzeigeseiten.

In Firefox und Safari kann der teilweise Mangel an Host-Berechtigungen zu einer erfolgreichen Ausführung führen (mit den Teilergebnissen im aufgelösten Promise). In Chrome verhindert jede fehlende Berechtigung, dass eine Ausführung stattfindet (siehe [Issue 1325114](https://crbug.com/1325114)).

Die von Ihnen eingefügten Skripte werden [content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let results = await browser.scripting.executeScript(
  details             // object
)
```

### Parameter

- `details`

  - : Ein Objekt, das das einzufügende Skript beschreibt. Es enthält diese Eigenschaften:

    - `args` {{optional_inline}}
      - : Ein Array von Argumenten, die in die Funktion übergeben werden sollen. Dies ist nur gültig, wenn der `func`-Parameter angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden der zu injizierenden JS-Dateien, relativ zum Stammverzeichnis der Erweiterung. Genau eines von `files` und `func` muss angegeben werden.
    - `func` {{optional_inline}}
      - : `function`. Eine zu injizierende JavaScript-Funktion. Diese Funktion wird serialisiert und dann zur Injektion deserialisiert. Dies bedeutet, dass alle gebundenen Parameter und der Ausführungskontext verloren gehen. Genau eines von `files` und `func` muss angegeben werden.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Ob die Injektion in das Ziel so schnell wie möglich ausgelöst wird, aber nicht unbedingt vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel für die Skriptinjektion angeben.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `InjectionResult`-Objekten erfüllt wird. Diese Objekte repräsentieren das Ergebnis des injizierten Skripts in jedem injizierten Frame.

Das Promise wird abgelehnt, wenn die Injektion fehlschlägt, etwa wenn das Injektionsziel ungültig ist. Wenn die Skriptausführung begonnen hat, ist das Ergebnis im Resultat enthalten, unabhängig davon, ob es erfolgreich war (`result`) oder nicht (`error`).

Jedes `InjectionResult`-Objekt hat diese Eigenschaften:

- `frameId`
  - : `number`. Die mit der Injektion verknüpfte Frame-ID.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}

  - : `any`. Wenn ein Fehler auftritt, enthält es den Wert, den das Skript ausgelöst oder mit dem es abgelehnt wurde. Typischerweise ist dies ein Fehlerobjekt mit einer Nachrichten-Eigenschaft, es könnte jedoch jeder Wert sein (einschließlich Primitiva und undefined).

    Chrome unterstützt die `error`-Eigenschaft noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Als Alternative können Laufzeitfehler durch Einwickeln des auszuführenden Codes in eine try-catch-Anweisung abgefangen werden. Nicht abgefangene Fehler werden ebenfalls an die Konsole des Ziel-Tabs gemeldet.

Das Ergebnis des Skripts ist die zuletzt ausgewertete Anweisung, was den Ergebnissen ähnelt, die Sie sehen würden, wenn Sie das Skript in der [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgeführt hätten (nicht jede `console.log()`-Ausgabe). Beispielsweise enthält das Ergebnisarray bei einem Skript wie diesem den String "`my result`" als Element.

Das Skriptergebnis muss ein [structured cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Wert in Firefox oder ein [JSON-serialisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert in Chrome sein. Der Artikel [Chrome incompatibilities](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) diskutiert diesen Unterschied ausführlicher im Abschnitt [Data cloning algorithm](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

## Beispiele

Dieses Beispiel führt ein einzeiliges Codeschnipsel im aktiven Tab aus:

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

Dieses Beispiel führt ein Skript aus einer Datei aus (die mit der Erweiterung verpackt ist), die `"content-script.js"` heißt. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird in Unterrahmen und im Hauptdokument ausgeführt:

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
