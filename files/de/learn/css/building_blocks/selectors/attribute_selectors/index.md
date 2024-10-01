---
title: Attributselektoren
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute besitzen, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen anzusprechen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Basissoftware installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, was Attributselektoren sind und wie man sie verwendet.</td>
    </tr>
  </tbody>
</table>

## Vorhandenheits- und Wertselektoren

Diese Selektoren ermöglichen die Auswahl eines Elements basierend auf der bloßen Präsenz eines Attributs (zum Beispiel `href`) oder auf verschiedenen Übereinstimmungen mit dem Wert des Attributs.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Selektor</th>
      <th scope="col">Beispiel</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[<em>attr</em>]</code></td>
      <td><code>a[title]</code></td>
      <td>
        Passt auf Elemente mit einem <em>attr</em>-Attribut (dessen Name der Wert in eckigen Klammern ist).
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>=<em>value</em>]</code></td>
      <td><code>a[href="https://example.com"]</code></td>
      <td>
        Passt auf Elemente mit einem <em>attr</em>-Attribut, dessen Wert genau
        <em>value</em> ist — die Zeichenkette in den Anführungszeichen.
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>~=<em>value</em>]</code></td>
      <td><code>p[class~="special"]</code></td>
      <td>
        <p>
          Passt auf Elemente mit einem <em>attr</em>-Attribut, dessen Wert
          genau <em>value</em> ist oder <em>value</em> in seiner (durch Leerzeichen
          getrennten) Liste von Werten enthält.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>|=<em>value</em>]</code></td>
      <td><code>div[lang|="zh"]</code></td>
      <td>
        Passt auf Elemente mit einem <em>attr</em>-Attribut, dessen Wert genau
        <em>value</em> ist oder mit <em>value</em> beginnt, gefolgt von einem
        Bindestrich.
      </td>
    </tr>
  </tbody>
</table>

Im unten stehenden Beispiel können Sie sehen, wie diese Selektoren verwendet werden:

- Mit `li[class]` können wir jedes Listenelement mit einem `class`-Attribut ansprechen. Dies passt auf alle Listenelemente außer das erste.
- `li[class="a"]` passt auf einen Selektor mit einer Klasse `a`, aber nicht auf einen Selektor mit einer Klasse `a`, die als Teil des Wertes eine andere Leerzeichen geteilte Klasse hat. Es wählt das zweite Listenelement aus.
- `li[class~="a"]` wird auf eine Klasse `a` passen, aber auch auf einen Wert, der die Klasse `a` als Teil einer durch Leerzeichen getrennten Liste enthält. Es wählt das zweite und dritte Listenelement aus.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## Teilzeichenfolgen-Abgleichsselektoren

Diese Selektoren ermöglichen einen fortgeschritteneren Abgleich von Teilzeichenfolgen innerhalb des Wertes Ihres Attributs. Wenn Sie zum Beispiel Klassen wie `box-warning` und `box-error` haben und alles abgleichen möchten, das mit der Zeichenfolge "box-" beginnt, könnten Sie `[class^="box-"]` verwenden, um beide auszuwählen (oder `[class|="box"]`, wie in der obigen Sektion beschrieben).

| Selektor        | Beispiel            | Beschreibung                                                                                            |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert mit _value_ beginnt.                          |
| `[attr$=value]` | `li[class$="-box"]` | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert mit _value_ endet.                            |
| `[attr*=value]` | `li[class*="box"]`  | Passt auf Elemente mit einem _attr_-Attribut, dessen Wert _value_ irgendwo in der Zeichenkette enthält. |

(Nebenbei: Es könnte helfen zu wissen, dass `^` und `$` schon lange als _Anker_ in sogenannten _regulären Ausdrücken_ verwendet werden, um _beginnt mit_ bzw. _endet mit_ zu bedeuten.)

Das nächste Beispiel zeigt die Verwendung dieser Selektoren:

- `li[class^="a"]` passt auf jeden Attributwert, der mit `a` beginnt, daher stimmt es mit den ersten beiden Listenelementen überein.
- `li[class$="a"]` passt auf jeden Attributwert, der mit `a` endet, daher stimmt es mit dem ersten und dritten Listenelement überein.
- `li[class*="a"]` passt auf jeden Attributwert, in dem `a` irgendwo in der Zeichenkette erscheint, daher stimmt es mit allen unseren Listenelementen überein.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## Groß-/Kleinschreibungsempfindlichkeit

Wenn Sie Attributwerte ohne Berücksichtigung der Groß-/Kleinschreibung abgleichen möchten, können Sie den Wert `i` vor der schließenden Klammer verwenden. Dieses Flag weist den Browser an, {{Glossary("ASCII", "ASCII")}}-Zeichen ohne Berücksichtigung der Groß-/Kleinschreibung abzugleichen. Ohne das Flag werden die Werte entsprechend der Groß-/Kleinschreibungsempfindlichkeit der Dokumentsprache abgeglichen — im Fall von HTML wird es groß-/klein-schreibungsempfindlich sein.

Im unten stehenden Beispiel wird der erste Selektor einen Wert abgleichen, der mit `a` beginnt — es wird nur das erste Listenelement ausgewählt, da die anderen beiden Listenelemente mit einem großen A beginnen. Der zweite Selektor verwendet das Flag für Groß-/Kleinschreibungsunempfindlichkeit und stimmt daher mit allen Listenelementen überein.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> [!NOTE]
> Es gibt auch einen neueren Wert `s`, der eine Groß-/Kleinschreibungssensititive Übereinstimmung in Kontexten erzwingt, in denen die Übereinstimmung normalerweise groß-/klein-schreibungsempfindlich ist; dies wird jedoch weniger gut in Browsern unterstützt und ist in einem HTML-Kontext nicht sehr nützlich.

## Zusammenfassung

Jetzt, da wir mit Attributselektoren fertig sind, können Sie mit dem nächsten Artikel fortfahren und mehr über [Pseudo-Klassen- und Pseudo-Elementselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) lesen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}
