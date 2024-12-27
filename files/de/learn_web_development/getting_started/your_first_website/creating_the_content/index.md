---
title: "HTML: Erstellen der Inhalte"
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: adc6269e8968d43e9571a560f0f452ffd0ea17c1
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalte zu strukturieren. Zum Beispiel könnte Inhalt innerhalb eines Satzes von Absätzen, einer Liste von Aufzählungspunkten oder mit Bildern und Datentabellen strukturiert werden. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und dessen Funktionen und zeigt Ihnen, wie Sie die grundlegenden Inhalte für Ihre erste Website erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax — öffnende und schließende Tags, Elemente, Attribute, Kopf und Körper.</li>
          <li>Allgemeine HTML-Elemente einschließlich Absätzen, Überschriften, Bildern, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also HTML?

HTML ist eine _Markup-Sprache_, die die Struktur Ihrer Inhalte definiert. HTML besteht aus einer Reihe von **{{Glossary("element", "Elementen")}}**, die Sie verwenden, um verschiedene Teile des Inhalts zu umschließen oder zu umwickeln, damit sie auf eine bestimmte Weise erscheinen oder sich auf eine bestimmte Weise verhalten. Die umschließenden {{Glossary("tag", "Tags")}} können ein Wort oder Bild zu einem Hyperlink machen, Worte kursiv darstellen, die Schriftgröße vergrößern oder verkleinern usw. Zum Beispiel, sehen Sie sich die folgende Textzeile an:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass die Zeile für sich allein steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir sie in Absatz-Tags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas genauer betrachten.

![Absatz-Element mit Öffnungs-Tag, Inhalt, der 'my cat is very grumpy' liest, und ein schließendes Tag](grumpy-cat-small.png)

Die Hauptbestandteile unseres Elements sind wie folgt:

1. **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Fall p), eingeschlossen in öffnenden und schließenden **spitzen Klammern**. Dies gibt an, wo das Element beginnt oder wirksam wird — in diesem Fall, wo der Absatz beginnt.
2. **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, außer dass es einen _Schrägstrich_ vor dem Elementnamen enthält. Dies gibt an, wo das Element endet — in diesem Fall, wo der Absatz endet. Das Hinzufügen eines schließenden Tags zu vergessen, ist einer der häufigsten Anfängerfehler und kann zu seltsamen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur Text ist.
4. **Das Element:** Das öffnende Tag, das schließende Tag und der Inhalt zusammen bilden das Element.

Elemente können auch Attribute haben, die wie folgt aussehen:

![Absatzöffnungstag mit einem hervorgehobenen class-Attribut: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die Sie nicht im tatsächlichen Inhalt erscheinen lassen möchten. Hier ist `class` der Attribut-_name_ und `editor-note` der Attribut-_wert_. Das `class`-Attribut ermöglicht es Ihnen, dem Element eine nicht eindeutige Kennung zu geben, die verwendet werden kann, um es (und alle anderen Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen anzusprechen.
Einige Attribute haben keinen Wert, wie beispielsweise [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert setzen, haben immer:

1. Ein Leerzeichen zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, falls das Element schon eins oder mehrere Attribute hat).
2. Den Attributnamen gefolgt von einem Gleichheitszeichen.
3. Den Attributwert, eingeschlossen in öffnende und schließende Anführungszeichen.

> [!NOTE]
> Einfache Attributwerte, die keine {{Glossary("ASCII", "ASCII")}}-Leerzeichen (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`) enthalten, können unverzackt bleiben, aber es wird empfohlen, dass Sie alle Attributwerte zitieren, da dies den Code konsistenter und verständlicher macht.

### Verschachtelung von Elementen

Sie können auch Elemente innerhalb anderer Elemente platzieren — das nennt man **Verschachtelung**. Wenn wir sagen wollten, dass unsere Katze **sehr** griesgrämig ist, könnten wir das Wort "sehr" in einem {{htmlelement("strong")}}-Element umwickeln, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente richtig verschachtelt sind. Im obigen Beispiel haben wir zuerst das {{htmlelement("p")}}-Element geöffnet, dann das {{htmlelement("strong")}}-Element; daher müssen wir das {{htmlelement("strong")}}-Element zuerst schließen, dann das {{htmlelement("p")}}-Element. Das Folgende ist falsch:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen korrekt geöffnet und geschlossen werden, damit sie eindeutig innerhalb oder außerhalb voneinander sind. Wenn sie sich wie oben gezeigt überlappen, wird Ihr Webbrowser versuchen, die beste Vermutung darüber zu machen, was Sie sagen wollten, was zu unerwarteten Ergebnissen führen kann. Also, machen Sie es nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden **{{Glossary("void_element", "leere Elemente")}}** genannt. Nehmen wir das {{htmlelement("img")}}-Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dies enthält zwei Attribute, aber es gibt kein schließendes `</img>`-Tag und keinen inneren Inhalt. Das liegt daran, dass ein Bildelement keine Inhalte umhüllt, um sie zu beeinflussen. Sein Zweck ist es, ein Bild an der Stelle, an der es erscheint, in der HTML-Seite einzubetten.

## Erstellen Ihres ersten HTML-Dokuments

Damit haben wir die Grundlagen einzelner HTML-Elemente abgeschlossen, aber sie sind nicht sehr nützlich für sich allein. Jetzt schauen wir uns an, wie einzelne Elemente kombiniert werden, um eine vollständige HTML-Seite zu formen. Lassen Sie uns eine grundlegende HTML-Datei erstellen und schauen, woraus sie besteht:

1. Erstellen Sie innerhalb Ihres `web-projects`-Ordners einen weiteren neuen Ordner namens `first-website`.
2. Erstellen Sie innerhalb von `first-website` eine neue Datei namens `index.html`, und fügen Sie den folgenden Code exakt so ein, wie er angezeigt wird:

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

- `<!doctype html>` — Der {{Glossary("Doctype", "doctype")}} ist eine erforderliche Präambel. In grauer Vorzeit, als HTML noch jung war (um 1991/92), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML betrachtet zu werden, was eine automatische Fehlerprüfung und andere nützliche Dinge bedeuten könnte. Heutzutage tun sie jedoch nicht viel und sind im Wesentlichen nur erforderlich, um sicherzustellen, dass Ihr Dokument sich korrekt verhält. Das ist alles, was Sie für jetzt wissen müssen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element umschließt alle Inhalte auf der gesamten Seite und wird manchmal als Wurzelelement bezeichnet. Es enthält auch das `lang`-Attribut, das die Hauptsprache des Dokuments einstellt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element wirkt als ein Container für all die Dinge, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie Ihren Seitenbesuchern zeigen. Dies umfasst Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die Sie in Suchergebnissen anzeigen möchten, CSS um unseren Inhalt zu stilisieren, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element setzt den Zeichensatz, den Ihr Dokument verwenden sollte, auf UTF-8, das die meisten Zeichen der überwiegenden Mehrheit geschriebener Sprachen einschließt. Im Wesentlichen kann es jetzt jeden Textinhalt verarbeiten, den Sie darauf setzen könnten. Es gibt keinen Grund, dies nicht einzustellen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [Viewport-Element](/de/docs/Web/CSS/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite bei der Breite des Viewports gerendert wird und verhindert, dass mobile Browser Seiten breiter als der Viewport rendern und dann schrumpfen.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies setzt den Titel Ihrer Seite, welcher der Titel ist, der im Browsertab geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder irgendetwas anderes.

## Bilder

Wenden wir uns dem {{htmlelement("img")}}-Element zu:

```html
<img src="" alt="My test image" />
```

Dieses bettet ein Bild in unsere Seite an der Stelle ein, an der es erscheint. Es tut dies über das `src` (source)-Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (alternativ)-Attribut enthalten. Im [`alt` Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions), geben Sie beschreibenden Text für Benutzer an, die das Bild möglicherweise nicht sehen können, möglicherweise aus den folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden häufig Werkzeuge namens Screen Reader, um ihnen den alt-Text vorzulesen.
2. Irgendetwas ist schief gelaufen, was dazu führt, dass das Bild nicht angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der alt-Text angezeigt:

![Die Worte: mein Testbild](alt-text-example.png)

Die Schlüsselwörter für alt-Text sind "beschreibender Text". Der von Ihnen geschriebene alt-Text sollte dem Leser genügend Informationen liefern, um eine gute Vorstellung davon zu bekommen, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "Mein Testbild" gar nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein brennender Fuchs, der die Erde umgibt."

> [!NOTE]
> Erfahren Sie mehr über Barrierefreiheit in unserem [Lernmodul zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility).

Lassen Sie jetzt Ihr Bild anzeigen.

1. Erstellen Sie innerhalb des Ordners `first-website` einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesen Ordner.
2. Geben Sie im Wert des `src`-Attributs des `<img>`-Tags den Pfad zu Ihrem Bild ein. Es befindet sich in einem Ordner namens `images`, der sich im selben Verzeichnis wie Ihre `index.html`-Datei befindet, daher wird der Pfad `images/` plus der Name Ihres Bildes sein. Zum Beispiel, wenn Ihr Bild `firefox-icon.png` heißt, würde Ihr `src`-Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt`-Attributs — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html`-Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element gegen unseren obigen Code; stellen Sie sicher, dass keine Syntax, wie die Anführungszeichen, fehlt. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

> [!NOTE]
> Wenn das Bild sehr groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen darüber. Wir werden dieses Problem im nächsten Artikel beheben.
> Erfahren Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [Leitfaden für barrierefreie Multimedia-Inhalte](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und dem [Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Text markieren

Dieser Abschnitt wird einige wesentliche HTML-Elemente behandeln, die Sie zum Markieren von Text verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften oder Unterüberschriften sind. So wie ein Buch den Haupttitel, Kapitelüberschriften und Untertitel hat, kann ein HTML-Dokument auch. HTML enthält 6 Überschriftsebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie üblicherweise nur 3 bis 4 davon verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

Versuchen Sie nun, einen passenden Haupttitel zu Ihrer HTML-Seite direkt über Ihrem {{htmlelement("img")}}-Element hinzuzufügen. Speichern Sie die Datei und sehen Sie sich den Effekt in einem Browser an.

> [!NOTE]
> Sie werden sehen, dass Ihre Überschriftsebene 1 einen impliziten Stil hat. Verwenden Sie keine Überschriftselemente, um Text größer oder fett zu machen, da sie für [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_content) und [andere Gründe wie SEO](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure) verwendet werden. Versuchen Sie, eine sinnvolle Reihenfolge von Überschriften auf Ihren Seiten zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erklärt, sind {{htmlelement("p")}}-Elemente dazu da, Textabsätze zu enthalten; Sie werden diese häufig verwenden, wenn Sie normalen Textinhalt markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einem oder mehreren Absätzen direkt unter Ihrem {{htmlelement("img")}}-Element hinzu. Speichern Sie es und schauen Sie sich Ihre Seite in einem Browser an.

### Listen

Ein großer Teil der Webinhalte sind Listen und HTML hat spezielle Elemente dafür. Um Listen zu markieren, sind immer mindestens 2 Elemente erforderlich. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente nicht wichtig ist, wie z.B. eine Einkaufsliste. Diese sind in ein {{htmlelement("ul")}}-Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie z.B. eine Liste von Kochanweisungen in einem Rezept. Diese sind in ein {{htmlelement("ol")}}-Element eingeschlossen.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}} (Listenelement) eingeschlossen.

Wenn wir zum Beispiel den Teil des folgenden Absatzfragments in eine Liste umwandeln wollten

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup zu diesem ändern

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Versuchen Sie, eine geordnete oder ungeordnete Liste zu Ihrer Beispielseite hinzuzufügen, und sehen Sie sich das Ergebnis in einem Browser an.

## Links

Links sind sehr wichtig — sie machen das Web zu einem Netz! Um einen Link hinzuzufügen, müssen wir ein bestimmtes Element verwenden — {{htmlelement("a")}} — "a" ist die Abkürzung für "anchor". Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, führen Sie die folgenden Schritte aus:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" gewählt.
2. Wickeln Sie den Text in ein {{htmlelement("a")}}-Element, wie unten gezeigt:

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

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den Teil `https://` oder `http://` weglassen, genannt das _Protokoll_, am Anfang der Webadresse. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin sendet, wo Sie hinwollten.

> **Hinweis:** `href` könnte auf den ersten Blick als eine etwas obskure Wahl für einen Attributnamen erscheinen. Wenn Sie Schwierigkeiten haben, es sich zu merken, denken Sie daran, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, falls Sie dies nicht bereits getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die wie die unten stehende aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite zeigt ein Firefox-Logo, eine Überschrift, die Mozilla cool nennt, und zwei Absätze von Fülltext](finished-test-page-small.png)

Wenn Sie feststecken, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir wirklich nur an der Oberfläche von HTML gekratzt. Sie werden viel mehr in unserem [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
