---
title: dom.openOrClosedShadowRoot()
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft den offenen oder den geschlossenen Shadow Root ab, der von dem angegebenen Element gehostet wird. Wenn der Shadow Root nicht an das Element angehängt ist, wird `null` zurückgegeben.

> [!NOTE]
> In Firefox ist die entsprechende Eigenschaft `element.openOrClosedShadowRoot`. Diese schreibgeschützte Eigenschaft repräsentiert den vom Element gehosteten Shadow Root, unabhängig davon, ob sein {{DOMxRef("ShadowRoot.mode", "mode")}} `open` oder `closed` ist.
>
> Verwenden Sie {{DOMxRef("Element.attachShadow()")}}, um einen Shadow Root zu einem Element hinzuzufügen.

## Syntax

```js-nolint
let shadowRoot = browser.dom.openOrClosedShadowRoot(
  element,    // HTMLElement
)
```

### Parameter

- `element`
  - : `HTMLElement`. Das Host-Element.

### Rückgabewert

Eine {{DOMxRef("ShadowRoot")}}-Objektinstanz, unabhängig davon, ob sein
{{DOMxRef("ShadowRoot.mode", "mode")}} auf `open` oder `closed` gesetzt ist, oder `null`, wenn kein Shadow Root vorhanden ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Element.shadowRoot")}}
- [`chrome.dom.openOrClosedShadowRoot`](https://developer.chrome.com/docs/extensions/reference/api/dom#method-openOrClosedShadowRoot)
