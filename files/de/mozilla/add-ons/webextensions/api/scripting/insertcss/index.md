---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: 05aab3e51dc609cbd66be67516e45d20feeefd0c
---

Fügt CSS in eine Seite ein.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"`- [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mithilfe der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten einfügen, deren URL mithilfe eines [Match-Musters](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das bedeutet, dass das Schema "http", "https" oder "file" sein muss. Das bedeutet, dass Sie kein CSS in eine der im Browser integrierten Seiten einfügen können, wie about:debugging, about:addons oder die Seite, die geöffnet wird, wenn Sie eine neue leere Registerkarte öffnen.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei auf, anstatt zu der Seite, in die sie eingefügt wird.

Das eingefügte CSS kann durch Aufruf von {{WebExtAPIRef("scripting.removeCSS()")}} entfernt werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.insertCSS(
  details     // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das das einzufügende CSS und den Ort beschreibt, an dem es eingefügt werden soll. Es enthält die folgenden Eigenschaften:
    - `css` {{optional_inline}}
      - : `string`. Ein String, der das einzufügende CSS enthält. Entweder `css` oder `files` muss angegeben werden.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad der einzufügenden CSS-Dateien relativ zum Stammverzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden.
    - `origin` {{optional_inline}}
      - : `string`. Der Stilursprung für die Einfügung, entweder `USER`, um das CSS als Benutzerstilblatt hinzuzufügen, oder `AUTHOR`, um es als Autorenstilblatt hinzuzufügen. Standardmäßig `AUTHOR`. Diese Eigenschaft ist ab Firefox 144 nicht case-sensitiv.
        - `USER` ermöglicht es Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Cascading order](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).
        - `AUTHOR`-Stilblätter verhalten sich so, als ob sie nach allen von der Webseite angegebenen Autorenregeln erscheinen. Dieses Verhalten schließt alle dynamisch durch die Skripte der Seite hinzugefügten Autorenstile ein, selbst wenn diese Hinzufügung nach Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel zur Einfügung des CSS spezifizieren.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das sich ohne Argumente erfüllt, wenn alle CSS eingefügt sind. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel fügt CSS aus einem String in die aktive Registerkarte ein.

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

Dieses Beispiel fügt CSS aus einer Datei ein (die mit der Erweiterung gepackt wurde), genannt `"content-style.css"`:

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
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-insertCSS) API.
