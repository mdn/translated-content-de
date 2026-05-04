---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend mit dem {{htmlelement("img")}}-Element befassen, einschließlich der Grundlagen, der Annotation mit Bildunterschriften unter Verwendung von {{htmlelement("figure")}} und wie es sich auf {{Glossary("CSS", "CSS")}} Hintergrundbilder bezieht.

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
          <li>Der Begriff "replaced element" — was bedeutet er?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code> zum Verweisen auf eine Ressource.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um z. B. unangenehme ruckartige Updates der Benutzeroberfläche zu vermeiden, sobald ein Bild fertig geladen und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web — Dateigrößen klein halten.</li>
          <li>Verständnis von Medienlizenzierungen — verschiedene Lizenztypen, wie man sie einhält und wie man nach entsprechend lizenzierten Mediendateien sucht, um sie in Projekten zu verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "void element")}} (was bedeutet, dass es keine Kindinhalte haben kann und kein Schlusstag haben kann), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie auf der Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis an relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaur.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild folgendermaßen einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem `images`-Unterverzeichnis befindet, das sich im selben Verzeichnis wie die HTML-Seite befindet, dann würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und berücksichtigen sie für SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaur.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie verwenden möchten, auf Ihrer Website hosten, was bei einfachen Setups bedeutet, dass Sie die Bilder Ihrer Website auf demselben Server wie Ihr HTML halten. Außerdem ist es effizienter, relative URLs anstelle von absoluten URLs in Bezug auf die Wartung zu verwenden (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). Bei fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder auszuliefern.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht sind (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> [!WARNING]
> _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das ohne Erlaubnis auf der Website eines anderen gehostet wird. Dies wird "Hotlinking" genannt. Es wird als unethisch betrachtet, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes übernehmen würde, wenn jemand Ihre Seite besucht. Es lässt Ihnen auch keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, wird uns das folgende Ergebnis geben:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit "Images in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **replaced elements** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden und nicht durch den Inhalt des Elements selbst. Sie können mehr darüber bei {{Glossary("replaced_elements", "replaced elements")}} lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html) an.)

### Alternativer Text

Das nächste Attribut, das wir uns ansehen, ist `alt`. Sein Wert sollte eine textliche Beschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt werden kann oder es aufgrund einer langsamen Internetverbindung lange dauert, es zu rendern. Zum Beispiel könnte unser obiger Code so verändert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, ist, absichtlich Ihren Dateinamen falsch zu buchstabieren. Wenn beispielsweise unser Bildname als `dinosooooor.jpg` geschrieben wurde, würde der Browser das Bild nicht anzeigen und stattdessen den alternativen Text anzeigen:

![Der Titel "Images in HTML", aber dieses Mal wird das Dinosaurierbild nicht angezeigt, und an seiner Stelle steht der alt-Text.](alt-text.png)

Warum sollten Sie jemals alternativen Text sehen oder brauchen? Er kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um sich das Web vorlesen zu lassen. Tatsächlich ist es für die meisten Benutzer nützlich, alternativen Text zur Beschreibung von Bildern bereitzustellen.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Menschen verwenden immer noch textbasierte Browser wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den alternativen Text von Bildern anzeigen.
- Sie möchten vielleicht Text für Suchmaschinen bereitstellen, zum Beispiel können Suchmaschinen alternativen Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist besonders auf Mobiltelefonen und in Ländern, in denen Bandbreite begrenzt oder teuer ist, häufig.

Was genau sollten Sie in Ihrem `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Anders gesagt, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie einen leeren `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild wichtige Informationen liefert, geben Sie dieselben Informationen im _kurzen_ `alt`-Text an – oder noch besser im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie nervig wäre es für einen sehenden Benutzer, wenn alle Absätze doppelt im Hauptinhalt geschrieben wären? Wenn das Bild ausreichend durch den Haupttext beschrieben wurde, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags einfügen, um aus einem Bild einen Link zu machen, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie ihn entweder innerhalb desselben `<a>`-Elements oder innerhalb des `alt`-Attributs des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/Reference/Properties/text-shadow) dafür, anstatt den Text in ein Bild zu packen. Wenn Sie dies jedoch _wirklich nicht vermeiden können_, sollten Sie den Text innerhalb des `alt`-Attributs bereitstellen.

Im Wesentlichen liegt der Schlüssel darin, ein nutzbares Erlebnis zu liefern, auch wenn die Bilder nicht sichtbar sind. Dies stellt sicher, dass allen Benutzern keine Inhalte fehlen. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und sehen Sie, wie es aussieht. Sie werden bald feststellen, wie hilfreich alternativer Text ist, wenn das Bild nicht angezeigt werden kann.

> [!NOTE]
> Siehe unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Entscheidungsbaum für alt-Attribute](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu erfahren, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden können.

> [!NOTE]
> [HTML-Tags](https://scrimba.com/html-css-crash-course-c02l/~0d?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba ist eine interaktive Lektion, die Informationen über Bilder und Mini-Herausforderungen bietet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als Ganzzahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise herausfinden. Auf dem Mac können Sie zum Beispiel <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen der Bilddatei zu erhalten. Wenn wir zu unserem Beispiel zurückkehren, könnten wir das tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML empfangen hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und dies wird oft der Fall sein, da Bilddateien oft viel größer als HTML-Dateien sind), dann rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

Nehmen wir zum Beispiel an, dass wir etwas Text nach dem Bild haben:

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

Sobald der Browser das HTML heruntergeladen hat, beginnt er, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild auf der Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text auf der Seite nach unten verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts während des Ladens einer Seite im Browser und wenn es fertig ist, wenn keine Größe für das Bild angegeben wurde.](no-size.png)

Das Verschieben des Textes auf diese Weise ist für Benutzer äußerst ablenkend, insbesondere wenn sie bereits angefangen haben, ihn zu lesen, und es verursacht auch, dass der Browser die Seite neu rendert, was schlecht für die Leistung ist.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mithilfe der Attribute `width` und `height` angeben, weiß der Browser, wie viel Platz für das Bild eingeplant werden muss, noch bevor es heruntergeladen wurde.

Dies bedeutet, dass der Browser, wenn das Bild heruntergeladen wurde, den umgebenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts während des Ladens einer Seite im Browser und wenn es fertig ist, wenn die Bildgröße angegeben wurde.](size.png)

Für einen hervorragenden Artikel über die Geschichte dieser Funktion lesen Sie [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

Beachten Sie, dass, wenn es unter dem Bild keinen Inhalt gibt, das Neurendern kein Problem darstellt, da das Ändern der Bildgröße keine anderen Elemente verschieben wird. In diesem Fall können Sie nur die `width` des Bildes festlegen. Wenn Sie eine `width` festlegen, aber keine `height`, wird die `height` standardmäßig auf `auto` gesetzt, was bedeutet, dass sie auf einen Wert eingestellt ist, der das {{Glossary("Aspect_ratio", "Seitenverhältnis")}} des Bildes beibehält.

#### Bilder skalieren

Auch wenn es, wie wir gesagt haben, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _skalieren_.

Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, verschwommen oder zu klein aussehen und verschwenden Bandbreite durch das Herunterladen eines Bildes, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie nicht das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild in der richtigen Größe zu speichern, bevor Sie es auf Ihrer Webseite einfügen.

Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie auch `title`-Attribute zu Bildern hinzufügen, um weitere unterstützende Informationen bei Bedarf bereitzustellen. In unserem Beispiel könnten wir das tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltipp beim Überfahren mit der Maus, genau wie bei Linktiteln:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der mit "A T-Rex on display at the Manchester University Museum" beschriftet ist](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich basierend darauf, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie bewegen die Maus darüber (d.h. es ist z.B. nicht für Tastaturbenutzer zugänglich). Wenn Sie sich für weitere Informationen darüber interessieren, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext zu enthalten, anstatt sie an das Bild anzuhängen.

### Übung zur Bildeinbettung

Nun sind Sie an der Reihe zu spielen! Diese Aufgabe wird Sie dazu bringen, ein Bild einzubetten.

1. Klicken Sie auf **"Abspielen"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Bearbeiten Sie das bestehende {{htmlelement("img")}}-Tag so, dass es das Bild von der folgenden URL einbettet:

   ```url
   https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
   ```

   > [!NOTE]
   > Zuvor haben wir gesagt, dass Sie niemals ohne Erlaubnis Bilder auf anderen Servern hotlinken sollen, aber dieses Bild befindet sich in unserem GitHub-Repo, also ist es in Ordnung.

3. Fügen Sie dem Bild ein `alt`-Attribut hinzu. Sie können überprüfen, ob der alt-Text funktioniert, indem Sie vorübergehend die Bild-URL falsch schreiben.
4. Legen Sie die korrekte `width` und `height` des Bildes fest (Hinweis: es ist `200px` breit und `171px` hoch), und experimentieren Sie dann mit anderen Werten, um zu sehen, welche Wirkung sie haben.
5. Legen Sie einen `title` auf das Bild fest.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

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

## Medienressourcen und Lizenzierung

Bilder (und andere Medientypen) die Sie im Web finden, sind unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Seite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis zur Nutzung haben oder die Lizenzbedingungen des Eigentümers einhalten.

### Lizenztypen verstehen

Schauen wir uns einige häufige Lizenzkategorien an, die Sie wahrscheinlich im Web finden werden.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Liedern, Büchern oder Software veröffentlichen ihre Arbeit oft unter geschlossener Urheberrechtschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte zur Nutzung (zum Beispiel Anzeigen oder Verteilen) ihres Werkes haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Explizit schriftliche Erlaubnis des Urheberrechtinhabers einholen.
- Eine Lizenzgebühr für die Nutzung zahlen. Dies kann eine einmalige Gebühr für uneingeschränkte Nutzung ("royalty-free") sein, oder sie kann "rights-managed" sein, in welchem Fall Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitraum, geografischer Region, Branche oder Medientyp zahlen müssen.
- Ihre Nutzungen auf diejenigen beschränken, die in Ihrer Rechtsprechung als [faire Nutzung](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) angesehen würden.

Autoren sind nicht verpflichtet, einen Urhebervermerk oder Lizenzbedingungen mit ihrem Werk zu liefern. Urheberrecht existiert automatisch bei einem Originalwerk, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und es keine Urheberrechtshinweise oder Lizenzbedingungen gibt, ist es der sicherste Kurs, davon auszugehen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Freizügig

Wenn das Bild unter einer freizügigen Lizenz veröffentlicht wurde, wie z.B. [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause), oder einer geeigneten [Creative Commons (CC) Lizenz](https://creativecommons.org/chooser/), müssen Sie keine Lizenzgebühr zahlen oder um Erlaubnis zur Nutzung bitten. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie:

- Einen Link zur ursprünglichen Quelle des Bildes angeben und den Urheber würdigen müssen.
- Angeben müssen, ob Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Werke, die mit dem Bild erstellt wurden, unter derselben Lizenz wie das Original veröffentlichen müssen.
- Überhaupt keine abgeleiteten Werke teilen dürfen.
- Das Bild nicht in kommerziellen Arbeiten verwenden dürfen.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung bereitstellen müssen, die das Bild verwendet.

Sie sollten die anwendbare Lizenz für die spezifischen Bedingungen, denen Sie folgen müssen, konsultieren.

> [!NOTE]
> Sie könnten auf den Begriff "Copyleft" im Zusammenhang mit freizügigen Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons Lizenzen) legen fest, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die grundlegende Idee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wird (dies wird als "Fork" der ursprünglichen Software bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zur Untersuchung und Modifikation zur Verfügung gestellt wird. Beachten Sie, dass im Allgemeinen Lizenzen, die für Software entworfen wurden, wie die GPL, nicht als gute Lizenzen für Nicht-Softwarewerke angesehen werden, da sie nicht unter Berücksichtigung von Nicht-Softwarewerken entworfen wurden.

Erkunden Sie die zuvor in diesem Abschnitt bereitgestellten Links, um über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie festlegen, zu lesen.

#### Public Domain/CC0

Werke, die in die Public Domain freigegeben wurden, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es gilt kein Urheberrecht, und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Werke können auf verschiedene Weise in die Public Domain gelangen, wie z.B. durch Ablauf von Urheberrechten oder durch expliziten Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, Werke in die Public Domain zu geben, ist die Lizenzierung unter [CC0](https://wiki.creativecommons.org/wiki/CC0), einer spezifischen Creative Commons Lizenz, die ein klares und unmissverständliches rechtliches Instrument für diesen Zweck bietet.

Wenn Sie Public-Domain-Bilder verwenden, beschaffen Sie sich einen Nachweis dafür, dass das Bild in der Public Domain ist, und bewahren Sie den Nachweis für Ihre Unterlagen auf. Zum Beispiel, machen Sie einen Screenshot der ursprünglichen Quelle, auf der der Lizenzstatus klar angezeigt wird, und ziehen Sie in Betracht, auf Ihrer Website eine Seite hinzuzufügen, auf der die erworbenen Bilder zusammen mit ihren Lizenzanforderungen aufgeführt sind.

### Nach freizügig lizenzierten Bildern suchen

Sie können freizügig lizenzierte Bilder für Ihre Projekte mithilfe einer Bildersuchmaschine oder direkt aus Bilddatenbanken finden.

Suchen Sie nach Bildern mithilfe einer Beschreibung des Bildes, das Sie suchen, zusammen mit relevanten Lizenzbegriffen. Zum Beispiel, wenn Sie nach einem "gelben Dinosaurier" suchen, fügen Sie Begriffe wie "public domain images", "public domain image library", "open licensed images" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Tools, die Ihnen helfen können, Bilder mit freizügigen Lizenzen zu finden. Zum Beispiel, wenn Sie Google verwenden, gehen Sie zur "Images"-Registerkarte, um nach Bildern zu suchen, und klicken Sie dann auf "Tools". In der sich ergebenden Symbolleiste gibt es ein Dropdown-Menü "Nutzungsrechte", in dem Sie speziell nach Bildern unter Creative Commons Lizenzen suchen können.

Bilddatenbanken wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, mit denen Sie nur nach freizügig lizenzierten Bildern suchen können. Einige Websites verbreiten exklusiv freizügig lizenzierte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Das Einhalten der Lizenz, unter der das Bild veröffentlicht wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz oder die Anleitungsseite zu lesen, die von der Quelle bereitgestellt wird, und dann diesen Anweisungen zu folgen. Seriöse Bilddatenbanken machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften versehen

Apropos Bildunterschriften, es gibt mehrere Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen könnten. Zum Beispiel würde nichts dagegen sprechen, dies zu tun:

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

Das ist in Ordnung. Es enthält den benötigten Inhalt und kann mit CSS schön gestaltet werden. Aber es gibt ein Problem: Es gibt nichts, was das Bild semantisch mit seiner Bildunterschrift verknüpft, was für Screenreader problematisch sein kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist es, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese wurden genau für diesen Zweck geschaffen: um einen semantischen Container für Abbildungen bereitzustellen und die Abbildung mit der Bildunterschrift klar zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element zeigt Browsern und Hilfstechnologien an, dass die Bildunterschrift die anderen Inhalte des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus der Sicht der Barrierefreiheit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text unterschiedliche Rollen. Bildunterschriften kommen selbst Personen zugute, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text dieselbe Funktion wie ein abwesendes Bild bietet. Daher sollten Bildunterschriften und `alt`-Text nicht dasselbe sagen, weil beide angezeigt werden, wenn das Bild fehlt. Versuchen Sie, in Ihrem Browser Bilder auszuschalten und sehen Sie, wie es aussieht.

Eine Abbildung muss kein Bild sein. Es ist eine unabhängige Inhaltseinheit, die:

- Ihre Bedeutung auf eine kompakte, leicht verständliche Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite platziert werden könnte.
- Wesentliche Informationen bietet, die den Haupttext unterstützen.

Eine Abbildung könnte mehrere Bilder, ein Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Eine Abbildung erstellen

In dieser Aufgabe möchten wir, dass Sie den fertigen Code aus der vorherigen Aufgabe als Ausgangspunkt nehmen und ihn in eine Abbildung umwandeln:

1. Klicken Sie auf **"Abspielen"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Umhüllen Sie das `<img>`-Element mit einem {{htmlelement("figure")}}-Element.
3. Kopieren Sie den Text aus dem `title`-Attribut, setzen Sie ihn in ein {{htmlelement("figcaption")}}-Element unter dem `<img>`-Element und entfernen Sie das `title`-Attribut.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}}, zusammen mit den anderen `background-*`-Eigenschaften, wird verwendet, um die Positionierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jedem Absatz einer Seite zu platzieren, könnten Sie das tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist argumentativ einfacher zu positionieren und zu kontrollieren als HTML-Bilder. Warum sich also die Mühe mit HTML-Bildern machen? Wie angedeutet, sind CSS-Hintergrundbilder nur für Dekorationen gedacht. Wenn Sie nur etwas Schönes hinzufügen möchten, um Ihre Seite zu verschönern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keine gleichwertigen Textversionen haben, sind für Screenreader unsichtbar und so weiter. Das ist der Punkt, an dem HTML-Bilder glänzen!

Zusammengefasst: Wenn ein Bild Bedeutung in Bezug auf Ihren Inhalt hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur zur Dekoration dient, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen ausführlich behandeln).

## Zusammenfassung

Das ist alles für jetzt. Wir haben Bilder und Bildunterschriften im Detail behandelt.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir über HTML-Bilder bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}
