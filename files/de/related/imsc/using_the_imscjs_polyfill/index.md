---
title: Verwendung des imscJS Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gewartet wird und nahezu alle IMSC-Funktionen abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und in Ihre eigene Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden gehen wir zunächst durch ein einfaches Beispiel, wie imscJS verwendet wird, und dann schauen wir uns ein komplexeres Beispiel an, das Untertitel zur geeigneten Zeit oberhalb von Videos rendert. Sie finden den Quellcode des [ersten Beispiels auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbindung von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbinden:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js">
```

Sobald die imscJS-Bibliothek geladen ist, kann sie in drei unterschiedlichen Schritten verwendet werden, die in den folgenden Abschnitten erläutert werden.

## Parsen des IMSC-Dokuments

Zunächst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc` in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss für jedes IMSC-Dokument nur einmal durchgeführt werden. Das `doc` Objekt verfügt über eine einzelne Methode, `getMediaTimeEvents()`, die ein Array von Zeitversätzen (in Sekunden) zurückgibt, die anzeigen, wo sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Generieren eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mit `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, ist es jedoch häufig. Im obigen Beispiel wird der Snapshot zum zweiten Zeitpunkt erstellt, an dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung, vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Versatz, einen Snapshot erstellen und dessen Präsentation zu dem angegebenen Versatz planen.

## Rendering eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot in ein HTML {{htmlelement("div")}} unter Verwendung von `imsc.renderHTML()` gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Aufbau eines IMSC-Players

Betrachten wir ein ausführlicheres Beispiel, in dem gezeigt wird, wie Untertitel mit imscJS auf einem eingebetteten HTML-Video dargestellt werden können. Als Beispiel verwenden wir das unten stehende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie finden das [HTML-Markup](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples).

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit eingebettetem CSS gerendert. Es repräsentiert die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitachse des zugehörigen Medienelements. Wie wir im Abschnitt [Rendering eines IMSC-Snapshots](#rendering_eines_imsc-snapshots) oben gesehen haben, wird das Markup in ein `<div>`-Element mithilfe der `renderHtml()`-Methode eingefügt. Wir können dieses `<div>`-Element als Container für das aus IMSC-Code generierte HTML betrachten. Später übergeben wir das entsprechende DOM-Element als Parameter an die `renderHtml()`-Methode.

Der Einfachheit halber weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Textspuren verbunden sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel erscheinen oder verschwinden soll. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Code deklariert haben, aber wir könnten auch eine Textspur unterwegs erstellen und sie dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser wird das Dokument nicht automatisch für uns abrufen. In den meisten Browsern ist derzeit nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei zeigt. Wenn dies nicht der Fall ist, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut verweist. Wir verwenden das `src`-Attribut daher einfach, um die URL der IMSC-Datei zu speichern. Wir müssen selbst die Arbeit machen, die Datei abzurufen und sie in eine JavaScript-Zeichenkette einzulesen. Im Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch) API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Textspurenmodus

Es gibt noch einen Nebeneffekt. Da Browser keine gültige WebVTT-Datei aus dem `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur ist auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus wirft ein Cue keine Ereignisse zu seinen Start- und Endzeiten. Da wir diese Ereignisse für die Darstellung der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur auf `hidden`. In diesem Modus wirft der Browser die Ereignisse der Cues, wird jedoch nicht den Wert der Cue-Text-Eigenschaft rendern.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung der IMSC-Untertitel-Darstellung konzentrieren.

## Generierung von "Untertitelzuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots generieren müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, besteht der erste Schritt darin, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues verwenden, um die IMSC-Untertitel darzustellen. Jeder Cue hat Eigenschaften, die seine Start- und Endzeit darstellen. Die Browser-Engine löst Ereignisse aus, wann immer die Zeitachse der Medien die Start- und Endzeit eines Cues erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das von imscJS erzeugte HTML darzustellen und es bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Cues ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt mit der Cue-Schnittstelle mit ihren `start`- und `end`-Eigenschaften übereinstimmen.

Aber nehmen Sie folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies eine gängige Praxis für Live-Untertitelung.

Was passiert, ist Folgendes:

- In Sekunde 0 gibt es keinen Untertitel.
- In Sekunde 1 muss der Text "Hello" erscheinen.
- In Sekunde 2 muss der Text "Hello" noch "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Cues: einen, der den Text "Hello" von Sekunde 1-2 darstellt, und einen anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber dies ist ein vereinfachtes einfaches Szenario. Stellen Sie sich vor, dass Sie weitere 5 Wörter akkumulieren. Sie könnten alle die gleiche Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, dass Sie einen Untertitel an einem anderen Ort haben (z. B. einen anderen Sprecher darstellend). Dieser Untertitel wird parallel zu den anderen Untertiteln angezeigt, aber die akkumulierten Wörter könnten unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS ziemlich einfach abzudecken, da IMSC einen Mechanismus für statusloses Rendering von Untertiteln hat.

Schauen wir uns genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir uns IMSC-Untertitel als eine Darstellungsschicht vorstellen, die über das Video gelegt wird. Zu jedem Zeitpunkt auf der Medienzeitachse hat die Darstellungsschicht einen bestimmten Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "Intermediate Synchronous Document Format", das darstellt, was letztlich in dieser Schicht gerendert wird. Jedes Mal, wenn sich die Darstellung ändern muss, wird eine neue Darstellung erstellt. Was erstellt wird, wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD hat keine Abhängigkeit von den ISD's davor oder danach. Es ist vollständig statuslos und enthält alle Informationen, die benötigt werden, um den Untertitel zu rendern.

Wie können wir also die Zeiten erhalten, wann sich das ISD ändert?

Das ist einfach: Wir rufen einfach die `getMediaTimeEvents()` Methode auf dem imscJS-Dokument-Objekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz in [Generieren eines IMSC-Snapshots](#generieren_eines_imsc-snapshots) erklärt. Für das ISD an Sekunde 2 müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Textspuren-Cues

Mit zwei Methoden können wir jetzt alle erforderlichen Zustände der IMSC-Darstellungsschicht generieren. Wir tun dies wie folgt:

- Iteriere über das Array, das wir von `getMediaEvents()` zurückbekommen
- Für jedes Zeitereignis:

  - Erzeuge ein entsprechendes Cue.
  - Verwende ein `onenter`-Ereignis, um das ISD zu rendern.
  - Verwende ein `onexit`-Ereignis, um die Darstellungsschicht wieder zu entfernen.

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

Während wir durch die `timeEvents` schleifen, können wir den Wert des Zeitereignisses als Startzeit des Cues nehmen. Wir können dann den Wert des nächsten Zeitereignisses als Endzeit des Cues verwenden, da dies anzeigt, dass die Darstellungsschicht geändert werden muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspuren-Cues derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie also ein Cue mit allen WebVTT-Eigenschaften einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig zu wissen, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es gibt kein "nächstes" Zeitereignis, von dem wir die Endzeit entnehmen könnten.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Darstellungsschicht bis zum Ende der Wiedergabezeit des Mediums aktiv ist. Wir können also die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruiert haben, können wir die Funktion registrieren, die "bei Eingabe" des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir generieren das ISD, das mit dem Cue verbunden ist, und verwenden dann die imscJS-Methode `renderHTML()`, um das entsprechende HTML im "Rendering-Container" zu rendern.

Um sicherzugehen, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir zunächst die Untertitelschicht, falls diese vorhanden ist. Dafür definieren wir eine Funktion, die wir später erneut verwenden können, wenn das Cue endet:

```js
function clearSubFromScreen() {
  const subtitleActive = renderDiv.getElementsByTagName("div")[0];
  if (subtitleActive) {
    renderDiv.removeChild(subtitleActive);
  }
}
```

Wir rufen diese Funktion erneut auf, wenn das `onexit`-Ereignis des Cues ausgelöst wird:

```js
myCue.onexit = function () {
  clearSubFromScreen();
};
```

Am Ende müssen wir nur das generierte Cue an die Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung von nativen Videoplayer-Steuerungen

In der Regel möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Mindestens sollten sie in der Lage sein, abzuspielen, zu pausieren und zu suchen. Der einfachste Weg wäre, die nativen Videosteuerungen des Web-Browsers zu verwenden, oder? Ja, das ist richtig, wenn Sie keine zusätzlichen Funktionen wünschen.

Die Steuerungen des nativen Videoplayers sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige ihrer eigenen erzeugen, haben Sie als Webentwickler keinen direkten Zugriff auf sie.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Die IMSC-HTML-Überlagerung bedeckt das gesamte Video. Sie liegt über dem `<video>`-Element. Obwohl Sie die Steuerungen sehen können (weil der größte Teil der Überlagerung einen transparenten Hintergrund hat), dringen Zeigerereignisse wie Mausklicks nicht zu den Steuerungen durch. Da sie nicht mit standardmäßigem CSS zugänglich sind, können Sie auch nicht den z-index der Steuerungen ändern, um dieses Problem zu lösen. Wenn Sie immer eine Untertitelschicht-Überlagerung haben, können Sie das Video nicht anhalten, sobald es gestartet wurde. Dies wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videoplayer-Steuerungen eine Schnittstelle für Untertitel. Sie können eine Textspur auswählen oder die Darstellung von Untertiteln ausschalten. Leider steuert die Untertitelschnittstelle nur die Darstellung von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, also haben diese Steuerungen keine Auswirkungen.

Für das erste Problem gibt es eine unkomplizierte CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (sehen Sie sich das [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS an).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigerereignisse "durch" die Überlagerung dringen (siehe [Referenzdokumentation für Zeigereignisse](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertitelschnittstelle ist etwas schwieriger zu lösen. Obwohl wir Ereignisse abhören können, führt das Aktivieren einer Spur über die Untertitelschnittstelle auch zur Aktivierung der Wiedergabe der entsprechenden WebVTT. Da wir VTTCues für die IMSC-Darstellung verwenden, kann dies ein unerwünschtes Präsentationsverhalten verursachen. Die Texteigenschaft des VTTCue hat immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung ist, Ihre eigenen benutzerdefinierten Steuerungen zu erstellen. Erfahren Sie in unserem [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) Tutorial, wie das geht.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Zeitsteuerung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videocodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
