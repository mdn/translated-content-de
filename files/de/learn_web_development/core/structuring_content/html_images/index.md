---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text und war ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel schauen wir uns an, wie man das {{htmlelement("img")}}-Element im Detail verwendet, einschließlich der Grundlagen, dem Hinzufügen von Bildunterschriften mit {{htmlelement("figure")}} und der Erklärung, wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verwenden von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwenden von <code>width</code> und <code>height</code>, zum Beispiel, um unerwünschte ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, wenn ein Bild fertig geladen ist und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web — Dateigrößen klein halten.</li>
          <li>Verständnis der Lizenzierung von Medienressourcen — verschiedene Arten von Lizenzen, wie man sie einhält, und wie man nach entsprechend lizenzierten Mediendateien sucht, um sie in Projekten zu verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie fügt man ein Bild in eine Webseite ein?

Um ein Bild in eine Webseite einzufügen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (das bedeutet, es kann keine Kindinhalte haben und hat kein End-Tag), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Eine kurze Übersicht über URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis an relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaurier.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild wie folgt einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem Unterverzeichnis namens `bilder` befindet, das sich im selben Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bild-Dateinamen und zählen sie zur SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaurier.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, selbst hosten, was in einfachen Setups bedeutet, dass Sie die Bilder für Ihre Webseite auf demselben Server wie Ihr HTML speichern. Außerdem ist es in Bezug auf die Wartung effizienter, relative URLs anstelle von absoluten URLs zu verwenden (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortschrittlicheren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht sind (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warning:** _Niemals_ das `src`-Attribut auf ein Bild verweisen, das auf der Webseite von jemand anderem gehostet wird _ohne Erlaubnis_. Dies wird als "Hotlinking" bezeichnet. Es wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes zahlen würde, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Code-Schnipsel, entweder mit der absoluten oder der relativen URL, liefert uns das folgende Ergebnis:

![Ein grundlegendes Bild eines Dinosauriers, eingebettet in einen Browser, mit der Aufschrift "Bilder in HTML" darüber](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Das liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert sind, nicht durch den Inhalt des Elements selbst. Mehr darüber können Sie unter {{Glossary("replaced_elements", "ersetzte Elemente")}} lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativtext

Das nächste Attribut, das wir uns ansehen, ist `alt`. Der Wert sollte eine Textbeschreibung des Bildes sein, für Situationen, in denen das Bild nicht angezeigt werden kann oder es lange dauert, bis es aufgrund einer langsamen Internetverbindung gerendert wird. Unser obiger Code könnte zum Beispiel wie folgt geändert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn unser Bildname zum Beispiel als `dinosooooor.jpg` geschrieben wurde, würde der Browser das Bild nicht anzeigen und stattdessen den Alt-Text anzeigen:

![Der Titel "Bilder in HTML", aber dieses Mal wird das Dinosaurierbild nicht angezeigt und der Alternativtext steht an seiner Stelle.](alt-text.png)

Warum sollten Sie jemals Alt-Text sehen oder benötigen? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um das Web vorgelesen zu bekommen. Tatsächlich ist es für die meisten Benutzer nützlich, Alt-Text zur Beschreibung von Bildern verfügbar zu haben.
- Wie oben beschrieben, könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch textbasierte Browser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), welcher den Alt-Text von Bildern anzeigt.
- Sie möchten vielleicht Suchmaschinen Text zur Verfügung stellen; Suchmaschinen können zum Beispiel Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Datenvolumen und Ablenkungen zu reduzieren. Dies ist besonders auf Mobiltelefonen häufig und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was verlieren Sie, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es zu lesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen liefert, geben Sie die gleichen Informationen in einem _kurzen_ `alt`-Text an – oder besser noch, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt doppelt geschrieben wären? Wenn das Bild ausreichend durch den Haupttext beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags setzen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie entweder den Linktext im gleichen `<a>`-Element oder im `alt`-Attribut des Bildes angeben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bildern unterbringen. Wenn Ihre Hauptüberschrift zum Beispiel einen Schlagschatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow) dafür anstatt den Text in einem Bild einzufügen. Wenn Sie dies _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Letztendlich geht es darum, eine benutzerfreundliche Erfahrung zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass allen Benutzern keine der Inhalte vorenthalten werden. Versuchen Sie, die Bilder in Ihrem Browser auszuschalten und sehen Sie, wie alles aussieht. Sie werden schnell feststellen, wie hilfreich der Alt-Text ist, wenn das Bild nicht angezeigt werden kann.

> [!NOTE]
> Siehe unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Diese werden als Ganzzahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise ermitteln. Zum Beispiel können Sie auf einem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen der Bilddatei zu erhalten. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, beginnt er damit, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (was oft der Fall sein wird, da Bilddateien oft viel größer als HTML-Dateien sind), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

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

Sobald der Browser das HTML heruntergeladen hat, beginnt er damit, die Seite anzuzeigen.

Wenn das Bild geladen ist, fügt der Browser das Bild in die Seite ein. Da das Bild Platz benötigt, muss der Browser den Text nach unten verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Einen Text auf diese Weise zu verschieben, ist für Benutzer äußerst ablenkend, insbesondere wenn sie bereits angefangen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mit den Attributen `width` und `height` angeben, dann weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür reservieren muss.

Das bedeutet, dass der Browser, wenn das Bild heruntergeladen wurde, den umgebenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl, wie wir gesagt haben, es gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder über HTML-Attribute anzugeben, sollten Sie sie nicht verwenden, um Bilder _umzuwandeln_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die pixelig, unscharf oder zu klein wirken, und verschwenden Bandbreite beim Herunterladen eines Bildes, das nicht den Anforderungen des Benutzers entspricht. Das Bild kann auch verzerrt erscheinen, wenn Sie das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite einfügen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

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

Dies gibt uns ein Tooltip beim Mouseover, genau wie bei Linktiteln:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der lautet: Ein T-Rex, ausgestellt im Museum der Universität Manchester](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich basierend darauf, dass die Unterstützung für Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie bewegen sich mit der Maus darüber (also z.B. kein Zugang für Tastaturbenutzer). Wenn Sie an weiteren Informationen darüber interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext zu integrieren, anstatt sie dem Bild anzuhängen.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie an der Reihe! Dieser Abschnitt mit aktivem Lernen wird Sie mit einer Übung zur Einbettung in Gang bringen. Ihnen wird ein grundlegendes {{htmlelement("img")}}-Tag bereitgestellt; wir möchten, dass Sie das Bild einbetten, das sich unter der folgenden URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher sagten wir, dass Sie niemals Bilder auf anderen Servern hotlinken sollten, aber dies ist nur zu Lernzwecken, also lassen wir es einmal davonkommen.

Wir möchten auch, dass Sie:

- Fügen Sie etwas Alt-Text hinzu und überprüfen Sie, ob es funktioniert, indem Sie die Bild-URL falsch buchstabieren.
- Setzen Sie die korrekte `width` und `height` des Bildes (Hinweis: es ist 200px breit und 171px hoch) und experimentieren Sie dann mit anderen Werten, um den Effekt zu sehen.
- Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der Schaltfläche _Zurücksetzen_ zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die Schaltfläche _Lösung anzeigen_, um eine Antwort zu sehen:

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

Bilder (und andere Medientypen) finden Sie im Web unter verschiedenen Lizenztypen. Bevor Sie ein Bild auf einer Seite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis zur Nutzung haben oder die Lizenzbedingungen des Eigentümers einhalten.

### Verstehen von Lizenztypen

Lassen Sie uns einige gängige Kategorien von Lizenzen betrachten, auf die Sie im Web stoßen könnten.

#### Alle Rechte vorbehalten

Schöpfer von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihre Arbeiten oft unter Schutz des geschlossenen Urheberrechts. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte zur Nutzung (zum Beispiel zur Anzeige oder Verteilung) ihrer Arbeit haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Möglichkeiten wählen:

- Holen Sie sich eine ausdrückliche, schriftliche Genehmigung des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr für die Nutzung. Dies kann eine einmalige Gebühr für die unbegrenzte Nutzung sein ("Lizenzgebühr-frei"), oder sie könnte "rechteverwaltet" sein, in welchem Fall Sie möglicherweise spezielle Gebühren pro Nutzung nach Zeitfenster, geografischer Region, Branche oder Medientyp und so weiter zahlen müssen.
- Beschränken Sie Ihre Nutzungen auf solche, die in Ihrer Gerichtsbarkeit als [faire Nutzung](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) angesehen werden.

Autoren sind nicht verpflichtet, einen Urheberrechtshinweis oder Lizenzbedingungen mit ihrer Arbeit zu versehen. Copyright existiert automatisch in einem Originalwerk der Urheberschaft, sobald es in einem materiellen Medium erstellt wird. Wenn Sie also ein Bild online finden und dort keine Copyright-Hinweise oder Lizenzbedingungen vorhanden sind, ist der sicherste Weg, anzunehmen, dass es durch Copyright mit allen Rechten vorbehalten geschützt wird.

#### Freizügig

Wenn das Bild unter einer freizügigen Lizenz veröffentlicht ist, wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühren zahlen oder die Erlaubnis zur Nutzung einholen. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie einhalten müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie Folgendes tun müssen:

- Einen Link zur Originalquelle des Bildes bereitstellen und den Schöpfer des Bildes nennen.
- Angegeben, ob Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Werke, die unter Verwendung des Bildes erstellt wurden, unter der gleichen Lizenz wie das Original teilen.
- Keine abgeleiteten Werke teilen.
- Das Bild nicht in kommerziellen Arbeiten verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung, die das Bild verwendet, bereitstellen.

Sie sollten die jeweilige Lizenz für die spezifischen Bedingungen konsultieren, die Sie einhalten müssen.

> [!NOTE]
> Möglicherweise stoßen Sie im Kontext von freizügigen Lizenzen auf den Begriff "Copyleft". Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons-Lizenzen) legen fest, dass abgeleitete Werke unter derselben Lizenz wie das Original frei gegeben werden müssen.

Copyleft-Lizenzen sind weithin in der Softwarewelt bekannt. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wird (dies wird als "Fork" der Originalsoftware bekannt), auch unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch für andere zum Studieren und Modifizieren bereitgestellt wird. Beachten Sie, dass Lizenzen, die ursprünglich für Software erstellt wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für nicht-Softwarearbeiten angesehen werden, da sie nicht mit nicht-Softwarearbeiten im Hinterkopf erstellt wurden.

Erforschen Sie die oben in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie spezifizieren, zu erfahren.

#### Public Domain/CC0

Arbeiten, die in die Gemeinfreiheit entlassen wurden, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es besteht kein Urheberrecht darauf, und es kann ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Arbeiten können auf verschiedene Weise in die Gemeinfreiheit gelangen, z.B. durch Ablauf des Copyrights oder durch spezifische Verzichtserklärungen.

Eine der effektivsten Möglichkeiten, Werke in die Gemeinfreiheit zu entlassen, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer speziellen Creative Commons-Lizenz, die dafür ein klares und unmissverständliches juristisches Werkzeug bietet.

Wenn Sie gemeinfreie Bilder verwenden, sollten Sie einen Beweis dafür erhalten, dass das Bild gemeinfrei ist, und den Beweis für Ihre Aufzeichnungen aufbewahren. Zum Beispiel, machen Sie einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus und ziehen Sie in Betracht, eine Seite auf Ihrer Website hinzuzufügen, auf der eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen aufgeführt ist.

### Suchen nach permissiv lizenzierten Bildern

Sie können permissiv lizenzierte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bildrepositorien finden.

Suchen Sie nach Bildern mit einer Beschreibung des gesuchten Bildes zusammen mit den relevanten Lizenzbegriffen. Zum Beispiel, wenn Sie nach "gelbem Dinosaurier" suchen, fügen Sie "public domain images", "public domain image library", "open licensed images" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen verfügen über Tools, mit denen Sie speziell nach Bildern mit permissiven Lizenzen suchen können. Zum Beispiel, wenn Sie Google verwenden, gehen Sie auf den "Bilder"-Tab, um nach Bildern zu suchen, klicken Sie dann auf "Tools". Dort gibt es ein Dropdown-Menü "Nutzungsrechte" in der resultierenden Symbolleiste, in dem Sie speziell nach Bildern unter Creative-Commons-Lizenzen suchen können.

Bildrepository-Websites wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, mit denen Sie nur nach Bildern mit permissiven Lizenzen suchen können. Einige Websites verteilen ausschließlich permissiv lizenzierte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Das Einhalten der Lizenz, unter der das Bild veröffentlicht wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz oder die Anleitungsseite der Quelle zu lesen und dann diese Anweisungen zu befolgen. Seriöse Bildrepositorien machen ihre Lizenzbedingungen klar und einfach zu finden.

## Bilder mit Figuren und Bildunterschriften annotieren

Apropos Bildunterschriften, es gibt mehrere Möglichkeiten, wie Sie eine Beschriftung zusammen mit Ihrem Bild hinzufügen könnten. Zum Beispiel würde Ihnen nichts im Wege stehen, dies zu tun:

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

Das ist in Ordnung. Es enthält die benötigten Inhalte und ist mithilfe von CSS gut gestaltbar. Aber es gibt ein Problem: es gibt nichts, was das Bild semantisch mit seiner Beschriftung verknüpft, was Probleme für Screenreader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Beschriftungen haben, welche Beschriftung gehört zu welchem Bild?

Eine bessere Lösung besteht darin, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese wurden speziell zu diesem Zweck geschaffen: eine semantische Containerlösung für Figuren zu bieten und die Figur klar mit der Beschriftung zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element teilt Browsern und unterstützenden Technologien mit, dass die Beschriftung den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus barrierefreier Sicht haben Beschriftungen und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text unterschiedliche Rollen. Beschriftungen nützen selbst Menschen, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text die gleiche Funktion wie ein fehlendes Bild bietet. Daher sollten Beschriftungen und Alt-Text nicht einfach dasselbe aussagen, da beide angezeigt werden, wenn das Bild fehlt. Versuchen Sie, in Ihrem Browser die Bilder auszuschalten und sehen Sie, wie das aussieht.

Eine Figur muss nicht unbedingt ein Bild sein. Es ist eine unabhängige Einheit von Inhalt, die:

- Ihre Aussage auf kompakte und eingängige Weise ausdrückt.
- Könnte an mehreren Stellen im linearen Fluss der Seite stehen.
- Liefert wesentliche Informationen, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, einen Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Eine Figur erstellen

In diesem Abschnitt mit aktivem Lernen möchten wir, dass Sie den fertigen Code aus dem vorherigen aktiven Lernabschnitt nehmen und ihn in eine Figur verwandeln:

1. Verpacken Sie ihn in einem {{htmlelement("figure")}}-Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und setzen Sie den Text in ein {{htmlelement("figcaption")}}-Element unter dem Bild.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der Schaltfläche _Zurücksetzen_ zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die Schaltfläche _Lösung anzeigen_, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-{{cssxref("background-image")}}-Eigenschaft und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jedem Absatz einer Seite zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist arguably einfacher zu positionieren und zu kontrollieren als HTML-Bilder. Warum sollte man sich dann um HTML-Bilder kümmern? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration bestimmt. Wenn Sie nur etwas Schönes zu Ihrer Seite hinzufügen möchten, um das Erscheinungsbild zu verbessern, ist dies in Ordnung. Solche Bilder haben jedoch überhaupt keine semantische Bedeutung. Sie können keine Textequivalente haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammengefasst: Wenn ein Bild Bedeutung in Bezug auf Ihren Inhalt hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur zur Dekoration dient, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen im Detail behandeln).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images).

## Zusammenfassung

Das war’s für jetzt. Wir haben Bilder und Bildunterschriften ausführlich behandelt. Im nächsten Artikel gehen wir einen Schritt weiter und schauen uns an, wie HTML verwendet wird, um Video- und Audiomaterial in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
