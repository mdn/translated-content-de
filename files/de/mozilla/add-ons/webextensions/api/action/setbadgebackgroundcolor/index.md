---
title: action.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeBackgroundColor
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Setzt die Hintergrundfarbe für das Badge. Tabs ohne eine spezifische Badge-Hintergrundfarbe erben die globale Badge-Hintergrundfarbe, die in Firefox standardmäßig `[217, 0, 0, 255]` ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

In Firefox wird die Badge-Textfarbe automatisch auf schwarz oder weiß gesetzt, um den Kontrast mit der angegebenen Badge-Hintergrundfarbe zu maximieren, es sei denn, die Badge-Textfarbe wird explizit mithilfe von {{WebExtAPIRef("action.setBadgeTextColor()")}} gesetzt. Wenn Sie beispielsweise die Badge-Hintergrundfarbe auf weiß setzen, wird die Standard-Badge-Textfarbe auf schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, daher kann es vorzuziehen sein, eine dunkle Hintergrundfarbe zu setzen, um sicherzustellen, dass der Text lesbar ist.

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
      - : Die Farbe, angegeben als eine von:
        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Versprechen abgelehnt und die Hintergrundfarbe wird nicht verändert.
        - ein {{WebExtAPIRef('action.ColorArray')}}-Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, entfernt es die tab-spezifische Badge-Hintergrundfarbe, sodass der Tab die globale Badge-Hintergrundfarbe erbt. Andernfalls wird die globale Badge-Hintergrundfarbe auf den Standardwert zurückgesetzt.

        Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird stattdessen die globale Badge-Hintergrundfarbe gesetzt.

## Beispiele

Eine Hintergrundfarbe, die zu Beginn rot ist und beim Klicken auf die Browser-Aktion grün wird:

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

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeBackgroundColor) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
