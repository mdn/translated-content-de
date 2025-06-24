---
title: menus.overrideContext()
slug: Mozilla/Add-ons/WebExtensions/API/menus/overrideContext
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Verstecken Sie alle standardmäßigen Firefox-Menüeinträge zugunsten einer benutzerdefinierten Kontextmenü-Oberfläche.

Die Methode `overrideContext` sorgt dafür, dass die übereinstimmenden Menüeinträge dieser Erweiterung anstelle des Standardmenüs angezeigt werden. Diese Methode sollte von einem [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) DOM-Event-Handler aufgerufen werden und gilt nur für das Menü, das nach diesem Event geöffnet wird.

Diese Schnittstelle erfordert die `menus.overrideContext` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

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
      - : `boolean`. Ob standardmäßige Menüeinträge ebenfalls im Menü enthalten sein sollen.
    - `context` {{optional_inline}}
      - : `string`. Zu überschreibender `ContextType`, um Menüeinträge von anderen Erweiterungen im Menü zuzulassen. Derzeit werden nur `'bookmark'` und `'tab'` unterstützt. `showDefaults` kann nicht mit dieser Option verwendet werden.
    - `bookmarkId` {{optional_inline}}
      - : `string`. Erforderlich, wenn der Kontext `'bookmark'` ist. Erfordert die 'bookmark'-Berechtigung.
    - `tabId` {{optional_inline}}
      - : `integer`. Erforderlich, wenn der Kontext `'tab'` ist. Erfordert die 'tabs'-Berechtigung.

## Beispiele

Öffnen Sie das Tab-Kontextmenü auf Ihrer benutzerdefinierten Oberfläche, in diesem Fall:

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

Weitere Details finden Sie in [diesem Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

## Browser-Kompatibilität

{{ Compat }}
