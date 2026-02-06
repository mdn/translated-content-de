---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: d63fef1845615e13132bbbebb8723785eace208d
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die Grundlagen von HTML, einschließlich Terminologie, Syntax und Struktur. Unterwegs werden Sie einige interaktive Herausforderungen abschließen, um sich mit dem Schreiben von einfachem HTML vertraut zu machen.

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
          <li>Der Aufbau eines HTML-Elements — Element, öffnendes Tag, Inhalt, schließendes Tag, Attribute.</li>
          <li>Der HTML-Körper und sein Zweck als Container für den Seiteninhalt.</li>
          <li>Was leere Elemente sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctype am Anfang von HTML-Dokumenten, einschließlich seines ursprünglich beabsichtigten Zwecks und der Tatsache, dass er jetzt eher ein historisches Artefakt ist.</li>
          <li>Verständnis dafür, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Markup-Sprache_, die Webbrowsern mitteilt, wie die Webseiten strukturiert werden sollen, die Sie besuchen. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die verwendet werden, um verschiedene Teile von Inhalten einzuschließen, zu umschließen oder zu _kennzeichnen_, damit sie auf bestimmte Weise erscheinen oder reagieren. Die einschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink umwandeln, um auf eine andere Seite zu verlinken, Wörter kursiv schreiben usw. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wir könnten angeben, dass dieser Text ein Absatz ist, indem wir ihn in Absatz-Tags ({{htmlelement("p")}}) einschließen:

```html
<p>My cat is very grumpy</p>
```

Oder wir könnten angeben, dass dieser Text eine Überschrift der obersten Ebene ist, indem wir ihn in [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Tags einschließen:

```html
<h1>My cat is very grumpy</h1>
```

HTML befindet sich in Textdateien, die als **HTML-Dokumente** oder einfach **Dokumente** bezeichnet werden und die Dateierweiterung `.html` haben. Wo wir früher von Webseiten gesprochen haben, enthält ein HTML-Dokument die Inhalte der Webseite und legt deren Struktur fest.

Die häufigste HTML-Datei, der Sie begegnen werden, ist `index.html`, die in der Regel den Inhalt der Startseite einer Website enthält. Es ist auch üblich, Unterordner mit ihren eigenen `index.html`-Dateien zu sehen, sodass eine Website mehrere Indexdateien an verschiedenen Orten haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitive. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden und würde funktionieren. Es ist jedoch Best Practice, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt weiter erkunden:

![Ein Beispielcode-Snippet, das die Struktur eines HTML-Elements zeigt.<p> Meine Katze ist sehr mürrisch </p>.](grumpy-cat-small.png)

Unser vollständiges Element besteht aus:

- **Dem öffnenden Tag:** Dies besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), eingeschlossen in öffnende und schließende spitze Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder wirkt. In diesem Beispiel geht es dem Anfang des Absatztexts voraus.
- **Dem Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext — "Meine Katze ist sehr mürrisch".
- **Dem schließenden Tag:** Dies ist das gleiche wie das öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Versäumnis, ein schließendes Tag einzufügen, ist ein häufiger Anfängerfehler, der zu merkwürdigen Ergebnissen führen kann.

> [!NOTE]
> Gehen Sie zu unserem Lernpartner Scrimba für eine interaktive Erklärung von HTML-Tags in Scrimbas [HTML-Tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>.

### Erstellen Ihres ersten HTML-Elements

Lassen Sie uns etwas Übung im Schreiben Ihrer eigenen HTML-Elemente machen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie die Textzeile mit den Tags `<em>` und `</em>`. Um das Element zu _öffnen_, setzen Sie das öffnende Tag (`<em>`) an den Anfang der Zeile. Um das Element zu _schließen_, setzen Sie das schließende Tag (`</em>`) an das Ende der Zeile. Dies sollte den gerenderten Text als kursiven Text formatieren.
3. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige [weitere HTML-Elemente](/de/docs/Web/HTML/Reference/Elements) zu erforschen und auf das Textbeispiel anzuwenden.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit im MDN Playground mit der _Zurücksetzen_-Schaltfläche löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb des Codeblocks anzeigen.

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

Elemente können innerhalb anderer Elemente platziert werden. Dies wird _Verschachteln_ genannt. Wenn wir sagen wollten, dass unsere Katze **sehr** mürrisch ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einschließen, das dem Wort eine stärkere Textformatierung verleiht:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

In diesem Codeblock wird der Text "Meine Katze ist sehr mürrisch." als Absatz definiert. Das Wort "sehr" wird zusätzlich als stark wichtig definiert.

Es gibt eine korrekte und eine falsche Art, das Verschachteln durchzuführen. In dem obigen Codeblock öffnen wir zuerst das `<p>`-Element und dann das `<strong>`-Element. Für eine korrekte Verschachtelung schließen wir zuerst das `<strong>`-Element und dann das `<p>`.

Das Folgende ist ein Beispiel für die _falsche_ Art der Verschachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb voneinander befinden**. Da die Elemente im vorherigen Codeblock überlappen, muss der Browser Ihre Absicht erraten. Diese Art von Raten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und dann eines schließenden Tags. Einige Elemente bestehen aus einem einzelnen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt, was bedeutet "Elemente, die keinen anderen HTML-Inhalt enthalten können".

Zum Beispiel fügt das {{htmlelement("br")}}-Element einen Zeilenumbruch in eine Textzeile ein, was dazu führt, dass sie auf mehrere Zeilen umbricht:

```html live-sample___void-example
<p>
  This is a single paragraph, but we are going to <br />break it onto two lines.
</p>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('void-example', "100%", 100) }}

> [!NOTE]
> In einigen HTML-Beispielen sehen Sie einen `/`, der am Ende eines leeren Elements hinzugefügt wird, zum Beispiel `<br />`. Dies ist ein anderer Stil der Markup-Syntax, die nicht falsch ist, aber dieser "Schlussschrägstrich" ist nicht erforderlich.

## Attribute

Elemente können auch Attribute haben. Attribute sehen folgendermaßen aus:

![Absatz-Tag mit 'class="editor-note"' Attribut hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht Teil seines Inhalts sind. Das **`class`**-Attribut bietet einen identifizierenden Namen, der verwendet werden kann, um das Element mit Stilen (CSS) oder Scripting-Informationen (JavaScript) zu versehen.

Ein Attribut sollte haben:

- Ein Leerzeichen zwischen sich und dem Elementnamen. Wenn ein Element mehr als ein Attribut hat, sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.
- Den Attributnamen, gefolgt von einem Gleichheitszeichen (`=`).
- Einen Attributwert, eingeschlossen in öffnende und schließende Anführungszeichen.

### Hinzufügen von Attributen zu einem Element

Jetzt sind Sie wieder dran. In diesem Abschnitt werden Sie das {{htmlelement("img")}}-Element erkunden, das verwendet wird, um ein Bild auf der Seite anzuzeigen. Das `<img>`-Element kann mehrere Attribute aufweisen, darunter:

- `src`: Ein **erforderliches** Attribut, das die {{Glossary("URL", "URL")}} (Webadresse) des Bildes angibt. Zum Beispiel: `src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"`.
- `alt`: Gibt eine Textbeschreibung an, um das Bild für Personen zu beschreiben, die es nicht sehen können. Zum Beispiel: `alt="Das Firefox Nightly-Icon"`. Dieses Attribut ist technisch nicht erforderlich, aber Sie sollten wirklich eine Textbeschreibung für alle Bilder angeben, die Bedeutung vermitteln (im Gegensatz zu rein dekorativen).
- `width`: Gibt die Breite des Bildes in Pixeln an. Zum Beispiel: `width="300"`.
- `height`: Gibt die Höhe des Bildes in Pixeln an. Zum Beispiel: `height="300"`.

Befolgen Sie die untenstehenden Schritte, um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Finden Sie Ihr Lieblingsbild online, klicken Sie es mit der rechten Maustaste an und drücken Sie _Bildlink kopieren/Adresse kopieren_. Alternativ können Sie die oben angegebene Bild-URL kopieren.
3. Fügen Sie im MDN Playground das `src`-Attribut zum `<img>`-Element hinzu und setzen Sie den Wert auf die URL aus Schritt 2.
4. Setzen Sie das `alt`-Attribut auf eine geeignete Beschreibung des Bildes.
5. Setzen Sie das `width`-Attribut auf einen Wert von zum Beispiel `300`, damit Sie das Bild im Ausgabepanel etwas besser sehen können. Passen Sie den Wert nach Bedarf an.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit im MDN Playground mit der _Zurücksetzen_-Schaltfläche löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb des Codeblocks anzeigen.

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

Manchmal sehen Sie HTML-Attribute ohne Werte geschrieben. Diese werden {{Glossary("Boolean/HTML", "Boolesche Attribute")}} genannt. Wenn ein boolesches Attribut hinzugefügt wird, wird sein Wert auf `true` gesetzt, unabhängig davon, welcher Wert ihm zugewiesen wird (auch wenn kein Wert angegeben wird). Wenn ein Attribut nicht in einem HTML-Tag enthalten ist, wird sein Wert auf `false` gesetzt.

Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut, das Sie Eingabeelementen im Formular {{htmlelement("input")}} zuweisen können, um zu verhindern, dass der Benutzer Daten in sie eingibt. Zum Beispiel:

```html live-sample___boolean-example
<label for="first-input">This input is disabled</label>
<input id="first-input" type="text" disabled="disabled" />
<br />
```

Als Abkürzung ist es akzeptabel, das `disabled`-Attribut ohne einen Wert zu schreiben:

```html live-sample___boolean-example
<label for="second-input">This input is also disabled</label>
<input id="second-input" type="text" disabled />
<br />
```

Zum Vergleich stellen wir auch ein nicht deaktiviertes `<input>`-Element bereit, damit Sie vergleichen und kontrastieren können (beachten Sie, wie die `disabled` Eingaben im unteren Rendering etwas ausgegraut sind):

```html live-sample___boolean-example
<label for="third-input">This input isn't disabled; you can type into it</label>
<input id="third-input" type="text" />
```

Die obigen HTML-Snippets werden wie folgt gerendert:

{{ EmbedLiveSample('boolean-example', "100%", 100) }}

> [!NOTE]
> In dem obigen Code enthalten die {{htmlelement("label")}}-Elemente eine Möglichkeit, beschreibende Beschriftungen mit Formularelementen zu assoziieren. Wir haben sie eingefügt, weil es eine Best Practice ist, und um etwas Abstand zwischen den Formulareingaben bereitzustellen.

### Weglassen von Anführungszeichen um Attributwerte

Es ist in Ordnung, die Anführungszeichen um Attributwerte in bestimmten Umständen wegzulassen. Aber da dies in anderen Umständen Ihr Markup beschädigen kann, raten wir Ihnen, **immer** die Anführungszeichen einzuschließen. Lassen Sie uns erkunden, warum.

Das im untenstehenden Code-Snippet enthaltene Element {{htmlelement("a")}} wird als **Anker** bezeichnet. Anker schließen Text ein und verwandeln ihn in Links. Das `href`-Attribut gibt die URL an, auf die der Link verweist. Sie können die Anführungszeichen um den `href`-Attributwert unten weglassen, ohne negative Konsequenzen zu erfahren, da er keine Leerzeichen enthält:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Allerdings stoßen Sie schnell auf Probleme, wenn Sie Anführungszeichen von Attributwerten _mit_ Leerzeichen weglassen. Betrachten Sie das unten gezeigte `title`-Attribut, das eine Beschreibung der verlinkten Seite bereitstellt ("Die Mozilla-Homepage"), die als Tooltip angezeigt werden soll, wenn der Link mit dem Mauszeiger überfahren wird.

```html-nolint example-bad live-sample___bad-no-quotes
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Da keine Anführungszeichen um den `title`-Attributwert enthalten sind, interpretiert der Browser dies als drei Attribute: ein `title`-Attribut mit dem Wert `The` und zwei boolesche Attribute — `Mozilla` und `homepage`. Offensichtlich ist dies nicht das, was wir beabsichtigt haben! Wenn Sie ein Gerät mit einem Mauszeiger verwenden, können Sie versuchen, über den Link zu schweben, um das Titel-Tooltip anzuzeigen (es wird Ihnen "The" statt des beabsichtigten "The Mozilla homepage" geben).

{{ EmbedLiveSample('bad-no-quotes', 700, 100) }}

Schließen Sie immer Anführungszeichen um Attributwerte ein. Es vermeidet Fehler und unbeabsichtigtes Verhalten und führt zu besser lesbarem Code.

### Einzel- oder doppelte Anführungszeichen?

In diesem Artikel haben wir alle unsere Attributwerte in doppelte Anführungszeichen eingeschlossen. Sie könnten jedoch sehen, dass in einigen HTML-Codes einfache Anführungszeichen verwendet werden. Dies ist eine Frage des Stils. Sie können sich frei entscheiden, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie keine einfachen und doppelten Anführungszeichen mischen. Das untenstehende Beispiel mischt Anführungszeichen, was zu Fehlern führt, da der Browser den `href`-Attributwert als nicht beendet ansieht:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _in Ihrem_ Attributwert enthalten. Dies funktioniert einwandfrei:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfach oder doppelt) zu verwenden, können Sie [Zeichenreferenzen](#character_references_including_special_characters_in_html) verwenden. Zum Beispiel wird dies kaputt gehen:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind allein nicht sehr nützlich. Lassen Sie uns als nächstes untersuchen, wie einzelne Elemente kombiniert werden, um eine vollständige HTML-Seite zu bilden.

Das folgende Beispiel ist eine sehr einfache komplette Webseite:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten. Doctypes sahen früher etwa so aus:

   ```html
   <!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In der heutigen Zeit ist der Doctype ein historisches Artefakt, das für alles andere korrekt funktionieren muss. `<!doctype html>` ist die kürzeste Zeichenfolge, die als gültiger Doctype zählt, und sie sollte am Anfang aller Webseiten enthalten sein. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt alle Inhalte auf der Seite. Es wird manchmal als das Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für Informationen über die Seite, die _nicht_ Teil des Inhalts sind, den Benutzer sehen werden. Dies kann Schlüsselwörter und eine Seitenbeschreibung für Suchergebnisse, CSS zum Stylen von Inhalten, Zeichensatzdeklarationen und mehr enthalten. Sie werden mehr über den Kopf der Seite im nächsten Artikel lernen.
4. `<meta charset="utf-8">`: Ein {{htmlelement("meta")}}-Element. Dieses Element repräsentiert Metadaten, die die Seite beschreiben. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset)-Attribut gibt die Zeichenkodierung an, die Ihr Dokument verwenden wird. UTF-8 enthält die meisten Zeichen der überwiegenden Mehrheit der menschlichen Schriftsprache, was bedeutet, dass die Seite verschiedene Sprachen erfolgreich anzeigen kann. Es gibt keinen Grund, dies nicht zu setzen, und es kann später einige Probleme vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dies setzt den Titel der Seite, der der Titel ist, der im Browsertab erscheint, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiodateien und so weiter.

### Hinzufügen einiger Merkmale zu einem HTML-Dokument

An diesem Punkt möchten wir, dass Sie üben, einige etwas umfassendere HTML-Inhalte zu schreiben. Dazu haben Sie ein paar Optionen — Sie können das HTML auf Ihrem lokalen Computer erstellen oder den MDN Playground wie in den vorherigen Beispielen verwenden.

#### Beispiel Setup

- Um es auf Ihrem lokalen Rechner zu tun:
  1. Kopieren Sie das HTML-Seiten-Beispiel aus dem vorherigen Abschnitt und fügen Sie es in eine neue Datei in Ihrem Code-Editor ein. Sie können auch diese [grundlegende HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in unserem GitHub-Repo finden.
  2. Nehmen Sie die Änderungen an der Seite vor, die in den [Anweisungen](#beispielanweisungen) aufgeführt sind.
  3. Speichern Sie die Datei als `index.html` und laden Sie sie in einem neuen Browsertab, um die Ergebnisse zu sehen.
- Um es im MDN Playground zu tun, klicken Sie auf **"Play"** im Ausgabefeld unten, um das Beispiel zu bearbeiten, und folgen Sie dann den [Anweisungen](#beispielanweisungen). Wenn Sie einen Fehler machen, können Sie Ihre Arbeit im MDN Playground mit der _Zurücksetzen_-Schaltfläche löschen.

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

Hier sind die Anweisungen, denen Sie folgen sollen:

1. Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte durch `<h1></h1>` öffnende und schließende Tags umschlossen sein.
2. Bearbeiten Sie den Absatzinhalt, indem Sie einen Text über ein Thema einfügen, das Sie interessant finden.
3. Lassen Sie wichtige Wörter fett hervortreten, indem Sie sie in ein {{htmlelement("strong")}}-Element einfügen.
4. Fügen Sie zwei Links zu Ihrem Absatz hinzu. Dies wird mit dem {{htmlelement("a")}}-Element erreicht.
5. Fügen Sie ein Bild zu Ihrem Dokument unterhalb des Absatzes hinzu, wie [zuvor erklärt](#hinzufügen_von_attributen_zu_einem_element). Wenn es zu groß ist, um es zu sehen, fügen Sie ein `width`-Attribut hinzu, um es zu verkleinern.

Wenn Sie wirklich nicht weiterkommen, können Sie hier eine mögliche Lösung anzeigen:

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

## Leerzeichen in HTML

In früheren Beispielen haben wir viel Leerraum im Code eingefügt. In den meisten Fällen ist dies völlig optional und hauptsächlich dazu gedacht, den Code lesbarer zu machen. Zum Beispiel sind diese zwei Code-Snippets gleichwertig:

```html-nolint live-sample___whitespace-example
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Sie werden beide genau gleich gerendert:

{{ EmbedLiveSample('whitespace-example', 700, 100) }}

In fast allen Elementen (es gibt Ausnahmen wie {{htmlelement("pre")}}), egal wie viel Leerraum Sie innerhalb des Inhalts eines HTML-Elements verwenden, reduziert der HTML-Parser jede Leerraumsequenz auf ein einziges Leerzeichen, wenn der Code gerendert wird.

Es liegt an Ihnen, einen bevorzugten Code-Formatierungsstil auszuwählen. Es ist üblich, jedem verschachtelten Element zwei Einrückungsleerräume mehr als demjenigen, in dem es sich befindet, zu geben; dies ist der Stil, den wir auf MDN verwenden.

Zum Beispiel:

```html
<section>
  <div>
    <p>A paragraph of content.</p>
  </div>
</section>
```

## Zeichenreferenzen: Einfügen von Sonderzeichen in HTML

In HTML sind die Zeichen `<`, `>`, `"`, `'`, und `&` spezielle Zeichen. Sie sind Teile der HTML-Syntax selbst. Wie können Sie also diese speziellen Zeichen in Ihrem Text verwenden? Zum Beispiel, wie können Sie ein echtes Kaufmannszeichen oder kleiner-als-Zeichen in Ihrem Inhalt verwenden, ohne dass es als Code interpretiert wird?

Dies tun Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen darstellen, um in genau diesen Umständen verwendet zu werden. Jede Zeichenreferenz beginnt mit einem Ampersand (&) und endet mit einem Semikolon (;).

| Echtes Zeichen | Zeichenreferenz-Äquivalent |
| -------------- | -------------------------- |
| <              | `&lt;`                     |
| >              | `&gt;`                     |
| "              | `&quot;`                   |
| '              | `&apos;`                   |
| &              | `&amp;`                    |

Zeichenreferenzen sind ziemlich leicht zu merken, da der von ihnen verwendete Text eine Abkürzung für den Namen des Zeichens ist — zum Beispiel "lt" = "less than", "quot" = "quotation" und "amp" = "ampersand". Um mehr über Zeichenreferenzen zu erfahren, lesen Sie [Liste der XML- und HTML-Zeichen-Entitätenreferenzen](https://de.wikipedia.org/wiki/Liste_von_XML-_und_HTML-Zeichen-Entit%C3%A4tsreferenzen) (Wikipedia).

Im untenstehenden Beispiel gibt es zwei Absätze:

```html-nolint live-sample___entity-ref-example
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('entity-ref-example', 700, 150) }}

Sie können sehen, dass der erste Abschnitt schief gelaufen ist, weil der Browser die zweite Instanz von `<p>` als Beginn eines neuen Absatzes interpretiert hat. Der zweite Absatz wird korrekt gerendert, weil die spitzen Klammern des Inhalts "&lt;p&gt;" durch Zeichenreferenzen dargestellt werden.

> [!NOTE]
> Sie müssen keine Zeichenreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole einwandfrei behandeln, solange das [Zeichenencoding Ihres HTML auf UTF-8 gesetzt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML verfügt über einen Mechanismus zum Schreiben von Kommentaren im Code. Browser ignorieren Kommentare, daher sind sie für den Benutzer unsichtbar. Der Zweck von Kommentaren ist es, Ihnen zu ermöglichen, Notizen in den Code einzufügen, um zu erklären, wie er funktioniert. Dies ist sehr nützlich, wenn Sie nach ausreichender Abwesenheit zu einem Code zurückkehren und sich nicht mehr daran erinnern können, oder wenn jemand anderes daran arbeiten möchte, der den Code noch nie gesehen hat.

Um einen HTML-Kommentar zu schreiben, umschließen Sie ihn in den speziellen Markierungen `<!--` und `-->`, wie unten gezeigt:

```html live-sample___comment-example
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Dieser Code wird wie folgt gerendert:

{{ EmbedLiveSample('comment-example', 700, 100) }}

Nur der erste Absatz wird in der Live-Ausgabe angezeigt; die zweite Zeile wird nicht gerendert, da sie ein HTML-Kommentar ist.

## Zusammenfassung

Sie haben das Ende des Artikels erreicht! Wir hoffen, Sie haben Ihre Tour durch die Grundlagen von HTML genossen.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einem grundlegenden Niveau funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die weiteren Artikel dieses Moduls gehen weiter auf einige der hier eingeführten Themen ein und stellen zusätzliche Themen vor.

> [!NOTE]
> Während Sie anfangen, mehr über HTML zu lernen, sollten Sie auch die Grundlagen von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) lernen, die Sprache, die zum Stylen von Webseiten verwendet wird (zum Beispiel zum Ändern von Farben, Schriftarten und Abständen). HTML und CSS werden in den meisten Webseiten zusammen verwendet, und es kann effektiv sein, sie gleichzeitig zu lernen.

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
