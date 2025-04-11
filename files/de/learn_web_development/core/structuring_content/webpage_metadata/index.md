---
title: Was steht im Kopfbereich? Metadaten von Webseiten
short-title: Metadaten von Webseiten
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "Kopfbereich")}} eines HTML-Dokuments ist der Teil, der nicht im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadaten-Informationen wie den {{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (falls Sie Ihre HTML-Inhalte mit CSS stylen möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie der Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden die im {{Glossary("Head", "Kopfbereich")}} enthaltenen Informationen, um das HTML-Dokument korrekt darzustellen. In diesem Artikel behandeln wir all das und mehr, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im vorherigen Unterricht behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der HTML-Kopfbereich und sein Zweck als Metadatencontainer für das Dokument.</li>
          <li>Festlegung der Zeichencodierung und des Titels des Dokuments.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verknüpfung von Icons zur Verwendung auf Browsern und mobilen Plattformen.</li>
          <li>Verknüpfung von Stylesheets und Skriptdateien.</li>
          <li>Die Notwendigkeit, die Sprache eines Dokuments mit dem <code>lang</code>-Attribut im öffnenden <code>&lt;html&gt;</code>-Tag festzulegen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Kopfbereich?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document), erneut betrachten:

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

Der HTML-Kopfbereich umfasst die Inhalte des {{htmlelement("head")}}-Elements. Im Gegensatz zu den Inhalten des {{htmlelement("body")}}-Elements (die beim Laden der Seite in einem Browser angezeigt werden) wird der Inhalt des Kopfbereichs nicht auf der Seite angezeigt. Stattdessen hat der Kopfbereich die Aufgabe, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der Kopfbereich recht klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

In größeren Seiten kann der Kopfbereich jedoch ziemlich groß werden. Versuchen Sie, einige Ihrer Lieblingswebsites zu besuchen und verwenden Sie die [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um deren Kopfbereichsinhalte zu überprüfen. Unser Ziel hier ist es nicht, Ihnen zu zeigen, wie man alles verwendet, was möglicherweise im Kopfbereich platziert werden kann, sondern Ihnen zu zeigen, wie man die wichtigsten Elemente verwendet, die Sie in den Kopfbereich aufnehmen möchten, und Ihnen ein gewisses Maß an Vertrautheit zu vermitteln. Fangen wir an.

## Hinzufügen eines Titels

Wir haben das {{htmlelement("title")}}-Element bereits in Aktion gesehen — es kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um Ihrem Hauptinhalt eine Überschrift auf oberster Ebene hinzuzufügen — dies wird auch manchmal als Seitentitel bezeichnet. Aber es handelt sich um verschiedene Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn es im Browser geladen wird — grundsätzlich sollte es einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts (den Geschichte-Titel, die Schlagzeile oder was auch immer für Ihre Nutzung geeignet ist) zu kennzeichnen.
- Das {{htmlelement("title")}}-Element ist ein Metadatum, das den Titel des gesamten HTML-Dokuments darstellt (nicht den Inhalt des Dokuments).

### Aktives Lernen: Ein Beispiel inspizieren

1. Um mit diesem aktiven Lernen zu beginnen, möchten wir, dass Sie zu unserem GitHub-Repo gehen und eine Kopie unserer [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, entweder

   1. Kopieren und fügen Sie den Code aus der Seite in eine neue Textdatei in Ihrem Code-Editor ein und speichern Sie ihn an einem sinnvollen Ort.
   2. Drücken Sie die "Raw"-Schaltfläche auf der GitHub-Seite, wodurch der Rohcode erscheint (möglicherweise in einem neuen Browser-Tab). Wählen Sie dann das Menü _Seite speichern unter..._ Ihres Browsers und wählen Sie einen geeigneten Speicherort für die Datei aus.

2. Öffnen Sie die Datei nun in Ihrem Browser. Sie sollten etwas in dieser Art sehen:

   ![Eine Webseite mit 'title'-Text im Seitentab des Browsers und 'h1'-Text als Seitenüberschrift im Dokumenteninhalt.](title-example.png)

   Es sollte jetzt völlig klar sein, wo die `<h1>`-Inhalte erscheinen und wo die `<title>`-Inhalte erscheinen!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, die Inhalte dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie etwas Spaß damit.

Die Inhalte des `<title>`-Elements werden auch anderweitig verwendet. Wenn Sie zum Beispiel versuchen, die Seite zu bookmarken (über _Lesezeichen > Diese Seite zu Lesezeichen hinzufügen_ oder das Sternsymbol in der URL-Leiste in Firefox), werden die Inhalte des `<title>`-Elements als vorgeschlagener Lesezeichenname ausgefüllt.

![Eine Webseite wird in Firefox als Lesezeichen gespeichert. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt.](bookmark-example.png)

Die `<title>`-Inhalte werden auch in den Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Möglichkeit, Metadaten zu einem Dokument hinzuzufügen — das {{htmlelement("meta")}}-Element. Natürlich könnte der andere Kram, über den wir in diesem Artikel sprechen, auch als Metadaten betrachtet werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können, aber wir werden nicht versuchen, sie alle an diesem Punkt zu erklären, da es zu verwirrend wäre. Stattdessen erklären wir ein paar Dinge, die Sie vielleicht häufig sehen werden, nur um Ihnen eine Vorstellung zu geben.

### Zeichencodierung Ihres Dokuments angeben

In dem Beispiel, das wir oben gesehen haben, war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichencodierung des Dokuments an — den Zeichensatz, den das Dokument verwenden darf. `utf-8` ist ein universeller Zeichensatz, der praktisch jedes Zeichen aus jeder menschlichen Sprache umfasst. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache korrekt darzustellen; es ist daher eine gute Idee, dies auf jeder von Ihnen erstellten Webseite zu setzen! Zum Beispiel könnte Ihre Seite Englisch und Japanisch problemlos darstellen:

![Eine Webseite, die englische und japanische Zeichen enthält, mit der Zeichencodierung universal oder utf-8. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung zum Beispiel auf `ISO-8859-1` setzen (den Zeichensatz für das lateinische Alphabet), könnte die Darstellung Ihrer Seite durcheinander geraten:

![Eine Webseite mit englischen und japanischen Zeichen, wobei die Zeichencodierung auf Latin eingestellt ist. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) beheben falsche Codierungen automatisch, sodass Sie dieses Problem je nach verwendetem Browser möglicherweise nicht sehen. Sie sollten dennoch eine Codierung von `utf-8` auf Ihrer Seite setzen, um potenzielle Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Experiment mit Zeichencodierung

Um dies auszuprobieren, besuchen Sie die einfache HTML-Vorlage, die Sie im vorherigen Abschnitt über `<title>` (die [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)) erhalten haben, ändern Sie den Wert der Meta-Zeichencodierung in `ISO-8859-1` und fügen Sie das Japanische zu Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Hinzufügen eines Autors und einer Beschreibung

Viele `<meta>`-Elemente enthalten `name`- und `content`-Attribute:

- `name` gibt den Typ des Metaelements an; welche Art von Information es enthält.
- `content` gibt den eigentlichen Metainhalt an.

Zwei solcher Metaelemente, die nützlich sind, um sie auf Ihrer Seite aufzunehmen, definieren den Autor der Seite und bieten eine kurze Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Die Angabe eines Autors ist in vielerlei Hinsicht von Vorteil: Es ist nützlich zu verstehen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und diese Person kontaktieren möchten. Einige Content-Management-Systeme bieten Möglichkeiten, automatisch Autoreninformationen auf Seiten zu extrahieren und für solche Zwecke verfügbar zu machen.

Das Angeben einer Beschreibung, die Schlüsselwörter enthält, die sich auf den Inhalt Ihrer Seite beziehen, ist nützlich, da dies möglicherweise dazu führt, dass Ihre Seite bei relevanten Suchanfragen in Suchmaschinen höher erscheint (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}}, oder {{Glossary("SEO", "SEO")}} bezeichnet.)

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf Suchergebnisseiten verwendet. Lassen Sie uns eine Übung durchgehen, um dies zu erkunden.

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Sehen Sie sich den Quellcode der Seite an (Rechtsklick auf die Seite, wählen Sie _Seitenquelltext anzeigen_ aus dem Kontextmenü).
3. Finden Sie das Description-Metatags. Es wird etwa so aussehen (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie jetzt nach "MDN Web Docs" in Ihrer bevorzugten Suchmaschine (wir haben Google verwendet). Sie werden den Inhalt des `meta`-Elements und des `title`-Elements im Suchergebnis bemerken — auf jeden Fall einen Versuch wert!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden Sie einige relevante Unterseiten von MDN Web Docs sehen, die unter dem Hauptlink der Homepage aufgelistet sind — diese werden als Sitelinks bezeichnet und sind konfigurierbar in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=en) — eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden einfach nicht mehr verwendet. Zum Beispiel wird das Schlüsselwort `<meta>`-Element (`<meta name="keywords" content="füllen, Sie, Ihre, Schlüsselwörter, aus">`) — was dazu gedacht war, Suchmaschinen relevante Schlüsselwörter zur Verfügung zu stellen, um die Relevanz dieser Seite für verschiedene Suchbegriffe festzustellen — von Suchmaschinen ignoriert, da Spammer die Schlüsselwortliste einfach mit Hunderten von Schlüsselwörtern gefüllt haben, was die Ergebnisse verfälschte.

### Andere Arten von Metadaten

Auf Ihrer Reise durch das Internet werden Sie auch auf andere Arten von Metadaten stoßen. Viele der Funktionen, die Sie auf Websites sehen, sind proprietäre Kreationen, die entwickelt wurden, um bestimmten Seiten (wie sozialen Netzwerken) spezifische Informationen zur Verfügung zu stellen, die sie verwenden können.

Ein Beispiel dafür sind [Open Graph-Daten](https://ogp.me/), ein Metadatenprotokoll, das von Facebook erfunden wurde, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode von MDN Web Docs finden Sie Folgendes:

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

Ein Effekt davon ist, dass beim Verlinken zu MDN Web Docs auf Facebook der Link zusammen mit einem Bild und einer Beschreibung erscheint: eine reichhaltigere Erfahrung für die Benutzer.

![Open Graph-Protokolldaten von der MDN-Homepage, wie sie auf Facebook angezeigt werden, zeigen ein Bild, einen Titel und eine Beschreibung.](facebook-output.png)

## Hinzufügen benutzerdefinierter Icons zu Ihrer Seite

Um das Design Ihrer Seite weiter zu bereichern, können Sie in Ihren Metadaten auf benutzerdefinierte Icons verweisen, die in bestimmten Kontexten angezeigt werden. Das am häufigsten verwendete dieser Icons ist das **Favicon** (Kurzform für "Favoriten-Icon", das sich auf seine Verwendung in der "Favoriten"- oder "Lesezeichen"-Liste in Browsern bezieht).

Das bescheidene Favicon gibt es schon seit vielen Jahren. Es ist das erste Icon dieser Art: ein 16-Pixel-Quadrat-Icon, das an mehreren Stellen verwendet wird. Abhängig vom Browser sehen Sie möglicherweise Favicons, die im Browser-Tab angezeigt werden, der jede geöffnete Seite enthält, und neben markierten Seiten im Lesezeichen-Bereich.

Ein Favicon kann zu Ihrer Seite hinzugefügt werden, indem:

1. Es im selben Verzeichnis wie die Startseite der Seite gespeichert wird, im `.ico`-Format (die meisten unterstützen auch Favicons in gebräuchlicheren Formaten wie `.gif` oder `.png`)
2. Die folgende Zeile wird in den {{HTMLElement("head")}}-Block Ihres HTMLs eingefügt, um darauf zu verweisen:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel für ein Favicon in einem Lesezeichen-Bereich:

![Das Firefox-Lesezeichen-Bereich, das ein markiertes Beispiel zeigt, bei dem ein Favicon daneben angezeigt wird.](bookmark-favicon.png)

Möglicherweise benötigen Sie auch unterschiedliche Icons für unterschiedliche Kontexte. Zum Beispiel finden Sie dies im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist ein Weg, um der Website ein Icon anzuzeigen, wenn es auf einem Apple-Gerät auf dem Startbildschirm gespeichert wird. Möglicherweise möchten Sie sogar unterschiedliche Icons für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Icon auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Icon verwendet wird — diese Elemente decken Dinge ab, wie z.B. ein schönes hochauflösendes Icon bereitzustellen, das verwendet wird, wenn die Website auf dem Startbildschirm eines iPads gespeichert wird.

Machen Sie sich keine Sorgen darüber, jetzt alle diese Arten von Icons zu implementieren — dies ist eine ziemlich fortschrittliche Funktion, und Sie müssen nicht in der Lage sein, dies zu wissen, um mit dem Kurs fortzufahren. Der Hauptzweck hier ist es, Sie wissen zu lassen, was solche Dinge sind, falls Sie beim Durchsuchen anderer Websites auf den Quellcode stoßen. Wenn Sie mehr über all diese Werte und wie man sie auswählt erfahren möchten, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Seite eine Content-Security-Policy (CSP) verwendet, um die Sicherheit zu erhöhen, gilt die Richtlinie für das Favicon. Wenn Sie auf Probleme stoßen, bei denen das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header [`img-src` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.

## Anwenden von CSS und JavaScript auf HTML

Praktisch alle modernen Websites verwenden {{Glossary("CSS", "CSS")}}, um sie cool aussehen zu lassen, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionen wie Video-Player, Karten, Spiele und mehr zu unterstützen. Diese werden am häufigsten auf eine Webseite mit dem {{htmlelement("link")}}-Element und dem {{htmlelement("script")}}-Element angewendet.

- Das {{htmlelement("link")}}-Element sollte immer im Kopfbereich Ihres Dokuments platziert werden. Es benötigt zwei Attribute, `rel="stylesheet"`, das angibt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den Kopfbereich eingefügt werden und sollte ein `src`-Attribut enthalten, das den Pfad zu dem JavaScript enthält, das Sie laden möchten, und `defer` (ein [boolean Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)), das den Browser anweist, das JavaScript nach dem Parsen des HTMLs zu laden. Das `defer`-Attribut ist nützlich, da es garantiert, dass das gesamte HTML geladen ist, bevor das JavaScript ausgeführt wird, sodass keine Fehler auftreten, da JavaScript versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite existiert. Es gibt [mehrere Möglichkeiten](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste, die Sie für moderne Browser verwenden können.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element sieht zwar wie ein {{Glossary("void_element", "void Element")}} aus, ist es aber nicht und benötigt daher ein Schluss-Tag. Anstatt auf eine externe Skriptdatei zu verweisen, können Sie Ihr Skript auch direkt innerhalb des `<script>`-Elements platzieren.

### Aktives Lernen: Anwenden von CSS und JavaScript auf eine Seite

1. Um dieses aktive Lernen zu beginnen, holen Sie sich eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) Dateien und speichern Sie sie auf Ihrem lokalen Computer im gleichen Verzeichnis. Stellen Sie sicher, dass sie mit den korrekten Namen und Dateierweiterungen gespeichert werden.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie, basierend auf den oben gegebenen Informationen, {{htmlelement("link")}} und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, sodass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn dies korrekt gemacht wird, sollten Sie, wenn Sie Ihr HTML speichern und Ihren Browser aktualisieren, in der Lage sein, zu sehen, dass sich Dinge geändert haben:

![Beispiel, das eine Seite mit angewendetem CSS und JavaScript zeigt. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie jetzt irgendwo außerhalb der Liste klicken, wird ein Dialogfeld geöffnet, in dem Sie aufgefordert werden, Text für ein neues Listenelement einzugeben. Wenn Sie auf die OK-Schaltfläche drücken, wird ein neues Listenelement zur Liste hinzugefügt, das den Text enthält. Wenn Sie auf ein vorhandenes Listenelement klicken, wird ein Dialogfeld geöffnet, das Ihnen erlaubt, den Text des Elements zu ändern.
- Das CSS hat den Hintergrund grün gemacht und den Text vergrößert. Es hat auch einige der Inhalte, die das JavaScript zur Seite hinzugefügt hat, gestaltet (der rote Balken mit dem schwarzen Rand ist die Stilgebung, die das CSS der JS-generierten Liste hinzugefügt hat).

> [!NOTE]
> Wenn Sie in dieser Übung stecken bleiben und das CSS/JS nicht anwenden können, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispielseite zu überprüfen.

## Festlegen der Hauptsprache des Dokuments

Schließlich ist es erwähnenswert, dass Sie die Sprache Ihrer Seite festlegen können (und sollten). Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/lang) zum öffnenden HTML-Tag getan werden (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) gesehen und unten gezeigt.)

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf viele Arten nützlich. Ihr HTML-Dokument wird von Suchmaschinen effektiver indexiert, wenn seine Sprache festgelegt ist (sodass es beispielsweise richtig in sprachspezifischen Ergebnissen erscheint), und es ist nützlich für Menschen mit Sehbehinderung, die Bildschirmleser verwenden (zum Beispiel existiert das Wort "six" sowohl im Französischen als auch Englischen, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments auf verschiedene Sprachen setzen. Wir könnten zum Beispiel unseren japanischen Sprachabschnitt als Japanisch kennzeichnen, so:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind durch den [ISO 639-1](https://de.wikipedia.org/wiki/ISO_639-1) Standard definiert. Sie können mehr darüber in [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/) erfahren.

## Zusammenfassung

Damit endet unsere schnelle Tour durch den HTML-Kopfbereich — es gibt viel mehr, was Sie dort tun können, aber eine ausführliche Tour wäre in diesem Stadium langweilig und verwirrend, und wir wollten Ihnen nur eine Vorstellung von den häufigsten Dingen geben, die Sie dort derzeit finden werden! Im nächsten Artikel werden wir [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) betrachten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
