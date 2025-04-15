---
title: "HTML: Erstellen des Inhalts"
short-title: Erstellen des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Dieser Artikel vermittelt ein grundlegendes Verständnis von HTML und seiner Funktionalität und zeigt Ihnen, wie Sie die grundlegenden Inhalte für Ihre erste Website erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax – öffnende und schließende Tags, Elemente, Attribute, Kopf, Körper.</li>
          <li>Gängige HTML-Elemente einschließlich Absätzen, Überschriften, Bildern, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

HTML ist eine _Markup-Sprache_, die aus einer Reihe von **{{Glossary("element", "Elementen")}}** besteht, die verwendet werden, um Textinhalte zu umschließen (oder zu umgeben), um dessen Struktur zu definieren und ein bestimmtes Verhalten zu bewirken.

Schauen wir uns ein Beispiel an – der folgende Inhalt wird beim Anzeigen auf einer Webseite alle in derselben Zeile angezeigt, da er nicht in irgendeiner Weise strukturiert ist:

```plain
Instructions for life:
Eat
Sleep
Repeat
```

Wenn wir diesen Inhalt mit den folgenden HTML-Elementen umschließen, können wir diese eine Zeile in einen Absatz ({{htmlelement("p")}}) und drei Aufzählungspunkte ({{htmlelement("li")}}) verwandeln:

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

Neben der Strukturierung von Text hat HTML viele weitere Verwendungen – zum Beispiel das Verknüpfen von Text oder Bildern mit anderen Webseiten, das Einbetten von Bildern oder Videos, das Erstellen von Datentabellen und vieles mehr.

## Erstellen Ihres ersten HTML-Dokuments

Schauen wir uns an, wie individuelle Elemente kombiniert werden, um eine HTML-Seite zu bilden. In diesem Abschnitt erstellen Sie eine einfache HTML-Datei und werfen einen Blick darauf, woraus sie besteht.

1. Erstellen Sie in Ihrem Ordner `web-projects` einen weiteren neuen Ordner namens `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau wie gezeigt in die Datei ein:

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

- `<!doctype html>`: Der {{Glossary("Doctype", "doctype")}} ist ein erforderliches Vorwort. In der Anfangszeit des Webs (um 1991/92) sollten Doctypes als Links zu einem Satz von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML betrachtet zu werden, was automatische Fehlerüberprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage machen sie jedoch nicht mehr viel und sind im Grunde nur notwendig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie derzeit wissen müssen.
- `<html></html>`: Das {{htmlelement("html")}}-Element umschließt alle Inhalte auf der gesamten Seite und wird manchmal als **Root-Element** bezeichnet. Es enthält auch das `lang`-{{Glossary("Attribute", "Attribut")}}, das die Hauptsprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}}-Element fungiert als Container für all die Sachen, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie Ihren Seitenbesuchern zeigen möchten. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in Suchergebnissen erscheinen soll, {{Glossary("CSS", "CSS")}} zur Gestaltung des Inhalts, Zeichencodierungsdeklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element legt die Zeichencodierung fest, die Ihr Dokument verwenden soll, {{Glossary("UTF-8", "UTF-8")}}, die die meisten Zeichen der überwiegenden Mehrheit der Schriftsprachen umfasst. Im Wesentlichen kann es jetzt einen beliebigen Textinhalt verarbeiten, den Sie darauf setzen. Es gibt keinen Grund, dies nicht festzulegen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite mit der Breite des Browser-Viewports gerendert wird, um zu verhindern, dass mobile Browser Seiten breiter als der Viewport rendern und sie dann herunterskalieren.
- `<title></title>`: Das {{htmlelement("title")}}-Element legt den Titel Ihrer Seite fest, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favoriten markieren.
- `<body></body>`: Das {{htmlelement("body")}}-Element enthält _alle_ Inhalte, die Sie Webbenutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer. Momentan enthält es nur ein einzelnes `<img>`-Element, aber wir werden später mehr Inhalte hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **öffnenden Tag** (zum Beispiel `<body>`), gefolgt vom Inhalt des Elements und einem **schließenden Tag** (zum Beispiel `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen über das Element enthalten — siehe zum Beispiel `charset`, `name` und `src` in unserem Codebeispiel.

## Einbetten von Bildern

Schauen wir uns das {{htmlelement("img")}}-Element an:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild in unsere Seite in der Position ein, in der es erscheint. Dies geschieht über das `src`-(Quell-)Attribut, das den Pfad zur Bilddatei enthält, die wir einbetten möchten.

Wir haben auch ein `alt`- (alternatives) Attribut inkludiert. Im [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild möglicherweise aus folgenden Gründen nicht sehen können:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge, die ihnen den Alternativtext vorlesen.
2. Es ist etwas schiefgegangen, was dazu führt, dass das Bild nicht angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alternativtext angezeigt:

   ![Die Worte: mein Testbild](alt-text-example.png)

Der von Ihnen geschriebene Alternativtext sollte dem Leser genügend Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "Mein Testbild" nicht gut, weil er keine beschreibenden Informationen über das Bild vermittelt. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: Ein flammender Fuchs umgibt die Erde."

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder schließenden Tag und werden daher als **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente bezeichnet. Sie werden manchmal mit einem **nachgestellten Schrägstrich** am Ende ihres Einzel-Tags geschrieben (`<img />`), dies ist jedoch optional.

Lassen Sie uns nun Ihr Bild anzeigen.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesem Ordner ab.
2. Geben Sie im `src`-Attributwert des `<img>`-Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der im selben Verzeichnis wie Ihre `index.html`-Datei ist, daher lautet der Pfad `images/` plus der Name Ihres Bildes. Wenn Ihr Bild beispielsweise `firefox-icon.png` hieß, würde Ihr `src`-Attribut folgendermaßen aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den `alt`-Attributwert – `Mein Testbild` – durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html`-Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element mit unserem Code; stellen Sie sicher, dass es keine der Syntaxangaben, wie die Anführungszeichen, fehlt. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen darüber. Wir werden dieses Problem im nächsten Artikel beheben.

> [!NOTE]
> Erfahren Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [barrierefreies Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein Entscheidungsbaum für Alternativtexte](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Text kennzeichnen

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zum Kennzeichnen von Text verwenden werden.

> [!NOTE]
> Scrimbas [Die Grundlagen von semantischem HTML](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die eine nützliche Beschreibung von HTML bietet, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt wichtig ist.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften – oder Unterüberschriften – sind. Genauso wie ein Buch einen Haupttitel, Kapitelüberschriften und Untertitel hat, kann dies auch ein HTML-Dokument. HTML enthält 6 Überschriftenebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie normalerweise nur 3 bis 4 davon verwenden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar – nur im Code. Mit HTML-Kommentaren können Sie Anmerkungen zu Ihrem Code oder Ihrer Logik hinzufügen, die für andere, die am selben Code arbeiten, oder für Sie nützlich sein könnten, wenn Sie nach 6 Monaten darauf zurückkommen und sich nicht erinnern können, was Sie gemacht haben.

Versuchen Sie jetzt, Ihrer HTML-Seite einen geeigneten Haupttitel direkt über Ihrem {{htmlelement("img")}}-Element hinzuzufügen. Speichern Sie die Datei und sehen Sie sich die Auswirkung in einem Browser an.

### Absätze

Absatz-{{htmlelement("p")}}-Elemente dienen zum Umfassen von Textabsätzen; Sie werden diese häufig beim Kennzeichnen von regulären Textinhalten verwenden:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einen oder mehrere Absätze direkt unter Ihrem {{htmlelement("img")}}-Element ein. Speichern Sie ihn und betrachten Sie Ihre Seite im Browser.

### Listen

Ein Großteil des Inhalts im Web sind Listen und HTML hat spezielle Elemente dafür. Listen zu kennzeichnen, umfasst immer mindestens 2 Elemente. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie zum Beispiel eine Einkaufsliste. Diese werden in ein {{htmlelement("ul")}}-Element eingebettet.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie zum Beispiel eine Liste von Kochanweisungen in einem Rezept. Diese werden in ein {{htmlelement("ol")}}-Element eingebettet.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}}- (Listenelement-)Element gesetzt.

Zum Beispiel, wenn wir einen Teil des folgenden Absatzfragments in eine Liste umwandeln wollten:

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup folgendermaßen ändern:

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Versuchen Sie, Ihrer Beispielsseite eine geordnete oder ungeordnete Liste hinzuzufügen und betrachten Sie das Ergebnis im Browser.

## Erstellen von Links

Links sind sehr wichtig – sie sind das, was das Web zu einem Netz macht! Zum Erstellen eines Links müssen wir ein {{htmlelement("a")}}-Element verwenden, wobei "a" für "Anchor" steht. Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, gehen Sie wie folgt vor:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla-Manifest" ausgewählt.
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

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den `https://`- oder `http://`-Teil weglassen, der _Protokoll_ genannt wird, am Anfang der Webadresse. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin führt, wo Sie wollten.

> **Hinweis:** `href` mag anfangs wie eine eher obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erence_.

Fügen Sie jetzt Ihrer Seite einen Link hinzu, falls Sie dies noch nicht getan haben.

## Schlussfolgerung

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die so aussieht wie die unten gezeigte (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, die ein Firefox-Logo, eine Überschrift mit der Aufschrift Mozilla ist cool und zwei Absätze mit Platzhaltertext zeigt](finished-test-page-small.png)

Wenn Sie Schwierigkeiten haben, können Sie Ihr Werk jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur die Oberfläche von HTML angekratzt. Sie werden viel mehr in unserem [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul später im Kurs lernen.

## Siehe auch

- [Learn HTML and CSS](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn HTML and CSS_ Kurs von [Scrimba](https://scrimba.com?via=mdn) lehrt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf beeindruckenden Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern vermittelt werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
