---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text, was wirklich ziemlich langweilig war. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Inhaltstypen) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend damit befassen, wie das {{htmlelement("img")}}-Element verwendet wird, einschließlich der Grundlagen, das Annotieren mit Bildunterschriften mittels {{htmlelement("figure")}} und Details darüber, wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textsemantik auf Elementebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > sowie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Begriff "ersetztes Element" — was bedeutet das?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um z.B. unangenehme ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, wenn ein Bild fertig geladen wurde und angezeigt wird.</li>
          <li>Optimierung von Multimedia-Assets für das Web — die Dateigrößen klein halten.</li>
          <li>Verständnis von Lizenzierungen für Multimedia-Assets — verschiedene Lizenztypen, wie man diesen nachkommt und wie man nach entsprechend lizenzierten Mediendateien für Projekte sucht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein Bild auf einer Webseite anzuzeigen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "void element")}} (bedeutet, es kann keine untergeordneten Inhalte haben und kann kein End-Tag haben), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie bei dem `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternative_texte).

> [!NOTE]
> Sie sollten [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Wissen über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaurier.jpg` heißt und im gleichen Verzeichnis wie Ihre HTML-Seite liegt, könnten Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn das Bild in einem `images`-Unterverzeichnis liegt, das sich innerhalb des gleichen Verzeichnisses wie die HTML-Seite befindet, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und berücksichtigen sie bei SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaurier.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrem Server hosten, was in einfachen Setups bedeutet, dass Sie die Bilder für Ihre Website auf dem gleichen Server wie Ihr HTML aufbewahren. Darüber hinaus ist es in Bezug auf die Wartung effizienter, relative URLs statt absoluter URLs zu verwenden (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder bereitzustellen.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht sind (siehe [Medienbesitztümer und Lizenzierung](#medienbesitztümer_und_lizenzierung) unten für weitere Informationen).

> [!WARNING]
> _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das auf einer fremden Webseite ohne Erlaubnis gehostet wird. Dies wird als "Hotlinking" bezeichnet. Es wird als unethisch angesehen, da jemand anderes für die Bandbreitenkosten zahlen würde, wenn jemand Ihre Seite besucht. Es lässt Sie auch die Kontrolle über das Entfernen oder Ersetzen des Bildes mit etwas Unangenehmem verlieren.

Das vorherige Codebeispiel, sowohl mit der absoluten als auch mit der relativen URL, liefert uns das folgende Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, über dem "Bilder in HTML" steht](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden, nicht durch den Inhalt des Elements selbst. Sie können mehr darüber unter {{Glossary("replaced_elements", "ersetzte Elemente")}} lesen.

> [!NOTE]
> Sie finden das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html) an).

### Alternative Texte

Das nächste Attribut, das wir betrachten werden, ist `alt`. Sein Wert soll eine textliche Beschreibung des Bildes sein, für den Fall, dass das Bild nicht gesehen/angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange zum Rendern benötigt. Zum Beispiel könnte unser obenstehender Code so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt`-Text zu testen, ist, absichtlich Ihren Dateinamen falsch zu schreiben. Wenn zum Beispiel unser Bildname als `dinosooooor.jpg` falsch geschrieben wurde, würde der Browser das Bild nicht anzeigen und stattdessen den Alt-Text anzeigen:

![Der Titel "Bilder in HTML", aber dieses Mal wird das Dinosaurierbild nicht angezeigt, und der Alt-Text befindet sich an seiner Stelle.](alt-text.png)

Warum also sehen oder benötigen Sie jemals Alt-Text? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screen Reader](https://en.wikipedia.org/wiki/Screen_reader), um das Web vorlesen zu lassen. Tatsächlich ist es nützlich, einen Alt-Text zur Beschreibung von Bildern zu haben, um den meisten Benutzern zu helfen.
- Wie oben beschrieben, könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch Text-Only-Browser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), der den Alt-Text von Bildern anzeigt.
- Sie möchten möglicherweise Text für Suchmaschinen bereitstellen; zum Beispiel können Suchmaschinen Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das zu übertragende Datenvolumen und Ablenkungen zu reduzieren. Dies ist besonders häufig auf Mobiltelefonen und in Ländern, in denen die Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt dort ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten für dekorative Bilder [CSS-Hintergrundbilder](#css-hintergrundbilder) verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screen Reader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen liefert, geben Sie die gleichen Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze zweimal im Hauptinhalt geschrieben wären? Wenn das Bild im Haupttext angemessen beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}}-Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Link-Text](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie ihn entweder innerhalb des gleichen `<a>`-Elements oder innerhalb des `alt`-Attributs des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihr Haupttitel beispielsweise einen Schlagschatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/Reference/Properties/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Wenn Sie das _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut angeben.

Wesentlich ist es, eine nutzbare Erfahrung zu liefern, auch wenn die Bilder nicht angezeigt werden können. Dies stellt sicher, dass alle Benutzer keinen Teil des Inhalts verpassen. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und zu sehen, wie es aussieht. Sie werden bald erkennen, wie hilfreich Alt-Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Siehe unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu erfahren, wie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwendet wird.

> [!NOTE]
> [HTML-Tags](https://scrimba.com/html-css-crash-course-c02l/~0d?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba ist eine interaktive Lektion, die Informationen zu Bildern und Mini-Herausforderungen bietet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als Ganzzahlen ohne Einheit angegeben und stellen die Breite und Höhe des Bildes in Pixel dar.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise herausfinden. Zum Beispiel können Sie auf dem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Wenn wir zu unserem Beispiel zurückkehren, könnten wir Folgendes tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateien oft viel größer sind als HTML-Dateien), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

Angenommen, wir haben einen Text nach dem Bild:

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

Sobald das Bild geladen ist, fügt der Browser das Bild der Seite hinzu. Da das Bild Platz beansprucht, muss der Browser den Text nach unten auf die Seite bewegen, um das Bild darüber einzufügen:

![Vergleich des Seitenlayouts während der Browser das Laden einer Seite und bei Abschluss, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Das Bewegen des Textes auf diese Weise ist sehr ablenkend für die Benutzer, insbesondere wenn sie bereits begonnen haben, ihn zu lesen, und es führt auch dazu, dass der Browser die Seite erneut rendert, was schlecht für die Leistung ist.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mit den Attributen `width` und `height` angeben, weiß der Browser, wie viel Platz er für das Bild reservieren muss, bevor es heruntergeladen wurde.

Dies bedeutet, dass der Browser beim Herunterladen des Bildes den umgebenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts während der Browser das Laden einer Seite und nach Abschluss, wenn die Bildgröße spezifiziert ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion, siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

Beachten Sie, dass es, wenn es keinen Inhalt unter dem Bild gibt, kein Problem mit dem Neurendern gibt, weil das Ändern der Bildgröße keine anderen Elemente verschiebt. In diesem Fall können Sie nur die `width` des Bildes festlegen. Wenn Sie eine `width` festlegen, aber keine `height` angeben, wird die `height` standardmäßig auf `auto` gesetzt, was bedeutet, dass sie auf einen Wert gesetzt wird, der das {{Glossary("Aspect_ratio", "Seitenverhältnis")}} des Bildes beibehält.

#### Bildergröße ändern

Obwohl es, wie gesagt, gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder _zu ändern_.

Wenn Sie die Bildgröße zu groß einstellen, enden Sie mit Bildern, die körnig, verschwommen oder zu klein aussehen, und verschwenden Bandbreite, um ein Bild herunterzuladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht einhalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.

Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

### Titel von Bildern

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie auch Bildern `title`-Attribute hinzufügen, um zusätzliche unterstützende Informationen bereitzustellen, falls erforderlich. In unserem Beispiel könnten wir Folgendes tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns beim Überfahren mit der Maus einen Tooltip, genau wie Linktitel:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der "Ein T-Rex im Manchester University Museum ausgestellt" liest](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich basierend auf der Tatsache, dass die Unterstützung von Screenreadern sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie fahren mit der Maus darüber (also z. B. kein Zugang für Tastaturbenutzer). Wenn Sie an weiteren Informationen hierzu interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen in den Haupttext des Artikels aufzunehmen, anstatt sie an das Bild anzuhängen.

### Übung zur Bildeinbettung

Jetzt ist es Ihre Aufgabe zu spielen! Diese Aufgabe wird Sie dazu bringen, ein Bild einzubetten.

1. Klicken Sie im folgenden Codeblock auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Bearbeiten Sie das bestehende {{htmlelement("img")}}-Tag so, dass es das Bild einbettet, das unter der folgenden URL zu finden ist:

   ```url
   https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
   ```

   > [!NOTE]
   > Wir haben vorher gesagt, dass man niemals ohne Erlaubnis auf Bilder von anderen Servern zugreifen soll, aber dieses Bild ist in unserem GitHub-Repo, also ist das in Ordnung.

3. Fügen Sie dem Bild ein `alt`-Attribut hinzu. Sie können überprüfen, ob der Alt-Text funktioniert, indem Sie die Bild-URL vorübergehend falsch schreiben.
4. Setzen Sie die korrekte `width` und `height` des Bildes (Hinweis: es ist `200px` breit und `171px` hoch) und experimentieren Sie mit anderen Werten, um die Auswirkung zu sehen.
5. Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter dem Codeblock ansehen.

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

## Medienbesitztümer und Lizenzierung

Bilder (und andere Typen von Medienassets), die Sie im Internet finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Website verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis zur Nutzung haben oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Schauen wir uns einige gängige Kategorien von Lizenzen an, denen Sie im Internet begegnen könnten.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihre Werke oft unter geschlossenen Urheberrechtsbestimmungen. Dies bedeutet, dass sie (oder ihr Herausgeber) standardmäßig exklusive Rechte zur Nutzung (z.B. Anzeige oder Verbreitung) ihrer Werke haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Optionen ausführen:

- Holen Sie sich eine ausdrückliche schriftliche Genehmigung des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr, um sie zu nutzen. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("lizenzfrei") sein, oder es könnte sich um "rechteverwaltet" handeln, in welchem Fall Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitfenster, geografischer Region, Industrie oder Medientyp usw. zahlen müssen.
- Beschränken Sie Ihre Verwendungen auf solche, die als [fair use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) in Ihrer Jurisdiktion angesehen würden.

Urheber müssen ihren Werken keine Urheberrechtsvermerke oder Lizenzbedingungen beifügen. Urheberrecht besteht automatisch in einem Originalwerk, das in einem greifbaren Medium geschaffen wird. Wenn Sie also ein Bild online finden und keine Urheberrechtsvermerke oder Lizenzbedingungen vorhanden sind, ist der sicherste Weg, anzunehmen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Freizügig

Wenn das Bild unter einer freizügigen Lizenz veröffentlicht wird, wie zum Beispiel [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative-Commons-(CC)-Lizenz](https://creativecommons.org/chooser/), müssen Sie keine Lizenzgebühr zahlen oder um Erlaubnis bitten, es zu verwenden. Dennoch gibt es verschiedene Lizenzierungsbedingungen, die Sie erfüllen müssen, die von Lizenz zu Lizenz unterschiedlich sind.

Zum Beispiel könnten Sie:

- Einen Link zur Originalquelle des Bildes bereitstellen und den Ersteller nennen müssen.
- Angeben, ob Änderungen an ihm vorgenommen wurden.
- Erstellte Derivatwerke mit dem Bild unter der gleichen Lizenz wie das Original anbieten.
- Keine Derivatwerke überhaupt teilen.
- Das Bild in keinem kommerziellen Werk verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung beifügen, die das Bild verwendet.

Sie sollten die geltende Lizenz für die spezifischen Bedingungen, die Sie einhalten müssen, konsultieren.

> [!NOTE]
> Möglicherweise stoßen Sie in Verbindung mit freizügigen Lizenzen auf den Begriff "Copyleft". Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike"-Creative-Commons-Lizenzen) sehen vor, dass Derivatwerke unter der gleichen Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Gabelung" der Originalsoftware bezeichnet), ebenfalls unter der gleichen Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass auch der Quellcode des neuen Projekts für andere zugänglich gemacht wird, um ihn zu studieren und zu ändern. Beachten Sie, dass Lizenzen, die für Software erstellt wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für Nicht-Softwarewerke gelten, da sie nicht mit Nicht-Softwarewerken im Hinterkopf erstellt wurden.

Erkunden Sie die früher in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie spezifizieren, zu erfahren.

#### Public Domain/CC0

Werke, die in die Public Domain freigegeben wurden, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es gelten keine Urheberrechte, und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Werke können auf verschiedene Arten in die Public Domain gelangen, wie z.B. durch Ablauf des Urheberrechts oder durch spezifischen Verzicht auf Rechte.

Eine der effektivsten Methoden, um Werke in die Public Domain zu geben, ist es, sie unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer spezifischen Creative-Commons-Lizenz, die ein klares und eindeutiges juristisches Werkzeug für diesen Zweck bietet.

Wenn Sie Bilder aus der Public Domain verwenden, besorgen Sie sich einen Nachweis, dass das Bild in der Public Domain ist, und bewahren Sie diesen Nachweis für Ihre Unterlagen auf. Zum Beispiel, machen Sie einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus und erwägen, eine Seite auf Ihrer Website hinzuzufügen, die eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen enthält.

### Suche nach freizügig lizenzierten Bildern

Sie können freizügig lizenzierte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bilder-Websites finden.

Suchen Sie nach Bildern, indem Sie eine Beschreibung des gewünschten Bildes zusammen mit relevanten Lizenzbegriffen verwenden. Zum Beispiel, wenn Sie "gelber Dinosaurier" suchen, fügen Sie "öffentliches Domain-Bilder", "öffentliches Domain-Bilderbibliothek", "offen lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Werkzeuge, um Ihnen zu helfen, Bilder mit freizügigen Lizenzen zu finden. Zum Beispiel, wenn Sie Google verwenden, gehen Sie auf die Registerkarte "Bilder", um nach Bildern zu suchen, und klicken Sie dann auf "Tools". Dort gibt es in der resultierenden Symbolleiste ein "Nutzungsrechte"-Dropdown, in dem Sie speziell nach Bildern unter Creative-Commons-Lizenzen suchen können.

Bilder-Repository-Sites wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, um Ihnen die Suche nur nach freizügig lizenzierten Bildern zu ermöglichen. Einige Sites vertreiben ausschließlich freizügig lizenzierte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, ist eine Frage des Auffindens der Lizenzdetails, des Lesens der vom Herausgeber bereitgestellten Lizenz oder Anleitungsseite und der Befolgung dieser Anweisungen. Seriöse Bilder-Repositorys machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften annotieren

Wir sprechen über Bildunterschriften; es gibt verschiedene Möglichkeiten, wie Sie einer Beschriftung zu Ihrem Bild hinzufügen können. Zum Beispiel gibt es nichts, das Sie daran hindert, Folgendes zu tun:

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

Das ist in Ordnung. Es enthält die benötigten Inhalte und lässt sich gut mit CSS stilisieren. Aber es gibt ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Bildunterschrift verbindet, was Probleme für Screen Reader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Unterschrift zu welchem Bild gehört?

Eine bessere Lösung besteht darin, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Sie wurden genau zu diesem Zweck erstellt: um einen semantischen Container für Abbildungen bereitzustellen und die Abbildung klar mit der Unterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element teilt Browsern und Hilfstechnologien mit, dass die Bildunterschrift den übrigen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einem Barrierefreiheitsperspektive haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Texte unterschiedliche Rollen. Bildunterschriften nützen auch Leuten, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Texte die gleiche Funktionalität wie ein abwesendes Bild bieten. Daher sollten Bildunterschriften und `alt`-Text nicht genau das gleiche sagen, da sie beide erscheinen, wenn das Bild nicht da ist. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und zu sehen, wie es aussieht.

Eine Abbildung muss kein Bild sein. Es ist eine unabhängige Einheit von Inhalten, die:

- Ihre Bedeutung in einer kompakten, leicht erfassbaren Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite platziert werden könnte.
- Wesentliche Informationen bietet, die den Haupttext unterstützen.

Eine Abbildung könnte aus mehreren Bildern, einem Code-Snippet, Audio, Video, Gleichungen, einer Tabelle oder etwas anderem bestehen.

### Eine Abbildung erstellen

In dieser Aufgabe sollen Sie den fertigen Code aus der vorherigen Aufgabe als Ausgangspunkt verwenden und ihn in eine Abbildung umwandeln:

1. Klicken Sie im Codeblock unten auf **"Play"**, um das Beispiel im MDN Playground zu bearbeiten.
2. Umgeben Sie das `<img>`-Element mit einem {{htmlelement("figure")}}-Element.
3. Kopieren Sie den Text aus dem `title`-Attribut, setzen Sie ihn in ein {{htmlelement("figcaption")}}-Element unterhalb des `<img>`-Elements und entfernen Sie dann das `title`-Attribut.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter dem Codeblock ansehen.

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

Ihr fertiges HTML sollte wie folgt aussehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-{{cssxref("background-image")}}-Eigenschaft und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Wenn Sie zum Beispiel ein Hintergrundbild auf jeden Absatz einer Seite setzen möchten, könnten Sie Folgendes tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild lässt sich möglicherweise einfacher platzieren und kontrollieren als HTML-Bilder. Warum also HTML-Bilder verwenden? Wie oben angedeutet, sind CSS-Hintergrundbilder nur für Dekoration. Wenn Sie nur etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist dies in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keinen Textäquivalente haben, sind für Screen Reader unsichtbar, und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild eine Bedeutung im Sinne Ihres Inhalts hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen ausführlich behandeln).

## Zusammenfassung

Das war's fürs Erste. Wir haben Bilder und Bildunterschriften im Detail behandelt.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen über HTML-Bilder verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content")}}
