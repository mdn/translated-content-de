---
title: Was befindet sich im Kopf? Metadaten der Webseite
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 76d3de353874446d00ccbec3d9fb15bf113770e4
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "Kopf")}} eines HTML-Dokuments ist der Teil, der beim Laden der Seite nicht im Webbrowser angezeigt wird. Er enthält Metadaten-Informationen wie den {{htmlelement("title")}} der Seite, Links zu {{Glossary("CSS", "CSS")}} (falls Sie Ihr HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie z.B. den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden die im {{Glossary("Head", "Kopf")}} enthaltenen Informationen, um das HTML-Dokument korrekt darzustellen. In diesem Artikel beschreiben wir all dies und mehr, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

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
          <li>Der HTML-Kopf und seine Funktion als Metadatencontainer für das Dokument.</li>
          <li>Festlegen der Zeichencodierung und des Titels des Dokuments.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verlinken von Icons für den Einsatz in Browsern und auf mobilen Plattformen.</li>
          <li>Verlinkung zu Stylesheets und Skriptdateien.</li>
          <li>Die Notwendigkeit, die Sprache eines Dokuments mithilfe des <code>lang</code>-Attributs im öffnenden <code>&lt;html&gt;</code>-Tag festzulegen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Kopf?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document), noch einmal betrachten:

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

Der HTML-Kopf ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zu den Inhalten des {{htmlelement("body")}}-Elements (die auf der Seite angezeigt werden, wenn sie in einem Browser geladen werden), wird der Inhalt des Kopfes nicht auf der Seite angezeigt. Stattdessen ist die Aufgabe des Kopfes, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der Kopf ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

In größeren Seiten kann der Kopf jedoch ziemlich groß werden. Versuchen Sie, zu einigen Ihrer Lieblingswebsites zu gehen und verwenden Sie die [Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um deren Kopf-Inhalt zu überprüfen. Unser Ziel hier ist es nicht, Ihnen zu zeigen, wie man alles verwendet, was man in den Kopf setzen kann, sondern Ihnen zu zeigen, wie man die wichtigsten Elemente verwendet, die Sie in den Kopf einfügen sollten, und Ihnen ein gewisses Maß an Vertrautheit zu geben. Lassen Sie uns beginnen.

## Hinzufügen eines Titels

Wir haben bereits das {{htmlelement("title")}}-Element in Aktion gesehen - es kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um eine Überschrift erster Ebene zu Ihrem Body-Inhalt hinzuzufügen - dies wird auch manchmal als Seitentitel bezeichnet. Aber es sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn sie im Browser geladen wird - im Allgemeinen sollte dies einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu markieren (der Titel der Geschichte, oder die News-Überschrift, oder was auch immer für Ihren Gebrauch angemessen ist).
- Das {{htmlelement("title")}}-Element ist eine Metadaten, die den Titel des gesamten HTML-Dokuments darstellt (nicht den Inhalt des Dokuments).

### Aktives Lernen: Untersuchen eines Beispiels

1. Um mit diesem aktiven Lernen zu beginnen, möchten wir, dass Sie auf unser GitHub-Repo zugreifen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, können Sie entweder:

   1. Den Code von der Seite kopieren und in eine neue Textdatei in Ihrem Code-Editor einfügen, dann an einem sinnvollen Ort speichern.
   2. Auf die Schaltfläche "Raw" auf der GitHub-Seite klicken, wodurch der rohe Code erscheint (möglicherweise in einem neuen Browser-Tab). Wählen Sie dann das Menü _Seite speichern unter..._ Ihres Browsers und wählen Sie einen sinnvollen Speicherort für die Datei aus.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas wie dieses sehen:

   ![Eine Webseite mit 'title'-Text in der Browser-Registerkarte und 'h1'-Text als Seitenüberschrift im Dokumenten-Body.](title-example.png)

   Es sollte nun völlig offensichtlich sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, den Inhalt dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie etwas Spaß damit.

Der `<title>`-Inhalt wird auch auf andere Weise verwendet. Wenn Sie z.B. versuchen, die Seite mit einem Lesezeichen zu versehen (_Lesezeichen > Diese Seite mit Lesezeichen versehen_ oder das Sternsymbol in der URL-Leiste in Firefox), sehen Sie den `<title>`-Inhalt als vorgeschlagenen Lesezeichennamen ausgefüllt.

![Eine Webseite, die in Firefox mit einem Lesezeichen versehen wird. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt](bookmark-example.png)

Der `<title>`-Inhalt wird auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Methode, um Metadaten zu einem Dokument hinzuzufügen—das {{htmlelement("meta")}}-Element. Natürlich könnte man die anderen Dinge, die wir in diesem Artikel besprechen, ebenfalls als Metadaten betrachten. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können, aber wir werden nicht versuchen, sie alle an dieser Stelle zu erklären, da es zu verwirrend wäre. Stattdessen werden wir einige Dinge erklären, die Sie häufig sehen könnten, um Ihnen eine Vorstellung zu geben.

### Festlegung der Zeichencodierung Ihres Dokuments

Im obigen Beispiel war dieser Eintrag enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichencodierung des Dokuments an—das Zeichenset, das das Dokument verwenden darf. `utf-8` ist ein universelles Zeichenset, das so ziemlich jedes Zeichen aus jeder menschlichen Sprache umfasst. Dies bedeutet, dass Ihre Webseite jede Sprache anzeigen kann; es ist daher eine gute Idee, dies auf jeder von Ihnen erstellten Webseite festzulegen! Beispielsweise könnte Ihre Seite Englisch und Japanisch einfach ohne Probleme anzeigen:

![Eine Webseite, die englische und japanische Zeichen enthält, mit auf universell gesetzter Zeichenkodierung oder utf-8. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` festlegen (das Zeichenset für das lateinische Alphabet), kann Ihre Seitenwiedergabe komplett unleserlich erscheinen:

![Eine Webseite, die englische und japanische Zeichen enthält, mit auf latein gesetzter Zeichenkodierung. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren fehlerhafte Kodierungen automatisch, sodass Sie je nach verwendetem Browser dieses Problem möglicherweise nicht sehen. Sie sollten trotzdem eine Kodierung von `utf-8` auf Ihrer Seite festlegen, um potenzielle Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Experimentieren mit der Zeichencodierung

Um dies auszuprobieren, sehen Sie sich das einfache HTML-Template an, das Sie im vorherigen Abschnitt über `<title>` heruntergeladen haben (die [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), versuchen Sie, den Meta-Charset-Wert zu `ISO-8859-1` zu ändern, und fügen Sie das Japanische zu Ihrer Seite hinzu. Dies ist der von uns verwendete Code:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Hinzufügen eines Autors und einer Beschreibung

Viele `<meta>`-Elemente enthalten die Attribute `name` und `content`:

- `name` gibt die Art des Meta-Elements an; welche Art von Informationen es enthält.
- `content` gibt den tatsächlichen Meta-Inhalt an.

Zwei solche meta-Elemente, die nützlich sind, um sie auf Ihrer Seite zu platzieren, definieren den Autor der Seite und liefern eine prägnante Beschreibung der Seite. Lassen Sie uns ein Beispiel ansehen:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Die Angabe eines Autors ist auf viele Arten vorteilhaft: Es ist nützlich zu wissen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und Sie sie kontaktieren möchten. Einige Content-Management-Systeme verfügen über Funktionen, um automatisch Informationen zum Seitenautor zu extrahieren und für solche Zwecke bereitzustellen.

Die Angabe einer Beschreibung, die Schlüsselwörter enthält, die sich auf den Inhalt Ihrer Seite beziehen, ist nützlich, da sie potenziell dazu führen kann, dass Ihre Seite bei relevanten Suchanfragen in Suchmaschinen höher erscheint (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}}, oder {{Glossary("SEO", "SEO")}} bezeichnet.)

### Aktives Lernen: Der Nutzen der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf Suchmaschinenergebnisseiten verwendet. Lassen Sie uns eine Übung durchführen, um dies zu erkunden

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Sehen Sie sich den Quellcode der Seite an (Rechtsklick auf die Seite, wählen Sie _Seitenquelltext anzeigen_ aus dem Kontextmenü).
3. Suchen Sie das Meta-Tag für die Beschreibung. Es wird etwa so aussehen (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun nach "MDN Web Docs" in Ihrer bevorzugten Suchmaschine (Wir haben Google verwendet). Sie werden den Beschreibungstext `<meta>` und `<title>` im Suchergebnis erkennen—definitiv einen Versuch wert!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden Sie einige relevante Unterseiten von MDN Web Docs unterhalb des Hauptlinks der Startseite aufgeführt sehen—diese werden als Sitelinks bezeichnet und sind konfigurierbar in [Google Webmaster-Tools](https://search.google.com/search-console/about?hl=en)—eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden heute einfach nicht mehr verwendet. Zum Beispiel wird das Schlüsselwort `<meta>`-Element (`<meta name="keywords" content="füllen, Ihre, Schlüsselwörter, hier">`)—welches Suchmaschinen Schlüsselwörter bereitstellen soll, um die Relevanz dieser Seite für verschiedene Suchbegriffe zu ermitteln—von Suchmaschinen ignoriert, da Spammer einfach die Liste der Schlüsselwörter mit Hunderten von Schlüsselwörtern füllten und so die Ergebnisse verfälschten.

### Andere Arten von Metadaten

Wenn Sie im Internet unterwegs sind, werden Sie auch auf andere Arten von Metadaten stoßen. Viele der Funktionen, die Sie auf Webseiten sehen, sind proprietäre Kreationen, die bestimmten Websites (wie sozialen Netzwerken) spezifische Informationen zur Verfügung stellen sollen, die diese verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das von Facebook erfunden wurde, um reichhaltigere Metadaten für Webseiten bereitzustellen. Im Quellcode von MDN Web Docs finden Sie dies:

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

Eine Auswirkung davon ist, dass wenn Sie auf Facebook auf MDN Web Docs verlinken, der Link zusammen mit einem Bild und einer Beschreibung erscheint: eine reichere Erfahrung für die Benutzer.

![Open Graph-Protokolldaten von der MDN-Homepage, wie sie auf Facebook dargestellt werden, mit einem Bild, Titel und einer Beschreibung.](facebook-output.png)

## Hinzufügen benutzerdefinierter Icons zu Ihrer Seite

Um das Design Ihrer Seite weiter zu bereichern, können Sie Verweise auf benutzerdefinierte Icons in Ihre Metadaten einfügen, die in bestimmten Kontexten angezeigt werden. Der am häufigsten verwendete dieser Icons ist das **Favicon** (kurz für "Favoritenicon", bezogen auf seine Verwendung in den "Favoriten"- oder "Lesezeichen"-Listen in Browsern).

Das bescheidene Favicon gibt es schon seit vielen Jahren. Es ist das erste Icon dieser Art: ein 16-Pixel-Quadraticon, das an mehreren Stellen verwendet wird. Sie können (abhängig vom Browser) Favicons in der Browser-Registerkarte sehen, die jede offene Seite enthält, und neben den mit Lesezeichen versehenen Seiten im Lesezeichen-Panel.

Ein Favicon kann zu Ihrer Seite hinzugefügt werden, indem

1. es im gleichen Verzeichnis wie die Indexseite der Site gespeichert wird, im `.ico`-Format gespeichert (die meisten unterstützen auch Favicons in gebräuchlicheren Formaten wie `.gif` oder `.png`)
2. das folgende in den {{HTMLElement("head")}}-Block Ihres HTMLs eingefügt wird, um darauf zu verweisen:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel für ein Favicon im Lesezeichen-Panel:

![Das Firefox-Lesezeichen-Panel, das ein mit einem Lesezeichen versehenes Beispiel mit einem daneben angezeigten Favicon zeigt.](bookmark-favicon.png)

Möglicherweise benötigen Sie auch verschiedene Icons für verschiedene Kontexte. Beispielsweise finden Sie dies im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, die Site ein Icon anzeigen zu lassen, wenn sie auf dem Home-Bildschirm eines Apple-Geräts gespeichert wird. Sie möchten sogar verschiedene Icons für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Icon auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Icon verwendet wird—diese Elemente decken Dinge wie das Bereitstellen eines schönen hochauflösenden Icons ab, um es bei der Speicherung der Website auf dem Home-Bildschirm eines iPads zu verwenden.

Machen Sie sich jetzt keine Sorgen darüber, all diese Arten von Icons zu implementieren—dies ist eine ziemlich fortgeschrittene Funktion, und Sie müssen nicht unbedingt dieses Wissen haben, um diesem Kurs zu folgen. Der Hauptzweck hier ist, Ihnen zu zeigen, was solche Dinge sind, falls Sie darauf stoßen, während Sie den Quellcode anderer Websites durchsuchen. Wenn Sie mehr über all diese Werte erfahren und wissen möchten, wie Sie sie auswählen können, lesen Sie die Referenzseite zum {{HTMLElement("link")}}-Element.

> [!NOTE]
> Wenn Ihre Seite eine Content-Security-Policy (CSP) verwendet, um deren Sicherheit zu erhöhen, gilt die Richtlinie für das Favicon. Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header- [`img-src`-Richtlinie](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) nicht den Zugriff darauf verhindert.

## Anwenden von CSS und JavaScript auf HTML

Fast alle Websites, die Sie heutzutage verwenden, setzen {{Glossary("CSS", "CSS")}} ein, um sie optisch ansprechend zu machen, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionen zu ermöglichen, wie z.B. Videoplayer, Karten, Spiele und mehr. Diese werden am häufigsten mit dem {{htmlelement("link")}}-Element und dem {{htmlelement("script")}}-Element auf eine Webseite angewendet.

- Das {{htmlelement("link")}}-Element sollte immer in den Kopf Ihres Dokuments aufgenommen werden. Dieses benötigt zwei Attribute, `rel="stylesheet"`, das angibt, dass es das Stylesheet des Dokuments ist, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte auch in den Kopf aufgenommen werden und sollte ein `src`-Attribut enthalten, das den Pfad zu dem JavaScript enthält, das Sie laden möchten, sowie `defer` (ein [boolesches Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)), das dem Browser anweist, das JavaScript nach dem Parsen des HTML zu laden. Das `defer`-Attribut ist nützlich, da es garantiert, dass das HTML vollständig geladen wird, bevor das JavaScript ausgeführt wird, damit keine Fehler auftreten, wenn JavaScript versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite vorhanden ist. Es gibt [mehrere Möglichkeiten](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste Methode zur Verwendung für moderne Browser.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element sieht möglicherweise wie ein {{Glossary("void_element", "leeres Element")}} aus, aber es ist keines, und benötigt daher ein abschließendes Tag. Anstatt auf eine externe Skriptdatei zu zeigen, können Sie auch wählen, Ihr Skript innerhalb des `<script>`-Elements zu platzieren.

### Aktives Lernen: Anwenden von CSS und JavaScript auf eine Seite

1. Um dieses aktive Lernen zu beginnen, holen Sie sich eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css)-Dateien und speichern Sie sie auf Ihrem lokalen Computer im selben Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateierweiterungen gespeichert sind.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie gemäß den oben gegebenen Informationen {{htmlelement("link")}} und {{htmlelement("script")}}-Elemente in Ihr HTML hinzu, so dass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn Sie alles richtig gemacht haben, sollten Sie beim Speichern Ihres HTMLs und Aktualisieren Ihres Browsers sehen können, dass sich Dinge verändert haben:

![Beispielbild, das eine Seite zeigt, auf die CSS und JavaScript angewendet wurden. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie jetzt irgendwo außerhalb der Liste klicken, wird ein Dialogfeld angezeigt, das Sie auffordert, einen Text für ein neues Listenelement einzugeben. Wenn Sie die OK-Schaltfläche drücken, wird ein neues Listenelement zur Liste hinzugefügt, das den Text enthält. Wenn Sie auf ein bestehendes Listenelement klicken, wird ein Dialogfeld angezeigt, das Ihnen erlaubt, den Text des Elements zu ändern.
- Das CSS hat den Hintergrund grün gemacht und die Textgröße vergrößert. Es hat auch einige der Inhalte, die das JavaScript zur Seite hinzugefügt hat, gestylt (der rote Balken mit der schwarzen Umrandung ist das Styling, das das CSS zur durch das JS erzeugten Liste hinzugefügt hat).

> [!NOTE]
> Wenn Sie in dieser Übung stecken bleiben und es nicht schaffen, das CSS/JS anzuwenden, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispieldatei zu überprüfen.

## Festlegen der primären Sprache des Dokuments

Schließlich ist es erwähnenswert, dass Sie die Sprache Ihrer Seite festlegen können (und sollten). Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) zu sehen und unten gezeigt).

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf viele Arten nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indexiert, wenn dessen Sprache festgelegt ist (was es z.B. ermöglicht, korrekt in sprachspezifischen Ergebnissen zu erscheinen), und es ist nützlich für Menschen mit Sehbeeinträchtigungen, die Bildschirmleser verwenden (zum Beispiel existiert das Wort "six" sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments so festlegen, dass sie als verschiedene Sprachen erkannt werden. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt so festlegen, dass er als Japanisch erkannt wird, so:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind durch den [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)-Standard definiert. Sie können mehr darüber erfahren in [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/).

## Zusammenfassung

Damit beenden wir unseren Schnellkurs über den HTML-Kopf - es gibt viel mehr, was Sie hier tun können, aber ein erschöpfender Kurs wäre jetzt langweilig und verwirrend, und wir wollten Ihnen nur eine Vorstellung von den gebräuchlichsten Dingen geben, die Sie dort vorerst finden! Im nächsten Artikel werden wir uns mit [Überschriften und Absätzen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) beschäftigen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
