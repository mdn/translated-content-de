---
title: CSS-Selektoren
slug: Learn/CSS/Building_blocks/Selectors
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

In {{Glossary("CSS", "CSS")}} werden Selektoren verwendet, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu zielen, die wir gestalten möchten. Es gibt eine Vielzahl von CSS-Selektoren, die es ermöglichen, mit feiner Präzision Elemente auszuwählen, die gestaltet werden sollen. In diesem Artikel und seinen Unterartikeln gehen wir im Detail auf die verschiedenen Typen ein und sehen, wie sie funktionieren.

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
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie CSS-Selektoren im Detail funktionieren.</td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster aus Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel auf sie anzuwenden. Das Element oder die Elemente, die durch den Selektor ausgewählt werden, werden als _Subjekt des Selektors_ bezeichnet.

![Einige Codes mit hervorgehobenem h1.](selector.png)

In anderen Artikeln sind Ihnen möglicherweise einige verschiedene Selektoren begegnet und Sie haben gelernt, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen — zum Beispiel durch Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`.

In CSS sind Selektoren in der CSS-Selektoren-Spezifikation definiert; wie jede andere Komponente von CSS müssen sie in Browsern unterstützt werden, damit sie funktionieren. Die Mehrheit der Ihnen begegneten Selektoren sind in den [Selektoren-Spezifikationen der Stufen 3](https://www.w3.org/TR/selectors-3/) und [4](https://www.w3.org/TR/selectors-4/) definiert, die beide ausgereifte Spezifikationen sind, sodass Sie hervorragende Unterstützung in Browsern für diese Selektoren finden werden.

## Selektorlisten

Wenn Sie mehr als ein Element haben, das das gleiche CSS verwendet, können die einzelnen Selektoren zu einer _Selektorliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Wenn ich zum Beispiel das gleiche CSS für ein `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch in eine Selektorliste kombinieren, indem ich ein Komma zwischen ihnen einfüge.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma zulässig. Sie finden die Selektoren möglicherweise auch leichter lesbar, wenn jeder in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Versuchen Sie im Live-Beispiel unten, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte die gleiche sein, nachdem sie kombiniert wurden.

```html live-sample___selector-list
<h1>Type selectors</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce
  kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
  purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>
```

```css live-sample___selector-list
body {
  font-family: sans-serif;
}
span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("selector-list", "", "280px")}}

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn ein Selektor syntaktisch ungültig ist.

Im folgenden Beispiel wird die Regel des ungültigen Klassenselektors ignoriert, während das `h1` weiterhin gestaltet würde.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn jedoch kombiniert, wird weder das `h1` noch die Klasse gestaltet, da die gesamte Regel als ungültig angesehen wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Arten von Selektoren

Es gibt einige verschiedene Gruppierungen von Selektoren, und zu wissen, welchen Selektortyp Sie benötigen könnten, hilft Ihnen dabei, das richtige Werkzeug für die Aufgabe zu finden. In den Unterartikeln dieses Artikels werden wir uns die verschiedenen Gruppen von Selektoren genauer ansehen.

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

### Pseudo-Klassen und Pseudo-Elemente

Diese Gruppe von Selektoren umfasst Pseudo-Klassen, die bestimmte Zustände eines Elements stylen. Die `:hover`-Pseudo-Klasse beispielsweise wählt ein Element nur aus, wenn es von der Mauszeiger überfahren wird:

```css
a:hover {
}
```

Sie umfasst auch Pseudo-Elemente, die einen bestimmten Teil eines Elements und nicht das Element selbst auswählen. Zum Beispiel wählt `::first-line` immer die erste Zeile des Textes innerhalb eines Elements aus (ein `<p>` im unten stehenden Fall), indem es so wirkt, als ob ein `<span>` um die erste formatierte Zeile gelegt und dann ausgewählt wird.

```css
p::first-line {
}
```

### Kombinatoren

Die letzte Gruppe von Selektoren kombiniert andere Selektoren, um Elemente innerhalb unserer Dokumente zu zielen. Das folgende Beispiel wählt Absätze aus, die direkte Kinder von `<article>`-Elementen sind, indem der Kind-Kombinator (`>`) verwendet wird:

```css
article > p {
}
```

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren vorgestellt, die es Ihnen ermöglichen, bestimmte HTML-Elemente zu zielen. Als nächstes werden wir uns [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors) genauer ansehen.

Für eine vollständige Liste von Selektoren siehe unser [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}
