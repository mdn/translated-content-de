---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text, was wirklich ziemlich langweilig war. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Inhaltsarten) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend damit befassen, wie man das {{htmlelement("img")}}-Element verwendet, einschließlich der Grundlagen, der Annotation mit Bildunterschriften mithilfe von {{htmlelement("figure")}}, und der Darstellung, wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textlevel-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Der Begriff "replaced element" — was bedeutet das?</li>
          <li>Einfache <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um beispielsweise zu vermeiden, dass die Benutzeroberfläche ruckartig aktualisiert wird, wenn ein Bild fertig geladen und angezeigt wird.</li>
          <li>Optimierung von Medien-Assets für das Web — die Dateigrößen klein halten.</li>
          <li>Verständnis von Medien-Asset-Lizenzen — verschiedene Lizenztypen, wie man sie einhält und wie man angemessen lizenzierte Mediendateien für Projekte sucht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "void element")}} (das bedeutet, es kann keinen Kinderinhalt haben und kein End-Tag besitzen), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Angenommen, Ihr Bild heißt `dinosaur.jpg`, und es befindet sich im selben Verzeichnis wie Ihre HTML-Seite, könnten Sie das Bild folgendermaßen einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem Unterverzeichnis `images` befindet, das sich im selben Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen sie zur SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaur.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrer eigenen Seite hosten. Dies bedeutet in einfachen Setups, dass Sie die Bilder Ihrer Website auf demselben Server wie Ihr HTML speichern. Zudem ist es wartungstechnisch effizienter, relative URLs statt absoluter URLs zu verwenden (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medien-Assets und Lizenzen](#medien-assets_und_lizenzen) unten für weitere Informationen).

> [!WARNING]
> _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das auf der Website einer anderen Person gehostet wird, _ohne Erlaubnis_. Dies wird als "Hotlinking" bezeichnet. Es ist unethisch, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes zahlen würde, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Das vorherige Code-Snippet, entweder mit der absoluten oder der relativen URL, ergibt folgendes Resultat:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einem Browser, mit "Images in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **replaced elements** bezeichnet. Das liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource definiert werden (wie eine Bild- oder Videodatei) und nicht durch den Inhalt des Elements selbst. Sie können mehr darüber bei {{Glossary("replaced_elements", "replaced elements")}} lesen.

> [!NOTE]
> Sie finden das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html) an).

### Alternativtext

Das nächste Attribut, das wir uns ansehen, ist `alt`. Sein Wert soll eine Textbeschreibung des Bildes für Situationen sein, in denen das Bild nicht gesehen/angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange zum Rendern braucht. Zum Beispiel könnte unser obiger Code wie folgt modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn zum Beispiel unser Bildname als `dinosooooor.jpg` falsch geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den Alt-Text anzeigen:

![Der Titel der Images in HTML, diesmal wird das Dinosaurierbild nicht angezeigt und der Alt-Text ist an seiner Stelle zu sehen.](alt-text.png)

Warum sollten Sie Alt-Text sehen oder benötigen? Er kann aus verschiedenen Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um das Web für ihn vorzulesen. Tatsächlich ist es für die meisten Benutzer nützlich, Alt-Text zur Beschreibung von Bildern zur Verfügung zu haben.
- Wie oben beschrieben, könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch nur Textbrowser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den Alt-Text von Bildern anzeigen.
- Sie möchten Suchmaschinen Text zur Verfügung stellen, den diese nutzen können; zum Beispiel können Suchmaschinen den Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist auf Mobiltelefonen und in Ländern, in denen die Bandbreite begrenzt oder teuer ist, besonders häufig.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt vorhanden ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden. Wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es zu lesen.
- **Inhalt.** Wenn Ihr Bild bedeutende Informationen liefert, geben Sie die gleichen Informationen in einem _kurzen_ `alt`-Text an – oder noch besser im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt zweimal geschrieben würden? Wenn das Bild ausreichend vom Haupttext beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags setzen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie ihn entweder innerhalb desselben `<a>`-Elements oder im `alt`-Attribut des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, verwenden Sie [CSS](/de/docs/Web/CSS/Reference/Properties/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Wenn Sie _wirklich nicht vermeiden können, das zu tun_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen besteht der Schlüssel darin, eine benutzerfreundliche Erfahrung zu bieten, selbst wenn die Bilder nicht gesehen werden können. So stellen Sie sicher, dass alle Benutzer keinen der Inhalte verpassen. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und sehen Sie, wie es aussieht. Sie werden schnell merken, wie hilfreich Alt-Text ist, wenn das Bild nicht angezeigt werden kann.

> [!NOTE]
> Lesen Sie unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu erfahren, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden können.

> [!NOTE]
> [HTML-Tags](https://scrimba.com/html-css-crash-course-c02l/~0d?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba ist eine interaktive Lektion, die Informationen zu Bildern und Minie-Challenges bietet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und stellen die Breite und Höhe des Bildes in Pixel dar.

Es gibt mehrere Möglichkeiten, die Breite und Höhe Ihres Bildes zu ermitteln. Auf dem Mac können Sie beispielsweise <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund dafür. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML empfangen hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen worden sind (und das wird oft der Fall sein, da Bilddateigrößen oft viel größer sind als HTML-Dateien), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wird.

Angenommen, wir haben etwas Text nach dem Bild:

```html
<h1>Images in HTML</h1>

<img
  src="dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
  title="A T-Rex on display in the Manchester University Museum" />
<blockquote>
  <p>
    But down there it would be dark now, and not the lovely lighted aquarium she
    imagined it to be during the daylight hours, eddying with schools of tiny,
    delicate animals floating and dancing slowly to their own serene currents
    and creating the look of a living painting. That was wrong, in any case. The
    ocean was different from an aquarium, which was an artificial environment.
    The ocean was a world. And a world is not art. Dorothy thought about the
    living things that moved in that world: large, ruthless and hungry. Like us
    up here.
  </p>
  <footer>- Rachel Ingalls, <cite>Mrs. Caliban</cite></footer>
</blockquote>
```

Sobald der Browser das HTML herunterlädt, beginnt er, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild der Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn sie fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Die Bewegung des Textes auf diese Weise ist für Benutzer extrem ablenkend, besonders wenn sie bereits begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür einräumen muss.

Das bedeutet, dass der Browser den umgebenden Inhalt nicht bewegen muss, wenn das Bild heruntergeladen wurde.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn sie fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen ausgezeichneten Artikel zur Geschichte dieses Features lesen Sie [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl, wie wir gesagt haben, es eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder _zu skalieren_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die pixelig, unscharf oder zu klein aussehen, und verschwenden Bandbreite, indem Sie ein Bild herunterladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie nicht das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild in der richtigen Größe zu haben, bevor Sie es auf Ihre Webseite stellen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie hierfür [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie auch `title`-Attribute zu Bildern hinzufügen, um bei Bedarf weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip bei Maus-Hover, genau wie Linktitel:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der folgendes liest: Ein T-Rex im Manchester University Museum.](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, die hauptsächlich darauf basieren, dass die Unterstützung von Screenreadern sehr unvorhersehbar ist und die meisten Browser ihn nicht anzeigen, es sei denn, Sie befinden sich mit einer Maus darüber (also z. B. kein Zugriff für Tastaturenutzer). Wenn Sie an weiteren Informationen darüber interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Haupttext des Artikels anstatt am Bild zu platzieren.

### Übung zur Bild-Einbettung

Jetzt sind Sie an der Reihe! Diese Aufgabe wird Sie dazu bringen, ein Bild einzubetten.

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Bearbeiten Sie das vorhandene {{htmlelement("img")}}-Tag, damit es das Bild unter der folgenden URL einbettet:

   ```url
   https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
   ```

   > [!NOTE]
   > Früher haben wir gesagt, niemals ohne Erlaubnis auf Bilder auf anderen Servern zu hotlinken, aber dieses Bild befindet sich in unserem GitHub-Repo, daher ist es in Ordnung.

3. Fügen Sie dem Bild ein `alt`-Attribut hinzu. Sie können überprüfen, ob der Alt-Text funktioniert, indem Sie die Bild-URL vorübergehend falsch schreiben.
4. Legen Sie die korrekte `width` und `height` des Bildes fest (Hinweis: es ist `200px` breit und `171px` hoch), experimentieren Sie dann mit anderen Werten, um zu sehen, welche Wirkung sie haben.
5. Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit durch Klicken auf den _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich hängen bleiben, können Sie die Lösung unter dem Codeblock ansehen.

```html live-sample___images-1
<img />
```

{{ EmbedLiveSample('images-1', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<img
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
  alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
  width="200"
  height="171"
  title="A T-Rex on display in the Manchester University Museum" />
```

</details>

## Medien-Assets und Lizenzen

Bilder (und andere Medientypen) im Web werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Seite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Besitzers einhalten.

### Verständnis der Lizenztypen

Schauen wir uns einige gängige Lizenzkategorien an, die Ihnen im Web begegnen werden.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Liedern, Büchern oder Software veröffentlichen oft ihre Arbeit unter geschlossenen Urheberrechtsschutz. Dies bedeutet, dass standardmäßig sie (oder ihr Verlag) die exklusiven Rechte zur Nutzung (z. B. Anzeige oder Verbreitung) ihrer Arbeit haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Möglichkeiten nutzen:

- Holen Sie sich schriftliche, explizite Erlaubnis vom Urheberrechtsinhaber.
- Zahlen Sie eine Lizenzgebühr, um sie zu nutzen. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("royalty-free") sein, oder es könnte "rights-managed" sein, was bedeutet, dass Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitfenster, geografischer Region, Branche oder Medientyp zahlen müssen.
- Begrenzen Sie Ihre Nutzung auf die, die in Ihrer Gerichtsbarkeit als [fair use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) angesehen werden könnte.

Autoren sind nicht verpflichtet, einen Urheberrechtsvermerk oder Lizenzbedingungen mit ihrem Werk zu inkludieren. Copyright besteht automatisch in einem Originalwerk der Autorschaft, sobald es in einem materiellen Medium erstellt wurde. Wenn Sie also ein Bild online finden und es keine Urheberrechtsvermerke oder Lizenzbedingungen gibt, ist der sicherste Weg, anzunehmen, dass es durch Copyright mit allen Rechten vorbehalten geschützt ist.

#### Permissiv

Wenn das Bild unter einer permissiven Lizenz veröffentlicht wird, wie z.B. MIT, BSD oder einer geeigneten Creative-Commons-Lizenz, müssen Sie keine Lizenzgebühr zahlen oder Erlaubnis einholen, um es zu verwenden. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie Folgendes tun müssen:

- Ein Link zur Originalquelle des Bildes bereitstellen und den Urheber nennen.
- Angeben, ob irgendwelche Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Werke, die mit dem Bild erstellt wurden, unter derselben Lizenz wie das Original veröffentlichen.
- Abgeleitete Werke überhaupt nicht teilen.
- Das Bild nicht in kommerziellen Arbeiten verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung, die das Bild verwendet, beifügen.

Sie sollten die anwendbare Lizenz zu den spezifischen Bedingungen, die Sie einhalten müssen, konsultieren.

> [!NOTE]
> Im Kontext von permissiven Lizenzen stoßen Sie möglicherweise auf den Begriff "Copyleft". Copyleft-Lizenzen (wie die GNU General Public License (GPL) oder "Share Alike" Creative Commons-Lizenzen) stipulieren, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wurde (dies ist bekannt als "Fork" der Originalsoftware), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts ebenfalls für andere zum Studium und zur Modifizierung zur Verfügung gestellt wird. Beachten Sie, dass im Allgemeinen Lizenzen, die für Software erstellt wurden, wie die GPL, nicht als gute Lizenzen für nicht-softwaretechnische Werke angesehen werden, da sie nicht für nicht-softwaretechnische Werke gedacht sind.

Erforschen Sie die oben in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie spezifizieren, zu erfahren.

#### Public Domain/CC0

Arbeit, die in die Public Domain freigegeben wurde, wird manchmal als "keine Rechte vorbehalten" bezeichnet — kein Urheberrecht gilt dafür, und sie kann ohne Erlaubnis und ohne Einhaltung von Lizenzbedingungen verwendet werden. Arbeit kann auf verschiedene Weise in die Public Domain gelangen, wie etwa durch Ablauf des Urheberrechts oder durch spezifisches Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, Arbeit in die Public Domain zu stellen, ist sie unter CC0 zu lizenzieren, einer speziellen Creative-Commons-Lizenz, die ein klares und unmissverständliches rechtliches Instrument für diesen Zweck bietet.

Beim Verwenden von Public-Domain-Bildern sollten Sie einen Nachweis erlangen, dass das Bild in der Public Domain ist, und den Nachweis für Ihre Unterlagen aufbewahren. Beispielsweise machen Sie einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus, und erwägen Sie, eine Seite zu Ihrer Website hinzuzufügen, die eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen enthält.

### Suche nach permissiv lizenzierten Bildern

Sie können permissiv lizenzierte Bilder für Ihre Projekte durch eine Bildsuchmaschine oder direkt aus Bildrepositorien finden.

Suchen Sie nach Bildern mit einer Beschreibung des Bildes, das Sie suchen, zusammen mit relevanten Lizenzbedingungen. Wenn Sie beispielsweise nach "gelber Dinosaurier" suchen, fügen Sie "Public-Domain-Bilder", "Public-Domain-Bibliothek", "offen lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Tools, die Ihnen helfen, Bilder mit permissiven Lizenzen zu finden. Bei Google beispielsweise gehen Sie zum Reiter "Bilder", um nach Bildern zu suchen, und klicken dann auf "Tools". Es gibt ein Dropdown-Menü "Nutzungsrechte" in der daraufhin angezeigten Symbolleiste, mit dem Sie gezielt nach Bildern unter Creative-Commons-Lizenzen suchen können.

Bildrepositorien, wie Flickr, ShutterStock und Pixabay, haben Suchoptionen, die es Ihnen erlauben, nur nach permissiv lizenzierten Bildern zu suchen. Einige Seiten vertreiben ausschließlich permissiv lizenzierte Bilder und Icons, wie Picryl und The Noun Project.

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, ist eine Frage des Findens der Lizenzdetails, Lesens der auf der Quellseite bereitgestellten Lizenz oder Anweisungsseite und Befolgung dieser Anweisungen. Seriöse Bildrepositorien legen ihre Lizenzbedingungen klar und leicht auffindbar dar.

## Bilder mit Figure und Bildunterschriften annotieren

Apropos Bildunterschriften: Es gibt mehrere Möglichkeiten, eine Bildunterschrift zu Ihrem Bild hinzuzufügen. Zum Beispiel würde nichts dagegen sprechen, dies zu tun:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <p>A T-Rex on display in the Manchester University Museum.</p>
</div>
```

Das ist in Ordnung. Es enthält den Inhalt, den Sie benötigen, und ist hübsch mit CSS stylbar. Doch hier gibt es ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Beschriftung verknüpft, was für Screenreader problematisch sein kann. Wenn Sie zum Beispiel 50 Bilder und Beschriftungen haben, welche Beschriftung gehört zu welchem Bild?

Eine bessere Lösung besteht darin, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese wurden genau für diesen Zweck erstellt: um einen semantischen Container für Figuren bereitzustellen und die Figur klar mit der Bildunterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>
    A T-Rex on display in the Manchester University Museum.
  </figcaption>
</figure>
```

Das {{htmlelement("figcaption")}}-Element sagt Browsern und unterstützender Technologie, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus Sicht der Zugänglichkeit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text unterschiedliche Rollen. Bildunterschriften nützen sogar Personen, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text dieselbe Funktionalität wie ein fehlendes Bild bietet. Daher sollten Bildunterschriften und `alt`-Text nicht dasselbe sagen, da sie beide erscheinen, wenn das Bild fehlt. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und zu sehen, wie es aussieht.

Eine Figur muss kein Bild sein. Es ist eine unabhängige Einheit von Inhalt, die:

- Ihre Bedeutung in einer kompakten, leicht zu erfassenden Weise darstellt.
- An mehreren Stellen im linearen Fluss der Seite eingesetzt werden könnte.
- Wichtige Informationen bereitstellt, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, einen Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Eine Figur erstellen

In dieser Aufgabe möchten wir, dass Sie den fertigen Code aus der vorherigen Aufgabe als Ausgangspunkt nehmen und ihn in eine Figur verwandeln:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie das `<img>`-Element mit einem {{htmlelement("figure")}}-Element.
3. Kopieren Sie den Text aus dem `title`-Attribut, setzen Sie ihn in ein {{htmlelement("figcaption")}}-Element unterhalb des `<img>`-Elements, und entfernen Sie dann das `title`-Attribut.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit durch Klicken auf den _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich hängen bleiben, können Sie die Lösung unter dem Codeblock ansehen.

```html live-sample___images-2
<img
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
  alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
  width="200"
  height="171"
  title="A T-Rex on display in the Manchester University Museum" />
```

{{ EmbedLiveSample('images-2', "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html
<figure>
  <img
    src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
    alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
    width="200"
    height="171" />
  <figcaption>
    A T-Rex on display in the Manchester University Museum
  </figcaption>
</figure>
```

</details>

## CSS-Hintergrundbilder

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Um beispielsweise auf jeder Seite ein Hintergrundbild auf jeden Absatz zu setzen, könnten Sie Folgendes tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das eingebettete Bild ist wohl einfacher zu positionieren und zu steuern als HTML-Bilder. Warum sich also mit HTML-Bildern beschäftigen? Wie oben angedeutet, sind CSS-Hintergrundbilder nur für Dekoration gedacht. Wenn Sie einfach etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch überhaupt keine semantische Bedeutung. Sie können keine Textequivalente haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild in Bezug auf Ihren Inhalt eine Bedeutung hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild reine Dekoration ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Kernmodulen im Detail behandeln).

## Zusammenfassung

Das ist alles für jetzt. Wir haben Bilder und Bildunterschriften im Detail behandelt.

Im nächsten Artikel werden wir Ihnen einige Tests vorstellen, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen zu HTML-Bildern, die wir Ihnen bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}
