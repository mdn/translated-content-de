---
title: "`writingsuggestions` HTML Globales Attribut"
short-title: writingsuggestions
slug: Web/HTML/Reference/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`writingsuggestions`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "enumeriertes Attribut")}}, das angibt, ob vom Browser bereitgestellte Schreibvorschläge im Bereich des Elements aktiviert sein sollen oder nicht.

Einige Browser bieten den Nutzern während der Eingabe in editierbaren Feldern Schreibvorschläge an. Vorschläge erscheinen normalerweise als ausgegrauter Text, der nach dem Textcursor positioniert ist und den Satz des Nutzers vervollständigt. Obwohl dies für die Nutzer hilfreich sein kann, möchten Entwickler in einigen Fällen die Schreibvorschläge deaktivieren, z. B. wenn sie spezifische Schreibvorschläge für die Website bereitstellen.

Das `writingsuggestions`-Attribut kann auf editierbaren Feldern wie {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Elementen gesetzt werden oder auf anderen HTML-Elementen, um das Verhalten der Browserschreibvorschläge in bestimmten Bereichen einer Seite oder auf der gesamten Seite zu steuern.

## Syntax

In Browsern, die sie unterstützen, sind Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions`-Attributs auf `false`. Wird der Wert auf `true` gesetzt oder weggelassen, sind Schreibvorschläge aktiviert.

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
