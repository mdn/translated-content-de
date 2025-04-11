---
title: HTML-Bilder
short-title: Images
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

Zu Beginn war das Web nur Text und wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessante Inhaltsarten) in Webseiten einzubetten. In diesem Artikel schauen wir uns an, wie Sie das {{htmlelement("img")}}-Element ausführlich verwenden können, einschließlich der Grundlagen, der Anmerkung mit Bildunterschriften über {{htmlelement("figure")}} und der Beschreibung, wie es sich zu {{Glossary("CSS", "CSS")}}-Hintergrundbildern verhält.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>
        behandelt werden. Textniveau-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Der Begriff "ersetztes Element" – was bedeutet das?</li>
          <li>Grundlegende <code>&lt;img&gt;</code>-Tag-Syntax</li>
          <li>Verwendung von <code>src</code>, um auf eine Ressource zu verweisen.</li>
          <li>Verwendung von <code>width</code> und <code>height</code>, um beispielsweise unangenehme ruckartige Updates der Benutzeroberfläche zu vermeiden, sobald ein Bild geladen und angezeigt wird.</li>
          <li>Optimierung von Medienressourcen für das Web – halten Sie die Dateigrößen klein.</li>
          <li>Verständnis der Lizenzierung von Medienressourcen – verschiedene Lizenzarten, wie man diese einhält und wie man nach geeignet lizenzierten Mediendateien für Projekte sucht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wie fügen wir ein Bild in eine Webseite ein?

Um ein Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void_element", "leeres Element")}} (das bedeutet, es kann keinen Kindeinhalt haben und kein End-Tag haben), das zwei Attribute benötigt, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Wie beim `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild, das geladen werden kann.

Das [`alt`-Attribut wird unten beschrieben](#alternativer_text).

> [!NOTE]
> Sie sollten [Eine schnelle Einführung in URLs und Pfade](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis über relative und absolute URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild zum Beispiel `dinosaur.jpg` heißt und sich im gleichen Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild so einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

Wenn sich das Bild in einem `images`-Unterverzeichnis befindet, das im gleichen Verzeichnis wie die HTML-Seite liegt, würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und zählen sie zur SEO. Daher sollten Sie Ihren Bildern einen beschreibenden Dateinamen geben; `dinosaur.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch über seine absolute URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

Das Verknüpfen über absolute URLs wird jedoch nicht empfohlen. Sie sollten die Bilder, die Sie auf Ihrer Website verwenden möchten, hosten, was in einfachen Setups bedeutet, die Bilder Ihrer Website auf demselben Server wie Ihre HTML-Dateien zu halten. Zudem ist die Verwendung relativer URLs effizienter als absolute URLs, was die Wartung betrifft (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle URLs aktualisieren, um die neue Domain einzuschließen). In fortgeschritteneren Setups könnten Sie ein {{Glossary("CDN", "CDN (Content Delivery Network)")}} verwenden, um Ihre Bilder zu liefern.

Wenn Sie die Bilder nicht erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe unten [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) für weitere Informationen).

> **Warnung:** _Niemals_ das `src`-Attribut auf ein Bild einstellen, das auf jemand anderem Webseite gehostet wird _ohne Erlaubnis_. Dies wird "Hotlinking" genannt und wird als unethisch angesehen, da jemand anderes die Bandbreitenkosten für die Bereitstellung des Bildes zahlen würde, wenn jemand Ihre Seite besucht. Außerdem haben Sie keine Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Codeausschnitt, entweder mit der absoluten oder der relativen URL, liefert uns das folgende Ergebnis:

![Ein grundlegendes Bild eines Dinosauriers, eingebettet in einem Browser, mit "Bilder in HTML" darüber](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements durch eine externe Ressource (wie eine Bild- oder Videodatei) definiert werden und nicht durch den Inhalt des Elements selbst. Weitere Informationen finden Sie unter {{Glossary("replaced_elements", "ersetzte Elemente")}}.

> [!NOTE]
> Sie finden das fertige Beispiel aus diesem Abschnitt [laufend auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)).

### Alternativer Text

Das nächste Attribut, das wir uns anschauen, ist `alt`. Sein Wert soll eine textuelle Beschreibung des Bildes sein, um in Situationen verwendet zu werden, in denen das Bild nicht gesehen/angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange zum Rendern benötigt. Beispielsweise könnte unser obiger Code wie folgt modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

Der einfachste Weg, Ihren `alt`-Text zu testen, ist, Ihren Dateinamen absichtlich falsch zu schreiben. Wenn zum Beispiel unser Bildname als `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den Alt-Text anzeigen:

![Der Titel "Bilder in HTML", aber diesmal wird das Dinosaurierbild nicht angezeigt und der Alt-Text ist an seiner Stelle.](alt-text.png)

Warum würden Sie jemals Alt-Text sehen oder benötigen? Es kann aus einer Reihe von Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://de.wikipedia.org/wiki/Screenreader), um sich das Web vorlesen zu lassen. Tatsächlich ist Alt-Text, der zur Beschreibung von Bildern zur Verfügung steht, für die meisten Benutzer nützlich.
- Wie oben beschrieben, könnte die Schreibweise des Dateinamens oder Pfads falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Manche Leute nutzen immer noch Textbrowser, wie [Lynx](<https://de.wikipedia.org/wiki/Lynx_(Browser)>), der den Alt-Text von Bildern anzeigt.
- Möglicherweise möchten Sie den Suchmaschinen Text zur Verfügung stellen; Suchmaschinen können beispielsweise Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder deaktiviert, um das Datenübertragungsvolumen und Ablenkungen zu verringern. Dies ist insbesondere auf Mobiltelefonen und in Ländern üblich, in denen die Bandbreite begrenzt oder teuer ist.

Was sollten Sie genau in Ihr `alt`-Attribut schreiben? Es hängt davon ab, warum das Bild überhaupt dort ist. Anders ausgedrückt, was Sie verlieren, wenn Ihr Bild nicht erscheint:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit damit verschwenden, es zu lesen.
- **Inhalt.** Wenn Ihr Bild bedeutende Informationen liefert, stellen Sie die gleichen Informationen in einem _kurzen_ `alt`-Text bereit – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen überflüssigen `alt`-Text. Wie nervig wäre es für einen sehenden Benutzer, wenn alle Absätze im Hauptinhalt zweimal geschrieben wären? Wenn das Bild ausreichend im Haupttext beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb von {{htmlelement("a")}}-Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Link-Text](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie entweder es innerhalb desselben `<a>`-Elements oder innerhalb des `alt`-Attributs des Bildes schreiben – je nachdem, was für Ihren Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift einen Schlagschatten benötigt, verwenden Sie dafür [CSS](/de/docs/Web/CSS/text-shadow) anstelle des Einfügens des Textes in ein Bild. Sollten Sie dies _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen ist es wichtig, eine nutzbare Erfahrung zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen Inhalt verpassen. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und sehen Sie, wie die Dinge aussehen. Sie werden schnell merken, wie hilfreich Alt-Text ist, wenn das Bild nicht gesehen werden kann.

> [!NOTE]
> Sehen Sie sich unseren Leitfaden zu [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) an, um zu erfahren, wie man das `alt`-Attribut für Bilder in verschiedenen Situationen verwendet.

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Diese werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Weise herausfinden. Auf dem Mac können Sie zum Beispiel <kbd>Cmd</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen für die Bilddatei zu erhalten. Zurück zu unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

Es gibt einen sehr guten Grund, dies zu tun. Der HTML-Code Ihrer Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser das HTML erhalten hat, beginnt er, es für den Benutzer anzuzeigen. Wenn die Bilder noch nicht empfangen wurden (und das wird oft der Fall sein, da Bilddateigrößen oft viel größer sind als HTML-Dateien), wird der Browser nur das HTML rendern und die Seite mit dem Bild aktualisieren, sobald es empfangen wird.

Nehmen wir zum Beispiel an, dass wir etwas Text nach dem Bild haben:

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

Sobald der Browser das HTML heruntergeladen hat, beginnt er, die Seite darzustellen.

Sobald das Bild geladen ist, fügt der Browser das Bild zur Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten auf der Seite verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seiten-Layouts während der Browser eine Seite lädt und wenn er fertig ist, wenn keine Bildgröße angegeben ist.](no-size.png)

Das Verschieben des Textes ist für Benutzer äußerst ablenkend, insbesondere wenn sie bereits begonnen haben, ihn zu lesen.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML angeben, indem Sie die Attribute `width` und `height` verwenden, weiß der Browser, bevor er das Bild heruntergeladen hat, wie viel Platz er dafür reservieren muss.

Das bedeutet, dass der Browser den umliegenden Inhalt nicht bewegen muss, wenn das Bild heruntergeladen wurde.

![Vergleich des Seiten-Layouts während der Browser eine Seite lädt und wenn er fertig ist, wenn die Bildgröße angegeben ist.](size.png)

Für einen hervorragenden Artikel über die Geschichte dieser Funktion siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie gesagt, gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie diese nicht verwenden, um Bilder zu _vergrößern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, erhalten Sie Bilder, die körnig, verschwommen oder zu klein aussehen, und verschwenden Bandbreite, um ein Bild herunterzuladen, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild kann auch verzerrt aussehen, wenn Sie das korrekte {{Glossary("aspect_ratio", "Seitenverhältnis")}} nicht beibehalten. Sie sollten einen Bildbearbeiter verwenden, um Ihr Bild auf die richtige Größe zu bringen, bevor Sie es auf Ihre Webseite stellen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn_web_development/Core/Styling_basics) verwenden.

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

Dies gibt uns einen Tooltip bei Maus-Hover, genau wie Link-Titel:

![Das Dinosaurierbild mit einem Tooltip-Titel darüber, der lautet: Ein T-Rex, der im Museumsuniversität von Manchester gezeigt wird.](image-with-title.png)

Dies wird jedoch nicht empfohlen — `title` hat eine Reihe von Zugänglichkeitsproblemen, hauptsächlich basierend darauf, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, Sie schweben mit der Maus darüber (also z.B. kein Zugriff für Tastaturnutzer). Wenn Sie an weiteren Informationen darüber interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Haupttext anstelle des Bildes zu platzieren.

### Aktives Lernen: einbetten eines Bildes

Jetzt sind Sie dran! In diesem aktiven Lernabschnitt können Sie mit einer Einbettungsübung beginnen. Ihnen wird ein grundlegendes {{htmlelement("img")}}-Tag bereitgestellt; wir möchten, dass Sie das Bild einbetten, das sich unter der folgenden URL befindet:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Früher haben wir gesagt, dass Sie niemals auf Bilder auf anderen Servern direkt verlinken sollten, aber das ist nur zu Lernzwecken gedacht, also lassen wir es diesmal durchgehen.

Wir möchten auch, dass Sie:

- Fügen Sie einen alternativen Text hinzu und prüfen Sie, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Legen Sie die korrekte `width` und `height` des Bildes fest (Tipp: es ist 200px breit und 171px hoch) und experimentieren Sie dann mit anderen Werten, um zu sehen, welche Auswirkungen es hat.
- Legen Sie einen `title` für das Bild fest.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste rückgängig machen. Wenn Sie wirklich nicht weiterkommen, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen:

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

Bilder (und andere Arten von Medienressourcen), die Sie im Internet finden, werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Seite verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis haben, es zu verwenden, oder die Lizenzbedingungen des Eigentümers einhalten.

### Verständnis von Lizenztypen

Lassen Sie uns einige der gängigen Kategorien von Lizenzen betrachten, die Sie wahrscheinlich im Internet finden werden.

#### Alle Rechte vorbehalten

Schöpfer von Originalwerken wie Songs, Bücher oder Software veröffentlichen ihre Werke oft unter geschlossenem Urheberrechtsschutz. Das bedeutet, dass sie (oder ihr Verlag) standardmäßig exklusive Rechte zur Nutzung (z. B. Anzeige oder Verteilung) ihrer Werke haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Holen Sie sich eine explizite, schriftliche Genehmigung des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr, um sie zu verwenden. Dies kann eine einmalige Gebühr für die unbegrenzte Nutzung ("lizenzfrei") sein, oder es könnte "rechteverwaltet" sein, in diesem Fall müssen Sie möglicherweise spezifische Gebühren pro Nutzung nach Zeitraum, geografischer Region, Branche oder Medientyp usw. zahlen.
- Beschränken Sie Ihre Nutzung auf das, was in Ihrem Zuständigkeitsbereich als [fair use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [fair dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) gelten würde.

Autoren sind nicht verpflichtet, einen Urheberrechtsvermerk oder Lizenzbedingungen mit ihrem Werk einzuschließen. Das Urheberrecht entsteht automatisch bei einem Originalwerk, sobald es auf einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und es keine Urheberrechtsvermerke oder Lizenzbedingungen gibt, ist der sicherste Weg anzunehmen, dass es durch das Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Freizügig

Wenn das Bild unter einer freizügigen Lizenz veröffentlicht wird, wie zum Beispiel [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC) Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühr zahlen oder eine Genehmigung einholen, um es zu verwenden. Trotzdem gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, die je nach Lizenz variieren.

Zum Beispiel könnten Sie:

- Einen Link zur ursprünglichen Quelle des Bildes bereitstellen und seinen Schöpfer anerkennen.
- Angeben, ob Änderungen daran vorgenommen wurden.
- Jegliche abgeleiteten Werke, die unter Verwendung des Bildes erstellt wurden, unter derselben Lizenz wie das Original freigeben.
- Keine abgeleiteten Werke überhaupt teilen.
- Das Bild nicht in kommerziellen Arbeiten verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung bereitstellen, die das Bild verwendet.

Sie sollten die anwendbare Lizenz konsultieren, um die spezifischen Bedingungen zu erfahren, die Sie befolgen müssen.

> [!NOTE]
> Möglicherweise stoßen Sie auf den Begriff "Copyleft" im Zusammenhang mit freizügigen Lizenzen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons Lizenzen) verlangen, dass abgeleitete Werke unter derselben Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die grundlegende Idee ist, dass ein neues Projekt, das mit dem Quellcode eines copyleft-lizenzierten Projekts gebaut wurde (dies wird als "Fork" der Originalsoftware bezeichnet), ebenfalls unter derselben Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zur Verfügung gestellt wird, um ihn zu studieren und zu ändern. Beachten Sie, dass im Allgemeinen Lizenzen, die für Software entworfen wurden, wie die GPL, nicht als gute Lizenzen für nicht-softwarebezogene Werke angesehen werden, da sie nicht für diese Art von Werken entworfen wurden.

Erkunden Sie die zuvor bereitgestellten Links in diesem Abschnitt, um über die verschiedenen Lizenztypen und die Arten von Bedingungen, die sie spezifizieren, zu lesen.

#### Öffentliche Domäne/CC0

Werke, die in die öffentliche Domäne freigegeben wurden, werden manchmal als "keine Rechte vorbehalten" bezeichnet — es gelten keine Urheberrechte und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Werke können auf verschiedene Weise in die öffentliche Domäne gelangen, zum Beispiel durch Ablaufen von Urheberrechten oder durch expliziten Verzicht auf Rechte.

Eine der effektivsten Möglichkeiten, Werke in die öffentliche Domäne zu platzieren, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/) zu lizenzieren, einer spezifischen Creative-Commons-Lizenz, die ein klares und eindeutiges rechtliches Werkzeug zu diesem Zweck bietet.

Wenn Sie Bilder aus der öffentlichen Domäne verwenden, sollten Sie einen Nachweis erbringen, dass das Bild in der öffentlichen Domäne ist, und diesen Nachweis für Ihre Aufzeichnungen aufbewahren. Beispielsweise nehmen Sie einen Screenshot der Originalquelle mit dem Lizenzstatus deutlich sichtbar auf und erwägen Sie, eine Seite auf Ihrer Webseite hinzuzufügen, die eine Liste der erworbenen Bilder sowie deren Lizenzanforderungen enthält.

### Suche nach freizügig-lizenzierten Bildern

Sie können freizügig lizenzierte Bilder für Ihre Projekte mithilfe einer Bildsuchmaschine oder direkt aus Bildarchiven finden.

Suchen Sie nach Bildern, indem Sie eine Beschreibung des Bildes, das Sie suchen, zusammen mit den relevanten Lizenzbedingungen verwenden. Zum Beispiel wenn Sie nach "gelber Dinosaurier" suchen, fügen Sie "Bilder der öffentlichen Domäne", "Bildbibliothek der öffentlichen Domäne", "offen lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen haben Werkzeuge, um Ihnen zu helfen, Bilder mit freizügigen Lizenzen zu finden. Wenn Sie zum Beispiel Google verwenden, gehen Sie zur Registerkarte "Bilder", um nach Bildern zu suchen, und klicken Sie dann auf "Tools". In der resultierenden Symbolleiste gibt es ein Dropdown-Menü "Nutzungsrechte", in dem Sie speziell nach Bildern unter Creative Commons Lizenzen suchen können.

Bildarchivseiten, wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/), haben Suchoptionen, die es Ihnen erlauben, nur nach freizügig lizenzierten Bildern zu suchen. Einige Seiten verteilen ausschließlich freizügig lizenzierte Bilder und Symbole, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, ist eine Frage des Auffindens der Lizenzdetails, des Lesens der bereitgestellten Lizenz- oder Anweisungsseite durch die Quelle und des Befolgens dieser Anweisungen. Seriöse Bildarchive machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften annotieren

Apropos Bildunterschriften, es gibt mehrere Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen können. Zum Beispiel gibt es nichts, was Sie davon abhält, dies zu tun:

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

Das ist in Ordnung. Es enthält die benötigten Inhalte und ist schön mit CSS stylbar. Aber hier gibt es ein Problem: Es gibt nichts, das das Bild semantisch mit seiner Unterschrift verknüpft, was für Screenreader problematisch sein kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung besteht darin, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese sind genau für diesen Zweck erstellt worden: Um einen semantischen Behälter für Figuren bereitzustellen und die Figur mit der Bildunterschrift klar zu verbinden. Unser obiges Beispiel könnte so umgeschrieben werden:

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

Das {{htmlelement("figcaption")}}-Element teilt Browsern und Assistenztechnologie mit, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einer Zugänglichkeits-Perspektive haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text unterschiedliche Rollen. Bildunterschriften sind auch für Personen vorteilhaft, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text dieselbe Funktion wie ein abwesendes Bild erfüllt. Daher sollten Bildunterschriften und `alt`-Text nicht einfach dasselbe sagen, da sie beide erscheinen, wenn das Bild nicht vorhanden ist. Versuchen Sie, Bilder in Ihrem Browser zu deaktivieren und sehen Sie, wie es aussieht.

Eine Figur muss kein Bild sein. Es ist eine eigenständige Inhaltseinheit, die:

- Ihre Bedeutung auf einfache, leicht verständliche Weise ausdrückt.
- An verschiedenen Stellen im linearen Fluss der Seite stehen könnte.
- Wesentliche Informationen bereitstellt, die den Haupttext unterstützen.

Eine Figur könnte mehrere Bilder, ein Code-Snippet, Audio, Video, Gleichungen, eine Tabelle oder etwas anderes sein.

### Aktives Lernen: Erstellen einer Figur

In diesem aktiven Lernabschnitt möchten wir, dass Sie den fertigen Code aus dem vorherigen Abschnitt des aktiven Lernens nehmen und ihn in eine Figur verwandeln:

1. Umhüllen Sie ihn mit einem {{htmlelement("figure")}}-Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und fügen Sie den Text in ein {{htmlelement("figcaption")}}-Element unterhalb des Bildes ein.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste rückgängig machen. Wenn Sie wirklich nicht weiterkommen, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen:

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

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-{{cssxref("background-image")}}-Eigenschaft und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Zum Beispiel könnten Sie ein Hintergrundbild auf jedem Absatz einer Seite platzieren, indem Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild ist möglicherweise einfacher zu positionieren und zu steuern als HTML-Bilder. Warum sich also mit HTML-Bildern abmühen? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration gedacht. Wenn Sie einfach etwas Schönes auf Ihrer Seite hinzufügen möchten, um die visuelle Erscheinung zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keine textuellen Äquivalente haben, sind unsichtbar für Screenreader und so weiter. Hier glänzen HTML-Bilder!

Zusammenfassend: Wenn ein Bild eine Bedeutung hinsichtlich Ihres Inhalts hat, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur Dekoration ist, sollten Sie CSS-Hintergrundbilder verwenden (wir werden diese später in den Core-Modulen detailliert behandeln).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images).

## Zusammenfassung

Das ist vorerst alles. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel gehen wir einen Schritt weiter und schauen uns an, wie HTML verwendet werden kann, um Video- und Audioinhalte in Webseiten einzubetten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
