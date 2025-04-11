---
title: Was befindet sich im Kopf? Metadaten von Webseiten
short-title: Metadaten von Webseiten
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "Kopf")}} eines HTML-Dokuments ist der Teil, der im Webbrowser nicht angezeigt wird, wenn die Seite geladen wird. Er enthält Metadaten-Informationen wie den Seitentitel {{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (falls Sie Ihre HTML-Inhalte mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Informationen über das HTML, wie Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden die im {{Glossary("Head", "Kopf")}} enthaltenen Informationen, um das HTML-Dokument korrekt darzustellen. In diesem Artikel werden wir auf all diese Punkte und mehr eingehen, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu bieten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in der vorherigen Lektion behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der HTML-Kopf und seine Funktion als Metadaten-Container für das Dokument.</li>
          <li>Festlegen der Zeichenkodierung und des Titels des Dokuments.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verlinkung von Symbolen zur Verwendung in Browsern und mobilen Plattformen.</li>
          <li>Verlinkung zu Stylesheets und Skriptdateien.</li>
          <li>Die Notwendigkeit, die Sprache eines Dokuments mithilfe des <code>lang</code>-Attributs im öffnenden <code>&lt;html&gt;</code>-Tag festzulegen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Kopf?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben,](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document) erneut betrachten:

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

Der HTML-Kopf ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zum Inhalt des {{htmlelement("body")}}-Elements (der auf der Seite angezeigt wird, wenn er in einem Browser geladen wird) wird der Inhalt des Kopfes nicht auf der Seite angezeigt. Stattdessen besteht die Aufgabe des Kopfes darin, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der Kopf ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Bei größeren Seiten kann der Kopf jedoch ziemlich groß werden. Versuchen Sie, einige Ihrer Lieblingswebsites zu besuchen und verwenden Sie die [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um deren Kopf-Inhalte zu überprüfen. Unser Ziel hier ist es nicht, Ihnen zu zeigen, wie Sie alles verwenden können, was möglicherweise in den Kopf eingefügt werden kann, sondern vielmehr Ihnen beizubringen, wie man die wichtigsten Elemente verwendet, die Sie in den Kopf aufnehmen möchten, und Ihnen etwas Vertrautheit zu geben. Beginnen wir.

## Hinzufügen eines Titels

Wir haben das {{htmlelement("title")}}-Element bereits in Aktion gesehen – dies kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um eine Hauptüberschrift zu Ihrem Inhaltskörper hinzuzufügen – dies wird manchmal auch als Seitentitel bezeichnet. Aber sie sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn es im Browser geladen wird – im Allgemeinen sollte es einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts (den Geschichtentitel, die Nachrichtenschlagzeile oder was auch immer für Ihre Verwendung geeignet ist) zu kennzeichnen.
- Das {{htmlelement("title")}}-Element ist ein Metadatum, das den Titel des gesamten HTML-Dokuments (nicht den des Dokumentsinhalts) repräsentiert.

### Aktives Lernen: Untersuchen eines Beispiels

1. Um mit diesem aktiven Lernen zu beginnen, möchten wir, dass Sie zu unserem GitHub-Repo gehen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, entweder

   1. Kopieren und fügen Sie den Code aus der Seite in eine neue Textdatei in Ihrem Code-Editor ein und speichern Sie ihn an einem sinnvollen Ort.
   2. Drücken Sie die "Raw"-Schaltfläche auf der GitHub-Seite, wodurch der rohe Code (möglicherweise in einem neuen Browser-Tab) erscheint. Wählen Sie anschließend das Menü _Seite speichern unter..._ Ihres Browsers und wählen Sie einen sinnvollen Speicherort für die Datei.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas sehen wie:

   ![Eine Webseite mit 'title'-Text im Browsertab und 'h1'-Text als Seitenüberschrift im Dokumentkörper.](title-example.png)

   Es sollte nun völlig klar sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, den Inhalt dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie etwas Spaß damit.

Der Inhalt des `<title>`-Elements wird auch anderweitig verwendet. Zum Beispiel, wenn Sie versuchen, die Seite zu bookmarken (_Lesezeichen > Diese Seite bookmarken_ oder das Sternsymbol in der URL-Leiste in Firefox), sehen Sie den `<title>`-Inhalt als vorgeschlagenen Lesezeichennamen ausgefüllt.

![Eine Webseite wird in Firefox gebookmarkt. Der Lesezeichenname ist automatisch mit dem Inhalt des 'title'-Elements ausgefüllt.](bookmark-example.png)

Der `<title>`-Inhalt wird auch in Suchergebnissen verwendet, wie unten beschrieben.

## Metadaten: Das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML bietet eine "offizielle" Möglichkeit, Metadaten zu einem Dokument hinzuzufügen – das {{htmlelement("meta")}}-Element. Natürlich könnten die anderen Dinge, die wir in diesem Artikel besprechen, ebenfalls als Metadaten betrachtet werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können, aber wir werden nicht versuchen, sie alle an dieser Stelle zu erklären, da es einfach zu verwirrend werden würde. Stattdessen werden wir einige Dinge erklären, die Sie möglicherweise häufig sehen, um Ihnen eine Vorstellung davon zu geben.

### Festlegen der Zeichenkodierung Ihres Dokuments

Im obigen Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichenkodierung des Dokuments an – den Zeichensatz, den das Dokument verwenden darf. `utf-8` ist ein universeller Zeichensatz, der praktisch jedes Zeichen aus jeder menschlichen Sprache umfasst. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache richtig anzuzeigen; es ist daher eine gute Idee, dies auf jeder Webseite, die Sie erstellen, festzulegen! Beispielsweise könnte Ihre Seite sowohl Englisch als auch Japanisch problemlos anzeigen:

![Eine Webseite, die englische und japanische Zeichen enthält, mit der Zeichenkodierung 'utf-8'. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichenkodierung beispielsweise auf `ISO-8859-1` festlegen (den Zeichensatz für das lateinische Alphabet), kann Ihre Seitenanzeige stark gestört erscheinen:

![Eine Webseite, die englische und japanische Zeichen enthält, mit der Zeichenkodierung 'latin'. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren automatisch falsche Kodierungen, sodass Sie je nach verwendetem Browser dieses Problem möglicherweise nicht sehen. Sie sollten auf Ihrer Seite dennoch eine Kodierung von `utf-8` festlegen, um mögliche Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Experimentieren mit der Zeichenkodierung

Um dies auszuprobieren, besuchen Sie die einfache HTML-Vorlage, die Sie im vorherigen Abschnitt zu `<title>` erhalten haben (die [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), ändern Sie den Wert der Meta-Zeichenkodierung auf `ISO-8859-1`, und fügen Sie Japanisch zu Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Hinzufügen eines Autors und einer Beschreibung

Viele `<meta>`-Elemente enthalten die Attribute `name` und `content`:

- `name` gibt den Typ des Meta-Elements an; welche Art von Informationen es enthält.
- `content` gibt den tatsächlichen Metainhalt an.

Zwei solche Meta-Elemente, die nützlich sind, auf Ihrer Seite einzufügen, definieren den Autor der Seite und liefern eine prägnante Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Die Angabe eines Autors ist in vielerlei Hinsicht vorteilhaft: Es ist nützlich, zu wissen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und Sie sich an ihn wenden möchten. Einige Content-Management-Systeme verfügen über Funktionen, um automatisch Informationen über den Seitenautor zu extrahieren und für solche Zwecke verfügbar zu machen.

Die Angabe einer Beschreibung, die Schlüsselwörter in Bezug auf den Inhalt Ihrer Seite enthält, ist nützlich, da sie das Potenzial hat, Ihre Seite in relevanten Suchergebnissen in Suchmaschinen höher erscheinen zu lassen (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}} oder {{Glossary("SEO", "SEO")}} bezeichnet).

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch in Suchmaschinenergebnis-Seiten verwendet. Lassen Sie uns eine Übung durchgehen, um dies zu erkunden

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Sehen Sie sich den Quellcode der Seite an (Rechtsklick auf die Seite, wählen Sie _Seitenquelltext anzeigen_ im Kontextmenü).
3. Finden Sie das Description-Meta-Tag. Es wird ungefähr so aussehen (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun nach "MDN Web Docs" in Ihrer bevorzugten Suchmaschine (Wir haben Google verwendet). Sie werden das `<meta>` und `<title>` Elementeninhalt im Suchergebnis bemerken – definitiv eine lohnenswerte Maßnahme!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden Sie einige relevante Unterseiten von MDN Web Docs unterhalb des Haupt-Homepage-Links aufgelistet sehen – diese werden als sitelinks bezeichnet und sind in [Google's webmaster tools](https://search.google.com/search-console/about?hl=en) konfigurierbar – eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden heutzutage einfach nicht mehr verwendet. Zum Beispiel wird das Schlüsselwort-`<meta>`-Element (`<meta name="keywords" content="füllen, sie, hier, ihre, keywords, ein">`) – das dazu gedacht ist, Suchmaschinen die Relevanz dieser Seite für verschiedene Suchbegriffe zu bestimmen – von Suchmaschinen ignoriert, weil Spammer die Keyword-Liste einfach mit Hunderten von Schlüsselwörtern gefüllt haben, um die Ergebnisse zu verfälschen.

### Andere Arten von Metadaten

Wenn Sie im Internet unterwegs sind, werden Sie auch andere Arten von Metadaten finden. Viele der Funktionen, die Sie auf Websites sehen, sind proprietäre Kreationen, die bestimmten Seiten (wie sozialen Netzwerken) Informationen bereitstellen, die sie verwenden können.

Ein Beispiel hierfür ist [Open Graph Data](https://ogp.me/), ein Metadatenprotokoll, das Facebook erfunden hat, um reichere Metadaten für Websites bereitzustellen. Im Quellcode der MDN Web Docs finden Sie Folgendes:

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

Ein Effekt davon ist, dass wenn Sie einen Link zu MDN Web Docs auf Facebook teilen, der Link zusammen mit einem Bild und einer Beschreibung erscheint: ein reichhaltigeres Erlebnis für die Benutzer.

![Open Graph Protocol-Daten von der MDN-Homepage wie auf Facebook angezeigt, mit einem Bild, Titel und Beschreibung.](facebook-output.png)

## Hinzufügen benutzerdefinierter Symbole zu Ihrer Seite

Um Ihre Seitengestaltung weiter zu bereichern, können Sie in Ihren Metadaten Verweise auf benutzerdefinierte Symbole hinzufügen, und diese werden in bestimmten Kontexten angezeigt. Das am häufigsten verwendete dieser Symbole ist das **Favicon** (eine Abkürzung für "Favoriten-Symbol", was sich auf seine Verwendung in den Favoriten- oder Lesezeichenlisten in Browsern bezieht).

Das bescheidene Favicon gibt es seit vielen Jahren. Es ist das erste Symbol dieser Art: ein 16-Pixel-Quadrat-Icon, das an mehreren Stellen verwendet wird. Je nach Browser sehen Sie möglicherweise Favicons in dem Browsertab, in dem jede offene Seite enthalten ist, und neben gebookmarkten Seiten im Lesezeichenbereich.

Ein Favicon kann zu Ihrer Seite hinzugefügt werden, indem:

1. Es im selben Verzeichnis wie die Indexseite der Website gespeichert wird, im `.ico`-Format (die meisten unterstützen auch Favicons in häufigeren Formaten wie `.gif` oder `.png`)
2. Die folgende Zeile in den HTML-{{htmlelement("head")}}-Block eingefügt wird, um darauf zu verweisen:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel für ein Favicon im Lesezeichnungsbereich:

![Der Lesezeichnungsbereich von Firefox, zeigt ein Beispielelement mit einem Favicon daneben.](bookmark-favicon.png)

Möglicherweise benötigen Sie auch unterschiedliche Symbole für verschiedene Kontexte. Zum Beispiel finden Sie Folgendes im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, das Symbol anzuzeigen, wenn die Seite auf einem Apple-Gerätebildschirm gespeichert wird. Möglicherweise möchten Sie sogar unterschiedliche Symbole für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Symbol auf allen Geräten gut aussieht. Beispielsweise:

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

Die Kommentare erklären, wofür jedes Symbol verwendet wird – diese Elemente decken Dinge wie die Bereitstellung eines schönen hochauflösenden Symbols ab, das verwendet wird, wenn die Website auf dem Startbildschirm eines iPads gespeichert wird.

Machen Sie sich keine Sorgen, dass Sie all diese Arten von Icons jetzt implementieren müssen — dies ist ein ziemlich fortgeschrittenes Feature, und Sie müssen dieses Wissen noch nicht besitzen, um im Kurs fortzuschreiten. Der Hauptzweck hier ist es, Sie mit solchen Dingen vertraut zu machen, falls Sie auf sie stoßen, während Sie den Quellcode anderer Websites durchstöbern. Wenn Sie mehr über all diese Werte erfahren und erfahren möchten, wie Sie sie auswählen, lesen Sie die Referenzseite des {{htmlelement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Seite eine Content Security Policy (CSP) verwendet, um die Sicherheit zu erhöhen, gilt diese Richtlinie auch für das Favicon. Wenn Sie Probleme mit dem Laden des Favicons haben, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header-Richtlinie [`img-src` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.

## Anwenden von CSS und JavaScript auf HTML

Fast alle modernen Websites verwenden {{Glossary("CSS", "CSS")}}, um cool auszusehen, und {{Glossary("JavaScript", "JavaScript")}} für interaktive Funktionen wie Videoplayer, Karten, Spiele und mehr. Diese werden häufig auf eine Webseite mithilfe des {{htmlelement("link")}}-Elements und des {{htmlelement("script")}}-Elements angewendet.

- Das {{htmlelement("link")}}-Element sollte immer im Kopf Ihres Dokuments stehen. Es nimmt zwei Attribute an, `rel="stylesheet"`, was anzeigt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, welches den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den Kopf eingefügt werden und muss ein `src`-Attribut mit dem Pfad zur zu ladenden JavaScript-Datei sowie `defer` (ein [Boolesches Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)) enthalten, das den Browser anweist, das JavaScript nach dem Abschluss der HTML-Analyse zu laden. Das `defer`-Attribut ist nützlich, da es garantiert, dass das HTML vollständig geladen ist, bevor das JavaScript ausgeführt wird, um Fehler zu vermeiden, die auftreten, wenn JavaScript versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite existiert. Es gibt [mehrere Möglichkeiten](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste Methode für moderne Browser.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element kann wie ein {{Glossary("void_element", "Leerelement")}} aussehen, aber das ist es nicht, und benötigt daher ein schließendes Tag. Anstelle eines externen Skriptfiles können Sie Ihr Skript auch innerhalb des `<script>`-Elements einfügen.

### Aktives Lernen: Anwenden von CSS und JavaScript auf eine Seite

1. Um dieses aktive Lernen zu beginnen, greifen Sie auf eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) Dateien zu und speichern Sie sie auf Ihrem lokalen Computer im gleichen Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateiendungen gespeichert sind.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie basierend auf den oben gegebenen Informationen {{htmlelement("link")}} und {{htmlelement("script")}} Elemente in Ihr HTML ein, sodass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn Sie es richtig gemacht haben, sollten Sie nach dem Speichern Ihres HTML und Aktualisieren Ihres Browsers feststellen können, dass sich einige Dinge geändert haben:

![Beispiel zeigt eine Seite mit CSS und JavaScript, die darauf angewendet wurden. Das CSS hat die Seite grün gefärbt, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie nun irgendwo außerhalb der Liste klicken, wird ein Dialogfeld angezeigt, das Sie auffordert, einen Text für einen neuen Listeneintrag einzugeben. Wenn Sie die OK-Taste drücken, wird der Liste ein neuer Eintrag mit dem Text hinzugefügt. Wenn Sie auf einen vorhandenen Listeneintrag klicken, wird ein Dialogfeld angezeigt, das es Ihnen ermöglicht, den Text des Eintrags zu ändern.
- Das CSS hat den Hintergrund grün gefärbt und die Schrift vergrößert. Es hat auch einige der Inhalte des JavaScript-styled-Contents gestylt (die rote Leiste mit dem schwarzen Rand ist das Styling, das CSS der JS-generierten Liste hinzugefügt hat.)

> [!NOTE]
> Wenn Sie bei dieser Übung feststecken und das CSS/JS nicht angewendet bekommen, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispiel-Seite zu überprüfen.

## Festlegung der primären Sprache des Dokuments

Schließlich ist es erwähnenswert, dass Sie die Sprache Ihrer Seite (und sollten wirklich) festlegen können. Dies kann durch das Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/lang) zum öffnenden HTML-Tag (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) und unten gezeigt) geschehen.

```html
<html lang="en-US">
  …
</html>
```

Dies ist in vielerlei Hinsicht nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indexiert, wenn seine Sprache festgelegt ist (was es ermöglicht, es korrekt in Sprache-spezifischen Ergebnissen erscheinen zu lassen, zum Beispiel), und es ist nützlich für Menschen mit Sehbehinderungen, die Bildschirmlesegeräte verwenden (zum Beispiel existiert das Wort "six" sowohl in Französisch als auch in Englisch, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments haben, die als verschiedene Sprachen erkannt werden. Beispielsweise könnten wir unseren japanischen Sprachabschnitt als japanisch erkannt festlegen, so:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind durch den [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) Standard definiert. Sie können mehr darüber bei [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/) erfahren.

## Zusammenfassung

Dies markiert das Ende unserer Schnelltour durch den HTML-Kopf – es gibt noch viel mehr, was Sie hier tun können, aber eine erschöpfende Tour wäre zu diesem Zeitpunkt langweilig und verwirrend gewesen, und wir wollten Ihnen nur eine Vorstellung von den häufigsten Dingen geben, die Sie hier vorfinden werden! Im nächsten Artikel werden wir uns [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) ansehen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
