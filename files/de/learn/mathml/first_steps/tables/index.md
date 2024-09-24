---
title: MathML-Tabellen
slug: Learn/MathML/First_steps/Tables
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps/Three_famous_mathematical_formulas", "Learn/MathML/First_steps")}}

Sobald alle grundlegenden mathematischen Notationen bekannt sind, bleibt noch die tabellarische Darstellung zu berücksichtigen, die für matrixähnliche Ausdrücke und andere fortgeschrittene mathematische Darstellungen verwendet werden kann.

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
        Vertrautheit mit MathML-Tabellenelementen zu erlangen und einige Anwendungsfälle kennenzulernen.
      </td>
    </tr>
  </tbody>
</table>

## MathML-Tabellenelemente

Die MathML-Tabellenelemente sind den [HTML-Tabellen](/de/docs/Learn/HTML/Tables) ähnlich: Das `<mtable>`-Element stellt eine mathematische Tabelle dar, es hat `<mtr>`-Elemente als Kinder (die Zeilen repräsentieren), die jeweils `<mtd>`-Elemente als Kinder haben (die Zellen repräsentieren). Ein `<mtable>`-Element kann überall in einer MathML-Formel eingefügt werden. Das `<mtd>`-Element kann eine beliebige Anzahl von MathML-Kindern enthalten und sie als `<mrow>`-Container anordnen.

Tabellen werden typischerweise für matrixähnliche Ausdrücke (einschließlich Vektoren) verwendet. Hier ist ein einfaches Beispiel aus dem [Artikel über die CSS-`matrix()`-Funktion](/de/docs/Web/CSS/transform-function/matrix):

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

## Zellen über mehrere Zeilen und Spalten hinweg spannen lassen

Dies ist wieder ähnlich wie bei [HTML-Tabellen](/de/docs/Learn/HTML/Tables/Basics#allowing_cells_to_span_multiple_rows_and_columns). Das `<mtd>`-Element akzeptiert die Attribute `columnspan` und `rowspan`, um anzugeben, dass die Zelle sich über mehrere Zeilen und Spalten erstreckt. Im folgenden Beispiel erstreckt sich die innere Matrix über zwei Spalten der äußeren Matrix:

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
> Aus historischen Gründen wird das MathML-Attribut für Spaltenspannweite `columnspan` genannt, nicht `colspan`.

## Verwendung für erweitertes Layout

Neben der Darstellung von matrixähnlichen Objekten werden MathML-Tabellen manchmal auch für erweitertes Layout in mathematischen Formeln verwendet, zum Beispiel in [Wikipedias Definition des Legendre-Symbols](https://en.wikipedia.org/wiki/Legendre_symbol). Hier sind die verschiedenen Fälle in drei unterschiedlichen Zeilen geschrieben, während die Werte und Bedingungen in zwei unterschiedlichen Spalten angeordnet sind.

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
                <mtext>wenn&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;ist ein quadratischer Rest modulo&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;und&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;ist kein Vielfaches von&nbsp;</mtext>
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
                <mtext>wenn&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;ist ein nicht quadratischer Rest modulo&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>0</mn>
              </mtd>
              <mtd>
                <mtext>wenn&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;ist ein Vielfaches von&nbsp;</mtext>
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
> Der Artikel zu [`<mtable>`](/de/docs/Web/MathML/Element/mtable) bietet erweiterte Layout-Optionen über spezielle Attribute wie Ausrichtung oder Abstände. Diese entstanden vor den CSS-Äquivalenten und wurden ursprünglich für Renderer entworfen, die CSS nicht unterstützten. Allerdings könnten diese Attribute nicht in allen Browsern implementiert sein. In Zukunft ist es wahrscheinlich, dass die Nutzung von `<mtable>` für reine Layout-Zwecke (d. h. nicht für tatsächliche matrixähnliche Objekte) durch CSS-basierte Alternativen ersetzt werden kann.

## Zusammenfassung

In diesem Artikel haben wir die `<mtable>`, `<mtr>` und `<mtd>`-Elemente besprochen, die den HTML-Elementen für Tabellen entsprechen. Wir haben gesehen, wie man sie zur Darstellung von matrixähnlichen Objekten verwenden kann und wie sie manchmal für erweitertes Layout verwendet werden.

Sie haben dieses Modul fast abgeschlossen - wir müssen nur noch eine Sache tun. In der [Bewertung der drei berühmten mathematischen Formeln](/de/docs/Learn/MathML/First_steps/Three_famous_mathematical_formulas) werden Sie Ihr neues Wissen nutzen, um einen kleinen mathematischen Artikel unter Verwendung von HTML und MathML neu zu schreiben.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps/Three_famous_mathematical_formulas", "Learn/MathML/First_steps")}}

## Siehe auch

- [Lernen über HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- [Das `<mtable>`-Element](/de/docs/Web/MathML/Element/mtable)
- [Das `<mtr>`-Element](/de/docs/Web/MathML/Element/mtr)
- [Das `<mtd>`-Element](/de/docs/Web/MathML/Element/mtd)
