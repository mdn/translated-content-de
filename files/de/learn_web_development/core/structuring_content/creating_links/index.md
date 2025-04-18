---
title: Links erstellen
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch als Hyperlinks bekannt) sind wirklich wichtig — sie sind das, was das Web zu einem Netz macht. Dieser Artikel zeigt die Syntax, die erforderlich ist, um einen Link zu erstellen, und diskutiert Link-Best-Practices.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a> behandelt werden. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links das grundlegende Merkmal des Webs sind. Ohne Links gibt es kein Web.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann diese verwendet werden sollten.</li>
          <li>Pfad-Syntax im Detail — Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und block-level Links.</li>
          <li>Die Vorteile, guten Link-Text zu schreiben, wie bessere Zugänglichkeit für Personen, die Bildschirmleser nutzen, und mögliche positive SEO-Effekte verstehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat. Sie sind von Anfang an ein Merkmal des Webs und das, was das Web zu einem Netz macht. Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf bestimmte Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen. Fast jedes Web-Inhalt kann in einen Link umgewandelt werden, so dass beim Klicken oder anderweitigem Aktivieren der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere, das im Web existiert, verweisen. Wenn der Webbrowser nicht weiß, wie er die Datei darstellen oder handhaben soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird die Aufgabe des Öffnens oder Handhabens der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie später versuchen, sie zu bearbeiten).

Beispielsweise enthält die BBC-Homepage viele Links, die nicht nur auf mehrere Nachrichtenartikel verweisen, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Nutzerwerkzeuge) und mehr.

![Startseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenü-Funktionalität zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein einfacher Link wird erstellt, indem der Text oder andere Inhalt in einem {{htmlelement("a")}}-Element umschlossen und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, das auch als **Hypertext-Referenz** oder **Ziel** bekannt ist und die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

### Blocklevel-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Blocklevel-Elemente")}}. Wenn Sie ein Überschriftselement zu einem Link machen möchten, umschließen Sie es wie im folgenden Code-Snippet gezeigt mit einem Anker (`<a>`) Element:

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

Um ein Bild in einen Link umzuwandeln, umschließen Sie das {{htmlelement("img")}}-Element mit einem {{htmlelement("a")}}-Element. Das folgende Beispiel verwendet einen relativen Pfad, um auf eine lokal gespeicherte SVG-Bilddatei zu verweisen.

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

Ein weiteres Attribut, das Sie möglicherweise zu Ihren Links hinzufügen möchten, ist `title`. Der Titel enthält zusätzliche Informationen über den Link, wie z. B. welche Art von Informationen die Seite enthält oder Dinge, die auf der Website zu beachten sind.

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

Dies ergibt das folgende Ergebnis und beim Überfahren des Links mit der Maus wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Link-Titel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die Tastatursteuerungen oder Touchscreens für die Navigation auf Webseiten verwenden, Schwierigkeiten haben werden, Titelinformationen zu erreichen. Wenn die Informationen eines Titels wirklich wichtig für die Nutzbarkeit der Seite sind, sollten Sie sie in einer Weise präsentieren, die für alle Benutzer zugänglich ist, beispielsweise indem Sie sie in den regulären Text einfügen.

### Aktives Lernen: Erstellen Ihres eigenen Beispiel-Links

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Getting Started-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Körper einen oder mehrere Absätze oder andere Arten von Inhalten, die Sie bereits kennen, hinzu.
- Wandeln Sie einige der Inhalte in Links um.
- Fügen Sie title-Attribute hinzu.

## Ein kurzer Überblick über URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt liefert Ihnen die Informationen, die Sie dafür benötigen.

Eine URL oder Uniform Resource Locator ist eine Zeichenfolge, die angibt, wo etwas im Web zu finden ist. Zum Beispiel ist die Englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/` zu finden.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die gewünschte Datei im Dateisystem befindet. Betrachten wir ein Beispiel einer Verzeichnisstruktur, siehe die `creating-hyperlinks`-Verzeichnisstruktur unten:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine Datei index.html und project-brief.pdf enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Seite enthält. Innerhalb des **Roots** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Start- oder Zielseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse in unserem Root — `pdfs` und `projects`. Diese haben jeweils eine einzelne Datei in sich — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an unterschiedlichen Speicherorten im Dateisystem befinden. Die zweite `index.html` wäre möglicherweise die Hauptzielseite für projektbezogene Informationen.

Betrachten wir einige Beispiele für Links zwischen einigen verschiedenen Dateien in dieser Verzeichnisstruktur, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (die oberste `index.html`) einfügen möchten, der auf `contacts.html` verweist, würden Sie den Dateinamen angeben, auf den Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die zu verwendende URL wäre `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **Navigieren in Unterverzeichnisse**: Wenn Sie einen Hyperlink in `index.html` (die oberste `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das `projects`-Verzeichnis navigieren, bevor Sie die Datei angeben, auf die Sie verlinken möchten. Dies geschieht durch Angabe des Verzeichnisnamens, dann einem Schrägstrich und dann dem Namen der Datei. Die zu verwendende URL wäre `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück zum übergeordneten Verzeichnis**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie ein Verzeichnisebene nach oben und dann wieder in das `pdfs`-Verzeichnis. Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte — `..` — die zu verwendende URL wäre `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen zu komplexen URLs kombinieren, falls nötig, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, der als **Dokumentfragment** bekannt ist, anstatt nur auf den Anfang des Dokuments zu verweisen. Dazu müssen Sie zunächst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zuweisen. Es macht normalerweise Sinn, zu einer bestimmten Überschrift zu verlinken, was folgendermaßen aussehen würde:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann zu dieser speziellen `id` zu verlinken, würden Sie diese am Ende der URL hinzufügen, vorausgegangen von einem Hash-/Pfund/Zahlzeichen (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar die Dokumentfragment-Referenz selbst verwenden, um auf _einen anderen Teil desselben Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute vs. relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Verweist auf einen Ort, der durch seinen absoluten Speicherort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}. Wenn zum Beispiel eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich im **Root** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar einfach nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Landing Page wie `index.html` suchen, wenn sie nicht in der URL angegeben ist).

Eine absolute URL verweist immer auf den gleichen Ort, egal wo sie verwendet wird.

**Relative URL**: Verweist auf einen Ort, der _relativ_ zur Datei ist, von der Sie verlinken, eher wie das, was wir im vorherigen Abschnitt betrachtet haben. Wenn wir zum Beispiel von unserer Beispieldatei bei `https://www.example.com/projects/index.html` zu einer PDF-Datei im selben Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine weiteren Informationen erforderlich. Wenn das PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar war, wäre der relative Link `pdfs/project-brief.pdf` (die äquivalente absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Ein relativer URL zeigt je nach tatsächlichem Speicherort der Datei, von der Sie verweisen, auf unterschiedliche Orte — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis in den **Root** der Website verschoben hätten (die oberste Ebene, nicht in Verzeichnissen), würde der `pdfs/project-brief.pdf`-relative URL-Link darin jetzt auf eine Datei an `https://www.example.com/pdfs/project-brief.pdf` zeigen, nicht auf eine Datei an `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändert sich der Speicherort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, weil Sie die `index.html`-Datei verschoben haben — dies würde Ihren Link auf den falschen Ort verweisen lassen, so dass er nicht funktionieren würde, wenn er angeklickt wird. Sie müssen vorsichtig sein!

## Link-Best-Practices

Es gibt einige Best-Practices, die befolgt werden sollten, wenn Links geschrieben werden. Lassen Sie uns diese nun anschauen.

### Verwenden Sie klare Link-Bezeichnungen

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das ist nicht genug. Wir müssen unsere Links für alle Leser zugänglich machen, unabhängig von ihrem aktuellen Kontext und welchen Tools sie bevorzugen. Zum Beispiel:

- Bildschirmleser-Nutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worum es sich bei dem Link handelt.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Aufmerksamkeit wird zu den Seitenmerkmalen gezogen, die hervorstechen, wie Links. Sie finden beschreibende Linktexte nützlich.

Werfen wir einen Blick auf ein spezifisches Beispiel:

**Guter** Linktext: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/new/">Download Firefox</a></p>
```

**Schlechter** Linktext: [Klicken Sie hier](https://www.mozilla.org/en-US/firefox/new/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/new/">Click here</a> to
  download Firefox
</p>
```

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktextes — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Bildschirmleser sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "links zu" im Linktext — das ist einfach unnötig. Bildschirmleser teilen den Menschen mit, dass es sich um einen Link handelt. Visuelle Nutzer werden auch wissen, dass es sich um einen Link handelt, da Links in der Regel in einer anderen Farbe sind und unterstrichen sind (diese Konvention sollte im Allgemeinen nicht gebrochen werden, da die Nutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, weil Bildschirmleser den gesamten Linktext interpretieren müssen.
- Minimieren Sie Fälle, in denen mehrere Kopien desselben Textes an unterschiedliche Orte verlinkend sind. Dies kann für Bildschirmleser-Nutzer problematisch sein, wenn es eine Liste von Links außerhalb des Kontextes gibt, die mit "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" beschriftet sind.

### Zu nicht-HTML-Ressourcen verlinken — klare Wegweiser hinterlassen

Beim Verlinken zu einer Ressource, die nicht auf der aktuellen Seite als "normale Navigation" geöffnet wird, sollten Sie klare Formulierungen im Linktext hinzufügen, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen oder wenn der Link ein Popup öffnet oder einen anderen potenziell unerwarteten Effekt erzielt, sollte dies im Text angegeben werden. Dies ist wichtig für Nutzer mit langsameren Internetverbindungen, die möglicherweise vermeiden möchten, viele Megabyte an Dateien herunterzuladen. Es hilft auch, Erwartungen für Bildschirmleser-Nutzer zu setzen, die sonst möglicherweise nicht wissen, was passiert.

Sehen wir uns einige Beispiele an, um zu sehen, welche Art von Text hier verwendet werden kann:

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

### Verwenden Sie das download-Attribut, wenn Sie zu einem Download verlinken

Wenn Sie zu einer Ressource verlinken, die heruntergeladen statt im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen standardmäßigen Speicherdateinamen anzugeben. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann Links in einem neuen Tab öffnen

Links öffnen standardmäßig im selben Tab wie die Seite, auf der sie sich befinden, was dem Nutzer ermöglicht, über die Zurück-Taste des Browsers zur vorherigen Seite zu navigieren. Viele Seiten (einschließlich MDN) entscheiden sich jedoch dafür, bestimmte Links, besonders externe, in einem neuen Tab zu öffnen. Dies geschieht, indem das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut auf `"_blank"` gesetzt wird.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollen, sollte eine bewusste Entscheidung sein, die auf Überlegungen zur Benutzererfahrung basiert. Hier sind einige Punkte, die zu beachten sind:

- Das Öffnen von Links in einem neuen Tab zeigt die beiden Dokumente gleichzeitig an, was für eine "parallele" Navigationserfahrung nützlich ist. Andererseits sind Links, die im gleichen Tab geöffnet werden, eher eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann desorientierend für Nutzer sein, die an die Verwendung der Zurück-Schaltfläche gewöhnt sind.
- Auch wenn Links standardmäßig im gleichen Tab geöffnet werden, können Nutzer sie dennoch in einem neuen Tab öffnen, indem sie Tastenkombinationen oder Kontextmenüoptionen verwenden. Andererseits sind Links, die in einem neuen Tab geöffnet werden, schwierig im gleichen Tab zu öffnen.
- Bildschirmleser-Nutzer könnten verwirrt werden durch Links, die in einem neuen Tab geöffnet werden, da sie möglicherweise nicht realisieren, dass der neue Tab geöffnet wurde und den Kontext zu ihrem Standort auf der Seite verlieren.

Eine übliche Vorgehensweise ist es, externe Links in neuen Tabs und interne Links im gleichen Tab zu öffnen. Einige Designer ziehen es vor, alle Links im gleichen Tab zu öffnen. Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links zu geben, wie ein Symbol neben dem Linktext.

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine Website mit mehreren Seiten zu erstellen. Dies ist eine häufige Art, wie eine Webseite erstellt wird — dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich dasselbe Navigationsmenü, so dass der Eindruck entsteht, dass man sich am selben Ort befindet und unterschiedliche Inhalte angezeigt werden, wenn Links geklickt werden.

Sie müssen lokale Kopien der folgenden vier Seiten in demselben Verzeichnis erstellen. Für eine vollständige Dateiliste siehe das [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start)-Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollen:

1. Eine ungeordnete Liste an der vorgesehenen Stelle auf einer Seite hinzufügen, die die Namen der zu verlinkenden Seiten enthält. Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Jeden Seitennamen in einen Link zu dieser Seite ändern.
3. Das Navigationsmenü auf jede Seite kopieren.
4. Auf jeder Seite einfach den Link zu genau dieser Seite entfernen — es ist verwirrend und unnötig, wenn eine Seite einen Link auf sich selbst enthält. Und das Fehlen eines Links wirkt als gute visuelle Erinnerung daran, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte folgendermaßen aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit den Menüpunkten Start, Bilder, Projekte und Soziales](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder unsicher sind, ob Sie es richtig haben, können Sie das [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up)-Verzeichnis überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Buttons zu erstellen, die beim Anklicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt auf eine Ressource oder Seite zu verlinken. Dies wird durch das {{HTMLElement("a")}}-Element und das `mailto:`-URL-Schema erreicht.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des beabsichtigten Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers ohne Zieladresse geöffnet. Dies ist oft nützlich als "Teilen"-Links, die Nutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie andere Informationen bereitstellen. Tatsächlich können alle Standard-Mail-Kopfzeilen dem `mailto`-URL hinzugefügt werden, das Sie bereitstellen. Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (was kein echtes Header-Feld ist, aber es ermöglicht Ihnen, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben). Jedes Feld und dessen Wert wird als Abfrageterm angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "prozentsaferencodiert")}} werden. Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und von Kaufmännischen Und-Zeichen (&), um jedes Feld in der `mailto:`-URL zu trennen. Dies ist eine Standard-URL-Abfragenotation. Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür URL-Abfragenotation üblicherweise verwendet wird.

Hier sind einige andere `mailto`-URL-Beispiele:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20das%20Thema>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war's fürs Erste mit Links! Sie werden später im Kurs auf Links zurückkommen, wenn Sie anfangen, sie zu stylen. Als Nächstes für HTML werden Sie ein paar Herausforderungen durchgehen, die das Verständnis der bisher behandelten Themen testen werden.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
