---
title: "HTML: Erstellung des Inhalts"
short-title: Erstellung des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seiner Funktionalität und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Website erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, der Basissoftware, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
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

HTML ist eine _Auszeichnungssprache_, die aus einer Reihe von **{{Glossary("element", "Elementen")}}** besteht, die verwendet werden, um Textinhalte einzuschließen (oder zu umschließen), um deren Struktur zu definieren und sie auf eine bestimmte Weise reagieren zu lassen.

Schauen wir uns ein Beispiel an — der folgende Inhalt wird alle in einer Zeile angezeigt, wenn er auf einer Webseite angezeigt wird, da er in keiner Weise strukturiert ist:

```plain
Instructions for life:
Eat
Sleep
Repeat
```

Wenn wir diesen Inhalt mit den folgenden HTML-Elementen umschließen, können wir aus dieser einzelnen Zeile einen Absatz ({{htmlelement("p")}}) und drei Aufzählungspunkte ({{htmlelement("li")}}) machen:

```html live-sample___basic-html
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Dieses HTML wird in einem Webbrowser wie folgt gerendert:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Neben der Strukturierung von Text hat HTML viele andere Anwendungen — Texte oder Bilder verlinken zu anderen Webseiten, Einbetten von Bildern oder Videos, Erstellen von Datentabellen und so weiter.

> [!NOTE]
> Scrimbas [HTML-Tags](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die Übungen zu den HTML-Grundlagen bietet, einschließlich Überschriften.

## Erstellen Ihres ersten HTML-Dokuments

Sehen wir uns an, wie einzelne Elemente kombiniert werden, um eine HTML-Seite zu erstellen. In diesem Abschnitt erstellen Sie eine einfache HTML-Datei und werfen einen Blick darauf, woraus sie besteht.

1. Erstellen Sie in Ihrem `web-projects`-Ordner einen neuen Ordner namens `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau so ein, wie er angezeigt wird:

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

- `<!doctype html>`: Der {{Glossary("Doctype", "Doctype")}} ist ein erforderliches Präambel. In den Anfängen von HTML (circa 1991/92) sollten Doctypes als Links zu einem Satz von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten, was automatische Fehlerüberprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage jedoch, tun sie nicht viel und werden im Grunde nur benötigt, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie derzeit darüber wissen müssen.
- `<html></html>`: Das {{htmlelement("html")}}-Element umschließt den gesamten Inhalt der gesamten Seite und wird manchmal als **Root-Element** bezeichnet. Es enthält auch das `lang`-Attribut, das die Hauptsprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}}-Element fungiert als Container für alle Dinge, die Sie auf der HTML-Seite aufnehmen möchten, die _nicht_ der Inhalt sind, den Sie den Betrachtern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen soll, {{Glossary("CSS", "CSS")}} zur Gestaltung des Inhalts, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, nämlich {{Glossary("UTF-8", "UTF-8")}}, das die meisten Zeichen aus der großen Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es nun jeden Textinhalt verarbeiten, den Sie darauf setzen könnten. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Browser-Viewports gerendert wird, was verhindert, dass mobile Browser Seiten breiter als die Ansicht rendern und sie dann verkleinern.
- `<title></title>`: Das {{htmlelement("title")}}-Element legt den Titel Ihrer Seite fest, der im Browser-Tab erscheint, in dem die Seite geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>`: Das {{htmlelement("body")}}-Element enthält _alle_ Inhalte, die Sie Webnutzer zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer. Momentan enthält es nur ein `<img>`-Element, aber wir werden später noch mehr Inhalte hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **öffnenden Tag** (zum Beispiel, `<body>`), gefolgt vom Inhalt des Elements, gefolgt von einem **schließenden Tag** (zum Beispiel, `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen über das Element enthalten — siehe zum Beispiel `charset`, `name` und `src` in unserem Codebeispiel.

## Einbetten von Bildern

Richten wir unsere Aufmerksamkeit auf das {{htmlelement("img")}}-Element:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild auf unserer Seite an der Position ein, an der es erscheint. Es tut dies über das `src`- (source) Attribut, das den Pfad zur Bilddatei enthält, die wir einbetten möchten.

Wir haben auch ein `alt`- (alternative) Attribut hinzugefügt. Im [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild nicht sehen können, möglicherweise aus den folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge namens Screenreader, um ihnen den Alternativtext vorzulesen.
2. Etwas ist schiefgelaufen, was dazu führt, dass das Bild nicht angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alternativtext angezeigt:

   ![The words: my test image](alt-text-example.png)

Der von Ihnen geschriebene Alternativtext sollte dem Leser genügend Informationen geben, damit er eine gute Vorstellung davon hat, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "Mein Testbild" nicht gut, da er keine beschreibenden Informationen über das Bild vermittelt. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein flammender Fuchs, der die Erde umgibt."

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder Schließ-Tag und werden daher **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente genannt. Sie werden manchmal mit einem **nachgestellten Schrägstrich** am Ende ihres einzigen Tags geschrieben (`<img />`), aber das ist optional.

Lassen Sie nun Ihr Bild anzeigen.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images`, und legen Sie das von Ihnen gewählte Bild aus dem vorherigen Beispiel in diesem Ordner ab.
2. Geben Sie im Wert des `src`-Attributs des `<img>`-Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der sich im selben Verzeichnis wie Ihre `index.html`-Datei befindet, daher wird der Pfad `images/` plus der Name Ihres Bildes sein. Wenn Ihr Bild beispielsweise `firefox-icon.png` hieße, würde Ihr `src`-Attribut folgendermaßen aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt`-Attributs — `My test image` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html`-Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element anhand unseres Codes; stellen Sie sicher, dass es keine fehlende Syntax wie Anführungszeichen gibt. Vergewissern Sie sich, dass der Bilddateiname korrekt ist.

Wenn das Bild sehr groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.

> [!NOTE]
> Erfahren Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [Tutorial zu barrierefreien Multimedia-Inhalten](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein alt Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Text mit Markup versehen

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie für die Auszeichnung von Text verwenden werden.

> [!NOTE]
> Scrimbas [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die eine nützliche Beschreibung von HTML bietet, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt davon wichtig ist.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, bestimmte Teile Ihres Inhalts als Überschriften oder Unterüberschriften festzulegen. Auf die gleiche Weise, wie ein Buch einen Haupttitel, Kapitelüberschriften und Untertitel hat, kann ein HTML-Dokument dies auch. HTML enthält 6 Überschriftsstufen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie im Allgemeinen nur 3 bis 4 verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar — nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, Anmerkungen zu Ihrem Code oder Ihrer Logik hinzuzufügen, die nützlich für andere sein könnten, die am gleichen Code arbeiten, oder für Sie selbst, wenn Sie nach 6 Monaten zurückkehren und sich nicht erinnern können, was Sie gemacht haben.

Fügen Sie den Titel Ihrer Seite in die HTML-Seite ein, direkt oberhalb Ihres {{htmlelement("img")}}-Elements, und umschließen Sie ihn mit `<h1> ... </h1>`-Tags. Speichern Sie die Datei und betrachten Sie die Wirkung in einem Browser.

### Absätze

Absatz-{{htmlelement("p")}}-Elemente sind zum Umfassen von Absatztext gedacht; Sie werden diese häufig verwenden, wenn Sie regulären Textinhalt auszeichnen:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einen oder mehrere Absätze ein, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert werden. Speichern Sie es und betrachten Sie Ihre Seite in einem Browser.

### Listen

Ein großer Teil der Web-Inhalte besteht aus Listen, und HTML hat spezielle Elemente dafür. Das Markieren von Listen besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, z.B. eine Einkaufsliste. Diese werden in ein {{htmlelement("ul")}}-Element umschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente eine Rolle spielt, wie z.B. eine Liste von Kochanweisungen in einem Rezept. Diese werden in ein {{htmlelement("ol")}}-Element umschlossen.

Jedes Element in den Listen wird in einem {{htmlelement("li")}}- (Listenelement) eingeschlossen.

Zum Beispiel, wenn wir aus einem Teil des folgenden Absatzfragments eine Liste machen wollten:

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup in Folgendes ändern:

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Versuchen Sie, eine geordnete oder ungeordnete Liste zu Ihrer Beispielseite hinzuzufügen, und betrachten Sie das Ergebnis in einem Browser.

## Erstellen von Links

Links sind sehr wichtig — sie sind das, was das Web zu einem Netzwerk macht! Um einen Link hinzuzufügen, müssen wir ein {{htmlelement("a")}}-Element verwenden, wobei "a" für "Anker" (Englisch: anchor) steht. Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, befolgen Sie diese Schritte:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" ausgewählt.
2. Umschließen Sie den Text mit einem {{htmlelement("a")}}-Element, wie unten gezeigt:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Geben Sie dem {{htmlelement("a")}}-Element ein `href`-Attribut, wie unten gezeigt:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Füllen Sie den Wert dieses Attributs mit der Webadresse aus, auf die Sie den Link verweisen möchten:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den `https://`- oder `http://`-Teil am Anfang der Webadresse, der _Protokoll_ genannt wird, weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin sendet, wo Sie es wollen.

> [!NOTE] > `href` mag anfangs wie eine eher obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erence_.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, falls Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die wie die unten abgebildete aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, der ein Firefox-Logo zeigt, eine Überschrift mit der Aufschrift "Mozilla ist cool", und zwei Absätze mit Beispieltext](finished-test-page-small.png)

Wenn Sie nicht weiterkommen, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Sie werden viel mehr in unserem [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul später im Kurs lernen.

## Weitere Ressourcen

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba's](https://scrimba.com?via=mdn) _Kurs HTML und CSS lernen_ lehrt Ihnen HTML und CSS durch den Bau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, geleitet von sachkundigen Lehrern.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
