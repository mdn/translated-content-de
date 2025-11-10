---
title: HTML `writingsuggestions` globales Attribut
short-title: writingsuggestions
slug: Web/HTML/Reference/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`writingsuggestions`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das angibt, ob browserbereitgestellte Schreibvorschläge im Geltungsbereich des Elements aktiviert sein sollen oder nicht.

Einige Browser bieten Benutzern während der Eingabe in editierbaren Feldern Schreibvorschläge an. Vorschläge erscheinen normalerweise als ausgegrauter Text, der nach dem Textcursor steht und den Satz des Benutzers vervollständigt. Obwohl dies für Benutzer hilfreich sein kann, möchten Entwickler möglicherweise in einigen Fällen die Schreibvorschläge deaktivieren, beispielsweise wenn sie speziell auf die Website abgestimmte Schreibvorschläge bereitstellen.

Das `writingsuggestions`-Attribut kann auf editierbaren Feldern wie {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Elementen gesetzt werden oder auf anderen HTML-Elementen, um das Verhalten der Browser-Vorschläge in bestimmten Bereichen einer Seite oder auf der gesamten Seite zu steuern.

## Syntax

In unterstützenden Browsern sind Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions`-Attributs auf `false`. Durch Setzen des Wertes auf `true` oder das Weglassen des Wertes werden Schreibvorschläge aktiviert.

Um Schreibvorschläge zu deaktivieren:

```html
<input type="text" writingsuggestions="false" />
```

Um Schreibvorschläge zu aktivieren:

```html
<input type="text" />
<input type="text" writingsuggestions />
<input type="text" writingsuggestions="true" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut
- {{HTMLElement("textarea")}}
- {{HTMLElement("input")}}
- {{HTMLElement("datalist")}} und [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut
