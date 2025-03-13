---
title: "Herausforderung: Drei berühmte mathematische Formeln"
short-title: Berühmte Formeln
slug: Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{PreviousMenu("Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}

Mit den Dingen, die Sie in den letzten Artikeln gelernt haben, sollten Sie bereits in der Lage sein, relativ anspruchsvolle MathML-Formeln zu schreiben. Diese Herausforderung gibt Ihnen die Gelegenheit dazu.

## Ein kleiner Mathematikartikel

Das Ziel ist es, den folgenden Mathematikartikel mit HTML und MathML neu zu schreiben:

![Screenshot der von XeLaTeX generierten PDF-Ausgabe](xelatex-output.png)

Obwohl Sie nicht mit [LaTeX](https://en.wikipedia.org/wiki/LaTeX) vertraut sein müssen, könnte es nützlich sein, den LaTeX-Quelltext zu kennen, aus dem er generiert wurde:

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

Um diese Bewertung zu starten, können Sie auf unsere übliche HTML-Vorlage zurückgreifen. Standardmäßig verwendet sie UTF-8-Codierung, spezielle Web-Schriftarten für die `<body>` und `<math>` Tags (mit ähnlichem Look & Feel wie die LaTeX-Ausgabe). Das Ziel ist es, die Fragezeichen `???` mit echtem MathML-Inhalt zu ersetzen.

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

## Hinweise und Tipps

- Beginnen Sie damit, leere `<math>` Tags einzufügen, und entscheiden Sie, ob sie ein `display="block"` Attribut haben sollten oder nicht.
- Überprüfen Sie den verwendeten Text und finden Sie deren [Unicode-Zeichen](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) ("−", "ℂ", "∑", ...).
- Analysieren Sie die Semantik jedes Textabschnitts (Variable? Operator? Zahl?) und bestimmen Sie das richtige Token-Element für jeden von ihnen.
- Suchen Sie nach fortgeschrittenen Konstruktionen (Brüche? Wurzeln? Skripte? Matrizen?) und bestimmen Sie das richtige MathML-Element für jede von ihnen.
- Vergessen Sie nicht, `<mrow>` zum Gruppieren von Unterausdrücken zu verwenden.
- Achten Sie auf dehnbare und große Operatoren!
- Nutzen Sie den [W3C-Validator](https://validator.w3.org/nu/), um unbeabsichtigte Fehler in Ihrem HTML/MathML-Markup zu erkennen.
- Wenn Sie feststecken oder feststellen, wie mühsam es ist, MathML von Hand zu schreiben, zögern Sie nicht, Werkzeuge zu verwenden, um [MathML zu schreiben](/de/docs/Web/MathML/Guides/Authoring), wie z.B. [TeXZilla](https://fred-wang.github.io/TeXZilla/).

{{PreviousMenu("Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}
