---
title: MathML-Tabellen
short-title: Tables
slug: Web/MathML/Tutorials/For_beginners/Tables
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}

Sobald alle grundlegenden mathematischen Notationen bekannt sind, bleibt es, den tabellarischen Aufbau zu betrachten, der für matrixähnliche Ausdrücke und andere fortgeschrittene mathematische Layouts verwendet werden kann.

## MathML-Tabellenelemente

Die MathML-Tabellenelemente ähneln denen für [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics): Das `<mtable>`-Element repräsentiert eine mathematische Tabelle, es hat `<mtr>`-Elemente als Kindelemente (die Reihen repräsentieren), die jeweils `<mtd>`-Elemente als Kindelemente haben (die Zellen repräsentieren). Ein `<mtable>`-Element kann an jeder Stelle in einer MathML-Formel eingefügt werden. Das `<mtd>`-Element kann eine beliebige Anzahl von MathML-Kindelementen enthalten und wird sie als `<mrow>`-Container anordnen.

Tabellen werden typischerweise für matrixähnliche Ausdrücke (einschließlich Vektoren) verwendet. Hier ist ein grundlegendes Beispiel, das aus dem [Artikel über die CSS-Funktion `matrix()`](/de/docs/Web/CSS/transform-function/matrix) entnommen ist:

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

## Zellen erlauben, mehrere Reihen und Spalten zu umfassen

Auch dies ist ähnlich wie bei [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#allowing_cells_to_span_multiple_rows_and_columns). Das `<mtd>`-Element akzeptiert die Attribute `columnspan` und `rowspan`, um anzuzeigen, dass die Zelle mehrere Reihen und Spalten umfasst. Unten umfasst die innere Matrix zwei Spalten der äußeren Matrix:

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
> Aus historischen Gründen wird das MathML-Attribut für Spaltenübergreifung `columnspan` und nicht `colspan` genannt.

## Verwendung für fortgeschrittene Layouts

Neben der Darstellung von matrixähnlichen Objekten werden MathML-Tabellen manchmal für fortgeschrittene Layouts innerhalb mathematischer Formeln verwendet, zum Beispiel in [Wikipedias Definition des Legendre-Symbols](https://en.wikipedia.org/wiki/Legendre_symbol). Hierbei werden die verschiedenen Fälle auf drei verschiedenen Reihen geschrieben, während die Werte und Bedingungen auf zwei verschiedenen Spalten platziert werden.

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
> Der Artikel über [`<mtable>`](/de/docs/Web/MathML/Reference/Element/mtable) bietet fortgeschrittene Layout-Optionen über spezielle Attribute wie Ausrichtung oder Abstände. Diese entstanden vor den CSS-Äquivalenten und wurden ursprünglich für Renderer entworfen, die CSS-unbewusst waren. Diese Attribute werden jedoch möglicherweise nicht in allen Browsern implementiert. In Zukunft ist es wahrscheinlich, dass die Verwendung von `<mtable>` nur für Layout-Zwecke (d.h. keine tatsächlichen matrixähnlichen Objekte) durch CSS-basierte Alternativen ersetzt werden kann.

## Zusammenfassung

In diesem Artikel haben wir die Elemente `<mtable>`, `<mtr>` und `<mtd>` betrachtet, die den HTML-Elementen für Tabellen entsprechen. Wir haben gesehen, wie sie zur Darstellung von matrixähnlichen Objekten verwendet werden und wie sie manchmal für fortgeschrittene Layouts eingesetzt werden.

Sie haben dieses Modul fast abgeschlossen – es bleibt nur noch eine Sache zu tun. In der [Bewertung zu den drei berühmten mathematischen Formeln](/de/docs/Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas) werden Sie Ihr neues Wissen nutzen, um einen kleinen mathematischen Artikel mit HTML und MathML neu zu schreiben.

## Siehe auch

- [Lernen über HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [Das `<mtable>`-Element](/de/docs/Web/MathML/Reference/Element/mtable)
- [Das `<mtr>`-Element](/de/docs/Web/MathML/Reference/Element/mtr)
- [Das `<mtd>`-Element](/de/docs/Web/MathML/Reference/Element/mtd)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}
