---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 342cd85186f4b88c2a1dc0aadc5dc37e23ea509b
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang des Webs gab es nur Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel schauen wir uns an, wie man das {{htmlelement("img")}}-Element im Detail verwendet, einschließlich der Grundlagen, des Hinzufügens von Bildunterschriften mit {{htmlelement("figure")}} und wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegenden HTML-Syntax</a
        > behandelt werden. Textstufensemantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Der Begriff "ersetztes Element" — was bedeutet das?</li>
          <li>Grundlegende Syntax des <code>&lt;img&gt;</code>-Tags</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, z. B. um unangenehme ruckartige Updates der Benutzeroberfläche zu vermeiden, sobald ein Bild geladen und angezeigt wird.</li>
          <li>Optimierung von Mediendateien für das Web — die Dateigrößen klein halten.</li>
          <li>Verständnis von Medienlizenzierungen — verschiedene Lizenztypen, wie man sie einhält, und wie man nach entsprechend lizenzierten Mediendateien sucht, um sie in Projekten zu verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie fügen wir ein Bild auf einer Webseite ein?

Um ein Bild auf einer Webseite einzufügen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (das heißt, es kann keinen Kinderinhalt haben und keinen End-Tag haben), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild zeigt, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird weiter unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Ein kurzer Überblick über URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Wissen über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild beispielsweise `dinosaurier.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild wie folgt einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem Unterverzeichnis namens `images` befindet, das im selben Verzeichnis wie die HTML-Seite liegt, dann würden Sie es so einbetten:

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

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrer eigenen Website hosten, was in einfachen Setups bedeutet, die Bilder für Ihre Website auf dem gleichen Server wie Ihr HTML zu speichern. Zusätzlich ist es effizienter, relative URLs anstelle von absoluten URLs in Bezug auf die Wartung zu verwenden (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder bereitzustellen.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie gemäß den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht sind (siehe [Medienassets und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warnung:** _Niemals_ das `src`-Attribut auf ein Bild verweisen, das auf der Website einer anderen Person gehostet wird, _ohne Erlaubnis_. Dies wird als "Hotlinking" bezeichnet. Es wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes zahlen würde, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, ob das Bild entfernt wird oder durch etwas Peinliches ersetzt wird.

Der vorherige Code-Schnipsel, egal ob mit der absoluten oder der relativen URL, ergibt das folgende Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einem Browser, mit "Bilder in HTML" darüber](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource definiert werden (wie eine Bild- oder Videodatei), nicht durch den Inhalt des Elements selbst. Sie können mehr darüber unter {{Glossary("replaced_elements", "erreichten Elemente")}} lesen.

> [!NOTE]
> Sie können das fertiggestellte Beispiel aus diesem Abschnitt [auf GitHub ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativtext

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Sein Wert sollte eine textuelle Beschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt werden kann oder lange zum Rendern benötigt, weil die Internetverbindung langsam ist. Zum Beispiel könnte unser obiger Code folgendermaßen modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, um Ihren `alt`-Text zu testen, ist, den Dateinamen absichtlich falsch zu schreiben. Wenn zum Beispiel unser Bildname fälschlicherweise `dinosooooor.jpg` geschrieben wird, würde der Browser das Bild nicht anzeigen und stattdessen den Alternativtext anzeigen:

![Der Titel Bilder in HTML, aber diesmal wird das Dinosaurierbild nicht angezeigt und stattdessen der Alt-Text.](alt-text.png)

Warum sollten Sie überhaupt Alternativtext sehen oder benötigen? Er kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Bildschirmleser](https://en.wikipedia.org/wiki/Screen_reader), um das Web für ihn vorzulesen. Tatsächlich ist es für die meisten Benutzer nützlich, über Alt-Text zu verfügen, um Bilder zu beschreiben.
- Wie oben beschrieben, könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Menschen verwenden immer noch reine Textbrowser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den Alternativtext von Bildern anzeigen.
- Sie möchten möglicherweise Text bereitstellen, den Suchmaschinen nutzen können; Suchmaschinen können zum Beispiel Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das Datenübertragungsvolumen zu reduzieren und Ablenkungen zu vermeiden. Dies ist besonders auf Mobiltelefonen üblich und in Ländern, in denen die Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""`. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Bildschirmleser keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild signifikante Informationen bereitstellt, geben Sie dieselben Informationen in einem _kurzen_ Alt-Text an – oder noch besser im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten Alt-Text. Wie ärgerlich wäre es für Benutzer mit Sehvermögen, wenn alle Absätze im Hauptinhalt zweimal geschrieben würden? Wenn das Bild im Haupttext ausreichend beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags einfügen, um ein Bild in einen Link zu verwandeln, müssen Sie trotzdem [zugänglichen Link-Text](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie ihn entweder innerhalb desselben `<a>`-Elements oder im `alt`-Attribut des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einbetten. Wenn Ihre Hauptüberschrift beispielsweise einen Schattenwurf benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Sollten Sie _wirklich nicht darum herumkommen_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen geht es darum, eine nutzbare Erfahrung zu bieten, auch wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen Inhalt verpassen. Versuchen Sie, in Ihrem Browser Bilder auszuschalten, und schauen Sie, wie es aussieht. Sie werden schnell merken, wie hilfreich Alt-Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Lesen Sie unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu erfahren, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes zu spezifizieren. Sie werden als Ganzzahlen ohne Einheit angegeben und stellen die Breite und Höhe des Bildes in Pixel dar.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weisen herausfinden. Zum Beispiel auf dem Mac können Sie <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel, könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML Ihrer Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML empfangen hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und dies wird oft der Fall sein, da Bilddateigrößen oft viel größer sind als HTML-Dateien), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

Angenommen, wir hätten etwas Text nach dem Bild:

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

Sobald der Browser das HTML herunterlädt, beginnt er, die Seite darzustellen.

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz benötigt, muss der Browser den Text nach unten auf der Seite verschieben, um das Bild darüber einzufügen:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt, und wenn er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Das Bewegen des Textes auf diese Weise ist für Benutzer äußerst ablenkend, insbesondere wenn sie bereits angefangen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, weiß der Browser bereits, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür einplanen muss.

Das bedeutet, dass der Browser das umliegende Inhalt nicht verschieben muss, sobald das Bild heruntergeladen wurde.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt, und wenn er fertig ist, wenn die Bildgröße festgelegt ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion siehe [Das Festlegen von Höhe und Breite bei Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie wir bereits gesagt haben, gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _vergrößern oder zu verkleinern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, verschwommen oder zu klein aussehen und verschwenden Bandbreite, um ein Bild herunterzuladen, das nicht den Bedürfnissen des Benutzers gerecht wird. Das Bild könnte auch verzerrt aussehen, wenn Sie das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht einhalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
>
> Wenn Sie wirklich die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

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

Dies gibt uns ein Tooltip bei Maus-Hover, genau wie bei Linktiteln:

![Das Dinosaurierbild, mit einem Tooltip darüber, der besagt, Ein T-Rex, ausgestellt im Manchester Universitätsmuseum](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, hauptsächlich basierend darauf, dass die Unterstützung durch Bildschirmleser sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie bewegen den Mauszeiger (also z.B. kein Zugang für Tastaturbenutzer). Wenn Sie sich für mehr Informationen darüber interessieren, lesen Sie [Die Prüfungen und Tribulationen des Titelattributs](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext anstelle des Bildes anzugeben.

### Übung zum Einbetten von Bildern

Jetzt sind Sie an der Reihe! Diese Aufgabe bringt Sie dazu, ein Bild einzubetten.

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Bearbeiten Sie das bestehende {{htmlelement("img")}}-Tag so, dass es das Bild von der folgenden URL einbettet:

   ```url
   https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
   ```

   > [!NOTE]
   > Wir haben zuvor gesagt, ohne Erlaubnis keine direkt eingebetteten Links zu Bildern von anderen Servern zu verwenden, aber dieses Bild ist in unserem GitHub-Repo, also ist das in Ordnung.

3. Fügen Sie dem Bild ein `alt`-Attribut hinzu. Sie können überprüfen, ob der Alt-Text funktioniert, indem Sie die Bild-URL vorübergehend falsch schreiben.
4. Setzen Sie die richtige `width` und `height` des Bildes (Hinweis: es ist `200px` breit und `171px` hoch) und experimentieren Sie dann mit anderen Werten, um zu sehen, was der Effekt ist.
5. Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

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

Bilder (und andere Arten von Medienressourcen), die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Seite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Lassen Sie uns einige gängige Kategorien von Lizenzen betrachten, die Sie wahrscheinlich im Internet finden werden.

#### Alle Rechte vorbehalten

Schöpfer von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihre Arbeiten oft unter geschlossenem Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Herausgeber) standardmäßig die exklusiven Rechte haben, ihre Arbeit zu nutzen (z.B. anzuzeigen oder zu verteilen). Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Holen Sie sich die ausdrückliche, schriftliche Erlaubnis des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr, um sie zu verwenden. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("lizenzfrei") sein, oder es könnte sich um "rechteverwaltet" handeln, in diesem Fall müssen Sie möglicherweise spezifische Gebühren pro Nutzung entrichten, z.B. nach Zeitschlitz, geografischer Region, Branche oder Medientyp, etc.
- Beschränken Sie Ihre Nutzung auf solche, die in Ihrem Zuständigkeitsbereich als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) gelten würden.

Autoren sind nicht verpflichtet, eine Urheberrechtsvermerk oder Lizenzbedingungen mit ihrem Werk zu veröffentlichen. Das Urheberrecht besteht automatisch an einem Originalwerk der Autoren, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und es keine Urheberrechtsvermerke oder Lizenzbedingungen gibt, ist der sicherste Weg, anzunehmen, dass es durch das Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Erlaubniserteilung

Wenn das Bild unter einer erlaubniserteilten Lizenz veröffentlicht wird, wie z.B. [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause), oder einer geeigneten [Creative Commons (CC)-Lizenz](https://creativecommons.org/chooser/), müssen Sie keine Lizenzgebühr bezahlen oder um Erlaubnis bitten, es zu verwenden. Es gibt jedoch verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die sich abhängig von der Lizenz unterscheiden.

Zum Beispiel müssen Sie möglicherweise:

- Einen Link zur ursprünglichen Quelle des Bildes angeben und den Ersteller des Bilder benennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Abgeleitete Werke, die unter Verwendung des Bildes erstellt wurden, unter derselben Lizenz wie das Original freigeben.
- Keine abgeleiteten Werke überhaupt teilen.
- Das Bild nicht in kommerziellen Arbeiten verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung bereitstellen, die das Bild verwendet.

Sie sollten die anwendbare Lizenz konsultieren, um die spezifischen Bedingungen zu erfahren, die Sie befolgen müssen.

> [!NOTE]
> Sie könnten auf den Begriff "Copyleft" im Kontext von erlaubniserteilten Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike"-Creative Commons-Lizenzen) schreiben vor, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die grundlegende Idee ist, dass ein neues Projekt, das mit dem Code eines Copyleft-lizenzierten Projekts entwickelt wurde (dies ist als "Fork" der Originalsoftware bekannt), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch zum Studium und zur Modifikation verfügbar gemacht wird. Beachten Sie, dass im Allgemeinen Lizenzen, die für Software erstellt wurden, wie GPL, nicht als gute Lizenzen für Nicht-Software-Arbeiten betrachtet werden, da sie nicht mit Nicht-Software-Arbeiten im Kopf erstellt wurden.

Erkunden Sie die früher in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen zu erfahren, die sie vorschreiben.

#### Öffentliches Eigentum/CC0

Arbeiten, die in das öffentliche Eigentum übergegangen sind, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es gelten keine Urheberrechte dafür, und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Arbeiten können verschiedene Wege ins öffentliche Eigentum gelangen, wie z.B. Ablauf des Urheberrechts oder spezifisches Verzichten auf Rechte.

Eine der effektivsten Möglichkeiten, Arbeiten in das öffentliche Eigentum zu bringen, ist die Lizenzierung unter [CC0](https://creativecommons.org/public-domain/cc0/), einer spezifischen Creative Commons-Lizenz, die ein klares und eindeutiges rechtliches Werkzeug für diesen Zweck bietet.

Beim Verwenden öffentlicher Domain-Bilder holen Sie Beweise ein, dass das Bild im öffentlichen Domain ist und behalten Sie diesen Nachweis für Ihre Unterlagen. Zum Beispiel, erstellen Sie einen Screenshot der ursprünglichen Quelle mit dem Lizenstatus deutlich angezeigt und erwägen Sie, eine Seite auf Ihrer Website mit einer Liste der erworbenen Bilder und ihren Lizenzanforderungen hinzuzufügen.

### Suche nach erlaubniserteilten Bildern

Sie können nach erlaubniserteilten Bildern für Ihr Projekt mit einer Bildsuchmaschine oder direkt aus Bildarchiven suchen.

Suchen Sie nach Bildern, indem Sie eine Beschreibung des gesuchten Bildes zusammen mit relevanten Lizenzbedingungen eingeben. Zum Beispiel, wenn Sie nach "gelber Dinosaurier" suchen, fügen Sie "Bilder im öffentlichen Domain", "Bibliothek öffentlicher Domain-Bilder", "offen lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Tools, die Ihnen helfen, nach Bildern mit erlaubniserteilten Lizenzen zu suchen. Zum Beispiel, wenn Sie Google verwenden, gehen Sie zum Tab "Bilder" um nach Bildern zu suchen, klicken Sie dann auf "Tools". Es gibt ein Dropdown-Menü "Nutzungsrechte" in der resultierenden Werkzeugleiste, wo Sie speziell nach Bildern unter Creative Commons-Lizenzen suchen können.

Bildrepository-Sites, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/), und [Pixabay](https://pixabay.com/), haben Suchoptionen, die es Ihnen erlauben, nur nach erlaubniserteilten Bildern zu suchen. Einige Seiten verteilen ausschließlich erlaubniserteilte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz oder die bereitgestellte Anleitungsseite der Quelle zu lesen und dann diese Anweisungen zu befolgen. Seriöse Bildrepositorys machen ihre Lizenzbedingungen klar und einfach zu finden.

## Bilder mit Figuren und Bildunterschriften versehen

Apropos Bildunterschriften, es gibt eine Reihe von Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen können. Zum Beispiel, es würde nichts dagegen sprechen, dies zu tun:

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

Das ist in Ordnung. Es enthält den benötigten Inhalt und ist mit CSS schön stylisierbar. Aber es gibt ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Bildunterschrift verlinkt, was Probleme für Bildschirmleser verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist die Verwendung der HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Diese wurden genau für diesen Zweck geschaffen: um einen semantischen Container für Abbildungen bereitzustellen und die Abbildung klar mit der Bildunterschrift zu verlinken. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element teilt den Browsern und unterstützenden Technologien mit, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einer Zugänglichkeitsperspektive haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text unterschiedliche Rollen. Bildunterschriften sind auch für Menschen nützlich, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text die gleiche Funktionalität wie ein nicht vorhandenes Bild bietet. Daher sollten sich Bildunterschriften und `alt`-Text nicht wiederholen, denn beide erscheinen, wenn das Bild nicht vorhanden ist. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und schauen Sie, wie es aussieht.

Eine Abbildung muss nicht unbedingt ein Bild sein. Es ist eine unabhängige Einheit von Inhalten, die:

- Ihre Bedeutung auf eine kompakte, leicht verständliche Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite eingefügt werden könnte.
- Wesentliche Informationen zur Unterstützung des Haupttextes liefert.

Eine Abbildung könnte mehrere Bilder, ein Codeschnipsel, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Erstellen einer Abbildung

In dieser Aufgabe möchten wir, dass Sie den abgeschlossenen Code aus der vorherigen Aufgabe als Ausgangspunkt nehmen und ihn in eine Abbildung umwandeln:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Wickeln Sie das `<img>`-Element in ein {{htmlelement("figure")}}-Element.
3. Kopieren Sie den Text aus dem `title`-Attribut, fügen Sie ihn in ein {{htmlelement("figcaption")}}-Element unter dem `<img>`-Element ein, und entfernen Sie dann das `title`-Attribut.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine völlig andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*` Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jedem Absatz einer Seite zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist wohl einfacher zu positionieren und zu kontrollieren als HTML-Bilder. Warum sich also mit HTML-Bildern abmühen? Wie bereits angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie einfach etwas Schönes hinzufügen möchten, um die visuelle Wirkung Ihrer Seite zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keine semantische Bedeutung. Sie können keine Textequivalente haben, sind für Bildschirmleser unsichtbar und so weiter. An dieser Stelle glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild inhaltliche Bedeutung hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen im Detail behandeln).

## Prüfen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Prüfen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images).

## Zusammenfassung

Das war alles für jetzt. Wir haben Bilder und Bildunterschriften ausführlich behandelt. Im nächsten Artikel werden wir einen Gang höher schalten und uns damit beschäftigen, wie man HTML für das Einbetten von Video- und Audiomaterial auf Webseiten verwendet.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
