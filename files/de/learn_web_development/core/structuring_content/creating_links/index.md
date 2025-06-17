---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig — sie machen das Web zu einem **Netz**.
Dieser Artikel zeigt die Syntax, die erforderlich ist, um einen Link zu erstellen, und bespricht Best Practices für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbasierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links die grundlegende Funktion des Webs sind. Ohne Links gibt es kein Web.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann man sie verwenden sollte.</li>
          <li>Pfad-Syntax im Detail — Schrägstriche, ein Punkt und zwei Punkte.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code>, und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verstehen der Vorteile von gutem Link-Text, wie z.B. bessere Zugänglichkeit für Screenreader-Nutzer und potenzielle positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der spannendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Beginn des Webs eine Funktion und machen das Web zu einem **Netz**.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, zu bestimmten Teilen von Dokumenten zu springen oder Anwendungen unter einer Webadresse verfügbar zu machen.
Fast jedes Web-Inhalt kann in einen Link umgewandelt werden, so dass der Webbrowser beim Klicken oder anderweitigem Aktivieren zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, das im Web vorhanden ist.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie versuchen, sie später zu bearbeiten).

Zum Beispiel enthält die BBC-Startseite viele Links, die nicht nur auf mehrere Nachrichtenartikel verweisen, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzer-Tools) und mehr.

![Titelseite von bbc.co.uk, die viele Nachrichtenartikel und Menüfunktionen zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalte innerhalb eines {{htmlelement("a")}}-Elements gewickelt und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt folgendes Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

> [!NOTE]
> Scrimbas [Anker-Tags](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Demonstration, wie man Links mit HTML erstellt, sowie eine Herausforderung, um Sie dazu zu bringen, Ihre eigenen Links zu erstellen.

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftselement in einen Link umwandeln möchten, wickeln Sie es so in ein Anker-(`<a>`) Element, wie im folgenden Code-Snippet gezeigt:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies macht die Überschrift zu einem Link:
{{EmbedLiveSample('Block level links', '100%', 150)}}

### Bild-Links

Um ein Bild in einen Link zu verwandeln, wickeln Sie das {{htmlelement("img")}}-Element mit einem {{htmlelement("a")}}-Element. Das folgende Beispiel verwendet einen relativen Pfad, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

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
> Mehr über die Verwendung von Bildern im Web erfahren Sie in einem zukünftigen Artikel.

### Unterstützende Informationen mit dem title-Attribut hinzufügen

Ein weiteres Attribut, das Sie Ihren Links hinzufügen können, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, z. B. welche Art von Informationen die Seite enthält oder worauf man auf der Website achten sollte.

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

Dies ergibt folgendes Ergebnis und beim Überfahren des Links wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerung oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, auf Titelinformationen zuzugreifen.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie diese auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, z. B. indem Sie sie im regulären Text unterbringen.

### Erstellen Sie Ihre eigenen Beispiel-Links

Nun sind Sie an der Reihe!

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten, oder machen Sie eine Kopie unserer [Getting Started Template](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) und kopieren Sie den unten stehenden Code hinein.
2. Verlinken Sie den Text "Rotes Eichhörnchen" und "Östliches Graues Eichhörnchen" auf Wikipedia-Seiten, die die entsprechenden Arten beschreiben. Geben Sie jedem Link ein `title`-Attribut, das dem wissenschaftlichen Namen der Art entspricht.
3. Verlinken Sie den Text "Wikipedia Eichhörnchen Seite" auf die Hauptseite von Wikipedia für Eichhörnchen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock ansehen.

```html live-sample___links-1
<h1>Squirrels</h1>

<p>
  Squirrels are commonly thought of as tree-dwelling mammals, but the squirrel
  family extends far beyond that to include ground-dwelling rodents such as
  chipmunks and prairie dogs, and flying squirrels.
</p>

<p>Two of the most common and best-known squirrel species are the:</p>

<ul>
  <li>Red squirrel</li>
  <li>Eastern gray squirrel</li>
</ul>

<p>
  For a good starting point on squirrel information, see the Wikipedia Squirrel
  page.
</p>
```

{{ EmbedLiveSample('links-1', "100%", 280) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiggestelltes HTML sollte so aussehen:

```html
<h1>Squirrels</h1>

<p>
  Squirrels are commonly thought of as tree-dwelling mammals, but the squirrel
  family extends far beyond that to include ground-dwelling rodents such as
  chipmunks and prairie dogs, and flying squirrels.
</p>

<p>Two of the most common and best-known squirrel species are the:</p>

<ul>
  <li>
    <a
      href="https://en.wikipedia.org/wiki/Red_squirrel"
      title="Sciurus vulgaris">
      Red squirrel
    </a>
  </li>
  <li>
    <a
      href="https://en.wikipedia.org/wiki/Eastern_gray_squirrel"
      title="Sciurus carolinensis">
      Eastern gray squirrel
    </a>
  </li>
</ul>

<p>
  For a good starting point on squirrel information, see the
  <a href="https://en.wikipedia.org/wiki/Squirrel">Wikipedia Squirrel page</a>.
</p>
```

</details>

## Ein kurzer Überblick über URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt liefert Ihnen die notwendigen Informationen, um dies zu erreichen.

Eine URL oder ein Uniform Resource Locator ist eine Zeichenfolge, die definiert, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Startseite von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an: siehe die `creating-hyperlinks`-Verzeichnisstruktur unten:

![Eine einfache Verzeichnisstruktur. Das Stammverzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html- und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Die **Wurzel** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Website enthält. Innerhalb der **Wurzel** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Start- oder Landingpage (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unserer Wurzel — `pdfs` und `projects`. Diese enthalten jeweils eine einzige Datei — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an verschiedenen Speicherorten im Dateisystem befinden. Die zweite `index.html` wäre vielleicht die Haupt-Landingpage für projektbezogene Informationen.

Schauen wir uns einige Beispiele für Links zwischen einigen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie innerhalb von `index.html` (dem obersten `index.html`) einen Hyperlink zu `contacts.html` einfügen möchten, geben Sie den Dateinamen an, den Sie verlinken möchten, da er sich im selben Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **Absteigen in Unterverzeichnisse**: Wenn Sie innerhalb von `index.html` (dem obersten `index.html`) einen Hyperlink zu `projects/index.html` einfügen möchten, müssen Sie in das `projects`-Verzeichnis absteigen, bevor Sie die Datei angeben, zu der Sie verlinken möchten.
  Dies geschieht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich, gefolgt vom Namen der Datei. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück zu übergeordneten Verzeichnissen**: Wenn Sie innerhalb von `projects/index.html` einen Hyperlink zu `pdfs/project-brief.pdf` einfügen möchten, müssen Sie eine Verzeichnisebene nach oben gehen und dann in das `pdfs`-Verzeichnis absteigen.
  Um ein Verzeichnis höher zu gehen, verwenden Sie zwei Punkte — `..` — sodass die URL, die Sie verwenden würden, `../pdfs/project-brief.pdf` lautet:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen zu komplexen URLs kombinieren, falls erforderlich, z.B.: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, der als **Dokumentfragment** bekannt ist, anstatt nur zur Spitze des Dokuments zu springen.
Hierfür müssen Sie zuerst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zuweisen.
In der Regel macht es Sinn, auf eine bestimmte Überschrift zu verlinken, so würde das wie folgt aussehen:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezielle `id` zu verlinken, fügen Sie sie am Ende der URL ein, vorangestellt mit einem Raute-/Pfundzeichen (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar den Dokumentfragment-Verweis allein verwenden, um auf einen _anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute vs. relative URLs

Es gibt zwei Begriffe, auf die Sie im Web stoßen werden: **absolute URL** und **relative URL:**

**Absolute URL**: Verweist auf einen Ort, der durch seinen absoluten Standort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das innerhalb der **Wurzel** eines Webservers liegt, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Landingpage wie `index.html` suchen, um sie zu laden, wenn sie in der URL nicht angegeben ist.)

Eine absolute URL verweist immer auf denselben Ort, egal, wo sie verwendet wird.

**Relative URL**: Verweist auf einen Ort, der **relativ** zu der Datei ist, von der aus Sie verlinken, ähnlich dem, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispiel-Datei bei `https://www.example.com/projects/index.html` zu einer PDF-Datei im selben Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen erforderlich. Wenn das PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL würde `https://www.example.com/projects/pdfs/project-brief.pdf` lauten.)

Eine relative URL wird auf verschiedene Orte verweisen, abhängig von dem tatsächlichen Speicherort der Datei, auf die Sie sich beziehen — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis und in die **Wurzel** der Website verschoben (die oberste Ebene, nicht in einem Verzeichnis), würde der `pdfs/project-brief.pdf` relative URL-Link darin jetzt auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich wird sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich ändern, nur weil Sie die `index.html`-Datei verschoben haben — dies würde Ihren Link dazu bringen, auf den falschen Ort zu verweisen, so dass er bei einem Klick nicht funktionieren würde. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige Best Practices, die beim Schreiben von Links zu beachten sind. Schauen wir uns diese jetzt an.

### Verwenden Sie klare Link-Formulierungen

Es ist einfach, Links auf Ihrer Seite zu verteilen. Das ist nicht genug. Wir müssen unsere Links **zugänglich** für alle Leser machen, unabhängig von ihrem aktuellen Kontext und welche Werkzeuge sie bevorzugen. Zum Beispiel:

- Screenreader-Nutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Zusammenhang.
- Suchmaschinen verwenden Linktexte, um Ziel-Dateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Link-Text aufzunehmen, um effektiv zu beschreiben, worum es sich beim Verlinkten handelt.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu Seitenelementen hingezogen, die auffallen, wie Links. Sie finden beschreibende Linktexte nützlich.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Link-Text: [Download Firefox](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/new/">Download Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**Schlechter** Link-Text: [Klicken Sie hier](https://www.mozilla.org/en-US/firefox/new/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/new/">Click here</a> to
  download Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktextes — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Screenreader sie Zeichen für Zeichen vorliest.
- Sagen Sie nicht "Link" oder "verlinkt zu" im Linktext — es ist nur Lärm. Screenreader sagen den Leuten, dass dort ein Link ist.
  Visuelle Benutzer werden auch wissen, dass dort ein Link ist, da Links in der Regel in einer anderen Farbe und unterstrichen angezeigt werden (dieses Konvention sollte generell nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, weil Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Fälle, in denen mehrere Kopien desselben Textes zu verschiedenen Orten verlinkt sind.
  Dies kann Probleme für Screenreader-Nutzer verursachen, wenn es eine Liste von Links außerhalb des Kontexts gibt, die mit "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" beschriftet sind.

### Verlinken zu Nicht-HTML-Ressourcen — klare Wegweiser setzen

Wenn Sie zu einer Ressource verlinken, die nicht als "normale Navigation" in der aktuellen Seite geöffnet wird, sollten Sie klare Formulierungen im Linktext verwenden, um anzugeben, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link ein Popup öffnet oder einen anderen potenziell unerwarteten Effekt hat, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit langsamen Bandbreitenverbindungen, die möglicherweise das Herunterladen von Assets von mehreren Megabytes vermeiden möchten. Es hilft auch, Erwartungen für Screenreader-Nutzer zu setzen, die möglicherweise nicht wissen, was passiert.

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

Wenn Sie zu einer Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standard-Dateinamen zum Speichern bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann Links in einem neuen Tab öffnen

Links öffnen standardmäßig im selben Tab wie die Seite, auf der sie sich befinden, sodass der Benutzer mit der Zurück-Taste des Browsers zur vorherigen Seite navigieren kann. Viele Websites (einschließlich MDN) entscheiden sich jedoch dafür, bestimmte Links, insbesondere externe Links, in neuen Tabs zu öffnen. Dies erfolgt, indem das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut auf `"_blank"` gesetzt wird.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollten, sollte eine bewusste Entscheidung sein, die auf Designüberlegungen zur Benutzererfahrung basiert. Hier sind einige Überlegungen:

- Das Öffnen von Links in einem neuen Tab stellt die beiden Dokumente gleichzeitig dar, was für eine "parallele" Navigationserfahrung nützlich ist. Andererseits sind Links, die im selben Tab geöffnet werden, eher eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann für Benutzer, die es gewohnt sind, die Zurück-Taste zu verwenden, desorientierend sein.
- Auch wenn Links standardmäßig im selben Tab geöffnet werden, können Benutzer sie dennoch mithilfe von Tastenkombinationen oder Kontextmenüoptionen in einem neuen Tab öffnen. Umgekehrt sind Links, die in einem neuen Tab geöffnet werden, schwerer im selben Tab zu öffnen.
- Screenreader-Nutzer könnten von Links, die in einem neuen Tab geöffnet werden, verwirrt sein, da sie möglicherweise nicht bemerken, dass der neue Tab geöffnet wurde, und sie den Kontext über ihre Position auf der Seite verlieren könnten.

Eine übliche Vorgehensweise ist es, externe Links in neuen Tabs und interne Links im selben Tab zu öffnen.
Einige Designer bevorzugen es, alle Links im selben Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, z. B. ein Symbol neben dem Linktext.

## Ein Navigationsmenü erstellen

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine gängige Methode, wie eine Website erstellt wird — die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie an derselben Stelle bleiben und verschiedene Inhalte aufgerufen werden.

Sie müssen lokale Kopien der folgenden vier Seiten anfertigen, die alle im selben Verzeichnis liegen. Eine vollständige Dateiliste finden Sie im Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Eine ungeordnete Liste an der angegebenen Stelle auf einer Seite hinzufügen, die die Namen der Seiten enthält, zu denen verlinkt werden soll.
   Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Jeden Seitennamen in einen Link zu dieser Seite ändern.
3. Das Navigationsmenü auf jede Seite kopieren.
4. Auf jeder Seite den Link zu dieser gleichen Seite entfernen — es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält.
   Und das Fehlen eines Links ist ein gutes visuelles Zeichen dafür, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit Home-, Bilder-, Projekte- und Sozialmenü-Elementen](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder unsicher sind, ob Sie es richtig gemacht haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die, sobald sie angeklickt werden, eine neue ausgehende E-Mail-Nachricht öffnen, anstatt zu einer Ressource oder Seite zu verlinken.
Dies erfolgt mit dem {{HTMLElement("a")}}-Element und dem `mailto:` URL-Schema.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies führt zu einem Link, der so aussieht: [E-Mail an nirgendwo senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) ist "mailto:", wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers geöffnet, ohne dass eine Zieladresse vorhanden ist.
Dies wird oft als "Teilen"-Links verwendet, die Benutzer klicken können, um eine E-Mail an eine von ihnen gewählte Adresse zu senden.

### Angaben spezifizieren

Zusätzlich zur E-Mail-Adresse können Sie auch andere Informationen angeben. Tatsächlich können alle Standard-Mail-Headerfelder der `mailto`-URL hinzugefügt werden, die Sie angeben.
Die am häufigsten verwendeten sind "subject", "cc" und "body" (dies ist kein echtes Header-Feld, erlaubt aber, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert wird als Abfragebegriff angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrücklauf und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "Prozent-codiert")}} werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und das Ampersand (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist eine Standard-URL-Abfragenotation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation häufiger verwendet wird.

Hier sind ein paar andere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war's fürs Erste mit Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie anfangen, sie zu stylen. Als Nächstes werden Sie zwei Herausforderungen durchgehen, die Ihr Verständnis der bisher behandelten Themen testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
