---
title: HTML-Bilder
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text und war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend mit dem {{htmlelement("img")}}-Element befassen, einschließlich der Grundlagen, der Beschriftung mit {{htmlelement("figure")}} und der Erklärung, wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbasierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um zum Beispiel unangenehme ruckartige Updates der Benutzeroberfläche zu vermeiden, sobald ein Bild geladen und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web — Dateigrößen klein halten.</li>
          <li>Verständnis der Lizenzierung von Medienressourcen — verschiedene Arten von Lizenzen, wie man diese einhält und wie man nach entsprechend lizenzierten Mediendateien für Projekte sucht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie fügen wir ein Bild in eine Webseite ein?

Um ein Bild in eine Webseite einzufügen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (d.h. es kann keinen Kindinhalt haben und kein End-Tag haben), das zwei Attribute erfordert, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Eine kurze Einführung zu URLs und Pfaden](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis zu relativen und absoluten URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild beispielsweise `dinosaurier.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild folgendermaßen einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem `images`-Unterverzeichnis befand, das sich im selben Verzeichnis wie die HTML-Seite befand, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen sie zur Suchmaschinenoptimierung (SEO). Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaurier.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Website verwenden möchten, selbst hosten, was in einfachen Setups bedeutet, die Bilder Ihrer Website auf demselben Server wie Ihr HTML zu speichern. Darüber hinaus ist es effizienter, relative URLs zu verwenden als absolute URLs im Hinblick auf die Wartung (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder bereitzustellen.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Berechtigung haben, sie gemäß den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warnung:** _Niemals_ das `src`-Attribut auf ein Bild auf einer anderen Website _ohne Erlaubnis_ zeigen. Dies wird "Hotlinking" genannt. Es wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes zahlen würde, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, ob das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, ergibt das folgende Ergebnis:

![Ein grundlegendes Bild eines Dinosauriers, eingebettet in einen Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements von einer externen Ressource (wie einer Bild- oder Videodatei) definiert werden und nicht durch den Inhalt des Elements selbst. Mehr darüber können Sie unter {{Glossary("replaced_elements", "ersetzte Elemente")}} lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [auf GitHub ausgeführt finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativer Text

Das nächste Attribut, das wir uns ansehen, ist `alt`. Sein Wert soll eine Textbeschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt oder aufgrund einer langsamen Internetverbindung lange Zeit gerendert wird. Unser obiger Code könnte zum Beispiel so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, besteht darin, absichtlich Ihren Dateinamen falsch zu schreiben. Wenn unser Bildname zum Beispiel als `dinosooooor.jpg` buchstabiert würde, würde der Browser das Bild nicht anzeigen und stattdessen den alt-Text anzeigen:

![Der Titel "Bilder in HTML", aber diesmal wird das Dinosaurierbild nicht angezeigt und stattdessen der alt-Text.](alt-text.png)

Warum würde man also jemals alt-Text sehen oder benötigen? Der alt-Text kann aus verschiedenen Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://de.wikipedia.org/wiki/Screenreader), um das Web vorzulesen. Tatsächlich ist es für die meisten Benutzer nützlich, Alt-Text zur Beschreibung von Bildern zu haben.
- Wie oben beschrieben, könnte die Rechtschreibung des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch textbasierte Browser wie [Lynx](https://de.wikipedia.org/wiki/Lynx_%28Browser%29), der den alt-Text von Bildern anzeigt.
- Sie möchten möglicherweise Text bereitstellen, den Suchmaschinen verwenden können; zum Beispiel können Suchmaschinen alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das Volumen des Datenverkehrs zu verringern und Ablenkungen zu minimieren. Dies ist besonders häufig auf Mobiltelefonen und in Ländern, in denen die Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie innerhalb Ihres `alt`-Attributs schreiben? Das hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was verlieren Sie, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es zu lesen.
- **Inhalt.** Wenn Ihr Bild bedeutende Informationen liefert, geben Sie dieselben Informationen in einem _kurzen_ alt-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten alt-Text. Wie nervig wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt zweimal geschrieben würden? Wenn das Bild ausreichend durch den Haupttextkörper beschrieben ist, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}}-Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie entweder den Text innerhalb desselben `<a>`-Elements oder innerhalb des `alt`-Attributs des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift zum Beispiel einen Schatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Wenn Sie dies _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut angeben.

Im Wesentlichen ist der Schlüssel, eine benutzerfreundliche Erfahrung zu liefern, auch wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren, und sehen Sie, wie es aussieht. Sie werden schnell erkennen, wie hilfreich der alt-Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Siehe unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie Sie das `alt`-Attribut für Bilder in verschiedenen Situationen verwenden können.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes zu spezifizieren. Sie werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Es gibt verschiedene Möglichkeiten, die Breite und Höhe Ihres Bildes zu ermitteln. Auf einem Mac können Sie zum Beispiel <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel, könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, wird er versuchen, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateigrößen oft viel größer als HTML-Dateien sind), wird der Browser zunächst nur das HTML rendern und die Seite mit dem Bild aktualisieren, sobald es empfangen wurde.

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

Sobald der Browser das HTML heruntergeladen hat, wird er beginnen, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text auf der Seite verschieben, um das Bild darüber einzufügen:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn keine Größe für das Bild festgelegt ist.](no-size.png)

Den Text auf diese Weise zu verschieben, ist extrem ablenkend für Benutzer, besonders wenn sie bereits angefangen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mit den Attributen `width` und `height` angeben, weiß der Browser vor dem Herunterladen des Bildes, wie viel Platz er für es reservieren muss.

Das bedeutet, dass der Browser das umgebende Inhalt beim Herunterladen des Bildes nicht verschieben muss.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn die Bildgröße festgelegt ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie wir gesagt haben, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _vergrößern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, enden Sie mit Bildern, die körnig, unscharf oder zu klein aussehen, und verschwenden Sie Bandbreite, um ein Bild herunterzuladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die korrekte Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
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

Dies gibt uns ein Tooltip bei Mauszeigerberührung, genau wie Linktitel:

![Das Dinosaurierbild mit einem Tooltip-Titel darüber, der liest "Ein T-Rex im Manchester Universitätsmuseum ausgestellt"](image-with-title.png)

Dies wird jedoch nicht empfohlen – `title` hat eine Reihe von Zugänglichkeitsproblemen, hauptsächlich basierend auf der Tatsache, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nur anzeigen, wenn man mit einer Maus darüber schwebt (also z.B. kein Zugang für Tastaturbenutzer). Wenn Sie weitere Informationen dazu interessieren, lesen Sie [Die Schwierigkeiten und Tribulationen des Title-Attributs](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Haupttext des Artikels aufzunehmen, anstatt sie an das Bild anzuhängen.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie dran! Dieser Abschnitt für aktives Lernen wird Sie mit einer Einbettungs-Übung vertraut machen. Sie erhalten ein grundlegendes {{htmlelement("img")}}-Tag; wir möchten, dass Sie das Bild von folgender URL einbetten:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, dass Sie niemals Hotlink zu Bildern auf anderen Servern setzen sollten, aber dies ist nur für Lernzwecke gedacht, also lassen wir Sie dieses eine Mal durchgehen.

Wir möchten auch, dass Sie:

- Fügen Sie einen alt-Text hinzu und überprüfen Sie, dass er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Setzen Sie die richtige `width` und `height` des Bildes (Hinweis: es ist 200px breit und 171px hoch) und experimentieren Sie dann mit anderen Werten, um zu sehen, welchen Effekt dies hat.
- Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die _Lösung anzeigen_-Taste, um eine Antwort zu sehen:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_embedding_an_image', 700, 350) }}

## Medienressourcen und Lizenzierung

Bilder (und andere Typen von Medienressourcen), die Sie im Internet finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Website verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Schauen wir uns einige allgemeine Kategorien von Lizenzen an, die Sie wahrscheinlich im Internet finden werden.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihre Werke oft unter einem geschlossenen Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte zur Nutzung (z. B. Anzeige oder Verteilung) ihres Werkes haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer Lizenz "Alle Rechte vorbehalten" verwenden möchten, müssen Sie eine der folgenden Schritte ausführen:

- Erhalten Sie eine ausdrückliche, schriftliche Erlaubnis des Urheberrechtseigentümers.
- Zahlen Sie eine Lizenzgebühr für die Nutzung. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("gebührenfrei") sein, oder es könnte "rechteverwaltet" sein, in welchem Fall Sie möglicherweise spezifische Gebühren pro Verwendung nach Zeitfenster, geografischer Region, Branche oder Medientyp usw. zahlen müssen.
- Beschränken Sie Ihre Nutzung auf solche, die in Ihrer Gerichtsbarkeit als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) gelten würden.

Autoren sind nicht verpflichtet, einen Copyright-Hinweis oder Lizenzbedingungen mit ihrem Werk bereitzustellen. Copyright besteht automatisch in einem Originalwerk der Autorschaft, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und keine Copyright-Hinweise oder Lizenzbedingungen vorhanden sind, ist es der sicherste Weg, davon auszugehen, dass es durch Copyright mit allen Rechten vorbehalten geschützt ist.

#### Erlaubnis

Wenn das Bild unter einer erlaubten Lizenz wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://chooser-beta.creativecommons.org/) veröffentlicht ist, müssen Sie keine Lizenzgebühr zahlen oder um Erlaubnis bitten, es zu verwenden. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen und die je nach Lizenz unterschiedlich sind.

Zum Beispiel könnten Sie verpflichtet sein:

- Eine Verlinkung zur Originalquelle des Bildes bereitzustellen und seinen Urheber zu nennen.
- Anzugeben, ob irgendwelche Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Werke, die unter Verwendung des Bildes erstellt wurden, unter derselben Lizenz wie das Original freizugeben.
- Überhaupt keine abgeleiteten Werke zu teilen.
- Das Bild nicht in kommerziellen Arbeiten zu verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung bereitzustellen, die das Bild verwendet.

Sie sollten die anwendbare Lizenz konsultieren, um die spezifischen Bedingungen zu erfahren, die Sie befolgen müssen.

> [!NOTE]
> Sie könnten auf den Begriff "Copyleft" im Kontext von erlaubten Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons-Lizenzen) schreiben vor, dass abgeleitete Werke unter derselben Lizenz wie das Original freigegeben werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt weit verbreitet. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Fork" der Originalsoftware bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dadurch wird sichergestellt, dass der Quellcode des neuen Projekts auch anderen zur Studie und Modifikation zur Verfügung steht. Beachten Sie, dass Lizenzen, die ursprünglich für Software entworfen wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für nicht-softwarebasierte Werke angesehen werden, da sie nicht mit nicht-softwarebasierten Werken im Kopf entworfen wurden.

Erkunden Sie die Links, die früher in diesem Abschnitt bereitgestellt wurden, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie spezifizieren, zu erfahren.

#### Public Domain/CC0

Ein in die Public Domain freigegebenes Werk wird manchmal als "keine Rechte vorbehalten" bezeichnet – es unterliegt keinem Urheberrecht und kann ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Ein Werk kann auf verschiedene Weisen in die Public Domain gelangen, wie das Ablaufen des Urheberrechts oder das spezifische Verzicht auf Rechte.

Eine der effektivsten Methoden, ein Werk in die Public Domain zu geben, ist es unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer spezifischen Creative Commons-Lizenz, die ein klares und eindeutiges rechtliches Werkzeug für diesen Zweck bietet.

Beim Verwenden von Public Domain-Bildern, erhalten Sie einen Nachweis, dass das Bild in der Public Domain ist und bewahren Sie den Nachweis für Ihre Aufzeichnungen auf. Zum Beispiel, machen Sie einen Screenshot der Originalquelle mit dem Lizenzstatus klar angezeigt und erwägen, eine Seite zu Ihrer Website hinzuzufügen, mit einer Liste der erworbenen Bilder zusammen mit deren Lizenzanforderungen.

### Suche nach erlaubten/zugelassenen Bildern

Sie können lizenzierte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt von Bildrepositorys finden.

Suchen Sie nach Bildern mit einer Beschreibung des Bildes, das Sie suchen, zusammen mit relevanten Lizenzbedingungen. Zum Beispiel, wenn Sie nach "gelbem Dinosaurier" suchen, fügen Sie "Public Domain-Bilder", "Public Domain-Bibliothek", "offene lizenzierte Bilder" oder ähnliche Begriffe zur Suchabfrage hinzu.

Einige Suchmaschinen verfügen über Tools, um Ihnen zu helfen, Bilder mit erlaubten Lizenzen zu finden. Zum Beispiel, wenn Sie Google verwenden, gehen Sie zur "Bilder"-Registerkarte, um nach Bildern zu suchen, dann klicken Sie auf "Tools". Es gibt ein Dropdown-Menü "Nutzungsrechte" in der resultierenden Symbolleiste, in der Sie speziell nach Bildern unter Creative Commons-Lizenzen suchen können.

Bildrepository-Seiten wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, die es Ihnen ermöglichen, nur nach Bildern mit erlaubten Lizenzen zu suchen. Einige Seiten verbreiten exklusiv Bilder und Symbole mit erlaubten Lizenzen, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild freigegeben wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz oder die Anleitungsseite, die von der Quelle bereitgestellt wurde, zu lesen und dann diesen Anweisungen zu folgen. Seriöse Bildrepositorys machen ihre Lizenzbedingungen klar und einfach zu finden.

## Bilder mit Figuren und Bildunterschriften versehen

Apropos Bildunterschriften, es gibt einige Möglichkeiten, wie Sie eine Bildunterschrift zusammen mit Ihrem Bild hinzufügen könnten. Zum Beispiel, würde nichts dagegen sprechen, dies zu tun:

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

Das ist in Ordnung. Es enthält den erforderlichen Inhalt und ist schön mit CSS stilisierbar. Aber es gibt ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Bildunterschrift verknüpft, was für Screenreader problematisch sein kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist es, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese sind genau für diesen Zweck geschaffen: um einen semantischen Container für Figuren bereitzustellen und die Figur eindeutig mit der Bildunterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element sagt Browsern und unterstützender Technologie, dass die Bildunterschrift den restlichen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einer Zugänglichkeits-Perspektive haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text unterschiedliche Rollen. Bildunterschriften nützen auch Menschen, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text dieselbe Funktion wie ein fehlendes Bild bietet. Daher sollten Bildunterschriften und `alt`-Text nicht einfach dasselbe sagen, weil beide erscheinen, wenn das Bild weg ist. Versuchen Sie, die Bilder in Ihrem Browser zu deaktivieren und sehen Sie, wie es aussieht.

Eine Figur muss kein Bild sein. Sie ist eine eigenständige Einheit von Inhalten, die:

- Ihre Bedeutung auf kompakte, leicht verständliche Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite platziert werden könnte.
- Wesentliche Informationen bietet, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, einen Codeausschnitt, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Eine Figur erstellen

In diesem Abschnitt des aktiven Lernens möchten wir, dass Sie den fertigen Code aus dem vorherigen Abschnitt des aktiven Lernens nehmen und ihn in eine Figur verwandeln:

1. Wickeln Sie ihn in ein {{htmlelement("figure")}}-Element ein.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und setzen Sie den Text in ein {{htmlelement("figcaption")}}-Element unterhalb des Bildes.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die _Lösung anzeigen_-Taste, um eine Antwort zu sehen:

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea
  id="code"
  class="input"
  style="min-height: 100px; width: 95%"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171">\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_creating_a_figure', 700, 350) }}

## CSS-Hintergrundbilder

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}}, sowie die anderen `background-*`-Eigenschaften, werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel könnten Sie, um ein Hintergrundbild auf jedem Absatz einer Seite zu platzieren, dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist argumentativ einfacher zu positionieren und zu kontrollieren als HTML-Bilder. Warum sich also mit HTML-Bildern beschäftigen? Wie oben angedeutet, sind CSS-Hintergrundbilder nur für Dekoration gedacht. Wenn Sie einfach nur etwas Schönes auf Ihre Seite hinzufügen möchten, um die visuelle Gestaltung zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch überhaupt keine semantische Bedeutung. Sie können keine Textequivalente haben, sind für Screenreader unsichtbar und so weiter. Hierbei glänzen HTML-Bilder!

Zusammengefasst: Wenn ein Bild in Bezug auf Ihre Inhalte eine Bedeutung hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild reine Dekoration ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen ausführlich behandeln).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images).

## Zusammenfassung

Das ist alles für den Moment. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel werden wir einen Gang höher schalten und uns damit befassen, wie man HTML verwendet, um Video- und Audioinhalte in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
