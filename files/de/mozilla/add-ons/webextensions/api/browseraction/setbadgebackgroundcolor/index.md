---
title: browserAction.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeBackgroundColor
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt die Hintergrundfarbe für das Abzeichen fest. Tabs ohne eine spezifische Abzeichen-Hintergrundfarbe erben die globale Abzeichen-Hintergrundfarbe, die in Firefox standardmäßig `[217, 0, 0, 255]` ist.

Ab Firefox 63 wird, wenn die Abzeichen-Textfarbe nicht explizit mit {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} gesetzt wird, die Abzeichen-Textfarbe automatisch auf schwarz oder weiß gesetzt, um den Kontrast zur angegebenen Abzeichen-Hintergrundfarbe zu maximieren. Wenn Sie beispielsweise die Abzeichen-Hintergrundfarbe auf weiß setzen, wird die Standard-Abzeichen-Textfarbe auf schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, daher ist es möglicherweise vorzuziehen, einen dunklen Hintergrund zu setzen, um sicherzustellen, dass der Text lesbar ist.

## Syntax

```js-nolint
browser.browserAction.setBadgeBackgroundColor(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `color`

      - : Die Farbe, angegeben als eine der folgenden:

        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/color_value)-Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Versprechen abgelehnt und die Hintergrundfarbe nicht geändert.
        - ein `{{WebExtAPIRef('browserAction.ColorArray')}}`-Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, wird die tab-spezifische Abzeichen-Hintergrundfarbe entfernt, sodass der Tab die globale Abzeichen-Hintergrundfarbe erbt. Andernfalls wird die globale Abzeichen-Hintergrundfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Legt die Abzeichen-Hintergrundfarbe nur für den angegebenen Tab fest. Die Farbe wird zurückgesetzt, wenn der Benutzer in diesem Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt die Abzeichen-Hintergrundfarbe nur für das angegebene Fenster fest.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird stattdessen die globale Abzeichen-Hintergrundfarbe gesetzt.

## Browser-Kompatibilität

{{Compat}}

Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

## Beispiele

Eine Hintergrundfarbe, die anfänglich rot ist und grün wird, wenn die Browser-Aktion angeklickt wird:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeBackgroundColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeBackgroundColor({ color: "green" });
});
```

Die Abzeichen-Hintergrundfarbe nur für den aktiven Tab festlegen:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeBackgroundColor({ color: "red" });

browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setBadgeBackgroundColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor). Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
