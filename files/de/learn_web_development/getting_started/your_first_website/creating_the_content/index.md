---
title: "HTML: Erstellen des Inhalts"
short-title: Erstellen des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 9da2567689c0a4397b0d70efbbb878dec3115754
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalte zu strukturieren. Zum Beispiel könnten Inhalte innerhalb von Absätzen, einer Liste mit Aufzählungspunkten oder mit Bildern und Datentabellen strukturiert werden. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seinen Funktionen und zeigt Ihnen, wie Sie die grundlegenden Inhalte für Ihre erste Website erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax – öffnende und schließende Tags, Elemente, Attribute, head, body.</li>
          <li>Übliche HTML-Elemente einschließlich Absätzen, Überschriften, Bildern, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

HTML ist eine _Auszeichnungssprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **{{Glossary("element", "Elementen")}}**, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen oder einzurahmen, damit sie auf eine bestimmte Weise erscheinen oder wirken. Die umschließenden {{Glossary("tag", "Tags")}} können ein Wort oder Bild zu einem Hyperlink machen, Wörter kursiv darstellen, die Schriftgröße ändern usw. Nehmen wir zum Beispiel die folgende Inhaltszeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass die Zeile für sich allein steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in Absatz-Tags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas genauer untersuchen.

![paragraph element including opening tag, content reading 'my cat is very grumpy', and a closing tag](grumpy-cat-small.png)

Die Hauptteile unseres Elements sind wie folgt:

1. **Das öffnende Tag:** Besteht aus dem Namen des Elements (in diesem Fall p), umschlossen von öffnenden und schließenden **Winkelklammern**. Dies zeigt an, wo das Element beginnt oder zu wirken beginnt – in diesem Fall, wo der Absatz beginnt.
2. **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, außer dass es einen _Schrägstrich_ vor dem Elementnamen enthält. Dies gibt an, wo das Element endet – in diesem Fall, wo der Absatz endet. Das Fehlen eines schließenden Tags ist einer der häufigsten Anfängerfehler und kann zu seltsamen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur Text ist.
4. **Das Element:** Das öffnende Tag, das schließende Tag und der Inhalt bilden zusammen das Element.

Elemente können auch Attribute haben, die wie folgt aussehen:

![Paragraph opening tag with a class attribute highlighted: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im eigentlichen Inhalt erscheinen sollen. Hierbei ist `class` der Attribut*name* und `editor-note` der Attribut*wert*. Das `class`-Attribut ermöglicht es Ihnen, dem Element eine nicht eindeutige Kennung zu geben, die verwendet werden kann, um es (und alle anderen Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen zu versehen.
Einige Attribute haben keinen Wert, wie z.B. [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert festlegen, haben immer:

1. Ein Leerzeichen zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn das Element bereits ein oder mehrere Attribute hat).
2. Den Attributnamen gefolgt von einem Gleichheitszeichen.
3. Den Attributwert in öffnende und schließende Anführungszeichen eingeschlossen.

> [!NOTE]
> Einfache Attributwerte, die keine {{Glossary("ASCII", "ASCII")}}-Leerzeichen enthalten (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`) können unverzinkt bleiben, es wird jedoch empfohlen, alle Attributwerte in Anführungszeichen zu setzen, da dies den Code konsistenter und verständlicher macht.

### Verschachtelung von Elementen

Sie können auch Elemente innerhalb anderer Elemente platzieren – dies nennt man **Verschachtelung**. Wenn wir sagen wollten, dass unsere Katze _sehr_ mürrisch ist, könnten wir das Wort „sehr“ in ein {{htmlelement("strong")}}-Element einfügen, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente richtig verschachtelt sind. Im obigen Beispiel haben wir das {{htmlelement("p")}}-Element zuerst geöffnet und dann das {{htmlelement("strong")}}-Element; Daher müssen wir das {{htmlelement("strong")}}-Element zuerst schließen und dann das {{htmlelement("p")}}-Element. Folgendes ist falsch:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen korrekt geöffnet und geschlossen werden, damit sie klar innerhalb oder außerhalb voneinander sind. Wenn sie sich wie oben gezeigt überlappen, versucht Ihr Webbrowser, das Beste aus dem zu machen, was Sie sagen wollten, was zu unerwarteten Ergebnissen führen kann. Also tun Sie es nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden **{{Glossary("void_element", "leere Elemente")}}** genannt. Nehmen Sie das {{htmlelement("img")}}-Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dies enthält zwei Attribute, aber es gibt kein schließendes `</img>`-Tag und keinen inneren Inhalt. Dies liegt daran, dass ein Bildelement keinen Inhalt einrahmt, um ihn zu beeinflussen. Sein Zweck ist es, ein Bild an der Stelle, an der es erscheint, in die HTML-Seite einzubetten.

## Erstellen Ihres ersten HTML-Dokuments

Damit sind die Grundlagen der einzelnen HTML-Elemente abgeschlossen, aber sie sind allein nicht sehr nützlich. Jetzt schauen wir uns an, wie einzelne Elemente kombiniert werden, um eine ganze HTML-Seite zu bilden. Lassen Sie uns eine grundlegende HTML-Datei erstellen und schauen, woraus sie besteht:

1. Erstellen Sie in Ihrem `web-projects` Ordner einen weiteren neuen Ordner mit dem Namen `first-website`.
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

Hier haben wir folgendes:

- `<!doctype html>` — Der {{Glossary("Doctype", "doctype")}} ist eine erforderliche Präambel. In den Nebeln der Zeit, als HTML jung war (um 1991/92), sollten Doctypes als Links zu einer Reihe von Regeln dienen, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten, was automatische Fehlerprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage tun sie jedoch nicht viel und sind im Grunde nur notwendig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist vorerst alles, was Sie wissen müssen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element umfasst den gesamten Inhalt der gesamten Seite und wird manchmal als Wurzelelement bezeichnet. Es enthält auch das `lang`-Attribut, das die Hauptsprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für all die Dinge, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie den Besuchern Ihrer Seite zeigen möchten. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen soll, CSS, um unseren Inhalt zu gestalten, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, auf UTF-8, das die meisten Zeichen der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es jetzt jeden Textinhalt behandeln, den Sie darauf setzen könnten. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, später einige Probleme zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Viewports gerendert wird, und verhindert, dass mobile Browser Seiten breiter als der Viewport rendern und sie dann verkleinern.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies setzt den Titel Ihrer Seite, welchen Titel der Tab des Browsers zeigt, in dem die Seite geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer.

## Bilder

Richten wir nun unsere Aufmerksamkeit auf das {{htmlelement("img")}}-Element:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild auf unserer Seite an der Stelle, an der es erscheint, ein. Dies geschieht über das Attribut `src` (source), das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (alternatives) Attribut eingeschlossen. Im [`alt`-Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild möglicherweise aus folgenden Gründen nicht sehen können:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge, die den Alt-Text für sie vorlesen.
2. Etwas ist schiefgegangen, wodurch das Bild nicht angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alt-Text angezeigt:

![Die Worte: mein Testbild](alt-text-example.png)

Die Schlüsselbegriffe für Alt-Text sind "beschreibender Text". Der von Ihnen geschriebene Alt-Text sollte dem Leser genügend Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser derzeitiger Text "Mein Testbild" überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein flammender Fuchs, der die Erde umgibt."

> [!NOTE]
> Finden Sie mehr über Barrierefreiheit in unserem [Barrierefreiheits-Lernmodul](/de/docs/Learn_web_development/Core/Accessibility) heraus.

Lassen Sie uns jetzt Ihr Bild anzeigen.

1. Erstellen Sie im `first-website` Ordner einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesen Ordner.
2. Geben Sie im Wert des `src`-Attributs des `<img>`-Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der sich im gleichen Verzeichnis wie Ihre `index.html` Datei befindet, daher ist der Pfad `images/` plus der Name Ihres Bildes. Zum Beispiel, wenn Ihr Bild `firefox-icon.png` hieß, würde Ihr `src`-Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt`-Attributs – `My test image` – durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html` Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element mit unserem obigen Code; stellen Sie sicher, dass keine Syntax fehlt, wie die Anführungszeichen. Vergewissern Sie sich, dass der Bilddateiname korrekt ist.

> [!NOTE]
> Wenn das Bild sehr groß ist und daher nicht auf den Bildschirm passt, machen Sie sich darüber keine Sorgen. Wir werden dieses Problem im nächsten Artikel beheben.
> Finden Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [zugänglichen Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein Entscheidungsbaum für Alt-Text](https://www.w3.org/WAI/tutorials/images/decision-tree/) heraus.

## Text formatieren

Dieser Abschnitt behandelt einige grundlegende HTML-Elemente, die Sie zum Formatieren von Text verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften – oder Unterüberschriften – sind. Genauso wie ein Buch einen Haupttitel, Kapitelüberschriften und Untertitel hat, kann auch ein HTML-Dokument dies haben. HTML enthält 6 Überschriftsstufen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie in der Regel nur 3 bis 4 verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles zwischen `<!--` und `-->` in HTML ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare, während er den Code rendert. Mit anderen Worten, sie sind nicht auf der Seite sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

Versuchen Sie nun, Ihrer HTML-Seite einen geeigneten Haupttitel direkt über Ihrem {{htmlelement("img")}}-Element hinzuzufügen. Speichern Sie die Datei und sehen Sie sich den Effekt in einem Browser an.

> [!NOTE]
> Sie werden feststellen, dass Ihre Überschriftsebene 1 einen impliziten Stil hat. Verwenden Sie Überschriftselemente nicht, um Text einfach nur größer oder fett zu machen, da sie für [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_well-structured_text_content) und [andere Gründe wie SEO](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure) verwendet werden. Versuchen Sie, auf Ihren Seiten eine sinnvolle Sequenz von Überschriften zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erklärt, dienen {{htmlelement("p")}}-Elemente dazu, Textabsätze zu enthalten; Sie werden sie häufig verwenden, wenn Sie regulären Textinhalt markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einen oder mehrere Absätze direkt unter Ihrem {{htmlelement("img")}} Element hinzu. Speichern Sie es und sehen Sie sich Ihre Seite in einem Browser an.

### Listen

Ein Großteil des Webinhalts besteht aus Listen, und HTML hat spezielle Elemente dafür. Das Markieren von Listen besteht immer aus mindestens zwei Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie z.B. eine Einkaufsliste. Diese sind in einem {{htmlelement("ul")}}-Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie z.B. eine Liste von Kochanweisungen in einem Rezept. Diese sind in einem {{htmlelement("ol")}}-Element eingeschlossen.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}} (Listenelement) gesetzt.

Zum Beispiel, wenn wir aus dem folgenden Absatzfragment eine Liste machen wollten

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup in dieses ändern

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

## Links

Links sind sehr wichtig – sie machen das Web zu einem Netz! Um einen Link hinzuzufügen, benötigen wir ein spezifisches Element – {{htmlelement("a")}} – "a" ist die Kurzform für "anchor". Um Text in Ihrem Absatz in einen Link zu verwandeln, gehen Sie folgendermaßen vor:

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

Es könnten unerwartete Ergebnisse auftreten, wenn Sie den `https://` oder `http://` Teil, das sogenannte _Protokoll_, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin sendet, wo Sie es beabsichtigt haben.

> **Hinweis:** `href` mag anfangs wie eine ziemlich obskure Wahl für einen Attributnamen erscheinen. Wenn Sie Schwierigkeiten haben, es sich zu merken, denken Sie daran, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie Ihrer Seite nun einen Link hinzu, falls Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die in etwa so aussieht wie die unten gezeigte (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite mit einem Firefox-Logo, einer Überschrift "Mozilla ist cool" und zwei Absätzen mit Fülltext](finished-test-page-small.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Sie werden viel mehr in unserem [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
