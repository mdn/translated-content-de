---
title: "HTML: Erstellen der Inhalte"
short-title: Erstellen der Inhalte
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der zur Strukturierung einer Webseite und ihrer Inhalte verwendet wird. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seiner Funktionalität und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Webseite erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax — Eröffnungs- und Schlusstags, Elemente, Attribute, Kopf, Körper.</li>
          <li>Häufige HTML-Elemente einschließlich Absätze, Überschriften, Bilder, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also HTML?

HTML ist eine _Auszeichnungssprache_, die aus einer Reihe von **{{Glossary("element", "Elementen")}}** besteht, die verwendet werden, um Textinhalte zu umklammern (oder zu umschließen), um deren Struktur zu definieren und sie auf eine bestimmte Weise funktionieren zu lassen.

Schauen wir uns ein Beispiel an — der folgende Inhalt wird, wenn er auf einer Webseite angezeigt wird, alle in einer einzigen Zeile angezeigt, da er in keiner Weise strukturiert ist:

```plain
Instructions for life:
Eat
Sleep
Repeat
```

Wenn wir diesen Inhalt mit den folgenden HTML-Elementen umschließen, können wir aus dieser einzigen Zeile einen Absatz ({{htmlelement("p")}}) und drei Aufzählungspunkte ({{htmlelement("li")}}) machen:

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

Neben der Strukturierung von Text hat HTML viele andere Verwendungsmöglichkeiten — das Verknüpfen von Text oder Bildern mit anderen Webseiten, das Einbetten von Bildern oder Videos, das Erstellen von Datentabellen usw.

## Erstellen Ihres ersten HTML-Dokuments

Lassen Sie uns sehen, wie einzelne Elemente zu einer HTML-Seite kombiniert werden. In diesem Abschnitt erstellen Sie eine grundlegende HTML-Datei und werfen einen Blick darauf, woraus sie besteht.

1. Erstellen Sie in Ihrem `web-projects` Ordner einen weiteren neuen Ordner namens `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code exakt wie gezeigt in die Datei ein:

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

- `<!doctype html>`: Der {{Glossary("Doctype", "doctype")}} ist ein erforderliches Vorwort. In den Anfangszeiten von HTML (ca. 1991/92) sollten Doctypes als Links zu einem Satz von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML betrachtet zu werden, was automatische Fehlerüberprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage tun sie jedoch nicht viel und sind im Wesentlichen nur erforderlich, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie für den Moment wissen müssen.
- `<html></html>`: Das {{htmlelement("html")}} Element umgibt den gesamten Inhalt auf der gesamten Seite und wird manchmal als **root element** bezeichnet. Es enthält auch das `lang` {{Glossary("Attribute", "Attribut")}}, das die Hauptsprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}} Element fungiert als Container für all das, was Sie auf der HTML-Seite einfügen möchten, das _nicht_ der Inhalt ist, den Sie Ihren Seitenbesuchern zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Keywords")}} und eine Seitenbeschreibung, die in Suchergebnissen erscheinen soll, {{Glossary("CSS", "CSS")}} zur Gestaltung des Inhalts, Zeichensatz-Deklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element setzt den Zeichensatz, den Ihr Dokument verwenden soll, auf {{Glossary("UTF-8", "UTF-8")}}, das die meisten Zeichen aus der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Es kann jetzt im Wesentlichen jeden Textinhalt verarbeiten, den Sie darauf setzen könnten. Es gibt keinen Grund, dies nicht einzustellen, und es kann helfen, später einige Probleme zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Browser-Viewports gerendert wird und verhindert, dass mobile Browser Seiten breiter als der Viewport rendern und dann herunter skalieren.
- `<title></title>`: Das {{htmlelement("title")}} Element setzt den Titel Ihrer Seite, der im Browser-Tab erscheint, in dem die Seite geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie bookmarken/favorisieren.
- `<body></body>`: Das {{htmlelement("body")}} Element enthält _alle_ Inhalte, die Sie Web-Nutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiodateien oder was auch immer. Im Moment enthält es nur ein einziges `<img>` Element, aber wir werden später weitere Inhalte hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **Eröffnungstag** (zum Beispiel `<body>`), gefolgt vom Inhalt des Elements, gefolgt von einem **Schlusstag** (zum Beispiel `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen über das Element enthalten — siehe zum Beispiel `charset`, `name` und `src` in unserem Codebeispiel.

## Bilder einbetten

Wenden wir uns dem {{htmlelement("img")}} Element zu:

```html
<img src="" alt="My test image" />
```

Dies bindet ein Bild an der Stelle in unsere Seite ein, an der es erscheint. Dies geschieht über das `src` (Source) Attribut, das den Pfad zur Bilddatei enthält, die wir einbetten möchten.

Wir haben auch ein `alt` (alternativ) Attribut hinzugefügt. Im [`alt` Attribut](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild möglicherweise nicht sehen können, möglicherweise aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge, die den Alt-Text für sie vorlesen.
2. Etwas ist schiefgelaufen, wodurch das Bild nicht angezeigt werden kann. Wenn das `src` Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alt-Text angezeigt:

   ![Die Worte: Mein Testbild](alt-text-example.png)

Der Alt-Text, den Sie schreiben, sollte dem Leser ausreichend Informationen bieten, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text „Mein Testbild“ nicht gut, da er keine beschreibenden Informationen über das Bild liefert. Eine viel bessere Alternative für unser Firefox-Logo wäre „Das Firefox-Logo: ein brennender Fuchs umgibt die Erde“.

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder Schlusstag und werden daher als **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente bezeichnet. Sie werden manchmal mit einem **Schrägstrich** am Ende ihres Einzel-Tags geschrieben (`<img />`), aber das ist optional.

Lassen Sie uns jetzt Ihr Bild anzeigen.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images` und legen Sie das in einem der vorherigen Beispiele gewählte Bild in diesen Ordner.
2. Geben Sie im Wert des `src` Attributs des `<img>` Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der sich im gleichen Verzeichnis wie Ihre `index.html` Datei befindet, daher wird der Pfad `images/` plus der Name Ihres Bildes sein. Beispielsweise, wenn Ihr Bild `firefox-icon.png` hieß, würde Ihr `src` Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt` Attributs — „Mein Testbild“ — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html` Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>` Element mit unserem Code; stellen Sie sicher, dass es keinen der Syntaxteile, wie die Anführungszeichen, fehlt. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen. Wir werden dieses Problem im nächsten Artikel lösen.

> [!NOTE]
> Weitere Informationen zur Verwendung eines `alt` Attributs für Bilder in verschiedenen Situationen finden Sie in unserem [Leitfaden zur barrierefreien Nutzung multimedialer Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Markierung von Text

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie für die Markierung von Text verwenden werden.

> [!NOTE]
> Scrimbas [Die Grundlagen des semantischen HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die eine nützliche Beschreibung von HTML bietet, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt wichtig ist.

### Überschriften

Überschriftselemente erlauben es Ihnen, bestimmte Teile Ihres Inhalts als Überschriften oder Unterüberschriften zu kennzeichnen. Auf die gleiche Weise wie ein Buch einen Haupttitel, Kapitelüberschriften und Untertitel hat, kann ein HTML-Dokument das auch. HTML enthält 6 Überschriftsstufen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie üblicherweise nur 3 bis 4 verwenden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare, während er den Code rendert. Mit anderen Worten, sie sind nicht auf der Seite sichtbar — nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, Anmerkungen zu Ihrem Code oder Ihrer Logik hinzuzufügen, die für andere nützlich sein könnten, die am selben Code arbeiten, oder für Sie selbst, wenn Sie nach 6 Monaten darauf zurückkommen und sich nicht mehr erinnern können, was Sie getan haben.

Versuchen Sie nun, Ihrer HTML-Seite unmittelbar über Ihrem {{htmlelement("img")}} Element einen passenden Haupttitel hinzuzufügen. Speichern Sie die Datei und sehen Sie sich die Wirkung in einem Browser an.

### Absätze

Absatz-{{htmlelement("p")}}-Elemente dienen zur Aufnahme von Textabsätzen; Sie werden diese häufig verwenden, wenn Sie normalen Textinhalt markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einen oder mehrere Absätze ein, die direkt unter Ihrem {{htmlelement("img")}} Element platziert sind. Speichern Sie ihn und sehen Sie sich die Seite in einem Browser an.

### Listen

Ein großer Teil des Webinhalts sind Listen, und HTML hat spezielle Elemente dafür. Das Markieren von Listen besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen gedacht, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie Einkaufslisten. Diese werden in ein {{htmlelement("ul")}} Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie eine Liste von Anweisungen in einem Rezept. Diese werden in ein {{htmlelement("ol")}} Element eingeschlossen.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}} (Listeneintrag) Element gesetzt.

Zum Beispiel, wenn wir einen Teil des folgenden Satzfragments in eine Liste umwandeln wollten:

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

Versuchen Sie, Ihrer Beispielseite eine geordnete oder ungeordnete Liste hinzuzufügen, und sehen Sie sich das Ergebnis im Browser an.

## Links erstellen

Links sind sehr wichtig — sie sind es, die das Web zum Web machen! Um einen Link hinzuzufügen, müssen wir ein {{htmlelement("a")}} Element verwenden, wobei „a“ für „Anker“ steht. Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, folgen Sie diesen Schritten:

1. Wählen Sie einen Text aus. Wir haben den Text „Mozilla Manifesto“ gewählt.
2. Umhüllen Sie den Text mit einem {{htmlelement("a")}} Element, wie unten gezeigt:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Geben Sie dem {{htmlelement("a")}} Element ein `href` Attribut, wie unten gezeigt:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Füllen Sie den Wert dieses Attributs mit der Webadresse aus, auf die der Link verweisen soll:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den `https://` oder `http://` Teil, das sogenannte _Protokoll_, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin sendet, wo Sie wollten.

> **Hinweis**: `href` mag zunächst wie eine eher obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erence_.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, falls Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die wie die untenstehende aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Webseitenscreenshot, der ein Firefox-Logo, eine Überschrift "Mozilla ist cool" und zwei Absätze mit Fülltext zeigt](finished-test-page-small.png)

Wenn Sie feststecken, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur die Oberfläche von HTML angekratzt. Sie werden viel mehr in unserem [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul später im Kurs lernen.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _HTML und CSS lernen_ Kurs lehrt Ihnen HTML und CSS durch das Bauen und Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern vermittelt werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
