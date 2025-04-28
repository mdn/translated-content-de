---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 93f54b6e1fdfef1375233abb265f101bd6866f99
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text und war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Inhaltstypen) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend mit der Verwendung des {{htmlelement("img")}} Elements befassen, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften unter Verwendung des {{htmlelement("figure")}} Elements und der detaillierten Erläuterung, wie es sich auf {{Glossary("CSS", "CSS")}}-Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Vertrautheit, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textlevel-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verwendung von <code>width</code> und <code>height</code>, um beispielsweise unangenehme ruckartige Updates der Benutzeroberfläche zu vermeiden, sobald ein Bild geladen und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web — Halten Sie die Dateigrößen klein.</li>
          <li>Verständnis von Medienressourcen-Lizenzierung — verschiedene Lizenztypen, wie man sie befolgt und wie man nach entsprechend lizenzierten Mediendateien sucht, die in Projekten verwendet werden können.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}} Element. Dies ist ein {{Glossary("void_element", "void-Element")}} (bedeutet, es kann keinen Kindinhalt haben und kein End-Tag haben), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src` Attribut enthält eine URL, die auf das Bild zeigt, das Sie in die Seite einbetten möchten. Wie beim `href` Attribut für {{htmlelement("a")}} Elemente kann das `src` Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src` Attribut hat ein `img` Element kein Bild zum Laden.

Das [`alt` Attribut wird unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Einen schnellen Überblick über URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihre Erinnerung an relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaur.jpg` heißt und sich im gleichen Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild folgendermaßen einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem `images` Unterverzeichnis befindet, das im gleichen Verzeichnis wie die HTML-Seite liegt, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen sie zur Suchmaschinenoptimierung (SEO). Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaur.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mithilfe seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrem Server hosten, was in einfachen Setups bedeutet, dass Sie die Bilder für Ihre Website auf dem gleichen Server wie Ihr HTML halten. Darüber hinaus ist die Verwendung relativer URLs effizienter als absolute URLs in Bezug auf die Wartung (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder bereitzustellen.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht sind (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warnung:** Zeigen Sie _nie_ das `src` Attribut auf ein Bild, das auf der Website einer anderen Person gehostet wird, _ohne Erlaubnis_. Dies nennt man "Hotlinking". Es wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes bezahlen würde, wenn jemand Ihre Seite besucht. Es lässt Ihnen auch keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, ergibt das folgende Ergebnis:

![Ein grundlegendes Bild eines Dinosauriers, eingebettet in einen Browser, mit "Images in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Das liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) und nicht durch den Inhalt des Elements selbst definiert werden. Sie können mehr darüber unter {{Glossary("replaced_elements", "replaced elements")}} lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [auf GitHub ansehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativtext

Das nächste Attribut, das wir uns ansehen, ist `alt`. Sein Wert soll eine textliche Beschreibung des Bildes sein, für den Fall, dass das Bild nicht gesehen / angezeigt werden kann oder lange braucht, um wegen einer langsamen Internetverbindung geladen zu werden. Zum Beispiel könnte unser obiger Code so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt` Text zu testen, ist, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn zum Beispiel unser Bildname `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den Ersatztext anzeigen:

![Der Titel "Images in HTML", aber diesmal wird das Dinosaurier-Bild nicht angezeigt, und stattdessen wird der Ersatztext angezeigt.](alt-text.png)

Warum sollte man überhaupt Ersatztexte sehen oder benötigen? Sie können aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://de.wikipedia.org/wiki/Screenreader), um sich das Web vorlesen zu lassen. Tatsächlich ist es nützlich, Ersatztexte zur Beschreibung von Bildern zu haben, um den meisten Benutzern zu helfen.
- Wie oben beschrieben, könnten die Schreibweise der Datei oder des Pfades falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden noch textbasierte Browser, wie [Lynx](https://de.wikipedia.org/wiki/Lynx_%28Web-Browser%29), der den Ersatztext der Bilder anzeigt.
- Sie möchten möglicherweise Text zur Nutzung durch Suchmaschinen bereitstellen; zum Beispiel können Suchmaschinen Ersatztexte mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist besonders häufig bei Mobiltelefonen und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihrem `alt` Attribut schreiben? Das hängt davon ab, _warum_ das Bild überhaupt dort ist. Mit anderen Worten, was Ihnen fehlt, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber falls Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild bedeutende Informationen liefert, geben Sie die gleichen Informationen in einem _kurzen_ `alt` Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keine redundanten `alt` Texte. Wie nervig wäre es für einen sehenden Benutzer, wenn alle Absätze zweimal im Hauptinhalt geschrieben wären? Wenn das Bild ausreichend durch den Haupttext beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}} Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie immer noch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) angeben. In solchen Fällen können Sie den Text entweder im selben `<a>` Element oder im `alt` Attribut des Bildes angeben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift z.B. einen Schattenwurf benötigt, verwenden Sie dafür [CSS](/de/docs/Web/CSS/text-shadow) anstelle des Textes in einem Bild. Wenn Sie dies _wirklich nicht vermeiden können_, sollten Sie den Text im `alt` Attribut angeben.

Im Wesentlichen besteht der Schlüssel darin, ein benutzbares Erlebnis zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen Inhalt verpassen. Versuchen Sie, Bilder in Ihrem Browser auszuschalten, und sehen Sie, wie die Anzeige aussieht. Sie werden schnell erkennen, wie hilfreich Ersatztexte sind, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Sehen Sie unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Anleitung/Barrierefreiheit/HTML#text_alternatives) und [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu erfahren, wie Sie ein `alt` Attribut für Bilder in verschiedenen Situationen verwenden.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise finden. Zum Beispiel auf dem Mac können Sie <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigedaten der Bilddatei zu erhalten. Zurück zu unserem Beispiel, könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, wird er beginnen, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht abgerufen wurden (und das wird oft der Fall sein, da Bilddateigrößen oft viel größer sind als HTML-Dateien), wird der Browser nur das HTML anzeigen und die Seite mit dem Bild aktualisieren, sobald es empfangen wurde.

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

Sobald der Browser das HTML herunterlädt, wird der Browser damit beginnen, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild auf der Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten verschieben, um das Bild darüber einzupassen:

![Vergleich des Layouts der Seite während die Seite im Browser geladen wird und wenn sie fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Das Bewegen des Textes auf diese Weise ist für Benutzer extrem ablenkend, besonders wenn sie bereits begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, kennt der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür reservieren muss.

Das bedeutet, dass der Browser beim Herunterladen des Bildes den umgebenden Inhalt nicht bewegen muss.

![Vergleich des Layouts der Seite während die Seite im Browser geladen wird und wenn sie fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieses Features siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl, wie gesagt, es gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _vergrößern_ oder _zu verkleinern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, enden Sie mit Bildern, die körnig, unscharf oder zu klein aussehen und verschwenden Bandbreite mit dem Herunterladen eines Bildes, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie auch `title` Attribute zu Bildern hinzufügen, um bei Bedarf zusätzliche unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies ergibt ein Tooltip bei Mouseover, genau wie Linktitel:

![Das Dinosaurier-Bild, mit einem Tooltip-Titel darüber, der "Ein T-Rex im Manchester University Museum" liest](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich weil die Unterstützung für Screenreader sehr unberechenbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie fahren mit der Maus darüber (also z.B. kein Zugang für Tastaturbenutzer). Wenn Sie an weiteren Informationen interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext anstelle des Bildes hinzuzufügen.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie an der Reihe, zu spielen! Dieser aktive Lernabschnitt wird Sie mit einer Einbettungsübung auf Trab bringen. Ihnen steht ein grundlegendes {{htmlelement("img")}} Tag zur Verfügung; wir möchten, dass Sie das Bild unter folgender URL einbetten:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher sagten wir, niemals Bilder auf anderen Servern zu verlinken, aber das ist nur zu Lernzwecken, also lassen wir Sie diesmal davonkommen.

Wir möchten auch, dass Sie:

- Einen Ersatztext hinzufügen und überprüfen, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Die richtige `width` und `height` des Bildes festlegen (Hinweis: es ist 200px breit und 171px hoch), dann mit anderen Werten experimentieren, um zu sehen, welchen Effekt es hat.
- Einen `title` für das Bild festlegen.

Wenn Sie einen Fehler machen, können Sie immer mit der _Zurücksetzen_ Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_ Schaltfläche, um eine Antwort zu sehen:

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

Bilder (und andere Medientypen) im Web werden unter verschiedenen Lizenzarten veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Seite verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden oder den Lizenzbedingungen des Inhabers entsprechen.

### Verständnis von Lizenzarten

Schauen wir uns einige häufige Kategorien von Lizenzen an, die Sie im Web wahrscheinlich finden werden.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihre Werke oft unter einem geschlossenen Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte zur Nutzung (zum Beispiel Darstellung oder Verteilung) ihrer Werke haben. Wenn Sie Bilder mit einer "alle Rechte vorbehalten"-Lizenz verwenden möchten, müssen Sie eine der folgenden Möglichkeiten durchführen:

- Erlangen Sie die ausdrückliche, schriftliche Erlaubnis des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr für deren Nutzung. Dieses kann eine Einmalgebühr für unbegrenzte Nutzung sein ("royalty-free"), oder es könnte "rights-managed" sein, in welchem Fall Sie möglicherweise spezifische Gebühren pro Verwendung nach Zeitfenster, geografischer Region, Branche oder Medientyp usw. zahlen müssen.
- Beschränken Sie Ihre Nutzung auf solche, die als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) in Ihrer Gerichtsbarkeit betrachtet würden.

Autoren müssen ihrem Werk keinen Hinweis auf das Urheberrecht oder Lizenzbedingungen hinzufügen. Urheberrechte entstehen automatisch bei einem Originalwerk der Urheberschaft, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und es keine Urheberrechtshinweise oder Lizenzbedingungen gibt, ist der sicherste Weg, anzunehmen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Erlaubnis

Wenn das Bild unter einer permissiven Lizenz wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://chooser-beta.creativecommons.org/) veröffentlicht wird, müssen Sie keine Lizenzgebühr zahlen oder um Erlaubnis bitten, es zu verwenden. Es gibt jedoch verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie:

- Einen Link zur ursprünglichen Quelle des Bildes bereitstellen und dessen Urheber anerkennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Werke, die mit dem Bild erstellt wurden, unter derselben Lizenz wie das Original veröffentlichen.
- Keine abgeleiteten Werke teilen.
- Das Bild nicht in kommerziellen Arbeiten verwenden.
- Der Veröffentlichung eine Kopie der Lizenz beifügen, die das Bild verwendet.

Sie sollten die anwendbare Lizenz konsultieren, um die spezifischen Bedingungen zu erfahren, die Sie erfüllen müssen.

> [!NOTE]
> Im Zusammenhang mit permissiven Lizenzen können Sie auf den Begriff "Copyleft" stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons Lizenzen) legen fest, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das aus dem Code eines Projekts mit Copyleft-Lizenz erstellt wurde (das wird als "Fork" der ursprünglichen Software bezeichnet), ebenfalls unter der gleichen Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zur Untersuchung und Änderung zur Verfügung gestellt wird. Beachten Sie, dass generell Lizenzen, die für Software erstellt wurden, wie die GPL, nicht als gute Lizenzen für nicht-softwarebezogene Werke angesehen werden, da sie nicht mit der Absicht erstellt wurden, nicht-softwarebezogene Werke abzudecken.

Erforschen Sie die früher in diesem Abschnitt bereitgestellten Links, um über die verschiedenen Lizenzarten und die von ihnen spezifizierten Bedingungen zu lesen.

#### Gemeinfrei / CC0

Arbeiten, die in die Gemeinfreiheit freigegeben wurden, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es gilt kein Urheberrecht und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Arbeiten können auf verschiedene Weise in die Gemeinfreiheit gelangen, wie z.B. durch Verfall des Urheberrechts oder spezifischen Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, um Arbeiten in die Gemeinfreiheit zu bringen, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/), einer spezifischen Creative Commons-Lizenz, zu lizenzieren, die ein klares und eindeutiges rechtliches Werkzeug für diesen Zweck bietet.

Beim Verwenden von Bildern aus der Gemeinfreiheit, stellen Sie sicher, dass Sie einen Nachweis haben, dass das Bild im öffentlichen Bereich ist und behalten Sie den Nachweis für Ihre Unterlagen. Zum Beispiel können Sie einen Screenshot der ursprünglichen Quelle mit dem klar angezeigten Lizenzstatus machen und erwägen, eine Seite auf Ihrer Webseite hinzuzufügen, die eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen enthält.

### Suche nach Bildern mit erlaubeLizenzen

Sie können Bilder mit erlaubt Lizenzen für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bildabgebereien finden.

Suchen Sie nach Bildern mithilfe einer Beschreibung des Bildes, nach dem Sie suchen, zusammen mit relevanten Lizenzbedingungen. Zum Beispiel: Beim Suchen nach "gelber Dinosaurier" fügen Sie "Public Domain Bilder", "Public Domain Bildbibliothek", "images mit offenen Lizenzen" oder ähnliche Begriffe der Suche hinzu.

Einige Suchmaschinen haben Werkzeuge, um Ihnen zu helfen, Bilder mit erlaubten Lizenzen zu finden. Zum Beispiel: Wenn Sie Google verwenden, gehen Sie zum "Bilder"-Tab, um nach Bildern zu suchen, und klicken dann auf "Tools". Es gibt ein "Nutzungsrechte"-Dropdown in der resultierenden Symbolleiste, wo Sie speziell nach Bildern unter Creative Commons Lizenzen suchen können.

Bildabgabeseiten, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/), haben Suchoptionen, um Ihnen zu ermöglichen, nur nach Bildern mit erlaubeLizenzen zu suchen. Einige Seiten verbreiten ausschließlich Bilder und Symbole mit erlaubeLizenzen, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Lizenz, unter der das Bild veröffentlicht wurde, zu beachten, ist eine Frage, die Lizenzdetails zu finden, die Lizenz oder die Anleitungsseite der Quelle zu lesen und dann diese Anweisungen folgen. Angesehene Bildabgabeseiten machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften versehen

Wenn es um Bildunterschriften geht, gibt es mehrere Möglichkeiten, wie Sie eine Bildunterschrift hinzufügen können, die zu Ihrem Bild gehört. Zum Beispiel, es gibt nichts, das Sie daran hindern könnte, dies zu tun:

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

Das ist in Ordnung. Es enthält die Inhalte, die Sie benötigen, und ist gut stilisierbar mit CSS. Aber es gibt hier ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Bildunterschrift verknüpft, was Probleme für Screenreader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder mit Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung besteht darin, die HTML {{htmlelement("figure")}} und {{htmlelement("figcaption")}} Elemente zu verwenden. Diese sind genau für diesen Zweck erstellt: Bereitstellung eines semantischen Containers für Figuren und klarer Verknüpfung der Figur mit der Bildunterschrift. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}} Element teilt Browsern und assistiven Technologien mit, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}} Elements beschreibt.

> [!NOTE]
> Aus einer Sicht der Zugänglichkeit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Text unterschiedliche Rollen. Bildunterschriften profitieren sogar Menschen, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Text dieselbe Funktion wie ein abwesendes Bild hat. Daher sollten Bildunterschriften und `alt` Text nicht dasselbe sagen, denn sie erscheinen beide, wenn das Bild fehlt. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und zu sehen, wie es aussieht.

Eine Figur muss kein Bild sein. Es ist eine unabhängige Einheit von Inhalt, die:

- Ihre Bedeutung auf eine kompakte, leicht verständliche Art ausdrückt.
- An mehreren Stellen im linearen Ablauf der Seite passen könnte.
- Wesentliche Informationen zur Unterstützung des Haupttexts liefert.

Eine Figur könnte mehrere Bilder, ein Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Eine Figur erstellen

In diesem aktiven Lernabschnitt möchten wir, dass Sie den fertigen Code aus dem vorherigen aktiven Lernabschnitt nehmen und ihn in eine Figur umwandeln:

1. Umwickeln Sie ihn mit einem {{htmlelement("figure")}} Element.
2. Kopieren Sie den Text aus dem `title` Attribut, entfernen Sie das `title` Attribut und platzieren Sie den Text in einem {{htmlelement("figcaption")}} Element unter dem Bild.

Wenn Sie einen Fehler machen, können Sie immer mit der _Zurücksetzen_ Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_ Schaltfläche, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS {{cssxref("background-image")}} Eigenschaft und die anderen `background-*` Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jeden Absatz auf einer Seite zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist wohl einfacher zu positionieren und zu steuern als HTML-Bilder. Warum also HTML-Bilder verwenden? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie lediglich etwas Schönes hinzufügen möchten, um die visuelle Darstellung Ihrer Seite zu verbessern, ist dies in Ordnung. Solche Bilder haben jedoch überhaupt keine semantische Bedeutung. Sie können keine Textäquivalente haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild eine Bedeutung für Ihren Inhalt hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein zur Dekoration dient, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen ausführlich besprechen).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Weitere Tests, um zu prüfen, ob Sie diese Informationen behalten haben, finden Sie unter [Test your skills: HTML images](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images).

## Zusammenfassung

Das war's für den Moment. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel werden wir einen Gang höher schalten, indem wir betrachten, wie man HTML verwendet, um Video- und Audioinhalte in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
