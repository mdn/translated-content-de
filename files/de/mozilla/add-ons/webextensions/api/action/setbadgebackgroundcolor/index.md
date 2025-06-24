---
title: action.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeBackgroundColor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Setzt die Hintergrundfarbe für das Badge. Tabs ohne eine spezifische Badge-Hintergrundfarbe erben die globale Badge-Hintergrundfarbe, die in Firefox standardmäßig auf `[217, 0, 0, 255]` gesetzt ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

In Firefox wird die Badge-Textfarbe, sofern sie nicht explizit mittels {{WebExtAPIRef("action.setBadgeTextColor()")}} gesetzt wird, automatisch auf Schwarz oder Weiß eingestellt, um den Kontrast zur angegebenen Badge-Hintergrundfarbe zu maximieren. Beispielsweise, wenn Sie die Badge-Hintergrundfarbe auf Weiß setzen, wird die standardmäßige Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, daher kann die Einstellung eines dunklen Hintergrunds vorzuziehen sein, um sicherzustellen, dass der Text lesbar ist.

## Syntax

```js-nolint
browser.action.setBadgeBackgroundColor(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `color`

      - : Die Farbe, angegeben als einer der folgenden:
        - ein String: ein beliebiger CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe darstellt, wird das zurückgegebene Promise abgelehnt und die Hintergrundfarbe wird nicht geändert.
        - ein {{WebExtAPIRef('action.ColorArray')}} Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, wird die tab-spezifische Badge-Hintergrundfarbe entfernt, so dass der Tab die globale Badge-Hintergrundfarbe erbt. Andernfalls wird die globale Badge-Hintergrundfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Nutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird stattdessen die globale Badge-Hintergrundfarbe gesetzt.

## Beispiele

Eine Hintergrundfarbe, die rot beginnt und grün wird, wenn die Browseraktion geklickt wird:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeBackgroundColor({ color: "red" });

browser.action.onClicked.addListener(() => {
  browser.action.setBadgeBackgroundColor({ color: "green" });
});
```

Setzen Sie die Badge-Hintergrundfarbe nur für den aktiven Tab:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeBackgroundColor({ color: "red" });

browser.action.onClicked.addListener((tab) => {
  browser.action.setBadgeBackgroundColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeBackgroundColor) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
