---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
l10n:
  sourceCommit: 4c8640c381c1c8a3a12d45431b9cd71c9671c8d2
---

{{HTMLSidebar("Global_attributes")}}

Das **`contenteditable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein aufgezähltes Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden soll. Falls ja, passt der Browser sein Widget an, um die Bearbeitung zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

## Wert

Das Attribut muss einen der folgenden Werte haben:

- `true` oder ein _leerer String_, was anzeigt, dass das Element bearbeitbar ist.
- `false`, was anzeigt, dass das Element nicht bearbeitbar ist.
- `plaintext-only`, was anzeigt, dass der rohe Text des Elements bearbeitet werden kann, aber die Formatierung von Rich-Text deaktiviert ist.

Wenn das Attribut ohne Wert angegeben wird, wie `<label contenteditable>Beispielbeschriftung</label>`, wird sein Wert als leerer String behandelt.

Wenn dieses Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom Elternelement _geerbt_: Das Element ist bearbeitbar, wenn sein Elternelement bearbeitbar ist.

Beachten Sie, dass obwohl seine erlaubten Werte `true` und `false` enthalten, dieses Attribut ein _[aufgezähltes](/de/docs/Glossary/Enumerated)_ Attribut und kein _Boolesches_ ist.

Sie können die Farbe, die verwendet wird, um den Texteingabecursor zu zeichnen, mit der CSS-Eigenschaft {{cssxref("caret-color")}} festlegen.

Elemente, die durch das `contenteditable`-Attribut bearbeitbar und somit interaktiv gemacht werden, können fokussiert werden. Sie nehmen an der sequentiellen Tastaturnavigation teil. Allerdings werden Elemente mit dem `contenteditable`-Attribut, die innerhalb anderer `contenteditable`-Elemente verschachtelt sind, standardmäßig nicht zum Tabulator-Ablauf hinzugefügt. Sie können die verschachtelten `contenteditable`-Elemente zur Tastaturnavigationssequenz hinzufügen, indem Sie den `tabindex`-Wert angeben ([`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- Die CSS-Eigenschaft {{cssxref("caret-color")}}
- [HTMLElement `input`-Ereignis](/de/docs/Web/API/Element/input_event)
