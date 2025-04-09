---
title: "HTML: Erstellen des Inhalts"
short-title: Erstellen des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 23b06a9d3f40b7515298a0e2e7ec6e2322b172fd
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalte zu strukturieren. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und dessen Funktionalität und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Webseite erstellen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax — Eröffnungs- und Schlusstags, Elemente, Attribute, head, body.</li>
          <li>Gängige HTML-Elemente, einschließlich Absätzen, Überschriften, Bildern, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

HTML ist eine _Auszeichnungssprache_, die aus einer Reihe von **{{Glossary("element", "Elementen")}}** besteht, die verwendet werden, um Textinhalte zu umschließen (oder zu umhüllen), um deren Struktur zu definieren und sie sich auf eine bestimmte Weise verhalten zu lassen.

Betrachten wir ein Beispiel — der folgende Inhalt wird im Webbrowser auf der gleichen Linie angezeigt, da er in keiner Weise strukturiert ist:

```plain
Instructions for life:
Eat
Sleep
Repeat
```

Wenn wir diesen Inhalt mit den folgenden HTML-Elementen umschließen, können wir diese einzelne Zeile in einen Absatz ({{htmlelement("p")}}) und drei Aufzählungspunkte ({{htmlelement("li")}}) umwandeln:

```html live-sample___basic-html
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Dieses HTML wird in einem Webbrowser wie folgt dargestellt:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Neben der Strukturierung von Text hat HTML viele weitere Anwendungen — Text oder Bilder mit anderen Webseiten zu verlinken, Bilder oder Videos einzubetten, Datentabellen zu erstellen und vieles mehr.

## Erstellen Ihres ersten HTML-Dokuments

Sehen wir uns an, wie einzelne Elemente kombiniert werden, um eine HTML-Seite zu bilden. In diesem Abschnitt werden Sie eine grundlegende HTML-Datei erstellen und sich ansehen, woraus sie besteht.

1. Erstellen Sie in Ihrem `web-projects` Ordner einen weiteren neuen Ordner namens `first-website`.
2. Erstellen Sie innerhalb von `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau so ein, wie er gezeigt wird:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="" alt="My test image" />
  </body>
</html>
```

Hier haben wir folgendes:

- `<!doctype html>`: Der {{Glossary("Doctype", "DOCTYPE")}} ist ein erforderliches Vorspann. In den Anfängen der Zeit, als HTML jung war (um 1991/92), sollten Doctypes als Links zu einem Satz von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML angesehen zu werden, was automatische Fehlerprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage bewirken sie jedoch nicht viel und sind im Wesentlichen nur nötig, damit Ihr Dokument korrekt funktioniert. Das ist alles, was Sie jetzt wissen müssen.
- `<html></html>`: Das {{htmlelement("html")}} Element umschließt alle Inhalte auf der gesamten Seite und wird manchmal als **Root-Element** bezeichnet. Es enthält auch das `lang` {{Glossary("Attribute", "Attribut")}}, welches die primäre Sprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}} Element dient als Container für alles, was Sie auf der HTML-Seite einbeziehen möchten, das _nicht_ der Inhalt ist, den Sie den Besuchern Ihrer Seite anzeigen möchten. Dazu gehören Dinge wie {{Glossary("keyword", "Stichwörter")}} und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen soll, {{Glossary("CSS", "CSS")}} zur Gestaltung des Inhalts, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, auf {{Glossary("UTF-8", "UTF-8")}}, was die meisten Zeichen der großen Mehrheit der geschriebenen Sprachen umfasst. Grundsätzlich kann es jetzt jeden textlichen Inhalt behandeln, den Sie darauf stellen möchten. Es gibt keinen Grund, dies nicht festzulegen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) sorgt dafür, dass die Seite in der Breite des Browser-Viewports gerendert wird, wodurch verhindert wird, dass mobile Browser Seiten breiter als der Viewport rendern und dann verkleinern.
- `<title></title>`: Das {{htmlelement("title")}} Element legt den Titel Ihrer Seite fest, welcher der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Er wird auch verwendet, um die Seite zu beschreiben, wenn Sie ein Lesezeichen oder Favorit hinzufügen.
- `<body></body>`: Das {{htmlelement("body")}} Element enthält _alle_ Inhalte, die Sie den Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer. Im Moment enthält es nur ein einzelnes `<img>` Element, aber wir werden später mehr Inhalte hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **Öffnungstag** (zum Beispiel `<body>`), gefolgt vom Inhalt des Elements, gefolgt von einem **Schlusstag** (zum Beispiel `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen über das Element enthalten — siehe zum Beispiel `charset`, `name` und `src` in unserem Codebeispiel.

## Einbetten von Bildern

Werfen wir einen Blick auf das {{htmlelement("img")}} Element:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild an der Position in unsere Seite ein, an der es erscheint. Dies geschieht über das `src` (Quelle) Attribut, welches den Pfad zur Bilddatei enthält, die wir einbetten möchten.

Wir haben auch ein `alt` (alternativ) Attribut hinzugefügt. In dem [`alt` Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild möglicherweise nicht sehen können, möglicherweise aufgrund der folgenden Gründe:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden häufig Werkzeuge, die als Bildschirmleser bezeichnet werden, um den Alternativtext vorzulesen.
2. Etwas ist schief gelaufen, wodurch das Bild nicht angezeigt wird. Wenn das `src` Attribut keinen gültigen Pfad zu einem Bild enthält, wird der Alternativtext stattdessen angezeigt:

   ![Die Worte: mein Testbild](alt-text-example.png)

Der von Ihnen geschriebene Alternativtext sollte dem Leser genügend Informationen bieten, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "Mein Testbild" nicht gut, da er keine beschreibenden Informationen über das Bild liefert. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein brennender Fuchs, der die Erde umgibt."

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder Schlusstag und werden daher **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente genannt. Sie werden manchmal mit einem **nachgestellten Schrägstrich** am Ende ihres einzigen Tags (`<img />`) geschrieben, dies ist jedoch optional.

Lassen Sie nun Ihr Bild anzeigen.

1. Erstellen Sie innerhalb des Ordners `first-website` einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesen Ordner.
2. Geben Sie im Wert des `src` Attributs des `<img>` Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, welcher sich im gleichen Verzeichnis wie Ihre `index.html` Datei befindet, daher lautet der Pfad `images/` plus der Name Ihres Bildes. Zum Beispiel, wenn Ihr Bild `firefox-icon.png` hieße, würde Ihr `src` Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt` Attributs — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html` Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>` Element mit unserem Code; Achten Sie darauf, dass die Syntax, wie die Anführungszeichen, nicht fehlt. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich darüber keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.

> [!NOTE]
> Informieren Sie sich über die Verwendung eines `alt` Attributs für Bilder in verschiedenen Situationen in unserem [barrierefreies Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein alt Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Textauszeichnung

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zur Textauszeichnung verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, zu spezifizieren, dass bestimmte Teile Ihres Inhalts Überschriften — oder Unterüberschriften sind. In der gleichen Weise, wie ein Buch einen Haupttitel, Kapitelüberschriften und Untertitel hat, kann ein HTML-Dokument das auch. HTML enthält 6 Überschriftenebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie normalerweise nur 3 bis 4 davon verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML, das zwischen `<!--` und `-->` steht, ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar — nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, Notizen zu Ihrem Code oder Ihrer Logik hinzuzufügen, die für andere, die am gleichen Code arbeiten, nützlich sein könnten oder für Sie, falls Sie in 6 Monaten darauf zurückkommen und sich nicht erinnern können, was Sie gemacht haben.

Versuchen Sie nun, Ihrem HTML-Dokument einen geeigneten Haupttitel direkt über Ihrem {{htmlelement("img")}} Element hinzuzufügen. Speichern Sie die Datei und sehen Sie sich den Effekt in einem Browser an.

### Absätze

Absatz {{htmlelement("p")}} Elemente sind zum Einschließen von Textabsätzen; Sie werden diese häufig verwenden, wenn Sie normalen Textinhalt auszeichnen:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einem oder mehreren Absätzen hinzu, die direkt unter Ihrem {{htmlelement("img")}} Element platziert sind. Speichern Sie es und sehen Sie sich Ihre Seite in einem Browser an.

### Listen

Ein großer Teil der Webinhalte sind Listen, und HTML hat spezielle Elemente für diese. Das Markieren von Listen besteht immer aus mindestens 2 Elementen. Die gängigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie z. B. eine Einkaufsliste. Diese sind in ein {{htmlelement("ul")}} Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie z. B. eine Liste von Kochanweisungen in einem Rezept. Diese sind in ein {{htmlelement("ol")}} Element eingeschlossen.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}} (list item) Element gesetzt.

Wenn wir beispielsweise einen Teil des folgenden Fragment eines Absatzes in eine Liste umwandeln möchten:

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup so ändern:

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Versuchen Sie, Ihrer Beispielseite eine geordnete oder ungeordnete Liste hinzuzufügen, und betrachten Sie das Ergebnis in einem Browser.

## Erstellen von Links

Links sind sehr wichtig — sie machen das Web zu einem Netz! Um einen Link hinzuzufügen, müssen wir ein {{htmlelement("a")}} Element verwenden, "a" steht für "Anker". Um ein Text innerhalb Ihres Absatzes in einen Link zu verwandeln, folgen Sie diesen Schritten:

1. Wählen Sie einen Text aus. Wir wählten den Text "Mozilla Manifesto".
2. Umschließen Sie den Text mit einem {{htmlelement("a")}} Element, wie unten gezeigt:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Geben Sie dem {{htmlelement("a")}} Element ein `href` Attribut, wie unten gezeigt:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Füllen Sie den Wert dieses Attributs mit der Webadresse aus, zu der der Link zeigen soll:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den Teil `https://` oder `http://`, genannt das _Protokoll_, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass es Sie dorthin sendet, wo Sie hin wollten.

> **Hinweis:** `href` könnte auf den ersten Blick wie eine ziemlich obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erenz_.

Fügen Sie jetzt, wenn noch nicht geschehen, Ihrer Seite einen Link hinzu.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die wie die unten stehende aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Eine Screenshot einer Webseite, auf der ein Firefox-Logo, eine Überschrift mit der Aufschrift Mozilla ist cool, und zwei Absätze mit Fülltext zu sehen sind](finished-test-page-small.png)

Wenn Sie feststecken, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir wirklich nur an der Oberfläche von HTML gekratzt. Sie werden viel mehr in unserem [Inhalt mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul später im Kurs lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
