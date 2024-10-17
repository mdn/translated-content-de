---
title: Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

Derzeit benötigen Sie einen Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast die vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und in Ihre eigene Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden gehen wir zunächst durch ein einfaches Beispiel, wie man imscJS verwendet, und sehen uns dann ein komplexeres Beispiel an, das tatsächlich Untertitel zur passenden Zeit über ein Video rendert. Den Quellcode des [ersten Beispiels auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html) finden Sie hier.

## Einbetten von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js">
```

Sobald die imscJS-Bibliothek geladen ist, kann sie verwendet werden, um ein IMSC-Dokument in drei verschiedenen Schritten darzustellen, die in den folgenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zuerst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc`, in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal für jedes IMSC-Dokument durchgeführt werden. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitoffsets (in Sekunden) zurückgibt, welche anzeigen, wo sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erzeugen eines IMSC-Schnappschusses

Im zweiten Schritt wird ein Schnappschuss des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mit `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, ist es aber in der Regel. Im obigen Beispiel wird der Schnappschuss zu dem zweiten Zeitpunkt erstellt, zu dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario erstellt eine Anwendung vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Offset einen Schnappschuss und plant dessen Präsentation zum angegebenen Offset.

## Rendering eines IMSC-Schnappschusses

Im dritten und letzten Schritt wird ein Schnappschuss in ein HTML-`<div>` mithilfe von `imsc.renderHTML()` gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Aufbau eines IMSC-Players

Sehen wir uns ein ausführlicheres Beispiel an und zeigen Ihnen, wie Sie mit imscJS Untertitel auf einem eingebetteten HTML-Video rendern können. Als Beispiel verwenden wir das untenstehende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Den [HTML-Code](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) finden Sie im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples).

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Code mit eingebettetem CSS gerendert. Es repräsentiert die IMSC-Untertitel während eines bestimmten Zeitabschnitts auf der Zeitleiste des zugehörigen Medienelements. Wie wir im Abschnitt [Rendering eines IMSC-Schnappschusses](#rendering_eines_imsc-schnappschusses) oben gesehen haben, wird der Code in ein `<div>`-Element mit der Methode `renderHtml()` eingefügt. Man kann dieses `<div>`-Element als Container für das aus IMSC-Code generierte HTML ansehen. Später übergeben wir das entsprechende DOM-Element als Parameter an die `renderHtml()`-Methode.

Der Einfachheit halber weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Textspuren verknüpft sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel erscheinen oder verschwinden soll. In diesem Beispiel verwenden wir ein `<track>`-Element, das wir im HTML-Code deklariert haben, aber wir könnten auch eine Textspur dynamisch erstellen und dem `<video>`-Element hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Verweis auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist momentan nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei verweist. Wenn dies nicht der Fall ist, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Datei selbst abrufen und als JavaScript-String einlesen. Im Beispiel verwenden wir dafür die [`fetch()`](/de/docs/Web/API/Window/fetch)-API:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Textspurmodus

Es gibt noch einen weiteren Nebeneffekt. Da die Browser keine gültige WebVTT-Datei vom `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur ist auf den Wert `disable` gesetzt.

Aber das ist nicht, was wir wollen. Im deaktivierten Modus wirft ein Cue keine Ereignisse bei seinen Start- und Endzeiten aus. Da wir diese Ereignisse für die Darstellung der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur auf `hidden`. In diesem Modus wird der Browser die Ereignisse der Cues auslösen, aber den Wert der Cue-Text-Eigenschaft nicht rendern.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung der IMSC-Untertitel-Darstellung konzentrieren.

## Erzeugen von "Untertitelzuständen"

Oben haben wir erklärt, dass wir IMSC-Schnappschüsse erstellen müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, ist der erste Schritt, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues zur Darstellung der IMSC-Untertitel verwenden. Jeder Cue hat Eigenschaften, die seine Start- und Endzeit repräsentieren. Die Browser-Engine löst Ereignisse aus, wenn die Zeitleiste des Mediums die Start- und Endzeit eines Cues erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das aus imscJS generierte HTML darzustellen und bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Cues ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt mit der Cue-Schnittstelle und deren `start`- und `end`-Eigenschaften übereinstimmen.

Aber nehmen Sie folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies gängige Praxis für Live-Untertitelung.

Was passiert, ist folgendes:

- In der ersten Sekunde gibt es keinen Untertitel.
- In der zweiten Sekunde muss der Text "Hello" erscheinen.
- In der dritten Sekunde muss der Text "Hello" weiterhin "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von Sekunden 2 bis 3 einen Untertitel mit dem Text "Hello world!".

Um dies in HTML zu übersetzen, benötigen wir mindestens zwei Cues: Einen, der den Text "Hello" von Sekunde 1-2 darstellt, und einen anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber das ist ein einfaches, unkompliziertes Szenario. Stellen Sie sich vor, Sie haben 5 weitere Wörter, die sich ansammeln. Diese können alle die gleiche Endzeit haben, aber unterschiedliche Startzeiten. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z.B. für einen anderen Sprecher). Dieser Untertitel wird parallel zum anderen Untertitel gezeigt, aber die sich ansammelnden Wörter haben möglicherweise unterschiedliche Startzeiten und daher unterschiedliche Intervalle.

Glücklicherweise ist dieses Szenario in IMSC und imscJS recht einfach abzudecken, da IMSC einen Mechanismus zur zustandslosen Untertiteldarstellung hat.

Sehen wir uns genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir uns IMSC-Untertitel als eine Darstellungsschicht vorstellen, die über das Video gelegt wird. Zu jedem Zeitpunkt auf der Zeitleiste des Mediums hat die Darstellungsschicht einen spezifischen Zustand. Für diese "Zustände" hat IMSC ein konzeptuelles Modell, das "Intermediate Synchronous Document Format", das repräsentiert, was schließlich in dieser Schicht dargestellt wird. Jedes Mal, wenn die Darstellung geändert werden muss, wird eine neue Repräsentation erstellt. Was erstellt wird, wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD ist vollständig zustandslos und enthält alle Informationen, die zum Rendern des Untertitels erforderlich sind.

Wie können wir also die Zeiten erhalten, zu denen sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Medienereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz in [Erzeugen eines IMSC-Schnappschusses](#erzeugen_eines_imsc-schnappschusses) erklärt. Also für das ISD in der zweiten Sekunde müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Textspur-Cues

Mit zwei Methoden können wir nun alle notwendigen Zustände der IMSC-Darstellungsschicht generieren. Wir gehen dabei wie folgt vor:

- Iterieren Sie über das Array, das wir von `getMediaEvents()` erhalten
- Für jedes Medienereignis:

  - Erstellen Sie einen entsprechenden Cue.
  - Verwenden Sie ein `onenter`-Ereignis, um das ISD anzuzeigen.
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

Schauen wir uns das genauer an.

Während wir durch die `timeEvents` iterieren, können wir den Wert des Medienereignisses als Startzeit des Cues verwenden. Wir können dann den Wert des nächsten Medienereignisses als Endzeit des Cues verwenden, da dies anzeigt, dass die Darstellungsschicht geändert werden muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Cues derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie einen Cue mit allen WebVTT-Eigenschaften, einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig zu beachten, dass sie trotzdem vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Medienereignisses berechnen? Es hat kein "nächstes" Medienereignis, von dem wir die Endzeit übernehmen können.

Wenn es kein weiteres Medienereignis gibt, bedeutet dies tatsächlich, dass die Darstellungsschicht bis zum Ende der Abspielzeit des Mediums aktiv bleibt. Wir können also die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruiert haben, können wir die Funktion registrieren, die "beim Betreten" des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir generieren das dem Cue zugeordnete ISD und verwenden dann die imscJS-Methode `renderHTML()`, um dessen entsprechendes HTML im "Rendering-Container" zu rendern.

Um sicherzustellen, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir zuerst die Untertitelschicht, falls eine vorhanden ist. Dazu definieren wir eine Funktion, die wir später wiederverwenden können, wenn das Cue endet:

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

Am Ende müssen wir den erzeugten Cue nur noch der Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung von nativen Videoplayer-Steuerelementen

In der Regel möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Mindestens sollten sie in der Lage sein, das Video abzuspielen, zu pausieren und zu suchen. Die einfachste Methode wäre, die nativen Videosteuerungen des Webbrowsers zu verwenden, oder? Ja, das stimmt, wenn Sie keine zusätzlichen Funktionen wünschen.

Native Videoplayer-Steuerelemente sind Teil des Browsers und nicht des HTML-Codes. Obwohl sie auf DOM-Ereignisse reagieren und einige eigene generieren, haben Sie als Webentwickler keinen direkten Zugriff darauf.

Dies führt zu zwei Problemen bei der Verwendung von imscJS:

1. Die IMSC-HTML-Überlagerung deckt das gesamte Video ab. Sie sitzt über dem `<video>`-Element. Obwohl Sie die Player-Steuerelemente sehen können (da der Großteil der Überlagerung einen transparenten Hintergrund hat), kommen Zeigerereignisse wie Mausklicks nicht zu den Steuerelementen durch. Da sie nicht mit standardmäßigem CSS angesprochen werden können, können Sie auch nicht den z-Index der Steuerelemente ändern, um dieses Problem zu lösen. Wenn Sie also immer eine Untertitelschicht haben, können Sie das Video nicht stoppen, sobald es gestartet ist. Dies wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videoplayer-Steuerelemente eine Untertitelbenutzeroberfläche. Sie können ein Textspurelement auswählen oder die Anzeige von Untertiteln ausschalten. Leider steuert die Untertiteloberfläche nur die Darstellung von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, daher haben diese Steuerelemente keine Wirkung.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigerereignisse "durch" die Überlagerung gehen (siehe [Referenzdokumentation für Zeigerereignisse](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertitelbenutzeroberfläche ist etwas schwieriger zu lösen. Obwohl wir auf Ereignisse hören können, aktiviert das Aktivieren einer Spur mit der Untertitelbenutzeroberfläche auch das Rendern der entsprechenden WebVTT. Da wir VTTCues für die IMSC-Darstellung verwenden, kann dies unerwünschtes Präsentationsverhalten verursachen. Die Texteigenschaft des VTTCue hat zwar immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung ist, eigene benutzerdefinierte Steuerelemente zu erstellen. Erfahren Sie wie in unserem [Leitfaden zur Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

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
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Video-Zeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
