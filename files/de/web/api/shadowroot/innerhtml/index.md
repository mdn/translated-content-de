---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 9ec0f8b51c464119792fbc36115b8f407939e2bb
---

{{APIRef("Shadow DOM")}}

Die **`innerHTML`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces setzt oder holt das HTML-Markup für den DOM-Baum innerhalb des `ShadowRoot`.

Beachten Sie, dass einige Browser `<` und `>` in Attributen als `&lt;` und `&gt;` serialisieren, wenn sie das HTML lesen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies verhindert bestimmte Exploits, bei denen Code ausführbar wird, wenn er serialisiert und dann in HTML deserialisiert wird.

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, daher ist `sr.innerHTML = null` äquivalent zu `sr.innerHTML = ""`.

## Beispiele

### Das Setzen der innerHTML eines Shadow-Roots

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
