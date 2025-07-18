---
title: menus.overrideContext()
slug: Mozilla/Add-ons/WebExtensions/API/menus/overrideContext
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verstecken Sie alle Standard-Menüelemente von Firefox zugunsten einer benutzerdefinierten Kontextmenü-Oberfläche.

Die `overrideContext`-Methode bewirkt, dass die übereinstimmenden Menüelemente dieser Erweiterung statt des Standardmenüs angezeigt werden. Diese Methode sollte von einem [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-DOM-Event-Handler aufgerufen werden und gilt nur für das Menü, das nach diesem Ereignis geöffnet wird.

Diese Schnittstelle erfordert die `menus.overrideContext`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.menus.overrideContext(
  contextOptions // object
)
```

### Parameter

- `contextOptions`
  - : `object`. Optionen dafür, wie die Kontextmenüs überschrieben werden.
    - `showDefaults` {{optional_inline}}
      - : `boolean`. Ob auch Standard-Menüelemente in das Menü aufgenommen werden sollen.
    - `context` {{optional_inline}}
      - : `string`. ContextType, das überschrieben werden soll, um Menüelemente aus anderen Erweiterungen im Menü zuzulassen. Derzeit werden nur `'bookmark'` und `'tab'` unterstützt. `showDefaults` kann nicht mit dieser Option verwendet werden.
    - `bookmarkId` {{optional_inline}}
      - : `string`. Erforderlich, wenn der Kontext `'bookmark'` ist. Erfordert die Berechtigung 'bookmark'.
    - `tabId` {{optional_inline}}
      - : `integer`. Erforderlich, wenn der Kontext `'tab'` ist. Erfordert die Berechtigung 'tabs'.

## Beispiele

Öffnen Sie das Tab-Kontextmenü in Ihrer benutzerdefinierten UI, in diesem Fall:

```js
document.addEventListener(
  "contextmenu",
  (event) => {
    const foo = event.target.closest(".foo");
    if (foo) {
      // When the context menu is opened on an element with the foo class
      // set the context to "opening a tab context menu".
      browser.menus.overrideContext({
        context: "tab",
        tabId: parseInt(foo.dataset.tabId, 10),
      });
    }
  },
  { capture: true },
);
```

Weitere Details finden Sie in [diesem Blog-Beitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

## Browser-Kompatibilität

{{ Compat }}
