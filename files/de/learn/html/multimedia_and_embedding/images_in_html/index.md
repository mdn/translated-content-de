---
title: Bilder in HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

Am Anfang bestand das Web nur aus Text, was wirklich ziemlich langweilig war. Zum Glück dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Inhaltsarten) in Webseiten einzubetten. Es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein einfaches Bild in eine Webseite einzubetten, aber es gibt auch andere Arten von Multimedia, die berücksichtigt werden sollten. In diesem Artikel betrachten wir, wie man es umfassend nutzt, einschließlich der Grundlagen, der Anmerkung mit Beschriftungen mithilfe von {{htmlelement("figure")}} und der Detaillierung, wie es sich zu {{Glossary("CSS", "CSS")}} Hintergrundbildern verhält, und wir stellen andere Grafiken vor, die auf der Webplattform verfügbar sind.

<table>
<caption>Multimedia und Einbetten von Bildern</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den HTML-Grundlagen (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wie man einfache Bilder in HTML einbettet, diese mit
        Bildunterschriften versieht und wie HTML-Bilder sich zu CSS-Hintergrundbildern verhalten.
      </td>
    </tr>
  </tbody>
</table>

## Wie fügen wir ein Bild auf einer Webseite ein?

Um ein einfaches Bild auf einer Webseite einzufügen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (das heißt, es kann keinen Kindinhalt haben und kein End-Tag besitzen), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild zeigt, das Sie auf der Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative oder absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Eine kurze Einführung zu URLs und Pfaden](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Nehmen wir an, Ihr Bild heißt `dinosaurier.jpg` und befindet sich im gleichen Verzeichnis wie Ihre HTML-Seite, dann könnten Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn das Bild in einem Unterverzeichnis `images` liegt, das sich im selben Verzeichnis wie die HTML-Seite befindet, dann würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen sie zur SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaurier.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrem eigenen Server hosten, was in einfachen Setups bedeutet, die Bilder für Ihre Webseite auf demselben Server wie Ihr HTML zu halten. Darüber hinaus ist es effizienter, relative URLs anstelle von absoluten URLs in Bezug auf die Wartung zu verwenden (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie gemäß den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe unten [Medien-Assets und Lizenzierung](#medien-assets_und_lizenzierung) für weitere Informationen).

> **Warnung:** _Niemals_ das `src`-Attribut auf ein Bild verweisen, das auf der Webseite eines anderen gehostet wird _ohne Erlaubnis_. Dies wird „Hotlinking“ genannt. Es gilt als unethisch, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes übernehmen würde, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, dass das Bild entfernt oder durch etwas peinliches ersetzt wird.

Der obige Code-Schnipsel, entweder mit der absoluten oder der relativen URL, führt zu folgendem Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit „Bilder in HTML“ darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden, nicht durch den Inhalt des Elements selbst. Mehr darüber können Sie unter [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [auf GitHub sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativer Text

Das nächste Attribut, das wir uns ansehen, ist `alt`. Sein Wert soll eine textliche Beschreibung des Bildes sein, für den Fall, dass das Bild nicht angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange zum Laden benötigt. Beispielsweise könnte unser obiger Code so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt`-Text zu testen, ist, absichtlich Ihren Dateinamen falsch zu schreiben. Wenn zum Beispiel unser Bildname `dinosooooor.jpg` lautet, würde der Browser das Bild nicht anzeigen und stattdessen den `alt`-Text anzeigen:

![Der Bilder in HTML-Titel, aber diesmal wird das Dinosaurierbild nicht angezeigt und der `alt`-Text steht an seiner Stelle.](alt-text.png)

Warum sollten Sie jemals `alt`-Text sehen oder benötigen? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um sich das Web vorlesen zu lassen. Tatsächlich ist es für die meisten Benutzer nützlich, wenn `alt`-Text zur Beschreibung von Bildern verfügbar ist.
- Wie oben beschrieben, könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Personen verwenden immer noch textbasierte Browser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), der den `alt`-Text der Bilder anzeigt.
- Sie möchten möglicherweise Text für Suchmaschinen zur Verfügung stellen, die den `alt`-Text mit Suchanfragen abgleichen können.
- Benutzer haben Bilder deaktiviert, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist insbesondere bei Mobiltelefonen und in Ländern der Fall, in denen Bandbreite begrenzt oder teuer ist.

Was sollten Sie genau in Ihr `alt`-Attribut schreiben? Das hängt davon ab, _warum_ das Bild überhaupt dort ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten für dekorative Bilder [CSS-Hintergrundbilder](#css_background_images) verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es zu lesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen bietet, geben Sie die gleichen Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den alle sehen können. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt doppelt geschrieben wären? Wenn das Bild vom Haupttextkörper ausreichend beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags einfügen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie diesen entweder innerhalb desselben `<a>`-Elements oder innerhalb des `alt`-Attributs des Bildes schreiben – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift z. B. einen Schlagschatten benötigt, verwenden Sie dafür [CSS](/de/docs/Web/CSS/text-shadow) anstelle des Textes im Bild. Sollten Sie _dies wirklich nicht vermeiden können_, sollten Sie den Text innerhalb des `alt`-Attributs bereitstellen.

Im Wesentlichen besteht der Schlüssel darin, ein benutzerfreundliches Erlebnis zu liefern, selbst wenn die Bilder nicht angezeigt werden können. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Probieren Sie, die Bilder in Ihrem Browser auszuschalten und sehen Sie, wie es aussieht. Sie werden schnell merken, wie hilfreich `alt`-Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Weitere Informationen finden Sie in unserem Leitfaden zu [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als Ganzzahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weisen feststellen. Auf einem Mac zum Beispiel können Sie mit <kbd>Cmd</kbd> + <kbd>I</kbd> die Anzeigeinformationen der Bilddatei abrufen. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen heruntergeladen werden. Sobald der Browser das HTML erhalten hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateien oft viel größer sind als HTML-Dateien), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

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

Sobald der Browser das HTML herunterlädt, beginnt er, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild der Seite hinzu. Da das Bild Platz benötigt, muss der Browser den Text auf der Seite nach unten verschieben, um das Bild oben einzufügen:

![Vergleich des Seitenlayouts während des Ladens einer Seite durch den Browser und wenn es fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Solch eine Textverschiebung ist extrem ablenkend für Benutzer, insbesondere wenn sie bereits anfangen, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, mit den Attributen `width` und `height`, weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz er einplanen muss.

Das bedeutet, dass der Browser, wenn das Bild heruntergeladen wurde, den umgebenden Inhalt nicht mehr verschieben muss.

![Vergleich des Seitenlayouts während des Ladens einer Seite durch den Browser und wenn es fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen hervorragenden Artikel zur Geschichte dieser Funktion siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie wir gesagt haben, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie diese nicht zum _Ändern der Größe_ von Bildern verwenden.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, verschwommen oder zu klein aussehen, und verschwenden Bandbreite, um ein Bild herunterzuladen, das nicht den Anforderungen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie nicht das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild in die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite platzieren.
>
> Wenn Sie die Größe eines Bildes anpassen müssen, sollten Sie stattdessen [CSS](/de/docs/Learn/CSS) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#adding_supporting_information_with_the_title_attribute) können Sie auch `title`-Attribute zu Bildern hinzufügen, um bei Bedarf weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip bei Maushover, genau wie Linktitel:

![Das Dinosaurierbild, mit einem Tooltip-Titel darüber, der lautet Ein T-Rex im Manchester University Museum ausgestellt](image-with-title.png)

Allerdings wird dies nicht empfohlen — `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich aufgrund der Tatsache, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie verwenden eine Maus (also z. B. keinen Zugriff für Tastaturbenutzer). Wenn Sie an weiteren Informationen hierzu interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen in den Hauptartikeltext einzufügen, anstatt sie dem Bild anzuhängen.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie am Zug! Dieser aktive Lernabschnitt bietet Ihnen eine einfache Einbindungsübung. Sie erhalten ein einfaches {{htmlelement("img")}}-Tag; wir möchten, dass Sie das Bild einbetten, das sich an der folgenden URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, niemals Bilder auf anderen Servern zu verlinken, aber das ist nur zu Lernzwecken, daher lassen wir es Ihnen in diesem Fall durchgehen.

Wir möchten auch, dass Sie:

- Fügen Sie etwas `alt`-Text hinzu und überprüfen Sie, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Setzen Sie die korrekte `width` und `height` (Hinweis: es ist 200px breit und 171px hoch) und experimentieren Sie dann mit anderen Werten, um herauszufinden, was die Auswirkungen sind.
- Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen:

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

## Medien-Assets und Lizenzierung

Bilder (und andere Medienasset-Typen), die Sie im Internet finden, sind unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Webseite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis zur Nutzung haben oder die Lizenzbedingungen einhalten, die der Eigentümer festgelegt hat.

### Lizenztypen verstehen

Schauen wir uns einige gängige Kategorien von Lizenzen an, die Sie wahrscheinlich im Internet finden werden.

#### Alle Rechte vorbehalten

Urheber von Werken wie Liedern, Büchern oder Software veröffentlichen ihre Werke oft unter geschlossenem Urheberrechtsschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte zur Nutzung (z. B. Anzeige oder Verteilung) ihres Werks haben. Wenn Sie urheberrechtlich geschützte Bilder mit _alle Rechte vorbehalten_ verwenden möchten, müssen Sie eine der folgenden Vorgehensweisen umsetzen:

- Holen Sie sich die ausdrückliche, schriftliche Zustimmung des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr, um sie zu nutzen. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung sein (‚royalty-free‘) oder es kann „rechtegesteuert“ sein, in welchem Fall Sie spezifische Gebühren pro Nutzung nach Zeitspanne, geografischer Region, Branche oder Medientyp usw. zahlen müssen.
- Beschränken Sie Ihre Nutzung auf solche, die in Ihrer Rechtsprechung als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copy
