---
title: HTML `writingsuggestions` globales Attribut
short-title: writingsuggestions
slug: Web/HTML/Reference/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`writingsuggestions`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das angibt, ob browserseitig bereitgestellte Schreibvorschläge im Geltungsbereich des Elements aktiviert werden sollen oder nicht.

Einige Browser bieten den Benutzern beim Tippen in editierbaren Feldern Schreibvorschläge an. Vorschläge erscheinen normalerweise als ausgegrauter Text, der nach dem Textcursor positioniert ist und den Satz des Benutzers vervollständigt. Obwohl dies für Benutzer hilfreich sein kann, möchten Entwickler manchmal die Schreibvorschläge deaktivieren, beispielsweise wenn sie spezifische Schreibvorschläge für die Website bereitstellen.

Das `writingsuggestions`-Attribut kann auf editierbaren Feldern wie {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Elementen gesetzt werden oder auf anderen HTML-Elementen, um das Verhalten der Browser-Vorschläge auf Abschnitten einer Seite oder auf die gesamte Seite zu steuern.

## Syntax

In Browsern, die sie unterstützen, sind Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions`-Attributs auf `false`. Wenn Sie den Wert auf `true` setzen oder weglassen, werden Schreibvorschläge aktiviert.

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

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) Attribut
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
- {{HTMLElement("textarea")}}
- {{HTMLElement("input")}}
- {{HTMLElement("datalist")}} und [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut
