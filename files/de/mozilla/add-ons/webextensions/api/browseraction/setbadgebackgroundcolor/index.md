---
title: browserAction.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeBackgroundColor
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Legt die Hintergrundfarbe für das Badge fest. Tabs ohne eine spezifische Hintergrundfarbe für das Badge erben die globale Hintergrundfarbe für Badges, die in Firefox standardmäßig `[217, 0, 0, 255]` ist.

Ab Firefox 63 wird, wenn die Badge-Textfarbe nicht ausdrücklich mit {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} festgelegt wird, die Badge-Textfarbe automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit der angegebenen Badge-Hintergrundfarbe zu maximieren. Wenn Sie zum Beispiel die Badge-Hintergrundfarbe auf Weiß setzen, wird die standardmäßige Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, daher kann es vorzuziehen sein, einen dunklen Hintergrund zu setzen, um sicherzustellen, dass der Text lesbar ist.

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
      - : Die Farbe, angegeben als eine der folgenden Möglichkeiten:
        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/Reference/Values/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Promise abgelehnt und die Hintergrundfarbe wird nicht geändert.
        - ein {{WebExtAPIRef('browserAction.ColorArray')}} Objekt.
        - `null`. Wenn ein `tabId` angegeben ist, wird die tabspezifische Badgehintergrundfarbe entfernt, sodass der Tab die globale Badgehintergrundfarbe erbt. Andernfalls wird die globale Badgehintergrundfarbe auf den Standardwert zurückgesetzt.

        Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

    - `tabId` {{optional_inline}}
      - : `integer`. Legt die Badgehintergrundfarbe nur für den angegebenen Tab fest. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt die Badgehintergrundfarbe nur für das angegebene Fenster fest.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird stattdessen die globale Badgehintergrundfarbe gesetzt.

## Beispiele

Eine Hintergrundfarbe, die zunächst rot ist und grün wird, wenn auf die Browseraktion geklickt wird:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeBackgroundColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeBackgroundColor({ color: "green" });
});
```

Legen Sie die Badgehintergrundfarbe nur für den aktiven Tab fest:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
