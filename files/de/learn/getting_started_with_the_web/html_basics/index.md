---
title: HTML-Grundlagen
slug: Learn/Getting_started_with_the_web/HTML_basics
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Der Inhalt kann beispielsweise in einer Reihe von Absätzen, einer Liste mit Aufzählungspunkten oder mithilfe von Bildern und Datentabellen strukturiert werden. Wie der Titel andeutet, wird Ihnen dieser Artikel ein Grundverständnis von HTML und seinen Funktionen vermitteln.

## Was ist HTML?

HTML ist eine _Markup-Sprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **{{Glossary("element", "Elementen")}}**, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen oder zu umschließen, damit er auf eine bestimmte Weise erscheint oder sich auf eine bestimmte Weise verhält. Die umschließenden {{Glossary("tag", "Tags")}} können ein Wort oder Bild zu einem Hyperlink machen, Wörter kursiv darstellen, die Schrift größer oder kleiner machen und so weiter. Betrachten Sie zum Beispiel die folgende Zeile Inhalt:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass die Zeile für sich steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir sie in Absatz-Tags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas genauer untersuchen.

![Paragraph-Element mit öffnendem Tag, Inhalt "my cat is very grumpy" und einem schließenden Tag](grumpy-cat-small.png)

Die Hauptbestandteile unseres Elements sind wie folgt:

1. **Der öffnende Tag:** Dieser besteht aus dem Namen des Elements (in diesem Fall p), umschlossen von öffnenden und schließenden **spitzen Klammern**. Dies gibt an, wo das Element beginnt oder zu wirken beginnt – in diesem Fall, wo der Absatz beginnt.
2. **Der schließende Tag:** Dies ist dasselbe wie der öffnende Tag, außer dass er einen _Schrägstrich_ vor dem Elementnamen enthält. Dies gibt an, wo das Element endet – in diesem Fall, wo der Absatz endet. Das Versäumnis, einen schließenden Tag hinzuzufügen, ist einer der häufigsten Anfängerfehler und kann zu seltsamen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur Text ist.
4. **Das Element:** Der öffnende Tag, der schließende Tag und der Inhalt zusammen bilden das Element.

Elemente können auch Attribute haben, die wie folgt aussehen:

![Absatz-öffnendes Tag mit hervorgehobenem Klassenattribut: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im eigentlichen Inhalt erscheinen sollen. Hier ist `class` der Attribut-_Name_ und `editor-note` der Attribut-_Wert_. Das `class`-Attribut ermöglicht es Ihnen, dem Element eine nicht einzigartige Identifikation zu geben, die verwendet werden kann, um es (und alle anderen Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen anzusprechen. Einige Attribute haben keinen Wert, wie zum Beispiel [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert setzen, haben immer:

1. Ein Leerzeichen zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn das Element bereits ein oder mehrere Attribute hat).
2. Den Attributnamen gefolgt von einem Gleichheitszeichen.
3. Den Attributwert, umschlossen von öffnenden und schließenden Anführungszeichen.

> [!NOTE]
> Einfache Attributwerte, die keine {{Glossary("ASCII")}}-Leerzeichen (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`) enthalten, können unzitiert bleiben, aber es wird empfohlen, alle Attributwerte zu zitieren, da dies den Code konsistenter und verständlicher macht.

### Verschachtelte Elemente

Sie können Elemente auch in andere Elemente einfügen – das wird als **Verschachtelung** bezeichnet. Wenn wir ausdrücken wollen, dass unsere Katze **sehr** grummelig ist, könnten wir das Wort „sehr“ in ein {{htmlelement("strong")}}-Element einwickeln, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente korrekt verschachtelt sind. Im obigen Beispiel haben wir das {{htmlelement("p")}}-Element zuerst geöffnet, dann das {{htmlelement("strong")}}-Element; daher müssen wir das {{htmlelement("strong")}}-Element zuerst schließen, dann das {{htmlelement("p")}}-Element. Das folgende Beispiel ist falsch:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen korrekt geöffnet und geschlossen werden, sodass sie eindeutig innerhalb oder außerhalb voneinander liegen. Wenn sie sich wie oben gezeigt überlappen, wird Ihr Webbrowser versuchen zu erraten, was Sie ausdrücken wollten, was zu unerwarteten Ergebnissen führen kann. Also tun Sie es nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden **{{glossary("void element", "leere Elemente")}}** genannt. Nehmen Sie das {{htmlelement("img")}}-Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dieses enthält zwei Attribute, aber es gibt kein schließendes `</img>`-Tag und keinen inneren Inhalt. Das liegt daran, dass ein Bildelement keinen Inhalt umschließt, um ihn zu beeinflussen. Seine Aufgabe ist es, ein Bild an der Position, an der es erscheint, in die HTML-Seite einzubetten.

### Anatomie eines HTML-Dokuments

Das fasst die Grundlagen der einzelnen HTML-Elemente zusammen, aber sie sind allein nicht nützlich. Schauen wir uns nun an, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden. Lassen Sie uns den Code, den wir in unserem `index.html`-Beispiel eingefügt haben (den wir erstmals im Artikel [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) kennengelernt haben), noch einmal ansehen:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>
```

Hier haben wir Folgendes:

- `<!doctype html>` — [doctype](/de/docs/Glossary/Doctype). Es ist ein erforderliches Präludium. In den frühen Tagen von HTML (ca. 1991/92) sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen die HTML-Seite folgen musste, um als guter HTML-Code angesehen zu werden, was eine automatische Fehlerüberprüfung und andere nützliche Dinge bedeuten könnte. Heutzutage machen sie jedoch nicht mehr viel und sind im Wesentlichen nur notwendig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Mehr müssen Sie dazu vorerst nicht wissen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt der gesamten Seite und wird manchmal als Root-Element bezeichnet. Es enthält auch das `lang`-Attribut, das die Hauptsprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element dient als Container für alles, was Sie auf der HTML-Seite einschließen möchten und _nicht_ der Inhalt ist, den Sie den Besuchern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen soll, CSS zum Stylen unseres Inhalts, Zeichensatzdeklarationen und vieles mehr.
- `<meta charset="utf-8">` — Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, und zwar auf UTF-8, das die meisten Zeichen der überwiegenden Mehrheit der Schriftsysteme umfasst. Im Wesentlichen kann es jetzt jeden Textinhalt, den Sie darauf schreiben könnten, handhaben. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [Viewport-Element](/de/docs/Web/CSS/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Viewports gerendert wird und verhindert, dass mobile Browser Seiten breiter als der Viewport rendern und sie dann verkleinern.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies legt den Titel Ihrer Seite fest, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie den Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer.

## Bilder

Widmen wir uns erneut dem {{htmlelement("img")}}-Element:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Wie bereits erwähnt, bettet es ein Bild in unsere Seite an der Position ein, an der es erscheint. Es tut dies über das `src` (source) Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (alternativ) Attribut aufgenommen. Im [`alt` Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild möglicherweise nicht sehen können, zum Beispiel aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden häufig Hilfsmittel, sogenannte Screenreader, um den alternativen Text vorzulesen.
2. Es ist etwas schiefgelaufen, das Bild wird nicht angezeigt. Ändern Sie beispielsweise absichtlich den Pfad in Ihrem `src` Attribut, um ihn falsch zu machen. Wenn Sie die Seite speichern und neu laden, sollten Sie anstelle des Bildes etwas wie dies sehen:

![Die Worte: mein Testbild](alt-text-example.png)

Die Schlüsselwörter für alternativen Text sind „beschreibender Text“. Der alternative Text, den Sie schreiben, sollte dem Leser genügend Informationen liefern, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text „Mein Testbild“ überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre „Das Firefox-Logo: ein flammender Fuchs umgibt die Erde“.

Versuchen Sie nun, einen besseren alternativen Text für Ihr Bild zu finden.

> [!NOTE]
> Erfahren Sie mehr über Barrierefreiheit in unserem [Barrierefreiheitslernmodul](/de/docs/Learn/Accessibility).

## Text markiert

In diesem Abschnitt werden einige wesentliche HTML-Elemente behandelt, die Sie zum Markieren von Text verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, bestimmte Teile Ihres Inhalts als Überschriften oder Unterüberschriften zu kennzeichnen. Genauso wie ein Buch einen Haupttitel, Kapitelüberschriften und Untertitel hat, kann dies auch ein HTML-Dokument tun. HTML enthält 6 Überschriftenebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie normalerweise nur 3 bis 4 verwenden:

```html
<!-- 4 Überniveauebenen: -->
<h1>Mein Haupttitel</h1>
<h2>Meine Top-Level-Überschrift</h2>
<h3>Meine Unterüberschrift</h3>
<h4>Meine Unterunterüberschrift</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare, wenn er den Code rendert. Mit anderen Worten, sie sind nicht auf der Seite sichtbar – nur im Code. HTML-Kommentare sind eine Möglichkeit, nützliche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

Versuchen Sie nun, Ihrer HTML-Seite einen passenden Titel hinzuzufügen, direkt über Ihrem {{htmlelement("img")}}-Element.

> [!NOTE]
> Sie werden feststellen, dass Ihre Überschriftsebene 1 einen impliziten Stil hat. Verwenden Sie keine Überschriftselemente, um Text größer oder fett zu machen, da sie für [Barrierefreiheit](/de/docs/Learn/Accessibility/HTML#text_content) und [andere Gründe wie SEO](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure) verwendet werden. Versuchen Sie, eine sinnvolle Reihenfolge von Überschriften auf Ihren Seiten zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erklärt, sind {{htmlelement("p")}}-Elemente dazu da, Absätze von Text zu enthalten; Sie werden diese häufig verwenden, wenn Sie normalen Textinhalt markieren:

```html
<p>Dies ist ein einzelner Absatz</p>
```

Fügen Sie Ihren Beispieltext (den Sie aus [_Wie wird Ihre Website aussehen?_](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) haben sollten) in einen oder mehrere Absätze ein, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert sind.

### Listen

Ein Großteil des Inhalts im Web besteht aus Listen, und HTML hat spezielle Elemente dafür. Listen immer mit mindestens 2 Elementen zu markieren. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie z. B. eine Einkaufsliste. Diese sind in einem {{htmlelement("ul")}}-Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie z. B. ein Rezept. Diese sind in einem {{htmlelement("ol")}}-Element eingeschlossen.

Jedes Element innerhalb der Listen wird in einem {{htmlelement("li")}} (Listenelement) platziert.

Wenn wir beispielsweise aus dem folgenden Absatzfragment eine Liste erstellen wollten,

```html
<p>
  Bei Mozilla sind wir eine globale Community von Technologen, Denkern und Erbauern,
  die gemeinsam arbeiten…
</p>
```

könnten wir das Markup wie folgt ändern:

```html
<p>Bei Mozilla sind wir eine globale Community von</p>

<ul>
  <li>Technologen</li>
  <li>Denkern</li>
  <li>Erbauern</li>
</ul>

<p>die gemeinsam arbeiten…</p>
```

Versuchen Sie, Ihrer Beispielseite eine geordnete oder ungeordnete Liste hinzuzufügen.

## Links

Links sind sehr wichtig – sie sind das, was das Web zu einem Netz macht! Um einen Link hinzuzufügen, brauchen wir ein einfaches Element – {{htmlelement("a")}} – wobei "a" die Kurzform für "Anker" ist. Um Text innerhalb Ihres Absatzes in einen Link umzuwandeln, befolgen Sie diese Schritte:

1. Wählen Sie einen Text aus. Wir wählten den Text „Mozilla-Manifest“.
2. Umwickeln Sie den Text mit einem {{htmlelement("a")}}-Element, wie unten gezeigt:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Geben Sie dem {{htmlelement("a")}}-Element ein `href`-Attribut, wie unten gezeigt:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Füllen Sie den Wert dieses Attributs mit der Webadresse, auf die der Link verweisen soll:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Unerwartete Ergebnisse könnten auftreten, wenn Sie den Teil `https://` oder `http://`, genannt _Protokoll_, am Anfang der Webadresse weglassen. Nach dem Erstellen des Links klicken Sie ihn an, um sicherzustellen, dass er dorthin führt, wo Sie ihn haben wollten.

> **Note:** `href` mag anfangs wie eine eher obskure Wahl für einen Attributnamen erscheinen. Wenn Sie Schwierigkeiten haben, sich daran zu erinnern, denken Sie daran, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie jetzt Ihrer Seite einen Link hinzu, falls Sie dies noch nicht getan haben.

## Schlussfolgerung

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die wie die unten abgebildete aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, die ein Firefox-Logo zeigt, eine Überschrift mit der Aufschrift Mozilla ist cool, und zwei Absätze mit Blindtext](finished-test-page-small.png)

Wenn Sie feststecken, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur wirklich an der Oberfläche von HTML gekratzt. Um mehr zu erfahren, besuchen Sie unser [Lernen über HTML](/de/docs/Learn/HTML)-Thema.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}
