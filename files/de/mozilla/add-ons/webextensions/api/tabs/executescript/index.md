---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
l10n:
  sourceCommit: 83b221d2955a42bed9b87a5206a7953d1b57d8a9
---

Fügt JavaScript-Code in eine Seite ein.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher nutzen Sie {{WebExtAPIRef("scripting.executeScript()")}}, um Skripte auszuführen.

Sie können Code in Seiten injizieren, deren URL Sie mithilfe eines [Matchmusters](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausdrücken können. Dazu muss das Schema eines der folgenden sein: `http`, `https` oder `file`.

Sie müssen eine Erlaubnis für die URL der Seite entweder explizit als [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mit der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben. Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, darunter Leseansicht, view-source, PDF-Viewer und andere integrierte Browser-UI-Seiten.

Erweiterungen können keine Inhalte-Skripte in [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) ausführen. Wenn eine Erweiterung Code in einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript in das Dokument einfügen. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der eine Methode zur Ausführung des Codes implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes zu starten.

> [!NOTE]
> Die Möglichkeit, Code in Seiten zu injizieren, die mit Ihrer Erweiterung verpackt sind, wurde in Firefox 149 abgekündigt und in Firefox 152 entfernt.

Die von Ihnen injizierten Skripte werden [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

## Syntax

```js-nolint
let executing = browser.tabs.executeScript(
  tabId,                 // optional integer
  details                // object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, in dem das Skript ausgeführt werden soll.

    Standardmäßig der aktive Tab des aktuellen Fensters.

- `details`
  - : Ein Objekt, das das auszuführende Skript beschreibt.

    Es enthält die folgenden Eigenschaften:
    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in alle Frames der aktuellen Seite injiziert.

        Wenn auf `true` gesetzt und `frameId` ist ebenfalls gesetzt, wird ein Fehler ausgelöst. (`frameId` und `allFrames` schließen sich gegenseitig aus.)

        Wenn es `false` ist, wird der Code nur in den obersten Frame injiziert.

        Standardwert ist `false`.

    - `code` {{optional_inline}}
      - : `string`. Code, der als Textzeichenfolge injiziert werden soll.

        > [!WARNING]
        > Verwenden Sie diese Eigenschaft nicht, um nicht vertrauenswürdige Daten in JavaScript einzusetzen, da dies zu einem Sicherheitsproblem führen könnte.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die den zu injizierenden Code enthält.
        - In Firefox werden relative URLs, die nicht am Erweiterungsstamm beginnen, relativ zur aktuellen Seiten-URL aufgelöst.
        - In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst.

        Um browserübergreifend zu arbeiten, können Sie den Pfad als relative URL angeben, beginnend am Stamm der Erweiterung, wie folgt: `"/path/to/script.js"`.

    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den der Code injiziert werden soll.

        Standardwert ist `0` (das oberste Frame).

    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete `about:blank` und `about:srcdoc` Frames injiziert, wenn Ihre Erweiterung Zugang zu ihrem übergeordneten Dokument hat. Der Code kann nicht in oberste `about:` Frames eingefügt werden.

        Standardwert ist `false`.

    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab injiziert wird.

        Standardwert ist `"document_idle"`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das in einem Array von Objekten aufgelöst wird. Die Werte des Arrays repräsentieren das Ergebnis des Skriptes in jedem injizierten Frame.

Das Ergebnis des Skriptes ist die zuletzt ausgewertete Anweisung, die dem Ausgabeverhalten (den Ergebnissen, nicht der Ausgabe von `console.log()`) ähnelt, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgeführt haben. Zum Beispiel könnte ein Skript so aussehen:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisarray den String `"my result"` als Element.

Die Ergebniswerte müssen [strukturiert klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

> [!NOTE]
> Die letzte Anweisung kann auch ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, aber diese Funktion wird von der [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript)-Bibliothek nicht unterstützt.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel führt ein einzeiliges Code-Snippet im aktiven Tab aus:

```js
function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const makeItGreen = 'document.body.style.border = "5px solid green"';

const executing = browser.tabs.executeScript({
  code: makeItGreen,
});
executing.then(onExecuted, onError);
```

Dieses Beispiel führt ein Skript aus einer Datei (mit der Erweiterung gepackt) mit dem Namen `"content-script.js"` aus. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird sowohl in Subframes als auch im Hauptdokument ausgeführt:

```js
function onExecuted(result) {
  console.log(`We executed in all subframes`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript({
  file: "/content-script.js",
  allFrames: true,
});
executing.then(onExecuted, onError);
```

Dieses Beispiel führt ein Skript aus einer Datei (mit der Erweiterung gepackt) mit dem Namen `"content-script.js"` aus. Das Skript wird im Tab mit der ID `2` ausgeführt:

```js
function onExecuted(result) {
  console.log(`We executed in tab 2`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript(2, {
  file: "/content-script.js",
});
executing.then(onExecuted, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-executeScript) API von Chromium. Diese Dokumentation leitet sich von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code ab.
