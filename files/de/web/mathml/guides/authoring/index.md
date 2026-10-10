---
title: MathML verfassen
short-title: Authoring
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

Auf dieser Seite wird erklärt, wie Sie mathematische Ausdrücke mit der Sprache MathML schreiben. MathML beschreibt diese Ausdrücke mithilfe von Tags und Attributen in Textform. Wie bei HTML oder SVG kann dieser Text bei komplexen Inhalten sehr umfangreich werden. Daher sind [geeignete Autorenwerkzeuge](https://www.w3.org/wiki/Math_Tools#Authoring_tools) hilfreich, etwa Konverter für eine [leichtgewichtige Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-Gleichungseditoren. Es gibt viele solcher Werkzeuge; eine vollständige Liste ist nicht möglich. Dieser Artikel konzentriert sich stattdessen auf gängige Vorgehensweisen und Beispiele.

## MathML verwenden

Auch wenn Ihre MathML-Formeln wahrscheinlich mit Autorenwerkzeugen erstellt werden, sollten Sie einige Hinweise beachten, um sie richtig in Ihr Dokument einzubinden.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein [`math`](/de/docs/Web/MathML/Reference/Element/math)-Wurzelelement dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel innerhalb einer Textzeile dargestellt, wobei zusätzliche Anpassungen ihre Höhe möglichst gering halten. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln in der üblichen Größe und in einem eigenen Absatz darzustellen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>MathML in HTML</title>
  </head>
  <body>
    <h1>MathML in HTML</h1>

    <p>
      One over square root of two (inline style):
      <math>
        <mfrac>
          <mn>1</mn>
          <msqrt>
            <mn>2</mn>
          </msqrt>
        </mfrac>
      </math>
    </p>

    <p>
      One over square root of two (display style):
      <math display="block">
        <mfrac>
          <mn>1</mn>
          <msqrt>
            <mn>2</mn>
          </msqrt>
        </mfrac>
      </math>
    </p>
  </body>
</html>
```

> [!NOTE]
> Um MathML in XML-Dokumenten (z. B. XHTML, EPUB oder OpenDocument) zu verwenden, fügen Sie jedem `<math>`-Element ausdrücklich ein `xmlns="http://www.w3.org/1998/Math/MathML"`-Attribut hinzu.

> [!NOTE]
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Sie können daher mathematische Formeln in solche Nachrichten einbetten, sofern die MathML-Tags nicht durch Bereinigungsmechanismen für Markup herausgefiltert werden.

#### Mathematische Schriftarten

Wie im Artikel über [MathML-Schriftarten](/de/docs/Web/MathML/Guides/Fonts) erläutert, sind mathematische Schriftarten für die Darstellung von MathML-Inhalten wichtig. Daher empfiehlt es sich, auf die [Installationsanleitung für solche Schriftarten](/de/docs/Web/MathML/Guides/Fonts#installation_instructions) hinzuweisen oder sie als [Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) bereitzustellen.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) stellt solche Web-Schriftarten zusammen mit passenden Stylesheets bereit. Um beispielsweise Latin Modern auszuwählen und ersatzweise Web-Schriftarten zu verwenden, fügen Sie einfach die folgende Zeile in den Dokumentkopf ein:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

Es stehen mehrere Schriftarten zur Auswahl. Sie können beispielsweise einen anderen Stil wie STIX auswählen:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

Die [XITS-Schriftart](https://fred-wang.github.io/MathFonts/XITS/mathfonts.css) wird für Formeln empfohlen, die von rechts nach links dargestellt werden müssen. Weitere Informationen finden Sie bei der globalen Eigenschaft [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir).

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/XITS/mathfonts.css" />
```

> [!NOTE]
> Die Schriftarten und Stylesheets auf der MathFonts-Seite werden unter Open-Source-Lizenzen bereitgestellt. Sie können sie daher auf Ihren eigenen Server kopieren und an Ihre Anforderungen anpassen.

## Konvertierung aus einer einfachen Syntax

In diesem Abschnitt betrachten wir einige Werkzeuge, mit denen sich eine [leichtgewichtige Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) wie die verbreitete Sprache [LaTeX](https://en.wikipedia.org/wiki/LaTeX) in MathML konvertieren lässt.

### Clientseitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben. Eine JavaScript-Bibliothek übernimmt ihre Konvertierung in MathML. Das ist wahrscheinlich die einfachste Möglichkeit, bringt aber auch einige Nachteile mit sich: Zusätzlicher JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen maskieren, und Webcrawler haben keinen Zugriff auf die MathML-Ausgabe.

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann den Quellcode aufnehmen und sicherstellen, dass die entsprechende MathML-Ausgabe über einen [Shadow-Teilbaum](/de/docs/Web/API/Web_components/Using_shadow_DOM) eingefügt und dargestellt wird. Mit dem Element [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html) von [TeXZilla](https://github.com/fred-wang/TeXZilla) lässt sich das [obige MathML-Beispiel](#mathml_in_html-seiten) beispielsweise kürzer wie folgt schreiben:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>MathML in HTML5</title>
    <script src="https://fred-wang.github.io/TeXZilla/TeXZilla-min.js"></script>
    <script src="https://fred-wang.github.io/TeXZilla/examples/customElement.js"></script>
  </head>
  <body>
    <h1>MathML in HTML5</h1>

    <p>
      One over square root of two (inline style):
      <la-tex>\frac{1}{\sqrt{2}}</la-tex>
    </p>

    <p>
      One over square root of two (display style):
      <la-tex display="block">\frac{1}{\sqrt{2}}</la-tex>
    </p>
  </body>
</html>
```

Für Autoren, die mit LaTeX nicht vertraut sind, gibt es alternative Eingabemethoden wie die Syntax von [ASCIIMath](https://asciimath.org/#syntax) oder [jqMath](https://mathscribe.com/author/jqmath.html). Achten Sie darauf, die JavaScript-Bibliotheken zu laden und die richtigen Trennzeichen zu verwenden:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>ASCII MathML</title>
    …
    <!-- ASCIIMathML.js -->
    <script src="/path/to/ASCIIMathML.js"></script>
    …
    <!-- jqMath -->
    <script src="https://mathscribe.com/mathscribe/jquery-1.4.3.min.js"></script>
    <script src="https://mathscribe.com/mathscribe/jqmath-etc-0.4.6.min.js"></script>
    …
  </head>
  <body>
    …
    <p>One over square root of two (inline style, ASCIIMath): `1/(sqrt 2)`</p>
    …
    <p>One over square root of two (inline style, jqMath): $1/√2$</p>
    …
    <p>One over square root of two (display style, jqMath): $$1/√2$$</p>
    …
  </body>
</html>
```

### Befehlszeilenprogramme

Statt MathML-Ausdrücke beim Laden der Seite zu erzeugen, können Sie Befehlszeilenwerkzeuge verwenden. So entstehen Seiten mit statischen MathML-Inhalten, die schneller geladen werden. Betrachten wir erneut eine Seite namens `input.html` mit dem Inhalt aus dem Abschnitt zur [clientseitigen Konvertierung](#clientseitige_konvertierung):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>MathML in HTML5</title>
  </head>
  <body>
    <h1>MathML in HTML5</h1>
    <p>One over square root of two (inline style): $\frac{1}{\sqrt{2}}$</p>
    <p>One over square root of two (display style): $$\frac{1}{\sqrt{2}}$$</p>
  </body>
</html>
```

Diese Seite enthält kein [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Tag. Stattdessen wird die Konvertierung über die folgende Befehlszeile mit [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nach Ausführung des Befehls wird eine Datei namens `output.html` mit der folgenden HTML-Ausgabe erstellt. Die durch Dollarzeichen abgegrenzten Formeln wurden in MathML konvertiert:

```html-nolint
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>MathML in HTML5</title>
  </head>
  <body>
    <h1>MathML in HTML5</h1>

    <p>
      One over square root of two (inline style):
      <math><semantics><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><annotation encoding="TeX">\frac{1}{\sqrt{2}}</annotation></semantics></math>
    </p>

    <p>
      One over square root of two (display style):
      <math display="block"><semantics><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><annotation encoding="TeX">\frac{1}{\sqrt{2}}</annotation></semantics></math>
    </p>
  </body>
</html>
```

Es gibt auch komplexere Werkzeuge, die beliebige LaTeX-Dokumente in Dokumente mit MathML-Inhalten umwandeln können. Mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) konvertieren die folgenden Befehle beispielsweise `foo.tex` in ein HTML- oder EPUB-Dokument:

```bash
latexmlc --dest foo.html foo.tex # Generate an HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

> [!NOTE]
> Befehlszeilenwerkzeuge können serverseitig eingesetzt werden. Beispielsweise konvertiert [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) LaTeX mithilfe von [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) in MathML.

## Grafische Benutzeroberflächen

In diesem Abschnitt betrachten wir einige Bearbeitungswerkzeuge mit grafischen Benutzeroberflächen.

### Eingabefeld

Ein einfacher Ansatz besteht darin, [Konverter für eine einfache Syntax](#konvertierung_aus_einer_einfachen_syntax) als Eingabefelder für mathematische Ausdrücke einzubinden. Beispielsweise bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) den Befehl **Einfügen > Mathematik**. Er öffnet ein Popup-Fenster mit einem Eingabefeld für die Konvertierung von LaTeX in MathML und einer Live-Vorschau des MathML-Ergebnisses:

![LaTeX-Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebige MathML-Inhalte einzufügen.

Der Gleichungseditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Erweiterung: Sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Bedienelemente, mit denen Sie vordefinierte mathematische Konstruktionen einfügen können.

![StarMath-Eingabefeld in LibreOffice](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit einem Texteditor Ihrer Wahl.

### WYSIWYG-Editoren

Andere Editoren bieten Funktionen zur Bearbeitung mathematischer Ausdrücke, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen aus [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html). Beide unterstützen den Export nach HTML:

![Beispiel aus LyX](lyx.png)

![Beispiel aus TeXmacs](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden LyX und TeXmacs in ihrer HTML-Ausgabe Bilder von Formeln. Um stattdessen MathML zu verwenden, [folgen Sie für LyX diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) beziehungsweise wählen Sie für TeXmacs `User preference > Convert > Export mathematical formulas as MathML`.

### Optische Zeichen- und Handschrifterkennung

Eine weitere Möglichkeit zur Eingabe mathematischer Ausdrücke sind Benutzeroberflächen für die [optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschrifterkennung](https://en.wikipedia.org/wiki/Handwriting_recognition). Einige dieser Werkzeuge unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
