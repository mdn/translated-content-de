---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt CSS in eine Seite ein.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher sollten Sie {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} verwenden, um CSS einzufügen und zu entfernen.

Um diese API zu verwenden, müssen Sie die Berechtigung für die URL der Seite besitzen, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder unter Nutzung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten einfügen, deren URL mit einem [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das bedeutet, dass das Schema "http", "https" oder "file" sein muss. Das bedeutet, dass Sie kein CSS in die eingebauten Browserseiten wie about:debugging, about:addons oder die Seite, die geöffnet wird, wenn Sie ein neues leeres Tab öffnen, einfügen können.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei selbst und nicht zur Seite, in die sie eingefügt wird, auf.

Das eingefügte CSS kann durch Aufruf von {{WebExtAPIRef("tabs.removeCSS()")}} wieder entfernt werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt (nur in Firefox).

## Syntax

```js-nolint
let inserting = browser.tabs.insertCSS(
  tabId,           // optional integer
  details          // object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, in den das CSS eingefügt werden soll. Standardmäßig wird das aktive Tab des aktuellen Fensters verwendet.
- `details`

  - : Ein Objekt, das das einzufügende CSS beschreibt. Es enthält die folgenden Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das CSS in alle Frames der aktuellen Seite eingefügt. Wenn `false`, wird CSS nur in den obersten Frame eingefügt. Standardmäßig `false`.
    - `code` {{optional_inline}}
      - : `string`. Code zum Einfügen, als Textstring.
    - `cssOrigin` {{optional_inline}}

      - : `string`. Dies kann einen von zwei Werten annehmen: "user", um das CSS als Benutzer-Stylesheet hinzuzufügen, oder "author", um es als Autor-Stylesheet hinzuzufügen. Wenn diese Option weggelassen wird, wird das CSS als Autor-Stylesheet hinzugefügt.

        - "user" erlaubt es Ihnen zu verhindern, dass Websites das eingefügte CSS überschreiben: siehe [Kaskadierungsreihenfolge](/de/docs/Web/CSS/Cascade#cascading_order).
        - "author"-Stylesheets verhalten sich so, als würden sie nach allen Autorregeln erscheinen, die von der Webseite angegeben werden. Dieses Verhalten schließt alle Autor-Stylesheets ein, die dynamisch durch die Skripte der Seite hinzugefügt werden, auch wenn diese Ergänzung nach Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die den einzufügenden Code enthält. In Firefox werden relative URLs relativ zur aktuellen Seiten-URL aufgelöst. In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst. Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend beim Root der Erweiterung, so: `"/path/to/stylesheet.css"`.
    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den das CSS eingefügt werden soll. Standardmäßig `0` (der oberste Frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete "about:blank"- und "about:srcdoc"-Frames eingefügt, wenn Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. Der Code kann nicht in oberste about:-Frames eingefügt werden. Standardmäßig `false`.
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in das Tab eingefügt wird. Standardmäßig "document_idle".

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argument erfüllt wird, wenn das gesamte CSS eingefügt wurde. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel fügt in das aktuell aktive Tab CSS ein, das aus einem String entnommen wird.

```js
let css = "body { border: 20px dotted pink; }";

browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS({ code: css });
  insertingCSS.then(null, onError);
});
```

Dieses Beispiel fügt CSS ein, das aus einer mit der Erweiterung verpackten Datei geladen wird. Das CSS wird in das Tab eingefügt, dessen ID 2 ist:

```js
browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS(2, { file: "content-style.css" });
  insertingCSS.then(null, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-insertCSS) API. Diese Dokumentation ist aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.
