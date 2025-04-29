---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Am Anfang bestand das Web nur aus Text, was wirklich ziemlich langweilig war. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. In diesem Artikel werden wir uns ausführlich damit beschäftigen, wie man das {{htmlelement("img")}}-Element verwendet, einschließlich der Grundlagen, der Annotation mit Beschriftungen mithilfe von {{htmlelement("figure")}}, und wie es sich auf {{Glossary("CSS", "CSS")}} Hintergrundbilder bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textsemantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verwendung von <code>width</code> und <code>height</code>, um beispielsweise unangenehme ruckartige Updates der UI zu vermeiden, nachdem ein Bild geladen und angezeigt wurde.</li>
          <li>Optimierung von Medieninhalten für das Web — halten Sie die Dateigrößen klein.</li>
          <li>Verständnis der Lizenzierung von Medieninhalten — verschiedene Lizenztypen, wie man ihnen entspricht und wie man nach entsprechend lizenzierten Medieninhalten für die Verwendung in Projekten sucht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "Leer-Element")}} (was bedeutet, dass es keine Kindinhalte haben und kein End-Tag haben kann), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild zeigt, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird weiter unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaur.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild folgendermaßen einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Befindet sich das Bild in einem Unterordner `images`, der sich im gleichen Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und berücksichtigen sie für die SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaur.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Website verwenden möchten, selbst hosten, was in einfachen Setups bedeutet, dass Sie die Bilder für Ihre Website auf demselben Server wie Ihr HTML speichern. Darüber hinaus ist es effizienter, relative URLs anstelle von absoluten URLs zu verwenden, was die Wartung betrifft (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs mit der neuen Domain aktualisieren). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medieninhalte und Lizenzierung](#medieninhalte_und_lizenzierung) unten für mehr Informationen).

> **Warning:** _Niemals_ das `src`-Attribut auf ein Bild verweisen lassen, das auf der Website eines anderen ohne Erlaubnis gehostet wird. Dies wird "Hotlinking" genannt und gilt als unethisch, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes zahlt, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, ob das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Code-Schnipsel, entweder mit der absoluten oder relativen URL, wird uns das folgende Ergebnis liefern:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einem Browser, mit "Images in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert sind und nicht durch die Inhalte des Elements selbst. Sie können mehr darüber unter {{Glossary("replaced_elements", "ersetzte Elemente")}} lesen.

> [!NOTE]
> Das fertige Beispiel aus diesem Abschnitt können Sie [auf GitHub ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativer Text

Das nächste Attribut, das wir uns anschauen werden, ist `alt`. Sein Wert soll eine textliche Beschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange zum Rendern braucht. Beispielsweise könnte unser obiger Code folgendermaßen modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn unser Bildname zum Beispiel als `dinosooooor.jpg` falsch geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den `alt`-Text anzeigen:

![Das "Images in HTML"-Titel, aber diesmal wird das Dinosaurierbild nicht angezeigt, und es wird stattdessen der `alt`-Text angezeigt.](alt-text.png)

Warum sollten Sie also jemals `alt`-Text sehen oder benötigen? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screen Reader](https://en.wikipedia.org/wiki/Screen_reader), um das Web für ihn vorzulesen. Tatsächlich ist es für die meisten Benutzer nützlich, `alt`-Texte zur Beschreibung von Bildern zu haben.
- Wie oben beschrieben, könnte die Rechtschreibung des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch nur Textbrowser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den `alt`-Text der Bilder anzeigen.
- Sie möchten möglicherweise Text bereitstellen, den Suchmaschinen nutzen können; Suchmaschinen können zum Beispiel `alt`-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist besonders häufig auf Mobiltelefonen und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie also in Ihrem `alt`-Attribut schreiben? Das hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen liefert, geben Sie die gleichen Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie nervig wäre es für einen sehenden Benutzer, wenn alle Absätze doppelt im Hauptinhalt geschrieben wären? Wenn das Bild im Haupttextteil ausreichend beschrieben ist, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}}-Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie ihn entweder innerhalb desselben `<a>`-Elements oder im `alt`-Attribut des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift einen Schlagschatten benötigt, verwenden Sie [CSS](/de/docs/Web/CSS/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Wenn Sie dies _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen besteht der Schlüssel darin, eine benutzerfreundliche Erfahrung zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen ihrer Inhalte verpassen. Versuchen Sie, in Ihrem Browser Bilder auszuschalten und sehen Sie, wie es aussieht. Sie werden schnell merken, wie hilfreich `alt`-Text ist, wenn das Bild nicht angezeigt werden kann.

> [!NOTE]
> Sehen Sie sich unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Entscheidungsbaum zu Alt-Texten](https://www.w3.org/WAI/tutorials/images/decision-tree/) an, um zu lernen, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Diese werden als Ganzzahlen ohne Einheit angegeben und stellen die Breite und Höhe des Bildes in Pixel dar.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise herausfinden. Auf dem Mac können Sie beispielsweise <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht erhalten wurden (und dies wird oft der Fall sein, da Bilddateigrößen oft viel größer sind als HTML-Dateien), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

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

Sobald der Browser das HTML heruntergeladen hat, beginnt er, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten auf der Seite verschieben, um das Bild darüber zu passen:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt, und wenn er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Den Text auf diese Weise zu verschieben, lenkt die Benutzer extrem ab, insbesondere wenn sie ihn bereits begonnen haben zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mit den Attributen `width` und `height` angeben, dann weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür bereitstellen muss.

Dies bedeutet, dass der Browser den umgebenden Inhalt nicht verschieben muss, wenn das Bild heruntergeladen ist.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt, und wenn er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen hervorragenden Artikel über die Geschichte dieser Funktion siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie gesagt, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder _neu zu skalieren_.
>
> Wenn Sie die Bildgröße zu groß einstellen, enden Sie mit Bildern, die körnig, unscharf oder zu klein aussehen, und verschwenden Bandbreite, indem Sie ein Bild herunterladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten einen Bildbearbeitungsprogramm verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) statt dessen verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#adding_supporting_information_with_the_title_attribute) können Sie auch `title`-Attribute zu Bildern hinzufügen, um bei Bedarf zusätzliche unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns bei Mausüberflug ein Tooltip, genau wie bei Linktiteln:

![Das Dinosaurierbild mit einem Tooltip-Titel darüber, der "Ein T-Rex in der Ausstellung im Manchester University Museum" liest](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitproblemen, hauptsächlich basierend auf der Tatsache, dass die Unterstützung von Screenreadern sehr unvorhersehbar ist und die meisten Browser sie nicht anzeigen, es sei denn, Sie schweben mit einer Maus darüber (also z. B. kein Zugriff für Tastaturbenutzer). Wenn Sie an weiteren Informationen darüber interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext einzuschließen, anstatt dem Bild angehängt.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie dran, zu spielen! Dieser Abschnitt des aktiven Lernens wird Sie mit einer Einbettungsübung in Schwung bringen. Sie erhalten einen grundlegenden {{htmlelement("img")}}-Tag und wir möchten, dass Sie das Bild unter der folgenden URL einbetten:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Vorhin haben wir gesagt, Sie sollten niemals Hotlinks zu Bildern auf anderen Servern erstellen, aber das ist nur zu Lernzwecken, also lassen wir das diesmal durchgehen.

Wir möchten, dass Sie:

- Fügen Sie einige `alt`-Texte hinzu und prüfen Sie, ob sie funktionieren, indem Sie die Bild-URL falsch schreiben.
- Setzen Sie die korrekte `width` und `height` des Bildes (Hinweis: es ist 200px breit und 171px hoch), und experimentieren Sie dann mit anderen Werten, um den Effekt zu sehen.
- Setzen Sie einen `title` für das Bild.

Wenn Sie einen Fehler machen, können Sie es immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die _Lösung anzeigen_-Taste, um eine Antwort zu sehen:

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

## Medieninhalte und Lizenzierung

Bilder (und andere Medientypen), die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Website verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder den Lizenzbedingungen des Eigentümers entsprechen.

### Lizenztypen verstehen

Lassen Sie uns einige allgemeine Kategorien von Lizenzen betrachten, die Sie wahrscheinlich im Web finden werden.

#### Alle Rechte vorbehalten

Urheber eines Originalwerks, wie Lieder, Bücher oder Software, veröffentlichen ihre Arbeit oft unter geschlossenem Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte haben, ihre Arbeit zu verwenden (zum Beispiel anzuzeigen oder zu verbreiten). Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Holen Sie sich eine ausdrückliche, schriftliche Genehmigung vom Urheberrechtsinhaber.
- Zahlen Sie eine Lizenzgebühr, um sie zu verwenden. Dies kann eine einmalige Gebühr für uneingeschränkte Nutzung ("royalty-free") sein oder es könnte "rights-managed" sein, in diesem Fall müssen Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitfenster, geografischer Region, Branche oder Medientyp usw. zahlen.
- Beschränken Sie Ihre Nutzungen auf solche, die in Ihrem Rechtsgebiet als [fair use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) angesehen werden könnten.

Autoren müssen ihrem Werk keine Urheberrechtshinweise oder Lizenzbedingungen beifügen. Das Urheberrecht besteht automatisch in einem Originalwerk, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und keine Urheberrechtshinweise oder Lizenzterms vorhanden sind, ist der sicherste Weg, anzunehmen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Erlaubnisgebend

Wenn das Bild unter einer erlaubnisgebenden Lizenz veröffentlicht wird, wie der [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühr zahlen oder um Erlaubnis bitten, es zu verwenden. Trotzdem gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel müssen Sie möglicherweise:

- Einen Link zur ursprünglichen Quelle des Bildes bereitstellen und seinen Schöpfer nennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Sämtliche abgeleiteten Werke, die mithilfe des Bildes erstellt wurden, unter der gleichen Lizenz wie das Original veröffentlichen.
- Sämtliche abgeleiteten Werke überhaupt nicht teilen.
- Das Bild in kommerziellen Werken nicht verwenden.
- Eine Kopie der Lizenz mit jeder Veröffentlichung, die das Bild verwendet, beifügen.

Sie sollten im anwendbaren Lizenztext nachsehen, um die spezifischen Terms, die Sie befolgen müssen, zu verstehen.

> [!NOTE]
> Sie könnten den Begriff "Copyleft" im Kontext von erlaubnisgebenden Lizenzen hören. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike"-Creative Commons-Lizenzen) schreiben vor, dass abgeleitete Werke unter der gleichen Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines Copyleft-lizenzierten Projekts erstellt wurde (das wird als "Fork" der ursprünglichen Software bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch für andere verfügbar gemacht wird, um ihn zu studieren und zu modifizieren. Beachten Sie, dass Lizenzen, die für Software entworfen wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für Nicht-Software-Werke angesehen werden, da sie nicht mit Nicht-Software-Werken im Sinn entworfen wurden.

Erforschen Sie die Links, die früher in diesem Abschnitt bereitgestellt wurden, um über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie angeben, zu lesen.

#### Öffentlicher Bereich/CC0

Arbeiten, die in den öffentlichen Bereich veröffentlicht werden, werden manchmal als "keine Rechte vorbehalten" bezeichnet — kein Urheberrecht gilt für sie, und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Arbeiten können auf verschiedene Weise in den öffentlichen Bereich gelangen, wie z. B. durch das Erlöschen von Urheberrechten oder das spezifische Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, Arbeit in den öffentlichen Bereich zu stellen, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer speziellen Creative Commons-Lizenz, die ein klares und unmissverständliches rechtliches Instrument für diesen Zweck bietet.

Wenn Sie Öffentlichkeitsbilder verwenden, erhalten Sie den Nachweis, dass das Bild im Public Domain ist, und behalten Sie den Nachweis für Ihre Aufzeichnungen. Zum Beispiel machen Sie einen Screenshot der ursprünglichen Quelle mit dem Lizenzstatus deutlich angezeigt und erwägen, eine Seite zu Ihrer Website hinzuzufügen, die eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen enthält.

### Nach Bildern mit erlaubnisgebenden Lizenzen suchen

Sie können nach freien Bildern für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bildbeständen suchen.

Suchen Sie nach Bildern mit einer Beschreibung des Bildes, das Sie suchen, zusammen mit entsprechenden Lizenzbedingungen. Zum Beispiel, wenn Sie nach "gelber Dinosaurier" suchen, fügen Sie "Öffentlichkeitsbilder", "Bibliothek öffentlicher Bilder", "freie lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Tools, die Ihnen helfen können, nach Bildern mit erlaubnisgebenden Lizenzen zu suchen. Beispielsweise können Sie in Google zur Registerkarte "Bilder" gehen, um nachbildern zu suchen, und dann auf "Tools" klicken. Es gibt ein Dropdown-Menü "Verwendungsrechte" in der resultierenden Werkzeugleiste, wo Sie spezifisch nach Bildern unter Creative-Commons-Lizenzen suchen können.

Bildbestandseiten wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, die es Ihnen ermöglichen, nur nach frei lizenzierten Bildern zu suchen. Einige Seiten verteilen ausschließlich freie Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Das Einhalten der Lizenz, unter der das Bild veröffentlicht wurde, ist eine Angelegenheit des Auffindens der Lizenzdetails, des Lesens der Lizenz- oder Anleitungsseite, die von der Quelle bereitgestellt wird, und dann dem Befolgen dieser Anweisungen. Seriöse Bildbestände machen ihre Lizenzbedingungen klar und einfach zu finden.

## Bilder mit Figuren und Figurenbeschriftungen annotieren

Apropos Beschriftungen, es gibt eine Reihe von Möglichkeiten, wie Sie eine Beschriftung zu Ihrem Bild hinzufügen könnten. Beispielsweise würde nichts dagegen sprechen, das Folgende zu tun:

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

Das ist in Ordnung. Es enthält die benötigten Inhalte und lässt sich mit CSS schön stilisieren. Aber es gibt ein Problem: Es gibt nichts, was das Bild semantisch mit seiner Beschriftung verknüpft, was für Screenreader problematisch sein kann. Was ist zum Beispiel, wenn Sie 50 Bilder und Beschriftungen haben, welche Beschriftung gehört zu welchem Bild?

Eine bessere Lösung besteht darin, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese wurden genau für diesen Zweck erstellt: um einen semantischen Container für Figuren bereitzustellen und um die Figur klar mit der Beschriftung zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element teilt Browsern und unterstützender Technologie mit, dass die Beschriftung den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einer Zugänglichkeitsperspektive haben Beschriftungen und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text unterschiedliche Rollen. Beschriftungen sind auch für Menschen von Vorteil, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text die gleiche Funktion wie ein fehlendes Bild bietet. Daher sollten Beschriftungen und `alt`-Text nicht einfach dasselbe sagen, weil sie beide angezeigt werden, wenn das Bild fehlt. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und sehen Sie sich an, wie es aussieht.

Eine Figur muss kein Bild sein. Es ist eine eigenständige Einheit von Inhalten, die:

- Ihre Bedeutung auf kompakte, leicht verständliche Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite platziert werden könnte.
- Wesentliche Informationen zur Unterstützung des Haupttextes bietet.

Eine Figur könnte mehrere Bilder, ein Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Eine Figur erstellen

In diesem Abschnitt des aktiven Lernens möchten wir, dass Sie den fertigen Code aus dem vorherigen aktiven Lernabschnitt nehmen und ihn in eine Figur verwandeln:

1. Wickeln Sie ihn in ein {{htmlelement("figure")}}-Element ein.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und setzen Sie den Text in ein {{htmlelement("figcaption")}}-Element unter das Bild.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich festsitzen, drücken Sie die _Lösung anzeigen_-Taste, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Beispielsweise könnten Sie, um ein Hintergrundbild auf jeden Absatz einer Seite zu legen, Folgendes tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist möglicherweise einfacher zu positionieren und zu steuern als HTML-Bilder. Warum also HTML-Bilder verwenden? Wie oben angedeutet, sind CSS-Hintergrundbilder nur für Dekoration. Wenn Sie einfach etwas Hübsches auf Ihrer Seite hinzufügen möchten, um die visuellen Aspekte zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch überhaupt keine semantische Bedeutung. Sie können keine Textäquivalente haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammengefasst: Wenn ein Bild in Bezug auf Ihren Inhalt eine Bedeutung hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur zur Dekoration dient, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Kernmodulen im Detail behandeln).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihr Wissen: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images).

## Zusammenfassung

Das ist alles für jetzt. Wir haben Bilder und Beschriftungen im Detail behandelt. Im nächsten Artikel werden wir einen Gang höher schalten und uns ansehen, wie HTML verwendet wird, um Video- und Audiomaterialien in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
