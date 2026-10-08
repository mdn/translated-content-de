---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Fügt ein Skript in einen Zielkontext ein. Das Skript wird standardmäßig bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Chrome und ab Firefox 101 mit Manifest V3 oder höher verfügbar. In Safari und ab Firefox 102 ist sie auch mit Manifest V2 verfügbar.

Um diese API zu verwenden, benötigen Sie die [`scripting`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und eine Berechtigung für die URL des Ziels – entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder über die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

In Firefox und Safari kann die Ausführung auch dann erfolgreich sein, wenn Host-Berechtigungen teilweise fehlen. Das aufgelöste Promise enthält dann Teilergebnisse. In Chrome verhindert jede fehlende Berechtigung die Ausführung vollständig (siehe [Issue 1325114](https://crbug.com/1325114)).

Die eingefügten Skripte werden als [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) bezeichnet.

Erweiterungen können Content-Skripte nicht auf [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) ausführen. Wenn eine Erweiterung Code dynamisch auf einer Erweiterungsseite ausführen möchte, kann sie ein Skript in das Dokument einbinden. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, über den sich der Code ausführen lässt. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung auszulösen.

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
      - : `array` von `string`. Ein Array mit Pfaden zu den einzufügenden JS-Dateien, relativ zum Stammverzeichnis der Erweiterung. Genau eine der Eigenschaften `files` und `func` muss angegeben werden.
    - `func` {{optional_inline}}
      - : `function`. Eine einzufügende JavaScript-Funktion. Diese Funktion wird zur Einfügung serialisiert und anschließend deserialisiert. Dabei gehen gebundene Parameter und der Ausführungskontext verloren. Genau eine der Eigenschaften `files` und `func` muss angegeben werden.

        Die Funktion wird anhand ihres Quelltexts serialisiert, der ein gültiger Funktionsausdruck sein muss. Verwenden Sie eine Funktionsdeklaration, einen Funktionsausdruck oder eine Pfeilfunktion. Eine mit [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) definierte Funktion, etwa `method() {}` in einem Objektliteral oder einer Klasse, lässt sich nicht als gültiger Funktionsausdruck serialisieren und kann daher nicht ausgeführt werden. Firefox gibt einen `SyntaxError` in der Eigenschaft `error` des `InjectionResult` zurück, während Chrome den Fehler nur in der Konsole des Ziel-Tabs meldet.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Einfügung in das Ziel so früh wie möglich ausgelöst wird, jedoch nicht unbedingt vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Angaben zum Ziel, in das das Skript eingefügt werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung des Skripts.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von `InjectionResult`-Objekten erfüllt wird. Diese enthalten das Ergebnis des eingefügten Skripts in jedem Frame, in den es eingefügt wurde.

Das Promise wird zurückgewiesen, wenn die Einfügung fehlschlägt, beispielsweise weil das Ziel ungültig ist. Sobald die Einfügung begonnen hat, wird das Promise auch dann erfüllt, wenn das Skript nicht geparst werden kann oder einen Fehler auslöst. In diesem Fall enthält das `InjectionResult` des betreffenden Frames den Fehler in seiner Eigenschaft `error` statt eines `result`. Um alle Fehler zu behandeln, fangen Sie das zurückgewiesene Promise ab und prüfen Sie die Eigenschaft `error` jedes Ergebnisses.

Jedes `InjectionResult`-Objekt hat die folgenden Eigenschaften:

- `documentId`
  - : `string`. Das Dokument, das der Einfügung zugeordnet ist. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `frameId`
  - : `number`. Die Frame-ID, die der Einfügung zugeordnet ist.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}
  - : `any`. Wenn ein Fehler auftritt, enthält diese Eigenschaft den Wert, den das Skript ausgelöst oder mit dem es das Promise zurückgewiesen hat. Üblicherweise ist dies ein Fehlerobjekt mit einer Nachrichten-Eigenschaft, es kann aber ein beliebiger Wert sein (einschließlich primitiver Werte und undefined).

    Chrome unterstützt die Eigenschaft `error` noch nicht (siehe [Issue 1271527: Fehler von scripting.executeScript an InjectionResult weitergeben](https://crbug.com/1271527)). Alternativ können Laufzeitfehler abgefangen werden, indem Sie den auszuführenden Code in eine try-catch-Anweisung einschließen. Nicht abgefangene Fehler werden außerdem in der Konsole des Ziel-Tabs gemeldet.

Das Ergebnis eines Skripts ist der Wert, den die zuletzt ausgewertete Anweisung erzeugt. Wenn die letzte Anweisung ein Promise erzeugt, ist das Ergebnis der Wert, mit dem dieses Promise abgeschlossen wurde. Das ist vergleichbar mit den Ergebnissen, die Sie bei der Ausführung des Skripts in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) sehen (ohne Ausgaben von `console.log()`). Betrachten Sie beispielsweise ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisarray den String `"my result"` als Element.

Das Skriptergebnis muss in Firefox ein Wert sein, der sich mit dem [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) klonen lässt, und in Chrome ein [JSON-serialisierbarer](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert. Der Artikel [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) erläutert diesen Unterschied ausführlicher im Abschnitt [Algorithmus zum Klonen von Daten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

## Beispiele

Dieses Beispiel führt ein einzeiliges Codefragment im aktiven Tab aus. Es fängt die Zurückweisung des Promise ab, die bei einer fehlgeschlagenen Einfügung auftritt, und prüft jedes Ergebnis auf einen Fehler bei der Skriptausführung:

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

Dieses Beispiel führt ein Skript aus einer Datei namens `"content-script.js"` aus, die mit der Erweiterung ausgeliefert wird. Das Skript wird im aktiven Tab sowohl in Unterframes als auch im Hauptdokument ausgeführt:

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
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-executeScript)-API.
