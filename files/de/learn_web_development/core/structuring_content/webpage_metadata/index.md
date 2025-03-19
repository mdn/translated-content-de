---
title: Was befindet sich im Kopf? Metadaten von Webseiten
short-title: Metadaten von Webseiten
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "Kopf")}} eines HTML-Dokuments ist der Teil, der nicht im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadaten-Informationen wie den {{htmlelement("title")}} der Seite, Links zu {{Glossary("CSS", "CSS")}} (falls Sie Ihr HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie zum Beispiel der Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden die im {{Glossary("Head", "Kopf")}} enthaltenen Informationen, um das HTML-Dokument korrekt darzustellen. In diesem Artikel behandeln wir all das und mehr, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in der vorherigen Lektion behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der HTML-Kopf und seine Funktion als Metadaten-Container für das Dokument.</li>
          <li>Festlegen der Zeichencodierung und des Titels des Dokuments.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verknüpfung mit Icons zur Verwendung in Browsern und mobilen Plattformen.</li>
          <li>Verknüpfung mit Stylesheets und Skriptdateien.</li>
          <li>Die Notwendigkeit, die Sprache eines Dokuments mit dem <code>lang</code>-Attribut im öffnenden <code>&lt;html&gt;</code>-Tag festzulegen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Kopf?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document), noch einmal aufgreifen:

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

Der HTML-Kopf ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zu den Inhalten des {{htmlelement("body")}}-Elements (die auf der Seite angezeigt werden, wenn sie in einem Browser geladen sind), wird der Inhalt des Kopfs nicht auf der Seite angezeigt. Stattdessen besteht die Aufgabe des Kopfs darin, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der Kopf recht klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

In größeren Seiten kann der Kopf jedoch recht groß werden. Versuchen Sie, einige Ihrer Lieblings-Websites zu besuchen, und verwenden Sie die [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um deren Kopf-Inhalte zu überprüfen. Unser Ziel hier ist nicht, Ihnen zu zeigen, wie Sie alles verwenden, was möglicherweise im Kopf platziert werden kann, sondern Ihnen beizubringen, wie Sie die wichtigsten Elemente, die Sie in den Kopf einfügen möchten, verwenden und Ihnen ein gewisses Maß an Vertrautheit zu vermitteln. Lassen Sie uns beginnen.

## Einen Titel hinzufügen

Wir haben bereits das {{htmlelement("title")}}-Element in Aktion gesehen — es kann verwendet werden, um einem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um eine Überschrift der obersten Ebene zu Ihrem Körperinhalt hinzuzufügen — dies wird auch manchmal als Seitentitel bezeichnet. Aber das sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn sie im Browser geladen ist — im Allgemeinen sollte es einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu markieren (den Titel der Geschichte, die Nachrichtenüberschrift oder was auch immer für Ihre Verwendung angemessen ist).
- Das {{htmlelement("title")}}-Element sind Metadaten, die den Titel des Gesamt-HTML-Dokuments darstellen (nicht den Inhalt des Dokuments).

### Aktives Lernen: Ein Beispiel untersuchen

1. Zu Beginn dieses aktiven Lernens möchten wir, dass Sie zu unserem GitHub-Repo gehen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, entweder

   1. Kopieren und fügen Sie den Code aus der Seite in eine neue Textdatei in Ihrem Code-Editor ein und speichern Sie sie an einem sinnvollen Ort.
   2. Drücken Sie die "Raw"-Schaltfläche auf der GitHub-Seite, wodurch der rohe Code angezeigt wird (möglicherweise in einem neuen Browser-Tab). Wählen Sie als Nächstes das Menü _Seite speichern unter..._ Ihres Browsers und wählen Sie einen sinnvollen Ort, um die Datei zu speichern.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas sehen wie:

   ![Eine Webseite mit 'title'-Text im Tab der Browserseite und 'h1'-Text als Überschrift im Dokumentenkörper.](title-example.png)

   Es sollte nun völlig klar sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, die Inhalte dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie etwas Spaß damit.

Die Inhalte des `<title>`-Elements werden auch anderweitig verwendet. Wenn Sie beispielsweise versuchen, die Seite zu den Lesezeichen hinzuzufügen (_Lesezeichen > Diese Seite als Lesezeichen hinzufügen_ oder das Sternsymbol in der URL-Leiste in Firefox), werden die Inhalte des `<title>`-Elements als vorgeschlagener Lesezeichenname ausgefüllt.

![Eine Webseite wird in Firefox als Lesezeichen hinzugefügt. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements gefüllt](bookmark-example.png)

Die Inhalte des `<title>`-Elements werden auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML bietet eine "offizielle" Möglichkeit, Metadaten zu einem Dokument hinzuzufügen — das {{htmlelement("meta")}}-Element. Natürlich können die anderen in diesem Artikel besprochenen Elemente auch als Metadaten betrachtet werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können, aber wir werden nicht versuchen, sie alle zu diesem Zeitpunkt zu erklären, da es zu verwirrend wäre. Stattdessen erklären wir einige Dinge, die Sie möglicherweise häufig sehen, nur um Ihnen eine Vorstellung zu geben.

### Zeichencodierung Ihres Dokuments angeben

In dem Beispiel, das wir oben gesehen haben, war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element legt die Zeichencodierung des Dokuments fest — den Zeichensatz, den das Dokument verwenden darf. `utf-8` ist ein universeller Zeichensatz, der so ziemlich jedes Zeichen aus jeder menschlichen Sprache enthält. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache anzuzeigen; es ist daher eine gute Idee, dies auf jeder Webseite, die Sie erstellen, festzulegen! Zum Beispiel könnte Ihre Seite sowohl Englisch als auch Japanisch problemlos anzeigen:

![Eine Webseite mit englischen und japanischen Zeichen, wobei die Zeichencodierung auf universell oder utf-8 eingestellt ist. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` setzen (den Zeichensatz für das lateinische Alphabet), könnte Ihre Seitendarstellung völlig durcheinander erscheinen:

![Eine Webseite mit englischen und japanischen Zeichen, wobei die Zeichencodierung auf lateinisch eingestellt ist. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren fehlerhafte Codierungen automatisch, sodass Sie je nach Browser dieses Problem möglicherweise nicht sehen. Sie sollten dennoch eine Codierung von `utf-8` auf Ihrer Seite einstellen, um eventuelle Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Mit Zeichencodierung experimentieren

Um dies auszuprobieren, kehren Sie zur einfachen HTML-Vorlage zurück, die Sie im vorherigen Abschnitt über `<title>` erhalten haben (die [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), versuchen Sie, den Wert der Meta-Zeichencodierung auf `ISO-8859-1` zu ändern, und fügen Sie das Japanische zu Ihrer Seite hinzu. Dies ist der von uns verwendete Code:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Einen Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten `name` und `content` Attribute:

- `name` gibt den Typ des Metaelements an, d.h. welche Art von Informationen es enthält.
- `content` gibt den tatsächlichen Metainhalt an.

Zwei solche Metaelemente, die nützlich sind, um sie auf Ihrer Seite einzuschließen, definieren den Autor der Seite und bieten eine prägnante Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Einen Autor anzugeben, ist in vielerlei Hinsicht von Vorteil: Es ist nützlich, zu wissen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und sie kontaktieren möchten. Einige Content-Management-Systeme verfügen über Funktionen, um automatisch Informationen zum Seitenautor zu extrahieren und für solche Zwecke verfügbar zu machen.

Eine Beschreibung anzugeben, die Schlüsselwörter enthält, die sich auf den Inhalt Ihrer Seite beziehen, ist sinnvoll, da sie das Potenzial hat, Ihre Seite bei relevanten Suchanfragen in Suchmaschinen höher erscheinen zu lassen (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}}, oder {{Glossary("SEO", "SEO")}} bezeichnet.)

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf Ergebnisseiten von Suchmaschinen verwendet. Lassen Sie uns eine Übung durchgehen, um dies zu erkunden.

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Sehen Sie sich den Quelltext der Seite an (klicken Sie mit der rechten Maustaste auf die Seite und wählen Sie _Seitenquelltext anzeigen_ im Kontextmenü.)
3. Finden Sie das Description-Metatags. Es wird ungefähr so aussehen (obwohl es sich mit der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun in Ihrer bevorzugten Suchmaschine nach "MDN Web Docs" (wir haben Google verwendet). Ihnen wird auffallen, dass die Beschreibung `<meta>` und `<title>`-Elementinhalte im Suchergebnis verwendet werden — definitiv lohnend!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google sehen Sie einige relevante Unterseiten von MDN Web Docs, die unter dem Hauptlink zur Startseite aufgeführt sind — diese werden als Sitelinks bezeichnet und sind konfigurierbar in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=en) — eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden einfach nicht mehr verwendet. Zum Beispiel wird das Schlüsselwort-`<meta>`-Element (`<meta name="keywords" content="füllen, Sie, hier, Ihre, Schlüsselwörter, ein">`) — das Suchmaschinen Schlüsselwörter bieten soll, um die Relevanz dieser Seite für verschiedene Suchbegriffe zu bestimmen — von Suchmaschinen ignoriert, da Spammer einfach die Liste der Schlüsselwörter mit Hunderten von Schlüsselwörtern füllten und die Ergebnisse beeinträchtigten.

### Andere Arten von Metadaten

Wenn Sie im Web unterwegs sind, werden Sie auch andere Arten von Metadaten finden. Viele der Funktionen, die Sie auf Websites sehen, sind proprietäre Kreationen, die dazu dienen, bestimmten Websites (wie sozialen Netzwerken) spezifische Informationen zur Verfügung zu stellen, die sie verwenden können.

Zum Beispiel ist [Open Graph-Daten](https://ogp.me/) ein Metadatenprotokoll, das Facebook erfunden hat, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode der MDN Web Docs werden Sie Folgendes finden:

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

Eine Wirkung davon ist, dass wenn Sie auf Facebook auf MDN Web Docs verlinken, der Link zusammen mit einem Bild und einer Beschreibung erscheint: ein reicheres Erlebnis für die Benutzer.

![Open Graph-Protokolldaten von der MDN-Startseite, wie sie in Facebook angezeigt werden, zeigen ein Bild, einen Titel und eine Beschreibung.](facebook-output.png)

## Benutzerdefinierte Icons zu Ihrer Seite hinzufügen

Um das Design Ihrer Seite weiter zu bereichern, können Sie in Ihren Metadaten Referenzen zu benutzerdefinierten Icons hinzufügen, die in bestimmten Kontexten angezeigt werden. Das am häufigsten verwendete dieser Icons ist das **Favicon** (die Abkürzung für "Favoriten-Icon", was sich auf seine Verwendung in den "Favoriten" oder "Lesezeichen"-Listen in Browsern bezieht).

Das bescheidene Favicon gibt es schon seit vielen Jahren. Es ist das erste dieser Art von Icons: ein 16-Pixel-Quadrat-Icon, das an mehreren Stellen verwendet wird. Je nach Browser können Sie Favicons im Browser-Tab mit jeder offenen Seite angezeigt sehen und neben markierten Seiten im Lesezeichen-Panel.

Ein Favicon kann zu Ihrer Seite hinzugefügt werden, indem Sie:

1. Es im gleichen Verzeichnis wie die Indexseite der Website speichern, gespeichert im `.ico`-Format (die meisten unterstützen auch Favicons in gängigeren Formaten wie `.gif` oder `.png`)
2. Die folgende Zeile in den HTML-{{HTMLElement("head")}}-Block einfügen, um es zu referenzieren:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel für ein Favicon im Lesezeichen-Panel:

![Das Firefox-Lesezeichen-Panel zeigt ein markiertes Beispiel mit einem nebenstehenden Favicon.](bookmark-favicon.png)

Sie benötigen möglicherweise auch unterschiedliche Icons für verschiedene Kontexte. Beispielsweise werden Sie dies im Quellcode der MDN-Webseite finden:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, die Website auf einem Apple-Geräte-Startbildschirm ein Icon anzeigen zu lassen. Sie möchten möglicherweise sogar verschiedene Icons für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Icon auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Icon verwendet wird – diese Elemente decken Dinge ab wie das Bereitstellen eines schönen hochauflösenden Icons, das verwendet wird, wenn die Website auf einem iPad-Startbildschirm gespeichert wird.

Machen Sie sich jetzt keine großen Gedanken über die Implementierung all dieser Arten von Icons — dies ist eine ziemlich fortgeschrittene Funktion und es wird nicht erwartet, dass Sie darüber Wissen verfügen, um mit dem Kurs fortzufahren. Der Hauptzweck ist hier, Sie mit solchen Dingen vertraut zu machen, falls Sie auf sie stoßen, während Sie den Quellcode anderer Websites durchsuchen. Wenn Sie mehr über all diese Werte erfahren möchten und wie Sie sie auswählen, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Seite eine Content Security Policy (CSP) verwendet, um ihre Sicherheit zu erhöhen, bezieht sich die Richtlinie auch auf das Favicon. Wenn Sie Probleme haben, das Favicon nicht zu laden, überprüfen Sie, ob der {{HTTPHeader("Content-Security-Policy")}}-Header der [`img-src` Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.

## Anwenden von CSS und JavaScript auf HTML

So ziemlich alle Websites, die Sie heutzutage nutzen, verwenden {{Glossary("CSS", "CSS")}}, um cool auszusehen, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionen wie Videoplayer, Karten, Spiele und mehr zu betreiben. Diese werden am häufigsten mit dem {{htmlelement("link")}}-Element und dem {{htmlelement("script")}}-Element durch eine Webseite angewendet.

- Das {{htmlelement("link")}}-Element sollte immer in den Kopf Ihres Dokuments gehen. Es benötigt zwei Attribute, `rel="stylesheet"`, was anzeigt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den Kopf gehen und sollte ein `src`-Attribut enthalten, das den Pfad zum JavaScript enthält, das Sie laden möchten, sowie `defer` (ein [Boolesches Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)), welches den Browser anweist, das JavaScript nach dem Parsen des HTML zu laden. Das `defer`-Attribut ist nützlich, da es garantiert, dass das HTML vollständig geladen ist, bevor das JavaScript läuft, sodass keine Fehler durch JavaScript auftreten, das versucht, nicht vorhandene HTML-Elemente auf der Seite abzufragen. Es gibt [mehrere Möglichkeiten](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste Methode für moderne Browser.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element mag wie ein {{Glossary("void_element", "void element")}} aussehen, ist es aber nicht und benötigt daher einen schließenden Tag. Anstelle eines externen Skriptdateipfads können Sie Ihren Skriptcode auch innerhalb des `<script>`-Elements platzieren.

### Aktives Lernen: CSS und JavaScript auf eine Seite anwenden

1. Um dieses aktive Lernen zu starten, holen Sie sich Kopien unserer Dateien [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) und speichern Sie sie auf Ihrem lokalen Computer im gleichen Verzeichnis. Stellen Sie sicher, dass sie mit den korrekten Namen und Dateierweiterungen gespeichert sind.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie gemäß den oben gegebenen Informationen {{htmlelement("link")}}- und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, sodass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn alles korrekt gemacht wurde, sollten Sie die Änderung sehen, wenn Sie Ihr HTML speichern und Ihren Browser aktualisieren:

![Beispiel, das eine Seite zeigt, auf die CSS und JavaScript angewendet wurde. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie neben die Liste klicken, öffnet sich ein Dialogfeld, in das Sie Text für ein neues Listenelement eingeben können. Wenn Sie die OK-Schaltfläche drücken, wird ein neues Listenelement zur Liste hinzugefügt, das den Text enthält. Wenn Sie auf ein vorhandenes Listenelement klicken, öffnet sich ein Dialogfeld, in dem Sie den Text des Elements ändern können.
- Das CSS hat dazu geführt, dass der Hintergrund grün geworden ist und der Text größer. Es hat auch einen Teil des Inhalts, den das JavaScript zur Seite hinzugefügt hat, gestaltet (die rote Leiste mit der schwarzen Umrandung ist das Styling, das das CSS zur von JS generierten Liste hinzugefügt hat).

> [!NOTE]
> Wenn Sie bei dieser Übung feststecken und das CSS/JS nicht anwenden können, versuchen Sie, sich unsere Beispielseite [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) anzusehen.

## Die primäre Sprache des Dokuments festlegen

Schließlich ist es erwähnenswert, dass Sie die Sprache Ihrer Seite festlegen können (und tatsächlich sollten). Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie im Beispiel [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) gezeigt).

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf vielfältige Weise nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indiziert, wenn die Sprache festgelegt ist (es kann beispielsweise korrekt in sprachspezifischen Ergebnissen erscheinen), und es ist nützlich für Menschen mit Sehbehinderungen, die Vorlesesoftware verwenden (zum Beispiel existiert das Wort "six" sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments als verschiedene Sprachen erkannt werden lassen. Beispielsweise könnten wir unseren japanischen Sprachabschnitt wie folgt als Japanisch kennzeichnen:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind durch den [ISO 639-1](https://de.wikipedia.org/wiki/ISO_639-1)-Standard definiert. Sie können mehr über sie in [Sprachtags in HTML und XML](https://www.w3.org/International/articles/language-tags/) erfahren.

## Zusammenfassung

Damit endet unsere kurze Tour durch den HTML-Kopf — es gibt noch viel mehr, was Sie hier tun können, aber eine vollständige Tour wäre an diesem Punkt langweilig und verwirrend, und wir wollten Ihnen nur eine Vorstellung von den häufigsten Dingen geben, die Sie dort finden werden! Im nächsten Artikel werden wir über [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) sprechen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
