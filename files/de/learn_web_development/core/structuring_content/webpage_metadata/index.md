---
title: Was befindet sich im Kopfbereich? Metadaten eines Webseiten
short-title: Metadaten einer Webseite
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "Kopfbereich")}} eines HTML-Dokuments ist der Teil, der beim Laden der Seite im Webbrowser nicht angezeigt wird. Er enthält Metadateninformationen wie den Seitentitel (`{{htmlelement("title")}}`), Links zu {{Glossary("CSS", "CSS")}} (falls Sie Ihr HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden die im {{Glossary("Head", "Kopfbereich")}} enthaltenen Informationen, um das HTML-Dokument korrekt darzustellen. In diesem Artikel werden wir all das oben Genannte und noch mehr behandeln, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im vorherigen Kapitel behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der HTML-Kopfbereich und seine Funktion als Metadatencontainer für das Dokument.</li>
          <li>Festlegen der Zeichencodierung und des Titels des Dokuments.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verknüpfung zu Icons zur Verwendung in Browsern und mobilen Plattformen.</li>
          <li>Verknüpfung zu Stylesheets und Skriptdateien.</li>
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

Der HTML-Kopfbereich ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zu den Inhalten des {{htmlelement("body")}}-Elements (die auf der Seite angezeigt werden, wenn sie in einem Browser geladen wird), wird der Inhalt des Kopfbereichs nicht auf der Seite angezeigt. Stattdessen besteht die Aufgabe des Kopfbereichs darin, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. In dem obigen Beispiel ist der Kopfbereich recht klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Bei größeren Seiten kann der Kopfbereich jedoch ziemlich groß werden. Versuchen Sie, einige Ihrer Lieblingswebsites zu besuchen und die [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) zu verwenden, um deren Kopfbereichsinhalte zu überprüfen. Unser Ziel hier ist es nicht, Ihnen zu zeigen, wie Sie alles verwenden, was möglicherweise in den Kopfbereich eingefügt werden kann, sondern vielmehr, Ihnen beizubringen, wie Sie die wichtigsten Elemente verwenden, die Sie in den Kopfbereich einfügen möchten, und Ihnen ein gewisses Maß an Vertrautheit zu vermitteln. Lassen Sie uns beginnen.

## Einen Titel hinzufügen

Wir haben das {{htmlelement("title")}}-Element bereits in Aktion gesehen — damit kann dem Dokument ein Titel hinzugefügt werden. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element, das verwendet wird, um eine Überschrift der obersten Ebene zu Ihrem Hauptteilinhalt hinzuzufügen, verwechselt werden — dies wird manchmal auch als Seitentitel bezeichnet. Aber sie sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint, wenn es im Browser geladen wird, auf der Seite — im Allgemeinen sollte es pro Seite einmal verwendet werden, um den Titel Ihres Seiteninhalts (den Titel der Geschichte, die Nachrichtenschlagzeile oder was immer für Ihre Verwendung angemessen ist) zu kennzeichnen.
- Das {{htmlelement("title")}}-Element ist Metadaten, die den Titel des gesamten HTML-Dokuments darstellen (nicht den Inhalt des Dokuments).

### Ein Beispiel inspizieren

1. In dieser Übung möchten wir, dass Sie anfangen, indem Sie zu unserem GitHub-Repo gehen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, entweder
   1. Den Code aus der Seite in eine neue Textdatei in Ihrem Code-Editor kopieren und einfügen und dann an einem sinnvollen Ort speichern.
   2. Die Schaltfläche "Raw" auf der GitHub-Seite drücken, wodurch der rohe Code erscheint (möglicherweise in einem neuen Browsertab). Wählen Sie dann das Menü _Seite speichern unter..._ Ihres Browsers und wählen Sie einen geeigneten Ort zum Speichern der Datei.

2. Öffnen Sie die Datei nun in Ihrem Browser. Sie sollten etwas wie das Folgende sehen:

   ![Eine Webseite mit 'title' Text im Tab des Browsers und 'h1' Text als Überschrift im Dokumentenhauptteil.](title-example.png)

   Es sollte nun absolut klar sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, den Inhalt dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie ein wenig Spaß damit.

Die `<title>`-Inhalte werden auch in anderer Weise verwendet. Zum Beispiel, wenn Sie versuchen, die Seite zu bookmarken (_Lesezeichen > Diese Seite bookmarken_ oder das Sternsymbol in der Adressleiste in Firefox), sehen Sie die `<title>`-Inhalte als vorgeschlagenen Namen für das Lesezeichen ausgefüllt.

![Eine Webseite wird in Firefox als Lesezeichen gesetzt. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt](bookmark-example.png)

Die `<title>`-Inhalte werden auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Möglichkeit, Metadaten zu einem Dokument hinzuzufügen — das {{htmlelement("meta")}}-Element. Natürlich könnte man die anderen Dinge, über die wir in diesem Artikel sprechen, auch als Metadaten betrachten. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die im `<head>` einer Seite enthalten sein können, aber wir werden nicht versuchen, sie alle an dieser Stelle zu erklären, da es einfach zu verwirrend wäre. Stattdessen erklären wir ein paar Dinge, die Sie möglicherweise häufig sehen, um Ihnen eine Vorstellung zu geben.

### Die Zeichencodierung Ihres Dokuments festlegen

In dem obigen Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element bestimmt die Zeichencodierung des Dokuments — das Zeichenset, das das Dokument verwenden darf. `utf-8` ist ein universelles Zeichenset, das so ziemlich jedes Zeichen aus jeder menschlichen Sprache umfasst. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache anzuzeigen; es ist daher eine gute Idee, dies auf jeder von Ihnen erstellten Webseite einzustellen! Beispielsweise könnte Ihre Seite Englisch und Japanisch problemlos handhaben:

![Eine Webseite mit englischen und japanischen Zeichen, bei der die Zeichencodierung auf universell, oder utf-8, eingestellt ist. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` setzen (das Zeichenset für das lateinische Alphabet), könnte die Darstellung Ihrer Seite völlig durcheinander erscheinen:

![Eine Webseite mit englischen und japanischen Zeichen, bei der die Zeichencodierung auf Latein eingestellt ist. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren falsche Kodierungen automatisch, sodass Sie je nach verwendetem Browser dieses Problem möglicherweise nicht sehen. Sie sollten jedoch trotzdem eine Kodierung von `utf-8` in Ihrer Seite einstellen, um potenzielle Probleme in anderen Browsern zu vermeiden.

### Mit Zeichencodierung experimentieren

Um dies auszuprobieren, besuchen Sie die einfache HTML-Vorlage, die Sie im vorherigen Abschnitt über `<title>` erhalten haben (die [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), versuchen Sie, den Meta-Charset-Wert auf `ISO-8859-1` zu ändern, und fügen Sie das Japanische zu Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Ein Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten `name`- und `content`-Attribute:

- `name` gibt die Art des Metadatenelements an; welche Art von Informationen es enthält.
- `content` gibt die tatsächlichen Metadateninhalte an.

Zwei solcher Meta-Elemente, die es sich lohnt, auf Ihrer Seite einzuschließen, definieren den Autor der Seite und bieten eine kurze Beschreibung der Seite. Sehen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Das Festlegen eines Autors ist in vielerlei Hinsicht von Vorteil: Es ist nützlich zu wissen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und ihn kontaktieren möchten. Einige Content-Management-Systeme verfügen über Funktionen, um Autoreninformationen von Seiten automatisch zu extrahieren und für solche Zwecke bereitzustellen.

Das Festlegen einer Beschreibung mit Schlüsselwörtern, die sich auf den Inhalt Ihrer Seite beziehen, ist nützlich, da es die Chance hat, Ihre Seite bei relevanten Suchanfragen in Suchmaschinen höher erscheinen zu lassen (solche Aktivitäten werden als {{Glossary("SEO", "SEO")}}, oder {{Glossary("SEO", "Suchmaschinenoptimierung")}} bezeichnet.)

### Untersuchung der Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf Suchergebnisseiten verwendet. Lassen Sie uns eine Übung durchführen, um dies zu erkunden:

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Anzeigen des Quellcodes der Seite (rechtsklicken Sie auf die Seite und wählen Sie _Seitenquelltext anzeigen_ im Kontextmenü).
3. Suchen Sie das Beschreibungstag. Es wird so aussehen (obwohl es sich mit der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun nach "MDN Web Docs" in Ihrer bevorzugten Suchmaschine (wir haben Google verwendet). Sie werden feststellen, dass der Beschreibungstext `<meta>` und der `<title>` Elementinhalt im Suchergebnis verwendet wird — definitiv wertvoll, zu haben!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden Sie einige relevante Unterseiten von MDN Web Docs unter dem Hauptlink der Startseite aufgelistet sehen — dies sind sogenannte Sitelinks, die in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=en) konfigurierbar sind — eine Möglichkeit, die Suchergebnisse Ihrer Website im Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden heutzutage einfach nicht mehr verwendet. Zum Beispiel wird das Schlüsselwort-`<meta>`-Element (`<meta name="keywords" content="fill, in, your, keywords, here">`) — das dazu gedacht ist, Schlüsselwörter für Suchmaschinen bereitstellen, um zu bestimmen, welche Relevanz diese Seite für verschiedene Suchbegriffe hat — von Suchmaschinen ignoriert, da Spammer einfach die Schlüsselwortliste mit Hunderten von Schlüsselwörtern gefüllt haben und so die Ergebnisse verfälschten.

### Andere Arten von Metadaten

Während Sie im Internet unterwegs sind, werden Sie auf andere Arten von Metadaten stoßen. Viele der Funktionen, die Sie auf Websites sehen werden, sind proprietäre Entwicklungen, die entworfen wurden, um bestimmten Sites (wie Social-Networking-Sites) spezifische Informationen zu liefern, die sie verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das Facebook erfunden hat, um reichere Metadaten für Websites bereitzustellen. Im MDN Web Docs-Quellcode finden Sie dies:

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

Eine Auswirkung davon ist, dass beim Verlinken zu MDN Web Docs auf Facebook der Link zusammen mit einem Bild und einer Beschreibung erscheint: eine reichere Erfahrung für die Nutzer.

![Open-Graph-Protokolldaten von der MDN-Startseite, wie sie auf Facebook angezeigt wird, mit Bild, Titel und Beschreibung.](facebook-output.png)

## Benutzerdefinierte Icons zu Ihrer Website hinzufügen

Um das Design Ihrer Website weiter zu bereichern, können Sie in Ihren Metadaten Verweise auf benutzerdefinierte Icons hinzufügen, die in bestimmten Kontexten angezeigt werden. Der am häufigsten verwendete davon ist das **Favicon** (kurz für "Favoriten-Icon", in Bezug auf seine Verwendung in den Listen "Favoriten" oder "Lesezeichen" in Browsern).

Das bescheidene Favicon gibt es seit vielen Jahren. Es ist das erste Icon dieser Art: ein 16-Pixel-Quadrat-Icon, das an mehreren Stellen verwendet wird. Sie können Favicons (je nach Browser) im Browser-Tab, der jede offene Seite enthält, und neben den gebookmarkten Seiten in der Bookmark-Leiste sehen.

Ein Favicon kann zu Ihrer Seite hinzugefügt werden, indem Sie:

1. Es im selben Verzeichnis wie die Indexseite der Website, gespeichert im .ico-Format (die meisten unterstützen auch Favicons in häufigeren Formaten wie .gif oder .png), speichert.
2. Die folgende Zeile in den HTML-Kopfbereich Ihres Dokuments einfügen, um darauf zu verweisen:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel für ein Favicon in der Lesezeichen-Leiste:

![Die Firefox-Lesezeichenleiste mit einem gebookmarkten Beispiel, bei dem ein Favicon daneben angezeigt wird.](bookmark-favicon.png)

Möglicherweise benötigen Sie auch verschiedene Icons für verschiedene Kontexte. Zum Beispiel finden Sie dies im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, der Website ein Icon hinzuzufügen, wenn sie auf einem Apple-Gerät als Startbildschirm gespeichert ist. Möglicherweise möchten Sie sogar unterschiedliche Icons für unterschiedliche Geräte bereitstellen, um sicherzustellen, dass das Icon auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Icon verwendet wird — diese Elemente umfassen Dinge wie das Bereitstellen eines schön hochauflösenden Icons für die Verwendung, wenn die Website auf dem Startbildschirm eines iPads gespeichert ist.

Keine Sorge, alle diese Arten von Icons jetzt zu implementieren — dies ist eine ziemlich fortschrittliche Funktion, und es wird nicht erwartet, dass Sie dieses Wissen haben, um im Kurs voranzuschreiten. Der Hauptzweck hier ist es, Ihnen mitzuteilen, was solche Dinge sind, falls Sie sie beim Durchstöbern anderer Websites' Quellcodes entdecken. Wenn Sie mehr über all diese Werte und wie Sie sie auswählen können, erfahren möchten, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Website eine Content Security Policy (CSP) zur Verbesserung ihrer Sicherheit verwendet, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, prüfen Sie, ob der {{HTTPHeader("Content-Security-Policy")}} Header's [`img-src` Directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.

## Anwendung von CSS und JavaScript auf HTML

Fast alle Websites, die Sie heutzutage nutzen, verwenden {{Glossary("CSS", "CSS")}}, um schick auszusehen, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionalitäten wie Videoplayer, Karten, Spiele und mehr zu betreiben. Diese werden in der Regel auf einer Webseite mit dem {{htmlelement("link")}}-Element und dem {{htmlelement("script")}}-Element angewendet.

- Das {{htmlelement("link")}}-Element sollte immer in den Kopfbereich Ihres Dokuments gehen. Es nimmt zwei Attribute auf: `rel="stylesheet"`, was darauf hinweist, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den Kopfbereich gehen und sollte ein `src`-Attribut enthalten, das den Pfad zum JavaScript angibt, das geladen werden soll, sowie `defer` (ein [booleanes Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)), das dem Browser mitteilt, das JavaScript zu laden, nachdem die Seite mit dem Parsen des HTMLs fertig ist. Das `defer`-Attribut ist nützlich, da es garantiert, dass das HTML vollständig geladen ist, bevor das JavaScript ausgeführt wird, sodass Sie keine Fehler erhalten, weil JavaScript versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite existiert. Es gibt [mehrere Möglichkeiten](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste, die in modernen Browsern zu verwenden ist.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element mag wie ein {{Glossary("void_element", "leeres Element")}} aussehen, aber es ist keines und benötigt daher ein schließendes Tag. Anstatt auf eine externe Skriptdatei zu verweisen, können Sie Ihr Skript auch im `<script>`-Element einfügen.

### Sie sind dran: Anwenden von CSS und JavaScript auf eine Seite

1. Um diese Übung zu starten, besorgen Sie sich eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) Dateien und speichern Sie sie auf Ihrem lokalen Computer im selben Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateierweiterungen gespeichert sind.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Indem Sie den obigen Informationen folgen, fügen Sie {{htmlelement("link")}}- und {{htmlelement("script")}}-Elemente in Ihr HTML ein, damit Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn dies korrekt durchgeführt wird, sollten Sie, wenn Sie Ihr HTML speichern und Ihren Browser aktualisieren, sehen können, dass sich Dinge geändert haben:

![Beispiel, das eine Seite mit angewendetem CSS und JavaScript zeigt. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie nun irgendwo außerhalb der Liste klicken, wird ein Dialogfeld angezeigt, in dem Sie aufgefordert werden, einen Text für ein neues Listenelement einzugeben. Wenn Sie die OK-Taste drücken, wird ein neues Listenelement mit diesem Text zur Liste hinzugefügt. Wenn Sie auf ein bestehendes Listenelement klicken, wird ein Dialogfeld angezeigt, in dem Sie den Text des Elements ändern können.
- Das CSS hat den Hintergrund grün gemacht und die Schrift vergrößert. Es hat auch einige der vom JavaScript zur Seite hinzugefügten Inhalte gestylt (der rote Balken mit dem schwarzen Rand ist das Styling, das das CSS zur JS-generierten Liste hinzugefügt hat).

> [!NOTE]
> Wenn Sie in dieser Übung stecken bleiben und das CSS/JS nicht anwenden können, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispielseite anzusehen.

## Die primäre Sprache des Dokuments festlegen

Abschließend ist es erwähnenswert, dass Sie die Sprache Ihrer Seite setzen können (und wirklich sollten). Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie in der [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) zu sehen und unten gezeigt wird).

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf vielerlei Weise nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indexiert, wenn seine Sprache festgelegt ist (damit es beispielsweise korrekt in sprachspezifischen Ergebnissen erscheint), und es ist nützlich für Menschen mit Sehbehinderungen, die Bildschirmlesegeräte verwenden (zum Beispiel, das Wort "six" existiert sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen).

Sie können auch Teilbereiche Ihres Dokuments auf eine andere Sprache erkennen lassen. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt so kennzeichnen, dass er als Japanisch erkannt wird:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes werden durch den [ISO 639-1](https://de.wikipedia.org/wiki/ISO_639-1)-Standard definiert. Mehr darüber erfahren Sie in [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/).

## Zusammenfassung

Das markiert das Ende unserer Schnellübersicht durch den HTML-Kopfbereich — es gibt noch viel mehr, das Sie hier tun können, aber eine vollständige Übersicht wäre zu diesem Zeitpunkt langweilig und verwirrend, und wir wollten Ihnen nur eine Vorstellung der häufigsten Dinge geben, die Sie darin finden werden! Im nächsten Artikel werden wir uns mit [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) befassen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
