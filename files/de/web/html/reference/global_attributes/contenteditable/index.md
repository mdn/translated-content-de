---
title: HTML-Attribut contenteditable (globales Attribut)
short-title: contenteditable
slug: Web/HTML/Reference/Global_attributes/contenteditable
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`contenteditable`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein aufgezähltes Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Ist dies der Fall, modifiziert der Browser sein Widget, um die Bearbeitung zu ermöglichen.

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

- `true` oder ein _leerer String_, was anzeigt, dass das Element bearbeitet werden kann.
- `false`, was anzeigt, dass das Element nicht bearbeitet werden kann.
- `plaintext-only`, was anzeigt, dass der rohe Text des Elements bearbeitet werden kann, aber die Formatierung von Rich-Text deaktiviert ist.

Wenn das Attribut ohne Wert angegeben wird, wie `<label contenteditable>Beispiel-Label</label>`, wird sein Wert als leerer String betrachtet.

Fehlt dieses Attribut oder ist sein Wert ungültig, wird sein Wert von seinem Elternelement geerbt: Das Element ist also bearbeitbar, wenn sein Elternelement bearbeitbar ist.

Beachten Sie, dass, obwohl die zulässigen Werte `true` und `false` umfassen, dieses Attribut ein _{{Glossary("Enumerated", "aufgezähltes")}}_ ist und kein _Boolesches_.

Sie können die Farbe, die zum Zeichnen des Text-Einfügezeichens ({{Glossary("caret", "caret")}}) verwendet wird, mit der CSS {{cssxref("caret-color")}}-Eigenschaft festlegen.

Elemente, die durch das `contenteditable`-Attribut bearbeitbar und somit interaktiv gemacht werden, können fokussiert werden und nehmen an der sequentiellen Tastaturnavigation teil. Allerdings werden Elemente mit dem `contenteditable`-Attribut, die innerhalb anderer `contenteditable`-Elemente verschachtelt sind, standardmäßig nicht zur Tabulatorreihenfolge hinzugefügt. Sie können die verschachtelten `contenteditable`-Elemente zur Tastaturnavigationsreihenfolge hinzufügen, indem Sie den `tabindex`-Wert angeben ([`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).

Wenn Inhalt in ein Element mit `contenteditable="true"` eingefügt wird, bleibt die gesamte Formatierung erhalten. Wird Inhalt in ein Element mit `contenteditable="plaintext-only"` eingefügt, wird die gesamte Formatierung entfernt.

## Beispiele

### Inhalte in ein contenteditable einfügen

Dieses Beispiel enthält zwei {{HTMLElement("div")}}-Elemente mit `contenteditable`, das erste mit dem Wert `true` und das zweite mit dem Wert `plaintext-only`. Kopieren Sie den unten stehenden Inhalt und fügen Sie ihn in jedes `div` ein, um deren Effekte zu sehen.

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
- [HTMLElement `input` event](/de/docs/Web/API/Element/input_event)
