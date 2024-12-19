---
title: "Herausforderung: Drei berühmte mathematische Formeln"
slug: Web/MathML/Guides/Three_famous_mathematical_formulas
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{PreviousMenu("Web/MathML/Guides/Tables", "Web/MathML/Guides")}}

Mit dem Wissen, das Sie in den letzten Artikeln erworben haben, sollten Sie bereits in der Lage sein, relativ komplexe MathML-Formeln zu schreiben. Diese Herausforderung gibt Ihnen die Gelegenheit dazu.

## Ein kleiner Mathematikartikel

Das Ziel ist es, den folgenden Mathematikartikel mit HTML und MathML umzuschreiben:

![Screenshot des durch XeLaTeX generierten PDF-Ausdrucks](xelatex-output.png)

Auch wenn Sie nicht mit [LaTeX](https://en.wikipedia.org/wiki/LaTeX) vertraut sein müssen, könnte es nützlich sein, die LaTeX-Quelle zu kennen, aus der es generiert wurde:

```latex
\documentclass{article}

\usepackage{amsmath}
\usepackage{amssymb}

\begin{document}

To solve the cubic equation $t^3 + pt + q = 0$ (where the real numbers
$p, q$ satisfy ${4p^3 + 27q^2} > 0$) one can use Cardano's formula:

\[
  \sqrt[{3}]{
    -\frac{q}{2}
    +\sqrt{\frac{q^2}{4} + {\frac{p^{3}}{27}}}
  }+
  \sqrt[{3}]{
    -\frac{q}{2}
    -\sqrt{\frac{q^2}{4} + {\frac{p^{3}}{27}}}
  }
\]

For any $u_1, \dots, u_n \in \mathbb{C}$ and
$v_1, \dots, v_n \in \mathbb{C}$, the Cauchy–Bunyakovsky–Schwarz
inequality can be written as follows:

\[
  \left| \sum_{k=1}^n {u_k \bar{v_k}} \right|^2
  \leq
  {
    \left( \sum_{k=1}^n {|u_k|} \right)^2
    \left( \sum_{k=1}^n {|v_k|} \right)^2
  }
\]

Finally, the determinant of a Vandermonde matrix can be calculated
using the following expression:

\[
  \begin{vmatrix}
  1 & x_1 & x_1^2 & \dots & x_1^{n-1} \\
  1 & x_2 & x_2^2 & \dots & x_2^{n-1} \\
  1 & x_3 & x_3^2 & \dots & x_3^{n-1} \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & x_n & x_n^2 & \dots & x_n^{n-1} \\
  \end{vmatrix}
  = {\prod_{1 \leq {i,j} \leq n} {(x_i - x_j)}}
\]

\end{document}
```

## Ausgangspunkt

Um mit dieser Aufgabe zu beginnen, können Sie auf unsere übliche HTML-Vorlage zurückgreifen. Diese verwendet standardmäßig UTF-8-Kodierung sowie spezielle Web-Schriftarten für die `<body>`- und `<math>`-Tags (mit ähnlichem Erscheinungsbild wie der LaTeX-Ausdruck). Das Ziel ist es, die Fragezeichen `???` durch tatsächlichen MathML-Inhalt zu ersetzen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Three famous mathematical formulas</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body class="htmlmathparagraph">
    <p>
      To solve the cubic equation ??? (where the real numbers ??? satisfy ???)
      one can use Cardano's formula: ???
    </p>

    <p>
      For any ??? and ???, the Cauchy–Bunyakovsky–Schwarz inequality can be
      written as follows: ???
    </p>

    <p>
      Finally, the determinant of a Vandermonde matrix can be calculated using
      the following expression: ???
    </p>
  </body>
</html>
```

## Tipps und Hinweise

- Beginnen Sie mit dem Einfügen leerer `<math>`-Tags und entscheiden Sie, ob diese ein Attribut `display="block"` haben sollen oder nicht.
- Überprüfen Sie den verwendeten Text und finden Sie die entsprechenden [Unicode-Zeichen](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) ("−", "ℂ", "∑", ...).
- Analysieren Sie die Semantik jedes Textteils (Variable? Operator? Zahl?) und bestimmen Sie, welches Token-Element für jedes davon verwendet werden sollte.
- Suchen Sie nach fortgeschrittenen Konstruktionen (Brüche? Wurzeln? Skripte? Matrizen?) und bestimmen Sie, welches MathML-Element dafür verwendet werden sollte.
- Vergessen Sie nicht, `<mrow>` für das Gruppieren von Unterausdrücken zu verwenden.
- Achten Sie auf dehnbare und große Operatoren!
- Verwenden Sie den [W3C-Validator](https://validator.w3.org/nu/), um unbeabsichtigte Fehler in Ihrem HTML/MathML-Markup zu erkennen.
- Wenn Sie feststecken oder merken, wie mühsam es ist, MathML von Hand zu schreiben, können Sie Tools zum [Schreiben von MathML](/de/docs/Web/MathML/Authoring) verwenden, wie zum Beispiel [TeXZilla](https://fred-wang.github.io/TeXZilla/).

{{PreviousMenu("Web/MathML/Guides/Tables", "Web/MathML/Guides")}}
