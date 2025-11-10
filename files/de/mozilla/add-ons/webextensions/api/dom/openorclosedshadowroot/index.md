---
title: dom.openOrClosedShadowRoot()
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft das offene oder das geschlossene Shadow-Root ab, das vom angegebenen Element gehostet wird. Wenn das Shadow-Root nicht an das Element angehängt ist, wird `null` zurückgegeben.

> [!NOTE]
> In Firefox ist die entsprechende Eigenschaft `element.openOrClosedShadowRoot`. Diese schreibgeschützte Eigenschaft repräsentiert das Shadow-Root, das vom Element gehostet wird, unabhängig davon, ob dessen [`mode`](/de/docs/Web/API/ShadowRoot/mode) `open` oder `closed` ist.
>
> Verwenden Sie [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einem Element ein Shadow-Root hinzuzufügen.

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

Eine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objektinstanz, unabhängig davon, ob dessen
[`mode`](/de/docs/Web/API/ShadowRoot/mode) auf `open` oder
`closed` gesetzt ist, oder `null`, wenn kein Shadow-Root vorhanden ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)
- [`chrome.dom.openOrClosedShadowRoot`](https://developer.chrome.com/docs/extensions/reference/api/dom#method-openOrClosedShadowRoot)
