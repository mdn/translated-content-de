---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
l10n:
  sourceCommit: 4c8640c381c1c8a3a12d45431b9cd71c9671c8d2
---

{{HTMLSidebar("Global_attributes")}}

Das **`contenteditable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein aufgezähltes Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden kann. Ist dies der Fall, ändert der Browser sein Widget, um das Bearbeiten zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

## Wert

Das Attribut muss einen der folgenden Werte annehmen:

- `true` oder ein _leerer String_, was anzeigt, dass das Element bearbeitbar ist.
- `false`, was anzeigt, dass das Element nicht bearbeitbar ist.
- `plaintext-only`, was anzeigt, dass der rohe Text des Elements bearbeitbar ist, aber Formatierungen im Rich-Text-Format deaktiviert sind.

Wenn das Attribut ohne einen Wert, wie `<label contenteditable>Example Label</label>`, angegeben wird, wird sein Wert als leerer String behandelt.

Wenn dieses Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom übergeordneten Element _geerbt_: Das Element ist also bearbeitbar, wenn sein übergeordnetes Element bearbeitbar ist.

Beachten Sie, dass obwohl seine zulässigen Werte `true` und `false` umfassen, dieses Attribut ein _[aufgezähltes](/de/docs/Glossary/Enumerated)_ und kein _Boolesches_ ist.

Sie können die Farbe, die verwendet wird, um den Texteingabe-{{Glossary("caret")}} zu zeichnen, mit der CSS-Eigenschaft {{cssxref("caret-color")}} festlegen.

Elemente, die durch die Verwendung des `contenteditable` Attributs bearbeitbar und damit interaktiv gemacht werden, können fokussiert werden. Sie nehmen an der sequentiellen Tastaturnavigation teil. Elemente mit dem `contenteditable` Attribut, die innerhalb anderer `contenteditable` Elemente verschachtelt sind, werden standardmäßig nicht zur Tabulatorsequenz hinzugefügt. Sie können die verschachtelten `contenteditable` Elemente zur Tastaturnavigationssequenz hinzufügen, indem Sie den `tabindex` Wert angeben ([`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} und {{domxref("HTMLElement.isContentEditable")}}
- Die CSS-Eigenschaft {{cssxref("caret-color")}}
- [HTMLElement `input` Ereignis](/de/docs/Web/API/Element/input_event)
