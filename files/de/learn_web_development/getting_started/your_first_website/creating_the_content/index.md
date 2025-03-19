---
title: "HTML: Erstellen des Inhalts"
short-title: Erstellen des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und ihren Inhalt zu strukturieren. Zum Beispiel könnte der Inhalt innerhalb eines Satzes von Absätzen, einer Liste mit Aufzählungspunkten oder unter Verwendung von Bildern und Datentabellen strukturiert werden. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seinen Funktionen und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Website erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zur Erstellung einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax — öffnende und schließende Tags, Elemente, Attribute, Kopf, Körper.</li>
          <li>Gemeinsame HTML-Elemente einschließlich Absätze, Überschriften, Bilder, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

HTML ist eine _Auszeichnungssprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **{{Glossary("element", "Elementen")}}**, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen oder einzubetten, damit sie auf eine bestimmte Weise erscheinen oder funktionieren. Die einschließenden {{Glossary("tag", "Tags")}} können ein Wort oder Bild zu einem Hyperlink zu einem anderen Ort machen, Wörter kursiv darstellen, die Schriftgröße vergrößern oder verkleinern und so weiter. Nehmen wir zum Beispiel die folgende Zeile Inhalt:

```plain
My cat is very grumpy
```

Wenn wir wollten, dass die Zeile für sich alleine steht, könnten wir angeben, dass es sich dabei um einen Absatz handelt, indem wir sie in Absatz-Tags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas genauer erkunden.

![Absatz-Element inklusive öffnendem Tag, dem Inhalt 'mein Kater ist sehr mürrisch' und einem schließenden Tag](grumpy-cat-small.png)

Die Hauptteile unseres Elements sind wie folgt:

1. **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Fall p), eingeschlossen in öffnende und schließende **spitze Klammern**. Dies gibt an, wo das Element beginnt oder anfängt, Wirkung zu zeigen — in diesem Fall, wo der Absatz beginnt.
2. **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, enthält jedoch einen _Schrägstrich_ vor dem Elementnamen. Dies gibt an, wo das Element endet — in diesem Fall, wo der Absatz endet. Das fehlende Hinzufügen eines schließenden Tags ist einer der Standardanfängerfehler und kann zu merkwürdigen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur Text ist.
4. **Das Element:** Das öffnende Tag, das schließende Tag und der Inhalt bilden zusammen das Element.

Elemente können auch Attribute haben, die wie folgt aussehen:

![Absatz-Öffnungstag mit einem Klassenattribut hervorgehoben: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die im tatsächlichen Inhalt nicht angezeigt werden sollen. Hier ist `class` der Attributname und `editor-note` der Attributwert. Das `class`-Attribut ermöglicht es Ihnen, dem Element eine nicht eindeutige Kennung zu geben, die verwendet werden kann, um es (und alle anderen Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen zu markieren.
Einige Attribute haben keinen Wert, wie zum Beispiel [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert festlegen, haben immer:

1. Ein Leerzeichen zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn das Element bereits ein oder mehrere Attribute hat).
2. Der Attributname gefolgt von einem Gleichheitszeichen.
3. Der Attributwert, eingeschlossen durch öffnende und schließende Anführungszeichen.

> [!NOTE]
> Einfache Attributwerte, die keine {{Glossary("ASCII", "ASCII")}}-Leerzeichen (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`) enthalten, können ohne Anführungszeichen bleiben, aber es wird empfohlen, dass Sie alle Attributwerte in Anführungszeichen setzen, da der Code dadurch konsistenter und verständlicher wird.

### Verschachteln von Elementen

Sie können Elemente auch in andere Elemente einfügen — das wird **Verschachtelung** genannt. Wenn wir sagen wollten, dass unser Kater **sehr** mürrisch ist, könnten wir das Wort "sehr" in ein {{htmlelement("strong")}}-Element einbetten, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Allerdings müssen Sie sicherstellen, dass Ihre Elemente richtig verschachtelt sind. Im obigen Beispiel haben wir das {{htmlelement("p")}}-Element zuerst geöffnet, dann das {{htmlelement("strong")}}-Element; daher müssen wir das {{htmlelement("strong")}}-Element zuerst schließen, dann das {{htmlelement("p")}}-Element. Folgendes ist falsch:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen korrekt geöffnet und geschlossen werden, damit sie eindeutig innerhalb oder außerhalb voneinander sind. Wenn sie sich wie oben gezeigt überlappen, wird Ihr Webbrowser versuchen, das Beste aus dem, was Sie sagen wollten, zu erraten, was zu unerwarteten Ergebnissen führen kann. Also tun Sie das nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden **{{Glossary("void_element", "void elements")}}** genannt. Nehmen Sie das {{htmlelement("img")}}-Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dieses enthält zwei Attribute, aber es gibt kein schließendes `</img>`-Tag und keinen inneren Inhalt. Dies liegt daran, dass ein Bildelement keinen Inhalt einbettet, um ihn zu beeinflussen. Es dient dazu, ein Bild in der HTML-Seite an der Stelle einzubetten, an der es erscheint.

## Erstellen Ihres ersten HTML-Dokuments

Das umfasst die Grundlagen einzelner HTML-Elemente, aber auf sich allein gestellt sind sie nicht sehr nützlich. Nun werden wir uns ansehen, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden. Lassen Sie uns eine grundlegende HTML-Datei erstellen und sehen, woraus sie besteht:

1. Erstellen Sie innerhalb Ihres `web-projects`-Ordners einen weiteren neuen Ordner namens `first-website`.
2. Erstellen Sie innerhalb von `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau so ein:

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

- `<!doctype html>` — Der {{Glossary("Doctype", "doctype")}} ist ein erforderliches Vorwort. In den frühen Tagen, als HTML jung war (um 1991/92), sollten Doctypes als Links zu einer Reihe von Regeln dienen, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten, was automatische Fehlerprüfung und andere nützliche Dinge hätte bedeuten können. Heutzutage tun sie jedoch nicht viel und sind im Grunde nur notwendig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie für den Moment wissen müssen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element fasst den gesamten Inhalt auf der gesamten Seite ein und wird manchmal als das Wurzelelement bezeichnet. Es enthält auch das `lang`-Attribut, das die Hauptsprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für all die Dinge, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie den Besuchern Ihrer Seite anzeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in Suchergebnissen erscheinen sollen, CSS zur Stilgebung unseres Inhalts, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element setzt den Zeichensatz, den Ihr Dokument verwenden soll, auf UTF-8, das die meisten Zeichen der überwiegenden Mehrheit der geschriebenen Sprachen enthält. Im Wesentlichen kann es nun jeden Textinhalt verarbeiten, den Sie darauf platzieren könnten. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [viewport element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Viewports gerendert wird, um zu verhindern, dass mobile Browser Seiten breiter als der Viewport rendern und dann verkleinern.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies legt den Titel Ihrer Seite fest, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie Webbenutzern anzeigen möchten, wenn sie Ihre Seite besuchen, egal ob Text, Bilder, Videos, Spiele, abspielbare Audiodateien oder sonstiges.

## Bilder

Richten wir unsere Aufmerksamkeit auf das {{htmlelement("img")}}-Element:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild an der Stelle, an der es erscheint, in unsere Seite ein. Es tut dies über das `src` (Quelle)-Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (alternatives) Attribut hinzugefügt. Im [`alt`-Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) geben Sie einen beschreibenden Text für Benutzer an, die das Bild möglicherweise nicht sehen können, aus den folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden häufig Tools namens Screenreader, um ihnen den alternativen Text vorzulesen.
2. Etwas ist schiefgegangen, sodass das Bild nicht angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der alternative Text angezeigt:

![Die Wörter: mein Testbild](alt-text-example.png)

Die Schlüsselwörter für alternativen Text sind "beschreibender Text". Der von Ihnen geschriebene alternative Text sollte dem Leser genügend Informationen bieten, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "Mein Testbild" überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein brennender Fuchs, der die Erde umgibt."

> [!NOTE]
> Erfahren Sie mehr über Barrierefreiheit in unserem [Barrierefreiheits-Lernmodul](/de/docs/Learn_web_development/Core/Accessibility).

Lassen Sie uns jetzt Ihr Bild anzeigen.

1. Erstellen Sie im Ordner `first-website` einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel gewählt haben, in diesem Ordner ab.
2. Geben Sie im Wert des `src`-Attributs des `<img>`-Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der sich im gleichen Verzeichnis wie Ihre Datei `index.html` befindet. Der Pfad lautet daher `images/` plus der Name Ihres Bildes. Wenn Ihr Bild zum Beispiel `firefox-icon.png` hieß, würde Ihr `src`-Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt`-Attributs — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre Datei `index.html` in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element anhand unseres obigen Codes; stellen Sie sicher, dass keine der Syntax fehlt, wie z. B. die Anführungszeichen. Stellen Sie sicher, dass der Bildname korrekt ist.

> [!NOTE]
> Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.
> Erfahren Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [Zugänglichen Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Textauszeichnung

In diesem Abschnitt werden einige wesentliche HTML-Elemente behandelt, die Sie zum Auszeichnen von Text verwenden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften — oder Unterüberschriften — sind. In gleicher Weise, wie ein Buch den Haupttitel, die Kapiteltitel und die Untertitel hat, kann ein HTML-Dokument das auch. HTML enthält 6 Überschriftsebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie meistens nur 3 bis 4 verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind auf der Seite nicht sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

Versuchen Sie nun, Ihrer HTML-Seite einen geeigneten Haupttitel direkt über Ihrem {{htmlelement("img")}}-Element hinzuzufügen. Speichern Sie die Datei und betrachten Sie den Effekt in einem Browser.

> [!NOTE]
> Sie werden sehen, dass Ihre Überschriftsebene 1 einen impliziten Stil hat. Verwenden Sie Überschriftselemente nicht, um Text größer oder fett zu machen, da sie für [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_content) und [andere Gründe wie SEO](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure) verwendet werden. Versuchen Sie, eine sinnvolle Abfolge von Überschriften auf Ihren Seiten zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erklärt, sind {{htmlelement("p")}}-Elemente zum Einfügen von Textabschnitten gedacht; Sie werden diese häufig beim Markieren regulärer Textinhalte verwenden:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einem oder mehreren Absätzen, direkt unter Ihrem {{htmlelement("img")}}-Element, ein. Speichern Sie ihn und sehen Sie sich Ihre Seite in einem Browser an.

### Listen

Ein großer Teil der Inhalte im Web sind Listen und HTML hat spezielle Elemente dafür. Das Auszeichnen von Listen besteht immer aus mindestens zwei Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie zum Beispiel eine Einkaufsliste. Diese sind in einem {{htmlelement("ul")}}-Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente eine Rolle spielt, wie zum Beispiel eine Liste von Kochanleitungen in einem Rezept. Diese sind in einem {{htmlelement("ol")}}-Element eingeschlossen.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}} (Listenelement) eingeschlossen.

Zum Beispiel, wenn wir den Teil des folgenden Absatzfragments in eine Liste umwandeln wollten

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup so ändern

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

## Links

Links sind sehr wichtig — sie sind das, was das Web zu einem Netz macht! Um einen Link hinzuzufügen, müssen wir ein spezifisches Element verwenden — {{htmlelement("a")}} — "a" ist die Kurzform für "Anker". Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, folgen Sie diesen Schritten:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" gewählt.
2. Wickeln Sie den Text in ein {{htmlelement("a")}}-Element ein, wie unten gezeigt:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Geben Sie dem {{htmlelement("a")}}-Element ein `href`-Attribut, wie unten gezeigt:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Füllen Sie den Wert dieses Attributs mit der Webadresse aus, zu der der Link führen soll:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie das `https://` oder `http://`-Teil, das _Protokoll_ genannt wird, am Beginn der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin sendet, wohin Sie wollten.

> **Hinweis:** `href` scheint auf den ersten Blick vielleicht eine eher unklare Wahl für einen Attributnamen zu sein. Wenn Sie Schwierigkeiten haben, es sich zu merken, denken Sie daran, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, wenn Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie am Ende eine Seite haben, die wie die unten gezeigte aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, die ein Firefox-Logo zeigt, eine Überschrift mit der Aufschrift Mozilla ist cool und zwei Absätze Fülltext](finished-test-page-small.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Sie werden in unserem [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)-Kernmodul noch viel mehr lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
