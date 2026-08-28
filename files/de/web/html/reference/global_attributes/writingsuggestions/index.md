---
title: "`writingsuggestions` HTML globales Attribut"
short-title: writingsuggestions
slug: Web/HTML/Reference/Global_attributes/writingsuggestions
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

Das **`writingsuggestions`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das angibt, ob von Browsern bereitgestellte Schreibvorschläge innerhalb des Elements aktiviert werden sollen oder nicht.

Einige Browser bieten Benutzern Schreibvorschläge an, während sie in bearbeitbaren Feldern tippen. Vorschläge erscheinen normalerweise als ausgegrauter Text, der nach dem Textcursor positioniert ist und den Satz des Benutzers vervollständigt. Obwohl dies für Benutzer hilfreich sein kann, möchten Entwickler möglicherweise Schreibvorschläge in bestimmten Fällen deaktivieren, wie zum Beispiel wenn website-spezifische Schreibvorschläge bereitgestellt werden.

Das `writingsuggestions`-Attribut kann auf bearbeitbaren Feldern wie {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Elementen gesetzt werden oder auf anderen HTML-Elementen, um das Verhalten der Browservorschläge auf Abschnitte einer Seite oder auf die gesamte Seite zu steuern.

## Syntax

In unterstützenden Browsern sind Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions`-Attributs auf `false`. Durch Setzen des Attributwerts auf `true` oder durch Auslassen des Wertes werden Schreibvorschläge aktiviert.

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
