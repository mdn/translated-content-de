---
title: Bilder in HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

Am Anfang bestand das Web nur aus Text und war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Fähigkeit hinzugefügt wurde, Bilder (und andere interessantere Inhalte) in Webseiten einzubetten. Es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein einfaches Bild in eine Webseite einzubetten, aber es gibt auch andere Arten von Multimedia zu betrachten. In diesem Artikel werden wir uns eingehend damit befassen, wie man es verwendet, einschließlich der Grundlagen, es mit Beschriftungen mithilfe von {{htmlelement("figure")}} zu versehen und zu erläutern, wie es sich auf {{Glossary("CSS", "CSS")}} Hintergrundbilder bezieht. Außerdem werden wir andere auf der Webplattform verfügbare Grafiken vorstellen.

<table>
<caption>Multimedia und Einbinden von Bildern</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den HTML-Grundlagen (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML-Kennenlernen</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man einfache Bilder in HTML einbettet, sie mit
        Beschriftungen versieht und wie sich HTML-Bilder auf CSS-Hintergrundbilder beziehen.
      </td>
    </tr>
  </tbody>
</table>

## Wie setzen wir ein Bild auf eine Webseite?

Um ein einfaches Bild auf einer Webseite einzufügen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (das heißt, es kann keinen Kind-Inhalt haben und kein End-Tag haben), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zu laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaurier.jpg` heißt und sich im gleichen Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild wie folgt einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem Unterverzeichnis `images` befand, das sich im gleichen Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

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

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrer eigenen Website hosten, was in einfachen Setups bedeutet, die Bilder für Ihre Website auf demselben Server wie Ihr HTML zu speichern. Darüber hinaus ist es effizienter, relative URLs als absolute URLs zu verwenden, was die Wartung betrifft (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain zu enthalten). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medienressourcen und Lizenzen](#medienressourcen_und_lizenzen) unten für weitere Informationen).

> **Warning:** _Niemals_ das `src`-Attribut auf ein Bild zeigen lassen, das auf der Website einer anderen Person gehostet wird _ohne Erlaubnis_. Dies wird "Hotlinking" genannt. Es wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes bezahlen würde, wenn jemand Ihre Seite besucht. Es lässt Ihnen auch keine Kontrolle darüber, das Bild entfernt oder durch etwas Peinliches ersetzt zu werden.

Der vorherige Code-Schnipsel, entweder mit der absoluten oder der relativen URL, führt zu folgendem Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource definiert werden (wie eine Bild- oder Videodatei), nicht durch den Inhalt des Elements selbst. Sie können mehr darüber bei [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) lesen.

> [!NOTE]
> Sie finden das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativtext

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Sein Wert soll eine textuelle Beschreibung des Bildes sein, für Situationen, in denen das Bild nicht gesehen/angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange zum Rendern braucht. Zum Beispiel könnte unser obiger Code wie folgt modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn zum Beispiel unser Bildname als `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den alt-Text anzeigen:

![Der Titel Bilder in HTML, aber diesmal wird das Dinosaurierbild nicht angezeigt, und der Alt-Text nimmt seinen Platz ein.](alt-text.png)

Warum sollten Sie jemals Alt-Text sehen oder benötigen? Es kann aus verschiedenen Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um das Web vorzulesen. Tatsächlich ist es für die meisten Benutzer nützlich, Alt-Text zur Beschreibung von Bildern bereitzustellen.
- Wie oben beschrieben, könnte die Schreibweise des Datei- oder Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Personen verwenden immer noch textbasierte Browser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den alt-Text von Bildern anzeigen.
- Sie möchten möglicherweise Text für Suchmaschinen bereitstellen, um ihn zu nutzen; Suchmaschinen können beispielsweise alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist insbesondere auf Mobiltelefonen und in Ländern üblich, in denen die Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Das hängt davon ab, _warum_ das Bild überhaupt dort ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild bedeutende Informationen bietet, geben Sie die gleichen Informationen in einem _kurzen_ `alt`-Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze zweimal im Hauptinhalt geschrieben wären? Wenn das Bild im Haupttextkörper ausreichend beschrieben ist, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags einfügen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie entweder den Text innerhalb desselben `<a>`-Elements oder innerhalb des `alt`-Attributs des Bildes schreiben - je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, verwenden Sie [CSS](/de/docs/Web/CSS/text-shadow) dafür anstelle des Texts in einem Bild. Sollten Sie dies _wirklich nicht vermeiden_ können, sollten Sie den Text im `alt`-Attribut angeben.

Im Wesentlichen besteht der Schlüssel darin, eine nutzbare Erfahrung zu liefern, auch wenn die Bilder nicht sichtbar sind. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Schalten Sie die Bilder in Ihrem Browser aus und sehen Sie, wie die Dinge aussehen. Sie werden schnell feststellen, wie hilfreich Alt-Text ist, wenn das Bild nicht zu sehen ist.

> [!NOTE]
> Für weitere Informationen lesen Sie unseren Leitfaden zu [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als Ganzzahlen ohne Einheit angegeben und stellen die Breite und Höhe des Bildes in Pixeln dar.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise herausfinden. Zum Beispiel können Sie auf dem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel, könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Der HTML-Code für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML empfangen hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das ist oft der Fall, da die Dateigrößen von Bildern oft viel größer sind als die von HTML-Dateien), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

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

Sobald der Browser das HTML heruntergeladen hat, beginnt er, die Seite anzuzeigen.

Wenn das Bild geladen ist, fügt der Browser das Bild auf der Seite hinzu. Da das Bild Platz benötigt, muss der Browser den Text nach unten verschieben, um das Bild darüber einzufügen:

![Vergleich des Seitenlayouts während das Bild geladen wird und wenn es fertig geladen ist, ohne dass die Größe für das Bild angegeben ist.](no-size.png)

Den Text so zu verschieben, ist für die Benutzer äußerst ablenkend, insbesondere wenn sie bereits damit begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür reservieren muss.

Das bedeutet, dass der Browser das umgebende Layout nicht mehr verschieben muss, wenn das Bild heruntergeladen wurde.

![Vergleich des Seitenlayouts während das Bild geladen wird und wenn es fertig geladen ist, wenn die Größe des Bildes angegeben ist.](size.png)

Einen exzellenten Artikel zur Geschichte dieses Features finden Sie unter [Setzen von Höhe und Breite auf Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl, wie bereits erwähnt, es eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _vergrößern oder zu verkleinern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, landen Sie mit Bildern, die körnig, unscharf oder zu klein aussehen und verschwenden Bandbreite, indem Sie ein Bild herunterladen, das nicht den Bedürfnissen des Nutzers entspricht. Das Bild könnte auch verzerrt erscheinen, wenn Sie nicht das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die korrekte Größe zu bringen, bevor Sie es auf Ihrer Webseite veröffentlichen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn/CSS) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#adding_supporting_information_with_the_title_attribute) können Sie auch Bilder mit `title`-Attributen versehen, um bei Bedarf zusätzliche unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip bei Maus-Hover, genau wie Link-Titel:

![Das Dinosaurierbild, mit einem Tooltip-Titel, der oben darauf ersichtlich ist und "Ein T-Rex im Manchester University Museum" liest](image-with-title.png)

Dies wird jedoch nicht empfohlen – `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich basierend auf der Tatsache, dass die Unterstützung von Screenreadern sehr unvorhersehbar ist und die meisten Browser es nicht zeigen, es sei denn, Sie bewegen die Maus darüber (also z.B. keinen Zugriff für Tastaturnutzer). Wenn Sie mehr Informationen darüber interessiert, lesen Sie [Die Prüfungen und Entbehrungen des Titelattributes](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Haupttext des Artikels zu platzieren, anstatt sie am Bild anzuhängen.

### Aktives Lernen: Einbetten eines Bildes

Jetzt sind Sie an der Reihe zu üben! Dieser Abschnitt zum aktiven Lernen wird Ihnen eine einfache Einbettungsübung bieten. Sie erhalten einen einfachen {{htmlelement("img")}}-Tag; wir möchten, dass Sie das Bild von der folgenden URL einbetten:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher sagten wir, niemals Bilder auf anderen Servern zu hotlinken, aber das ist nur zu Lernzwecken, also lassen wir Sie diesmal durchgehen.

Wir möchten auch, dass Sie:

- Einen Alt-Text hinzufügen und überprüfen, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Die korrekte `width` und `height` des Bildes festlegen (Hinweis: es ist 200px breit und 171px hoch), dann mit anderen Werten experimentieren, um zu sehen, welchen Effekt es hat.
- Einen `title` auf dem Bild festlegen.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_-Button zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen:

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

## Medienressourcen und Lizenzen

Bilder (und andere Arten von Medienressourcen), die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Seite verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis zu dessen Nutzung haben oder den Lizenzbedingungen des Eigentümers entsprechen.

### Verständnis von Lizenztypen

Lassen Sie uns einige gängige Kategorien von Lizenzen betrachten, die Sie wahrscheinlich im Web finden.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Liedern, Büchern oder Software veröffentlichen ihre Werke oft unter einem geschlossenen Urheberrechtsschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig die exklusiven Rechte zur Nutzung (z.B. Anzeige oder Verbreitung) ihres Werkes haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eines der folgenden tun:

- Die explizite schriftliche Erlaubnis des Urheberrechtsinhabers einholen.
- Eine Lizenzgebühr zahlen, um sie zu nutzen. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("lizenzfrei") sein oder es kann sich um eine "rechteverwaltete" Lizenz handeln, bei der Sie möglicherweise spezifische Gebühren pro Nutzung für Zeitfenster, geografische Region, Branche oder Medientyp usw. zahlen müssen.
- Ihre Nutzung auf die beschränken, die in Ihrer Gerichtsbarkeit als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) gelten würde.

Autoren sind nicht verpflichtet, einen Copyright-Hinweis oder Lizenzbedingungen mit ihrem Werk anzugeben. Das Urheberrecht entsteht automatisch bei einem originalen Werk der Urheberschaft, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und es gibt keine Copyright-Hinweise oder Lizenzbedingungen, ist der sicherste Weg, anzunehmen, dass es urheberrechtlich geschützt ist mit allen Rechten vorbehalten.

#### Zulässig

Wenn das Bild unter einer zulässigen Lizenz, wie z.B. [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause), oder einer geeigneten [Creative Commons (CC)-Lizenz](https://chooser-beta.creativecommons.org/) veröffentlicht wird, müssen Sie keine Lizenzgebühr zahlen oder um Erlaubnis bitten, es zu verwenden. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel müssen Sie möglicherweise:

- Einen Link zur ursprünglichen Quelle des Bildes bereitstellen und seinen Urheber nennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Alle mit dem Bild erstellten abgeleiteten Werke unter der gleichen Lizenz wie das Original veröffentlichen.
- Überhaupt keine abgeleiteten Werke teilen.
- Das Bild nicht für kommerzielle Arbeiten verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung, die das Bild verwendet, beilegen.

Sie sollten die anwendbare Lizenz für die spezifischen Bedingungen, die Sie befolgen müssen, konsultieren.

> [!NOTE]
> Möglicherweise stoßen Sie auf den Begriff "Copyleft" im Zusammenhang mit permissiven Lizenzen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons-Lizenzen) legen fest, dass abgeleitete Werke unter der gleichen Lizenz wie das Original lizenziert werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die grundlegende Idee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts gebaut wird (dies wird als "Fork" der Originalsoftware bezeichnet), ebenfalls unter der gleichen Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch für andere zum Studium und zur Modifikation verfügbar gemacht wird. Beachten Sie, dass Lizenzen, die generell für Software ausgelegt wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für Werke jenseits von Software angesehen werden, da sie nicht mit nicht-softwarebezogenen Werken im Hinterkopf entworfen wurden.

Erkunden Sie die in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie spezifizieren, zu lesen.

#### Öffentliches Domäne/CC0

Werke, die in die öffentliche Domäne übergehen, werden manchmal als "keine Rechte vorbehalten" bezeichnet — kein Urheberrecht gilt dafür, und es kann ohne Erlaubnis und ohne Bedingungen verwendet werden. Ein Werk kann auf verschiedene Weise in die öffentliche Domäne gelangen, wie durch Ablauf des Copyrights oder spezifisches Verzicht auf Rechte.

Einer der effektivsten Wege, ein Werk in der öffentlichen Domäne zu platzieren, ist, es unter [CC0](https://creativecommons.org/public-domain/cc0/), einer spezifischen Creative Commons Lizenz, zu lizenzieren, die ein klares und unmissverständliches rechtliches Werkzeug für diesen Zweck bereitstellt.

Wenn Sie öffentliche Domänenbilder verwenden, beschaffen Sie den Nachweis, dass das Bild in der öffentlichen Domäne ist und bewahren Sie diesen Nachweis für Ihre Aufzeichnungen auf. Zum Beispiel machen Sie einen Screenshot der ursprünglichen Quelle mit dem klar angezeigten Lizenzstatus, und erwägen Sie, eine Seite auf Ihrer Website mit einer Liste der erworbenen Bilder zusammen mit deren Lizenzanforderungen hinzuzufügen.

### Suche nach zulässig lizenzierten Bildern

Sie können zulässig lizenzierte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bildrepositorien finden.

Suchen Sie nach Bildern, indem Sie eine Beschreibung des gesuchten Bildes zusammen mit relevanten Lizenzbedingungen hinzufügen. Beispielsweise, wenn Sie nach "gelber Dinosaurier" suchen, fügen Sie "öffentliche Domänenbilder", "öffentliche Domänenbildbibliothek", "offen lizenzierte Bilder" oder ähnliche Begriffe der Suchanfrage hinzu.

Einige Suchmaschinen haben Werkzeuge, um Ihnen zu helfen, Bilder mit zulässigen Lizenzen zu finden. Zum Beispiel, wenn Sie Google verwenden, gehen Sie zur "Bilder"-Registerkarte, um nach Bildern zu suchen, klicken Sie dann auf "Tools". Es gibt eine "Nutzungsrechte"-Dropdown, wo Sie spezifisch nach Bildern unter Creative Commons-Lizenzen suchen können.

Bildrepository-Websites, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/), und [Pixabay](https://pixabay.com/), haben Suchoptionen, um Sie nur für zulässig lizenzierte Bilder suchen zu lassen. Einige Websites verteilen ausschließlich zulässig lizenzierte Bilder und Icons, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Einhalten der Lizenz, unter der das Bild veröffentlicht wurde, ist eine Frage des Findens der Lizenzdetails, das Lesen der vom Quelle bereitgestellten Lizenz oder Anleitungsseite, und dann das Befolgen dieser Anweisungen. Seriöse Bildrepositorien machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Bildunterschriften und Abbildungen annotieren

Apropos Bildunterschriften, es gibt eine Reihe von Möglichkeiten, wie Sie eine Bildunterschrift zusammen mit Ihrem Bild hinzufügen können. Zum Beispiel würde Sie nichts daran hindern, dies zu tun:

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

Das ist in Ordnung. Es enthält den erforderlichen Inhalt und lässt sich mit CSS schön formatieren. Aber es gibt ein Problem: Es gibt nichts, was das Bild semantisch mit seiner Bildunterschrift verknüpft, was zu Problemen für Bildschirmleser führen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist die Verwendung der HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Diese wurden genau für diesen Zweck erstellt: um einen semantischen Container für Abbildungen bereitzustellen und die Abbildung klar mit der Bildunterschrift zu verknüpfen. Unser obiges Beispiel könnte wie folgt umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element sagt Browsern und unterstützender Technologie, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einer barrierefreien Sichtweise haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Element/img#alt) Text unterschiedliche Rollen. Bildunterschriften nutzen auch Menschen, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text die gleiche Funktionalität wie ein nicht vorhandenes Bild bietet. Deshalb sollten Bildunterschriften und `alt`-Text nicht einfach dasselbe sagen, weil sie beide erscheinen, wenn das Bild weg ist. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und sehen Sie, wie es aussieht.

Eine Abbildung muss kein Bild sein. Es ist eine eigenständige Inhalts-Einheit, die:

- Ihre Bedeutung auf kompakte, leicht verständliche Weise ausdrückt.
- An verschiedenen Stellen im linearen Fluss der Seite platziert werden könnte.
- Wesentliche Informationen bereitstellt, die den Haupttext unterstützen.

Eine Abbildung könnte mehrere Bilder, ein Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Erstellung einer Abbildung

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie den fertigen Code aus dem vorherigen Abschnitt zum aktiven Lernen nehmen und ihn in eine Abbildung umwandeln:

1. Verpacken Sie es in einem {{htmlelement("figure")}}-Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und setzen Sie den Text in ein {{htmlelement("figcaption")}}-Element unterhalb des Bildes ein.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_-Button zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-{{cssxref("background-image")}}-Eigenschaft und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jeder Seite eines Absatzes zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das eingebettete Bild ist möglicherweise einfacher zu positionieren und zu steuern als HTML-Bilder. Warum also HTML-Bilder verwenden? Wie bereits angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration. Wenn Sie Ihrer Seite nur etwas Hübsches hinzufügen möchten, um die visuellen Aspekte zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch absolut keine semantische Bedeutung. Sie können keine Textäquivalente haben, sind für Bildschirmleser unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammengefasst: Wenn ein Bild eine Bedeutung hat, in Bezug auf Ihren Inhalt, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden.

> [!NOTE]
> Sie werden viel mehr über [CSS-Hintergrundbilder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) in unserem [CSS](/de/docs/Learn/CSS) Thema erfahren.

## Weitere Grafiken im Web

Wir haben gesehen, dass statische Bilder über das {{HTMLElement("img")}}-Element angezeigt werden können oder indem der Hintergrund von HTML-Elementen mit der {{cssxref("background-image")}}-Eigenschaft festgelegt wird. Sie können auch Grafiken in Echtzeit konstruieren oder Bilder nachträglich manipulieren. Der Browser bietet Möglichkeiten, 2D- und 3D-Grafiken mit Code zu erstellen, sowie das Einbinden von Videos aus hochgeladenen Dateien oder Live-Streams von der Kamera eines Benutzers. Hier sind Links zu Artikeln, die Einblicke in diese fortgeschritteneren Grafikthemen bieten:

- [Canvas](/de/docs/Web/API/Canvas_API)
  - : Das {{HTMLElement("canvas")}}-Element bietet APIs zum Zeichnen von 2D-Grafiken mit JavaScript.
- [SVG](/de/docs/Web/SVG)
  - : Scalable Vector Graphics (SVG) ermöglichen die Verwendung von Linien, Kurven und anderen geometrischen Formen zur Darstellung von 2D-Grafiken. Mit Vektoren können Sie Bilder erstellen, die bei jeder Größe sauber skalieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der WebGL API-Leitfaden wird Ihnen den Einstieg mit WebGL erleichtern, die 3D-Grafik-API für das Web, mit der Sie standardmäßiges OpenGL ES in Webinhalten verwenden können.
- [HTML-Audio und -Video verwenden](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Genauso wie `<img>` können Sie HTML verwenden, um {{htmlelement("video")}} und {{htmlelement("audio")}} in eine Webseite einzubetten und deren Wiedergabe zu steuern.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Die RTC in WebRTC steht für Real-Time Communications, eine Technologie, die Audio/Video-Streaming und Datenaustausch zwischen Browser-Clients (Peers) ermöglicht.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images).

## Zusammenfassung

Das war's fürs Erste. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel werden wir einen Gang höher schalten und uns ansehen, wie Sie HTML verwenden können, um [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) in Webseiten einzubetten.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
