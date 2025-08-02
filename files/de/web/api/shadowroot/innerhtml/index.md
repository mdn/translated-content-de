---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

{{APIRef("Shadow DOM")}}

Die **`innerHTML`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces ruft das HTML-Markup für den DOM-Baum innerhalb des `ShadowRoot` ab oder setzt es.

Es ist zu beachten, dass einige Browser die `<`- und `>`-Zeichen als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies geschieht, um eine potenzielle Sicherheitsanfälligkeit ([mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) zu verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und somit einen Cross-Site Scripting (XSS)-Angriff ermöglichen.

## Wert

Ein String.

Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `sr.innerHTML = null` gleichbedeutend mit `sr.innerHTML = ""` ist.

## Beispiele

### Festlegen des innerHTML eines Shadow-Roots

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
