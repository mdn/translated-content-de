---
title: menus.overrideContext()
slug: Mozilla/Add-ons/WebExtensions/API/menus/overrideContext
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{AddonSidebar}}

Verstecken Sie alle standardmäßigen Firefox-Menüeinträge, um eine benutzerdefinierte Kontextmenü-Benutzeroberfläche bereitzustellen.

Die Methode `overrideContext` veranlasst, dass die passenden Menüeinträge dieser Erweiterung anstelle des Standardmenüs angezeigt werden. Diese Methode sollte von einem [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) DOM-Event-Handler aufgerufen werden und gilt nur für das Menü, das nach diesem Ereignis geöffnet wird.

Diese Schnittstelle erfordert die Berechtigung `menus.overrideContext` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

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
      - : `boolean`. Ob auch Standardmenüelemente im Menü enthalten sein sollen.
    - `context` {{optional_inline}}
      - : `string`. ContextType, das überschrieben werden soll, um Menüeinträge von anderen Erweiterungen im Menü zuzulassen. Derzeit werden nur `'bookmark'` und `'tab'` unterstützt. `showDefaults` kann nicht mit dieser Option verwendet werden.
    - `bookmarkId` {{optional_inline}}
      - : `string`. Erforderlich, wenn der Kontext `'bookmark'` ist. Erfordert 'bookmark'-Berechtigung.
    - `tabId` {{optional_inline}}
      - : `integer`. Erforderlich, wenn der Kontext `'tab'` ist. Erfordert 'tabs'-Berechtigung.

## Beispiele

Öffnen Sie das Tab-Kontextmenü in Ihrer benutzerdefinierten Benutzeroberfläche, in diesem Fall:

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

Sehen Sie sich [diesen Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) für weitere Details an.

## Browser-Kompatibilität

{{ Compat }}
