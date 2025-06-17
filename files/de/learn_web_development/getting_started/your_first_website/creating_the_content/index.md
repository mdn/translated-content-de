---
title: "HTML: Inhalt erstellen"
short-title: Inhalt erstellen
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und ihren Inhalt zu strukturieren. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seiner Funktionalität und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Website erstellen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax — öffnende und schließende Tags, Elemente, Attribute, Kopf, Körper.</li>
          <li>Häufige HTML-Elemente einschließlich Absätze, Überschriften, Bilder, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also HTML?

HTML ist eine _Markup-Sprache_, die aus einer Reihe von **{{Glossary("element", "Elementen")}}** besteht, die verwendet werden, um Textinhalte einzuschließen und so deren Struktur zu definieren und ein bestimmtes Verhalten zu erzeugen.

Schauen wir uns ein Beispiel an — der folgende Inhalt wird auf einer Webseite auf derselben Zeile angezeigt, da er in keiner Weise strukturiert ist:

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

Dieses HTML wird in einem Webbrowser wie folgt angezeigt:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Neben der Strukturierung von Text hat HTML viele andere Anwendungen - Texte oder Bilder mit anderen Webseiten verlinken, Bilder oder Videos einbetten, Datentabellen erstellen und so weiter.

## Erstellen Ihres ersten HTML-Dokuments

Schauen wir uns an, wie einzelne Elemente kombiniert werden, um eine HTML-Seite zu erstellen. In diesem Abschnitt erstellen Sie eine grundlegende HTML-Datei und sehen sich an, woraus sie besteht.

1. Erstellen Sie in Ihrem `web-projects`-Ordner einen weiteren neuen Ordner namens `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau so ein, wie er hier gezeigt wird:

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

- `<!doctype html>`: Der {{Glossary("Doctype", "doctype")}} ist ein erforderliches Vorwort. In den Anfängen von HTML (etwa 1991/92) sollten Doktypen als Links zu einem Satz von Regeln dienen, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten, was automatische Fehlerüberprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage machen sie jedoch nicht viel und sind im Wesentlichen nur erforderlich, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das müssen Sie für den Moment wissen.
- `<html></html>`: Das {{htmlelement("html")}}-Element umschließt den gesamten Inhalt der gesamten Seite und wird manchmal als **Stammelement** bezeichnet. Es enthält auch das `lang` {{Glossary("Attribute", "Attribut")}}, das die Hauptsprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}}-Element dient als Container für alle Dinge, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie den Besuchern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen soll, {{Glossary("CSS", "CSS")}}, um den Inhalt zu stylen, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, auf {{Glossary("UTF-8", "UTF-8")}}, das die meisten Zeichen der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es jetzt jeden Textinhalt, den Sie darauf legen könnten, verarbeiten. Es gibt keinen Grund, dies nicht festzulegen, und es kann helfen, später einige Probleme zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Browser-Viewports gerendert wird, wodurch verhindert wird, dass mobile Browser Seiten breiter anzeigen als der Viewport ist und sie dann verkleinern.
- `<title></title>`: Das {{htmlelement("title")}}-Element legt den Titel Ihrer Seite fest, der im Browser-Tab erscheint, in dem die Seite geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit markieren.
- `<body></body>`: Das {{htmlelement("body")}}-Element enthält _alle_ Inhalte, die Sie Webbenutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer sonst noch. Im Moment enthält es nur ein einzelnes `<img>`-Element, aber wir werden später mehr Inhalt hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **öffnenden Tag** (zum Beispiel `<body>`), gefolgt vom Inhalt des Elements, gefolgt von einem **schließenden Tag** (zum Beispiel `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen über das Element enthalten – siehe zum Beispiel `charset`, `name` und `src` in unserem Codebeispiel.

## Einbetten von Bildern

Richten wir unsere Aufmerksamkeit auf das {{htmlelement("img")}}-Element:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild in unsere Seite an der Stelle ein, an der es erscheint. Es tut dies über das `src` (Quell-)Attribut, welches den Pfad zu der Bilddatei enthält, die wir einbetten möchten.

Wir haben auch ein `alt` (alternatives) Attribut hinzugefügt. Im [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) spezifizieren Sie beschreibenden Text für Benutzer, die das Bild nicht sehen können, möglicherweise aus den folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge, sogenannte Screen-Reader, um ihnen den Alt-Text vorzulesen.
2. Es ist etwas schief gelaufen, was dazu führt, dass das Bild nicht angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alt-Text angezeigt:

   ![Die Worte: Mein Testbild](alt-text-example.png)

Der Alt-Text, den Sie schreiben, sollte dem Leser genügend Informationen liefern, um eine gute Vorstellung davon zu haben, was das Bild darstellt. In diesem Beispiel ist unser aktueller Text „Mein Testbild“ nicht gut, da er keine beschreibenden Informationen über das Bild vermittelt. Eine viel bessere Alternative für unser Firefox-Logo wäre „Das Firefox-Logo: ein brennender Fuchs, der die Erde umgibt“.

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder Schließ-Tag und werden daher **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente genannt. Sie werden manchmal mit einem **Schrägstrich am Ende** ihres einzelnen Tags geschrieben (`<img />`), aber dies ist optional.

Lassen Sie uns nun Ihr Bild anzeigen.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesen Ordner.
2. Geben Sie im Wert des `src`-Attributs des `<img>`-Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der sich im selben Verzeichnis wie Ihre `index.html`-Datei befindet, daher wird der Pfad `images/` plus der Name Ihres Bildes sein. Angenommen, Ihr Bild hieße `firefox-icon.png`, würde Ihr `src`-Attribut folgendermaßen aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt`-Attributs — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html`-Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element mit unserem Code; stellen Sie sicher, dass keine der Syntax ausgelassen wurde, wie zum Beispiel die Anführungszeichen. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.

> [!NOTE]
> Erfahren Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [zugänglichen Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein alt Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Text auszeichnen

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zum Auszeichnen von Text verwenden werden.

> [!NOTE]
> Scrimbas [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die eine nützliche Beschreibung von HTML bietet, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt wichtig ist.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, bestimmte Teile Ihres Inhalts als Überschriften oder Unterüberschriften zu kennzeichnen. In der gleichen Weise, wie ein Buch den Haupttitel, die Kapiteltitel und die Untertitel hat, kann es auch ein HTML-Dokument. HTML enthält 6 Überschriftenebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie in der Regel nur 3 bis 4 davon verwenden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare, wenn er den Code rendert. Anders ausgedrückt, sie sind auf der Seite nicht sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, Anmerkungen zu Ihrem Code oder Ihrer Logik hinzuzufügen, die für andere nützlich sein könnten, die am gleichen Code arbeiten, oder für Sie, wenn Sie nach 6 Monaten zurückkehren und sich nicht mehr erinnern, was Sie gemacht haben.

Fügen Sie Ihrem HTML-Dokument Ihren Seitentitel direkt über Ihrem {{htmlelement("img")}}-Element hinzu, eingeschlossen in `<h1> ... </h1>`-Tags. Speichern Sie die Datei und betrachten Sie sie in einem Browser, um den Effekt zu sehen.

### Absätze

Absatz-{{htmlelement("p")}}-Elemente sind für das enthalten von Textabsätzen gedacht; Sie werden diese häufig verwenden, wenn Sie reguläre Textinhalte markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihre Beispieltexte aus dem vorherigen Artikel in ein oder mehrere Absätze direkt unter Ihrem {{htmlelement("img")}}-Element ein. Speichern Sie es und sehen Sie sich Ihre Seite in einem Browser an.

### Listen

Ein großer Teil des Webinhalts besteht aus Listen, und HTML hat spezielle Elemente dafür. Das Markieren von Listen besteht immer aus mindestens zwei Elementen. Die gebräuchlichsten Listenarten sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie zum Beispiel eine Einkaufsliste. Diese sind in einem {{htmlelement("ul")}}-Element eingehüllt.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente eine Rolle spielt, wie zum Beispiel eine Liste von Kochanweisungen in einem Rezept. Diese sind in einem {{htmlelement("ol")}}-Element eingehüllt.

Jedes Element innerhalb der Listen wird in einem {{htmlelement("li")}} (Listenelement) eingeschlossen.

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

Versuchen Sie, Ihrer Beispielseite eine geordnete oder ungeordnete Liste hinzuzufügen und betrachten Sie das Ergebnis in einem Browser.

## Links erstellen

Links sind sehr wichtig — sie sind das, was das Web zum Web macht! Um einen Link hinzuzufügen, verwenden wir ein {{htmlelement("a")}}-Element, wobei "a" für "anchor" (Anker) steht. Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, folgen Sie diesen Schritten:

1. Wählen Sie einen Text. Wir wählten den Text "Mozilla Manifesto".
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

Wenn Sie den `https://` oder `http://`-Teil, das sogenannte _Protokoll_, am Anfang der Webadresse auslassen, könnten Sie unerwartete Ergebnisse bekommen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin sendet, wo Sie hinwollten.

> **Hinweis:** `href` mag am Anfang wie eine ziemlich obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erence_.

Fügen Sie Ihrer Seite jetzt einen Link hinzu, falls Sie dies noch nicht getan haben.

## Schlussfolgerung

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die wie die unten gezeigte aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite mit einem Firefox-Logo, einer Überschrift mit der Aufschrift „Mozilla ist cool“ und zwei Absätzen mit Platzhaltertext](finished-test-page-small.png)

Wenn Sie nicht weiterkommen, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Wir haben hier nur an der Oberfläche von HTML gekratzt. Sie werden später in unserem [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)-Kernmodul im Laufe des Kurses noch viel mehr lernen.

## Siehe auch

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn HTML and CSS_ Kurs bringt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten bei, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern gelehrt werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
