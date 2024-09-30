---
title: action.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeText
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt den Badge-Text für die Browseraktion fest. Der Badge wird über dem Symbol angezeigt.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Tabs ohne spezifischen Badge-Text erben den globalen Badge-Text, der standardmäßig `""` ist.

## Syntax

```js-nolint
browser.action.setBadgeText(
  details // object
)
```

Diese API ist auch als `chrome.action.setBadgeText()` verfügbar.

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `text`

      - : `string` oder `null`. Es können beliebige Zeichenanzahlen übergeben werden, aber es passen nur etwa vier in den verfügbaren Raum.

        Verwenden Sie eine leere Zeichenfolge - `""` -, wenn Sie keinen Badge wünschen.

        Wenn eine `tabId` angegeben ist, entfernt `null` den tab-spezifischen Badge-Text, sodass der Tab den globalen Badge-Text erbt. Andernfalls wird der globale Badge-Text auf `""` zurückgesetzt.

        Wenn eine `windowId` angegeben ist, entfernt `null` den fensterspezifischen Badge-Text, sodass der Tab den globalen Badge-Text erbt. Andernfalls wird der globale Badge-Text auf `""` zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzen Sie den Badge-Text nur für den angegebenen Tab. Der Text wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzen Sie den Badge-Text für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Badge gesetzt.

## Beispiele

Fügen Sie einen Badge hinzu, der anzeigt, wie oft der Benutzer die Schaltfläche angeklickt hat:

```js
let clicks = 0;

function increment() {
  browser.action.setBadgeText({ text: (++clicks).toString() });
}

browser.action.onClicked.addListener(increment);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeText) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
