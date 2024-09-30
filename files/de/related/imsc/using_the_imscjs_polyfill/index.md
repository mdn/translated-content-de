---
title: Die Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gewartet wird und eine fast vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und auf Ihrer eigenen Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden gehen wir zunächst ein einfaches Beispiel durch, wie imscJS verwendet werden kann, und betrachten dann ein komplexeres Beispiel, das tatsächlich Untertitel auf einem Video zur passenden Zeit darstellt. Den Quellcode des [ersten Beispiels finden Sie auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbetten von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js">
```

Sobald die imscJS-Bibliothek geladen ist, kann sie in drei verschiedenen Schritten verwendet werden, um ein IMSC-Dokument darzustellen, die in den folgenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zuerst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc`, in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal für jedes IMSC-Dokument durchgeführt werden. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitversatzpunkten (in Sekunden) zurückgibt, die anzeigen, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Generieren eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mit `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, aber häufig ist er das. Im obigen Beispiel wird der Snapshot zu dem Zeitpunkt erstellt, zu dem sich das IMSC-Dokument das zweite Mal ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Versatz einen Snapshot erstellen und dessen Präsentation zum angegebenen Versatz planen.

## Rendern eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot mit `imsc.renderHTML()` in ein HTML-{{htmlelement("div")}} gerendert:

```js
const vdiv = document.getElementById("render-div");
imsc.renderHTML(isd, vdiv);
```

## Erstellen eines IMSC-Players

Lassen Sie uns ein ausführlicheres Beispiel betrachten und Ihnen zeigen, wie Untertitel mit imscJS auf einem eingebetteten HTML-Video gerendert werden können. Wir verwenden das untenstehende Video mit Untertiteln als Beispiel.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie finden die [HTML-Auszeichnung](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples).

## Zugriff auf den DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit Inline-CSS gerendert. Er stellt die IMSC-Untertitel während eines spezifischen Zeitabschnitts auf der Zeitachse des zugehörigen Medienelements dar. Wie wir im Abschnitt [Rendern eines IMSC-Snapshots](#rendern_eines_imsc-snapshots) oben gesehen haben, wird das Markup unter Verwendung der `renderHtml()`-Methode in ein `<div>`-Element eingefügt. Wir können dieses `<div>`-Element als Container für das aus IMSC-Code generierte HTML betrachten. Später übergeben wir das entsprechende DOM-Element als Parameter an die `renderHtml()`-Methode.

Zur Vereinfachung weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Textspuren verknüpft sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel angezeigt oder ausgeblendet werden sollte. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben, aber wir könnten auch eine Textspur "on the fly" erstellen und sie dem {{htmlelement("video")}}-Element hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist derzeit nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei zeigt. Wenn dies nicht der Fall ist, verwenden sie es nicht und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit erledigen, die Datei abzurufen und in einen JavaScript-String zu laden. Im Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Textspurmodus

Es gibt eine weitere Nebenwirkung. Da Browser keine gültige WebVTT-Datei vom `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur wird auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus löst ein Cue keine Ereignisse bei seinen Start- und Endzeiten aus. Da wir diese Ereignisse zum Rendern der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur in `hidden`. In diesem Modus wirft der Browser die Ereignisse der Cues, rendert jedoch nicht den Wert der Text-Eigenschaft des Cues.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung des Renderns der IMSC-Untertitel konzentrieren.

## Generieren von "Untertitelnzuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots generieren müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, besteht der erste Schritt darin, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir wollen Cues zum Rendern der IMSC-Untertitel verwenden. Jeder Cue hat Eigenschaften, die seine Start- und Endzeit darstellen. Die Browser-Engine löst Ereignisse aus, wann immer die Zeitachse des Mediums die Start- und Endzeit eines Cues erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das HTML zu rendern, das von imscJS generiert wurde, und es bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu den Start- und Endzeiten von Cues ist nicht so einfach, wie man denken mag. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin` und `end` Attributen verwenden. Dies würde perfekt auf die Cue-Schnittstelle mit ihren `start`- und `end`-Eigenschaften zutreffen.

Aber nehmen Sie den folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies gängige Praxis für Live-Captioning.

Folgendes passiert:

- In der ersten Sekunde gibt es keinen Untertitel.
- In der zweiten Sekunde muss der Text "Hello" erscheinen.
- In der dritten Sekunde muss der Text "Hello" immer noch "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Daher haben wir von der Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML umzusetzen, benötigen wir mindestens zwei Cues: einen, der den Text "Hello" von der ersten bis zur zweiten Sekunde darstellt, und einen anderen, der den Text "Hello world!" von der zweiten bis zur dritten Sekunde darstellt.

Aber dies ist ein einfaches Szenario. Stellen Sie sich vor, Sie haben 5 weitere Wörter, die angesammelt werden. Sie könnten alle die gleiche Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einer anderen Stelle (z. B. einen anderen Sprecher darstellend). Dieser Untertitel wird parallel zum anderen Untertitel gezeigt, aber die akkumulierten Wörter können unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Zum Glück ist dieses Szenario in IMSC und imscJS ziemlich leicht zu bewältigen, da IMSC einen Mechanismus für stateless Untertitel-Rendering hat.

Sehen wir uns das genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir IMSC-Untertitel als eine Rendering-Schicht betrachten, die auf das Video gelegt wird. Zu jedem Zeitpunkt auf der Medienzeitleiste hat die Rendering-Schicht einen spezifischen Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "Intermediate Synchronous Document Format", das darstellt, was letztendlich in dieser Schicht gerendert wird. Jedes Mal, wenn sich das Rendering ändern muss, wird eine neue Darstellung erstellt. Das, was erstellt wird, wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD hat keine Abhängigkeit von den ISDs, die davor oder danach kommen. Es ist vollständig zustandslos und enthält alle Informationen, die zur Wiedergabe des Untertitels benötigt werden.

Wie können wir also die Zeiten erfahren, wann sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies bereits kurz in [Generieren eines IMSC-Snapshots](#generieren_eines_imsc-snapshots) erklärt. Für das ISD in der zweiten Sekunde müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Cues für Textspuren

Mit zwei Methoden können wir jetzt alle notwendigen Zustände der IMSC-Rendering-Schicht generieren. Das tun wir wie folgt:

- Iterieren Sie über das Array, das wir von `getMediaEvents()` zurückbekommen
- Für jedes Zeitereignis:

  - Erstellen Sie ein entsprechendes Cue.
  - Verwenden Sie ein `onenter`-Ereignis, um das ISD zu rendern.
  - Verwenden Sie ein `onexit`-Ereignis, um die Rendering-Schicht wieder zu entfernen.

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

Sehen wir uns das genauer an.

Während wir durch die `timeEvents` schleifen, können wir den Wert des Zeitereignisses als Startzeit des Cues nehmen. Wir können dann den Wert des nächsten Zeitereignisses für die Endzeit des Cues verwenden, da dies anzeigt, dass sich die Rendering-Schicht ändern muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Cues derzeit nur für das WebVTT-Format implementiert. Daher erstellen Sie normalerweise ein Cue mit allen WebVTT-Eigenschaften einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig zu beachten, dass sie noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir das Ende des letzten Zeitereignisses berechnen? Es gibt kein "nächstes" Zeitereignis, von dem wir die Endzeit nehmen könnten.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Rendering-Schicht bis zum Ende der Wiedergabezeit des Mediums aktiv ist. Wir können also die Endzeit auf die Dauer des zugehörigen Mediums setzen:

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

Wir generieren das ISD, das mit dem Cue verknüpft ist, und verwenden dann die imscJS-Methode `renderHTML()`, um das entsprechende HTML im "Rendering-Container" zu rendern.

Um sicherzustellen, dass keine verbleibende Untertitel-Schicht vorhanden ist, entfernen wir zuerst die Untertitel-Schicht, falls eine vorhanden ist. Dafür definieren wir eine Funktion, die wir später wiederverwenden können, wenn das Cue endet:

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

Am Ende müssen wir nur das generierte Cue zur Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwenden der nativen Videoplayer-Steuerelemente

Normalerweise möchten Sie dem Benutzer einige Optionen zur Steuerung der Video-Wiedergabe geben. Zumindest sollten sie in der Lage sein, das Video abzuspielen, zu pausieren und zu suchen. Die einfachste Methode wäre, die nativen Videosteuerungen des Webbrowsers zu verwenden, oder? Ja, das ist wahr, wenn Sie keine zusätzlichen Funktionen wünschen.

Natürliche Videoplayer-Steuerungen sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige eigene erzeugen, haben Sie als Webentwickler keinen direkten Zugriff auf sie.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Der IMSC-HTML-Überlagerung bedeckt das gesamte Video. Es sitzt über dem `<video>`-Element. Obwohl Sie die Player-Steuerungen sehen können (weil der größte Teil der Überlagerung einen transparenten Hintergrund hat), werden Zeigervorgänge wie Mausklicks nicht an die Steuerungen weitergeleitet. Da sie nicht mit Standard-CSS erreicht werden können, können Sie auch nicht den z-index der Steuerungen ändern, um dieses Problem zu lösen. Wenn Sie also immer eine Untertitel-Überlagerung haben, können Sie das Video nicht anhalten, sobald es gestartet wurde. Dies wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videoplayer-Steuerungen eine Untertitelschnittstelle. Sie können eine Textspur oder das Rendern von Untertiteln ausschalten. Leider steuert die Untertitelschnittstelle nur das Rendern von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, sodass diese Steuerungen keine Auswirkungen haben.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat zur Folge, dass Zeigervorgänge "durch" die Überlagerung gehen (siehe [Referenzdokumentation für Zeigervorgänge](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertitelschnittstelle ist etwas schwieriger zu lösen. Obwohl wir Ereignisse abhören können, wird durch das Aktivieren einer Spur über die Untertitelschnittstelle auch das Rendern der entsprechenden WebVTT aktiviert. Da wir VTTCues für das IMSC-Rendering verwenden, kann dies unerwünschtes Präsentationsverhalten verursachen. Der Textwert der VTTCue hat immer den Wert eines leeren Strings, aber in einigen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung ist, eigene benutzerdefinierte Steuerelemente zu erstellen. Erfahren Sie mehr darüber in unserem [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) Tutorial.

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
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videocodezeiten zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
