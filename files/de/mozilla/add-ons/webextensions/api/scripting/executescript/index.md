---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Fügt ein Skript in einen Zielkontext ein. Standardmäßig wird das Skript bei `document_idle` ausgeführt.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch Verwendung der [activeTab Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich Lesemodus, Quelltextansicht, PDF-Viewer und anderer integrierter Browser-UI-Seiten.

In Firefox und Safari kann ein teilweises Fehlen von Host-Berechtigungen zu einer erfolgreichen Ausführung führen (mit den teilweise vorhandenen Ergebnissen im aufgelösten Promise). In Chrome verhindert jede fehlende Berechtigung jede Ausführung (siehe [Issue 1325114](https://crbug.com/1325114)).

Die von Ihnen eingefügten Skripte werden als [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) bezeichnet.

Erweiterungen können keine Inhalts-Skripte in [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) ausführen. Wenn eine Erweiterung Code in einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript in das Dokument einfügen. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der eine Möglichkeit zur Ausführung des Codes implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes auszulösen.

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
      - : Ein Array von Argumenten, die in die Funktion eingebracht werden. Dies ist nur gültig, wenn der Parameter `func` angegeben ist. Die Argumente müssen JSON-serialisierbar sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Ein Array von Pfaden der JS-Dateien, die eingefügt werden sollen, relativ zum Stammverzeichnis der Erweiterung. Genau einer von `files` und `func` muss angegeben sein.
    - `func` {{optional_inline}}
      - : `function`. Eine JavaScript-Funktion, die eingefügt werden soll. Diese Funktion wird serialisiert und dann zur Injektion deserialisiert. Das bedeutet, dass alle gebundenen Parameter und Ausführungskontexte verloren gehen. Genau einer von `files` und `func` muss angegeben sein.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Ob die Injektion in das Ziel so schnell wie möglich ausgelöst wird, jedoch nicht unbedingt vor dem Laden der Seite.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das Skript eingefügt werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von `InjectionResult`-Objekten erfüllt wird, die das Ergebnis des eingefügten Skripts in jedem eingefügten Frame darstellen.

Das Promise wird abgelehnt, wenn die Injektion fehlschlägt, z. B. wenn das Injektionsziel ungültig ist. Sobald die Skriptausführung gestartet wurde, ist ihr Ergebnis in dem Ergebnis enthalten, unabhängig davon, ob es erfolgreich (`result`) oder erfolglos (`error`) war.

Jedes `InjectionResult`-Objekt hat folgende Eigenschaften:

- `documentId`
  - : `string`. Das mit der Injektion verbundene Dokument. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `frameId`
  - : `number`. Die mit der Injektion verbundene Frame-ID.
- `result` {{optional_inline}}
  - : `any`. Das Ergebnis der Skriptausführung.
- `error` {{optional_inline}}
  - : `any`. Falls ein Fehler auftritt, enthält es den Wert, den das Skript geworfen oder abgelehnt hat. Typischerweise ist dies ein Fehlerobjekt mit einer Nachrichten-Eigenschaft, aber es könnte jeder Wert sein (einschließlich primitiver Werte und undefiniert).

    Chrome unterstützt die `error`-Eigenschaft noch nicht (siehe [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)). Alternativ können Laufzeitfehler durch Einwickeln des auszuführenden Codes in eine try-catch-Anweisung abgefangen werden. Nicht abgefangene Fehler werden auch in der Konsole des Ziel-Tabs gemeldet.

Das Ergebnis eines Skripts ist der Wert, der durch die letzte ausgewertete Anweisung erzeugt wird. Wenn die letzte Anweisung ein Promise erzeugt, ist das Ergebnis der gesetzte Wert dieses Promise. Dies ist ähnlich den Ergebnissen, die Sie sehen, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen (ausgenommen jede `console.log()`-Ausgabe). Beispielweise sehen Sie bei einem Skript wie diesem:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnis-Array die Zeichenkette `"my result"` als Element.

Das Skriptergebnis muss in Firefox einen [strukturiert klonbaren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Wert oder in Chrome einen [JSON-serialisierbaren](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) Wert darstellen. Der Artikel [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) diskutiert diesen Unterschied detaillierter im Abschnitt [Datenduplizierungs-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm).

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

Dieses Beispiel führt ein Skript aus einer Datei aus (zusammen mit der Erweiterung gepackt) namens `"content-script.js"`. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird in Unterrahmen und im Hauptdokument ausgeführt:

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
> Diese API basiert auf Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-executeScript) API.
