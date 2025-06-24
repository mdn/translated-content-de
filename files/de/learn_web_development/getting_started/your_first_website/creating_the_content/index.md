---
title: "HTML: Erstellen des Inhalts"
short-title: Erstellen des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seiner Funktionalität und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Webseite erstellen.

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
          <li>Gemeinsame HTML-Elemente wie Absätze, Überschriften, Bilder, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML also?

HTML ist eine _Markup-Sprache_, die aus einer Reihe von **{{Glossary("element", "Elemente")}}** besteht, die verwendet werden, um Textinhalte einzuschließen, um deren Struktur zu definieren und ein bestimmtes Verhalten hervorzurufen.

Schauen wir uns ein Beispiel an – der folgende Inhalt wird in einer Webseitendarstellung in einer einzigen Zeile angezeigt, da er in keiner Weise strukturiert ist:

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

Neben der Strukturierung von Text hat HTML viele andere Verwendungszwecke — Texte oder Bilder mit anderen Webseiten zu verlinken, Bilder oder Videos einzubetten, Datentabellen zu erstellen und so weiter.

## Erstellen Ihres ersten HTML-Dokuments

Schauen wir uns an, wie einzelne Elemente kombiniert werden, um eine HTML-Seite zu bilden. In diesem Abschnitt erstellen Sie eine einfache HTML-Datei und werfen einen Blick darauf, woraus sie besteht.

1. Erstellen Sie in Ihrem `web-projects`-Ordner einen neuen Ordner namens `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau so ein, wie er hier gezeigt ist:

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

- `<!doctype html>`: Der {{Glossary("Doctype", "doctype")}} ist ein erforderliches Präambel. In den Anfangszeiten von HTML (etwa 1991/92) waren Doctypes gedacht, um als Links zu einer Reihe von Regeln zu fungieren, die die HTML-Seite befolgen musste, um als gutes HTML betrachtet zu werden, was eine automatische Fehlerüberprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage tun sie allerdings nicht viel und sind im Grunde nur nötig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Mehr müssen Sie im Moment nicht wissen.
- `<html></html>`: Das {{htmlelement("html")}}-Element umfasst den gesamten Inhalt der gesamten Seite und wird manchmal als **Wurzelelement** bezeichnet. Es enthält auch das `lang` {{Glossary("Attribute", "Attribut")}}, das die Hauptsprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}}-Element fungiert als Container für all das, was Sie in die HTML-Seite einfügen möchten, das _nicht_ der anzuzeigende Inhalt für die Seitenbesucher ist. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in Suchergebnissen angezeigt werden sollen, {{Glossary("CSS", "CSS")}}, um den Inhalt zu gestalten, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, und zwar auf {{Glossary("UTF-8", "UTF-8")}}, das die meisten Zeichen der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es nun jeden Textinhalt verarbeiten, den Sie darauf legen. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Browser-Viewports gerendert wird, wodurch verhindert wird, dass mobile Browser Seiten breiter als der Viewport rendern und sie dann verkleinern.
- `<title></title>`: Das {{htmlelement("title")}}-Element legt den Titel Ihrer Seite fest, der als Titel in der Registerkarte des Browsers erscheint, in dem die Seite geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen speichern.
- `<body></body>`: Das {{htmlelement("body")}}-Element enthält _alle_ Inhalte, die Sie den Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer. Im Moment enthält es nur ein einzelnes `<img>`-Element, aber wir werden später mehr Inhalte hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **öffnenden Tag** (zum Beispiel `<body>`), gefolgt vom Inhalt des Elements, gefolgt von einem **schließenden Tag** (zum Beispiel `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen über das Element enthalten – sehen Sie sich zum Beispiel `charset`, `name` und `src` in unserem Codebeispiel an.

## Bilder einbetten

Wenden wir uns dem {{htmlelement("img")}}-Element zu:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild in unsere Seite an der Stelle ein, an der es erscheint. Es geschieht dies durch das `src` (source) Attribut, das den Pfad zur einzubettenden Bilddatei enthält.

Wir haben auch ein `alt` (alternative) Attribut eingeschlossen. Im [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild nicht sehen können, möglicherweise aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge, die den Alt-Text für sie vorlesen.
2. Etwas ist schiefgelaufen, was dazu führt, dass das Bild nicht angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird der Alt-Text stattdessen angezeigt:

   ![Die Worte: mein Testbild](alt-text-example.png)

Der Alt-Text, den Sie schreiben, sollte dem Leser genügend Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text „Mein Testbild“ nicht gut, da er keine beschreibenden Informationen über das Bild vermittelt. Eine viel bessere Alternative für unser Firefox-Logo wäre „Das Firefox-Logo: ein brennender Fuchs, der die Erde umringt.“

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder schließenden Tag und werden daher **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente genannt. Sie werden manchmal mit einem **abschließenden Schrägstrich** am Ende ihres einzelnen Tags geschrieben (`<img />`), aber das ist optional.

Lassen Sie uns jetzt Ihr Bild anzeigen.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images` und legen Sie das zuvor gewählte Bild in diesen Ordner.
2. Geben Sie im Wert des `src`-Attributs im `<img>`-Tag den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der sich im gleichen Verzeichnis wie Ihre `index.html`-Datei befindet, daher ist der Pfad `images/` plus der Name Ihres Bildes. Wenn Ihr Bild beispielsweise `firefox-icon.png` heißt, sieht Ihr `src`-Attribut folgendermaßen aus: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt`-Attributs — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html`-Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element gegen unseren Code; Stellen Sie sicher, dass keine der Syntax, wie Anführungszeichen, fehlt. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.

> [!NOTE]
> Finden Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unseren [accessible multimedia tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und dem [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) heraus.

## Text markieren

Dieser Abschnitt wird einige wesentliche HTML-Elemente behandeln, die Sie zum Markieren von Text verwenden.

> [!NOTE]
> Scrimbas [Die Grundlagen von semantischem HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die eine nützliche Beschreibung von HTML bietet, mit besonderem Schwerpunkt darauf, warum der _semantische_ Aspekt wichtig ist.

### Überschriften

Überschriftselemente ermöglichen Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften — oder Unterüberschriften — sind. Genauso wie ein Buch einen Haupttitel, Kapiteltitel und Untertitel hat, kann dies auch ein HTML-Dokument. HTML enthält 6 Überschriften-Ebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie in der Regel nur 3 bis 4 davon verwenden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar — nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, Anmerkungen zu Ihrem Code oder Ihrer Logik hinzuzufügen, die nützlich für andere sein könnten, die an demselben Code arbeiten, oder für Sie, wenn Sie nach 6 Monaten zurückkehren und sich nicht erinnern, was Sie getan haben.

Fügen Sie Ihren Seitentitel oben in der HTML-Seite direkt über Ihrem {{htmlelement("img")}}-Element ein, umschlossen in `<h1> ... </h1>`-Tags. Speichern Sie die Datei und sehen Sie sie sich in einem Browser an, um den Effekt zu sehen.

### Absätze

Absatz-{{htmlelement("p")}}-Elemente sind dazu da, Absätze von Text zu enthalten; Sie werden diese häufig verwenden, wenn Sie regulären Textinhalt markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einen oder mehrere Absätze ein und platzieren Sie diese direkt unter Ihrem {{htmlelement("img")}}-Element. Speichern Sie ihn und betrachten Sie Ihre Seite in einem Browser.

### Listen

Viel Webinhalt sind Listen, und HTML hat spezielle Elemente dafür. Das Markieren von Listen besteht stets aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen gedacht, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie eine Einkaufsliste. Diese werden in einem {{htmlelement("ul")}}-Element umschlossen.
2. **Geordnete Listen** sind für Listen gedacht, bei denen die Reihenfolge der Elemente wichtig ist, wie eine Liste von Kochanweisungen in einem Rezept. Diese sind in einem {{htmlelement("ol")}}-Element umschlossen.

Jedes Element innerhalb der Listen wird in einem {{htmlelement("li")}} (Listenelement) platziert.

Wenn wir zum Beispiel einen Teil des folgenden Absatzfragments in eine Liste umwandeln wollten:

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

Versuchen Sie, Ihrer Beispielseite eine geordnete oder ungeordnete Liste hinzuzufügen und sehen Sie sich das Ergebnis in einem Browser an.

## Links erstellen

Links sind sehr wichtig — sie sind das, was das Web zu einem Netz macht! Um einen Link hinzuzufügen, müssen wir ein {{htmlelement("a")}}-Element verwenden, wobei „a“ für „anchor“ steht. Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, folgen Sie diesen Schritten:

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

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den `https://` oder `http://`-Teil, der als _Protokoll_ bezeichnet wird, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin sendet, wo Sie hin wollten.

> [!NOTE] > `href` mag auf den ersten Blick wie eine eher obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erence_.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, falls Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die so aussieht wie die unten (Sie können sie auch [hier anzeigen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite mit einem Firefox-Logo, einer Überschrift "Mozilla is cool" und zwei Absätzen mit Fülltext](finished-test-page-small.png)

Wenn Sie nicht weiterkommen, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Sie werden viel mehr in unserem [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul später im Kurs lernen.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _HTML und CSS lernen_ Kurs vermittelt Ihnen HTML und CSS durch den Aufbau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
