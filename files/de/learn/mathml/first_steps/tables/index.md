---
title: MathML-Tabellen
slug: Learn/MathML/First_steps/Tables
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps/Three_famous_mathematical_formulas", "Learn/MathML/First_steps")}}

Sobald alle grundlegenden mathematischen Notationen bekannt sind, bleibt noch die tabellarische Layoutgestaltung zu berücksichtigen, die für matrixähnliche Ausdrücke und andere fortgeschrittene mathematische Layouts verwendet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >. und <a href="/de/docs/Learn/HTML/Tables"
          >HTML-Tabellen</a
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertraut werden mit MathML-tabellarischen Elementen und einige
        Anwendungsfälle kennen.
      </td>
    </tr>
  </tbody>
</table>

## MathML-tabellarische Elemente

Die MathML-tabellarischen Elemente ähneln denen für [HTML-Tabellen](/de/docs/Learn/HTML/Tables): das `<mtable>`-Element repräsentiert eine mathematische Tabelle, es hat `<mtr>`-Elemente als Kinder (die Zeilen darstellen), die jeweils `<mtd>`-Elemente als Kinder haben (die Zellen darstellen). Ein `<mtable>`-Element kann überall in einer MathML-Formel eingefügt werden. Das `<mtd>`-Element kann eine beliebige Anzahl von MathML-Kindern enthalten und stellt sie als `<mrow>`-Container dar.

Tabellen werden typischerweise für matrixähnliche Ausdrücke (einschließlich Vektoren) verwendet. Hier ist ein einfaches Beispiel aus dem [Artikel über die CSS `matrix()` Funktion](/de/docs/Web/CSS/transform-function/matrix):

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

## Zellen, die mehrere Zeilen und Spalten umfassen

Dies ist erneut ähnlich wie bei [HTML-Tabellen](/de/docs/Learn/HTML/Tables/Basics#allowing_cells_to_span_multiple_rows_and_columns). Das `<mtd>`-Element akzeptiert die Attribute `columnspan` und `rowspan`, um anzuzeigen, dass die Zelle mehrere Zeilen und Spalten umfasst. Unten spannt die innere Matrix zwei Spalten der äußeren Matrix:

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
> Aus historischen Gründen wird das MathML-Attribut für das Spaltenfüllen `columnspan` und nicht `colspan` genannt.

## Verwendung für fortgeschrittenes Layout

Neben der Darstellung von matrixähnlichen Objekten werden MathML-Tabellen manchmal für fortschrittliches Layout innerhalb mathematischer Formeln verwendet, wie zum Beispiel in [Wikipedias Definition des Legendre-Symbols](https://en.wikipedia.org/wiki/Legendre_symbol). Hier sind die verschiedenen Fälle auf drei verschiedenen Zeilen geschrieben, während die Werte und Bedingungen auf zwei verschiedenen Spalten platziert sind.

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
> Der [`<mtable>`-Artikel](/de/docs/Web/MathML/Element/mtable) bietet über spezielle Attribute wie Ausrichtung oder Abstand erweiterte Layoutoptionen. Diese entstanden, bevor CSS-Äquivalente existierten, und waren ursprünglich für Renderer gedacht, die nicht CSS-kompatibel waren. Diese Attribute sind jedoch möglicherweise nicht in allen Browsern implementiert. Zukünftig ist es wahrscheinlich, dass der Einsatz von `<mtable>` für rein Layout-Zwecke (d.h. nicht für tatsächliche matrixähnliche Objekte) durch CSS-basierte Alternativen ersetzt werden kann.

## Zusammenfassung

In diesem Artikel haben wir die Elemente `<mtable>`, `<mtr>` und `<mtd>` besprochen, die den HTML-Elementen für Tabellen entsprechen. Wir haben gesehen, wie man sie zur Darstellung matrixähnlicher Objekte verwenden kann und wie sie manchmal für fortgeschrittenes Layout genutzt werden.

Sie haben dieses Modul fast abgeschlossen — wir haben nur noch eine Sache zu tun. In der [Bewertung zu drei berühmten mathematischen Formeln](/de/docs/Learn/MathML/First_steps/Three_famous_mathematical_formulas) werden Sie Ihr neues Wissen nutzen, um einen kleinen mathematischen Artikel mit HTML und MathML neu zu schreiben.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps/Three_famous_mathematical_formulas", "Learn/MathML/First_steps")}}

## Siehe auch

- [Lernen über HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- [Das `<mtable>`-Element](/de/docs/Web/MathML/Element/mtable)
- [Das `<mtr>`-Element](/de/docs/Web/MathML/Element/mtr)
- [Das `<mtd>`-Element](/de/docs/Web/MathML/Element/mtd)
