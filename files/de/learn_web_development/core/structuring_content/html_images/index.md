---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: c99b4f2d0ea81c0e8822a749d218015c75995b5b
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Zu Beginn bestand das Web nur aus Text, was ziemlich langweilig war. Zum Glück dauerte es nicht lange, bis die Möglichkeit hinzukam, Bilder (und andere interessantere Inhalte) in Webseiten einzubetten. In diesem Artikel werden wir uns ausführlich mit dem {{htmlelement("img")}}-Element befassen, einschließlich der Grundlagen, der Beschriftung mit {{htmlelement("figure")}} und der Beziehung zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbereichssemantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um beispielsweise unangenehme ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, wenn ein Bild geladen ist und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web — halten Sie Dateigrößen klein.</li>
          <li>Verständnis von Medienressourcenlizenzen — verschiedene Lizenztypen, wie man sie einhält und wie man nach entsprechend lizenzierten Mediendateien sucht, die in Projekten verwendet werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie fügt man ein Bild auf einer Webseite ein?

Um ein Bild auf einer Webseite einzufügen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "Void-Element")}} (d.h. es kann keinen Kindinhalt haben und kein End-Tag), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um sich an relative und absolute URLs zu erinnern, bevor Sie fortfahren.

Wenn Ihr Bild beispielsweise `dinosaur.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild wie folgt einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn das Bild in einem `images`-Unterverzeichnis liegt, das sich im selben Verzeichnis wie die HTML-Seite befindet, dann würden Sie es so einbetten:

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

Es wird jedoch nicht empfohlen, über absolute URLs zu verlinken. Sie sollten die Bilder, die Sie auf Ihrer Website verwenden möchten, hosten, was bei einfachen Setups bedeutet, die Bilder für Ihre Website auf demselben Server wie Ihr HTML zu belassen. Außerdem ist es effektiver, relative URLs anstelle von absoluten URLs in Bezug auf Wartung zu verwenden (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain zu enthalten). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warnung:** _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das auf der Website eines anderen gehostet wird _ohne Erlaubnis_. Dies wird "Hotlinking" genannt. Es wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Lieferung des Bildes beim Besuch Ihrer Seite trägt. Es gibt Ihnen auch keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Das vorherige Code-Snippet, entweder mit der absoluten oder der relativen URL, liefert uns das folgende Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit "Images in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **replaced elements** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) und nicht durch den Inhalt des Elements selbst definiert werden. Sie können mehr über sie unter {{Glossary("replaced_elements", "replaced elements")}} lesen.

> [!NOTE]
> Das fertige Beispiel aus diesem Abschnitt können Sie [auf GitHub in Aktion sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html) ebenfalls).

### Alternativtext

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Sein Wert soll eine textuelle Beschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt werden kann oder lange benötigt, um zu rendern, weil die Internetverbindung langsam ist. Beispielsweise könnte unser oben stehender Code wie folgt modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn beispielsweise unser Bildname als `dinosooooor.jpg` geschrieben wurde, würde der Browser das Bild nicht anzeigen und stattdessen den Alternativtext anzeigen:

![Der Titel "Images in HTML", aber diesmal wird das Dinosaurierbild nicht angezeigt und ein Alternativtext ist an seiner Stelle.](alt-text.png)

Warum sollte man also jemals Alternativtext sehen oder benötigen? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um das Web vorzulesen. Tatsächlich ist es für die meisten Benutzer nützlich, Alternativtext bereitzustellen, um Bilder zu beschreiben.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder Pfades falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch nur textbasierte Browser wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den Alternativtext von Bildern anzeigen.
- Sie möchten eventuell Text bereitstellen, den Suchmaschinen verwenden können; zum Beispiel können Suchmaschinen den Alternativtext mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Datenübertragungsvolumen zu reduzieren und Ablenkungen zu vermeiden. Dies ist besonders häufig auf Mobiltelefonen der Fall und in Ländern, in denen die Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihrem `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt dort ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild bedeutende Informationen liefert, geben Sie dieselben Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie nervig wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt doppelt geschrieben wären? Wenn das Bild ausreichend vom Haupttextkörper beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags einfügen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie es entweder im gleichen `<a>`-Element oder im `alt`-Attribut des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, sollten Sie [CSS verwenden](/de/docs/Web/CSS/text-shadow), anstatt den Text in ein Bild zu setzen. Wenn Sie dies _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen ist der Schlüssel, eine nutzbare Erfahrung zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Versuchen Sie, in Ihrem Browser Bilder auszuschalten und sehen Sie, wie es aussieht. Sie werden schnell merken, wie hilfreich Alternativtext ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Sehen Sie sich unseren Leitfaden [Text Alternatives](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und den [Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) an, um zu lernen, wie man in verschiedenen Situationen ein `alt`-Attribut für Bilder verwendet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes festzulegen. Diese werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise ermitteln. Auf dem Mac können Sie zum Beispiel <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund dafür. Der HTML-Code Ihrer Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, wird er beginnen, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht abgerufen wurden (was oft der Fall sein wird, da die Dateigrößen von Bildern häufig viel größer sind als die von HTML-Dateien), wird der Browser nur das HTML rendern und die Seite aktualisieren, sobald das Bild abgerufen wurde.

Nehmen wir zum Beispiel an, wir haben nach dem Bild etwas Text:

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

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten auf die Seite verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts während des Ladens einer Seite und bei abgeschlossener Darstellung, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Das Bewegen des Textes auf diese Weise ist extrem ablenkend für Benutzer, besonders wenn sie begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mittels der Attribute `width` und `height` festlegen, weiß der Browser, bevor das Bild heruntergeladen wurde, wie viel Platz es dafür einräumen muss.

Dies bedeutet, dass der Browser beim Herunterladen des Bildes den umgebenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts während des Ladens einer Seite und bei abgeschlossener Darstellung, wenn die Bildgröße angegeben ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie bereits erwähnt, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mittels HTML-Attributen anzugeben, sollten Sie diese nicht verwenden, um Bilder _zu skalieren_.
>
> Wenn Sie die Bildgröße zu groß einstellen, gelangen Sie zu Bildern, die körnig, unscharf oder zu klein aussehen, und verschwenden Bandbreite, indem Sie ein Bild herunterladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie nicht das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

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

Dies gibt uns ein Tooltip beim Überfahren mit der Maus, genau wie Link-Titel:

![Das Dinosaurierbild mit einem Tooltip-Titel darüber, der "Ein T-Rex im Manchester University Museum" lautet.](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich basierend darauf, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser ihn nur anzeigen, wenn Sie mit einer Maus darüber schweben (also z. B. kein Zugang für Benutzer der Tastatur). Wenn Sie an weiteren Informationen dazu interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext und nicht als Anhang an das Bild beizufügen.

### Aktives Lernen: Einbetten eines Bildes

Jetzt sind Sie dran! Dieser Abschnitt mit aktivem Lernen bringt Sie mit einem Einbettungs-Übung in Schwung. Ihnen wird ein grundlegendes {{htmlelement("img")}}-Tag zur Verfügung gestellt; wir möchten, dass Sie das Bild an folgender URL einbetten:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, dass Sie niemals Hotlinking auf Bilder auf anderen Servern machen sollen, aber dies ist nur zu Lernzwecken, daher lassen wir Sie dieses eine Mal durchgehen.

Wir möchten auch, dass Sie:

- Fügen Sie etwas Alternativtext hinzu und überprüfen Sie, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Stellen Sie die richtige `width` und `height` des Bildes ein (Hinweis: es ist 200px breit und 171px hoch), dann experimentieren Sie mit anderen Werten, um zu sehen, welche Wirkung dies hat.
- Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie es jederzeit mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um eine Antwort zu sehen:

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

Bilder (und andere Medientypen) im Web werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Website verwenden, stellen Sie sicher, dass Sie es besitzen, Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis der Lizenztypen

Betrachten wir einige gängige Kategorien von Lizenzen, die Sie wahrscheinlich im Web finden werden.

#### Alle Rechte vorbehalten

Schöpfer von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihr Werk oft unter geschlossenem Urheberrechtsschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte haben, ihr Werk zu nutzen (z. B. anzuzeigen oder zu verteilen). Wenn Sie urheberrechtlich geschützte Bilder mit einer _Alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Handlungen durchführen:

- Holen Sie sich die ausdrückliche, schriftliche Erlaubnis des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr für die Nutzung. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("royalty-free") sein, oder es könnte "rights-managed" sein, in dem Fall könnten spezifische Gebühren je nach Nutzung erhoben werden, beispielsweise nach Zeitabschnitten, geografischer Region, Branche oder Medientyp, etc.
- Begrenzen Sie Ihre Nutzung auf solche, die in Ihrem Rechtsgebiet als [faire Nutzung](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) gelten würden.

Autoren sind nicht verpflichtet, einen Urheberrechtshinweis oder Lizenzbedingungen mit ihrem Werk zu versehen. Das Urheberrecht existiert automatisch bei einem Originalwerk der Autorschaft, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und keine Urheberrechtshinweise oder Lizenzbedingungen vorliegen, ist es der sicherste Weg, davon auszugehen, dass es durch das Urheberrecht mit allen Rechten geschützt ist.

#### Erlaubnisfreie

Wenn das Bild unter einer erlaubnisfreien Lizenz wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC)-Lizenz](https://creativecommons.org/chooser/) veröffentlicht wurde, müssen Sie keine Lizenzgebühr zahlen oder eine Erlaubnis einholen, um es zu verwenden. Es gibt jedoch verschiedene Lizenzbedingungen, die Sie erfüllen müssen, und diese variieren je nach Lizenz.

Zum Beispiel könnten Sie verpflichtet sein:

- Einen Link zur Originalquelle des Bildes bereitzustellen und den Urheber zu nennen.
- Anzugeben, ob Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Werke, die das Bild verwenden, unter derselben Lizenz wie das Original zu teilen.
- Keine abgeleiteten Werke zu teilen.
- Das Bild nicht in kommerziellen Arbeiten zu verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung, die das Bild verwendet, beizufügen.

Sie sollten die entsprechende Lizenz für die spezifischen Bedingungen, die Sie befolgen müssen, konsultieren.

> [!NOTE]
> Sie stoßen möglicherweise auf den Begriff "Copyleft" im Kontext von erlaubnisfreien Lizenzen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike"-Creative-Commons-Lizenzen) schreiben vor, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt verbreitet. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines Copyleft-geschützten Projekts erstellt wurde (dies wird als "Fork" der Originalsoftware bezeichnet), auch unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zum Studium und zur Änderung zur Verfügung gestellt wird. Beachten Sie, dass im Allgemeinen Lizenzen, die für Software entworfen wurden, wie die GPL, nicht als gute Lizenzen für Nicht-Software-Werke gelten, da sie nicht im Hinblick auf Nicht-Software-Werke entworfen wurden.

Erkunden Sie die Links, die weiter oben in diesem Abschnitt bereitgestellt wurden, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie festlegen, zu erfahren.

#### Public Domain/CC0

Arbeiten, die in die Public Domain veröffentlicht werden, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es gelten keine Urheberrechte, und sie können ohne Erlaubnis und ohne die Erfüllung von Lizenzbedingungen verwendet werden. Werke können durch verschiedene Mittel in die Public Domain gelangen, wie z. B. das Ablaufen des Urheberrechtsschutzes oder das explizite Verzichten auf Rechte.

Eine der effektivsten Methoden, um Werke in die Public Domain zu stellen, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/), einer speziellen Creative-Commons-Lizenz, zu lizenzieren, die ein klares und eindeutiges rechtliches Werkzeug für diesen Zweck bietet.

Wenn Sie Public Domain-Bilder verwenden, sollten Sie einen Nachweis darüber erhalten, dass das Bild in der Public Domain ist, und diesen Nachweis für Ihre Unterlagen aufbewahren. Beispielsweise können Sie einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus machen und in Betracht ziehen, Ihrer Website eine Seite hinzuzufügen, auf der eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen aufgeführt ist.

### Suche nach permissiv lizenzierten Bildern

Sie können permissiv lizenzierte Bilder für Ihre Projekte mithilfe einer Bildsuchmaschine oder direkt aus Bildarchiven finden.

Suchen Sie nach Bildern mit einer Beschreibung des gesuchten Bildes zusammen mit relevanten Lizenzbegriffen. Zum Beispiel, wenn Sie nach "gelbem Dinosaurier" suchen, fügen Sie "Bilder aus der öffentlichen Domain", "Bibliothek mit öffentlichen Domain-Bildern", "offen lizenzierte Bilder" oder ähnliche Begriffe zu Ihrer Suchanfrage hinzu.

Einige Suchmaschinen haben Tools, mit denen Sie Bilder mit permissiven Lizenzen finden können. Zum Beispiel, wenn Sie Google verwenden, gehen Sie zur Registerkarte "Bilder", um nach Bildern zu suchen, und klicken Sie dann auf "Tools". In der daraufhin erscheinenden Symbolleiste gibt es eine Dropdown-Auswahl "Nutzungsrechte", in der Sie speziell nach Bildern unter Creative-Commons-Lizenzen suchen können.

Bildarchivseiten, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/), haben Suchoptionen, die es Ihnen erlauben, nur nach permissiv lizenzierten Bildern zu suchen. Einige Seiten vertreiben ausschließlich permissiv lizenzierte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Erfüllung der Lizenz, unter der das Bild veröffentlicht wurde, ist eine Frage des Auffindens der Lizenzdetails, des Lesens der mit der Quelle bereitgestellten Lizenz- oder Anleitungsseite und des Befolgens dieser Anweisungen. Seriöse Bildarchive machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften kommentieren

Apropos Bildunterschriften, es gibt mehrere Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen können. Zum Beispiel würde Sie nichts daran hindern, dies zu tun:

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

Das ist in Ordnung. Es enthält den benötigten Inhalt und ist mit CSS schön stilbar. Aber hier gibt es ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Unterschrift verknüpft, was Probleme für Screenreader verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist es, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese sind genau für diesen Zweck erstellt worden: um einen semantischen Container für Figuren bereitzustellen und die Figur klar mit der Unterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element sagt den Browsern und Hilfstechnologien, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus Sicht der Barrierefreiheit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Texte unterschiedliche Rollen. Bildunterschriften sind auch für Menschen nützlich, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Texte dieselbe Funktionalität bieten wie ein abwesendes Bild. Daher sollten Bildunterschriften und `alt`-Texte nicht dasselbe sagen, weil beide erscheinen, wenn das Bild fehlt. Versuchen Sie, in Ihrem Browser Bilder auszuschalten und sehen Sie, wie es aussieht.

Eine Figur muss kein Bild sein. Es ist eine unabhängige Inhaltseinheit, die:

- Ihre Bedeutung auf kompakte, leicht zu erfassende Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite auftauchen könnte.
- Wesentliche Informationen liefert, die den Haupttext unterstützen.

Eine Figur könnte aus mehreren Bildern, einem Code-Snippet, Audio, Video, Gleichungen, einer Tabelle oder etwas anderem bestehen.

### Aktives Lernen: Erstellen einer Figur

In diesem Abschnitt mit aktivem Lernen möchten wir, dass Sie den fertigen Code aus dem vorherigen Abschnitt mit aktivem Lernen nehmen und ihn in eine Figur verwandeln:

1. Verpacken Sie ihn in ein {{htmlelement("figure")}}-Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und legen Sie den Text in einem {{htmlelement("figcaption")}}-Element unterhalb des Bildes ab.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit dem _Zurücksetzen_-Button zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_-Button, um eine Lösung zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jeder Seite auf jede Seite eines Paragraphen zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist möglicherweise einfacher zu positionieren und zu steuern als HTML-Bilder. Warum also HTML-Bilder verwenden? Wie oben angedeutet, sind CSS-Hintergrundbilder nur für Dekorationszwecke. Wenn Sie einfach etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keine semantische Bedeutung. Sie können keine Textäquivalente haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild eine Bedeutung im Sinne Ihres Inhalts hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Kernmodulen ausführlich behandeln).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images).

## Zusammenfassung

Das war's für jetzt. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel werden wir einen Gang höher schalten und uns ansehen, wie man HTML verwendet, um Video- und Audioinhalte in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
