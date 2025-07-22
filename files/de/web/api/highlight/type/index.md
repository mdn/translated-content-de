---
title: "Highlight: type-Eigenschaft"
short-title: type
slug: Web/API/Highlight/type
l10n:
  sourceCommit: 6afd6f5230eb0735348582b3519efce8994116ad
---

{{APIRef("CSS Custom Highlight API")}}

Die `type`-Eigenschaft des [`Highlight`](/de/docs/Web/API/Highlight)-Interfaces ist ein enumerierter {{jsxref("String")}}, der verwendet wird, um die Bedeutung der Hervorhebung festzulegen. Dies ermöglicht es unterstützenden Technologien, wie Bildschirmlesegeräten, diese Bedeutung einzubeziehen, wenn die Hervorhebung Benutzern zugänglich gemacht wird.

Standardmäßig hat ein Highlight-Objekt seinen Typ auf `highlight` gesetzt, aber Sie können ihn in `spelling-error` oder `grammar-error` ändern.

## Wert

Die möglichen Werte des `type`-Enumerationswerts sind:

- `highlight`
  - : Dies ist der Standardtyp der Hervorhebung. Er hat keine spezielle Bedeutung.
- `spelling-error`
  - : Verwenden Sie diesen Typ, wenn die Hervorhebung verwendet wird, um falsch geschriebenen Inhalt hervorzuheben.
- `grammar-error`
  - : Verwenden Sie diesen Typ, wenn die Hervorhebung verwendet wird, um grammatikalisch inkorrekten Inhalt hervorzuheben.

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API](/de/docs/Web/CSS/CSS_custom_highlight_API)-Modul
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
