---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Inhaltsarten) in Webseiten einzubetten. In diesem Artikel werden wir uns ausführlich mit dem {{htmlelement("img")}}-Element befassen, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften mittels {{htmlelement("figure")}} und der detaillierten Darstellung, wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textsemantik auf Ebene von <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätzen</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Begriff "ersetztes Element" — was bedeutet das?</li>
          <li>Grundsyntax des <code>&lt;img&gt;</code>-Tags</li>
          <li>Verwendung von <code>src</code> zur Angabe einer Ressource.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um unangenehme ruckartige Updates der Benutzeroberfläche zu vermeiden, wenn ein Bild fertig geladen und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web — Dateigrößen klein halten.</li>
          <li>Verständnis der Lizenzierung von Medienressourcen — verschiedene Lizenztypen, deren Einhaltung und wie man nach angemessen lizenzierten Mediendateien sucht, um sie in Projekten zu verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (was bedeutet, dass es keinen Kinderinhalt haben und kein Endtag besitzen kann), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie auf der Seite einbetten möchten. Wie das `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild, das es laden kann.

Das [`alt`-Attribut wird unten beschrieben](#alternative_texte).

> [!NOTE]
> Sie sollten [Eine kurze Einführung zu URLs und Pfaden](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis an relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Zum Beispiel, wenn Ihr Bild `dinosaur.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, können Sie das Bild folgendermaßen einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem `images`-Unterverzeichnis befindet, das sich im selben Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

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

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Website verwenden möchten, hosten, was bei einfachen Setups bedeutet, dass Sie die Bilder für Ihre Website auf demselben Server wie Ihr HTML halten. Darüber hinaus ist es effizienter, relative URLs anstelle von absoluten URLs zu verwenden, was die Wartung betrifft (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). Bei fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder bereitzustellen.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> [!WARNING] > _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das ohne Erlaubnis auf der Website eines anderen gehostet wird. Dies wird "Hotlinking" genannt. Es gilt als unethisch, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes zahlen würde, wenn jemand Ihre Seite besucht. Es lässt Ihnen auch keine Kontrolle darüber, ob das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, liefert uns folgendes Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden, nicht durch den Inhalt des Elements selbst. Mehr darüber erfahren Sie unter {{Glossary("replaced_elements", "ersetzte Elemente")}}.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [auf GitHub ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html) an).

### Alternative Texte

Das nächste Attribut, das wir uns anschauen, ist `alt`. Sein Wert soll eine textliche Beschreibung des Bildes sein, für Situationen, in denen das Bild nicht gesehen/angezeigt werden kann oder lange zum Rendern benötigt, aufgrund einer langsamen Internetverbindung. Unser obiger Code könnte zum Beispiel wie folgt modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, um Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu buchstabieren. Wenn beispielsweise unser Bildname als `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den Alt-Text anzeigen:

![Der Titel "Bilder in HTML", aber dieses Mal wird das Dinosaurier-Bild nicht angezeigt, und Alt-Text wird stattdessen angezeigt.](alt-text.png)

Warum würden Sie also jemals Alt-Text sehen oder benötigen? Er kann aus mehreren Gründen hilfreich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um sich das Web vorlesen zu lassen. Tatsächlich ist es für die meisten Benutzer nützlich, Alt-Text zur Beschreibung von Bildern zu haben.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder Pfades falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch nur Textbrowser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), der den Alt-Text von Bildern anzeigt.
- Sie möchten möglicherweise Text bereitstellen, den Suchmaschinen nutzen können; zum Beispiel können Suchmaschinen Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Übertragungsvolumen zu reduzieren und Ablenkungen zu vermeiden. Dies ist besonders auf Mobiltelefonen gebräuchlich und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Anders ausgedrückt, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber falls Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen liefert, geben Sie dieselben Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie lästig wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt doppelt geschrieben wären? Wenn das Bild ausreichend durch den Haupttextkörper beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}}-Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [barrierefreie Linktexte](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie diesen entweder im selben `<a>`-Element oder im `alt`-Attribut des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schattenwurf benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow), anstatt den Text in ein Bild zu setzen. Wenn Sie dies _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen ist der Schlüssel, eine nutzbare Erfahrung zu bieten, auch wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Versuchen Sie, in Ihrem Browser die Bilder auszuschalten, und schauen Sie, wie die Dinge aussehen. Sie werden schnell feststellen, wie hilfreich Alt-Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Siehe unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) um zu lernen, wie man ein `alt`-Attribut für Bilder in verschiedenen Situationen verwendet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als Ganzzahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise herausfinden. Beispielsweise können Sie auf dem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. In unserem Beispiel könnten wir Folgendes tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Dafür gibt es einen sehr guten Grund. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML empfangen hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateigrößen oft viel größer sind als HTML-Dateien), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

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

Wenn das Bild geladen ist, fügt der Browser das Bild der Seite hinzu. Da das Bild Platz benötigt, muss der Browser den Text nach unten auf der Seite verschieben, um das Bild darüber einzupassen:

![Vergleich des Seitenlayouts beim Laden einer Seite durch den Browser und nachdem es abgeschlossen ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Den Text auf diese Weise zu verschieben, ist für Benutzer äußerst ablenkend, insbesondere wenn sie bereits begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür vorsehen muss.

Dies bedeutet, dass der Browser, wenn das Bild heruntergeladen wurde, den umgebenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts beim Laden einer Seite durch den Browser und nachdem es abgeschlossen ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen hervorragenden Artikel über die Geschichte dieser Funktion siehe [Das Festlegen von Höhe und Breite bei Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl wir gesagt haben, dass es gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder _neu zu skalieren_.
>
> Wenn Sie die Bildgröße zu groß festlegen, erhalten Sie Bilder, die körnig, unscharf oder zu klein aussehen, und verschwenden Bandbreite, um ein Bild herunterzuladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht einhalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild in der korrekten Größe zu platzieren, bevor Sie es auf Ihrer Webseite bereitstellen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie auch `title`-Attribute zu Bildern hinzufügen, um bei Bedarf weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir Folgendes tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip beim Mouseover, genau wie Linktitel:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der "Ein T-Rex im Manchester University Museum" lautet](image-with-title.png)

Dies ist jedoch nicht zu empfehlen — `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich basierend auf der Tatsache, dass die Unterstützung von Screenreadern sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, man schwebt mit der Maus darüber (also z.B. kein Zugriff für Tastaturnutzer). Wenn Sie an weiteren Informationen darüber interessiert sind, lesen Sie [Die Herausforderungen und Prüfungen des Attributs Title](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext bereitzustellen, anstatt sie an das Bild anzuhängen.

### Übung zum Einbetten von Bildern

Jetzt sind Sie an der Reihe! Diese Aufgabe wird Sie dazu bringen, ein Bild einzubetten.

1. Klicken Sie im folgenden Codeblock auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Bearbeiten Sie das vorhandene {{htmlelement("img")}}-Tag so, dass es das Bild einbettet, das sich an folgender URL befindet:

   ```url
   https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
   ```

   > [!NOTE]
   > Vorhin haben wir gesagt, dass man nie Bilder auf anderen Servern ohne Erlaubnis hotlinken soll, aber dieses Bild befindet sich in unserem GitHub-Repo, daher ist es in Ordnung.

3. Fügen Sie dem Bild ein `alt`-Attribut hinzu. Sie können überprüfen, ob der Alt-Text funktioniert, indem Sie die Bild-URL vorübergehend falsch schreiben.
4. Stellen Sie die korrekte `width` und `height` des Bildes ein (Hinweis: es ist `200px` breit und `171px` hoch), experimentieren Sie dann mit anderen Werten, um zu sehen, welchen Effekt das hat.
5. Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich festsitzen, können Sie die Lösung unter dem Codeblock ansehen.

```html live-sample___images-1
<img />
```

{{ EmbedLiveSample('images-1', "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

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

Bilder (und andere Medienressourcentypen), die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Website verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Lassen Sie uns einige gängige Kategorien von Lizenzen betrachten, die Sie im Web wahrscheinlich finden werden.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihre Werke oft unter geschlossenem Urheberrechtsschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig ausschließliche Rechte zur Nutzung (z.B. Anzeige oder Verbreitung) ihrer Werke haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Holen Sie sich eine ausdrückliche, schriftliche Genehmigung vom Urheberrechtsinhaber ein.
- Bezahlen Sie eine Lizenzgebühr, um sie zu nutzen. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("lizenzgebührenfrei") sein, oder es könnte "rechteverwaltet" sein, in welchem Fall Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitfenster, geografischer Region, Branche oder Medientyp zahlen müssen.
- Beschränken Sie Ihre Nutzungen auf solche, die in Ihrem Zuständigkeitsbereich als [Faires Verwenden](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fairer Umgang](https://copyrightservice.co.uk/copyright/p27_work_of_others) gelten würden.

Autoren sind nicht verpflichtet, einen Copyright-Hinweis oder Lizenzbedingungen mit ihrem Werk hinzuzufügen. Urheberrecht besteht automatisch in einem Originalerzeugnis der Urheberschaft, sobald es in einem greifbaren Medium erschaffen wird. Wenn Sie online ein Bild finden und es keine Urheberrechtshinweise oder Lizenzbedingungen gibt, ist die sicherste Vorgehensweise, anzunehmen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Freizügig

Wenn das Bild unter einer freizügigen Lizenz wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://creativecommons.org/chooser/) veröffentlicht wurde, müssen Sie keine Lizenzgebühr zahlen oder um Erlaubnis bitten, es zu verwenden. Trotzdem gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel müssten Sie möglicherweise:

- Einen Link zur Originalquelle des Bildes bereitstellen und seinen Urheber nennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Alle Werke, die unter Verwendung des Bildes erstellt wurden, unter der gleichen Lizenz wie das Original freigeben.
- Keine abgeleiteten Werke überhaupt teilen.
- Das Bild in keinem kommerziellen Werk verwenden.
- Eine Kopie der Lizenz zusammen mit einer Veröffentlichung, die das Bild verwendet, beifügen.

Sie sollten die zutreffende Lizenz für die spezifischen Bedingungen konsultieren, die Sie befolgen müssen.

> [!NOTE]
> Sie könnten auf den Begriff "Copyleft" im Zusammenhang mit freizügigen Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike"-Creative-Commons-Lizenzen) legen fest, dass abgeleitete Werke unter der gleichen Lizenz wie das Original freigegeben werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Fork" der Originalsoftware bezeichnet), ebenfalls unter der gleichen Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch für andere zum Studieren und Modifizieren verfügbar gemacht wird. Beachten Sie, dass Lizenzen, die ursprünglich für Software entworfen wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für nicht-softwarebasierte Werke angesehen werden, da sie nicht mit nicht-softwarebasierten Werken im Sinn entworfen wurden.

Erforschen Sie die oben in diesem Abschnitt bereitgestellten Links, um über die verschiedenen Lizenztypen und die Arten von Bedingungen zu lesen, die sie angeben.

#### Gemeinfrei/CC0

Werke, die in die Gemeinfreiheit freigegeben wurden, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es gelten keine Urheberrechte, und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Werke können auf verschiedene Weisen in die Gemeinfreiheit gelangen, wie zum Beispiel durch das Ablaufen von Urheberrechten oder spezifisches Rechteverzicht.

Eine der effektivsten Möglichkeiten, Werke in die Gemeinfreiheit zu geben, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer spezifischen Creative-Commons-Lizenz, die ein klares und eindeutiges rechtliches Werkzeug für diesen Zweck bietet.

Wenn Sie Bilder der Gemeinfreiheit verwenden, besorgen Sie sich einen Nachweis dafür, dass das Bild gemeinfrei ist und bewahren Sie den Nachweis für Ihre Unterlagen auf. Nehmen Sie beispielsweise einen Screenshot der Originalquelle mit dem eindeutig dargestellten Lizenzierungsstatus und ziehen Sie in Betracht, eine Seite Ihrer Website mit einer Liste der erworbenen Bilder und deren Lizenzanforderungen hinzuzufügen.

### Suche nach freizügig lizenzierten Bildern

Sie können freizügig lizenzierte Bilder für Ihre Projekte mithilfe einer Bildersuchmaschine oder direkt aus Bildrepositorien finden.

Suchen Sie nach Bildern mit einer Beschreibung des Bildes, das Sie suchen, zusammen mit relevanten Lizenzbegriffen. Zum Beispiel, wenn Sie nach einem "gelben Dinosaurier" suchen, fügen Sie "Bilder der Gemeinfreiheit", "Bibliothek der Gemeinfreiheitsbilder", "Bilder mit offener Lizenz" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Werkzeuge, die Ihnen helfen, speziell nach Bildern mit freizügigen Lizenzen zu suchen. Beispielsweise, wenn Sie Google verwenden, gehen Sie zur Registerkarte "Bilder", um nach Bildern zu suchen, klicken Sie dann auf "Werkzeuge". Es gibt ein Dropdown-Menü "Nutzungsrechte" in der resultierenden Symbolleiste, in dem Sie speziell nach Bildern unter Creative-Commons-Lizenzen suchen können.

Bild-Repository-Sites, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/), haben Suchoptionen, die es Ihnen ermöglichen, nur nach freizügig lizenzierten Bildern zu suchen. Einige Websites verteilen ausschließlich freizügig lizenzierte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild freigegeben wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz oder die vom Anbieter bereitgestellte Anleitungsseite zu lesen und diese Anweisungen zu befolgen. Seriöse Bildrepositorien machen ihre Lizenzbedingungen klar und einfach zu finden.

## Bilder mit Figuren und Figurenunterschriften annotieren

Apropos Bildunterschriften: Es gibt eine Reihe von Möglichkeiten, wie Sie einer Bild ein Untertitel hinzufügen könnten. Es würde zum Beispiel nichts dagegen sprechen, dies zu tun:

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

Dies ist in Ordnung. Es enthält die benötigten Inhalte und ist mit CSS gut gestaltbar. Aber es gibt hier ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Unterschrift verbindet, was Probleme für Screenreader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Unterschriften haben, welche Unterschrift gehört zu welchem Bild?

Eine bessere Lösung besteht darin, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese wurden genau dafür erstellt: Um einen semantischen Container für Figuren bereitzustellen und die Figur klar mit der Beschriftung zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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
> Aus Sicht der Barrierefreiheit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Text unterschiedliche Rollen. Bildunterschriften kommen auch Personen zugute, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Text dieselbe Funktion wie ein fehlendes Bild bietet. Daher sollten Bildunterschriften und `alt`-Text nicht einfach dasselbe sagen, weil beide erscheinen, wenn das Bild fehlt. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und zu sehen, wie es aussieht.

Eine Figur muss kein Bild sein. Sie ist eine eigenständige Einheit von Inhalten, die:

- Ihre Bedeutung kompakt und leicht verständlich ausdrückt.
- Könnte an mehreren Stellen im linearen Fluss der Seite stehen.
- Bietet wichtige Informationen, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder sein, ein Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes.

### Eine Figur erstellen

In dieser Aufgabe möchten wir, dass Sie den fertigen Code aus der vorherigen Aufgabe als Ausgangspunkt nehmen und ihn in eine Figur verwandeln:

1. Klicken Sie im folgenden Codeblock auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Umwickeln Sie das `<img>`-Element mit einem {{htmlelement("figure")}}-Element.
3. Kopieren Sie den Text aus dem `title`-Attribut, legen Sie ihn in ein {{htmlelement("figcaption")}}-Element unter dem `<img>`-Element, und entfernen Sie dann das `title`-Attribut.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich festsitzen, können Sie die Lösung unter dem Codeblock ansehen.

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jeden Absatz einer Seite zu setzen, könnten Sie Folgendes tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild lässt sich vermutlich leichter positionieren und steuern als HTML-Bilder. Warum sollte man sich also mit HTML-Bildern abmühen? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie einfach etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch überhaupt keine semantische Bedeutung. Sie können keine Textequivalente haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild eine Bedeutung in Bezug auf Ihren Inhalt hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen ausführlich behandeln).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images).

## Zusammenfassung

Das war's fürs Erste. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel werden wir das Tempo steigern und uns anschauen, wie man HTML verwendet, um Video- und Audioinhalte auf Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
