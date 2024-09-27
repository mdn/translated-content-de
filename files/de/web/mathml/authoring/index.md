---
title: MathML verfassen
slug: Web/MathML/Authoring
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{MathMLRef}}

Diese Seite erklärt, wie Mathematik mithilfe der MathML-Sprache geschrieben wird, die in Textformat mit Tags und Attributen beschrieben wird. Genau wie bei HTML oder SVG kann dieser Text bei komplexen Inhalten sehr umfangreich werden und erfordert daher [geeignete Autorenwerkzeuge](https://www.w3.org/wiki/Math_Tools#Authoring_tools) wie Konverter von einer [leichtgewichtigen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-Gleichungseditoren. Viele solcher Werkzeuge sind verfügbar, und es ist unmöglich, eine erschöpfende Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf allgemeine Ansätze und Beispiele.

## Verwendung von MathML

Auch wenn Ihre MathML-Formeln wahrscheinlich von Autorenwerkzeugen generiert werden, ist es wichtig, einige Tipps zu kennen, um sie richtig in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein Wurzel-`[math]`-Element dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline gerendert, mit zusätzlichen Anpassungen, um ihre Höhe zu minimieren. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal und in ihrem eigenen Absatz zu rendern.

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
> Um MathML in XML-Dokumenten (z.B. XHTML, EPUB oder OpenDocument) zu verwenden, platzieren Sie ein explizites `xmlns="http://www.w3.org/1998/Math/MathML"`-Attribut auf jedem `<math>`-Element.

> [!NOTE]
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Es ist daher möglich, mathematische Formeln in solche Nachrichten einzubetten, solange MathML-Tags nicht von Markup-Sanitizern herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Wenn Ihr Dokument nur einfache mathematische Formeln enthält, könnte ein kleines [mathml.css](https://github.com/fred-wang/mathml.css)-Stylesheet ausreichen. Um es bedingt zu laden, fügen Sie einfach eine Zeile in den Kopf Ihres Dokuments ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Wenn Sie komplexere Konstruktionen benötigen, sollten Sie stattdessen die schwerere [MathJax](https://www.mathjax.org/)-Bibliothek als MathML-Polyfill in Betracht ziehen:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach eine Warnung oben auf der Seite für Browser ohne gute MathML-Unterstützung anzeigen und den Benutzern die Wahl zwischen einem der obigen Fallbacks lassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen eine Funktionsprüfung (der [mspace](/de/docs/Web/MathML/Element/mspace)- oder [mpadded](/de/docs/Web/MathML/Element/mpadded)-Elemente) durch, die gegenüber dem [Browser-Sniffing](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) bevorzugt wird. Sie werden auch unter einer Open-Source-Lizenz vertrieben, sodass Sie sie gerne auf Ihrem eigenen Server kopieren und anpassen können.

#### Mathematische Schriften

Wie im Artikel [MathML Fonts](/de/docs/Web/MathML/Fonts) erklärt, sind mathematische Schriftarten entscheidend, um MathML-Inhalte korrekt darzustellen. Es ist daher immer eine gute Idee, die [Installationsanweisungen für solche Schriftarten](/de/docs/Web/MathML/Fonts#installation_instructions) bereitzustellen oder sie als [Web Fonts](/de/docs/Learn/CSS/Styling_text/Web_fonts) anzubieten.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) bietet solche Web-Schriftarten zusammen mit den entsprechenden Stylesheets an. Fügen Sie zum Beispiel die folgende Zeile in den Kopf Ihres Dokuments ein, um die Latin Modern-Schriftarten mit alternativen Web-Schriftarten auszuwählen:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

Es werden verschiedene Schriftarten vorgeschlagen und Sie können einfach einen anderen Stil auswählen, zum Beispiel STIX:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

> [!NOTE]
> Die Schriftarten und Stylesheets von dieser MathFonts-Seite werden unter Open-Source-Lizenzen vertrieben, sodass Sie sie gerne auf Ihrem eigenen Server kopieren und anpassen können.

## Konversion von einer einfachen Syntax

In diesem Abschnitt überprüfen wir einige Werkzeuge zur Konvertierung von MathML aus einer [leichtgewichtigen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) wie der beliebten [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Sprache.

### Clientseitige Konversion

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben und eine JavaScript-Bibliothek kümmert sich um deren Konvertierung in MathML. Dies ist wahrscheinlich die einfachste Option, aber sie hat auch einige Probleme: Zusätzlicher JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen maskieren, Web-Crawler haben keinen Zugriff auf die MathML-Ausgabe...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass die entsprechende MathML-Ausgabe über einen [Schatten-Unterbaum](/de/docs/Web/API/Web_components/Using_shadow_DOM) eingefügt und gerendert wird. Zum Beispiel kann das [Mathematikbeispiel oben](#mathml_in_html-seiten) mit dem [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html)-Element von [TeXZilla](https://github.com/fred-wang/TeXZilla) einfach prägnanter umgeschrieben werden:

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

Für Autoren, die mit LaTeX nicht vertraut sind, stehen alternative Eingabemethoden wie die [ASCIIMath](https://asciimath.org/#syntax)- oder [jqMath](https://mathscribe.com/author/jqmath.html)-Syntax zur Verfügung. Achten Sie darauf, die JavaScript-Bibliotheken zu laden und die richtigen Trennzeichen zu verwenden:

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
    <p>One over square root of two (display style, jqMath): $1/√2$</p>
    …
  </body>
</html>
```

### Befehlszeilen-Programme

Anstatt MathML-Ausdrücke beim Seitenladen zu generieren, können Sie sich stattdessen auf Befehlszeilenwerkzeuge stützen. Dies führt zu Seiten mit statischen MathML-Inhalten, die schneller laden. Betrachten wir erneut eine Seite `input.html` mit Inhalten aus der [Client-seitigen Konversion](#clientseitige_konversion):

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
    <p>One over square root of two (display style): $\frac{1}{\sqrt{2}}$</p>
  </body>
</html>
```

Diese Seite enthält keine [`script`](/de/docs/Web/HTML/Element/script)-Tags. Stattdessen wird die Konversion über folgende Befehlszeile mit [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nach dem Ausführen dieses Befehls wird eine Datei `output.html` erstellt, die die folgende HTML-Ausgabe enthält. Die durch Dollarzeichen abgegrenzten Formeln wurden in MathML konvertiert:

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

Es gibt anspruchsvollere Werkzeuge, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalten zu konvertieren. Zum Beispiel wird mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) das `foo.tex`-Dokument in ein HTML- oder EPUB-Dokument konvertiert:

```bash
latexmlc --dest foo.html foo.tex # Generate a HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

`latexmlc` akzeptiert einen `--javascript`-Parameter, den Sie verwenden können, um eines der oben genannten [Fallback-Skripte](#fallback_für_browser_ohne_mathml-unterstützung) einzuschließen:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> Befehlszeilenwerkzeuge können serverseitig verwendet werden, z.B. [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) führt LaTeX-zu-MathML-Konversion über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) durch.

## Grafische Oberflächen

In diesem Abschnitt überprüfen wir einige Bearbeitungswerkzeuge, die grafische Oberflächen bereitstellen.

### Eingabefeld

Ein einfacher Ansatz ist die Integration von [Konvertern von einer einfachen Syntax](#konversion_von_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik. Zum Beispiel bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) einen **Einfügen > Mathematik**-Befehl, der ein Popup-Fenster öffnet, mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau:

![LaTeX Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebige MathML-Inhalte einzufügen.

Der Gleichungseditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Verbesserung: Sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Gleichungspanels, um vordefinierte mathematische Konstruktionen einzufügen.

![StarMath Eingabefeld in Libre Office](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von libreoffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIYWG-Editoren

Andere Editoren bieten mathematische Bearbeitungsfunktionen, die direkt in ihre WYSIYWG-Oberfläche integriert sind. Die folgenden Screenshots stammen von [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), die beide HTML-Export unterstützen:

![Lyx Beispiel](lyx.png)

![TeXmacs Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden Lyx und TeXmacs Bilder von Formeln in ihrem HTML-Ausgang. Um stattdessen MathML zu wählen, [folgen Sie diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für ersteres und wählen Sie `Benutzereinstellungen > Konvertieren > Exportiere mathematische Formeln als MathML` für letzteres.

### Optische Zeichen- und Handschriftenerkennung

Eine letzte Möglichkeit, Mathematik einzugeben, besteht darin, sich auf Benutzeroberflächen für [Optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschrifterkennung](https://en.wikipedia.org/wiki/Handwriting_recognition) zu verlassen. Einige dieser Werkzeuge unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
