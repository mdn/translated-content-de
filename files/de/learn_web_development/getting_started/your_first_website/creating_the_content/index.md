---
title: "HTML: Erstellung des Inhalts"
short-title: Erstellung des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seiner Funktionalität und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Website erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax – öffnende und schließende Tags, Elemente, Attribute, Kopf, Körper.</li>
          <li>Häufige HTML-Elemente einschließlich Absätze, Überschriften, Bilder, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

HTML ist eine _Markup-Sprache_, die aus einer Reihe von **{{Glossary("element", "Elementen")}}** besteht, die verwendet werden, um Textinhalte zu umschließen und deren Struktur zu definieren sowie ein bestimmtes Verhalten zu verursachen.

Schauen wir uns ein Beispiel an – der folgende Inhalt wird bei der Anzeige auf einer Webseite in derselben Zeile angezeigt, da er in keiner Weise strukturiert ist:

```plain
Instructions for life:
Eat
Sleep
Repeat
```

Wenn wir diesen Inhalt mit den folgenden HTML-Elementen umschließen, können wir diese eine Zeile in einen Absatz ({{htmlelement("p")}}) und drei Aufzählungspunkte ({{htmlelement("li")}}) umwandeln:

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

Neben der Strukturierung von Text hat HTML noch viele andere Anwendungen – Text oder Bilder mit anderen Webseiten verlinken, Bilder oder Videos einbinden, Datentabellen erstellen und so weiter.

## Erstellen Ihres ersten HTML-Dokuments

Schauen wir uns an, wie einzelne Elemente kombiniert werden, um eine HTML-Seite zu formen. In diesem Abschnitt erstellen Sie eine grundlegende HTML-Datei und werfen einen Blick darauf, woraus sie besteht.

1. Erstellen Sie in Ihrem Ordner `web-projects` einen neuen Ordner namens `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code in die Datei ein, genau wie gezeigt:

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

- `<!doctype html>`: Der {{Glossary("Doctype", "doctype")}} ist eine erforderliche Präambel. In den frühen Tagen von HTML (etwa 1991/92) sollten Doctypes als Links zu einem Satz von Regeln fungieren, die die HTML-Seite befolgen musste, um als gutes HTML zu gelten, was automatische Fehlerkontrollen und andere nützliche Dinge bedeuten konnte. Heutzutage tun sie nicht viel und sind im Grunde nur noch nötig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie vorerst wissen müssen.
- `<html></html>`: Das {{htmlelement("html")}}-Element umschließt den gesamten Inhalt der gesamten Seite und wird manchmal als **Root-Element** bezeichnet. Es enthält auch das `lang`-Attribut, das die Primärsprache des Dokuments festlegt.
- `<head></head>`: Das {{htmlelement("head")}}-Element dient als Container für alle Dinge, die Sie in die HTML-Seite aufnehmen möchten, die _kein_ Inhalt sind, den Sie den Betrachtern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen soll, {{Glossary("CSS", "CSS")}} zur Gestaltung des Inhalts, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">`: Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, nämlich {{Glossary("UTF-8", "UTF-8")}}, das die meisten Zeichen aus den meisten geschriebenen Sprachen umfasst. Im Wesentlichen kann es nun jeden Textinhalt behandeln, den Sie darauf legen. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">`: Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Browser-Viewports rendert und verhindert, dass mobile Browser Seiten rendern, die breiter als der Viewport sind, um sie anschließend zu verkleinern.
- `<title></title>`: Das {{htmlelement("title")}}-Element legt den Titel Ihrer Seite fest, der in der Browsertab angezeigt wird, in der die Seite geladen ist. Es wird auch zur Beschreibung der Seite verwendet, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>`: Das {{htmlelement("body")}}-Element enthält _alle_ Inhalte, die Sie Webnutzern anzeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer. Im Moment enthält es nur ein einzelnes `<img>`-Element, aber wir werden später mehr Inhalt hinzufügen.

> [!NOTE]
> Die meisten HTML-Elemente bestehen aus einem **öffnenden Tag** (zum Beispiel `<body>`), gefolgt vom Inhalt des Elements, gefolgt von einem **schließenden Tag** (zum Beispiel `</body>`). Einige HTML-Elemente haben auch **Attribute**, die zusätzliche Einstellungen oder Informationen zum Element enthalten — siehe beispielsweise `charset`, `name` und `src` in unserem Codebeispiel.

## Einbetten von Bildern

Lassen Sie uns nun dem {{htmlelement("img")}}-Element unsere Aufmerksamkeit widmen:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild in unsere Seite an der Stelle ein, an der es erscheint. Es geschieht über das `src`- (source) Attribut, das den Pfad zur Bilddatei enthält, die wir einbetten möchten.

Wir haben auch ein `alt`- (alternative) Attribut hinzugefügt. Im [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild möglicherweise aus folgenden Gründen nicht sehen können:

1. Sie sind sehbehindert. Benutzer mit einer erheblichen Sehbehinderung verwenden oft Werkzeuge, die als Screenreader bezeichnet werden, um den Alt-Text für sie vorzulesen.
2. Etwas ist schiefgelaufen und das Bild wird nicht angezeigt. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alt-Text angezeigt:

   ![Die Worte: mein Testbild](alt-text-example.png)

Der von Ihnen geschriebene Alt-Text sollte dem Leser genügend Informationen liefern, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text „Mein Testbild“ nicht gut, da er keine beschreibenden Informationen über das Bild vermittelt. Eine viel bessere Alternative für unser Firefox-Logo wäre „Das Firefox-Logo: ein flammender Fuchs, der die Erde umgibt.“

> [!NOTE]
> Elemente wie `<img>` haben keinen Inhalt oder Schlusstag und werden daher als **leere** (oder **{{Glossary("void_element", "void")}}**) Elemente bezeichnet. Sie werden manchmal mit einem **schließenden Schrägstrich** am Ende ihres einzelnen Tags (`<img />`) geschrieben, aber dies ist optional.

Lassen Sie uns nun Ihr Bild einblenden.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesen Ordner.
2. Geben Sie im Wert des `src`-Attributs des `<img>`-Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der sich im selben Verzeichnis wie Ihre `index.html`-Datei befindet, daher wird der Pfad `images/` plus den Namen Ihres Bildes sein. Wenn Ihr Bild beispielsweise `firefox-icon.png` hieß, würde Ihr `src`-Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt`-Attributs — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html`-Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Falls nicht, überprüfen Sie Ihr `<img>`-Element mit unserem Code; vergewissern Sie sich, dass keine Syntax fehlt, wie z.B. die Anführungszeichen. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.

> [!NOTE]
> Erfahren Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [barrierefreien Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Textauszeichnung

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zur Textgestaltung verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften oder Unterüberschriften sind. Genauso wie ein Buch einen Haupttitel, Kapiteltitel und Untertitel hat, kann ein HTML-Dokument das auch. HTML enthält 6 Überschriftsstufen, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, obwohl Sie normalerweise nur 3 bis 4 davon verwenden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar — nur im Code. HTML-Kommentare sind eine Möglichkeit, Anmerkungen zu Ihrem Code oder Ihrer Logik hinzuzufügen, die möglicherweise für andere, die am gleichen Code arbeiten, nützlich sind, oder für Sie selbst, wenn Sie nach 6 Monaten zurückkehren und sich nicht mehr erinnern, was Sie getan haben.

Versuchen Sie nun, Ihrer HTML-Seite über Ihrem {{htmlelement("img")}}-Element einen passenden Haupttitel hinzuzufügen. Speichern Sie die Datei und sehen Sie sich den Effekt im Browser an.

### Absätze

Absatz-{{htmlelement("p")}}-Elemente sind dazu da, Textabsätze zu enthalten; diese werden Sie häufig verwenden, wenn Sie regulären Textinhalt auszeichnen:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einem oder mehreren Absätzen direkt unter Ihrem {{htmlelement("img")}}-Element hinzu. Speichern Sie es und sehen Sie sich Ihre Seite im Browser an.

### Listen

Ein Großteil der Inhalte im Web sind Listen, und HTML hat spezielle Elemente dafür. Das Auszeichnen von Listen besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie eine Einkaufsliste. Diese sind in einem {{htmlelement("ul")}}-Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente eine Rolle spielt, wie eine Liste von Kochanweisungen in einem Rezept. Diese sind in einem {{htmlelement("ol")}}-Element eingeschlossen.

Jedes Element innerhalb der Listen wird in einem {{htmlelement("li")}}- (Listenelement) Element platziert.

Wenn wir beispielsweise einen Teil des folgenden Absatzfragments in eine Liste umwandeln wollten:

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

## Erstellen von Links

Links sind sehr wichtig – sie sind das, was das Web zum Web macht! Um einen Link hinzuzufügen, müssen wir ein {{htmlelement("a")}}-Element verwenden, wobei "a" für "Anker" steht. Um Text in Ihrem Absatz in einen Link zu verwandeln, folgen Sie diesen Schritten:

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

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den Teil `https://` oder `http://`, das _Protokoll_, zu Beginn der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin führt, wo Sie wollten.

> **Hinweis:** `href` mag auf den ersten Blick wie eine eher obskure Wahl für einen Attributnamen erscheinen. Es steht für _**h**ypertext **ref**erence_.

Fügen Sie Ihrer Seite jetzt einen Link hinzu, falls Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie am Ende mit einer Seite dastehen, die wie diese aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, der ein Firefox-Logo zeigt, eine Überschrift mit der Aufschrift Mozilla ist cool und zwei Absätze mit Fülltext](finished-test-page-small.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Sie werden im weiteren Verlauf unseres [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Kernmoduls im Laufe des Kurses noch viel mehr lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
