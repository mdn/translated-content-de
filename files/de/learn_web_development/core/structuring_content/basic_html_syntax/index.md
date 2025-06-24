---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Sie in Gang zu bringen, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie möglicherweise gehört haben. Außerdem erklärt er, wo diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite strukturiert ist und andere wichtige grundlegende Sprachmerkmale. Unterwegs haben Sie auch die Gelegenheit, mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a> und grundlegende Kenntnisse über <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">den Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Anatomie eines HTML-Elements — Element, öffnendes Tag, Inhalt, schließendes Tag, Attribute.</li>
          <li>Der HTML-Body und seine Funktion als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctypes am Anfang von HTML-Dokumenten. Sein ursprünglich beabsichtigter Zweck und die Tatsache, dass er jetzt eher ein historisches Artefakt ist.</li>
          <li>Verständnis, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Markup-Sprache_, die Webbrowsern mitteilt, wie die Webseiten, die Sie besuchen, strukturiert werden sollen. Sie kann so kompliziert oder so einfach sein, wie es der Webentwickler möchte. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile von Inhalten einzuschließen, zu umschließen oder zu _kennzeichnen_, damit sie auf eine bestimmte Weise erscheinen oder sich verhalten. Die umschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink umwandeln, um auf eine andere Seite zu verweisen, Wörter kursiv setzen und so weiter. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir wollten, dass der Text für sich allein steht, könnten wir genau angeben, dass es sich um einen Absatz handelt, indem wir ihn in ein Absatz- ({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML lebt in Textdateien, die als **HTML-Dokumente** oder einfach **Dokumente** bezeichnet werden und die Dateierweiterung `.html` haben. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und gibt ihre Struktur an.

Die häufigste HTML-Datei, die Sie antreffen werden, ist die `index.html`, die im Allgemeinen verwendet wird, um den Inhalt der Startseite einer Website zu enthalten. Es ist auch üblich, Unterordner mit ihrem eigenen `index.html` zu sehen, so dass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitive. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}} Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden, und es würde funktionieren. Es ist jedoch am besten, alle Tags in Kleinbuchstaben für Konsistenz und Lesbarkeit zu schreiben.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt weiter erkunden:

![Ein Beispielcode-Snippet, das die Struktur eines HTML-Elements zeigt.<p> Meine Katze ist sehr grummelig </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), eingerahmt von öffnenden und schließenden spitzen Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder anfängt zu wirken. In diesem Beispiel steht es vor dem Beginn des Absatztextes.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Fehlen eines schließenden Tags ist ein häufiger Anfängerfehler, der seltsame Ergebnisse verursachen kann.

Das Element ist das öffnende Tag, gefolgt von Inhalt, gefolgt vom schließenden Tag.

> [!NOTE]
> Schauen Sie sich das [HTML-Tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Skriptum unseres Lernpartners Scrimba für eine interaktive Erklärung von HTML-Tags an.

### Erstellen Ihres ersten HTML-Elements

Lassen Sie uns Ihnen etwas Übung im Schreiben Ihrer eigenen HTML-Elemente geben:

1. Klicken Sie unten im Codeblock auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie die Textzeile mit den Tags `<em>` und `</em>`. Um das Element _zu öffnen_, setzen Sie das öffnende Tag `<em>` an den Anfang der Zeile. Um das Element _zu schließen_, setzen Sie das schließende Tag `</em>` an das Ende der Zeile. Dadurch sollte der gerenderte Text im Ausgabefeld eine kursive Textformatierung erhalten.
3. Wenn Sie abenteuerlustig sind, versuchen Sie, einige weitere HTML-Elemente nachzuschlagen und sie auf das Textbeispiel anzuwenden.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mithilfe der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

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

Elemente können innerhalb anderer Elemente platziert werden. Dies wird _Verschachtelung_ genannt. Wenn wir sagen wollten, dass unsere Katze **sehr** grummelig ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einschließen, was bedeutet, dass das Wort eine starke(re) Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt eine richtige und eine falsche Art, zu verschachteln. Im obigen Beispiel haben wir zuerst das `p`-Element geöffnet und dann das `strong`-Element geöffnet. Für eine ordnungsgemäße Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p` schließen.

Das Folgende ist ein Beispiel für die _falsche_ Art der Verschachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

**Die Tags müssen so geöffnet und geschlossen werden, dass sie sich innerhalb oder außerhalb voneinander befinden**. Mit der Art der Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Dieses Raten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzelnen Tag, das typischerweise verwendet wird, um etwas im Dokument einzufügen oder einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}}-Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde Folgendes ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML ist es nicht erforderlich, ein `/` am Ende eines leeren Elements einzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es handelt sich jedoch auch um eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML auch als gültiges XML betrachtet wird.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatz-Tag mit "class="editor-note""-Attribut hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`**-Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen zu zielen.

Ein Attribut sollte haben:

- Ein Leerzeichen zwischen ihm und dem Elementnamen. (Für ein Element mit mehr als einem Attribut sollten die Attribute auch durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, eingerahmt von öffnenden und schließenden Anführungszeichen.

### Attribute zu einem Element hinzufügen

Nun sind Sie wieder an der Reihe. In diesem Abschnitt möchten wir, dass Sie Attribute zu einem `<img>`-Element hinzufügen, um ein Bild auf der Seite anzuzeigen. Das `<img>`-Element kann mehrere Attribute haben, darunter:

- `src`: Ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`: Eine Textbeschreibung des Bildes. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`: Die Breite des Bildes in Pixeln. Zum Beispiel: `width="300"`.
- `height`: Die Höhe des Bildes in Pixeln. Zum Beispiel: `height="300"`.

Führen Sie die folgenden Schritte aus, um die Aufgabe abzuschließen:

1. Klicken Sie unten im Codeblock auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Finden Sie Ihr Lieblingsbild online, klicken Sie es mit der rechten Maustaste an, und wählen Sie _Bildlink/-adresse kopieren_.
3. Fügen Sie im MDN Playground das `src`-Attribut zum `<img>`-Element hinzu und legen Sie dessen Wert auf den Link aus Schritt 2 fest.
4. Setzen Sie das `alt`-Attribut auf eine geeignete Beschreibung des Bildes.
5. Setzen Sie das `width`-Attribut auf einen Wert von etwa `300`, damit Sie das Bild im Ausgabefenster etwas besser sehen können. Passen Sie es bei Bedarf an.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mithilfe der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

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

Manchmal werden Sie Attribute ohne Werte sehen. Das ist völlig in Ordnung. Diese werden {{Glossary("Boolean/HTML", "boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne Wert geschrieben wird oder mit irgendeinem Wert, sogar wie `"false"`, wird das boolesche Attribut immer auf wahr gesetzt. Andernfalls, wenn das Attribut nicht in einem HTML-Tag geschrieben ist, wird das Attribut auf falsch gesetzt. Die Spezifikation erfordert, dass der Wert des Attributs entweder der leere String ist (einschließlich, wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Attributname ist. Andere Werte funktionieren jedoch genauso. Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut, das Sie Formular-Eingabefeldern zuweisen können. (Sie verwenden dies, um die Formulareingabefelder zu _deaktivieren_, sodass der Benutzer keine Einträge machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Aussehen.) Zum Beispiel:

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

Zur Referenz enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabefeld. Das HTML des obigen Beispiels ergibt folgendes Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code für viele andere Websites ansehen, stoßen Sie möglicherweise auf einige seltsame Markup-Stile, einschließlich Attributwerten ohne Anführungszeichen. Dies ist unter bestimmten Umständen zulässig, kann jedoch in anderen Umständen Ihr Markup beschädigen. Das Element im untenstehenden Code-Snippet, `<a>`, wird Anker genannt. Anker umschließen Text und machen ihn zu Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link verweist. Sie können es in dieser einfachen Version unten mit _nur_ dem `href`-Attribut schreiben, wie folgt:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch den `title` auf dieselbe Weise wie das `href`-Attribut hinzufügen, treten Probleme auf:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, interpretiert der Browser das Markup falsch und nimmt an, das `title`-Attribut bestehe aus drei Attributen: einem Titelattribut mit dem Wert `The` und zwei booleschen Attributen, `Mozilla` und `homepage`. Offensichtlich ist das nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, über den Link zu fahren, um den Titeltext anzuzeigen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie immer die Attribut-Anführungszeichen ein. Es vermeidet solche Probleme und führt zu besser lesbarem Code.

### Einzelne oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen gesetzt sind. Sie könnten jedoch in einigen HTML-Codes auf einfache Anführungszeichen stoßen. Dies ist eine Stilfrage. Sie können wählen, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Achten Sie darauf, nicht einzelne und doppelte Anführungszeichen zu mischen. Dieses Beispiel (unten) zeigt eine Art des Mischens von Anführungszeichen, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte verwenden:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Wenn Sie innerhalb der Attributwerte dieselben Anführungszeichen verwenden müssen, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel wird dies fehlschlagen:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie das tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Individuelle HTML-Elemente sind allein nicht besonders nützlich. Lassen Sie uns als nächstes untersuchen, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einem Satz von Regeln dienen, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten. Doctypes sahen früher etwa so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   Neuerdings ist der Doctype ein historisches Artefakt, das enthalten sein muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenfolge, die als ein gültiger Doctype gilt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es ist manchmal als das Wurzelelement bekannt.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element dient als Container für alles, was Sie auf der HTML-Seite einfügen möchten, **was nicht der Inhalt** ist, den die Seite den Betrachtern zeigt. Dies umfasst Schlüsselwörter und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen, CSS zum Stylen von Inhalten, Zeichensatzdeklarationen und mehr. Sie werden mehr darüber im nächsten Artikel dieser Reihe erfahren.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element stellt Metadaten dar, die nicht durch andere HTML-Meta-bezogene Elemente wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset)-Attribut gibt die Zeichencodierung für Ihr Dokument als UTF-8 an, was die meisten Zeichen aus der überwiegenden Mehrheit der menschlichen geschriebenen Sprachen einschließt. Mit dieser Einstellung kann die Seite nun mit jedem Textinhalt umgehen, den sie möglicherweise enthält. Es gibt keinen Grund, dies nicht einzustellen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dies setzt den Titel der Seite, was der Titel ist, der in der Browser-Registerkarte erscheint, in der die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer sonst.

### Hinzufügen von Funktionen zu einem HTML-Dokument

An diesem Punkt möchten wir, dass Sie etwas umfangreichere HTML-Inhalte schreiben üben. Dazu haben Sie ein paar Optionen — Sie können das HTML auf Ihrem lokalen Computer erstellen, oder den MDN Playground wie in den vorherigen Beispielen verwenden.

- Um es auf Ihrem lokalen Rechner zu tun:

  1. Kopieren Sie das HTML-Seitenbeispiel aus dem vorherigen Abschnitt und fügen Sie es in eine neue Datei in Ihrem Code-Editor ein.
  2. Nehmen Sie die Änderungen an der Seite vor, die in den Anweisungen unten beschrieben sind.
  3. Speichern Sie die Datei als `index.html` und laden Sie sie dann in einer neuen Browser-Registerkarte, um die Ergebnisse zu sehen.

  > [!NOTE]
  > Sie finden diese [grundlegende HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) auch in unserem GitHub-Repo. Sie können eine Kopie dieser Datei erstellen, anstatt sie selbst zu erstellen.

- Um es im MDN Playground zu tun, klicken Sie auf **"Play"** im Ausgabefenster unten, um das Beispiel zu bearbeiten, und folgen Sie dann den untenstehenden Anweisungen. Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen.

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

Hier sind die Anweisungen zu befolgen:

1. Direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements fügen Sie einen Haupttitel für das Dokument hinzu. Dieser sollte in einem `<h1>`-Öffnungstag und `</h1>`-Schlusstag eingeschlossen sein.
2. Bearbeiten Sie den Absatzinhalt, um Text über ein Thema einzufügen, das Sie interessant finden.
3. Heben Sie wichtige Wörter fett hervor, indem Sie sie in ein {{htmlelement("strong")}}-Element einschließen.
4. Fügen Sie zwei Links zu Ihrem Absatz hinzu. Dies wird mithilfe des {{htmlelement("a")}}-Elements erreicht.
5. Fügen Sie ein Bild zu Ihrem Dokument hinzu, wie [früher im Artikel erklärt](#attribute_zu_einem_element_hinzufügen). Platzieren Sie es unter dem Absatz. Wenn es zu groß zum Anzeigen ist, fügen Sie ihm ein `width`-Attribut hinzu, um es zu verkleinern.

Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung hier anzeigen:

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Inhalt Ihrer fertigen HTML-Elemente sollte so aussehen:

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

In den obigen Beispielen haben Sie vielleicht bemerkt, dass im Code eine Menge Leerzeichen enthalten sind. Diese sind optional. Diese beiden Code-Schnipsel sind äquivalent:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal, wie viele Leerzeichen Sie im Inhalt eines HTML-Elements verwenden (die ein oder mehrere Leerzeichen umfassen können, aber auch Zeilenumbrüche), der HTML-Parser reduziert jede Leerzeichen-Sequenz auf ein einzelnes Leerzeichen, wenn er den Code rendert. Warum also so viel Leerraum verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung zu wählen (wie viele Leerzeichen für jede Ebene der Einrückung zum Beispiel), aber Sie sollten in Betracht ziehen, es zu formatieren.

Sehen wir uns an, wie der Browser die beiden Absätze oben mit und ohne Leerzeichen darstellt:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Das Zugreifen auf die [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript wird den gesamten Leerraum intakt halten.
> Dies kann unerwartete Ergebnisse zurückgeben, wenn der Leerraum vom Browser beschnitten wird.

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

## Zeichenreferenzen: Sonderzeichen in HTML einfügen

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügen Sie also eines dieser Sonderzeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein kaufmännisches Und oder ein Kleiner-als-Zeichen verwenden möchten, ohne dass es als Code interpretiert wird.

Sie tun dies mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen darstellen, die in genau diesen Fällen verwendet werden sollen. Jede Zeichenreferenz beginnt mit einem Kaufmännischen Und (&) und endet mit einem Semikolon (;).

| Echtes Zeichen | Zeichenreferenz-Equivalent |
| -------------- | -------------------------- |
| <              | `&lt;`                     |
| >              | `&gt;`                     |
| "              | `&quot;`                   |
| '              | `&apos;`                   |
| &              | `&amp;`                    |

Das Zeichenreferenz-Äquivalent kann leicht gemerkt werden, da der verwendete Text als Kleiner als für `&lt;`, Anführungszeichen für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entity-Referenzen zu erfahren, siehe [Liste von XML- und HTML-Zeichenentity-Referenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Output unten sehen Sie, dass der erste Absatz falsch gelaufen ist. Der Browser interpretiert das zweite `\<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht in Ordnung aus, da er Zeichenreferenzen für die spitzen Klammern verwendet.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Zeichenreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange die [Zeichencodierung Ihres HTMLs auf UTF-8 gesetzt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare, was sie für den Benutzer effektiv unsichtbar macht. Der Zweck von Kommentaren ist es, Ihnen zu erlauben, Notizen im Code einzufügen, um Ihre Logik oder das Codieren zu erklären. Dies ist sehr nützlich, wenn Sie zu einer Code-Basis zurückkehren, nachdem Sie lange genug weg waren, um sich nicht mehr voll daran zu erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umschließen Sie ihn mit den speziellen Markierungen `<!--` und `-->`. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird im Live-Output nur der erste Absatz angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben das Ende des Artikels erreicht! Wir hoffen, dass Ihnen Ihre Tour durch die Grundlagen von HTML gefallen hat.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, ein paar Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls gehen tiefer auf einige der hier eingeführten Themen ein und erläutern andere Konzepte der Sprache.

- Während Sie anfangen, mehr über HTML zu lernen, sollten Sie darüber nachdenken, die Grundlagen von CSS (Cascading Style Sheets) zu lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die verwendet wird, um Webseiten zu gestalten, wie das Ändern von Schriftarten oder Farben oder das Ändern des Seitenlayouts. HTML und CSS funktionieren gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
