---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig — sie machen das Web _zu einem Netz_.
Dieser Artikel zeigt die Syntax, die benötigt wird, um einen Link zu erstellen, und diskutiert Best Practices für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, warum Links das grundlegende Merkmal des Webs sind. Es gibt kein Web ohne Links.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann man sie verwendet.</li>
          <li>Pfadsyntax im Detail — Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Linkzustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code>, und <code>:active</code>.</li>
          <li>Inline- und Blockebenen-Links.</li>
          <li>Verstehen der Vorteile, guten Linktext zu schreiben, wie zum Beispiel bessere Zugänglichkeit für Screenreader-Benutzer und mögliche positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Beginn des Webs ein Merkmal und das, was das Web _zu einem Netz_ macht.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf spezifische Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass beim Klicken oder anderweitigen Aktivieren der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere, was im Web existiert, verweisen.
> Wenn der Webbrowser nicht weiß, wie die Datei dargestellt oder gehandhabt werden soll, fragt er Sie, ob Sie die Datei öffnen möchten (in diesem Fall wird die Pflicht des Öffnens oder Handhabens der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie später damit umgehen).

Zum Beispiel enthält die BBC-Startseite viele Links, die nicht nur auf verschiedene Nachrichtenmeldungen, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Startseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenü-Funktionalität zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalte in ein {{htmlelement("a")}}-Element eingewickelt und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

### Block-Ebenen-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Blockelemente")}}.
Wenn Sie ein Überschriftselement zu einem Link machen möchten, dann wickeln Sie es wie im folgenden Codeabschnitt gezeigt in ein Anker (`<a>`) Element ein:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies verwandelt die Überschrift in einen Link:
{{EmbedLiveSample('Block level links', '100%', 150)}}

### Bild-Links

Um ein Bild in einen Link zu verwandeln, wickeln Sie das {{htmlelement("img")}}-Element in ein {{htmlelement("a")}}-Element ein. Das untenstehende Beispiel verwendet einen relativen Pfad, um auf eine lokal gespeicherte SVG-Bilddatei zu verweisen.

```css hidden
img {
  height: 100px;
  width: 150px;
  border: 1px solid gray;
}
```

```html
<a href="https://developer.mozilla.org/en-US/">
  <img src="mdn_logo.svg" alt="MDN Web Docs" />
</a>
```

Dies macht das MDN-Logo zu einem Link:
{{EmbedLiveSample('Image links', '100%', 150)}}

> [!NOTE]
> Sie werden mehr über die Verwendung von Bildern im Web in einem zukünftigen Artikel erfahren.

### Hinzufügen unterstützender Informationen mit dem title-Attribut

Ein weiteres Attribut, das Sie möglicherweise zu Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, z. B. welche Art von Informationen die Seite enthält oder Dinge, die auf der Website zu beachten sind.

```html-nolint
<p>
  I'm creating a link to
  <a
    href="https://www.mozilla.org/en-US/"
    title="The best place to find more information about Mozilla's
          mission and how to contribute">
    the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis und das Überfahren des Links mit dem Mauszeiger zeigt den Titel als Tooltip an:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerungen oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, auf Titelinformationen zuzugreifen.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie es so darstellen, dass es für alle Benutzer zugänglich ist, zum Beispiel, indem Sie es in den regulären Text aufnehmen.

### Aktives Lernen: Erstellen Ihres eigenen Beispiel-Links

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Startvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body ein oder mehrere Absätze oder andere Arten von Inhalten hinzu, die Sie bereits kennen.
- Ändern Sie einige der Inhalte in Links.
- Fügen Sie title-Attribute hinzu.

## Eine kurze Einführung in URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die notwendigen Informationen, um dies zu erreichen.

Eine URL oder Uniform Resource Locator ist eine Zeichenfolge aus Text, die angibt, wo sich etwas im Web befindet. Zum Beispiel befindet sich Mozillas englische Homepage unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe die `creating-hyperlinks` Verzeichnisstruktur unten:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html und eine project-brief.pdf Datei enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Site enthält. Im **Root** haben wir eine `index.html`- und eine `contacts.html`-Datei. In einer echten Website wäre `index.html` unsere Startseite oder Landeseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse in unserem Root-Verzeichnis — `pdfs` und `projects`. Diese enthalten jeweils eine einzige Datei — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an verschiedenen Speicherorten im Dateisystem befinden. Die zweite `index.html` wäre vielleicht die Hauptlandeseite für projektbezogene Informationen.

Schauen wir uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (der obersten Ebene `index.html`) einfügen wollten, der auf `contacts.html` verweist, würden Sie den Dateinamen angeben, auf den Sie verlinken möchten, da er sich im selben Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In untergeordnete Verzeichnisse wechseln**: Wenn Sie einen Hyperlink in `index.html` (der obersten Ebene `index.html`) einfügen wollten, der auf `projects/index.html` verweist, müssten Sie in das `projects`-Verzeichnis wechseln, bevor Sie die Datei angeben, auf die Sie verlinken möchten.
  Dies geschieht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich, dann den Namen der Datei. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Aufstiegsbewegung in übergeordnete Verzeichnisse**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen wollten, der auf `pdfs/project-brief.pdf` verweist, müssten Sie ein Verzeichnisebene nach oben gehen und dann in das `pdfs`-Verzeichnis wechseln.
  Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte — `..` —, sodass die URL, die Sie verwenden würden, `../pdfs/project-brief.pdf` lautet:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Merkmale zu komplexen URLs kombinieren, wenn nötig, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als **Dokumentfragment**, anstatt nur auf den Anfang des Dokuments zu verlinken.
Um dies zu tun, müssen Sie dem Element, auf das Sie verlinken möchten, zuerst ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zuweisen.
Normalerweise macht es Sinn, zu einer bestimmten Überschrift zu verlinken, sodass dies ungefähr so aussehen würde:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, fügen Sie diese am Ende der URL ein, gefolgt von einem Hash/Pound-Symbol (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar den Dokumentfragment-Referenz selbst verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, die Ihnen im Web begegnen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Zeigt auf einen Ort, der durch seinen absoluten Ort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich im **Root** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite verfügbar unter `https://www.example.com/projects/index.html` (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Landeseite wie `index.html` suchen, um sie zu laden, wenn sie in der URL nicht angegeben ist.)

Eine absolute URL zeigt immer auf denselben Ort, unabhängig davon, wo sie verwendet wird.

**Relative URL**: Zeigt auf einen Ort, der relativ zur Datei ist, von der aus Sie verlinken, mehr wie das, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` auf eine PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL nur der Dateiname — `project-brief.pdf` — keine zusätzliche Information nötig. Wenn das PDF in einem Unterverzeichnis innerhalb von `projects` mit dem Namen `pdfs` verfügbar wäre, würde der relative Link `pdfs/project-brief.pdf` lauten (die äquivalente absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL zeigt auf verschiedene Orte, je nachdem, wo sich die Datei befindet, auf die Sie von dort verlinken — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis in das **Root** der Website (die oberste Ebene, nicht in irgendeinem Verzeichnis) verschieben, würde der `pdfs/project-brief.pdf` relative URL-Link jetzt auf eine Datei zeigen, die unter `https://www.example.com/pdfs/project-brief.pdf` liegt, nicht auf eine Datei, die unter `https://www.example.com/projects/pdfs/project-brief.pdf` liegt.

Natürlich ändern sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, weil Sie die `index.html`-Datei verschoben haben — dies würde dazu führen, dass Ihr Link auf den falschen Ort verweist, sodass er nicht funktioniert, wenn darauf geklickt wird. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige Best Practices, die beim Schreiben von Links befolgt werden sollten. Lassen Sie uns diese jetzt betrachten.

### Verwenden Sie klare Linkbeschreibungen

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das ist nicht genug. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und welchen Tools sie bevorzugen. Zum Beispiel:

- Screenreader-Benutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verwiesen wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu Seitenelementen hingezogen, die auffallen, wie Links. Sie finden beschreibende Linktexte nützlich.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Linktext: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/">Download Firefox</a></p>
```

**Schlechter** Linktext: [Hier klicken](https://www.mozilla.org/en-US/firefox/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/">Click here</a> to download
  Firefox
</p>
```

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktextes — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Screenreader sie buchstabenweise liest.
- Sagen Sie nicht "Link" oder "verweist auf" im Linktext — es ist nur Lärm. Screenreader sagen den Leuten, dass es einen Link gibt.
  Visuelle Benutzer werden ebenfalls wissen, dass es einen Link gibt, weil Links in der Regel in einer anderen Farbe und unterstrichen gestylt sind (in der Regel sollte diese Konvention nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — dies ist hilfreich, da Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie das Auftreten mehrfacher Kopien desselben Textes, die zu unterschiedlichen Orten verlinken.
  Dies kann für Screenreader-Benutzer problematisch sein, wenn es eine Liste von Links außerhalb des Kontexts gibt, die mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind.

### Verlinken zu nicht-HTML-Ressourcen — klare Hinweisschilder hinterlassen

Beim Verlinken zu einer Ressource, die nicht auf der aktuellen Seite als "normale Navigation" geöffnet wird, sollten Sie im Linktext deutlich angeben, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link ein Popup öffnet oder einen anderen potenziell unerwarteten Effekt hat, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit langsamen Verbindungen, die das Herunterladen von Dateien mit mehreren Megabyte vermeiden möchten. Es hilft auch, Erwartungen für Screenreader-Benutzer zu setzen, die möglicherweise ansonsten nicht wissen, was passiert.

Schauen wir uns einige Beispiele an, um zu sehen, welche Art von Text hier verwendet werden kann:

```html
<p>
  <a href="/large-report.pdf" download>
    Download the sales report (PDF, 10MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    Watch the video (stream opens in separate tab, HD quality)
  </a>
</p>
```

### Verwenden Sie das download-Attribut beim Verlinken zu einem Download

Wenn Sie auf eine Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen standardmäßigen Dateinamen zum Speichern bereitzustellen. Hier ist ein Beispiel mit einem Downloadlink zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann Links in einem neuen Tab öffnen

Links öffnen standardmäßig im selben Tab wie die Seite, auf der sie sich befinden, was es dem Benutzer ermöglicht, mit der Zurück-Schaltfläche des Browsers zur vorherigen Seite zu navigieren. Viele Sites (einschließlich MDN) wählen jedoch, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies wird durch Setzen des [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attributes auf `"_blank"` erreicht.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollten, sollte eine bewusste Entscheidung sein, basierend auf den Überlegungen zum Benutzererlebnis-Design. Hier sind einige Dinge, über die Sie nachdenken sollten:

- Das Öffnen von Links in einem neuen Tab präsentiert die beiden Dokumente gleichzeitig, was für eine "parallele" Navigationserfahrung nützlich ist. Andererseits sind Links, die im selben Tab geöffnet werden, mehr wie eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann für Benutzer desorientierend sein, die es gewohnt sind, die Zurück-Schaltfläche zu verwenden.
- Auch wenn Links standardmäßig im selben Tab geöffnet werden, können Benutzer sie trotzdem über Tastenkombinationen oder Kontextmenüoptionen in einem neuen Tab öffnen. Andererseits sind Links, die in einem neuen Tab geöffnet werden, schwer in demselben Tab zu öffnen.
- Screenreader-Benutzer können durch Links, die in einem neuen Tab geöffnet werden, verwirrt werden, da sie möglicherweise nicht realisieren, dass ein neuer Tab geöffnet wurde, und den Kontext über ihren Standort auf der Seite verlieren.

Ein gängiger Ansatz ist es, externe Links in neuen Tabs zu öffnen und interne Links im gleichen Tab.
Einige Designer ziehen es vor, alle Links im gleichen Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, wie z.B. ein Symbol neben dem Linktext.

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine häufige Methode, um eine Website zu erstellen — dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich desselben Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie am gleichen Ort bleiben und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Für eine vollständige Dateiliste sehen Sie das [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start)-Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Eine ungeordnete Liste an der angegebenen Stelle auf einer Seite hinzufügen, die die Namen der Seiten enthält, zu denen verlinkt werden soll.
   Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Jeden Seitennamen in einen Link zu dieser Seite umwandeln.
3. Das Navigationsmenü auf jede Seite kopieren.
4. Auf jeder Seite nur den Link zu dieser gleichen Seite entfernen — es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält.
   Und das Fehlen eines Links dient als guter visueller Hinweis darauf, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte folgendermaßen aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit den Menüpunkten Home, Bilder, Projekte und Soziales](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder sich nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Klicken eine neue ausgehende E-Mail öffnen, anstatt zu einer Ressource oder Seite zu verlinken.
Dies geschieht mit dem {{HTMLElement("a")}} Element und dem `mailto:` URL-Schema.

In seiner grundlegendsten und gebräuchlichsten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird ein neues Fenstern für ausgehende E-Mails vom E-Mail-Client des Benutzers mit keiner Empfängeradresse geöffnet.
Dies ist oft nützlich als "Teilen"-Links, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen bereitstellen. Tatsächlich können alle Standard-Mail-Header-Felder zur `mailto`-URL hinzugefügt werden, die Sie bereitstellen.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (was kein echtes Header-Feld ist, sondern es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert wird als Abfragebegriff angegeben.

Hier ist ein Beispiel, das eine cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckenden Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "prozentsymbolkodiert")}} URL-kodiert werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen und der kaufmännischen Und-Zeichen (&) zur Trennung jedes Feldes in der `mailto:` URL.
> Dies ist eine standardmäßige URL-Abfrage-Notation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation häufiger verwendet wird.

Hier sind ein paar weitere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20der%20Betreff>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war's fürs Erste mit Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie damit beginnen, sie zu stylen. Als nächstes im HTML-Abschnitt werden Sie Herausforderungen durcharbeiten, die Ihr Verständnis der bisher behandelten Themen testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
