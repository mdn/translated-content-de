---
title: Bilder in HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

Am Anfang bestand das Web nur aus Text, und es war wirklich ziemlich langweilig. Glücklicherweise dauerte es nicht lange, bis die Möglichkeit hinzugefügt wurde, Bilder (und andere interessantere Arten von Inhalten) in Webseiten einzubetten. Es ist logisch, mit dem bescheidenen {{htmlelement("img")}}-Element zu beginnen, das verwendet wird, um ein einfaches Bild in eine Webseite einzubetten, aber es gibt auch andere Arten von Multimedia zu berücksichtigen. In diesem Artikel werden wir uns eingehend mit der Verwendung befassen, einschließlich der Grundlagen, der Kommentierung mit Bildunterschriften durch die Verwendung von {{htmlelement("figure")}} und der Erklärung, wie es sich auf {{glossary("CSS")}}-Hintergrundbilder bezieht. Zudem werden wir andere Grafiken vorstellen, die der Webplattform zur Verfügung stehen.

<table>
<caption>Multimedia und Einbettung von Bildern</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, Vertrautheit mit den Grundlagen von HTML (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >.)
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

## Wie platzieren wir ein Bild auf einer Webseite?

Um ein einfaches Bild auf einer Webseite zu platzieren, verwenden wir das {{htmlelement("img")}}-Element. Dies ist ein {{Glossary("void element")}} (das bedeutet, es kann keinen Kindeinhalt haben und kein End-Tag haben) und benötigt zwei Attribute, um nützlich zu sein: `src` und `alt`. Das `src`-Attribut enthält eine URL, die auf das Bild verweist, das Sie in die Seite einbetten möchten. Ähnlich wie das `href`-Attribut für {{htmlelement("a")}}-Elemente kann das `src`-Attribut eine relative URL oder eine absolute URL sein. Ohne ein `src`-Attribut hat ein `img`-Element kein Bild zum Laden.

Das [`alt`-Attribut wird unten beschrieben](#alternativtext).

> [!NOTE]
> Sie sollten [Ein schneller Überblick über URLs und Pfade](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#a_quick_primer_on_urls_and_paths) lesen, um Ihr Gedächtnis bezüglich relativer und absoluter URLs aufzufrischen, bevor Sie fortfahren.

Wenn Ihr Bild beispielsweise `dinosaur.jpg` heißt und sich im selben Verzeichnis wie Ihre HTML-Seite befindet, könnten Sie das Bild folgendermaßen einbetten:

```html
<img src="dinosaur.jpg" alt="Dinosaurier" />
```

Wenn sich das Bild in einem `images`-Unterverzeichnis befindet, das wiederum im selben Verzeichnis wie die HTML-Seite ist, dann würden Sie es so einbetten:

```html
<img src="images/dinosaur.jpg" alt="Dinosaurier" />
```

Und so weiter.

> [!NOTE]
> Suchmaschinen lesen auch Bilddateinamen und berücksichtigen sie für SEO. Daher sollten Sie Ihrem Bild einen beschreibenden Dateinamen geben; `dinosaur.jpg` ist besser als `img835.png`.

Sie könnten das Bild auch mit seiner absoluten URL einbetten, zum Beispiel:

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaurier" />
```

Es wird jedoch nicht empfohlen, über absolute URLs zu verlinken. Sie sollten die Bilder, die Sie auf Ihrer Seite verwenden möchten, auf Ihrer eigenen Website hosten, was in einfachen Setups bedeutet, die Bilder für Ihre Website auf demselben Server wie Ihr HTML zu behalten. Darüber hinaus ist es hinsichtlich der Wartung effizienter, relative URLs anstelle von absoluten URLs zu verwenden (wenn Sie Ihre Website auf eine andere Domain verschieben, müssen Sie nicht alle Ihre URLs aktualisieren, um die neue Domain zu enthalten). In fortgeschritteneren Setups könnten Sie ein [CDN (Content Delivery Network)](/de/docs/Glossary/CDN) verwenden, um Ihre Bilder bereitzustellen.

Wenn Sie die Bilder nicht selbst erstellt haben, sollten Sie sicherstellen, dass Sie die Erlaubnis haben, sie unter den Bedingungen der Lizenz zu verwenden, unter der sie veröffentlicht wurden (siehe [Medienressourcen und Lizenzierung](#medienressourcen_und_lizenzierung) unten für weitere Informationen).

> **Warnung:** Weisen Sie das `src`-Attribut _niemals_ auf ein Bild, das auf der Website einer anderen Person ohne Erlaubnis gehostet wird. Dies wird "Hotlinking" genannt. Es wird als unethisch angesehen, da jemand anderes die Kosten für die Bandbreite zahlen würde, um das Bild bereitzustellen, wenn jemand Ihre Seite besucht. Es lässt Sie auch ohne Kontrolle darüber, dass das Bild entfernt oder durch etwas Peinliches ersetzt wird.

Der vorherige Code-Schnipsel, sowohl mit der absoluten als auch der relativen URL, führt zu folgendem Ergebnis:

![Ein einfaches Bild eines Dinosauriers, eingebettet in einen Browser, mit "Bilder in HTML" darüber geschrieben](basic-image.png)

> [!NOTE]
> Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden manchmal als **ersetzte Elemente** bezeichnet. Dies liegt daran, dass der Inhalt und die Größe des Elements von einer externen Ressource (wie einer Bild- oder Videodatei) definiert werden, nicht vom Inhalt des Elements selbst. Mehr dazu lesen Sie unter [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element).

> [!NOTE]
> Sie finden das fertige Beispiel aus diesem Abschnitt [auf GitHub laufend](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html) an).

### Alternativtext

Das nächste Attribut, das wir betrachten werden, ist `alt`. Sein Wert soll eine textliche Beschreibung des Bildes sein, für den Einsatz in Situationen, in denen das Bild nicht gesehen/angezeigt werden kann oder aufgrund einer langsamen Internetverbindung lange braucht, um geladen zu werden. Unser obiger Code könnte zum Beispiel so modifiziert werden:

```html
<img
  src="images/dinosaur.jpg"
  alt="Der Kopf und der Torso eines Dinosaurierskeletts;
          es hat einen großen Kopf mit langen scharfen Zähnen" />
```

Der einfachste Weg, um Ihren `alt`-Text zu testen, besteht darin, den Dateinamen absichtlich falsch zu schreiben. Wenn unser Bildname zum Beispiel `dinosooooor.jpg` geschrieben wäre, würde der Browser das Bild nicht anzeigen und stattdessen den Alt-Text anzeigen:

![Der Titel "Bilder in HTML", aber diesmal wird das Dinosaurierbild nicht angezeigt und der Alt-Text ist an seiner Stelle.](alt-text.png)

Warum sollten Sie also jemals Alt-Text sehen oder benötigen? Er kann aus mehreren Gründen nützlich sein:

- Der Benutzer ist sehbehindert und verwendet einen [Screenreader](https://de.wikipedia.org/wiki/Screenreader), um sich das Web vorlesen zu lassen. In der Tat ist es für die meisten Benutzer sinnvoll, Alt-Text zur Beschreibung von Bildern verfügbar zu haben.
- Wie oben beschrieben, kann die Schreibweise der Datei oder des Pfadnamens falsch sein.
- Der Browser unterstützt den Bildtyp nicht. Einige Menschen verwenden immer noch Nur-Text-Browser, wie [Lynx](https://de.wikipedia.org/wiki/Lynx_%28Webbrowser%29), welche den Alt-Text von Bildern anzeigen.
- Es kann hilfreich sein, Text für Suchmaschinen bereitzustellen; zum Beispiel können Suchmaschinen Alt-Text mit Suchanfragen abgleichen.
- Benutzer haben Bilder ausgeschaltet, um das Übertragungsvolumen und Ablenkungen zu reduzieren. Dies ist besonders auf Mobiltelefonen üblich und in Ländern, in denen Bandbreite begrenzt oder teuer ist.

Was genau sollten Sie in Ihr `alt`-Attribut schreiben? Es hängt davon ab, _warum_ das Bild überhaupt da ist. Mit anderen Worten, was Ihnen fehlt, wenn Ihr Bild nicht angezeigt wird:

- **Dekoration.** Sie sollten [CSS-Hintergrundbilder](#css-hintergrundbilder) für dekorative Bilder verwenden, aber wenn Sie HTML verwenden müssen, fügen Sie ein leeres `alt=""` hinzu. Wenn das Bild nicht Teil des Inhalts ist, sollte ein Screenreader keine Zeit mit dem Lesen verbringen.
- **Inhalt.** Wenn Ihr Bild signifikante Informationen liefert, stellen Sie die gleichen Informationen in einem _kurzen_ `alt`-Text bereit – oder noch besser, im Haupttext, den jeder sehen kann. Schreiben Sie keinen redundanten `alt`-Text. Wie lästig wäre es für einen sehenden Benutzer, wenn alle Absätze doppelt im Hauptinhalt geschrieben würden? Wenn das Bild ausreichend durch den Haupttext beschrieben wird, können Sie einfach `alt=""` verwenden.
- **Link.** Wenn Sie ein Bild innerhalb der {{htmlelement("a")}}-Tags platzieren, um ein Bild in einen Link zu verwandeln, müssen Sie dennoch [zugänglichen Linktext](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording) bereitstellen. In solchen Fällen können Sie ihn entweder innerhalb desselben `<a>`-Elements oder innerhalb des `alt`-Attributs des Bildes schreiben – je nachdem, was für Ihren Fall am besten funktioniert.
- **Text.** Sie sollten Ihren Text nicht in Bilder einfügen. Wenn Ihre Hauptüberschrift einen Schattenwurf benötigt, verwenden Sie dafür [CSS](/de/docs/Web/CSS/text-shadow) anstelle von Text in ein Bild einzufügen. Wenn Sie dies _wirklich nicht vermeiden können_, sollten Sie den Text im `alt`-Attribut bereitstellen.

Im Wesentlichen besteht der Schlüssel darin, eine nutzbare Erfahrung zu bieten, selbst wenn die Bilder nicht gesehen werden können. Dies stellt sicher, dass alle Benutzer keinen der Inhalte verpassen. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und zu sehen, wie es aussieht. Sie werden schnell feststellen, wie hilfreich Alt-Text ist, wenn das Bild nicht angezeigt wird.

> [!NOTE]
> Weitere Informationen finden Sie in unserem Leitfaden zu [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).

### Breite und Höhe

Sie können die Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) verwenden, um die Breite und Höhe Ihres Bildes anzugeben. Sie werden als ganze Zahlen ohne Einheit angegeben und repräsentieren die Breite und Höhe des Bildes in Pixeln.

Sie können die Breite und Höhe Ihres Bildes auf verschiedene Arten herausfinden. Auf dem Mac können Sie beispielsweise <kbd>Befehl</kbd> + <kbd>I</kbd> verwenden, um die Anzeigeinformationen der Bilddatei zu erhalten. Wenn wir zu unserem Beispiel zurückkehren, könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="Der Kopf und der Torso eines Dinosaurierskeletts;
          es hat einen großen Kopf mit langen scharfen Zähnen"
  width="400"
  height="341" />
```

Dafür gibt es einen sehr guten Grund. Der HTML-Code für Ihre Seite und das Bild sind separate Ressourcen, die vom Browser als separate HTTP(S)-Anfragen abgerufen werden. Sobald der Browser den HTML-Code erhalten hat, wird er mit der Anzeige an den Benutzer beginnen. Wenn die Bilder noch nicht eingegangen sind (und das wird oft der Fall sein, da Bilddateien oft größer als HTML-Dateien sind), rendert der Browser nur das HTML und aktualisiert die Seite mit dem Bild, sobald es empfangen wurde.

Angenommen, wir haben etwas Text nach dem Bild:

```html
<h1>Bilder in HTML</h1>

<img
  src="dinosaur.jpg"
  alt="Der Kopf und der Torso eines Dinosaurierskeletts; es hat einen großen Kopf mit langen scharfen Zähnen"
  title="Ein T-Rex im Manchester University Museum" />
<blockquote>
  <p>
    Aber dort unten wäre es jetzt dunkel und nicht das schöne beleuchtete Aquarium, das sie es sich während der Tagesstunden vorstellte, das mit Schwärmen winziger, zarter Tiere wirbelt, die langsam zu ihren eigenen, ruhigen Strömungen tanzen und das Aussehen eines lebenden Gemäldes schaffen. Das war ohnehin falsch. Der Ozean war anders als ein Aquarium, das eine künstliche Umgebung war. Der Ozean war eine Welt. Und eine Welt ist keine Kunst. Dorothy dachte an die lebenden Dinge, die sich in dieser Welt bewegten: groß, rücksichtslos und hungrig. Wie wir hier oben.
  </p>
  <footer>- Rachel Ingalls, <cite>Mrs. Caliban</cite></footer>
</blockquote>
```

Sobald der Browser den HTML-Code heruntergeladen hat, wird er beginnen, die Seite anzuzeigen.

Sobald das Bild geladen ist, fügt der Browser das Bild der Seite hinzu. Da das Bild Platz einnimmt, muss der Browser den Text nach unten verschieben, um das Bild darüber zu platzieren:

![Vergleich des Seitenlayouts während des Ladens einer Seite im Browser und bei fertig geladenem Zustand, wenn keine Größe für das Bild angegeben ist.](no-size.png)

Den Text auf diese Weise zu verschieben, ist für die Benutzer extrem ablenkend, insbesondere wenn sie bereits mit dem Lesen begonnen haben.

Wenn Sie die tatsächliche Größe des Bildes in Ihrem HTML-Code angeben, indem Sie die Attribute `width` und `height` verwenden, weiß der Browser, wie viel Platz er vor dem Herunterladen des Bildes dafür lassen muss.

Das bedeutet, dass der Browser den umgebenden Inhalt nicht verschieben muss, wenn das Bild heruntergeladen wurde.

![Vergleich des Seitenlayouts während des Ladens einer Seite im Browser und bei fertig geladenem Zustand, wenn die Größe des Bildes angegeben ist.](size.png)

Für einen ausgezeichneten Artikel über die Geschichte dieser Funktion, siehe [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

> [!NOTE]
> Obwohl es, wie gesagt, eine gute Praxis ist, die _tatsächliche_ Größe Ihrer Bilder mit HTML-Attributen anzugeben, sollten Sie diese nicht verwenden, um Bilder _umzuschneidern_.
>
> Wenn Sie die Bildgröße zu groß einstellen, werden Sie mit Bildern enden, die körnig, unscharf oder zu klein aussehen und Bandbreite verschwenden, indem ein Bild heruntergeladen wird, das nicht den Bedürfnissen des Benutzers entspricht. Das Bild könnte auch verzerrt aussehen, wenn Sie das richtige {{glossary("Seitenverhältnis")}} nicht einhalten. Sie sollten einen Bildeditor verwenden, um Ihr Bild auf die richtige Größe einzustellen, bevor Sie es auf Ihre Webseite stellen.
>
> Wenn Sie die Größe eines Bildes ändern müssen, sollten Sie stattdessen [CSS](/de/docs/Learn/CSS) verwenden.

### Bildtitel

Wie [bei Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#adding_supporting_information_with_the_title_attribute) können Sie auch `title`-Attribute zu Bildern hinzufügen, um bei Bedarf weitere unterstützende Informationen bereitzustellen. In unserem Beispiel könnten wir dies tun:

```html
<img
  src="images/dinosaur.jpg"
  alt="Der Kopf und der Torso eines Dinosaurierskeletts;
          es hat einen großen Kopf mit langen scharfen Zähnen"
  width="400"
  height="341"
  title="Ein T-Rex im Manchester University Museum" />
```

Dies gibt uns ein Tooltip beim Überfahren mit der Maus, genau wie Linktitel:

![Das Dinosaurierbild mit einem Tooltip-Titel, der "Ein T-Rex im Manchester University Museum" sagt.](image-with-title.png)

Dies wird jedoch nicht empfohlen — das `title`-Attribut weist eine Reihe von Zugänglichkeitsproblemen auf, hauptsächlich basierend darauf, dass die Unterstützung durch Screenreader sehr unvorhersehbar ist und die meisten Browser es nicht anzeigen, es sei denn, man navigiert mit einer Maus (also z. B. kein Zugriff für Tastaturnutzer). Wenn Sie an weiteren Informationen darüber interessiert sind, lesen Sie [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) von Scott O'Hara.

Es ist besser, solche unterstützenden Informationen im Hauptartikeltext zu enthalten, anstatt sie dem Bild anzuhängen.

### Aktives Lernen: ein Bild einbetten

Jetzt sind Sie an der Reihe! Dieser Abschnitt mit aktivem Lernen wird Sie mit einer einfachen Einbettungsübung vertraut machen. Sie erhalten einen einfachen {{htmlelement("img")}}-Tag; wir möchten, dass Sie das Bild unter der folgenden URL einbetten:

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Vorhin haben wir gesagt, dass Sie niemals Bilder auf anderen Servern hotlinken sollten, aber dies ist nur zu Lernzwecken, also lassen wir es Ihnen dieses eine Mal durchgehen.

Wir möchten auch, dass Sie:

- Fügen Sie etwas Alt-Text hinzu und überprüfen Sie, ob er funktioniert, indem Sie die Bild-URL falsch schreiben.
- Setzen Sie die richtige `width` und `height` des Bildes (Hinweis: Es ist 200px breit und 171px hoch), und experimentieren Sie dann mit anderen Werten, um zu sehen, wie sich dies auswirkt.
- Setzen Sie einen `title` auf das Bild.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um eine Antwort zu sehen:

```html hidden
<h2>Live-Ergebnis</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Codebereich zu entfernen (Tab fügt ein Tabulatorzeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="Der Kopf und der Torso eines Dinosaurierskeletts; es hat einen großen Kopf mit langen scharfen Zähnen"\n width="200"\n height="171"\n title="Ein T-Rex im Manchester University Museum">';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Verhindert, dass die Tabulatortaste das Textfeld verlässt und
// fügt stattdessen ein Tabulatorzeichen an der Cursorposition ein

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

// Aktualisiert den gespeicherten Benutzercode jedes Mal, wenn der Benutzer den Textfeldcode aktualisiert

textarea.onkeyup = function () {
  // Wir möchten den Zustand nur speichern, wenn der Benutzercode angezeigt wird,
  // nicht die Lösung, sodass die Lösung nicht über den Benutzercode gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_embedding_an_image', 700, 350) }}

## Medienressourcen und Lizenzierung

Bilder (und andere Medientypen) im Web werden unter verschiedenen Lizenztypen veröffentlicht. Bevor Sie ein Bild auf einer Website verwenden, die Sie erstellen, stellen Sie sicher, dass Sie es besitzen, die Erlaubnis zur Nutzung haben oder die Lizenzbedingungen des Besitzers einhalten.

### Lizenztypen verstehen

Lassen Sie uns einige gängige Kategorien von Lizenzen betrachten, die Sie im Web wahrscheinlich finden werden.

#### Alle Rechte vorbehalten

Urheber originaler Werke wie Lieder, Bücher oder Software veröffentlichen ihre Werke oft unter geschlossenem Urheberrechtsschutz. Dies bedeutet, dass sie (oder ihr Verlag) standardmäßig die exklusiven Rechte zur Nutzung (beispielsweise zur Anzeige oder Verbreitung) ihrer Werke haben. Wenn Sie urheberrechtlich geschützte Bilder mit einer _alle Rechte vorbehalten_-Lizenz verwenden möchten, müssen Sie eine der folgenden Maßnahmen ergreifen:

- Erhalten Sie eine ausdrückliche, schriftliche Erlaubnis des Urheberrechtsinhabers.
- Zahlen Sie eine Lizenzgebühr, um sie zu verwenden. Dies kann eine einmalige Gebühr für unbegrenzte Nutzung sein ("lizenzfrei") oder es kann "rechteverwaltet" sein, in welchem Fall Sie spezifische Gebühren pro Nutzung für Zeitschlitze, geografische Regionen, Branchen oder Medientypen, etc. zahlen müssen.
- Beschränken Sie Ihre Nutzungen auf solche, die in Ihrer Rechtsprechung als [Fair Use](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/) oder [Fair Dealing](https://copyrightservice.co.uk/copyright/p27_work_of_others) angesehen werden.

Autoren sind nicht verpflichtet, einen Urheberrechtsvermerk oder Lizenzbedingungen mit ihren Werken zu veröffentlichen. Urheberrecht besteht automatisch an einem Originalwerk der Autorschaft, sobald es in einem greifbaren Medium erstellt wird. Wenn Sie also ein Bild online finden und es gibt keine Urheberrechtsvermerke oder Lizenzbedingungen, ist der sicherste Weg, anzunehmen, dass es durch Urheberrecht mit allen Rechten vorbehalten geschützt ist.

#### Erlaubnisfrei

Wenn das Bild unter einer erlaubnisfreien Lizenz veröffentlicht wird, wie [MIT](https://mit-license.org/), [BSD](https://opensource.org/license/BSD-3-clause) oder einer geeigneten [Creative Commons (CC)-Lizenz](https://chooser-beta.creativecommons.org/), müssen Sie keine Lizenzgebühr zahlen oder die Erlaubnis zur Verwendung einholen. Dennoch gibt es verschiedene Lizenzbedingungen, die Sie erfüllen müssen, und die je nach Lizenz variieren.

Beispielsweise könnten Sie verpflichtet sein,:

- Einen Link zur Originalquelle des Bildes bereitzustellen und seinen Ersteller zu würdigen.
- Anzugeben, ob Änderungen daran vorgenommen wurden.
- Alle mit dem Bild erstellten Derivatwerke unter der gleichen Lizenz wie das Original freizugeben.
- Überhaupt keine Derivatwerke zu teilen.
- Das Bild in keinem kommerziellen Werk zu verwenden.
- Eine Kopie der Lizenz zusammen mit jeder Veröffentlichung, die das Bild verwendet, beizufügen.

Sie sollten die geltende Lizenz für die spezifischen Bedingungen, die Sie einhalten müssen, einsehen.

> [!NOTE]
> Sie stoßen möglicherweise auf den Begriff "Copyleft" im Kontext von erlaubnisfreien Lizenzen. Copyleft-Lizenzen (wie die [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html) oder "Share Alike" Creative Commons Lizenzen) besagen, dass Derivatwerke unter der gleichen Lizenz wie das Original veröffentlicht werden müssen.

Copyleft-Lizenzen sind in der Softwarewelt prominent. Die Grundidee ist, dass ein neues Projekt, das mit dem Code eines copyleft-lizenzierten Projekts erstellt wurde (dies wird als "Fork" der Originalsoftware bezeichnet), auch unter der gleichen Copyleft-Lizenz lizenziert werden muss. Dies stellt sicher, dass der Quellcode des neuen Projekts auch anderen zur Studie und Modifizierung zur Verfügung gestellt wird. Beachten Sie, dass Lizenzen, die ursprünglich für Software erstellt wurden, wie die GPL, im Allgemeinen nicht als gute Lizenzen für nicht-softwarebezogene Werke betrachtet werden, da sie nicht mit Blick auf nicht-softwarebezogene Werke entworfen wurden.

Erforschen Sie die oben in diesem Abschnitt bereitgestellten Links, um mehr über die verschiedenen Lizenztypen und die Art der Bedingungen, die sie spezifizieren, zu erfahren.

#### Public Domain/CC0

In die Public Domain freigegebene Arbeiten werden manchmal als "keine Rechte vorbehalten" bezeichnet – es gilt kein Urheberrecht, und sie können ohne Erlaubnis und ohne Erfüllung von Lizenzbedingungen verwendet werden. Arbeiten können auf verschiedene Arten in die Public Domain gelangen, zum Beispiel durch Ablauf des Urheberrechts oder spezifisches Verzicht auf Rechte.

Eine der effektivsten Methoden, Arbeiten in die Public Domain zu überführen, besteht darin, sie unter [CC0](https://creativecommons.org/public-domain/cc0/), einer spezifischen Creative Commons-Lizenz, zu lizenzieren, die ein klares und eindeutiges legales Werkzeug zu diesem Zweck bietet.

Wenn Sie Public-Domain-Bilder verwenden, erhalten Sie den Nachweis, dass das Bild in der Public Domain ist, und bewahren Sie den Nachweis für Ihre Unterlagen auf. Machen Sie beispielsweise einen Screenshot der Originalquelle mit dem klar angezeigten Lizenzstatus und erstellen Sie eine Seite auf Ihrer Website mit einer Liste der erworbenen Bilder zusammen mit ihren Lizenzanforderungen.

### Suche nach erlaubnisfreien Bildern

Sie können erlaubnisfreie Bilder für Ihre Projekte mithilfe einer Bildsuchmaschine oder direkt aus Bildarchiven finden.

Suchen Sie nach Bildern, indem Sie eine Beschreibung des gesuchten Bildes zusammen mit relevanten Lizenzierungskonditionen verwenden. Wenn Sie beispielsweise nach "gelbe Dinosaurier" suchen, fügen Sie "Public Domain Bilder", "Public Domain Bildbibliothek", "offen lizenzierte Bilder" oder ähnliche Begriffe zur Suchanfrage hinzu.

Einige Suchmaschinen verfügen über Tools, die Ihnen helfen, speziell nach Bildern mit erlaubnisfreien Lizenzen zu suchen. Wenn Sie beispielsweise Google verwenden, gehen Sie auf die Registerkarte "Bilder", um nach Bildern zu suchen, und klicken Sie dann auf "Tools". Dort gibt es ein Dropdown-Menü "Nutzungsrechte" in der resultierenden Werkzeugleiste, in dem Sie speziell nach Bildern unter Creative Commons-Lizenzen suchen können.

Bildarchivseiten wie [Flickr](https://flickr.com/), [ShutterStock](https://www.shutterstock.com/) und [Pixabay](https://pixabay.com/) bieten Suchoptionen, die es Ihnen ermöglichen, nur nach erlaubnisfreien Bildern zu suchen. Einige Seiten vertreiben ausschließlich erlaubnisfreie Bilder und Icons, wie [Picryl](https://picryl.com/) und [The Noun Project](https://thenounproject.com/).

Die Einhaltung der Lizenz, unter der das Bild veröffentlicht wurde, besteht darin, die Lizenzdetails zu finden, die Lizenz oder die von der Quelle bereitgestellten Anweisungen zu lesen und diese Anweisungen zu befolgen. Seriöse Bildarchive machen ihre Lizenzbedingungen klar und leicht zu finden.

## Bilder mit Figuren und Bildunterschriften versehen

Sprechen wir über Bildunterschriften, gibt es eine Reihe von Möglichkeiten, wie Sie eine Bildunterschrift zu Ihrem Bild hinzufügen könnten. Zum Beispiel würde Sie nichts davon abhalten, dies zu tun:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="Der Kopf und der Torso eines Dinosaurierskeletts;
            es hat einen großen Kopf mit langen scharfen Zähnen"
    width="400"
    height="341" />

  <p>Ein T-Rex im Manchester University Museum.</p>
</div>
```

Das ist in Ordnung. Es enthält den Inhalt, den Sie benötigen, und ist gut mit CSS stilisierbar. Aber hier gibt es ein Problem: Es gibt nichts, was das Bild semantisch mit seiner Bildunterschrift verknüpft, was bei Screenreadern Probleme verursachen kann. Zum Beispiel, wenn Sie 50 Bilder und Bildunterschriften haben, welche Bildunterschrift gehört zu welchem Bild?

Eine bessere Lösung ist es, die HTML-Elemente {{htmlelement("figure")}} und {{htmlelement("figcaption")}} zu verwenden. Diese wurden genau für diesen Zweck erstellt: um einen semantischen Container für Figuren bereitzustellen und die Figur eindeutig mit der Bildunterschrift zu verknüpfen. Unser obiges Beispiel könnte so umgeschrieben werden:

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="Der Kopf und der Torso eines Dinosaurierskeletts;
            es hat einen großen Kopf mit langen scharfen Zähnen"
    width="400"
    height="341" />

  <figcaption>
    Ein T-Rex im Manchester University Museum.
  </figcaption>
</figure>
```

Das {{htmlelement("figcaption")}}-Element informiert Browser und unterstützende Technologie darüber, dass die Bildunterschrift den anderen Inhalt des {{htmlelement("figure")}}-Elements beschreibt.

> [!NOTE]
> Aus einer Zugänglichkeitsperspektive haben Bildunterschriften und [`alt`](/de/docs/Web/HTML/Element/img#alt)-Texte unterschiedliche Rollen. Bildunterschriften sind nützlich selbst für Personen, die das Bild sehen können, während [`alt`](/de/docs/Web/HTML/Element/img#alt)-Texte die gleiche Funktionalität wie ein abwesendes Bild bieten. Daher sollten Bildunterschriften und `alt`-Texte nicht einfach dasselbe aussagen, weil sie beide erscheinen, wenn das Bild fehlt. Versuchen Sie, Bilder in Ihrem Browser auszuschalten und zu sehen, wie es aussieht.

Eine Figur muss kein Bild sein. Sie ist eine unabhängige Einheit von Inhalten, die:

- Ihren Sinn in einer kompakten, leicht verständlichen Weise ausdrückt.
- An mehreren Stellen im linearen Fluss der Seite platziert werden könnte.
- Wichtige Informationen zur Unterstützung des Haupttextes liefert.

Eine Figur könnte aus mehreren Bildern, einem Code-Schnipsel, Audio, Video, Gleichungen, einer Tabelle oder etwas anderem bestehen.

### Aktives Lernen: eine Figur erstellen

In diesem aktiven Lernabschnitt möchten wir, dass Sie den fertigen Code aus dem vorherigen aktiven Lernabschnitt nehmen und in eine Figur verwandeln:

1. Umwickeln Sie ihn mit einem {{htmlelement("figure")}}-Element.
2. Kopieren Sie den Text aus dem `title`-Attribut, entfernen Sie das `title`-Attribut und platzieren Sie den Text in einem {{htmlelement("figcaption")}}-Element unter dem Bild.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um eine Antwort zu sehen:

```html hidden
<h2>Live-Ergebnis</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Codebereich zu entfernen (Tab fügt ein Tabulatorzeichen ein).
</p>

<textarea
  id="code"
  class="input"
  style="min-height: 100px; width: 95%"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="Der Kopf und der Torso eines Dinosaurierskeletts; es hat einen großen Kopf mit langen scharfen Zähnen"\n width="200"\n height="171">\n <figcaption>Ein T-Rex im Manchester University Museum</figcaption>\n</figure>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Verhindert, dass die Tabulatortaste das Textfeld verlässt und
// fügt stattdessen ein Tabulatorzeichen an der Cursorposition ein

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

// Aktualisiert den gespeicherten Benutzercode jedes Mal, wenn der Benutzer den Textfeldcode aktualisiert

textarea.onkeyup = () => {
  // Wir möchten den Zustand nur speichern, wenn der Benutzercode angezeigt wird,
  // nicht die Lösung, sodass die Lösung nicht über den Benutzercode gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_creating_a_figure', 700, 350) }}

## CSS-Hintergrundbilder

Sie können auch CSS verwenden, um Bilder in Webseiten einzubetten (und JavaScript, aber das ist eine ganz andere Geschichte). Die CSS-Eigenschaft {{cssxref("background-image")}} und die anderen `background-*`-Eigenschaften werden verwendet, um die Platzierung von Hintergrundbildern zu steuern. Um beispielsweise ein Hintergrundbild auf jedem Absatz einer Seite zu platzieren, könnten Sie dies tun:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Das resultierende eingebettete Bild lässt sich möglicherweise einfacher positionieren und kontrollieren als HTML-Bilder. Warum sich dann mit HTML-Bildern herumschlagen? Wie oben angedeutet, sind CSS-Hintergrundbilder nur zur Dekoration. Wenn Sie einfach etwas Schönes zu Ihrer Seite hinzufügen möchten, um die Optik zu verbessern, ist das in Ordnung. Solche Bilder haben jedoch keinerlei semantische Bedeutung. Sie können keine textequivalenten Informationen haben, sind für Screenreader unsichtbar usw. Hier glänzen HTML-Bilder!

Zusammengefasst: Wenn ein Bild im Hinblick auf Ihren Inhalt bedeutungsvoll ist, sollten Sie ein HTML-Bild verwenden. Wenn ein Bild nur zur Dekoration dient, sollten Sie CSS-Hintergrundbilder verwenden.

> [!NOTE]
> Sie werden viel mehr über [CSS-Hintergrundbilder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) in unserem [CSS](/de/docs/Learn/CSS)-Thema lernen.

## Andere Grafiken im Web

Wir haben gesehen, dass statische Bilder mit dem {{HTMLElement("img")}}-Element angezeigt werden können oder indem die Hintergrundbilder von HTML-Elementen mit der Eigenschaft {{cssxref("background-image")}} gesetzt werden. Sie können auch Grafiken dynamisch konstruieren oder Bilder nachträglich manipulieren. Der Browser bietet Möglichkeiten, 2D- und 3D-Grafiken mit Code zu erstellen sowie übertragene Video- und Audiodateien aus hochgeladenen Dateien oder live von der Kamera eines Benutzers zu streamen. Hier sind Links zu Artikeln, die Einblicke in diese fortgeschritteneren Grafikthemen bieten:

- [Canvas](/de/docs/Web/API/Canvas_API)
  - : Das {{HTMLElement("canvas")}}-Element bietet APIs, um 2D-Grafiken mithilfe von JavaScript zu zeichnen.
- [SVG](/de/docs/Web/SVG)
  - : Scalable Vector Graphics (SVG) ermöglichen die Verwendung von Linien, Kurven und anderen geometrischen Formen zur Darstellung von 2D-Grafiken. Mit Vektoren können Sie Bilder erstellen, die in jeder Größe sauber skalieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Das WebGL-API-Einführungshandbuch bringt Sie mit WebGL, dem 3D-Grafik-API für das Web, das Ihnen die Verwendung von Standard-OpenGL ES in Webinhalten ermöglicht, auf den neuesten Stand.
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Genau wie `<img>` können Sie HTML verwenden, um {{htmlelement("video")}} und {{htmlelement("audio")}} in eine Webseite einzubetten und ihre Wiedergabe zu steuern.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Das RTC in WebRTC steht für Real-Time Communications, eine Technologie, die Audio-/Video-Streaming und Datenfreigabe zwischen Browser-Clients (Peers) ermöglicht.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – sehen Sie sich [Testen Sie Ihr Wissen: HTML-Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images) an.

## Zusammenfassung

Das war's für jetzt. Wir haben Bilder und Bildunterschriften im Detail behandelt. Im nächsten Artikel werden wir einen Gang höher schalten und uns ansehen, wie man HTML verwendet, um [Video- und Audio-Inhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) in Webseiten einzubetten.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
