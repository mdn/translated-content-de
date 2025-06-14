---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: aebeb771add7275369094687b4925e6dbd5bf7b5
---

{{APIRef("Shadow DOM")}}

Die **`innerHTML`**-Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle liest oder setzt das HTML-Markup im DOM-Baum innerhalb der `ShadowRoot`.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) zu verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen, wodurch ein Cross-Site-Scripting (XSS)-Angriff ermöglicht wird.

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `sr.innerHTML = null` äquivalent zu `sr.innerHTML = ""` ist.

## Beispiele

### Das innerHTML einer Shadow-Root setzen

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
