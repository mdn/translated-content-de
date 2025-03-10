---
title: Attributselektoren
slug: Learn_web_development/Core/Styling_basics/Attribute_selectors
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}

Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen anzusprechen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen zu HTML (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundsyntax von HTML</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Grundkonzept von Attributselektoren.</li>
          <li>Vorhandenheits- und Wertattributselektoren.</li>
          <li>Teilstring-Match-Attributselektoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorhandenheits- und Wertselektoren

Diese Selektoren ermöglichen die Auswahl eines Elements basierend allein auf der Anwesenheit eines Attributs (zum Beispiel `href`) oder auf verschiedenen Übereinstimmungen gegen den Wert des Attributs.

| Selektor             | Beispiel                        | Beschreibung                                                                                                                                                |
| -------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[*attr*]`           | `a[title]`                      | Wählt Elemente mit einem _attr_-Attribut aus (dessen Name der Wert in den eckigen Klammern ist).                                                            |
| `[*attr*=*value*]`   | `a[href="https://example.com"]` | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert genau _value_ ist — der String in den Anführungszeichen.                                          |
| `[*attr*~=*value*]`  | `p[class~="special"]`           | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert genau _value_ ist oder _value_ in seiner (durch Leerzeichen getrennten) Liste von Werten enthält. |
| `[*attr*\|=*value*]` | `div[lang\|="zh"]`              | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert genau _value_ ist oder mit _value_ beginnt, gefolgt von einem Bindestrich.                        |

Im Beispiel unten können Sie sehen, wie diese Selektoren verwendet werden.

- Durch die Verwendung von `li[class]` können wir jedes Listenelement mit einem Klassenattribut ansprechen. Dies entspricht allen Listenelementen außer dem ersten.
- `li[class="a"]` entspricht einem Selektor mit der Klasse `a`, jedoch nicht einem Selektor mit der Klasse `a` und einer anderen durch Leerzeichen getrennten Klasse als Teil des Wertes. Es wählt das zweite Listenelement aus.
- `li[class~="a"]` wird eine Klasse von `a` sowie einen Wert, der die Klasse `a` als Teil einer durch Leerzeichen getrennten Liste enthält, ansprechen. Es wählt das zweite und dritte Listenelement aus.

```html live-sample___attribute
<h1>Attribute presence and value selectors</h1>
<ul>
  <li>Item 1</li>
  <li class="a">Item 2</li>
  <li class="a b">Item 3</li>
  <li class="ab">Item 4</li>
</ul>
```

```css live-sample___attribute
body {
  font-family: sans-serif;
}
li[class] {
  font-size: 120%;
}

li[class="a"] {
  background-color: yellow;
}

li[class~="a"] {
  color: red;
}
```

{{EmbedLiveSample("attribute", "", "200px")}}

## Teilstring-Match-Selektoren

Diese Selektoren ermöglichen ein fortschrittlicheres Matching von Teilstrings innerhalb des Wertes Ihres Attributs. Wenn Sie beispielsweise Klassen von `box-warning` und `box-error` hatten und alles, was mit dem String "box-" beginnt, abgleichen wollten, könnten Sie `[class^="box-"]` verwenden, um sie beide auszuwählen (oder `[class|="box"]`, wie im obigen Abschnitt beschrieben).

| Selektor        | Beispiel            | Beschreibung                                                                                  |
| --------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert mit _value_ beginnt.                |
| `[attr$=value]` | `li[class$="-box"]` | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert mit _value_ endet.                  |
| `[attr*=value]` | `li[class*="box"]`  | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert _value_ irgendwo im String enthält. |

(Anmerkung: Es könnte hilfreich sein zu wissen, dass `^` und `$` schon lange als _Anker_ in sogenannten _regulären Ausdrücken_ verwendet werden, um _beginnt mit_ und _endet mit_ zu bedeuten.)

Das nächste Beispiel zeigt die Verwendung dieser Selektoren:

- `li[class^="a"]` entspricht jedem Attributwert, der mit `a` beginnt, und entspricht daher den ersten beiden Listenelementen.
- `li[class$="a"]` entspricht jedem Attributwert, der mit `a` endet, und entspricht daher dem ersten und dritten Listenelement.
- `li[class*="a"]` entspricht jedem Attributwert, in dem `a` irgendwo im String erscheint, und entspricht daher all unseren Listenelementen.

```html live-sample___attribute-substring
<h1>Attribute substring matching selectors</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="ab">Item 2</li>
  <li class="bca">Item 3</li>
  <li class="bcabc">Item 4</li>
</ul>
```

```css live-sample___attribute-substring
body {
  font-family: sans-serif;
}
li[class^="a"] {
  font-size: 120%;
}

li[class$="a"] {
  background-color: yellow;
}

li[class*="a"] {
  color: red;
}
```

{{EmbedLiveSample("attribute-substring", "", "200px")}}

## Zusammenfassung

Nun, da wir die Attributselektoren abgeschlossen haben, können Sie zum nächsten Artikel übergehen und über Pseudo-Klassen- und Pseudo-Elementselektoren lesen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}
