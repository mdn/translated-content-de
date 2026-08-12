---
title: MathML verfassen
short-title: Authoring
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

Diese Seite erklärt, wie man Mathematik mit der MathML-Sprache schreibt, die in Textform mit Tags und Attributen beschrieben wird. Genau wie bei HTML oder SVG kann dieser Text für komplexe Inhalte sehr ausführlich werden und erfordert daher [geeignete Autorenwerkzeuge](https://www.w3.org/wiki/Math_Tools#Authoring_tools), wie Konverter von einer [Lightweight Markup Language](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-Formeleditoren. Viele solcher Werkzeuge sind verfügbar, und es ist unmöglich, eine vollständige Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf gängige Ansätze und Beispiele.

## Verwendung von MathML

Selbst wenn Ihre MathML-Formeln wahrscheinlich von Autorenwerkzeugen generiert werden, ist es wichtig, sich einiger Tipps bewusst zu sein, um sie ordnungsgemäß in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein Wurzelelement [`math`](/de/docs/Web/MathML/Reference/Element/math) dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline gerendert, mit zusätzlichen Anpassungen zur Minimierung ihrer Höhe. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal zu rendern und in einem eigenen Absatz anzuzeigen.

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
> Um MathML in XML-Dokumenten zu verwenden (z.B. XHTML, EPUB oder OpenDocument), fügen Sie ein explizites `xmlns="http://www.w3.org/1998/Math/MathML"`-Attribut zu jedem `<math>`-Element hinzu.

> [!NOTE]
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Es ist daher möglich, mathematische Formeln in solche Nachrichten einzubetten, solange MathML-Tags nicht durch Markup-Sanitizer herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Wenn Ihr Dokument nur einfache mathematische Formeln enthält, könnte ein kleines [mathml.css](https://github.com/fred-wang/mathml.css)-Stylesheet ausreichen. Um es bedingt zu laden, fügen Sie einfach eine Zeile in den Dokumentkopf ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Falls Sie komplexere Konstruktionen benötigen, sollten Sie stattdessen die umfangreichere [MathJax](https://www.mathjax.org/)-Bibliothek als MathML-Polyfill in Betracht ziehen:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach zu Beginn der Seite eine Warnung für Browser ohne gute MathML-Unterstützung anzeigen und den Benutzern die Wahl zwischen einem der oben genannten Fallbacks überlassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen die Erkennung von Funktionen (der [mspace](/de/docs/Web/MathML/Reference/Element/mspace) oder [mpadded](/de/docs/Web/MathML/Reference/Element/mpadded)-Elemente) durch, was gegenüber dem [Browser-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) bevorzugt wird. Zudem werden sie unter einer Open-Source-Lizenz vertrieben, sodass Sie sie auf Ihrem eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

#### Mathematische Schriftarten

Wie im Artikel [MathML-Schriftarten](/de/docs/Web/MathML/Guides/Fonts) erklärt, sind mathematische Schriftarten entscheidend für das Rendern von MathML-Inhalten. Es ist daher immer eine gute Idee, die [Installationsanleitungen für solche Schriftarten](/de/docs/Web/MathML/Guides/Fonts#installation_instructions) zu teilen oder sie als [Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) bereitzustellen.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) bietet solche Web-Schriftarten zusammen mit geeigneten Stylesheets. Beispielsweise fügen Sie einfach die folgende Zeile in Ihren Dokumentkopf ein, um die Latin Modern-Schriftarten mit Fallback-Web-Schriftarten auszuwählen:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

Es werden mehrere Schriftarten vorgeschlagen, und Sie können einfach einen anderen Stil auswählen, z.B. STIX:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

Die [XITS-Schriftart](https://fred-wang.github.io/MathFonts/XITS/mathfonts.css) wird für Formeln empfohlen, die von rechts nach links dargestellt werden müssen. Weitere Informationen finden Sie im [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir)-globalen Attribut.

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/XITS/mathfonts.css" />
```

> [!NOTE]
> Die Schriftarten und Stylesheets von dieser MathFonts-Seite werden unter Open-Source-Lizenzen vertrieben, sodass Sie sie auf Ihrem eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

## Konvertierung aus einer einfachen Syntax

In diesem Abschnitt überprüfen wir einige Werkzeuge zur Konvertierung von MathML aus einer [Lightweight Markup Language](https://en.wikipedia.org/wiki/Lightweight_markup_language) wie der populären [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Sprache.

### Client-seitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben und eine JavaScript-Bibliothek übernimmt deren Konvertierung zu MathML. Dies ist wahrscheinlich die einfachste Option, hat aber auch einige Probleme: zusätzlicher JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen maskieren, Web-Crawler haben keinen Zugriff auf die MathML-Ausgabe...

Ein [Custom Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass die entsprechende MathML-Ausgabe eingefügt und über einen [Shadow-Subtree](/de/docs/Web/API/Web_components/Using_shadow_DOM) gerendert wird. Zum Beispiel kann mit dem [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html)-Element von [TeXZilla](https://github.com/fred-wang/TeXZilla) das [MathML-Beispiel oben](#mathml_in_html-seiten) einfach prägnanter umgeschrieben werden:

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

Für Autoren, die mit LaTeX nicht vertraut sind, stehen alternative Eingabemethoden zur Verfügung, wie die [ASCIIMath](https://asciimath.org/#syntax) oder [jqMath](https://mathscribe.com/author/jqmath.html) Syntax. Stellen Sie sicher, dass Sie die JavaScript-Bibliotheken laden und die richtigen Trennzeichen verwenden:

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

Anstatt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie sich stattdessen auf Kommandozeilenwerkzeuge verlassen. Dies führt zu Seiten mit statischen MathML-Inhalten, die schneller geladen werden. Betrachten wir erneut eine Seite `input.html` mit Inhalten aus der [Client-seitigen Konvertierung](#client-seitige_konvertierung):

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

Diese Seite enthält keine [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Tags. Stattdessen wird die Konvertierung über die folgende Kommandozeile mithilfe von [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nach Ausführung dieses Befehls wird eine Datei `output.html` erstellt, die die folgende HTML-Ausgabe enthält. Die durch Dollarzeichen begrenzten Formeln wurden in MathML umgewandelt:

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

Es gibt komplexere Werkzeuge, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalten zu konvertieren. Zum Beispiel werden mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) die folgenden Befehle `foo.tex` in ein HTML- oder EPUB-Dokument konvertieren:

```bash
latexmlc --dest foo.html foo.tex # Generate an HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

`latexmlc` akzeptiert einen `--javascript`-Parameter, den Sie verwenden können, um eines der oben erwähnten [Fallback-Skripte](#fallback_für_browser_ohne_mathml-unterstützung) einzuschließen:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> Kommandozeilenwerkzeuge können serverseitig verwendet werden, z.B. führt [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) LaTeX-zu-MathML-Konvertierungen über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) durch.

## Grafische Schnittstellen

In diesem Abschnitt überprüfen wir einige Bearbeitungswerkzeuge, die grafische Schnittstellen bieten.

### Eingabefelder

Ein einfacher Ansatz besteht darin, [Konverter aus einer einfachen Syntax](#konvertierung_aus_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik zu integrieren. Zum Beispiel stellen [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) einen **Einfügen > Mathe**-Befehl bereit, der ein Popup-Fenster öffnet, mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau:

![LaTeX-Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebige MathML-Inhalte einzufügen.

Der Formeleditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Verbesserung: sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Gleichungspaneele, um vordefinierte mathematische Konstruktionen einzufügen.

![StarMath Eingabefeld in LibreOffice](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Mathe-Bearbeitungsfunktionen, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen von [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), die beide HTML-Export unterstützen:

![Lyx Beispiel](lyx.png)

![TeXmacs Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden Lyx und TeXmacs Formele als Bilder in ihrer HTML-Ausgabe. Um stattdessen MathML zu wählen, [befolgen Sie diese Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für Lyx und wählen Sie `Benutzereinstellungen > Konvertieren > Exportiere mathematische Formeln als MathML` für TeXmacs.

### Optische Zeichenerkennung und Handschriftenerkennung

Eine letzte Möglichkeit, Mathematik einzugeben, besteht darin, auf Benutzeroberflächen für [optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschriftenerkennung](https://en.wikipedia.org/wiki/Handwriting_recognition) zurückzugreifen. Einige dieser Werkzeuge unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
