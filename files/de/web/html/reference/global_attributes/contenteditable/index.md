---
title: HTML contenteditable globales Attribut
short-title: contenteditable
slug: Web/HTML/Reference/Global_attributes/contenteditable
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

Das **`contenteditable`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein aufgezähltes Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden können soll. Wenn ja, ändert der Browser dessen Widget, um die Bearbeitung zu ermöglichen.

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

- `true` oder ein _leerer String_, was anzeigt, dass das Element bearbeitbar ist.
- `false`, was anzeigt, dass das Element nicht bearbeitbar ist.
- `plaintext-only`, was anzeigt, dass der Rohtext des Elements bearbeitbar ist, aber Rich-Text-Formatierung deaktiviert ist.

Wenn das Attribut ohne einen Wert gegeben wird, wie `<label contenteditable>Beispiel Label</label>`, wird dessen Wert als leerer String behandelt.

Wenn dieses Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom Elternelement _geerbt_: Das Element ist also bearbeitbar, wenn sein Elternelement bearbeitbar ist.

Beachten Sie, dass, obwohl die erlaubten Werte `true` und `false` umfassen, dieses Attribut ein _{{Glossary("Enumerated", "aufzählbares")}}_ ist und kein _Boolean_.

Sie können die Farbe, die verwendet wird, um die Texteinfügemarke zu zeichnen, mit der CSS-Eigenschaft {{cssxref("caret-color")}} festlegen.

Elemente, die durch das Verwenden des `contenteditable` Attributs bearbeitbar und damit interaktiv gemacht werden, können fokussiert werden. Sie nehmen an der sequentiellen Tastaturnavigation teil. Allerdings werden Elemente mit dem `contenteditable` Attribut, die innerhalb anderer `contenteditable` Elemente verschachtelt sind, standardmäßig nicht zur Tabulatorreihenfolge hinzugefügt. Sie können die verschachtelten `contenteditable` Elemente zur Tastaturnavigationsreihenfolge hinzufügen, indem Sie den `tabindex` Wert angeben ([`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).

Wenn Inhalte in ein Element mit `contenteditable="true"` eingefügt werden, bleibt die gesamte Formatierung erhalten. Wenn Inhalte in ein Element mit `contenteditable="plaintext-only"` eingefügt werden, wird die gesamte Formatierung entfernt.

## Beispiele

### Inhalt in `contenteditable` einfügen

Dieses Beispiel hat zwei {{HTMLElement("div")}} Elemente mit `contenteditable`, das erste mit dem Wert `true` und das zweite mit dem Wert `plaintext-only`. Kopieren Sie den untenstehenden Inhalt und fügen Sie ihn in jedes `div` ein, um deren Auswirkungen zu sehen.

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
  font-family: "Georgia", serif;
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
- Die CSS-Eigenschaft {{cssxref("caret-color")}}
- [HTMLElement `input` Ereignis](/de/docs/Web/API/Element/input_event)
