---
title: Bilder in HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

Am Anfang bestand das Web nur aus Text und war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Inhalte) in Webseiten einzubetten. Es ist logisch, mit dem bescheidenen {{htmlelement("img")}} Element zu beginnen, das verwendet wird, um ein einfaches Bild in eine Webseite einzubetten, aber es gibt auch andere Arten von Multimedia, die in Betracht gezogen werden müssen. In diesem Artikel werden wir uns ansehen, wie man es umfassend verwendet, einschließlich der Grundlagen, der Beschriftung mit {{htmlelement("figure")}} und der Darstellung dazu, wie es sich zu [CSS](/de/docs/Glossary/CSS) Hintergrundbildern verhält, und wir werden andere Webplattform-Grafiken einführen.

<table>
<caption>Multimedia und Einbettung von Bildern</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, Vertrautheit mit den HTML-Grundlagen (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man einfache Bilder in HTML einbettet, diese mit
        Bildunterschriften versieht und wie HTML-Bilder sich zu CSS-Hintergrundbildern verhalten.
      </td>
    </tr>
  </tbody>
</table>

## Wie fügt man ein Bild in eine Webseite ein?

Um ein einfaches Bild auf einer Webseite einzufügen, verwenden wir das {{htmlelement("img")}} Element. Es handelt sich um ein [void-Element](/de/docs/Glossary/void_element) (das heißt, es kann keinen Kindinhalt haben und kein End-Tag), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src` Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href` Attribut für {{htmlelement("a")}} Elemente kann das `src` Attribut eine relative oder eine absolute URL sein. Ohne ein `src` Attribut gibt es kein Bild, das geladen werden kann.

Das [`alt` Attribut ist unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Ein kurzer Überblick über URLs und Pfade](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis zu relativen und absoluten URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaurier.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem Unterverzeichnis `images` befindet, das sich im gleichen Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

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

Das Verlinken über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie verwenden möchten, auf Ihrer eigenen Seite hosten, was in einfachen Setups bedeutet, dass Sie die Bilder für Ihre Webseite auf demselben Server wie Ihre HTML-Dateien aufbewahren. Darüber hinaus ist es effizienter, in Bezug auf die Wartung relative URLs gegenüber absoluten URLs zu verwenden (wenn Sie Ihre Seite auf eine andere Domain verschieben, müssen Sie nicht alle URLs aktualisieren, um die neue Domain einzubeziehen). In fortgeschritteneren Setups möchten Sie möglicherweise ein [CDN (Content Delivery Network)](/de/docs/Glossary/CDN) verwenden, um Ihre Bilder bereitzustellen.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz, unter der sie veröffentlicht wurden, zu verwenden (siehe [Medien-Assets und Lizenzen](#medien-assets_und_lizenzen) unten für weitere Informationen).

> **Warnung:** _Niemals_ das `src` Attribut auf ein Bild verweisen, das auf der Webseite eines anderen gehostet wird, _ohne Erlaubnis_. Dies wird als "Hotlinking" bezeichnet. Es wird als unethisch betrachtet, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes bezahlen würde, wenn jemand Ihre Seite aufruft. Es gibt Ihnen auch keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der obige Code-Schnipsel, entweder mit der absoluten oder der relativen URL, liefert uns folgendes Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einem Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) und nicht durch den Inhalt des Elements selbst definiert werden. Sie können mehr darüber unter [Ersatz-Elemente](/de/docs/Web/CSS/Replaced_element) lesen.

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativer Text

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Sein Wert soll eine textuelle Beschreibung des Bildes sein, die in Situationen verwendet wird, in denen das Bild nicht gesehen/angezeigt werden kann oder eine lange Ladezeit hat, weil eine langsame Internetverbindung besteht. Zum Beispiel könnte unser obiger Code wie folgt modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt` Text zu testen, besteht darin, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn unser Bildname zum Beispiel `dinosooooor.jpg` geschrieben wird, würde der Browser das Bild nicht anzeigen und stattdessen den alt Text anzeigen:

![Der Titel Bilder in HTML, aber diesmal wird das Dinosaurierbild nicht angezeigt, und der Alt-Text steht an dessen Stelle.](alt-text.png)

Warum also sollten Sie jemals Alt-Text sehen oder benötigen? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://en.wikipedia.org/wiki/Screen_reader), um das Web vorlesen zu lassen. Tatsächlich ist es für die meisten Benutzer nützlich, Alt-Text zur Beschreibung von Bildern zur Verfügung zu haben.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder Pfades falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Personen verwenden immer noch Textbrowser, wie [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29), die den Alt-Text von Bildern anzeigen.
- Sie möchten vielleicht Text für Suchmaschinen bereitstellen; beispielsweise können Suchmaschinen Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben möglicherweise Bilder deaktiviert, um das Datenübertragungsvolumen und Ablenkungen zu reduzieren. Dies ist insbesondere auf Mobiltelefonen und in Ländern üblich, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt` Attribut schreiben? Das hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es vorzulesen.
- **Inhalt.** Wenn Ihr Bild erhebliche Informationen liefert, stellen Sie die gleichen Informationen in einem _kurzen_ `alt` Text bereit – oder noch besser im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt` Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze zweimal im Hauptinhalt geschrieben wären? Wenn das Bild im Haupttext ausreichend beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb {{htmlelement("a")}} Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie immer noch [zugänglichen Linktext](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie entweder im selben `<a>` Element schreiben oder im `alt` Attribut des Bildes – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, verwenden Sie [CSS](/de/docs/Web/CSS/text-shadow) dafür, anstatt den Text in ein Bild zu setzen. Wenn Sie dies jedoch _wirklich nicht vermeiden können_, sollten Sie den Text im `alt` Attribut angeben.

Im Wesentlichen ist der Schlüssel, ein benutzerfreundliches Erlebnis zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies gewährleistet, dass allen Benutzern keine Inhalte entgehen. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren, und sehen Sie, wie es aussieht. Sie werden bald merken, wie hilfreich alt Text ist, wenn das Bild nicht angezeigt werden kann.

> [!NOTE]
> Weitere Informationen finden Sie in unserem Leitfaden zu [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Die Breite und Höhe Ihres Bildes können Sie auf verschiedene Weise herausfinden. Auf einem Mac können Sie zum Beispiel <kbd>Befehl</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel, könnten wir das so machen:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Dafür gibt es einen sehr guten Grund. Der HTML-Code für Ihre Seite und das Bild sind separate Ressourcen, die der Browser als separate HTTP(S)-Anfragen abruft. Sobald der Browser das HTML erhalten hat, beginnt er, es dem Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateien oft viel größer als HTML-Dateien sind), dann rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wird.

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

Sobald der Browser das HTML herunterlädt, beginnt er, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild in die Seite ein. Da das Bild Platz einnimmt, muss der Browser den Text nach unten verschieben, um das Bild darüber einzufügen:

![Vergleich der Seitenlayout während der Browser eine Seite lädt und nachdem er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Den Text auf diese Weise zu verschieben, ist für Benutzer extrem ablenkend, besonders wenn sie bereits angefangen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML mit den Attributen `width` und `height` angeben, weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz dafür vorgesehen werden muss.

Das bedeutet, dass wenn das Bild heruntergeladen wurde, der Browser den umliegenden Inhalt nicht verschieben muss.

![Vergleich der Seitenlayouts während der Browser eine Seite lädt und nachdem er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Einen ausgezeichneten Artikel zur Geschichte dieser Funktion finden Sie unter [Setzen von Höhe und Breite auf Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie gesagt, gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie diese nicht verwenden, um _Bilder zu skalieren_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, unscharf oder zu klein aussehen, und verschwenden Bandbreite beim Herunterladen eines Bildes, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie nicht das richtige [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild in der richtigen Größe zu bearbeiten, bevor Sie es auf Ihrer Webseite platzieren.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie dafür [CSS](/de/docs/Learn/CSS) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#adding_supporting_information_with_the_title_attribute) können Sie auch `title` Attribute zu Bildern hinzufügen, um bei Bedarf weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir das so machen:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Dies liefert uns einen Tooltip beim Hover mit der Maus, ähnlich wie bei Link-Titeln:

![Das Dinosaurierbild, mit einem Tooltip Titel auf ihm, der folgendermaßen lautet: Ein T-Rex im Manchester University Museum](image-with-title.png)

Dies wird jedoch nicht empfohlen – `title` hat eine Reihe von Barrierefreiheitsproblemen, hauptsächlich basierend auf der Tatsache, dass die Unterstützung von Screenreadern sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie bewegen sich mit einer Maus darüber (zum Beispiel keinen Zugriff auf Tastaturbenutzer). Wenn Sie an weiteren Informationen darüber interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext zu enthalten, anstatt sie an das Bild anzuhängen.

### Aktives Lernen: Einbettung eines Bildes

Jetzt sind Sie an der Reihe, aktiv zu werden! Dieser aktive Lernabschnitt wird Sie mit einer einfachen Einbettungsübung starten lassen. Sie erhalten ein einfaches {{htmlelement("img")}} Tag; wir möchten, dass Sie das Bild einbetten, das sich unter folgender URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, dass man niemals Bilder auf anderen Servern verlinken sollte, aber dies ist nur zu Lernzwecken, also lassen wir es Ihnen einmal durchgehen.

Wir möchten auch, dass Sie:

- Fügen Sie etwas Alt-Text hinzu und überprüfen Sie, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Setzen Sie die richtige `width` und `height` des Bildes (Tipp: es ist 200px breit und 171px hoch), und experimentieren Sie dann mit anderen Werten, um zu sehen, welche Auswirkungen dies hat.
- Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie es jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die Schaltfläche _Lösung anzeigen_, um eine Antwort zu sehen:

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

## Medien-Assets und Lizenzen

Bilder (und andere Arten von Medien-Assets), die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer von Ihnen erstellten Seite verwenden, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Lassen Sie uns einige gängige Kategorien von Lizenzen ansehen, die Sie wahrscheinlich im Web finden.

#### Alle Rechte vorbehalten

Ersteller von originellen Werken wie Songs, Büchern oder Software veröffentlichen ihre Arbeiten häufig unter einem geschlossenen Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte zur Nutzung (zum Beispiel Anzeige oder Verbreitung) ihrer Werke haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_ Lizenz verwenden möchten, müssen Sie eine der folgenden Optionen wählen:

- Eine explizite, schriftliche Zustimmung vom Urheberrechtsinhaber einholen.
- Eine Lizenzgebühr bezahlen. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung sein ("gebührenfrei"), oder sie kann "rechte-gemanaged" sein, wobei Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitfenster, geografischer Region, Branche oder Medientyp, usw. zahlen müssen.
- Ihre Nutzung auf solche beschränken, die in Ihrer Rechtsordnung als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) angesehen würde.

Autoren sind nicht verpflichtet, einen Urheberrechtshinweis oder Lizenzbedingungen mit ihrer Arbeit zu kennzeichnen. Das Urheberrecht entsteht automatisch in einem originellen Werk der Autorenschaft, sobald es in einer greifbaren Form erstellt wird. Wenn Sie also online ein Bild finden und es keine Urheberrechtshinweise oder Lizenzbedingungen gibt, ist der sicherste Weg, anzunehmen, dass es durch Urheberrecht geschützt ist mit alle Rechte vorbehalten.

#### Freizügig

Wenn das Bild unter einer freizügigen Lizenz, wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://chooser-beta.creativecommons.org/) veröffentlicht wurde, brauchen Sie keine Lizenzgebühr zu zahlen oder eine Erlaubnis zur Nutzung einzuholen. Es gibt jedoch verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die von der Lizenz abhängen.

Zum Beispiel müssen Sie möglicherweise:

- Einen Link zur Originalquelle des Bildes bereitstellen und den Urheber nennen.
- Angeben, ob daran Änderungen vorgenommen wurden.
- Alle abgeleiteten Werke, die mit dem Bild erstellt wurden, unter derselben Lizenz wie das Original teilen.
- Überhaupt keine abgeleiteten Werke teilen.
- Das Bild nicht in kommerziellen Arbeiten verwenden.
- Eine Kopie der Lizenz mit einer Veröffentlichung, die das Bild verwendet, beifügen.

Sie sollten die geltende Lizenz für die spezifischen Bedingungen konsultieren, die Sie befolgen müssen.

> [!NOTE]
> Sie können auf den Begriff "Copyleft" im Zusammenhang mit freizügigen Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons Lizenzen) schreiben vor, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines Copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Fork" der Originalsoftware bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zur Verfügung gestellt wird, um ihn zu studieren und zu ändern. Beachten Sie, dass im Allgemeinen Lizenzen, die für Software konzipiert wurden, wie die GPL, als nicht geeignet für nicht-software-basierte Werke angesehen werden, da sie nicht im Hinblick auf nicht-software-basierte Werke entworfen wurden.

Erkunden Sie die in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie vorgeben, zu erfahren.

#### Öffentliche Domäne/CC0

Werke, die in die öffentliche Domäne eingestuft wurden, werden manchmal als "kein Urheberrecht vorbehalten" bezeichnet – es gilt kein Urheberrecht, und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Werke können auf verschiedene Weise in die öffentliche Domäne gelangen, wie z.B. durch Ablauf des Urheberrechts oder durch ausdrücklichen Verzicht auf Rechte.

Eine der effektivsten Methoden, um Werke in die öffentliche Domäne zu bringen, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer spezifischen Creative Commons Lizenz, die ein klares und eindeutiges rechtliches Mittel für diesen Zweck bietet.

Wenn Sie öffentliche Domänenbilder verwenden, holen Sie sich einen Nachweis darüber, dass das Bild in der öffentlichen Domäne ist, und bewahren Sie diesen Nachweis für Ihre Unterlagen auf. Zum Beispiel einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus machen und erwägen, eine Seite auf Ihrer Webseite zu erstellen, die eine Liste der erworbenen Bilder zusammen mit deren Lizenzanforderungen enthält.

### Suche nach freizügig lizenzierten Bildern

Sie können freie-unter-lizenzierte Bilder für Ihre Projekte mit einer Bildsuchmaschine oder direkt von Bild-Repositories finden.

Suchen Sie nach Bildern mit einer Beschreibung des Bildes, das Sie suchen, zusammen mit relevanten Lizenzierungsbegriffen. Zum Beispiel, wenn Sie nach "gelber Dinosaurier" suchen, fügen Sie "öffentliche Domäne Bilder", "öffentliche Domäne Bildbibliothek", "offen lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Werkzeuge, die Ihnen helfen, Bilder mit freizügigen Lizenzen zu finden. Zum Beispiel, wenn Sie Google verwenden, gehen Sie auf den Tab "Bilder", um nach Bildern zu suchen, und klicken Sie dann auf "Tools". Es gibt ein Dropdown-Menü "Nutzungsrechte" in der daraus resultierenden Symbolleiste, wo Sie speziell nach Bildern unter Creative Commons Lizenzen suchen können.

Bild-Repositen-Seiten, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/), haben Suchoptionen, die es Ihnen ermöglichen, nur nach freizügig-lizenzierten Bildern zu suchen. Einige Seiten vertreiben ausschließlich frei lizenzierte Bilder und Icons, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz oder die bereitgestellte Anleitungsseite zu lesen und dann diese Anweisungen zu befolgen. Seriöse Bild-Repositories machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Schaubildern und Bildbeschreibungen versehen

Apropos Beschriftungen, es gibt mehrere Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen könnten. Zum Beispiel würde Sie nichts daran hindern, dies zu tun:

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

Das ist in Ordnung. Es enthält den benötigten Inhalt und ist mit CSS schön stilisierbar. Aber es gibt ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Bildunterschrift verbindet, was bei Screenreadern zu Problemen führen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung besteht darin, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese sind genau dafür gemacht: um einen semantischen Container für Abbildungen bereitzustellen und die Figur klar mit der Bildunterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}} Element sagt Browsern und assistierenden Technologien, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}} Elements beschreibt.

> [!NOTE]
> Aus einer Zugänglichkeitsperspektive haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Element/img#alt) Texte unterschiedliche Rollen. Unterschriften nützen auch Menschen, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Element/img#alt) Text zu einer Zeit die gleiche Funktionalität bietet, wenn ein Bild fehlt. Daher sollten Bildunterschriften und der `alt` Text nicht genau das Gleiche sagen, da beide erscheinen, wenn das Bild weg ist. Versuchen Sie, Bilder in Ihrem Browser auszuschalten, und sehen Sie, wie es aussieht.

Eine Figur muss kein Bild sein. Sie ist eine unabhängige Einheit von Inhalten, die:

- Ihre Bedeutung in einer kompakten, leicht verständlichen Weise vermittelt.
- An mehreren Stellen im linearen Ablauf der Seite auftauchen könnte.
- Wichtige Informationen bereitstellt, die den Haupttext unterstützen.

Eine Abbildung könnte aus mehreren Bildern, einem Code-Schnipsel, Audio, Video, Gleichungen, einer Tabelle oder etwas anderem bestehen.

### Aktives Lernen: Erstellen einer Figur

In diesem aktiven Lernabschnitt möchten wir, dass Sie den fertigen Code aus dem vorherigen aktiven Lernabschnitt nehmen und ihn in eine Figur umwandeln:

1. Wickeln Sie ihn in ein {{htmlelement("figure")}} Element.
2. Kopieren Sie den Text aus dem `title` Attribut, entfernen Sie das `title` Attribut und platzieren Sie den Text in einem {{htmlelement("figcaption")}} Element unterhalb des Bildes.

Wenn Sie einen Fehler machen, können Sie es jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die Schaltfläche _Lösung anzeigen_, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS Eigenschaft {{cssxref("background-image")}}, und die anderen `background-*` Eigenschaften, werden verwendet, um das Platzieren von Hintergrundbildern zu steuern. Zum Beispiel, um ein Hintergrundbild auf jeder Seite zu platzieren, könnte man dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist wahrscheinlich einfacher zu positionieren und zu kontrollieren als HTML-Bilder. Warum sich dann mit HTML-Bildern abmühen? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie nur etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keinen Textäquivalent haben, sind für Screenreader unsichtbar, und so weiter. Hier glänzen HTML-Bilder!

Zusammengefasst: Wenn ein Bild eine Bedeutung im Hinblick auf Ihre Inhalte hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden.

> [!NOTE]
> Sie werden viel mehr über [CSS-Hintergrundbilder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) in unserem [CSS](/de/docs/Learn/CSS) Thema lernen.

## Andere Grafiken im Web

Wir haben gesehen, dass statische Bilder mit dem {{HTMLElement("img")}} Element angezeigt werden können, oder indem das Hintergrundbild von HTML-Elementen mit der {{cssxref("background-image")}} Eigenschaft festgelegt wird. Sie können auch Grafiken on-the-fly konstruieren oder Bilder nachträglich manipulieren. Der Browser bietet Möglichkeiten zur Erstellung von 2D- und 3D-Grafiken mit Code sowie zur Einbindung von Videos aus hochgeladenen Dateien oder live gestreamten aus der Kamera des Benutzers. Hier sind Links zu Artikeln, die Einblicke in diese fortgeschritteneren Grafikthemen bieten:

- [Canvas](/de/docs/Web/API/Canvas_API)
  - : Das {{HTMLElement("canvas")}} Element bietet APIs, um mit JavaScript 2D-Grafiken zu zeichnen.
- [SVG](/de/docs/Web/SVG)
  - : Scalable Vector Graphics (SVG) ermöglichen es, 2D-Grafiken mit Linien, Kurven und anderen geometrischen Formen zu rendern. Mit Vektoren können Sie Bilder erstellen, die bei jeder Größe sauber skalieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die WebGL API Anleitung wird Ihnen den Einstieg mit WebGL erleichtern, der 3D-Grafik-API für das Web, die es ermöglicht, standardmäßiges OpenGL ES in Webinhalten zu verwenden.
- [Verwendung von HTML Audio und Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Genau wie `<img>` können Sie HTML verwenden, um {{htmlelement("video")}} und {{htmlelement("audio")}} in eine Webseite einzubetten und deren Wiedergabe zu steuern.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Das RTC in WebRTC steht für Real-Time Communications, eine Technologie, die Audio/Video-Streaming und Datenfreigabe zwischen Browserclients (Peers) ermöglicht.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: HTML Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images).

## Zusammenfassung

Das war's für den Moment. Wir haben Bilder und Bildunterschriften ausführlich behandelt. Im nächsten Artikel werden wir einen Gang zulegen und uns ansehen, wie man HTML verwendet, um [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) in Webseiten einzubetten.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
