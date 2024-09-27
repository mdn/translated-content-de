---
title: writingsuggestions
slug: Web/HTML/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 87b1277782f71a58693aeb6a83464e3ccabbfa20
---

{{HTMLSidebar("Global_attributes")}}

Das **`writingsuggestions`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufgezähltes](/de/docs/Glossary/enumerated) Attribut, das angibt, ob vom Browser bereitgestellte Schreibvorschläge für das Element aktiviert sein sollen oder nicht.

Einige Browser bieten Schreibvorschläge an, während Benutzer in editierbare Felder eingeben. Vorschläge erscheinen normalerweise als ausgegrauter Text, der nach dem Textcursor positioniert ist und den Satz des Benutzers vervollständigt. Obwohl dies für Benutzer nützlich sein kann, möchten Entwickler möglicherweise in einigen Fällen die Schreibvorschläge deaktivieren, etwa wenn sie eigene, seitenbezogene Schreibvorschläge bereitstellen.

Das `writingsuggestions`-Attribut kann auf editierbaren Feldern wie {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Elementen gesetzt werden oder auf andere HTML-Elemente, um das Verhalten der Browservorschläge in Abschnitten einer Seite oder auf der gesamten Seite zu steuern.

## Syntax

In Browsern, die dies unterstützen, sind Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions`-Attributs auf `false`. Durch das Setzen des Attributwerts auf `true` oder das Weglassen des Werts werden Schreibvorschläge aktiviert.

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

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attribut
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) Attribut
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut
- {{HTMLElement("textarea")}}
- {{HTMLElement("input")}}
- {{HTMLElement("datalist")}} und [`list`](/de/docs/Web/HTML/Element/input#list) Attribut
