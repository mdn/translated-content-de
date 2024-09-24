---
title: menus.overrideContext()
slug: Mozilla/Add-ons/WebExtensions/API/menus/overrideContext
l10n:
  sourceCommit: 03d9b93f9ecb9cf805e3b017bd24fe60e33b8c10
---

{{AddonSidebar}}

Verbergen Sie alle Standardmenüeinträge von Firefox zugunsten einer benutzerdefinierten Kontextmenü-Benutzeroberfläche.

Die Methode `overrideContext` bewirkt, dass die übereinstimmenden Menüpunkte dieser Erweiterung anstelle des Standardmenüs angezeigt werden. Diese Methode sollte aus einem {{domxref("Element/contextmenu_event", "contextmenu")}} DOM-Event-Handler aufgerufen werden und gilt nur für das Menü, das nach diesem Ereignis geöffnet wird.

Diese Schnittstelle erfordert die Berechtigung `menus.overrideContext` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.menus.overrideContext(
  contextOptions // object
)
```

### Parameter

- `contextOptions`

  - : `object`. Optionen, wie die Kontextmenüs überschrieben werden.

    - `showDefaults` {{optional_inline}}
      - : `boolean`. Ob die Standardmenüpunkte ebenfalls im Menü enthalten sein sollen.
    - `context` {{optional_inline}}
      - : `string`. ContextType zum Überschreiben, um Menüpunkte von anderen Erweiterungen im Menü zuzulassen. Derzeit werden nur `'bookmark'` und `'tab'` unterstützt. `showDefaults` kann nicht mit dieser Option verwendet werden.
    - `bookmarkId` {{optional_inline}}
      - : `string`. Erforderlich, wenn der Kontext `'bookmark'` ist. Erfordert die Berechtigung 'bookmark'.
    - `tabId` {{optional_inline}}
      - : `integer`. Erforderlich, wenn der Kontext `'tab'` ist. Erfordert die Berechtigung 'tabs'.

## Beispiele

Öffnen Sie das Tab-Kontextmenü in Ihrer benutzerdefinierten Benutzeroberfläche, in diesem Fall:

```js
document.addEventListener(
  "contextmenu",
  (event) => {
    const foo = event.target.closest(".foo");
    if (foo) {
      // Wenn das Kontextmenü auf einem Element mit der Klasse foo geöffnet wird,
      // setzen Sie den Kontext auf "Öffnen eines Tab-Kontextmenüs".
      browser.menus.overrideContext({
        context: "tab",
        tabId: parseInt(foo.dataset.tabId),
      });
    }
  },
  { capture: true },
);
```

Lesen Sie [diesen Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) für weitere Details.

## Browserkompatibilität

{{ Compat }}
