---
title: Erstellen von MathML
short-title: Authoring
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Diese Seite erklärt, wie man Mathematik mit der MathML-Sprache schreibt, die mit Tags und Attributen im Textformat beschrieben wird. Genau wie bei HTML oder SVG kann dieser Text für komplexe Inhalte sehr umfangreich werden und erfordert daher [geeignete Autorentools](https://www.w3.org/wiki/Math_Tools#Authoring_tools) wie Konverter von einer [vereinfachten Auszeichnungssprache](https://de.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://de.wikipedia.org/wiki/WYSIWYG) Formeleditoren. Viele solche Werkzeuge sind verfügbar, und es ist unmöglich, eine vollständige Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf gängige Ansätze und Beispiele.

## Verwendung von MathML

Auch wenn Ihre MathML-Formeln wahrscheinlich von Autorentools generiert werden, ist es wichtig, einige Tipps zu beachten, um sie richtig in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein Wurzelelement [`math`](/de/docs/Web/MathML/Reference/Element/math) dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline dargestellt, mit zusätzlichen Anpassungen, um ihre Höhe zu minimieren. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal und in ihrem eigenen Absatz darzustellen.

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
> Um MathML in XML-Dokumenten (z.B. XHTML, EPUB oder OpenDocument) zu verwenden, setzen Sie ein explizites `xmlns="http://www.w3.org/1998/Math/MathML"`-Attribut auf jedes `<math>`-Element.

> [!NOTE]
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Es ist daher möglich, mathematische Formeln in solche Nachrichten einzubetten, solange MathML-Tags nicht durch Markup-Sanitisierer herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Wenn Ihr Dokument nur einfache mathematische Formeln enthält, dann reicht möglicherweise ein kleines [mathml.css](https://github.com/fred-wang/mathml.css)-Stylesheet aus. Um es bedingt zu laden, fügen Sie einfach eine Zeile in die Kopfzeile Ihres Dokuments ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Wenn Sie komplexere Konstruktionen benötigen, sollten Sie stattdessen erwägen, die umfangreichere [MathJax](https://www.mathjax.org/)-Bibliothek als MathML-Polyfill zu verwenden:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach eine Warnung oben auf der Seite für Browser ohne gute MathML-Unterstützung anzeigen und den Benutzern die Wahl zwischen einem der oben genannten Fallbacks überlassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen eine Funktionsprüfung (von den [mspace](/de/docs/Web/MathML/Element/mspace)- oder [mpadded](/de/docs/Web/MathML/Element/mpadded)-Elementen) durch, welche bevorzugt wird gegenüber [Browser-Erkennung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent). Außerdem werden sie unter einer Open-Source-Lizenz vertrieben, sodass Sie sie auf Ihren eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

#### Mathematische Schriftarten

Wie im Artikel [MathML-Schriftarten](/de/docs/Web/MathML/Guides/Fonts) erklärt, sind mathematische Schriftarten entscheidend, um MathML-Inhalte darzustellen. Es ist daher immer eine gute Idee, die [Installationsanweisungen für solche Schriftarten](/de/docs/Web/MathML/Guides/Fonts#installation_instructions) zu teilen oder sie als [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) bereitzustellen.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) bietet solche Webfonts zusammen mit geeigneten Stylesheets. Fügen Sie zum Beispiel einfach die folgende Zeile in die Kopfzeile Ihres Dokuments ein, um die Latin Modern-Schriftarten mit Fallback-Webfonts auszuwählen:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

Es werden mehrere Schriftarten vorgeschlagen, und Sie können einfach einen anderen Stil auswählen, beispielsweise STIX:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

> [!NOTE]
> Die Schriftarten und Stylesheets von dieser MathFonts-Seite werden unter Open-Source-Lizenzen vertrieben, sodass Sie sie auf Ihren eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

## Konvertierung aus einer einfachen Syntax

In diesem Abschnitt überprüfen wir einige Tools, um MathML aus einer [vereinfachten Auszeichnungssprache](https://de.wikipedia.org/wiki/Lightweight_markup_language) wie der beliebten [LaTeX](https://de.wikipedia.org/wiki/LaTeX)-Sprache zu konvertieren.

### Clientseitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben und eine JavaScript-Bibliothek übernimmt deren Umwandlung in MathML. Dies ist wahrscheinlich die einfachste Option, hat aber auch einige Probleme: Zusätzliches JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen maskieren, Webcrawler haben keinen Zugriff auf die MathML-Ausgabe...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass die entsprechende MathML-Ausgabe über einen [Shadow-Subtree](/de/docs/Web/API/Web_components/Using_shadow_DOM) eingefügt und gerendert wird. Zum Beispiel kann im [TeXZilla](https://github.com/fred-wang/TeXZilla)-Element [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html) das [MathML-Beispiel oben](#mathml_in_html-seiten) einfach wie folgt umgeschrieben werden:

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

Für Autoren, die mit LaTeX nicht vertraut sind, stehen alternative Eingabemethoden zur Verfügung, wie die [ASCIIMath](https://asciimath.org/#syntax)- oder [jqMath](https://mathscribe.com/author/jqmath.html)-Syntax. Stellen Sie sicher, dass Sie die JavaScript-Bibliotheken laden und die richtigen Trennzeichen verwenden:

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

Anstatt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie stattdessen auf Befehlszeilentools zurückgreifen. Dies führt zu Seiten mit statischem MathML-Inhalt, die schneller geladen werden. Betrachten wir erneut eine Seite `input.html` mit Inhalten von der [clientseitigen Konvertierung](#clientseitige_konvertierung):

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

Diese Seite enthält kein [`script`](/de/docs/Web/HTML/Element/script)-Tag. Stattdessen wird die Konvertierung über die folgende Befehlszeile unter Verwendung von [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nach dem Ausführen dieses Befehls wird eine Datei `output.html` erstellt, die die folgende HTML-Ausgabe enthält. Die durch Dollarzeichen begrenzten Formeln wurden in MathML umgewandelt:

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

Es gibt ausgefeiltere Tools, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalt zu konvertieren. Zum Beispiel werden mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) die folgenden Befehle `foo.tex` in ein HTML- oder EPUB-Dokument umwandeln:

```bash
latexmlc --dest foo.html foo.tex # Generate a HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

`latexmlc` akzeptiert einen `--javascript`-Parameter, den Sie verwenden können, um eines der oben genannten [Fallback-Skripte](#fallback_für_browser_ohne_mathml-unterstützung) einzufügen:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> Befehlszeilentools können serverseitig verwendet werden, z.B. verwendet [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) die LaTeX-zu-MathML-Konvertierung über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid).

## Grafische Oberflächen

In diesem Abschnitt überprüfen wir einige Bearbeitungstools mit grafischen Oberflächen.

### Eingabefeld

Ein einfacher Ansatz ist es, [Konverter aus einer einfachen Syntax](#konvertierung_aus_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik zu integrieren. Beispielsweise bieten [Thunderbird](https://www.thunderbird.net/de/) und [SeaMonkey](https://www.seamonkey-project.org/) den Befehl **Einfügen > Math** an, der ein Popup-Fenster mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau öffnet:

![LaTeX-Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebige MathML-Inhalte einzufügen.

Der Formeleditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Verbesserung: Sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Gleichungsfelder zum Einfügen vordefinierter mathematischer Konstruktionen.

![StarMath-Eingabefeld in LibreOffice](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Mathematik-Bearbeitungsfunktionen, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen von [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), die beide HTML-Export unterstützen:

![Lyx-Beispiel](lyx.png)

![TeXmacs-Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden Lyx und TeXmacs Bilder von Formeln in ihrem HTML-Export. Um stattdessen MathML zu wählen, [befolgen Sie diese Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für ersteres und wählen Sie `User preference > Convert > Export mathematical formulas as MathML` für letzteres.

### Zeichenerkennung und Handschriftenerkennung

Eine letzte Option zur Eingabe von Mathematik besteht darin, auf eine Benutzeroberfläche für [Zeichenerkennung](https://de.wikipedia.org/wiki/Optische_Zeichenerkennung) oder [Handschriftenerkennung](https://de.wikipedia.org/wiki/Schrifterkennung) zu setzen. Einige dieser Tools unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
