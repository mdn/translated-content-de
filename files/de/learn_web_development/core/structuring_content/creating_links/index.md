---
title: Links erstellen
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig — sie sind das, was das Web zu einem _Netz_ macht.
Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und diskutiert die besten Praktiken für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie im
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
          <li>Path-Syntax im Detail — Schrägstriche, einzelner Punkt und doppelter Punkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verstehen der Vorteile beim Schreiben von gutem Link-Text, wie z. B. bessere Zugänglichkeit für Screenreader-Nutzer und potenzielle positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Anfang an ein Merkmal des Webs und machen das Web _zu einem Netz_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf spezifische Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass bei einem Klick oder einer anderen Aktivierung der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) gelangt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere, was im Web existiert, verweisen.
> Wenn der Webbrowser nicht weiß, wie die Datei angezeigt oder gehandhabt werden soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen (in diesem Fall können Sie später damit versuchen umzugehen).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur auf verschiedene Nachrichtenartikel verweisen, sondern auch auf unterschiedliche Bereiche der Website (Navigationsfunktionalität), Login/Registrierungsseiten (Benutzerwerkzeuge) und mehr.

![Titelseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenü-Funktionen zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein einfacher Link wird erstellt, indem der Text oder andere Inhalte in einem {{htmlelement("a")}}-Element eingeschlossen werden und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Scrimbas [Ankerelemente](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim bietet eine interaktive Demonstration, wie man Links mit HTML erstellt, sowie eine Herausforderung, um eigene Links zu erstellen.

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, auch {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftenelement zu einem Link machen möchten, umschließen Sie es mit einem Ankerelement (`<a>`), wie im folgenden Code-Snippet gezeigt:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies verwandelt die Überschrift in einen Link:
{{EmbedLiveSample('Block-level-links', '100%', 150)}}

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
{{EmbedLiveSample('Image links', '100%', 150)}}

> [!NOTE]
> Sie werden mehr darüber erfahren, wie man Bilder im Web verwendet, in einem zukünftigen Artikel.

### Hinzufügen unterstützender Informationen mit dem title-Attribut

Ein weiteres Attribut, das Sie zu Ihren Links hinzufügen können, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, wie zum Beispiel welche Art von Informationen die Seite enthält oder Dinge, die auf der Website zu beachten sind.

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

Dies ergibt das folgende Ergebnis, und beim Überfahren des Links mit der Maus wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur bei Mausüberflug angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerungen oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, Titelinformationen zu erhalten.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie so darstellen, dass sie für alle Benutzer zugänglich sind, z. B. indem Sie sie in den regulären Text einfügen.

### Aktives Lernen: Erstellen Ihres eigenen Beispiel-Links

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Einstiegsvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body ein oder mehrere Absätze oder andere Ihnen bekannte Inhaltstypen ein.
- Ändern Sie einen Teil der Inhalte in Links um.
- Fügen Sie title-Attribute hinzu.

## Eine schnelle Einführung in URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die Informationen, die Sie dazu benötigen.

Eine URL oder Uniform Resource Locator ist eine Zeichenkette, die angibt, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo die Datei, die Sie interessiert, im Dateisystem gespeichert ist. Sehen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe die `creating-hyperlinks`-Verzeichnisstruktur unten:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html- und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, werden Sie ein Verzeichnis haben, das die gesamte Website enthält. Im **Root** haben wir eine `index.html`-Datei und eine `contacts.html`-Datei. In einer realen Website wäre `index.html` unsere Startseite oder Einstiegsseite (eine Webseite, die als Eintrittspunkt für eine Website oder einen bestimmten Bereich einer Website dient).

Es gibt auch zwei Verzeichnisse in unserem Root — `pdfs` und `projects`. In jedem dieser Verzeichnisse befindet sich jeweils eine einzelne Datei — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie in einem Projekt zwei `index.html`-Dateien haben können, solange sie sich an unterschiedlichen Stellen im Dateisystem befinden. Die zweite `index.html` wäre möglicherweise die Hauptlande-Seite für projektbezogene Informationen.

Lassen Sie uns einige Beispiele für Links zwischen einigen Dateien in dieser Verzeichnisstruktur betrachten, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (der obersten `index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie den Dateinamen an, den Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die verwendete URL wäre `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **Nach unten in Unterverzeichnisse wechseln**: Wenn Sie einen Hyperlink in `index.html` (der obersten `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das projects-Verzeichnis heruntergehen, bevor Sie die Datei angeben, auf die Sie verlinken möchten.
  Dies erfolgt durch das Angeben des Verzeichnisnamens, gefolgt von einem Schrägstrich und dann dem Namen der Datei. Die verwendete URL wäre `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück in übergeordnete Verzeichnisse wechseln**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie eine Verzeichnisebene nach oben wechseln und dann in das `pdfs`-Verzeichnis wechseln.
  Um eine Verzeichnisebene nach oben zu wechseln, verwenden Sie zwei Punkte — `..` — sodass die verwendete URL `../pdfs/project-brief.pdf` wäre:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Merkmale kombinieren, um bei Bedarf komplexe URLs zu erstellen, z. B.: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen spezifischen Teil eines HTML-Dokuments zu verlinken, bekannt als **Dokumentfragment**, anstatt nur an den Anfang des Dokuments.
Dazu müssen Sie zuerst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zuweisen.
Normalerweise macht es Sinn, auf eine spezifische Überschrift zu verlinken, sodass dies in etwa folgendermaßen aussieht:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, fügen Sie diese am Ende der URL hinzu, vorangestellt von einem Raute- bzw. Nummernzeichen (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar die Dokumentfragment-Referenz alleine verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute vs. relative URLs

Zwei Begriffe, denen Sie im Web begegnen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Verweist auf einen Ort, der durch seinen absoluten Standort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis mit dem Namen `projects` hochgeladen wird, das im **Root** eines Webservers liegt, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver eine Einstiegsseite wie `index.html` laden, wenn sie nicht in der URL angegeben ist).

Eine absolute URL verweist immer auf den gleichen Ort, egal wo sie verwendet wird.

**Relative URL**: Verweist auf einen Ort, der _relativ_ zu der Datei ist, von der aus Sie verlinken, ähnlich wie das, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` zu einer PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL einfach nur der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen erforderlich. Wenn das PDF in einem Unterverzeichnis in `projects` mit dem Namen `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die äquivalente absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`.)

Eine relative URL verweist auf verschiedene Orte, abhängig davon, wo sich die Datei, von der Sie aus verlinken, tatsächlich befindet — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis heraus in den **Root** der Website verschoben haben (die oberste Ebene, nicht in einem Verzeichnis), würde der relative URL-Link `pdfs/project-brief.pdf` darin jetzt auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändert sich die Position der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, weil Sie die `index.html`-Datei verschoben haben — dies würde dazu führen, dass Ihr Link auf den falschen Ort verweist, sodass er nicht mehr funktioniert, wenn er angeklickt wird. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige bewährte Praktiken, die Sie beim Erstellen von Links beachten sollten. Lassen Sie uns diese nun betrachten.

### Verwenden Sie klare Link-Beschriftungen

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das allein reicht nicht. Wir müssen unsere Links für alle Leser _zugänglich_ machen, unabhängig von ihrem aktuellen Kontext und den bevorzugten Tools. Zum Beispiel:

- Screenreader-Nutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Zusammenhang heraus.
- Suchmaschinen verwenden Linktext, um Inhaltsdateien zu indizieren. Deshalb ist es sinnvoll, Schlüsselwörter in Ihren Linktext einzufügen, um effektiv zu beschreiben, was verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu Seitenelementen hingezogen, die auffallen, wie etwa Links. Sie werden beschreibenden Linktext nützlich finden.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Link-Text: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/new/">Download Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**Schlechter** Link-Text: [Hier klicken](https://www.mozilla.org/en-US/firefox/new/) um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/new/">Click here</a> to
  download Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Link-Textes — URLs sehen unschön aus und klingen noch schlimmer, wenn ein Screenreader sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "verweist auf" im Link-Text — es ist unnötig. Screenreader sagen den Nutzern, dass es einen Link gibt.
  Visuelle Nutzer werden auch wissen, dass es einen Link gibt, denn Links sind in der Regel in einer anderen Farbe und unterstrichen (dieses Konvent sollte im Allgemeinen nicht unterbrochen werden, da Nutzer daran gewöhnt sind).
- Halten Sie Ihren Link-Text so kurz wie möglich — dies ist hilfreich, da Screenreader den gesamten Link-Text interpretieren müssen.
- Minimieren Sie Fälle, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinken.
  Dies kann Probleme für Screenreader-Nutzer verursachen, wenn es eine Liste von Links außerhalb des Kontexts gibt, die als "hier klicken", "hier klicken", "hier klicken" gekennzeichnet ist.

### Verlinken zu nicht-HTML-Ressourcen — Klare Wegweiser hinterlassen

Wenn Sie zu einer Ressource verlinken, die nicht in der aktuellen Seite als "normale Navigation" geöffnet wird, sollten Sie klare Formulierungen im Link-Text hinzufügen, die erklären, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link ein Pop-up öffnet oder eine andere potenziell unerwartete Wirkung hat, sollte dies im Text angegeben sein. Dies ist wichtig für Nutzer mit langsamen Verbindungen, die möglicherweise vermeiden möchten, Assets von mehreren Megabyte herunterzuladen. Es hilft auch, Erwartungen für Screenreader-Nutzer zu setzen, die möglicherweise nicht wissen, was sonst passiert.

Werfen wir einen Blick auf einige Beispiele, um zu sehen, welche Art von Text hier verwendet werden kann:

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

### Verwenden Sie das Download-Attribut beim Verlinken zu einem Download

Wenn Sie zu einer Ressource verlinken, die heruntergeladen werden soll, anstatt sie im Browser zu öffnen, können Sie das `download`-Attribut verwenden, um einen Standard-Speicherdateinamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann man Links in einem neuen Tab öffnen sollte

Links öffnen standardmäßig im selben Tab wie die Seite, auf der sie sich befinden, was es dem Nutzer ermöglicht, über die Zurück-Taste des Browsers zur vorherigen Seite zu navigieren. Viele Websites (einschließlich MDN) entscheiden sich jedoch, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies geschieht durch das Setzen des [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attributs auf `"_blank"`.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollen, sollte eine bewusste Entscheidung sein, basierend auf Überlegungen zum Benutzererlebnis. Hier sind einige Dinge, über die Sie nachdenken sollten:

- Links, die in einem neuen Tab geöffnet werden, präsentieren die beiden Dokumente gleichzeitig, was für eine "parallele" Navigationserfahrung nützlich ist. Andererseits sind Links, die im selben Tab geöffnet werden, mehr wie eine Fortsetzung der aktuellen Seite.
- Links, die in einem neuen Tab geöffnet werden, können für Nutzer verwirrend sein, die es gewohnt sind, die Zurück-Taste zu verwenden.
- Selbst wenn Links standardmäßig im selben Tab geöffnet werden, können Nutzer sie trotzdem in einem neuen Tab öffnen, indem sie Tastenkombinationen oder Kontextmenüoptionen verwenden. Andererseits sind Links, die in einem neuen Tab geöffnet werden, schwer im selben Tab zu öffnen.
- Screenreader-Nutzer könnten durch Links, die in einem neuen Tab öffnen, verwirrt sein, da sie möglicherweise nicht bemerken, dass der neue Tab geöffnet wurde, und sie könnten den Überblick darüber verlieren, wo sie sich auf der Seite befinden.

Ein häufiger Ansatz ist es, externe Links in neuen Tabs und interne Links im selben Tab zu öffnen.
Einige Designer ziehen es vor, alle Links im selben Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, wie zum Beispiel ein Symbol neben dem Link-Text.

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine übliche Art und Weise, wie eine Website erstellt wird — die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs, was es so aussehen lässt, als bliebe man am selben Ort und unterschiedlich Inhalte werden angezeigt.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Für eine vollständige Dateiliste siehe das Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollen:

1. Fügen Sie eine ungeordnete Liste an der angezeigten Stelle auf einer Seite hinzu, die die Namen der Seiten enthält, zu denen verlinkt werden soll.
   Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu dieser Seite — es ist verwirrend und unnötig, wenn eine Seite einen Link zu sich selbst enthält.
   Außerdem erinnert das fehlen eines Links visuell daran, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte in etwa so aussehen wie die folgende Seite:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit den Menüeinträgen Home, Bilder, Projekte und Soziales](navigation-example.png)

> [!NOTE]
> Wenn Sie stecken bleiben oder sich nicht sicher sind, ob Sie es richtig gemacht haben, können Sie im Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) nachsehen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Anklicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt zu einer Ressource oder Seite zu führen.
Dies geschieht mit dem {{HTMLElement("a")}}-Element und dem `mailto:`-URL-Schema.

In seiner einfachsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der wie folgt aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) nur "mailto:" ist, wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers geöffnet, ohne dass eine Zieladresse vorliegt.
Dies wird oft als "Teilen"-Links verwendet, auf die Benutzer klicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie andere Informationen bereitstellen. Tatsächlich können alle Standard-Mailheaderfelder zur bereitgestellten `mailto`-URL hinzugefügt werden.
Die am häufigsten verwendeten sind "subject", "cc" und "body" (was kein echtes Headerfeld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert werden als Abfragebegriffe angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht-druckbaren Zeichen (unsichtbare Zeichen wie Tabulatoren, Wagenrückläufe und Seitenumbrüche) und Leerzeichen URL-codiert werden {{Glossary("Percent-encoding", "percent-escaped")}}.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und die kaufmännischen Und-Zeichen (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die standardmäßige URL-Abfrage-Notation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfrage-Notation normalerweise verwendet wird.

Hier sind einige weitere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war's vorerst mit Links! Sie werden später im Kurs erneut zu Links zurückkehren, wenn Sie anfangen, sie zu gestalten. Als Nächstes werden Sie sich durch ein paar Herausforderungen arbeiten, die Ihr Verständnis der bisher behandelten Themen testen werden.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
