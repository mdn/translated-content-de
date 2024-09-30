---
title: Erstellen von Hyperlinks
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

Hyperlinks sind wirklich wichtig — sie sind das, was das Web zu einem _Netz_ macht.
Dieser Artikel zeigt die Syntax, die erforderlich ist, um einen Link zu erstellen, und diskutiert bewährte Methoden für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        > behandelt. HTML-Textformatierung, wie im
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man einen Hyperlink effektiv implementiert und mehrere
        Dateien miteinander verknüpft.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks gehören zu den aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind seit den Anfängen des Webs eine Funktion und machen das Web zu einem _Netz_.
Hyperlinks erlauben es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf spezifische Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse bereitzustellen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass der Webbrowser beim Anklicken oder anderweitigen Aktivieren zu einer anderen Webadresse ([URL](/de/docs/Glossary/URL)) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, das im Web existiert.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder verarbeiten soll, wird er fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Verarbeiten der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie später versuchen, damit umzugehen).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur auf mehrere Nachrichtenartikel verweisen, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr.

![Titelseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenü-Funktionen zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalt innerhalb eines {{htmlelement("a")}}-Elements umschlossen und das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies gibt uns folgendes Ergebnis:\
Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

### Blockebenen-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, selbst [Block-Level-Elemente](/de/docs/Glossary/Block/CSS).
Wenn Sie ein Überschriftenelement in einen Link umwandeln möchten, umschließen Sie es in einem Anker (`<a>`)-Element, wie im folgenden Code-Snippet gezeigt:

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

Wenn Sie ein Bild haben, das Sie in einen Link verwandeln möchten, verwenden Sie das {{htmlelement("a")}}-Element, um die Bilddatei zu umschließen, die mit dem {{htmlelement("img")}}-Element referenziert wird. Das folgende Beispiel verwendet einen relativen Pfad, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

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

Ein weiteres Attribut, das Sie möglicherweise zu Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, z. B. welche Art von Informationen die Seite enthält oder worauf auf der Website zu achten ist.

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

Dies gibt uns folgendes Ergebnis und beim Überfahren des Links wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerungen oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, auf Titelinformationen zuzugreifen.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie ihn auf eine Weise präsentieren, die allen Benutzern zugänglich ist, zum Beispiel, indem Sie ihn in den regulären Text einfügen.

### Aktives Lernen: Erstellen eines eigenen Beispiel-Links

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Einstiegsvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Körper einen oder mehrere Absätze oder andere Inhaltstypen hinzu, die Sie bereits kennen.
- Wandeln Sie einige der Inhalte in Links um.
- Fügen Sie title-Attribute hinzu.

## Ein kurzer Überblick über URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die Informationen, die Sie benötigen, um dies zu erreichen.

Eine URL, oder Uniform Resource Locator, ist eine Textzeichenfolge, die angibt, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, sehen Sie das [creating-hyperlinks](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/creating-hyperlinks) Verzeichnis.

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html und eine project-brief.pdf Datei enthalten](simple-directory.png)

Das **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Website enthält. Innerhalb des **Root** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Startseite oder Einstiegsseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Root-Verzeichnisses — `pdfs` und `projects`. Diese haben jeweils eine einzelne Datei — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an unterschiedlichen Stellen im Dateisystem befinden. Die zweite `index.html` wäre vielleicht die Hauptseite für projektbezogene Informationen.

- **Gleiches Verzeichnis**: Wenn Sie in `index.html` (dem obersten `index.html`) einen Hyperlink einfügen wollten, der nach `contacts.html` verweist, würden Sie den Dateinamen angeben, zu dem Sie verlinken möchten, da er sich im selben Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In Unterverzeichnisse wechseln**: Wenn Sie in `index.html` (dem obersten `index.html`) einen Hyperlink einfügen wollten, der nach `projects/index.html` verweist, müssten Sie in das `projects`-Verzeichnis wechseln, bevor Sie die Datei angeben, zu der Sie verlinken möchten.
  Dies geschieht, indem Sie den Namen des Verzeichnisses, dann einen Schrägstrich und dann den Namen der Datei angeben. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück in übergeordnete Verzeichnisse wechseln**: Wenn Sie in `projects/index.html` einen Hyperlink einfügen wollten, der nach `pdfs/project-brief.pdf` verweist, müssten Sie eine Verzeichnisebene nach oben gehen und dann in das `pdfs`-Verzeichnis wechseln.
  Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte — `..` — sodass die URL, die Sie verwenden würden, `../pdfs/project-brief.pdf` lautet:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere dieser Funktionen in komplexen URLs kombinieren, wenn erforderlich, beispielsweise: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments, bekannt als **Dokumentfragment**, zu verlinken, anstatt nur auf den Anfang des Dokuments.
Dazu müssen Sie zunächst einem Element, zu dem Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut zuweisen.
Normalerweise macht es Sinn, auf eine bestimmte Überschrift zu verlinken, das würde dann so aussehen:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann zu diesem spezifischen `id` zu verlinken, fügen Sie es am Ende der URL ein, mit einem Hashtag/Rautenzeichen (`#`) davor, zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar nur den Dokumentfragmentverweis verwenden, um _zu einem anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute gegenüber relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Zeigt auf einen Ort, der durch seinen absoluten Standort im Web definiert ist, einschließlich [Protokoll](/de/docs/Glossary/protocol) und [Domainname](/de/docs/Glossary/domain_name).
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich innerhalb des **Root** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver eine Startseite wie `index.html` laden, wenn sie in der URL nicht angegeben ist).

Eine absolute URL wird immer auf denselben Ort verweisen, egal wo sie verwendet wird.

**Relative URL**: Zeigt auf einen Ort, der _relativ_ zu der Datei ist, von der aus Sie verlinken, ähnlich wie das, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispieldatei bei `https://www.example.com/projects/index.html` zu einer PDF-Datei im selben Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen nötig. Wenn das PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL wird auf verschiedene Orte zeigen, abhängig von dem tatsächlichen Standort der Datei, von der Sie referenzieren — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis in das **Root** der Website verschieben (das oberste Level, nicht in einem Verzeichnis), würde der relative URL-Link `pdfs/project-brief.pdf` darin jetzt auf eine Datei bei `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei bei `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändert sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, nur weil Sie die `index.html`-Datei verschoben haben — das würde Ihren Link auf den falschen Ort zeigen lassen, sodass er beim Anklicken nicht funktionieren würde. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige bewährte Praktiken, die bei der Erstellung von Links beachtet werden sollten. Lassen Sie uns diese nun betrachten.

### Verwenden Sie klare Link-Beschriftungen

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das ist nicht genug. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und den Tools, die sie bevorzugen. Zum Beispiel:

- Bildschirmleser-Benutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden den Linktext, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden von Seitenelementen angezogen, die auffallen, wie Links. Sie werden beschreibenden Linktext nützlich finden.

Werfen wir einen Blick auf ein spezifisches Beispiel:

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

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktexts — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Bildschirmleser sie Buchstabe für Buchstabe liest.
- Sagen Sie nicht "Link" oder "links zu" im Linktext — das ist nur Lärm. Bildschirmleser sagen den Leuten, dass es einen Link gibt.
  Auch visuelle Benutzer werden wissen, dass es einen Link gibt, da Links in der Regel in einer anderen Farbe angezeigt und unterstrichen werden (diese Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, weil Bildschirmleser den gesamten Linktext interpretieren müssen.
- Minimieren Sie Fälle, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinkt werden.
  Dies kann Probleme für Benutzer von Bildschirmlesern verursachen, wenn eine Liste von Links ohne Kontext vorhanden ist, die mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind.

### Verlinken zu nicht-HTML-Ressourcen — lassen Sie klare Wegweiser

Wenn Sie zu einer Ressource verlinken, die heruntergeladen wird (wie ein PDF oder Word-Dokument), gestreamt wird (wie Video oder Audio), oder eine andere potenziell unerwartete Wirkung hat (ein Pop-up-Fenster öffnet), sollten Sie klare Beschreibungen hinzufügen, um Verwirrung zu reduzieren.

Zum Beispiel:

- Wenn Sie über eine langsame Verbindung unterwegs sind, auf einen Link klicken und dann ein mehrere Megabyte großer Download unerwartet beginnt.

Werfen wir einen Blick auf einige Beispiele, um zu sehen, welche Art von Text hier verwendet werden kann:

```html
<p>
  <a href="https://www.example.com/large-report.pdf">
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

Wenn Sie zu einer Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standard-Speicherdateinamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verknüpfen, um eine Website mit mehreren Seiten zu erstellen. Dies ist eine häufige Art und Weise, wie eine Website erstellt wird — dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich desselben Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie im selben Ort bleiben und andere Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Für eine vollständige Dateiliste siehe das [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start) Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie eine ungeordnete Liste an der angegebenen Stelle auf einer Seite hinzu, die die Namen der Seiten enthält, zu denen verlinkt werden soll.
   Ein Navigationsmenü ist in der Regel nur eine Liste von Links, also ist dies semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu derselben Seite — es ist verwirrend und unnötig, wenn eine Seite einen Link zu sich selbst enthält.
   Und das Fehlen eines Links ist eine gute visuelle Erinnerung, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit den Menüpunkten Home, Pictures, Projects und Social](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder sich nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) Verzeichnis überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Anklicken ein neues ausgehendes E-Mail-Fenster öffnen, anstatt auf eine Ressource oder Seite zu verlinken.
Dies geschieht mit dem {{HTMLElement("a")}}-Element und dem `mailto:` URL-Schema.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des beabsichtigten Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Element/a#href) ist "mailto:", wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers ohne Zieladresse geöffnet.
Dies ist oft als "Teilen"-Links nützlich, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen angeben. Tatsächlich können alle standardmäßigen E-Mail-Headerfelder zur `mailto:` URL hinzugefügt werden, die Sie angeben.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (was kein echtes Header-Feld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert wird als Abfrageparameter angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen URL-kodiert sein, mit nicht druckbaren Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen [prozentkodiert](/de/docs/Glossary/Percent-encoding).
> Beachten Sie außerdem die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und der kaufmännischen Und (`&`), um jedes Feld in der `mailto:` URL zu trennen.
> Dies ist die Standard-URL-Abfragenotation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation häufiger verwendet wird.

Hier sind einige weitere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20das%20Thema>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links).

## Zusammenfassung

Das war's vorerst zu Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie beginnen, diese zu stylen. Als Nächstes geht es weiter mit HTML. Wir werden zu Textsemantik zurückkehren und uns einige fortgeschrittenere/ungewöhnliche Funktionen anschauen, die nützlich sein werden — [Erweiterte Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) ist Ihr nächster Halt.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
