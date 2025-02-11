---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: ef298d0f7a428b3c0cbde480d810f30bc55a73a0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch als Hyperlinks bekannt) sind äußerst wichtig – sie machen das Internet zu einem _Web_.
Dieser Artikel zeigt die Syntax, die für das Erstellen eines Links erforderlich ist, und diskutiert bewährte Verfahren für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantiken auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links das grundlegende Merkmal des Internets sind. Ohne Links gibt es kein Internet.</li>
          <li>Das Attribut <code>href</code>.</li>
          <li>Absolute und relative Pfade und wann diese verwendet werden sollten.</li>
          <li>Details zur Pfadsyntax – Schrägstriche, ein Punkt und zwei Punkte.</li>
          <li>Link-Zustände und warum sie wichtig sind – <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Blocklinks.</li>
          <li>Verstehen der Vorteile, guten Linktext zu schreiben, wie z. B. bessere Barrierefreiheit für Benutzer von Screenreadern und mögliche positive Auswirkungen auf SEO.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks gehören zu den spannendsten Innovationen, die das Internet zu bieten hat.
Sie waren von Beginn an ein Merkmal des Internets und machen das Internet zu einem _Web_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf spezifische Teile von Dokumenten zu verweisen oder Apps unter einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass der Webbrowser beim Anklicken oder anderweitigen Aktivieren zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) navigiert.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere, was im Internet verfügbar ist, verweisen.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder verarbeiten soll, fragt er Sie, ob Sie die Datei öffnen möchten (in diesem Fall wird die Verarbeitung der Datei an eine geeignete native App auf dem Gerät übergeben) oder ob Sie die Datei herunterladen möchten (in diesem Fall können Sie sie später behandeln).

Zum Beispiel enthält die BBC-Startseite viele Links, die nicht nur auf mehrere Nachrichtenartikel verweisen, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmeldungs-/Registrierungsseiten (Benutzerwerkzeuge) und mehr.

![Vorderseite von bbc.co.uk mit vielen Nachrichtenartikeln und Navigationsmenü-Funktionalität](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder ein anderer Inhalt in ein {{htmlelement("a")}}-Element eingeschlossen und das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Das ergibt das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Startseite](https://www.mozilla.org/en-US/).

### Block-Level-Links

Wie zuvor erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Block-Elemente")}}.
Wenn Sie ein Überschriftenelement in einen Link umwandeln möchten, schließen Sie es wie im folgenden Code-Snippet in ein `<a>`-Element ein:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Das macht die Überschrift zu einem Link:
{{EmbedLiveSample('Block level links', '100%', 150)}}

### Bild-Links

Wenn Sie ein Bild haben, das Sie in einen Link umwandeln möchten, verwenden Sie das {{htmlelement("a")}}-Element, um die Bilddatei zu umschließen, die mit dem {{htmlelement("img")}}-Element referenziert wird. Im folgenden Beispiel wird ein relativer Pfad verwendet, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

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

Dadurch wird das MDN-Logo zu einem Link:
{{EmbedLiveSample('Image links', '100%', 150)}}

> [!NOTE]
> Mehr über die Verwendung von Bildern im Internet erfahren Sie in einem zukünftigen Artikel.

### Zusätzliche Informationen mit dem `title`-Attribut hinzufügen

Ein weiteres Attribut, das Sie möglicherweise zu Ihren Links hinzufügen möchten, ist `title`.
Das `title`-Attribut enthält zusätzliche Informationen über den Link, z. B. welche Art von Informationen die Seite enthält oder worauf auf der Website zu achten ist.

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

Das ergibt das folgende Ergebnis: Beim Überfahren des Links mit der Maus wird der Titel als Tooltip angezeigt.

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Link-Titel wird nur beim Hovern mit der Maus angezeigt. Dies bedeutet, dass Personen, die auf Tastatursteuerung oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, die Titelinformationen zu sehen.
> Wenn die Informationen eines Titels wichtig für die Benutzerfreundlichkeit der Seite sind, sollten sie auf eine Weise dargestellt werden, die für alle Benutzer zugänglich ist, beispielsweise, indem sie in den normalen Text aufgenommen werden.

### Aktives Lernen: Erstellen Sie Ihren eigenen Beispiel-Link

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Einsteiger-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body einen oder mehrere Absätze oder andere Inhalte hinzu, die Sie bereits kennen.
- Wandeln Sie einige Inhalte in Links um.
- Fügen Sie `title`-Attribute hinzu.

## Ein kurzer Überblick über URLs und Pfade

Um Link-Ziele vollständig zu verstehen, müssen Sie URLs und Dateipfade kennen. Dieser Abschnitt gibt Ihnen die Informationen, die Sie benötigen.

Eine URL oder Uniform Resource Locator ist ein Textstring, der definiert, wo sich etwas im Internet befindet. Zum Beispiel ist die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/` zu finden.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessieren, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an: die `creating-hyperlinks` Verzeichnisstruktur, die unten dargestellt ist:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien: index.html und contacts.html sowie zwei Verzeichnisse: projects und pdfs, die jeweils eine index.html- und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Website enthält. Im **Root** befindet sich eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Startseite oder Landing Page (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Root – `pdfs` und `projects`. Diese enthalten jeweils eine Datei: ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an verschiedenen Orten im Dateisystem befinden. Die zweite `index.html` wäre möglicherweise die Haupt-Landingpage für projektbezogene Informationen.

Sehen wir uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu veranschaulichen:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink innerhalb von `index.html` (der obersten `index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie den Dateinamen an, den Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die URL lautet `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In Unterverzeichnisse wechseln**: Wenn Sie innerhalb von `index.html` (der obersten `index.html`) einen Hyperlink zu `projects/index.html` einfügen möchten, müssen Sie in das Verzeichnis `projects` wechseln, bevor Sie die Datei angeben, die Sie verlinken möchten.
  Dies geschieht, indem Sie den Namen des Verzeichnisses angeben, gefolgt von einem Schrägstrich und anschließend dem Namen der Datei. Die URL lautet `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Ins übergeordnete Verzeichnis wechseln**: Wenn Sie einen Hyperlink innerhalb von `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie ein Verzeichniseben höher gehen und dann wieder in das Verzeichnis `pdfs` wechseln.
  Um ein Verzeichnis höher zu gelangen, verwenden Sie zwei Punkte – `..` – daher lautet die URL `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen zu komplexen URLs kombinieren, falls erforderlich, z. B.: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen spezifischen Teil eines HTML-Dokuments zu verlinken, bekannt als ein **Dokumentenfragment**, anstatt nur an den Anfang des Dokuments zu verlinken.
Dazu müssen Sie zunächst einem Element, das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zuweisen.
Es macht normalerweise Sinn, zu einer spezifischen Überschrift zu verlinken. Dies würde etwa so aussehen:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um auf diese spezifische `id` zu verlinken, fügen Sie sie am Ende der URL hinzu, vorangestellt mit einem Hash-/Pfundsymbol (`#`), z. B.:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar die Dokumentfragmentreferenz alleine verwenden, um _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, die Ihnen im Internet begegnen, sind **absolute URL** und **relative URL:**

**Absolute URL**: Verweist auf einen Speicherort, der durch seine absolute Position im Internet definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainnamen")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das innerhalb des **Root** eines Webservers liegt, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` (oder einfach nur `https://www.example.com/projects/`) verfügbar, da die meisten Webserver eine Landingpage wie `index.html` laden, wenn diese nicht in der URL angegeben ist.

Eine absolute URL verweist immer auf den gleichen Ort, unabhängig davon, wo sie verwendet wird.

**Relative URL**: Verweist auf einen Speicherort, der _relativ_ zur Datei ist, von der aus Sie verlinken, ähnlich wie das, was wir im vorangegangenen Abschnitt gesehen haben.
Zum Beispiel, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` auf eine PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname – `project-brief.pdf` – ohne zusätzliche Informationen. Wenn die PDF-Datei in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar wäre, würde der relative Link `pdfs/project-brief.pdf` lauten (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL verweist auf verschiedene Orte, abhängig von der tatsächlichen Position der Datei, auf die Sie verweisen — wenn wir zum Beispiel unsere `index.html`-Datei aus dem Verzeichnis `projects` in den **Root** der Website verschieben würden (die oberste Ebene, ohne in irgendeinem Verzeichnis zu sein), würde der relative Link `pdfs/project-brief.pdf`, den sie enthielte, jetzt auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändert sich die Position von `project-brief.pdf`-Datei und `pdfs`-Ordner nicht plötzlich, weil Sie die `index.html`-Datei verschieben — dies würde dazu führen, dass Ihr Link auf den falschen Ort verweist und beim Anklicken nicht funktioniert. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige bewährte Praktiken, die Sie beim Schreiben von Links befolgen sollten. Schauen wir uns diese nun an.

### Verwenden Sie klaren Linktext

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das ist aber nicht genug. Wir müssen unsere Links _zugänglich_ für alle Leser gestalten, unabhängig von ihrem aktuellen Kontext und den bevorzugten Werkzeugen. Beispielsweise:

- Screenreader-Benutzer navigieren gerne von Link zu Link auf der Seite und lesen Links außerhalb des Kontexts.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verwiesen wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden auf herausragende Seitenelemente wie Links gelenkt. Sie werden aussagekräftigen Linktext nützlich finden.

Sehen wir uns ein spezifisches Beispiel an:

**Guter** Linktext: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/">Download Firefox</a></p>
```

**Schlechter** Linktext: [Klicken Sie hier](https://www.mozilla.org/en-US/firefox/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/">Click here</a> to download
  Firefox
</p>
```

Andere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktextes – URLs sehen unschön aus und hören sich noch schlimmer an, wenn sie Buchstabe für Buchstabe von einem Screenreader vorgelesen werden.
- Verwenden Sie nicht "Link" oder "verweist auf" im Linktext – das ist nur Lärm. Screenreader informieren die Benutzer, dass es sich um einen Link handelt.
  Visuelle Benutzer werden auch wissen, dass es ein Link ist, da Links in der Regel in einer anderen Farbe und unterstrichen dargestellt werden (dieses Konventionsmuster sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich – dies ist hilfreich, da Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, in denen mehrere Kopien desselben Textes auf verschiedene Orte verlinken.
  Dies kann für Screenreader-Benutzer problematisch sein, wenn eine Liste von Links außerhalb des Kontexts vorhanden ist, die als "Klicken Sie hier", "Klicken Sie hier", "Klicken Sie hier" beschriftet ist.

### Verlinken von nicht-HTML-Ressourcen – klare Hinweise hinterlassen

Wenn Sie auf eine Ressource verlinken, die nicht direkt als "normale Navigation" auf der aktuellen Seite geöffnet wird, sollten Sie klare Hinweise im Linktext darüber geben, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link ein Popup öffnet oder eine andere möglicherweise unerwartete Aktion ausführt, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit langsamen Verbindungen, die möglicherweise vermeiden möchten, mehrmegabytegroße Dateien herunterzuladen. Es hilft auch, die Erwartungen für Screenreader-Benutzer zu klären, die sonst möglicherweise nicht wissen, was passiert.

Sehen wir uns einige Beispiele an, um zu sehen, welcher Text hier verwendet werden kann:

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

### Verwenden Sie das Attribut `download` beim Verlinken eines Downloads

Wenn Sie auf eine Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen standardmäßigen Speichernamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann Links in einem neuen Tab öffnen

Standardmäßig öffnen sich Links im gleichen Tab wie die Seite, auf der sie sich befinden. Der Benutzer kann dann mit der Zurück-Schaltfläche des Browsers zur vorherigen Seite navigieren. Allerdings entscheiden sich viele Websites (einschließlich MDN), bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies wird durch Setzen des [`target`](/de/docs/Web/HTML/Element/a#target)-Attributs auf `"_blank"` erreicht.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob ein Link in einem neuen Tab geöffnet wird, sollte eine bewusste Entscheidung sein, die auf Überlegungen zum Benutzererlebnis basiert. Hier sind einige Punkte, die Sie beachten sollten:

- Das Öffnen von Links in einem neuen Tab zeigt die beiden Dokumente parallel an, was für eine "parallele" Navigationserfahrung nützlich ist. Andererseits sind Links, die im gleichen Tab geöffnet werden, mehr wie eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann für Benutzer verwirrend sein, die daran gewöhnt sind, die Zurück-Schaltfläche zu verwenden.
- Selbst wenn Links standardmäßig im gleichen Tab geöffnet werden, können Benutzer sie immer noch mit Tastenkombinationen oder Kontextmenüoptionen in einem neuen Tab öffnen. Andererseits sind Links, die in einem neuen Tab geöffnet werden, schwierig, im gleichen Tab zu öffnen.
- Screenreader-Benutzer könnten durch Links, die in einem neuen Tab geöffnet werden, verwirrt sein, da sie möglicherweise nicht merken, dass ein neuer Tab geöffnet wurde, und den Kontext über ihren Standort auf der Seite verlieren könnten.

Ein häufiger Ansatz besteht darin, externe Links in neuen Tabs und interne Links im gleichen Tab zu öffnen.
Einige Designer bevorzugen es, alle Links im gleichen Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, z. B. ein Symbol neben dem Linktext.

## Aktives Lernen: Erstellen Sie ein Navigationsmenü

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verbinden, um eine Website mit mehreren Seiten zu erstellen. Dies ist eine übliche Art, wie eine Website erstellt wird – die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs. Wenn Links angeklickt werden, entsteht der Eindruck, dass Sie am gleichen Ort bleiben und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im gleichen Verzeichnis. Eine vollständige Dateiliste finden Sie im [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start)-Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Eine ungeordnete Liste an der angegebenen Stelle auf einer Seite hinzufügen, die die Namen der Seiten zum Verlinken enthält.
   Ein Navigationsmenü ist im Allgemeinen nur eine Liste von Links, daher ist das aus semantischer Sicht in Ordnung.
2. Jeden Seitennamen in einen Link zu dieser Seite umwandeln.
3. Das Navigationsmenü auf jede Seite kopieren.
4. Auf jeder Seite nur den Link zu dieser Seite selbst entfernen – es ist verwirrend und unnötig, wenn eine Seite einen Link zu sich selbst enthält. Außerdem ist das Fehlen eines Links eine gute visuelle Erinnerung darüber, auf welcher Seite Sie sich aktuell befinden.

Das fertige Beispiel sollte wie folgt aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit den Menüeinträgen Home, Pictures, Projects und Social](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder nicht sicher sind, ob Sie alles richtig gemacht haben, können Sie das [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up)-Verzeichnis überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Buttons zu erstellen, die beim Anklicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt auf eine Ressource oder Seite zu verlinken.
Dies wird mit dem {{HTMLElement("a")}}-Element und dem `mailto:`-URL-Schema gemacht.

In seiner einfachsten und gebräuchlichsten Form gibt ein `mailto:`-Link die E-Mail-Adresse des beabsichtigten Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie diese weglassen und Ihr [`href`](/de/docs/Web/HTML/Element/a#href) "mailto:" lautet, wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers geöffnet, ohne dass eine Zieladresse angegeben wird.
Dies wird häufig als "Teilen"-Links verwendet, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen bereitstellen. Tatsächlich können alle standardmäßigen Mail-Header-Felder der `mailto:`-URL hinzugefügt werden, die Sie angeben.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (was kein wirkliches Header-Feld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert werden als Abfrageparameter angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbare Zeichen wie Tabulatoren, Zeilenumbrüche und Seitenumbrüche) sowie Leerzeichen {{Glossary("Percent-encoding", "URL-codiert (percent-escaped)")}} werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und der kaufmännischen Und-Zeichen (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die Standardnotation für URL-Abfragen.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür URL-Abfragen normalerweise verwendet werden.

Hier sind einige andere Beispiel-`mailto:`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weiterführende Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Test your skills: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills:_Links).

## Zusammenfassung

Das war's für Links, zumindest vorerst! Sie werden später im Kurs auf Links zurückkommen, wenn Sie beginnen, sie zu stylen. Als Nächstes für HTML bearbeiten Sie ein paar Herausforderungen, um Ihr Verständnis der bisher behandelten Themen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
