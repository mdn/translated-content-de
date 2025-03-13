---
title: Was ist im Kopf? Webseiten-Metadaten
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der im Webbrowser nicht angezeigt wird, wenn die Seite geladen wird. Er enthält Metadateninformationen wie den Seiten-{{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (falls Sie Ihr HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie z. B. den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden Informationen, die im {{Glossary("Head", "head")}} enthalten sind, um das HTML-Dokument korrekt darzustellen. In diesem Artikel behandeln wir all das und noch mehr, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

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
          <li>Der HTML head und sein Zweck als Metadaten-Container für das Dokument.</li>
          <li>Festlegen der Dokument-Zeichencodierung und des Titels.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verlinken von Icons zur Verwendung in Browsern und mobilen Plattformen.</li>
          <li>Verlinken von Stylesheets und Skriptdateien.</li>
          <li>Die Notwendigkeit, die Sprache eines Dokuments mit dem <code>lang</code>-Attribut im öffnenden <code>&lt;html&gt;</code>-Tag zu setzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Head?

Lassen Sie uns das einfache [HTML-Dokument, das im vorherigen Artikel behandelt wurde](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document), noch einmal ansehen:

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

Der HTML-Head ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zu den Inhalten des {{htmlelement("body")}}-Elements (die auf der Seite angezeigt werden, wenn sie im Browser geladen wird), wird der Inhalt des Heads nicht auf der Seite angezeigt. Stattdessen ist es die Aufgabe des Heads, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der Head ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Auf größeren Seiten kann der Head jedoch ziemlich groß werden. Versuchen Sie, einige Ihrer Lieblingswebsites zu besuchen und verwenden Sie die [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um ihren Head-Inhalt zu überprüfen. Unser Ziel hier ist nicht, Ihnen zu zeigen, wie man alles verwendet, was möglicherweise in den Head gestellt werden kann, sondern Ihnen beizubringen, wie Sie die wichtigsten Elemente verwenden, die Sie in den Head einfügen möchten, und Ihnen einige Vertrautheit zu geben. Lassen Sie uns anfangen.

## Einen Titel hinzufügen

Wir haben bereits das {{htmlelement("title")}}-Element in Aktion gesehen - dies kann verwendet werden, um einen Titel zum Dokument hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um eine Überschrift der obersten Ebene zu Ihrem Body-Inhalt hinzuzufügen - dies wird manchmal auch als Seitentitel bezeichnet. Aber es sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn sie im Browser geladen wird - im Allgemeinen sollte es einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu kennzeichnen (den Titel der Geschichte oder die Schlagzeile einer Nachricht oder was auch immer für Ihre Verwendung angemessen ist).
- Das {{htmlelement("title")}}-Element ist ein Metadatum, das den Titel des gesamten HTML-Dokuments (nicht des Inhalts des Dokuments) darstellt.

### Aktives Lernen: Ein Beispiel inspizieren

1. Um dieses aktive Lernen zu beginnen, möchten wir, dass Sie zu unserem GitHub-Repo gehen und eine Kopie unserer [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Dazu können Sie entweder

   1. Den Code aus der Seite kopieren und in eine neue Textdatei in Ihrem Code-Editor einfügen und dann an einem sinnvollen Ort speichern.
   2. Auf die "Raw"-Schaltfläche auf der GitHub-Seite drücken, wodurch der Rohcode angezeigt wird (möglicherweise in einem neuen Browser-Tab). Wählen Sie dann das Menü _Seite speichern unter…_ Ihres Browsers und wählen Sie einen geeigneten Ort, um die Datei zu speichern.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas Ähnliches sehen:

   ![Eine Webseite mit 'title'-Text im Tab des Browsers und 'h1'-Text als Seitenüberschrift im Dokumentkörper.](title-example.png)

   Es sollte jetzt völlig klar sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, die Inhalte dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie Spaß dabei.

Der Inhalt des `<title>`-Elements wird auch auf andere Weise verwendet. Wenn Sie zum Beispiel versuchen, die Seite zu markieren (_Lesezeichen > Diese Seite hinzufügen_ oder das Symbol des Sterns in der URL-Leiste in Firefox), sehen Sie den Inhalt des `<title>`-Elements als vorgeschlagenen Lesezeichennamen gefüllt.

![Eine Webseite wird in Firefox als Lesezeichen hinzugefügt. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt](bookmark-example.png)

Der Inhalt des `<title>`-Elements wird auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Möglichkeit, Metadaten zu einem Dokument hinzuzufügen - das {{htmlelement("meta")}}-Element. Natürlich können die anderen Dinge, über die wir in diesem Artikel sprechen, auch als Metadaten betrachtet werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können, aber wir werden nicht versuchen, sie alle an diesem Punkt zu erklären, da es einfach zu verwirrend wäre. Stattdessen erklären wir ein paar Dinge, die Sie häufig sehen könnten, nur um Ihnen eine Vorstellung zu geben.

### Zeichencodierung Ihres Dokuments angeben

Im obigen Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichencodierung des Dokuments an - das Zeichenset, das das Dokument verwenden darf. `utf-8` ist ein universelles Zeichenset, das so ziemlich jedes Zeichen aus jeder menschlichen Sprache umfasst. Das bedeutet, dass Ihre Webseite in der Lage ist, jede Sprache anzuzeigen; es ist daher eine gute Idee, dies auf jeder Webseite, die Sie erstellen, einzustellen! Zum Beispiel könnte Ihre Seite Englisch und Japanisch problemlos anzeigen:

![Eine Webseite mit englischen und japanischen Zeichen, wobei die Zeichencodierung auf universal oder utf-8 gesetzt ist. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` (das Zeichenset für das lateinische Alphabet) einstellen, kann die Seitenanzeige völlig durcheinander erscheinen:

![Eine Webseite mit englischen und japanischen Zeichen, wobei die Zeichencodierung auf latein gesetzt ist. Die japanischen Zeichen werden nicht richtig angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren falsche Codierungen automatisch, daher sehen Sie je nach verwendetem Browser dieses Problem möglicherweise nicht. Sie sollten jedoch trotzdem eine Codierung von `utf-8` auf Ihrer Seite festlegen, um mögliche Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Mit Zeichencodierung experimentieren

Um dies auszuprobieren, gehen Sie zurück zur einfachen HTML-Vorlage, die Sie im vorherigen Abschnitt über `<title>` erhalten haben (die [title-example.html-Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), versuchen Sie, den Wert der Meta-Zeichencodierung auf `ISO-8859-1` zu ändern, und fügen Sie das Japanische zu Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Einen Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten `name`- und `content`-Attribute:

- `name` gibt die Art des Metaelements an, was für Informationen es enthält.
- `content` gibt den tatsächlichen Meta-Inhalt an.

Zwei solcher Metaelemente, die nützlich sind, um auf Ihrer Seite aufgenommen zu werden, definieren den Autor der Seite und bieten eine prägnante Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Einen Autor anzugeben ist in vielerlei Hinsicht vorteilhaft: Es ist nützlich zu wissen, wer die Seite geschrieben hat, falls Sie Fragen zu den Inhalten haben und sie kontaktieren möchten. Einige Content-Management-Systeme bieten Funktionen, um die Autoreninformationen von Seiten automatisch zu extrahieren und für solche Zwecke verfügbar zu machen.

Eine Beschreibung anzugeben, die Schlüsselwörter enthält, die sich auf den Inhalt Ihrer Seite beziehen, ist nützlich, da es das Potenzial hat, Ihre Seite in relevanten Suchanfragen, die in Suchmaschinen durchgeführt werden, höher erscheinen zu lassen (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}}, oder {{Glossary("SEO", "SEO")}}, bezeichnet.)

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf Suchergebnisseiten verwendet. Lassen Sie uns eine Übung durchführen, um dies zu erkunden:

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/en-US/).
2. Sehen Sie sich den Quellcode der Seite an (klicken Sie mit der rechten Maustaste auf die Seite und wählen Sie _Quelltext anzeigen_ im Kontextmenü).
3. Finden Sie das Description-Meta-Tag. Es wird in etwa so aussehen (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Jetzt suchen Sie "MDN Web Docs" in Ihrer bevorzugten Suchmaschine (wir haben Google verwendet). Sie werden den Inhalt des Description-`<meta>`-Elements und des `<title>`-Elements im Suchergebnis bemerken - auf jeden Fall lohnenswert zu haben!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google sehen Sie einige relevante Unterseiten von MDN Web Docs, die unter dem Hauptlink der Startseite aufgeführt sind — diese werden als Sitelinks bezeichnet und sind in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=de) konfigurierbar — ein Weg, um die Suchergebnisse Ihrer Seite in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden einfach nicht mehr verwendet. Zum Beispiel wird das Keyword-`<meta>`-Element (`<meta name="keywords" content="füllen, Sie, Ihre, Schlüsselwörter, hier, aus">`) — das Schlüsselwörter bereitstellen soll, damit Suchmaschinen die Relevanz der Seite für verschiedene Suchbegriffe bestimmen können — von Suchmaschinen ignoriert, weil Spammer die Keyword-Liste einfach mit Hunderten von Schlüsselwörtern füllten und die Ergebnisse beeinflussten.

### Andere Arten von Metadaten

Während Sie im Web unterwegs sind, werden Sie auf andere Arten von Metadaten stoßen. Viele der Funktionen, die Sie auf Websites sehen werden, sind proprietäre Kreationen, die dazu dienen, bestimmten Websites (wie sozialen Netzwerken) spezifische Informationen zu liefern, die sie verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein von Facebook erfundenes Metadatenprotokoll, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode der MDN Web Docs finden Sie Folgendes:

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

Eine Wirkung davon ist, dass beim Verlinken auf MDN Web Docs auf Facebook der Link zusammen mit einem Bild und einer Beschreibung erscheint: eine reichhaltigere Benutzererfahrung.

![Open Graph-Protocol-Daten von der MDN-Startseite, wie auf Facebook angezeigt wird, zeigt ein Bild, einen Titel und eine Beschreibung.](facebook-output.png)

## Benutzerdefinierte Icons zu Ihrer Website hinzufügen

Um das Design Ihrer Website weiter zu bereichern, können Sie Verweise auf benutzerdefinierte Icons in Ihren Metadaten hinzufügen, und diese werden in bestimmten Kontexten angezeigt. Das am häufigsten verwendete dieser Icons ist das **Favicon** (kurz für "Favorites Icon", bezogen auf seine Verwendung in den "Favoriten"- oder "Lesezeichen"-Listen in Browsern).

Das bescheidene Favicon gibt es seit vielen Jahren. Es ist das erste Icon dieser Art: ein 16-Pixel-Quadrat-Icon, das an mehreren Stellen verwendet wird. Sie können (abhängig vom Browser) Favicons in dem Browser-Tab sehen, das jede geöffnete Seite enthält, und neben markierten Seiten im Lesezeichenpanel.

Ein Favicon kann zu Ihrer Seite hinzugefügt werden durch:

1. Speichern Sie es im gleichen Verzeichnis wie die Indexseite der Website, gespeichert im `.ico`-Format (die meisten unterstützen auch Favicons in häufigeren Formaten wie `.gif` oder `.png`).
2. Fügen Sie die folgende Zeile in den {{HTMLElement("head")}}-Block Ihres HTMLs ein, um es zu referenzieren:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel für ein Favicon im Lesezeichenpanel:

![Das Firefox-Lesezeichenpanel zeigt ein markiertes Beispiel mit einem nebenstehenden Favicon.](bookmark-favicon.png)

Sie benötigen möglicherweise auch verschiedene Icons für verschiedene Kontexte. Zum Beispiel finden Sie dies im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, die Website so zu gestalten, dass ein Icon angezeigt wird, wenn es auf einem Apple-Gerät als Startbildschirm gespeichert wird. Sie möchten sogar verschiedene Icons für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Icon auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Icon verwendet wird - diese Elemente decken Dinge ab wie das Bereitstellen eines schönen hochauflösenden Icons, das verwendet werden kann, wenn die Website auf dem Startbildschirm eines iPads gespeichert wird.

Machen Sie sich jetzt keine Sorgen darüber, all diese Arten von Icons zu implementieren — dies ist eine ziemlich fortgeschrittene Funktion, und Sie sollten nicht erwartet werden, dieses Wissen zu haben, um den Kurs fortzusetzen. Der Hauptzweck hier ist es, Ihnen zu zeigen, was solche Dinge sind, falls Sie darauf stoßen, während Sie den Quellcode anderer Websites durchsuchen. Wenn Sie mehr über alle diese Werte erfahren und wie Sie diese auswählen können, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Seite eine Content Security Policy (CSP) verwendet, um ihre Sicherheit zu verbessern, gilt die Richtlinie für das Favicon. Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header-Direktive [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.

## Anwendung von CSS und JavaScript auf HTML

Fast alle Websites, die Sie heutzutage verwenden, setzen {{Glossary("CSS", "CSS")}} ein, um sie cool aussehen zu lassen, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionen wie Videoplayer, Karten, Spiele und mehr anzutreiben. Diese werden meistens mit dem {{htmlelement("link")}}-Element und dem {{htmlelement("script")}}-Element auf eine Webseite angewendet.

- Das {{htmlelement("link")}}-Element sollte immer in den head Ihres Dokuments eingefügt werden. Es hat zwei Attribute, `rel="stylesheet"`, das anzeigt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den head eingefügt werden und sollte ein `src`-Attribut enthalten, das den Pfad zum JavaScript, das Sie laden möchten, enthält, und `defer` (ein [boolean-Attribut](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#boolean_attributes)), das den Browser anweist, das JavaScript nach dem Abschließen des HTML-Parsings zu laden. Das `defer`-Attribut ist nützlich, da es garantiert, dass das HTML vollständig geladen ist, bevor das JavaScript ausgeführt wird, so dass Sie keine Fehler erhalten, weil das JavaScript versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite existiert. Es gibt [mehrere Wege](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies), um das Laden von JavaScript auf Ihrer Seite zu handhaben, aber dies ist die zuverlässigste für moderne Browser.

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element mag wie ein {{Glossary("void_element", "void-Element")}} aussehen, ist es aber nicht und benötigt daher ein abschließendes Tag. Anstatt auf eine externe Skriptdatei zu verweisen, können Sie Ihr Skript auch in das `<script>`-Element einfügen.

### Aktives Lernen: CSS und JavaScript auf eine Seite anwenden

1. Um dieses aktive Lernen zu beginnen, greifen Sie auf eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) Dateien zu und speichern Sie sie lokal auf Ihrem Computer im gleichen Verzeichnis. Stellen Sie sicher, dass sie mit den korrekten Namen und Dateierweiterungen gespeichert sind.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Indem Sie den gegebenen Informationen folgen, fügen Sie {{htmlelement("link")}}- und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, so dass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn korrekt durchgeführt, sollten Sie, wenn Sie Ihr HTML speichern und Ihren Browser aktualisieren, sehen, dass sich Dinge geändert haben:

![Beispiel, das eine Seite mit angewendetem CSS und JavaScript zeigt. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Jetzt, wenn Sie irgendwo außerhalb der Liste klicken, erscheint ein Dialogfenster, das Sie auffordert, einen Text für ein neues Listenelement einzugeben. Wenn Sie die OK-Taste drücken, wird ein neues Listenelement zur Liste hinzugefügt, das den Text enthält. Wenn Sie auf ein bestehendes Listenelement klicken, erscheint ein weiteres Dialogfenster, das es Ihnen ermöglicht, den Text des Elements zu ändern.
- Das CSS hat den Hintergrund grün gemacht und den Text vergrößert. Es hat auch einen Teil des Inhalts, der von JavaScript zur Seite hinzugefügt wurde, gestylt (der rote Balken mit der schwarzen Umrandung ist das Styling, das das CSS zur JavaScript-generierten Liste hinzugefügt hat).

> [!NOTE]
> Wenn Sie in dieser Übung stecken bleiben und das CSS/JS nicht anwenden können, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispielseite zu überprüfen.

## Festlegen der Hauptsprache des Dokuments

Schließlich lohnt es sich zu erwähnen, dass Sie die Sprache Ihrer Seite festlegen können (und sollten). Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) sichtbar und unten gezeigt).

```html
<html lang="en-US">
  …
</html>
```

Dies ist auf viele Arten nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indexiert, wenn seine Sprache festgelegt ist (es kann zum Beispiel korrekt in sprachspezifischen Ergebnissen erscheinen), und es ist nützlich für Menschen mit Sehbehinderungen, die Bildschirmleseprogramme verwenden (zum Beispiel existiert das Wort "six" sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments als verschiedene Sprachen erkennen lassen. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt als Japanisch erkannt lassen, so:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind durch den [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) Standard definiert. Sie können mehr darüber in [Sprach-Tags in HTML und XML](https://www.w3.org/International/articles/language-tags/) erfahren.

## Zusammenfassung

Das markiert das Ende unserer Schnellrundreise durch den HTML-Head - es gibt noch viel mehr, was Sie hier tun können, aber eine erschöpfende Tour wäre in diesem Stadium langweilig und verwirrend, und wir wollten Ihnen nur eine Vorstellung von den häufigsten Dingen geben, die Sie hier finden werden! Im nächsten Artikel werden wir uns [Überschriften und Absätzen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zuwenden.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
