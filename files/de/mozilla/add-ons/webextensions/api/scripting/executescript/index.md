---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Injiziert ein Skript in einen Zielkontext. Das Skript wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die Berechtigung `"scripting"` [besitzen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie die Berechtigung für die Ziel-URL, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mithilfe der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht erlauben, einschließlich Leseansicht, Quelltextansicht und PDF-Viewer-Seiten.

In Firefox und Safari kann der teilweise Mangel an Host-Berechtigungen zu einer erfolgreichen Ausführung (mit den Teilresultaten im aufgelösten Promise) führen. In Chrome verhindert jede fehlende Berechtigung eine jegliche Ausführung (siehe [Issue 1325114](https://crbug.com/1325114)).

Die Skripte, die Sie injizieren, werden [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

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
      - : Ein Array von Argumenten, die in die Funktion übergeben werden. Dies ist nur gültig, wenn der Parameter `func` angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden der zu injizierenden JS-Dateien, relativ zum Stammverzeichnis der Erweiterung. Genau eine von `files` und `func` muss angegeben sein.
    - `func` {{optional_inline}}
      - : `function`. Eine JavaScript-Funktion, die injiziert werden soll. Diese Funktion wird serialisiert und dann zur Injektion deserialisiert. Dies bedeutet, dass alle gebundenen Parameter und Ausführungskontexte verloren gehen. Genau eine von `files` und `func` muss angegeben sein.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Ob die Injektion in das Ziel so schnell wie möglich ausgelöst wird, jedoch nicht notwendigerweise vor dem Seitenladen.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das Skript injiziert werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `InjectionResult`-Objekten erfüllt wird, die das Ergebnis des injizierten Skripts in jedem injizierten Frame repräsentieren.

Das Promise wird abgelehnt, wenn die Injektion fehlschlägt, zum Beispiel wenn das Injektionsziel ungültig ist. Wenn die Skriptausführung begonnen hat, ist das Ergebnis inklusive, unabhängig davon, ob es erfolgreich (als `result`) oder erfolglos (als `error`) war.

Jedes `InjectionResult`-Objekt hat folgende Eigenschaften:

- `frameId`
  - : `number`. Die Frame-ID, die mit der Injektion verknüpft ist.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}
  - : `any`. Wenn ein Fehler auftritt, enthält es den Wert, den das Skript geworfen oder abgelehnt hat. Typischerweise ist dies ein Fehlerobjekt mit einer Nachrichten-Eigenschaft, aber es könnte jeder Wert sein (einschließlich primitiver Werte und undefined).

    Chrome unterstützt die `error`-Eigenschaft noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Als Alternative können Laufzeitfehler abgefangen werden, indem der auszuführende Code in eine try-catch-Anweisung eingeschlossen wird. Nicht abgefangene Fehler werden auch in der Konsole des Ziel-Tabs gemeldet.

Das Ergebnis des Skripts ist die letzte ausgewertete Anweisung, was den Ergebnissen ähnelt, die Sie sehen würden, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgeführt hätten (nicht die Ausgabe eines `console.log()`). Zum Beispiel, betrachten Sie ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnis-Array den String `"my result"` als ein Element.

Das Skriptergebnis muss in Firefox ein [structured cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Wert oder in Chrome ein [JSON-serialisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert sein. Der Artikel [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) diskutiert diesen Unterschied ausführlicher in dem Abschnitt [Datenkopieralgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

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

Dieses Beispiel führt ein Skript aus einer Datei (mit der Erweiterung gepackt) namens `"content-script.js"` aus. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird in Unterressourcen und im Hauptdokument ausgeführt:

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
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-executeScript)-API von Chromium.
