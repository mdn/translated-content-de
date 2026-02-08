---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: 7fd5e7863b76b61680f5cde1114b73e65a369809
---

Fügt ein Skript in einen Zielkontext ein. Das Skript wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Chrome und Firefox 101 in Manifest V3 oder höher verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu nutzen, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels haben, entweder explizit als [Hosting-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mit der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich Leseansicht, Quellcodeansicht und PDF-Viewer-Seiten.

In Firefox und Safari kann ein teilweises Fehlen von Host-Berechtigungen zu einer erfolgreichen Ausführung führen (mit den Teilergebnissen im aufgelösten Versprechen). In Chrome verhindert jede fehlende Berechtigung jegliche Ausführung (siehe [Issue 1325114](https://crbug.com/1325114)).

Die von Ihnen eingefügten Skripte werden [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

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
      - : Ein Array von Argumenten, die in die Funktion übergeben werden. Dies ist nur gültig, wenn der `func` Parameter angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden der JavaScript-Dateien, die eingefügt werden sollen, relativ zum Wurzelverzeichnis der Erweiterung. Genau eines von `files` und `func` muss angegeben werden.
    - `func` {{optional_inline}}
      - : `function`. Eine in JavaScript geschriebene Funktion, die eingefügt werden soll. Diese Funktion wird serialisiert und dann zur Injektion deserialisiert. Dies bedeutet, dass alle gebundenen Parameter und der Ausführungskontext verloren gehen. Genau eines von `files` und `func` muss angegeben werden.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Ob die Injektion in das Ziel so schnell wie möglich ausgelöst wird, aber nicht notwendigerweise vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das Skript eingefügt werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von `InjectionResult`-Objekten erfüllt wird, die das Ergebnis des eingefügten Skripts in jedem eingefügten Frame darstellen.

Das Versprechen wird abgelehnt, wenn die Injektion fehlschlägt, beispielsweise wenn das Injektionsziel ungültig ist. Wenn die Skriptausführung begonnen hat, ist das Ergebnis in dem Ergebnis enthalten, ob erfolgreich (als `result`) oder nicht erfolgreich (als `error`).

Jedes `InjectionResult`-Objekt hat folgende Eigenschaften:

- `frameId`
  - : `number`. Die Frame-ID, die mit der Injektion verbunden ist.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}
  - : `any`. Wenn ein Fehler auftritt, enthält es den Wert, den das Skript geworfen oder abgelehnt hat. Typischerweise ist dies ein Fehlerobjekt mit einer Nachrichteneigenschaft, aber es könnte jeder Wert sein (einschließlich Primitiven und undefined).

    Chrome unterstützt die `error`-Eigenschaft noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Als Alternative können Laufzeitfehler abgefangen werden, indem der auszuführende Code in einer try-catch-Anweisung umschlossen wird. Nicht abgefangene Fehler werden auch der Konsole des Ziel-Tabs gemeldet.

Das Ergebnis eines Skripts ist der Wert, der durch die letzte ausgewertete Anweisung erzeugt wird. Wenn die letzte Anweisung ein Versprechen erzeugt, ist das Ergebnis der abgewickelte Wert dieses Versprechens. Dies ist ähnlich wie die Ergebnisse, die Sie sehen, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen (ohne jegliche `console.log()` Ausgabe). Zum Beispiel wird ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisarray den String `"my result"` als Element.

Das Skriptergebnis muss ein [strukturierter, klonbarer](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Wert in Firefox oder ein [JSON-serialisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert in Chrome sein. Der Artikel zu [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) diskutiert diesen Unterschied ausführlicher im Abschnitt [Datenklonierungsalgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

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
