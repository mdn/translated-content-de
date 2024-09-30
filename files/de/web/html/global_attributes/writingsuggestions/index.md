---
title: writingsuggestions
slug: Web/HTML/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 87b1277782f71a58693aeb6a83464e3ccabbfa20
---

{{HTMLSidebar("Global_attributes")}}

Das **`writingsuggestions`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [enumeriertes](/de/docs/Glossary/enumerated) Attribut, das angibt, ob browsergestützte Schreibvorschläge für das Element aktiviert werden sollen oder nicht.

Einige Browser bieten Nutzern während der Eingabe in editierbaren Feldern Schreibvorschläge an. Vorschläge erscheinen normalerweise als ausgegrauter Text, der hinter dem Textcursor positioniert ist und den Satz des Nutzers vervollständigt. Während dies für Nutzer hilfreich sein kann, möchten Entwickler in einigen Fällen die Schreibvorschläge deaktivieren, zum Beispiel, wenn spezifische Schreibvorschläge von der Website angeboten werden.

Das `writingsuggestions`-Attribut kann auf editierbaren Feldern wie {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Elementen gesetzt werden oder auf anderen HTML-Elementen, um das Verhalten der Vorschläge des Browsers in Abschnitten einer Seite oder auf der gesamten Seite zu steuern.

## Syntax

In Browsern, die sie unterstützen, sind Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions`-Attributs auf `false`. Das Setzen des Attributwerts auf `true` oder das Weglassen des Wertes aktiviert die Schreibvorschläge.

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
