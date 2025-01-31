---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
l10n:
  sourceCommit: 4d22748d5c77e54f6168b2f4d860c4a2081393d2
---

{{HTMLSidebar("Global_attributes")}}

Das **`contenteditable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein aufgezähltes Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Falls ja, modifiziert der Browser sein Widget, um die Bearbeitung zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

## Wert

Das Attribut muss einen der folgenden Werte haben:

- `true` oder ein _leerer String_, was angibt, dass das Element bearbeitbar ist.
- `false`, was anzeigt, dass das Element nicht bearbeitbar ist.
- `plaintext-only`, was angibt, dass der Rohtext des Elements bearbeitbar ist, jedoch die Formatierung von Rich-Text deaktiviert ist.

Wenn das Attribut ohne Wert angegeben wird, wie in `<label contenteditable>Beispiel Etikett</label>`, wird sein Wert als leerer String behandelt.

Wenn dieses Attribut fehlt oder sein Wert ungültig ist, wird sein Wert von seinem übergeordneten Element _geerbt_: Das Element ist also bearbeitbar, wenn sein übergeordnetes Element bearbeitbar ist.

Beachten Sie, dass obwohl die erlaubten Werte `true` und `false` enthalten, dieses Attribut ein _{{Glossary("Enumerated", "aufgezähltes")}}_ und kein _Boolesches_ Attribut ist.

Sie können die Farbe, die zum Zeichnen des Text-Einfügemarkens verwendet wird, mit der CSS-Eigenschaft {{cssxref("caret-color")}} festlegen.

Elemente, die mit dem Attribut `contenteditable` bearbeitbar und dadurch interaktiv gemacht werden, können fokussiert werden. Sie nehmen an der sequentiellen Tastaturnavigation teil. Allerdings werden Elemente mit dem `contenteditable`-Attribut, die in andere `contenteditable`-Elemente eingebettet sind, standardmäßig nicht in die Tabulator-Sequenz aufgenommen. Sie können die eingebetteten `contenteditable`-Elemente zur Tastatur-Navigationssequenz hinzufügen, indem Sie den `tabindex`-Wert angeben ([`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)).

Wenn Inhalt in ein Element mit `contenteditable="true"` eingefügt wird, bleibt die gesamte Formatierung erhalten. Wenn Inhalte in ein Element mit `contenteditable="plaintext-only"` eingefügt werden, wird alle Formatierung entfernt.

## Beispiele

### Inhalte in `contenteditable` einfügen

Dieses Beispiel enthält zwei {{HTMLElement("div")}}-Elemente mit `contenteditable`, das erste mit dem Wert `true` und das zweite mit dem Wert `plaintext-only`. Kopieren Sie den untenstehenden Inhalt und fügen Sie ihn in jedes `div` ein, um ihre Effekte zu sehen.

#### HTML

```html hidden
<h2>Content to copy</h2>
<p class="instructions">
  Copy all the text in the block below and paste it into each of the
  contenteditable blocks to compare the results.
</p>
<section class="copying">
  <div class="copy">
    <p>
      This is a paragraph containing <strong>Bold</strong>, <em>Italic</em>, and
      <span class="red">red</span> text, followed by an ordered list:
    </p>
    <ol>
      <li>Step one</li>
      <li>Step two</li>
      <li>Step three</li>
    </ol>
  </div>
</section>
```

```html
<h2>Pasting areas</h2>
<section class="pasting">
  <div class="wrapper">
    <h3>contenteditable="true"</h3>
    <div contenteditable="true"></div>
  </div>
  <div class="wrapper">
    <h3>contenteditable="plaintext-only"</h3>
    <div contenteditable="plaintext-only"></div>
  </div>
</section>
```

```css hidden
h2 {
  margin-bottom: 0;
}
.copying {
  font-family: Georgia, serif;
  margin: 1rem;
  padding: 1rem;
  border: solid black 1px;
}
.red {
  color: red;
}
.pasting {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  .wrapper {
    flex: 1 1;
    margin: 0
    padding: 0;
  }
  h3 {
    font-family: monospace;
  }
  [contenteditable] {
    min-height: 3rem;
    border: solid 1px;
    padding: 0.5rem;
    background-color: whitesmoke;
  }
  [contenteditable="true"] {
    caret-color: blue;
  }
  [contenteditable="plaintext-only"] {
    caret-color: red;
  }
}
```

{{EmbedLiveSample("Pasting_Content_into_contenteditable", 400, 620)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- Die CSS-Eigenschaft {{cssxref("caret-color")}}
- [HTMLElement `input`-Ereignis](/de/docs/Web/API/Element/input_event)
