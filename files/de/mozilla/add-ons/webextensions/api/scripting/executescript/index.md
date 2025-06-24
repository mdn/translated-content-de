---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Fügt ein Skript in einen Zielkontext ein. Das Skript wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu nutzen, müssen Sie die Berechtigung `"scripting"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels haben, entweder explizit als [host permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch die Nutzung der [activeTab permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich Leseansicht, Seitenquellenansicht und PDF-Viewer-Seiten.

In Firefox und Safari kann das teilweise Fehlen von Host-Berechtigungen zu einer erfolgreichen Ausführung führen (mit den Teilergebnissen im gelösten Promise). In Chrome verhindert jede fehlende Berechtigung jegliche Ausführung (siehe [Issue 1325114](https://crbug.com/1325114)).

Die Skripte, die Sie einfügen, werden [content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

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
      - : Ein Array von Argumenten, die in die Funktion übergeben werden. Dies ist nur gültig, wenn der Parameter `func` angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden der JS-Dateien, die eingefügt werden sollen, relativ zum Stammverzeichnis der Erweiterung. Es muss entweder `files` oder `func` angegeben werden.
    - `func` {{optional_inline}}
      - : `function`. Eine JavaScript-Funktion, die eingefügt werden soll. Diese Funktion wird serialisiert und dann zur Injektion deserialisiert. Dies bedeutet, dass alle gebundenen Parameter und der Ausführungskontext verloren gehen. Es muss entweder `files` oder `func` angegeben werden.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Ob die Injektion in das Ziel so schnell wie möglich ausgelöst wird, aber nicht notwendigerweise vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel spezifizieren, in das das Skript eingefügt werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung für ein Skript.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `InjectionResult`-Objekten erfüllt wird, die das Ergebnis des eingefügten Skripts in jedem eingefügten Frame repräsentieren.

Das Promise wird abgelehnt, wenn die Injektion fehlschlägt, zum Beispiel wenn das Injektionsziel ungültig ist. Wenn die Skriptausführung gestartet wurde, ist ihr Ergebnis im Resultat enthalten, ob erfolgreich (als `result`) oder erfolglos (als `error`).

Jedes `InjectionResult`-Objekt hat die folgenden Eigenschaften:

- `frameId`
  - : `number`. Die Frame-ID, die mit der Injektion verbunden ist.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}

  - : `any`. Falls ein Fehler auftritt, enthält es den Wert, den das Skript ausgelöst oder abgelehnt hat. Typischerweise ist dies ein Fehlerobjekt mit einer Nachrichteneigenschaft, aber es könnte jeder Wert sein (einschließlich primitiver und undefinierter Werte).

    Chrome unterstützt die `error`-Eigenschaft noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Als Alternative können Laufzeitfehler abgefangen werden, indem der ausführende Code in eine try-catch-Anweisung eingebettet wird. Nicht abgefangene Fehler werden ebenfalls in die Konsole des Ziel-Tabs gemeldet.

Das Ergebnis des Skripts ist die zuletzt ausgewertete Anweisung, ähnlich den Ergebnissen, die Sie sehen würden, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen (nicht die Ausgabe von `console.log()`). Zum Beispiel, betrachten Sie ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisarray den String `"my result"` als Element.

Das Skriptergebnis muss in Firefox ein [structured cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Wert oder in Chrome ein [JSON-serializable](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert sein. Der Artikel [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) behandelt diesen Unterschied ausführlicher im Abschnitt [Data cloning algorithm](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

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

Dieses Beispiel führt ein Skript aus einer Datei aus (im Paket mit der Erweiterung), die `"content-script.js"` genannt wird. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird in Unterrahmen und im Hauptdokument ausgeführt:

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
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-executeScript) API.
