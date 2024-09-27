---
title: HTML-Grundlagen
slug: Learn/Getting_started_with_the_web/HTML_basics
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und ihren Inhalt zu strukturieren. Zum Beispiel könnte Inhalt innerhalb einer Reihe von Absätzen, einer Liste mit Aufzählungspunkten oder unter Verwendung von Bildern und Datentabellen strukturiert werden. Wie der Titel schon sagt, wird Ihnen dieser Artikel ein grundlegendes Verständnis von HTML und seinen Funktionen vermitteln.

## Was ist HTML?

HTML ist eine _Auszeichnungssprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **[Elementen](/de/docs/Glossary/element)**, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen oder zu umschließen, damit sie auf eine bestimmte Weise erscheinen oder sich verhalten. Die einschließenden [Tags](/de/docs/Glossary/tag) können ein Wort oder Bild mit einem Hyperlink versehen, Wörter kursiv machen, die Schriftgröße ändern, und so weiter. Zum Beispiel nehmen wir die folgende Inhaltszeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass die Zeile alleine steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in Absatz-Tags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas genauer betrachten.

![Absatzelement, das ein öffnendes Tag, Inhalt mit der Aufschrift 'my cat is very grumpy' und ein schließendes Tag enthält](grumpy-cat-small.png)

Die Hauptbestandteile unseres Elements sind wie folgt:

1. **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Fall p), eingeschlossen in öffnende und schließende **spitze Klammern**. Dies gibt an, wo das Element beginnt oder wirksam wird — in diesem Fall, wo der Absatz beginnt.
2. **Das schließende Tag:** Dies ist das gleiche wie das öffnende Tag, außer dass es einen _Schrägstrich_ vor dem Elementnamen enthält. Dies gibt an, wo das Element endet — in diesem Fall, wo der Absatz endet. Das Fehlen eines schließenden Tags ist einer der typischen Anfängerfehler und kann zu seltsamen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur Text ist.
4. **Das Element:** Das öffnende Tag, das schließende Tag und der Inhalt bilden zusammen das Element.

Elemente können auch Attribute haben, die wie folgt aussehen:

![Absatz-öffnendes Tag mit einem hervorgehobenen Klassenattribut: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im eigentlichen Inhalt erscheinen sollen. Hier ist `class` der Attribut-_Name_ und `editor-note` der Attribut-_Wert_. Das `class`-Attribut ermöglicht es Ihnen, dem Element eine nicht-unikale Kennung zu geben, die verwendet werden kann, um es (und alle anderen Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen zu versehen. Einige Attribute haben keinen Wert, wie z.B. [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert festlegen, haben immer:

1. Ein Leerzeichen zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn das Element bereits ein oder mehrere Attribute hat).
2. Den Attributnamen gefolgt von einem Gleichheitszeichen.
3. Den Attributwert eingeschlossen von öffnenden und schließenden Anführungszeichen.

> [!NOTE]
> Einfache Attributwerte, die keine [ASCII](/de/docs/Glossary/ASCII)-Leerzeichen (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`) enthalten, können unzitiert bleiben, es wird jedoch empfohlen, alle Attributwerte zu zitieren, da dies den Code konsistenter und verständlicher macht.

### Verschachteln von Elementen

Sie können auch Elemente innerhalb anderer Elemente platzieren — dies wird als **Verschachtelung** bezeichnet. Wenn wir sagen wollten, dass unsere Katze **sehr** mürrisch ist, könnten wir das Wort "very" in ein {{htmlelement("strong")}}-Element umschließen, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente richtig verschachtelt sind. Im obigen Beispiel haben wir zuerst das {{htmlelement("p")}}-Element geöffnet, dann das {{htmlelement("strong")}}-Element; daher müssen wir zuerst das {{htmlelement("strong")}}-Element schließen, dann das {{htmlelement("p")}}-Element. Das Folgende ist nicht korrekt:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen korrekt geöffnet und geschlossen werden, sodass sie klar innerhalb oder außerhalb voneinander sind. Wenn sie sich, wie oben gezeigt, überlappen, wird Ihr Webbrowser versuchen, die beste Vermutung anzustellen, was Sie zu sagen versucht haben, was zu unerwarteten Ergebnissen führen kann. Also machen Sie das nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden **[void elements](/de/docs/Glossary/void_element)** genannt. Nehmen Sie das {{htmlelement("img")}}-Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dies enthält zwei Attribute, aber es gibt kein schließendes `</img>`-Tag und keinen inneren Inhalt. Dies liegt daran, dass ein Bildelement keinen Inhalt umschließt, um ihn zu beeinflussen. Sein Zweck ist es, ein Bild an der Stelle der HTML-Seite einzubetten, an der es erscheint.

### Anatomie eines HTML-Dokuments

Damit sind die Grundlagen einzelner HTML-Elemente abgedeckt, aber sie sind alleine nicht nützlich. Jetzt schauen wir uns an, wie einzelne Elemente kombiniert werden, um eine vollständige HTML-Seite zu bilden. Lassen Sie uns den Code, den wir in unser `index.html`-Beispiel eingefügt haben (das wir im Artikel [Dealing with files](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) kennengelernt haben), noch einmal ansehen:

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

Hierbei haben wir Folgendes:

- `<!doctype html>` — [doctype](/de/docs/Glossary/Doctype). Es ist ein erforderliches Präludium. In den Anfängen der Zeit, als HTML noch jung war (um 1991/92), sollten Doctypes als Links zu einer Reihe von Regeln dienen, die die HTML-Seite einhalten musste, um als gutes HTML angesehen zu werden, was eine automatische Fehlerprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage machen sie jedoch nicht mehr viel und sind im Grunde nur notwendig, um sicherzustellen, dass Ihr Dokument sich korrekt verhält. Das ist alles, was Sie für den Moment wissen müssen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt der gesamten Seite und wird manchmal als Wurzelelement bezeichnet. Es beinhaltet auch das `lang`-Attribut, das die Primärsprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element dient als Container für all das Zeug, das Sie auf der HTML-Seite einfügen möchten, das _nicht_ der Inhalt ist, den Sie den Betrachtern Ihrer Seite zeigen. Dazu gehören Dinge wie [Schlüsselwörter](/de/docs/Glossary/keyword) und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen soll, CSS zur Gestaltung unseres Inhalts, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden sollte, nämlich UTF-8, der die meisten Zeichen aus der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es jetzt jeglichen Textinhalt verarbeiten, den Sie hinzufügen könnten. Es gibt keinen Grund, dies nicht festzulegen, und es kann einige Probleme später vermeiden helfen.
- `<meta name="viewport" content="width=device-width">` — Dieses [Viewport-Element](/de/docs/Web/CSS/Viewport_concepts#mobile_viewports) sorgt dafür, dass die Seite in der Breite des Viewports dargestellt wird, wodurch verhindert wird, dass mobile Browser Seiten breiter als der Viewport darstellen und dann verkleinern.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies legt den Titel Ihrer Seite fest, was der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen wird. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie mit einem Lesezeichen versehen/speichern.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie den Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer.

## Bilder

Richten wir unsere Aufmerksamkeit erneut auf das {{htmlelement("img")}}-Element:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Wie bereits erwähnt, bettet es ein Bild in unsere Seite an die Stelle ein, an der es erscheint. Es tut dies über das `src`- (Quelle) Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt`- (alternatives) Attribut aufgenommen. Im [`alt`-Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) geben Sie beschreibenden Text für Benutzer an, die das Bild nicht sehen können, möglicherweise aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge namens Bildschirmleser, um den Alt-Text für sie vorzulesen.
2. Etwas ist schiefgegangen, sodass das Bild nicht angezeigt wird. Beispielsweise können Sie versuchen, den Pfad im `src`-Attribut absichtlich zu ändern, um ihn falsch zu machen. Wenn Sie die Seite speichern und neu laden, sollten Sie stattdessen etwas wie das Folgende anstelle des Bildes sehen:

![Die Worte: mein Testbild](alt-text-example.png)

Die Schlüsselwörter für Alt-Text sind "beschreibender Text". Der von Ihnen verfasste Alt-Text sollte dem Leser genügend Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text von "Mein Testbild" überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein brennender Fuchs, der die Erde umgibt."

Versuchen Sie jetzt, einen besseren Alt-Text für Ihr Bild zu formulieren.

> [!NOTE]
> Erfahren Sie mehr über Barrierefreiheit in unserem [Barrierefreiheits-Lernmodul](/de/docs/Learn/Accessibility).

## Textauszeichnung

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zur Textauszeichnung verwenden werden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften — oder Unterüberschriften — sind. Genauso wie ein Buch einen Haupttitel, Kapiteltitel und Untertitel hat, kann dies auch ein HTML-Dokument. HTML enthält 6 Überschriftsebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie normalerweise nur 3 bis 4 verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare, während er den Code rendert. Mit anderen Worten, sie sind auf der Seite nicht sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

Versuchen Sie nun, Ihrer HTML-Seite einen geeigneten Titel hinzuzufügen, direkt über Ihrem {{htmlelement("img")}}-Element.

> [!NOTE]
> Sie werden sehen, dass Ihre Überschriftsebene 1 einen impliziten Stil hat. Verwenden Sie keine Überschriftselemente, um Text größer oder fett zu machen, denn sie werden für [Barrierefreiheit](/de/docs/Learn/Accessibility/HTML#text_content) und [andere Gründe wie SEO](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure) verwendet. Versuchen Sie, eine sinnvolle Reihenfolge von Überschriften auf Ihren Seiten zu schaffen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erklärt, sind {{htmlelement("p")}}-Elemente dazu da, Absätze von Text zu enthalten; Sie werden diese häufig verwenden, wenn Sie normalen Textinhalt kennzeichnen:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Mustertext (den Sie aus [_Wie wird Ihre Website aussehen?_](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) haben sollten) in einen oder mehrere Absätze ein, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert werden.

### Listen

Ein Großteil des Inhalts im Web ist in Listen formatiert, und HTML hat spezielle Elemente dafür. Das Auszeichnen von Listen besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie z.B. eine Einkaufsliste. Diese sind in ein {{htmlelement("ul")}}-Element eingebettet.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie z.B. ein Rezept. Diese sind in ein {{htmlelement("ol")}}-Element eingebettet.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}}- (Listenelement) Element eingefügt.

Zum Beispiel, wenn wir den Teil des folgenden Absatzfragments in eine Liste umwandeln wollten

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

Versuchen Sie, eine geordnete oder ungeordnete Liste zu Ihrer Beispielseite hinzuzufügen.

## Links

Links sind sehr wichtig — sie sind das, was das Web zu einem Netz macht! Um einen Link hinzuzufügen, müssen wir ein einfaches Element verwenden — {{htmlelement("a")}}, wobei "a" für "anchor" (Anker) steht. Um Text innerhalb Ihres Absatzes in einen Link umzuwandeln, folgen Sie diesen Schritten:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" ausgewählt.
2. Umwickeln Sie den Text mit einem {{htmlelement("a")}}-Element, wie unten gezeigt:

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

Es können unerwartete Ergebnisse auftreten, wenn Sie den `https://`- oder `http://`-Teil, genannt _Protokoll_, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dorthin führt, wo Sie es wollten.

> **Hinweis:** `href` mag anfangs wie eine etwas obskure Wahl für einen Attributnamen erscheinen. Wenn Sie Schwierigkeiten haben, es sich zu merken, denken Sie daran, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, wenn Sie dies nicht bereits getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die so aussieht wie die unten (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite mit einem Firefox-Logo, einer Überschrift mit der Aufschrift Mozilla is cool und zwei Absätzen mit Beispieltext](finished-test-page-small.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Um mehr herauszufinden, gehen Sie zu unserem [Learning HTML](/de/docs/Learn/HTML) Thema.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}
