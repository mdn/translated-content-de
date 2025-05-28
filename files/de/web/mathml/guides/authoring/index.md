---
title: Autorenschaft von MathML
short-title: Authoring
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: f08990ec1e823fbe54fed15f859d43405e978fd7
---

Diese Seite erklärt, wie Sie Mathematik mit der MathML-Sprache schreiben, die mit Tags und Attributen im Textformat beschrieben wird. Genau wie bei HTML oder SVG kann dieser Text bei komplexen Inhalten sehr ausführlich werden und erfordert daher [geeignete Autoren-Tools](https://www.w3.org/wiki/Math_Tools#Authoring_tools) wie Konverter von einer [leichtgewichtigen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-Formeleditoren. Viele solcher Werkzeuge sind verfügbar und es ist unmöglich, eine exhaustive Liste zu bieten. Stattdessen konzentriert sich dieser Artikel auf übliche Ansätze und Beispiele.

## Verwendung von MathML

Auch wenn Ihre MathML-Formeln wahrscheinlich durch Autoren-Tools generiert werden, ist es wichtig, ein paar Tipps zu beachten, um sie richtig in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein übergeordnetes [`math`](/de/docs/Web/MathML/Reference/Element/math)-Element dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline dargestellt, mit zusätzlichen Anpassungen zur Minimierung ihrer Höhe. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal und in einem eigenen Absatz darzustellen.

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
> Um MathML in XML-Dokumenten (z.B., XHTML, EPUB oder OpenDocument) zu nutzen, fügen Sie ein explizites `xmlns="http://www.w3.org/1998/Math/MathML"`-Attribut zu jedem `<math>`-Element hinzu.

> [!NOTE]
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Es ist daher möglich, mathematische Formeln in solche Nachrichten einzubetten, solange die MathML-Tags nicht von Markup-Sanitizern herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Wenn Ihr Dokument nur einfache mathematische Formeln enthält, könnte ein kleines [mathml.css](https://github.com/fred-wang/mathml.css)-Stylesheet ausreichen. Um es bedingt zu laden, fügen Sie einfach eine Zeile in den Kopf Ihres Dokuments ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Wenn Sie komplexere Konstruktionen benötigen, sollten Sie stattdessen die schwerere [MathJax](https://www.mathjax.org/)-Bibliothek als MathML-Polyfill verwenden:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach eine Warnung oben auf der Seite für Browser ohne gute MathML-Unterstützung anzeigen und den Nutzern die Wahl zwischen einem der oben genannten Fallbacks lassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen eine Funktionserkennung (der [mspace](/de/docs/Web/MathML/Reference/Element/mspace)- oder [mpadded](/de/docs/Web/MathML/Reference/Element/mpadded)-Elemente) durch, was gegenüber dem [Browser-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) bevorzugt wird. Außerdem werden sie unter einer Open-Source-Lizenz verteilt, also können Sie sie gerne auf Ihrem eigenen Server kopieren und an Ihre Bedürfnisse anpassen.

#### Mathematische Schriftarten

Wie im Artikel [MathML Fonts](/de/docs/Web/MathML/Guides/Fonts) erklärt, sind mathematische Schriftarten entscheidend, um MathML-Inhalte darzustellen. Es ist daher immer eine gute Idee, die [Installationsanweisungen für solche Schriftarten](/de/docs/Web/MathML/Guides/Fonts#installation_instructions) zu teilen oder sie als [Web-Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) bereitzustellen.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) bietet solche Web-Fonts zusammen mit entsprechenden Stylesheets. Zum Beispiel fügen Sie einfach die folgende Zeile in den Kopf Ihres Dokuments ein, um die Latin Modern-Schriftarten mit Fallback-Web-Fonts auszuwählen:

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
> Die Schriftarten und Stylesheets von der MathFonts-Seite werden unter Open-Source-Lizenzen verteilt, also kopieren Sie sie gerne auf Ihren eigenen Server und passen Sie sie an Ihre Bedürfnisse an.

## Konvertierung aus einer einfachen Syntax

In diesem Abschnitt betrachten wir einige Werkzeuge zur Umwandlung von MathML aus einer [leichtgewichtigen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language), wie der populären [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Sprache.

### Client-seitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben, und eine JavaScript-Bibliothek übernimmt die Umwandlung in MathML. Dies ist wahrscheinlich die einfachste Option, hat aber auch einige Nachteile: zusätzlicher JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen escapen, Web-Crawler haben keinen Zugriff auf die MathML-Ausgabe...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass die entsprechende MathML-Ausgabe eingefügt und über einen [Shadow-Subtree](/de/docs/Web/API/Web_components/Using_shadow_DOM) gerendert wird. Zum Beispiel kann unter Verwendung des [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html)-Elements von [TeXZilla](https://github.com/fred-wang/TeXZilla) das [obenstehende MathML-Beispiel](#mathml_in_html-seiten) einfach prägnanter umgeschrieben werden:

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

Für Autoren, die mit LaTeX nicht vertraut sind, stehen alternative Eingabemethoden zur Verfügung, wie die [ASCIIMath](https://asciimath.org/#syntax)- oder [jqMath](https://mathscribe.com/author/jqmath.html)-Syntax. Achten Sie darauf, die JavaScript-Bibliotheken zu laden und die richtigen Begrenzungszeichen zu verwenden:

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

Anstatt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie auch Kommandozeilenwerkzeuge verwenden. Dies führt zu Seiten mit statischen MathML-Inhalten, die schneller geladen werden. Betrachten wir nochmals eine Seite `input.html` mit Inhalten aus der [client-seitigen Konvertierung](#client-seitige_konvertierung):

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

Diese Seite enthält kein [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Tag. Stattdessen wird die Konvertierung über die folgende Kommandozeile mit [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nachdem dieser Befehl ausgeführt wurde, wird eine Datei `output.html` erstellt, die die folgende HTML-Ausgabe enthält. Die mit Dollarzeichen abgegrenzten Formeln wurden in MathML umgewandelt:

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

Es gibt ausgereiftere Werkzeuge, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalten zu konvertieren. Zum Beispiel werden die folgenden Befehle mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) `foo.tex` in ein HTML- oder EPUB-Dokument umwandeln:

```bash
latexmlc --dest foo.html foo.tex # Generate a HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

`latexmlc` akzeptiert einen `--javascript`-Parameter, mit dem Sie eines der oben erwähnten [Fallback-Skripte](#fallback_für_browser_ohne_mathml-unterstützung) einfügen können:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> Kommandozeilenwerkzeuge können serverseitig verwendet werden, z.B. führt [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) die LaTeX-zu-MathML-Konvertierung über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) aus.

## Grafische Oberflächen

In diesem Abschnitt betrachten wir einige Bearbeitungstools mit grafischen Oberflächen.

### Eingabefeld

Ein einfacher Ansatz besteht darin, [Konverter aus einer einfachen Syntax](#konvertierung_aus_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik zu integrieren. Beispielsweise bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) einen **Einfügen > Math**-Befehl, der ein Popup-Fenster öffnet, mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau:

![LaTeX-Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den **Einfügen > HTML**-Befehl verwenden, um beliebige MathML-Inhalte einzufügen.

Der Formeleditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Verbesserung: sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Gleichungspaneele zum Einfügen vordefinierter mathematischer Konstruktionen.

![StarMath-Eingabefeld in LibreOffice](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Mathe-Bearbeitungsfunktionen, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen von [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), die beide HTML-Export unterstützen:

![Lyx Beispiel](lyx.png)

![TeXmacs Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig nutzen Lyx und TeXmacs Bilder von Formeln in ihrer HTML-Ausgabe. Um stattdessen MathML zu verwenden, [folgen Sie diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für ersteres und wählen Sie `Benutzereinstellung > Konvertierung > Mathematische Formeln als MathML exportieren` für letzteres.

### Optische Zeichenerkennung und Handschriftenerkennung

Eine letzte Möglichkeit zur Eingabe von Mathematik besteht darin, sich auf Benutzeroberflächen für [Optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschriftenerkennung](https://en.wikipedia.org/wiki/Handwriting_recognition) zu verlassen. Einige dieser Werkzeuge unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
