---
title: MathML verfassen
short-title: Authoring
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Diese Seite erklärt, wie man mit der MathML-Sprache mathematische Ausdrücke schreibt, die mit Tags und Attributen im Textformat beschrieben wird. Wie bei HTML oder SVG kann dieser Text bei komplexem Inhalt sehr umfangreich werden, weshalb [geeignete Autorentools](https://www.w3.org/wiki/Math_Tools#Authoring_tools) wie Konverter aus einer [leichtgewichtigen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) Formel-Editoren erforderlich sind. Viele solcher Tools sind verfügbar und es ist unmöglich, eine vollständige Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf gängige Ansätze und Beispiele.

## Verwendung von MathML

Auch wenn Ihre MathML-Formeln wahrscheinlich von Autorentools generiert werden, ist es wichtig, einige Tipps zu beachten, um sie richtig in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein Wurzelelement [`math`](/de/docs/Web/MathML/Reference/Element/math) dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline gerendert, mit zusätzlichen Anpassungen zur Minimierung ihrer Höhe. Verwenden Sie ein `display="block"` Attribut, um komplexe Formeln normal und in ihrem eigenen Absatz zu rendern.

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
> Um MathML in XML-Dokumenten zu verwenden (z. B. XHTML, EPUB oder OpenDocument), platzieren Sie ein explizites `xmlns="http://www.w3.org/1998/Math/MathML"` Attribut auf jedem `<math>` Element.

> [!NOTE]
> Einige E-Mail- oder Instant-Messaging-Clients sind in der Lage, Nachrichten im HTML-Format zu senden und zu empfangen. Es ist daher möglich, mathematische Formeln in solchen Nachrichten einzubetten, solange MathML-Tags nicht durch Markup-Sanitizer herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Wenn Ihr Dokument nur grundlegende mathematische Formeln enthält, könnte ein kleines [mathml.css](https://github.com/fred-wang/mathml.css) Stylesheet ausreichen. Um es bedingt zu laden, fügen Sie einfach eine Zeile in den Dokumentenkopf ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Wenn Sie komplexere Konstruktionen benötigen, könnten Sie stattdessen in Erwägung ziehen, die umfangreichere [MathJax](https://www.mathjax.org/) Bibliothek als MathML-Polyfill zu verwenden:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach eine Warnung oben auf der Seite für Browser ohne gute MathML-Unterstützung anzeigen und den Nutzern die Wahl zwischen einem der oben genannten Fallbacks lassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen eine Merkmalsprüfung (der [mspace](/de/docs/Web/MathML/Reference/Element/mspace) oder [mpadded](/de/docs/Web/MathML/Reference/Element/mpadded) Elemente) durch, die dem [Browser-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) vorzuziehen ist. Zudem sind sie unter einer Open-Source-Lizenz verteilt, sodass Sie sie auf Ihren eigenen Server kopieren und nach Ihren Bedürfnissen anpassen können.

#### Mathematische Schriften

Wie im Artikel [MathML Fonts](/de/docs/Web/MathML/Guides/Fonts) erklärt, sind mathematische Schriften entscheidend für die Darstellung von MathML-Inhalten. Es ist daher immer eine gute Idee, die [Installationsanweisungen für solche Schriften](/de/docs/Web/MathML/Guides/Fonts#installation_instructions) zu teilen oder sie als [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) bereitzustellen.

Die [MathFonts Seite](https://fred-wang.github.io/MathFonts/) bietet solche Webfonts zusammen mit geeigneten Stylesheets. Zum Beispiel fügen Sie einfach die folgende Zeile in den Dokumentenkopf ein, um die Latin Modern Schriften mit Fallback-Webfonts auszuwählen:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

Es werden mehrere Schriften vorgeschlagen und Sie können einfach einen anderen Stil auswählen, zum Beispiel STIX:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

> [!NOTE]
> Die Schriften und Stylesheets von dieser MathFonts-Seite sind unter offenen Lizenzen verteilt, sodass Sie sie auf Ihren eigenen Server kopieren und nach Ihren Bedürfnissen anpassen können.

## Konvertierung von einer einfachen Syntax

In diesem Abschnitt prüfen wir einige Werkzeuge zur Konvertierung von MathML aus einer [leichtgewichtigen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) wie der populären [LaTeX](https://en.wikipedia.org/wiki/LaTeX) Sprache.

### Client-seitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben und eine JavaScript-Bibliothek übernimmt ihre Konvertierung in MathML. Dies ist wahrscheinlich die einfachste Option, hat aber auch einige Probleme: zusätzlicher JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen escapen, Web-Crawler haben keinen Zugriff auf die MathML-Ausgabe...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass die entsprechende MathML-Ausgabe über einen [Schattenbaum](/de/docs/Web/API/Web_components/Using_shadow_DOM) eingefügt und gerendert wird. Zum Beispiel kann mit dem [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html) Element von [TeXZilla](https://github.com/fred-wang/TeXZilla) das [oben dargestellte MathML-Beispiel](#mathml_in_html-seiten) einfach wie folgt umgeschrieben werden:

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

Für Autoren, die nicht mit LaTeX vertraut sind, stehen alternative Eingabemethoden zur Verfügung, wie die [ASCIIMath](https://asciimath.org/#syntax) oder [jqMath](https://mathscribe.com/author/jqmath.html) Syntax. Stellen Sie sicher, dass Sie die JavaScript-Bibliotheken laden und die richtigen Trennzeichen verwenden:

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

### Kommandozeilen-Programme

Statt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie auf Kommandozeilen-Werkzeuge zurückgreifen. Das führt zu Seiten mit statischem MathML-Inhalt, die schneller geladen werden. Betrachten wir erneut eine Seite `input.html` mit Inhalten der [client-seitigen Konvertierung](#client-seitige_konvertierung):

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

Diese Seite enthält kein [`script`](/de/docs/Web/HTML/Reference/Elements/script) Tag. Stattdessen wird die Konvertierung über die folgende Kommandozeile mit [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

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

Es gibt sophistischere Werkzeuge, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalten zu konvertieren. Zum Beispiel, unter Verwendung von [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/), konvertieren die folgenden Befehle `foo.tex` in ein HTML- oder EPUB-Dokument:

```bash
latexmlc --dest foo.html foo.tex # Generate a HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

`latexmlc` akzeptiert einen `--javascript` Parameter, den Sie verwenden können, um eines der oben genannten [Fallback-Skripte](#fallback_für_browser_ohne_mathml-unterstützung) einzuschließen:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> Kommandozeilenwerkzeuge können serverseitig verwendet werden, z. B. führt [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) die LaTeX-zu-MathML-Konvertierung über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) durch.

## Grafische Schnittstellen

In diesem Abschnitt untersuchen wir einige Bearbeitungstools, die grafische Oberflächen bieten.

### Eingabefeld

Ein einfacher Ansatz besteht darin, [Konverter aus einer einfachen Syntax](#konvertierung_von_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik zu integrieren. Beispielsweise bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) einen **Einfügen > Mathematik** Befehl, der ein Popup-Fenster öffnet, mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau:

![LaTeX-Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebige MathML-Inhalte einzufügen.

Der Formeleditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Verbesserung: Sein Eingabefeld für die _StartMath_ Syntax bietet zusätzliche Gleichungspaneele, um vordefinierte mathematische Konstruktionen einzufügen.

![StarMath-Eingabefeld in LibreOffice](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Funktionen zum Bearbeiten von Mathematik, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen von [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), die beide HTML-Export unterstützen:

![Lyx-Beispiel](lyx.png)

![TeXmacs-Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden LyX und TeXmacs Bilder von Formeln in ihrer HTML-Ausgabe. Um stattdessen MathML zu wählen, [folgen Sie diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für ersteres und wählen Sie `Benutzervorgaben > Konvertieren > Exportiere mathematische Formeln als MathML` für letzteres.

### Optische Charakter- und Handschriftenerkennung

Eine letzte Möglichkeit, Mathematik einzugeben, besteht darin, auf Benutzeroberflächen für die [optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschrifterkennung](https://en.wikipedia.org/wiki/Handwriting_recognition) zu setzen. Einige dieser Werkzeuge unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
