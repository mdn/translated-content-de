---
title: Verwendung des imscJS Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und nahezu die gesamte Bandbreite der IMSC-Funktionen abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und es in Ihre eigene Website integrieren können.

## Einführung von imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden gehen wir zunächst Schritt für Schritt durch ein einfaches Beispiel zur Verwendung von imscJS und betrachten dann ein komplexeres Beispiel, das tatsächlich Untertitel zu geeigneten Zeiten über Videos rendert. Den Quellcode des [ersten Beispiels finden Sie auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbettung von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js">
```

Sobald die imscJS-Bibliothek geladen ist, kann sie in drei verschiedenen Schritten verwendet werden, um ein IMSC-Dokument darzustellen, die in den untenstehenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zuerst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc` in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss für jedes IMSC-Dokument nur einmal erfolgen. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitversätzen (in Sekunden) zurückgibt, das angibt, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erstellen eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mithilfe von `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, ist es aber in der Regel. Im obigen Beispiel wird der Snapshot zum zweiten Zeitpunkt, an dem sich das IMSC-Dokument ändert (`t[1]`), erstellt. In einem typischen Szenario würde eine Anwendung vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Versatz einen Snapshot erstellen und dessen Präsentation zu dem angegebenen Versatz planen.

## Rendering eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot in ein HTML-{{htmlelement("div")}} gerendert, indem `imsc.renderHTML()` verwendet wird:

```js
const vdiv = document.getElementById("render-div");
imsc.renderHTML(isd, vdiv);
```

## Ein IMSC-Player erstellen

Lassen Sie uns ein ausführlicheres Beispiel betrachten und zeigen, wie Sie mit imscJS Untertitel auf einem eingebetteten HTML-Video rendern können. Als Beispiel verwenden wir das folgende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie finden das [HTML-Markup](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples).

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit inline CSS gerendert. Es stellt die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitachse des zugehörigen Medienelements dar. Wie wir im Abschnitt [Rendering eines IMSC-Snapshots](#rendering_eines_imsc-snapshots) gesehen haben, wird das Markup in ein `<div>`-Element eingefügt, indem die Methode `renderHtml()` verwendet wird. Wir können dieses `<div>`-Element als Container für das HTML betrachten, das aus IMSC-Code generiert wurde. Später übergeben wir das entsprechende DOM-Element als Parameter an die Methode `renderHtml()`.

Zur Vereinfachung weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Textspuren verknüpft sind, um Ereignisse auszulösen, wenn ein IMSC-Untertitel erscheinen oder verschwinden soll. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben, aber wir könnten auch eine Textspur dynamisch erstellen und sie dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist derzeit nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei zeigt. Wenn nicht, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit machen, um die Datei abzurufen und in eine JavaScript-Zeichenfolge zu lesen. Im Beispiel verwenden wir die {{domxref("Window/fetch", "fetch()")}}-API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Festlegen des Textspur-Modus

Es gibt noch einen Nebeneffekt. Da Browser keine gültige WebVTT-Datei von dem `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur wird auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus löst ein Cue keine Ereignisse zu seinen Start- und Endzeiten aus. Da wir diese Ereignisse zum Rendern der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur zu `hidden`. In diesem Modus löst der Browser die Ereignisse der Cues aus, rendert jedoch nicht den Wert der Cue-Text-Eigenschaft.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung der IMSC-Untertitel-Renderung konzentrieren.

## Generierung von "Untertitelzuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots generieren müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsing des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, besteht der erste Schritt darin, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues verwenden, um die IMSC-Untertitel zu rendern. Jeder Cue verfügt über Eigenschaften, die seine Startzeit und Endzeit darstellen. Die Browser-Engine löst Ereignisse aus, wenn die Zeitachse des Mediums die Start- und Endzeit eines Cues trifft. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das aus imscJS generierte HTML zu rendern und es bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Cues ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt auf das Cue-Interface mit ihren `start`- und `end`-Eigenschaften abbilden.

Aber nehmen wir folgendes IMSC-Code-Beispiel:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel betrachtet werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies bei Live-Untertitelungen gängige Praxis.

Folgendes passiert:

- In Sekunde 0 gibt es keinen Untertitel.
- In Sekunde 1 muss der Text "Hello" erscheinen.
- In Sekunde 2 muss der Text "Hello" weiterhin "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Cues: einen, der den Text "Hello" von Sekunde 1-2 darstellt, und den anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber dies ist ein vereinfachtes einfaches Szenario. Stellen Sie sich vor, dass weitere 5 Wörter akkumulierend hinzugefügt werden. Sie können alle die gleiche Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z. B. einen anderen Sprecher darstellend). Dieser Untertitel wird parallel zu dem anderen Untertitel angezeigt, aber die akkumulierten Wörter können unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS relativ leicht abzudecken, da IMSC einen Mechanismus des zustandslosen Untertitel-Renderings hat.

Lassen Sie uns genauer betrachten, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir uns die IMSC-Untertitel als eine Rendering-Schicht vorstellen, die über das Video gelegt wird. An jedem Punkt auf der Medien-Zeitachse hat die Rendering-Schicht einen spezifischen Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "Intermediate Synchronous Document Format", das darstellt, was letztendlich in dieser Schicht gerendert wird. Jedes Mal, wenn sich das Rendering ändern muss, wird eine neue Darstellung erstellt. Dieses wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD ist komplett zustandslos und enthält alle Informationen, die zum Rendern des Untertitels benötigt werden.

Wie können wir die Zeiten erhalten, zu denen sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsing des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz in [Erstellen eines IMSC-Snapshots](#erstellen_eines_imsc-snapshots) erklärt. Für das ISD in Sekunde 2 müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellung von Textspur-Cues

Mit zwei Methoden können wir nun alle erforderlichen Zustände der IMSC-Rendering-Schicht generieren. Wir tun dies wie folgt:

- Iterieren über das Array, das wir von `getMediaEvents()` zurückerhalten
- Für jedes Zeitereignis:

  - Erstellen eines entsprechenden Cues.
  - Verwenden eines `onenter`-Ereignisses, um das ISD zu rendern.
  - Verwenden eines `onexit`-Ereignisses, um die Rendering-Schicht wieder zu entfernen.

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

Schauen wir es uns im Detail an.

Während wir durch die `timeEvents` iterieren, können wir den Wert des Zeitereignisses als Startzeit des Cues nehmen. Wir können dann den Wert des nächsten Zeitereignisses für die Endzeit des Cues verwenden, da dies angibt, dass sich die Rendering-Schicht ändern muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Cues derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie einen Cue mit allen WebVTT-Eigenschaften, einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig zu beachten, dass sie trotzdem vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollen wir die Endzeit des letzten Zeitereignisses berechnen? Es hat kein "nächstes" Zeitereignis, aus dem wir die Endzeit ableiten können.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Rendering-Schicht bis zum Ende der Abspielzeit des Mediums aktiv ist. Wir können also die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt erstellt haben, können wir die Funktion registrieren, die "beim Eintritt" des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir generieren das ISD, das mit dem Cue verknüpft ist, und verwenden dann die imscJS-Methode `renderHTML()`, um das entsprechende HTML im "Rendering-Container" zu rendern.

Um sicherzustellen, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir zuerst die Untertitelschicht, falls eine vorhanden ist. Dazu definieren wir eine Funktion, die wir später verwenden können, wenn das Cue endet:

```js
function clearSubFromScreen() {
  const subtitleActive = renderDiv.getElementsByTagName("div")[0];
  if (subtitleActive) {
    renderDiv.removeChild(subtitleActive);
  }
}
```

Wir rufen diese Funktion erneut auf, sobald das `onexit`-Ereignis des Cues ausgelöst wird:

```js
myCue.onexit = function () {
  clearSubFromScreen();
};
```

Am Ende müssen wir nur noch den generierten Cue zur Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung nativer Videoplayer-Steuerungen

In der Regel möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Zumindest sollten sie in der Lage sein, das Video abzuspielen, zu pausieren und zu suchen. Die einfachste Methode wäre, die nativen Videosteuerungen des Webbrowsers zu verwenden, oder? Ja, das stimmt, wenn Sie keine zusätzlichen Funktionen benötigen.

Native Videoplayer-Steuerungen sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige ihrer eigenen erzeugen, haben Sie als Webentwickler keinen direkten Zugriff auf sie.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Die IMSC-HTML-Überlagerung deckt das gesamte Video ab. Sie sitzt über dem `<video>`-Element. Obwohl Sie die Player-Steuerungen sehen können (weil der größte Teil der Überlagerung einen transparenten Hintergrund hat), werden Mausklicks wie Mausereignisse nicht zu den Steuerungen weitergeleitet. Da sie nicht mit Standard-CSS zugänglich sind, können Sie auch nicht den z-Index der Steuerungen ändern, um dieses Problem zu lösen. Wenn Sie immer eine Untertitelüberlagerung haben, werden Sie nicht in der Lage sein, das Video anzuhalten, sobald es gestartet wurde. Dies würde eine sehr schlechte Benutzererfahrung darstellen.
2. Normalerweise haben die nativen Videoplayer-Steuerungen eine Oberfläche für Untertitel. Sie können eine Textspur auswählen oder festlegen, dass keine Untertitel gerendert werden. Leider steuert die Untertiteloberfläche nur das Rendering von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, sodass diese Steuerelemente keine Auswirkungen haben werden.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das komplette CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigerereignisse "durch" die Überlagerung gehen (siehe [Referenzdokumentation für Zeigerereignisse](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertiteloberfläche ist etwas schwerer zu lösen. Obwohl wir auf Ereignisse hören können, wird durch die Aktivierung einer Spur über die Untertiteloberfläche auch das Rendering der entsprechenden WebVTT ausgelöst. Da wir VTTCues für das IMSC-Rendering verwenden, kann dies unerwünschtes Präsentationsverhalten verursachen. Die Texteigenschaft des VTTCue hat immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zur Anzeige von Artefakten führen.

Die beste Lösung besteht darin, Ihre eigenen benutzerdefinierten Steuerelemente zu erstellen. Erfahren Sie, wie das geht, in unserem Tutorial [Erstellung eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Anleitungen</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">IMSC-Dokumente stylen</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Videozeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
