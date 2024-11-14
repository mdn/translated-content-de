---
title: Bilder in HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
l10n:
  sourceCommit: acb4e05fe7ea33a7b20fa03fdeb26a93511624e0
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

Am Anfang bestand das Web nur aus Text und war wirklich ziemlich langweilig. Zum Glück dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Inhaltsarten) in Webseiten einzubetten. Es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein einfaches Bild auf einer Webseite einzubetten, aber es gibt andere Arten von Multimedia, die in Betracht gezogen werden müssen. In diesem Artikel werden wir uns ausführlich damit befassen, es zu verwenden, einschließlich der Grundlagen, es mit Bildunterschriften unter Verwendung von {{htmlelement("figure")}} zu versehen und zu erläutern, wie es sich zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern verhält, und wir werden andere Grafiken einführen, die der Webplattform zur Verfügung stehen.

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
          >Arbeiten mit Dateien</a
        >, Vertrautheit mit den HTML-Grundlagen (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man einfache Bilder in HTML einbettet, sie mit
        Bildunterschriften versieht und wie HTML-Bilder sich auf CSS-Hintergrundbilder beziehen.
      </td>
    </tr>
  </tbody>
</table>

## Wie setzen wir ein Bild auf eine Webseite?

Um ein einfaches Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "vorderes Element")}} (was bedeutet, dass es keine untergeordneten Inhalte haben kann und kein End-Tag haben darf), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie auf der Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative oder absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternative_texte).

> [!NOTE]
> Sie sollten [Eine kurze Einführung in URLs und Pfade](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild beispielsweise `dinosaur.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, können Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn das Bild in einem Unterverzeichnis `images` wäre, das sich im selben Verzeichnis wie die HTML-Seite befindet, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen sie zur Suchmaschinenoptimierung (SEO). Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaur.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Es wird jedoch nicht empfohlen, über absolute URLs zu verlinken. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrem eigenen Server hosten, was bei einfachen Setups bedeutet, die Bilder Ihrer Website auf dem gleichen Server wie Ihr HTML zu halten. Zudem ist es effizienter, relative URLs anstelle von absoluten URLs zu verwenden, in Bezug auf die Wartung (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warning:** _Niemals_ das `src`-Attribut auf ein Bild setzen, das auf der Website eines anderen gehostet wird, _ohne Erlaubnis_. Das nennt man "Hotlinking". Es wird als unethisch angesehen, da jemand anderes die Kosten für die Bandbreite trägt, um das Bild zu liefern, wenn jemand Ihre Seite besucht. Es gibt Ihnen auch keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Code-Schnipsel, entweder mit der absoluten oder der relativen URL, gibt uns folgendes Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einem Browser, mit "Images in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden, nicht durch den Inhalt des Elements selbst. Weitere Informationen finden Sie unter [Replaced elements](/de/docs/Web/CSS/Replaced_element).

> [!NOTE]
> Sie können das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) finden (siehe auch den [Source-Code](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternative Texte

Das nächste Attribut, das wir uns ansehen werden, ist `alt`. Sein Wert soll eine textuelle Beschreibung des Bildes sein, für Situationen, in denen das Bild nicht gesehen/angezeigt werden kann oder eine lange Zeit in der Darstellung benötigt wegen einer langsamen Internetverbindung. Unser obiger Code könnte zum Beispiel so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt`-Text zu testen, ist, den Dateinamen absichtlich falsch zu schreiben. Wenn zum Beispiel unser Bildname als `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den alternativen Text anzeigen:

![Der Titel "Images in HTML", aber dieses Mal wird das Dinosaurierbild nicht angezeigt und der alternative Text nimmt seinen Platz ein.](alt-text.png)

Warum würden Sie jemals einen alternativen Text sehen oder benötigen? Es kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://de.wikipedia.org/wiki/Screenreader), der das Web für ihn liest. Tatsächlich ist der alternative Text hilfreich für die meisten Benutzer.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder des Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Leute benutzen immer noch nur Textbrowser, wie [Lynx](https://de.wikipedia.org/wiki/Lynx_%28Webbrowser%29), welche den alternativen Text von Bildern anzeigen.
- Sie möchten möglicherweise Text zur Verfügung stellen, den Suchmaschinen nutzen können; zum Beispiel können Suchmaschinen den alternativen Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Übertragungsvolumen und Ablenkungen zu reduzieren. Dies ist besonders bei Mobiltelefonen üblich und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihrem `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was Sie verlieren, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild kein Teil des Inhalts ist, sollte ein Screenreader keine Zeit mit dem Lesen verbringen.
- **Inhalt.** Wenn Ihr Bild wichtige Informationen bereitstellt, geben Sie dieselben Informationen in einem _kurzen_ alternativen Text an – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten alternativen Text. Wie ärgerlich wäre es für einen sehenden Benutzer, wenn alle Absätze zweimal im Hauptinhalt geschrieben würden? Wenn das Bild durch den Haupttext ausreichend beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild in {{htmlelement("a")}}-Tags setzen, um ein Bild in einen Link zu verwandeln, müssen Sie trotzdem [zugänglichen Link-Text](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie entweder es innerhalb desselben `<a>`-Elements schreiben oder im `alt`-Attribut des Bildes – je nachdem, was in Ihrem Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder legen. Wenn Ihre Hauptüberschrift beispielsweise einen Schlagschatten benötigt, [verwenden Sie dafür CSS](/de/docs/Web/CSS/text-shadow) statt den Text in ein Bild zu legen. Wenn Sie _wirklich nicht vermeiden können, dies zu tun_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen ist der Schlüssel, eine nutzbare Erfahrung zu bieten, auch wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen Inhalt verpassen. Versuchen Sie, die Bilder in Ihrem Browser auszuschalten und zu sehen, wie die Dinge aussehen. Sie werden schnell merken, wie hilfreich der alternative Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Für weitere Informationen sehen Sie sich unseren Leitfaden zu [Text Alternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives) und [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) an, um zu lernen, wie man ein alt-Attribut für Bilder in verschiedenen Situationen verwendet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als Ganzzahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise herausfinden. Zum Beispiel können Sie auf dem Mac <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Das HTML für Ihre Seite und das Bild sind separate Ressourcen, die durch den Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, wird es mit der Anzeige der Seite für den Benutzer beginnen. Wenn die Bilder noch nicht eingegangen sind (und das wird oft der Fall sein, da Bilddateigrößen oft viel größer als HTML-Dateien sind), wird der Browser nur das HTML rendern und die Seite aktualisieren, sobald es das Bild erhalten hat.

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

Sobald der Browser das HTML heruntergeladen hat, wird der Browser beginnen, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Den Text auf diese Weise zu verschieben, ist für Benutzer äußerst ablenkend, insbesondere wenn sie bereits begonnen haben zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, mit den Attributen `width` und `height`, dann weiß der Browser, bevor es das Bild heruntergeladen hat, wie viel Platz es dafür einräumen muss.

Das bedeutet, dass, wenn das Bild heruntergeladen wurde, der Browser den umgebenden Inhalt nicht verschieben muss.

![Vergleich des Seitenlayouts, während der Browser eine Seite lädt und wenn er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieses Features siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie wir gesagt haben, gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mithilfe von HTML-Attributen anzugeben, sollten Sie sie nicht verwenden, um Bilder zu _vergrößern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, verschwommen oder zu klein aussehen, und verschwenden Bandbreite zum Herunterladen eines Bildes, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie das richtige {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihrer Webseite veröffentlichen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn/CSS) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#adding_supporting_information_with_the_title_attribute), können Sie auch `title`-Attribute zu Bildern hinzufügen, um bei Bedarf weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

Das gibt uns ein Tooltip beim Überfahren mit der Maus, genau wie Link-Titel:

![Das Dinosaurierbild mit einem Tooltip darüber, der den Titel A T-Rex on display at the Manchester University Museum anzeigt](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, hauptsächlich basierend darauf, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie bewegen sich mit einer Maus (also z.B. kein Zugriff für Tastaturnutzer). Wenn Sie an weiteren Informationen darüber interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Haupttext des Artikels einzufügen, anstatt an das Bild angehängt.

### Aktives Lernen: Ein Bild einbetten

Jetzt sind Sie dran! Dieser Abschnitt zum aktiven Lernen gibt Ihnen eine einfache Einübungsaufgabe. Ihnen wird ein einfacher {{htmlelement("img")}}-Tag zur Verfügung gestellt; wir möchten, dass Sie das Bild einbetten, das sich unter der folgenden URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, dass man nie Bilder auf anderen Servern hotlinken sollte, aber das ist nur zu Lernzwecken, also lassen wir Sie diesmal so durchgehen.

Wir möchten auch, dass Sie:

- Einen alternativen Text hinzufügen und überprüfen, dass es funktioniert, indem Sie die Bild-URL falsch schreiben.
- Die korrekte `width` und `height` des Bildes festlegen (Hinweis: es ist 200px breit und 171px hoch), und dann mit anderen Werten experimentieren, um zu sehen, welche Wirkung sie haben.
- Einen `title` für das Bild festlegen.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen:

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

Bilder (und andere Medienressourcentypen), die Sie im Web finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Seite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder den Lizenzbedingungen des Eigentümers nachkommen.

### Lizenztypen verstehen

Lassen Sie uns einige häufige Lizenzkategorien, die Sie wahrscheinlich im Web finden werden, betrachten.

#### Alle Rechte vorbehalten

Urheber von Originalwerken wie Liedern, Büchern oder Software veröffentlichen ihre Arbeit oft unter geschlossenem Urheberschutz. Das bedeutet, dass standardmäßig sie (oder ihr Verlag) exklusive Rechte zur Nutzung (zum Beispiel Anzeigen oder Verbreiten) ihrer Arbeit besitzen. Wenn Sie urheberrechtlich geschützte Bilder mit einer _Alle Rechte vorbehalten_-Lizenz verwenden wollen, müssen Sie eine der folgenden Optionen wählen:

- Explizite, schriftliche Erlaubnis vom Urheberrechtsinhaber einholen.
- Eine Lizenzgebühr zahlen, um sie zu verwenden. Dies kann eine einmalige Gebühr für die unbegrenzte Nutzung ("royalty-free") sein, oder es könnte "rights-managed" sein, in welchem Fall Sie spezifische Gebühren pro Nutzung nach Zeitfenster, geografischem Gebiet, Branche oder Medientyp, etc. zahlen müssen.
- Ihre Nutzung auf solche beschränken, die in Ihrer Gerichtsbarkeit als [faire Nutzung](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) gelten würden.

Autoren müssen keinen Urheberrechtsvermerk oder Lizenzbedingungen mit ihrem Werk beifügen. Urheberrecht besteht automatisch in einem Originalwerk, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und es keine Urheberrechtsvermerke oder Lizenzbedingungen gibt, ist der sicherste Weg, anzunehmen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Freizügig

Wenn das Bild unter einer freizügigen Lizenz veröffentlicht wurde, wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC)-Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühr zahlen oder eine Genehmigung einholen, um es zu verwenden. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie müssen:

- Einen Link zur ursprünglichen Quelle des Bildes bereitstellen und seinen Ersteller nennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Alle mit dem Bild erstellten abgeleiteten Werke unter derselben Lizenz wie das Original teilen.
- Keine abgeleiteten Werke teilen.
- Das Bild nicht in einem kommerziellen Werk verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung bereitstellen, die das Bild verwendet.

Sie sollten die anwendbare Lizenz für die spezifischen Bedingungen, die Sie befolgen müssen, konsultieren.

> [!NOTE]
> Sie könnten auf den Begriff "Copyleft" im Zusammenhang mit freizügigen Lizenzen stoßen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons-Lizenzen) schreiben vor, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Software-Welt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines Copyleft-lizenzierten Projekts gebaut wurde (dies ist bekannt als ein "Fork" der Originalsoftware), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts ebenfalls für andere zur Untersuchung und Änderung verfügbar gemacht wird. Beachten Sie, dass im Allgemeinen Lizenzen, die für Software entworfen wurden, wie die GPL, nicht als gute Lizenzen für Nicht-Software-Werke angesehen werden, da sie nicht mit Nicht-Software-Werken im Sinn entworfen wurden.

Erkunden Sie die früher in diesem Abschnitt bereitgestellten Links, um über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie spezifizieren, zu lesen.

#### Gemeinfrei/CC0

Arbeit, die in die Gemeinfreiheit entlassen wurde, wird manchmal als "keine Rechte vorbehalten" bezeichnet — kein Urheberrecht gilt dafür, und es kann ohne Genehmigung und ohne die Erfüllung von Lizenzbedingungen verwendet werden. Arbeit kann auf verschiedene Weise in die Gemeinfreiheit gelangen, zum Beispiel durch Ablauf des Urheberrechts oder spezifisches Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, Arbeit in die Gemeinfreiheit zu entlassen, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenziert, eine spezifische Creative Commons-Lizenz, die ein klares und unmissverständliches rechtliches Werkzeug für diesen Zweck bereitstellt.

Wenn Sie Gemeinfreie Bilder verwenden, erhalten Sie einen Nachweis, dass das Bild gemeinfrei ist, und bewahren Sie den Nachweis für Ihre Aufzeichnungen auf. Zum Beispiel machen Sie einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus und erwägen Sie, eine Seite auf Ihrer Website mit einer Liste der erworbenen Bilder zusammen mit deren Lizenzanforderungen hinzuzufügen.

### Nach permissiv lizenzierten Bildern suchen

Sie können nach freizügig lizenzierten Bildern für Ihre Projekte mit einer Bildsuchmaschine oder direkt aus Bild-Repositories suchen.

Suchen Sie nach Bildern mit einer Beschreibung des Bildes, das Sie suchen, zusammen mit relevanten Lizenzbedingungen. Zum Beispiel, wenn Sie nach "gelber Dinosaurier" suchen, fügen Sie "public domain images", "public domain image library", "open licensed images" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Werkzeuge, die Ihnen helfen, Bilder mit freizügigen Lizenzen zu finden. Zum Beispiel, wenn Sie Google verwenden, gehen Sie zur Registerkarte "Bilder", um nach Bildern zu suchen, dann klicken Sie auf "Werkzeuge". Es gibt ein Dropdown-Menü "Nutzungsrechte" in der sich ergebenden Symbolleiste, wo Sie auswählen können, spezifisch nach Bildern unter Creative Commons-Lizenzen zu suchen.

Bild-Repository-Seiten wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) haben Suchoptionen, mit denen Sie spezifisch nach freizügig lizenzierten Bildern suchen können. Einige Seiten verteilen ausschließlich freizügig lizenzierte Bilder und Icons, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz oder die Anleitungsseite, die von der Quelle bereitgestellt wird, zu lesen und dann diese Anleitungen zu befolgen. Seriöse Bilder-Repositories machen ihre Lizenzbedingungen klar und leicht auffindbar.

## Bilder mit Figuren und Bildunterschriften annotieren

Apropos Bildunterschriften, es gibt eine Reihe von Möglichkeiten, wie Sie eine Bildunterschrift hinzufügen könnten, die mit Ihrem Bild zusammenhängt. Zum Beispiel gibt es nichts, was Sie davon abhält, dies zu tun:

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

Das ist in Ordnung. Es enthält den Inhalt, den Sie brauchen, und ist schön mit CSS stilebar. Aber es gibt ein Problem hier: Es gibt nichts, was das Bild semantisch mit seiner Bildunterschrift verknüpft, was für Screenreader problematisch sein kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist es, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese sind genau für diesen Zweck erstellt worden: um einen semantischen Container für Abbildungen bereitzustellen und die Abbildung klar mit der Beschriftung zu verknüpfen. Unser obiges Beispiel könnte dann so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element sagt Browsern und unterstützenden Technologien, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einer Sicht der Barrierefreiheit haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Element/img#alt)-Texte unterschiedliche Rollen. Bildunterschriften kommen auch den Menschen zugute, die das Bild sehen können, während der [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text dieselbe Funktion wie ein abwesendes Bild bereitstellt. Daher sollten Bildunterschriften und `alt`-Text nicht dasselbe sagen, weil beide erscheinen, wenn das Bild fehlt. Versuchen Sie, die Bilder in Ihrem Browser auszuschalten und sehen Sie, wie es aussieht.

Eine Abbildung muss kein Bild sein. Es ist eine unabhängige Einheit von Inhalten, die:

- Ihre Bedeutung auf eine kompakte, leicht zu erfassende Weise ausdrückt.
- An mehreren Stellen im linearen Verlauf der Seite platziert werden könnte.
- Wesentliche Informationen bereitstellt, die den Haupttext unterstützen.

Eine Abbildung könnte mehrere Bilder, ein Code-Schnipsel, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Eine Abbildung erstellen

In diesem Abschnitt zum aktiven Lernen möchten wir, dass Sie den fertigen Code aus dem vorherigen Abschnitt des aktiven Lernens nehmen und ihn in eine Abbildung umwandeln:

1. Umwickeln Sie ihn in ein {{htmlelement("figure")}}-Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und setzen Sie den Text in ein {{htmlelement("figcaption")}}-Element unterhalb des Bildes ein.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen:

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

Das resultierende eingebettete Bild ist möglicherweise einfacher zu positionieren und zu steuern als HTML-Bilder. Aber warum sich mit HTML-Bildern bemühen? Wie oben angedeutet, sind CSS-Hintergrundbilder nur für Dekoration gedacht. Wenn Sie einfach etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Allerdings haben solche Bilder keinerlei semantische Bedeutung. Sie können keine schriftlichen Entsprechungen haben, sind für Screenreader unsichtbar und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild eine Bedeutung im Sinne Ihres Inhalts hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild rein dekorativ ist, sollten Sie CSS-Hintergrundbilder verwenden.

> [!NOTE]
> Sie werden viel mehr über [CSS-Hintergrundbilder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) in unserem [CSS](/de/docs/Learn/CSS)-Thema lernen.

## Andere Grafiken im Web

Wir haben gesehen, dass statische Bilder mit dem {{HTMLElement("img")}}-Element angezeigt werden können oder indem der Hintergrund von HTML-Elementen mit der Eigenschaft {{cssxref("background-image")}} eingestellt wird. Sie können auch Grafiken on-the-fly erstellen oder Bilder nachträglich manipulieren. Der Browser bietet Möglichkeiten zur Erstellung von 2D- und 3D-Grafiken mit Code sowie zur Einbindung von Videos aus hochgeladenen Dateien oder Live-Streams von der Kamera eines Benutzers. Hier sind Links zu Artikeln, die Einblicke in diese fortgeschritteneren Grafikthemen bieten:

- [Canvas](/de/docs/Web/API/Canvas_API)
  - : Das {{HTMLElement("canvas")}}-Element bietet APIs zum Zeichnen von 2D-Grafiken mit JavaScript.
- [SVG](/de/docs/Web/SVG)
  - : Scalable Vector Graphics (SVG) ermöglichen es Ihnen, Linien, Kurven und andere geometrische Formen zu verwenden, um 2D-Grafiken zu rendern. Mit Vektoren können Sie Bilder erstellen, die sich sauber auf jede Größe skalieren lassen.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der WebGL-API-Leitfaden wird Ihnen den Einstieg in WebGL, die 3D-Grafik-API für das Web ermöglichen, die es Ihnen erlaubt, standardmäßiges OpenGL ES in Webinhalten zu verwenden.
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Genau wie `<img>` können Sie HTML verwenden, um {{htmlelement("video")}} und {{htmlelement("audio")}} in eine Webseite einzubetten und deren Wiedergabe zu steuern.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Das RTC in WebRTC steht für Real-Time Communications, eine Technologie, die Audio-/Video-Streaming und Datenaustausch zwischen Browser-Clients (Peers) ermöglicht.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: HTML images](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images).

## Zusammenfassung

Das war's fürs Erste. Wir haben Bilder und Bildunterschriften ausführlich behandelt. Im nächsten Artikel werden wir das Tempo erhöhen und uns ansehen, wie Sie HTML verwenden, um [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) in Webseiten einzubetten.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
