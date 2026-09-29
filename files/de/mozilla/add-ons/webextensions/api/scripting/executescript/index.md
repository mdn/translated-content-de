---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: 0a0556fc248b29bb40b84a0635bdf72ee1885d60
---

Fügt ein Skript in einen Zielkontext ein. Das Skript wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und ab Firefox 101 verfügbar. In Safari und ab Firefox 102 ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, benötigen Sie die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"scripting"` und eine Berechtigung für die URL des Ziels – entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder über die [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, darunter die Leseansicht, die Quelltextansicht, der PDF-Viewer und andere integrierte Seiten der Browseroberfläche.

In Firefox und Safari kann die Ausführung erfolgreich sein, auch wenn Host-Berechtigungen teilweise fehlen (die aufgelöste Promise enthält dann Teilergebnisse). In Chrome verhindert jede fehlende Berechtigung die Ausführung vollständig (siehe [Issue 1325114](https://crbug.com/1325114)).

Die eingefügten Skripte werden [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

Erweiterungen können keine Content-Skripte auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) ausführen. Wenn eine Erweiterung Code auf einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript in das Dokument einbinden. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der eine Möglichkeit zur Ausführung des Codes bereitstellt. Anschließend kann die Erweiterung eine Nachricht an den Listener senden, um die Ausführung des Codes auszulösen.

## Syntax

```js-nolint
let results = await browser.scripting.executeScript(
  details             // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das das einzufügende Skript beschreibt. Es enthält die folgenden Eigenschaften:
    - `args` {{optional_inline}}
      - : Ein Array von Argumenten, die an die Funktion übergeben werden. Dies ist nur gültig, wenn der Parameter `func` angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden zu den einzufügenden JS-Dateien, relativ zum Stammverzeichnis der Erweiterung. Genau eines von `files` und `func` muss angegeben werden.
    - `func` {{optional_inline}}
      - : `function`. Eine einzufügende JavaScript-Funktion. Diese Funktion wird für das Einfügen serialisiert und anschließend deserialisiert. Dadurch gehen gebundene Parameter und der Ausführungskontext verloren. Genau eines von `files` und `func` muss angegeben werden.

        Die Funktion wird anhand ihres Quelltexts serialisiert, der ein gültiger Funktionsausdruck sein muss. Verwenden Sie eine Funktionsdeklaration, einen Funktionsausdruck oder eine Pfeilfunktion. Eine Funktion, die mit [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definiert ist, beispielsweise `method() {}` in einem Objektliteral oder einer Klasse, lässt sich nicht zu einem gültigen Funktionsausdruck serialisieren und kann daher nicht ausgeführt werden. Firefox gibt einen `SyntaxError` in der Eigenschaft `error` des `InjectionResult` zurück, während Chrome den Fehler nur in der Konsole des Ziel-Tabs meldet.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Gibt an, ob das Einfügen in das Ziel so früh wie möglich ausgelöst wird, jedoch nicht unbedingt vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Angaben zum Ziel, in das das Skript eingefügt werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung für das Skript.

### Rückgabewert

Eine {{JSxRef("Promise")}}, die mit einem Array von `InjectionResult`-Objekten erfüllt wird. Diese Objekte stellen das Ergebnis des eingefügten Skripts in jedem Frame dar, in den es eingefügt wurde.

Die Promise wird zurückgewiesen, wenn das Einfügen fehlschlägt, etwa weil das Einfügeziel ungültig ist. Nachdem das Einfügen begonnen hat, wird die Promise auch dann erfüllt, wenn das Skript nicht geparst werden kann oder einen Fehler auslöst. In diesem Fall enthält das `InjectionResult` für den Frame den Fehler in seiner Eigenschaft `error` statt eines `result`. Um alle Fehler zu behandeln, fangen Sie die zurückgewiesene Promise ab und prüfen Sie die Eigenschaft `error` jedes Ergebnisses.

Jedes `InjectionResult`-Objekt hat die folgenden Eigenschaften:

- `documentId`
  - : `string`. Das Dokument, das dem Einfügen zugeordnet ist. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `frameId`
  - : `number`. Die Frame-ID, die dem Einfügen zugeordnet ist.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}
  - : `any`. Wenn ein Fehler auftritt, enthält diese Eigenschaft den Wert, den das Skript ausgelöst oder mit dem es eine Promise zurückgewiesen hat. Üblicherweise ist dies ein Fehlerobjekt mit einer Eigenschaft `message`; es kann jedoch ein beliebiger Wert sein (einschließlich primitiver Werte und `undefined`).

    Chrome unterstützt die Eigenschaft `error` noch nicht (siehe [Issue 1271527: Fehler von scripting.executeScript an InjectionResult weitergeben](https://crbug.com/1271527)). Alternativ können Laufzeitfehler abgefangen werden, indem der auszuführende Code in eine try-catch-Anweisung eingeschlossen wird. Nicht abgefangene Fehler werden außerdem in der Konsole des Ziel-Tabs gemeldet.

Das Ergebnis eines Skripts ist der Wert, den die zuletzt ausgewertete Anweisung erzeugt. Wenn die letzte Anweisung eine Promise erzeugt, ist das Ergebnis der Wert, mit dem diese Promise abgeschlossen wurde. Dies ähnelt den Ergebnissen, die Sie bei der Ausführung des Skripts in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) sehen (ohne Ausgaben von `console.log()`). Betrachten Sie beispielsweise ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisarray den String `"my result"` als Element.

Das Skriptergebnis muss in Firefox ein Wert sein, der durch [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kopiert werden kann, oder in Chrome ein [JSON-serialisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert. Der Artikel [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) erläutert diesen Unterschied ausführlicher im Abschnitt [Algorithmus zum Klonen von Daten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

## Beispiele

Dieses Beispiel führt einen einzeiligen Codeausschnitt im aktiven Tab aus. Es fängt die Zurückweisung der Promise ab, die auftritt, wenn das Einfügen fehlschlägt, und prüft jedes Ergebnis auf einen Fehler bei der Skriptausführung:

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    const results = await browser.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      func: () => {
        document.body.style.border = "5px solid green";
      },
    });
    for (const { frameId, error } of results) {
      if (error) {
        console.error(`script failed in frame ${frameId}: ${error}`);
      }
    }
  } catch (err) {
    console.error(`failed to execute script: ${err}`);
  }
});
```

Dieses Beispiel führt ein Skript aus einer mit der Erweiterung ausgelieferten Datei namens `"content-script.js"` aus. Das Skript wird im aktiven Tab ausgeführt, und zwar sowohl in Unterframes als auch im Hauptdokument:

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
> Diese API basiert auf der API [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-executeScript) von Chromium.
