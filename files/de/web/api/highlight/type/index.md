---
title: "Highlight: type-Eigenschaft"
short-title: type
slug: Web/API/Highlight/type
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die `type`-Eigenschaft des [`Highlight`](/de/docs/Web/API/Highlight)-Interfaces ist ein aufgezählter {{jsxref("String")}}, der verwendet wird, um die Bedeutung des Highlights zu spezifizieren. Dies ermöglicht unterstützenden Technologien, wie Bildschirmlesegeräten, diese Bedeutung einzubeziehen, wenn das Highlight den Benutzern verfügbar gemacht wird.

Standardmäßig hat ein Highlight-Objekt seinen Typ auf `highlight` gesetzt, aber Sie können ihn auf `spelling-error` oder `grammar-error` ändern.

## Wert

Die möglichen Werte des aufgezählten `type`-Werts sind:

- `highlight`
  - : Dies ist der Standard-Highlight-Typ. Es hat keine spezifische Bedeutung.
- `spelling-error`
  - : Verwenden Sie diesen Typ, wenn das Highlight verwendet wird, um falsch geschriebenen Inhalt hervorzuheben.
- `grammar-error`
  - : Verwenden Sie diesen Typ, wenn das Highlight verwendet wird, um inhaltliche grammatikalische Fehler hervorzuheben.

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
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
