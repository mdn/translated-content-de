---
title: "HTML: Erstellen der Inhalte"
short-title: Erstellen der Inhalte
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und ihre Inhalte zu strukturieren. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seiner Funktionalität und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Website erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Ihrem Computer-Betriebssystem, die grundlegende Software, die Sie zur Erstellung einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Zweck und Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax — öffnende und schließende Tags, Elemente, Attribute, head, body.</li>
          <li>Gängige HTML-Elemente einschließlich Absätzen, Überschriften, Bildern, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

HTML ist eine _Markup-Sprache_, die aus einer Reihe von **{{Glossary("element", "Elementen")}}** besteht, die verwendet werden, um Textinhalte zu umhüllen (oder einzuschließen), um deren Struktur zu definieren und ein bestimmtes Verhalten hervorzurufen.

Schauen wir uns ein Beispiel an — der folgende Inhalt wird auf einer Webseite in einer Zeile angezeigt, da er nicht strukturiert ist:

```plain
Instructions for life:
Eat
Sleep
Repeat
```

Wenn wir diesen Inhalt mit den folgenden HTML-Elementen umschließen, können wir die einzelne Zeile in einen Absatz ({{htmlelement("p")}}) und drei Aufzählungspunkte ({{htmlelement("li")}}) verwandeln:

```html live-sample___basic-html
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Dieses HTML wird in einem Webbrowser wie folgt angezeigt:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Neben der Strukturierung von Text hat HTML viele weitere Verwendungszwecke — Texte oder Bilder mit anderen Webseiten verlinken, Bilder oder Videos einbetten, Datentabellen erstellen und so weiter.

## Erstellen Ihres ersten HTML-Dokuments

Lassen Sie uns sehen, wie individuelle Elemente kombiniert werden, um eine HTML-Seite zu bilden. In diesem Abschnitt erstellen Sie eine grundlegende HTML-Datei und werfen einen Blick darauf, woraus sie besteht.

1. Erstellen Sie in Ihrem Ordner `web-projects` einen weiteren neuen Ordner mit dem Namen `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei mit dem Namen `index.html` und fügen Sie den folgenden Code genau wie gezeigt in die Datei ein:

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

Hier haben wir Folgendes:

- `<!doctype html>`: Der {{Glossary("Doctype", "Doctype")}} ist ein erforderliches Vorwort. In den frühen Tagen, als HTML jung war (um 1991/92), waren Doctypes gedacht, um als Links zu einer Reihe von Regeln zu dienen, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten, was eine automatische Fehlerüberprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage bewirken sie jedoch nicht viel und sind im Wesentlichen nur notwendig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie vorerst wissen müssen.
- `<html></html>`: Das {{htmlelement("html")}}-Element umschließt den gesamten Inhalt auf der gesamten Seite und wird manchmal als **Wurzelelement** bezeichnet. Es enthält auch das `lang` {{Glossary("Attribute", "Attribut")}}, das die Hauptsprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}}-Element dient als Container für alle Dinge, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie den Besuchern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in Suchergebnissen erscheinen soll, {{Glossary("CSS", "CSS")}}, um den Inhalt zu stylen, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll: {{Glossary("UTF-8", "UTF-8")}}, der die meisten Zeichen der großen Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es nun jeden Textinhalt verarbeiten, den Sie möglicherweise darauf platzieren. Es gibt keinen Grund, dies nicht festzulegen, und es kann helfen, später einige Probleme zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Browser-Viewports gerendert wird, um zu verhindern, dass mobile Browser Seiten breiter als der Viewport rendern und sie dann verkleinern.
- `<title></title>`: Das {{htmlelement("title")}}-Element legt den Titel Ihrer Seite fest, der als Titel im Browser-Tab angezeigt wird, in dem die Seite geladen ist. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favoriten speichern.
- `<body></body>`: Das {{htmlelement("body")}}-Element enthält _alle_ Inhalte, die Sie webseitenbenutzern zeigen wollen, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer. Im Moment enthält es nur ein einzelnes `<img>`-Element, aber wir werden später mehr Inhalt hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **öffnenden Tag** (zum Beispiel `<body>`), gefolgt vom Inhalt des Elements, gefolgt von einem **schließenden Tag** (zum Beispiel `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen über das Element enthalten — siehe zum Beispiel `charset`, `name`, und `src` in unserem Code-Beispiel.

## Einbetten von Bildern

Widmen wir uns dem {{htmlelement("img")}}-Element:

```html
<img src="" alt="My test image" />
```

Dieses Element bettet ein Bild an der Stelle in unsere Seite ein, an der es erscheint. Es tut dies über das `src` (Source) Attribut, das den Pfad zur Bilddatei enthält, die wir einbetten möchten.

Wir haben auch ein `alt` (alternativ) Attribut hinzugefügt. Im [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) spezifizieren Sie beschreibenden Text für Benutzer, die das Bild möglicherweise nicht sehen können, aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit bedeutenden Sehbehinderungen verwenden häufig Werkzeuge, sogenannte Screenreader, um ihnen den Alt-Text vorzulesen.
2. Etwas ist schiefgelaufen, was dazu führt, dass das Bild nicht angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alt-Text angezeigt:

   ![Die Worte: mein Testbild](alt-text-example.png)

Der von Ihnen geschriebene Alt-Text sollte dem Leser genügend Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild darstellt. In diesem Beispiel ist unser derzeitiger Text "Mein Testbild" nicht gut, da er keine beschreibenden Informationen über das Bild enthält. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: Ein brennender Fuchs, der die Erde umgibt."

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder Schlusstag und werden daher als **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente bezeichnet. Sie werden manchmal mit einem **schließenden Schrägstrich** am Ende ihres einzigen Tags geschrieben (`<img />`), aber das ist optional.

Lassen Sie uns jetzt Ihr Bild anzeigen.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images`, und legen Sie das in der vorherigen Übung gewählte Bild in diesem Ordner ab.
2. Geben Sie im Wert des `src`-Attributs des `<img>`-Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der im selben Verzeichnis wie Ihre `index.html`-Datei liegt, daher lautet der Pfad `images/` plus der Name Ihres Bildes. Wenn Ihr Bild zum Beispiel `firefox-icon.png` hieße, würde Ihr `src`-Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt`-Attributs — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html`-Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element mit unserem Code; stellen Sie sicher, dass keine Syntax wie zum Beispiel die Anführungszeichen fehlt. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich darüber keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.

> [!NOTE]
> Finden Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [zugänglichen Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein Entscheidungsbaum für Alt-Attribute](https://www.w3.org/WAI/tutorials/images/decision-tree/) heraus.

## Textauszeichnung

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zur Auszeichnung von Text verwenden werden.

### Überschriften

Mit Überschriftselementen können Sie angeben, dass bestimmte Teile Ihres Inhalts Überschriften oder Unterüberschriften sind. So wie ein Buch den Haupttitel, Kapiteltitel und Untertitel hat, kann ein HTML-Dokument dies auch. HTML enthält 6 Überschriftsstufen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie in der Regel nur 3 bis 4 davon verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind auf der Seite nicht sichtbar — nur im Code. HTML-Kommentare sind eine Möglichkeit, Anmerkungen über Ihren Code oder Ihre Logik zu machen, die für andere, die am gleichen Code arbeiten, nützlich sein könnten, oder für Sie, wenn Sie nach 6 Monaten darauf zurückkommen und sich nicht mehr erinnern können, was Sie gemacht haben.

Versuchen Sie, einen passenden Haupttitel zu Ihrer HTML-Seite direkt über Ihrem {{htmlelement("img")}}-Element hinzuzufügen. Speichern Sie die Datei und betrachten Sie sie in einem Browser, um den Effekt zu sehen.

### Absätze

Absatz-{{htmlelement("p")}}-Elemente dienen dazu, Absätze von Text einzuschließen; Sie werden diese häufig verwenden, wenn Sie normalen Textinhalt auszeichnen:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in ein oder mehrere Absätze ein, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert sind. Speichern Sie es und schauen Sie sich Ihre Seite in einem Browser an.

### Listen

Ein Großteil der Inhalte im Internet sind Listen, und HTML hat spezielle Elemente dafür. Das Auszeichnen von Listen besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie eine Einkaufsliste. Diese sind in einem {{htmlelement("ul")}}-Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente eine Rolle spielt, wie eine Liste von Kochanweisungen in einem Rezept. Diese sind in einem {{htmlelement("ol")}}-Element eingeschlossen.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}}-Element (Listenelement) gesetzt.

Wenn wir zum Beispiel einen Teil des folgenden Absatzfragments in eine Liste umwandeln wollten:

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup wie folgt ändern:

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

## Links erstellen

Links sind sehr wichtig — sie sind das, was das Web zu einem Web macht! Um einen Link hinzuzufügen, müssen wir ein {{htmlelement("a")}}-Element verwenden, wobei "a" für "anchor" (Anker) steht. So machen Sie Text innerhalb Ihres Absatzes zu einem Link:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" gewählt.
2. Umschließen Sie den Text mit einem {{htmlelement("a")}}-Element, wie unten gezeigt:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Geben Sie dem {{htmlelement("a")}}-Element ein `href`-Attribut, wie unten gezeigt:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Füllen Sie den Wert dieses Attributs mit der Webadresse aus, auf die der Link verweisen soll:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Möglicherweise erhalten Sie unerwartete Ergebnisse, wenn Sie den `https://`- oder `http://`-Teil, der _Protokoll_ genannt wird, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin sendet, wohin Sie wollten.

> **Hinweis:** `href` mag zunächst wie eine ziemlich obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erence_.

Fügen Sie Ihrer Seite jetzt einen Link hinzu, falls Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die aussieht wie die unten gezeigte (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, die ein Firefox-Logo, eine Überschrift mit "Mozilla ist cool" und zwei Absätze mit Fülltext zeigt](finished-test-page-small.png)

Wenn Sie hängen bleiben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Sie werden viel mehr in unserem [Mit HTML Inhalte strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul später im Kurs lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
