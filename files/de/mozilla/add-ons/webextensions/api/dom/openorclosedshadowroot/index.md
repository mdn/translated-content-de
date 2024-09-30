---
title: dom.openOrClosedShadowRoot()
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft den offenen Shadow Root oder den geschlossenen Shadow Root ab, der von dem angegebenen Element gehostet wird. Wenn der Shadow Root nicht an das Element angehängt ist, wird `null` zurückgegeben.

> [!NOTE]
> In Firefox ist die entsprechende Eigenschaft `element.openOrClosedShadowRoot`. Diese schreibgeschützte Eigenschaft stellt den von dem Element gehosteten Shadow Root dar, unabhängig davon, ob dessen [`mode`](/de/docs/Web/API/ShadowRoot/mode) `open` oder `closed` ist.
>
> Verwenden Sie [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einem Element einen Shadow Root hinzuzufügen.

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

Eine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objektinstanz, unabhängig davon, ob deren
[`mode`](/de/docs/Web/API/ShadowRoot/mode) auf `open` oder
`closed` gesetzt ist, oder `null`, wenn kein Shadow Root vorhanden ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)
- [`chrome.dom.openOrClosedShadowRoot`](https://developer.chrome.com/docs/extensions/reference/api/dom#method-openOrClosedShadowRoot)
