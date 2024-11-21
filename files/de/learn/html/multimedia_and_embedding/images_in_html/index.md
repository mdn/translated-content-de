---
title: Bilder in HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

Am Anfang bestand das Web nur aus Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzukam, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. Es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein Bild in eine Webseite einzubetten, aber es gibt auch andere Arten von Multimedia zu berücksichtigen. In diesem Artikel betrachten wir eingehend, wie Sie es verwenden, einschließlich der Grundlagen, der Annotation von Bildern mit Bildunterschriften mittels {{htmlelement("figure")}}, und wie es sich zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern verhält, und führen in andere Grafiken ein, die der Webplattform zur Verfügung stehen.

<table>
<caption>Multimedia und Einbettung von Bildern</caption>
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
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man einfache Bilder in HTML einbettet, sie mit
        Bildunterschriften versieht und wie HTML-Bilder sich zu CSS-Hintergrundbildern verhalten.
      </td>
    </tr>
  </tbody>
</table>

## Wie fügt man ein Bild in eine Webseite ein?

Um ein Bild in eine Webseite einzufügen, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "void element")}} (das bedeutet, es kann keinen Kindinhalt haben und kein End-Tag haben) und benötigt zwei Attribute, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild zeigt, das Sie in die Seite einbetten möchten. Wie das `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut ist unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Ein kurzer Überblick über URLs und Pfade](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild beispielsweise `dinosaurier.jpg` genannt wird und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, können Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn das Bild in einem `images`-Unterverzeichnis wäre, das sich im selben Verzeichnis wie die HTML-Seite befände, dann würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Dateinamen von Bildern und zählen sie zur SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaurier.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrer Website hosten, was in einfachen Setups bedeutet, die Bilder für Ihre Website auf demselben Server wie Ihr HTML zu halten. Darüber hinaus ist die Verwendung relativer URLs effizienter als absolute URLs in Bezug auf die Wartung (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder auszuliefern.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht sind (siehe unten [Media-Assets und Lizenzierung](#media-assets_und_lizenzierung) für weitere Informationen).

> **Warnung:** _Niemals_ das `src`-Attribut auf ein Bild zeigen, das auf der Website einer anderen Person gehostet wird, _ohne Erlaubnis_. Das wird als "Hotlinking" bezeichnet. Es wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes tragen würde, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, ob das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorhergehende Code-Schnipsel, entweder mit der absoluten oder der relativen URL, liefert uns das folgende Ergebnis:

![Ein grundlegendes Bild eines Dinosauriers, das in einem Browser eingebettet ist, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden, nicht durch den Inhalt des Elements selbst. Sie können mehr darüber auf [Replaced elements](/de/docs/Web/CSS/Replaced_element) lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativer Text

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Der Wert soll eine Textbeschreibung des Bildes sein, für den Einsatz in Situationen, in denen das Bild nicht gesehen/angezeigt werden kann oder wegen einer langsamen Internetverbindung lange zum Rendern braucht. Zum Beispiel könnte unser obiger Code so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Die einfachste Möglichkeit, Ihren `alt`-Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn zum Beispiel unser Bildname `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den alternativen Text anzeigen:

![Der Titel Bilder in HTML, aber diesmal wird das Dinosaurierbild nicht angezeigt, und der Alt-Text steht an seiner Stelle.](alt-text.png)

Warum würde man überhaupt alt-Text sehen oder benötigen? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und benutzt einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um sich das Web vorlesen zu lassen. Tatsächlich ist es für die meisten Benutzer nützlich, wenn alt-Text zur Beschreibung von Bildern verfügbar ist.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder des Pfades falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute verwenden immer noch textbasierte Browser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den Alt-Text von Bildern anzeigen.
- Möglicherweise möchten Sie Text für Suchmaschinen bereitstellen; Suchmaschinen können beispielsweise übereinstimmenden Alt-Text mit Suchanfragen verwenden.
- Benutzer haben Bilder ausgeschaltet, um das Datenvolumen zu reduzieren und Ablenkungen zu vermeiden. Dies ist insbesondere auf Mobiltelefonen und in Ländern, in denen Bandbreite begrenzt oder teuer ist, häufig.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Das hängt davon ab, _warum_ sich das Bild überhaupt dort befindet. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber falls Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild wesentliche Informationen liefert, stellen Sie dieselben Informationen in einem _kurzen_ `alt`-Text bereit – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze doppelt im Hauptinhalt geschrieben wären? Wenn das Bild ausreichend durch den Haupttext beschrieben ist, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags einfügen, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie es entweder innerhalb desselben `<a>`-Elements schreiben oder im `alt`-Attribut des Bildes – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, [verwenden Sie CSS](/de/docs/Web/CSS/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Allerdings, wenn Sie _das wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen besteht die Schlüsselidee darin, auch dann eine nutzbare Erfahrung zu liefern, wenn die Bilder nicht gesehen werden können. Dadurch wird sichergestellt, dass alle Benutzer nichts vom Inhalt verpassen. Versuchen Sie, in Ihrem Browser Bilder auszuschalten und zu sehen, wie es aussieht. Ihnen wird schnell auffallen, wie hilfreich alt-Text sein kann, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Weitere Informationen finden Sie in unserem Leitfaden zu [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes festzulegen. Sie werden als Ganzzahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise herausfinden. Beispielsweise können Sie auf dem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel könnten wir Folgendes tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Dafür gibt es einen sehr guten Grund. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML empfangen hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateigrößen oft größer als HTML-Dateien sind), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

Angenommen, wir haben beispielsweise etwas Text nach dem Bild:

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

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten auf der Seite verschieben, um das Bild darüber zu passen:

![Vergleich des Seitenlayouts während das Browser eine Seite lädt und wenn es fertig ist, wenn keine Größe für das Bild angegeben wurde.](no-size.png)

Den Text auf diese Weise zu verschieben, ist äußerst störend für Benutzer, insbesondere wenn sie bereits begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mithilfe der Attribute `width` und `height` angeben, weiß der Browser bereits, wie viel Platz dafür benötigt wird, bevor es das Bild heruntergeladen hat.

Das bedeutet, dass der Browser, wenn das Bild heruntergeladen wurde, den umliegenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts während das Browser eine Seite lädt und wenn es fertig ist, wenn die Bildgröße angegeben wurde.](size.png)

Für einen hervorragenden Artikel über die Geschichte dieser Funktion siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie wir gesagt haben, gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie diese nicht verwenden, um Bilder zu _vergrößern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, unscharf oder zu klein aussehen, und verschwenden Bandbreite, um ein Bild herunterzuladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten ein Bildbearbeitungsprogramm verwenden, um Ihr Bild auf die korrekte Größe zu bringen, bevor Sie es auf Ihre Webseite stellen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn/CSS) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#adding_supporting_information_with_the_title_attribute) können Sie auch `title`-Attribute zu Bildern hinzufügen, um, falls erforderlich, weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies gibt uns ein Tooltip bei Mauszeigerübernahme, genau wie Link-Titel:

![Das Dinosaurierbild mit einem Tooltip-Titel darüber, der lautet Ein T-Rex zur Schau gestellt im Manchester Universitätsmuseum](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich basierend auf der Tatsache, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie fahren mit der Maus darüber (also z.B. keinen Zugriff für Tastaturnutzer). Wenn Sie mehr Informationen darüber interessieren, lesen Sie [Die Prüfungen und Erprobungen des Titelattributs](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext zu enthalten, anstatt an das Bild angehängt.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie dran! Dieser Abschnitt zum aktiven Lernen führt Sie mit einer Einbettungsübung schnell in Schwung. Sie haben einen grundlegenden {{htmlelement("img")}}-Tag geliefert; wir möchten, dass Sie das Bild einbetten, das sich unter der folgenden URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, dass man niemals Bilder auf anderen Servern hotlinken soll, aber dies ist nur zu Lernzwecken, also lassen wir Ihnen das diesmal durchgehen.

Wir möchten auch, dass Sie:

- Einen Alt-Text hinzufügen und überprüfen, dass er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Die richtige `width` und `height` des Bildes einstellen (Hinweis: es ist 200px breit und 171px hoch), dann mit anderen Werten experimentieren, um zu sehen, was der Effekt ist.
- Einen `title` für das Bild festlegen.

Wenn Sie einen Fehler machen, können Sie immer den _Zurücksetzen_-Button verwenden. Wenn Sie wirklich stecken bleiben, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen:

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

## Media-Assets und Lizenzierung

Bilder (und andere Medientypen) die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Website verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu nutzen, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständniss der Lizenztypen

Lassen Sie uns einige gängige Lizenzarten betrachten, die Sie wahrscheinlich im Web finden werden.

#### Alle Rechte vorbehalten

Schöpfer von Originalwerken wie Songs, Bücher oder Software veröffentlichen ihre Arbeit oft unter geschlossenen Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig die exklusiven Rechte zur Nutzung (zum Beispiel Anzeige oder Verbreitung) ihres Werkes besitzen. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Holen Sie sich die ausdrückliche, schriftliche Genehmigung vom Urheberrechtsinhaber.
- Zahlen Sie eine Lizenzgebühr für die Nutzung. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung ("royalty-free") sein, oder sie könnte "rights-managed" sein, in diesem Fall müssten Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitschlitz, geografischer Region, Branche oder Medientyp usw. bezahlen.
- Beschränken Sie Ihre Nutzung auf das, was in Ihrer Gerichtsbarkeit als [faire Nutzung](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) angesehen würde.

Autoren sind nicht verpflichtet, einen Urheberrechtshinweis oder Lizenzbedingungen mit ihrem Werk zu versehen. Urheberrecht besteht automatisch an einem Originalwerk der Autorenschaft, sobald es in einem greifbaren Medium geschaffen wird. Wenn Sie ein Bild online finden und es keine Urheberrechtshinweise oder Lizenzbedingungen gibt, ist der sicherste Weg, davon auszugehen, dass es durch Urheberrechtsschutz mit allen Rechten vorbehalten geschützt ist.

#### Permessiv

Wenn das Bild unter einer permissiven Lizenz veröffentlicht wird, wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause), oder einer geeigneten [Creative Commons (CC) Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühr zahlen oder die Erlaubnis zur Nutzung einholen. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel müssen Sie vielleicht:

- Einen Link zur Originalquelle des Bildes bereitstellen und seinen Schöpfer nennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Alle abgeleiteten Werke, die unter Nutzung des Bildes erstellt wurden, unter derselben Lizenz wie das Original teilen.
- Keine abgeleiteten Werke überhaupt teilen.
- Das Bild in keinem kommerziellen Werk verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung, die das Bild verwendet, beifügen.

Sie sollten die geltende Lizenz zur spezifischen Konditionen, die Sie befolgen müssen, konsultieren.

> [!NOTE]
> Sie könnten auf den Begriff "Copyleft" im Kontext von permissiven Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons-Lizenzen) bestimmen, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines Projekts mit Copyleft-Lizenzierung erstellt wird (dies wird als "Fork" der Originalsoftware bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch für andere verfügbar gemacht wird, um es zu studieren und zu modifizieren. Beachten Sie, dass im Allgemeinen Lizenzen, die für Software erstellt wurden, wie die GPL, nicht als gute Lizenzen für nicht-softwarebasierte Werke gelten, da sie nicht mit nicht-softwarebasierten Werken im Hinterkopf erstellt wurden.

Erkundigen Sie sich über die in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie spezifizieren, zu erfahren.

#### Public Domain/CC0

Werke, die in die Public Domain gehen, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es gelten keine Urheberrechte dafür, und sie können ohne Erlaubnis verwendet werden, ohne dass Lizenzbedingungen erfüllt sein müssen. Werke können auf verschiedene Weise in die Public Domain gelangen, wie das Auslaufen des Urheberrechts oder das spezifische Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, ein Werk in die Public Domain zu versetzen, besteht darin, es unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer spezifischen Creative Commons-Lizenz, die ein klares und eindeutiges rechtliches Werkzeug für diesen Zweck bietet.

Wenn Sie Public-Domain-Bilder verwenden, holen Sie den Nachweis ein, dass das Bild in der Public Domain ist, und bewahren Sie den Nachweis für Ihre Unterlagen auf. Machen Sie zum Beispiel einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus und erwägen Sie, Ihrer Website eine Seite hinzuzufügen, die eine Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen enthält.

### Nach bildererlaubter Lizenzierung suchen

Sie können Bilder mit permissiver Lizenzierung für Ihre Projekte mit einer Bildersuchmaschine oder direkt aus Bilder-Repositorien finden.

Suchen Sie nach Bildern mit einer Beschreibung des gesuchten Bildes zusammen mit relevanten Lizenzierungsbegriffen. Wenn Sie beispielsweise nach "gelber Dinosaurier" suchen, fügen Sie "Public Domain-Bilder", "Public Domain-Bibliothek für Bilder", "offene lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Tools, die Ihnen helfen, Bilder mit permissiven Lizenzen zu finden. Beispielsweise können Sie bei Google im Tab "Bilder" nach Bildern suchen und dann auf "Tools" klicken. Im resultierenden Toolbar gibt es ein Dropdown-Menü "Nutzungsrechte", in dem Sie speziell nach Bildern unter Creative Commons-Lizenzen suchen können.

Bild-Repositorien-Seiten, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/), haben Suchoptionen, die es Ihnen ermöglichen, nur nach Bildern mit permissivem Lizenzierung zu suchen. Einige Seiten verteilen ausschließlich Bilder und Icons mit permissiver Lizenzierung, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Sich an die Lizenz zu halten, unter der das Bild veröffentlicht wurde, ist eine Frage des Auffindens der Lizenzdetails, des Lesens der Lizenz- oder Anleitungsseite, die vom Anbieter bereitgestellt wird, und der anschließenden Befolgung dieser Anweisungen. Seriöse Bild-Repositorien machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit figuren und figurunterschriften annotieren

Apropos Bildunterschriften, es gibt eine Reihe von Möglichkeiten, einer Bild eine Unterschrift hinzuzufügen. Zum Beispiel wäre es nicht falsch, Folgendes zu tun:

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

Das ist in Ordnung. Es enthält den benötigten Inhalt und kann mit CSS gut gestylt werden. Aber es gibt ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Unterschrift verknüpft, was bei Screenreadern zu Problemen führen kann. Was ist zum Beispiel, wenn Sie 50 Bilder und Unterschriften haben, welche Unterschrift gehört zu welchem Bild?

Eine bessere Lösung ist die Verwendung der HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Diese wurden genau zu diesem Zweck erstellt: um einen semantischen Container für Figuren bereitzustellen und die Figur klar mit der Unterschrift zu verknüpfen. Unser obiges Beispiel könnte folgendermaßen umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element teilt Browsern und unterstützenden Technologien mit, dass die Unterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus Sicht der Barrierefreiheit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Element/img#alt) Text verschiedene Rollen. Bildunterschriften sind auch für Menschen, die das Bild sehen können, nützlich, während [`alt`](/de/docs/Web/HTML/Element/img#alt) Text dieselbe Funktionalität wie ein fehlendes Bild bietet. Daher sollten Bildunterschriften und `alt`-Text nicht einfach dasselbe sagen, denn beide werden angezeigt, wenn das Bild nicht vorhanden ist. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und sehen Sie, wie es aussieht.

Eine Figur muss kein Bild sein. Es ist eine unabhängige Einheit von Inhalten, die:

- Ihre Bedeutung in einer kompakten, leicht zu erfassenden Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite platziert werden könnte.
- Wichtige Informationen bereitstellt, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, ein Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Eine Figur erstellen

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie den fertigen Code aus dem vorherigen aktiven Lernabschnitt nehmen und ihn in eine Figur verwandeln:

1. Umschließen Sie ihn in einem {{htmlelement("figure")}}-Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und setzen Sie den Text in ein {{htmlelement("figcaption")}}-Element unter dem Bild.

Wenn Sie einen Fehler machen, können Sie immer den _Zurücksetzen_-Button verwenden. Wenn Sie wirklich stecken bleiben, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Beispielsweise, um ein Hintergrundbild auf jedem Absatz auf einer Seite zu platzieren, könnten Sie Folgendes tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist arguably einfacher zu positionieren und zu kontrollieren als HTML-Bilder. Warum sich also mit HTML-Bildern abmühen? Wie zuvor angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie nur etwas Hübsches auf Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keine Textäquivalente haben, bleiben Screenreadern unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassung: Wenn einem Bild Bedeutung in Bezug auf Ihren Inhalt zukommt, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden.

> [!NOTE]
> Sie werden viel mehr über [CSS-Hintergrundbilder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) in unserem [CSS](/de/docs/Learn/CSS) Thema lernen.

## Andere Grafiken im Web

Wir haben gesehen, dass statische Bilder mit dem {{HTMLElement("img")}}-Element angezeigt werden können oder indem der Hintergrund von HTML-Elementen mit der {{cssxref("background-image")}}-Eigenschaft eingestellt wird. Sie können auch Grafiken dynamisch erstellen oder Bilder nachträglich manipulieren. Der Browser bietet Möglichkeiten, 2D- und 3D-Grafiken mit Code zu erstellen, sowie Videos von hochgeladenen Dateien einzuschließen oder live von der Kamera eines Benutzers zu streamen. Hier sind Links zu Artikeln, die Einblicke in diese fortgeschritteneren Grafikthemen bieten:

- [Canvas](/de/docs/Web/API/Canvas_API)
  - : Das {{HTMLElement("canvas")}}-Element bietet APIs zum Zeichnen von 2D-Grafiken mit JavaScript.
- [SVG](/de/docs/Web/SVG)
  - : Skalierbare Vektor-Grafiken (SVG) ermöglichen es Ihnen, Linien, Kurven und andere geometrische Formen zu verwenden, um 2D-Grafiken darzustellen. Mit Vektoren können Sie Bilder erstellen, die sich sauber an jede Größe anpassen lassen.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der WebGL-API-Leitfaden wird Sie mit WebGL, der 3D-Grafik-API für das Web, vertraut machen, mit der Sie standardmäßiges OpenGL ES in Webinhalten verwenden können.
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Genau wie `<img>` können Sie HTML verwenden, um {{htmlelement("video")}} und {{htmlelement("audio")}} in eine Webseite einzubetten und ihre Wiedergabe zu steuern.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Das RTC in WebRTC steht für Real-Time Communications, eine Technologie, die Audio-/Video-Streaming und Datenaustausch zwischen Browser-Clients (Peers) ermöglicht.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Bevor Sie fortfahren, finden Sie weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben — siehe [Testen Sie Ihr Wissen: HTML-Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images).

## Zusammenfassung

Das war es erst mal. Wir haben Bilder und Unterschriften im Detail behandelt. Im nächsten Artikel werden wir einen Gang höher schalten und uns ansehen, wie wir HTML verwenden, um [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) in Webseiten einzubetten.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
