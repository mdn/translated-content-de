---
title: MathML-Tabellen
short-title: Tables
slug: Web/MathML/Tutorials/For_beginners/Tables
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}

Sobald alle grundlegenden mathematischen Notationen bekannt sind, bleibt zu überlegen, wie tabellarische Layouts verwendet werden können, die für matrixähnliche Ausdrücke und andere fortgeschrittene mathematische Layouts genutzt werden können.

## MathML-Tabellenelemente

Die MathML-Tabellenelemente sind ähnlich denjenigen für [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics): Das `<mtable>`-Element repräsentiert eine mathematische Tabelle, es hat `<mtr>`-Elemente als Kinder (die Zeilen darstellen), von denen jedes `<mtd>`-Elemente als Kinder hat (die Zellen darstellen). Ein `<mtable>`-Element kann an jeder Stelle in einer MathML-Formel eingefügt werden. Das `<mtd>`-Element kann eine beliebige Anzahl von MathML-Kindern enthalten und wird sie als `<mrow>`-Container layouten.

Tabellen werden typischerweise für matrixähnliche Ausdrücke (einschließlich Vektoren) verwendet. Hier ist ein einfaches Beispiel, das aus dem [Artikel über die CSS `matrix()`-Funktion](/de/docs/Web/CSS/transform-function/matrix) entnommen ist:

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

## Ermöglichen, dass Zellen mehrere Zeilen und Spalten überspannen

Dies ist wiederum ähnlich wie bei [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#allowing_cells_to_span_multiple_rows_and_columns). Das `<mtd>`-Element akzeptiert die Attribute `columnspan` und `rowspan`, um anzugeben, dass die Zelle mehrere Zeilen und Spalten überspannt. Nachfolgend überspannt die innere Matrix zwei Spalten der äußeren Matrix:

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
> Aus historischen Gründen wird das MathML-Attribut für Spaltenüberspannung `columnspan` und nicht `colspan` genannt.

## Verwendung für fortgeschrittenes Layout

Neben der Darstellung von matrixähnlichen Objekten werden MathML-Tabellen manchmal für fortgeschrittene Layouts in mathematischen Formeln verwendet, zum Beispiel in [Wikipedias Definition des Legendresymbols](https://en.wikipedia.org/wiki/Legendre_symbol). Hier werden die verschiedenen Fälle in drei verschiedenen Zeilen geschrieben, während die Werte und Bedingungen in zwei verschiedenen Spalten platziert werden.

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
> Der [`<mtable>`-Artikel](/de/docs/Web/MathML/Reference/Element/mtable) bietet fortgeschrittenere Layoutoptionen über spezielle Attribute wie Ausrichtung oder Abstände. Diese entstanden vor den CSS-Äquivalenten und wurden ursprünglich für Renderer entworfen, die CSS nicht unterstützten. Diese Attribute sind jedoch möglicherweise nicht in allen Browsern implementiert. In Zukunft wird es wahrscheinlich, dass die Verwendung von `<mtable>` nur für Layout-Zwecke (d.h. keine tatsächlichen matrixähnlichen Objekte) durch CSS-basierte Alternativen ersetzt werden kann.

## Zusammenfassung

In diesem Artikel haben wir die `<mtable>`, `<mtr>` und `<mtd>` Elemente vorgestellt, die den HTML-Tabellenelementen entsprechen. Wir haben gesehen, wie sie zur Darstellung matrixähnlicher Objekte verwendet werden und wie sie manchmal für fortgeschrittene Layouts genutzt werden.

Sie haben dieses Modul fast abgeschlossen — es gibt nur noch eine letzte Aufgabe. In der [Bewertung zu den drei berühmten mathematischen Formeln](/de/docs/Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas) werden Sie Ihr neues Wissen nutzen, um einen kleinen mathematischen Artikel mit HTML und MathML neu zu schreiben.

## Siehe auch

- [Lernen über HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [Das `<mtable>`-Element](/de/docs/Web/MathML/Reference/Element/mtable)
- [Das `<mtr>`-Element](/de/docs/Web/MathML/Reference/Element/mtr)
- [Das `<mtd>`-Element](/de/docs/Web/MathML/Reference/Element/mtd)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}
