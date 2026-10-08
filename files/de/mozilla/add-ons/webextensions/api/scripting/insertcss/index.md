---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Fügt CSS in eine Seite ein.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und ab Firefox 101 verfügbar. In Safari und ab Firefox 102 ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, benötigen Sie die [`scripting`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und eine Berechtigung für die URL des Ziels, entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder über die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

Sie können CSS nur in Seiten einfügen, deren URL sich durch ein [Match-Pattern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausdrücken lässt. Das bedeutet, dass das Schema „http“, „https“ oder „file“ sein muss. Daher können Sie CSS nicht in integrierte Browserseiten wie about:debugging, about:addons oder die Seite einfügen, die beim Öffnen eines neuen leeren Tabs angezeigt wird.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei auf, nicht relativ zur Seite, in die sie eingefügt werden.

Das eingefügte CSS kann durch Aufrufen von {{WebExtAPIRef("scripting.removeCSS()")}} entfernt werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.insertCSS(
  details     // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das beschreibt, welches CSS wo eingefügt werden soll. Es enthält die folgenden Eigenschaften:
    - `css` {{optional_inline}}
      - : `string`. Eine Zeichenfolge mit dem einzufügenden CSS. Entweder `css` oder `files` muss angegeben werden.
    - `files` {{optional_inline}}
      - : `array` von `string`. Die Pfade der einzufügenden CSS-Dateien relativ zum Stammverzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden.
    - `origin` {{optional_inline}}
      - : `string`. Der Style-Origin für das Einfügen: entweder `USER`, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `AUTHOR`, um es als Autoren-Stylesheet hinzuzufügen. Der Standardwert ist `AUTHOR`. Ab Firefox 144 wird bei dieser Eigenschaft nicht zwischen Groß- und Kleinschreibung unterschieden.
        - `USER` ermöglicht es Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Kaskadierungsreihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).
        - `AUTHOR`-Stylesheets verhalten sich so, als stünden sie nach allen von der Webseite festgelegten Autorenregeln. Dies schließt auch Autoren-Stylesheets ein, die durch Skripte der Seite dynamisch hinzugefügt werden, selbst wenn dies erst nach Abschluss des `insertCSS`-Aufrufs geschieht.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Angaben zum Ziel, in das das CSS eingefügt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das gesamte CSS eingefügt wurde. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel fügt CSS aus einer Zeichenfolge in den aktiven Tab ein.

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      css: `body { border: 20px dotted pink; }`,
    });
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
});
```

Dieses Beispiel fügt CSS aus einer Datei namens `"content-style.css"` ein, die mit der Erweiterung ausgeliefert wird:

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      files: ["content-style.css"],
    });
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`-API](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-insertCSS) von Chromium.
