---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die Grundlagen von HTML, einschließlich Terminologie, Syntax und Struktur. Unterwegs absolvieren Sie einige interaktive Herausforderungen, um sich mit dem Schreiben einfacher HTML-Tags vertraut zu machen.

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
          <li>Die Anatomie eines HTML-Elements – Element, öffnendes Tag, Inhalt, schließendes Tag, Attribute.</li>
          <li>Der HTML-Körper und seine Funktion als Container für den Seiteninhalt.</li>
          <li>Was Leerelemente sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctypes am Anfang von HTML-Dokumenten, einschließlich dessen ursprünglich beabsichtigtem Zweck, und der Tatsache, dass es mittlerweile ein gewisses historisches Artefakt ist.</li>
          <li>Verstehen, dass HTML korrekt geschachtelt werden muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern mitteilt, wie sie die Webseiten, die Sie besuchen, strukturieren sollen. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um unterschiedliche Teile von Inhalten einzuschließen, zu umschließen oder zu _markieren_, damit sie auf eine bestimmte Weise erscheinen oder funktionieren. Die umschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verlinken, Wörter kursiv darstellen und vieles mehr. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wir könnten angeben, dass dieser Text ein Absatz ist, indem wir ihn in Absatz-Tags ({{htmlelement("p")}}) einschließen:

```html
<p>My cat is very grumpy</p>
```

Oder wir könnten angeben, dass dieser Text eine Überschrift auf oberster Ebene ist, indem wir ihn in [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tags einschließen:

```html
<h1>My cat is very grumpy</h1>
```

HTML befindet sich in Textdateien, die als **HTML-Dokumente** oder einfach **Dokumente** bezeichnet werden und die Dateierweiterung `.html` haben. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und gibt deren Struktur an.

Die häufigste HTML-Datei, auf die Sie stoßen, ist `index.html`, die im Allgemeinen verwendet wird, um den Inhalt der Startseite einer Website zu enthalten. Es ist auch üblich, Unterordner mit eigenen `index.html`-Dateien zu sehen, sodass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, sie können in Groß- oder Kleinbuchstaben geschrieben werden. Zum Beispiel könnte ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, usw. geschrieben werden und es würde funktionieren. Es ist jedoch am besten, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt näher betrachten:

![Ein Beispiel-Codeausschnitt, der die Struktur eines HTML-Elements zeigt.<p> Mein Kater ist sehr grummelig </p>.](grumpy-cat-small.png)

Unser vollständiges Element besteht aus:

- **Dem öffnenden Tag:** Dieses besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Paragraph), eingeschlossen in öffnende und schließende spitze Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder wirksam wird. In diesem Beispiel geht es dem Beginn des Absatztextes voraus.
- **Dem Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext – "Mein Kater ist sehr grummelig".
- **Dem schließenden Tag:** Dieses ist dasselbe wie das öffnende Tag, jedoch mit einem Schrägstrich vor dem Elementnamen. Dies markiert, wo das Element endet. Das Versäumnis, ein schließendes Tag einzuschließen, ist ein häufiger Anfängerfehler, der zu merkwürdigen Ergebnissen führen kann.

> [!NOTE]
> Besuchen Sie das [HTML-Tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Skript unseres Lernpartners Scrimba für eine interaktive Erklärung von HTML-Tags.

### Ihr erstes HTML-Element erstellen

Lassen Sie uns ein wenig Übung darin machen, Ihre eigenen HTML-Elemente zu schreiben:

1. Klicken Sie im Codeblock unten auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie die Textzeile mit den Tags `<em>` und `</em>`. Um das Element zu _öffnen_, platzieren Sie das öffnende Tag (`<em>`) am Anfang der Zeile. Um das Element zu _schließen_, platzieren Sie das schließende Tag (`</em>`) am Ende der Zeile. Dadurch sollte der gerenderte Text kursiv formatiert werden.
3. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige [weitere HTML-Elemente](/de/docs/Web/HTML/Reference/Elements) zu recherchieren und auf das Textbeispiel anzuwenden.

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

### Verschachtelung von Elementen

Elemente können innerhalb anderer Elemente platziert werden. Dies wird als _Verschachtelung_ bezeichnet. Wenn wir sagen wollten, dass unser Kater **sehr** grummelig ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einschließen, das dem Wort eine stärkere Textformatierung verleiht:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

In diesem Codeblock wird der Text "Mein Kater ist sehr grummelig." als Absatz definiert. Das Wort "sehr" wird zusätzlich als von starker Bedeutung definiert.

Es gibt eine richtige und falsche Art der Verschachtelung. Im obigen Codeblock öffnen wir zuerst das `<p>`-Element und dann das `<strong>`-Element. Für eine ordnungsgemäße Verschachtelung schließen wir zuerst das `<strong>`-Element und dann das `<p>`.

Das Folgende ist ein Beispiel für die _falsche_ Art der Verschachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so geöffnet und geschlossen werden**, dass sie sich innerhalb oder außerhalb von einander befinden. Da sich die Elemente im vorherigen Codeblock überlappen, muss der Browser Ihre Absicht erraten. Diese Art des Ratens kann zu unerwarteten Ergebnissen führen.

### Leerelemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und dann eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise dazu verwendet wird, etwas in das Dokument einzufügen oder einzubetten. Solche Elemente werden {{Glossary("void_element", "Leerelemente")}} genannt, was bedeutet, dass "Elemente keine anderen HTML-Inhalte enthalten können."

Zum Beispiel fügt das {{htmlelement("br")}}-Element einen Zeilenumbruch in eine Textzeile ein, was dazu führt, dass es in mehrere Zeilen umbricht:

```html live-sample___void-example
<p>
  This is a single paragraph, but we are going to <br />break it onto two lines.
</p>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('void-example', "100%", 100) }}

> [!NOTE]
> In einigen HTML-Beispielen sehen Sie ein `/` am Ende eines Tags eines Leerelements, beispielsweise `<br />`. Dies ist ein anderer Stil der Markup-Syntax, der nicht falsch ist, aber dieser "schließende Schrägstrich" ist nicht erforderlich.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatz-Tag mit dem Attribut 'class="editor-note"' hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht Teil seines Inhalts sind. Das **`class`**-Attribut liefert einen identifizierenden Namen, der verwendet werden kann, um das Element mit Stilen (CSS) oder Skriptinformationen (JavaScript) anzusprechen.

Ein Attribut sollte haben:

- Einen Abstand zwischen ihm und dem Elementnamen. Wenn ein Element mehr als ein Attribut hat, sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.
- Den Attributnamen gefolgt von einem Gleichheitszeichen (`=`).
- Einen Attributwert, der mit öffnenden und schließenden Anführungszeichen umschlossen ist.

### Hinzufügen von Attributen zu einem Element

Nun sind Sie wieder an der Reihe. In diesem Abschnitt werden Sie das {{htmlelement("img")}}-Element erkunden, das zum Anzeigen eines Bildes auf der Seite verwendet wird. Das `<img>`-Element kann mehrere Attribute haben, unter anderem:

- `src`: Ein **erforderliches** Attribut, das die {{Glossary("URL", "URL")}} (Webadresse) des Bildes angibt. Zum Beispiel: `src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"`.
- `alt`: Gibt eine Textbeschreibung an, um das Bild für Menschen zu beschreiben, die es nicht sehen können. Zum Beispiel: `alt="Das Firefox Nightly-Symbol"`. Dieses Attribut ist technisch gesehen nicht erforderlich, aber Sie sollten wirklich eine Textbeschreibung für alle Bilder bereitstellen, die eine Bedeutung vermitteln (im Gegensatz zu rein dekorativen Bildern).
- `width`: Gibt die Breite des Bildes in Pixel an. Zum Beispiel: `width="300"`.
- `height`: Gibt die Höhe des Bildes in Pixel an. Zum Beispiel: `height="300"`.

Befolgen Sie die folgenden Schritte, um die Aufgabe abzuschließen:

1. Klicken Sie im Codeblock unten auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Finden Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf und wählen Sie _Bildlink/-adresse kopieren_. Alternativ kopieren Sie die obige Bild-URL.
3. Fügen Sie im MDN Playground das `src`-Attribut zum `<img>`-Element hinzu und setzen Sie seinen Wert auf die URL aus Schritt 2.
4. Setzen Sie das `alt`-Attribut auf eine geeignete Beschreibung des Bildes.
5. Setzen Sie das `width`-Attribut auf einen Wert von z. B. `300`, damit Sie das Bild im Ausgabepanel besser sehen können. Passen Sie den Wert bei Bedarf an.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich stecken bleiben, können Sie die Lösung unter dem Codeblock anzeigen.

```html live-sample___basic_html_2
<img />
```

{{ EmbedLiveSample('basic_html_2', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML-Element sollte ungefähr so aussehen:

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"
  alt="A description of the image"
  width="300" />
```

</details>

### Boolesche Attribute

Manchmal sehen Sie HTML-Attribute ohne Werte. Diese werden {{Glossary("Boolean/HTML", "boolesche Attribute")}} genannt. Wenn ein boolesches Attribut hinzugefügt wird, wird sein Wert auf `true` gesetzt, unabhängig davon, welcher Wert ihm zugewiesen wird (sogar kein Wert). Wenn ein Attribut nicht in einem HTML-Tag enthalten ist, wird sein Wert auf `false` gesetzt.

Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut, das Sie Formular-{{htmlelement("input")}}-Elementen zuweisen können, um zu verhindern, dass der Benutzer Daten in sie eingibt. Zum Beispiel:

```html live-sample___boolean-example
<label for="first-input">This input is disabled</label>
<input id="first-input" type="text" disabled="disabled" />
<br />
```

Als Abkürzung ist es zulässig, das `disabled`-Attribut ohne Wert zu schreiben:

```html live-sample___boolean-example
<label for="second-input">This input is also disabled</label>
<input id="second-input" type="text" disabled />
<br />
```

Zur Referenz bieten wir auch ein nicht deaktiviertes `<input>`-Element, damit Sie vergleichen und gegenüberstellen können (beachten Sie, wie die `disabled`-Eingaben in der untenstehenden Darstellung etwas ausgegraut sind):

```html live-sample___boolean-example
<label for="third-input">This input isn't disabled; you can type into it</label>
<input id="third-input" type="text" />
```

Die obigen HTML-Snippets werden wie folgt gerendert:

{{ EmbedLiveSample('boolean-example', "100%", 100) }}

> [!NOTE]
> Die in den obigen Code enthaltenen {{htmlelement("label")}}-Elemente bieten eine Möglichkeit, beschreibende Beschriftungen mit Formularelementen zu verknüpfen. Wir haben sie beigefügt, weil es eine bewährte Methode ist und um etwas Abstand zwischen den Formulareingaben zu schaffen.

### Auslassung von Anführungszeichen um Attributwerte

Es ist in bestimmten Umständen in Ordnung, die Anführungszeichen um Attributwerte wegzulassen. Da dies jedoch in anderen Umständen Ihr Markup zerstören kann, raten wir Ihnen, **immer** die Anführungszeichen hinzuzufügen. Lassen Sie uns erkunden, warum.

Das folgende Element im Code-Snippet, {{htmlelement("a")}}, wird als **Anker** bezeichnet. Anker schließen Text ein und verwandeln ihn in Links. Das `href`-Attribut gibt die URL an, auf die der Link zeigt. Sie können die Anführungszeichen um den `href`-Attributwert im unten gezeigten Fall ohne negative Konsequenzen weglassen, da er keine Leerzeichen enthält:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Sie geraten jedoch schnell in Schwierigkeiten, wenn Sie Anführungszeichen um Attributwerte _mit_ Leerzeichen weglassen. Betrachten Sie das im Folgenden gezeigte `title`-Attribut, das eine Beschreibung der verlinkten Seite ("The Mozilla homepage") bietet, die als Tooltip erscheinen sollte, wenn der Link mit einem Mauszeiger darüber schwebt.

```html-nolint example-bad live-sample___bad-no-quotes
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Da keine Anführungszeichen um den `title`-Attributwert enthalten sind, interpretiert der Browser es als drei Attribute: Ein `title`-Attribut mit dem Wert `The` und zwei boolesche Attribute – `Mozilla` und `homepage`. Offensichtlich ist dies nicht, was wir beabsichtigten! Wenn Sie ein Gerät mit einem Mauszeiger verwenden, können Sie versuchen, über den Link zu schweben, um den Title-Tooltip anzuzeigen (er wird Ihnen "The" statt des beabsichtigten "The Mozilla homepage" geben).

{{ EmbedLiveSample('bad-no-quotes', 700, 100) }}

Fügen Sie immer Anführungszeichen um Attributwerte hinzu. Dies vermeidet Fehler und unbeabsichtigtes Verhalten und führt zu besser lesbarem Code.

### Einzel- oder Doppelanführungszeichen?

In diesem Artikel haben wir alle unsere Attributwerte in Doppelanführungszeichen eingeschlossen. Sie könnten jedoch in einigen HTML-Codes auch Einzelanführungszeichen verwenden sehen. Dies ist eine Frage des Stils. Sie können sich frei entscheiden, welche Ihnen lieber sind. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie Einzelanführungszeichen und Doppelanführungszeichen nicht mischen. Das folgende Beispiel mischt Anführungszeichen, was zu Fehlern führt, da der `href`-Attributwert für den Browser noch nicht fertiggestellt ist:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte einschließen. Dies funktioniert einwandfrei:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (Einzel- oder Doppelanführungszeichen) zu verwenden, können Sie [Zeichenreferenzen](#character_references_including_special_characters_in_html) verwenden. Zum Beispiel wird dies nicht funktionieren:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind für sich genommen nicht sehr nützlich. Lassen Sie uns als nächstes untersuchen, wie einzelne Elemente kombiniert werden, um eine vollständige HTML-Seite zu bilden.

Das folgende Beispiel ist eine sehr einfache vollständige Webseite:

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

Die Teile dieses Beispiels sind wie folgt:

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), waren Doctypes gedacht als Links zu einer Sammlung von Regeln, die die HTML-Seite befolgen musste, um als gutes HTML betrachtet zu werden. Doctypes sahen früher so aus:

   ```html
   <!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In modernen Zeiten ist der Doctype ein historisches Artefakt, das enthalten sein muss, damit alles andere korrekt funktioniert. `<!doctype html>` ist der kürzeste Zeichensatz, der als gültiger Doctype zählt, und es sollte am Anfang aller Webseiten enthalten sein. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umfasst den gesamten Inhalt der Seite. Es wird manchmal als Root-Element bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element dient als Container für Informationen über die Seite, die nicht Teil des Inhalts sind, den die Benutzer sehen werden. Dies kann Schlüsselwörter und eine Seitenbeschreibung umfassen, die in Suchergebnissen gezeigt wird, CSS zur Gestaltung des Inhalts, Zeichensatzdeklarationen und mehr. Sie werden im nächsten Artikel mehr über den Kopfbereich der Seite erfahren.
4. `<meta charset="utf-8">`: Ein {{htmlelement("meta")}}-Element. Dieses Element stellt Metadaten dar, die die Seite beschreiben. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset)-Attribut gibt das Zeichencodierungsschema an, das Ihr Dokument verwenden wird. UTF-8 enthält die meisten Zeichen der überwiegenden Mehrheit der in menschlichen Schriften verwendeten Sprachen, was bedeutet, dass die Seite in der Lage sein wird, verschiedene Sprachen erfolgreich darzustellen. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige spätere Probleme zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dies legt den Titel der Seite fest, der der Titel ist, der im Browser-Tab angezeigt wird, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dieses enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiospuren und so weiter.

### Hinzufügen einiger Funktionen zu einem HTML-Dokument

An diesem Punkt möchten wir, dass Sie etwas anspruchsvollere HTML-Inhalte schreiben üben. Dazu stehen Ihnen ein paar Optionen zur Verfügung – Sie können das HTML auf Ihrem lokalen Computer erstellen oder den MDN Playground wie in den vorherigen Beispielen verwenden.

#### Beispielsetup

- Um es auf Ihrem lokalen Rechner zu tun:
  1. Kopieren Sie das im vorherigen Abschnitt aufgeführte HTML-Seitenbeispiel und fügen Sie es in eine neue Datei in Ihrem Code-Editor ein. Sie können diese [grundlegende HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) auch in unserem GitHub-Repo finden.
  2. Nehmen Sie die Änderungen an der Seite vor, wie in den [Anweisungen](#beispielanweisungen) beschrieben.
  3. Speichern Sie die Datei als `index.html` und laden Sie sie dann in einem neuen Browser-Tab, um die Ergebnisse zu sehen.
- Um es im MDN Playground zu tun, klicken Sie im Ausgabepanel unten auf **"Play"**, um das Beispiel zu bearbeiten, und befolgen Sie dann die [Anweisungen](#beispielanweisungen). Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen.

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

#### Beispielanweisungen

Hier sind die Anweisungen, die Sie befolgen sollten:

1. Fügen Sie direkt unter dem Öffnungstages des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte durch `<h1></h1>`-Öffnungs- und -Schließtags umschlossen werden.
2. Bearbeiten Sie den Absatzinhalt, um Text über ein Thema, das Sie interessant finden, zu enthalten.
3. Lassen Sie wichtige Wörter durch Umhüllung in einem {{htmlelement("strong")}}-Element hervorstechen.
4. Fügen Sie Ihrem Absatz zwei Links hinzu. Dies erreichen Sie, indem Sie das {{htmlelement("a")}}-Element verwenden.
5. Fügen Sie Ihrem Dokument ein Bild unterhalb des Absatzes hinzu, wie [vorher erklärt](#hinzufügen_von_attributen_zu_einem_element). Wenn es zu groß ist, um es zu sehen, fügen Sie ein `width`-Attribut hinzu, um es zu verkleinern.

Wenn Sie wirklich stecken bleiben, können Sie hier eine potenzielle Lösung ansehen:

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Der Inhalt Ihres fertigen HTML-Element-Körpers sollte ungefähr so aussehen:

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

## Leerzeichen im HTML

In früheren Beispielen haben wir viele Leerzeichen im Code eingefügt. In den meisten Fällen ist dies völlig optional und dient hauptsächlich dazu, den Code lesbarer zu machen. Zum Beispiel sind diese beiden Code-Snippets gleichwertig:

```html-nolint live-sample___whitespace-example
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Sie beide rendern genau gleich:

{{ EmbedLiveSample('whitespace-example', 700, 100) }}

In fast allen Elementen (es gibt Ausnahmen wie {{htmlelement("pre")}}) reduziert der HTML-Parser, egal wie viele Leerzeichen Sie im Inhalt eines HTML-Elements verwenden, jede Leerraumsequenz auf ein einzelnes Leerzeichen, wenn der Code gerendert wird.

Es liegt an Ihnen, einen bevorzugten Code-Formatierungsstil zu wählen. Es ist üblich, jedem verschachtelten Element zwei Leerzeichen mehr als das, in dem es sich befindet, einzurücken; dies ist der Stil, den wir auf MDN verwenden.

Zum Beispiel:

```html
<section>
  <div>
    <p>A paragraph of content.</p>
  </div>
</section>
```

## Zeichenreferenzen: Einschluss von Sonderzeichen in HTML

In HTML sind die Zeichen `<`, `>`, `"`, `'`, und `&` spezielle Zeichen. Sie sind Teil der HTML-Syntax selbst. Also wie können Sie diese speziellen Zeichen in Ihren Text einschließen? Zum Beispiel, wie können Sie ein buchstäbliches Kaufmanns-Und-Zeichen oder ein Kleiner-als-Zeichen in Ihrem Inhalt verwenden, ohne dass es als Code interpretiert wird?

Das machen Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen darstellen und in genau diesen Situationen verwendet werden. Jede Zeichenreferenz beginnt mit einem Ampersand (&) und endet mit einem Semikolon (;).

| Buchstäbliches Zeichen | Äquivalente Zeichenreferenz |
| ---------------------- | --------------------------- |
| <                      | `&lt;`                      |
| >                      | `&gt;`                      |
| "                      | `&quot;`                    |
| '                      | `&apos;`                    |
| &                      | `&amp;`                     |

Zeichenreferenzen sind relativ leicht zu merken, da der Text, den sie verwenden, eine Abkürzung des Zeichen-Namens ist — zum Beispiel "lt" = "less than" (kleiner als), "quot" = "quotation" (Anführungszeichen) und "amp" = "ampersand" (Ampersand). Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste der XML- und HTML-Zeichenentitätsreferenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint live-sample___entity-ref-example
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('entity-ref-example', 700, 150) }}

Sie können sehen, dass der erste Absatz falsch ist, weil der Browser das zweite `<p>` als Beginn eines neuen Absatzes interpretiert hat. Der zweite Absatz rendert gut, weil die spitzen Klammern des Inhalts "&lt;p&gt;" durch Zeichenreferenzen dargestellt werden.

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange die [Zeichencodierung Ihres HTML auf UTF-8 gesetzt](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding) ist.

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare, daher sind sie für den Benutzer unsichtbar. Der Zweck von Kommentaren besteht darin, Ihnen zu ermöglichen, Notizen im Code einzufügen, um zu erklären, wie er funktioniert. Dies ist sehr nützlich, wenn Sie nach einer längeren Abwesenheit zu einem Code zurückkehren, den Sie nicht mehr im Detail kennen oder wenn jemand anderes daran arbeitet, der ihn noch nie gesehen hat.

Um einen HTML-Kommentar zu schreiben, umklammern Sie ihn mit den speziellen Markierungen `<!--` und `-->`, wie unten gezeigt:

```html live-sample___comment-example
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Dieser Code wird wie folgt gerendert:

{{ EmbedLiveSample('comment-example', 700, 100) }}

Nur der erste Absatz wird in dem Live-Output angezeigt; die zweite Zeile wird nicht gerendert, da sie ein HTML-Kommentar ist.

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, dass Ihnen die Tour durch die Grundlagen des HTML gefallen hat.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls vertiefen einige der hier eingeführten Themen und präsentieren zusätzliche Themen.

> [!NOTE]
> Während Sie beginnen, mehr über HTML zu lernen, ziehen Sie in Betracht, auch die Grundlagen von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) zu lernen, der Sprache, die verwendet wird, um Webseiten zu gestalten (zum Beispiel Farbänderungen, Schriftarten und Abstände). HTML und CSS werden zusammen auf den meisten Webseiten verwendet, und das gleichzeitige Erlernen kann effektiv sein.

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
