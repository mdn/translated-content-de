---
title: Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Derzeit benötigen Sie einen Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast die vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und es in Ihre eigene Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden werden wir zunächst ein Beispiel durchgehen, wie imscJS verwendet wird, dann schauen wir uns ein komplexeres Beispiel an, das tatsächlich Untertitel zeitgerecht auf einem Video darstellt. Sie finden den Quellcode des [ersten Beispiels auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbetten von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js"></script>
```

Sobald die imscJS-Bibliothek geladen ist, kann sie in drei verschiedenen Schritten verwendet werden, um ein IMSC-Dokument darzustellen, die in den unten stehenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zuerst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc` in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal für jedes IMSC-Dokument erfolgen. Das `doc`-Objekt verfügt über eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitversätzen (in Sekunden) zurückgibt, die anzeigen, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erzeugen eines IMSC-Schnappschusses

Im zweiten Schritt wird ein Schnappschuss des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mit `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, ist es aber normalerweise. Im obigen Beispiel wird der Schnappschuss zum zweiten Zeitpunkt erstellt, an dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Versatz einen Schnappschuss erstellen und seine Darstellung zum angegebenen Versatz planen.

## Rendierung eines IMSC-Schnappschusses

Im dritten und letzten Schritt wird ein Schnappschuss mittels `imsc.renderHTML()` in ein HTML-{{htmlelement("div")}} gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Aufbau eines IMSC-Players

Schauen wir uns ein erweitertes Beispiel an und zeigen Ihnen, wie Sie mit imscJS Untertitel auf einem eingebetteten HTML-Video rendern können. Als Beispiel verwenden wir das folgende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie finden das [HTML-Markup](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples).

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit Inline-CSS gerendert. Es repräsentiert die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitachse des zugehörigen Medienelements. Wie wir im Abschnitt [Rendierung eines IMSC-Schnappschusses](#rendierung_eines_imsc-schnappschusses) oben gesehen haben, wird das Markup mittels der Methode `renderHtml()` in ein `<div>`-Element eingefügt. Wir können dieses `<div>`-Element als Container für das HTML betrachten, das aus dem IMSC-Code generiert wurde. Später übergeben wir das entsprechende DOM-Element als Parameter an die Methode `renderHtml()`.

Der Einfachheit halber weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Textspuren verbunden sind, um bei Bedarf Ereignisse auszulösen, wann ein IMSC-Untertitel erscheinen oder verschwinden sollte. In diesem Beispiel verwenden wir ein {{htmlelement("track")}} Element, das wir im HTML-Markup deklariert haben, aber wir könnten auch eine Textspur dynamisch erstellen und zum {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist derzeit nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei zeigt. Falls nicht, nutzen sie es nicht und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Datei abrufen und sie in eine JavaScript-String einlesen. In dem Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch) API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Textspurmodus

Es gibt noch eine Nebenwirkung. Da Browser keine gültige WebVTT-Datei aus dem `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur wird auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus wirft ein Cue keine Ereignisse zu seinen Start- und Endzeiten. Da wir diese Ereignisse für die Rendierung der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur auf `hidden`. In diesem Modus wirft der Browser die Ereignisse der Cues, rendert aber den Wert der Cues-Text-Eigenschaft nicht.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung der IMSC-Untertiteldarstellung konzentrieren.

## Generieren von "Untertitelzuständen"

Oben haben wir erklärt, dass wir IMSC-Schnappschüsse generieren müssen. Im Folgenden gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, ist der erste Schritt, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues zur Darstellung der IMSC-Untertitel verwenden. Jeder Cue hat Eigenschaften, die seine Start- und Endzeit darstellen. Die Browser-Engine wirft Ereignisse, immer wenn die Zeitachse der Medien die Start- und Endzeit eines Cues erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das durch imscJS generierte HTML zu rendern und es bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten der Cues ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin` und `end` Attributen verwenden. Dies würde perfekt zur Cue-Schnittstelle mit ihren `start` und `end` Eigenschaften passen.

Aber nehmen Sie folgendes IMSC-Code-Beispiel:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies bei Live-Untertiteln eine gängige Praxis.

Was geschieht, ist Folgendes:

- In der ersten Sekunde gibt es keinen Untertitel.
- In der zweiten Sekunde muss der Text "Hello" erscheinen.
- In der dritten Sekunde muss der Text "Hello" immer noch "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Cues: einen, der von der zweiten bis zur dritten Sekunde den Text "Hello" darstellt, und den anderen, der von der dritten bis zur vierten Sekunde den Text "Hello world!" darstellt.

Aber dies ist ein vereinfachtes einfaches Szenario. Stellen Sie sich vor, dass Sie 5 weitere Wörter hinzufügen. Sie könnten alle dieselbe Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z. B. einen anderen Sprecher darstellend). Dieser Untertitel wird parallel zum anderen Untertitel angezeigt, aber die akkumulierenden Wörter könnten unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS recht einfach zu handhaben, da IMSC einen Mechanismus zur zustandslosen Untertitel-Rendierung hat.

Schauen wir uns genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir IMSC-Untertitel als eine Rendierschicht betrachten, die über das Video gelegt wird. Zu jedem Zeitpunkt auf der Medientimeline hat die Rendierschicht einen spezifischen Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "intermediate synchronous document format", das darstellt, was letztlich in dieser Schicht gerendert wird. Jedes Mal, wenn sich die Rendierung ändern muss, wird eine neue Darstellung erstellt. Was erstellt wird, wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD hat keine Abhängigkeit von den ISDs, die davor oder danach kommen. Es ist völlig zustandslos und hat alle Informationen, die zum Rendern des Untertitels benötigt werden.

Also, wie können wir die Zeiten herausfinden, wann sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitevent entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Dies haben wir kurz im Abschnitt [Erzeugen eines IMSC-Schnappschusses](#erzeugen_eines_imsc-schnappschusses) erklärt. Für das ISD in der dritten Sekunde müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Textspur-Cues

Mit zwei Methoden können wir nun alle notwendigen Zustände der IMSC-Rendierschicht generieren. Wir tun dies wie folgt:

- Iterieren über das Array, das wir von `getMediaEvents()` zurückbekommen
- Für jedes Zeitevent:
  - Erstellen eines entsprechenden Cues.
  - Verwendung eines `onenter`-Events zum Rendern des ISD.
  - Verwendung eines `onexit`-Events zum Entfernen der Rendierschicht.

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

Während wir durch die `timeEvents` iterieren, können wir den Wert des Zeitevents als Startzeit des Cues nehmen. Wir können dann den Wert des nächsten Zeitevents als Endzeit des Cues verwenden, da dies anzeigt, dass sich die Rendierschicht ändern muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Cues derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie also einen Cue mit allen WebVTT-Eigenschaften einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig zu bedenken, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitevents berechnen? Es hat kein "nächstes" Zeitevent, von dem wir die Endzeit nehmen könnten.

Wenn kein weiteres Zeitevent vorhanden ist, bedeutet dies tatsächlich, dass die Rendierschicht bis zum Ende der Spielzeit der Medien aktiv ist. Wir können also die Endzeit auf die Dauer des zugehörigen Audios setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruieren, können wir die Funktion registrieren, die beim "Betreten" des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir erzeugen das mit dem Cue verbundene ISD und verwenden dann die imscJS-Methode `renderHTML()`, um das entsprechende HTML im "Rendiercontainer" zu rendern.

Um sicherzustellen, dass keine verbleibende Untertitel-Schicht vorhanden ist, entfernen wir zuerst diese Schicht, falls eine vorhanden ist. Dafür definieren wir eine Funktion, die wir später wiederverwenden können, wenn das Cue endet:

```js
function clearSubFromScreen() {
  const subtitleActive = renderDiv.getElementsByTagName("div")[0];
  if (subtitleActive) {
    renderDiv.removeChild(subtitleActive);
  }
}
```

Wir rufen diese Funktion erneut auf, sobald das `onexit`-Event des Cues ausgelöst wird:

```js
myCue.onexit = function () {
  clearSubFromScreen();
};
```

Am Ende müssen wir nur noch das generierte Cue zur Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung nativer Videoplayer-Steuerelemente

Normalerweise möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Zumindest sollten sie in der Lage sein, das Video abzuspielen, zu pausieren und zu spulen. Die einfachste Methode wäre, die nativen Video-Steuerelemente des Webbrowsers zu verwenden, nicht wahr? Ja, das stimmt, wenn Sie keine zusätzlichen Funktionen wünschen.

Natürliche Videoplayer-Steuerelemente sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige ihrer eigenen erzeugen, haben Sie als Webentwickler keinen direkten Zugriff auf sie.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Der IMSC HTML-Overlay deckt das gesamte Video ab. Es liegt über dem `<video>`-Element. Obwohl Sie die Player-Steuerelemente sehen können (weil der größte Teil des Overlays einen transparenten Hintergrund hat), werden Zeigereignisse wie Mausklicks nicht an die Steuerelemente weitergeleitet. Da sie nicht mit Standard-CSS zugänglich sind, können Sie auch nicht den z-Index der Steuerelemente ändern, um dieses Problem zu lösen. Wenn Sie also immer ein Untertitel-Overlay haben, können Sie das Video nicht stoppen, sobald es gestartet wurde. Dies würde eine sehr schlechte Benutzererfahrung ergeben.
2. Normalerweise haben die nativen Videoplayer-Steuerelemente eine Untertitel-Benutzeroberfläche. Sie können eine Textspur auswählen oder die Darstellung von Untertiteln ausschalten. Leider steuert die Untertitel-Benutzeroberfläche nur die Wiedergabe von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, sodass diese Steuerelemente keinen Effekt haben.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigereignisse "durch" das Overlay hindurchgehen (siehe [Referenzdokumentation für Zeigereignisse](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertitel-Benutzeroberfläche ist etwas schwieriger zu lösen. Obwohl wir Ereignisse abhören können, wird durch das Aktivieren einer Spur mit der Untertitel-Benutzeroberfläche auch die Darstellung der entsprechenden WebVTT aktiviert. Da wir VTTCues für die IMSC-Rendierung verwenden, kann dies unerwünschtes Präsentationsverhalten verursachen. Die Texteigenschaft des VTTCue hat immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung ist, eigene benutzerdefinierte Steuerelemente zu erstellen. Erfahren Sie, wie in unserem [Custom Video Player Leitfaden](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Zeitsteuerung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videozeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
