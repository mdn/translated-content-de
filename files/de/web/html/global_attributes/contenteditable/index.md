---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`contenteditable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein aufgezähltes Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Ist dies der Fall, ändert der Browser sein Widget, um die Bearbeitung zu ermöglichen.

{{InteractiveExample("HTML Demo: contenteditable", "tabbed-shorter")}}

```html interactive-example
<blockquote contenteditable="true">
  <p>Edit this content to add your own quote</p>
</blockquote>

<cite contenteditable="true">-- Write your own name here</cite>
```

```css interactive-example
blockquote {
  background: #eee;
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

- `true` oder ein _leer Zeichen_, was anzeigt, dass das Element bearbeitbar ist.
- `false`, was anzeigt, dass das Element nicht bearbeitbar ist.
- `plaintext-only`, was anzeigt, dass der rohe Text des Elements bearbeitbar ist, jedoch die Formatierung von Rich-Text deaktiviert ist.

Wird das Attribut ohne einen Wert angegeben, wie `<label contenteditable>Beispiel-Label</label>`, wird sein Wert als leeres Zeichen behandelt.

Falls dieses Attribut fehlt oder sein Wert ungültig ist, wird sein Wert von seinem Elternelement _geerbt_: Das Element ist also bearbeitbar, wenn sein Elternteil bearbeitbar ist.

Beachten Sie, dass dieses Attribut, obwohl es die erlaubten Werte `true` und `false` enthält, ein _{{Glossary("Enumerated", "aufgezähltes")}}_ und kein _Boolean_-Attribut ist.

Sie können die Farbe, die zur Darstellung des Texteingabecursors verwendet wird, mit der CSS-Eigenschaft {{cssxref("caret-color")}} festlegen.

Elemente, die durch das `contenteditable`-Attribut bearbeitbar und somit interaktiv gemacht werden, können fokussiert werden. Sie nehmen an sequentieller Tastaturnavigation teil. Allerdings werden Elemente mit dem `contenteditable`-Attribut, die sich innerhalb anderer `contenteditable`-Elemente befinden, standardmäßig nicht zur Tab-Reihenfolge hinzugefügt. Sie können die verschachtelten `contenteditable`-Elemente zur Tastaturnavigationssequenz hinzufügen, indem Sie den Wert von `tabindex` angeben ([`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex)).

Wenn Inhalte in ein Element mit `contenteditable="true"` eingefügt werden, bleibt die gesamte Formatierung erhalten. Werden Inhalte in ein Element mit `contenteditable="plaintext-only"` eingefügt, wird die gesamte Formatierung entfernt.

## Beispiele

### Einfügen von Inhalten in contenteditable

Dieses Beispiel hat zwei {{HTMLElement("div")}}-Elemente mit `contenteditable`, das erste mit dem Wert `true` und das zweite mit dem Wert `plaintext-only`. Kopieren Sie den Inhalt unten und fügen Sie ihn in jedes `div` ein, um ihre Effekte zu sehen.

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
- [HTMLElement `input` Event](/de/docs/Web/API/Element/input_event)
