---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, von denen Sie vielleicht gehört haben. Es wird auch erklärt, wo diese in HTML passen. Sie lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite strukturiert ist, und andere wichtige grundlegende Spracheigenschaften. Unterwegs haben Sie auch die Möglichkeit, mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, und grundlegende Kenntnisse im <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Anatomie eines HTML-Elements — Element, öffnendes Tag, Inhalt, schließendes Tag, Attribute.</li>
          <li>Der HTML-Body und sein Zweck als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctypes am Anfang von HTML-Dokumenten. Sein ursprünglich beabsichtigter Zweck und die Tatsache, dass er jetzt eher als historisches Artefakt betrachtet werden kann.</li>
          <li>Verständnis, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowser anweist, wie sie die Webseiten, die Sie besuchen, strukturieren sollen. Sie kann so komplex oder einfach sein, wie es der Webentwickler möchte. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile von Inhalten zu umschließen, einzubinden oder _zu markieren_, damit sie auf eine bestimmte Weise erscheinen oder funktionieren. Die umschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verbinden, Wörter kursiv darstellen usw. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir wollten, dass der Text für sich alleine steht, könnten wir ihn als Absatz kennzeichnen, indem wir ihn in ein Absatz- ({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML befindet sich in Textdateien, die **HTML-Dokumente** oder einfach **Dokumente** genannt werden, mit der Dateiendung `.html`. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und legt ihre Struktur fest.

Die häufigste HTML-Datei, die Sie begegnen werden, ist `index.html`, die im Allgemeinen verwendet wird, um die Startseiteninhalte einer Website zu enthalten. Es ist auch üblich, Unterverzeichnisse mit eigenen `index.html`-Dateien zu sehen, so dass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht fallunterscheidend. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden, und es wird funktionieren. Es ist jedoch am besten, alle Tags der Konsistenz und Lesbarkeit wegen in Kleinbuchstaben zu schreiben.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatzelement aus dem vorherigen Abschnitt genauer betrachten:

![Ein Beispiel für ein Code-Snippet, das die Struktur eines HTML-Elements zeigt.<p> Meine Katze ist sehr grummelig </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), umschlossen in öffnenden und schließenden spitzen Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder in Kraft tritt. In diesem Beispiel geht es dem Anfang des Absatztextes voraus.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, mit dem Unterschied, dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Versäumnis, ein schließendes Tag einzufügen, ist ein häufiger Anfängerfehler, der merkwürdige Ergebnisse produzieren kann.

Das Element besteht aus dem öffnenden Tag, gefolgt vom Inhalt, gefolgt vom schließenden Tag.

> [!NOTE]
> Schauen Sie bei unserem Lernpartner Scrimba vorbei, um in der [HTML Tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Lektion eine interaktive Erklärung von HTML-Tags zu erhalten.

### Erstellen Ihres ersten HTML-Elements

Lassen Sie uns einige Übungen zum Schreiben eigener HTML-Elemente machen:

1. Klicken Sie im folgenden Codeblock auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie die Textzeile mit den Tags `<em>` und `</em>`. Um das Element _zu öffnen_, setzen Sie das öffnende Tag `<em>` am Anfang der Zeile. Um das Element _zu schließen_, setzen Sie das schließende Tag `</em>` am Ende der Zeile. Dies sollte dem ausgegebenen Text im Ausgabefenster die Formatierung kursiv verleihen.
3. Wenn Sie Lust auf ein Abenteuer haben, versuchen Sie, weitere HTML-Elemente nachzuschlagen und auf das Textbeispiel anzuwenden.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb des Codeblocks anzeigen.

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

### Verschachtelung von Elementen

Elemente können innerhalb anderer Elemente platziert werden. Dies wird _Verschachtelung_ genannt. Wenn wir sagen wollten, dass unsere Katze **sehr** grummelig ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einbinden, was bedeutet, dass das Wort eine stärkere Textformatierung erhalten soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt eine richtige und eine falsche Art, die Verschachtelung zu machen. Im obigen Beispiel haben wir das `p`-Element zuerst geöffnet und dann das `strong`-Element. Für eine ordnungsgemäße Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p` schließen.

Das Folgende ist ein Beispiel für die _falsche_ Art, die Verschachtelung zu machen:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so öffnen und schließen, dass sie innerhalb oder außerhalb voneinander liegen**. Mit der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absicht raten. Diese Art von Raten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzelnen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}}-Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde die folgende Ausgabe erzeugen:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML gibt es keine Anforderung, ein `/` am Ende eines leeren Elements-Tags hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatz-Tag mit dem 'class="editor-note"'-Attribut hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`**-Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen anzusprechen.

Ein Attribut sollte haben:

- Ein Leerzeichen zwischen ihm und dem Elementnamen. (Für ein Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, eingeschlossen in öffnende und schließende Anführungszeichen.

### Hinzufügen von Attributen zu einem Element

Jetzt sind Sie wieder dran. In diesem Abschnitt werden wir Sie dazu bringen, Attribute zu einem `<img>`-Element hinzuzufügen, um ein Bild auf der Seite anzuzeigen. Das `<img>`-Element kann mehrere Attribute haben, einschließlich:

- `src`: Ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`: Eine Textbeschreibung des Bildes. Zum Beispiel: `alt="Das Firefox-Icon"`.
- `width`: Die Breite des Bildes in Pixel. Zum Beispiel: `width="300"`.
- `height`: Die Höhe des Bildes in Pixel. Zum Beispiel: `height="300"`.

Befolgen Sie die untenstehenden Schritte, um die Aufgabe abzuschließen:

1. Klicken Sie im folgenden Codeblock auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Suchen Sie Ihr Lieblingsbild online, klicken Sie es mit der rechten Maustaste an und wählen Sie _Bildlink/-adresse kopieren_.
3. Fügen Sie im MDN Playground das `src`-Attribut zum `<img>`-Element hinzu und setzen Sie dessen Wert auf den Link aus Schritt 2.
4. Setzen Sie das `alt`-Attribut auf eine passende Beschreibung des Bildes.
5. Setzen Sie das `width`-Attribut auf einen Wert von beispielsweise `300`, damit Sie das Bild im Ausgabefenster besser sehen können. Wenn nötig, passen Sie es an.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb des Codeblocks anzeigen.

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

Manchmal werden Sie Attributen ohne Werte begegnen. Dies ist völlig akzeptabel. Diese werden {{Glossary("Boolean/HTML", "boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne Wert oder mit einem beliebigen Wert, sogar wie `"false"`, geschrieben wird, ist das boolesche Attribut immer auf true gesetzt. Andernfalls, wenn das Attribut in einem HTML-Tag nicht geschrieben ist, ist das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Attributswert entweder der leere String (einschließlich, wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Attributname ist, aber andere Werte funktionieren gleich. Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut, das Sie Eingabeelementen von Formularen zuweisen können. (Sie verwenden dies, um die Eingabeelemente des Formulars zu deaktivieren, damit der Benutzer keine Eingaben machen kann. Die deaktivierten Elemente haben normalerweise einen ausgegrauten Look.) Zum Beispiel:

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

Zum Vergleich enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Das HTML aus dem obigen Beispiel liefert dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code für viele andere Websites anschauen, werden Sie möglicherweise auf eine Reihe seltsamer Markup-Stile stoßen, einschließlich Attributwerten ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann aber auch unter anderen Umständen Ihr Markup beschädigen. Das Element im Code-Snippet unten, `<a>`, wird Anker genannt. Anker umschließen Text und verwandeln ihn in Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link zeigt. Sie können diese grundlegende Version unten mit _nur_ dem `href`-Attribut wie folgt schreiben:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` in derselben Weise wie das `href`-Attribut hinzufügen, treten Probleme auf:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, interpretiert der Browser das Markup falsch, und denkt, dass das `title`-Attribut drei Attribute sind: ein title-Attribut mit dem Wert `The`, und zwei boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, über den Link zu fahren, um den Titeltext anzuzeigen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Beziehen Sie immer die Attributanführungszeichen ein. Es vermeidet solche Probleme und resultiert in besser lesbarem Code.

### Einzel- oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch feststellen, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch in einigen HTML-Codes auf einfache Anführungszeichen stoßen. Dies ist eine Frage des Stils. Sie können wählen, welche Sie bevorzugen. Beide dieser Zeilen sind gleich:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie nicht einfache Anführungszeichen und doppelte Anführungszeichen mischen. Dieses Beispiel (unten) zeigt eine Art von Zitatenmischung, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte einfügen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfaches oder doppeltes Anführungszeichen) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel, dies wird scheitern:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind für sich genommen nicht sehr nützlich. Als nächstes schauen wir, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML noch jung war (1991-1992), sollten Doctypes als Links zu einem Satz von Regeln dienen, denen die HTML-Seite folgen musste, um als gutes HTML angesehen zu werden. Doctypes sahen früher etwa so aus:

   ```html
   <!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Artefakt, das hinzugefügt werden muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenkette, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt der Seite. Es ist manchmal als das Stamm-Element bekannt.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für alles, was Sie auf der HTML-Seite einschließen möchten, **das nicht der Inhalt** ist, den die Seite den Betrachtern zeigt. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen würde, CSS zur Stilgestaltung von Inhalten, Zeichensatzdeklarationen und mehr. Sie werden mehr darüber im nächsten Artikel dieser Serie erfahren.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element repräsentiert Metadaten, die nicht durch andere HTML-Meta-bezogene Elemente wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset)-Attribut spezifiziert die Zeichencodierung für Ihr Dokument als UTF-8, das die meisten Zeichen aus der überwiegenden Mehrheit der menschlichen Schriftsysteme umfasst. Mit dieser Einstellung kann die Seite jetzt jeden Textinhalt, den sie enthalten könnte, unterstützen. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dieses legt den Titel der Seite fest, der im Browser-Tab erscheint, in dem die Seite geladen wird. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dieses enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bildern, Videos, Spielen, abspielbaren Audiotracks oder was auch immer.

### Hinzufügen von Funktionen zu einem HTML-Dokument

An diesem Punkt möchten wir, dass Sie üben, einige etwas umfangreichere HTML-Inhalte zu schreiben. Dazu haben Sie ein paar Möglichkeiten — Sie können das HTML auf Ihrem lokalen Computer erstellen oder den MDN Playground wie in den vorherigen Beispielen verwenden.

- Um es auf Ihrem lokalen Computer zu tun:
  1. Kopieren Sie das im vorherigen Abschnitt aufgeführte HTML-Seitenbeispiel und fügen Sie es in eine neue Datei in Ihrem Code-Editor ein.
  2. Nehmen Sie die im Folgenden aufgeführten Änderungen an der Seite vor.
  3. Speichern Sie die Datei als `index.html` und laden Sie sie dann in einem neuen Browser-Tab, um die Ergebnisse zu sehen.

  > [!NOTE]
  > Sie können diese [einfache HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) auch in unserem GitHub-Repo finden. Sie können eine Kopie dieser Datei anstelle der Erstellung selbst erstellen.

- Um es im MDN Playground zu tun, klicken Sie im Ausgabefenster unten auf **"Play"**, um das Beispiel zu bearbeiten, und befolgen Sie dann die untenstehenden Anweisungen. Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen.

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

Hier sind die Anweisungen, die Sie befolgen sollen:

1. Direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements fügen Sie einen Haupttitel für das Dokument hinzu. Dieser sollte in ein `<h1>`-öffnendes Tag und ein `</h1>`-schließendes Tag eingeschlossen sein.
2. Bearbeiten Sie den Absatzinhalt, um Text über ein Thema zu enthalten, das Sie interessant finden.
3. Machen Sie wichtige Wörter fett, indem Sie sie in ein {{htmlelement("strong")}}-Element einfügen.
4. Fügen Sie Ihrem Absatz zwei Links hinzu. Dies wird mit dem {{htmlelement("a")}}-Element erreicht.
5. Fügen Sie Ihrem Dokument ein Bild hinzu, wie [früher im Artikel erklärt](#hinzufügen_von_attributen_zu_einem_element). Platzieren Sie es unter dem Absatz. Wenn es zu groß ist, um es zu sehen, fügen Sie ihm ein `width`-Attribut hinzu, um es zu verkleinern.

Wenn Sie wirklich feststecken, können Sie die Lösung hier anzeigen:

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Inhalt Ihres fertigen HTML-Elementkörpers sollte ungefähr so aussehen:

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

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass viel Leerraum im Code enthalten ist. Dies ist optional. Diese zwei Code-Snippets sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal wie viel Leerraum Sie innerhalb des Inhalts eines HTML-Elements verwenden (das eines oder mehrere Leerzeichenzeichen, aber auch Zeilenumbrüche enthalten kann), reduziert der HTML-Parser jede Abfolge von Leerzeichen auf ein einzelnes Leerzeichen beim Rendern des Codes. Warum also so viel Leerraum verwenden? Die Antwort lautet Lesbarkeit.

Es kann leichter verständlich sein, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung zu wählen (wir viele Leerzeichen für jede Ebene der Einrückung zum Beispiel), aber Sie sollten in Erwägung ziehen, ihn zu formatieren.

Schauen wir uns an, wie der Browser die zwei Absätze oben mit und ohne Leerzeichen darstellt:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Der Zugriff auf das [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript behält den gesamten Leerraum bei.
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

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie können Sie also eines dieser Sonderzeichen in Ihrem Text einschließen? Zum Beispiel, wenn Sie ein Kaufmannsund-Zeichen oder ein kleiner-als-Zeichen verwenden möchten und nicht möchten, dass es als Code interpretiert wird.

Das tun Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen repräsentieren, und in genau diesen Umständen verwendet werden. Jede Zeichenreferenz beginnt mit einem Kaufmannsund (&) und endet mit einem Semikolon (;).

| Literalzeichen | Entsprechende Zeichenreferenz |
| -------------- | ----------------------------- |
| <              | `&lt;`                        |
| >              | `&gt;`                        |
| "              | `&quot;`                      |
| '              | `&apos;`                      |
| &              | `&amp;`                       |

Die entsprechende Zeichenreferenz könnte leicht in Erinnerung bleiben, da der Text, den sie verwendet, als less than für `&lt;`, quotation für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste von XML- und HTML-Zeichenentitätsreferenzen](https://de.wikipedia.org/wiki/Liste_von_XML-_und_HTML-Zeichenreferenzen) (Wikipedia).

Im Beispiel unten gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Liveausgabe unten können Sie sehen, dass der erste Absatz schiefgegangen ist. Der Browser interpretiert die zweite Instanz von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht in Ordnung aus, weil er die spitzen Klammern mit Zeichenreferenzen hat.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange das [Zeichencodierung Ihres HTML auf UTF-8 gesetzt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare, wodurch Kommentare für den Benutzer unsichtbar werden. Der Zweck von Kommentaren besteht darin, Ihnen die Möglichkeit zu geben, Notizen im Code zu erstellen, um Ihre Logik oder Kodierung zu erklären. Dies ist sehr nützlich, wenn Sie zu einem Code zurückkehren, nachdem Sie lange genug weg waren, dass Sie sich nicht mehr vollständig erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, schließen Sie ihn zwischen den speziellen Markern `<!--` und `-->` ein. Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird im Liveausgabe nur der erste Absatz angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, Sie haben Ihre Tour durch die Grundlagen von HTML genossen.

Zu diesem Zeitpunkt sollten Sie verstanden haben, wie HTML aussieht und wie es auf einem grundlegenden Niveau funktioniert. Sie sollten auch in der Lage sein, ein paar Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls vertiefen einige der hier eingeführten Themen und präsentieren andere Konzepte der Sprache.

- Wenn Sie beginnen, mehr über HTML zu lernen, sollten Sie in Erwägung ziehen, die Grundlagen von CSS (Cascading Style Sheets) zu lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die zum Stylen von Webseiten verwendet wird, beispielsweise um Schriftarten oder Farben zu ändern oder das Seitenlayout zu ändern. HTML und CSS funktionieren gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
