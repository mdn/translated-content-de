---
title: "Highlight: type-Eigenschaft"
short-title: type
slug: Web/API/Highlight/type
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die `type`-Eigenschaft der {{domxref("Highlight")}}-Schnittstelle ist ein enumerierter {{jsxref("String")}}, der verwendet wird, um die Bedeutung der Hervorhebung zu spezifizieren. Dies ermöglicht es unterstützenden Technologien, wie Screenreadern, diese Bedeutung bei der Darstellung der Hervorhebung für Benutzer einzubeziehen.

Standardmäßig wird ein Highlight-Objekt seinen Typ auf `highlight` gesetzt haben, aber Sie können es in `spelling-error` oder `grammar-error` ändern.

## Wert

Die möglichen Werte des enumerierten Werts `type` sind:

- `highlight`
  - : Dies ist der Standard-Hervorhebungstyp. Er hat keine spezifische Bedeutung.
- `spelling-error`
  - : Verwenden Sie diesen Typ, wenn die Hervorhebung verwendet wird, um falsch geschriebene Inhalte hervorzuheben.
- `grammar-error`
  - : Verwenden Sie diesen Typ, wenn die Hervorhebung verwendet wird, um inhaltlich grammatisch falsche Inhalte hervorzuheben.

## Beispiele

```js
const spellErrorRange = new Range();
spellErrorRange.setStart(textNode, 10);
spellErrorRange.setEnd(textNode, 20);

const spellErrorsHighlight = new Highlight(spellErrorRange);

spellErrorsHighlight.type = "spelling-error";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
