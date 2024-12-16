---
title: writingsuggestions
slug: Web/HTML/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 8d5d18805ad96e1c56d72de5c26de60e86dfa817
---

{{HTMLSidebar("Global_attributes")}}

Das **`writingsuggestions`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das anzeigt, ob von den Browsern bereitgestellte Schreibvorschläge im Bereich des Elements aktiviert werden sollen oder nicht.

Einige Browser bieten Benutzern beim Eingeben in editierbaren Feldern Schreibvorschläge an. Vorschläge erscheinen normalerweise als ausgegrauter Text, der sich hinter dem Textcursor befindet und den Satz des Benutzers vervollständigt. Während dies für Benutzer hilfreich sein kann, möchten Entwickler in einigen Fällen Schreibvorschläge deaktivieren, zum Beispiel wenn sie spezifische Schreibvorschläge für die Seite bereitstellen.

Das `writingsuggestions` Attribut kann auf editierbare Felder wie {{htmlelement('input')}} oder {{htmlelement('textarea')}} Elemente gesetzt werden, oder auf andere HTML-Elemente, um das Verhalten der Browser-Vorschläge in Bereichen einer Seite oder auf der gesamten Seite zu steuern.

## Syntax

In unterstützten Browsern sind Schreibvorschläge standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie den Wert des `writingsuggestions` Attributs auf `false`. Das Setzen des Attributwerts auf `true` oder das Weglassen des Wertes aktiviert die Schreibvorschläge.

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
