---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig – sie machen das Web zu einem _Netz_. Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und behandelt bewährte Verfahren für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegenden HTML-Syntax</a
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
          <li>Verstehen, warum Links die grundlegende Funktion des Webs sind. Ohne Links gäbe es kein Web.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann sie verwendet werden.</li>
          <li>Pfad-Syntax im Detail – Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind – <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Blockebenen-Links.</li>
          <li>Verständnis der Vorteile von gutem Linktext, wie bessere Zugänglichkeit für Screenreader-Benutzer und mögliche positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat. Sie sind seit Beginn des Webs eine Funktion und machen aus dem Web ein _Netz_. Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verlinken, auf spezifische Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen. Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass beim Klicken oder anderweitigem Aktivieren der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, was im Web lebt. Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie versuchen, später damit umzugehen).

Zum Beispiel enthält die BBC-Startseite viele Links, die nicht nur auf mehrere Nachrichtenartikel verweisen, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Login/Registrierungsseiten (Benutzer-Tools) und mehr.

![Startseite von bbc.co.uk, zeigt viele Nachrichtenartikel und Navigationsmenü-Funktionalität](updated-bbc-website.png)

## Anatomie eines Links

Ein einfacher Link wird erstellt, indem der Text oder andere Inhalte innerhalb eines {{htmlelement("a")}}-Elements umschlossen und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut, auch bekannt als **Hypertext-Referenz** oder **Ziel**, verwendet wird, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Das gibt uns das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Startseite](https://www.mozilla.org/en-US/).

### Blockebenen-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, selbst {{Glossary("Block/CSS", "Block-Elemente")}}. Wenn Sie ein Überschriftselement zu einem Link machen möchten, umschließen Sie es im folgenden Codebeispiel mit einem Anker (`<a>`)-Element:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dadurch wird die Überschrift in einen Link umgewandelt:
{{EmbedLiveSample('Block level links', '100%', 150)}}

### Bildlinks

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
> Mehr über die Verwendung von Bildern im Web erfahren Sie in einem zukünftigen Artikel.

### Hinzufügen von unterstützenden Informationen mit dem Title-Attribut

Ein weiteres Attribut, das Sie möglicherweise Ihren Links hinzufügen möchten, ist `title`. Der Titel enthält zusätzliche Informationen über den Link, z. B. welche Art von Informationen die Seite enthält oder Dinge, die auf der Website zu beachten sind.

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

Dies gibt uns das folgende Ergebnis und beim Überfahren des Links mit der Maus wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerung oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, Titelinformationen zuzugreifen. Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, zum Beispiel durch Einfügen in den regulären Text.

### Aktives Lernen: Erstellen Ihres eigenen Link-Beispiels

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Einstiegs-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie innerhalb des HTML-Körpers ein oder mehrere Absätze oder andere Arten von Inhalten hinzu, die Sie bereits kennen.
- Ändern Sie einige der Inhalte in Links um.
- Fügen Sie Titelattribute hinzu.

## Schnelle Einführung in URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt liefert Ihnen die nötigen Informationen, um dies zu erreichen.

Eine URL, oder Uniform Resource Locator, ist eine Zeichenfolge, die angibt, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Startseite von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe die Verzeichnisstruktur `creating-hyperlinks`, die unten angezeigt wird:

![Einfache Verzeichnisstruktur: Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html- und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Seite enthält. Innerhalb des **Root** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Start- oder Einstiegsseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Roots – `pdfs` und `projects`. Diese haben jeweils eine einzelne Datei in sich – ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich in unterschiedlichen Dateisystemstandorten befinden. Die zweite `index.html` wäre vielleicht die zentrale Einstiegsseite für projektbezogene Informationen.

Schauen wir uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (der obersten `index.html`) einfügen möchten, der auf `contacts.html` verweist, würden Sie den Dateinamen angeben, zu dem Sie verlinken möchten, da er sich im selben Verzeichnis wie die aktuelle Datei befindet. Die verwendete URL wäre `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In Unterverzeichnisse wechseln**: Wenn Sie einen Hyperlink in `index.html` (der oberen `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssten Sie in das Verzeichnis `projects` hinuntergehen, bevor Sie die Datei angeben, zu der Sie verlinken möchten. Dies wird durchgeführt, indem der Name des Verzeichnisses, dann ein Schrägstrich und dann der Name der Datei angegeben wird. Die verwendete URL wäre `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück in übergeordnete Verzeichnisse wechseln**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssten Sie eine Verzeichnisebene nach oben gehen und dann in das Verzeichnis `pdfs` hinuntergehen. Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte – `..` – daher wäre die verwendete URL `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können bei Bedarf mehrere Instanzen dieser Merkmale zu komplexen URLs kombinieren, z. B.: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, der als **Dokumentfragment** bekannt ist, anstatt nur auf die Oberseite des Dokuments. Dazu müssen Sie zuerst ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut dem Element zuweisen, auf das Sie verlinken möchten. Normalerweise macht es Sinn, auf eine bestimmte Überschrift zu verlinken, sodass dies wie folgt aussehen würde:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann zu diesem spezifischen `id` zu verlinken, würden Sie es am Ende der URL anfügen, vorangegangen von einem Rautensymbol (`#`), zum Beispiel:

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

### Absolute vs. relative URLs

Zwei Begriffe, die Ihnen im Web begegnen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Zeigt auf einen Standort, der durch seinen absoluten Standort im Web, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}, definiert ist. Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich innerhalb des **Root** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar einfach nur `https://www.example.com/projects/`, da die meisten Webserver einfach eine Einstiegsseite wie `index.html` laden, wenn sie nicht in der URL angegeben ist).

Eine absolute URL wird immer auf denselben Ort verweisen, egal wo sie verwendet wird.

**Relative URL**: Zeigt auf einen Standort, der _relativ_ zu der Datei ist, von der aus Sie verlinken, mehr wie das, was wir uns im vorherigen Abschnitt angesehen haben. Zum Beispiel, wenn wir von unserer Beispiel-Datei bei `https://www.example.com/projects/index.html` auf eine PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen benötigt. Wenn die PDF-Datei in einem Unterverzeichnis von `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL wird auf unterschiedliche Orte verweisen, je nachdem, wo sich die Datei, auf die Sie verweisen, tatsächlich befindet. Zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis heraus und in den **Root** der Website (die oberste Ebene, nicht in Verzeichnissen) verschieben würden, würde der relative URL-Link `pdfs/project-brief.pdf` darin nun auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich wird sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich ändern, weil Sie die `index.html`-Datei verschoben haben — dieser Umstand würde dazu führen, dass Ihr Link an die falsche Stelle führt und er beim Anklicken nicht funktionieren würde. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige bewährte Praktiken beim Schreiben von Links, die Sie beachten sollten. Schauen wir uns diese jetzt an.

### Verwenden Sie klare Link-Beschreibungen

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das ist jedoch nicht genug. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und welchen Werkzeugen sie bevorzugen. Zum Beispiel:

- Benutzer von Screenreadern springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden den Linktext, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext einzufügen, um effektiv zu beschreiben, was verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden von Seitenelementen angezogen, die hervorgehoben sind, wie Links. Sie finden beschreibenden Linktext nützlich.

Lassen Sie uns ein spezifisches Beispiel betrachten:

**Guter** Linktext: [Laden Sie Firefox herunter](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/new/">Download Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**Schlechter** Linktext: [Klicken Sie hier](https://www.mozilla.org/en-US/firefox/new/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/new/">Click here</a> to
  download Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktexts – URLs sehen unschön aus, und sie klingen noch schlimmer, wenn ein Screenreader sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "Link zu" im Linktext – das ist nur störend. Screenreader informieren die Benutzer darüber, dass es sich um einen Link handelt.
  Visuelle Benutzer werden auch wissen, dass es ein Link ist, da Links generell in einer anderen Farbe und unterstrichen dargestellt werden (dieses Konvention sollte im Allgemeinen nicht gebrochen werden, da die Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich – dies ist hilfreich, weil Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Vorkommen, bei denen mehrere Kopien desselben Texts an verschiedene Orte verlinken.
  Dies kann Probleme für Screenreader-Benutzer verursachen, wenn eine Liste von Links aus dem Kontext aufgelistet ist, die mit "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" beschriftet sind.

### Verlinken zu nicht-HTML-Ressourcen — lassen Sie klare Wegweiser

Wenn Sie zu einer Ressource verlinken, die nicht wie eine "normale Navigation" auf der aktuellen Seite geöffnet wird, sollten Sie in den Linktext klare Worte einfügen, um anzugeben, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen oder wenn der Link ein Popup öffnet oder eine andere potenziell unerwartete Auswirkung hat, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit niedrigen Bandbreitenverbindungen, die das Herunterladen von Ressourcen von mehreren Megabyte vermeiden möchten. Es hilft auch, Erwartungen für Screenreader-Benutzer festzulegen, die möglicherweise nicht wissen, was sonst passiert.

Lassen Sie uns einige Beispiele betrachten, um zu sehen, welche Art von Text hier verwendet werden kann:

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

### Verwenden des download-Attributs beim Verlinken zu einem Download

Wenn Sie zu einer Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standard-Speichernamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann man Links in einem neuen Tab öffnen sollte

Links öffnen standardmäßig im selben Tab wie die Seite, auf der sie sich befinden, was es dem Benutzer ermöglicht, mit der Zurück-Schaltfläche des Browsers zur vorherigen Seite zu navigieren. Viele Websites (einschließlich MDN) wählen jedoch, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies geschieht, indem das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut auf `"_blank"` gesetzt wird.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollen oder nicht, sollte eine bewusste Entscheidung auf der Grundlage von Benutzererfahrungs-Designüberlegungen sein. Hier sind einige Dinge, die Sie beachten sollten:

- Das Öffnen von Links in einem neuen Tab präsentiert die beiden Dokumente gleichzeitig, was für eine "parallele" Navigationserfahrung nützlich ist. Auf der anderen Seite sind Links, die im gleichen Tab geöffnet werden, eher eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann für Benutzer, die gewohnt sind, die Zurück-Schaltfläche zu verwenden, desorientierend sein.
- Selbst wenn Links standardmäßig im gleichen Tab geöffnet werden, können Benutzer immer noch wählen, sie in einem neuen Tab zu öffnen, indem sie Tastenkombinationen oder Kontextmenüoptionen verwenden. Andererseits sind Links, die in einem neuen Tab geöffnet werden, schwerer im selben Tab zu öffnen.
- Screenreader-Benutzer können durch Links, die in einem neuen Tab geöffnet werden, verwirrt werden, da sie möglicherweise nicht realisieren, dass der neue Tab geöffnet wurde, und sie den Kontext über ihren Standort auf der Seite verlieren können.

Ein häufiger Ansatz besteht darin, externe Links in neuen Tabs und interne Links im gleichen Tab zu öffnen. Einige Designer bevorzugen es, alle Links im gleichen Tab zu öffnen. Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, wie ein Symbol neben dem Linktext.

## Aktives Lernen: Erstellung eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine gängige Art und Weise, wie eine Website erstellt wird – die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs. Wenn Links angeklickt werden, entsteht der Eindruck, dass Sie sich am gleichen Ort befinden und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im gleichen Verzeichnis. Für eine vollständige Dateiliste siehe das Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start).

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie an der angegebenen Stelle auf einer Seite eine ungeordnete Liste hinzu, die die Namen der zu verlinkenden Seiten enthält. Ein Navigationsmenü ist normalerweise einfach eine Liste von Links, daher ist das semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu der entsprechenden Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu dieser Seite – es ist verwirrend und unnötig, einen Link zur eigenen Seite einzufügen. Außerdem dient das Fehlen eines Links als guter visueller Hinweis darauf, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte folgendermaßen aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit den Menüelementen Home, Pictures, Projects und Social](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) einsehen, um die richtige Lösung zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Klicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt zu einer Ressource oder Seite zu verlinken. Dies wird mithilfe des {{HTMLElement("a")}}-Elements und des `mailto:`-URL-Schemas durchgeführt.

In seiner einfachsten und am häufigsten verwendeten Form, gibt ein `mailto:`-Link die E-Mail-Adresse des beabsichtigten Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Das Ergebnis ist ein Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" lautet, wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers mit keiner Zieladresse geöffnet. Dies ist häufig für "Teilen"-Links nützlich, die Benutzer anklicken können, um eine E-Mail an eine von ihnen gewählte Adresse zu senden.

### Angeben von Details

Zusätzlich zur E-Mail-Adresse können Sie auch andere Informationen bereitstellen. Tatsächlich können alle standardmäßigen Mail-Header-Felder zu der `mailto`-URL hinzugefügt werden, die Sie bereitstellen. Die am häufigsten genutzten sind "subject", "cc" und "body" (was kein wahres Header-Feld ist, aber es erlaubt Ihnen, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben). Jedes Feld und sein Wert wird als Abfragebegriff angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body beinhaltet:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbare Zeichen wie Tabs, Wagenrückläufe und Seitenumbrüche) und Leerzeichen {{Glossary("Percent-encoding", "prozentschlüssel-codiert")}} sein. Beachten Sie auch die Fragezeichen (`?`), um die Haupt-URL von den Feldwerten zu trennen, und die kaufmännischen Und-Zeichen (&), um jedes Feld in der `mailto:`-URL zu trennen. Dies ist eine standardmäßige URL-Abfrage-Notation. Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür URL-Abfrage-Notation häufiger verwendet wird.

Hier sind einige weitere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war's vorerst zu Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie anfangen, sie zu gestalten. Als nächstes bei HTML werden Sie sich durch einige Herausforderungen arbeiten, die Ihr Verständnis der bisher behandelten Themen testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
