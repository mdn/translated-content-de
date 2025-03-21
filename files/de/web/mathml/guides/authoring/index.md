---
title: Verfassen von MathML
short-title: Authoring
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

Diese Seite erklärt, wie man Mathematik mit der MathML-Sprache schreibt, die in Textformat mit Tags und Attributen beschrieben wird. Genau wie bei HTML oder SVG kann dieser Text für komplexe Inhalte sehr ausführlich werden und erfordert daher [geeignete Autorentools](https://www.w3.org/wiki/Math_Tools#Authoring_tools), wie Konverter aus einer [leichte Markup-Sprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-Gleichungseditoren. Viele solche Tools sind verfügbar, und es ist unmöglich, eine vollständige Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf gängige Ansätze und Beispiele.

## Verwendung von MathML

Auch wenn Ihre MathML-Formeln wahrscheinlich von Autorentools generiert werden, ist es wichtig, sich einiger Tipps bewusst zu sein, um sie richtig in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein Wurzelelement [`math`](/de/docs/Web/MathML/Reference/Element/math) dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline gerendert, mit zusätzlichen Anpassungen zur Minimierung ihrer Höhe. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal und in ihrem eigenen Absatz zu rendern.

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

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Wenn Ihr Dokument nur grundlegende mathematische Formeln enthält, könnte ein kleines [mathml.css](https://github.com/fred-wang/mathml.css) Stylesheet ausreichen. Um es bedingt zu laden, fügen Sie einfach eine Zeile in den Kopfbereich Ihres Dokuments ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Für komplexere Konstruktionen sollten Sie stattdessen die umfangreichere [MathJax](https://www.mathjax.org/) Bibliothek als MathML-Polyfill verwenden:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach eine Warnung oben auf der Seite für Browser ohne ausreichende MathML-Unterstützung anzeigen und den Benutzern die Wahl zwischen einem der oben genannten Fallbacks überlassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen eine Feature-Erkennung (der [mspace](/de/docs/Web/MathML/Reference/Element/mspace) oder [mpadded](/de/docs/Web/MathML/Reference/Element/mpadded) Elemente) durch, was gegenüber dem [Browser-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) bevorzugt wird. Außerdem werden sie unter einer Open-Source-Lizenz vertrieben, sodass Sie sie gerne auf Ihrem eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

#### Mathematische Schriftarten

Wie im Artikel [MathML Fonts](/de/docs/Web/MathML/Guides/Fonts) erklärt, sind mathematische Schriftarten entscheidend, um MathML-Inhalte darzustellen. Es ist daher immer eine gute Idee, die [Installationsanleitungen für solche Schriftarten](/de/docs/Web/MathML/Guides/Fonts#installation_instructions) zu teilen oder sie als [Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) bereitzustellen.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) bietet solche Web-Schriften zusammen mit passenden Stylesheets an. Um beispielsweise die Latin Modern-Schriften mit Fallback-Web-Schriften auszuwählen, fügen Sie einfach die folgende Zeile in den Kopfbereich Ihres Dokuments ein:

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
> Die Schriftarten und Stylesheets von dieser MathFonts-Seite werden unter Open-Source-Lizenzen vertrieben, sodass Sie sie gerne auf Ihrem eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

## Konvertierung von einer einfachen Syntax

In diesem Abschnitt überprüfen wir einige Tools, um MathML von einer [leichten Markup-Sprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) wie der beliebten [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Sprache zu konvertieren.

### Client-seitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben und eine JavaScript-Bibliothek übernimmt die Konvertierung in MathML. Dies ist wahrscheinlich die einfachste Option, hat aber auch einige Probleme: Zusätzliches JavaScript muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen escapen, Webcrawler haben keinen Zugriff auf die MathML-Ausgabe...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass die entsprechende MathML-Ausgabe über einen [Shadow-Subtree](/de/docs/Web/API/Web_components/Using_shadow_DOM) eingefügt und gerendert wird. Zum Beispiel kann das [MathML-Beispiel oben](#mathml_in_html-seiten) durch Verwendung des [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html) Elements von [TeXZilla](https://github.com/fred-wang/TeXZilla) prägnanter umgeschrieben werden:

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

Für Autoren, die LaTeX nicht kennen, stehen alternative Eingabemethoden zur Verfügung, wie die [ASCIIMath](https://asciimath.org/#syntax) oder [jqMath](https://mathscribe.com/author/jqmath.html) Syntax. Stellen Sie sicher, dass Sie die JavaScript-Bibliotheken laden und die richtigen Trennzeichen verwenden:

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

Anstatt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie stattdessen Kommandozeilen-Tools verwenden. Dies führt zu Seiten mit statischem MathML-Inhalt, der schneller lädt. Betrachten wir noch einmal eine Seite `input.html` mit Inhalt aus der [Client-seitigen Konvertierung](#client-seitige_Konvertierung):

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

Diese Seite enthält keinen [`script`](/de/docs/Web/HTML/Element/script)-Tag. Stattdessen wird die Konvertierung über die folgende Kommandozeile mit [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nach dem Ausführen dieses Kommandos wird eine Datei `output.html` erstellt, die den folgenden HTML-Ausgang enthält. Die von Dollarzeichen umschlossenen Formeln wurden in MathML konvertiert:

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

Es gibt komplexere Tools, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalt zu konvertieren. Zum Beispiel werden die folgenden Befehle mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) `foo.tex` in ein HTML- oder EPUB-Dokument konvertieren:

```bash
latexmlc --dest foo.html foo.tex # Generate a HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

`latexmlc` akzeptiert ein `--javascript`-Parameter, den Sie verwenden können, um eines der oben genannten [Fallback-Skripte](#fallback_für_browser_ohne_mathml_unterstützung) einzuschließen:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> Kommandozeilen-Tools können serverseitig verwendet werden, z.B. führt [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) die LaTeX-zu-MathML-Konvertierung über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) aus.

## Grafische Oberflächen

In diesem Abschnitt überprüfen wir einige Editier-Tools mit grafischen Oberflächen.

### Eingabefeld

Ein einfacher Ansatz ist es, [Konverter von einer einfachen Syntax](#konvertierung_von_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik zu integrieren. Zum Beispiel bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) einen **Einfügen > Math** Befehl an, der ein Popup-Fenster öffnet, mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau:

![LaTeX Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebige MathML-Inhalte einzufügen.

[LibreOffice](https://www.libreoffice.org/)'s Formeleditor (Datei → Neu → Formel) zeigt eine mögliche Verbesserung: Sein Eingabefeld für die _StartMath_ Syntax bietet zusätzliche Gleichungspaneele zum Einfügen vordefinierter mathematischer Konstruktionen.

![StartMath Eingabefeld in Libre Office](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Mathe-Editierfunktionen, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen aus [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), beide unterstützen den HTML-Export:

![Lyx Beispiel](lyx.png)

![TeXmacs Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden Lyx und TeXmacs Bilder von Formeln in ihrem HTML-Ausgang. Um stattdessen MathML zu wählen, [folgen Sie diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für Ersteres und wählen Sie `Benutzervoreinstellung > Konvertieren > Exportiere mathematische Formeln als MathML` für Letzteres.

### Optische Zeichen- und Handschriftenerkennung

Eine letzte Möglichkeit, Mathematik einzugeben, ist die Nutzung von Benutzeroberflächen für die [Optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschriftenerkennung](https://en.wikipedia.org/wiki/Handwriting_recognition). Einige dieser Tools unterstützen mathematische Formeln und können diese als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
