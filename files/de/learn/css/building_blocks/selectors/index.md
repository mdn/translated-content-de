---
title: CSS-Selektoren
slug: Learn/CSS/Building_blocks/Selectors
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

In {{Glossary("CSS")}} werden Selektoren verwendet, um die {{glossary("HTML")}}-Elemente auf unseren Webseiten zu markieren, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine feingranulare Präzision bei der Auswahl von Elementen zur Gestaltung ermöglichen. In diesem Artikel und seinen Unterartikeln werden wir die verschiedenen Typen ausführlich behandeln und sehen, wie sie funktionieren.

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
        >, HTML-Grundlagen (studieren Sie die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Erlernen, wie CSS-Selektoren im Detail funktionieren.</td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Er ist ein Muster von Elementen und anderen Begriffen, das dem Browser anzeigt, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel auf sie anzuwenden. Das oder die Elemente, die durch den Selektor ausgewählt werden, werden als _Subjekt des Selektors_ bezeichnet.

![Ein Codebeispiel, bei dem das h1 hervorgehoben ist.](selector.png)

In anderen Artikeln sind Ihnen möglicherweise verschiedene Selektoren begegnet, und Sie haben gelernt, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen — zum Beispiel durch die Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`.

In CSS sind Selektoren in der CSS-Selektorenspezifikation definiert; wie jeder andere Teil von CSS müssen sie in Browsern unterstützt werden, damit sie funktionieren. Die Mehrheit der Selektoren, auf die Sie stoßen werden, ist in der [Level 3 Selektorenspezifikation](https://www.w3.org/TR/selectors-3/) und der [Level 4 Selektorenspezifikation](https://www.w3.org/TR/selectors-4/) definiert, die beide ausgereifte Spezifikationen sind, sodass Sie eine ausgezeichnete Browserunterstützung für diese Selektoren finden werden.

## Selektorenlisten

Wenn Sie mehr als eine Sache haben, die dasselbe CSS verwendet, können die einzelnen Selektoren zu einer _Selektorenliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Wenn ich beispielsweise das gleiche CSS für ein `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch in eine Selektorenliste kombinieren, indem ich ein Komma zwischen ihnen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma zulässig. Sie können die Selektoren auch lesbarer finden, wenn jeder in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Im unten stehenden Live-Beispiel versuchen Sie, die zwei Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Anzeige sollte nach der Kombination gleich bleiben.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1150)}}

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn ein Selektor syntaktisch ungültig ist.

Im folgenden Beispiel wird die ungültige Klassenselektorregel ignoriert, während `h1` weiterhin gestylt wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn sie jedoch kombiniert werden, wird weder `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig angesehen wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Arten von Selektoren

Es gibt einige verschiedene Gruppierungen von Selektoren, und das Wissen, welchen Selektortyp Sie benötigen könnten, hilft Ihnen, das richtige Werkzeug für die Aufgabe zu finden. In den Unterartikeln dieses Artikels werden wir die verschiedenen Gruppen von Selektoren im Detail betrachten.

### Typ-, Klassen- und ID-Selektoren

Typselektoren zielen auf ein HTML-Element ab, wie ein [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements):

```css
h1 {
}
```

Klassenselektoren zielen auf ein Element ab, das einen bestimmten Wert für sein [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut hat:

```css
.box {
}
```

ID-Selektoren zielen auf ein Element ab, das einen bestimmten Wert für sein [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut hat:

```css
#unique {
}
```

### Attributselektoren

Diese Gruppe von Selektoren bietet Ihnen verschiedene Möglichkeiten, Elemente basierend auf dem Vorhandensein eines bestimmten Attributs an einem Element auszuwählen:

```css
a[title] {
}
```

Oder sogar eine Auswahl basierend auf dem Vorhandensein eines Attributs mit einem bestimmten Wert zu treffen:

```css
a[href="https://example.com"]
{
}
```

### Pseudoklassen und Pseudoelemente

Diese Gruppe von Selektoren umfasst Pseudoklassen, die bestimmte Zustände eines Elements stylen. Die `:hover`-Pseudoklasse beispielsweise wählt ein Element nur dann aus, wenn es vom Mauszeiger überfahren wird:

```css
a:hover {
}
```

Sie umfasst auch Pseudoelemente, die einen bestimmten Teil eines Elements auswählen, anstatt das Element selbst. Zum Beispiel wählt `::first-line` immer die erste Zeile des Textes innerhalb eines Elements aus (im folgenden Fall ein `<p>`), als ob ein `<span>` um die erste formatierte Zeile gewickelt ist und dann ausgewählt wird.

```css
p::first-line {
}
```

### Kombinatoren

Die letzte Gruppe von Selektoren kombiniert andere Selektoren, um Elemente innerhalb unserer Dokumente anzusprechen. Das folgende Beispiel wählt z. B. Absätze aus, die direkte Kinder von `<article>`-Elementen sind, indem der Kind-Kombinator (`>`) verwendet wird:

```css
article > p {
}
```

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren eingeführt, die es Ihnen ermöglichen, bestimmte HTML-Elemente anzusprechen. Als nächstes werden wir einen genaueren Blick auf [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors) werfen.

Für eine vollständige Liste der Selektoren siehe unsere [CSS-Selektorenreferenz](/de/docs/Web/CSS/CSS_selectors).

{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}
