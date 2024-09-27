---
title: Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und nahezu die vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und wie Sie es in Ihre eigene Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden gehen wir zunächst durch ein einfaches Beispiel, wie man imscJS verwendet, und dann betrachten wir ein komplexeres Beispiel, das tatsächlich Untertitel rechtzeitig über ein Video rendert. Sie finden den Quellcode des [ersten Beispiels auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbinden von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js">
```

Sobald die imscJS-Bibliothek geladen ist, kann sie verwendet werden, um ein IMSC-Dokument in drei verschiedenen Schritten darzustellen, die in den folgenden Abschnitten erläutert werden.

## Parsen des IMSC-Dokuments

Zunächst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc`, in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal pro IMSC-Dokument erfolgen. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitversätzen (in Sekunden) zurückgibt, das angibt, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erstellen eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mithilfe von `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, ist es jedoch in der Regel. Im obigen Beispiel wird der Snapshot zum zweiten Zeitpunkt erstellt, an dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Versatz einen Snapshot erstellen und seine Präsentation zu dem angegebenen Versatz planen.

## Rendern eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot mit `imsc.renderHTML()` in ein HTML-{{htmlelement("div")}}-Element gerendert:

```js
const vdiv = document.getElementById("render-div");
imsc.renderHTML(isd, vdiv);
```

## Aufbau eines IMSC-Players

Schauen wir uns ein ausführlicheres Beispiel an und zeigen Ihnen, wie Sie Untertitel mit imscJS auf einem eingebetteten HTML-Video rendern können. Als Beispiel verwenden wir das folgende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie können die [HTML-Markierung](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples) finden.

## Zugriff auf den DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit inline CSS gerendert. Er repräsentiert die IMSC-Untertitel während eines bestimmten Zeitraums auf der Timeline des zugehörigen Medienelements. Wie wir im Abschnitt [Rendern eines IMSC-Snapshots](#rendern_eines_imsc-snapshots) oben gesehen haben, wird das Markup in ein `<div>`-Element eingefügt, das die `renderHtml()`-Methode verwendet. Wir können dieses `<div>`-Element als Container für das HTML betrachten, das aus dem IMSC-Code generiert wurde. Später übergeben wir das entsprechende DOM-Element als Parameter an die `renderHtml()`-Methode.

Zur Vereinfachung weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Texttracks verbunden sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel erscheinen oder verschwinden soll. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben, aber wir könnten auch einen Texttrack "on-the-fly" erstellen und ihn dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser wird das Dokument nicht automatisch für uns abrufen. In den meisten Browsern ist derzeit nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei verweist. Wenn dies nicht der Fall ist, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut verweist. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit erledigen, um die Datei abzurufen und sie in eine JavaScript-Zeichenfolge einzulesen. Im Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Texttrack-Modus

Es gibt noch einen weiteren Nebeneffekt. Da Browser keine gültige WebVTT-Datei aus dem `src`-Attribut erhalten, deaktivieren sie den Track. Die `mode`-Eigenschaft des Texttracks ist auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus werfen Cues keine Ereignisse zu ihren Start- und Endzeiten. Da wir diese Ereignisse benötigen, um die IMSC-Untertitel zu rendern, ändern wir den Modus des Texttracks auf `hidden`. In diesem Modus wird der Browser die Ereignisse der Cues auslösen, aber den Wert der Cue-Text-Eigenschaft nicht rendern.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung der IMSC-Untertiteldarstellung konzentrieren.

## Erzeugen von "Untertitelstatus"

Oben haben wir erklärt, dass wir IMSC-Snapshots erzeugen müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, besteht der erste Schritt darin, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues für das Rendering der IMSC-Untertitel verwenden. Jeder Cue hat Eigenschaften, die seine Start- und Endzeiten repräsentieren. Die Browser-Engine löst Ereignisse aus, wann immer die Timline des Mediums die Start- und Endzeiten eines Cues erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um den HTML-Code, der von imscJS generiert wurde, zu rendern und bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Cues ist nicht so einfach, wie man denkt. Natürlich könnte man einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt zur Cue-Oberfläche mit ihren `start`- und `end`-Eigenschaften passen.

Aber nehmen Sie den folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "kumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies bei Live-Transkriptionen gängige Praxis.

Folgendes geschieht:

- In der ersten Sekunde gibt es keinen Untertitel.
- In der zweiten Sekunde muss der Text "Hello" erscheinen.
- In der dritten Sekunde muss der Text "Hello" noch "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Vom Zeitpunkt 2 bis 3 haben wir also einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Cues: einen, der den Text "Hello" von der ersten bis zur zweiten Sekunde repräsentiert, und einen anderen, der den Text "Hello world!" von der zweiten bis zur dritten Sekunde darstellt.

Aber das ist ein einfaches, leichtes Szenario. Stellen Sie sich vor, Sie haben 5 weitere Wörter, die kumulieren. Sie können alle dieselbe Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z.B. einen anderen Sprecher repräsentierend). Dieser Untertitel wird parallel zum anderen Untertitel angezeigt, aber die kumulierenden Wörter können unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Zum Glück ist dieses Szenario in IMSC und imscJS recht leicht abzudecken, da IMSC einen Mechanismus zum zustandslosen Untertitelrendering hat.

Schauen wir uns genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir uns IMSC-Untertitel als eine Rendering-Schicht vorstellen, die über das Video gelegt wird. Zu jedem Zeitpunkt auf der Medien-Timeline hat die Rendering-Schicht einen spezifischen Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "intermediate synchronous document format", das darstellt, was letztendlich in dieser Schicht gerendert wird. Jedes Mal, wenn sich das Rendering ändern muss, wird eine neue Darstellung erstellt. Das, was erstellt wird, nennt man ein **Intermediate Synchronous Document** oder **ISD**. Dieses ISD hat keine Abhängigkeiten von den ISD's, die davor oder danach kommen. Es ist vollständig zustandslos und enthält alle Informationen, die für die Darstellung des Untertitels erforderlich sind.

Wie können wir also die Zeiten ermitteln, wann sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz in [Erzeugen eines IMSC-Snapshots](#erstellen_eines_imsc-snapshots) erklärt. Also für das ISD in der zweiten Sekunde müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Texttrack-Cues

Mit diesen beiden Methoden können wir nun alle notwendigen Zustände der IMSC-Rendering-Schicht erzeugen. So gehen wir vor:

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

Schauen wir es uns detaillierter an.

Während wir durch die `timeEvents` schleifen, können wir den Wert des Zeitereignisses als Startzeit des Cues verwenden. Wir können dann den Wert des nächsten Zeitereignisses für die Endzeit des Cues verwenden, da dies anzeigt, dass die Rendering-Schicht geändert werden muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Texttrack-Cues derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie also ein Cue mit allen WebVTT-Eigenschaften, einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig, sich daran zu erinnern, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es hat kein "nächstes" Zeitereignis, von dem wir die Endzeit nehmen können.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Rendering-Schicht bis zum Ende der Spielzeit des Mediums aktiv bleibt. Wir können also die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruiert haben, können wir die Funktion registrieren, die beim "Betreten" des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir generieren das ISD, das dem Cue zugeordnet ist, und verwenden dann die imscJS-Methode `renderHTML()`, um dessen entsprechendes HTML im "Rendering-Container" zu rendern.

Um sicherzustellen, dass keine verbleibende Untertitelschicht verbleibt, entfernen wir zuerst die Untertitelschicht, falls eine vorhanden ist. Dazu definieren wir eine Funktion, die wir später beim Ende des Cues wiederverwenden können:

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

Am Ende müssen wir nur noch das erzeugte Cue zum Texttrack hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwenden der nativen Videoplayer-Steuerelemente

Normalerweise möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Mindestens sollten sie in der Lage sein, das Video zu starten, zu pausieren und zu suchen. Die einfachste Methode wäre, die nativen Videosteuerungselemente des Webbrowsers zu verwenden, oder? Ja, das stimmt, wenn Sie keine zusätzlichen Funktionen wünschen.

Native Videoplayer-Steuerungselemente sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige davon produzieren, haben Sie als Webentwickler keinen direkten Zugriff darauf.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Die IMSC-HTML-Überlagerung deckt das gesamte Video ab. Sie liegt über dem `<video>`-Element. Obwohl Sie die Bedienungselemente sehen können (weil der größte Teil der Überlagerung einen transparenten Hintergrund hat), kommen Zeigerereignisse wie Mausklicks nicht zu den Bedienungselementen durch. Da sie durch Standard-CSS nicht zugänglich sind, können Sie auch nicht den z-index der Steuerelemente ändern, um dieses Problem zu lösen. Wenn Sie immer eine Untertitelüberlagerung haben, können Sie das Video nicht anhalten, sobald es gestartet wurde. Dies wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videoplayer-Steuerungselemente eine Untertitel-Benutzeroberfläche. Sie können einen Texttrack auswählen oder das Rendern von Untertiteln deaktivieren. Leider steuert die Untertitel-Benutzeroberfläche nur das Rendern von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, daher haben diese Steuerelemente keinen Einfluss.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigerereignisse "durch" die Überlagerung gehen (siehe die [Referenzdokumentation für Zeigerereignisse](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertitel-Benutzeroberfläche ist etwas schwieriger zu lösen. Obwohl wir auf Ereignisse hören können, wird das Aktivieren eines Tracks über die Untertitel-Benutzeroberfläche auch das Rendern der entsprechenden WebVTT aktivieren. Da wir VTTCues für die IMSC-Darstellung verwenden, kann dies zu unerwünschtem Präsentationsverhalten führen. Die Texteigenschaft des VTTCue hat immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zur Anzeige von Artefakten führen.

Die beste Lösung besteht darin, eigene benutzerdefinierte Steuerelemente zu erstellen. Erfahren Sie, wie das geht, in unserem [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) Tutorial.

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
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videozeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
