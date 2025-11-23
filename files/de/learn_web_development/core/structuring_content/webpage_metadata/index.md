---
title: Was ist im head? Metadaten von Webseiten
short-title: Metadaten von Webseiten
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 0d59135676db5a372b4dd692f0686e6bdfc13b51
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der nicht im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Metadateninformationen wie den Seitentitel ({{htmlelement("title")}}), Links zu {{Glossary("CSS", "CSS")}} (wenn Sie Ihr HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden die im {{Glossary("Head", "head")}} enthaltenen Informationen, um das HTML-Dokument korrekt wiederzugeben. In diesem Artikel behandeln wir all das und mehr, um Ihnen eine gute Basis für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in der vorherigen Lektion behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der HTML-head und sein Zweck als Metadatencontainer für das Dokument.</li>
          <li>Festlegen der Zeichencodierung und des Titels des Dokuments.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verlinkung zu Icons für die Nutzung in Browsern und mobilen Plattformen.</li>
          <li>Verlinkung zu Stylesheets und Skriptdateien.</li>
          <li>Notwendigkeit der Spracheinstellung eines Dokuments mithilfe des <code>lang</code>-Attributs im öffnenden <code>&lt;html&gt;</code>-Tag.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-head?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben,](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document) noch einmal aufgreifen:

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

Der HTML-head ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zu den Inhalten des {{htmlelement("body")}}-Elements (die auf der Seite angezeigt werden, wenn sie in einem Browser geladen wird), wird der Inhalt des head nicht auf der Seite angezeigt. Stattdessen hat der head die Aufgabe, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der head ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Auf größeren Seiten kann der head jedoch ziemlich groß werden. Gehen Sie zu einigen Ihrer Lieblingswebsites und verwenden Sie die [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um deren Head-Inhalte zu überprüfen. Unser Ziel ist es hier nicht, Ihnen zu zeigen, wie Sie alles verwenden, was möglicherweise in den head eingefügt werden kann, sondern Ihnen beizubringen, wie Sie die wichtigsten Elemente verwenden, die Sie im head enthalten möchten, und Ihnen etwas Vertrautheit zu geben. Lassen Sie uns anfangen.

## Einen Titel hinzufügen

Wir haben das {{htmlelement("title")}}-Element bereits in Aktion gesehen — dies kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um Ihrer Hauptinhalt einen obersten Überschrift hinzuzufügen — dies wird manchmal auch als Seitentitel bezeichnet. Aber es handelt sich um verschiedene Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn es im Browser geladen wird — im Allgemeinen sollte es einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu markieren (z. B. der Titel der Geschichte oder die Überschrift der Nachricht).
- Das {{htmlelement("title")}}-Element ist Metadaten, die den Titel des gesamten HTML-Dokuments darstellen (nicht den Inhalt des Dokuments).

### Ein Beispiel untersuchen

1. In dieser Übung möchten wir, dass Sie unser GitHub-Repo besuchen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, entweder
   1. Kopieren Sie den Code von der Seite und fügen Sie ihn in eine neue Textdatei in Ihrem Code-Editor ein, speichern Sie ihn dann an einem sinnvollen Ort.
   2. Drücken Sie die Schaltfläche "Raw" auf der GitHub-Seite, wodurch der rohe Code angezeigt wird (möglicherweise in einem neuen Browser-Tab). Wählen Sie anschließend das _Seite speichern unter..._-Menü Ihres Browsers und wählen Sie einen geeigneten Speicherort für die Datei.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas wie das Folgende sehen:

   ![Eine Webseite mit 'title'-Text im Tab des Browsers und 'h1'-Text als Seitenüberschrift im Dokumentenkörper.](title-example.png)

   Es sollte jetzt völlig klar sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, die Inhalte dieser Elemente zu bearbeiten und die Seite dann in Ihrem Browser zu aktualisieren. Haben Sie etwas Spaß damit.

Die `<title>`-Elementinhalte werden auch auf andere Weise verwendet. Wenn Sie beispielsweise versuchen, die Seite zu bookmarken (_Lesezeichen > Diese Seite bookmarken_ oder das Sternsymbol in der URL-Leiste in Firefox), sehen Sie den `<title>`-Inhalt als vorgeschlagenen Lesezeichennamen ausgefüllt.

![Eine Webseite wird in Firefox gelesezeichnet. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt.](bookmark-example.png)

Der `<title>`-Inhalt wird auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Methode, Metadaten zu einem Dokument hinzuzufügen — das {{htmlelement("meta")}}-Element. Natürlich könnten auch die anderen Dinge, über die wir in diesem Artikel sprechen, als Metadaten betrachtet werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite eingefügt werden können, aber wir werden nicht versuchen, sie alle an diesem Punkt zu erklären, da es einfach zu verwirrend werden würde. Stattdessen werden wir ein paar Dinge erklären, die Sie möglicherweise häufig sehen werden, nur um Ihnen eine Vorstellung zu geben.

### Festlegen der Zeichencodierung Ihres Dokuments

In dem oben gesehenen Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichencodierung des Dokuments an — den Zeichensatz, den das Dokument verwenden darf. `utf-8` ist ein universeller Zeichensatz, der praktisch jedes Zeichen aus jeder menschlichen Sprache enthält. Das bedeutet, dass Ihre Webseite jede beliebige Sprache korrekt darstellen kann; es ist daher eine gute Idee, dies auf jeder von Ihnen erstellten Webseite festzulegen! Zum Beispiel könnte Ihre Seite Englisch und Japanisch problemlos handhaben:

![Eine Webseite mit englischen und japanischen Zeichen, bei der die Zeichencodierung auf universelle Kodierung utf-8 gesetzt ist. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` setzen (den Zeichensatz für das lateinische Alphabet), könnte Ihre Seitendarstellung völlig durcheinander erscheinen:

![Eine Webseite mit englischen und japanischen Zeichen, bei der die Zeichencodierung auf Latin gesetzt ist. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren automatisch falsche Codierungen, daher sehen Sie je nach verwendetem Browser möglicherweise nicht dieses Problem. Sie sollten dennoch eine Codierung von `utf-8` auf Ihrer Seite festlegen, um etwaige potenzielle Probleme in anderen Browsern zu vermeiden.

### Experimentieren mit Zeichencodierung

Um dies auszuprobieren, greifen Sie auf das einfache HTML-Template zu, das Sie im vorherigen Abschnitt über `<title>` erhalten haben (die [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), versuchen Sie, den Wert von meta charset auf `ISO-8859-1` zu ändern, und fügen Sie in Ihrer Seite Japanisch hinzu. Dies ist der von uns verwendete Code:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Einen Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten `name`- und `content`-Attribute:

- `name` gibt den Typ des meta-Elements an; welche Art von Informationen es enthält.
- `content` gibt den eigentlichen Metainhalt an.

Zwei solche meta-Elemente, die nützlich auf Ihrer Seite enthalten sind, definieren den Autor der Seite und geben eine prägnante Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Das Festlegen eines Autors ist auf viele Arten von Vorteil: Es ist nützlich, verstehen zu können, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und ihn kontaktieren möchten. Einige Content-Management-Systeme haben Funktionen, um automatisch Informationen über den Autor der Seite zu extrahieren und für solche Zwecke verfügbar zu machen.

Eine Beschreibung festzulegen, die Schlüsselwörter enthält, die sich auf den Inhalt Ihrer Seite beziehen, ist nützlich, da sie das Potenzial hat, Ihre Seite in relevanten Suchanfragen in Suchmaschinen höher erscheinen zu lassen (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}}, oder {{Glossary("SEO", "SEO")}} bezeichnet).

### Die Verwendung der Beschreibung in Suchmaschinen erkunden

Die Beschreibung wird auch auf Suchmaschinenergebnisseiten verwendet. Lassen Sie uns eine Übung durchführen, um dies zu erkunden:

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Betrachten Sie den Quellcode der Seite (Rechtsklick auf die Seite, wählen Sie _Seitenquelltext anzeigen_ aus dem Kontextmenü).
3. Finden Sie das `meta`-Tag mit der Beschreibung. Es sieht ungefähr so aus (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun mit Ihrer Lieblingssuchmaschine (Wir haben Google verwendet) nach "MDN Web Docs". Sie werden den Beschreibungstext des `<meta>`- und `<title>`-Elements im Suchergebnis verwendet sehen — definitiv hilfreich!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden Sie einige relevante Unterseiten der MDN-Webdokumentation unter dem Hauptlink der Startseite angezeigt sehen — diese werden als Sitelinks bezeichnet und können in [Google's Webmaster-Tools](https://search.google.com/search-console/about?hl=de) konfiguriert werden — eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden heutzutage einfach nicht mehr verwendet. Beispielsweise wird das Keyword-`<meta>`-Element (`<meta name="keywords" content="füllen Sie, in, Ihre, Schlüsselwörter, hier">`) — das Schlüsselwörter für Suchmaschinen bereitstellen soll, um die Relevanz dieser Seite für verschiedene Suchanfragen zu bestimmen — von Suchmaschinen ignoriert, weil Spammer einfach die Keyword-Liste mit Hunderten von Schlüsselwörtern füllten und dadurch die Ergebnisse verzerrten.

### Andere Arten von Metadaten

Wenn Sie im Web surfen, finden Sie auch andere Arten von Metadaten. Viele der Funktionen, die Sie auf Websites sehen werden, sind proprietäre Kreationen, die dazu dienen, bestimmten Websites (wie sozialen Netzwerken) spezifische Informationen bereitzustellen, die diese verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das von Facebook erfunden wurde, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode der MDN-Webdokumentation finden Sie folgendes Beispiel:

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

Eine Auswirkung davon ist, dass, wenn Sie einen Link zu MDN Web Docs auf Facebook setzen, der Link zusammen mit einem Bild und einer Beschreibung erscheint: eine reichhaltigere Erfahrung für die Benutzer.

![Open Graph-Protokolldaten von der MDN-Homepage, wie sie auf Facebook angezeigt werden, mit Bild, Titel und Beschreibung.](facebook-output.png)

## Benutzerdefinierte Icons zu Ihrer Seite hinzufügen

Um das Design Ihrer Seite weiter zu bereichern, können Sie Referenzen zu benutzerdefinierten Icons in Ihre Metadaten einfügen, die in bestimmten Kontexten angezeigt werden. Das am häufigsten verwendete davon ist das **Favicon** (kurz für "Favourites Icon" oder "Lesezeichen-Symbol", bezugnehmend auf seine Verwendung in den "Favoriten"- oder "Lesezeichen"-Listen in Browsern).

Das bescheidene Favicon gibt es seit vielen Jahren. Es ist das erste Icon dieser Art: ein 16-Pixel großes quadratisches Icon, das an mehreren Stellen verwendet wird. Sie sehen vielleicht (abhängig vom Browser) Favicons im Browser-Tab, das jede offene Seite enthält, und neben Lesezeichen in der Lesezeichenleiste.

Ein Favicon kann Ihrer Seite hinzugefügt werden, indem Sie:

1. Es in einem unterstützten Format wie `.ico`, `.gif` oder `.png` irgendwo innerhalb der Verzeichnisstruktur Ihrer Website speichern.
2. Ein {{htmlelement("link")}}-Element in den {{HTMLElement("head")}}-Block Ihres HTMLs einfügen, das den Pfad zur Favicon-Datei referenziert:

   ```html
   <link rel="icon" href="/favicon.ico" type="image/x-icon" />
   ```

> [!NOTE]
> In diesem Beispiel beginnt der Pfad zur Favicon-Datei mit `/`, was bedeutet "Suche die Datei im obersten (oder root) Verzeichnis deiner Seite". Dies könnte sich an einem anderen Ort im Quellcode befinden, abhängig von dem System, das Sie zur Erstellung Ihrer Seite verwenden: Webframeworks reservieren normalerweise einen speziellen Ordner für Dateien im Stammverzeichnis der Seite, wie `static` oder `public`.
>
> Machen Sie sich vorerst keine allzu großen Sorgen über die Feinheiten von Dateipfaden; Sie werden später mehr darüber erfahren (lesen Sie [Ein kurzer Überblick über URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths), wenn Sie neugierig sind).
>
> Die meisten Browser und Softwareanwendungen verwenden mittlerweile automatisch eine `favicon.ico`-Datei, die im Site-Wurzelverzeichnis gefunden wird, als Favicon, sodass viele Seiten darauf verzichten, das `<link>`-Element einfügen. Ein explizites Element ist immer noch nützlich, falls Sie Ihre Favicon-Datei an einem anderen Ort platzieren möchten.

Hier ist ein Beispiel für ein Favicon in einem Lesezeichenpanel:

![Das Firefox-Lesezeichenpanel zeigt ein Lesezeichenbeispiel mit einem nebenstehenden Favicon.](bookmark-favicon.png)

Sie möchten möglicherweise auch verschiedene Icons für verschiedene Kontexte einfügen. Zum Beispiel:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Methode, um das Icon anzuzeigen, wenn die Website auf dem Startbildschirm eines Apple-Geräts gespeichert wird. Sie möchten sogar verschiedene Icons für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Icon auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Icon verwendet wird — diese Elemente umfassen Dinge wie die Bereitstellung eines hochauflösenden Icons, das verwendet wird, wenn die Website auf dem Startbildschirm eines iPads gespeichert wird.

Machen Sie sich jetzt nicht allzu viele Gedanken über die Implementierung all dieser Icon-Typen — dies ist eine ziemlich fortgeschrittene Funktion, und Sie müssen dies nicht wissen, um im Kurs voranzukommen. Der Hauptzweck hier ist, Ihnen zu zeigen, was solche Dinge sind, falls Sie ihnen im Quellcode anderer Websites begegnen. Wenn Sie mehr über all diese Werte und wie sie ausgewählt werden erfahren möchten, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

## CSS und JavaScript auf HTML anwenden

Fast alle modernen Websites verwenden {{Glossary("CSS", "CSS")}}, um ihr Aussehen zu verbessern, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionen zu unterstützen, wie Video-Player, Karten, Spiele und mehr. Diese werden am häufigsten mit dem {{htmlelement("link")}}-Element und dem {{htmlelement("script")}}-Element auf eine Webseite angewendet.

- Das {{htmlelement("link")}}-Element sollte immer in den head Ihres Dokuments eingefügt werden. Dies nimmt zwei Attribute an, `rel="stylesheet"`, das angibt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den head eingefügt werden und sollte ein `src`-Attribut enthalten, das den Pfad zu dem JavaScript enthält, das Sie laden möchten, und `defer` (ein [Boolean-Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)), das dem Browser anweist, das JavaScript nach dem Parsen aller HTML-Inhalte zu laden. Das `defer`-Attribut ist nützlich, da es garantiert, dass das HTML geladen ist, bevor das JavaScript ausgeführt wird, sodass keine Fehler auftreten, weil JavaScript auf ein HTML-Element zugreift, das noch nicht auf der Seite existiert. Es gibt [mehrere Möglichkeiten](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste Methode für moderne Browser.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element sieht vielleicht aus wie ein {{Glossary("void_element", "void-Element")}}, aber das ist es nicht und braucht daher einen schließenden Tag. Anstatt auf eine externe Skriptdatei zu verweisen, können Sie Ihr Skript auch im `<script>`-Element einfügen.

### Ihre Aufgabe: CSS und JavaScript auf eine Seite anwenden

1. Um diese Übung zu starten, laden Sie eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css)-Dateien herunter und speichern Sie sie auf Ihrem lokalen Computer im selben Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateierweiterungen gespeichert werden.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie basierend auf den oben gegebenen Informationen {{htmlelement("link")}}- und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, sodass Ihr CSS und JavaScript auf Ihre HTML angewendet werden.

Wenn Sie es richtig gemacht haben, sollten Sie beim Speichern Ihres HTML und Aktualisieren Ihres Browsers sehen können, dass sich Dinge geändert haben:

![Beispielseite mit angewendetem CSS und JavaScript. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Jetzt, wenn Sie irgendwo außerhalb der Liste klicken, erscheint ein Dialogfeld, in dem Sie aufgefordert werden, einen Text für ein neues Listenelement einzugeben. Wenn Sie die OK-Taste drücken, wird ein neues Listenelement mit dem Text zur Liste hinzugefügt. Wenn Sie auf ein vorhandenes Listenelement klicken, erscheint ein Dialogfeld, das Ihnen erlaubt, den Text des Elements zu ändern.
- Das CSS hat den Hintergrund grün gefärbt und den Text vergrößert. Es hat auch einige der Inhalte styliert, die das JavaScript zur Seite hinzugefügt hat (der rote Balken mit dem schwarzen Rand ist die Styling, die das CSS zur von JS generierten Liste hinzugefügt hat).

> [!NOTE]
> Wenn Sie bei dieser Übung stecken bleiben und das CSS/JS nicht angewendet werden, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html)-Beispielseite zu überprüfen.

## Die primäre Sprache des Dokuments festlegen

Abschließend ist es erwähnenswert, dass Sie (und sollten wirklich) die Sprache Ihrer Seite festlegen können. Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) zu sehen und unten gezeigt).

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf viele Arten nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indexiert, wenn die Sprache eingestellt ist (was zum Beispiel ein korrektes Erscheinen in sprachspezifischen Suchergebnissen erlaubt), und es ist nützlich für Menschen mit Sehbehinderungen, die Bildschirmleser verwenden (zum Beispiel existiert das Wort "six" sowohl auf Französisch als auch Englisch, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments so einstellen, dass sie als unterschiedliche Sprachen erkannt werden. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt als Japanisch erkennen lassen, wie folgt:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind durch die [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)-Norm definiert. Erfahren Sie mehr darüber in [Sprach-Tags in HTML und XML](https://www.w3.org/International/articles/language-tags/).

## Zusammenfassung

Das markiert das Ende unserer schnellen Tour durch den HTML-head — es gibt noch viel mehr, was Sie hier drin tun können, aber eine umfassende Tour wäre langweilig und verwirrend an dieser Stelle und wir wollten Ihnen vorerst nur eine Vorstellung von den häufigsten Dingen geben, die Sie dort finden werden! Im nächsten Artikel werden wir [Überschriften und Absätze in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) behandeln.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
