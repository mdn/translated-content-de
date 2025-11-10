---
title: Attributselektoren
slug: Learn_web_development/Core/Styling_basics/Attribute_selectors
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}

Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details zu dem markierten Element angeben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu selektieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Grundkonzept von Attributselektoren.</li>
          <li>Vorhandenheits- und Wertattributselektoren.</li>
          <li>Substring-Matching-Attributselektoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorhandenheits- und Wertselektoren

Diese Selektoren ermöglichen die Auswahl eines Elements basierend auf dem bloßen Vorhandensein eines Attributs (zum Beispiel `href`) oder auf verschiedenen Übereinstimmungen mit dem Attributwert.

| Selektor         | Beispiel                        | Beschreibung                                                                                                                                       |
| ---------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[attr]`         | `a[title]`                      | Wählt Elemente mit einem _attr_ Attribut aus (deren Name der Wert in den eckigen Klammern ist).                                                    |
| `[attr=value]`   | `a[href="https://example.com"]` | Wählt Elemente mit einem _attr_ Attribut aus, dessen Wert genau _value_ ist — die Zeichenkette innerhalb der Anführungszeichen.                    |
| `[attr~=value]`  | `p[class~="special"]`           | Wählt Elemente mit einem _attr_ Attribut aus, dessen Wert genau _value_ ist oder _value_ in der (durch Leerzeichen getrennten) Werteliste enthält. |
| `[attr\|=value]` | `div[lang\|="zh"]`              | Wählt Elemente mit einem _attr_ Attribut aus, dessen Wert genau _value_ ist oder mit _value_ beginnt, unmittelbar gefolgt von einem Bindestrich.   |

Im folgenden Beispiel können Sie sehen, wie diese Selektoren verwendet werden.

- Durch die Verwendung von `li[class]` können wir jedes Listenelement mit einem Klassenattribut auswählen. Dies entspricht allen Listenelementen außer dem ersten.
- `li[class="a"]` wählt einen Selektor mit einer Klasse von `a` aus, aber nicht einen Selektor mit einer Klasse von `a` zusammen mit einer anderen leerzeichengetrennten Klasse als Teil des Werts. Es wählt das zweite Listenelement.
- `li[class~="a"]` wird eine Klasse von `a` übereinstimmen, aber auch einen Wert, der die Klasse von `a` als Teil einer durch Leerzeichen getrennten Liste enthält. Es wählt die zweiten und dritten Listenelemente aus.

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

Versuchen Sie, das obige CSS zu bearbeiten, um eine Regel hinzuzufügen, die nur Listenelemente mit einem `class` Attributwert von `ab` auswählt und diesen eine `weiße` Textfarbe `color` und eine `purpur` `background-color` gibt.

## Substring-Matching-Selektoren

Diese Selektoren ermöglichen ein fortgeschritteneres Matching von Substrings innerhalb des Werts Ihres Attributs. Wenn Sie zum Beispiel Klassen von `box-warning` und `box-error` hätten und alles, was mit dem String "box-" beginnt, übereinstimmen möchten, könnten Sie `[class^="box-"]` verwenden, um sie beide auszuwählen (oder `[class|="box"]` wie im obigen Abschnitt beschrieben).

| Selektor        | Beispiel            | Beschreibung                                                                                                                |
| --------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Wählt Elemente mit einem _attr_ Attribut aus, dessen Wert mit _value_ beginnt.                                              |
| `[attr$=value]` | `li[class$="-box"]` | Wählt Elemente mit einem _attr_ Attribut aus, dessen Wert mit _value_ endet.                                                |
| `[attr*=value]` | `li[class*="box"]`  | Wählt Elemente mit einem _attr_ Attribut aus, dessen Wert _value_ an irgendeiner Stelle innerhalb der Zeichenkette enthält. |

Das nächste Beispiel zeigt die Verwendung dieser Selektoren:

- `li[class^="a"]` wählt jeden Attributwert aus, der mit `a` beginnt, und entspricht daher den ersten beiden Listenelementen.
- `li[class$="a"]` wählt jeden Attributwert aus, der mit `a` endet, und entspricht daher dem ersten und dritten Listenelement.
- `li[class*="a"]` wählt jeden Attributwert aus, bei dem `a` irgendwo im String vorkommt, also entspricht es all unseren Listenelementen.

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

Versuchen Sie, das obige CSS zu bearbeiten, um eine Regel hinzuzufügen, die nur Listenelemente mit einem `class` Attributwert auswählt, der `b` oder `c` am Ende hat, und diese mit einem `2px` breiten, `soliden`, `schwarzen` `Rand` versieht. Möglicherweise müssen Sie eine [Selektorenliste](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#selector_lists) verwenden, um dies zu lösen.

## Zusammenfassung

Jetzt, da wir mit Attributselektoren fertig sind, können Sie zum nächsten Artikel übergehen und über Pseudo-Klassen- und Pseudo-Elementselektoren lesen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}
