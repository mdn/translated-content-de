---
title: dom.openOrClosedShadowRoot()
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft die offene oder geschlossene `shadow root` ab, die vom angegebenen Element gehostet wird. Wenn die `shadow root` nicht an das Element angefügt ist, wird `null` zurückgegeben.

> [!NOTE]
> In Firefox ist die entsprechende Eigenschaft `element.openOrClosedShadowRoot`. Diese schreibgeschützte Eigenschaft repräsentiert die `shadow root`, die vom Element gehostet wird, unabhängig davon, ob ihr [`mode`](/de/docs/Web/API/ShadowRoot/mode) `open` oder `closed` ist.
>
> Verwenden Sie [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um eine `shadow root` zu einem Element hinzuzufügen.

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

Eine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objektinstanz, unabhängig davon, ob ihr
[`mode`](/de/docs/Web/API/ShadowRoot/mode) auf `open` oder
`closed` eingestellt ist, oder `null`, wenn keine `shadow root` vorhanden ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)
- [`chrome.dom.openOrClosedShadowRoot`](https://developer.chrome.com/docs/extensions/reference/api/dom#method-openOrClosedShadowRoot)
