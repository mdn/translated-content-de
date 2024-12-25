---
title: Attribut-Selektoren
slug: Learn_web_development/Core/Styling_basics/Attribute_selectors
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}

Wie Sie aus Ihrem Studium von HTML wissen, können Elemente Attribute besitzen, die weitere Details über das markierte Element liefern. In CSS können Sie Attribut-Selektoren verwenden, um Elemente mit bestimmten Attributen zu selektieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren<a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das grundlegende Konzept der Attribut-Selektoren.</li>
          <li>Präsenz- und Wert-Prüfungs-Selektoren.</li>
          <li>Teilstring-Vergleichs-Selektoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Präsenz- und Wert-Prüfungs-Selektoren

Diese Selektoren ermöglichen die Auswahl eines Elements basierend einzig auf dem Vorhandensein eines Attributs (zum Beispiel `href`) oder auf verschiedenen Übereinstimmungen mit dem Wert des Attributs.

| Selektor             | Beispiel                        | Beschreibung                                                                                                                                     |
| -------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `[*attr*]`           | `a[title]`                      | Selektiert Elemente mit einem _attr_-Attribut (dessen Name der Wert in den eckigen Klammern ist).                                                |
| `[*attr*=*value*]`   | `a[href="https://example.com"]` | Selektiert Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist — der String innerhalb der Anführungszeichen.                       |
| `[*attr*~=*value*]`  | `p[class~="special"]`           | Selektiert Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist oder _value_ in seiner (leerzeichen-getrennten) Werteliste enthält. |
| `[*attr*\|=*value*]` | `div[lang\|="zh"]`              | Selektiert Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist oder mit _value_ direkt gefolgt von einem Bindestrich beginnt.      |

Im folgenden Beispiel können Sie sehen, wie diese Selektoren verwendet werden.

- Durch die Verwendung von `li[class]` können wir jedes Listen-Element mit einem class-Attribut selektieren. Dies umfasst alle Listenelemente außer dem ersten.
- `li[class="a"]` selektiert ein Element mit einer Klasse von `a`, aber nicht eines mit der Klasse `a` in Kombination mit einer anderen leerzeichen-getrennten Klasse. Es selektiert das zweite Listenelement.
- `li[class~="a"]` wird eine Klasse von `a` selektieren, aber auch einen Wert, der die Klasse von `a` als Teil einer leerzeichen-getrennten Liste enthält. Es selektiert das zweite und dritte Listenelement.

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

## Teilstring-Vergleichs-Selektoren

Diese Selektoren ermöglichen fortgeschrittenere Übereinstimmungen von Teilstrings innerhalb des Werts Ihres Attributs. Wenn Sie beispielsweise Klassen von `box-warning` und `box-error` hatten und alles selektieren möchten, das mit dem String "box-" beginnt, könnten Sie `[class^="box-"]` verwenden, um beide auszuwählen (oder `[class|="box"]` wie im obigen Abschnitt beschrieben).

| Selektor        | Beispiel            | Beschreibung                                                                                               |
| --------------- | ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Selektiert Elemente mit einem _attr_-Attribut, dessen Wert mit _value_ beginnt.                            |
| `[attr$=value]` | `li[class$="-box"]` | Selektiert Elemente mit einem _attr_-Attribut, dessen Wert mit _value_ endet.                              |
| `[attr*=value]` | `li[class*="box"]`  | Selektiert Elemente mit einem _attr_-Attribut, dessen Wert _value_ irgendwo innerhalb des Strings enthält. |

(Nebenbei bemerkt: Es kann hilfreich sein, zu wissen, dass `^` und `$` schon lange als _Anker_ in sogenannten _regulären Ausdrücken_ verwendet werden, um _beginnt mit_ und _endet mit_ zu bedeuten.)

Das nächste Beispiel zeigt die Verwendung dieser Selektoren:

- `li[class^="a"]` selektiert jeden Attributwert, der mit `a` beginnt, daher werden die ersten beiden Listenelemente ausgewählt.
- `li[class$="a"]` selektiert jeden Attributwert, der mit `a` endet, daher wird das erste und dritte Listenelement ausgewählt.
- `li[class*="a"]` selektiert jeden Attributwert, bei dem `a` irgendwo im String vorkommt, daher werden alle unsere Listenelemente ausgewählt.

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

Nun, da wir die Attribut-Selektoren abgeschlossen haben, können Sie mit dem nächsten Artikel fortfahren und über Pseudo-Klassen und Pseudo-Element Selektoren lesen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}
