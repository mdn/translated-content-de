---
title: browserAction.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeBackgroundColor
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Legt die Hintergrundfarbe für das Badge fest. Tabs ohne eine spezifische Hintergrundfarbe für das Badge erben die globale Hintergrundfarbe, die standardmäßig `[217, 0, 0, 255]` in Firefox ist.

Ab Firefox 63 wird, falls die Badge-Textfarbe nicht explizit über {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} gesetzt wurde, die Badge-Textfarbe automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit der angegebenen Badge-Hintergrundfarbe zu maximieren. Wenn Sie z.B. die Hintergrundfarbe des Badges auf Weiß setzen, wird die Standard-Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, sodass es vorzuziehen sein könnte, einen dunklen Hintergrund festzulegen, um sicherzustellen, dass der Text lesbar ist.

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
        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, z. B. `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Ist der String keine gültige Farbe, wird das zurückgegebene Promise abgelehnt und die Hintergrundfarbe wird nicht geändert.
        - ein {{WebExtAPIRef('browserAction.ColorArray')}} Objekt.
        - `null`. Falls eine `tabId` angegeben wird, wird die spezifische Hintergrundfarbe des Tabs entfernt, sodass der Tab die globale Badge-Hintergrundfarbe erbt. Andernfalls wird die globale Badge-Hintergrundfarbe auf den Standardwert zurückgesetzt.

        Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird stattdessen die globale Badge-Hintergrundfarbe gesetzt.

## Beispiele

Eine Hintergrundfarbe, die mit Rot beginnt und in Grün wechselt, wenn die Browser-Aktion angeklickt wird:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeBackgroundColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeBackgroundColor({ color: "green" });
});
```

Setze die Badge-Hintergrundfarbe nur für den aktiven Tab:

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
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
