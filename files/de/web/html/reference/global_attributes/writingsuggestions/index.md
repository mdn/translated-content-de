---
title: writingsuggestions
slug: Web/HTML/Reference/Global_attributes/writingsuggestions
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`writingsuggestions`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das angibt, ob die vom Browser bereitgestellten Schreibvorschläge im Bereich des Elements aktiviert sein sollen oder nicht.

Einige Browser bieten Nutzern Schreibvorschläge, während sie in editierbaren Feldern tippen. Vorschläge erscheinen normalerweise als ausgegrauter Text, der nach dem Textcursor positioniert ist und den Satz des Nutzers vervollständigt. Während dies den Nutzern hilfreich sein kann, möchten Entwickler in manchen Fällen Schreibvorschläge abschalten, z. B. wenn sie spezifische Schreibvorschläge für ihre Webseite bereitstellen.

Das `writingsuggestions`-Attribut kann auf editierbaren Feldern wie {{htmlelement('input')}}- oder {{htmlelement('textarea')}}-Elementen gesetzt werden oder auf anderen HTML-Elementen, um das Verhalten der Browserschreibvorschläge auf Bereichen einer Seite oder auf der gesamten Seite zu steuern.

## Syntax

In Browsern, die sie unterstützen, sind die Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions`-Attributs auf `false`. Das Festlegen des Attributwerts auf `true` oder das Weglassen des Werts aktiviert die Schreibvorschläge.

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
