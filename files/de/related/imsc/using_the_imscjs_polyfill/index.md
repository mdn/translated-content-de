---
title: Verwendung des imscJS Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast die gesamte Bandbreite der IMSC-Funktionen abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und auf Ihrer eigenen Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden gehen wir zuerst durch ein Beispiel, wie imscJS verwendet wird, dann schauen wir uns ein komplexeres Beispiel an, das tatsächlich Untertitel zu entsprechenden Zeiten über ein Video rendert. Sie finden den Quellcode der [ersten Probe auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbetten von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js"></script>
```

Sobald die imscJS-Bibliothek geladen ist, kann sie in drei eindeutigen Schritten verwendet werden, um ein IMSC-Dokument zu rendern, die in den folgenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zuerst wird das IMSC-Dokument in ein unveränderbares JavaScript-Objekt (`doc` in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal pro IMSC-Dokument durchgeführt werden. Das `doc`-Objekt hat eine einzelne Methode, `getMediaTimeEvents()`, die ein Array von Zeitverschiebungen (in Sekunden) zurückgibt, die anzeigen, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erzeugen eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mithilfe von `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, ist es aber normalerweise. Im obigen Beispiel wird der Snapshot zum zweiten Zeitpunkt erstellt, an dem das IMSC-Dokument sich ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung vor der Medienwiedergabe und für jede von `getMediaTimeEvents()` zurückgegebene Verschiebung einen Snapshot erstellen und dessen Präsentation zur angegebenen Verschiebung planen.

## Rendern eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot in ein HTML {{htmlelement("div")}} mithilfe von `imsc.renderHTML()` gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Aufbau eines IMSC-Players

Werfen wir einen Blick auf ein erweitertes Beispiel und zeigen Ihnen, wie Sie mit imscJS Untertitel auf einem eingebetteten HTML-Video rendern können. Als Beispiel verwenden wir das unten stehende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie finden das [HTML-Markup](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples).

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit inline CSS gerendert. Er repräsentiert die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitleiste des zugehörigen Medienelements. Wie wir im Abschnitt [Rendern eines IMSC-Snapshots](#rendern_eines_imsc-snapshots) oben gesehen haben, wird das Markup in ein `<div>`-Element eingefügt, indem die `renderHtml()`-Methode verwendet wird. Wir können uns dieses `<div>`-Element als Container für das von IMSC-Code generierte HTML vorstellen. Später übergeben wir das entsprechende DOM-Element als Parameter an die `renderHtml()`-Methode.

Zum besseren Verständnis weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Textspuren verknüpft sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel erscheinen oder verschwinden sollte. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben. Wir könnten jedoch auch eine Textspur "on the fly" erstellen und dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unsere Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist derzeit nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei hinweist. Wenn dies nicht der Fall ist, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit erledigen, um die Datei abzurufen und in einen JavaScript-String zu lesen. Im Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Textspurmodus

Es gibt noch eine Nebenwirkung. Da Browser keine gültige WebVTT-Datei aus dem `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur ist auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus wirft ein Cue keine Ereignisse zu seinen Start- und Endzeiten. Da wir diese Ereignisse für das Rendern der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur auf `hidden`. In diesem Modus wirft der Browser die Ereignisse der Cues, rendert jedoch nicht den Wert der Cue-Text-Eigenschaft.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung des IMSC-Untertitelrenderings konzentrieren.

## Generieren von "Untertitel-Zuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots generieren müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum das notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, ist der erste Schritt das Parsen des IMSC-Dokuments in ein imscJS-Objekt.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues verwenden, um die IMSC-Untertitel zu rendern. Jeder Cue hat Eigenschaften, die seine Start- und Endzeit darstellen. Die Engine des Browsers wirft Ereignisse, wann immer die Zeitleiste des Mediums die Start- und Endzeit eines Cues erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das von imscJS generierte HTML zu rendern und bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Cues ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt zur Cue-Schnittstelle mit ihren `start`- und `end`-Eigenschaften passen.

Aber nehmen Sie den folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "kumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies bei der Live-Untertitelung gängig.

Es passiert Folgendes:

- In der ersten Sekunde gibt es keinen Untertitel.
- In der ersten Sekunde muss der Text "Hello" erscheinen.
- In der zweiten Sekunde muss der Text "Hello" weiterhin "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von der zweiten bis zur dritten Sekunde einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Cues: einen, der den Text "Hello" von der ersten bis zur zweiten Sekunde darstellt, und den anderen, der den Text "Hello world!" von der zweiten bis zur dritten Sekunde darstellt.

Aber das ist ein vereinfachtes, einfaches Szenario. Stellen Sie sich vor, dass Sie fünf weitere Wörter kumulieren. Sie können alle die gleiche Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z. B. einen anderen Sprecher darstellend). Dieser Untertitel wird parallel zum anderen Untertitel gezeigt, aber die kumulierenden Wörter können unterschiedliche Startzeiten und damit unterschiedliche Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS recht einfach abzudecken, da IMSC einen Mechanismus zur zustandsfreien Untertitelwiedergabe hat.

Schauen wir uns das genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir uns IMSC-Untertitel als eine Rendering-Schicht vorstellen, die über dem Video liegt. Zu jedem Zeitpunkt auf der Medien-Zeitleiste hat die Rendering-Schicht einen bestimmten Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "intermediate synchronous document format", das darstellt, was schließlich in dieser Schicht gerendert wird. Jedes Mal, wenn sich die Darstellung ändern muss, wird eine neue Darstellung erstellt. Diese Darstellung wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Diese ISD hat keine Abhängigkeit von den ISD's, die davor oder danach kommen. Es ist vollständig zustandslos und enthält alle Informationen, die zur Darstellung des Untertitels benötigt werden.

Wie können wir die Zeiten erhalten, wann sich das ISD ändert?

Das ist einfach: Wir rufen einfach die `getMediaTimeEvents()`-Methode auf dem imscJS-Dokumentenobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz in [Erzeugen eines IMSC-Snapshots](#erzeugen_eines_imsc-snapshots) erklärt. Für das ISD in der zweiten Sekunde müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Textspur-Cues

Mit zwei Methoden können wir nun alle notwendigen Zustände der IMSC-Rendering-Schicht generieren. Wir machen dies wie folgt:

- Iterieren über das Array, das wir von `getMediaEvents()` zurückbekommen
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

Schauen wir es uns genauer an.

Während wir durch die `timeEvents` schleifen, können wir den Wert des Zeitereignisses als Startzeit des Cues nehmen. Wir können dann den Wert des nächsten Zeitereignisses für die Endzeit des Cues verwenden, da dies anzeigt, dass die Rendering-Schicht geändert werden muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Cues derzeit nur für das WebVTT-Format implementiert. Sie erstellen normalerweise einen Cue mit allen WebVTT-Eigenschaften einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig zu beachten, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es hat kein "nächstes" Zeitereignis, aus dem wir die Endzeit entnehmen können.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Rendering-Schicht bis zum Ende der Abspielzeit des Mediums aktiv ist. Wir können also die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruieren, können wir die Funktion registrieren, die "beim Entern" des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir erstellen das ISD, das dem Cue zugeordnet ist, und verwenden dann die imscJS-Methode `renderHTML()`, um dessen entsprechendes HTML im "Rendering-Container" zu rendern.

Um sicherzustellen, dass keine verbliebene Untertitel-Schicht vorhanden ist, entfernen wir zuerst die Untertitel-Schicht, falls eine vorhanden ist. Dafür definieren wir eine Funktion, die wir später wiederverwenden können, wenn der Cue endet:

```js
function clearSubFromScreen() {
  const subtitleActive = renderDiv.getElementsByTagName("div")[0];
  if (subtitleActive) {
    renderDiv.removeChild(subtitleActive);
  }
}
```

Diese Funktion rufen wir erneut auf, sobald das `onexit`-Ereignis des Cues ausgelöst wird:

```js
myCue.onexit = function () {
  clearSubFromScreen();
};
```

Am Ende müssen wir nur den generierten Cue zur Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung von nativen Videoplayer-Steuerungen

In der Regel möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe bieten. Zumindest sollten sie in der Lage sein, abzuspielen, zu pausieren und zu spulen. Die einfachste Methode wäre, die nativen Videosteuerungen des Webbrowsers zu verwenden, oder? Ja, das ist richtig, wenn Sie keine zusätzlichen Features benötigen.

Native Videoplayer-Steuerungen sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige ihrer eigenen generieren, haben Sie als Webentwickler keinen direkten Zugriff darauf.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Die IMSC-HTML-Überlagerung deckt das komplette Video ab. Sie sitzt oben auf dem `<video>`-Element. Obwohl Sie die Player-Steuerungen sehen können (weil der größte Teil der Überlagerung einen transparenten Hintergrund hat), kommen Zeigerereignisse, wie Mausklicks, nicht zu den Steuerungen durch. Da Sie nicht auf sie mit standardmäßigen CSS zugreifen können, können Sie auch nicht den z-Index der Steuerungen ändern, um dieses Problem zu lösen. Wenn Sie also immer eine Untertitel-Überlagerung haben, können Sie das Video nicht mehr stoppen, sobald es gestartet ist. Das wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videoplayer-Steuerungen eine Benutzeroberfläche für Untertitel. Sie können eine Textspur auswählen oder das Rendern der Untertitel ausschalten. Leider steuert die Untertitel-Oberfläche nur das Rendern von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, sodass diese Steuerungen keine Wirkung haben werden.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigerereignisse "durch" die Überlagerung gehen (siehe [Referenzdokumentation für Zeigerereignisse](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertitel-Oberfläche ist etwas schwieriger zu lösen. Obwohl wir auf Ereignisse hören können, wird durch die Aktivierung einer Spur mit der Untertitel-Oberfläche auch die Wiedergabe entsprechender WebVTT aktiviert. Da wir VTTCues für das IMSC-Rendering verwenden, kann dies zu unerwünschtem Präsentationsverhalten führen. Die Text-Eigenschaft des VTT-Cues hat immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung ist es, Ihre eigenen benutzerdefinierten Steuerungen zu erstellen. Erfahren Sie, wie in unserem [Tutorial zum Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).
