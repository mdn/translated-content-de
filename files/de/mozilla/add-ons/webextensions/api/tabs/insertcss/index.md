---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt einer Seite CSS hinzu.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher verwenden Sie {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}}, um CSS einzufügen und zu entfernen.

Um diese API nutzen zu können, müssen Sie die Erlaubnis für die URL der Seite haben, entweder explizit als [Host-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mit der [activeTab-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur auf Seiten einfügen, deren URL mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das bedeutet, dass das Schema "http", "https" oder "file" sein muss. Dies bedeutet, dass Sie kein CSS in die eingebauten Seiten des Browsers einfügen können, wie zum Beispiel about:debugging, about:addons oder die Seite, die geöffnet wird, wenn Sie einen neuen leeren Tab öffnen.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei selbst auf und nicht relativ zu der Seite, in die sie eingefügt wird.

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
  - : `integer`. Die ID des Tabs, in den das CSS eingefügt werden soll. Standardmäßig ist es der aktive Tab des aktuellen Fensters.
- `details`

  - : Ein Objekt, das das einzufügende CSS beschreibt. Es enthält folgende Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das CSS in alle Frames der aktuellen Seite eingefügt. Wenn es `false` ist, wird das CSS nur in das Top-Frame eingefügt. Standardmäßig ist dies `false`.
    - `code` {{optional_inline}}
      - : `string`. Der einzufügende Code als Text-String.
    - `cssOrigin` {{optional_inline}}

      - : `string`. Dies kann einen von zwei Werten annehmen: "user", um das CSS als Benutzerstylesheet hinzuzufügen oder "author", um es als Autorenstylesheet hinzuzufügen. Wenn diese Option weggelassen wird, wird das CSS als Autorenstylesheet hinzugefügt.

        - "user" ermöglicht es Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Cascading order](/de/docs/Web/CSS/Cascade#cascading_order).
        - "author"-Stylesheets verhalten sich so, als würden sie nach allen Autorenregeln der Webseite erscheinen. Dieses Verhalten umfasst alle Autorenstylesheets, die dynamisch durch die Skripte der Seite hinzugefügt werden, selbst wenn diese Hinzufügung nach der Ausführung des `insertCSS`-Aufrufs erfolgt.

    - `file` {{optional_inline}}
      - : `string`. Der Pfad zu einer Datei, die den einzufügenden Code enthält. In Firefox werden relative URLs relativ zur aktuellen Seiten-URL aufgelöst. In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst. Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend mit dem Wurzelverzeichnis der Erweiterung, wie folgt: `"/path/to/stylesheet.css"`.
    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den das CSS eingefügt werden soll. Standardmäßig ist dies `0` (das oberste Frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete "about:blank" und "about:srcdoc" Frames eingefügt, falls Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. Der Code kann nicht in oberste about: Frames eingefügt werden. Standardmäßig ist dies `false`.
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab eingefügt wird. Standardmäßig ist dies "document_idle".

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt wurde. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel fügt im aktuell aktiven Tab CSS ein, das aus einem String stammt.

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

Dieses Beispiel fügt CSS ein, das aus einer mit der Erweiterung gepackten Datei geladen wird. Das CSS wird in den Tab eingefügt, dessen ID 2 ist:

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-insertCSS) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
