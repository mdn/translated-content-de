---
title: action.setBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeTextColor
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Legt die Textfarbe für das Badge der Browser-Aktion fest. Tabs ohne eine spezifische Badge-Textfarbe erben die globale Badge-Textfarbe.

> [!NOTE]
> Diese API ist ab Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.setBadgeTextColor(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `color`

      - : Die Farbe, angegeben als eine der folgenden Optionen:

        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"`, oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Promise abgelehnt und die Textfarbe wird nicht geändert.
        - ein {{WebExtAPIRef('action.ColorArray')}} Objekt.
        - `null`. Wenn ein `tabId` angegeben wird, entfernt es die tab-spezifische Badge-Textfarbe, sodass der Tab die globale Badge-Textfarbe erbt. Andernfalls wird die globale Badge-Textfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Textfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Textfarbe nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn weder `windowId` noch `tabId` angegeben werden, wird stattdessen die globale Badge-Textfarbe gesetzt.

## Beispiele

Eine Badge-Textfarbe, die rot beginnt und grün wird, wenn auf die Browser-Aktion geklickt wird:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeTextColor({ color: "red" });

browser.action.onClicked.addListener(() => {
  browser.action.setBadgeTextColor({ color: "green" });
});
```

Setzen Sie die Badge-Textfarbe nur für den aktiven Tab:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeTextColor({ color: "red" });

browser.action.onClicked.addListener((tab) => {
  browser.action.setBadgeTextColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeBackgroundColor) API. Diese Dokumentation ist aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.
