---
title: Erstellen von MathML
slug: Web/MathML/Authoring
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{MathMLRef}}

Diese Seite erklärt, wie man Mathematik mit der MathML-Sprache schreibt, die in Textformat mit Tags und Attributen beschrieben wird. Genau wie bei HTML oder SVG kann dieser Text bei komplexen Inhalten sehr umfangreich werden und benötigt daher [geeignete Autorenwerkzeuge](https://www.w3.org/wiki/Math_Tools#Authoring_tools) wie Konverter von einer [einfachen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) oder [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) Gleichungseditoren. Viele solcher Werkzeuge sind verfügbar, und es ist unmöglich, eine vollständige Liste bereitzustellen. Stattdessen konzentriert sich dieser Artikel auf gängige Ansätze und Beispiele.

## Verwendung von MathML

Auch wenn Ihre MathML-Formeln wahrscheinlich von Autorenwerkzeugen generiert werden, ist es wichtig, einige Tipps zu kennen, um sie richtig in Ihr Dokument zu integrieren.

### MathML in HTML-Seiten

Jede MathML-Gleichung wird durch ein Wurzel-[`math`](/de/docs/Web/MathML/Element/math)-Element dargestellt, das direkt in HTML-Seiten eingebettet werden kann. Standardmäßig wird die Formel inline gerendert, mit zusätzlichen Anpassungen, um ihre Höhe zu minimieren. Verwenden Sie ein `display="block"`-Attribut, um komplexe Formeln normal und in einem eigenen Absatz darzustellen.

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
      Eins über Quadratwurzel aus zwei (inline-Stil):
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
      Eins über Quadratwurzel aus zwei (Anzeige-Stil):
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
> Einige E-Mail- oder Instant-Messaging-Clients können Nachrichten im HTML-Format senden und empfangen. Es ist also möglich, mathematische Formeln in solche Nachrichten einzubetten, solange MathML-Tags nicht von Markup-Sanitisierern herausgefiltert werden.

#### Fallback für Browser ohne MathML-Unterstützung

Es wird empfohlen, einen Fallback-Mechanismus für Browser ohne MathML-Unterstützung bereitzustellen. Wenn Ihr Dokument nur einfache mathematische Formeln enthält, könnte ein kleines [mathml.css](https://github.com/fred-wang/mathml.css)-Stylesheet ausreichend sein. Um es bedingt zu laden, fügen Sie einfach eine Zeile im Header Ihres Dokuments ein:

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Wenn Sie komplexere Konstruktionen benötigen, sollten Sie stattdessen die umfangreichere [MathJax](https://www.mathjax.org/)-Bibliothek als MathML-Polyfill in Betracht ziehen:

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

Alternativ können Sie auch einfach eine Warnung oben auf der Seite für Browser ohne gute MathML-Unterstützung anzeigen und den Benutzern die Wahl zwischen einem der obigen Fallbacks lassen:

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> Diese kleinen Skripte führen eine Funktionsprüfung (der [mspace](/de/docs/Web/MathML/Element/mspace) oder [mpadded](/de/docs/Web/MathML/Element/mpadded)-Elemente) durch, was gegenüber dem [Browser-Sniffing](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) bevorzugt wird. Sie sind außerdem unter einer Open-Source-Lizenz verteilt, sodass Sie sie gerne auf Ihren eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

#### Mathematische Schriftarten

Wie im Artikel [MathML Fonts](/de/docs/Web/MathML/Fonts) erklärt, sind mathematische Schriftarten wichtig, um MathML-Inhalte darzustellen. Es ist daher immer ratsam, die [Installationsanweisungen für solche Schriftarten](/de/docs/Web/MathML/Fonts#installation_instructions) zu teilen oder sie als [Web-Schriftarten](/de/docs/Learn/CSS/Styling_text/Web_fonts) bereitzustellen.

Die [MathFonts-Seite](https://fred-wang.github.io/MathFonts/) bietet solche Web-Schriftarten zusammen mit den entsprechenden Stylesheets. Um beispielsweise die Latin Modern-Schriftarten mit Fallback-Web-Schriftarten auszuwählen, fügen Sie einfach die folgende Zeile im Header Ihres Dokuments ein:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

Mehrere Schriftarten werden vorgeschlagen und Sie können einfach einen anderen Stil auswählen, zum Beispiel STIX:

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

> [!NOTE]
> Die Schriftarten und Stylesheets von dieser MathFonts-Seite sind unter Open-Source-Lizenzen verteilt, sodass Sie sie gerne auf Ihren eigenen Server kopieren und an Ihre Bedürfnisse anpassen können.

## Konvertierung aus einer einfachen Syntax

In diesem Abschnitt überprüfen wir einige Werkzeuge zur Konvertierung von MathML aus einer [einfachen Auszeichnungssprache](https://en.wikipedia.org/wiki/Lightweight_markup_language) wie der beliebten [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Sprache.

### Clientseitige Konvertierung

Bei diesem Ansatz werden Formeln direkt in Webseiten geschrieben und eine JavaScript-Bibliothek übernimmt deren Konvertierung in MathML. Dies ist wahrscheinlich die einfachste Option, hat jedoch auch einige Probleme: Es muss zusätzlicher JavaScript-Code geladen und ausgeführt werden, Autoren müssen reservierte Zeichen maskieren, und Web-Crawler haben keinen Zugriff auf die MathML-Ausgabe...

Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements) kann verwendet werden, um den Quellcode zu hosten und sicherzustellen, dass die entsprechende MathML-Ausgabe über einen [Shadow-Subtree](/de/docs/Web/API/Web_components/Using_shadow_DOM) eingefügt und gerendert wird. Zum Beispiel kann das [MathML-Beispiel oben](#mathml_in_html-seiten) mithilfe von [TeXZilla](https://github.com/fred-wang/TeXZilla)'s [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html)-Element vereinfacht werden, wie folgt:

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
      Eins über Quadratwurzel aus zwei (inline-Stil):
      <la-tex>\frac{1}{\sqrt{2}}</la-tex>
    </p>

    <p>
      Eins über Quadratwurzel aus zwei (Anzeige-Stil):
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
    <p>Eins über Quadratwurzel aus zwei (inline-Stil, ASCIIMath): `1/(sqrt 2)`</p>
    …
    <p>Eins über Quadratwurzel aus zwei (inline-Stil, jqMath): $1/√2$</p>
    …
    <p>Eins über Quadratwurzel aus zwei (Anzeige-Stil, jqMath): $$1/√2$$</p>
    …
  </body>
</html>
```

### Kommandozeilenprogramme

Anstatt MathML-Ausdrücke beim Laden der Seite zu generieren, können Sie stattdessen auf Kommandozeilenwerkzeuge zurückgreifen. Dies ergibt Seiten mit statischem MathML-Inhalt, die schneller geladen werden. Betrachten wir erneut eine Seite `input.html` mit Inhalten aus der [clientseitigen Konvertierung](#clientseitige_konvertierung):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>MathML in HTML5</title>
  </head>
  <body>
    <h1>MathML in HTML5</h1>
    <p>Eins über Quadratwurzel aus zwei (inline-Stil): $\frac{1}{\sqrt{2}}$</p>
    <p>Eins über Quadratwurzel aus zwei (Anzeige-Stil): $$\frac{1}{\sqrt{2}}$$</p>
  </body>
</html>
```

Diese Seite enthält kein [`script`](/de/docs/Web/HTML/Element/script)-Tag. Stattdessen wird die Konvertierung über die folgende Befehlszeile unter Verwendung von [Node.js](https://nodejs.org/) und [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) ausgeführt:

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

Nach dem Ausführen dieses Befehls wird eine Datei `output.html` erstellt, die die folgende HTML-Ausgabe enthält. Die durch Dollarzeichen begrenzten Formeln wurden in MathML konvertiert:

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
      Eins über Quadratwurzel aus zwei (inline-Stil):
      <math><semantics><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><annotation encoding="TeX">\frac{1}{\sqrt{2}}</annotation></semantics></math>
    </p>

    <p>
      Eins über Quadratwurzel aus zwei (Anzeige-Stil):
      <math display="block"><semantics><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><annotation encoding="TeX">\frac{1}{\sqrt{2}}</annotation></semantics></math>
    </p>
  </body>
</html>
```

Es gibt fortschrittlichere Werkzeuge, die darauf abzielen, ein beliebiges LaTeX-Dokument in ein Dokument mit MathML-Inhalt zu konvertieren. Zum Beispiel können Sie mit [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) die folgenden Befehle ausführen, um `foo.tex` in ein HTML- oder EPUB-Dokument zu konvertieren:

```bash
latexmlc --dest foo.html foo.tex # Erzeugt ein HTML-Dokument foo.html
latexmlc --dest foo.epub foo.tex # Erzeugt ein EPUB-Dokument foo.epub
```

`latexmlc` akzeptiert einen `--javascript`-Parameter, mit dem Sie eines der oben erwähnten [Fallback-Skripte](#fallback_für_browser_ohne_mathml-unterstützung) einfügen können:

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Fügt das CSS-Fallback hinzu
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Fügt das MathJax-Fallback hinzu
```

> [!NOTE]
> Kommandozeilenwerkzeuge können serverseitig verwendet werden, z.B. [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) führt die LaTeX-zu-MathML-Konvertierung über [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) durch.

## Grafische Schnittstellen

In diesem Abschnitt überprüfen wir einige Bearbeitungstools, die grafische Schnittstellen bieten.

### Eingabefeld

Ein einfacher Ansatz ist die Integration von [Konvertern aus einer einfachen Syntax](#konvertierung_aus_einer_einfachen_syntax) als einfache Eingabefelder für Mathematik. Beispielsweise bieten [Thunderbird](https://www.thunderbird.net/en-US/) und [SeaMonkey](https://www.seamonkey-project.org/) einen **Einfügen > Math** Befehl, der ein Popup-Fenster mit einem LaTeX-zu-MathML-Eingabefeld und einer Live-MathML-Vorschau öffnet:

![LaTeX-Eingabefeld in Thunderbird](thunderbird.png)

> [!NOTE]
> Sie können auch den Befehl **Einfügen > HTML** verwenden, um beliebigen MathML-Inhalt einzufügen.

Der Gleichungseditor von [LibreOffice](https://www.libreoffice.org/) (Datei → Neu → Formel) zeigt eine mögliche Verbesserung: Sein Eingabefeld für die _StartMath_-Syntax bietet zusätzliche Gleichungspaneele zum Einfügen vordefinierter mathematischer Konstruktionen.

![StarMath-Eingabefeld in Libre Office](libreoffice.png)

> [!NOTE]
> Um den MathML-Code von LibreOffice zu erhalten, speichern Sie das Dokument als `mml` und öffnen Sie es mit Ihrem bevorzugten Texteditor.

### WYSIWYG-Editoren

Andere Editoren bieten Mathematikbearbeitungsfunktionen, die direkt in ihre WYSIWYG-Oberfläche integriert sind. Die folgenden Screenshots stammen aus [LyX](https://www.lyx.org/) und [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html), die beide HTML-Export unterstützen:

![Lyx Beispiel](lyx.png)

![TeXmacs Beispiel](texmacs.png)

> [!NOTE]
> Standardmäßig verwenden Lyx und TeXmacs Bilder von Formeln in ihrem HTML-Ausgang. Um stattdessen MathML zu wählen, [folgen Sie diesen Anweisungen](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx) für das Erste und wählen Sie `Benutzervoreinstellung > Konvertieren > Mathematische Formeln als MathML exportieren` für das Letztere.

### Bild- und Handschrifterkennung

Eine letzte Möglichkeit zur Eingabe von Mathematik besteht darin, auf Benutzerschnittstellen zur [Optischen Zeichenerkennung](https://en.wikipedia.org/wiki/Optical_character_recognition) oder [Handschrifterkennung](https://en.wikipedia.org/wiki/Handwriting_recognition) zurückzugreifen. Einige dieser Werkzeuge unterstützen mathematische Formeln und können diese als MathML exportieren. Der folgende Screenshot zeigt eine [Demo von MyScript](https://webdemo.myscript.com/views/math/index.html):

![MyScript](myscript.png)
