---
title: Attributselektoren
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu selektieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (Studium der
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (Studium der
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, was Attributselektoren sind und wie man sie verwendet.</td>
    </tr>
  </tbody>
</table>

## Vorhandenheits- und Wertselektoren

Diese Selektoren ermöglichen die Auswahl eines Elements basierend auf dem Vorhandensein eines Attributs allein (zum Beispiel `href`) oder auf verschiedenen Übereinstimmungen mit dem Wert des Attributs.

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
        Passt zu Elementen mit einem <em>attr</em>-Attribut (dessen Name der
        Wert in eckigen Klammern ist).
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>=<em>value</em>]</code></td>
      <td><code>a[href="https://example.com"]</code></td>
      <td>
        Passt zu Elementen mit einem <em>attr</em>-Attribut, dessen Wert genau
        <em>value</em> ist — die Zeichenkette in den Anführungszeichen.
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>~=<em>value</em>]</code></td>
      <td><code>p[class~="special"]</code></td>
      <td>
        <p>
          <br />Passt zu Elementen mit einem <em>attr</em>-Attribut, dessen Wert
          genau <em>value</em> ist oder <em>value</em> in seiner
          (durch Leerzeichen getrennten) Liste von Werten enthält.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>|=<em>value</em>]</code></td>
      <td><code>div[lang|="zh"]</code></td>
      <td>
        Passt zu Elementen mit einem <em>attr</em>-Attribut, dessen Wert genau
        <em>value</em> ist oder mit <em>value</em> beginnt, gefolgt von einem
        Bindestrich.
      </td>
    </tr>
  </tbody>
</table>

Im untenstehenden Beispiel sehen Sie, wie diese Selektoren verwendet werden.

- Durch die Verwendung von `li[class]` können wir jedes Listenelement mit einem Klassenattribut ansprechen. Dies passt auf alle Listenelemente, außer das erste.
- `li[class="a"]` passt zu einem Selektor mit einer Klasse `a`, aber nicht zu einem Selektor mit einer Klasse `a`, die eine andere durch Leerzeichen geteilte Klasse als Teil des Wertes hat. Es wählt das zweite Listenelement aus.
- `li[class~="a"]` wird zu einer Klasse von `a` passen, aber auch zu einem Wert, der die Klasse `a` als Teil einer durch Leerzeichen getrennten Liste enthält. Es wählt die zweiten und dritten Listenelemente aus.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## Teilstring-Matching-Selektoren

Diese Selektoren erlauben ein fortgeschritteneres Matching von Teilstrings innerhalb des Werts Ihres Attributs. Wenn Sie beispielsweise Klassen wie `box-warning` und `box-error` hatten und alles, was mit dem String "box-" beginnt, ansprechen wollten, könnten Sie `[class^="box-"]` verwenden, um beide auszuwählen (oder `[class|="box"]` wie im obigen Abschnitt beschrieben).

| Selektor        | Beispiel             | Beschreibung                                                                                       |
| --------------- | -------------------- | -------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]`  | Passt zu Elementen mit einem _attr_-Attribut, dessen Wert mit _value_ beginnt.                     |
| `[attr$=value]` | `li[class$="-box"]`  | Passt zu Elementen mit einem _attr_-Attribut, dessen Wert mit _value_ endet.                       |
| `[attr*=value]` | `li[class*="box"]`   | Passt zu Elementen mit einem _attr_-Attribut, dessen Wert _value_ irgendwo innerhalb der Zeichenkette enthält. |

(Nebenbei: Es kann helfen zu beachten, dass `^` und `$` schon lange als _Anker_ in sogenannten _regulären Ausdrücken_ verwendet werden, um _beginnt mit_ bzw. _endet mit_ zu bedeuten.)

Das nächste Beispiel zeigt die Verwendung dieser Selektoren:

- `li[class^="a"]` passt zu jedem Attributwert, der mit `a` beginnt, und passt daher auf die ersten beiden Listenelemente.
- `li[class$="a"]` passt zu jedem Attributwert, der mit `a` endet, und passt daher auf das erste und dritte Listenelement.
- `li[class*="a"]` passt zu jedem Attributwert, bei dem `a` irgendwo in der Zeichenkette erscheint, und passt daher auf alle unsere Listenelemente.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## Groß- und Kleinschreibungsempfindlichkeit

Wenn Sie Attributwerte unabhängig von der Groß-/Kleinschreibung vergleichen möchten, können Sie den Wert `i` vor der schließenden Klammer verwenden. Diese Kennzeichnung teilt dem Browser mit, ASCII-Zeichen unabhängig von der Groß-/Kleinschreibung zu vergleichen. Ohne die Kennzeichnung werden die Werte entsprechend der Groß-/Kleinschreibungsempfindlichkeit der Dokumentsprache verglichen — im Fall von HTML wird sie groß-/kleinschreibungssensitiv sein.

Im folgenden Beispiel passt der erste Selektor zu einem Wert, der mit `a` beginnt — er passt nur zu dem ersten Listenelement, weil die anderen beiden Listenelemente mit einem großen A beginnen. Der zweite Selektor verwendet die Unterscheidungskennzeichnung und passt daher zu allen Listenelementen.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> [!NOTE]
> Es gibt auch einen neueren Wert `s`, der eine Unterscheidung der Groß-/Kleinschreibung in Kontexten erzwingt, in denen das Matching normalerweise ohne Unterscheidung erfolgt. Dieser wird jedoch weniger gut in Browsern unterstützt und ist in einem HTML-Kontext nicht sehr nützlich.

## Zusammenfassung

Jetzt, wo wir mit den Attributselektoren fertig sind, können Sie mit dem nächsten Artikel fortfahren und über [Pseudo-Klass- und Pseudo-Element-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) lesen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}
