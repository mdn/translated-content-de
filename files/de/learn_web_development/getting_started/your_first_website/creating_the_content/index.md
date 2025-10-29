---
title: "HTML: Erstellen des Inhalts"
short-title: Erstellen des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 57bc2729e3963907c0b54158ae1a31318a2ebbd1
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und dessen Funktionalitäten und zeigt Ihnen, wie Sie den Basisinhalt für Ihre erste Website erstellen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zur Erstellung einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax — öffnende und schließende Tags, Elemente, Attribute, Kopf, Körper.</li>
          <li>Gewöhnliche HTML-Elemente einschließlich Abschnitten, Überschriften, Bildern, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

HTML ist eine _Markup-Sprache_, die aus einer Reihe von **{{Glossary("element", "Elementen")}}** besteht, die verwendet werden, um Textinhalte zu umschließen (oder einzuschließen), um deren Struktur zu definieren und sie dazu zu bringen, sich auf eine bestimmte Weise zu verhalten.

Schauen wir uns ein Beispiel an — der folgende Inhalt wird alle in einer Zeile angezeigt, wenn er auf einer Webseite dargestellt wird, da er in keiner Weise strukturiert ist:

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

Dieses HTML wird in einem Webbrowser folgendermaßen dargestellt:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Abgesehen von der Strukturierung von Text hat HTML viele andere Verwendungen — dazu gehören das Verknüpfen von Text oder Bildern mit anderen Webseiten, das Einbetten von Bildern oder Videos, das Erstellen von Datentabellen und so weiter.

> [!NOTE]
> Scrimbas [HTML-Tags](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die Basiswissen von HTML, einschließlich Überschriften, vermittelt.

## Erstellen Ihres ersten HTML-Dokuments

Sehen wir uns an, wie einzelne Elemente kombiniert werden, um eine HTML-Seite zu bilden. In diesem Abschnitt erstellen Sie eine grundlegende HTML-Datei und werfen einen Blick darauf, woraus sie besteht.

1. Erstellen Sie in Ihrem `web-projects` Ordner einen neuen Ordner mit dem Namen `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei mit dem Namen `index.html` und fügen Sie den folgenden Code genau so ein, wie er angezeigt wird:

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

- `<!doctype html>`: Der {{Glossary("Doctype", "doctype")}} ist ein erforderliches Präambel. In den frühen Tagen, als HTML noch jung war (ungefähr 1991/92), waren Doctypes dafür gedacht, als Links zu einem Satz Regeln zu fungieren, denen die HTML-Seite folgen musste, um als gutes HTML betrachtet zu werden, was automatische Fehlerprüfungen und andere nützliche Dinge bedeuten konnte. Heutzutage leisten sie nicht mehr viel und sind im Wesentlichen nur erforderlich, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Mehr müssen Sie dazu vorerst nicht wissen.
- `<html></html>`: Das {{htmlelement("html")}}-Element umschließt den gesamten Inhalt der Seite und wird manchmal als **Wurzelelement** bezeichnet. Es enthält auch das `lang` {{Glossary("Attribute", "Attribut")}}, das die Hauptsprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}}-Element dient als Container für alle Dinge, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie den Besuchern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Keywords")}} und eine Seitenbeschreibung, die in Suchergebnissen erscheinen soll, {{Glossary("CSS", "CSS")}}, um den Inhalt zu gestalten, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, {{Glossary("UTF-8", "UTF-8")}}, der die meisten Zeichen der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es jetzt jeden Textinhalt verarbeiten, den Sie möglicherweise darauf setzen. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Browser-Viewports gerendert wird, um zu verhindern, dass mobile Browser Seiten breiter als das Viewport rendern und sie dann verkleinern.
- `<title></title>`: Das {{htmlelement("title")}}-Element legt den Titel Ihrer Seite fest, der der Titel ist, der in der Registerkarte des Browsers erscheint, in dem die Seite geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie mit einem Lesezeichen versehen/favorisieren.
- `<body></body>`: Das {{htmlelement("body")}}-Element enthält _alle_ Inhalte, die Sie Webbenutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer sonst. Im Moment enthält es nur ein einziges `<img>` Element, aber wir werden später mehr Inhalt hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **Öffnungstag** (zum Beispiel, `<body>`), gefolgt vom Inhalt des Elements, gefolgt von einem **Schließtag** (zum Beispiel, `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen über das Element enthalten — siehe zum Beispiel `charset`, `name` und `src` in unserem Codebeispiel.

## Einbetten von Bildern

Richten wir unsere Aufmerksamkeit auf das {{htmlelement("img")}} Element:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild in unsere Seite an der Position ein, an der es erscheint. Dies geschieht über das `src` (Quelle)-Attribut, das den Pfad zur einzubettenden Bilddatei enthält.

Wir haben auch ein `alt` (alternatives) Attribut eingeschlossen. Im [`alt` Attribut](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild nicht sehen können, möglicherweise aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge namens Screenreader, um ihnen den Alt-Text vorzulesen.
2. Etwas ist schiefgegangen, wodurch das Bild nicht angezeigt wird. Wenn das `src` Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alt-Text angezeigt:

   ![Das Wort: mein Testbild](alt-text-example.png)

Der von Ihnen geschriebene Alt-Text sollte dem Leser genügend Informationen liefern, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "Mein Testbild" nicht gut, weil er keine beschreibenden Informationen über das Bild vermittelt. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein brennender Fuchs, der die Erde umgibt."

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder Schließtag und werden daher als **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente bezeichnet. Sie werden manchmal mit einem **Schrägstrich** am Ende ihres einzigen Tags geschrieben (`<img />`), aber das ist optional.

Lassen Sie uns jetzt Ihr Bild anzeigen.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesen Ordner.
2. Geben Sie im Wert des `src` Attributs des `<img>` Tags den Pfad zu Ihrem Bild an. Es befindet sich in einem Ordner namens `images`, der sich im selben Verzeichnis wie Ihre `index.html` Datei befindet, daher lautet der Pfad `images/` plus der Name Ihres Bildes. Wenn Ihr Bild zum Beispiel `firefox-icon.png` hieße, würde Ihr `src` Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt` Attributs — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html` Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>` Element mit unserem Code; stellen Sie sicher, dass keine Syntax fehlt, wie die Anführungszeichen. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich darüber keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.

> [!NOTE]
> Erfahren Sie mehr über die Verwendung eines `alt` Attributs für Bilder in verschiedenen Situationen in unserem [zugänglichen Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Entscheidungsbaum für Alt-Text](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Kennzeichnung von Text

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zur Kennzeichnung von Text verwenden werden.

> [!NOTE]
> Scrimbas [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die eine nützliche Beschreibung von HTML bietet, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt davon wichtig ist.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften — oder Unterüberschriften — sind. In gleicher Weise, wie ein Buch den Haupttitel, Kapitelüberschriften und Untertitel hat, kann ein HTML-Dokument auch. HTML enthält 6 Überschriftsebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie häufig nur 3 bis 4 verwenden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare, während er den Code rendert. Mit anderen Worten, sie sind auf der Seite nicht sichtbar — nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, Notizen zu Ihrem Code oder Ihrer Logik hinzuzufügen, die nützlich für andere sein könnten, die an demselben Code arbeiten, oder für Sie selbst, wenn Sie nach 6 Monaten zurückkommen und sich nicht erinnern können, was Sie gemacht haben.

Fügen Sie den Titel Ihrer Seite zu der HTML-Seite direkt über Ihrem {{htmlelement("img")}} Element hinzu, umschlossen von `<h1> ... </h1>` Tags. Speichern Sie die Datei und betrachten Sie sie in einem Browser, um den Effekt zu sehen.

### Absätze

Absatz-{{htmlelement("p")}}-Elemente dienen dazu, Absätze von Text zu enthalten; sie werden diese häufig verwenden, wenn Sie regulären Textinhalt markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in ein oder mehrere Absätze hinzu, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert werden. Speichern Sie es und betrachten Sie Ihre Seite in einem Browser.

### Listen

Ein Großteil der Webinhalte sind Listen, und HTML verfügt über spezielle Elemente dafür. Die Markierung von Listen besteht immer aus mindestens 2 Elementen. Die gebräuchlichsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen gedacht, bei denen die Reihenfolge der Elemente nicht wichtig ist, wie z.B. eine Einkaufsliste. Diese sind in einem {{htmlelement("ul")}}-Element umschlossen.
2. **Geordnete Listen** sind für Listen gedacht, bei denen die Reihenfolge der Elemente wichtig ist, wie z.B. eine Anleitung zum Kochrezept. Diese sind in einem {{htmlelement("ol")}}-Element umschlossen.

Jedes Element innerhalb der Listen wird in einem {{htmlelement("li")}} (Listenelement)-Element eingefügt.

Wenn wir zum Beispiel einen Teil des folgenden Absaztfragments in eine Liste umwandeln wollten:

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

Versuchen Sie, eine geordnete oder ungeordnete Liste zu Ihrer Beispielseite hinzuzufügen und betrachten Sie das Ergebnis in einem Browser.

## Erstellen von Links

Links sind sehr wichtig — sie sind das, was das Web zu einem Netz macht! Um einen Link hinzuzufügen, müssen wir ein {{htmlelement("a")}}-Element verwenden, wobei "a" für "Anker" steht. Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, befolgen Sie diese Schritte:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla-Manifest" gewählt.
2. Umschließen Sie den Text in einem {{htmlelement("a")}}-Element, wie unten gezeigt:

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

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den Teil `https://` oder `http://`, genannt _Protokoll_, zu Beginn der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er das tut, was Sie erwarten.

> [!NOTE]
> `href` mag auf den ersten Blick wie eine ziemlich obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erence_.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, falls Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die wie die unten stehende aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, der ein Firefox-Logo, eine Überschrift, die sagt: Mozilla ist cool, und zwei Absätze von Beispieltext zeigt](finished-test-page-small.png)

Wenn Sie feststecken, können Sie Ihre Arbeit jederzeit mit unserem [vollständigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Sie werden sich genauer mit HTML in unserem [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) Basismodul später im Kurs befassen.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba's](https://scrimba.com?via=mdn) _Lernen Sie HTML und CSS_ Kurs lehrt Ihnen HTML und CSS durch den Aufbau und den Einsatz von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von kenntnisreichen Lehrern unterrichtet werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
