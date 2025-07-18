---
title: action.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeText
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzt den Symboltext für die Browseraktion. Das Abzeichen wird über dem Symbol angezeigt.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Tabs ohne einen spezifischen Abzeichentext übernehmen den globalen Abzeichentext, der standardmäßig `""` ist.

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
      - : `string` oder `null`. Jegliche Anzahl von Zeichen kann übergeben werden, aber nur etwa vier passen in den verfügbaren Platz.

        Verwenden Sie einen leeren String - `""` - wenn Sie kein Abzeichen wünschen.

        Wenn eine `tabId` angegeben ist, entfernt `null` den tab-spezifischen Abzeichentext, sodass der Tab den globalen Abzeichentext erbt. Andernfalls wird der globale Abzeichentext auf `""` zurückgesetzt.

        Wenn eine `windowId` angegeben ist, entfernt `null` den fensterspezifischen Abzeichentext, sodass der Tab den globalen Abzeichentext erbt. Andernfalls wird der globale Abzeichentext auf `""` zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Abzeichentext nur für den angegebenen Tab. Der Text wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Abzeichentext für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Abzeichen gesetzt.

## Beispiele

Fügen Sie ein Abzeichen hinzu, das anzeigt, wie oft der Benutzer auf den Knopf geklickt hat:

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
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeText) API von Chromium. Diese Dokumentation wird abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
