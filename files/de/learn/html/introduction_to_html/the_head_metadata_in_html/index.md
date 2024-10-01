---
title: Was steckt im Kopf? Metadaten in HTML
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der nicht im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Informationen wie das Seiten-{{htmlelement("title")}}, Links zu {{Glossary("CSS", "CSS")}} (wenn Sie sich entscheiden, Ihre HTML-Inhalte mit CSS zu gestalten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie z.B. den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben). Webbrowser verwenden Informationen, die im {{Glossary("Head", "head")}} enthalten sind, um das HTML-Dokument korrekt darzustellen. In diesem Artikel besprechen wir all dies und mehr, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die HTML-head zu verstehen, ihren Zweck, die wichtigsten Elemente, die er enthalten kann, und welchen Einfluss er auf das HTML-Dokument haben kann.
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-head?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_document), noch einmal aufgreifen:

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

Der HTML-head ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zu den Inhalten des {{htmlelement("body")}}-Elements (die angezeigt werden, wenn die Seite in einem Browser geladen wird), werden die Inhalte des head nicht auf der Seite angezeigt. Stattdessen ist es die Aufgabe des head, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der head ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Auf größeren Seiten kann der head jedoch ziemlich groß werden. Versuchen Sie, einige Ihrer Lieblingswebseiten zu besuchen und verwenden Sie die [Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools), um deren head-Inhalte zu überprüfen. Unser Ziel hier ist es, Ihnen nicht zu zeigen, wie Sie alles verwenden, was möglicherweise im head stehen kann, sondern vielmehr, wie Sie die wichtigsten Elemente verwenden, die Sie im head einfügen möchten, und Ihnen eine gewisse Vertrautheit zu geben. Lassen Sie uns beginnen.

## Einen Titel hinzufügen

Wir haben das {{htmlelement("title")}}-Element bereits in Aktion gesehen — es kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um der Inhalte Ihres Körpers eine Inschrift der obersten Ebene hinzuzufügen — dies wird manchmal auch als Seitentitel bezeichnet. Aber sie sind unterschiedliche Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn sie im Browser geladen wird — im Allgemeinen sollte dies einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu markieren (den Titel der Geschichte, oder die Schlagzeile der Nachrichten, oder was auch immer für Ihre Verwendung angemessen ist).
- Das {{htmlelement("title")}}-Element ist Metadaten, die den Titel des gesamten HTML-Dokuments darstellen (nicht den Inhalt des Dokuments).

### Aktives Lernen: Einfaches Beispiel inspizieren

1. Um mit diesem aktiven Lernen zu beginnen, möchten wir, dass Sie zu unserem GitHub-Repo gehen und eine Kopie unserer [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Dazu können Sie entweder:

   1. Den Code von der Seite kopieren und in eine neue Textdatei in Ihrem Code-Editor einfügen, dann speichern Sie ihn an einem sinnvollen Ort.
   2. Die "Roh"-Taste auf der GitHub-Seite drücken, wodurch der rohe Code erscheint (möglicherweise in einem neuen Browsertab). Wählen Sie anschließend das Menü Ihres Browsers "_Seite speichern unter..._" und wählen Sie einen sinnvollen Speicherort für die Datei.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas Ähnliches sehen:

   ![Eine Webseite mit 'title' Text im Tab des Browsers und 'h1' Text als Seitenüberschrift im Dokumentenbody.](title-example.png)

   Es sollte nun offensichtlich sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, die Inhalte dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie ein wenig Spaß damit.

Der Inhalt des `<title>`-Elements wird auf verschiedene Arten verwendet. Beispielsweise, wenn Sie versuchen, die Seite zu den Lesezeichen hinzuzufügen (_Bookmarks > Lesezeichen für diese Seite..._ oder das Sternsymbol im URL-Balken in Firefox), sehen Sie, dass der `<title>`-Inhalt als der vorgeschlagene Name des Lesezeichens ausgefüllt wird.

![Eine Webseite wird in Firefox als Lesezeichen gesetzt. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements gefüllt.](bookmark-example.png)

Die Inhalte des `<title>`-Elements werden auch in den Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Möglichkeit, Metadaten zu einem Dokument hinzuzufügen — das {{htmlelement("meta")}}-Element. Natürlich könnten die anderen Dinge, über die wir in diesem Artikel sprechen, auch als Metadaten betrachtet werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können, aber wir werden nicht versuchen, sie alle in diesem Stadium zu erklären, da es einfach zu verwirrend werden würde. Stattdessen werden wir ein paar Dinge erklären, die Sie vielleicht häufig sehen werden, um Ihnen eine Vorstellung zu geben.

### Zeichencodierung Ihres Dokuments spezifizieren

Im obigen Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element legt die Zeichencodierung des Dokuments fest — die Zeichensatz, den das Dokument verwenden darf. `utf-8` ist ein universeller Zeichensatz, der so gut wie jedes Zeichen aus jeder menschlichen Sprache enthält. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache anzuzeigen; es ist daher eine gute Idee, dies auf jeder von Ihnen erstellten Webseite zu setzen! Zum Beispiel könnte Ihre Seite Englisch und Japanisch problemlos handhaben:

![Eine Webseite mit englischen und japanischen Zeichen, mit einem universellen Zeichensatz oder utf-8. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` setzen (den Zeichensatz für das lateinische Alphabet), könnte die Seitendarstellung völlig durcheinander erscheinen:

![Eine Webseite mit englischen und japanischen Zeichen, mit einer Zeichencodierung auf Latein. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) beheben fehlerhafte Codierungen automatisch, sodass Sie dieses Problem möglicherweise nicht sehen, je nachdem, welchen Browser Sie verwenden. Sie sollten dennoch eine Codierung von `utf-8` auf Ihrer Seite festlegen, um mögliche Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Mit Zeichencodierung experimentieren

Um dies auszuprobieren, besuchen Sie das einfache HTML-Template, das Sie im vorherigen Abschnitt über `<title>` (die [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)) erhalten haben, versuchen Sie, den Meta-Charset-Wert in `ISO-8859-1` zu ändern und fügen Sie Japanisch zu Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Einen Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten `name` und `content` Attribute:

- `name` spezifiziert den Typ des Meta-Elements; was für eine Art von Information es enthält.
- `content` spezifiziert den eigentlichen Meta-Inhalt.

Zwei solche Meta-Elemente, die nützlich sind, um sie auf Ihrer Seite einzubeziehen, definieren den Autor der Seite und bieten eine prägnante Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Die Angabe eines Autors ist auf viele Arten vorteilhaft: Es ist nützlich zu wissen, wer die Seite geschrieben hat, wenn Sie Fragen zu den Inhalten haben und Sie möchten sie kontaktieren. Einige Content-Management-Systeme haben Einrichtungen, um automatisch Informationen über den Seitenautor zu extrahieren und für solche Zwecke verfügbar zu machen.

Die Angabe einer Beschreibung, die Schlüsselwörter im Zusammenhang mit dem Inhalt Ihrer Seite enthält, ist nützlich, da sie das Potenzial hat, Ihre Seite in relevanteren Suchanfragen in Suchmaschinen höher erscheinen zu lassen (solche Aktivitäten werden als {{Glossary("SEO", "Search Engine Optimization")}} oder {{Glossary("SEO", "SEO")}} bezeichnet.)

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf Sucherergebnisseiten verwendet. Lassen Sie uns durch eine Übung gehen, um dies zu erkunden

1. Gehen Sie zur [Startseite von Mozilla Developer Network](/en-US/).
2. Zeigen Sie den Quellcode der Seite an (Rechtsklick auf die Seite, wählen Sie _Seitenquelltext anzeigen_ aus dem Kontextmenü.)
3. Finden Sie das description-Meta-Tag. Es wird in etwa so aussehen (obwohl es sich mit der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Suchen Sie nun nach "MDN Web Docs" in Ihrer Lieblingssuchmaschine (wir haben Google verwendet). Ihnen werden die Beschreibung `<meta>` und `<title>` Element-Inhalte im Suchergebnis auffallen — definitiv wert, sie zu haben!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden Sie einige relevante Unterseiten von MDN Web Docs unterhalb des Hauptlinks zur Startseite aufgeführt sehen — diese werden als Sitelinks bezeichnet und sind konfigurierbar in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=en) — eine Möglichkeit, die Suchergebnisse Ihrer Website in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden einfach nicht mehr verwendet. Zum Beispiel wird das Keyword-`<meta>`-Element (`<meta name="keywords" content="füllen, Sie, Ihre, Schlüsselwörter, hier, ein">`) — das verwendet werden soll, um Suchmaschinen Schlüsselwörter zur Verfügung zu stellen, um die Relevanz dieser Seite für verschiedene Suchbegriffe zu bestimmen — von Suchmaschinen ignoriert, weil Spammer die Schlüsselwortliste einfach mit Hunderten von Schlüsselwörtern füllten und die Ergebnisse verzerrten.

### Andere Arten von Metadaten

Wenn Sie durchs Web reisen, werden Sie auch andere Arten von Metadaten finden. Viele der Funktionen, die Sie auf Websites sehen, sind proprietäre Kreationen, die dazu dienen, bestimmten Websites (wie z.B. sozialen Netzwerken) spezifische Informationen bereitzustellen, die sie verwenden können.

Beispielsweise ist [Open Graph Data](https://ogp.me/) ein von Facebook erfundenes Metadataprotokoll, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode der MDN Web Docs finden Sie Folgendes:

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

Eine Auswirkung davon ist, dass beim Verlinken zu MDN Web Docs auf Facebook der Link zusammen mit einem Bild und einer Beschreibung erscheint: ein reicheres Erlebnis für die Benutzer.

![Open Graph Protocol-Daten von der MDN-Startseite, wie sie auf Facebook angezeigt werden, mit einem Bild, Titel und einer Beschreibung.](facebook-output.png)

## Anpassung von Icons für Ihre Seite

Um das Design Ihrer Seite weiter zu bereichern, können Sie Verweise auf benutzerdefinierte Icons in Ihre Metadaten einfügen, die in bestimmten Kontexten angezeigt werden. Am häufigsten genutzt wird das **Favicon** (kurz für "Favoriten-Icon", bezogen auf seine Verwendung in den "Favoriten"- oder "Lesezeichen"-Listen in Browsern).

Das bescheidene Favicon gibt es schon viele Jahre. Es ist das erste Icon dieser Art: ein 16-Pixel-Quadrat-Icon, das an mehreren Stellen verwendet wird. Je nach Browser sehen Sie möglicherweise Favicons, die im Browsertab angezeigt werden, der jede geöffnete Seite enthält, und neben gespeicherten Seiten im Lesezeichenpanel.

Ein Favicon kann Ihrer Seite hinzugefügt werden durch:

1. Speichern Sie es im gleichen Verzeichnis wie die Indexseite der Seite im `.ico`-Format (die meisten unterstützen auch Favicons in gebräuchlicheren Formaten wie `.gif` oder `.png`)
2. Fügen Sie die folgende Zeile in den {{HTMLElement("head")}} Block Ihres HTMLs ein, um es zu referenzieren:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel eines Favicons im Lesezeichenpanel:

![Das Firefox-Lesezeichenpanel, mit einem Lesezeichenbeispiel, das ein Favicon neben sich angezeigt hat.](bookmark-favicon.png)

Möglicherweise benötigen Sie auch verschiedene Icons für unterschiedliche Kontexte. Beispielsweise finden Sie dies im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, dass die Seite ein Icon anzeigt, wenn sie auf einem Apple-Geräte Startbildschirm gespeichert ist. Möglicherweise möchten Sie sogar verschiedene Icons für verschiedene Geräte zur Verfügung stellen, um sicherzustellen, dass das Icon auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Icon verwendet wird — diese Elemente decken Dinge wie die Bereitstellung eines schönen hochauflösenden Icons ab, wenn die Website auf einem iPad-Startbildschirm gespeichert ist.

Machen Sie sich jetzt keine allzu großen Sorgen um die Implementierung all dieser Arten von Icons — dies ist ein ziemlich fortgeschrittenes Feature und Sie werden nicht erwartet, Kenntnisse darüber zu haben um den Kurs fortzusetzen. Der Hauptzweck ist es, Ihnen zu zeigen, was solche Dinge sind, falls Sie über sie im Quellcode anderer Websites stolpern. Wenn Sie mehr über all diese Werte und deren Auswahl erfahren möchten, lesen Sie die Referenzseite des {{HTMLElement("link")}} Elements.

> [!NOTE]
> Wenn Ihre Seite eine Content Security Policy (CSP) zur Erhöhung der Sicherheit verwendet, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, überprüfen Sie, dass der {{HTTPHeader("Content-Security-Policy")}}-Header die [`img-src`-Richtlinie](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) nicht den Zugriff darauf verhindert.

## Anwenden von CSS und JavaScript auf HTML

Fast alle Websites, die Sie heutzutage nutzen, werden {{Glossary("CSS", "CSS")}} verwenden, um sie ansprechend zu gestalten, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionalitäten zu ermöglichen, wie Videoplayer, Karten, Spiele und mehr. Diese werden am häufigsten auf eine Webseite angewendet, indem das {{htmlelement("link")}}-Element bzw. das {{htmlelement("script")}}-Element verwendet wird.

- Das {{htmlelement("link")}}-Element sollte immer in den head Ihres Dokuments gehen. Es nimmt zwei Attribute an, `rel="stylesheet"`, was anzeigt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte auch in den head gehen und sollte ein `src` Attribut beinhalten, das den Pfad zum JavaScript enthält, das Sie laden möchten, und `defer`, was im Wesentlichen den Browser anwies, das JavaScript zu laden, nachdem die Seite das Parsen des HTMLs beendet hat. Dies ist nützlich, da es sicherstellt, dass das HTML vollständig geladen ist, bevor das JavaScript ausgeführt wird, damit Sie nicht auf Fehler stoßen, die dadurch resultieren, dass JavaScript versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite existiert. Es gibt tatsächlich eine Reihe von Möglichkeiten, JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste, um sie für moderne Browser zu verwenden (für andere lesen Sie [Script-Ladestrategien](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies)).

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element sieht vielleicht wie ein {{Glossary("void_element", "void element")}} aus, aber das ist es nicht, und braucht daher ein schließendes Tag. Anstatt auf eine externe Skriptdatei zu verweisen, können Sie auch wählen, Ihr Script innerhalb des `<script>`-Elements einzufügen.

### Aktives Lernen: CSS und JavaScript auf eine Seite anwenden

1. Um dieses aktive Lernen zu beginnen, holen Sie sich eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) Dateien und speichern Sie sie auf Ihrem lokalen Computer im selben Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateierweiterungen gespeichert werden.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Indem Sie die oben gegebenen Informationen befolgen, fügen Sie Ihre HTML so hinzu, dass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn Sie es richtig gemacht haben, sollten Sie beim Speichern Ihres HTMLs und Aktualisieren Ihres Browsers sehen, dass sich Dinge geändert haben:

![Beispiel, das eine Seite zeigt, der CSS und JavaScript hinzugefügt wurden. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie jetzt irgendwo außerhalb der Liste klicken, wird ein Dialogfenster angezeigt, in das Sie Text für ein neues Listenelement eingeben können. Wenn Sie auf die OK-Schaltfläche drücken, wird ein neues Listenelement mit dem Text zur Liste hinzugefügt. Wenn Sie auf ein vorhandenes Listenelement klicken, wird ein Dialogfenster angezeigt, mit dem Sie den Text des Elements ändern können.
- Das CSS hat den Hintergrund grün und den Text größer gemacht. Es hat auch einige der Inhalte, die das JavaScript auf die Seite hinzugefügt hat, gestylt (der rote Balken mit dem schwarzen Rand ist das Styling, das das CSS zur von JS generierten Liste hinzugefügt hat).

> [!NOTE]
> Wenn Sie in dieser Übung steckenbleiben und das CSS/JS nicht angewendet bekommen, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispielseite zu betrachten.

## Festlegen der primären Sprache des Dokuments

Abschließend sei erwähnt, dass Sie die Sprache Ihrer Seite festlegen können (und sollten). Dies kann durch das Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Global_attributes/lang) zum öffnenden HTML-Tag erfolgen (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) gesehen und unten gezeigt.)

```html
<html lang="en-US">
  …
</html>
```

Dies ist in vielerlei Hinsicht nützlich. Ihr HTML-Dokument wird von Suchmaschinen effizienter indiziert, wenn seine Sprache festgelegt ist (z.B. damit es korrekt in sprachspezifischen Ergebnissen erscheint) und es ist nützlich für Personen mit Sehbehinderungen, die Bildschirmlesegeräte verwenden (z.B. das Wort "six" existiert im Französischen und Englischen, wird aber unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments so einstellen, dass sie als unterschiedliche Sprachen erkannt werden. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt so einstellen, dass er als Japanisch erkannt wird, wie folgt:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes werden durch den [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) Standard definiert. Sie können mehr über sie in [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/) erfahren.

## Zusammenfassung

Damit endet unser Kurzüberblick über den HTML-head — es gibt viel mehr, was Sie hier tun können, aber eine erschöpfende Tour wäre an dieser Stelle langweilig und verwirrend, und wir wollten Ihnen nur einen Eindruck von den häufigsten Dingen vermitteln, die Sie hier finden werden! Im nächsten Artikel werden wir uns mit den [HTML-Textgrundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) befassen.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}
