---
title: Was befindet sich im head? Metadaten in HTML
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

Der {{glossary("Head", "head")}} eines HTML-Dokuments ist der Teil, der nicht im Webbrowser angezeigt wird, wenn die Seite geladen wird. Er enthält Informationen wie den Seiten-{{htmlelement("title")}}, Links zu {{glossary("CSS")}} (falls Sie Ihr HTML-Inhalt mit CSS gestalten möchten), Links zu benutzerdefinierten Favicons und andere Metadaten (Daten über das HTML, wie z.B. den Autor und wichtige Schlüsselwörter, die das Dokument beschreiben). Webbrowser verwenden die im {{glossary("Head", "head")}} enthaltenen Informationen, um das HTML-Dokument korrekt darzustellen. In diesem Artikel decken wir all dies und mehr ab, um Ihnen eine gute Grundlage für die Arbeit mit Markup zu geben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen über den HTML-head, seinen Zweck, die wichtigsten Elemente, die
        er enthalten kann, und welche Wirkung er auf das HTML-Dokument haben kann.
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-head?

Werfen wir einen Blick auf das einfache [HTML-Dokument, das wir im vorherigen Artikel behandelt haben](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_document):

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

Der HTML-head ist der Inhalt des {{htmlelement("head")}}-Elements. Anders als der Inhalt des {{htmlelement("body")}}-Elements (welcher beim Laden im Browser auf der Seite angezeigt wird), wird der Inhalt des head nicht angezeigt. Stattdessen ist der Zweck des head, {{glossary("Metadata", "Metadaten")}} über das Dokument zu enthalten. Im obigen Beispiel ist der head ziemlich klein:

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

Auf größeren Seiten kann der head jedoch ziemlich groß werden. Versuchen Sie, einige Ihrer Lieblingswebsites zu besuchen und verwenden Sie die [Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools), um deren head-Inhalt zu überprüfen. Unser Ziel hier ist nicht, Ihnen zu zeigen, wie Sie alles verwenden, was in den head eingefügt werden kann, sondern Ihnen beizubringen, wie Sie die Hauptelemente verwenden, die Sie im head einfügen möchten, und Ihnen ein gewisses Grundwissen zu vermitteln. Lassen Sie uns anfangen.

## Einen Titel hinzufügen

Wir haben das {{htmlelement("title")}}-Element bereits im Einsatz gesehen – dieses kann verwendet werden, um dem Dokument einen Titel hinzuzufügen. Dies kann jedoch mit dem {{htmlelement("Heading_Elements", "h1")}}-Element verwechselt werden, das verwendet wird, um eine Überschrift auf oberster Ebene zu Ihrem Inhaltskörper hinzuzufügen – dies wird manchmal auch als Seitentitel bezeichnet. Aber sie sind verschiedene Dinge!

- Das {{htmlelement("Heading_Elements", "h1")}}-Element erscheint auf der Seite, wenn es im Browser geladen wird – in der Regel sollte es einmal pro Seite verwendet werden, um den Titel Ihres Seiteninhalts zu markieren (der Titel der Geschichte oder der Nachrichtenüberschrift oder was auch immer für Ihre Verwendung angemessen ist).
- Das {{htmlelement("title")}}-Element ist ein Metadatum, das den Titel des gesamten HTML-Dokuments (nicht den Titel des Inhalts) darstellt.

### Aktives Lernen: Ein einfaches Beispiel untersuchen

1. Um dieses aktive Lernexperiment zu beginnen, möchten wir, dass Sie unser GitHub-Repo besuchen und eine Kopie unserer [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um dies zu tun, entweder

   1. Kopieren und fügen Sie den Code aus der Seite in eine neue Textdatei in Ihrem Code-Editor ein und speichern Sie sie an einem sinnvollen Ort.
   2. Drücken Sie auf die Schaltfläche "Raw" auf der GitHub-Seite, wodurch der rohe Code angezeigt wird (möglicherweise in einem neuen Browser-Tab). Wählen Sie dann das Menü _Seite speichern unter…_ Ihres Browsers und wählen Sie einen sinnvollen Ort, um die Datei zu speichern.

2. Öffnen Sie nun die Datei in Ihrem Browser. Sie sollten etwas wie das Folgende sehen:

   ![Eine Webseite mit 'title'-Text im Browser-Tab und 'h1'-Text als Seitentitel im Dokumentkörper.](title-example.png)

   Es sollte jetzt völlig offensichtlich sein, wo der `<h1>`-Inhalt erscheint und wo der `<title>`-Inhalt erscheint!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen, die Inhalte dieser Elemente zu bearbeiten und dann die Seite in Ihrem Browser zu aktualisieren. Haben Sie Spaß damit.

Die Inhalte des `<title>`-Elements werden auch auf andere Weise verwendet. Wenn Sie zum Beispiel versuchen, die Seite zu bookmarken (_Lesezeichen > Diese Seite bookmarken_ oder das Sternsymbol in der URL-Leiste in Firefox), sehen Sie, dass die `<title>`-Inhalte als vorgeschlagener Lesezeichennamen ausgefüllt werden.

![Eine Webseite wird in Firefox gebookmarkt. Der Lesezeichenname wurde automatisch mit dem Inhalt des 'title'-Elements ausgefüllt.](bookmark-example.png)

Die `<title>`-Inhalte werden auch in Suchergebnissen verwendet, wie Sie unten sehen werden.

## Metadaten: das `<meta>`-Element

Metadaten sind Daten, die Daten beschreiben, und HTML hat eine "offizielle" Methode, um Metadaten zu einem Dokument hinzuzufügen – das {{htmlelement("meta")}}-Element. Natürlich könnte das andere Zeug, über das wir in diesem Artikel sprechen, auch als Metadaten angesehen werden. Es gibt viele verschiedene Arten von `<meta>`-Elementen, die in den `<head>` Ihrer Seite aufgenommen werden können, aber wir werden nicht versuchen, sie alle an dieser Stelle zu erklären, da es einfach zu verwirrend wäre. Stattdessen werden wir einige Dinge erklären, die Sie möglicherweise häufig sehen, um Ihnen einen Eindruck zu vermitteln.

### Zeichencodierung Ihres Dokuments angeben

Im obigen Beispiel war folgender Code enthalten:

```html
<meta charset="utf-8" />
```

Dieses Element gibt die Zeichencodierung des Dokuments an – das Zeichen-Set, das das Dokument verwenden darf. `utf-8` ist ein universelles Zeichen-Set, das nahezu jedes Zeichen aus jeder menschlichen Sprache enthält. Dies bedeutet, dass Ihre Webseite jede Sprache anzeigen kann; es ist daher eine gute Idee, dies auf jeder Webseite, die Sie erstellen, festzulegen! Zum Beispiel könnte Ihre Seite sowohl Englisch als auch Japanisch problemlos anzeigen:

![Eine Webseite enthält englische und japanische Zeichen, mit der Zeichencodierung auf universal oder utf-8 eingestellt. Beide Sprachen werden korrekt angezeigt.](correct-encoding.png)

Wenn Sie Ihre Zeichencodierung beispielsweise auf `ISO-8859-1` einstellen (das Zeichen-Set für das lateinische Alphabet), könnte die Seitendarstellung völlig durcheinander erscheinen:

![Eine Webseite enthält englische und japanische Zeichen, mit der Zeichencodierung auf lateinisch eingestellt. Die japanischen Zeichen werden nicht korrekt angezeigt.](bad-encoding.png)

> [!NOTE]
> Manche Browser (wie Chrome) beheben fehlerhafte Codierungen automatisch. Abhängig von dem Browser, den Sie verwenden, sehen Sie dieses Problem möglicherweise nicht. Dennoch sollten Sie eine utf-8-Codierung auf Ihrer Seite festlegen, um potenzielle Probleme in anderen Browsern zu vermeiden.

### Aktives Lernen: Mit Zeichencodierung experimentieren

Um dies auszuprobieren, besuchen Sie die einfache HTML-Vorlage, die Sie im vorherigen Abschnitt über `<title>` erhalten haben (die [title-example.html Seite](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)), versuchen Sie, den Wert des Meta-Charset in `ISO-8859-1` zu ändern, und fügen Sie Ihrer Seite Japanisch hinzu. Dies ist der Code, den wir verwendet haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### Einen Autor und eine Beschreibung hinzufügen

Viele `<meta>`-Elemente enthalten `name`- und `content`-Attribute:

- `name` gibt den Typ des Metaelements an; welche Art von Informationen es enthält.
- `content` gibt den tatsächlichen Metainhalt an.

Zwei solche Metaelemente, die es sinnvoll ist, auf Ihrer Seite hinzuzufügen, definieren den Autor der Seite und liefern eine prägnante Beschreibung der Seite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

Die Angabe eines Autors ist in vielerlei Hinsicht nützlich: Es ist hilfreich zu wissen, wer die Seite geschrieben hat, wenn Sie Fragen zum Inhalt haben und diese Person kontaktieren möchten. Einige Content-Management-Systeme haben Funktionen, um automatisch Informationen über den Seitenautor zu extrahieren und für solche Zwecke bereitzustellen.

Die Angabe einer Beschreibung, die Schlüsselwörter enthält, die sich auf den Inhalt Ihrer Seite beziehen, ist hilfreich, da sie das Potenzial hat, Ihre Seite in relevanten Suchanfragen in Suchmaschinen höher erscheinen zu lassen (solche Aktivitäten werden als [Suchmaschinenoptimierung](/de/docs/Glossary/SEO) oder {{glossary("SEO")}} bezeichnet).

### Aktives Lernen: Die Verwendung der Beschreibung in Suchmaschinen

Die Beschreibung wird auch auf Suchmaschinenergebnisseiten verwendet. Lassen Sie uns eine Übung durchführen, um dies zu erkunden

1. Gehen Sie zur [Startseite von The Mozilla Developer Network](/en-US/).
2. Sehen Sie sich den Quellcode der Seite an (klicken Sie mit der rechten Maustaste auf die Seite und wählen Sie _Seitenquelltext anzeigen_ im Kontextmenü.)
3. Finden Sie das description-Meta-Tag. Es wird in etwa so aussehen (obgleich es sich im Laufe der Zeit ändern kann):

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. Nun suchen Sie in Ihrer bevorzugten Suchmaschine nach "MDN Web Docs" (wir haben Google verwendet.) Sie werden bemerken, dass die Inhaltselemente `<meta>` und `<title>` in den Suchergebnissen verwendet werden – definitiv lohnenswert!

   ![Ein Yahoo-Suchergebnis für "Mozilla Developer Network"](mdn-search-result.png)

> [!NOTE]
> In Google werden Sie einige relevante Unterseiten von MDN Web Docs unter dem Hauptlink der Startseite aufgelistet sehen – dies sind Sitelinks, die in [Googles Webmaster-Tools](https://search.google.com/search-console/about?hl=en) konfigurierbar sind – eine Möglichkeit, die Suchergebnisse Ihrer Seite in der Google-Suchmaschine zu verbessern.

> [!NOTE]
> Viele `<meta>`-Funktionen werden einfach nicht mehr verwendet. Zum Beispiel das Schlüsselwort `<meta>`-Element (`<meta name="keywords" content="fill, in, your, keywords, here">`) – das angeblich Schlüsselwörter für Suchmaschinen bereitstellt, um die Relevanz dieser Seite für verschiedene Suchbegriffe zu bestimmen – wird von Suchmaschinen ignoriert, weil Spammer einfach die Schlüsselwortliste mit Hunderten von Schlüsselwörtern füllten und die Ergebnisse verfälschten.

### Andere Arten von Metadaten

Wenn Sie im Internet unterwegs sind, werden Sie auch auf andere Arten von Metadaten stoßen. Viele der Funktionen, die Sie auf Websites sehen, sind proprietäre Kreationen, die so entwickelt wurden, dass sie bestimmten Seiten (wie sozialen Netzwerkseiten) spezifische Informationen liefern, die sie verwenden können.

Zum Beispiel ist [Open Graph Data](https://ogp.me/) ein Metadatenprotokoll, das von Facebook erfunden wurde, um reichhaltigere Metadaten für Websites bereitzustellen. Im Quellcode von MDN Web Docs finden Sie Folgendes:

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

Eine Auswirkung davon ist, dass beim Verlinken zu MDN Web Docs auf Facebook, der Link zusammen mit einem Bild und einer Beschreibung angezeigt wird: ein reichhaltigeres Erlebnis für Nutzer.

![Open Graph-Protokolldaten von der MDN-Startseite, angezeigt auf Facebook, mit einem Bild, Titel und Beschreibung.](facebook-output.png)

## Benutzerdefinierte Icons zu Ihrer Seite hinzufügen

Um das Design Ihrer Seite zu bereichern, können Sie Referenzen zu benutzerdefinierten Icons in Ihre Metadaten einfügen, und diese werden in bestimmten Kontexten angezeigt. Das am häufigsten verwendete davon ist das **Favicon** (kurz für "Favourites Icon", in Bezug auf seine Verwendung in den "Favoriten"- oder "Bookmarks"-Listen in Browsern).

Das bescheidene Favicon gibt es schon seit vielen Jahren. Es ist das erste Icon dieser Art: ein 16 Pixel großes Quadrat-Icon, das an mehreren Stellen verwendet wird. Je nach Browser können Sie Favicons in den Tabs des Browsers, die jeweils eine offene Seite enthalten, und neben gebookmarkten Seiten im Bookmark-Panel sehen.

Ein Favicon kann Ihrer Seite hinzugefügt werden, indem Sie:

1. Es im gleichen Verzeichnis wie die Indexseite der Website speichern, gespeichert im `.ico`-Format (die meisten unterstützen auch Favicons in häufigeren Formaten wie `.gif` oder `.png`)
2. Die folgende Zeile in den {{HTMLElement("head")}}-Block Ihres HTMLs einzufügen, um darauf zu verweisen:

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

Hier ist ein Beispiel eines Favicons im Bookmark-Panel:

![Das Firefox-Bookmark-Panel zeigt ein gebookmarktes Beispiel mit einem angezeigten Favicon daneben.](bookmark-favicon.png)

Sie benötigen möglicherweise auch verschiedene Icons für verschiedene Kontexte. Zum Beispiel finden Sie das im Quellcode der MDN Web Docs-Startseite:

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

Dies ist eine Möglichkeit, die Seite dazu zu bringen, ein Icon anzuzeigen, wenn sie auf einem Apple-Gerät auf dem Startbildschirm gespeichert wird. Sie möchten möglicherweise sogar verschiedene Icons für verschiedene Geräte bereitstellen, um sicherzustellen, dass das Icon auf allen Geräten gut aussieht. Zum Beispiel:

```html
<!-- iPad Pro mit hochauflösendem Retina-Display: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- 3x Auflösung iPhone: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- Nicht-Retina iPad, iPad mini, etc.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- 2x Auflösung iPhone und andere Geräte: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- grundlegendes Favicon -->
<link rel="icon" href="/favicon.ico" />
```

Die Kommentare erklären, wofür jedes Icon verwendet wird - diese Elemente decken Dinge ab wie das Bereitstellen eines schönen hochauflösenden Icons, das verwendet wird, wenn die Website auf dem Startbildschirm eines iPads gespeichert ist.

Machen Sie sich jetzt keine Sorgen darüber, alle diese Arten von Icons zu implementieren – dies ist eine ziemlich fortgeschrittene Funktion, und Sie werden nicht erwartet, Kenntnisse darüber zu haben, um den Kurs fortzusetzen. Der Hauptzweck hier ist, Ihnen zu zeigen, was solche Dinge sind, falls Sie darauf stoßen, wenn Sie den Quellcode anderer Websites durchstöbern. Wenn Sie mehr über all diese Werte und deren Auswahl lernen möchten, lesen Sie die Referenzseite des {{HTMLElement("link")}}-Elements.

> [!NOTE]
> Wenn Ihre Seite eine Content Security Policy (CSP) zur Erhöhung der Sicherheit verwendet, gilt die Richtlinie auch für das Favicon. Wenn Sie auf Probleme mit dem Laden des Favicons stoßen, überprüfen Sie, ob die Richtlinie {{HTTPHeader("Content-Security-Policy")}} dafür sorgt, dass die [`img-src`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) nicht den Zugriff darauf verhindert.

## CSS und JavaScript auf HTML anwenden

Fast alle Websites, die Sie heutzutage verwenden, verwenden {{glossary("CSS")}}, um sie ansprechend aussehen zu lassen, und {{glossary("JavaScript")}}, um interaktive Funktionalitäten wie Videoplayer, Karten, Spiele und mehr zu ermöglichen. Diese werden am häufigsten auf eine Webseite mit dem {{htmlelement("link")}}-Element und dem {{htmlelement("script")}}-Element angewendet.

- Das {{htmlelement("link")}}-Element sollte immer im head Ihres Dokuments platziert werden. Es nimmt zwei Attribute, `rel="stylesheet"`, was anzeigt, dass es das Stylesheet des Dokuments ist, und `href`, das den Pfad zur Stylesheet-Datei enthält:

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- Das {{htmlelement("script")}}-Element sollte ebenfalls in den head eingefügt werden und sollte ein `src`-Attribut enthalten, das den Pfad zu dem JavaScript enthält, das Sie laden möchten, und `defer`, welches den Browser im Wesentlichen anweist, das JavaScript nach dem Parsen des HTML zu laden. Dies ist nützlich, da es sicherstellt, dass das HTML vollständig geladen ist, bevor das JavaScript ausgeführt wird, um Fehler zu vermeiden, die entstehen, wenn JavaScript versucht, auf ein HTML-Element zuzugreifen, das noch nicht auf der Seite existiert. Es gibt tatsächlich eine Reihe von Möglichkeiten, JavaScript auf Ihrer Seite zu laden, aber dies ist die zuverlässigste für moderne Browser (für andere lesen Sie [Skript-Ladestrategien](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies)).

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > Das `<script>`-Element sieht vielleicht wie ein {{glossary("void element")}} aus, ist es aber nicht, und benötigt daher ein schließendes Tag. Anstelle eines externen Skriptdatei-Referenzierung können Sie sich auch entscheiden, Ihr Skript innerhalb des `<script>`-Elements einzufügen.

### Aktives Lernen: CSS und JavaScript auf eine Seite anwenden

1. Um dieses aktive Lernen zu beginnen, holen Sie sich eine Kopie unserer [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) Dateien, und speichern Sie sie auf Ihrem lokalen Computer im gleichen Verzeichnis. Stellen Sie sicher, dass sie mit den korrekten Namen und Dateierweiterungen gespeichert werden.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser als auch in Ihrem Texteditor.
3. Fügen Sie nun, basierend auf den gegebenen Informationen, {{htmlelement("link")}}- und {{htmlelement("script")}}-Elemente zu Ihrem HTML hinzu, sodass Ihr CSS und JavaScript auf Ihr HTML angewendet werden.

Wenn Sie es richtig gemacht haben, sollten Sie, wenn Sie Ihr HTML speichern und Ihren Browser aktualisieren, sehen, dass sich Dinge verändert haben:

![Beispiel, das eine Seite mit darauf angewendetem CSS und JavaScript zeigt. Das CSS hat die Seite grün gemacht, während das JavaScript eine dynamische Liste zur Seite hinzugefügt hat.](js-and-css.png)

- Das JavaScript hat eine leere Liste zur Seite hinzugefügt. Wenn Sie nun irgendwo außerhalb der Liste klicken, wird ein Dialogfeld angezeigt, das Sie auffordert, einen Text für ein neues Listenelement einzugeben. Wenn Sie die OK-Taste drücken, wird ein neues Listenelement mit dem Text hinzugefügt. Wenn Sie auf ein vorhandenes Listenelement klicken, wird ein Dialogfeld geöffnet, in dem Sie den Text des Elements ändern können.
- Das CSS hat dafür gesorgt, dass der Hintergrund grün und der Text größer wird. Es hat auch einige der Inhalte gestyled, die JavaScript zur Seite hinzugefügt hat (der rote Balken mit dem schwarzen Rahmen ist das Styling, das das CSS zur von JS erzeugten Liste hinzugefügt hat.)

> [!NOTE]
> Wenn Sie in dieser Übung stecken bleiben und das CSS/JS nicht anwenden können, versuchen Sie, unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) Beispielseite zu überprüfen.

## Die primäre Sprache des Dokuments setzen

Schließlich ist es erwähnenswert, dass Sie die Sprache Ihrer Seite festlegen können (und wirklich sollten). Dies kann durch Hinzufügen des [lang-Attributs](/de/docs/Web/HTML/Global_attributes/lang) zum öffnenden HTML-Tag getan werden (wie im [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) und unten gezeigt.)

```html
<html lang="en-US">
  …
</html>
```

Dies ist in vielerlei Hinsicht nützlich. Ihr HTML-Dokument wird effektiver von Suchmaschinen indexiert, wenn seine Sprache festgelegt ist (was z.B. erlaubt, dass es korrekt in sprachspezifischen Ergebnissen erscheint), und es ist für Menschen mit Sehbehinderungen nützlich, die Screenreader verwenden (z.B. gibt es das Wort "six" sowohl im Französischen als auch im Englischen, wird aber unterschiedlich ausgesprochen.)

Sie können auch Unterabschnitte Ihres Dokuments so einstellen, dass sie als andere Sprachen erkannt werden. Zum Beispiel könnten wir unseren japanischen Sprachabschnitt so einstellen, dass er als Japanisch erkannt wird, wie folgt:

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

Diese Codes sind durch den [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) Standard definiert. Sie können mehr darüber in [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/) erfahren.

## Zusammenfassung

Damit endet unsere schnelle Tour durch den HTML-head – es gibt noch viel mehr, was Sie hier machen können, aber eine erschöpfende Tour wäre auf diesem Level langweilig und verwirrend, und wir wollten Ihnen nur einen Eindruck der häufigsten Dinge geben, die Sie hier vorfinden werden, um jetzt! Im nächsten Artikel werden wir uns mit den [HTML-Textgrundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) befassen.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}
