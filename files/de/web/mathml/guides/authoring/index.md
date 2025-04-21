---
title: MathML verfassen
short-title: Authoring
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: 328c2af8f15f1a4f5df7fb3aa3b82ad1ad0e1b1c
---

Diese Seite erklärt, wie Mathematik mit der MathML-Sprache geschrieben wird, die mithilfe von Tags und Attributen im Textformat beschrieben wird. Genau wie bei HTML oder SVG kann dieser Text bei komplexen Inhalten sehr umfangreich werden und erfordert daher [geeignete Autorentools](https://www.w3.org/wiki/Math_Tools#Authoring_tools) wie Konverter von einer [Lightweight-Markup-Sprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-Formeleditoren. Viele solcher Tools sind verfügbar, und es ist unmöglich, eine vollständige Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf gängige Ansätze und Beispiele.

## Verwendung von MathML

Auch wenn Ihre MathML-Formeln wahrscheinlich von Autorentools generiert werden, ist es wichtig, ein paar Tipps zu beachten, um sie richtig in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein Wurzel-Element [`math`](/de/docs/Web/MathML/Reference/Element/math) dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline dargestellt, mit zusätzlichen Anpassungen, um ihre Höhe zu minimieren. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal anzuzeigen und in einem eigenen Absatz zu platzieren.

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
> Um MathML in XML-Dokumenten (z. B. XHTML, EPUB oder OpenDocument) zu verwenden, platzieren Sie ein explizites `xmlns="http://www.w3.org/1998/Math/MathML"`-Attribut auf jedem `<math>`-Element.

> [!NOTE]
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Es ist daher möglich, mathematische Formeln in solche Nachrichten einzubetten, solange MathML-Tags nicht von Markup-Sanitizern herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Wenn Ihr Dokument nur einfache mathematische Formeln enthält, könnte ein kleines [mathml.css](https://github.com/fred-wang/mathml.css)-Stylesheet ausreichen. Um es bedingt zu laden, fügen Sie einfach eine Zeile in den Kopf Ihres Dokuments ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Wenn Sie komplexere Konstruktionen benötigen, sollten Sie stattdessen die umfangreichere [MathJax](https://www.mathjax.org/)-Bibliothek als MathML-Polyfill in Betracht ziehen:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach einen Warnhinweis oben auf der Seite für Browser ohne gute MathML-Unterstützung anzeigen und den Benutzern die Wahl zwischen einem der oben genannten Fallbacks lassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen eine Funktionsdetektion (der [mspace](/de/docs/Web/MathML/Reference/Element/mspace) oder [mpadded](/de/docs/Web/MathML/Reference/Element/mpadded)-Elemente) durch, was gegenüber [Browser-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) bevorzugt wird. Sie sind außerdem unter einer Open-Source-Lizenz verteilt, sodass Sie sie gerne auf Ihrem eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

#### Mathematische Schriftarten

Wie im Artikel [MathML-Schriftarten](/de/docs/Web/MathML/Guides/Fonts) erklärt, sind mathematische Schriftarten entscheidend, um MathML-Inhalte darzustellen. Es ist daher immer eine gute Idee, die [Installationsanweisungen für solche Schriftarten](/de/docs/Web/MathML/Guides/Fonts#installation_instructions) weiterzugeben oder sie als [Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) bereitzustellen.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) bietet solche Web-Schriftarten zusammen mit entsprechenden Stylesheets. Zum Beispiel, fügen Sie einfach die folgende Zeile in den Kopf Ihres Dokuments ein, um die Latin-Modern-Schriftarten mit Fallback-Web-Schriftarten auszuwählen:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

Es werden mehrere Schriftarten vorgeschlagen, und Sie können einfach einen anderen Stil auswählen, zum Beispiel STIX:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

> [!NOTE]
> Die Schriftarten und Stylesheets von der MathFonts-Seite sind unter Open-Source-Lizenzen verteilt, sodass Sie sie gerne auf Ihrem eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

## Konvertierung von einer einfachen Syntax

In diesem Abschnitt überprüfen wir einige Tools zur Konvertierung von MathML aus einer [Lightweight-Markup-Sprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) wie der beliebten [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Sprache.

### Client-seitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben und eine JavaScript-Bibliothek übernimmt die Konvertierung in MathML. Dies ist wahrscheinlich die einfachste Option, hat jedoch auch einige Nachteile: zusätzlicher JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen maskieren, Webcrawler haben keinen Zugriff auf den MathML-Output...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass der entsprechende MathML-Output eingefügt und über einen [Shadow-Subtree](/de/docs/Web/API/Web_components/Using_shadow_DOM) dargestellt wird. Zum Beispiel, unter Verwendung des [`<la-tex>`-Elements](https://fred-wang.github.io/TeXZilla/examples/customElement.html) von [TeXZilla](https://github.com/fred-wang/TeXZilla), kann das [obige MathML-Beispiel](#mathml_in_html-seiten) einfach knapper umgeschrieben werden wie folgt:

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

Für Autoren, die mit LaTeX nicht vertraut sind, gibt es alternative Eingabemethoden wie die [ASCIIMath](https://asciimath.org/#syntax)- oder [jqMath](https://mathscribe.com/author/jqmath.html)-Syntax. Stellen Sie sicher, dass die JavaScript-Bibliotheken geladen und die richtigen Delimiter verwendet werden:

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

### Kommandozeilenprogramme

Statt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie stattdessen auf Kommandozeilentools zurückgreifen. Das führt zu Seiten mit statischem MathML-Inhalt, die schneller geladen werden. Betrachten wir erneut eine Seite `input.html` mit Inhalt aus [Client-seitiger Konvertierung](#client-seitige_konvertierung):

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

Diese Seite enthält keinen [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Tag. Stattdessen wird die Konvertierung über die folgende Kommandozeile unter Verwendung von [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nach Ausführung dieses Befehls wird eine Datei `output.html` mit dem folgenden HTML-Ausgabeinhalt erstellt. Die durch Dollarzeichen begrenzten Formeln wurden in MathML umgewandelt:

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

Es gibt anspruchsvollere Tools, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalten zu konvertieren. Beispielsweise konvertieren die folgenden Befehle mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) die Datei `foo.tex` in ein HTML- oder EPUB-Dokument:

```bash
latexmlc --dest foo.html foo.tex # Generate a HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

`latexmlc` akzeptiert einen `--javascript`-Parameter, den Sie verwenden können, um eines der oben erwähnten [Fallback-Skripte](#fallback_für_browser_ohne_mathml-unterstützung) einzubinden:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> Kommandozeilentools können serverseitig verwendet werden, z. B. [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) führt die LaTeX-zu-MathML-Konvertierung über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) durch.

## Grafische Benutzeroberflächen

In diesem Abschnitt überprüfen wir einige Editortools, die grafische Benutzeroberflächen bieten.

### Eingabefeld

Ein einfacher Ansatz ist die Integration von [Konvertern aus einer einfachen Syntax](#konvertierung_von_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik. Zum Beispiel bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) einen **Einfügen > Math**-Befehl, der ein Popup-Fenster öffnet, mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau:

![LaTeX Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den **Einfügen > HTML**-Befehl verwenden, um jeden MathML-Inhalt einzufügen.

Der Formeleditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Erweiterung: sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Gleichungspanels, um vordefinierte mathematische Konstruktionen einzufügen.

![StarMath Eingabefeld in Libre Office](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Mathematikbearbeitungsfunktionen, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen von [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), die beide HTML-Export unterstützen:

![Lyx Beispiel](lyx.png)

![TeXmacs Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden Lyx und TeXmacs Bilder von Formeln in ihrem HTML-Output. Um stattdessen MathML zu wählen, [folgen Sie diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für ersteres und wählen `Benutzereinstellungen > Konvertieren > Mathematische Formeln als MathML exportieren` für letzteres.

### Optische Zeichen- und Handschriftenerkennung

Eine letzte Möglichkeit, Mathematik einzugeben, besteht darin, sich auf Benutzeroberflächen für [Optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschriftenerkennung](https://en.wikipedia.org/wiki/Handwriting_recognition) zu verlassen. Einige dieser Tools unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
