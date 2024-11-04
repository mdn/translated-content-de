---
title: Attributselektoren
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

Wie Sie aus Ihrem Studium von HTML wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen anzusprechen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS: Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, was Attributselektoren sind und wie man sie verwendet.</td>
    </tr>
  </tbody>
</table>

## Präsenz- und Wertselektoren

Diese Selektoren ermöglichen die Auswahl eines Elements basierend auf der bloßen Anwesenheit eines Attributs (zum Beispiel `href`) oder auf verschiedenen Übereinstimmungen gegen den Wert des Attributs.

| Selektor             | Beispiel                        | Beschreibung                                                                                                                                   |
| -------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `[*attr*]`           | `a[title]`                      | Passt auf Elemente mit einem _attr_-Attribut (dessen Name der Wert in eckigen Klammern ist).                                                   |
| `[*attr*=*value*]`   | `a[href="https://example.com"]` | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist — der String innerhalb der Anführungszeichen.                      |
| `[*attr*~=*value*]`  | `p[class~="special"]`           | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist oder _value_ in seiner (leerzeichengetrennten) Werteliste enthält. |
| `[*attr*\|=*value*]` | `div[lang\|="zh"]`              | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert genau _value_ ist oder mit _value_ beginnt, gefolgt von einem Bindestrich.           |

Im folgenden Beispiel sehen Sie diese Selektoren in Verwendung.

- Durch die Verwendung von `li[class]` können wir jedes Listenelement mit einem Klassenattribut ansprechen. Dies entspricht allen Listenelementen außer dem ersten.
- `li[class="a"]` passt auf einen Selektor mit einer Klasse von `a`, jedoch nicht auf einen Selektor mit einer Klasse von `a` mit einer weiteren leerzeichenseparierten Klasse als Teil des Wertes. Es wählt das zweite Listenelement aus.
- `li[class~="a"]` passt auf eine Klasse von `a`, aber auch auf einen Wert, der die Klasse von `a` als Teil einer durch Leerzeichen getrennten Liste enthält. Es wählt das zweite und dritte Listenelement aus.

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

## Teilstring-Matching-Selektoren

Diese Selektoren ermöglichen ein fortgeschritteneres Matching von Teilstrings innerhalb des Attributwerts. Wenn Sie beispielsweise Klassen von `box-warning` und `box-error` hätten und alles auswählen wollten, das mit dem String "box-" beginnt, könnten Sie `[class^="box-"]` verwenden, um beide auszuwählen (oder `[class|="box"]`, wie im obigen Abschnitt beschrieben).

| Selektor        | Beispiel            | Beschreibung                                                                                              |
| --------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert mit _value_ beginnt.                            |
| `[attr$=value]` | `li[class$="-box"]` | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert mit _value_ endet.                              |
| `[attr*=value]` | `li[class*="box"]`  | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert _value_ irgendwo innerhalb des Strings enthält. |

(Nebenbei: Es kann hilfreich sein zu beachten, dass `^` und `$` in sogenannten _regulären Ausdrücken_ schon lange als _Anker_ verwendet werden, um _beginnt mit_ und _endet mit_ zu bedeuten.)

Das nächste Beispiel zeigt die Verwendung dieser Selektoren:

- `li[class^="a"]` passt auf jeden Attributwert, der mit `a` beginnt, also passt es auf die ersten beiden Listenelemente.
- `li[class$="a"]` passt auf jeden Attributwert, der mit `a` endet, also passt es auf das erste und dritte Listenelement.
- `li[class*="a"]` passt auf jeden Attributwert, in dem `a` irgendwo im String erscheint, also passt es auf alle unsere Listenelemente.

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

## Groß-/Kleinschreibungssensitivität

Wenn Sie Attributwerte ohne Berücksichtigung der Groß-/Kleinschreibung abgleichen möchten, können Sie das `i`-Flag vor der schließenden Klammer verwenden. Dieses Flag teilt dem Browser mit, {{Glossary("ASCII", "ASCII")}}-Zeichen unabhängig von der Groß-/Kleinschreibung abzugleichen. Ohne das Flag werden die Werte gemäß der Groß-/Kleinschreibungssensitivität der Dokumentensprache abgeglichen – im Fall von HTML wird es groß-/kleinschreibungssensitiv sein.

Im folgenden Beispiel passt der erste Selektor auf einen Wert, der mit `a` beginnt – er passt nur auf das erste Listenelement, weil die anderen beiden Listenelemente mit einem Großbuchstaben A beginnen. Der zweite Selektor verwendet das groß-/kleinschreibungsinsensitive Flag und passt daher auf alle Listenelemente.

```html live-sample___attribute-case
<h1>Case-insensitivity</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="A">Item 2</li>
  <li class="Ab">Item 3</li>
</ul>
```

```css live-sample___attribute-case
body {
  font-family: sans-serif;
}
li[class^="a"] {
  background-color: yellow;
}

li[class^="a" i] {
  color: red;
}
```

{{EmbedLiveSample("attribute-case")}}

> [!NOTE]
> Es gibt auch einen neueren Wert `s`, der die Groß-/Kleinschreibung in Kontexten erzwingen wird, wo der Abgleich normalerweise nicht groß-/kleinschreibungssensitiv ist. Dieser wird jedoch weniger gut in Browsern unterstützt und ist im HTML-Kontext nicht sehr nützlich.

## Zusammenfassung

Jetzt, da wir mit den Attributselektoren fertig sind, können Sie mit dem nächsten Artikel fortfahren und über [Pseudoklassen- und Pseudoelementselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) lesen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}
