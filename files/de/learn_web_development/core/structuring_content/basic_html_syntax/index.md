---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie vielleicht schon gehört haben. Er erklärt auch, wo diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite aufgebaut ist und andere wichtige grundlegende Sprachmerkmale. Unterwegs wird es auch die Möglichkeit geben, mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a> und grundlegendes Wissen über <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">den Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Anatomie eines HTML-Elements — Element, öffnendes Tag, Inhalt, schließendes Tag, Attribute.</li>
          <li>Der HTML-Körper und sein Zweck als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> (auch bekannt als Void-Elemente) sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctype am Anfang von HTML-Dokumenten. Der ursprünglich beabsichtigte Zweck und die Tatsache, dass er jetzt eher ein historisches Artefakt ist.</li>
          <li>Das Verständnis, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern anweist, wie die Webseiten, die Sie besuchen, strukturiert werden sollen. Sie kann so kompliziert oder so einfach sein, wie es der Webentwickler wünscht. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile von Inhalten einzuschließen, zu umwickeln oder zu _markieren_, um sie auf eine bestimmte Weise erscheinen oder funktionieren zu lassen. Die umschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verbinden, Wörter kursiv zu schreiben usw. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich allein steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in ein Absatz-({{htmlelement("p")}})Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML lebt in Textdateien, die **HTML-Dokumente** oder einfach **Dokumente** genannt werden, mit einer `.html` Dateierweiterung. Wo wir früher über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und bestimmt deren Struktur.

Die häufigste HTML-Datei, der Sie begegnen werden, ist `index.html`, die im Allgemeinen verwendet wird, um den Inhalt der Startseite einer Website zu enthalten. Es ist auch üblich, Unterordner mit ihren eigenen `index.html` zu sehen, so dass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitive. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}} Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden, und es würde funktionieren. Es ist jedoch Best Practice, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt genauer erkunden:

![Ein Beispielcode-Schnipsel, der die Struktur eines HTML-Elements demonstriert.<p> Meine Katze ist sehr grumpy </p>.](grumpy-cat-small.png)

Der Aufbau unseres Elements ist:

- **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), eingeschlossen in öffnende und schließende spitze Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder zu wirken beginnt. In diesem Beispiel geht es dem Anfang des Absatztextes voraus.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Das schließende Tag:** Dies ist das gleiche wie das öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Versäumnis, ein schließendes Tag einzufügen, ist ein häufiger Anfängerfehler, der zu merkwürdigen Ergebnissen führen kann.

Das Element ist das öffnende Tag, gefolgt vom Inhalt, gefolgt vom schließenden Tag.

> [!NOTE]
> Besuchen Sie unseren Lernpartner Scrimba's [HTML-Tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> scrim für eine interaktive Erklärung von HTML-Tags.

### Erstellen Ihres ersten HTML-Elements

Lassen Sie uns etwas Übung darin geben, Ihre eigenen HTML-Elemente zu schreiben:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Umgeben Sie die Textzeile mit den Tags `<em>` und `</em>`. Um das Element zu _öffnen_, setzen Sie das öffnende Tag `<em>` am Anfang der Zeile. Um das Element zu _schließen_, setzen Sie das schließende Tag `</em>` am Ende der Zeile. Dies sollte dem gerenderten Text im Ausgabefeld eine kursiv formatierte Textdarstellung geben.
3. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, weitere HTML-Elemente nachzuschlagen und sie auf das Textbeispiel anzuwenden.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock einsehen.

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

### Verschachteln von Elementen

Elemente können innerhalb anderer Elemente platziert werden. Dies wird _Verschachtelung_ genannt. Wenn wir sagen wollten, dass unsere Katze **sehr** grumpy ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}} Element einfügen, was bedeutet, dass das Wort eine starke(re) Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt einen richtigen und falschen Weg, das Verschachteln zu machen. Im obigen Beispiel haben wir zuerst das `p`-Element geöffnet und dann das `strong`-Element. Für die richtige Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p` schließen.

Das folgende ist ein Beispiel für die falsche Verschachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

**Die Tags müssen in einer Weise geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb voneinander sind.** Mit der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art von Raten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "Void-Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}} Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde das folgende Ergebnis liefern:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML besteht keine Anforderung, ein `/` am Ende eines Tags eines void-Elements hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es handelt sich jedoch auch um eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Paragraph-Tag mit 'class="editor-note"' Attribut hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`** Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen zu zielen.

Ein Attribut sollte haben:

- Einen Abstand zwischen ihm und dem Elementnamen. (Für ein Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, umschlossen mit öffnenden und schließenden Anführungszeichen.

### Hinzufügen von Attributen zu einem Element

Nun sind Sie wieder an der Reihe. In diesem Abschnitt werden wir Sie dazu bringen, Attribute zu einem `<img>`-Element hinzuzufügen, um ein Bild auf der Seite anzuzeigen. Das `<img>`-Element kann mehrere Attribute haben, darunter:

- `src`: Ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`: Eine Textbeschreibung des Bildes. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`: Die Breite des Bildes in Pixeln. Zum Beispiel: `width="300"`.
- `height`: Die Höhe des Bildes in Pixeln. Zum Beispiel: `height="300"`.

Folgen Sie den unten stehenden Schritten, um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Finden Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf und drücken Sie _Bild-Link/Adresse kopieren_.
3. Fügen Sie im MDN Playground das `src`-Attribut zum `<img>`-Element hinzu und setzen Sie seinen Wert auf den Link aus Schritt 2.
4. Setzen Sie das `alt`-Attribut auf eine geeignete Beschreibung des Bildes.
5. Setzen Sie das `width`-Attribut auf einen Wert von sagen wir `300`, damit Sie das Bild im Ausgabefeld besser sehen können. Passen Sie es gegebenenfalls an.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock einsehen.

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

### Boolean-Attribute

Manchmal werden Sie Attribute ohne Werte sehen. Dies ist völlig akzeptabel. Diese werden {{Glossary("Boolean/HTML", "Boolean-Attribute")}} genannt. Wenn ein Boolean-Attribut ohne Wert oder mit einem beliebigen Wert, sogar wie `"false"`, geschrieben wird, ist das Boolean-Attribut immer auf true gesetzt. Andernfalls, wenn das Attribut in einem HTML-Tag nicht geschrieben ist, ist das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Wert des Attributs entweder der leere String ist (einschließlich, wenn das Attribut keinen explizit angegebenen Wert hat) oder der gleiche wie der Attributname, aber andere Werte funktionieren genauso. Zum Beispiel betrachten Sie das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) Attribut, das Sie Formular-Eingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, damit der Benutzer keine Eingaben machen kann. Deaktivierte Elemente haben typischerweise ein ausgegrautes Erscheinungsbild.) Zum Beispiel:

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

Zur Referenz enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Der HTML-Code des obigen Beispiels erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code vieler anderer Websites ansehen, stoßen Sie möglicherweise auf eine Anzahl von ungewöhnlichen Markup-Stilen, einschließlich Attributwerten ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann jedoch in anderen Umständen Ihr Markup ebenfalls beschädigen. Das Element im folgenden Code-Schnipsel, `<a>`, wird als Anker bezeichnet. Anker schließen Text ein und verwandeln ihn in Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese grundlegende Version unten mit _nur_ dem `href`-Attribut schreiben, wie dies:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Wir bekommen jedoch Probleme, sobald wir das `title`-Attribut in der gleichen Weise wie das `href`-Attribut hinzufügen:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretiert der Browser das Markup und verwechselt das `title`-Attribut für drei Attribute: ein title-Attribut mit dem Wert "The" und zwei Boolean-Attribute, "Mozilla" und "homepage". Natürlich ist dies nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, über den Link zu schweben, um den Titeltext anzuzeigen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie die Anführungszeichen der Attribute immer ein. Es vermeidet solche Probleme und führt zu lesbarerem Code.

### Einfache oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Allerdings könnten Sie in einigen HTML-Codes einfache Anführungszeichen sehen. Dies ist eine Stilfrage. Sie können wählen, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie einfache Anführungszeichen und doppelte Anführungszeichen nicht mischen. Dieses Beispiel (unten) zeigt eine Art von Mischung von Anführungszeichen, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte verwenden:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen desselben Typs (einfach oder doppelt) innerhalb anderer Anführungszeichen zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel, dies wird brechen:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind allein nicht sehr nützlich. Schauen wir uns nun an, wie einzelne Elemente kombiniert werden, um eine ganze HTML-Seite zu bilden:

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

1. `<!doctype html>`: Das Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einem Satz von Regeln dienen, die die HTML-Seite befolgen musste, um als gutes HTML zu gelten. Doctypes sahen früher ungefähr so aus:

   ```html
   <!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In letzter Zeit ist der Doctype ein historisches Artefakt, das enthalten sein muss, damit alles andere richtig funktioniert. `<!doctype html>` ist das kürzeste Zeichenfolgen von Zeichen, das als gültiger Doctype gilt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}} Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es wird manchmal als das Stamm-Element bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}} Element. Dieses Element fungiert als Container für alles, was Sie auf der HTML-Seite einfügen möchten, **das nicht der Inhalt ist**, den die Seite den Betrachtern zeigt. Dies beinhaltet Schlüsselwörter und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen würden, CSS, um den Inhalt zu gestalten, Zeichensatzdeklarationen und mehr. Sie werden mehr darüber im nächsten Artikel der Serie erfahren.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}} Element. Dieses Element repräsentiert Metadaten, die nicht von anderen HTML-meta-bezogenen Elementen wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset) Attribut gibt die Zeichenkodierung für Ihr Dokument als UTF-8 an, das die meisten Zeichen aus der überwiegenden Mehrheit der menschlichen Schriftsysteme umfasst. Mit dieser Einstellung kann die Seite jetzt jeden Textinhalt verarbeiten, den sie enthalten könnte. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}} Element. Dies legt den Titel der Seite fest, der in der Browsertab angezeigt wird, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}} Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audio-Tracks oder was auch immer.

### Hinzufügen einiger Features zu einem HTML-Dokument

An diesem Punkt möchten wir, dass Sie etwas umfangreicheren HTML-Inhalt schreiben üben. Um dies zu tun, haben Sie ein paar Optionen — Sie können das HTML auf Ihrem lokalen Computer erstellen oder den MDN Playground wie in den vorherigen Beispielen verwenden.

- Um es auf Ihrem lokalen Rechner zu tun:
  1. Kopieren Sie das in der vorherigen Sektion aufgeführte HTML-Seitenbeispiel und fügen Sie es in eine neue Datei in Ihrem Code-Editor ein.
  2. Nehmen Sie die im Folgenden beschriebenen Änderungen an der Seite vor.
  3. Speichern Sie die Datei als `index.html`, und laden Sie sie in einem neuen Browser-Tab, um die Ergebnisse zu sehen.

  > [!NOTE]
  > Sie können auch diese [grundlegende HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in unserem GitHub-Repo finden. Sie können eine Kopie dieser Datei erstellen, anstatt sie selbst zu erstellen.

- Um es im MDN Playground zu tun, klicken Sie auf **"Play"** im Ausgabefeld unten, um das Beispiel zu bearbeiten, und befolgen Sie dann die unten stehenden Anweisungen. Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen.

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

Hier sind die Anweisungen, denen Sie folgen sollten:

1. Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte in ein `<h1>` öffnendes Tag und ein `</h1>` schließendes Tag eingeschlossen werden.
2. Bearbeiten Sie den Absatzinhalt, um einen Text über ein Thema hinzuzufügen, das Sie interessant finden.
3. Machen Sie wichtige Wörter durch Umwickeln mit einem {{htmlelement("strong")}}-Element fett.
4. Fügen Sie zwei Links zu Ihrem Absatz hinzu. Dies wird mit dem {{htmlelement("a")}}-Element erreicht.
5. Fügen Sie ein Bild zu Ihrem Dokument hinzu, wie [zuvor im Artikel erklärt](#hinzufügen_von_attributen_zu_einem_element). Platzieren Sie es unter dem Absatz. Wenn es zu groß zum Sehen ist, fügen Sie ihm ein `width`-Attribut hinzu, um es zu verkleinern.

Wenn Sie wirklich feststecken, können Sie die Lösung hier sehen:

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

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass eine Menge Leerzeichen im Code enthalten sind. Dies ist optional. Diese beiden Code-Schnipsel sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal wie viel Leerraum Sie im Inhalt eines HTML-Elements verwenden (der ein oder mehrere Leerzeichen enthalten kann, aber auch Zeilenumbrüche), der HTML-Parser reduziert jede Leerraumfolge auf ein einzelnes Leerzeichen, wenn er den Code rendert. Warum so viele Leerzeichen verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das, in dem es sitzt. Es liegt an Ihnen, den Stil der Formatierung (wie viele Leerzeichen für jede Verschachtelungsebene, zum Beispiel) zu wählen, aber Sie sollten erwägen, es zu formatieren.

Sehen wir uns an, wie der Browser die beiden Absätze oben mit und ohne Leerzeichen rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Der Zugriff auf das [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript behält alle Leerzeichen unverändert bei.
> Dies kann unerwartete Ergebnisse zurückgeben, wenn die Leerzeichen vom Browser abgeschnitten werden.

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

## Zeichenreferenzen: Einfügen von Sonderzeichen in HTML

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügen Sie also eines dieser Sonderzeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein Kaufmännisches Und oder ein Kleiner-als-Zeichen verwenden wollen, und es nicht als Code interpretiert werden soll.

Dies tun Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen darstellen, um genau in diesen Fällen verwendet zu werden. Jede Zeichenreferenz beginnt mit einem Kaufmännischen Und (&) und endet mit einem Semikolon (;).

| Zeichen | Zeichenreferenz-Äquivalent |
| ------- | -------------------------- |
| <       | `&lt;`                     |
| >       | `&gt;`                     |
| "       | `&quot;`                   |
| '       | `&apos;`                   |
| &       | `&amp;`                    |

Das Zeichenreferenz-Äquivalent kann leicht gemerkt werden, da der verwendete Text als kleiner als für `&lt;`, Anführungszeichen für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste von XML- und HTML-Zeichenentitätsreferenzen](https://de.wikipedia.org/wiki/Liste_von_XML-_und_HTML-Zeichenentit%C3%A4tsreferenzen) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Ausgabefeld unten sehen Sie, dass der erste Absatz falsch gelaufen ist. Der Browser interpretiert die zweite Instanz von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht gut aus, da er Winkelschienen mit Zeichenreferenzen aufweist.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange die [Zeichenkodierung Ihres HTML auf UTF-8 eingestellt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare, wodurch Kommentare für den Benutzer im Wesentlichen unsichtbar werden. Der Zweck von Kommentaren besteht darin, Ihnen zu ermöglichen, Notizen im Code einzufügen, um Ihre Logik oder Kodierung zu erklären. Dies ist sehr nützlich, wenn Sie nach einer Pause zu einem Code zurückkehren und sich nicht mehr vollständig daran erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umwickeln Sie ihn mit den speziellen Markern `<!--` und `-->`. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen, wird nur der erste Absatz im Live-Ausgabefeld angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, dass Ihnen Ihre Tour durch die Grundlagen von HTML gefallen hat.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls gehen tiefer auf einige der hier eingeführten Themen ein und stellen andere Konzepte der Sprache vor.

- Wenn Sie beginnen, mehr über HTML zu lernen, sollten Sie die Grundlagen von CSS (Cascading Style Sheets) lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die zur Gestaltung von Webseiten verwendet wird, z.B. zum Ändern von Schriftarten oder Farben oder zum Ändern des Seitenlayouts. HTML und CSS arbeiten gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
