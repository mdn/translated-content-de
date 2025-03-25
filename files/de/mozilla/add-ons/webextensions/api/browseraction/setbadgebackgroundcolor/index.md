---
title: browserAction.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeBackgroundColor
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Setzt die Hintergrundfarbe für das Badge. Tabs ohne spezifische Badge-Hintergrundfarbe erben die globale Badge-Hintergrundfarbe, die in Firefox standardmäßig auf `[217, 0, 0, 255]` gesetzt ist.

Ab Firefox 63 wird, sofern die Badge-Textfarbe nicht explizit mit {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} gesetzt wird, automatisch Schwarz oder Weiß als Badge-Textfarbe gewählt, um den Kontrast zur angegebenen Badge-Hintergrundfarbe zu maximieren. Zum Beispiel, wenn Sie die Badge-Hintergrundfarbe auf Weiß setzen, wird die Standard-Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, daher kann es vorzuziehen sein, einen dunklen Hintergrund zu wählen, um sicherzustellen, dass der Text lesbar ist.

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

        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe darstellt, wird das zurückgegebene Promise abgelehnt und die Hintergrundfarbe nicht verändert.
        - ein {{WebExtAPIRef('browserAction.ColorArray')}} Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, wird die tab-spezifische Badge-Hintergrundfarbe entfernt, sodass der Tab die globale Badge-Hintergrundfarbe erbt. Andernfalls wird die globale Badge-Hintergrundfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird stattdessen die globale Badge-Hintergrundfarbe festgelegt.

## Browser-Kompatibilität

{{Compat}}

Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

## Beispiele

Eine Hintergrundfarbe, die zu Beginn rot ist und sich grün färbt, wenn die Browser-Aktion geklickt wird:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeBackgroundColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeBackgroundColor({ color: "green" });
});
```

Setzt die Badge-Hintergrundfarbe nur für den aktiven Tab:

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
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor) API. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
