---
title: Was befindet sich im Kopf? Metadaten in HTML
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

Der [head](/de/docs/Glossary/Head) eines HTML-Dokuments ist der Teil, der im Webbrowser nicht angezeigt wird, wenn die Seite geladen wird. Er enthält Informationen wie den {{htmlelement("title")}}, Links zu [CSS](/de/docs/Glossary/CSS) (falls Sie Ihr HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favoriten-Symbolen und andere Metadaten (Daten über das HTML, wie den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben). Webbrowser verwenden Informationen, die im [head](/de/docs/Glossary/Head) enthalten sind, um das HTML-Dokument korrekt darzustellen. In diesem Artikel werden wir all dies und noch mehr behandeln, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a>
        behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie über den HTML-Head, seine Funktion, die wichtigsten Elemente, die er enthalten kann, und welchen Effekt er auf das HTML-Dokument haben kann.
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Head?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_document), noch einmal durchgehen:

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

Der HTML-Head ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zum Inhalt des {{htmlelement("body")}}-Elements (der auf der Seite angezeigt wird, wenn sie im Browser geladen wird), wird der Inhalt des Heads nicht auf der Seite angezeigt. Stattdessen ist es die Aufgabe des Heads, [Metadaten](/de/docs/Glossary/Metadata) über das Dokument zu enthalten. Im obigen Beispiel ist der Head ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Auf größeren Seiten kann der Head jedoch ziemlich groß werden. Versuchen Sie, einige Ihrer Lieblingswebsites zu besuchen und verwenden Sie die [Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools), um deren Head-Inhalte zu überprüfen. Unser Ziel ist es nicht, Ihnen zu zeigen, wie man alles benutzt, was möglicherweise in den Head integriert werden kann, sondern Ihnen beizubringen, wie man die wichtigsten Elemente verwendet, die Sie im Head einfügen möchten, und Ihnen ein gewisses Verständnis zu vermitteln. Lassen Sie uns beginnen.

## Hinzufügen eines Titels

Wir haben das {{htmlelement("title")}}-Element bereits in Aktion gesehen – es kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um eine Überschrift oberster Ebene zu Ihrem Body-Inhalt hinzuzufügen – dies wird manchmal auch als Seitentitel bezeichnet. Aber sie sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn sie im Browser geladen wird – in der Regel sollte es einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu kennzeichnen (den Titel der Geschichte, den Nachrichtenüberschrift oder was auch immer zu Ihrer Nutzung passt.)
- Das {{htmlelement("title")}}-Element ist Metadaten, die den Titel des gesamten HTML-Dokuments repräsentieren (nicht den Inhalt des Dokuments.)

### Aktives Lernen: Ein einfaches Beispiel untersuchen

1. Um mit diesem aktiven Lernen zu beginnen, möchten wir, dass Sie zu unserem GitHub-Repo gehen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, entweder

   1. Kopieren Sie den Code von der Seite und fügen Sie ihn in eine neue Textdatei in Ihrem Code-Editor ein, dann speichern Sie sie an einem sinnvollen Ort.
   2. Drücken Sie die "Raw"-Schaltfläche auf der GitHub-Seite, wodurch der Rohcode erscheint (möglicherweise in einem neuen Browser-Tab). Wählen Sie dann das Menü _Seite speichern unter..._ Ihres Browsers und wählen Sie einen sinnvollen Ort zum Speichern der Datei.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas in der Art sehen:

   ![Eine Webseite mit 'title'-Text im Browser-Tab und 'h1'-Text als Seitenüberschrift im Dokumentinhalt.](title-example.png)

   Es sollte nun völlig offensichtlich sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, die Inhalte dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie Spaß damit.

Die Inhalte des `<title>`-Elements werden auch auf andere Weise verwendet. Wenn Sie zum Beispiel versuchen, die Seite zu bookmarken (_Bookmarks > Bookmark This Page_ oder das Sternsymbol in der URL-Leiste in Firefox), werden Sie sehen, dass die `<title>`-Inhalte als vorgeschlagener Lesezeichenname ausgefüllt sind.

![Eine Webseite wird in Firefox mit einem automatisch ausgefüllten Lesezeichennamen gespeichert, der die Inhalte des 'title'-Elements enthält.](bookmark-example.png)

Die `<title>`-Inhalte werden auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Möglichkeit, Metadaten zu einem Dokument hinzuzufügen – das {{htmlelement("meta")}}-Element. Natürlich könnte auch das andere Material, über das wir in diesem Artikel sprechen, als Metadaten betrachtet werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die im `<head>` Ihrer Seite enthalten sein können, aber wir werden nicht versuchen, sie alle an dieser Stelle zu erklären, da dies zu verwirrend wäre. Stattdessen werden wir ein paar Dinge erklären, die Sie möglicherweise häufig sehen, nur um Ihnen eine Vorstellung zu geben.

### Die Zeichenkodierung Ihres Dokuments spezifizieren

In dem Beispiel, das wir oben gesehen haben, war dieser Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element spezifiziert die Zeichenkodierung des Dokuments – das Zeichenset, das das Dokument verwenden darf. `utf-8` ist ein universelles Zeichenset, das praktisch jedes Zeichen aus jeder menschlichen Sprache enthält. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache anzuzeigen; es ist daher eine gute Idee, dies auf jeder Webseite, die Sie erstellen, einzustellen! Zum Beispiel könnte Ihre Seite problemlos Englisch und Japanisch anzeigen:

![Eine Webseite mit englischen und japanischen Zeichen, mit der Zeichenkodierung auf universell oder utf-8 eingestellt. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichenkodierung zum Beispiel auf `ISO-8859-1` einstellen (das Zeichenset für das lateinische Alphabet), kann die Seitendarstellung vermischt erscheinen:

![Eine Webseite mit englischen und japanischen Zeichen, mit der Zeichenkodierung auf lateinisch eingestellt. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) reparieren automatisch falsche Kodierungen, sodass Sie dieses Problem je nach verwendetem Browser möglicherweise nicht sehen. Sie sollten dennoch eine Kodierung von `utf-8` auf Ihrer Seite setzen, um potenzielle Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Mit Zeichenkodierung experimentieren

Um dies auszuprobieren, besuchen Sie die einfache HTML-Vorlage, die Sie im vorherigen Abschnitt über `<title>` erhalten haben (die [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), versuchen Sie, den Meta-Charset-Wert auf `ISO-8859-1` zu ändern und fügen Sie das Japanische zu Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Hinzufügen eines Autors und einer Beschreibung

Viele `<meta>`-Elemente enthalten `name`- und `content`-Attribute:

- `name` spezifiziert den Typ des Metaelements; welche Art von Informationen es enthält.
- `content` spezifiziert den eigentlichen Meta-Inhalt.

Zwei solche Metaelemente, die nützlich sind, um sie auf Ihrer Seite einzufügen, definieren den Autor der Seite und bieten eine kurze Beschreibung der Seite. Lassen Sie uns ein Beispiel ansehen:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Das Angeben eines Autors ist auf viele Arten vorteilhaft: Es ist nützlich, zu wissen, wer die Seite geschrieben hat, falls Sie Fragen zum Inhalt haben und den Autor kontaktieren möchten. Einige Content-Management-Systeme verfügen über Funktionen, um automatisch Informationen zum Seitenautor zu extrahieren und für solche Zwecke verfügbar zu machen.

Das Angeben einer Beschreibung, die Schlüsselwörter zum Inhalt Ihrer Seite enthält, ist nützlich, da es die Möglichkeit bietet, Ihre Seite höher in relevanten Suchanfragen in Suchmaschinen erscheinen zu lassen (solche Aktivitäten werden als [Suchmaschinenoptimierung](/de/docs/Glossary/SEO) oder [SEO](/de/docs/Glossary/SEO) bezeichnet).

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf den Seiten der Suchmaschinenergebnisse verwendet. Lassen Sie uns eine Übung durchgehen, um dies zu erkunden

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Sehen Sie sich den Seitenquellcode an (Rechtsklick auf die Seite, wählen Sie _Seitenquelltext anzeigen_ aus dem Kontextmenü.)
3. Finden Sie das meta-Beschreibungstag. Es wird in etwa so aussehen (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun nach "MDN Web Docs" in Ihrer bevorzugten Suchmaschine (wir haben Google verwendet). Sie werden feststellen, dass die `<meta>`-Beschreibung und der `<title>`-Elementinhalt im Suchergebnis verwendet werden – definitiv einen Vorteil!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google sehen Sie einige relevante Unterseiten von MDN Web Docs unterhalb des Haupt-Homepage-Links aufgeführt – diese werden als Sitelinks bezeichnet und können in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=de) konfiguriert werden – eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden einfach nicht mehr verwendet. Das `<meta name="keywords">`-Element beispielsweise – das Schlüsselwörter für Suchmaschinen bereitstellen soll, um die Relevanz dieser Seite für verschiedene Suchbegriffe zu bestimmen – wird von Suchmaschinen ignoriert, weil Spammer die Keyword-Liste einfach mit Hunderten von Keywords füllten, wodurch Suchergebnisse beeinflusst wurden.

### Andere Arten von Metadaten

Wenn Sie im Web unterwegs sind, werden Sie auch andere Arten von Metadaten finden. Viele der Features, die Sie auf Websites sehen, sind proprietäre Kreationen, die entwickelt wurden, um bestimmten Sites (wie sozialen Netzwerken) spezifische Informationen bereitzustellen, die sie verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das Facebook erfunden hat, um reichere Metadaten für Websites bereitzustellen. Im Quellcode von MDN Web Docs finden Sie Folgendes:

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

Eine Wirkung davon ist, dass beim Verlinken zu MDN Web Docs auf Facebook der Link zusammen mit einem Bild und einer Beschreibung angezeigt wird: ein reichhaltigeres Erlebnis für die Nutzer.

![Open-Graph-Protokolldaten von der MDN-Startseite, wie sie auf Facebook angezeigt werden, mit einem Bild, Titel und Beschreibung.](facebook-output.png)

## Hinzufügen benutzerdefinierter Symbole zu Ihrer Website

Um das Design Ihrer Seite weiter zu bereichern, können Sie benutzerdefinierte Symbole in Ihren Metadaten referenzieren, die in bestimmten Kontexten angezeigt werden. Am häufigsten wird das **Favicon** (kurz für "Favoritensymbol", bezogen auf seine Verwendung in den "Favoriten" oder "Lesezeichen"-Listen in Browsern) verwendet.

Das bescheidene Favicon gibt es schon seit vielen Jahren. Es ist das erste Symbol dieser Art: ein 16-Pixel-Quadratsymbol, das an mehreren Stellen verwendet wird. Sie sehen möglicherweise (abhängig vom Browser) Favicons im Browser-Tab, der jede geöffnete Seite enthält, und neben Lesezeichen in der Lesezeichenleiste angezeigt.

Ein Favicon kann Ihrer Seite hinzugefügt werden, indem:

1. Sie es im gleichen Verzeichnis wie die Indexseite der Site im `.ico`-Format speichern (die meisten unterstützen auch Favicons in verbreiteteren Formaten wie `.gif` oder `.png`)
2. Die folgende Zeile in den {{HTMLElement("head")}}-Block Ihres HTML einfügen, um darauf zu verweisen:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ein Beispiel für ein Favicon in der Lesezeichenleiste:

![Das Firefox-Lesezeichenfenster, das ein Lesezeichen mit einem dargestellten Favicon anzeigt.](bookmark-favicon.png)

Möglicherweise benötigen Sie auch unterschiedliche Symbole für verschiedene Kontexte. Zum Beispiel finden Sie Folgendes im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, das Symbol anzuzeigen, wenn die Seite auf einem Apple-Gerät gespeichert wird. Sie möchten möglicherweise sogar unterschiedliche Symbole für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Symbol auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erläutern, wofür jedes Symbol verwendet wird – diese Elemente decken Dinge ab, wie beispielsweise das Bereitstellen eines schönen hochauflösenden Symbols, das verwendet wird, wenn die Website auf dem Startbildschirm eines iPads gespeichert wird.

Machen Sie sich jetzt keine Sorgen, alle diese Arten von Symbolen umzusetzen – dies ist eine ziemlich fortgeschrittene Funktion, und Sie werden nicht erwartet, dass Sie dieses Wissen haben, um durch den Kurs zu kommen. Das Hauptziel hier ist, Ihnen zu zeigen, was solche Dinge sind, falls Sie ihnen beim Browsen durch Quellcodes anderer Websites begegnen. Wenn Sie mehr über all diese Werte und deren Auswahl lernen möchten, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Site eine Content Security Policy (CSP) verwendet, um ihre Sicherheit zu erhöhen, gilt die Richtlinie auch für das Favicon. Wenn Sie auf Probleme stoßen, bei denen das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header [`img-src` directive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.

## Anwenden von CSS und JavaScript auf HTML

So gut wie alle modernen Webseiten setzen [CSS](/de/docs/Glossary/CSS) ein, um sie optisch ansprechend zu gestalten, und [JavaScript](/de/docs/Glossary/JavaScript), um interaktive Funktionen wie Videoplayer, Karten, Spiele und mehr zu realisieren. Diese werden am häufigsten auf eine Webseite mittels {{htmlelement("link")}}-Element und {{htmlelement("script")}}-Element angewendet.

- Das {{htmlelement("link")}}-Element sollte immer innerhalb des Heads Ihres Dokuments platziert werden. Es nimmt zwei Attribute, `rel="stylesheet"`, was anzeigt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den Head gehen und ein `src`-Attribut enthalten, das den Pfad zum zu ladenden JavaScript enthält, sowie `defer`, das im Grunde den Browser anweist, das JavaScript zu laden, nachdem das HTML vollständig geparst wurde. Dies ist nützlich, da es sicherstellt, dass das gesamte HTML geladen ist, bevor das JavaScript ausgeführt wird, sodass Sie keine Fehler erhalten, die darauf beruhen, dass das JavaScript versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite vorhanden ist. Es gibt tatsächlich eine Reihe von Möglichkeiten, JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste, die Sie für moderne Browser verwenden sollten (für andere lesen Sie [Ladestrategien für Skripte](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies)).

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element mag wie ein [Void-Element](/de/docs/Glossary/void_element) aussehen, ist es aber nicht, und benötigt daher ein abschließendes Tag. Anstatt auf eine externe Skriptdatei hinzuzeigen, können Sie Ihr Skript auch innerhalb des `<script>`-Elements platzieren.

### Aktives Lernen: Anwenden von CSS und JavaScript auf eine Seite

1. Um mit diesem aktiven Lernen zu starten, holen Sie sich eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css)-Dateien und speichern Sie sie auf Ihrem lokalen Computer im selben Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateiendungen gespeichert werden.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie, basierend auf den oben gegebenen Informationen, {{htmlelement("link")}}- und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, sodass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn alles korrekt gemacht wurde, sollten Sie nach dem Speichern Ihres HTML und dem Aktualisieren Ihres Browsers sehen, dass sich Dinge verändert haben:

![Beispiel, das eine Seite zeigt, auf die CSS und JavaScript angewendet wurden. Das CSS lässt die Seite grün werden, während das JavaScript eine dynamische Liste hinzufügt.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Nun, wenn Sie irgendwo außerhalb der Liste klicken, erscheint ein Dialogfeld, das Sie dazu auffordert, etwas Text für einen neuen Listeneintrag einzugeben. Wenn Sie dann auf die OK-Schaltfläche drücken, wird ein neuer Listeneintrag hinzugefügt, der den Text enthält. Wenn Sie auf ein vorhandenes Listenelement klicken, erscheint ein Dialogfeld, das Ihnen erlaubt, den Text des Elements zu ändern.
- Das CSS hat dazu geführt, dass der Hintergrund grün wird und der Text größer. Es hat auch Teile des Inhalts gestylt, den das JavaScript zur Seite hinzugefügt hat (der rote Balken mit dem schwarzen Rahmen ist das Styling des CSS, das zur von JS generierten Liste hinzugefügt wurde.)

> [!NOTE]
> Wenn Sie in dieser Übung feststecken und CSS/JS nicht anwenden können, versuchen Sie unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html)-Beispielseite anzuschauen.

## Festlegung der primären Sprache des Dokuments

Schließlich ist es erwähnenswert, dass Sie (und sollten) die Sprache Ihrer Seite festlegen können. Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Global_attributes/lang) zum öffnenden HTML-Tag geschehen (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) gezeigt).

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf vielerlei Weise nützlich. Ihr HTML-Dokument wird besser von Suchmaschinen indexiert, wenn seine Sprache festgelegt ist (so dass es beispielsweise korrekt in sprachspezifischen Ergebnissen erscheinen kann), und es ist nützlich für sehbehinderte Personen mit Bildschirmlesegeräten (zum Beispiel existiert das Wort "six" sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen.)

Sie können auch Abschnitte Ihres Dokuments so einstellen, dass sie als andere Sprachen erkannt werden. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt so einstellen, dass er als Japanisch erkannt wird:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes werden durch den [ISO 639-1](https://de.wikipedia.org/wiki/ISO_639-1)-Standard definiert. Sie können mehr darüber in [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/) erfahren.

## Zusammenfassung

Damit endet unsere schnelle Tour durch den HTML-Head – es gibt noch viel mehr, was Sie hier tun können, aber eine umfassende Tour wäre an diesem Punkt langweilig und verwirrend, und wir wollten Ihnen nur eine Vorstellung von den häufigsten Dingen geben, die Sie hier finden! Im nächsten Artikel werden wir uns mit [HTML-Textgrundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) befassen.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}
