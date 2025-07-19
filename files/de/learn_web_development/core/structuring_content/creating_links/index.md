---
title: Links erstellen
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch als Hyperlinks bekannt) sind wirklich wichtig — sie sind es, die das Web zu einem _Netz_ machen.
Dieser Artikel zeigt die Syntax, die erforderlich ist, um einen Link zu erstellen, und diskutiert Best Practices für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in der
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlagen der HTML-Syntax</a
        > behandelt werden. Textorientierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links die grundlegende Funktion des Webs sind. Es gibt kein Web ohne Links.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann diese zu verwenden sind.</li>
          <li>Pfadsyntax im Detail — Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verstehen der Vorteile, guten Link-Text zu schreiben, wie z.B. bessere Zugänglichkeit für Benutzer von Bildschirmlesern und potenziell positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der spannendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Anfang an eine Funktion des Webs und machen das Web zu einem _Netz_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verlinken, auf bestimmte Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass beim Klicken oder anderweitigem Aktivieren der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, das im Web existiert.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, wird er Ihnen die Möglichkeit geben, die Datei zu öffnen (in welchem Fall die Pflicht des Öffnens oder Handhabens der Datei an eine geeignete native App auf dem Gerät übergeben wird) oder die Datei herunterzuladen (in welchem Fall Sie später versuchen können, damit umzugehen).

Zum Beispiel enthält die BBC-Startseite viele Links, die nicht nur auf mehrere Nachrichtenartikel, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Login-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Frontseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenüfunktionen zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalte innerhalb eines {{htmlelement("a")}}-Elements eingeschlossen und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, das auch als **Hypertext-Referenz** oder **Ziel** bekannt ist und die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

> [!NOTE]
> Scrimbas [Anchortags](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim bietet eine interaktive Demonstration, wie man Links mit HTML erstellt, sowie eine Herausforderung, Ihre eigenen Links zu erstellen.

### Block-Level-Links

Wie zuvor erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie möchten, dass ein Überschriftselement ein Link wird, dann schließen Sie es in ein Anker- (`<a>`) Element ein, wie im folgenden Codebeispiel gezeigt:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies verwandelt die Überschrift in einen Link:
{{EmbedLiveSample('Block-Level-Links', '100%', 150)}}

### Bild-Links

Um ein Bild in einen Link zu verwandeln, umschließen Sie das {{htmlelement("img")}}-Element mit einem {{htmlelement("a")}}-Element. Das folgende Beispiel verwendet einen relativen Pfad, um auf eine lokal gespeicherte SVG-Bilddatei zu verweisen.

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
{{EmbedLiveSample('Bild-Links', '100%', 150)}}

> [!NOTE]
> Sie werden mehr darüber erfahren, wie man Bilder im Web verwendet, in einem zukünftigen Artikel.

### Zusätzlich unterstützende Informationen mit dem `title`-Attribut hinzufügen

Ein weiteres Attribut, das Sie Ihren Links hinzufügen können, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, wie zum Beispiel, welche Art von Informationen die Seite enthält oder worauf man auf der Website achten muss.

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

Dies ergibt das folgende Ergebnis und beim Überfahren des Links wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Zusätzlich unterstützende Informationen mit dem title Attribut hinzufügen', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die sich auf Tastatursteuerungen oder Touchscreens verlassen, um Webseiten zu navigieren, Schwierigkeiten haben werden, auf die Titelinformation zuzugreifen.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie diese auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, z.B. indem Sie sie in den regulären Text einfügen.

### Erstellen eigener Beispiel-Links

OK, jetzt sind Sie an der Reihe!

1. Klicken Sie auf **„Play“** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten, oder kopieren Sie unsere [Erste-Schritte-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) und kopieren Sie den untenstehenden Code dort hinein.
2. Verlinken Sie den Text „Rotes Eichhörnchen“ und „Östliches Grauhörnchen“ mit Wikipedia-Seiten, die die entsprechenden Arten beschreiben. Geben Sie jedem Link ein `title`-Attribut mit dem wissenschaftlichen Namen der Art.
3. Verlinken Sie den Text „Wikipedia Eichhörnchenseite“ mit der Hauptseite auf Wikipedia für Eichhörnchen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_ Knopf im MDN Playground löschen. Wenn Sie wirklich steckenbleiben, können Sie die Lösung unterhalb des Codeblocks anzeigen.

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
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges HTML sollte so aussehen:

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

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. In diesem Abschnitt erhalten Sie die Informationen, die Sie dafür benötigen.

Eine URL, oder Uniform Resource Locator, ist eine Textzeichenfolge, die definiert, wo sich etwas im Web befindet. Zum Beispiel lautet die URL der englischen Mozilla-Homepage `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade spezifizieren, wo die Datei, an der Sie interessiert sind, im Dateisystem liegt. Schauen wir uns ein Beispiel einer Verzeichnisstruktur an, siehe die Verzeichnisstruktur `creating-hyperlinks`, die unten gezeigt wird:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html- und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Das **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Site enthält. Innerhalb des **Root** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website würde `index.html` unsere Startseite oder Landingpage sein (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Root-Verzeichnisses — `pdfs` und `projects`. Jedes von ihnen enthält eine einzige Datei — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie an unterschiedlichen Speicherorten im Dateisystem liegen. Die zweite `index.html` wäre möglicherweise die Haupt-Landingpage für projektbezogene Informationen.

Schauen wir uns einige Beispiele für Links zwischen einigen verschiedenen Dateien in dieser Verzeichnisstruktur an, um unterschiedliche Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie innerhalb von `index.html` (der obersten `index.html`) einen Hyperlink zu `contacts.html` einfügen möchten, müssen Sie den Dateinamen angeben, den Sie verlinken möchten, da er sich im selben Verzeichnis wie die aktuelle Datei befindet. Die zu verwendende URL ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In Unterverzeichnisse wechseln**: Wenn Sie in `index.html` (der obersten `index.html`) einen Hyperlink zu `projects/index.html` einfügen möchten, müssten Sie in das `projects`-Verzeichnis wechseln, bevor Sie die Datei angeben, zu der Sie verlinken möchten.
  Dies wird durch das Angeben des Verzeichnisnamens, dann ein Vorwärtsschrägstrich, und dann der Name der Datei erreicht. Die zu verwendende URL ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Wieder zurück in übergeordnete Verzeichnisse wechseln**: Wenn Sie innerhalb von `projects/index.html` einen Hyperlink zu `pdfs/project-brief.pdf` einfügen möchten, müssten Sie ein Verzeichnislevel nach oben und dann zurück in das `pdfs`-Verzeichnis wechseln.
  Um ein Verzeichnis nach oben zu gelangen, verwenden Sie zwei Punkte — `..` — sodass die zu verwendende URL `../pdfs/project-brief.pdf` ist:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Merkmale zu komplexen URLs kombinieren, wenn nötig, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, zu einem bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als **Dokumentfragment**, statt nur oben auf das Dokument zu verlinken.
Dazu müssen Sie zuerst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zuweisen.
In der Regel macht es Sinn, auf eine bestimmte Überschrift zu verlinken, so würde dies etwa folgendermaßen aussehen:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, würden Sie diese am Ende der URL anfügen, vorangestellt durch ein Hash/Rautensymbol (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar den Dokumentfragmentverweis alleine verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Verweist auf einen Ort, der durch seinen absoluten Standort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich im **Root** eines Webservers befindet, und die Domäne der Website lautet `https://www.example.com`, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Landingpage wie `index.html` suchen, um sie zu laden, wenn sie nicht in der URL angegeben wird).

Eine absolute URL verweist immer auf den gleichen Ort, egal wo sie verwendet wird.

**Relative URL**: Verweist auf einen Ort, der _relativ_ zu der Datei ist, von der Sie verlinken, und ähnelt mehr dem, was wir im vorherigen Abschnitt angesehen haben.
Zum Beispiel, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` zu einer PDF-Datei im selben Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen benötigt. Wenn das PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die äquivalente absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL verweist auf unterschiedliche Orte, abhängig von der tatsächlichen Position der Datei, von der aus Sie verweisen — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis herausnehmen und ins **Root** der Website (die oberste Ebene, nicht in einem Verzeichnis) verschieben, würde der `pdfs/project-brief.pdf` relative Link darin nun auf eine Datei bei `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei bei `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändern sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, weil Sie die `index.html`-Datei verschoben haben — das würde Ihren Link dazu bringen, auf den falschen Ort zu verweisen, sodass er nicht funktionieren würde, wenn darauf geklickt wird. Sie müssen vorsichtig sein!

## Best Practices für Links

Es gibt einige Best Practices, die beim Schreiben von Links zu beachten sind. Lassen Sie uns diese jetzt ansehen.

### Verwenden Sie klare Link-Wortlaute

Es ist einfach, Links auf Ihre Seite zu setzen. Das ist nicht genug. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und welchen Tools sie bevorzugen. Beispielsweise:

- Nutzer von Bildschirmlesern springen gerne von Link zu Link auf der Seite und lesen Links aus dem Zusammenhang.
- Suchmaschinen verwenden Linktext zur Indexierung von Zieldateien, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verwiesen wird.
- Visuelle Leser überfliegen die Seite eher, als jedes Wort zu lesen, und ihre Augen werden zu Seitenmerkmalen hingezogen, die herausragen, wie etwa Links. Sie werden beschreibenden Linktext nützlich finden.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Linktext: [Download Firefox](https://www.firefox.com/en-US/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.firefox.com/en-US/">Download Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**Schlechter** Linktext: [Klicken Sie hier](https://www.firefox.com/en-US/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.firefox.com/en-US/">Click here</a> to download Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktexts — URLs sehen unschön aus und klingen noch unschöner, wenn ein Bildschirmleser sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht „Link“ oder „verlinkt zu“ im Linktext — es ist nur Lärm. Bildschirmleser sagen den Leuten, dass es einen Link gibt.
  Auch visuelle Nutzer werden wissen, dass es einen Link gibt, da Links in der Regel in einer anderen Farbe dargestellt und unterstrichen sind (diese Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, da Bildschirmleser den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinkt sind.
  Dies kann Probleme für Benutzer von Bildschirmlesern verursachen, wenn es eine Liste von Links ohne Kontext gibt, die mit „Klicken Sie hier“, „Klicken Sie hier“, „Klicken Sie hier“ beschriftet sind.

### Links zu Nicht-HTML-Ressourcen — klare Wegweiser hinterlassen

Wenn Sie auf eine Ressource verlinken, die nicht als „normale Navigation“ auf der aktuellen Seite geöffnet wird, sollten Sie klare Formulierungen im Linktext hinzufügen, was passieren wird. Beispielsweise, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link ein Popup öffnet oder eine andere potenziell unerwartete Wirkung hat, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit langsamen Verbindungen, die vermeiden möchten, Assets mit mehreren Megabyte herunterzuladen. Es hilft auch, Erwartungen für Benutzer von Bildschirmlesern zu setzen, die sonst möglicherweise nicht wissen, was passiert.

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

### Verwenden des download-Attributs beim Verlinken auf einen Download

Wenn Sie auf eine Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet wird, können Sie das Attribut `download` verwenden, um einen Standardspeicherdateinamen anzugeben. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann sollten Links in einem neuen Tab geöffnet werden

Links öffnen standardmäßig im selben Tab wie die Seite, auf der sie sich befinden, was es dem Benutzer ermöglicht, über die Schaltfläche "Zurück" im Browser zur vorherigen Seite zu navigieren. Viele Seiten (einschließlich MDN) entscheiden sich jedoch, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies geschieht durch das Setzen des [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attributs auf `"_blank"`.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollten oder nicht, sollte eine bewusste Entscheidung basierend auf Überlegungen zur Benutzerfreundlichkeit sein. Hier sind einige Dinge, über die man nachdenken sollte:

- Das Öffnen von Links in einem neuen Tab stellt beide Dokumente gleichzeitig dar, was für eine „parallele“ Navigationserfahrung nützlich ist. Andererseits sind Links, die im selben Tab geöffnet werden, eher eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann verwirrend für Benutzer sein, die es gewohnt sind, die Zurück-Schaltfläche zu verwenden.
- Auch wenn Links standardmäßig im selben Tab geöffnet werden, können Benutzer sie dennoch in einem neuen Tab öffnen, indem sie Tastaturkürzel oder Kontextmenüoptionen verwenden. Auf der anderen Seite sind Links, die in einem neuen Tab geöffnet werden, schwer im gleichen Tab zu öffnen.
- Benutzer von Bildschirmlesern können durch Links, die in einem neuen Tab geöffnet werden, verwirrt sein, da sie möglicherweise nicht bemerken, dass der neue Tab geöffnet wurde, und den Kontext darüber verlieren, wo sie sich auf der Seite befinden.

Eine gängige Vorgehensweise ist, externe Links in neuen Tabs zu öffnen und interne Links im selben Tab.
Einige Designer bevorzugen es, alle Links im selben Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, beispielsweise ein Symbol neben dem Linktext.

## Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine gängige Methode zur Erstellung einer Website — dieselbe Seitenstruktur wird auf jeder Seite verwendet und dasselbe Navigationsmenü enthält, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie am selben Ort bleiben und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Eine vollständige Dateiliste finden Sie im Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie an der angegebenen Stelle auf einer Seite eine ungeordnete Liste ein, die die Namen der Seiten enthält, zu denen verlinkt werden soll.
   Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Wandeln Sie jeden Seitennamen in einen Link zu dieser Seite um.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu dieser Seite selbst — es ist verwirrend und unnötig, dass eine Seite einen Link auf sich selbst enthält.
   Und das Fehlen eines Links gibt eine gute visuelle Erinnerung daran, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit Home-, Bilder-, Projekte- und Social-Menüelementen](navigation-example.png)

> [!NOTE]
> Wenn Sie stecken bleiben oder nicht sicher sind, ob Sie es richtig haben, können Sie das [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up)-Verzeichnis überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Klicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt zu einer Ressource oder Seite zu verlinken.
Dies geschieht mit dem {{HTMLElement("a")}}-Element und dem `mailto:` URL-Schema.

In seiner einfachsten und am häufigsten verwendeten Form gibt ein `mailto:` Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nirgendwo senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird ein neues ausgehendes E-Mail-Fenster ohne Empfängeradresse vom E-Mail-Client des Benutzers geöffnet.
Dies ist oft nützlich als „Teilen“-Links, auf die Benutzer klicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen bereitstellen. Tatsächlich können dem angegebenen `mailto` URL alle Standard-Mail-Header-Felder hinzugefügt werden.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (was kein echtes Header-Feld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert werden als Abfrageschlüsselwort angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen URL-kodiert werden, mit nicht druckbaren Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "prozent-codiert")}}.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`) zur Trennung der Haupt-URL von den Feldwerten und der kaufmännischen Und-Zeichen (&), um jedes Feld in der `mailto:` URL zu trennen.
> Dies ist eine Standard-URL-Abfragenotation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation häufiger verwendet wird.

Hier sind einige weitere Beispiel-`mailto` URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Das%20ist%20der%20Betreff>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, können Sie sich jedoch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen - siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war's vorerst mit Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie beginnen, sie zu stylen. Als Nächstes bei HTML werden Sie einige Herausforderungen durchlaufen, die Ihr Verständnis der bisher behandelten Themen testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
