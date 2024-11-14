---
title: HTML Grundlagen
slug: Learn/Getting_started_with_the_web/HTML_basics
l10n:
  sourceCommit: acb4e05fe7ea33a7b20fa03fdeb26a93511624e0
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Zum Beispiel könnte der Inhalt innerhalb eines Satzes von Absätzen, einer Liste mit Aufzählungspunkten oder mit Bildern und Datentabellen strukturiert werden. Wie der Titel schon sagt, wird Ihnen dieser Artikel ein grundlegendes Verständnis von HTML und seinen Funktionen vermitteln.

## Was ist HTML?

HTML ist eine _Markup-Sprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **{{Glossary("element", "Elementen")}}**, die Sie verwenden, um verschiedene Teile des Inhalts zu umschließen oder einzuwickeln, damit sie auf eine bestimmte Weise erscheinen oder sich auf eine bestimmte Weise verhalten. Die umschließenden {{Glossary("tag", "Tags")}} können ein Wort oder Bild zu einem anderen Ort verlinken, Wörter kursiv darstellen, die Schriftgröße anpassen und so weiter. Nehmen wir beispielsweise die folgende Zeile Inhalt:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass die Zeile für sich allein steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir sie in Abszastags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas näher betrachten.

![Absatz-Element einschließlich Eröffnungstag, Inhalt, der 'my cat is very grumpy' liest, und ein Schließtag](grumpy-cat-small.png)

Die Hauptbestandteile unseres Elements sind wie folgt:

1. **Der Eröffnungstag:** Dieser besteht aus dem Namen des Elements (in diesem Fall p), eingeschlossen in öffnende und schließende **spitze Klammern**. Dies gibt an, wo das Element beginnt oder Wirkung zeigt – in diesem Fall, wo der Absatz beginnt.
2. **Der Schließtag:** Dieser ist derselbe wie der Eröffnungstag, außer dass er einen _Schrägstrich_ vor dem Elementnamen enthält. Dies gibt an, wo das Element endet – in diesem Fall, wo der Absatz endet. Das Versäumnis, einen Schließtag hinzuzufügen, ist einer der typischen Anfängerfehler und kann zu seltsamen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall nur Text ist.
4. **Das Element:** Der Eröffnungstag, der Schließtag und der Inhalt zusammen bilden das Element.

Elemente können auch Attribute haben, die folgendermaßen aussehen:

![Absatz-Eröffnungstag mit hervorgehobenem Klassen-Attribut: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die Sie im tatsächlichen Inhalt nicht erscheinen lassen möchten. Hier ist `class` der Attribut-_Name_ und `editor-note` der Attribut-_Wert_. Das `class`-Attribut ermöglicht es Ihnen, dem Element eine nicht eindeutige Kennung zu geben, die verwendet werden kann, um es (und alle anderen Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen zu versehen.
Einige Attribute haben keinen Wert, wie zum Beispiel [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert setzen, haben immer:

1. Ein Leerzeichen zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn das Element bereits ein oder mehrere Attribute hat).
2. Der Attributname gefolgt von einem Gleichheitszeichen.
3. Der Attributwert, eingeschlossen in öffnende und schließende Anführungszeichen.

> [!NOTE]
> Einfache Attributwerte, die keine {{Glossary("ASCII", "ASCII")}} Leerzeichen enthalten (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`), können unzitiert bleiben, aber es wird empfohlen, alle Attributwerte zu zitieren, da dies den Code konsistenter und verständlicher macht.

### Verschachteln von Elementen

Sie können auch Elemente innerhalb anderer Elemente platzieren – dies wird **Verschachtelung** genannt. Wenn wir sagen wollten, dass unsere Katze **sehr** mürrisch ist, könnten wir das Wort "sehr" in ein {{htmlelement("strong")}}-Element einschließen, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente ordnungsgemäß verschachtelt sind. Im obigen Beispiel haben wir zuerst das {{htmlelement("p")}}-Element geöffnet, dann das {{htmlelement("strong")}}-Element; daher müssen wir zuerst das {{htmlelement("strong")}}-Element schließen, dann das {{htmlelement("p")}}-Element. Das folgende ist nicht korrekt:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen richtig geöffnet und geschlossen werden, damit eindeutig ist, dass sie innerhalb oder außerhalb voneinander sind. Wenn sie sich wie oben gezeigt überlappen, wird Ihr Webbrowser versuchen, die beste Vermutung darüber zu treffen, was Sie sagen wollten, was zu unerwarteten Ergebnissen führen kann. Also machen Sie es nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden **{{Glossary("void_element", "leere Elemente")}}** genannt. Nehmen wir das {{htmlelement("img")}}-Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dieses enthält zwei Attribute, aber es gibt keinen Schließtag `</img>` und keinen inneren Inhalt. Dies liegt daran, dass ein Bildelement keinen Inhalt umhüllt, um ihn zu beeinflussen. Sein Zweck ist es, ein Bild an der Stelle, an der es erscheint, in die HTML-Seite einzubetten.

### Anatomie eines HTML-Dokuments

Damit sind die Grundlagen einzelner HTML-Elemente abgeschlossen, aber sie sind nicht alleine nützlich. Jetzt werden wir uns ansehen, wie einzelne Elemente kombiniert werden, um eine ganze HTML-Seite zu bilden. Schauen wir uns noch einmal den Code an, den wir in unser `index.html`-Beispiel eingefügt haben (den wir im Artikel [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) erstmals kennengelernt haben):

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

Hier haben wir folgendes:

- `<!doctype html>` — {{Glossary("Doctype", "doctype")}}. Es ist ein erforderliches Vorspiel. In den Anfängen der Zeit, als HTML jung war (um 1991/92), sollten Doctypes als Links zu einem Satz von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML angesehen zu werden, was automatische Fehlerüberprüfung und andere nützliche Dinge bedeuten könnte. Heutzutage allerdings tun sie nicht viel und sind im Grunde nur notwendig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie vorerst wissen müssen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt der gesamten Seite und wird manchmal als das Wurzelelement bezeichnet. Es enthält auch das `lang`-Attribut, das die Hauptsprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element dient als Container für all das, was Sie auf der HTML-Seite hinzufügen möchten, das _nicht_ der Inhalt ist, den Sie den Betrachtern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen soll, CSS zur Stilierung unserer Inhalte, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll, auf UTF-8, das die meisten Zeichen aus der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es nun jeden textlichen Inhalt verarbeiten, den Sie darauf setzen könnten. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [Viewport-Element](/de/docs/Web/CSS/Viewport_concepts#mobile_viewports) sorgt dafür, dass die Seite in der Breite des Viewports gerendert wird, sodass mobile Browser nicht Seiten breiter als den Viewport rendern und sie dann verkleinern.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies legt den Titel Ihrer Seite fest, der der Titel ist, der in der Registerkarte des Browsers erscheint, in der die Seite geladen ist. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit speichern.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, egal ob es sich um Texte, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer handelt.

## Bilder

Wenden wir uns erneut dem {{htmlelement("img")}}-Element zu:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Wie bereits gesagt, bettet es ein Bild auf unserer Seite an der Stelle ein, an der es erscheint. Dies geschieht über das `src` (source)-Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (alternativ)-Attribut hinzugefügt. Im [`alt`-Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) spezifizieren Sie beschreibenden Text für Benutzer, die das Bild nicht sehen können, möglicherweise aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge, die den Alt-Text für sie vorlesen.
2. Es ist etwas schiefgegangen, das dazu führt, dass das Bild nicht angezeigt wird. Versuchen Sie zum Beispiel absichtlich, den Pfad in Ihrem `src`-Attribut zu ändern, um ihn falsch zu machen. Wenn Sie die Seite speichern und neu laden, sollten Sie so etwas anstelle des Bildes sehen:

![Die Wörter: my test image](alt-text-example.png)

Die Schlüsselwörter für Alt-Text sind "beschreibender Text". Der Alt-Text, den Sie schreiben, sollte dem Leser genug Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "Mein Testbild" überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein brennender Fuchs, der die Erde umgibt."

Versuchen Sie jetzt, einen besseren Alt-Text für Ihr Bild zu finden.

> [!NOTE]
> Finden Sie mehr über Barrierefreiheit in unserem [Barrierefreiheits-Lernmodul](/de/docs/Learn/Accessibility) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) heraus, um zu erfahren, wie Sie ein Alt-Attribut für Bilder in verschiedenen Situationen verwenden.

## Text markieren

Dieser Abschnitt behandelt einige wesentliche HTML-Elemente, die Sie zum Markieren von Text verwenden werden.

### Überschriften

Überschriftenelemente ermöglichen es Ihnen anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften oder Unterüberschriften sind. In gleicher Weise, wie ein Buch einen Haupttitel, Kapitelüberschriften und Untertitel hat, kann ein HTML-Dokument dies auch. HTML enthält 6 Überschriftenebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie üblicherweise nur 3 bis 4 verwenden werden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare, wenn er den Code rendert. Mit anderen Worten, sie sind auf der Seite nicht sichtbar – nur im Code. HTML-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

Versuchen Sie nun, Ihrer HTML-Seite einen passenden Titel unmittelbar über Ihrem {{htmlelement("img")}}-Element hinzuzufügen.

> [!NOTE]
> Sie werden sehen, dass Ihre Überschrift der Ebene 1 einen impliziten Stil hat. Verwenden Sie keine Überschriftselemente, um Text größer oder fett zu machen, weil sie aus [Barrieregründen](/de/docs/Learn/Accessibility/HTML#text_content) und [anderen Gründen wie SEO](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure) verwendet werden. Versuchen Sie, eine sinnvolle Reihenfolge von Überschriften auf Ihren Seiten zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie oben erklärt, sind {{htmlelement("p")}}-Elemente dazu da, Absätze von Text zu enthalten; Sie werden diese häufig verwenden, wenn Sie normalen Textinhalt markieren:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext (den Sie aus [_Wie wird Ihre Webseite aussehen?_](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) haben sollten) in einem oder mehreren Absätzen ein, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert sind.

### Listen

Ein großer Teil des Webinhalts besteht aus Listen und HTML hat spezielle Elemente dafür. Das Markieren von Listen besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie z.B. eine Einkaufsliste. Diese sind in ein {{htmlelement("ul")}}-Element eingewickelt.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie z.B. ein Rezept. Diese sind in ein {{htmlelement("ol")}}-Element eingewickelt.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}} (Listenelement)-Element gesetzt.

Zum Beispiel, wenn wir den Teil des folgenden Absatzfragments in eine Liste umwandeln wollten

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

Könnten wir das Markup dazu ändern

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Versuchen Sie, Ihrer Beispielseite eine geordnete oder ungeordnete Liste hinzuzufügen.

## Links

Links sind sehr wichtig – sie sind das, was das Web zu einem Netz macht! Um einen Link hinzuzufügen, benötigen wir ein einfaches Element – {{htmlelement("a")}} – "a" als Kurzform für "Anchor" (Anker). Um Text innerhalb Ihres Absatzes in einen Link zu verwandeln, befolgen Sie diese Schritte:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" gewählt.
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

Sie könnten unerwartete Ergebnisse erhalten, wenn Sie den `https://` oder `http://` Teil weglassen, der das _Protokoll_ am Anfang der Webadresse darstellt. Nachdem Sie einen Link erstellt haben, klicken Sie ihn an, um sicherzustellen, dass er Sie dorthin führt, wo Sie wollten.

> **Hinweis:** `href` mag auf den ersten Blick wie eine ziemlich obskure Wahl für einen Attributnamen erscheinen. Wenn Sie Probleme haben, sich daran zu erinnern, denken Sie daran, dass es für _**h**ypertext **ref**erence_ (Hypertext-Referenz) steht.

Fügen Sie jetzt einen Link zu Ihrer Seite hinzu, wenn Sie dies noch nicht getan haben.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie am Ende eine Seite haben, die wie die unten gezeigte aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Screenshot der Webseite, der ein Firefox-Logo, eine Überschrift mit dem Text Mozilla is cool und zwei Absätze mit Platzhaltertext zeigt](finished-test-page-small.png)

Wenn Sie feststecken, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir wirklich nur an der Oberfläche von HTML gekratzt. Um mehr zu erfahren, gehen Sie zu unserem [HTML-Lernen](/de/docs/Learn/HTML)-Thema.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}
