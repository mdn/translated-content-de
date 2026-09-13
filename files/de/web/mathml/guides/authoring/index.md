---
title: MathML erstellen
short-title: Authoring
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: da7287ff61b6ea4db7f9a5e07be11263b525b7d0
---

Diese Seite erläutert, wie Mathematik mit der MathML-Sprache geschrieben wird, die mit Tags und Attributen im Textformat beschrieben wird. Wie bei HTML oder SVG kann dieser Text bei komplexen Inhalten sehr umfangreich werden und erfordert daher [geeignete Erstellungswerkzeuge](https://www.w3.org/wiki/Math_Tools#Authoring_tools), beispielsweise Konverter aus einer [leichtgewichtigen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-Gleichungseditoren. Viele solcher Werkzeuge sind verfügbar, und es ist unmöglich, eine vollständige Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf gängige Ansätze und Beispiele.

## MathML verwenden

Auch wenn Ihre MathML-Formeln wahrscheinlich durch Erstellungswerkzeuge generiert werden, ist es wichtig, einige Tipps zu beachten, um sie korrekt in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein [`math`](/de/docs/Web/MathML/Reference/Element/math)-Stammelement dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline gerendert, mit zusätzlichen Anpassungen zur Minimierung ihrer Höhe. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal und in einem eigenen Absatz zu rendern.

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
> Um MathML in XML-Dokumenten zu verwenden (z. B. XHTML, EPUB oder OpenDocument), fügen Sie bei jedem `<math>`-Element ein explizites Attribut `xmlns="http://www.w3.org/1998/Math/MathML"` hinzu.

> [!NOTE]
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Daher ist es möglich, mathematische Formeln in solche Nachrichten einzubetten, sofern MathML-Tags nicht von Markup-Sanitisierern herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Falls Ihr Dokument nur grundlegende mathematische Formeln enthält, genügt möglicherweise ein kleines [mathml.css](https://github.com/fred-wang/mathml.css)-Stylesheet. Um es bedingt zu laden, fügen Sie einfach eine Zeile in den Dokumentkopf ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Falls Sie komplexere Konstruktionen benötigen, sollten Sie stattdessen die umfangreichere Bibliothek [MathJax](https://www.mathjax.org/) als MathML-Polyfill in Betracht ziehen:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie oben auf der Seite für Browser ohne gute MathML-Unterstützung einfach eine Warnung anzeigen und die Benutzer zwischen einem der obigen Fallbacks wählen lassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen Feature-Erkennung durch (der Elemente [mspace](/de/docs/Web/MathML/Reference/Element/mspace) oder [mpadded](/de/docs/Web/MathML/Reference/Element/mpadded)), was gegenüber [Browser-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) bevorzugt wird. Außerdem werden sie unter einer Open-Source-Lizenz vertrieben; Sie können sie daher gerne auf Ihren eigenen Server kopieren und an Ihre Bedürfnisse anpassen.

#### Mathematische Schriftarten

Wie im Artikel [MathML Fonts](/de/docs/Web/MathML/Guides/Fonts) erläutert, sind mathematische Schriftarten entscheidend für das Rendern von MathML-Inhalten.
Daher ist es immer eine gute Idee, die [Installationsanweisungen für solche Schriftarten](/de/docs/Web/MathML/Guides/Fonts#installation_instructions) bereitzustellen oder sie als [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) anzubieten.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) stellt solche Webfonts zusammen mit geeigneten Stylesheets bereit.
Fügen Sie beispielsweise einfach die folgende Zeile in den Dokumentkopf ein, um die Schriftarten Latin Modern mit Webfonts als Fallback auszuwählen:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

Es werden mehrere Schriftarten angeboten, und Sie können einfach einen anderen Stil auswählen, beispielsweise STIX:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

Die [XITS-Schriftart](https://fred-wang.github.io/MathFonts/XITS/mathfonts.css) wird für Formeln empfohlen, die von rechts nach links gerendert werden müssen.
Weitere Informationen finden Sie in der globalen Eigenschaft [`dir`](/de/docs/Web/MathML/Reference/Global_attributes/dir).

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/XITS/mathfonts.css" />
```

> [!NOTE]
> Die Schriftarten und Stylesheets von dieser MathFonts-Seite werden unter Open-Source-Lizenzen vertrieben; Sie können sie daher gerne auf Ihren eigenen Server kopieren und an Ihre Bedürfnisse anpassen.

## Konvertierung aus einer einfachen Syntax

In diesem Abschnitt betrachten wir einige Werkzeuge zum Konvertieren von MathML aus einer [leichtgewichtigen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language), etwa der beliebten Sprache [LaTeX](https://en.wikipedia.org/wiki/LaTeX).

### Clientseitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Web-Seiten geschrieben, und eine JavaScript-Bibliothek übernimmt ihre Konvertierung in MathML. Dies ist wahrscheinlich die einfachste Option, hat jedoch auch einige Nachteile: zusätzlicher JavaScript-Code muss geladen und ausgeführt werden, Autoren müssen reservierte Zeichen escapen, und Webcrawler haben keinen Zugriff auf die MathML-Ausgabe ...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode aufzunehmen und sicherzustellen, dass die entsprechende MathML-Ausgabe über einen [Shadow-Teilbaum](/de/docs/Web/API/Web_components/Using_shadow_DOM) eingefügt und gerendert wird. Beispielsweise kann das [oben genannte MathML-Beispiel](#mathml_in_html-seiten) mit dem Element [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html) von [TeXZilla](https://github.com/fred-wang/TeXZilla) wie folgt kompakter geschrieben werden:

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

Für Autoren, die mit LaTeX nicht vertraut sind, stehen alternative Eingabemethoden zur Verfügung, etwa die Syntax [ASCIIMath](https://asciimath.org/#syntax) oder [jqMath](https://mathscribe.com/author/jqmath.html). Stellen Sie sicher, dass Sie die JavaScript-Bibliotheken laden und die richtigen Trennzeichen verwenden:

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

Statt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie sich auf Befehlszeilenwerkzeuge verlassen. Dies führt zu Seiten mit statischen MathML-Inhalten, die schneller geladen werden. Betrachten wir erneut eine Seite `input.html` mit Inhalten aus der [clientseitigen Konvertierung](#clientseitige_konvertierung):

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

Nach Ausführung dieses Befehls wird eine Datei `output.html` erstellt, die die folgende HTML-Ausgabe enthält. Die durch Dollarzeichen begrenzten Formeln wurden in MathML konvertiert:

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

Es gibt anspruchsvollere Werkzeuge, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalten zu konvertieren. Mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) konvertieren beispielsweise die folgenden Befehle `foo.tex` in ein HTML- oder EPUB-Dokument:

```bash
latexmlc --dest foo.html foo.tex # Generate an HTML document foo.html
latexmlc --dest foo.epub foo.tex # Generate an EPUB document foo.epub
```

`latexmlc` akzeptiert einen Parameter `--javascript`, den Sie verwenden können, um eines der oben genannten [Fallback-Skripte](#fallback_für_browser_ohne_mathml-unterstützung) einzubinden:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> Befehlszeilenwerkzeuge können serverseitig verwendet werden; beispielsweise führt [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) die LaTeX-zu-MathML-Konvertierung über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) durch.

## Grafische Benutzeroberflächen

In diesem Abschnitt betrachten wir einige Bearbeitungswerkzeuge mit grafischen Benutzeroberflächen.

### Eingabefeld

Ein einfacher Ansatz besteht darin, [Konverter aus einer einfachen Syntax](#konvertierung_aus_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik zu integrieren. Beispielsweise bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) den Befehl **Einfügen > Mathematik**, der ein Popup-Fenster mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-Vorschau für MathML öffnet:

![LaTeX-Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebige MathML-Inhalte einzufügen.

Der Gleichungseditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Erweiterung: Sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Gleichungsbereiche zum Einfügen vordefinierter mathematischer Konstruktionen.

![StarMath-Eingabefeld in LibreOffice](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Funktionen zur mathematischen Bearbeitung, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen von [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), die beide den HTML-Export unterstützen:

![LyX-Beispiel](lyx.png)

![TeXmacs-Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden LyX und TeXmacs in ihrer HTML-Ausgabe Bilder von Formeln. Um stattdessen MathML auszuwählen, [folgen Sie diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für Ersteres und wählen Sie für Letzteres `User preference > Convert > Export mathematical formulas as MathML`.

### Optische Zeichenerkennung und Handschrifterkennung

Eine letzte Möglichkeit zur Eingabe von Mathematik besteht darin, eine Benutzeroberfläche für [optische Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschrifterkennung](https://en.wikipedia.org/wiki/Handwriting_recognition) zu verwenden. Einige dieser Werkzeuge unterstützen mathematische Formeln und können sie als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
