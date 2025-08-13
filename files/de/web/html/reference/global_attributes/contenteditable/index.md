---
title: HTML contenteditable globales Attribut
short-title: contenteditable
slug: Web/HTML/Reference/Global_attributes/contenteditable
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`contenteditable`**- [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein aufgezähltes Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden kann. Wenn ja, ändert der Browser sein Widget, um die Bearbeitung zu ermöglichen.

{{InteractiveExample("HTML Demo: contenteditable", "tabbed-shorter")}}

```html interactive-example
<blockquote contenteditable="true">
  <p>Edit this content to add your own quote</p>
</blockquote>

<cite contenteditable="true">-- Write your own name here</cite>
```

```css interactive-example
blockquote {
  background: #eeeeee;
  border-radius: 5px;
  margin: 16px 0;
}

blockquote p {
  padding: 15px;
}

cite {
  margin: 16px 32px;
  font-weight: bold;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

[contenteditable="true"] {
  caret-color: red;
}
```

## Wert

Das Attribut muss einen der folgenden Werte annehmen:

- `true` oder ein _leerer String_, was bedeutet, dass das Element bearbeitbar ist.
- `false`, was bedeutet, dass das Element nicht bearbeitbar ist.
- `plaintext-only`, was bedeutet, dass der Rohtext des Elements bearbeitbar ist, aber die Formatierung von Richtext deaktiviert ist.

Wenn das Attribut ohne Wert angegeben wird, wie in `<label contenteditable>Example Label</label>`, wird sein Wert als leerer String behandelt.

Wenn dieses Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom Elternelement _geerbt_: Das Element ist also bearbeitbar, wenn sein Elternelement bearbeitbar ist.

Obwohl seine erlaubten Werte `true` und `false` umfassen, ist dieses Attribut ein _{{Glossary("Enumerated", "aufgezähltes")}}_ und kein _Boolean_-Attribut.

Sie können die Farbe, die zum Zeichnen des Texteinfüge-{{Glossary("caret", "Cursors")}} verwendet wird, mit der CSS {{cssxref("caret-color")}}-Eigenschaft festlegen.

Elemente, die mit dem `contenteditable`-Attribut bearbeitbar und somit interaktiv gemacht werden, können fokussiert werden. Sie nehmen an der sequentiellen Tastaturnavigation teil. Allerdings werden Elemente mit dem `contenteditable`-Attribut, die innerhalb anderer `contenteditable`-Elemente verschachtelt sind, standardmäßig nicht zur Tabulatorsequenz hinzugefügt. Sie können die verschachtelten `contenteditable`-Elemente zur Tastaturnavigationssequenz hinzufügen, indem Sie den `tabindex`-Wert angeben ([`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).

Wenn Inhalte in ein Element mit `contenteditable="true"` eingefügt werden, bleibt die gesamte Formatierung erhalten. Wenn Inhalte in ein Element mit `contenteditable="plaintext-only"` eingefügt werden, wird die gesamte Formatierung entfernt.

## Beispiele

### Einfügen von Inhalten in contenteditable

Dieses Beispiel hat zwei {{HTMLElement("div")}}-Elemente mit `contenteditable`, das erste mit dem Wert `true` und das zweite mit dem Wert `plaintext-only`. Kopieren Sie den untenstehenden Inhalt und fügen Sie ihn in jedes `div`-Element ein, um deren Effekte zu sehen.

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
    margin: 0;
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

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- Die CSS {{cssxref("caret-color")}}-Eigenschaft
- [HTMLElement `input`-Ereignis](/de/docs/Web/API/Element/input_event)
