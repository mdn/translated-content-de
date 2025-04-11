---
title: Attribut-Selektoren
slug: Learn_web_development/Core/Styling_basics/Attribute_selectors
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}

Wie Sie aus Ihrem Studium von HTML wissen, können Elemente Attribute haben, die weitere Informationen über das markierte Element geben. In CSS können Sie Attribut-Selektoren verwenden, um Elemente mit bestimmten Attributen zu wählen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das grundlegende Konzept der Attribut-Selektoren.</li>
          <li>Präsenz- und Wertattribut-Selektoren.</li>
          <li>Teilzeichenfolgen-Matching-Attribut-Selektoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Präsenz- und Wert-Selektoren

Diese Selektoren ermöglichen die Auswahl eines Elements basierend allein auf dem Vorhandensein eines Attributs (zum Beispiel `href`) oder auf verschiedenen Übereinstimmungen des Attributwertes.

| Selektor             | Beispiel                        | Beschreibung                                                                                                                                      |
| -------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[*attr*]`           | `a[title]`                      | Wählt Elemente mit einem _attr_-Attribut aus (dessen Name der Wert in den eckigen Klammern ist).                                                  |
| `[*attr*=*value*]`   | `a[href="https://example.com"]` | Wählt Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist – die Zeichenkette in den Anführungszeichen.                              |
| `[*attr*~=*value*]`  | `p[class~="special"]`           | Wählt Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist oder _value_ in seiner (durch Leerzeichen getrennten) Werteliste enthält. |
| `[*attr*\|=*value*]` | `div[lang\|="zh"]`              | Wählt Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist oder mit _value_ beginnt, gefolgt von einem Bindestrich.                  |

Im unten stehenden Beispiel sehen Sie diese Selektoren im Einsatz.

- Durch die Verwendung von `li[class]` können wir jedes Listenelement mit einem Klassenattribut auswählen. Dies trifft auf alle Listenelemente außer dem ersten zu.
- `li[class="a"]` wählt einen Selektor mit der Klasse `a`, jedoch nicht einen Selektor mit der Klasse `a`, die als Teil des Wertes eine andere durch Leerzeichen getrennte Klasse hat. Sie wählt das zweite Listenelement.
- `li[class~="a"]` wird eine Klasse `a` sowie einen Wert, der die Klasse `a` als Teil einer durch Leerzeichen getrennten Liste enthält, auswählen. Es wählt das zweite und dritte Listenelement.

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

## Teilzeichenfolgen-Matching-Selektoren

Diese Selektoren ermöglichen ein fortgeschritteneres Matching von Teilzeichenfolgen innerhalb des Wertes Ihres Attributs. Zum Beispiel, wenn Sie Klassen wie `box-warning` und `box-error` haben und alles auswählen möchten, das mit dem String "box-" beginnt, könnten Sie `[class^="box-"]` verwenden, um beide auszuwählen (oder `[class|="box"]`, wie im obigen Abschnitt beschrieben).

| Selektor        | Beispiel            | Beschreibung                                                                                                      |
| --------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert mit _value_ beginnt.                                    |
| `[attr$=value]` | `li[class$="-box"]` | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert mit _value_ endet.                                      |
| `[attr*=value]` | `li[class*="box"]`  | Wählt Elemente mit einem _attr_-Attribut aus, dessen Wert _value_ irgendwo innerhalb der Zeichenkette beinhaltet. |

(Vielleicht hilft es zu beachten, dass `^` und `$` schon lange in sogenannten _regulären Ausdrücken_ als _Anker_ verwendet werden, um _beginnt mit_ bzw. _endet mit_ zu bedeuten.)

Das nächste Beispiel zeigt die Verwendung dieser Selektoren:

- `li[class^="a"]` wählt jeden Attributwert aus, der mit `a` beginnt, und passt somit auf die ersten beiden Listenelemente.
- `li[class$="a"]` wählt jeden Attributwert aus, der mit `a` endet, und passt somit auf das erste und dritte Listenelement.
- `li[class*="a"]` wählt jeden Attributwert aus, in dem `a` irgendwo in der Zeichenkette erscheint, und passt somit auf alle unsere Listenelemente.

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

Nun, da wir mit den Attribut-Selektoren fertig sind, können Sie mit dem nächsten Artikel fortfahren und über Pseudo-Klassen- und Pseudo-Element-Selektoren lesen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}
