---
title: CSS-Selektoren
slug: Learn/CSS/Building_blocks/Selectors
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

In [CSS](/de/docs/Glossary/CSS) werden Selektoren verwendet, um die [HTML](/de/docs/Glossary/HTML)-Elemente auf unseren Webseiten zu identifizieren, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine äußerst präzise Auswahl der zu stylenden Elemente ermöglichen. In diesem Artikel und seinen Unterartikeln werden wir die verschiedenen Typen im Detail besprechen und sehen, wie sie funktionieren.

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
        >, Grundlagen von HTML (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Im Detail zu lernen, wie CSS-Selektoren funktionieren.</td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster aus Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel anzuwenden. Das oder die Elemente, die vom Selektor ausgewählt werden, werden als _Subjekt des Selektors_ bezeichnet.

![Einige Codezeilen mit hervorgehobenem h1.](selector.png)

In anderen Artikeln haben Sie möglicherweise verschiedene Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf verschiedene Weise ansprechen - beispielsweise indem sie ein Element wie `h1` oder eine Klasse wie `.special` auswählen.

In CSS sind Selektoren in der CSS-Selektoren-Spezifikation definiert; wie jeder andere Teil von CSS müssen sie in Browsern unterstützt werden, um zu funktionieren. Die meisten Selektoren, denen Sie begegnen werden, sind in der [Level 3 Selectors Specification](https://www.w3.org/TR/selectors-3/) und der [Level 4 Selectors Specification](https://www.w3.org/TR/selectors-4/) definiert, wobei beide reife Spezifikationen sind, so dass Sie eine ausgezeichnete Browser-Unterstützung für diese Selektoren finden werden.

## Selektorenlisten

Wenn Sie mehr als ein Element haben, das dasselbe CSS verwendet, können die einzelnen Selektoren zu einer _Selektorenliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Wenn ich zum Beispiel dasselbe CSS für ein `h1` und auch eine Klasse `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch in eine Selektorenliste kombinieren, indem ich ein Komma zwischen ihnen hinzufüge.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerräume sind vor oder nach dem Komma zulässig. Sie finden die Selektoren möglicherweise auch besser lesbar, wenn jeder auf einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Im folgenden Live-Beispiel versuchen Sie, die beiden Selektoren, die identische Deklarationen haben, zu kombinieren. Die visuelle Darstellung sollte nach der Kombination identisch sein.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1150)}}

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn einer der Selektoren syntaktisch ungültig ist.

Im folgenden Beispiel wird die Regel für den ungültigen Klassenselektor ignoriert, während das `h1` weiterhin gestylt wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn jedoch kombiniert, werden weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig betrachtet wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Arten von Selektoren

Es gibt einige verschiedene Gruppen von Selektoren, und zu wissen, welchen Typ von Selektor Sie benötigen, hilft Ihnen, das richtige Werkzeug für die Aufgabe zu finden. In den Unterartikeln dieses Artikels werden wir die verschiedenen Gruppen von Selektoren genauer betrachten.

### Typ-, Klassen- und ID-Selektoren

Typselektoren zielen auf ein HTML-Element wie ein [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) ab:

```css
h1 {
}
```

Klassenselektoren zielen auf ein Element ab, das einen spezifischen Wert für sein [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut hat:

```css
.box {
}
```

ID-Selektoren zielen auf ein Element ab, das einen spezifischen Wert für sein [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut hat:

```css
#unique {
}
```

### Attributselektoren

Diese Gruppe von Selektoren bietet Ihnen verschiedene Möglichkeiten, Elemente basierend auf dem Vorhandensein eines bestimmten Attributs auf einem Element auszuwählen:

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

Diese Gruppe von Selektoren umfasst Pseudoklassen, die bestimmte Zustände eines Elements stylen. Die `:hover`-Pseudoklasse zum Beispiel wählt ein Element nur dann aus, wenn es mit dem Mauszeiger darüber schwebt:

```css
a:hover {
}
```

Sie umfasst auch Pseudoelemente, die einen bestimmten Teil eines Elements anstelle des gesamten Elements auswählen. Beispielsweise wählt `::first-line` immer die erste Zeile Text innerhalb eines Elements aus (im untenstehenden Fall ein `<p>`), als ob ein `<span>` um die erste formatierte Zeile gelegt und dann ausgewählt worden wäre.

```css
p::first-line {
}
```

### Kombinatoren

Die letzte Gruppe von Selektoren kombiniert andere Selektoren, um Elemente innerhalb unserer Dokumente anzusprechen. Das folgende Beispiel wählt Absätze aus, die direkte Kinder von `<article>`-Elementen sind, mithilfe des Kind-Kombinators (`>`):

```css
article > p {
}
```

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren vorgestellt, die Ihnen ermöglichen, bestimmte HTML-Elemente zu identifizieren. Als nächstes werden wir einen genaueren Blick auf [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors) werfen.

Für eine vollständige Liste der Selektoren siehe unsere [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}
