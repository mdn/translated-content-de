---
title: "Highlight: type-Eigenschaft"
short-title: type
slug: Web/API/Highlight/type
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die `type`-Eigenschaft des [`Highlight`](/de/docs/Web/API/Highlight)-Interfaces ist ein aufgezählter {{jsxref("String")}}, der verwendet wird, um die Bedeutung des Highlights anzugeben. Dies ermöglicht es unterstützenden Technologien, wie z. B. Screenreadern, diese Bedeutung zu umfassen, wenn sie das Highlight den Benutzern präsentieren.

Standardmäßig wird ein Highlight-Objekt seinen Typ auf `highlight` setzen. Sie können ihn jedoch in `spelling-error` oder `grammar-error` ändern.

## Wert

Die möglichen Werte der aufgezählten `type`-Werte sind:

- `highlight`
  - : Dies ist der Standard-Highlight-Typ. Er hat keine spezifische Bedeutung.
- `spelling-error`
  - : Verwenden Sie diesen Typ, wenn das Highlight verwendet wird, um falsch geschriebenen Inhalt hervorzuheben.
- `grammar-error`
  - : Verwenden Sie diesen Typ, wenn das Highlight verwendet wird, um grammatisch falschen Inhalt hervorzuheben.

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
