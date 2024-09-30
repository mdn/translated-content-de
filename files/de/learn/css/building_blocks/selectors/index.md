---
title: CSS-Selektoren
slug: Learn/CSS/Building_blocks/Selectors
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

In [CSS](/de/docs/Glossary/CSS) werden Selektoren verwendet, um die [HTML](/de/docs/Glossary/HTML)-Elemente auf unseren Webseiten zu bestimmen, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine feinkörnige Präzision beim Auswählen der zu stylenden Elemente ermöglichen. In diesem Artikel und seinen Unterartikeln werden wir die verschiedenen Typen detailliert durchgehen und sehen, wie sie funktionieren.

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
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Erste Schritte mit CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Kennenlernen der Funktionsweise von CSS-Selektoren im Detail.</td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster von Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel auf sie anzuwenden. Das oder die Elemente, die vom Selektor ausgewählt werden, werden als _Subjekt des Selektors_ bezeichnet.

![Einige Codezeilen mit hervorgehobenen h1.](selector.png)

In anderen Artikeln sind Ihnen möglicherweise einige verschiedene Selektoren begegnet, und Sie haben gelernt, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen — zum Beispiel, indem sie ein Element wie `h1` oder eine Klasse wie `.special` auswählen.

In CSS sind Selektoren in der CSS-Selektorenspezifikation definiert; wie jeder andere Teil von CSS benötigen sie Unterstützung in Browsern, damit sie funktionieren. Die meisten Selektoren, die Sie kennenlernen werden, sind in der [Level-3-Selektorenspezifikation](https://www.w3.org/TR/selectors-3/) und der [Level-4-Selektorenspezifikation](https://www.w3.org/TR/selectors-4/) definiert, bei denen es sich um ausgereifte Spezifikationen handelt, daher finden Sie eine hervorragende Browser-Unterstützung für diese Selektoren.

## Selektoren-Listen

Wenn Sie mehr als eine Stelle haben, die dasselbe CSS verwendet, können die einzelnen Selektoren in eine _Selektoren-Liste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Wenn ich beispielsweise dasselbe CSS für ein `h1` und auch für eine Klasse `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch in einer Selektoren-Liste kombinieren, indem ich ein Komma dazwischen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma zulässig. Sie finden die Selektoren möglicherweise auch lesbarer, wenn jeder von ihnen in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Im Live-Beispiel unten versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte nach der Kombination gleich bleiben.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1150)}}

Wenn Sie Selektoren auf diese Weise gruppieren und ein Selektor syntaktisch ungültig ist, wird die gesamte Regel ignoriert.

Im folgenden Beispiel wird die ungültige Klassenselektorregel ignoriert, während das `h1` weiterhin gestylt wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn sie jedoch kombiniert werden, wird weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig angesehen wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Arten von Selektoren

Es gibt einige verschiedene Gruppierungen von Selektoren, und das Wissen, welchen Typ von Selektor Sie benötigen könnten, hilft Ihnen, das richtige Werkzeug für die Aufgabe zu finden. In den Unterartikeln dieses Artikels werden wir die verschiedenen Gruppen von Selektoren im Detail betrachten.

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

Diese Gruppe von Selektoren umfasst Pseudo-Klassen, die bestimmte Zustände eines Elements stylen. Die `:hover` Pseudo-Klasse beispielsweise wählt ein Element nur aus, wenn es vom Mauszeiger überfahren wird:

```css
a:hover {
}
```

Sie umfasst auch Pseudo-Elemente, die einen bestimmten Teil eines Elements anstelle des Elements selbst auswählen. Zum Beispiel wählt `::first-line` immer die erste Zeile eines Textes innerhalb eines Elements aus (im unten stehenden Fall ein `<p>`), als ob ein `<span>` um die erste formatierte Zeile gewickelt und dann ausgewählt wurde.

```css
p::first-line {
}
```

### Kombinatoren

Die letzte Gruppe von Selektoren kombiniert andere Selektoren, um Elemente innerhalb unserer Dokumente anzusprechen. Das folgende Beispiel wählt Absätze aus, die direkte Kinder von `<article>`-Elementen sind, indem es den Kind-Kombinator (`>`) verwendet:

```css
article > p {
}
```

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren eingeführt, die es Ihnen ermöglichen, bestimmte HTML-Elemente anzusprechen. Als nächstes werden wir uns die [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors) genauer ansehen.

Für eine vollständige Liste der Selektoren, siehe unser [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}
