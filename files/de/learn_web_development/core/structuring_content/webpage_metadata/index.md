---
title: Was befindet sich im Kopf? Metadaten einer Webseite
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

Der {{Glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der im Webbrowser nicht angezeigt wird, wenn die Seite geladen wird. Er enthält Metadaten-Informationen wie den {{htmlelement("title")}} der Seite, Links zu {{Glossary("CSS", "CSS")}} (falls Sie Ihr HTML-Inhalt mit CSS stylen möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben).

Webbrowser verwenden Informationen, die im {{Glossary("Head", "head")}} enthalten sind, um das HTML-Dokument korrekt darzustellen. In diesem Artikel werden wir all dies und mehr behandeln, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie in der vorherigen Lektion behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der HTML-Head und seine Funktion als Metadaten-Container für das Dokument.</li>
          <li>Festlegen der Zeichencodierung und des Titels des Dokuments.</li>
          <li>Bereitstellung von Metadaten für Suchmaschinen.</li>
          <li>Verknüpfen mit Symbolen für die Verwendung in Browsern und mobilen Plattformen.</li>
          <li>Verknüpfen mit Stylesheets und Skriptdateien.</li>
          <li>Die Notwendigkeit, die Sprache eines Dokuments mit dem <code>lang</code>-Attribut im öffnenden <code>&lt;html&gt;</code>-Tag festzulegen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Head?

Lassen Sie uns das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben, noch einmal ansehen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document):

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

Der HTML-Head ist der Inhalt des {{htmlelement("head")}}-Elements. Im Gegensatz zum Inhalt des {{htmlelement("body")}}-Elements (der auf der Seite angezeigt wird, wenn diese in einem Browser geladen wird), wird der Inhalt des Handlers nicht auf der Seite angezeigt. Stattdessen hat der Head die Aufgabe, {{Glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der Head recht klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Bei größeren Seiten kann der Head jedoch sehr umfangreich werden. Versuchen Sie, einige Ihrer Lieblingswebsites zu besuchen und verwenden Sie die [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), um deren Head-Inhalte zu überprüfen. Unser Ziel hier ist es nicht, Ihnen zu zeigen, wie Sie alles verwenden, was in den Head eingefügt werden kann, sondern Ihnen beizubringen, wie Sie die wichtigsten Elemente verwenden, die Sie in den Head einfügen möchten, und Ihnen etwas Vertrautheit zu geben. Lassen Sie uns beginnen.

## Einen Titel hinzufügen

Wir haben das {{htmlelement("title")}}-Element bereits in Aktion gesehen – es kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um Ihrem Body-Inhalt eine Überschrift der obersten Ebene hinzuzufügen – dies wird auch manchmal als Seitentitel bezeichnet. Aber sie sind verschiedene Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn sie im Browser geladen wird – im Allgemeinen sollte dies einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu markieren (der Geschichtstitel, die Nachrichtenüberschrift oder was auch immer für Ihre Nutzung angemessen ist).
- Das {{htmlelement("title")}}-Element ist ein Metadatum, das den Titel des gesamten HTML-Dokuments darstellt (nicht den Inhalt des Dokuments).

### Aktives Lernen: Ein Beispiel überprüfen

1. Um mit diesem aktiven Lernen zu beginnen, möchten wir, dass Sie unser GitHub-Repo besuchen und eine Kopie unserer [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Dazu können Sie entweder

   1. Den Code aus der Seite kopieren und in eine neue Textdatei in Ihrem Code-Editor einfügen, die Sie dann an einem sinnvollen Ort speichern.
   2. Die Schaltfläche „Raw“ auf der GitHub-Seite drücken, wodurch der rohe Code angezeigt wird (möglicherweise in einem neuen Browser-Tab). Wählen Sie dann im Browsermenü ‚Seite speichern unter…‘ und wählen Sie einen sinnvollen Speicherort für die Datei aus.

2. Öffnen Sie die Datei jetzt in Ihrem Browser. Sie sollten etwas Ähnliches sehen wie dieses:

   ![Eine Webseite mit 'title'-Text im Seitentab des Browsers und 'h1'-Text als Seitenüberschrift im Dokumentkörper.](title-example.png)

   Es sollte nun völlig offensichtlich sein, wo der `<h1>`-Inhalt und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, den Inhalt dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie Spaß damit.

Der Inhalt des `<title>`-Elements wird auch auf andere Weisen verwendet. Zum Beispiel, wenn Sie versuchen, die Seite zu bookmarken (_Lesezeichen > Diese Seite bookmarken_ oder das Stern-Symbol in der URL-Leiste in Firefox), sehen Sie den Inhalt des `<title>`-Elements als vorgeschlagenen Lesezeichennamen ausgefüllt.

![Eine Webseite wird in Firefox als Lesezeichen hinzugefügt. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt](bookmark-example.png)

Der `<title>`-Inhalt wird auch in Suchergebnissen verwendet, wie Sie im Folgenden sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Methode, Metadaten zu einem Dokument hinzuzufügen – das {{htmlelement("meta")}}-Element. Natürlich könnten auch die anderen Dinge, über die wir in diesem Artikel sprechen, als Metadaten angesehen werden. Es gibt viele verschiedene Typen von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können. Wir werden jedoch nicht versuchen, sie alle an dieser Stelle zu erklären, da es einfach zu verwirrend werden würde. Stattdessen erklären wir einige Dinge, die Sie möglicherweise häufig sehen, nur um Ihnen eine Vorstellung zu geben.

### Die Zeichencodierung Ihres Dokuments angeben

Im obigen Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichencodierung des Dokuments an – das Zeichen-Set, das das Dokument verwenden darf. `utf-8` ist ein universelles Zeichenset, das so ziemlich jedes Zeichen jeder menschlichen Sprache enthält. Das bedeutet, dass Ihre Webseite in der Lage sein wird, jede Sprache anzuzeigen; es ist daher eine gute Idee, dies auf jeder von Ihnen erstellten Webseite festzulegen! Zum Beispiel könnte Ihre Seite Englisch und Japanisch problemlos verarbeiten:

![Eine Webseite, die englische und japanische Zeichen enthält, wobei die Zeichencodierung auf universell oder utf-8 eingestellt ist. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` (das Zeichenset für das lateinische Alphabet) einstellen, könnte die Darstellung Ihrer Seite völlig durcheinander erscheinen:

![Eine Webseite, die englische und japanische Zeichen enthält, wobei die Zeichencodierung auf lateinisch eingestellt ist. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Einige Browser (wie Chrome) korrigieren falsche Codierungen automatisch, sodass je nach Browser, den Sie verwenden, dieses Problem möglicherweise nicht auftritt. Sie sollten dennoch auf Ihrer Seite eine Codierung von `utf-8` festlegen, um mögliche Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Mit Zeichencodierung experimentieren

Um dies auszuprobieren, kehren Sie bitte zur einfachen HTML-Vorlage zurück, die Sie im vorherigen Abschnitt über `<title>` erhalten haben (die [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), versuchen Sie den Metasatzwert in `ISO-8859-1` zu ändern und fügen Sie das Japanische Ihrer Seite hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Einen Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten `name`- und `content`-Attribute:

- `name` gibt an, um welchen Metadatentyp es sich handelt; welche Art von Informationen es enthält.
- `content` gibt den tatsächlichen Metainhalt an.

Zwei derartige Metadaten-Elemente, die Sie auf Ihrer Seite aufnehmen können, definieren den Autor der Seite und geben eine prägnante Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Die Angabe eines Autors ist in vielerlei Hinsicht nützlich: Es ist vorteilhaft zu wissen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und ihn kontaktieren möchten. Einige Content-Management-Systeme bieten die Möglichkeit, automatisch Informationen über den Seitenautor zu extrahieren und für solche Zwecke verfügbar zu machen.

Eine Beschreibung anzugeben, die Schlüsselwörter enthält, die sich auf den Inhalt Ihrer Seite beziehen, ist nützlich, da es das Potenzial hat, dass Ihre Seite bei relevanten Suchen in Suchmaschinen höher erscheint (solche Aktivitäten werden als {{Glossary("SEO", "Suchmaschinenoptimierung")}} oder {{Glossary("SEO", "SEO")}} bezeichnet).

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf Suchmaschinenergebnisseiten verwendet. Lassen Sie uns eine Übung durchgehen, um dies zu erforschen

1. Gehen Sie zur [Startseite des Mozilla Developer Network](/de/).
2. Sehen Sie sich den Quellcode der Seite an (Rechtsklick auf die Seite, wählen Sie _Seitenquelltext anzeigen_ aus dem Kontextmenü).
3. Finden Sie das Beschreibung-Meta-Tag. Es wird in etwa so aussehen (obwohl es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Jetzt suchen Sie nach "MDN Web Docs" in Ihrer bevorzugten Suchmaschine (wir haben Google verwendet). Sie werden feststellen, dass die Beschreibung des `<meta>`- und `<title>`-Elemente im Suchergebnis verwendet wird – definitiv lohnenswert, es zu haben!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden einige relevante Unterseiten von MDN Web Docs unter dem Hauptlink zur Startseite aufgelistet - diese werden Sitelinks genannt und können in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=de) konfiguriert werden - eine Möglichkeit, die Suchergebnisse Ihrer Seite in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Features werden heutzutage einfach nicht mehr verwendet. Beispielsweise wird das Schlüsselwort-`<meta>`-Element (`<meta name="keywords" content="füllen, Sie, ihre, Schlüsselwörter, hier, ein">`) — das Schlüsselwörter für Suchmaschinen bereitstellen soll, um die Relevanz dieser Seite für verschiedene Suchbegriffe zu bestimmen — von Suchmaschinen ignoriert, da Spammer die Schlüsselwortliste einfach mit Hunderten von Schlüsselwörtern füllten und damit die Ergebnisse verzerrten.

### Andere Arten von Metadaten

Während Sie im Internet surfen, werden Sie auch andere Arten von Metadaten finden. Viele der Funktionen, die Sie auf Websites sehen, sind proprietäre Kreationen, die bestimmten Seiten (wie z. B. sozialen Netzwerken) bestimmte Informationen bereitstellen sollen, die sie verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das von Facebook erfunden wurde, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode der MDN Web Docs sehen Sie dies:

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

Ein Effekt davon ist, dass, wenn Sie auf Facebook auf MDN Web Docs verlinken, der Link zusammen mit einem Bild und einer Beschreibung angezeigt wird: ein reichhaltigeres Erlebnis für die Benutzer.

![Open graph protocol data von der MDN-Startseite wie auf Facebook angezeigt, das ein Bild, einen Titel und eine Beschreibung zeigt.](facebook-output.png)

## Benutzerdefinierte Icons zu Ihrer Website hinzufügen

Um das Design Ihrer Seite weiter zu bereichern, können Sie in Ihren Metadaten auf benutzerdefinierte Icons verweisen, die in bestimmten Kontexten angezeigt werden. Am häufigsten wird dabei das **Favicon** verwendet (kurz für "Favoriten-Icon", in Bezug auf seine Verwendung in den "Favoriten"- oder "Lesezeichen"-Listen in Browsern).

Das bescheidene Favicon gibt es schon seit vielen Jahren. Es ist das erste Icon dieser Art: ein 16-Pixel-Quadratsymbol, das an verschiedenen Stellen verwendet wird. Sie können (je nach Browser) Favicons im Browser-Tab sehen, das jede offene Seite enthält, und neben den als Lesezeichen gespeicherten Seiten im Lesezeichenfeld.

Ein Favicon kann Ihrer Seite hinzugefügt werden durch:

1. Speichern im gleichen Verzeichnis wie die Indexseite der Site, gespeichert im `.ico`-Format (die meisten unterstützen auch Favicons in gebräuchlicheren Formaten wie `.gif` oder `.png`)
2. Hinzufügen der folgenden Zeile in den {{HTMLElement("head")}}-Block Ihres HTML, um es zu referenzieren:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel für ein Favicon im Lesezeichenfenster:

![Das Firefox-Lesezeichenfenster, das ein als Lesezeichen gespeichertes Beispiel mit einem daneben angezeigten Favicon zeigt.](bookmark-favicon.png)

Sie benötigen möglicherweise auch unterschiedliche Icons für unterschiedliche Kontexte. Zum Beispiel finden Sie dies im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, das Symbol anzuzeigen, wenn die Website auf einem Apple-Gerät dem Startbildschirm hinzugefügt wird. Vielleicht möchten Sie sogar verschiedene Icons für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Symbol auf allen Geräten gut aussieht. Zum Beispiel:

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

Die Kommentare erklären, wofür jedes Icon verwendet wird — diese Elemente decken Dinge ab, wie das Bereitstellen eines schönen hochauflösenden Icons zur Verwendung, wenn die Website auf dem Startbildschirm eines iPads gespeichert wird.

Machen Sie sich im Moment keine allzu großen Sorgen, all diese Arten von Icons zu implementieren — dies ist ein ziemlich fortgeschrittenes Thema, und es wird nicht erwartet, dass Sie diesbezüglich Kenntnisse haben, um im Kurs weiterzukommen. Das Hauptziel hier ist, Ihnen eine Vorstellung davon zu geben, was solche Dinge sind, falls Sie ihnen begegnen, während Sie den Quellcode anderer Websites durchsuchen. Wenn Sie mehr über all diese Werte erfahren und wissen möchten, wie Sie sie auswählen, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Website eine Content Security Policy (CSP) verwendet, um die Sicherheit zu verbessern, gilt die Richtlinie auch für das Favicon. Wenn Probleme auftreten, weil das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header-Richtlinie [`img-src` directive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.

## Anwenden von CSS und JavaScript auf HTML

So gut wie alle Websites, die Sie heutzutage nutzen, verwenden {{Glossary("CSS", "CSS")}}, um cool auszusehen, und {{Glossary("JavaScript", "JavaScript")}}, um interaktive Funktionen zu betreiben, wie z.B. Videoplayer, Karten, Spiele und mehr. Diese werden am häufigsten mit dem {{htmlelement("link")}}-Element bzw. dem {{htmlelement("script")}}-Element auf eine Webseite angewandt.

- Das {{htmlelement("link")}}-Element sollte immer im Head Ihres Dokuments stehen. Dieses benötigt zwei Attribute, `rel="stylesheet"`, welches anzeigt, dass es sich um das Stylesheet des Dokuments handelt, und `href`, welches den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den Head eingefügt werden und sollte ein `src`-Attribut enthalten, das den Pfad zu dem JavaScript enthält, das Sie laden möchten, und `defer`, was den Browser im Wesentlichen anweist, das JavaScript zu laden, nachdem die Seite mit dem Parsen des HTML fertig ist. Dies ist nützlich, da es sicherstellt, dass das HTML vollständig geladen ist, bevor das JavaScript läuft, sodass Sie keine Fehler erhalten, die durch JavaScript verursacht werden, das versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite existiert. Es gibt tatsächlich eine Reihe von Möglichkeiten, JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste Methode für moderne Browser (lesen Sie für andere [Skript-Ladestrategien](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies)).

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Obwohl das `<script>`-Element wie ein [Void-Element](/de/docs/Glossar/void_element) aussieht, ist es keines, und benötigt daher ein schließendes Tag. Anstatt auf eine externe Skript-Datei zu verweisen, können Sie Ihr Skript auch innerhalb des `<script>`-Elements platzieren.

### Aktives Lernen: Anwenden von CSS und JavaScript auf eine Seite

1. Um dieses aktive Lernen zu beginnen, nehmen Sie eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) Dateien und speichern Sie sie auf Ihrem lokalen Computer im gleichen Verzeichnis. Stellen Sie sicher, dass sie mit den richtigen Namen und Dateierweiterungen gespeichert sind.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie nach den oben gegebenen Informationen {{htmlelement("link")}} und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, damit Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn alles korrekt gemacht wurde, sollten Sie, wenn Sie Ihr HTML speichern und den Browser aktualisieren, sehen können, dass sich Dinge verändert haben:

![Beispiel, das eine Seite mit CSS und JavaScript zeigt. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie nun irgendwo außerhalb der Liste klicken, wird ein Dialogfeld angezeigt, in dem Sie aufgefordert werden, einen Text für ein neues Listenelement einzugeben. Wenn Sie auf OK drücken, wird ein neues Listenelement zur Liste mit dem Text hinzugefügt. Wenn Sie auf ein bestehendes Listenelement klicken, erscheint ein Dialogfeld, das es Ihnen ermöglicht, den Text des Elements zu ändern.
- Das CSS hat dazu geführt, dass der Hintergrund grün geworden ist und der Text größer. Es hat auch einige der Inhalte gestylt, die das JavaScript zur Seite hinzugefügt hat (der rote Balken mit dem schwarzen Rand ist das Styling, das das CSS zur von JS generierten Liste hinzugefügt hat.)

> [!NOTE]
> Wenn Sie bei dieser Übung stecken bleiben und nicht in der Lage sind, das CSS/JS anzuwenden, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispielseite anzusehen.

## Die Hauptsprache des Dokuments festlegen

Schließlich, es ist erwähnenswert, dass Sie die Sprache Ihrer Seite festlegen können (und wirklich sollten). Dies kann durch das Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Global_attributes/lang) zum öffnenden HTML-Tag (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) gezeigt) geschehen.

```html
<html lang="en-US">
  …
</html>
```

Dies ist in vielerlei Hinsicht nützlich. Ihr HTML-Dokument wird von Suchmaschinen effektiver indexiert, wenn die Sprache festgelegt ist (es wird so zum Beispiel korrekt in sprachspezifischen Ergebnissen angezeigt), und es ist auch für Menschen mit Sehbehinderungen nützlich, die Bildschirmlesegeräte verwenden (zum Beispiel gibt es das Wort "six" sowohl im Französischen als auch im Englischen, aber es wird unterschiedlich ausgesprochen).

Sie können auch Unterabschnitte Ihres Dokuments festlegen, um als andere Sprachen erkannt zu werden. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt so einstellen, dass er als Japanisch erkannt wird:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes werden durch den [ISO 639-1](https://de.wikipedia.org/wiki/ISO_639-1)-Standard definiert. Weitere Informationen finden Sie in [Sprache-Tags in HTML und XML](https://www.w3.org/International/articles/language-tags/).

## Zusammenfassung

Das markiert das Ende unserer Schnellführung durch den HTML-Head – es gibt noch viel mehr, was Sie dort tun können, aber eine umfassende Tour wäre auf dieser Stufe langweilig und verwirrend, und wir wollten Ihnen nur eine Vorstellung von den gängigsten Dingen geben, die Sie dort derzeit finden werden! Im nächsten Artikel werden wir uns mit [Überschriften und Absätzen in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) beschäftigen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
