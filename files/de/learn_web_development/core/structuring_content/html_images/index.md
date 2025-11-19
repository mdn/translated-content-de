---
title: HTML Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 0c5ffb96e0bc78052597ce91fc25d44ced58ff94
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}

In den Anfängen des Webs gab es nur Text, was wirklich ziemlich langweilig war. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns intensiv mit der Verwendung des {{htmlelement("img")}}-Elements befassen, einschließlich der Grundlagen, der Annotation mit Bildunterschriften mithilfe von {{htmlelement("figure")}} und der Beschreibung, wie es sich auf {{Glossary("CSS", "CSS")}} Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantik auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Der Begriff "ersetztes Element" — was bedeutet er?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code> zur Angabe einer Ressource.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um beispielsweise unangenehme ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, wenn ein Bild fertig geladen und angezeigt wurde.</li>
          <li>Optimierung von Medienressourcen für das Web — halten Sie die Dateigröße gering.</li>
          <li>Verständnis der Lizenzierung von Medienressourcen — verschiedene Lizenzarten, wie man sie einhält und wie man nach entsprechend lizenzierten Mediendateien sucht, um sie in Projekten zu verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie fügen wir ein Bild in eine Webseite ein?

Um ein Bild in eine Webseite einzufügen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (bedeutet, es kann keinen Kindinhalt haben und kein End-Tag), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild zeigt, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild, das es laden könnte.

Das [`alt`-Attribut wird unten beschrieben](#alternative_bildtexte).

> [!NOTE]
> Sie sollten [Ein kurzes Handbuch zu URLs und Pfaden](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild also beispielsweise `dinosaur.jpg` heißt und sich im gleichen Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild wie folgt einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem `images`-Unterverzeichnis befindet, das sich im gleichen Verzeichnis wie die HTML-Seite befindet, dann würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen sie zur SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaur.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch über seine absolute URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Website verwenden möchten, selbst hosten, was in einfachen Setups bedeutet, die Bilder für Ihre Website auf dem gleichen Server wie Ihr HTML zu halten. Zusätzlich ist es wartungstechnisch effizienter, relative URLs gegenüber absoluten URLs zu verwenden (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder bereitzustellen.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz, unter der sie veröffentlicht wurden, zu verwenden (siehe unten [Medienquellen und Lizenzierung](#medienquellen_und_lizenzierung) für weitere Informationen).

> [!WARNING]
> Richten Sie das `src`-Attribut _nie_ auf ein Bild, das auf der Website eines anderen gehostet wird, _ohne Erlaubnis_. Dies wird "Hotlinking" genannt. Es wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes bezahlt, wenn jemand Ihre Seite besucht. Es lässt Ihnen auch keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, ergibt uns folgendes Ergebnis:

![Ein grundlegendes Bild eines Dinosauriers, eingebettet in einen Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden, nicht durch den Inhalt des Elements selbst. Sie können mehr über sie auf {{Glossary("replaced_elements", "ersetzte Elemente")}} lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [auf GitHub ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html) an).

### Alternative Bildtexte

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Sein Wert soll eine textuelle Beschreibung des Bildes sein, für Situationen, in denen das Bild nicht gesehen/angezeigt werden kann oder lange braucht, um aufgrund einer langsamen Internetverbindung geladen zu werden. Unser oben stehender Code könnte zum Beispiel so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn beispielsweise unser Bildname als `dinosooooor.jpg` geschrieben wurde, würde der Browser das Bild nicht anzeigen und stattdessen den `alt`-Text anzeigen:

![Der Titel "Bilder in HTML", aber dieses Mal wird das Dinosaurierbild nicht angezeigt und der Alt-Text tritt an seine Stelle.](alt-text.png)

Warum sollten Sie überhaupt alt-Text sehen oder benötigen? Er kann in einer Reihe von Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um das Web für sich lesen zu lassen. Tatsächlich ist das Vorhandensein von alt-Text zur Beschreibung von Bildern für die meisten Benutzer nützlich.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder des Pfads falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Manche Leute verwenden immer noch textbasierte Browser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den alt-Text von Bildern anzeigen.
- Sie möchten möglicherweise Text bereitstellen, den Suchmaschinen verwenden können; beispielsweise können Suchmaschinen alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist besonders bei Mobiltelefonen und in Ländern, in denen die Bandbreite begrenzt oder teuer ist, üblich.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es zu lesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen liefert, geben Sie dieselben Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze doppelt im Hauptinhalt geschrieben wären? Wenn das Bild durch den Haupttextkörper ausreichend beschrieben ist, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags einfügen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie ihn entweder im gleichen `<a>`-Element oder im `alt`-Attribut des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schattenwurf benötigt, verwenden Sie stattdessen [CSS](/de/docs/Web/CSS/Reference/Properties/text-shadow), anstatt den Text in ein Bild zu bringen. Wenn Sie dies wirklich nicht vermeiden können, sollten Sie den Text im `alt`-Attribut angeben.

Im Wesentlichen ist der Schlüssel, eine nutzbare Erfahrung zu bieten, auch wenn die Bilder nicht zu sehen sind. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und sehen Sie, wie es aussieht. Sie werden schnell merken, wie hilfreich alt-Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Sehen Sie sich unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) an, um zu lernen, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

> [!NOTE]
> [HTML-Tags](https://scrimba.com/html-css-crash-course-c02l/~0d?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba ist eine interaktive Lektion mit Informationen zu Bildern und Mini-Herausforderungen.

### Breite und Höhe

Sie können die [`width`](/de/docs/Web/HTML/Reference/Elements/img#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height)-Attribute verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Es gibt mehrere Möglichkeiten, die Breite und Höhe Ihres Bildes herauszufinden. Beispielsweise können Sie auf einem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen der Bilddatei zu erhalten. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Der HTML-Code Ihrer Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht erhalten wurden (und dies wird oft der Fall sein, da die Dateigrößen von Bildern oft größer sind als die von HTML-Dateien), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

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

Sobald der Browser das HTML herunterlädt, beginnt der Browser, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz beansprucht, muss der Browser den Text nach unten schieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts während der Browser eine Seite lädt und wenn er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Den Text auf diese Weise zu verschieben, ist für Benutzer äußerst ablenkend, insbesondere wenn sie ihn bereits zu lesen begonnen haben, und es führt dazu, dass der Browser die Seite neu rendert, was schlecht für die Leistung ist.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mit den Attributen `width` und `height` angeben, weiß der Browser, wie viel Platz er für das Bild reserverien muss, bevor es heruntergeladen wurde.

Das bedeutet, dass der Browser, wenn das Bild heruntergeladen wurde, den umgebenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts während der Browser eine Seite lädt und wenn er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen ausgezeichneten Artikel zur Geschichte dieser Funktion, siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

Beachten Sie, dass es kein Problem gibt, wenn sich kein Inhalt unterhalb des Bildes befindet, da das Ändern der Bildgröße keine anderen Elemente verschiebt. In diesem Fall können Sie nur die `width` des Bildes festlegen. Wenn Sie eine `width` festlegen, aber keine `height`, lautet die Standardhöhe `auto`, was bedeutet, dass sie auf einen Wert gesetzt wird, der das {{Glossary("Aspect_ratio", "Seitenverhältnis")}} des Bildes beibehält.

#### Bilder anpassen

Obwohl es, wie wir gesagt haben, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _ändern_.

Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, verschwommen oder zu klein aussehen, und verschwenden Bandbreite, indem Sie ein Bild herunterladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie nicht das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild in der korrekten Größe zu erstellen, bevor Sie es auf Ihre Webseite setzen.

Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) dafür verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie Bildern auch `title`-Attribute hinzufügen, um bei Bedarf zusätzliche unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip bei Mouseover, ganz wie bei Linktiteln:

![Das Dinosaurierbild, mit einem Tooltip darüber, das "A T-Rex on display at the Manchester University Museum" liest](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, die hauptsächlich darauf beruhen, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie sind mit einer Maus darüber (also kein Zugriff für Tastaturbenutzer). Wenn Sie an weiteren Informationen hierzu interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext anstatt am Bild anzuhängen.

### Bild-Einbettungspraxis

Es ist jetzt an der Zeit, dass Sie selbst spielen! Diese Aufgabe wird Sie dazu bringen, ein Bild einzubetten.

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Bearbeiten Sie das vorhandene {{htmlelement("img")}}-Tag, sodass es das Bild von der folgenden URL einfügt:

   ```url
   https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
   ```

   > [!NOTE]
   > Früher haben wir gesagt, dass man niemals ohne Erlaubnis auf Bilder auf anderen Servern hotlinken sollte, aber dieses Bild befindet sich in unserem GitHub-Repo, daher ist es in Ordnung.

3. Fügen Sie dem Bild ein `alt`-Attribut hinzu. Sie können überprüfen, ob der alt-Text funktioniert, indem Sie die Bild-URL vorübergehend falsch schreiben.
4. Setzen Sie die korrekte `width` und `height` des Bildes (Tipp: es ist `200px` breit und `171px` hoch) und experimentieren Sie mit anderen Werten, um zu sehen, wie der Effekt ist.
5. Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich festsitzen, können Sie die Lösung unter dem Codeblock ansehen.

```html live-sample___images-1
<img />
```

{{ EmbedLiveSample('images-1', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

```html
<img
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
  alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
  width="200"
  height="171"
  title="A T-Rex on display in the Manchester University Museum" />
```

</details>

## Medienquellen und Lizenzierung

Bilder (und andere Medientypen) die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Site verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis zur Verwendung haben oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Lassen Sie uns einige gängige Kategorien von Lizenzen betrachten, auf die Sie im Web wahrscheinlich stoßen werden.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Liedern, Büchern oder Software veröffentlichen ihr Werk oft unter geschlossenem Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig das ausschließliche Recht haben, ihr Werk zu nutzen (zum Beispiel anzuzeigen oder zu verteilen). Wenn Sie urheberrechtlich geschützte Bilder mit einem "alle Rechte vorbehalten"-Lizenz nutzen möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Holen Sie sich ausdrücklich schriftliche Erlaubnis vom Urheberrechtsinhaber.
- Zahlen Sie eine Lizenzgebühr für die Nutzung. Dies kann eine Einmalgebühr für unbegrenzte Nutzung ("lizenzfrei") sein oder es kann "rechteverwaltet" sein, in welchem Fall Sie möglicherweise spezifische Gebühren pro Nutzung, je nach Zeitfenster, geografischer Region, Branche oder Medientyp, usw., zahlen müssen.
- Beschränken Sie Ihre Nutzung auf diejenigen, die in Ihrem Rechtsgebiet als [faire Nutzung](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Framing](https://copyrightservice.co.uk/copyright/p27_work_of_others) gelten würden.

Autoren sind nicht verpflichtet, einen Copyright-Hinweis oder Lizenzbedingungen mit ihrem Werk zu versehen. Das Urheberrecht entsteht automatisch in einem Originalwerk, sobald es in einem greifbaren Medium geschaffen wurde. Wenn Sie also ein Bild online finden und keine Copyright-Vermerke oder Lizenzbedingungen vorhanden sind, ist der sicherste Kurs, anzunehmen, dass es durch das Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Freizügige Lizenzen

Wenn das Bild unter einer freizügigen Lizenz wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://creativecommons.org/chooser/) veröffentlicht wird, müssen Sie keine Lizenzgebühr zahlen oder eine Erlaubnis zur Verwendung einholen. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel müssten Sie möglicherweise:

- Einen Link zur Originalquelle des Bildes bereitstellen und dessen Ersteller nennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Werke, die mithilfe des Bildes erstellt werden, unter derselben Lizenz wie das Original freigeben.
- Keine abgeleiteten Werke teilen.
- Das Bild nicht in kommerziellen Arbeiten verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung bereitstellen, die das Bild verwendet.

Sie sollten die jeweils geltende Lizenz für die spezifischen Bedingungen, die Sie einhalten müssen, konsultieren.

> [!NOTE]
> Sie könnten auf den Begriff „Copyleft“ im Zusammenhang mit freizügigen Lizenzen stoßen. Copyleft-Lizenzen (z.B. die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Weitergabe unter gleichen Bedingungen" Creative Commons-Lizenzen) verlangen, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines Projekts mit Copyleft-Lizenz erstellt wurde (dies wird als „Fork“ der Originalsoftware bezeichnet), auch unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zur Studie und Modifikation zur Verfügung gestellt wird. Beachten Sie, dass Lizenzen, die für Software konzipiert wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für Nicht-Software-Werke angesehen werden, da sie nicht mit Nicht-Software-Werken im Hinterkopf entworfen wurden.

Erkunden Sie die zuvor in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die von ihnen spezifizierten Bedingungen zu erfahren.

#### Gemeinfreiheit/CC0

Arbeiten, die in die Gemeinfreiheit entlassen werden, werden manchmal als „keine Rechte vorbehalten“ bezeichnet — kein Urheberrecht gilt dafür, und es kann ohne Erlaubnis verwendet werden und ohne irgendwelche Lizenzbedingungen erfüllen zu müssen. Arbeiten können auf verschiedene Arten in die Gemeinfreiheit kommen, z.B. durch Ablauf des Urheberrechts oder durch ausdrücklichen Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, Werke in die Gemeinfreiheit zu versetzen, ist die Lizenzierung unter [CC0](https://creativecommons.org/public-domain/cc0/), eine spezielle Creative Commons-Lizenz, die ein klares und eindeutiges rechtliches Werkzeug zu diesem Zweck bietet.

Beim Verwenden gemeinfreier Bilder sollten Sie den Nachweis erbringen, dass das Bild gemeinfrei ist und den Beweis für Ihre Aufzeichnungen behalten. Beispielsweise könnten Sie einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus erstellen und in Betracht ziehen, eine Seite Ihrer Website hinzuzufügen, die eine Liste der erworbenen Bilder mit ihren Lizenzanforderungen enthält.

### Suchen nach freizügig lizenzierten Bildern

Sie können freizügig lizenzierte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bilderepositories finden.

Suchen Sie nach Bildern mithilfe einer Beschreibung des Bildes, das Sie suchen, zusammen mit relevanten Lizenzbegriffen. Wenn Sie beispielsweise nach einem „gelben Dinosaurier“ suchen, fügen Sie „gemeinfreie Bilder“, „gemeinfreies Bildarchiv“, „open licensed images“ oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen verfügen über Tools, die Ihnen helfen, Bilder mit freizügigen Lizenzen zu finden. Wenn Sie beispielsweise Google verwenden, gehen Sie zum Tab „Bilder“, um nach Bildern zu suchen, und klicken Sie dann auf „Tools“. In der resultierenden Symbolleiste gibt es ein Dropdown-Menü „Nutzungsrechte“, in dem Sie gezielt nach Bildern unter Creative Commons-Lizenzen suchen können.

Bildrepository-Seiten wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, die es Ihnen ermöglichen, gezielt nach freizügig lizenzierten Bildern zu suchen. Einige Seiten verteilen ausschließlich freizügig lizenzierte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, besteht darin, die Lizenzdetails zu finden, die Lizenzseite oder Anweisungsseite der Quelle zu lesen und diese Anweisungen zu befolgen. Vertrauenswürdige Bildrepositorien machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften versehen

Apropos Bildunterschriften, es gibt mehrere Möglichkeiten, wie Sie Ihrem Bild eine Bildunterschrift hinzufügen könnten. Zum Beispiel wäre nichts daran falsch, dies zu tun:

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

Das ist in Ordnung. Es enthält die Inhalte, die Sie benötigen, und kann mit CSS schön gestylt werden. Aber hier gibt es ein Problem: Es gibt nichts, was das Bild semantisch mit seiner Bildunterschrift verbindet, was für Screenreader Probleme verursachen kann. Wenn Sie beispielsweise 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung besteht darin, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Sie wurden genau zu diesem Zweck geschaffen: um einen semantischen Container für Figuren bereitzustellen und die Figur klar mit der Bildunterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element teilt Browsern und Hilfstechnologien mit, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus Sicht der Barrierefreiheit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text unterschiedliche Rollen. Bildunterschriften sind auch für Menschen von Vorteil, die das Bild sehen können, während der [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text dieselbe Funktionalität bietet wie ein fehlendes Bild. Daher sollten Bildunterschriften und `alt`-Text nicht einfach dasselbe aussagen, da sie beide erscheinen, wenn das Bild nicht angezeigt wird. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und sehen Sie, wie es aussieht.

Eine Figur muss kein Bild sein. Sie ist eine unabhängige Inhaltseinheit, die:

- Ihren Sinn auf kompakte, leicht verständliche Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite eingefügt werden könnte.
- Wichtige Informationen zur Unterstützung des Haupttexts bereitstellt.

Eine Figur könnte aus mehreren Bildern, einem Codeausschnitt, Audio, Video, Gleichungen, einer Tabelle oder etwas anderem bestehen.

### Eine Figur erstellen

In dieser Aufgabe möchten wir, dass Sie den fertigen Code aus der vorherigen Aufgabe als Ausgangspunkt nehmen und ihn in eine Figur umwandeln:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Umschließen Sie das `<img>`-Element mit einem {{htmlelement("figure")}}-Element.
3. Kopieren Sie den Text aus dem `title`-Attribut und setzen Sie ihn in ein {{htmlelement("figcaption")}}-Element unterhalb des `<img>`-Elements, dann entfernen Sie das `title`-Attribut.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich festsitzen, können Sie die Lösung unter dem Codeblock ansehen.

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

Ihr fertiges HTML sollte so aussehen:

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

Sie können CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-{{cssxref("background-image")}}-Eigenschaft und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung des Hintergrundbildes zu steuern. Um beispielsweise ein Hintergrundbild für jeden Absatz einer Seite zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist leichter zu positionieren und zu kontrollieren als HTML-Bilder. Warum sich also mit HTML-Bildern befassen? Wie bereits angedeutet, sind CSS-Hintergrundbilder ausschließlich zur Dekoration gedacht. Wenn Sie einfach etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keine Textequivalente haben, sind für Screenreader unsichtbar usw. Hier brillieren HTML-Bilder!

Zusammenfassend: Wenn ein Bild eine Bedeutung in Bezug auf Ihren Inhalt hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen ausführlich behandeln).

## Zusammenfassung

Das war's fürs Erste. Wir haben Bilder und Bildunterschriften ausführlich behandelt.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir Ihnen über HTML-Bilder vermittelt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}
