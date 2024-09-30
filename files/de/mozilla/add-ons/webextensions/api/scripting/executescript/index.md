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

Um diese API zu verwenden, müssen Sie die Berechtigung `"scripting"` sowie die Berechtigung für die URL des Ziels haben, entweder als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mit der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich Leseransicht, Quelltextanzeige und PDF-Viewer-Seiten.

In Firefox und Safari kann bei teilweiser fehlender Host-Berechtigung eine erfolgreiche Ausführung (mit den Teilergebnissen im aufgelösten Promise) erfolgen. In Chrome verhindert jede fehlende Berechtigung jegliche Ausführung (siehe [Issue 1325114](https://crbug.com/1325114)).

Die Skripte, die Sie injizieren, werden [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let results = await browser.scripting.executeScript(
  details             // object
)
```

### Parameter

- `details`

  - : Ein Objekt, das das zu injizierende Skript beschreibt. Es enthält folgende Eigenschaften:

    - `args` {{optional_inline}}
      - : Ein Array von Argumenten, das in die Funktion überführt werden soll. Dies ist nur gültig, wenn der Parameter `func` angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden zu den einzufügenden JS-Dateien, relativ zum Stammverzeichnis der Erweiterung. Es muss genau eines von `files` und `func` angegeben werden.
    - `func` {{optional_inline}}
      - : `function`. Eine JavaScript-Funktion, die eingefügt werden soll. Diese Funktion wird serialisiert und dann zur Injektion deserialisiert. Dies bedeutet, dass alle gebundenen Parameter und der Ausführungskontext verloren gehen. Es muss genau eines von `files` und `func` angegeben werden.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Injektion in das Ziel so schnell wie möglich ausgelöst wird, aber nicht unbedingt vor dem Seitenladen.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel spezifizieren, in das das Skript injiziert werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `InjectionResult`-Objekten erfüllt wird, welche das Ergebnis des injizierten Skripts in jedem injizierten Frame darstellen.

Das Promise wird abgelehnt, wenn die Injektion fehlschlägt, z. B. wenn das Injektionsziel ungültig ist. Wenn die Skriptausführung begonnen hat, wird ihr Ergebnis im Ergebnis eingeschlossen, unabhängig davon, ob sie erfolgreich war (als `result`) oder nicht erfolgreich (als `error`).

Jedes `InjectionResult`-Objekt hat folgende Eigenschaften:

- `frameId`
  - : `number`. Die Frame-ID, die mit der Injektion verbunden ist.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}

  - : `any`. Wenn ein Fehler auftritt, enthält es den Wert, den das Skript geworfen oder mit dem es abgelehnt wurde. In der Regel handelt es sich um ein Fehlerobjekt mit einer Nachrichten-Eigenschaft, aber es könnte jeder Wert sein (einschließlich einfacher Datentypen und `undefined`).

    Chrome unterstützt die `error`-Eigenschaft noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Als Alternative können Laufzeitfehler abgefangen werden, indem der auszuführende Code in eine try-catch-Anweisung gewickelt wird. Nicht abgefangene Fehler werden auch in der Konsole des Ziel-Tabs gemeldet.

Das Ergebnis des Skripts ist die zuletzt ausgewertete Anweisung, was den Ergebnissen ähnelt, die Sie sehen würden, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen (nicht jede `console.log()` Ausgabe). Betrachten Sie zum Beispiel ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisse-Array die Zeichenkette "`my result`" als Element.

Das Ergebnis des Skripts muss ein [strukturiert klonbarer](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Wert in Firefox oder ein [JSON-serialisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert in Chrome sein. Der Artikel über [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) diskutiert diesen Unterschied ausführlicher im Abschnitt [Daten-Klonierungsalgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

## Beispiele

Dieses Beispiel führt ein einzeiliges Code-Snippet im aktiven Tab aus:

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

Dieses Beispiel führt ein Skript aus einer Datei (im Erweiterungspaket enthalten) namens `"content-script.js"` aus. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird in Unterfenstern und im Hauptdokument ausgeführt:

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
