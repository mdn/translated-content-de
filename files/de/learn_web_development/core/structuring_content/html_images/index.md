---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text, was wirklich ziemlich langweilig war. Zum Glück dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel schauen wir uns an, wie Sie das {{htmlelement("img")}}-Element ausführlich verwenden, einschließlich der Grundlagen, der Annotation mit Bildunterschriften mittels {{htmlelement("figure")}} und wie es sich zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern verhält.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes HTML-Verständnis, wie es in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt wird. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Der Begriff "ersetztes Element" – was bedeutet er?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um z.B. unangenehme ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, wenn ein Bild geladen wurde und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web – Dateigrößen klein halten.</li>
          <li>Verstehen von Medien-Lizenzen – verschiedene Arten von Lizenzen, wie man sie einhält und wie man nach angemessen lizenzierten Mediendateien sucht, um sie in Projekten zu verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie fügen wir ein Bild in eine Webseite ein?

Um ein Bild in eine Webseite einzubetten, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "void-Element")}} (was bedeutet, es kann keinen Kindinhalt haben und kein End-Tag haben) und benötigt zwei Attribute, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie das `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird weiter unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Ein kurzer Primer zu URLs und Pfaden](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis zu relativen und absoluten URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaur.jpg` heißt und sich im gleichen Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn das Bild sich in einem Unterverzeichnis `images` befindet, das im gleichen Verzeichnis wie die HTML-Seite liegt, dann würden Sie es so einbetten:

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

Das Verknüpfen über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Website verwenden möchten, hosten; in einfachen Setups bedeutet dies, die Bilder Ihrer Website auf demselben Server wie Ihr HTML zu platzieren. Darüber hinaus ist es effizienter, relative URLs anstelle von absoluten URLs in Bezug auf die Wartung zu verwenden (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain zu enthalten). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz, unter der sie veröffentlicht sind, zu verwenden (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> [!WARNING]
> _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das ohne Erlaubnis auf der Website einer anderen Person gehostet wird. Dies wird als "Hotlinking" bezeichnet. Es wird als unethisch betrachtet, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes trägt, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Das vorherige Codebeispiel, entweder mit der absoluten oder der relativen URL, gibt uns folgendes Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einem Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden und nicht durch den Inhalt des Elements selbst. Sie können mehr darüber bei {{Glossary("replaced_elements", "ersetzte Elemente")}} lesen.

### Alternativtext

Das nächste Attribut, das wir uns ansehen, ist `alt`. Der Wert soll eine textuelle Beschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange benötigt, um gerendert zu werden. Unser obiger Code könnte also folgendermaßen geändert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn unser Bildname zum Beispiel `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den Alternativtext anzeigen:

![Der Titel "Bilder in HTML", aber diesmal wird das Dinosaurierbild nicht angezeigt, und der Alternativtext wird stattdessen angezeigt.](alt-text.png)

Warum könnten Sie also jemals Alternativtext sehen oder benötigen? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um sich das Web vorlesen zu lassen. Tatsächlich ist es nützlich, Alternativtext bereitzustellen, der Bilder beschreibt, da dies den meisten Benutzern hilft.
- Wie oben beschrieben, könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch Textbrowser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), der den Alternativtext von Bildern anzeigt.
- Sie möchten möglicherweise Text für Suchmaschinen bereitstellen; zum Beispiel können Suchmaschinen den Alternativtext mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist besonders häufig auf Mobiltelefonen und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt vorhanden ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten für dekorative Bilder [CSS-Hintergrundbilder](#css-hintergrundbilder) verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie einen leeren `alt=""` ein. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es zu lesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen bietet, geben Sie dieselben Informationen in einem _kurzen_ `alt`-Text an – oder sogar besser im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie nervig wäre es für einen sehenden Benutzer, wenn alle Absätze zweimal im Hauptinhalt geschrieben wären? Wenn das Bild im Haupttextkörper ausreichend beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags setzen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) angeben. In solchen Fällen können Sie es entweder innerhalb desselben `<a>`-Elements oder im `alt`-Attribut des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/Reference/Properties/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Wenn Sie dies jedoch wirklich _nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Grundsätzlich ist der Schlüssel, eine nutzbare Erfahrung zu liefern, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass allen Benutzern keine Inhalte fehlen. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und zu sehen, wie die Dinge aussehen. Sie werden schnell erkennen, wie hilfreich Alternativtext ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Sehen Sie sich unseren Leitfaden zu [Text-Alternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Entscheidungsbaum für Alternativtexte](https://www.w3.org/WAI/tutorials/images/decision-tree/) an, um zu lernen, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

> [!NOTE]
> [HTML-Tags](https://scrimba.com/html-css-crash-course-c02l/~0d?via=mdn) <sup>[_MDN-Partner zum Lernen_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba ist eine interaktive Lektion, die Informationen über Bilder und Mini-Herausforderungen bietet.

### Breite und Höhe

Sie können die [`width`](/de/docs/Web/HTML/Reference/Elements/img#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height)-Attribute verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und stellen die Breite und Höhe des Bildes in Pixeln dar.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Arten herausfinden. Beispielsweise können Sie auf dem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen der Bilddatei abzurufen. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Dafür gibt es einen sehr guten Grund. Das HTML Ihrer Seite und das Bild sind separate Ressourcen, die durch den Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML empfangen hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und dies ist oft der Fall, da Bilddateigrößen oft viel größer als HTML-Dateien sind), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

Angenommen, wir haben zum Beispiel Text nach dem Bild:

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

Sobald der Browser das HTML heruntergeladen hat, beginnt der Browser, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild der Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text auf der Seite nach unten verschieben, um das Bild darüber einzufügen:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt, und wenn er fertig ist, wenn keine Größe für das Bild angegeben wurde.](no-size.png)

Den Text so zu verschieben, ist für Benutzer extrem ablenkend, insbesondere wenn sie bereits begonnen haben, ihn zu lesen, und es führt auch dazu, dass der Browser die Seite neu rendern muss, was schlecht für die Leistung ist.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mit den `width`- und `height`-Attributen angeben, weiß der Browser, wie viel Platz er für das Bild reservieren muss, bevor es heruntergeladen wurde.

Das bedeutet, dass der Browser, wenn das Bild heruntergeladen wird, nicht den umgebenden Inhalt verschieben muss.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt, und wenn er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion lesen Sie [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

Beachten Sie, dass das Neurendern kein Problem darstellt, wenn es keinen Inhalt unterhalb des Bildes gibt, da das Ändern der Bildgröße andere Elemente nicht verschieben würde. In diesem Fall können Sie nur die `width` des Bildes festlegen. Wenn Sie eine `width` festlegen, aber keine `height`, wird die `height` standardmäßig auf `auto` gesetzt, was bedeutet, dass sie auf einen Wert gesetzt wird, der das {{Glossary("Aspect_ratio", "Seitenverhältnis")}} des Bildes beibehält.

#### Bilder skalieren

Obwohl es, wie wir gesagt haben, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder _umzuwandeln_.

Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, unscharf oder zu klein aussehen, und verschwenden Bandbreite, um ein Bild herunterzuladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie nicht das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten. Sie sollten einen Bildeditor verwenden, um das Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite einfügen.

Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute), können Sie auch `title`-Attribute zu Bildern hinzufügen, um bei Bedarf weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip, wenn die Maus darüber fährt, genau wie bei Linktiteln:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der "A T-Rex on display at the Manchester University Museum" liest](image-with-title.png)

Dies wird jedoch nicht empfohlen: `title` hat eine Reihe von Zugänglichkeitsproblemen, hauptsächlich basierend darauf, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie bewegen die Maus darüber (also z.B. keinen Zugriff auf Tastaturnutzer). Wenn Sie an weiteren Informationen hierzu interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext einzuschließen, anstatt an das Bild angehängt.

### Praxis zur Bildeinbettung

Jetzt sind Sie an der Reihe! Diese Aufgabe wird Sie dazu bringen, ein Bild einzubetten.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Bearbeiten Sie das bestehende {{htmlelement("img")}}-Element, sodass es das Bild `dinosaur_small.jpg` einbettet.
3. Fügen Sie ein `alt`-Attribut zum Bild hinzu. Sie können überprüfen, ob der Alternativtext funktioniert, indem Sie den Bilddateinamen vorübergehend falsch schreiben.
4. Setzen Sie die korrekte `width` und `height` des Bildes (Tipp: es ist `200px` breit und `171px` hoch), dann experimentieren Sie mit anderen Werten, um die Wirkung zu sehen.
5. Fügen Sie einen `title` zum Bild hinzu.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

```html live-sample___images-1
<img />
```

{{ EmbedLiveSample('images-1', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

```html
<img
  src="dinosaur_small.jpg"
  alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
  width="200"
  height="171"
  title="A T-Rex on display in the Manchester University Museum" />
```

</details>

## Medienressourcen und Lizenzierung

Bilder (und andere Medientypen) die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Seite verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers erfüllen.

### Lizenztypen verstehen

Sehen wir uns einige der häufigsten Kategorien von Lizenzen an, die Sie im Web wahrscheinlich finden werden.

#### Alle Rechte vorbehalten

Autoren von Originalwerken wie Liedern, Büchern oder Software veröffentlichen ihr Werk oft unter geschütztem Urheberrecht. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig das exklusive Recht haben, ihr Werk zu nutzen (zum Beispiel anzuzeigen oder zu verbreiten). Wenn Sie urheberrechtlich geschützte Bilder mit einer Lizenz _alle Rechte vorbehalten_ verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Erhalten Sie eine ausdrückliche, schriftliche Genehmigung des Urheberrechtsinhabers.
- Bezahlen Sie eine Lizenzgebühr, um sie zu verwenden. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung sein ("lizenzfrei") oder es kann "rights-managed" sein, in welchem Fall Sie möglicherweise bestimmte Gebühren pro Nutzung nach Zeitfenster, geografischer Region, Branche oder Medientyp zahlen müssen, usw.
- Beschränken Sie Ihre Nutzung auf die, die als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) in Ihrer Rechtsordnung gelten würden.

Autoren sind nicht verpflichtet, einen Copyright-Hinweis oder Lizenzbedingungen mit ihrem Werk beizufügen. Das Urheberrecht besteht automatisch an einem Originalwerk der Autorschaft, sobald es in einem erkennbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und es keine Copyright-Hinweise oder Lizenzbedingungen gibt, ist der sicherste Weg, davon auszugehen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Erlaubnisbasierte Lizenz

Wenn das Bild unter einer erlaubnisbasierten Lizenz wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC)-Lizenz](https://creativecommons.org/chooser/) veröffentlicht wird, müssen Sie keine Lizenzgebühr zahlen oder eine Erlaubnis einholen, um es zu verwenden. Es gibt jedoch verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie müssen:

- Einen Link zur Originalquelle des Bildes bereitstellen und den Schöpfer anerkennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Jegliche abgeleiteten Werke, die mit dem Bild erstellt wurden, unter derselben Lizenz wie das Originalwerk teilen.
- Keine abgeleiteten Werke teilen.
- Das Bild in keinem kommerziellen Werk verwenden.
- Eine Kopie der Lizenz zusammen mit einer Veröffentlichung, die das Bild verwendet, beifügen.

Sie sollten die geltende Lizenz für die spezifischen Bedingungen, die Sie beachten müssen, konsultieren.

> [!NOTE]
> Möglicherweise stoßen Sie im Zusammenhang mit erlaubnisbasierten Lizenzen auf den Begriff "Copyleft". Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike"-Creative-Commons-Lizenzen) sehen vor, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Fork" der Originalsoftware bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch für andere verfügbar gemacht wird, um es zu studieren und zu modifizieren. Beachten Sie, dass Lizenzen, die für Software entworfen wurden, wie z.B. die GPL, im Allgemeinen nicht als geeignete Lizenzen für nicht-softwarebasierte Werke angesehen werden, da sie nicht mit nicht-softwarebasierten Werken im Sinn erstellt wurden.

Erkunden Sie die in diesem Abschnitt früher bereitgestellten Links, um über die unterschiedlichen Lizenztypen und die von ihnen festgelegten Bedingungen zu lesen.

#### Gemeinfrei/CC0

Werke, die in die Gemeinfreiheit freigegeben werden, werden manchmal als "keine Rechte vorbehalten" bezeichnet – es gibt kein Urheberrecht dafür und es kann ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Ein Werk kann durch verschiedene Mittel gemeinfrei werden, wie zum Beispiel durch das Ablaufen des Urheberrechts oder das ausdrückliche Verzichten auf Rechte.

Eine der effektivsten Möglichkeiten, Werke der Gemeinfreiheit zuzuführen, besteht darin, sie unter [CC0](https://wiki.creativecommons.org/wiki/CC0), einer speziellen Creative Commons Lizenz, zu lizensieren, die ein klares und unmissverständliches rechtliches Mittel für diesen Zweck bereitstellt.

Beim Verwenden von gemeinfreien Bildern, holen Sie sich einen Nachweis, dass das Bild gemeinfrei ist und bewahren Sie den Nachweis für Ihre Aufzeichnungen auf. Nehmen Sie zum Beispiel einen Screenshot der Originalquelle auf, bei dem der Lizenzstatus klar angezeigt wird, und erwägen Sie, Ihrer Website eine Seite mit einer Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen hinzuzufügen.

### Suchen nach erlaubnisbasierten Bildern

Sie können erlaubnisbasierte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bildarchiven finden.

Suchen Sie nach Bildern mit einer Beschreibung des gesuchten Bildes zusammen mit relevanten Lizenzbedingungen. Wenn Sie beispielsweise nach "gelber Dinosaurier" suchen, fügen Sie "gemeinfreie Bilder", "gemeinfreies Bildarchiv", "offen lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen verfügen über Tools, die Ihnen helfen, Bilder mit erlaubnisbasierten Lizenzen zu finden. Wenn Sie beispielsweise Google verwenden, gehen Sie zur Registerkarte "Bilder", um nach Bildern zu suchen, und klicken Sie auf "Tools". Es gibt ein Dropdown-Menü "Nutzungsrechte" in der resultierenden Symbolleiste, in dem Sie speziell nach Bildern unter Creative-Commons-Lizenzen suchen können.

Bildarchivseiten, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/), haben Suchoptionen, die es Ihnen ermöglichen, nur nach erlaubnisbasierten Bildern zu suchen. Einige Seiten vertreiben ausschließlich erlaubnisbasierte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, bedeutet, die Lizenzdetails zu finden, die Lizenz oder die Anleitungsseite der Quelle zu lesen und dann diese Anweisungen zu befolgen. Seriöse Bildarchive machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften annotieren

Apropos Bildunterschriften, es gibt eine Reihe von Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen könnten. Zum Beispiel wäre nichts verkehrt daran, dies zu tun:

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

Das ist in Ordnung. Es enthält die benötigten Inhalte und lässt sich schön mit CSS stylen. Aber es gibt hier ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Bildunterschrift verknüpft, was Probleme für Screenreader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist die Verwendung der HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Diese sind genau dafür geschaffen worden: Um einen semantischen Container für Abbildungen bereitzustellen und die Abbildung klar mit der Bildunterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element teilt Browsern und unterstützender Technologie mit, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus Sicht der Barrierefreiheit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Texte unterschiedliche Rollen. Bildunterschriften sind auch für Menschen, die das Bild sehen können, von Vorteil, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Texte die gleiche Funktion wie ein fehlendes Bild bereitstellen. Daher sollten Bildunterschriften und `alt` Texte nicht dasselbe sagen, da sie beide erscheinen, wenn das Bild fehlt. Versuchen Sie, Ihre Browserbilder auszuschalten und sehen Sie, wie es aussieht.

Eine Abbildung muss kein Bild sein. Es ist eine eigenständige Einheit von Inhalt, die:

- Ihr Anliegen auf kompakte, verständliche Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite platziert werden könnte.
- Wichtige Informationen bereitstellt, die den Haupttext unterstützen.

Eine Abbildung könnte mehrere Bilder, einen Codeschnipsel, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Eine Abbildung erstellen

In dieser Aufgabe möchten wir, dass Sie den fertigen Code aus der vorherigen Aufgabe als Ausgangspunkt nehmen und in eine Abbildung umwandeln:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie das `<img>`-Element in ein {{htmlelement("figure")}}-Element ein.
3. Kopieren Sie den Text aus dem `title`-Attribut und setzen Sie ihn in ein {{htmlelement("figcaption")}}-Element unterhalb des `<img>`-Elements, dann entfernen Sie das `title`-Attribut.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

```html live-sample___images-2
<img
  src="dinosaur_small.jpg"
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
    src="dinosaur_small.jpg"
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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und andere `background-*` Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jeden Absatz einer Seite zu setzen, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist wohl einfacher zu positionieren und zu kontrollieren als HTML-Bilder. Warum sich also mit HTML-Bildern abmühen? Wie angedeutet, sind CSS-Hintergrundbilder nur für Dekorationen gedacht. Wenn Sie Ihre Seite einfach nur visuell aufwerten möchten, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keinen Textäquivalenten enthalten, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammengefasst: Wenn ein Bild im Hinblick auf Ihre Inhalte eine Bedeutung hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur für Dekorationen da ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Kernmodulen ausführlicher behandeln).

## Zusammenfassung

Das ist alles für jetzt. Wir haben Bilder und Bildunterschriften im Detail behandelt.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen über HTML-Bilder verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}
