---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 48864e407d8392731d68dd7895ffa454465dfaaa
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie möglicherweise gehört haben. Außerdem wird erklärt, wo diese in HTML passen. Sie erfahren, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite aufgebaut ist und andere wichtige grundlegende Sprachmerkmale. Unterwegs gibt es auch die Gelegenheit, mit HTML zu spielen!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a> und grundlegende Kenntnisse im <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Anatomie eines HTML-Elements — Element, öffnender Tag, Inhalt, schließender Tag, Attribute.</li>
          <li>Der HTML-Body und seine Funktion als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> (auch bekannt als void elements) sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctypes am Anfang von HTML-Dokumenten. Sein ursprünglich beabsichtigter Zweck und die Tatsache, dass er inzwischen eher ein historisches Relikt ist.</li>
          <li>Verständnis dafür, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern mitteilt, wie die von Ihnen besuchten Webseiten strukturiert werden sollen. Es kann so kompliziert oder einfach sein, wie es der Webentwickler möchte. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, mit denen Sie verschiedene Teile von Inhalten einschließen, umhüllen oder _markieren_ können, damit sie auf eine bestimmte Weise erscheinen oder sich verhalten. Die einschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verbinden, Wörter kursiv darstellen und so weiter. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir wollten, dass der Text allein stehen soll, könnten wir festlegen, dass es sich um einen Absatz handelt, indem wir ihn in ein Absatz- ({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML befindet sich in Textdateien, die als **HTML-Dokumente** oder einfach **Dokumente** bezeichnet werden, mit einer `.html` Dateierweiterung. Während wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und spezifiziert ihre Struktur.

Die am häufigsten angetroffene HTML-Datei ist `index.html`, die in der Regel verwendet wird, um die Inhalte der Startseite einer Website zu enthalten. Es ist auch üblich, Unterordner mit eigenen `index.html` Dateien zu sehen, sodass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht groß- oder kleinschreibungsempfindlich. Das heißt, sie können in Großbuchstaben oder in Kleinbuchstaben geschrieben werden. Zum Beispiel könnte ein {{htmlelement("title")}} Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, etc. geschrieben werden und er würde funktionieren. Es ist jedoch am besten, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatzelement aus dem vorherigen Abschnitt weiter erkunden:

![Ein Beispielcode-Schnipsel, der die Struktur eines HTML-Elements demonstriert. <p> Meine Katze ist sehr grummelig </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Der öffnende Tag:** Dieser besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Paragraph), eingeschlossen in öffnende und schließende Winkelklammern. Dieser öffnende Tag kennzeichnet, wo das Element beginnt oder zu wirken beginnt. In diesem Beispiel geht er dem Anfang des Absatztexts voraus.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Der schließende Tag:** Dieser ist derselbe wie der öffnende Tag, außer dass er einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Auslassen eines schließenden Tags ist ein häufiger Anfängerfehler, der zu merkwürdigen Ergebnissen führen kann.

Das Element ist der öffnende Tag, gefolgt von Inhalt, gefolgt vom schließenden Tag.

> [!NOTE]
> Besuchen Sie unseren Lernpartner Scrimba für eine interaktive Erklärung von HTML-Tags: [HTML tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>.

### Ihr erstes HTML-Element erstellen

Lassen Sie uns Ihnen etwas Übung im Schreiben eigener HTML-Elemente geben:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie die Textzeile mit den Tags `<em>` und `</em>`. Um das Element _zu öffnen_, setzen Sie das öffnende Tag `<em>` am Anfang der Zeile. Um das Element _zu schließen_, setzen Sie das schließende Tag `</em>` am Ende der Zeile. Dadurch sollte der gerenderte Text im Ausgabefeld kursiv formatiert werden.
3. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige weitere HTML-Elemente zu finden und auf das Textbeispiel anzuwenden.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich stecken bleiben, können Sie die Lösung unter dem Codeblock anzeigen.

```html live-sample___basic_html_1
This is my text.
```

{{ EmbedLiveSample('basic_html_1', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihre fertige HTML-Zeile sollte so aussehen:

```html
<em>This is my text.</em>
```

</details>

### Elemente verschachteln

Elemente können innerhalb anderer Elemente platziert werden. Dies nennt man _Verschachtelung_. Wenn wir sagen wollten, dass unsere Katze **sehr** grummelig ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}} Element einbetten, was bedeutet, dass das Wort eine stärkere Textformatierung erhält:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt einen richtigen und einen falschen Weg, um Elemente zu verschachteln. Im obigen Beispiel haben wir zuerst das `p` Element geöffnet und dann das `strong` Element geöffnet. Für eine korrekte Verschachtelung sollten wir das `strong` Element zuerst schließen, bevor wir das `p` schließen.

Das Folgende ist ein Beispiel für die _falsche_ Art des Verschachtelns:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen in einer Weise geöffnet und geschlossen werden, dass sie sich innerhalb oder außerhalb voneinander befinden**. Mit der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art von Raterei kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen nur aus einem einzigen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente nennt man {{Glossary("void_element", "Leere Elemente")}}. Zum Beispiel bettet das {{htmlelement("img")}} Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde Folgendes ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML ist es nicht erforderlich, einen `/` am Ende eines void elements Tags hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen wie folgt aus:

![paragraph-Tag mit 'class="editor-note"' Attribut hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`** Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen zu versehen.

Ein Attribut sollte folgendes haben:

- Einen Abstand zwischen ihm und dem Elementnamen. (Bei einem Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, eingeschlossen in öffnende und schließende Anführungszeichen.

### Einem Element Attribute hinzufügen

Jetzt sind Sie wieder an der Reihe. In diesem Abschnitt werden wir Sie dazu bringen, Attribute zu einem `<img>` Element hinzuzufügen, um ein Bild auf der Seite anzuzeigen. Das `<img>` Element kann mehrere Attribute haben, einschließlich:

- `src`: Ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`: Eine Textbeschreibung des Bildes. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`: Die Breite des Bildes in Pixel. Zum Beispiel: `width="300"`.
- `height`: Die Höhe des Bildes in Pixel. Zum Beispiel: `height="300"`.

Folgen Sie den untenstehenden Schritten, um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Suchen Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf und wählen Sie _Bildlink/-adresse kopieren_.
3. Fügen Sie im MDN Playground das `src` Attribut zum `<img>` Element hinzu und setzen Sie seinen Wert auf den Link aus Schritt 2.
4. Setzen Sie das `alt` Attribut auf eine passende Beschreibung des Bildes.
5. Setzen Sie das `width` Attribut auf einen Wert von beispielsweise `300`, damit das Bild im Ausgabefeld besser sichtbar ist. Passen Sie es bei Bedarf an.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich stecken bleiben, können Sie die Lösung unter dem Codeblock anzeigen.

```html live-sample___basic_html_2
<img />
```

{{ EmbedLiveSample('basic_html_2', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML-Element sollte so aussehen:

```html
<img src="<URL-OF-IMAGE>" alt="A description of the image" width="300" />
```

</details>

### Boolesche Attribute

Manchmal sehen Sie Attribute, die ohne Werte geschrieben sind. Dies ist völlig akzeptabel. Diese nennt man {{Glossary("Boolean/HTML", "Boolesche Attribute")}}. Wenn ein boolesches Attribut ohne Wert oder mit einem beliebigen Wert, selbst wie `"false"`, geschrieben wird, wird das boolesche Attribut immer auf wahr gesetzt. Ansonsten, wenn das Attribut nicht in einem HTML-Tag geschrieben wird, wird das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Wert des Attributs entweder die leere Zeichenfolge ist (einschließlich wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Name des Attributs, aber andere Werte funktionieren genauso. Zum Beispiel, betrachten Sie das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) Attribut, das Sie Formulareingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, sodass Benutzer keine Eingaben machen können. Die deaktivierten Elemente haben normalerweise ein ausgegrautes Erscheinungsbild.) Zum Beispiel:

```html
<input type="text" disabled="disabled" />
```

Als Abkürzung ist es akzeptabel, dies wie folgt zu schreiben:

```html
<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled />

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text" />
```

Zum Vergleich enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Der HTML-Code aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code vieler anderer Websites ansehen, stoßen Sie möglicherweise auf eine Reihe von seltsamen Markup-Stilen, einschließlich Attributwerten ohne Anführungszeichen. Dies ist in bestimmten Umständen erlaubt, kann aber in anderen Umständen auch Ihr Markup brechen. Das Element im folgenden Code-Snippet `<a>` wird Anker genannt. Anker schließen Text ein und verwandeln ihn in Links. Das `href` Attribut gibt die Webadresse an, auf die der Link zeigt. Sie können diese grundlegende Version unten schreiben, nur mit dem `href` Attribut, so:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title` Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` in der gleichen Weise wie das `href` Attribut hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretiert der Browser das Markup, verwechselt das `title` Attribut mit drei Attributen: einem title-Attribut mit dem Wert `The`, und zwei booleschen Attributen, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, über den Link zu schweben, um den Titeltext zu sehen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Fügen Sie die Attribut-Anführungszeichen immer ein. Es vermeidet solche Probleme und führt zu lesbarem Code.

### Einzel- oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch einzelne Anführungszeichen in einigen HTML-Codes sehen. Dies ist eine Frage des Stils. Sie können frei entscheiden, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Achten Sie darauf, keine einzelnen und doppelten Anführungszeichen zu mischen. Dieses Beispiel (unten) zeigt eine Art von Anführungszeichenmischung, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte verwenden:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfaches oder doppeltes Anführungszeichen) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel, dies wird brechen:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie folgendes tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind alleine nicht sehr nützlich. Schauen wir uns als nächstes an, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

Hier haben wir:

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten. Doctypes sahen früher so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Relikt, das hinzugefügt werden muss, damit alles andere richtig funktioniert. `<!doctype html>` ist der kürzeste Zeichenfolgen von Zeichen, der als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}} Element. Dieses Element umfasst alle Inhalte auf der Seite. Es wird manchmal als das Wurzeleröt bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}} Element. Dieses Element dient als Container für alles, was Sie auf der HTML-Seite aufnehmen möchten, **was nicht der Inhalt ist**, den die Seite den Betrachtern zeigen wird. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in Suchergebnissen erscheinen würden, CSS zur Gestaltung von Inhalten, Zeichensatzdeklarationen und mehr. Sie erfahren mehr darüber im nächsten Artikel der Serie.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}} Element. Dieses Element repräsentiert Metadaten, die nicht durch andere HTML-Meta-bezogene Elemente dargestellt werden können, wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}}. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset) Attribut gibt die Zeichenkodierung für Ihr Dokument als UTF-8 an, das die meisten Zeichen der überwiegenden Mehrheit der menschlichen Schriftsprache umfasst. Mit dieser Einstellung kann die Seite nun mit jedem Textinhalt umgehen, den sie möglicherweise enthält. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, später einige Probleme zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}} Element. Dies setzt den Titel der Seite, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen wird. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}} Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer.

### Einige Funktionen zu einem HTML-Dokument hinzufügen

An diesem Punkt möchten wir, dass Sie das Schreiben von etwas umfangreicherem HTML-Inhalt üben. Dazu haben Sie ein paar Möglichkeiten — Sie können das HTML auf Ihrem eigenen Computer erstellen oder den MDN Playground wie in den vorherigen Beispielen verwenden.

- Um es auf Ihrer lokalen Maschine zu tun:

  1. Kopieren Sie das HTML-Seitenbeispiel aus dem vorherigen Abschnitt und fügen Sie es in eine neue Datei in Ihrem Code-Editor ein.
  2. Nehmen Sie die Änderungen an der Seite vor, die in den Anweisungen unten beschrieben sind.
  3. Speichern Sie die Datei als `index.html` und laden Sie sie dann in einen neuen Browser-Tab, um die Ergebnisse zu sehen.

  > [!NOTE]
  > Sie können diese [grundlegende HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) auch in unserem GitHub-Repo finden. Sie können eine Kopie dieser Datei machen, anstatt sie selbst zu erstellen.

- Um es im MDN Playground zu tun, klicken Sie auf **"Play"** im Ausgabefeld unten, um das Beispiel zu bearbeiten, und folgen Sie dann den unten stehenden Anweisungen. Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Löschen_ Taste im MDN Playground löschen.

```html hidden live-sample___basic_html_3
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

{{ EmbedLiveSample('basic_html_3', "100%", 60) }}

Hier sind die Anweisungen, denen Sie folgen sollen:

1. Fügen Sie direkt nach dem öffnenden Tag des {{htmlelement("body")}} Elements einen Haupttitel für das Dokument hinzu. Dieser sollte in ein öffnendes `<h1>` Tag und ein schließendes `</h1>` Tag eingeschlossen werden.
2. Bearbeiten Sie den Absatzinhalt, um Text über ein Thema einzufügen, das Sie interessant finden.
3. Heben Sie wichtige Wörter fett hervor, indem Sie sie in ein {{htmlelement("strong")}} Element einschließen.
4. Fügen Sie zwei Links zu Ihrem Absatz hinzu. Dies wird mit dem {{htmlelement("a")}} Element erreicht.
5. Fügen Sie ein Bild in Ihr Dokument ein, wie [im vorherigen Artikel erklärt](#einem_element_attribute_hinzufügen). Platzieren Sie es unter dem Absatz. Wenn es zu groß ist, um gesehen zu werden, fügen Sie ihm ein `width` Attribut hinzu, um es zu verkleinern.

Wenn Sie wirklich stecken bleiben, können Sie die Lösung hier sehen:

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Inhalt Ihres fertigen HTML-Element-Bodys sollte so aussehen:

```html
<h1>Some music</h1>
<p>
  I really enjoy <strong>playing the drums</strong>. One of my favorite drummers
  is Neal Peart, who used to play in the band
  <a href="https://en.wikipedia.org/wiki/Rush_%28band%29">Rush</a>. My favorite
  Rush album is currently
  <a href="https://www.deezer.com/album/942295">Moving Pictures</a>.
</p>
<img
  src="https://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg"
  alt="Rush Moving Pictures album cover"
  width="300" />
```

</details>

### Leerzeichen in HTML

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass im Code viel Leerraum enthalten ist. Dies ist optional. Diese beiden Code-Snippets sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal wie viel Leerraum Sie im Inhalt eines HTML-Elements verwenden (der aus einem oder mehreren Leerzeichen, aber auch aus Zeilenumbrüchen bestehen kann), der HTML-Parser reduziert jede Sequenz von Leerzeichen auf ein einziges Leerzeichen beim Rendern des Codes. Warum also so viel Leerraum verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn er schön formatiert ist. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als dasjenige, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung zu wählen (wie viele Leerstellen für jede Verschachtelungsebene, zum Beispiel), aber Sie sollten überlegen, ihn zu formatieren.

Lassen Sie uns einen Blick darauf werfen, wie der Browser die beiden oberen Absätze mit und ohne Leerzeichen rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Der Zugriff auf die [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript wird den gesamten Leerraum intakt halten.
> Dies kann unerwartete Ergebnisse liefern, wenn der Leerraum vom Browser abgeschnitten wird.

```js
const noWhitespace = document.getElementById("noWhitespace").innerHTML;
console.log(noWhitespace);
// "Dogs are silly."

const whitespace = document.getElementById("whitespace").innerHTML;
console.log(whitespace);
// "Dogs
//    are
//        silly."
```

## Zeichenreferenzen: Einschließen von Sonderzeichen in HTML

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügen Sie also eines dieser Sonderzeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein kaufmännisches Und-Zeichen oder ein kleiner-es Zeichen verwenden möchten, und nicht als Code interpretiert werden soll.

Dies tun Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen darstellen, um in diesen genauen Umständen verwendet zu werden. Jede Zeichenreferenz beginnt mit einem kaufmännischen Und (&) und endet mit einem Semikolon (;).

| Vorzeichen | Zeichenreferenzäquivalent |
| ---------- | ------------------------- |
| <          | `&lt;`                    |
| >          | `&gt;`                    |
| "          | `&quot;`                  |
| '          | `&apos;`                  |
| &          | `&amp;`                   |

Das Zeichenreferenzäquivalent lässt sich leicht merken, da der Text, den es verwendet, wie weniger als für `&lt;`, Anführungszeichen für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entity-Referenzen zu erfahren, siehe [Liste der XML- und HTML-Zeichen-Entity-Referenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im Beispiel unten gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Output unten sehen Sie, dass der erste Absatz schief geht. Der Browser interpretiert das zweite Auftreten von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht gut aus, weil er Zeichenreferenzen für die Zeichen verwendet.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entity-Referenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange das [Zeichen-Encoding Ihres HTMLs auf UTF-8 eingestellt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus zum Schreiben von Kommentaren im Code. Browser ignorieren Kommentare, wodurch Kommentare für den Benutzer effektiv unsichtbar werden. Der Zweck von Kommentaren ist es, Ihnen zu ermöglichen, Notizen im Code aufzunehmen, um Ihre Logik oder das Codieren zu erklären. Dies ist sehr nützlich, wenn Sie nach genügend langer Abwesenheit, dass Sie sich nicht vollständig daran erinnern, zu einem Code zurückkehren. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umgeben Sie ihn mit den speziellen Markierungen `<!--` und `-->`. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird nur der erste Absatz in der Live-Ausgabe angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, dass Ihnen Ihre Tour durch die Grundlagen von HTML gefallen hat.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die nachfolgenden Artikel in diesem Modul gehen näher auf einige der hier eingeführten Themen ein und stellen auch andere Konzepte der Sprache vor.

- Während Sie anfangen, mehr über HTML zu lernen, sollten Sie überlegen, die Grundlagen von CSS (Cascading Style Sheets) zu lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die verwendet wird, um Webseiten zu gestalten, wie das Ändern von Schriftarten oder Farben oder das Ändern des Seitenlayouts. HTML und CSS arbeiten gut zusammen, wie Sie bald feststellen werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
