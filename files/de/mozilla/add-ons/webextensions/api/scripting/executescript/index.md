---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: 286918035156c33cc4ed073304f4c51ab5cfacfe
---

Injiziert ein Skript in einen Zielkontext. Das Skript wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist verfügbar in Manifest V3 oder höher in Chrome und Firefox 101. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch die Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich Leseransicht, Quelltextansicht, PDF-Viewer und andere in den Browser integrierte UI-Seiten.

In Firefox und Safari kann ein teilweises Fehlen von Host-Berechtigungen zu einer erfolgreichen Ausführung führen (mit den Teilergebnissen im gelösten Promise). In Chrome verhindert jede fehlende Berechtigung die Ausführung vollständig (siehe [Issue 1325114](https://crbug.com/1325114)).

Die Skripte, die Sie injizieren, werden [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

Erweiterungen können keine Inhalts-Skripte in [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) ausführen. Wenn eine Erweiterung Code auf einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript in das Dokument aufnehmen. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der eine Möglichkeit zur Codeausführung implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes zu starten.

## Syntax

```js-nolint
let results = await browser.scripting.executeScript(
  details             // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das das zu injizierende Skript beschreibt. Es enthält diese Eigenschaften:
    - `args` {{optional_inline}}
      - : Ein Array von Argumenten, die in die Funktion übernommen werden sollen. Dies ist nur gültig, wenn der Parameter `func` angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden zu den zu injizierenden JS-Dateien, relativ zum Stammverzeichnis der Erweiterung. Genau eines von `files` und `func` muss angegeben werden.
    - `func` {{optional_inline}}
      - : `function`. Eine zu injizierende JavaScript-Funktion. Diese Funktion wird serialisiert und dann zur Injektion deserialisiert. Das bedeutet, dass alle gebundenen Parameter und Ausführungskontexte verloren gehen. Genau eines von `files` und `func` muss angegeben werden.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Ob die Injektion in das Ziel so schnell wie möglich ausgelöst wird, jedoch nicht unbedingt vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel für das Skript beschreiben.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt wird.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von `InjectionResult`-Objekten erfüllt wird, welche das Ergebnis des injizierten Skripts in jedem injizierten Frame repräsentieren.

Das Promise wird abgelehnt, wenn die Injektion fehlschlägt, beispielsweise wenn das Injektionsziel ungültig ist. Wenn die Skriptausführung begonnen hat, ist ihr Ergebnis im Ergebnis enthalten, sowohl bei erfolgreicher (als `result`) als auch bei erfolgloser (als `error`) Ausführung.

Jedes `InjectionResult`-Objekt hat diese Eigenschaften:

- `frameId`
  - : `number`. Die Frame-ID, die der Injektion zugeordnet ist.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}
  - : `any`. Tritt ein Fehler auf, enthält er den Wert, mit dem das Skript eine Ausnahme ausgelöst oder abgelehnt hat. Typischerweise ist dies ein Fehlerobjekt mit einer Nachrichten-Eigenschaft, aber es könnte jeder Wert sein (einschließlich primitiver Typen und undefined).

    Chrome unterstützt die `error`-Eigenschaft noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Alternativ können Laufzeitfehler abgefangen werden, indem der Code zur Ausführung in einer try-catch-Anweisung umschlossen wird. Ungefangene Fehler werden ebenfalls an die Konsole des Ziel-Tabs gemeldet.

Das Ergebnis eines Skripts ist der Wert, der durch die letzte ausgewertete Anweisung produziert wird. Wenn die letzte Anweisung ein Promise erzeugt, ist das Ergebnis der erfüllte Wert dieses Promise. Dies ähnelt den Ergebnissen, die Sie sehen würden, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen (ohne jegliche `console.log()` Ausgaben). Betrachten Sie zum Beispiel ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnis-Array die Zeichenkette `"my result"` als Element.

Das Skriptergebnis muss ein [strukturiert klonbarer](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Wert in Firefox oder ein [JSON-serisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert in Chrome sein. Der [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) Artikel behandelt diesen Unterschied ausführlicher im Abschnitt [Datenklonierungsalgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

## Beispiele

Dieses Beispiel führt einen Einzeilen-Codeausschnitt im aktiven Tab aus:

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

Dieses Beispiel führt ein Skript aus einer Datei aus (mit der Erweiterung gepackt) namens `"content-script.js"`. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird in Subframes und im Hauptdokument ausgeführt:

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
