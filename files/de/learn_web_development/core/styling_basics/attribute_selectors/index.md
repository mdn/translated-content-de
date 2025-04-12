---
title: Attributselektoren
slug: Learn_web_development/Core/Styling_basics/Attribute_selectors
l10n:
  sourceCommit: 4436741f7ac013be6aa98e71132fcce457657d48
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}

Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element liefern. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu selektieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.

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
          <li>Das Grundkonzept der Attributselektoren.</li>
          <li>Anwesenheits- und Wertattributselektoren.</li>
          <li>Teilstringübereinstimmende Attributselektoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Anwesenheits- und Wertselektoren

Diese Selektoren ermöglichen die Auswahl eines Elements basierend auf der bloßen Anwesenheit eines Attributs (zum Beispiel `href`) oder basierend auf verschiedenen Übereinstimmungen mit dem Wert des Attributs.

| Selektor         | Beispiel                        | Beschreibung                                                                                                                                                 |
| ---------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `[attr]`         | `a[title]`                      | Selektiert Elemente mit einem _attr_ Attribut (dessen Name der Wert in eckigen Klammern ist).                                                                |
| `[attr=value]`   | `a[href="https://example.com"]` | Selektiert Elemente mit einem _attr_ Attribut, dessen Wert genau _value_ ist — der String innerhalb der Anführungszeichen.                                   |
| `[attr~=value]`  | `p[class~="special"]`           | Selektiert Elemente mit einem _attr_ Attribut, dessen Wert genau _value_ ist oder _value_ in seiner (durch Leerzeichen getrennten) Liste von Werten enthält. |
| `[attr\|=value]` | `div[lang\|="zh"]`              | Selektiert Elemente mit einem _attr_ Attribut, dessen Wert genau _value_ ist oder mit _value_ beginnt, unmittelbar gefolgt von einem Bindestrich.            |

Im folgenden Beispiel sehen Sie, wie diese Selektoren verwendet werden.

- Durch die Verwendung von `li[class]` können wir jedes Listenelement mit einem Attribut `class` selektieren. Dies selektiert alle Listenelemente außer dem ersten.
- `li[class="a"]` selektiert einen Selektor mit einer Klasse `a`, aber nicht einen Selektor mit einer Klasse `a` mit einer anderen durch Leerzeichen getrennten Klasse als Teil des Werts. Es selektiert das zweite Listenelement.
- `li[class~="a"]` selektiert eine Klasse `a`, aber auch einen Wert, der die Klasse `a` als Teil einer durch Leerzeichen getrennten Liste enthält. Es selektiert das zweite und dritte Listenelement.

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

## Teilstringübereinstimmende Selektoren

Diese Selektoren ermöglichen eine fortgeschrittenere Übereinstimmung von Teilstrings innerhalb des Wertes Ihres Attributs. Zum Beispiel, wenn Sie Klassen von `box-warning` und `box-error` hatten und alles selektieren wollten, das mit dem String "box-" beginnt, könnten Sie `[class^="box-"]` verwenden, um beide zu selektieren (oder `[class|="box"]` wie oben beschrieben).

| Selektor        | Beispiel            | Beschreibung                                                                                   |
| --------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Selektiert Elemente mit einem _attr_ Attribut, dessen Wert mit _value_ beginnt.                |
| `[attr$=value]` | `li[class$="-box"]` | Selektiert Elemente mit einem _attr_ Attribut, dessen Wert mit _value_ endet.                  |
| `[attr*=value]` | `li[class*="box"]`  | Selektiert Elemente mit einem _attr_ Attribut, dessen Wert _value_ irgendwo im String enthält. |

(Nebenbei: Es könnte hilfreich sein zu beachten, dass `^` und `$` seit langem als _Anker_ in sogenannten _regulären Ausdrücken_ verwendet werden, um _beginnt mit_ bzw. _endet mit_ zu bedeuten.)

Das nächste Beispiel zeigt die Verwendung dieser Selektoren:

- `li[class^="a"]` selektiert jeden Attributwert, der mit `a` beginnt, sodass die ersten beiden Listenelemente selektiert werden.
- `li[class$="a"]` selektiert jeden Attributwert, der mit `a` endet, sodass das erste und dritte Listenelement selektiert werden.
- `li[class*="a"]` selektiert jeden Attributwert, in dem `a` irgendwo im String vorkommt, sodass alle unsere Listenelemente selektiert werden.

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

Da wir nun mit den Attributselektoren fertig sind, können Sie im nächsten Artikel weiterlesen und über Pseudo-Klassen- und Pseudo-Element-Selektoren lernen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}
