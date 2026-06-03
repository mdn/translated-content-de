---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: ecdff1d43aa1606d354cafc6eadf4b0c33e16352
---

Injiziert ein Script in einen Zielkontext. Das Script wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu nutzen, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch die Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht erlauben, einschließlich der Leseansicht, Quelltext anzeigen, PDF-Viewer und anderen eingebauten Browser-UI-Seiten.

In Firefox und Safari kann das Fehlen von Host-Berechtigungen zu einer erfolgreichen Ausführung führen (mit den Teilergebnissen im aufgelösten Promise). In Chrome verhindert jede fehlende Berechtigung eine Ausführung (siehe [Issue 1325114](https://crbug.com/1325114)).

Die von Ihnen injizierten Scripte werden [Content-Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

Erweiterungen können keine Content-Scripts auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) ausführen. Wenn eine Erweiterung Code in einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Script im Dokument einfügen. Dieses Script enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}} Listener, der eine Möglichkeit zur Ausführung des Codes implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes auszulösen.

## Syntax

```js-nolint
let results = await browser.scripting.executeScript(
  details             // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das das zu injizierende Script beschreibt. Es enthält folgende Eigenschaften:
    - `args` {{optional_inline}}
      - : Ein Array von Argumenten, das in die Funktion eingebracht wird. Dies ist nur gültig, wenn der Parameter `func` angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `Array` von `string`. Ein Array von Pfaden der zu injizierenden JS-Dateien, relativ zum Stammverzeichnis der Erweiterung. Genau eine der Eigenschaften `files` und `func` muss angegeben sein.
    - `func` {{optional_inline}}
      - : `function`. Eine JavaScript-Funktion, die injiziert wird. Diese Funktion wird serialisiert und dann zur Injektion deserialisiert. Das bedeutet, dass alle gebundenen Parameter und der Ausführungskontext verloren gehen. Genau eine der Eigenschaften `files` und `func` muss angegeben sein.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Ob die Injektion in das Ziel so schnell wie möglich ausgelöst wird, aber nicht unbedingt vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das Script injiziert werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Script ausgeführt wird.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von `InjectionResult`-Objekten erfüllt wird, die das Ergebnis des injizierten Scripts in jedem injizierten Frame darstellen.

Das Promise wird abgelehnt, wenn die Injektion fehlschlägt, zum Beispiel wenn das Injektionsziel ungültig ist. Sobald die Skriptausführung begonnen hat, wird das Ergebnis in das Resultat aufgenommen, unabhängig davon, ob erfolgreich (als `result`) oder erfolglos (als `error`).

Jedes `InjectionResult`-Objekt hat folgende Eigenschaften:

- `documentId`
  - : `string`. Das mit der Injektion verbundene Dokument.
- `frameId`
  - : `number`. Die mit der Injektion verbundene Frame-ID.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}
  - : `any`. Wenn ein Fehler auftritt, enthält es den Wert, den das Script geworfen oder abgelehnt hat. Typischerweise ist dies ein Fehlerobjekt mit einer Nachrichteneigenschaft, aber es könnte jeder Wert sein (einschließlich primitiver Typen und undefined).

    Chrome unterstützt die Eigenschaft `error` noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Alternativ können Laufzeitfehler abgefangen werden, indem der auszuführende Code in eine try-catch-Anweisung eingewickelt wird. Nicht abgefangene Fehler werden auch in der Konsole des Ziel-Tabs gemeldet.

Das Ergebnis eines Skripts ist der Wert, der durch die letzte ausgewertete Anweisung produziert wird. Wenn die letzte Anweisung ein Promise erzeugt, ist das Ergebnis der festgelegte Wert dieses Promises. Dies ist ähnlich den Ergebnissen, die Sie sehen, wenn Sie das Script in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen (ohne jegliche `console.log()`-Ausgaben). Zum Beispiel, betrachten Sie ein Script wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnis-Array den String `"my result"` als ein Element.

Das Skriptergebnis muss ein [strukturierbarer klonbarer](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Wert in Firefox oder ein [JSON-serialisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert in Chrome sein. Der Artikel über [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) behandelt diesen Unterschied ausführlicher im Abschnitt [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

## Beispiele

Dieses Beispiel führt im aktiven Tab ein einzeiliges Code-Snippet aus:

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

Dieses Beispiel führt ein Skript aus einer Datei aus (die mit der Erweiterung gepackt ist) namens `"content-script.js"`. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird in Subframes und im Hauptdokument ausgeführt:

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
