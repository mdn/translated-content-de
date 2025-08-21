---
title: HTML Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}

Zu Beginn war das Web nur Text und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend mit der Verwendung des {{htmlelement("img")}}-Elements befassen, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften mithilfe von {{htmlelement("figure")}} und der detaillierten Beschreibung, wie es in Bezug zu {{Glossary("CSS", "CSS")}} Hintergrundbildern steht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Vertrautheit, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt wird. Text-Level-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Begriff "ersetztes Element" — was bedeutet das?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um unangenehme, ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, wenn ein Bild fertig geladen und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web — Halten Sie Dateigrößen klein.</li>
          <li>Verstehen der Lizenzierung von Medienressourcen — verschiedene Arten von Lizenzen, wie man sie einhält und wie man nach entsprechend lizenzierten Mediendateien sucht, die in Projekten verwendet werden sollen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein Bild auf eine Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (es kann keinen untergeordneten Inhalt haben und kein End-Tag), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild zeigt, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Eine schnelle Einführung zu URLs und Pfaden](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild also beispielsweise `dinosaurier.jpg` genannt wird und im gleichen Verzeichnis wie Ihre HTML-Seite liegt, könnten Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem `images`-Unterverzeichnis befindet, das sich im gleichen Verzeichnis wie die HTML-Seite befindet, dann würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen diese zu SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaurier.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Website verwenden möchten, selbst hosten, was in einfachen Umgebungen bedeutet, dass Sie die Bilder für Ihre Website auf demselben Server wie Ihr HTML belassen. Darüber hinaus ist es effizienter, relative URLs anstelle von absoluten URLs zu verwenden, was die Wartung betrifft (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie gemäß den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> [!WARNING]
> _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das auf der Website einer anderen Person gehostet wird, _ohne Erlaubnis_. Dies wird "Hotlinking" genannt. Es wird als unethisch angesehen, da jemand anderes die Bandbreite für die Bereitstellung des Bildes bezahlen würde, wenn jemand Ihre Seite besucht. Es lässt Ihnen auch keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, ergibt das folgende Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) und nicht durch den Inhalt des Elements selbst definiert werden. Sie können mehr über sie unter {{Glossary("replaced_elements", "ersetzte Elemente")}} lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [auf GitHub ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativtext

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Sein Wert soll eine textuelle Beschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt werden kann oder das Rendern aufgrund einer langsamen Internetverbindung lange dauert. Zum Beispiel könnte unser obiger Code so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn zum Beispiel unser Bildname `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den `alt`-Text anzeigen:

![Der Titel "Bilder in HTML", aber dieses Mal wird das Dinosaurier-Bild nicht angezeigt, und stattdessen wird der Alternativtext angezeigt.](alt-text.png)

Warum sollten Sie also jemals alternativen Text sehen oder benötigen? Es kann aus einer Reihe von Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screen-Reader](https://en.wikipedia.org/wiki/Screen_reader), um das Web für ihn zu lesen. Tatsächlich ist das Vorhandensein von Alt-Text, um Bilder zu beschreiben, für die meisten Benutzer nützlich.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder Pfads falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch Text-Only-Browser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), der den Alt-Text von Bildern anzeigt.
- Sie möchten möglicherweise Text bereitstellen, den Suchmaschinen nutzen können; zum Beispiel können Suchmaschinen Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben die Bilder deaktiviert, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist vor allem auf Mobiltelefonen üblich und in Ländern, in denen die Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen liefert, geben Sie die gleichen Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt doppelt geschrieben wären? Wenn das Bild im Haupttext ausreichend beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}}-Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Link-Text](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie entweder den Text im selben `<a>`-Element schreiben oder im `alt`-Attribut des Bildes – je nachdem, was für Ihren Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder setzen. Wenn Ihre Hauptüberschrift z. B. einen Schlagschatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Wenn Sie dies jedoch _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen ist der Schlüssel, eine nutzbare Erfahrung zu liefern, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass keine Benutzer Inhalte verpassen. Versuchen Sie, in Ihrem Browser die Bilder zu deaktivieren und sehen Sie, wie sie aussehen. Sie werden schnell erkennen, wie hilfreich Alt-Text ist, wenn das Bild nicht angezeigt werden kann.

> [!NOTE]
> Lesen Sie unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu erfahren, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden können.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und stellen die Breite und Höhe des Bildes in Pixeln dar.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Arten herausfinden. Auf dem Mac können Sie zum Beispiel <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei abzurufen. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML empfangen hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateigrößen oft viel größer sind als HTML-Dateien), dann rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

Zum Beispiel, nehmen wir an, wir haben etwas Text nach dem Bild:

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

Sobald das Bild geladen ist, fügt der Browser das Bild der Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten verschieben, um das Bild darüber zu passen:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt, und wenn er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Das Verschieben des Textes auf diese Weise ist extrem ablenkend für Benutzer, insbesondere wenn sie bereits begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, dann weiß der Browser, wie viel Platz er benötigt, bevor das Bild heruntergeladen wurde.

Dies bedeutet, dass der Browser, wenn das Bild heruntergeladen ist, nicht den umgebenden Inhalt verschieben muss.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt, und wenn er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion, siehe [Die Angabe von Höhe und Breite bei Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl, wie wir gesagt haben, es gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _vergrößern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, unscharf oder zu klein aussehen, und verschwenden Bandbreite, indem Sie ein Bild herunterladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

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

Dies gibt uns ein Tooltip bei Maus-Hover, genau wie Link-Titel:

![Das Dinosaurier-Bild mit einem Tooltip-Titel darüber, der A T-Rex im Manchester University Museum anzeigt](image-with-title.png)

Jedoch wird dies nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, hauptsächlich basierend auf der Tatsache, dass die Unterstützung von Screenreadern sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie bewegen den Cursor darüber (also z.B. kein Zugang für Tastaturbenutzer). Wenn Sie an mehr Informationen darüber interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext zu haben, anstatt sie an das Bild anzuhängen.

### Praktische Übung: Bild einbetten

Jetzt sind Sie an der Reihe! Diese Aufgabe soll Sie dazu bringen, ein Bild einzubetten.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Bearbeiten Sie das vorhandene {{htmlelement("img")}}-Tag, sodass es das Bild einbettet, das sich unter der folgenden URL befindet:

   ```url
   https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
   ```

   > [!NOTE]
   > Vorhin sagten wir, niemals ohne Erlaubnis Bilder auf anderen Servern zu verlinken, aber dieses Bild befindet sich in unserem GitHub-Repositorium, daher ist es in Ordnung.

3. Fügen Sie dem Bild ein `alt`-Attribut hinzu. Sie können überprüfen, ob der Alt-Text funktioniert, indem Sie die Bild-URL vorübergehend falsch schreiben.
4. Setzen Sie die richtige `width` und `height` des Bildes (Tipp: es ist `200px` breit und `171px` hoch), experimentieren Sie dann mit anderen Werten, um zu sehen, welchen Effekt sie haben.
5. Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter dem Code block anzeigen.

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

## Medienressourcen und Lizenzierung

Bilder (und andere Medienressourcentypen), die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Seite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis der Lizenztypen

Sehen wir uns einige allgemeine Lizenzkategorien an, auf die Sie wahrscheinlich im Web stoßen werden.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihr Werk häufig unter geschlossenem Urheberrechtsschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig das ausschließliche Recht haben, ihr Werk zu verwenden (beispielsweise anzuzeigen oder zu verbreiten). Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Holen Sie sich die ausdrückliche, schriftliche Erlaubnis des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr für die Nutzung. Dies kann eine einmalige Gebühr für die unbegrenzte Nutzung sein ("lizenzfrei") oder sie kann "rechtenbeschränkt" sein, was bedeutet, dass Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitfenster, geografischem Gebiet, Branche oder Medientyp usw. zahlen müssen.
- Beschränken Sie Ihre Nutzungen auf diejenigen, die als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) in Ihrer Gerichtsbarkeit betrachtet werden.

Autoren müssen keine Urheberrechtsbenachrichtigung oder Lizenzbedingungen mit ihrem Werk einschließen. Das Urheberrecht entsteht automatisch bei einem Originalwerk in einer greifbaren Form. Wenn Sie also ein Bild online finden und es keine Urheberrechtsvermerke oder Lizenzbedingungen gibt, ist es der sicherste Weg, davon auszugehen, dass es urheberrechtlich geschützt ist, alle Rechte vorbehalten.

#### Erlaubt

Wenn das Bild unter einer erlaubten Lizenz veröffentlicht wurde, wie z.B. [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://creativecommons.org/chooser/), müssen Sie keine Lizenzgebühr zahlen oder die Erlaubnis zur Nutzung einholen. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie Folgendes tun müssen:

- Einen Link zur ursprünglichen Quelle des Bildes bereitstellen und seinen Urheber anerkennen.
- Angeben, ob Änderungen vorgenommen wurden.
- Jegliche abgeleiteten Werke, die mit dem Bild erstellt wurden, unter derselben Lizenz wie das Original veröffentlichen.
- Überhaupt keine abgeleiteten Werke teilen.
- Das Bild nicht in kommerziellen Arbeiten verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung, die das Bild verwendet, beifügen.

Sie sollten die maßgebliche Lizenz für die spezifischen Bedingungen konsultieren, die Sie befolgen müssen.

> [!NOTE]
> Sie könnten auf den Begriff "Copyleft" im Zusammenhang mit erlaubten Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons-Lizenzen) verlangen, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die grundlegende Idee ist, dass ein neues Projekt, das mit dem Code eines Copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Fork" des Originalsoftwareprojekts bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zur Verfügung steht, um ihn zu studieren und zu ändern. Beachten Sie, dass Lizenzen, die ursprünglich für Software erstellt wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für nicht-softwaremäßige Werke angesehen werden, da sie nicht mit nicht-softwaremäßigen Werken im Kopf erstellt wurden.

Erkunden Sie die früher in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen zu erfahren, die sie angeben.

#### Public Domain/CC0

In die Public Domain eingeführte Werke werden manchmal als "keine Rechte vorbehalten" bezeichnet – kein Urheberrecht gilt dafür, und es kann ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Ein Werk kann auf verschiedene Weise in die Public Domain gelangen, wie z.B. durch Ablauf des Urheberrechts oder durch spezifisch Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, ein Werk in die Public Domain einzuführen, besteht darin, es unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren – eine spezielle Creative Commons-Lizenz, die ein klares und eindeutiges juristisches Werkzeug für diesen Zweck bietet.

Wenn Sie öffentliche Domain-Bilder verwenden, beschaffen Sie sich einen Nachweis darüber, dass das Bild in der Public Domain ist, und bewahren Sie diesen Nachweis für Ihre Unterlagen auf. Beispiel: Machen Sie einen Screenshot der Originalquelle mit dem deutlich angezeigten Lizenzstatus und ziehen Sie in Betracht, eine Seite auf Ihrer Website hinzuzufügen, die eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen enthält.

### Suche nach erlaubten Bildern

Sie können erlaubte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt von Bildrepositorys finden.

Suchen Sie nach Bildern, indem Sie eine Beschreibung des von Ihnen gesuchten Bildes zusammen mit den entsprechenden Lizenzbegriffe verwenden. Wenn Sie beispielsweise nach einem "gelben Dinosaurier" suchen, fügen Sie "öffentliche Domain-Bilder", "öffentliche Domain-Bibliothek", "offen lizenziert Bilder" oder ähnliche Begriffe zu Ihrer Suchanfrage hinzu.

Einige Suchmaschinen bieten Tools, um Ihnen zu helfen, gezielt nach Bildern mit erlaubten Lizenzen zu suchen. Wenn Sie beispielsweise Google verwenden, wechseln Sie zur Registerkarte "Bilder", um nach Bildern zu suchen, und klicken Sie dann auf "Tools". Es gibt ein Dropdown-Menü "Nutzungsrechte" in der resultierenden Symbolleiste, in der Sie speziell nur nach Bildern unter Creative Commons-Lizenzen suchen können.

Bildrepositorys wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, die es Ihnen ermöglichen, gezielt nach erlaubten Bildern zu suchen. Einige Seiten verteilen ausschließlich erlaubte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild freigegeben wurde, besteht daraus, die Lizenzdetails zu finden, die Lizenz oder die Anweisungsseite, die von der Quelle bereitgestellt wird, zu lesen und dann diesen Anweisungen zu folgen. Seriöse Bildrepositorys machen ihre Lizenzbedingungen klar und einfach zu finden.

## Bilder mit Figuren und Bildunterschriften versehen

Apropos Bildunterschriften, es gibt mehrere Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen könnten. Es würde zum Beispiel nichts dagegen sprechen, dies zu tun:

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

Das ist in Ordnung. Es enthält den benötigten Inhalt und ist schön mit CSS stylbar. Aber es gibt hier ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Bildunterschrift verknüpft, was Probleme für Screenreader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist die Verwendung der HTML-{{htmlelement("figure")}} und {{htmlelement("figcaption")}}-Elemente. Diese wurden genau für diesen Zweck erstellt: um einen semantischen Container für Figuren bereitzustellen und die Figur klar mit der Bildunterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element sagt Browsern und Hilfstechnologien, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einer Perspektive der Barrierefreiheit erfüllen Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text unterschiedliche Rollen. Bildunterschriften sind auch für Menschen von Vorteil, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text dieselbe Funktion wie ein abwesendes Bild bietet. Daher sollten Bildunterschriften und `alt`-Text nicht einfach dasselbe sagen, weil sie beide erscheinen, wenn das Bild fehlt. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren, und sehen Sie, wie es aussieht.

Eine Figur muss kein Bild sein. Es ist eine eigenständige Einheit von Inhalten, die:

- Ihren Sinn kompakt und leicht verständlich ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite stehen könnte.
- Wesentliche Informationen liefert, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, einen Codeausschnitt, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Eine Figur erstellen

In dieser Aufgabe möchten wir, dass Sie den fertigen Code aus der vorherigen Aufgabe als Ausgangspunkt nehmen und ihn in eine Figur verwandeln:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Platzieren Sie das `<img>`-Element in einem {{htmlelement("figure")}}-Element.
3. Kopieren Sie den Text aus dem `title`-Attribut, legen Sie ihn in ein {{htmlelement("figcaption")}}-Element unter das `<img>`-Element und entfernen Sie das `title`-Attribut.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter dem Code block anzeigen.

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-{{cssxref("background-image")}}-Eigenschaft und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jedem Absatz einer Seite zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist zweifellos leichter zu positionieren und zu steuern als HTML-Bilder. Warum also mit HTML-Bildern belästigen? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie lediglich etwas Hübsches zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können kein Textäquivalent haben, sind für Screenreader unsichtbar, und so weiter. Genau hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild in Bezug auf Ihren Inhalt eine Bedeutung hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur zur Dekoration dient, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Kernmodulen im Detail behandeln).

## Zusammenfassung

Das war's fürs Erste. Wir haben Bilder und Bildunterschriften ausführlich behandelt.

Im nächsten Artikel werden wir Ihnen einige Tests anbieten, mit denen Sie überprüfen können, wie gut Sie die Informationen zu HTML-Bildern verstanden und behalten haben, die wir bereitgestellt haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}
