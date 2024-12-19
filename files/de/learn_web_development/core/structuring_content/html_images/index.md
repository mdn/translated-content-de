---
title: HTML-Bilder
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text, was ziemlich langweilig war. Zum Glück dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel schauen wir uns an, wie das {{htmlelement("img")}} Element detailliert verwendet wird, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften mithilfe von {{htmlelement("figure")}} und wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a> behandelt werden. Semantiken auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs">Überschriften und Absätze</a> sowie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists">Listen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Begriff "ersetztes Element" — was bedeutet er?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um unangenehme ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, wenn ein Bild geladen ist und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web — Dateigrößen klein halten.</li>
          <li>Verständnis der Lizenzierung von Medienressourcen — verschiedene Arten von Lizenzen, wie man sie einhält und wie man nach entsprechend lizenzierten Mediendateien sucht, um sie in Projekten zu verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie fügt man ein Bild auf einer Webseite ein?

Um ein Bild auf einer Webseite einzufügen, verwenden wir das {{htmlelement("img")}} Element. Dies ist ein {{Glossary("void_element", "void element")}} (was bedeutet, dass es keinen Inhalt haben und kein End-Tag haben kann), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}} Elemente kann das `src`-Attribut eine relative oder absolute URL sein. Ohne ein `src`-Attribut hat ein `img` Element kein Bild zum Laden.

Das [`alt`-Attribut wird weiter unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis zu relativen und absoluten URLs aufzufrischen, bevor Sie fortfahren.

Zum Beispiel, wenn Ihr Bild `dinosaur.jpg` heißt und im selben Verzeichnis wie Ihre HTML-Seite liegt, könnten Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn das Bild in einem `images` Unterverzeichnis wäre, das sich im selben Verzeichnis wie die HTML-Seite befindet, dann würden Sie es so einbetten:

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

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, selbst hosten, was in einfachen Setups bedeutet, die Bilder für Ihre Webseite auf demselben Server wie Ihr HTML zu speichern. Außerdem ist es in Bezug auf Wartung effizienter, relative URLs statt absoluter URLs zu verwenden (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Berechtigung haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht sind (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warning:** _Niemals_ das `src`-Attribut auf ein Bild setzen, das auf der Webseite eines anderen ohne Erlaubnis gehostet wird. Dies nennt man "Hotlinking". Es gilt als unethisch, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes zahlt, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, ob das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Code-Schnipsel, entweder mit der absoluten oder der relativen URL, wird uns das folgende Ergebnis liefern:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements von einer externen Ressource (wie einer Bild- oder Videodatei) und nicht vom Inhalt des Elements selbst definiert werden. Mehr darüber erfahren Sie unter [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element).

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativer Text

Das nächste Attribut, das wir betrachten werden, ist `alt`. Sein Wert soll eine textliche Beschreibung des Bildes sein, für Situationen, in denen das Bild nicht gesehen/angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange zum Rendern benötigt. Zum Beispiel könnte unser obiger Code folgendermaßen modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, besteht darin, den Dateinamen absichtlich falsch zu schreiben. Wenn beispielsweise unser Bildname als `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den `alt`-Text anzeigen:

![Der Titel "Bilder in HTML", aber dieses Mal wird das Dinosaurierbild nicht angezeigt und der Alt-Text steht an seiner Stelle.](alt-text.png)

Warum würden Sie jemals Alt-Text sehen oder benötigen? Er kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um sich das Web vorlesen zu lassen. Tatsächlich ist es für die meisten Benutzer sinnvoll, Alt-Text zur Beschreibung von Bildern zu haben.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder des Pfads falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch textbasierte Browser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), der den Alt-Text von Bildern anzeigt.
- Sie möchten möglicherweise Text bereitstellen, den Suchmaschinen nutzen können; Suchmaschinen können beispielsweise Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Datenvolumen und Ablenkungen zu reduzieren. Dies ist besonders häufig auf Mobiltelefonen und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihre `alt`-Attribute schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Anders gesagt, was verlieren Sie, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit mit dem Lesen verschwenden.
- **Inhalt.** Liefert Ihr Bild wesentliche Informationen, geben Sie im _kurzen_ `alt`-Text dieselben Informationen an – oder noch besser im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie störend wäre es für einen sehenden Benutzer, wenn alle Absätze zweimal im Hauptinhalt geschrieben stünden? Wenn das Bild im Haupttextkörper ausreichend beschrieben ist, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}} Tags platzieren, um aus einem Bild einen Link zu machen, müssen Sie dennoch [zugänglichen Link-Text](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie diesen entweder im selben `<a>` Element schreiben oder im `alt`-Attribut des Bildes – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bildern platzieren. Wenn Ihre Hauptüberschrift zum Beispiel einen Schattenwurf benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Sollten Sie _unbedingt darauf angewiesen sein_, tun Sie dies, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen besteht der Schlüssel darin, ein nutzbares Erlebnis zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen der Inhalte vermissen. Versuchen Sie, in Ihrem Browser Bilder zu deaktivieren und sehen Sie, wie die Dinge aussehen. Sie werden schnell erkennen, wie hilfreich Alt-Text ist, wenn das Bild nicht angezeigt werden kann.

> [!NOTE]
> Sehen Sie unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) an, um zu lernen, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als Ganzzahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise finden. Zum Beispiel können Sie auf dem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel, könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateigrößen oft viel größer als HTML-Dateien sind), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wird.

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

Sobald der Browser das HTML heruntergeladen hat, beginnt er, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild der Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts während des Ladens einer Seite durch den Browser und wenn es fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Das Bewegen des Textes auf diese Weise ist für Benutzer extrem ablenkend, besonders wenn sie bereits begonnen haben zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, dann weiß der Browser, bevor das Bild heruntergeladen wurde, wie viel Platz er dafür einhalten muss.

Dies bedeutet, dass der Browser das umgebende Inhaltslayout nicht ändern muss, wenn das Bild heruntergeladen wurde.

![Vergleich des Seitenlayouts während des Ladens einer Seite durch den Browser und wenn es fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen hervorragenden Artikel über die Geschichte dieser Funktion, siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie wir gesagt haben, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder _umzuwandeln_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie körnige, unscharfe oder zu kleine Bilder und verschwenden Bandbreite, indem Sie ein Bild herunterladen, das nicht den Bedürfnissen der Benutzer entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht einhalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
>
> Falls Sie doch die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

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

Dadurch erhalten wir ein Tooltip bei Mausüberhängen, genau wie bei Linktiteln:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der "Ein T-Rex im Museum der Universität Manchester" sagt](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, hauptsächlich darauf beruhend, dass die Screenreader-Unterstützung sehr unvorhersehbar ist und die meisten Browser ihn nicht anzeigen, es sei denn, Sie schweben mit einer Maus darüber (also z.B. kein Zugang zu Tastaturbenutzern). Wenn Sie daran interessiert sind, mehr darüber zu erfahren, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext zu enthalten, anstatt sie an das Bild anzufügen.

### Aktives Lernen: Ein Bild einbetten

Nun sind Sie an der Reihe! Dieser aktive Lernabschnitt wird Sie mit einer Einbettungsübung in Gang bringen. Sie erhalten einen grundlegenden {{htmlelement("img")}}-Tag; wir möchten, dass Sie das Bild einbetten, das sich an der folgenden URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher sagten wir, niemals Bilder auf anderen Servern zu verlinken, aber das ist nur zu Lernzwecken, also drücken wir dieses Mal ein Auge zu.

Wir möchten auch, dass Sie:

- Fügen Sie etwas Alt-Text hinzu und überprüfen Sie, dass er funktioniert, indem Sie die Bild-URL falsch buchstabieren.
- Setzen Sie die korrekte `width` und `height` des Bildes (Hinweis: es ist 200px breit und 171px hoch), und experimentieren Sie dann mit anderen Werten, um zu sehen, was der Effekt ist.
- Setzen Sie ein `title` auf das Bild.

Falls Sie einen Fehler machen, können Sie ihn jederzeit mit dem _Reset_-Button zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie den _Show solution_-Button, um eine Antwort zu sehen:

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

Bilder (und andere Arten von Medienressourcen), die Sie im Web finden, sind unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Seite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis der Lizenztypen

Schauen wir uns einige häufige Kategorien von Lizenzen an, die Sie wahrscheinlich im Web finden werden.

#### Alle Rechte vorbehalten

Schöpfer von Originalwerken wie Liedern, Büchern oder Software veröffentlichen ihre Werke oft unter geschlossenem Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte zur Verwendung (zum Beispiel zur Anzeige oder Verbreitung) ihrer Werke haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Erhalten Sie eine ausdrückliche, schriftliche Erlaubnis vom Urheberrechtshalter.
- Zahlen Sie eine Lizenzgebühr für deren Nutzung. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("royalty-free") sein, oder es kann "rights-managed" sein, in diesem Fall müssen Sie möglicherweise spezifische Gebühren pro Nutzung pro Zeitfenster, geografische Region, Branche oder Medientyp usw. zahlen.
- Begrenzen Sie Ihre Nutzungen auf diejenigen, die nach Ihrer Zuständigkeit als [faire Nutzung](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) betrachtet werden würden.

Autoren sind nicht verpflichtet, eine Urheberrechtsanzeige oder Lizenzbedingungen mit ihren Werken einzuschließen. Urheberrecht existiert automatisch in einem Originalwerk der Urheberschaft, sobald es in einem greifbaren Medium erstellt wurde. Wenn Sie also online ein Bild finden und es keine Urheberrechtshinweise oder Lizenzbedingungen gibt, ist der sicherste Kurs anzunehmen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Freigiebig

Wenn das Bild unter einer freigiebigen Lizenz veröffentlicht ist, wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC)-Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühr zahlen oder um Erlaubnis bitten, es zu verwenden. Es gibt jedoch verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie:

- Einen Link zur ursprünglichen Quelle des Bildes bereitstellen und den Ersteller würdigen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Alle mit dem Bild erstellten abgeleiteten Werke unter derselben Lizenz wie das Original teilen.
- Keine abgeleiteten Werke teilen.
- Das Bild nicht in kommerziellen Werken verwenden.
- Eine Kopie der Lizenz zusammen mit einer Veröffentlichung bereitstellen, die das Bild verwendet.

Sie sollten die anwendbare Lizenz konsultieren, um die spezifischen Bedingungen zu erfahren, denen Sie folgen müssen.

> [!NOTE]
> Möglicherweise stoßen Sie auf den Begriff "Copyleft" im Zusammenhang mit freigiebigen Lizenzen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons Lizenzen) besagen, dass abgeleitete Werke unter derselben Lizenz wie das Originalwerk veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die grundlegende Idee ist, dass ein neues Projekt, das mit dem Code eines Copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Fork" der ursprünglichen Software bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zum Studium und zur Modifikation zur Verfügung gestellt wird. Beachten Sie, dass Lizenzen, die allgemein für Software erstellt wurden, wie die GPL, als schlechte Lizenzen für nicht-softwarebasierte Werke gelten, da sie nicht für nicht-softwarebasierte Werke erstellt wurden.

Erforschen Sie die früher in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen zu erfahren, die sie spezifizieren.

#### Gemeinfreiheit/CC0

Als gemeinfrei veröffentlichte Werke werden manchmal als "keine Rechte vorbehalten" bezeichnet — keine Urheberrechte gelten für sie, und sie können ohne Erlaubnis und ohne die Erfüllung von Lizenzbedingungen verwendet werden. Werke können auf verschiedene Weise gemeinfrei werden, beispielsweise durch Ablauf des Urheberrechts oder durch spezifischen Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, ein Werk in die Gemeinfreiheit zu geben, besteht darin, es unter [CC0](https://creativecommons.org/public-domain/cc0/) lizenzierten zu lassen, einer speziellen Creative Commons-Lizenz, die ein klares und eindeutiges rechtliches Werkzeug für diesen Zweck bietet.

Wenn Sie öffentliche Domänenbilder verwenden, holen Sie einen Nachweis ein, dass das Bild in der Öffentlichkeit steht und bewahren Sie den Nachweis für Ihre Unterlagen auf. Machen Sie zum Beispiel einen Screenshot der ursprünglichen Quelle mit dem deutlich angezeigten Lizenzstatus, und ziehen Sie in Betracht, Ihrer Webseite eine Seite hinzuzufügen, auf der die erworbenen Bilder zusammen mit ihren Lizenzanforderungen aufgelistet sind.

### Suche nach freigiebig lizenzierten Bildern

Sie können freigiebig lizenzierte Bilder für Ihre Projekte mithilfe einer Bildsuchmaschine oder direkt aus Bildarchiven finden.

Suchen Sie nach Bildern, indem Sie eine Beschreibung des Bildes verwenden, das Sie suchen, zusammen mit relevanten Lizenzbegriffen. Wenn Sie beispielsweise nach einem "gelben Dinosaurier" suchen, fügen Sie "gemeinfreie Bilder", "gemeinfreie Bildbibliothek", "offen lizenzierte Bilder" oder ähnliche Begriffe der Suchanfrage hinzu.

Einige Suchmaschinen haben Tools, die Ihnen helfen, Bilder mit freigiebigen Lizenzen zu finden. Wenn Sie Google verwenden, gehen Sie zum Tab "Bilder", um nach Bildern zu suchen, und klicken Sie dann auf "Tools". In der resultierenden Symbolleiste gibt es eine Dropdown-Liste "Usage Rights", in der Sie speziell nach Bildern unter Creative Commons-Lizenzen suchen können.

Bildarchivseiten wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, die es Ihnen ermöglichen, nur nach freigiebig lizenzierten Bildern zu suchen. Einige Seiten vertreiben ausschließlich freigiebig lizenzierte Bilder und Icons, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Das Befolgen der Lizenz, unter der das Bild veröffentlicht wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz- oder Anleitungsseite der Quelle zu lesen und dann diesen Anweisungen zu folgen. Seriöse Bildarchive machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften versehen

Apropos Bildunterschriften, es gibt eine Reihe von Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen könnten. Zum Beispiel würde Sie nichts daran hindern, dies zu tun:

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

Das ist in Ordnung. Es enthält den benötigten Inhalt und kann schön mit CSS gestaltet werden. Aber es gibt hier ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Beschriftung verknüpft, was Probleme für Screenreader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Beschriftungen haben, welche Beschriftung gehört zu welchem Bild?

Eine bessere Lösung ist die Verwendung der HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Diese wurden genau zu diesem Zweck erstellt: um einen semantischen Container für Figuren bereitzustellen und die Figur mit der Beschriftung klar zu verknüpfen. Unser obiges Beispiel könnte folgendermaßen umgeschrieben werden:

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
> Aus einer Barrierefreiheitssicht haben Bildunterschriften und `alt`-Text unterschiedliche Rollen. Bildunterschriften kommen auch Menschen zugute, die das Bild sehen können, während `alt`-Text die gleiche Funktionalität wie ein nicht vorhandenes Bild bietet. Bildunterschriften und `alt`-Text sollten daher nicht einfach dasselbe sagen, da sie beide erscheinen, wenn das Bild fehlt. Probieren Sie es aus, indem Sie Bilder in Ihrem Browser deaktivieren und sehen, wie es aussieht.

Eine Figur muss kein Bild sein. Es ist eine unabhängige Inhaltseinheit, die:

- Ihre Bedeutung kompakt und leicht verständlich ausdrückt.
- Könnte an mehreren Stellen im linearen Ablauf der Seite erscheinen.
- Bietet wesentliche Informationen, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, einen Code-Ausschnitt, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: eine Figur erstellen

In diesem aktiven Lernabschnitt möchten wir, dass Sie den fertigen Code aus dem vorherigen aktiven Lernabschnitt nehmen und ihn in eine Figur verwandeln:

1. Wickeln Sie ihn in ein {{htmlelement("figure")}}-Element ein.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut, und setzen Sie den Text in ein {{htmlelement("figcaption")}}-Element unter dem Bild.

Falls Sie einen Fehler machen, können Sie ihn jederzeit mit dem _Reset_-Button zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie den _Show solution_-Button, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jedem Absatz einer Seite zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist möglicherweise einfacher zu positionieren und zu steuern als HTML-Bilder. Warum sollte man sich also mit HTML-Bildern beschäftigen? Wie schon angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie Ihrer Seite einfach etwas Schönes hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keine Textequivalente haben, sind für Screenreader unsichtbar usw. Hier glänzen HTML-Bilder!

Zusammenfassend: hat ein Bild eine Bedeutung im Sinne Ihres Inhalts, sollten Sie ein HTML-Bild verwenden. Ist ein Bild rein dekorativ, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen detailliert behandeln).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images).

## Zusammenfassung

Das ist alles für den Moment. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel gehen wir einen Schritt weiter und schauen uns an, wie man HTML verwendet, um Video- und Audiomaterial in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
