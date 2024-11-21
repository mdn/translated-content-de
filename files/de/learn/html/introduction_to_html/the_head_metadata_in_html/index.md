---
title: Was ist im Kopfbereich? Metadaten in HTML
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

Der {{Glossary("Head", "Kopfbereich")}} eines HTML-Dokuments ist der Teil, der nicht im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Informationen wie den Seitentitel {{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihr HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie der Autor und wichtige Schlüsselwörter, die das Dokument beschreiben). Webbrowser verwenden die im {{Glossary("Head", "Kopfbereich")}} enthaltenen Informationen, um das HTML-Dokument korrekt darzustellen. In diesem Artikel decken wir alles oben Genannte und noch mehr ab, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das HTML-Head, seinen Zweck, die wichtigsten Elemente, die es enthalten kann, und die Auswirkungen, die es auf das HTML-Dokument haben kann, kennenzulernen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Kopfbereich?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben,](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_document) noch einmal aufgreifen:

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

Der HTML-Kopfbereich ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zum Inhalt des {{htmlelement("body")}}-Elements (der auf der Seite angezeigt wird, wenn sie in einem Browser geladen wird), wird der Inhalt des Kopfbereichs nicht auf der Seite angezeigt. Stattdessen hat der Kopfbereich die Aufgabe, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der Kopfbereich ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

In größeren Seiten kann der Kopfbereich jedoch ziemlich groß werden. Versuchen Sie, einige Ihrer Lieblingswebsites zu besuchen und die [Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) zu verwenden, um deren Kopfbereichsinhalte zu überprüfen. Unser Ziel ist es hier nicht, Ihnen zu zeigen, wie Sie alles verwenden, was möglicherweise in den Kopfbereich eingefügt werden kann, sondern Ihnen beizubringen, wie Sie die wichtigsten Elemente verwenden, die Sie in den Kopfbereich aufnehmen möchten, und Ihnen etwas Vertrautheit zu geben. Lassen Sie uns beginnen.

## Hinzufügen eines Titels

Wir haben das {{htmlelement("title")}}-Element bereits in Aktion gesehen – es kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um eine Hauptüberschrift zu Ihrem Inhalt im Body-Bereich hinzuzufügen – dies wird manchmal auch als Seitentitel bezeichnet. Aber sie sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn sie im Browser geladen wird – im Allgemeinen sollte dies einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu markieren (den Geschichtentitel, die Nachrichtenüberschrift oder was auch immer für Ihre Verwendung angemessen ist).
- Das {{htmlelement("title")}}-Element ist eine Metainformation, die den Titel des gesamten HTML-Dokuments repräsentiert (nicht den Inhalt des Dokuments).

### Aktives Lernen: Ein Beispiel inspizieren

1. Um mit diesem aktiven Lernen zu beginnen, möchten wir, dass Sie unser GitHub-Repo besuchen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Gehen Sie dazu entweder

   1. Den Code von der Seite kopieren und in eine neue Textdatei in Ihrem Code-Editor einfügen, dann an einem sinnvollen Ort speichern.
   2. Die "Raw"-Schaltfläche auf der GitHub-Seite drücken, was dazu führt, dass der rohe Code erscheint (möglicherweise in einem neuen Browser-Tab). Wählen Sie dann das Menü Ihres Browsers _Seite speichern unter…_ und wählen Sie einen sinnvollen Ort, um die Datei zu speichern.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas Ähnliches sehen:

   ![Eine Webseite mit 'title'-Text im Browser-Tab und 'h1'-Text als Seitenüberschrift im Dokumentkörper.](title-example.png)

   Es sollte jetzt völlig klar sein, wo der `<h1>`-Inhalt und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, den Inhalt dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie ein bisschen Spaß dabei.

Der Inhalt des `<title>`-Elements wird auch auf andere Weise verwendet. Zum Beispiel, wenn Sie versuchen, die Seite zu bookmarken (_Lesezeichen > Lesezeichen für diese Seite hinzufügen_ oder das Sternsymbol in der URL-Leiste in Firefox), sehen Sie den Inhalt des `<title>` als vorgeschlagenen Lesezeichennamen ausgefüllt.

![Eine Webseite wird in Firefox als Lesezeichen gesetzt. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt.](bookmark-example.png)

Die Inhalte des `<title>` werden auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Möglichkeit, Metadaten zu einem Dokument hinzuzufügen – das {{htmlelement("meta")}}-Element. Natürlich könnte man das andere Material, über das wir in diesem Artikel sprechen, ebenfalls als Metadaten ansehen. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können. Wir werden nicht versuchen, sie alle an dieser Stelle zu erklären, da es zu verwirrend wäre. Stattdessen erklären wir ein paar Dinge, die Sie möglicherweise häufig sehen, nur um Ihnen eine Vorstellung zu geben.

### Zeichencodierung Ihres Dokuments angeben

In dem Beispiel, das wir oben gesehen haben, wurde diese Zeile hinzugefügt:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichencodierung des Dokuments an – das Zeichenformat, das das Dokument verwenden darf. `utf-8` ist ein universelles Zeichenformat, das so ziemlich jedes Zeichen aus jeder menschlichen Sprache enthält. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache zu zeigen; deshalb ist es eine gute Idee, dies auf jeder Webseite, die Sie erstellen, festzulegen! Zum Beispiel könnte Ihre Seite sowohl Englisch als auch Japanisch problemlos anzeigen:

![Eine Webseite, die englische und japanische Zeichen enthält, bei der die Zeichencodierung auf universal oder utf-8 eingestellt ist. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung zum Beispiel auf `ISO-8859-1` einstellen (das Format für das lateinische Alphabet), könnte die Darstellung Ihrer Seite komplett durcheinander geraten:

![Eine Webseite, die englische und japanische Zeichen enthält, bei der die Zeichencodierung auf lateinisch eingestellt ist. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren falsche Codierungen automatisch, so dass es je nach verwendetem Browser sein könnte, dass Sie dieses Problem nicht sehen. Sie sollten dennoch eine `utf-8`-Codierung auf Ihrer Seite festlegen, um potenzielle Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Mit Zeichencodierungen experimentieren

Um dies auszuprobieren, ziehen Sie das einfache HTML-Vorlage aus dem vorherigen Abschnitt zum `<title>` (die [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), ändern Sie den Meta-Charset-Wert in `ISO-8859-1`, und fügen Sie das Japanische zu Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Einen Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten `name` und `content` Attribute:

- `name` gibt an, um welchen Typ von Meta-Element es sich handelt; welche Art von Information es enthält.
- `content` gibt den tatsächlichen Meta-Inhalt an.

Zwei solche Meta-Elemente, die nützlich sind, um auf Ihrer Seite aufgenommen zu werden, definieren den Autor der Seite und geben eine prägnante Beschreibung der Seite. Lassen Sie uns ein Beispiel betrachten:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Einen Autor anzugeben ist aus vielen Gründen vorteilhaft: Es ist nützlich zu wissen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und ihn kontaktieren möchten. Einige Content-Management-Systeme haben Funktionen, um automatisch Informationen über den Seitenautor zu extrahieren und für solche Zwecke bereitzustellen.

Eine Beschreibung anzugeben, die Schlüsselwörter enthält, die sich auf den Inhalt Ihrer Seite beziehen, ist nützlich, da es das Potenzial hat, dass Ihre Seite in relevanten Suchanfragen, die in Suchmaschinen durchgeführt werden, höher erscheint (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}} oder {{Glossary("SEO", "SEO")}} bezeichnet).

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf den Ergebnisseiten der Suchmaschinen verwendet. Lassen Sie uns eine Übung durchgehen, um dies zu erkunden

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Betrachten Sie den Quelltext der Seite (Rechtsklick auf die Seite, wählen Sie _Seitenquelltext anzeigen_ aus dem Kontextmenü.)
3. Finden Sie das Beschreibung-Meta-Tag. Es wird etwa so aussehen (obwohl es sich im Laufe der Zeit ändern könnte):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun in Ihrer bevorzugten Suchmaschine nach "MDN Web Docs" (Wir verwendeten Google.) Sie werden den Inhalt des `<meta>` und `<title>`-Elements im Suchergebnis bemerken – definitiv lohnenswert!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden Sie einige relevante Unterseiten von MDN Web Docs unter dem Hauptlink der Startseite aufgelistet sehen – diese werden als Sitelinks bezeichnet und sind in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=en) konfigurierbar – eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden einfach nicht mehr verwendet. Zum Beispiel wird das Schlüsselwort-`<meta>`-Element (`<meta name="keywords" content="fill, in, your, keywords, here">`) – das dazu bestimmt ist, Schlüsselwörter für Suchmaschinen bereitzustellen, um die Relevanz dieser Seite für verschiedene Suchbegriffe zu bestimmen – von Suchmaschinen ignoriert, da Spammer einfach die Schlüsselwortliste mit Hunderten von Schlüsselwörtern füllten und die Ergebnisse verfälschten.

### Andere Arten von Metadaten

Während Sie durch das Web reisen, werden Sie auch andere Arten von Metadaten finden. Viele der Funktionen, die Sie auf Websites sehen, sind proprietäre Kreationen, die entwickelt wurden, um bestimmten Websites (wie Social-Networking-Sites) spezifische Informationen bereitzustellen, die sie verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das Facebook erfunden hat, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode der MDN Web Docs finden Sie Folgendes:

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

Eine Auswirkung davon ist, dass wenn Sie auf Facebook auf MDN Web Docs verlinken, der Link zusammen mit einem Bild und einer Beschreibung erscheint: eine reichhaltigere Benutzererfahrung.

![Open-Graph-Protokolldaten von der MDN-Homepage, wie sie auf Facebook angezeigt werden, mit einem Bild, Titel und Beschreibung.](facebook-output.png)

## Hinzufügen benutzerdefinierter Symbole zu Ihrer Website

Um das Design Ihrer Seite weiter zu bereichern, können Sie Verweise auf benutzerdefinierte Symbole in Ihren Metadaten hinzufügen, und diese werden in bestimmten Kontexten angezeigt. Das am häufigsten verwendete davon ist das **Favicon** (kurz für "Favoriten-Symbol", das sich auf seine Verwendung in den "Favoriten" oder "Lesezeichen"-Listen in Browsern bezieht).

Das bescheidene Favicon gibt es seit vielen Jahren. Es ist das erste Symbol dieser Art: ein 16-Pixel-Quadrat-Symbol, das an mehreren Stellen verwendet wird. Sie können (je nach Browser) Favicons im Browser-Tab sehen, das jede offene Seite enthält, und neben gebuchten Seiten im Lesezeichenfeld.

Ein Favicon kann zu Ihrer Seite hinzugefügt werden, indem:

1. Es im gleichen Verzeichnis wie die Indexseite der Website gespeichert wird, im `.ico`-Format (die meisten unterstützen auch Favicons in häufigeren Formaten wie `.gif` oder `.png`).
2. Die folgende Zeile in den HTML-Kopfbereich Ihres Dokuments eingebunden wird, um es zu referenzieren:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel eines Favicons im Lesezeichenfeld:

![Das Lesezeichenfeld in Firefox, das ein Lesezeichen-Beispiel mit einem Favicon daneben anzeigt.](bookmark-favicon.png)

Vielleicht benötigen Sie auch unterschiedliche Symbole für verschiedene Kontexte. Zum Beispiel finden Sie dies im Quellcode der MDN Web Docs-Homepage:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, die Seite anzuzeigen, wenn sie auf einem Apple-Gerät als Startbildschirm-Symbol gespeichert wird. Vielleicht möchten Sie sogar unterschiedliche Symbole für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Symbol auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Symbol verwendet wird – diese Elemente decken Dinge wie die Bereitstellung eines schönen hochauflösenden Symbols für die Verwendung ab, wenn die Website auf dem Startbildschirm eines iPad gespeichert ist.

Machen Sie sich jetzt keine großen Gedanken darüber, all diese Arten von Symbolen zu implementieren – dies ist eine ziemlich fortgeschrittene Funktion, und es wird nicht erwartet, dass Sie dieses Wissen besitzen, um im Kurs fortzuschreiten. Das Hauptziel hier ist es, Ihnen zu zeigen, was solche Dinge sind, falls Sie auf sie stoßen, während Sie Quellcodes anderer Websites durchsuchen. Wenn Sie mehr über all diese Werte erfahren und lernen möchten, wie man sie auswählt, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Seite eine Content-Security-Policy (CSP) zur Verbesserung der Sicherheit verwendet, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme damit haben, dass das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Richtlinie die [`img-src`-Directiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) nicht blockiert.

## Anwenden von CSS und JavaScript auf HTML

Fast alle Websites, die Sie heutzutage verwenden, werden {{Glossary("CSS", "CSS")}} verwenden, um cool auszusehen, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionalitäten zu ermöglichen, wie zum Beispiel Video-Player, Karten, Spiele und mehr. Diese werden am häufigsten auf einer Webseite mit dem {{htmlelement("link")}}-Element und dem {{htmlelement("script")}}-Element angewendet.

- Das {{htmlelement("link")}}-Element sollte immer im Kopfbereich Ihres Dokuments platziert werden. Es benötigt zwei Attribute, `rel="stylesheet"`, was darauf hinweist, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den Kopfbereich aufgenommen werden und ein `src`-Attribut enthalten, das den Pfad zum zu ladenden JavaScript enthält, sowie `defer`, das den Browser anweist, das JavaScript nach dem Parsen des HTML zu laden. Dies ist nützlich, da es sicherstellt, dass das HTML vollständig geladen ist, bevor das JavaScript ausgeführt wird, um Fehler zu vermeiden, die durch das JavaScript verursacht werden, wenn es versucht, auf ein HTML-Element zuzugreifen, das auf der Seite noch nicht vorhanden ist. Es gibt tatsächlich eine Reihe von Möglichkeiten, JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste, die in modernen Browsern verwendet werden kann (für andere siehe [JavaScript-Ladestrategien](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies)).

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element sieht möglicherweise wie ein {{Glossary("void_element", "Void-Element")}} aus, ist es jedoch nicht, und benötigt daher ein schließendes Tag. Anstelle des Zeigens auf eine externe Skriptdatei können Sie Ihr Skript auch innerhalb des `<script>`-Elements platzieren.

### Aktives Lernen: CSS und JavaScript auf eine Seite anwenden

1. Zum Start dieses aktiven Lernens laden Sie eine Kopie unserer Dateien [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) herunter und speichern Sie sie auf Ihrem lokalen Computer im gleichen Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateierweiterungen gespeichert werden.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie unter Beachtung der oben gegebenen Informationen, {{htmlelement("link")}} und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, sodass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn Sie alles korrekt gemacht haben, sollten Sie beim Speichern Ihres HTML und Aktualisieren Ihres Browsers die Veränderungen sehen:

![Beispiel zeigt eine Seite mit CSS und JavaScript angewandt. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat der Seite eine leere Liste hinzugefügt. Wenn Sie nun irgendwo außerhalb der Liste klicken, wird ein Dialogfeld angezeigt, in das Sie Text für einen neuen Listeneintrag eingeben können. Wenn Sie die OK-Schaltfläche drücken, wird der neue Listeneintrag, der den Text enthält, der Liste hinzugefügt. Wenn Sie auf einen vorhandenen Listeneintrag klicken, wird ein Dialogfeld angezeigt, mit dem Sie den Text des Eintrags ändern können.
- Das CSS hat den Hintergrund grün gemacht und den Text größer. Es hat auch einige der Inhalte gestaltet, die das JavaScript zur Seite hinzugefügt hat (die rote Leiste mit dem schwarzen Rand ist das Styling, das das CSS zur durch das JS generierten Liste hinzugefügt hat.)

> [!NOTE]
> Wenn Sie in dieser Übung feststecken und das CSS/JS nicht anwenden können, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispielseite zu überprüfen.

## Die Hauptsprache des Dokuments festlegen

Abschließend sei erwähnt, dass Sie die Sprache Ihrer Seite festlegen können (und wirklich sollten). Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie in der [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) zu sehen und unten gezeigt).

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf viele Weisen nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indexiert, wenn seine Sprache festgelegt wird (somit kann es korrekt in sprachspezifischen Ergebnissen erscheinen, zum Beispiel), und es ist für Menschen mit Sehverlusten, die Bildschirmleser verwenden, nützlich (zum Beispiel existiert das Wort "six" sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments als verschiedene Sprachen erkennen lassen. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt als japanisch erkennen lassen, so:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind durch den [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)-Standard definiert. Sie können mehr darüber in [Sprach-Tags in HTML und XML](https://www.w3.org/International/articles/language-tags/) finden.

## Zusammenfassung

Das markiert das Ende unserer schnellen Tour durch den HTML-Kopfbereich – Es gibt noch viel mehr, was Sie hier tun können, aber eine erschöpfende Tour wäre zu diesem Zeitpunkt langweilig und verwirrend, und wir wollten Ihnen nur eine Vorstellung der häufigsten Dinge geben, die Sie dort im Augenblick finden werden! Im nächsten Artikel werden wir uns mit [HTML-Text-Grundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) beschäftigen.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}
