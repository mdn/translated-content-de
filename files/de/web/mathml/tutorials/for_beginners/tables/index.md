---
title: MathML-Tabellen
short-title: Tables
slug: Web/MathML/Tutorials/For_beginners/Tables
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}

Wenn alle grundlegenden mathematischen Notationen bekannt sind, bleibt noch die tabellarische Anordnung zu berücksichtigen, die für matrixähnliche Ausdrücke und andere fortgeschrittene mathematische Layouts verwendet werden kann.

## MathML-tabellarische Elemente

Die MathML-tabellarischen Elemente sind den [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) ähnlich: Das `<mtable>`-Element stellt eine mathematische Tabelle dar, es hat `<mtr>`-Elemente als Kinder (die Zeilen darstellen), von denen jedes `<mtd>`-Elemente als Kinder hat (die Zellen darstellen). Ein `<mtable>`-Element kann überall in einer MathML-Formel eingefügt werden. Das `<mtd>`-Element kann beliebig viele MathML-Kinder enthalten und wird diese als `<mrow>`-Container anordnen.

Tabellen werden typischerweise für matrixähnliche Ausdrücke (einschließlich Vektoren) verwendet. Hier ist ein einfaches Beispiel, das dem [Artikel über die CSS-`matrix()`-Funktion](/de/docs/Web/CSS/transform-function/matrix) entnommen ist:

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mtable>
      <mtr>
        <mtd>
          <mi>a</mi>
        </mtd>
        <mtd>
          <mi>c</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>x</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>b</mi>
        </mtd>
        <mtd>
          <mi>d</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>y</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo>)</mo>
  </mrow>
</math>
```

{{ EmbedLiveSample('MathML_tabular_elements', 700, 200, "", "") }}

## Zulassen, dass Zellen sich über mehrere Zeilen und Spalten erstrecken

Dies ist wiederum vergleichbar mit [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics/Basics#allowing_cells_to_span_multiple_rows_and_columns). Das `<mtd>`-Element akzeptiert die Attribute `columnspan` und `rowspan`, um anzugeben, dass sich die Zelle über mehrere Zeilen und Spalten erstreckt. Unten erstreckt sich die innere Matrix über zwei Spalten der äußeren Matrix:

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My matrix with columnspan</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mo>(</mo>
        <mtable>
          <mtr>
            <mtd columnspan="2">
              <mrow>
                <mo>(</mo>
                <mtable>
                  <mtr>
                    <mtd>
                      <mi>a</mi>
                    </mtd>
                    <mtd>
                      <mi>c</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mi>b</mi>
                    </mtd>
                    <mtd>
                      <mi>d</mi>
                    </mtd>
                  </mtr>
                </mtable>
                <mo>)</mo>
              </mrow>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mi>T</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
          </mtr>
        </mtable>
        <mo>)</mo>
      </mrow>
    </math>
  </body>
</html>
```

{{ EmbedLiveSample('allowing_cells_to_span_multiple_rows_and_columns', 700, 200, "", "") }}

> [!NOTE]
> Aus historischen Gründen wird das MathML-Attribut für die Spaltenüberspannung `columnspan` und nicht `colspan` genannt.

## Verwendung für fortgeschrittenes Layout

Neben der Darstellung von matrixähnlichen Objekten werden MathML-Tabellen manchmal für fortgeschrittenes Layout innerhalb mathematischer Formeln verwendet, zum Beispiel in [Wikipedias Definition des Legendre-Symbols](https://en.wikipedia.org/wiki/Legendre_symbol). Hier werden die verschiedenen Fälle in drei verschiedenen Zeilen dargestellt, während die Werte und Bedingungen in zwei verschiedenen Spalten platziert sind.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My first matrix</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>(</mo>
          <mfrac>
            <mi>a</mi>
            <mi>b</mi>
          </mfrac>
          <mo>)</mo>
        </mrow>
        <mo>=</mo>
        <mrow>
          <mo>{</mo>
          <mtable>
            <mtr>
              <mtd>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a quadratic residue modulo&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;and&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is not a multiple of&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo>−</mo>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a non-quadratic residue modulo&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>0</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a multiple of&nbsp;</mtext>
                <mi>p</mi>
                <mo>.</mo>
              </mtd>
            </mtr>
          </mtable>
        </mrow>
      </mrow>
    </math>
  </body>
</html>
```

{{ EmbedLiveSample('Usage_for_advanced_layout', 700, 200, "", "") }}

> [!WARNING]
> Der [`<mtable>`-Artikel](/de/docs/Web/MathML/Reference/Element/mtable) bietet fortgeschrittenere Layoutoptionen über spezielle Attribute wie Ausrichtung oder Abstände. Diese entstanden vor CSS-Äquivalenten und wurden ursprünglich für Renderer entwickelt, die sich der CSS nicht bewusst waren. Diese Attribute sind jedoch möglicherweise nicht in allen Browsern implementiert. In Zukunft ist es wahrscheinlich, dass die Verwendung von `<mtable>` zu reinen Layoutzwecken (also nicht für echte matrixähnliche Objekte) durch CSS-basierte Alternativen ersetzt werden kann.

## Zusammenfassung

In diesem Artikel haben wir die `<mtable>`, `<mtr>` und `<mtd>`-Elemente überprüft, die den HTML-Elementen für Tabellen entsprechen. Wir haben gesehen, wie man sie zur Darstellung von matrixähnlichen Objekten verwendet und wie sie manchmal für fortgeschrittenes Layout eingesetzt werden.

Sie haben dieses Modul fast abgeschlossen – wir haben nur noch eine weitere Sache zu tun. In der [Bewertung der drei berühmten mathematischen Formeln](/de/docs/Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas) verwenden Sie Ihr neues Wissen, um einen kleinen mathematischen Artikel mit HTML und MathML neu zu schreiben.

## Siehe auch

- [Lernen über HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [Das `<mtable>`-Element](/de/docs/Web/MathML/Reference/Element/mtable)
- [Das `<mtr>`-Element](/de/docs/Web/MathML/Reference/Element/mtr)
- [Das `<mtd>`-Element](/de/docs/Web/MathML/Reference/Element/mtd)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}
