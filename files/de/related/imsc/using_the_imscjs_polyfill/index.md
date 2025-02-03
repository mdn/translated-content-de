---
title: Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und nahezu vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und in Ihre eigene Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden werden wir zunächst ein Beispiel für die Nutzung von imscJS durchgehen, bevor wir uns ein komplexeres Beispiel ansehen, das tatsächlich Untertitel über ein Video zu geeigneten Zeiten rendert. Den Quellcode des [ersten Beispiels finden Sie auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbetten von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js">
```

Sobald die imscJS-Bibliothek geladen ist, kann sie verwendet werden, um ein IMSC-Dokument in drei verschiedenen Schritten darzustellen, die in den folgenden Abschnitten erläutert werden.

## Parsen des IMSC-Dokuments

Zunächst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc` in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal für jedes IMSC-Dokument durchgeführt werden. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitverschiebungen (in Sekunden) zurückgibt, die angeben, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erzeugen eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mit `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, aber normalerweise ist er es. Im obigen Beispiel wird der Snapshot zum zweiten Zeitpunkt erstellt, zu dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Offset einen Snapshot erstellen und dessen Präsentation zu dem angegebenen Offset planen.

## Rendern eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot in ein HTML-{{htmlelement("div")}} mit `imsc.renderHTML()` gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Erstellen eines IMSC-Players

Betrachten wir ein erweitertes Beispiel und zeigen Ihnen, wie Sie Untertitel mit imscJS auf einem eingebetteten HTML-Video rendern können. Als Beispiel verwenden wir das unten stehende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie können die [HTML-Markierung](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples) finden.

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markierung mit Inline-CSS gerendert. Er stellt die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitleiste des zugehörigen Medienelements dar. Wie wir im Abschnitt [Rendern eines IMSC-Snapshots](#rendern_eines_imsc-snapshots) oben gesehen haben, wird die Markierung in ein `<div>`-Element mithilfe der Methode `renderHtml()` eingefügt. Wir können dieses `<div>`-Element als Container für das aus dem IMSC-Code generierte HTML betrachten. Später übergeben wir das entsprechende DOM-Element als Parameter an die Methode `renderHtml()`.

Der Einfachheit halber weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Texttracks verknüpft sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel angezeigt oder ausgeblendet werden soll. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben, aber wir könnten auch einen Texttrack "on the fly" erstellen und ihn dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist momentan nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei zeigt. Wenn dies nicht der Fall ist, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit erledigen, um die Datei abzurufen und sie in einen JavaScript-String zu lesen. Im Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Texttrack-Modus

Es gibt eine weitere Nebenwirkung. Da die Browser keine gültige WebVTT-Datei vom `src`-Attribut erhalten, deaktivieren sie den Track. Die `mode`-Eigenschaft des Texttracks wird auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus wirft ein Cue keine Ereignisse zu den Start- und Endzeiten. Da wir diese Ereignisse zum Rendern der IMSC-Untertitel benötigen, ändern wir den Modus des Texttracks in `hidden`. In diesem Modus wirft der Browser die Ereignisse der Cues, rendert jedoch nicht den Wert der Texteigenschaft des Cues.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns darauf konzentrieren, das Rendern der IMSC-Untertitel zu implementieren.

## Erzeugen von "Untertitel-Zuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots generieren müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum es notwendig ist.

Wie wir beim [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, ist der erste Schritt das Parsen des IMSC-Dokuments in ein imscJS-Objekt.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues verwenden, um die IMSC-Untertitel zu rendern. Jeder Cue hat Eigenschaften, die seine Start- und Endzeit repräsentieren. Die Browser-Engine feuert Ereignisse ab, wann immer die Zeitleiste der Medien die Start- und Endzeit eines Cue erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das von imscJS generierte HTML zu rendern und bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Cues ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt zur Cue-Schnittstelle mit ihren `start`- und `end`-Eigenschaften passen.

Aber nehmen Sie den folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies bei der Live-Untertitelung üblich.

Folgendes passiert:

- In Sekunde 0 gibt es keinen Untertitel.
- In Sekunde 1 muss der Text "Hello" erscheinen.
- In Sekunde 2 muss der Text "Hello" weiterhin "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Cues: einen, der den Text "Hello" von Sekunde 1-2 darstellt, und den anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber das ist ein vereinfachtes, einfaches Szenario. Stellen Sie sich vor, Sie haben 5 weitere Wörter, die sich ansammeln. Sie könnten alle die gleiche Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z.B. für einen anderen Sprecher). Dieser Untertitel wird parallel zu dem anderen Untertitel angezeigt, aber die sich ansammelnden Wörter könnten unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS recht einfach abzudecken, weil IMSC einen Mechanismus für stateless Untertitel-Darstellung hat.

Schauen wir uns genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir IMSC-Untertitel als eine Darstellungsebene betrachten, die über das Video gelegt wird. An jedem Punkt in der Medienzeitleiste hat die Darstellungsebene einen spezifischen Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "Intermediate Synchronous Document Format", das darstellt, was schließlich in dieser Ebene gerendert wird. Jedes Mal, wenn die Darstellung geändert werden muss, wird eine neue Darstellung erstellt. Was erstellt wird, wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD hat keine Abhängigkeiten von den ISDs davor oder danach. Es ist völlig zustandslos und enthält alle Informationen, die benötigt werden, um den Untertitel zu rendern.

Wie können wir die Zeiten ermitteln, zu denen sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz im Abschnitt [Erzeugen eines IMSC-Snapshots](#erzeugen_eines_imsc-snapshots) erklärt. Für das ISD bei Sekunde 2 müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Texttrack-Cues

Mit zwei Methoden können wir jetzt alle erforderlichen Zustände der IMSC-Darstellungsebene generieren. Wir tun dies wie folgt:

- Iterieren Sie über das Array, das wir von `getMediaEvents()` zurückbekommen
- Für jedes Zeitereignis:

  - Erstellen Sie einen entsprechenden Cue.
  - Verwenden Sie ein `onenter`-Ereignis, um das ISD zu rendern.
  - Verwenden Sie ein `onexit`-Ereignis, um die Darstellungsschicht wieder zu entfernen.

```js
for (let i = 0; i < timeEvents.length; i++) {
  const Cue = window.VTTCue || window.TextTrackCue;

  let myCue;
  if (i < timeEvents.length - 1) {
    myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
  } else {
    myCue = new Cue(timeEvents[i], myVideo.duration, "");
  }

  myCue.onenter = function () {
    clearSubFromScreen();
    const myIsd = imsc.generateISD(imscDoc, this.startTime);
    imsc.renderHTML(myIsd, renderDiv);
  };
  myCue.onexit = function () {
    clearSubFromScreen();
  };

  myTrack.addCue(myCue);
}
```

Schauen wir uns das im Detail an.

Während wir die `timeEvents` durchlaufen, können wir den Wert des Zeitereignisses als Startzeit des Cues nehmen. Wir können dann den Wert des nächsten Zeitereignisses für die Endzeit des Cues verwenden, da dies anzeigt, dass sich die Darstellungsschicht ändern muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Texttrack-Cues derzeit nur für das WebVTT-Format implementiert. In der Regel erstellen Sie also einen Cue mit allen WebVTT-Eigenschaften einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig zu bedenken, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es gibt kein "nächstes" Zeitereignis, aus dem wir die Endzeit entnehmen können.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Darstellungsschicht bis zum Ende der Wiedergabezeit des Mediums aktiv ist. Wir können also die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruieren, können wir die Funktion registrieren, die beim Betreten des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir generieren das ISD, das dem Cue zugewiesen ist, und verwenden dann die imscJS-Methode `renderHTML()`, um das entsprechende HTML im "Rendering-Container" zu rendern.

Um sicherzustellen, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir zuerst die Untertitelschicht, falls eine vorhanden ist. Dafür definieren wir eine Funktion, die wir später beim Beenden des Cues erneut verwenden können:

```js
function clearSubFromScreen() {
  const subtitleActive = renderDiv.getElementsByTagName("div")[0];
  if (subtitleActive) {
    renderDiv.removeChild(subtitleActive);
  }
}
```

Diese Funktion rufen wir erneut auf, wenn das `onexit`-Ereignis des Cues ausgelöst wird:

```js
myCue.onexit = function () {
  clearSubFromScreen();
};
```

Am Ende müssen wir nur noch den generierten Cue zum Texttrack hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung nativer Videoplayer-Steuerelemente

Normalerweise möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Mindestens sollten sie in der Lage sein, das Video zu starten, anzuhalten und zu steuern. Der einfachste Weg wäre, die nativen Videosteuerungen des Webbrowsers zu verwenden, oder? Ja, das ist richtig, wenn Sie keine zusätzlichen Funktionen wünschen.

Nativer Videoplayer-Steuerelemente sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige ihrer eigenen Ereignisse generieren, haben Sie als Webentwickler keinen direkten Zugriff darauf.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Das IMSC-HTML-Overlay deckt das gesamte Video ab. Es befindet sich über dem `<video>`-Element. Obwohl Sie die Player-Steuerelemente sehen können (da der Großteil des Overlays einen transparenten Hintergrund hat), werden Pointer-Ereignisse wie Mausklicks nicht an die Steuerelemente weitergeleitet. Weil sie nicht über Standard-CSS angesprochen werden können, können Sie den z-index der Steuerelemente auch nicht ändern, um das Problem zu lösen. Wenn Sie also immer ein Untertitel-Overlay haben, können Sie das Video nicht stoppen, wenn es einmal gestartet wurde. Das wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videoplayer-Steuerelemente eine Benutzeroberfläche für Untertitel. Sie können einen Texttrack auswählen oder das Rendern von Untertiteln ausschalten. Leider steuert die Untertiteloberfläche nur das Rendering von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, sodass diese Steuerelemente keine Wirkung haben.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (sehen Sie sich den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS an).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigereignisse "durch" das Overlay gehen (siehe [Referenzdokumentation für Pointer-Ereignisse](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertitel-Benutzeroberfläche ist etwas schwieriger zu lösen. Obwohl wir Ereignisse abhören können, wird das Aktivieren eines Tracks mit der Untertitel-Benutzeroberfläche auch das Rendering der entsprechenden WebVTT-Untertitel aktivieren. Da wir VTTCues für das IMSC-Rendering verwenden, kann dies zu unerwünschtem Präsentationsverhalten führen. Die Texteigenschaft des VTTCue hat immer den leeren Zeichenfolgenwert, aber in einigen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung besteht darin, Ihre eigenen benutzerdefinierten Steuerelemente zu erstellen. Erfahren Sie, wie Sie dies in unserem [Tutorial zur Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) tun können.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Video-Zeitcodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
