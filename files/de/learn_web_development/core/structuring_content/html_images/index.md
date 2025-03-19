---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text, und es war wirklich ziemlich langweilig. Zum Glück dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns eingehend mit der Verwendung des {{htmlelement("img")}}-Elements befassen, einschließlich der Grundlagen, der Annotation mit Bildunterschriften unter Verwendung von {{htmlelement("figure")}} und detailliert wie es sich zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern verhält.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Der Begriff "Replaced Element" – was bedeutet er?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwenden von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um beispielsweise unangenehme ruckartige Aktualisierungen der Benutzeroberfläche zu vermeiden, sobald ein Bild vollständig geladen und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web – Halten Sie die Dateigrößen klein.</li>
          <li>Verständnis der Lizenzen für Medienressourcen – verschiedene Lizenztypen, wie man sie einhält und wie man nach entsprechend lizenzierten Mediendateien für Projekte sucht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platziert man ein Bild auf einer Webseite?

Um ein Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "Void-Element")}} (das bedeutet, es kann keinen Kindelemente haben und kein End-Tag besitzen), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild, das geladen werden kann.

Das [`alt`-Attribut wird unten beschrieben](#alternative_texte).

> [!NOTE]
> Sie sollten [Ein kurzer Leitfaden zu URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis zu relativen und absoluten URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild beispielsweise `dinosaurier.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild folgendermaßen einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem Unterverzeichnis `images` befindet, das sich im selben Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen sie zum SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaurier.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrem eigenen Server hosten, was in einfachen Setups bedeutet, dass Sie die Bilder für Ihre Webseite auf dem gleichen Server wie Ihre HTML-Dateien aufbewahren. Darüber hinaus ist es in Bezug auf die Wartung effizienter, relative URLs anstatt absolute URLs zu verwenden (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder auszuliefern.

Falls Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz, unter der sie veröffentlicht wurden, zu verwenden (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warning:** _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das ohne Erlaubnis auf der Webseite einer anderen Person gehostet wird. Dies wird "Hotlinking" genannt. Es gilt als unethisch, da jemand anderes die Bandbreitenkosten für die Auslieferung des Bildes zahlt, wenn jemand Ihre Seite besucht. Zudem haben Sie keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, wird uns das folgende Ergebnis geben:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **Replaced Elements** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) und nicht durch den Inhalt des Elements selbst definiert werden. Weitere Informationen dazu finden Sie unter {{Glossary("replaced_elements", "Replaced Elements")}}.

> [!NOTE]
> Das vollständige Beispiel aus diesem Abschnitt finden Sie [auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternative Texte

Das nächste Attribut, das wir betrachten werden, ist `alt`. Sein Wert soll eine textuelle Beschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt werden kann oder lange dauert, um gerendert zu werden, aufgrund einer langsamen Internetverbindung. Zum Beispiel könnte unser obenstehender Code wie folgt modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, besteht darin, den Dateinamen absichtlich falsch zu schreiben. Wenn beispielsweise unser Bildname `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den alternativen Text anzeigen:

![Der Titel "Bilder in HTML", aber dieses Mal wird das Dinosaurierbild nicht angezeigt und der alternative Text ist an seiner Stelle zu sehen.](alt-text.png)

Warum sollten Sie überhaupt jemals alternativen Text sehen oder benötigen? Er kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://de.wikipedia.org/wiki/Screenreader), um das Web vorzulesen. Tatsächlich ist es nützlich, alternativen Text zur Beschreibung von Bildern zur Verfügung zu haben.
- Wie oben beschrieben könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Manche Menschen verwenden immer noch textbasierte Browser wie [Lynx](<https://de.wikipedia.org/wiki/Lynx_(Browser)>), der den alternativen Text von Bildern anzeigt.
- Sie möchten möglicherweise Text für Suchmaschinen bereitstellen; zum Beispiel können Suchmaschinen den alternativen Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist besonders häufig bei Mobiltelefonen und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt dort ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht zum Inhalt gehört, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild signifikante Informationen liefert, stellen Sie dieselben Informationen in einem _kurzen_ `alt`-Text bereit – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie nervig wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt doppelt geschrieben wären? Wenn das Bild im Haupttextkörper ausreichend beschrieben wird, können Sie einfach `alt=""` verwenden.

- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags einfügen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Link-Text](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie ihn entweder im selben `<a>`-Element oder im `alt`-Attribut des Bildes schreiben – je nachdem, was für Ihren Fall am besten geeignet ist.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow) dafür anstelle des Einfügens des Textes in ein Bild. Wenn Sie dies jedoch wirklich nicht vermeiden können, sollten Sie den Text im `alt`-Attribut bereitstellen.

Letztendlich ist das Ziel, eine nutzbare Erfahrung zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Versuchen Sie, in Ihrem Browser die Bilder zu deaktivieren und zu sehen, wie es aussieht. Sie werden bald feststellen, wie hilfreich alternativer Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Siehe unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie man ein `alt`-Attribut für Bilder in verschiedenen Situationen verwendet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise ermitteln. Auf einem Mac können Sie beispielsweise <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Kehren wir zu unserem Beispiel zurück, so könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund dafür. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da die Dateigrößen von Bildern oft viel größer sind als die von HTML-Dateien), wird der Browser nur das HTML rendern und die Seite mit dem Bild aktualisieren, sobald es empfangen wird.

Wenn wir beispielsweise Text nach dem Bild haben:

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

Sobald das Bild geladen ist, fügt der Browser das Bild in die Seite ein. Da das Bild Platz einnimmt, muss der Browser den Text auf der Seite nach unten verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Das Verschieben des Texts auf diese Weise ist äußerst ablenkend für Benutzer, insbesondere wenn sie bereits damit begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, weiß der Browser bereits, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür reservieren muss.

Das bedeutet, dass der Browser, wenn das Bild heruntergeladen wurde, den umliegenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen hervorragenden Artikel zur Geschichte dieser Funktion siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie wir gesagt haben, gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie diese nicht verwenden, um Bilder _umzuwandeln_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, unscharf oder zu klein aussehen und verschwenden Bandbreite mit dem Herunterladen eines Bildes, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht bewahren. Sie sollten einen Bildeditor verwenden, um Ihr Bild in der richtigen Größe zu erzeugen, bevor Sie es auf Ihrer Webseite einfügen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie auch `title`-Attribute zu Bildern hinzufügen, um weitere unterstützende Informationen bei Bedarf bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip-Symbol beim Überschweben mit der Maus, genau wie Titel bei Links:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der lautet: Ein T-Rex im Manchester University Museum.](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, die hauptsächlich darauf basieren, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie verwenden eine Maus (d.h. es gibt keinen Zugang für Tastaturbenutzer). Wenn Sie an weiteren Informationen dazu interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen in den Hauptartikeltext zu integrieren, anstatt sie dem Bild beizufügen.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie an der Reihe, zu spielen! Dieser Abschnitt zum aktiven Lernen wird Sie mit einer Einbettungsübung in Gang bringen. Ihnen wird ein grundlegendes {{htmlelement("img")}}-Tag zur Verfügung gestellt; wir möchten, dass Sie das Bild einbetten, das sich unter der folgenden URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, dass man niemals Bilder von anderen Servern hotlinken soll, aber das ist nur zu Lernzwecken, also lassen wir es diesmal durchgehen.

Wir möchten auch, dass Sie:

- Fügen Sie einen alternativen Text hinzu und überprüfen Sie, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Stellen Sie die korrekte `width` und `height` des Bildes ein (Hinweis: es ist 200px breit und 171px hoch) und experimentieren Sie dann mit anderen Werten, um zu sehen, was der Effekt ist.
- Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie ihn immer mithilfe der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen:

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

Bilder (und andere Arten von Medienressourcen), die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Webseite verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Lassen Sie uns einige häufige Lizenzkategorien betrachten, die Sie im Web wahrscheinlich finden werden.

#### Alle Rechte vorbehalten

Schöpfer von Originalwerken wie Songs, Büchern oder Software veröffentlichen ihr Werk oft unter geschlossenem Urheberrechtsschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig das ausschließliche Recht auf Nutzung (zum Beispiel Anzeige oder Verbreitung) ihres Werks haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _Alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Schritte durchführen:

- Holen Sie sich eine ausdrückliche, schriftliche Genehmigung vom Urheberrechtsinhaber.
- Zahlen Sie eine Lizenzgebühr, um sie zu verwenden. Dies kann eine einmalige Gebühr für die unbegrenzte Nutzung ("lizenzfrei") sein, oder es könnte "rechteverwaltet" sein, in diesem Fall müssten Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitfenster, geografischem Gebiet, Branche oder Medientyp usw. zahlen.
- Beschränken Sie Ihre Nutzung auf diejenigen, die in Ihrem Zuständigkeitsbereich als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) betrachtet werden würden.

Autoren sind nicht verpflichtet, eine Urheberrechtshinweismeldung oder Lizenzbedingungen mit ihrem Werk einzugeben. Das Urheberrecht besteht automatisch in einem originären Werkschaffen, sobald es in einem greifbaren Medium geschaffen wird. Wenn Sie also ein Bild online finden und es keine Urheberrechtshinweise oder Lizenzbedingungen gibt, ist der sicherste Weg, anzunehmen, dass es durch Urheberrecht mit allen Rechten geschützt ist.

#### Freizügig

Wenn das Bild unter einer freizügigen Lizenz veröffentlicht wird, wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC)-Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühr zahlen oder eine Genehmigung einholen, um es zu verwenden. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie verpflichtet sein:

- Einen Link zur Originalquelle des Bildes bereitstellen und den Urheber anerkennen.
- Anzugeben, ob Änderungen daran vorgenommen wurden.
- Alle mit Hilfe des Bildes erstellten Derivate unter der gleichen Lizenz wie das Original zu teilen.
- Keine Derivate überhaupt zu teilen.
- Das Bild nicht in kommerziellen Arbeiten zu verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung zu geben, die das Bild verwendet.

Sie sollten die anwendbare Lizenz konsultieren, um die spezifischen Bedingungen zu erfahren, die Sie befolgen müssen.

> [!NOTE]
> Sie könnten auf den Begriff "Copyleft" im Kontext von freizügigen Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike"-Creative Commons-Lizenzen) geben vor, dass Derivate unter der gleichen Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Software-Welt prominent. Die Grundidee ist, dass ein neues Projekt, das auf dem Code eines Copyleft-lizenzierten Projekts basiert (dies ist als "Fork" der ursprünglichen Software bekannt), ebenfalls unter der gleichen Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zur Verfügung steht, um ihn zu studieren und zu ändern. Beachten Sie, dass Lizenzen, die im Allgemeinen für Software erstellt wurden, wie die GPL, nicht als gute Lizenzen für nicht-softwarebasierte Werke angesehen werden, da sie nicht mit Blick auf nicht-softwarebasierte Werke verfasst wurden.

Erkunden Sie die in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenzarten und die Arten von Bedingungen zu erfahren, die sie spezifizieren.

#### Öffentliches Domain/CC0

Ein Werk, das in den öffentlichen Bereich freigegeben wurde, wird manchmal als "keine Rechte vorbehalten" bezeichnet — es gilt kein Urheberrecht, und es kann ohne Genehmigung und ohne Erfüllung von Lizenzbedingungen verwendet werden. Ein Werk kann auf verschiedene Weise in den öffentlichen Bereich gelangen, wie z.B. durch Ablauf des Urheberrechts oder spezifischen Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, ein Werk in den öffentlichen Bereich zu platzieren, besteht darin, es unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer bestimmten Creative Commons-Lizenz, die ein klares und eindeutiges rechtliches Instrument zu diesem Zweck bietet.

Wenn Sie Bilder aus der öffentlichen Domain verwenden, holen Sie sich den Nachweis, dass das Bild in der öffentlichen Domain ist, und bewahren Sie den Nachweis für Ihre Unterlagen auf. Beispielsweise machen Sie einen Screenshot der Originalquelle mit dem Lizenzstatus deutlich angezeigt und erwägen, Ihrer Webseite eine Seite hinzuzufügen, die eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen enthält.

### Suche nach freizügig lizenzierten Bildern

Sie können freizügig lizenzierte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bildrepositorien finden.

Suchen Sie nach Bildern unter Verwendung einer Beschreibung des gesuchten Bildes zusammen mit relevanten Lizenzierungskonditionen. Zum Beispiel, wenn Sie nach einem "gelben Dinosaurier" suchen, fügen Sie "Öffentliche Domain-Bilder", "Bildbibliothek der öffentlichen Domain", "offen lizenzierte Bilder" oder ähnliche Begriffe zur Suchabfrage hinzu.

Einige Suchmaschinen haben Tools, die Ihnen helfen, Bilder mit freizügigen Lizenzen zu finden. Zum Beispiel, wenn Sie Google verwenden, gehen Sie auf die Registerkarte "Bilder", um nach Bildern zu suchen, dann klicken Sie auf "Tools". Es gibt ein Dropdown für "Nutzungsrechte" in der resultierenden Symbolleiste, in dem Sie spezifisch nach Bildern unter Creative Commons-Lizenzen suchen können.

Bildrepos, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/), und [Pixabay](https://pixabay.com/), haben Suchoptionen, mit denen Sie explizit nach freizügig lizenzierten Bildern suchen können. Einige Sites verteilen ausschließlich freizügig lizenzierte Bilder und Icons, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild freigegeben wurde, basiert auf dem Auffinden der Lizenzdetails, dem Lesen der Lizenz oder der zur Verfügung gestellten Anleitungsseite und dem Befolgen dieser Anweisungen. Seriöse Bildrepos machen ihre Lizenzbedingungen klar und leicht auffindbar.

## Bilder mit Figuren und Bildunterschriften annotieren

Apropos Bildunterschriften: Es gibt mehrere Möglichkeiten, eine Bildunterschrift zusammen mit Ihrem Bild hinzuzufügen. Zum Beispiel würde nichts Sie daran hindern, dies zu tun:

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

Das ist in Ordnung. Es enthält die benötigten Inhalte und ist mit CSS stilvoll gestaltbar. Aber es gibt ein Problem hier: Es gibt nichts, das das Bild semantisch mit seiner Bildunterschrift verbindet, was zu Problemen mit Screenreadern führen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist es, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese sind genau für diesen Zweck geschaffen: um einen semantischen Container für Figuren zu bieten und das Bild klar mit der Bildunterschrift zu verbinden. Unser obiges Beispiel könnte so umgeschrieben werden:

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
> Aus einer Zugänglichkeitsserie haben Bildunterschriften und `alt`-Text verschiedene Rollen. Bildunterschriften nutzen sogar Menschen, die das Bild sehen können, während `alt`-Text die gleiche Funktionalität wie ein nicht vorhandenes Bild bietet. Deshalb sollten Bildunterschriften und `alt`-Text nicht einfach das Gleiche sagen, da beide erscheinen, wenn das Bild fehlt. Versuchen Sie, in Ihrem Browser die Bilder zu deaktivieren und zu sehen, wie es aussieht.

Eine Figur muss kein Bild sein. Sie ist eine eigenständige Informationseinheit, die:

- Ihren Sinn in einer kompakten, leicht verständlichen Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite stehen könnte.
- Wesentliche Informationen bereitstellt, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, einen Codeschnipsel, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Erstellen einer Figur

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie den fertigen Code aus dem vorherigen Abschnitt zum aktiven Lernen nehmen und ihn in eine Figur umwandeln:

1. Verpacken Sie ihn in ein {{htmlelement("figure")}}-Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut, und setzen Sie den Text in ein {{htmlelement("figcaption")}}-Element unterhalb des Bildes.

Wenn Sie einen Fehler machen, können Sie ihn immer mithilfe der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Beispielsweise, um ein Hintergrundbild auf jeder Seite auf ein Bild zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das eingebettete Bild ist möglicherweise leichter zu positionieren und zu steuern als HTML-Bilder. Warum also die Mühe mit HTML-Bildern? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie einfach etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben allerdings keine semantische Bedeutung. Sie können keine Textequivalente haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild eine bedeutende Rolle im Inhalt Ihrer Seite spielt, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein dekorativer Natur ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen ausführlich behandeln).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images).

## Zusammenfassung

Das war's fürs Erste. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel werden wir es auf ein höheres Niveau anheben und uns ansehen, wie man HTML verwendet, um Video- und Audioinhalte in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
