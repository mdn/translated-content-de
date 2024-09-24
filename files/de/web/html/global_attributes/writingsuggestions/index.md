---
title: Schreibvorschläge
slug: Web/HTML/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 87b1277782f71a58693aeb6a83464e3ccabbfa20
---

{{HTMLSidebar("Global_attributes")}}

Das **`writingsuggestions`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{glossary("enumerated")}} Attribut, das angibt, ob von der Browserseite bereitgestellte Schreibvorschläge für das Element aktiviert sein sollen oder nicht.

Einige Browser bieten den Benutzern Schreibvorschläge an, während sie in bearbeitbare Felder eingeben. Vorschläge erscheinen normalerweise als ausgegrauter Text, der nach dem Textcursor positioniert ist und den Satz des Benutzers vervollständigt. Obwohl dies für Benutzer hilfreich sein kann, möchten Entwickler die Schreibvorschläge in einigen Fällen ausschalten, z. B. wenn sie spezifische Schreibvorschläge für die Website bereitstellen.

Das `writingsuggestions`-Attribut kann auf bearbeitbaren Feldern wie {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Elementen gesetzt werden oder auf anderen HTML-Elementen, um das Verhalten der Browservorschläge für Abschnitte einer Seite oder die gesamte Seite zu steuern.

## Syntax

In unterstützenden Browsern sind Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions`-Attributs auf `false`. Das Setzen des Attributwerts auf `true` oder das Weglassen des Werts aktiviert die Schreibvorschläge.

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
