---
title: Was ist im Head? Metadaten einer Webseite
short-title: Metadaten einer Webseite
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "Head")}} eines HTML-Dokuments ist der Teil, der nicht im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadaten wie den {{htmlelement("title")}} der Seite, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie sich entscheiden, Ihren HTML-Inhalt mit CSS zu gestalten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie der Autor und wichtige Keywords, die das Dokument beschreiben).

Webbrowser verwenden die Informationen im {{Glossary("Head", "Head")}}, um das HTML-Dokument korrekt darzustellen. In diesem Artikel behandeln wir all das und mehr, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im vorherigen Abschnitt behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der HTML-Head und seine Funktion als Metadatenspeicher des Dokuments.</li>
          <li>Festlegen der Zeichencodierung und des Titels des Dokuments.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verknüpfung zu Symbolen für die Verwendung in Browsern und auf mobilen Plattformen.</li>
          <li>Verknüpfung zu Stylesheets und Skriptdateien.</li>
          <li>Die Notwendigkeit, die Sprache eines Dokuments mit dem <code>lang</code>-Attribut im öffnenden <code>&lt;html&gt;</code>-Tag festzulegen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Head?

Lassen Sie uns das einfache [HTML-Dokument aus dem vorherigen Artikel](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document) erneut betrachten:

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

Der HTML-Head ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zum Inhalt des {{htmlelement("body")}}-Elements (das auf der Seite angezeigt wird, wenn es im Browser geladen wird), wird der Inhalt des Heads nicht auf der Seite angezeigt. Stattdessen hat der Head die Aufgabe, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der Head ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

In größeren Seiten kann der Head jedoch ziemlich groß werden. Versuchen Sie, ein paar Ihrer Lieblingswebsites zu besuchen und nutzen Sie die [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um deren Head-Inhalte zu überprüfen. Unser Ziel hier ist nicht, Ihnen zu zeigen, wie man alles benutzt, was man möglicherweise in den Head einfügen kann, sondern Ihnen beizubringen, wie man die wichtigsten Elemente verwendet, die Sie in den Head einfügen möchten, und Ihnen etwas Vertrautheit zu geben. Lassen Sie uns beginnen.

## Einen Titel hinzufügen

Wir haben bereits gesehen, wie das {{htmlelement("title")}}-Element in Aktion tritt — dies kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, welches verwendet wird, um eine Überschrift auf oberster Ebene zu Ihrem Textinhalt hinzuzufügen — dies wird manchmal auch als Seitentitel bezeichnet. Aber sie sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn es im Browser geladen wird — es sollte im Allgemeinen einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu markieren (den Titel der Geschichte, die Schlagzeile der Nachricht oder was auch immer für Ihre Verwendung angemessen ist).
- Das {{htmlelement("title")}}-Element ist ein Metadaten, das den Titel des gesamten HTML-Dokuments darstellt (nicht den Inhalt des Dokuments).

### Aktives Lernen: Ein Beispiel untersuchen

1. Um mit diesem aktiven Lernen zu beginnen, möchten wir, dass Sie unser GitHub-Repository besuchen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, entweder

   1. Kopieren Sie den Code aus der Seite und fügen Sie ihn in eine neue Textdatei in Ihrem Code-Editor ein, dann speichern Sie ihn an einem sinnvollen Ort.
   2. Drücken Sie die "Raw"-Schaltfläche auf der GitHub-Seite, was dazu führt, dass der rohe Code erscheint (möglicherweise in einem neuen Browser-Tab). Wählen Sie dann das Menü Ihres Browsers _Seite speichern unter..._ und wählen Sie einen sinnvollen Speicherort für die Datei.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas sehen wie:

   ![Eine Webseite mit 'title'-Text im Browser-Tab und 'h1'-Text als Seitenüberschrift im Dokumentenkörper.](title-example.png)

   Es sollte jetzt völlig offensichtlich sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, den Inhalt dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie Spaß damit.

Der Inhalt des `<title>`-Elements wird auch auf andere Weise verwendet. Wenn Sie beispielsweise versuchen, die Seite zu bookmarken (_Lesezeichen > Diese Seite bookmarken_ oder das Stern-Symbol in der URL-Leiste in Firefox), sehen Sie den `<title>`-Inhalt als vorgeschlagenen Bookmark-Namen ausgefüllt.

![Eine Webseite wird in Firefox mit einem Lesezeichen versehen. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt](bookmark-example.png)

Der `<title>`-Inhalt wird auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Methode, Metadaten zu einem Dokument hinzuzufügen — das {{htmlelement("meta")}}-Element. Natürlich könnte man den anderen Kram, den wir in diesem Artikel besprechen, auch als Metadaten betrachten. Es gibt viele verschiedene Typen von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können, aber wir werden nicht versuchen, sie alle in diesem Stadium zu erklären, da es einfach zu verwirrend wäre. Stattdessen erklären wir ein paar Dinge, die Sie möglicherweise häufig sehen, nur um Ihnen eine Vorstellung zu geben.

### Die Zeichencodierung Ihres Dokuments angeben

Im obigen Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichencodierung des Dokuments an — die Zeichensatz, die das Dokument verwenden darf. `utf-8` ist ein universeller Zeichensatz, der so ziemlich jedes Zeichen aus jeder menschlichen Sprache enthält. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache anzuzeigen; es ist daher eine gute Idee, dies auf jeder Webseite, die Sie erstellen, zu setzen! Zum Beispiel könnte Ihre Seite sowohl Englisch als auch Japanisch problemlos darstellen:

![Eine Webseite mit englischen und japanischen Zeichen, die Zeichencodierung ist auf universell oder utf-8 gesetzt. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` setzen (den Zeichensatz für das lateinische Alphabet), könnte Ihr Seitenrendering völlig durcheinander erscheinen:

![Eine Webseite mit englischen und japanischen Zeichen, die Zeichencodierung ist auf lateinisch gesetzt. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren automatisch falsche Kodierungen, sodass Sie je nach verwendetem Browser dieses Problem möglicherweise nicht sehen. Sie sollten dennoch eine Kodierung von `utf-8` auf Ihrer Seite einstellen, um potenzielle Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Mit Zeichencodierung experimentieren

Um dies auszuprobieren, kehren Sie zur einfachen HTML-Vorlage zurück, die Sie im vorherigen Abschnitt zu `<title>` erhalten haben (die [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)). Versuchen Sie, den Wert des Meta-Zeichensatzes auf `ISO-8859-1` zu ändern, und fügen Sie das Japanische zu Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Hinzufügen eines Autors und einer Beschreibung

Viele `<meta>`-Elemente enthalten `name`- und `content`-Attribute:

- `name` gibt an, um welche Art von Meta-Element es sich handelt; welche Art von Information es enthält.
- `content` gibt den tatsächlichen Meta-Inhalt an.

Zwei solche Meta-Elemente, die nützlich sind, um sie auf Ihrer Seite aufzunehmen, definieren den Autor der Seite und liefern eine prägnante Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Das Angeben eines Autors ist in vielerlei Hinsicht vorteilhaft: Es ist nützlich, zu verstehen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und sie kontaktieren möchten. Einige Content-Management-Systeme haben Einrichtungen, um automatisch Informationen über den Autor der Seite zu extrahieren und sie für solche Zwecke verfügbar zu machen.

Das Angeben einer Beschreibung, die Schlüsselwörter enthält, die mit dem Inhalt Ihrer Seite in Zusammenhang stehen, ist nützlich, da sie potenziell dazu führen kann, dass Ihre Seite in relevanten Suchanfragen in Suchmaschinen höher erscheint (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}} oder {{Glossary("SEO", "SEO")}} bezeichnet).

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf den Ergebnisseiten von Suchmaschinen verwendet. Gehen wir durch eine Übung, um dies zu erkunden.

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Sehen Sie sich den Quelltext der Seite an (klicken Sie mit der rechten Maustaste auf die Seite und wählen Sie _Seitenquelltext anzeigen_ aus dem Kontextmenü).
3. Finden Sie das Description-Meta-Tag. Es wird in etwa so aussehen (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun in Ihrer bevorzugten Suchmaschine nach "MDN Web Docs" (wir haben Google verwendet). Sie werden den Content des Beschreibung-`<meta>`- und `<title>`-Elements im Suchergebnis bemerken — definitiv wertvoll zu haben!

   ![Ein Yahoo-Suchergebnis nach "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google sehen Sie einige relevante Unterseiten von MDN Web Docs, die unter dem Hauptlink zur Startseite aufgelistet sind — diese werden als Sitelinks bezeichnet und sind in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=en) konfigurierbar — eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden einfach nicht mehr verwendet. Zum Beispiel wird das Keyword-`<meta>`-Element (`<meta name="keywords" content="füllen Sie, Ihre, Schlüsselwörter, hier ein">`) — das dazu dienen sollte, Suchmaschinen relevante Schlüsselwörter zur Bestimmung der Relevanz der Seite für verschiedene Suchbegriffe bereitzustellen — von Suchmaschinen ignoriert, weil Spammer die Liste der Schlüsselwörter mit Hunderten von Schlüsselwörtern füllten und Ergebnisse verfälschten.

### Andere Arten von Metadaten

Wenn Sie im Web unterwegs sind, stoßen Sie auch auf andere Arten von Metadaten. Viele der Funktionen, die Sie auf Webseiten sehen, sind proprietäre Kreationen, die entwickelt wurden, um bestimmten Websites (wie sozialen Netzwerken) bestimmte Informationen bereitzustellen, die sie verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das von Facebook erfunden wurde, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode der MDN Web Docs finden Sie dies:

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

Eine Auswirkung davon ist, dass, wenn Sie auf Facebook auf MDN Web Docs verlinken, der Link zusammen mit einem Bild und einer Beschreibung angezeigt wird: eine reichere Erfahrung für die Nutzer.

![Open Graph Protokoll-Daten von der MDN-Homepage, wie sie auf Facebook angezeigt werden, mit einem Bild, Titel und einer Beschreibung.](facebook-output.png)

## Hinzufügen von benutzerdefinierten Symbolen zu Ihrer Website

Um Ihr Seitendesign weiter zu bereichern, können Sie in Ihren Metadaten auf benutzerdefinierte Symbole verweisen, die in bestimmten Kontexten angezeigt werden. Das am häufigsten verwendete ist das **Favicon** (kurz für "Favoritensymbol", in Bezug auf dessen Verwendung in den "Favoriten"- oder "Lesezeichenlisten" in Browsern).

Das bescheidene Favicon gibt es seit vielen Jahren. Es ist das erste Symbol dieser Art: ein 16-Pixel großes quadratisches Symbol, das an mehreren Stellen verwendet wird. Je nach Browser können Favicons im Browser-Tab enthalten sein, in dem jede geöffnete Seite angezeigt wird, und neben Lesezeichenseiten im Lesezeichen-Bereich.

Ein Favicon kann Ihrer Seite hinzugefügt werden, indem Sie:

1. Es im selben Verzeichnis wie die Indexseite der Website speichern, im `.ico`-Format gespeichert (die meisten unterstützen auch Favicons in gebräuchlicheren Formaten wie `.gif` oder `.png`)
2. Dem HTML-{{HTMLElement("head")}}-Block die folgende Zeile hinzufügen, um darauf zu verweisen:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel für ein Favicon im Lesezeichen-Bereich:

![Der Firefox-Lesezeichenbereich zeigt ein Lesezeichenbeispiel mit einem nebenstehenden Favicon.](bookmark-favicon.png)

Möglicherweise benötigen Sie auch verschiedene Symbole für unterschiedliche Kontexte. Zum Beispiel finden Sie dies im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, um sicherzustellen, dass die Site ein Symbol anzeigt, wenn sie auf dem Home-Bildschirm eines Apple-Geräts gespeichert wird. Möglicherweise möchten Sie sogar unterschiedliche Symbole für unterschiedliche Geräte bereitstellen, um sicherzustellen, dass das Symbol auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Symbol verwendet wird — diese Elemente decken Dinge wie das Bereitstellen eines schönen hochauflösenden Symbols ab, das verwendet wird, wenn die Website auf dem Home-Bildschirm eines iPads gespeichert wird.

Machen Sie sich jetzt keine großen Gedanken darüber, all diese Arten von Symbolen zu implementieren — dies ist ein ziemlich fortgeschrittenes Feature, und von Ihnen wird nicht erwartet, dass Sie dieses Wissen haben, um im Kurs Fortschritte zu machen. Das Hauptziel hier ist es, dass Sie wissen, was solche Dinge sind, falls Sie sie beim Sichten des Quellcodes anderer Websites entdecken. Wenn Sie mehr über all diese Werte erfahren möchten und wie Sie sie auswählen, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Site eine Content Security Policy (CSP) verwendet, um ihre Sicherheit zu erhöhen, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, vergewissern Sie sich, dass der {{HTTPHeader("Content-Security-Policy")}}-Header's [`img-src` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.

## Anwendung von CSS und JavaScript auf HTML

Nahezu alle modernen Websites verwenden {{Glossary("CSS", "CSS")}}, um sie attraktiv zu gestalten, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionen wie Videoplayer, Karten, Spiele und mehr zu betreiben. Diese werden mit dem {{htmlelement("link")}}-Element bzw. dem {{htmlelement("script")}}-Element auf einer Webseite angewendet.

- Das {{htmlelement("link")}}-Element sollte immer in den Kopf Ihres Dokuments gehen. Es benötigt zwei Attribute, `rel="stylesheet"`, was angibt, dass es das Stylesheet des Dokuments ist, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den Kopf eingefügt werden und ein `src`-Attribut enthalten, das den Pfad zu dem JavaScript enthält, das Sie laden möchten, und `defer` (ein [boolesches Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)), das den Browser anweist, das JavaScript zu laden, nachdem die Seite das HTML geparst hat. Das `defer`-Attribut ist nützlich, da es garantiert, dass das HTML vollständig geladen ist, bevor das JavaScript ausgeführt wird, damit keine Fehler auftreten, weil das JavaScript versucht, auf ein HTML-Element zuzugreifen, das auf der Seite noch nicht existiert. Es gibt [verschiedene Möglichkeiten](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), um das Laden von JavaScript auf Ihrer Seite zu handhaben, aber dies ist die zuverlässigste Methode für moderne Browser.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element sieht zwar aus wie ein {{Glossary("void_element", "leeres Element")}}, ist es jedoch nicht, und benötigt daher ein schließendes Tag. Anstatt auf eine externe Skriptdatei zu verweisen, können Sie Ihr Skript auch innerhalb des `<script>`-Elements platzieren.

### Aktives Lernen: Anwendung von CSS und JavaScript auf eine Seite

1. Um dieses aktive Lernen zu starten, besorgen Sie sich eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) Dateien und speichern Sie sie auf Ihrem lokalen Computer im selben Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateierweiterungen gespeichert werden.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser, als auch in Ihrem Texteditor.
3. Folgen Sie den oben gegebenen Informationen und fügen Sie {{htmlelement("link")}}- und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, sodass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn dies korrekt durchgeführt wurde, sollten Sie beim Speichern Ihres HTMLs und Aktualisieren Ihres Browsers sehen können, dass sich Dinge geändert haben:

![Beispiel zeigt eine Seite mit angewendetem CSS und JavaScript. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Jetzt, wenn Sie irgendwo außerhalb der Liste klicken, wird ein Dialogfeld geöffnet, das Sie auffordert, Text für ein neues Listenelement einzugeben. Wenn Sie die OK-Schaltfläche drücken, wird der Liste ein neues Listenelement hinzugefügt, das den Text enthält. Wenn Sie auf ein vorhandenes Listenelement klicken, wird ein Dialogfeld geöffnet, das Ihnen ermöglicht, den Text des Elements zu ändern.
- Das CSS hat bewirkt, dass der Hintergrund grün wird und der Text größer wird. Es hat auch einige vom JavaScript zur Seite hinzugefügten Inhalte gestylt (der rote Balken mit dem schwarzen Rand ist das Styling, das das CSS zur vom JS generierten Liste hinzugefügt hat.)

> [!NOTE]
> Wenn Sie in dieser Übung stecken bleiben und das CSS/JS nicht anwenden können, versuchen Sie unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispielseite anzusehen.

## Festlegen der primären Sprache des Dokuments

Abschließend sei erwähnt, dass Sie die Sprache Ihrer Seite festlegen können (und wirklich sollten). Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie in der [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) und unten gezeigt).

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf viele Arten nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indexiert, wenn seine Sprache festgelegt ist (sodass es beispielsweise korrekt in sprachspezifischen Ergebnissen erscheint), und es ist nützlich für Menschen mit Sehbehinderungen, die Bildschirmleser verwenden (zum Beispiel existiert das Wort "six" sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen.)

Sie können auch Teilbereiche Ihres Dokuments so einstellen, dass sie als andere Sprachen erkannt werden. Beispielsweise könnten wir unseren japanischen Sprachabschnitt als Japanisch erkennen lassen, so:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind in der [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) Norm definiert. Weitere Informationen darüber finden Sie in [Sprachtags in HTML und XML](https://www.w3.org/International/articles/language-tags/).

## Zusammenfassung

Das markiert das Ende unserer Schnellführung durch den HTML-Head — es gibt noch viel mehr, das man hier tun kann, aber eine erschöpfende Führung wäre auf diesem Niveau langweilig und verwirrend, und wir wollten Ihnen vorerst eine Vorstellung von den gebräuchlichsten Dingen geben, die Sie hier finden werden! Im nächsten Artikel werden wir uns mit [Überschriften und Absätzen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) befassen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
