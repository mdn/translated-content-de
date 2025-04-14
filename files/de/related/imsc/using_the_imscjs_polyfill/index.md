---
title: Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gewartet wird und nahezu alle IMSC-Funktionen abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und es auf Ihrer eigenen Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden werden wir zuerst ein einfaches Beispiel zur Nutzung von imscJS durchgehen, bevor wir uns ein komplexeres Beispiel ansehen, das Untertitel zu passenden Zeiten über ein Video legt. Den Quellcode des [ersten Beispiels finden Sie auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbetten von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js"></script>
```

Sobald die imscJS-Bibliothek geladen ist, kann sie in drei verschiedenen Schritten verwendet werden, um ein IMSC-Dokument darzustellen. Diese Schritte werden in den folgenden Abschnitten erklärt.

## Parsen des IMSC-Dokuments

Zuerst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc`, in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal für jedes IMSC-Dokument durchgeführt werden. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitoffsets (in Sekunden) zurückgibt, die angeben, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erstellen eines IMSC-Snapshots

Im zweiten Schritt wird mit `imsc.generateISD()` ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der durch `getMediaTimeEvents()` zurückgegebenen Werte sein, ist es aber üblicherweise. Im obigen Beispiel wird der Snapshot zum zweiten Zeitpunkt erstellt, an dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung vor der Wiedergabe des Mediums und für jeden durch `getMediaTimeEvents()` zurückgegebenen Offset einen Snapshot erstellen und seine Präsentation zum jeweiligen Offset planen.

## Darstellung eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot mit `imsc.renderHTML()` in ein HTML-{{htmlelement("div")}} gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Erstellen eines IMSC-Players

Schauen wir uns ein erweitertes Beispiel an und zeigen Ihnen, wie Sie Untertitel mit imscJS auf einem eingebetteten HTML-Video darstellen können. Als Beispiel verwenden wir das folgende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie finden die [HTML-Markup](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples).

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit eingebettetem CSS gerendert. Es stellt die IMSC-Untertitel während eines bestimmten Zeitraums in der Timeline des zugehörigen Medienelements dar. Wie wir im Abschnitt [Darstellung eines IMSC-Snapshots](#darstellung_eines_imsc-snapshots) oben gesehen haben, wird das Markup mit der Methode `renderHtml()` in ein `<div>`-Element eingefügt. Wir können dieses `<div>`-Element als Container für das von IMSC-Code generierte HTML betrachten. Später übergeben wir das entsprechende DOM-Element als Parameter an die Methode `renderHtml()`.

Zum Komfort weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Textspuren verbunden sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel angezeigt oder ausgeblendet werden soll. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben, wir könnten jedoch auch eine Textspur "on the fly" erstellen und dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist derzeit nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Diese Browser erwarten daher, dass der Wert des `src`-Attributs auf eine WebVTT-Datei verweist. Ist dies nicht der Fall, verwenden sie es nicht und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut verweist. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Datei abrufen und sie in einen JavaScript-String einlesen. Im Beispiel verwenden wir dazu die [`fetch()`](/de/docs/Web/API/Window/fetch)-API:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Festlegen des Textspurmodus

Es gibt eine weitere Nebenwirkung. Da die Browser keine gültige WebVTT-Datei aus dem `src`-Attribut erhalten, deaktivieren sie die Spur. Die Eigenschaft `mode` der Textspur ist auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus löst ein Cue keine Ereignisse zu seinen Start- und Endzeiten aus. Da wir diese Ereignisse zum Darstellen der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur in `hidden`. In diesem Modus löst der Browser die Ereignisse der Cues aus, rendert aber den Wert der Cue-Text-Eigenschaft nicht.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung der IMSC-Untertiteldarstellung konzentrieren.

## Erzeugen von "Untertitel-Zuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots erzeugen müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, ist der erste Schritt, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues für die Darstellung der IMSC-Untertitel verwenden. Jeder Cue hat Eigenschaften, die seine Start- und Endzeit darstellen. Die Browser-Engine löst Ereignisse aus, wenn die Zeitleiste des Mediums die Start- oder Endzeit eines Cues erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das von imscJS generierte HTML darzustellen und wieder zu entfernen, wenn es erforderlich ist.

Aber die Zuordnung von IMSC-Untertiteln zu den Start- und Endzeiten von Cues ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt zum Cue-Interface mit seinen `start`- und `end`-Eigenschaften passen.

Betrachten Sie jedoch folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel betrachtet werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies gängige Praxis für Live-Untertitelungen.

Was passiert, ist folgendes:

- In Sekunde 0 gibt es keinen Untertitel.
- In Sekunde 1 muss der Text "Hello" erscheinen.
- In Sekunde 2 muss der Text "Hello" noch "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML zu überführen, benötigen wir mindestens zwei Cues: einen, der den Text "Hello" von Sekunde 1-2 darstellt, und einen anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber dies ist ein vereinfachtes einfaches Szenario. Stellen Sie sich vor, Sie haben 5 weitere Wörter, die sich ansammeln. Sie könnten alle die gleiche Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z.B. einen anderen Sprecher darstellend). Dieser Untertitel wird parallel zu dem anderen Untertitel gezeigt, aber die sich ansammelnden Wörter könnten unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS recht einfach abzudecken, weil IMSC einen Mechanismus für zustandsloses Untertitel-Rendering hat.

Lassen Sie uns genauer anschauen, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir uns die IMSC-Untertitel als eine Rendering-Ebene vorstellen, die über das Video gelegt wird. Zu jedem Zeitpunkt auf der Zeitachse des Mediums hat die Rendering-Ebene einen bestimmten Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "intermediäre synchrone Dokumentformat", welches das darstellt, was schließlich in dieser Ebene gerendert wird. Jedes Mal, wenn das Rendering sich ändern muss, wird eine neue Darstellung erstellt. Was erstellt wird, nennt man ein **Intermediate Synchronous Document** oder **ISD**. Dieses ISD hat keine Abhängigkeit von den ISD's, die davor oder danach kommen. Es ist vollständig zustandslos und enthält alle Informationen, die benötigt werden, um den Untertitel darzustellen.

Wie können wir also die Zeiten ermitteln, wann sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies in [Erstellen eines IMSC-Snapshots](#erstellen_eines_imsc-snapshots) kurz erklärt. Für das ISD bei Sekunde 2 müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Textspur-Cues

Mit zwei Methoden können wir nun alle notwendigen Zustände der IMSC-Rendering-Schicht erzeugen. Dies tun wir wie folgt:

- Über das Array iterieren, das wir von `getMediaEvents()` zurückbekommen
- Für jedes Zeitereignis:

  - Einen entsprechenden Cue erstellen.
  - Ein `onenter`-Ereignis verwenden, um das ISD zu rendern.
  - Ein `onexit`-Ereignis verwenden, um die Rendering-Schicht wieder zu entfernen.

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

Während wir durch die `timeEvents` schleifen, können wir den Wert des Zeitereignisses als Startzeit des Cues nutzen. Wir können dann den Wert des nächsten Zeitereignisses als Endzeit des Cues verwenden, da dies angibt, dass die Rendering-Schicht geändert werden muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Cues derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie also einen Cue mit allen WebVTT-Eigenschaften, einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig, sich daran zu erinnern, dass sie immer noch da sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es hat kein "nächstes" Zeitereignis, von dem wir die Endzeit nehmen könnten.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Rendering-Schicht bis zum Ende der Wiedergabezeit des Mediums aktiv ist. Wir können also die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Nachdem wir das Cue-Objekt konstruiert haben, können wir die Funktion registrieren, die "beim Betreten" des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir erzeugen das ISD, das mit dem Cue verbunden ist, und verwenden dann die imscJS-Methode `renderHTML()`, um das entsprechende HTML in den "Rendering-Container" zu rendern.

Um sicherzustellen, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir zuerst die Untertitelschicht, falls eine vorhanden ist. Dafür definieren wir eine Funktion, die wir später beim Ende des Cues wiederverwenden können:

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

## Verwenden der nativen Videoplayer-Steuerelemente

In der Regel möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Mindestens sollten sie in der Lage sein, das Video abzuspielen, zu pausieren und fortzusetzen. Die einfachste Methode wäre, die nativen Videosteuerungen des Webbrowsers zu verwenden, oder? Ja, das stimmt, wenn Sie keine zusätzlichen Funktionen wünschen.

Native Videoplayer-Steuerelemente sind Teil des Browsers und nicht des HTML-Markups. Auch wenn sie auf DOM-Ereignisse reagieren und einige ihrer eigenen erzeugen, haben Sie als Webentwickler keinen direkten Zugriff darauf.

Dies führt zu zwei Problemen bei der Verwendung von imscJS:

1. Die IMSC-HTML-Überlagerung deckt das gesamte Video ab. Sie sitzt über dem `<video>`-Element. Obwohl Sie die Steuerelemente des Players sehen können (weil der größte Teil der Überlagerung einen transparenten Hintergrund hat), kommen Zeigerereignisse wie Mausklicks nicht zu den Steuerelementen durch. Da sie nicht durch Standard-CSS zugänglich sind, können Sie die z-index der Steuerelemente auch nicht ändern, um dieses Problem zu lösen. Wenn Sie also immer eine Untertitelüberlagerung haben, können Sie das Video nicht stoppen, sobald es gestartet wurde. Dies wäre eine sehr schlechte Benutzererfahrung.
2. Gewöhnlich haben die nativen Videoplayer-Steuerelemente eine Benutzeroberfläche für Untertitel. Sie können eine Textspur auswählen oder das Rendering der Untertitel ausschalten. Leider steuert die Benutzeroberfläche für Untertitel nur die Darstellung von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, daher haben diese Steuerelemente keine Auswirkung.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigerereignisse "durch" die Überlagerung hindurchgehen (siehe [Referenzdokumentation für Zeigerereignisse](/de/docs/Web/CSS/pointer-events) für mehr Details).

Das Problem mit der Untertitel-Benutzeroberfläche ist etwas schwieriger zu lösen. Obwohl wir auf Ereignisse hören können, wird das Aktivieren einer Spur über die Benutzeroberfläche für Untertitel auch das Rendering der entsprechenden WebVTT aktivieren. Da wir VTTCues für das IMSC-Rendering verwenden, kann dies unerwünschtes Präsentationsverhalten verursachen. Die Texteigenschaft des VTTCue hat immer den leeren String als Wert, aber in manchen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung besteht darin, eigene benutzerdefinierte Steuerelemente zu erstellen. Erfahren Sie in unserem [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) Tutorial, wie das geht.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">Grundlagen von IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videocode zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
