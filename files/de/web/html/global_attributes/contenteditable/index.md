---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
l10n:
  sourceCommit: 4c8640c381c1c8a3a12d45431b9cd71c9671c8d2
---

{{HTMLSidebar("Global_attributes")}}

Das **`contenteditable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein aufgezähltes Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Ist dies der Fall, modifiziert der Browser sein Widget, um die Bearbeitung zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

## Wert

Das Attribut muss einen der folgenden Werte annehmen:

- `true` oder ein _leerer String_, was anzeigt, dass das Element bearbeitbar ist.
- `false`, was anzeigt, dass das Element nicht bearbeitbar ist.
- `plaintext-only`, was anzeigt, dass der Rohtext des Elements bearbeitbar ist, aber die Formatierung mit Rich Text deaktiviert ist.

Wird das Attribut ohne einen Wert angegeben, wie z.B. `<label contenteditable>Example Label</label>`, wird sein Wert als leerer String behandelt.

Fehlt dieses Attribut oder ist sein Wert ungültig, wird sein Wert von seinem Elternelement _geerbt_: Das Element ist bearbeitbar, wenn sein Elternelement bearbeitbar ist.

Beachten Sie, dass obwohl die erlaubten Werte `true` und `false` beinhalten, dieses Attribut ein _{{Glossary("Enumerated", "aufgezähltes")}}_ und kein _Boolean_-Attribut ist.

Sie können die Farbe, die zum Zeichnen der Texteingabemarkierung ({{Glossary("caret", "caret")}}) verwendet wird, mit der CSS-Eigenschaft {{cssxref("caret-color")}} festlegen.

Elemente, die durch das `contenteditable` Attribut bearbeitbar und somit interaktiv gemacht werden, können fokussiert werden. Sie nehmen an der sequentiellen Tastaturnavigation teil. Allerdings werden Elemente mit dem `contenteditable` Attribut, die innerhalb anderer `contenteditable` Elemente verschachtelt sind, standardmäßig nicht zur Tabulatorsequenz hinzugefügt. Sie können die verschachtelten `contenteditable` Elemente zur Tastaturnavigationssequenz hinzufügen, indem Sie den `tabindex` Wert festlegen ([`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- Die CSS-Eigenschaft {{cssxref("caret-color")}}
- [HTMLElement `input` Ereignis](/de/docs/Web/API/Element/input_event)
