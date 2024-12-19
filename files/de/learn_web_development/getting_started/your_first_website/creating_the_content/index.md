---
title: "HTML: Erstellen des Inhalts"
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Beispielsweise könnte der Inhalt in eine Reihe von Absätzen, eine Liste von Aufzählungspunkten oder mithilfe von Bildern und Datentabellen strukturiert werden. Dieser Artikel bietet ein grundlegendes Verständnis von HTML und seinen Funktionen und zeigt Ihnen, wie Sie den grundlegenden Inhalt für Ihre erste Website erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis Ihres Computer-Betriebssystems, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und der Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von HTML.</li>
          <li>Die grundlegenden Teile der HTML-Syntax — öffnende und schließende Tags, Elemente, Attribute, Kopf, Körper.</li>
          <li>Häufige HTML-Elemente einschließlich Absätzen, Überschriften, Bildern, Listen und Links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also HTML?

HTML ist eine _Auszeichnungssprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **{{Glossary("element", "Elementen")}}**, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen oder zu umwickeln, damit er auf eine bestimmte Weise erscheint oder sich auf eine bestimmte Weise verhält. Die umschließenden {{Glossary("tag", "Tags")}} können ein Wort oder Bild als Hyperlink zu einem anderen Ort machen, Wörter kursiv setzen, die Schriftgröße vergrößern oder verkleinern usw. Nehmen Sie beispielsweise die folgende Zeile von Inhalt:

```plain
My cat is very grumpy
```

Wenn wir wollen, dass die Zeile für sich alleine steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in Absatz-Tags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas näher betrachten.

![Absatz-Element mit Öffnungstag, Inhalt, der 'mein Kater ist sehr mürrisch' liest, und einem Schlusstag](grumpy-cat-small.png)

Die Hauptteile unseres Elements sind wie folgt:

1. **Das Öffnungstag:** Dies besteht aus dem Namen des Elements (in diesem Fall p), umschlossen von öffnenden und schließenden **spitzen Klammern**. Dies gibt an, wo das Element beginnt oder Wirkung zeigt – in diesem Fall, wo der Absatz beginnt.
2. **Das Schlusstag:** Dies ist dasselbe wie das Öffnungstag, außer dass es einen _Schrägstrich_ vor dem Elementnamen enthält. Dies gibt an, wo das Element endet – in diesem Fall, wo der Absatz endet. Das Versäumnis, ein Schlusstag hinzuzufügen, ist einer der häufigen Anfängerfehler und kann zu merkwürdigen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur Text ist.
4. **Das Element:** Das Öffnungstag, das Schlusstag und der Inhalt zusammen bilden das Element.

Elemente können auch Attribute haben, die folgendermaßen aussehen:

![Absatz Öffnungstag mit einem hervorgehobenen Klassenattribut: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im eigentlichen Inhalt erscheinen sollen. Hier ist `class` der Attribut_name_ und `editor-note` der Attribut_wert_. Das `class` Attribut ermöglicht es Ihnen, dem Element eine nicht eindeutige Kennung zu geben, die verwendet werden kann, um es (und alle anderen Elemente mit demselben `class` Wert) mit Stilinformationen und anderem zu versehen.
Einige Attribute haben keinen Wert, wie z.B. [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert setzen, haben immer:

1. Ein Leerzeichen zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn das Element bereits eines oder mehrere Attribute hat).
2. Den Attributnamen gefolgt von einem Gleichheitszeichen.
3. Den Attributwert eingeschlossen von öffnenden und schließenden Anführungszeichen.

> [!NOTE]
> Einfache Attributwerte, die keine {{Glossary("ASCII", "ASCII")}} Leerzeichen (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`) enthalten, können unverändert bleiben, aber es wird empfohlen, alle Attributwerte zu zitieren, da dies den Code konsistenter und verständlicher macht.

### Elemente verschachteln

Sie können auch Elemente innerhalb anderer Elemente platzieren – dies wird als **Verschachtelung** bezeichnet. Wenn wir sagen wollten, dass unser Kater **sehr** mürrisch ist, könnten wir das Wort "sehr" in ein {{htmlelement("strong")}} Element einbinden, was bedeutet, dass das Wort stark betont wird:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente richtig verschachtelt sind. Im obigen Beispiel haben wir das {{htmlelement("p")}} Element zuerst geöffnet, dann das {{htmlelement("strong")}} Element; daher müssen wir das {{htmlelement("strong")}} Element zuerst schließen, dann das {{htmlelement("p")}} Element. Das Folgende ist falsch:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen korrekt geöffnet und geschlossen sein, so dass sie eindeutig ineinander oder außerhalb voneinander liegen. Wenn sie sich überlappen, wie oben gezeigt, versucht Ihr Webbrowser, die beste Vermutung zu machen, was Sie sagen wollten, was zu unerwarteten Ergebnissen führen kann. Also tun Sie es nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden als **{{Glossary("void_element", "void elements")}}** bezeichnet. Nehmen wir das {{htmlelement("img")}} Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dies enthält zwei Attribute, aber es gibt kein schließendes `</img>` Tag und keinen inneren Inhalt. Das liegt daran, dass ein Bildelement keinen Inhalt umschließt, um ihn zu beeinflussen. Sein Zweck ist es, ein Bild in der HTML-Seite an der Stelle einzubetten, an der es erscheint.

## Erstellen Ihres ersten HTML-Dokuments

Damit haben wir die Grundlagen einzelner HTML-Elemente abgedeckt, aber sie sind alleine nicht sehr nützlich. Jetzt schauen wir uns an, wie einzelne Elemente kombiniert werden können, um eine komplette HTML-Seite zu bilden. Lassen Sie uns eine einfache HTML-Datei erstellen und sehen, woraus sie besteht:

1. Erstellen Sie in Ihrem `web-projects` Ordner einen weiteren neuen Ordner namens `first-website`.
2. Erstellen Sie in `first-website` eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau so ein, wie er gezeigt wird:

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

- `<!doctype html>` — Der {{Glossary("Doctype", "doctype")}} ist ein erforderliches Vorwort. In der frühen Zeit, als HTML jung war (etwa 1991/92), sollten Doctypes als Links zu einer Reihe von Regeln dienen, die die HTML-Seite befolgen musste, um als gutes HTML angesehen zu werden, was automatische Fehlerprüfung und andere nützliche Dinge bedeuten könnte. Heutzutage tun sie jedoch nicht viel und sind im Wesentlichen nur nötig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie jetzt wissen müssen.
- `<html></html>` — das {{htmlelement("html")}} Element. Dieses Element umschließt den gesamten Inhalt der gesamten Seite und ist manchmal als Wurzelelement bekannt. Es beinhaltet auch das `lang` Attribut, das die Hauptsprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}} Element. Dieses Element fungiert als Container für alle Dinge, die Sie in die HTML-Seite aufnehmen möchten, die _nicht_ der Inhalt sind, den Sie den Besuchern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in Suchergebnissen erscheinen soll, CSS zur Gestaltung unseres Inhalts, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, auf UTF-8 fest, welcher die meisten Zeichen der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es jetzt jeglichen Textinhalt verarbeiten, den Sie darauf setzen könnten. Es gibt keinen Grund, dies nicht festzulegen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [Viewport-Element](/de/docs/Web/CSS/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Viewports gerendert wird, um zu verhindern, dass mobile Browser Seiten breiter als den Viewport rendern und sie dann verkleinern.
- `<title></title>` — das {{htmlelement("title")}} Element. Dies legt den Titel Ihrer Seite fest, der in dem Browser-Tab erscheint, auf dem die Seite geladen ist. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit markieren.
- `<body></body>` — das {{htmlelement("body")}} Element. Dies enthält _alle_ Inhalte, die Sie den Webbenutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer.

## Bilder

Richten wir unsere Aufmerksamkeit auf das {{htmlelement("img")}} Element:

```html
<img src="" alt="My test image" />
```

Dieses bettet ein Bild in unsere Seite an der Stelle ein, an der es erscheint. Es tut dies über das `src` (source) Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (alternativ) Attribut eingefügt. Im [`alt` Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions), geben Sie beschreibenden Text für Benutzer an, die das Bild nicht sehen können, möglicherweise aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden häufig Werkzeuge, die sogenannten Screenreader, um ihnen den Alt-Text vorzulesen.
2. Etwas ist schiefgelaufen, weshalb das Bild nicht angezeigt wird. Wenn das `src` Attribut keinen gültigen Pfad zu einem Bild enthält, wird stattdessen der Alt-Text angezeigt:

![Die Worte: my test image](alt-text-example.png)

Die Schlüsselwörter für Alt-Text sind "beschreibender Text". Der von Ihnen geschriebene Alt-Text sollte dem Leser ausreichend Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild darstellt. In diesem Beispiel ist unser jetziger Text von "Mein Testbild" überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein brennender Fuchs um die Erde."

> [!NOTE]
> Erfahren Sie mehr über Barrierefreiheit in unserem [Lernmodul für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility).

Lassen Sie uns nun Ihr Bild anzeigen.

1. Erstellen Sie im `first-website` Ordner einen neuen Ordner namens `images`, und legen Sie das Bild, das Sie im vorherigen Beispiel ausgewählt haben, in diesem Ordner ab.
2. Geben Sie im `alt` Attributwert des `<img>` Tags den Pfad zu Ihrem Bild an. Es befindet sich in einem Ordner namens `images`, der sich im selben Verzeichnis wie Ihre `index.html` Datei befindet, daher wird der Pfad `images/` plus den Namen Ihres Bildes sein. Zum Beispiel, wenn Ihr Bild `firefox-icon.png` hieß, würde Ihr `src` Attribut folgendermaßen aussehen: `src="images/firefox-icon.png"`.
3. Ersetzen Sie den Wert des `alt` Attributs — `My test image` — durch einen Text, der Ihr Bild besser beschreibt.
4. Öffnen Sie Ihre `index.html` Datei in einem Webbrowser. Sie sollten Ihr Bild angezeigt sehen. Wenn nicht, überprüfen Sie Ihr `<img>` Element mit unserem oben genannten Code; stellen Sie sicher, dass keine der Syntax fehlt, wie die Anführungszeichen. Stellen Sie sicher, dass der Bilddateiname korrekt ist.

> [!NOTE]
> Wenn das Bild wirklich groß ist und daher nicht auf den Bildschirm passt, machen Sie sich keine Sorgen darum. Wir werden dieses Problem im nächsten Artikel beheben.
> Erfahren Sie mehr über die Verwendung eines `alt` Attributs für Bilder in verschiedenen Situationen in unserem [zugänglichen Multimedia-Tutorial](/de/docs/Learn_web_development/Core/Accessibility/Multimedia) und [Ein alt Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Text markieren

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zum Markieren von Text verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen zu spezifizieren, dass bestimmte Teile Ihres Inhalts Überschriften — oder Unterüberschriften — sind. Auf die gleiche Weise, wie ein Buch den Haupttitel, Kapiteltitel und Untertitel hat, kann es ein HTML-Dokument auch. HTML enthält 6 Überschriftsebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie in der Regel nur 3 bis 4 verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. Mit anderen Worten, sie sind nicht auf der Seite sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

Versuchen Sie nun, Ihrer HTML-Seite eine geeignete Hauptüberschrift direkt über Ihrem {{htmlelement("img")}} Element hinzuzufügen. Speichern Sie die Datei und betrachten Sie den Effekt in einem Browser.

> [!NOTE]
> Sie werden sehen, dass Ihre Überschriftsebene 1 einen impliziten Stil hat. Verwenden Sie keine Überschriftselemente, um Text größer oder fett zu machen, weil sie für [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_content) und [andere Gründe wie SEO](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure) verwendet werden. Versuchen Sie, eine sinnvolle Folge von Überschriften auf Ihren Seiten zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erläutert, sind {{htmlelement("p")}} Elemente für das enthalten von Absätzen von Text; Sie werden diese häufig verwenden, wenn Sie regulären Textinhalt markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext aus dem vorherigen Artikel in einem oder mehreren Absätzen ein, die direkt unter Ihrem {{htmlelement("img")}} Element platziert werden. Speichern Sie es und sehen Sie sich Ihre Seite in einem Browser an.

### Listen

Ein Großteil des Inhalts im Internet sind Listen und HTML hat spezielle Elemente dafür. Listen zu markieren, besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie eine Einkaufsliste. Diese werden in einem {{htmlelement("ul")}} Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie eine Liste von Kochanweisungen in einem Rezept. Diese werden in einem {{htmlelement("ol")}} Element eingeschlossen.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}} (Listenelement) Element gesetzt.

Wenn wir zum Beispiel den folgenden Absatzabschnitt in eine Liste umwandeln wollten

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup folgendermaßen ändern

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Versuchen Sie, Ihrer Beispielseite eine geordnete oder ungeordnete Liste hinzuzufügen, und sehen Sie sich das Ergebnis in einem Browser an.

## Links

Links sind sehr wichtig — sie machen das Web überhaupt erst zum Netz! Um einen Link hinzuzufügen, müssen wir ein bestimmtes Element verwenden — {{htmlelement("a")}} — "a" steht für "anchor"/Anker. Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, befolgen Sie diese Schritte:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" gewählt.
2. Umschließen Sie den Text mit einem {{htmlelement("a")}} Element, wie unten gezeigt:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Geben Sie dem {{htmlelement("a")}} Element ein `href` Attribut, wie unten gezeigt:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Füllen您 den Wert dieses Attributs mit der Webadresse aus, auf die der Link verweisen soll:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Es können unerwartete Ergebnisse auftreten, wenn Sie den `https://` oder `http://` Teil, genannt _Protokoll_, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie an den gewünschten Ort führt.

> **Anmerkung:** `href` mag zunächst wie eine recht obskure Wahl für einen Attributnamen erscheinen. Wenn Sie Schwierigkeiten haben können, sich daran zu erinnern, denken Sie daran, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie nun einen Link zu Ihrer Seite hinzu, falls Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die aussieht wie die untenstehende (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, die ein Firefox-Logo zeigt, eine Überschrift, die Mozilla ist cool sagt, und zwei Absätze mit Fülltext](finished-test-page-small.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit immer mit unserem [abgeschlossenen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir wirklich nur die Oberfläche von HTML angekratzt. Sie werden viel mehr in unserem [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Core-Modul lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
