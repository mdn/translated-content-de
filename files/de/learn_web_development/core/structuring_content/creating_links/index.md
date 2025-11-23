---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 0d59135676db5a372b4dd692f0686e6bdfc13b51
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig – sie sind es, die das Web zu einem _Netz_ machen.
Dieser Artikel zeigt die Syntax, die erforderlich ist, um einen Link zu erstellen, und diskutiert Best Practices für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Pfad-Syntax im Detail — Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verständnis der Vorteile eines gut geschriebenen Link-Texts, wie z. B. bessere Zugänglichkeit für Screenreader-Benutzer und potenziell positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind Merkmale eines HTML-Dokuments, die, wenn sie geklickt oder anderweitig aktiviert werden, den Browser veranlassen, zu anderen Dokumenten oder Ressourcen zu navigieren, manchmal zu bestimmten Teilen von Dokumenten.
Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Beginn des Webs ein Merkmal und machen das Web zu einem _Netz_.
Jede Ressource im Web hat eine Adresse, die als {{Glossary("URL", "URL")}} (Uniform Resource Locator) bekannt ist, auf die Hyperlinks verweisen.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere, das im Web existiert, verweisen.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder bearbeiten soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Bearbeiten der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie später damit umgehen).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur auf mehrere Nachrichtenberichte, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Login-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Titelseite von bbc.co.uk, zeigt viele Nachrichtenartikel und eine Navigation Menü Funktionalität](updated-bbc-website.png)

## Anatomie eines Links

Ein einfacher Link wird erstellt, indem der Text oder andere Inhalte innerhalb eines {{htmlelement("a")}}-Elements umschlossen werden und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, das auch als **Hypertext-Referenz** oder **Ziel** bekannt ist und die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

> [!NOTE]
> Scrimbas [Anker-Tags](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Demonstration, wie man Links mit HTML erstellt, sowie eine Herausforderung, um Sie dazu zu bringen, Ihre eigenen Links zu erstellen.

### Block-Level-Links

Wie bereits erwähnt, können fast alle Inhalte in einen Link umgewandelt werden, selbst {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftselement in einen Link verwandeln möchten, umschließen Sie es mit einem Anker (`<a>`)-Element, wie im folgenden Code-Snippet gezeigt:

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
> Sie erfahren mehr über die Verwendung von Bildern im Web in einem zukünftigen Artikel.

### Hinzufügen unterstützender Informationen mit dem title-Attribut

Möglicherweise möchten Sie auch ein `title`-Attribut zu Ihren Links hinzufügen. Der Titel enthält zusätzliche Informationen über den Link, wie z. B. welche Art von Informationen die Seite enthält oder Dinge, die auf der Website zu beachten sind.

```html
<p>
  I'm creating a link to
  <a
    href="https://www.mozilla.org/en-US/"
    title="The best place to find more information about Mozilla's mission and how to contribute">
    the Mozilla homepage</a
  >.
</p>
```

Dies ergibt das folgende Ergebnis, und das Schweben über den Link zeigt den Titel als Tooltip an:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur bei Maus-Hover angezeigt, was bedeutet, dass Personen, die sich auf Tastatursteuerung oder Touchscreens zur Navigation durch Webseiten verlassen, Schwierigkeiten haben werden, Titelinformationen zu erhalten.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie auf eine Art und Weise präsentieren, die allen Benutzern zugänglich ist, beispielsweise indem Sie sie in den regulären Text einfügen.

### Erstellen eigener Beispiel-Links

Okay, jetzt sind Sie an der Reihe!

1. Klicken Sie auf **"Play"** im Code-Block unten, um das Beispiel im MDN Playground zu bearbeiten, oder erstellen Sie eine Kopie unserer [Startvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) und kopieren Sie den folgenden Code dort hinein.
2. Verlinken Sie den Text "Eichhörnchen" und "Ostsibirisches Eichhörnchen" auf Wikipedia-Seiten, die die entsprechenden Arten beschreiben. Geben Sie jedem Link ein `title`-Attribut entsprechend dem wissenschaftlichen Namen der Art.
3. Verlinken Sie den Text "Wikipedia Eichhörnchen Seite" zur Haupt-Wikipedia-Seite für Eichhörnchen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb des Code-Blocks ansehen.

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

Linkziele sind URLs. Eine URL oder Uniform Resource Locator ist eine Textzeichenfolge, die angibt, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

Ein [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) empfängt Anfragen für URLs und antwortet mit der entsprechenden Ressource. Die meisten Ressourcen werden als Dateien im Dateisystem des Servers gespeichert, daher ähneln die URLs für diese Ressourcen oft Dateipfaden.

> [!NOTE]
> Dateipfade und URLs sind nicht dasselbe, aber fürs Erste sprechen wir davon, als ob sie es wären, um das Verständnis zu erleichtern. Wir werden mehr über die Unterschiede im Abschnitt [wie übersetzen sich URLs in Dateipfade?](#how_do_urls_translate_into_file_paths) diskutieren.

Schauen wir uns ein Beispiel für eine Server-Verzeichnisstruktur an:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html- und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Die **Wurzel** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Website enthält. Innerhalb der **Wurzel** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Homepage oder Zielseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse in unserer Wurzel — `pdfs` und `projects`. Diese enthalten jeweils eine Datei — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie mehrere `index.html`-Dateien in einem Projekt haben können, solange sie sich an unterschiedlichen Dateisystem-Standorten befinden. Die zweite `index.html` wäre möglicherweise die Hauptzielseite für projektbezogene Informationen.

Schauen wir uns einige Beispiele für Links zwischen einigen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Pfadtypen zu demonstrieren.

### Gleiches Verzeichnis

Wenn Sie einen Hyperlink innerhalb der `index.html` der obersten Ebene einfügen möchten, der auf `contacts.html` verweist, können Sie den Pfad einfach als den Dateinamen angeben, auf den Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

```html
<p>
  Want to contact a specific staff member? Find details on our
  <a href="contacts.html">contacts page</a>.
</p>
```

Sie können einen Pfad zu einer Datei im gleichen Verzeichnis auch mit einem einzelnen Punkt gefolgt von einem Schrägstrich beginnen: `./`. Das folgende Beispiel ist äquivalent zum vorherigen, aber einige Leute mögen es, das `./` trotzdem einzubeziehen, weil sie glauben, dass es mehr Klarheit bietet:

```html
<p>
  Want to contact a specific staff member? Find details on our
  <a href="./contacts.html">contacts page</a>.
</p>
```

> [!NOTE]
> Es gibt einige Fälle, in denen das Einfügen von `./` in Ihren Pfaden einen Unterschied macht, beispielsweise beim Spezifizieren von Pfaden für [JavaScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) Importe, aber Sie müssen sich darüber für statische HTML- und CSS-Links keine Sorgen machen.

### Tiefer in Unterverzeichnisse gehen

Wenn Sie einen Hyperlink innerhalb der `index.html` der obersten Ebene einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das `projects`-Verzeichnis gehen, bevor Sie die Datei angeben, auf die Sie verlinken möchten. Dies geschieht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich, dann den Namen der Datei. Die URL, die Sie verwenden können, ist `projects/index.html`:

```html
<p>Visit my <a href="projects/index.html">project homepage</a>.</p>
```

### Zurück in übergeordnete Verzeichnisse gehen

Wenn Sie einen Hyperlink innerhalb von `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie eine Verzeichnisebene nach oben gehen, dann wieder hinunter in das `pdfs`-Verzeichnis. Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte — `..` — also ist die URL `../pdfs/project-brief.pdf`:

```html
<p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen kombinieren, um bei Bedarf komplexe Pfade zu erstellen, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Verlinkung relativ zum Wurzelverzeichnis

Die obigen URLs funktionieren, aber bedenken Sie, dass Sie den Link brechen, wenn Sie entweder die verlinkende Datei oder die verlinkte Datei an einen anderen Ort verschieben.

Wenn Sie einen Link zu einem bestimmten Ort erstellen möchten, der nicht bricht, wenn Sie die verlinkende Datei verschieben, können Sie dies tun, indem Sie einen einzelnen Schrägstrich am Anfang des Pfades setzen — dies zeigt an, dass der Pfad im Wurzelverzeichnis der Site beginnt. Zum Beispiel könnte der vorherige Link innerhalb von `projects/index.html` umgeschrieben werden als:

```html
<p>A link to my <a href="/pdfs/project-brief.pdf">project brief</a>.</p>
```

Jetzt beginnt der Pfad immer im Wurzelverzeichnis (`creating-hyperlinks`), wechselt ins `pdfs`-Verzeichnis und findet die `project-brief.pdf`-Datei. Dies funktioniert weiterhin, wenn Sie die verlinkende Datei an einen anderen Ort verschieben, beispielsweise `a/b/c/d/e/index.html`.

Wenn Sie die verlinkte `project-brief.pdf`-Datei an einen anderen Ort verschieben, brechen Sie dennoch den Link.

Zwei Begriffe, auf die Sie im Netz stoßen werden, sind **absoluter Pfad** und **relativer Pfad**.

- Absoluter Pfad: Verweist auf einen Standort, der durch seinen absoluten Standort in Ihrer Site (oder anderswo im Web) definiert ist. Beispielsweise können Sie einen absoluten Link erstellen, der immer auf denselben Ort relativ zum Wurzelverzeichnis der Site verweist, indem Sie den Schrägstrich am Anfang des Pfads verwenden, wie wir es zuvor gesehen haben: `/pdfs/project-brief.pdf`.
- Relativer Pfad: Verweist auf einen Standort, der _relativ_ zu der Datei ist, von der Sie verlinken. In unserem früheren Beispiel verwendeten wir `projects/index.html`, um einen relativen Link zwischen der aktuellen Datei und einer Datei namens `index.html` herzustellen, die sich in einem `projects`-Unterverzeichnis befindet. Wenn Sie die aktuelle Datei an einen anderen Ort verschieben würden, wäre der Pfad weiterhin relativ zu dieser Datei, würde aber auf einen anderen absoluten Standort verweisen.

Diese Begriffe werden nicht immer konsistent verwendet. Zum Beispiel ist `/pdfs/project-brief.pdf` absolut in Bezug auf den Standort der aktuellen Datei, aber relativ zum [Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name). Eine URL, die den vollständigen Domainnamen enthält, wie `https://example.com/pdfs/project-brief.pdf`, ist absolut im Bezug auf das gesamte Web.

### Verlinken mit vollen URLs

Sie können eine vollständige URL als Pfad angeben, die immer auf denselben Ort im Web zeigt, egal wo sie verwendet wird. Zum Beispiel:

```html
<a href="https://www.example.com/projects/">projects</a>
```

Dieser Link wird immer auf `https://www.example.com/projects/` verweisen, auch wenn Ihre Site auf eine andere Domain verschoben wird.

### Interne und externe Links

Wenn ein Link auf eine Ressource auf _Ihrer_ Site verweist, wird er als **interner Link** bezeichnet. Wenn ein Link auf eine Ressource auf einer _anderen_ Site verweist, wird er als **externer Link** bezeichnet.

Beim Spezifizieren eines externen Links müssen Sie immer die vollständige URL als Pfad angeben, beispielsweise:

```html
<a href="https://www.some-other-site.com">projects</a>
```

Sie können nicht mit einem Pfad wie `/pdfs/project-brief.pdf` oder `projects/index.html` auf eine Position auf einer anderen Site verweisen, da sie beide relativ zu einem Standort auf Ihrer eigenen Site sind, und der Browser benötigt den Domainnamen der Website, um ihn finden zu können.

Beim Spezifizieren eines internen Links können Sie einen relativen oder absoluten Pfad oder eine vollständige URL verwenden. In unserem Beispiel sind diese Links gleichwertig:

```html
<a href="https://www.example.com/projects/">projects</a>

<a href="projects">projects</a>
```

Wir empfehlen Letzteres ohne den vollständigen Domainnamen, aufgrund der Portabilität. Wie wir bereits gesagt haben, wenn Sie `https://www.example.com/projects/` angeben, wird es immer auf `https://www.example.com/projects/` verweisen. Wenn Sie dann Ihre Website auf eine andere Domain verschieben, zum Beispiel `another-example.com`, müssten alle Ihre vollständigen URL-Links geändert werden. Wenn Sie Pfade wie `/projects` angeben, funktionieren diese immer noch, da sie immer noch relativ zur Verzeichnisstruktur sind.

### Dokumentfragmente

Es ist möglich, an einen bestimmten Teil eines HTML-Dokuments, bekannt als **Dokumentfragment**, zu verlinken, anstatt nur an den oberen Rand des Dokuments.
Elemente mit einem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut im Dokument erstellen automatisch ein Dokumentfragment, auf das verlinkt werden kann.

Der häufigste Anwendungsfall besteht darin, auf eine bestimmte Überschrift zu verlinken, die so aussieht:

```html
<h2 id="mailing_address">Mailing address</h2>
```

Um auf diese spezifische `id` zu verlinken, fügen Sie sie am Ende des Pfades ein, vorangestellt von einem Hash/Pfund-Symbol (`#`), beispielsweise:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#mailing_address">mailing address</a>.
</p>
```

Sie können sogar das Dokumentfragment-Referenzierung auf sich selbst verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Wie übersetzen sich URLs in Dateipfade?

Alle bis jetzt gesehenen Linkziele sind _URLs_, die von einem Webserver verarbeitet werden, um die relevante Ressource zu finden.
**Kein Webinhalt kann direkt das Dateisystem des Servers sehen.**

Der bisher betrachtete Server erstellt eine {{Glossary("SSG", "statische Website")}}.
Der Server nimmt einfach den [Pfadnamen](/de/docs/Web/API/URL/pathname)-Teil der URL und sucht direkt nach der entsprechenden Datei in seinem Dateisystem.

> [!NOTE]
> Viele Server generieren Inhalte für eine URL on-the-fly, anstatt sie aus einer statischen Datei abzurufen. Wenn Sie ein [Webframework](/de/docs/Learn_web_development/Core/Frameworks_libraries) verwenden, kann Ihr Quellcodes-Verzeichnis auch sehr unterschiedlich zu dem sein, was auf den Server bereitgestellt wird. Beim Arbeiten mit Ihrer eigenen Website müssen Sie Ihre Build-Tools und Server-Setup verstehen, um zu wissen, wie URLs Ihren Quelldateien zugeordnet werden.

Wenn wir einen Webserver starten (siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)), der unser Beispielseitenverzeichnis als Wurzel verwendet, und der {{Glossary("domain_name", "Domainname")}} der Website auf `example.com` gesetzt ist, wäre unsere `pdfs/project-brief.pdf`-Datei unter `https://www.example.com/pdfs/project-brief.pdf` verfügbar.

Alle Links werden relativ zur URL des aktuellen Dokuments aufgelöst, so dass:

- Für alle Seiten auf der Domain `https://example.com` ein Link zu `/pdfs/project-brief.pdf` immer einen Link zu `https://www.example.com/pdfs/project-brief.pdf` erstellt, dessen Pfadname `/pdfs/project-brief.pdf` ist. Der Server sucht im Wurzelverzeichnis nach dem `pdfs`-Verzeichnis und dann nach der `project-brief.pdf`-Datei in diesem Verzeichnis.
- Ein Link zu `projects/index.html` würde einen Link zu `https://www.example.com/projects/index.html` erstellen, jedoch nur, wenn er in einer Datei im Wurzelverzeichnis enthalten ist, wie die `index.html`-Datei der obersten Ebene oder `contacts.html`. Wenn Sie ihn zum Beispiel in einer HTML-Datei unter `pdfs/index.html` einfügen würden, würde er zu `https://www.example.com/pdfs/projects/index.html` verlinken, dessen Pfadname `/pdfs/projects/index.html` ist, der nicht existiert, und Sie hätten einen defekten Link.

#### Die Standard-`index.html`-Seite

Wenn Sie auf eine `index.html`-Datei verweisen, müssen Sie in der Regel das `index.html` nicht in die URL/den Pfad einfügen, da Webserver nach einer Standardzielseite namens `index.html` suchen, wenn kein Dateiname angegeben ist.

Nochmals unseren `projects/index.html`-Pfad betrachtend, könnten wir den Pfad einfach als `projects` schreiben, und dies würde einen Link zu `https://www.example.com/projects/index.html` erstellen. Wenn wir zur Seite navigieren, könnten wir die URL als `https://www.example.com/projects/` schreiben, und es würde uns trotzdem zum richtigen Ort bringen.

> [!NOTE]
> Der nachgestellte Schrägstrich (`/`) am Ende der URL ist wichtig. Mit ihm würde ein relativer Link zu `contacts.html` innerhalb `projects/index.html` auf `https://www.example.com/projects/contacts.html` aufgelöst werden (das sich im selben Verzeichnis befindet). Ohne ihn würde die URL als Datei behandelt, und der relative Link würde auf `https://www.example.com/contacts.html` aufgelöst werden (das sich ein Verzeichnis höher befindet).
>
> [Verschiedene Webserver handhaben eine URL wie `https://www.example.com/projects` unterschiedlich](https://github.com/slorber/trailing-slash-guide) — einige leiten automatisch zur URL mit einem nachgestellten Schrägstrich weiter, während einige dasselbe `index.html` ohne Umleitung bereitstellen. Das letztere Verhalten kann relative Links brechen.

## Beste Praktiken für Links

Es gibt einige Best Practices, die Sie befolgen sollten, wenn Sie Links schreiben. Schauen wir uns diese nun an.

### Verwenden Sie klare Link-Formulierungen

Es ist einfach, Links auf Ihre Seite zu stellen. Das reicht nicht aus. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und den bevorzugten Werkzeugen. Zum Beispiel:

- Screenreader-Benutzer mögen es, von Link zu Link auf der Seite zu springen und Links aus dem Kontext zu lesen.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verlinkt wird.
- Visuelle Leser überfliegen die Seite eher, als jedes Wort zu lesen, und ihre Augen werden auf Seitenmerkmale gezogen, die auffallen, wie Links. Sie finden beschreibende Linktexte nützlich.

Schauen wir uns ein spezifisches Beispiel an:

**Guter** Linktext: [Laden Sie Firefox herunter](https://www.firefox.com/en-US/?redirect_source=firefox-com)

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

- Wiederholen Sie nicht die URL als Teil des Linktextes — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Screenreader sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "verlinkt mit" im Linktext — es ist nur unnötiger Lärm. Screenreader sagen den Benutzern, dass es einen Link gibt.
  Visuelle Benutzer werden auch wissen, dass es einen Link gibt, da Links im Allgemeinen in einer anderen Farbe und unterstrichen sind (diese Konvention sollte im Allgemeinen nicht durchbrochen werden, da sich Benutzer daran gewöhnt haben).
- Halten Sie Ihren Linktext so kurz wie möglich — dies ist hilfreich, da Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinkt sind.
  Dies kann Probleme für Screenreader-Benutzer verursachen, wenn es eine Liste von Links aus dem Kontext gibt, die mit "Klicken Sie hier", "Klicken Sie hier", "Klicken Sie hier" gekennzeichnet sind.

### Verlinken von nicht-HTML-Ressourcen — klare Wegweiser setzen

Wenn Sie auf eine Ressource verlinken, die nicht auf der aktuellen Seite als "normale Navigation" geöffnet wird, sollten Sie klare Formulierungen zum Linktext hinzufügen, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link dazu führt, dass ein Popup geöffnet wird oder eine andere potenziell unerwartete Aktion ausgeführt wird, sollte dies im Text angegeben werden. Das ist wichtig für Benutzer mit langsamen Internetverbindungen, die möglicherweise vermeiden möchten, mehrere Megabyte große Assets herunterzuladen. Es hilft auch, Erwartungen für Screenreader-Benutzer zu setzen, die sonst nicht wissen könnten, was passiert.

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

### Verwenden Sie das download-Attribut beim Verlinken auf einen Download

Beim Verlinken auf eine Ressource, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen standardmäßigen Dateinamen zum Speichern bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann Links in einem neuen Tab öffnen

Links öffnen sich standardmäßig im gleichen Tab wie die Seite, auf der sie sich befinden, was dem Benutzer ermöglicht, mit der Zurück-Taste des Browsers zur vorherigen Seite zurückzukehren. Viele Seiten (einschließlich MDN) entscheiden sich jedoch dafür, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies wird erreicht, indem das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut auf `"_blank"` gesetzt wird.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden, sollte eine bewusste Entscheidung sein, basierend auf Benutzererfahrungsdesign-Überlegungen. Hier sind einige Dinge, über die nachgedacht werden sollte:

- Das Öffnen von Links in einem neuen Tab präsentiert die beiden Dokumente gleichzeitig, was für eine "parallele" Navigationserfahrung nützlich ist. Andererseits sind Links, die sich im gleichen Tab öffnen, eher eine Fortführung der aktuellen Seite.
- Das Öffnen von Links in einer neuen Registerkarte kann für Benutzer, die gewohnt sind, die Zurück-Taste zu verwenden, verwirrend sein.
- Auch wenn Links standardmäßig im gleichen Tab geöffnet werden, können Benutzer dennoch wählen, sie in einem neuen Tab zu öffnen, indem sie Tastenkombinationen oder Kontextmenüoptionen verwenden. Andererseits sind Links, die in einem neuen Tab geöffnet werden, schwer im gleichen Tab zu öffnen.
- Screenreader-Benutzer können durch Links, die in einem neuen Tab geöffnet werden, verwirrt sein, da sie möglicherweise nicht merken, dass ein neuer Tab geöffnet wurde, und sie können den Kontext über ihren Standort auf der Seite verlieren.

Ein gängiger Ansatz ist, externe Links in neuen Tabs zu öffnen und interne Links im gleichen Tab. Einige Designer ziehen es vor, alle Links im gleichen Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, wie ein Symbol neben dem Linktext.

## Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine Website mit mehreren Seiten zu erstellen. Dies ist eine übliche Methode, um eine Website zu erstellen — dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich desselben Navigationsmenüs, sodass es den Eindruck erweckt, dass Sie sich am selben Ort befinden und andere Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im gleichen Verzeichnis. Für eine vollständige Dateiliste siehe das [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start)-Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie eine ungeordnete Liste an der angegebenen Stelle auf einer Seite hinzu, die die Namen der zu verlinkenden Seiten enthält.
   Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite den Link zu genau dieser Seite — es ist verwirrend und unnötig, wenn eine Seite einen Link zu sich selbst enthält. Und das Fehlen eines Links dient als gute visuelle Erinnerung daran, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich der folgenden Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü, mit Startseite, Bilder, Projekte und soziale Menüelemente](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder unsicher sind, ob Sie es richtig gemacht haben, können Sie das [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up)-Verzeichnis überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Buttons zu erstellen, die beim Anklicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt auf eine Ressource oder Seite zu verlinken.
Dies geschieht mit dem {{HTMLElement("a")}}-Element und dem `mailto:`-URL-Schema.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an Nirgendwo senden](mailto:nowhere@mozilla.org).

In der Tat ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" lautet, wird ein neues ausgehendes E-Mail-Fenster von der E-Mail-Client des Benutzers mit keiner Zieladresse geöffnet.
Dies ist oft nützlich als "Teilen"-Links, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Spezifizieren von Details

Zusätzlich zur E-Mail-Adresse können Sie andere Informationen hinzufügen. Tatsächlich können alle Standard-Mailheader-Felder zu der `mailto`-URL, die Sie angeben, hinzugefügt werden.
Die am häufigsten verwendeten sind "subject", "cc" und "body" (was kein echtes Header-Feld ist, aber Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert werden als Abfragebegriff angegeben.

Hier ist ein Beispiel, das ein cc, bcc, Betreff und einen Nachrichtentext enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht-druckbaren Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "url-codiert")}} sein.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und der kaufmännischen Unterscheidungen (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die standardmäßige URL-Abfragenotation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation üblicherweise verwendet wird.

Hier sind einige andere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Zusammenfassung

Das war es vorerst für Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie beginnen, sie zu stylen. Als nächstes werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir zu den Links bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}
