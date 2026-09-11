---
title: Was steht im head? Metadaten von Webseiten
short-title: Metadaten von Webseiten
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: a2e0aee81b78bd02721fa2d9da0fa3b90b65a89f
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der beim Laden der Seite nicht im Webbrowser angezeigt wird. Er enthält Metadaten wie den {{htmlelement("title")}} der Seite, Verknüpfungen zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihre HTML-Inhalte mit CSS gestalten möchten), Verknüpfungen zu benutzerdefinierten Favicons und weitere Metadaten (Daten über das HTML, beispielsweise den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden die im {{Glossary("Head", "head")}} enthaltenen Informationen, um das HTML-Dokument korrekt zu rendern. In diesem Artikel behandeln wir all dies und mehr, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu vermitteln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in der vorherigen Lektion behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der HTML-head und sein Zweck als Metadatencontainer für das Dokument.</li>
          <li>Festlegen der Zeichenkodierung und des Titels eines Dokuments.</li>
          <li>Bereitstellen von Metadaten für Suchmaschinen.</li>
          <li>Verknüpfen mit Icons zur Verwendung in Browsern und auf mobilen Plattformen.</li>
          <li>Verknüpfen mit Stylesheets und Skriptdateien.</li>
          <li>Die Notwendigkeit, die Sprache eines Dokuments mit dem Attribut <code>lang</code> im öffnenden Tag <code>&lt;html&gt;</code> festzulegen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-head?

Sehen wir uns noch einmal das einfache [HTML-Dokument an, das wir im vorherigen Artikel behandelt haben](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

Der HTML-head ist der Inhalt des Elements {{htmlelement("head")}}. Anders als der Inhalt des Elements {{htmlelement("body")}} (der beim Laden im Browser auf der Seite angezeigt wird), wird der Inhalt des head nicht auf der Seite angezeigt. Stattdessen besteht die Aufgabe des head darin, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der head recht klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Bei größeren Seiten kann der head jedoch ziemlich umfangreich werden. Besuchen Sie einige Ihrer Lieblingswebsites und verwenden Sie die [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um deren head-Inhalte zu untersuchen. Unser Ziel ist hier nicht, Ihnen zu zeigen, wie Sie alles verwenden, was möglicherweise in den head eingefügt werden kann, sondern Ihnen die Verwendung der wichtigsten Elemente beizubringen, die Sie in den head aufnehmen möchten, und Ihnen damit vertraut zu machen. Legen wir los.

## Einen Titel hinzufügen

Wir haben das Element {{htmlelement("title")}} bereits in Aktion gesehen — es kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem Element {{htmlelement("Heading_Elements", "h1")}} verwechselt werden, das verwendet wird, um Ihren body-Inhalten eine Überschrift der obersten Ebene hinzuzufügen — dies wird manchmal ebenfalls als Seitentitel bezeichnet. Es handelt sich aber um unterschiedliche Dinge!

- Das Element {{htmlelement("Heading_Elements", "h1")}} erscheint auf der Seite, wenn diese im Browser geladen wird — im Allgemeinen sollte es einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts auszuzeichnen (den Titel einer Geschichte, eine Nachrichtenüberschrift oder was auch immer für Ihren Anwendungsfall geeignet ist).
- Das Element {{htmlelement("title")}} sind Metadaten, die den Titel des gesamten HTML-Dokuments darstellen (nicht den Inhalt des Dokuments).

### Ein Beispiel untersuchen

1. In dieser Übung möchten wir, dass Sie zunächst zu unserem GitHub-Repository gehen und eine Kopie unserer [Seite title-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Gehen Sie dazu entweder wie folgt vor:
   1. Kopieren Sie den Code von der Seite und fügen Sie ihn in eine neue Textdatei in Ihrem Code-Editor ein. Speichern Sie sie anschließend an einem geeigneten Ort.
   2. Klicken Sie auf der GitHub-Seite auf die Schaltfläche „Raw“, woraufhin der Rohcode angezeigt wird (möglicherweise in einem neuen Browser-Tab). Wählen Sie anschließend im Menü Ihres Browsers _Seite speichern unter…_ und wählen Sie einen geeigneten Speicherort für die Datei.

2. Öffnen Sie die Datei nun in Ihrem Browser. Sie sollten etwas Ähnliches sehen:

   ![Eine Webseite mit dem Text „title“ im Seitentab des Browsers und dem Text „h1“ als Seitenüberschrift im Dokumentkörper.](title-example.png)

   Es sollte nun völlig offensichtlich sein, wo der Inhalt von `<h1>` und wo der Inhalt von `<title>` erscheint!

3. Sie sollten den Code auch in Ihrem Code-Editor öffnen, den Inhalt dieser Elemente bearbeiten und dann die Seite in Ihrem Browser aktualisieren. Probieren Sie es aus.

Der Inhalt des Elements `<title>` wird auch auf andere Weise verwendet. Wenn Sie beispielsweise versuchen, die Seite als Lesezeichen zu speichern (_Lesezeichen > Lesezeichen für diese Seite hinzufügen_ oder das Sternsymbol in der URL-Leiste in Firefox), wird der Inhalt von `<title>` als vorgeschlagener Name für das Lesezeichen eingefügt.

![Eine Webseite wird in Firefox als Lesezeichen gespeichert. Der Lesezeichenname wurde automatisch mit dem Inhalt des Elements „title“ ausgefüllt.](bookmark-example.png)

Der Inhalt von `<title>` wird auch in Suchergebnissen verwendet, wie Sie weiter unten sehen werden.

## Metadaten: das Element `<meta>`

Metadaten sind Daten, die Daten beschreiben, und HTML bietet mit dem Element {{htmlelement("meta")}} eine „offizielle“ Möglichkeit, Metadaten zu einem Dokument hinzuzufügen. Natürlich könnten auch die anderen Dinge, über die wir in diesem Artikel sprechen, als Metadaten betrachtet werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die Sie in den `<head>` Ihrer Seite aufnehmen können, aber wir werden sie an dieser Stelle nicht alle erklären, da dies nur zu verwirrend wäre. Stattdessen erklären wir einige Dinge, die Sie häufig sehen könnten, um Ihnen einen Eindruck zu vermitteln.

### Die Zeichenkodierung Ihres Dokuments festlegen

Im oben gezeigten Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element legt die Zeichenkodierung des Dokuments fest — den Zeichensatz, den das Dokument verwenden darf. `utf-8` ist ein universeller Zeichensatz, der so gut wie jedes Zeichen aus jeder menschlichen Sprache enthält. Das bedeutet, dass Ihre Webseite jede Sprache anzeigen kann; daher ist es eine gute Idee, dies für jede von Ihnen erstellte Webseite festzulegen! Beispielsweise kann Ihre Seite problemlos Englisch und Japanisch verarbeiten:

![Eine Webseite mit englischen und japanischen Zeichen, bei der die Zeichenkodierung auf universell bzw. utf-8 festgelegt ist. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichenkodierung beispielsweise auf `ISO-8859-1` setzen (den Zeichensatz für das lateinische Alphabet), kann die Darstellung Ihrer Seite völlig fehlerhaft aussehen:

![Eine Webseite mit englischen und japanischen Zeichen, bei der die Zeichenkodierung auf lateinisch festgelegt ist. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren falsche Kodierungen automatisch. Daher sehen Sie dieses Problem je nach verwendetem Browser möglicherweise nicht. Sie sollten dennoch eine Kodierung von `utf-8` auf Ihrer Seite festlegen, um mögliche Probleme in anderen Browsern zu vermeiden.

### Mit der Zeichenkodierung experimentieren

Um dies auszuprobieren, kehren Sie zur einfachen HTML-Vorlage zurück, die Sie im vorherigen Abschnitt über `<title>` erhalten haben (die [Seite title-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)). Versuchen Sie, den Wert von meta charset in `ISO-8859-1` zu ändern, und fügen Sie Ihrer Seite Japanisch hinzu. Dies ist der von uns verwendete Code:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Einen Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten die Attribute `name` und `content`:

- `name` legt fest, um welche Art von meta-Element es sich handelt, also welche Art von Informationen es enthält.
- `content` legt den eigentlichen meta-Inhalt fest.

Zwei solcher meta-Elemente, die Sie sinnvollerweise auf Ihrer Seite einfügen können, definieren den Autor der Seite und stellen eine kurze Beschreibung der Seite bereit. Sehen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Das Angeben eines Autors ist in vielerlei Hinsicht vorteilhaft: Es ist nützlich, nachvollziehen zu können, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und die Person kontaktieren möchten. Einige Content-Management-Systeme bieten Funktionen, um Informationen über Seitenautoren automatisch zu extrahieren und für solche Zwecke verfügbar zu machen.

Das Angeben einer Beschreibung, die Schlüsselwörter zum Inhalt Ihrer Seite enthält, ist nützlich, da sie dazu beitragen kann, dass Ihre Seite bei relevanten Suchanfragen in Suchmaschinen weiter oben erscheint (solche Aktivitäten werden als {{Glossary("SEO", "Search Engine Optimization")}} oder {{Glossary("SEO", "SEO")}} bezeichnet).

### Die Verwendung der Beschreibung in Suchmaschinen untersuchen

Die Beschreibung wird auch auf Suchergebnisseiten verwendet. Gehen wir eine Übung durch, um dies zu untersuchen:

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Zeigen Sie den Quelltext der Seite an (klicken Sie mit der rechten Maustaste auf die Seite und wählen Sie im Kontextmenü _Seitenquelltext anzeigen_).
3. Suchen Sie das description-meta-Tag. Es wird ungefähr so aussehen (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun in Ihrer bevorzugten Suchmaschine nach „MDN Web Docs“ (wir haben Google verwendet). Sie werden feststellen, dass der Inhalt des `<meta>`-Elements description und des Elements `<title>` im Suchergebnis verwendet wird — auf jeden Fall sinnvoll!

   ![Ein Yahoo-Suchergebnis für „Mozilla Developer Network“.](mdn-search-result.png)

> [!NOTE]
> In Google sehen Sie einige relevante Unterseiten von MDN Web Docs unterhalb des Hauptlinks zur Startseite — diese werden als Sitelinks bezeichnet und können in den [Webmaster-Tools von Google](https://search.google.com/search-console/about?hl=en) konfiguriert werden — eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden nicht mehr verwendet. Beispielsweise wird das `<meta>`-Element für Schlüsselwörter (`<meta name="keywords" content="fill, in, your, keywords, here">`), das Schlüsselwörter bereitstellen soll, damit Suchmaschinen die Relevanz einer Seite für verschiedene Suchbegriffe ermitteln können, von Suchmaschinen ignoriert. Denn Spammer füllten die Schlüsselwortliste einfach mit Hunderten von Schlüsselwörtern und verzerrten dadurch die Ergebnisse.

### Andere Arten von Metadaten

Wenn Sie im Web unterwegs sind, werden Sie auch auf andere Arten von Metadaten stoßen. Viele der Funktionen, die Sie auf Websites sehen, sind proprietäre Entwicklungen, die bestimmten Websites (etwa sozialen Netzwerken) spezifische Informationen bereitstellen sollen, die sie verwenden können.

Beispielsweise ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das Facebook erfunden hat, um Websites umfangreichere Metadaten bereitzustellen. Im Quellcode von MDN Web Docs finden Sie Folgendes:

```html
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both websites
and HTML Apps." />
<meta property="og:title" content="Mozilla Developer Network" />
```

Dies hat unter anderem zur Folge, dass ein Link zu MDN Web Docs auf Facebook zusammen mit einem Bild und einer Beschreibung erscheint: eine umfangreichere Erfahrung für die Nutzenden.

![Open-Graph-Protokolldaten von der MDN-Startseite, wie sie auf Facebook angezeigt werden, mit Bild, Titel und Beschreibung.](facebook-output.png)

## Benutzerdefinierte Icons zu Ihrer Website hinzufügen

Um das Design Ihrer Website weiter zu bereichern, können Sie in Ihren Metadaten Verweise auf benutzerdefinierte Icons hinzufügen. Diese werden dann in bestimmten Kontexten angezeigt. Am häufigsten verwendet wird das **favicon** (Kurzform für „favorites icon“, was sich auf seine Verwendung in den „Favoriten“- oder „Lesezeichenlisten“ in Browsern bezieht).

Das bescheidene favicon gibt es schon seit vielen Jahren. Es ist das erste Icon dieses Typs: ein quadratisches Icon mit 16 Pixeln, das an mehreren Stellen verwendet wird. Je nach Browser werden Favicons im Browser-Tab jeder geöffneten Seite und neben als Lesezeichen gespeicherten Seiten im Lesezeichenbereich angezeigt.

![Ein schematisches Browserfenster mit zwei Tabs, die jeweils links vom Seitentitel ein Favicon enthalten: das MDN-Logo im aktiven Tab „MDN Web Docs“ und ein Buch-Icon im Tab „Another page“.](favicon.svg)

Ein favicon kann wie folgt zu Ihrer Seite hinzugefügt werden:

1. Speichern Sie es in einem unterstützten Format wie `.ico`, `.gif` oder `.png` an einer Stelle in der Ordnerstruktur Ihrer Website.
2. Fügen Sie in den {{HTMLElement("head")}}-Block Ihres HTML ein Element {{htmlelement("link")}} ein, das auf den Pfad zur favicon-Datei verweist:

   ```html
   <link rel="icon" href="/favicon.ico" type="image/x-icon" />
   ```

> [!NOTE]
> In diesem Beispiel beginnt der Pfad zur favicon-Datei mit `/`, was bedeutet: „Suche die Datei im obersten Verzeichnis (oder _root_-Verzeichnis) Ihrer Website.“ Je nachdem, welches System Sie zum Erstellen Ihrer Website verwenden, kann sich dies an einer anderen Stelle im Quellcode befinden: Webframeworks reservieren häufig einen speziellen Ordner für Dateien im Stammverzeichnis der Website, beispielsweise `static` oder `public`.
>
> Machen Sie sich vorerst nicht zu viele Gedanken über die Details von Dateipfaden; Sie werden später mehr darüber lernen (sehen Sie sich [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) an, wenn Sie neugierig sind).
>
> Die meisten Browser und Softwareanwendungen verwenden heutzutage automatisch eine im Stammverzeichnis der Website gefundene Datei `favicon.ico` als favicon. Daher machen sich viele Websites nicht einmal die Mühe, das Element `<link>` einzufügen. Ein explizites Element ist dennoch nützlich, falls Sie Ihre favicon-Datei an einer anderen Stelle speichern möchten.

Hier ist ein Beispiel für ein favicon in einem Lesezeichenbereich:

![Der Firefox-Lesezeichenbereich mit einem als Lesezeichen gespeicherten Beispiel, neben dem ein favicon angezeigt wird.](bookmark-favicon.png)

Möglicherweise möchten Sie auch unterschiedliche Icons für verschiedene Kontexte einbinden. Zum Beispiel:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Auf diese Weise zeigt die Website ein Icon an, wenn sie auf dem Home-Bildschirm eines Apple-Geräts gespeichert wird. Sie möchten möglicherweise sogar unterschiedliche Icons für verschiedene Geräte bereitstellen, damit das Icon auf allen Geräten gut aussieht. Zum Beispiel:

```html
<!-- iPad Pro with high-resolution Retina display: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- 3x resolution iPhone: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- non-Retina iPad, iPad mini, etc.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- 2x resolution iPhone and other devices: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- basic favicon -->
<link rel="icon" href="/favicon.ico" />
```

Die Kommentare erklären, wofür jedes Icon verwendet wird — diese Elemente decken beispielsweise die Bereitstellung eines hochauflösenden Icons ab, das verwendet wird, wenn die Website auf dem Home-Bildschirm eines iPad gespeichert wird.

Machen Sie sich jetzt nicht zu viele Gedanken darüber, all diese Icon-Typen zu implementieren — dies ist eine recht fortgeschrittene Funktion, und Sie müssen dies nicht wissen, um im Kurs voranzukommen. Der Hauptzweck besteht hier darin, Sie darüber zu informieren, was solche Dinge sind, falls Sie ihnen beim Durchsuchen des Quellcodes anderer Websites begegnen. Wenn Sie mehr über all diese Werte und deren Auswahl erfahren möchten, lesen Sie die Referenzseite zum Element {{HTMLElement("link")}}.

## CSS und JavaScript auf HTML anwenden

Fast alle Websites, die Sie heutzutage verwenden, setzen {{Glossary("CSS", "CSS")}} ein, damit sie gut aussehen, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionen wie Videoplayer, Karten, Spiele und mehr bereitzustellen. Diese werden meist mithilfe des Elements {{htmlelement("link")}} beziehungsweise des Elements {{htmlelement("script")}} auf eine Webseite angewendet.

- Das Element {{htmlelement("link")}} sollte immer im head Ihres Dokuments stehen. Es verwendet die zwei Attribute `rel="stylesheet"`, das angibt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das Element {{htmlelement("script")}} sollte ebenfalls in den head eingefügt werden und ein Attribut `src` enthalten, das den Pfad zum JavaScript angibt, das Sie laden möchten, sowie `defer` (ein [boolesches Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)). Dieses weist den Browser an, das JavaScript zu laden, nachdem die Seite das Parsen des HTML abgeschlossen hat. Das Attribut `defer` ist nützlich, da es garantiert, dass das HTML vollständig geladen ist, bevor das JavaScript ausgeführt wird. So vermeiden Sie Fehler, weil JavaScript versucht, auf ein HTML-Element zuzugreifen, das auf der Seite noch nicht existiert. Es gibt [mehrere Möglichkeiten](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), das Laden von JavaScript auf Ihrer Seite zu handhaben, aber dies ist die zuverlässigste Methode für moderne Browser.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das Element `<script>` sieht möglicherweise wie ein {{Glossary("void_element", "leeres Element")}} aus, ist es aber nicht und benötigt daher ein schließendes Tag. Anstatt auf eine externe Skriptdatei zu verweisen, können Sie Ihr Skript auch innerhalb des Elements `<script>` einfügen.

### Sie sind dran: CSS und JavaScript auf eine Seite anwenden

1. Laden Sie zu Beginn dieser Übung Kopien unserer Dateien [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) herunter und speichern Sie sie auf Ihrem lokalen Computer im selben Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateierweiterungen gespeichert werden.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie anhand der oben gegebenen Informationen Elemente {{htmlelement("link")}} und {{htmlelement("script")}} zu Ihrem HTML hinzu, sodass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn alles korrekt ausgeführt wurde, sollten Sie nach dem Speichern Ihres HTML und dem Aktualisieren Ihres Browsers sehen können, dass sich etwas geändert hat:

![Beispiel einer Seite, auf die CSS und JavaScript angewendet wurden. CSS hat die Seite grün gestaltet, während JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie nun irgendwo außerhalb der Liste klicken, erscheint ein Dialogfeld, in dem Sie Text für ein neues Listenelement eingeben sollen. Wenn Sie auf die Schaltfläche OK klicken, wird der Liste ein neues Listenelement mit diesem Text hinzugefügt. Wenn Sie auf ein vorhandenes Listenelement klicken, erscheint ein Dialogfeld, mit dem Sie den Text des Elements ändern können.
- Das CSS hat den Hintergrund grün und den Text größer gemacht. Es hat außerdem einige der Inhalte gestaltet, die JavaScript zur Seite hinzugefügt hat (der rote Balken mit dem schwarzen Rahmen ist die Gestaltung, die CSS der von JS erzeugten Liste hinzugefügt hat).

> [!NOTE]
> Falls Sie bei dieser Übung nicht weiterkommen und CSS/JS nicht angewendet wird, sehen Sie sich unsere Beispielseite [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) an.

## Die primäre Sprache des Dokuments festlegen

Abschließend ist es erwähnenswert, dass Sie die Sprache Ihrer Seite festlegen können (und wirklich sollten). Dies kann durch Hinzufügen des [Attributs lang](/de/docs/Web/HTML/Reference/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie in [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) zu sehen und unten dargestellt).

```html
<html lang="en-US">
  …
</html>
```

Dies ist in vielerlei Hinsicht nützlich. Ihr HTML-Dokument wird von Suchmaschinen effektiver indexiert, wenn seine Sprache festgelegt ist (sodass es beispielsweise korrekt in sprachspezifischen Ergebnissen erscheinen kann), und es ist für Menschen mit Sehbeeinträchtigungen hilfreich, die Screenreader verwenden (beispielsweise existiert das Wort „six“ sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments als verschiedene Sprachen erkennen lassen. Beispielsweise könnten wir unseren Abschnitt in japanischer Sprache wie folgt als Japanisch kennzeichnen:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes werden durch den Standard [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) definiert. Weitere Informationen dazu finden Sie unter [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/).

## Zusammenfassung

Damit endet unsere kurze Tour durch den HTML-head — Sie können hier noch viel mehr tun, aber eine vollständige Tour wäre an dieser Stelle langweilig und verwirrend gewesen, und wir wollten Ihnen zunächst nur eine Vorstellung von den häufigsten Dingen geben, die Sie dort finden werden! Im nächsten Artikel beschäftigen wir uns mit [Überschriften und Absätzen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs).

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
