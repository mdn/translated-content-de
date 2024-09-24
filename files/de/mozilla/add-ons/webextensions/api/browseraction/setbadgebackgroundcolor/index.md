---
title: browserAction.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeBackgroundColor
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt die Hintergrundfarbe für das Badge. Tabs ohne eine spezifische Badge-Hintergrundfarbe erben die globale Badge-Hintergrundfarbe, die in Firefox standardmäßig auf `[217, 0, 0, 255]` gesetzt ist.

Ab Firefox 63 wird, sofern die Badge-Textfarbe nicht explizit über {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} gesetzt wird, die Badge-Textfarbe automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit der angegebenen Badge-Hintergrundfarbe zu maximieren. Zum Beispiel, wenn Sie die Badge-Hintergrundfarbe auf Weiß setzen, wird die standardmäßige Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, daher kann das Setzen eines dunklen Hintergrunds vorzuziehen sein, um sicherzustellen, dass der Text lesbar ist.

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

      - : Die Farbe, angegeben als eine der folgenden Optionen:

        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Versprechen abgelehnt und die Hintergrundfarbe nicht geändert.
        - ein `{{WebExtAPIRef('browserAction.ColorArray')}}` Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, wird die tab-spezifische Badge-Hintergrundfarbe entfernt, sodass der Tab die globale Badge-Hintergrundfarbe erbt. Andernfalls wird die globale Badge-Hintergrundfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird stattdessen die globale Badge-Hintergrundfarbe gesetzt.

## Browser-Kompatibilität

{{Compat}}

Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

## Beispiele

Eine Hintergrundfarbe, die mit Rot beginnt und sich in Grün ändert, wenn auf die Browser-Aktion geklickt wird:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeBackgroundColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeBackgroundColor({ color: "green" });
});
```

Setzen Sie die Badge-Hintergrundfarbe nur für den aktiven Tab:

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
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
