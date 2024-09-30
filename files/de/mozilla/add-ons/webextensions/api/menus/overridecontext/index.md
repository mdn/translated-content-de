---
title: menus.overrideContext()
slug: Mozilla/Add-ons/WebExtensions/API/menus/overrideContext
l10n:
  sourceCommit: 03d9b93f9ecb9cf805e3b017bd24fe60e33b8c10
---

{{AddonSidebar}}

Verstecken Sie alle standardmäßigen Firefox-Menüelemente zugunsten einer benutzerdefinierten Kontextmenü-Oberfläche.

Die Methode `overrideContext` bewirkt, dass anstelle des Standardmenüs die passenden Menüelemente dieser Erweiterung angezeigt werden. Diese Methode sollte von einem [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) DOM-Event-Handler aufgerufen werden und gilt nur für das Menü, das nach diesem Ereignis geöffnet wird.

Diese Schnittstelle erfordert die Berechtigung `menus.overrideContext` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.menus.overrideContext(
  contextOptions // object
)
```

### Parameter

- `contextOptions`

  - : `object`. Optionen, wie die Kontextmenüs überschrieben werden sollen.

    - `showDefaults` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Standardmenüelemente ebenfalls im Menü enthalten sein sollen.
    - `context` {{optional_inline}}
      - : `string`. Kontexttyp, der überschrieben werden soll, um Menüelemente aus anderen Erweiterungen im Menü zuzulassen. Derzeit werden nur `'bookmark'` und `'tab'` unterstützt. `showDefaults` kann nicht mit dieser Option verwendet werden.
    - `bookmarkId` {{optional_inline}}
      - : `string`. Erforderlich, wenn der Kontext `'bookmark'` ist. Erfordert die 'bookmark'-Berechtigung.
    - `tabId` {{optional_inline}}
      - : `integer`. Erforderlich, wenn der Kontext `'tab'` ist. Erfordert die 'tabs'-Berechtigung.

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
        tabId: parseInt(foo.dataset.tabId),
      });
    }
  },
  { capture: true },
);
```

Sehen Sie [diesen Blogpost](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) für weitere Details.

## Browser-Kompatibilität

{{ Compat }}
