---
title: HTML-Grundlagen
slug: Learn/Getting_started_with_the_web/HTML_basics
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Beispielsweise könnte der Inhalt innerhalb einer Reihe von Absätzen, einer Liste mit Aufzählungspunkten oder mithilfe von Bildern und Datentabellen strukturiert werden. Wie der Titel schon andeutet, gibt Ihnen dieser Artikel ein grundlegendes Verständnis von HTML und seinen Funktionen.

## Was ist HTML?

HTML ist eine _Markup-Sprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **[Elementen](/de/docs/Glossary/element)**, die Sie verwenden, um unterschiedliche Teile des Inhalts zu umschließen oder zu umwickeln, damit sie auf eine bestimmte Weise dargestellt oder funktionieren. Die umschließenden [Tags](/de/docs/Glossary/tag) können ein Wort oder Bild zu einem Hyperlink machen, Wörter kursiv darstellen, die Schriftgröße vergrößern oder verkleinern usw. Zum Beispiel nehmen wir die folgende Inhaltszeile:

```plain
My cat is very grumpy
```

Wenn wir wollten, dass die Zeile für sich allein steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir sie in Absatz-Tags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas näher betrachten.

![Absatzelement, das öffnenden Tag, Inhalt mit dem Text 'my cat is very grumpy' und einen schließenden Tag zeigt](grumpy-cat-small.png)

Die Hauptteile unseres Elements sind wie folgt:

1. **Der öffnende Tag:** Er besteht aus dem Namen des Elements (in diesem Fall p), der in öffnende und schließende **spitze Klammern** eingeschlossen ist. Dies gibt an, wo das Element beginnt oder wirksam wird — in diesem Fall, wo der Absatz beginnt.
2. **Der schließende Tag:** Dieser ist derselbe wie der öffnende Tag, enthält jedoch einen _Schrägstrich_ vor dem Elementnamen. Dies gibt an, wo das Element endet — in diesem Fall, wo der Absatz endet. Das Hinzufügen eines schließenden Tags zu vergessen, ist einer der Standardanfängerfehler und kann zu seltsamen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur aus Text besteht.
4. **Das Element:** Der öffnende Tag, der schließende Tag und der Inhalt zusammen bilden das Element.

Elemente können auch Attribute haben, die folgendermaßen aussehen:

![Absatz-Öffnungstag mit einem hervorgehobenen Klassenattribut: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die Sie nicht im tatsächlichen Inhalt anzeigen möchten. Hier ist `class` der Attribut-_Name_ und `editor-note` der Attribut-_Wert_. Das `class`-Attribut ermöglicht es Ihnen, dem Element einen nicht eindeutigen Bezeichner zu geben, der verwendet werden kann, um es (und alle anderen Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen zu versehen. Einige Attribute haben keinen Wert, wie zum Beispiel [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert festlegen, haben immer:

1. Ein Leerzeichen zwischen ihr und dem Elementnamen (oder dem vorherigen Attribut, falls das Element bereits eines oder mehrere Attribute hat).
2. Den Attributnamen gefolgt von einem Gleichheitszeichen.
3. Den Attributwert, der von öffnenden und schließenden Anführungszeichen eingeschlossen ist.

> [!NOTE]
> Einfache Attributwerte, die keine [ASCII](/de/docs/Glossary/ASCII)-Leerzeichen enthalten (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`), können unzitiert bleiben, aber es wird empfohlen, alle Attributwerte zu zitieren, da dies den Code konsistenter und verständlicher macht.

### Verschachteln von Elementen

Sie können auch Elemente in andere Elemente einfügen — dies wird als **Verschachtelung** bezeichnet. Wenn wir sagen möchten, dass unsere Katze **sehr** grumpy ist, könnten wir das Wort "sehr" in ein {{htmlelement("strong")}}-Element einwickeln, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente richtig verschachtelt sind. Im obigen Beispiel haben wir zuerst das {{htmlelement("p")}}-Element geöffnet, dann das {{htmlelement("strong")}}-Element; daher müssen wir zuerst das {{htmlelement("strong")}}-Element schließen, dann das {{htmlelement("p")}}-Element. Das Folgende ist falsch:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen korrekt geöffnet und geschlossen werden, sodass sie klar innerhalb oder außerhalb voneinander sind. Wenn sie sich wie oben gezeigt überlappen, versucht Ihr Webbrowser, die beste Vermutung zu haben, was Sie sagen wollten, was zu unerwarteten Ergebnissen führen kann. Also, tun Sie es nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden **[leere Elemente](/de/docs/Glossary/void_element)** genannt. Nehmen Sie das {{htmlelement("img")}}-Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

This enthält zwei Attribute, aber es gibt keinen schließenden `</img>`-Tag und keinen inneren Inhalt. Das liegt daran, dass ein Bild-Element keinen Inhalt umwickelt, um diesen zu beeinflussen. Sein Zweck ist es, ein Bild an der Stelle, an der es erscheint, in die HTML-Seite einzubetten.

### Anatomie eines HTML-Dokuments

Damit sind die Grundlagen einzelner HTML-Elemente abgeschlossen, aber sie sind alleine nicht nützlich. Nun sehen wir uns an, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden. Erinnern wir uns an den Code, den wir in unser `index.html`-Beispiel eingefügt haben (den wir zum ersten Mal im Artikel [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) kennengelernt haben):

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

- `<!doctype html>` — [doctype](/de/docs/Glossary/Doctype). Es ist ein erforderlicher Vorspann. In der Frühzeit, als HTML noch jung war (etwa 1991/92), sollten Doctypes als Links zu einem Regelwerk fungieren, dem die HTML-Seite folgen musste, um als gutes HTML betrachtet zu werden, was eine automatische Fehlerprüfung und andere nützliche Dinge bedeuten könnte. Heutzutage tun sie jedoch nicht viel und sind im Grunde nur erforderlich, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie momentan wissen müssen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt der gesamten Seite und wird manchmal als Wurzelelement bezeichnet. Es enthält auch das `lang`-Attribut, das die primäre Sprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für all die Dinge, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie Ihren Betrachtern zeigen möchten. Dazu gehören Dinge wie [Schlüsselwörter](/de/docs/Glossary/keyword) und eine Seitenbeschreibung, die Sie in den Suchergebnissen anzeigen lassen möchten, CSS zum Stylen unseres Inhalts, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element setzt den Zeichensatz Ihres Dokuments auf UTF-8, der die meisten Zeichen aus der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es nun jeden Textinhalt verarbeiten, den Sie möglicherweise darauf setzen möchten. Es gibt keinen Grund, dies nicht einzustellen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [Viewport-Element](/de/docs/Web/CSS/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Viewports gerendert wird, verhindert, dass mobile Browser Seiten rendern, die breiter als der Viewport sind, und sie dann schrumpfen.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies setzt den Titel Ihrer Seite, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer.

## Bilder

Wir lenken unsere Aufmerksamkeit erneut auf das {{htmlelement("img")}}-Element:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Wie bereits gesagt, bettet es ein Bild in unsere Seite an der Position ein, an der es erscheint. Es geschieht über das `src` (source)-Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (Alternative)-Attribut hinzugefügt. Im [`alt`-Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) spezifizieren Sie beschreibenden Text für Benutzer, die das Bild nicht sehen können, möglicherweise aus den folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge namens Screenreader, um sich den Alt-Text vorlesen zu lassen.
2. Etwas ist schief gelaufen, sodass das Bild nicht angezeigt wird. Versuchen Sie zum Beispiel absichtlich, den Pfad in Ihrem `src`-Attribut zu ändern, um ihn falsch zu machen. Wenn Sie die Seite speichern und neu laden, sollten Sie anstelle des Bildes etwas wie dieses sehen:

![Die Worte: my test image](alt-text-example.png)

Die Schlüsselwörter für Alt-Text sind "beschreibender Text". Der von Ihnen verfasste Alt-Text sollte dem Leser genügend Informationen bieten, um eine gute Vorstellung davon zu bekommen, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "My test image" überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein flammender Fuchs, der die Erde umgibt."

Versuchen Sie jetzt, einen besseren Alt-Text für Ihr Bild zu entwickeln.

> [!NOTE]
> Finden Sie mehr über Barrierefreiheit in unserem [Modul zum Lernen von Barrierefreiheit](/de/docs/Learn/Accessibility) heraus.

## Textauszeichnung

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zur Textauszeichnung verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften oder Unterüberschriften sind. So wie ein Buch einen Haupttitel, Kapitelüberschriften und Untertitel hat, kann auch ein HTML-Dokument. HTML enthält 6 Überschriftenebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie normalerweise nur 3 bis 4 davon verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare während des Renderns des Codes. Mit anderen Worten, sie sind auf der Seite nicht sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

Versuchen Sie nun, Ihrer HTML-Seite einen passenden Titel direkt über Ihrem {{htmlelement("img")}}-Element hinzuzufügen.

> [!NOTE]
> Sie werden sehen, dass Ihre Überschriftenebene 1 einen impliziten Stil hat. Verwenden Sie Überschriftselemente nicht, um Text größer oder fett zu machen, weil sie für [Barrierefreiheit](/de/docs/Learn/Accessibility/HTML#text_content) und [andere Gründe wie SEO](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#warum_brauchen_wir_struktur) verwendet werden. Versuchen Sie, ein sinnvolles Abfolge von Überschriften auf Ihren Seiten zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erklärt, sind {{htmlelement("p")}}-Elemente zur Enthaltung von Textabsätzen gedacht; Sie werden diese häufig verwenden, wenn Sie regulären Textinhalt auszeichnen:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext (sie sollten ihn aus dem Abschnitt [_Wie sollte Ihre Webseite aussehen?_](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) haben) in einen oder mehrere Absätze ein, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert werden.

### Listen

Ein großer Teil der Inhalte im Web sind Listen und HTML hat spezielle Elemente dafür. Das Auszeichnen von Listen besteht immer aus mindestens zwei Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie etwa eine Einkaufsliste. Diese sind in einem {{htmlelement("ul")}}-Element eingeschlossen.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente eine Rolle spielt, wie z.B. ein Rezept. Diese sind in einem {{htmlelement("ol")}}-Element eingeschlossen.

Jedes Element innerhalb der Listen wird in einem {{htmlelement("li")}} (Listeneintrag) Element platziert.

Zum Beispiel, wenn wir den Teil des folgenden Absatzfragments in eine Liste umwandeln wollten:

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir die Auszeichnung wie folgt modifizieren:

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Versuchen Sie jetzt, eine geordnete oder ungeordnete Liste auf Ihrer Beispielseite hinzuzufügen.

## Links

Links sind sehr wichtig — sie sind es, die das Web zu einem Netz machen! Um einen Link hinzuzufügen, müssen wir ein einfaches Element verwenden — {{htmlelement("a")}} — "a" ist die Abkürzung für "anchor" (Anker). Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, befolgen Sie diese Schritte:

1. Wählen Sie einen Text. Wir haben den Text "Mozilla Manifesto" gewählt.
2. Umgeben Sie den Text mit einem {{htmlelement("a")}}-Element, wie unten gezeigt:

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

Sie könnten unerwartete Ergebnisse bekommen, wenn Sie den `https://`- oder `http://`-Teil, das sogenannte _Protokoll_, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin führt, wo Sie wollten.

> **Hinweis:** `href` mag anfangs wie eine eher obskure Attributsbezeichnung erscheinen. Wenn Sie Schwierigkeiten haben sollten, es sich zu merken, denken Sie daran, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, wenn Sie dies nicht bereits getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die wie die untenstehende aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, die ein Firefox-Logo zeigt, eine Überschrift mit der Aufschrift "Mozilla is cool" und zwei Absätze mit Fülltext](finished-test-page-small.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir wirklich nur an der Oberfläche von HTML gekratzt. Mehr darüber erfahren Sie in unserem [HTML-Lernbereich](/de/docs/Learn/HTML).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}
