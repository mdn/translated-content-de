---
title: MathML verfassen
slug: Web/MathML/Authoring
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

Diese Seite erklärt, wie Mathematik mit der MathML-Sprache verfasst wird, die im Textformat mit Tags und Attributen beschrieben wird. Ähnlich wie bei HTML oder SVG kann dieser Text für komplexe Inhalte sehr umfangreich werden und erfordert daher [geeignete Autorentools](https://www.w3.org/wiki/Math_Tools#Authoring_tools) wie Konverter von einer [einfachen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-Gleichungseditoren. Viele solcher Tools sind verfügbar, und es ist unmöglich, eine vollständige Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf gängige Ansätze und Beispiele.

## Verwendung von MathML

Auch wenn Ihre MathML-Formeln wahrscheinlich von Autorentools generiert werden, ist es wichtig, einige Tipps zu beachten, um sie korrekt in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein Wurzelelement [`math`](/de/docs/Web/MathML/Element/math) dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline gerendert, mit zusätzlichen Anpassungen, um ihre Höhe zu minimieren. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal und in einem eigenen Absatz zu rendern.

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
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Es ist also möglich, mathematische Formeln in solche Nachrichten einzubetten, solange MathML-Tags nicht von Markup-Sanitizern herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser bereitzustellen, die MathML nicht unterstützen. Wenn Ihr Dokument nur einfache mathematische Formeln enthält, reicht möglicherweise ein kleines [mathml.css](https://github.com/fred-wang/mathml.css)-Stylesheet aus. Um es bedingt zu laden, fügen Sie einfach eine Zeile in Ihrem Dokumentenheader ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Wenn Sie komplexere Konstruktionen benötigen, sollten Sie stattdessen in Betracht ziehen, die umfangreichere [MathJax](https://www.mathjax.org/)-Bibliothek als MathML-Polyfill zu verwenden:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach eine Warnung oben auf der Seite für Browser ohne gute MathML-Unterstützung anzeigen und den Benutzern die Wahl eines der oben genannten Fallbacks überlassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen eine Feature-Erkennung (der [mspace](/de/docs/Web/MathML/Element/mspace) oder [mpadded](/de/docs/Web/MathML/Element/mpadded)-Elemente) durch, die gegenüber [Browser-Sniffing](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) bevorzugt wird. Außerdem werden sie unter einer Open-Source-Lizenz verteilt, sodass Sie frei sind, sie auf Ihren eigenen Server zu kopieren und an Ihre Bedürfnisse anzupassen.

#### Mathematische Schriftarten

Wie im Artikel [MathML Fonts](/de/docs/Web/MathML/Fonts) erklärt, sind mathematische Schriftarten entscheidend, um MathML-Inhalte darzustellen. Es ist daher immer eine gute Idee, die [Installationsanweisungen für solche Schriftarten](/de/docs/Web/MathML/Fonts#installation_instructions) weiterzugeben oder sie als [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) bereitzustellen.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) bietet solche Webfonts zusammen mit den entsprechenden Stylesheets. Beispielsweise fügen Sie einfach die folgende Zeile in Ihren Dokumentenheader ein, um die Latin Modern-Fonts mit Fallback-Webfonts auszuwählen:

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
> Die Schriftarten und Stylesheets von dieser MathFonts-Seite werden unter Open-Source-Lizenzen verteilt, sodass Sie frei sind, sie auf Ihren eigenen Server zu kopieren und an Ihre Bedürfnisse anzupassen.

## Umwandlung von einer einfachen Syntax

In diesem Abschnitt überprüfen wir einige Tools zur Konvertierung von MathML aus einer [einfachen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) wie der beliebten [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Sprache.

### Client-seitige Konvertierung

Mit diesem Ansatz werden Formeln direkt in Webseiten geschrieben, und eine JavaScript-Bibliothek übernimmt die Konvertierung zu MathML. Dies ist wahrscheinlich die einfachste Option, hat aber auch einige Probleme: zusätzlicher JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen maskieren, Webcrawler haben keinen Zugriff auf die MathML-Ausgabe...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass die entsprechende MathML-Ausgabe über einen [Schatten-Teilbaum](/de/docs/Web/API/Web_components/Using_shadow_DOM) eingefügt und gerendert wird. Beispielsweise kann unter Verwendung von [TeXZilla](https://github.com/fred-wang/TeXZilla)'s [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html)-Element das [MathML-Beispiel oben](#mathml_in_html-seiten) prägnanter wie folgt umgeschrieben werden:

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

Für Autoren, die mit LaTeX nicht vertraut sind, sind alternative Eingabemethoden verfügbar, wie die [ASCIIMath](https://asciimath.org/#syntax) oder [jqMath](https://mathscribe.com/author/jqmath.html)-Syntax. Stellen Sie sicher, dass Sie die JavaScript-Bibliotheken laden und die richtigen Begrenzer verwenden:

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

Statt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie stattdessen auf Befehlszeilentools zurückgreifen. Dadurch entstehen Seiten mit statischem MathML-Inhalt, die schneller geladen werden. Betrachten wir erneut eine Seite `input.html` mit Inhalten aus der [client-seitigen Konvertierung](#client-seitige_konvertierung):

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

Diese Seite enthält kein [`script`](/de/docs/Web/HTML/Element/script)-Tag. Stattdessen wird die Konvertierung über die folgende Befehlszeile mit [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nach Ausführung dieses Befehls wird eine Datei `output.html` erstellt, die die folgende HTML-Ausgabe enthält. Die Formeln, die durch Dollarzeichen begrenzt sind, wurden in MathML konvertiert:

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

Es gibt anspruchsvollere Tools, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalt zu konvertieren. Beispielsweise werden mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) die folgenden Befehle `foo.tex` in ein HTML- oder EPUB-Dokument konvertiert:

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
> Befehlszeilentools können serverseitig verwendet werden, z. B. führt [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) die LaTeX-zu-MathML-Konvertierung über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) aus.

## Grafische Schnittstellen

In diesem Abschnitt überprüfen wir einige Bearbeitungstools, die grafische Schnittstellen bieten.

### Eingabefeld

Ein einfacher Ansatz ist die Integration von [Konvertern aus einer einfachen Syntax](#umwandlung_von_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik. Beispielsweise bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) den Befehl **Einfügen > Mathematik**, der ein Popup-Fenster öffnet, mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau:

![LaTeX-Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebige MathML-Inhalte einzufügen.

Der Formeleditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Verbesserung: Sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Gleichungspaneele, um vordefinierte mathematische Konstruktionen einzufügen.

![StarMath Eingabefeld in LibreOffice](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Mathebearbeitungsfunktionen, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen von [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), beide unterstützen den HTML-Export:

![Lyx Beispiel](lyx.png)

![TeXmacs Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden Lyx und TeXmacs Bilder von Formeln in ihrer HTML-Ausgabe. Um stattdessen MathML zu wählen, [folgen Sie diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für den ersten und wählen Sie `Benutzereinstellungen > Konvertieren > Mathematische Formeln als MathML exportieren` für den letzteren.

### Optische Zeichen- und Handschriftenerkennung

Eine letzte Option zur Eingabe von Mathematik ist die Verwendung von Benutzerschnittstellen für [Optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschrifterkennung](https://en.wikipedia.org/wiki/Handwriting_recognition). Einige dieser Tools unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
