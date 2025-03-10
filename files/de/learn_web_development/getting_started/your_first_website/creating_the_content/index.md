---
title: "HTML: Erstellen des Inhalts"
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Zum Beispiel könnte der Inhalt in einem Satz von Absätzen strukturiert werden, in einer Liste mit Aufzählungspunkten oder durch die Verwendung von Bildern und Datentabellen. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und dessen Funktionen und zeigt Ihnen, wie Sie den Basisinhalt für Ihre erste Webseite erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computer-Betriebssystems, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und der Dateisysteme.
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

HTML ist eine _Markup-Sprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **{{Glossary("element", "Elementen")}}**, die Sie verwenden, um verschiedene Teile des Inhalts zu umschließen oder zu wickeln, damit sie auf eine bestimmte Weise erscheinen oder agieren. Die umschließenden {{Glossary("tag", "Tags")}} können ein Wort oder Bild zu einem Hyperlink machen, können Wörter kursiv darstellen, die Schriftgröße vergrößern oder verkleinern und so weiter. Nehmen wir zum Beispiel die folgende Zeile Inhalt:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass die Zeile für sich allein steht, könnten wir spezifizieren, dass es sich um einen Absatz handelt, indem wir sie mit Absatz-Tags umschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas genauer erkunden.

![Absatzelement inklusive öffnendem Tag, Inhalt mit der Aufschrift 'my cat is very grumpy' und einem schließenden Tag](grumpy-cat-small.png)

Die Hauptteile unseres Elements sind wie folgt:

1. **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Fall p), eingeschlossen in öffnende und schließende **spitze Klammern**. Dies gibt an, wo das Element beginnt oder zu wirken beginnt — in diesem Fall, wo der Absatz beginnt.
2. **Das schließende Tag:** Dies ist das gleiche wie das öffnende Tag, außer dass es einen _Schrägstrich_ vor dem Elementnamen enthält. Dies gibt an, wo das Element endet — in diesem Fall, wo der Absatz endet. Das Versäumnis, ein schließendes Tag hinzuzufügen, ist einer der typischen Anfängerfehler und kann zu seltsamen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur Text ist.
4. **Das Element:** Das öffnende Tag, das schließende Tag und der Inhalt zusammen bilden das Element.

Elemente können auch Attribute haben, die folgendermaßen aussehen:

![Öffnendes Absatz-Tag mit hervorgehobenem Klasseattribut: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im eigentlichen Inhalt erscheinen sollen. Hier ist `class` der Attribut-_Name_ und `editor-note` ist der Attribut-_Wert_. Das `class`-Attribut ermöglicht es Ihnen, dem Element eine nicht eindeutige Kennung zu geben, die verwendet werden kann, um es (und andere Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen zu versehen. Einige Attribute haben keinen Wert, wie zum Beispiel [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert festlegen, haben immer:

1. Einen Abstand zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, falls das Element bereits eines oder mehrere Attribute hat).
2. Der Attributname gefolgt von einem Gleichheitszeichen.
3. Der Attributwert in öffnende und schließende Anführungszeichen eingeschlossen.

> [!NOTE]
> Einfache Attributwerte, die kein {{Glossary("ASCII", "ASCII")}}-Leerzeichen (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`) enthalten, können unzitiert bleiben. Es wird jedoch empfohlen, alle Attributwerte zu zitieren, da dies den Code konsistenter und verständlicher macht.

### Verschachteln von Elementen

Sie können Elemente auch innerhalb anderer Elemente platzieren — dies nennt man **verschachteln**. Wenn wir angeben wollten, dass unsere Katze **sehr** mürrisch ist, könnten wir das Wort "sehr" in ein {{htmlelement("strong")}}-Element einwickeln, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente richtig verschachtelt sind. Im obigen Beispiel haben wir zuerst das {{htmlelement("p")}}-Element geöffnet und dann das {{htmlelement("strong")}}-Element; daher müssen wir zuerst das {{htmlelement("strong")}}-Element schließen und dann das {{htmlelement("p")}}-Element. Folgendes ist nicht korrekt:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen korrekt geöffnet und geschlossen werden, damit sie klar innerhalb oder außerhalb voneinander sind. Wenn sie sich überlappen, wie oben gezeigt, wird Ihr Webbrowser versuchen zu erraten, was Sie sagen wollten, was zu unerwarteten Ergebnissen führen kann. Also vermeiden Sie es!

### Leerelemente

Einige Elemente haben keinen Inhalt und werden **{{Glossary("void_element", "Leerelemente")}}** genannt. Nehmen wir das {{htmlelement("img")}}-Element, das bereits auf unserer HTML-Seite vorhanden ist:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dies enthält zwei Attribute, aber es gibt kein schließendes `</img>`-Tag und keinen inneren Inhalt. Dies liegt daran, dass ein Bildelement keinen Inhalt umschließt, um ihn zu beeinflussen. Es dient dazu, ein Bild an der Stelle in der HTML-Seite einzubetten, an der es erscheint.

## Erstellen Ihres ersten HTML-Dokuments

Damit sind die Grundlagen einzelner HTML-Elemente erläutert, die jedoch allein nicht sehr nützlich sind. Jetzt schauen wir uns an, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden. Lassen Sie uns eine grundlegende HTML-Datei erstellen und einen Blick darauf werfen, woraus sie besteht:

1. Erstellen Sie innerhalb Ihres `web-projects`-Ordners einen weiteren neuen Ordner namens `first-website`.
2. Erstellen Sie innerhalb von `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau so in die Datei ein:

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

- `<!doctype html>` — Der {{Glossary("Doctype", "Doctype")}} ist ein erforderliches Vorwort. In den Anfängen der Zeit, als HTML jung war (um 1991/92), sollten Doctypes als Links zu einem Satz von Regeln fungieren, denen die HTML-Seite entsprechen musste, um als gutes HTML betrachtet zu werden, was eine automatische Fehlerprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage jedoch tun sie nicht viel und sind im Grunde genommen nur nötig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie fürs Erste wissen müssen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt auf der gesamten Seite und wird manchmal als das Wurzelelement bezeichnet. Es enthält auch das `lang`-Attribut, das die Primärsprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für all die Dinge, die Sie auf der HTML-Seite einbeziehen möchten, die _nicht_ der Inhalt sind, den Sie den Besuchern Ihrer Seite zeigen. Dies umfasst Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in Suchergebnissen erscheinen soll, CSS, um unseren Inhalt zu stylen, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, auf UTF-8, der die meisten Zeichen der überwiegenden Mehrheit der geschriebenen Sprachen enthält. Im Wesentlichen kann es jetzt mit jedem Textinhalt umgehen, den Sie darauf setzen könnten. Es gibt keinen Grund, dies nicht festzulegen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [Viewport-Element](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#mobile_viewports) sorgt dafür, dass die Seite in der Breite des Viewports gerendert wird und verhindert, dass mobile Browser Seiten rendern, die breiter als der Viewport sind, und sie dann schrumpfen.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies setzt den Titel Ihrer Seite, was der Titel ist, der in der Registerkarte des Browsers angezeigt wird, in dem die Seite geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie den Webbenutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer.

## Bilder

Wenden wir uns dem {{htmlelement("img")}}-Element zu:

```html
<img src="" alt="My test image" />
```

Dies bettet ein Bild in unserer Seite an der Position ein, an der es erscheint. Es tut dies über das `src`- (Source) Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (alternatives) Attribut hinzugefügt. Im [`alt`-Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild nicht sehen können, möglicherweise aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Tools namens Screenreader, um ihnen den Alt-Text vorzulesen.
2. Etwas ist schief gelaufen, das verhindert, dass das Bild angezeigt wird. Wenn das `src`-Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alt-Text angezeigt:

![Die Wörter: mein Testbild](alt-text-example.png)

Die Schlüsselwörter für Alt-Text sind "beschreibender Text". Der Alt-Text, den Sie schreiben, sollte dem Leser genügend Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "Mein Testbild" überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein brennender Fuchs, der die Erde umgibt."

> [!NOTE]
> Weitere Informationen zur Barrierefreiheit finden Sie in unserem [Barrierefreiheitsmodul](/de/docs/Learn_web_development/Core/Accessibility).

Lassen Sie uns jetzt Ihr Bild anzeigen.

1. Erstellen Sie innerhalb des `first-website`-Ordners einen neuen Ordner namens `images` und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesem Ordner ab.
2. Geben Sie im Wert des `src`-Attributs des `<img>`-Tags den Pfad zu Ihrem Bild an. Es befindet sich in einem Ordner namens `images`, der sich im selben Verzeichnis wie Ihre `index.html`-Datei befindet. Daher wird der Pfad `images/` plus dem Namen Ihres Bildes sein. Wenn Ihr Bild beispielsweise `firefox-icon.png` heißt, würde Ihr `src`-Attribut so aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den `alt`-Attributwert — `Mein Testbild` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html`-Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>`-Element mit unserem oben stehenden Code; Stellen Sie sicher, dass keine Syntax fehlt, wie z.B. die Anführungszeichen. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

> [!NOTE]
> Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen darüber. Wir werden dieses Problem im nächsten Artikel beheben.
> Erfahren Sie mehr über die Verwendung eines `alt`-Attributs für Bilder in verschiedenen Situationen in unserem [zugänglichen Multimediakurs](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Text markieren

In diesem Abschnitt werden einige wesentliche HTML-Elemente behandelt, die Sie zum Markieren von Text verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften oder Unterüberschriften sind. Genauso wie ein Buch einen Haupttitel, Kapiteltitel und Untertitel hat, kann dies auch ein HTML-Dokument. HTML enthält 6 Überschriftenebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie in der Regel nur 3 bis 4 verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare, wenn er den Code rendert. Mit anderen Worten, sie sind nicht auf der Seite sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

Versuchen Sie jetzt, einen passenden Haupttitel zu Ihrer HTML-Seite direkt über Ihrem {{htmlelement("img")}}-Element hinzuzufügen. Speichern Sie die Datei und sehen Sie sich die Auswirkung in einem Browser an.

> [!NOTE]
> Sie werden sehen, dass Ihre Überschrift der Ebene 1 einen impliziten Stil hat. Verwenden Sie keine Überschriftselemente, um Text größer oder fett zu machen, da sie für [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_content) und [andere Gründe wie SEO](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure) verwendet werden. Versuchen Sie, auf Ihren Seiten eine sinnvolle Reihenfolge von Überschriften zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erklärt, sind {{htmlelement("p")}}-Elemente dazu da, Absätze von Text zu enthalten; Sie werden diese häufig verwenden, wenn Sie regulären Textinhalt markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einem oder mehreren Absätzen ein, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert sind. Speichern Sie es und schauen Sie sich Ihre Seite in einem Browser an.

### Listen

Viele der Webinhalte sind Listen und HTML hat spezielle Elemente dafür. Das Markieren von Listen besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie z.B. eine Einkaufsliste. Diese werden in ein {{htmlelement("ul")}}-Element gewickelt.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie z.B. eine Liste von Kochanleitungen in einem Rezept. Diese werden in ein {{htmlelement("ol")}}-Element gewickelt.

Jedes Element in den Listen wird in ein {{htmlelement("li")}} (Listenelement) Element gesetzt.

Wenn wir beispielsweise möchten, dass der Teil des folgenden Absatzfragments in eine Liste umgewandelt wird,

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

könnten wir das Markup folgendermaßen ändern

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

Links sind sehr wichtig — sie machen das Web zu einem Netz! Um einen Link hinzuzufügen, müssen wir ein bestimmtes Element verwenden — {{htmlelement("a")}} — "a" ist die Kurzform für "anchor". Um Text innerhalb Ihres Absatzes in einen Link umzuwandeln, folgen Sie diesen Schritten:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" ausgewählt.
2. Umwickeln Sie den Text mit einem {{htmlelement("a")}}-Element, wie unten gezeigt:

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

Sie könnten unerwartete Ergebnisse erzielen, wenn Sie den `https://`- oder `http://`-Teil, das _Protokoll_, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie zu dem gewünschten Ort führt.

> **Hinweis:** `href` mag auf den ersten Blick wie eine eher obskure Wahl für einen Attributnamen erscheinen. Wenn Sie Schwierigkeiten haben, sich daran zu erinnern, denken Sie daran, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie nun einen Link zu Ihrer Seite hinzu, wenn Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie am Ende mit einer Seite dastehen, die wie die unten abgebildete aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite mit einem Firefox-Logo, einer Überschrift "Mozilla is cool", und zwei Absätzen mit Fülltext](finished-test-page-small.png)

Wenn Sie stecken bleiben, können Sie immer Ihre Arbeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur die Oberfläche von HTML angekratzt. Sie werden in unserem [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Kernmodul noch viel mehr lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
