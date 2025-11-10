---
title: "Highlight: type-Eigenschaft"
short-title: type
slug: Web/API/Highlight/type
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Custom Highlight API")}}

Die `type`-Eigenschaft des [`Highlight`](/de/docs/Web/API/Highlight)-Interfaces ist ein aufgezählter {{jsxref("String")}}, der verwendet wird, um die Bedeutung des Highlights festzulegen. Dies ermöglicht es unterstützenden Technologien, wie Bildschirmlesegeräten, diese Bedeutung zu berücksichtigen, wenn das Highlight den Nutzern angezeigt wird.

Standardmäßig hat ein Highlight-Objekt den Typ `highlight` eingestellt, aber Sie können ihn auf `spelling-error` oder `grammar-error` ändern.

## Wert

Die möglichen Werte des aufgezählten Wertes `type` sind:

- `highlight`
  - : Dies ist der Standard-Highlight-Typ. Es hat keine spezifische Bedeutung.
- `spelling-error`
  - : Verwenden Sie diesen Typ, wenn das Highlight zum Hervorheben von falsch geschriebenem Inhalt verwendet wird.
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

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS custom highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
