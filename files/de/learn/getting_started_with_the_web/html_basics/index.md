---
title: HTML-Grundlagen
slug: Learn/Getting_started_with_the_web/HTML_basics
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) ist der Code, der verwendet wird, um eine Webseite und deren Inhalt zu strukturieren. Zum Beispiel könnte der Inhalt in einer Reihe von Absätzen, einer Liste von Aufzählungspunkten oder durch Bilder und Datentabellen strukturiert werden. Wie der Titel schon sagt, gibt Ihnen dieser Artikel ein grundlegendes Verständnis von HTML und seinen Funktionen.

## Was ist HTML?

HTML ist eine _Markup-Sprache_, die die Struktur Ihres Inhalts definiert. HTML besteht aus einer Reihe von **{{Glossary("element", "Elementen")}}**, die Sie verwenden, um verschiedene Teile des Inhalts zu umschließen oder einzuwickeln, um ihn auf eine bestimmte Weise erscheinen oder agieren zu lassen. Die umschließenden {{Glossary("tag", "Tags")}} können ein Wort oder ein Bild zu einem Hyperlink zu einem anderen Ort machen, Wörter kursiv setzen, die Schriftgröße vergrößern oder verkleinern und so weiter. Zum Beispiel, nehmen Sie die folgende Inhaltszeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass die Zeile für sich alleine steht, könnten wir sie als Absatz spezifizieren, indem wir sie in Absatz-Tags einschließen:

```html
<p>My cat is very grumpy</p>
```

### Anatomie eines HTML-Elements

Lassen Sie uns dieses Absatz-Element etwas genauer erkunden.

![Absatzelement einschließlich öffnendem Tag, Inhalt, der 'my cat is very grumpy' liest, und einem schließenden Tag](grumpy-cat-small.png)

Die Hauptbestandteile unseres Elements sind wie folgt:

1. **Das öffnende Tag:** Dieses besteht aus dem Namen des Elements (in diesem Fall, p), eingefasst in öffnende und schließende **spitze Klammern**. Dies gibt an, wo das Element beginnt oder anfängt, Wirkung zu zeigen — in diesem Fall, wo der Absatz beginnt.
2. **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, nur dass es einen _Schrägstrich_ vor dem Elementnamen enthält. Das zeigt an, wo das Element endet — in diesem Fall, wo der Absatz endet. Das Versäumnis, ein schließendes Tag hinzuzufügen, ist einer der typischen Anfängerfehler und kann zu seltsamen Ergebnissen führen.
3. **Der Inhalt:** Dies ist der Inhalt des Elements, der in diesem Fall einfach nur Text ist.
4. **Das Element:** Das öffnende Tag, das schließende Tag und der Inhalt zusammen bilden das Element.

Elemente können auch Attribute haben, die folgendermaßen aussehen:

![Absatz-Opening-Tag mit hervorgehobenem Klassenattribut: class=editor-note](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die Sie nicht im eigentlichen Inhalt erscheinen lassen möchten. Hier ist `class` der Attribut*name* und `editor-note` der Attribut*wert*. Das `class`-Attribut ermöglicht es Ihnen, dem Element einen nicht eindeutigen Bezeichner zu geben, der verwendet werden kann, um es (und alle anderen Elemente mit demselben `class`-Wert) mit Stilinformationen und anderen Dingen zu versehen. Einige Attribute haben keinen Wert, wie z.B. [`required`](/de/docs/Web/HTML/Attributes/required).

Attribute, die einen Wert setzen, haben immer:

1. Einen Abstand zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn das Element bereits ein oder mehrere Attribute hat).
2. Den Attributnamen gefolgt von einem Gleichheitszeichen.
3. Den Attributwert umrahmt von öffnenden und schließenden Anführungszeichen.

> [!NOTE]
> Einfache Attributwerte, die keine {{Glossary("ASCII", "ASCII")}}-Leerzeichen (oder eines der Zeichen `"` `'` `` ` `` `=` `<` `>`) enthalten, können unzitiert bleiben, aber es wird empfohlen, dass Sie alle Attributwerte zitieren, da dies den Code konsistenter und verständlicher macht.

### Elemente verschachteln

Sie können auch Elemente in andere Elemente setzen — das wird als **Verschachtelung** bezeichnet. Wenn wir sagen wollten, dass unsere Katze **sehr** grantig ist, könnten wir das Wort "very" in ein {{htmlelement("strong")}}-Element einwickeln, was bedeutet, dass das Wort stark betont werden soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Sie müssen jedoch sicherstellen, dass Ihre Elemente richtig verschachtelt sind. Im obigen Beispiel haben wir das {{htmlelement("p")}}-Element zuerst geöffnet, dann das {{htmlelement("strong")}}-Element; daher müssen wir das {{htmlelement("strong")}}-Element zuerst schließen, dann das {{htmlelement("p")}}-Element. Folgendes ist nicht korrekt:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die Elemente müssen sich korrekt öffnen und schließen, sodass sie klar innerhalb oder außerhalb voneinander liegen. Wenn sie sich wie oben gezeigt überlappen, wird Ihr Webbrowser versuchen, das Beste daraus zu machen, was Sie sagen wollten, was zu unerwarteten Ergebnissen führen kann. Also tun Sie es nicht!

### Leere Elemente

Einige Elemente haben keinen Inhalt und werden als **{{Glossary("void_element", "void elements")}}** bezeichnet. Nehmen Sie das {{htmlelement("img")}}-Element, das wir bereits auf unserer HTML-Seite haben:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Dies enthält zwei Attribute, hat jedoch kein schließendes `</img>`-Tag und keinen inneren Inhalt. Dies liegt daran, dass ein Bildelement nicht den Inhalt umschließt, um ihn zu beeinflussen. Sein Zweck ist es, ein Bild in die HTML-Seite an der Stelle einzubinden, an der es erscheint.

### Anatomie eines HTML-Dokuments

Damit sind die Grundlagen der einzelnen HTML-Elemente abgedeckt, aber sie sind alleine nicht sehr nützlich. Jetzt schauen wir uns an, wie einzelne Elemente kombiniert werden, um eine vollständige HTML-Seite zu formen. Lassen Sie uns den Code noch einmal aufrufen, den wir in unserem `index.html`-Beispiel eingefügt haben (das wir zuerst im Artikel [Dealing with files](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) gesehen haben):

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

- `<!doctype html>` — {{Glossary("Doctype", "doctype")}}. Es ist ein erforderliches Vorfeld. In den Anfängen, als HTML jung war (ca. 1991/92), waren Doctypes dazu gedacht, als Links zu einer Reihe von Regeln zu fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten, was automatische Fehlerprüfung und andere nützliche Dinge bedeuten konnte. Heutzutage tun sie jedoch nicht viel und sind im Grunde nur notwendig, um sicherzustellen, dass Ihr Dokument korrekt funktioniert. Das ist alles, was Sie für den Moment wissen müssen.
- `<html></html>` — das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt der Seite und wird manchmal als Wurzelelement bezeichnet. Es enthält auch das `lang`-Attribut, das die primäre Sprache des Dokuments festlegt.
- `<head></head>` — das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für all die Dinge, die Sie auf der HTML-Seite einfügen möchten, die _nicht_ der Inhalt sind, den Sie den Besuchern Ihrer Seite zeigen. Dazu gehören Dinge wie {{Glossary("keyword", "Schlüsselwörter")}} und eine Beschreibung der Seite, die Sie in Suchergebnissen erscheinen lassen möchten, CSS zur Gestaltung unseres Inhalts, Zeichensatzdeklarationen und mehr.
- `<meta charset="utf-8">` — Dieses Element legt den Zeichensatz fest, den Ihr Dokument verwenden soll (UTF-8), welcher die meisten Zeichen aus der überwiegenden Mehrheit der geschriebenen Sprachen umfasst. Im Wesentlichen kann es jetzt jeden Textinhalt verarbeiten, den Sie darauf legen könnten. Es gibt keinen Grund, dies nicht festzulegen, und es kann helfen, später einige Probleme zu vermeiden.
- `<meta name="viewport" content="width=device-width">` — Dieses [viewport element](/de/docs/Web/CSS/Viewport_concepts#mobile_viewports) stellt sicher, dass die Seite in der Breite des Viewports dargestellt wird, um zu verhindern, dass mobile Browser Seiten darstellen, die breiter sind als der Viewport, und diese dann verkleinern.
- `<title></title>` — das {{htmlelement("title")}}-Element. Dies setzt den Titel Ihrer Seite, der in der Tab-Leiste des Browsers erscheint, in dem die Seite geladen ist. Es wird auch verwendet, um die Seite zu beschreiben, wenn Sie sie als Lesezeichen/Favorit hinzufügen.
- `<body></body>` — das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die Sie Webnutzern zeigen möchten, wenn sie Ihre Seite besuchen, sei es Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder sonst irgendetwas.

## Bilder

Wenden wir uns erneut dem {{htmlelement("img")}}-Element zu:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

Wie bereits gesagt, bettet es ein Bild in unsere Seite an der Position ein, an der es erscheint. Es tut dies über das `src` (source)-Attribut, das den Pfad zu unserer Bilddatei enthält.

Wir haben auch ein `alt` (alternative)-Attribut hinzugefügt. In dem [`alt` Attribut](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions) spezifizieren Sie beschreibenden Text für Benutzer, die das Bild nicht sehen können, möglicherweise aus folgenden Gründen:

1. Sie sind sehbehindert. Benutzer mit erheblichen Sehbehinderungen verwenden oft Werkzeuge, die alt-Text für sie vorlesen.
2. Irgendetwas ist schiefgelaufen, das verhindert, dass das Bild angezeigt wird. Versuchen Sie zum Beispiel absichtlich den Pfad in Ihrem `src`-Attribut zu ändern, um ihn inkorrekt zu machen. Wenn Sie speichern und die Seite neu laden, sollten Sie etwas wie dies anstelle des Bildes sehen:

![Die Worte: my test image](alt-text-example.png)

Die Schlüsselwörter für alt-Text sind "beschreibender Text". Der von Ihnen geschriebene alt-Text sollte dem Leser genügend Informationen geben, um eine gute Vorstellung davon zu haben, was das Bild vermittelt. In diesem Beispiel ist unser aktueller Text "My test image" überhaupt nicht gut. Eine viel bessere Alternative für unser Firefox-Logo wäre "Das Firefox-Logo: ein lodernder Fuchs umgibt die Erde."

Versuchen Sie jetzt, einen besseren alt-Text für Ihr Bild zu verfassen.

> [!NOTE]
> Erfahren Sie mehr über Barrierefreiheit in unserem [Barrierefreiheits-Lernmodul](/de/docs/Learn/Accessibility) und [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie man ein alt-Attribut für Bilder in verschiedenen Situationen verwendet.

## Text kennzeichnen

In diesem Abschnitt werden einige wesentliche HTML-Elemente behandelt, die Sie zum Kennzeichnen von Text verwenden.

### Überschriften

Überschriftselemente ermöglichen es Ihnen, anzugeben, dass bestimmte Teile Ihres Inhalts Überschriften — oder Unterüberschriften — sind. In der gleichen Weise, in der ein Buch den Haupttitel, Kapitelüberschriften und Untertitel hat, kann ein HTML-Dokument dies auch. HTML enthält 6 Überschriftsebenen, {{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}, obwohl Sie in der Regel nur 3 bis 4 verwenden:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Alles in HTML zwischen `<!--` und `-->` ist ein **HTML-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. In anderen Worten, sie sind auf der Seite nicht sichtbar - nur im Code. HTML-Kommentare sind eine Möglichkeit, hilfreiche Hinweise über Ihren Code oder Ihre Logik zu schreiben.

Versuchen Sie nun, einen geeigneten Titel für Ihre HTML-Seite direkt über Ihrem {{htmlelement("img")}}-Element hinzuzufügen.

> [!NOTE]
> Sie werden feststellen, dass Ihre Überschriftsebene 1 einen impliziten Stil hat. Verwenden Sie keine Überschriftselemente, um Text größer oder fett zu machen, da sie für [Barrierefreiheit](/de/docs/Learn/Accessibility/HTML#text_content) und [andere Gründe wie SEO](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure) verwendet werden. Versuchen Sie, eine sinnvolle Reihenfolge von Überschriften auf Ihren Seiten zu erstellen, ohne Ebenen zu überspringen.

### Absätze

Wie bereits oben erklärt, sind {{htmlelement("p")}}-Elemente dazu da, Absätze von Text zu enthalten; Sie werden diese häufig verwenden, wenn Sie regulären Textinhalt kennzeichnen:

```html
<p>This is a single paragraph</p>
```

Fügen Sie Ihren Beispieltext (den Sie aus [_Wie wird Ihre Webseite aussehen?_](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) haben sollten) in einen oder mehrere Absätze ein, die direkt unter Ihrem {{htmlelement("img")}}-Element platziert werden.

### Listen

Ein großer Teil des Inhalts im Web sind Listen, und HTML hat spezielle Elemente dafür. Das Markieren von Listen besteht immer aus mindestens 2 Elementen. Die häufigsten Listentypen sind geordnete und ungeordnete Listen:

1. **Ungeordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente keine Rolle spielt, wie zum Beispiel eine Einkaufsliste. Diese sind in ein {{htmlelement("ul")}}-Element eingebettet.
2. **Geordnete Listen** sind für Listen, bei denen die Reihenfolge der Elemente wichtig ist, wie bei einem Rezept. Diese sind in ein {{htmlelement("ol")}}-Element eingebettet.

Jedes Element innerhalb der Listen wird in ein {{htmlelement("li")}} (Listenelement) eingebettet.

Zum Beispiel, wenn wir den Teil des folgenden Paragraphenfragments in eine Liste umwandeln wollten

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

Versuchen Sie, einer Beispielseite eine geordnete oder ungeordnete Liste hinzuzufügen.

## Links

Links sind sehr wichtig — sie sind das, was das Web zu einem Web macht! Um einen Link hinzuzufügen, müssen wir ein Element verwenden — {{htmlelement("a")}} — "a" ist die Kurzform für "Anker". Um Text innerhalb Ihres Absatzes in einen Link umzuwandeln, folgen Sie diesen Schritten:

1. Wählen Sie einen Text aus. Wir haben den Text "Mozilla Manifesto" gewählt.
2. Umhüllen Sie den Text mit einem {{htmlelement("a")}}-Element, wie unten gezeigt:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Geben Sie dem {{htmlelement("a")}}-Element ein `href`-Attribut, wie unten gezeigt:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Füllen Sie den Wert dieses Attributs mit der Webadresse, auf die der Link zeigen soll:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Sie könnten unerwartete Ergebnisse bekommen, wenn Sie den Teil `https://` oder `http://`, genannt das _Protokoll_, am Anfang der Webadresse weglassen. Nachdem Sie einen Link erstellt haben, klicken Sie darauf, um sicherzustellen, dass er Sie dahin schickt, wohin Sie wollten.

> **Hinweis:** `href` könnte auf den ersten Blick wie eine eher obskure Wahl für einen Attributnamen erscheinen. Wenn Sie Schwierigkeiten haben, es sich zu merken, bedenken Sie, dass es für _**h**ypertext **ref**erence_ steht.

Fügen Sie Ihrer Seite jetzt einen Link hinzu, falls Sie dies noch nicht getan haben.

## Schlussfolgerung

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die wie die unten aussieht (Sie können sie auch [hier ansehen](https://mdn.github.io/beginner-html-site/)):

![Ein Webseitenscreenshot zeigt ein Firefox-Logo, eine Überschrift mit der Aufschrift Mozilla is cool und zwei Absätze mit Fülltext](finished-test-page-small.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode](https://github.com/mdn/beginner-html-site/blob/main/index.html) auf GitHub vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Um mehr zu erfahren, gehen Sie zu unserem [HTML lernen](/de/docs/Learn/HTML)-Thema.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}
