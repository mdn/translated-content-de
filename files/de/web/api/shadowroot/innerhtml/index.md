---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 4289d2dc8e2f64cc37541cde41894e7d0aee1424
---

{{APIRef("Shadow DOM")}}

Die **`innerHTML`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces liest oder setzt das HTML-Markup des DOM-Baums innerhalb des `ShadowRoot`.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) zu verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Säuberungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und einen Cross-Site-Scripting-(XSS)-Angriff ermöglichen.

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt. Daher ist `sr.innerHTML = null` gleichbedeutend mit `sr.innerHTML = ""`.

## Beispiele

### Setzen des innerHTML eines Shadow-Root

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
