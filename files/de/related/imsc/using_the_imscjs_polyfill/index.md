---
title: Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

Aktuell benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und eine nahezu vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und es in Ihre eigene Website integrieren können.

## Vorstellung von imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden gehen wir zunächst ein Beispiel für die Verwendung von imscJS durch und betrachten dann ein komplexeres Beispiel, das tatsächlich Untertitel über ein Video zu passenden Zeiten anzeigt. Den Quellcode des [ersten Beispiels finden Sie auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbetten von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js">
```

Sobald die imscJS-Bibliothek geladen ist, kann sie verwendet werden, um ein IMSC-Dokument in drei verschiedenen Schritten darzustellen, die in den folgenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zunächst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc` in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal für jedes IMSC-Dokument erfolgen. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitoffsets (in Sekunden) zurückgibt, das angibt, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erstellen eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mit `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der Werte sein, die von `getMediaTimeEvents()` zurückgegeben werden, aber er ist es in der Regel. Im obigen Beispiel wird der Snapshot zu dem zweiten Zeitpunkt erstellt, an dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung, vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Offset, einen Snapshot erstellen und seine Präsentation zum angegebenen Offset planen.

## Rendern eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot in ein HTML-`<div>` mittels `imsc.renderHTML()` gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Erstellen eines IMSC-Players

Lassen Sie uns ein umfassenderes Beispiel betrachten und zeigen, wie man mit imscJS Untertitel in einem eingebetteten HTML-Video rendern kann. Als Beispiel verwenden wir das untenstehende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie können die [HTML-Markup](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples) finden.

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit integriertem CSS gerendert. Er stellt die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitleiste des zugehörigen Medienobjekts dar. Wie wir im Abschnitt [Rendern eines IMSC-Snapshots](#rendern_eines_imsc-snapshots) oben gesehen haben, wird das Markup in ein `<div>`-Element mit der `renderHtml()`-Methode eingefügt. Wir können dieses `<div>`-Element als Container für das HTML betrachten, das aus dem IMSC-Code generiert wurde. Später übergeben wir das entsprechende DOM-Element als Parameter an die `renderHtml()`-Methode.

Zur Bequemlichkeit weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Cues, die mit HTML-Text-Tracks verknüpft sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel erscheinen oder verschwinden soll. In diesem Beispiel verwenden wir ein `<track>`-Element, das wir im HTML-Markup deklariert haben, aber wir könnten auch einen Text-Track "on the fly" erstellen und ihn dem `<video>` hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser wird das Dokument nicht automatisch für uns abrufen. In den meisten Browsern ist momentan nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei verweist. Wenn dies nicht der Fall ist, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit leisten, die Datei abzurufen und sie in einen JavaScript-String einzulesen. Im Beispiel verwenden wir dazu die [`fetch()`](/de/docs/Web/API/Window/fetch)-API:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Texttrack-Modus

Es gibt noch einen Nebeneffekt. Da Browser keine gültige WebVTT-Datei aus dem `src`-Attribut erhalten, deaktivieren sie den Track. Die `mode`-Eigenschaft des Texttracks ist auf den Wert `disable` gesetzt.

Aber das ist nicht, was wir wollen. Im deaktivierten Modus löst ein Cue keine Ereignisse zu seinen Start- und Endzeiten aus. Da wir diese Ereignisse zur Darstellung der IMSC-Untertitel benötigen, ändern wir den Modus des Texttracks auf `hidden`. In diesem Modus löst der Browser zwar die Ereignisse der Cues aus, rendert aber nicht den Wert der Cue-Text-Eigenschaft.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns darauf konzentrieren, die Darstellung der IMSC-Untertitel zu implementieren.

## Erzeugen von "Untertitel-Zuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots erzeugen müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum das notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, ist der erste Schritt, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Cues verwenden, um die IMSC-Untertitel darzustellen. Jeder Cue hat Eigenschaften, die seine Startzeit und Endzeit darstellen. Die Browser-Engine feuert Ereignisse ab, wann immer die Zeitleiste des Mediums die Start- und Endzeit eines Cues erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das mit imscJS generierte HTML darzustellen und es bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Cues ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt zur Cue-Schnittstelle mit ihren `start`- und `end`-Eigenschaften passen.

Aber nehmen Sie den folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "kumulativen" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies eine übliche Praxis für die Live-Untertitelung.

Was geschieht ist Folgendes:

- In Sekunde 0 gibt es keinen Untertitel.
- In Sekunde 1 muss der Text "Hello" erscheinen.
- In Sekunde 2 muss der Text "Hello" immer noch "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Cues: einen, der den Text "Hello" von Sekunde 1-2 darstellt, und einen anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber dies ist ein einfaches Szenario. Stellen Sie sich vor, Sie haben 5 weitere Worte, die sich ansammeln. Sie könnten alle die gleiche Endzeit, aber verschiedene Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z.B. einen anderen Sprecher darstellend). Dieser Untertitel wird parallel zu dem anderen Untertitel gezeigt, aber die sich ansammelnden Wörter könnten unterschiedliche Startzeiten und daher verschiedene Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS ziemlich einfach zu bewältigen, da IMSC einen Mechanismus zum zustandslosen Rendering von Untertiteln hat.

Schauen wir uns genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir sich IMSC-Untertitel als eine Render-Schicht vorstellen, die über das Video gelegt wird. Jederzeit auf der Medien-Zeitleiste hat die Render-Schicht einen spezifischen Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "Intermediate Synchronous Document Format", welches das darstellt, was letztendlich in dieser Schicht gerendert wird. Jedes Mal wenn das Rendering geändert werden muss, wird eine neue Darstellung erzeugt. Was erzeugt wird, wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD hat keine Abhängigkeit zu vorangehenden oder nachfolgenden ISDs. Es ist vollkommen zustandslos und enthält alle Informationen, die zum Rendering des Untertitels benötigt werden.

Wie können wir nun die Zeiten erhalten, zu denen sich das ISD ändert?

Das ist einfach: Wir rufen einfach die `getMediaTimeEvents()`-Methode auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz in [Erstellen eines IMSC-Snapshots](#erstellen_eines_imsc-snapshots) erklärt. Also müssen wir für das ISD bei Sekunde 2 Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Text-Track-Cues

Mit zwei Methoden können wir nun alle erforderlichen Zustände der IMSC-Rendering-Schicht erzeugen. Wir tun dies wie folgt:

- Iterieren über das Array, das wir von `getMediaEvents()` zurückbekommen.
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

Schauen wir uns das genauer an.

Während wir die `timeEvents` durchlaufen, können wir den Wert des Zeitereignisses als Startzeit des Cues nehmen. Wir können dann den Wert des nächsten Zeitereignisses als Endzeit des Cues verwenden, da dies anzeigt, dass sich die Rendering-Schicht ändern muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Text-Track-Cues derzeit nur für das WebVTT-Format implementiert. Daher erstellen Sie normalerweise einen Cue mit allen WebVTT-Eigenschaften, einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften niemals, aber es ist wichtig, sich daran zu erinnern, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als drittes Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es gibt kein "nächstes" Zeitereignis, von dem wir die Endzeit nehmen könnten.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Rendering-Schicht bis zum Ende der Wiedergabedauer des Mediums aktiv ist. Also können wir die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruiert haben, können wir die Funktion registrieren, die "beim Eintreten" des Cues aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir erzeugen die ISD, die mit dem Cue verknüpft ist, und verwenden dann die imscJS-Methode `renderHTML()`, um ihr entsprechendes HTML im "Rendering-Container" zu rendern.

Um sicherzugehen, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir zuerst die Untertitelschicht, wenn eine vorhanden ist. Dafür definieren wir eine Funktion, die wir später beim Ende des Cues wiederverwenden können:

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

Am Ende müssen wir nur noch den erstellten Cue zum Text-Track hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung nativer Video-Steuerelemente

In der Regel möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Mindestens sollten sie in der Lage sein, abzuspielen, zu pausieren und zu spulen. Die einfachste Methode wäre, die nativen Videosteuerungen des Webbrowsers zu verwenden, nicht wahr? Ja, das stimmt, wenn Sie keine zusätzlichen Funktionen wünschen.

Native Video-Steuerungen sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige ihrer eigenen generieren, haben Sie als Webentwickler keinen direkten Zugriff auf sie.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Die IMSC HTML-Overlay deckt das gesamte Video ab. Es sitzt über dem `<video>`-Element. Obwohl Sie die Player-Steuerelemente sehen können (weil der Großteil des Overlays einen transparenten Hintergrund hat), kommen Zeigerereignisse wie Mausklicks nicht zu den Steuerelementen durch. Da sie nicht durch Standard-CSS zugänglich sind, können Sie auch nicht den `z-index` der Steuerelemente ändern, um dieses Problem zu lösen. Wenn Sie also immer ein Untertitel-Overlay haben, können Sie das Video nicht mehr stoppen, sobald es gestartet wurde. Dies wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videosteuerungen eine Untertitel-Benutzeroberfläche. Sie können einen Texttrack auswählen oder die Darstellung von Untertiteln ausschalten. Leider steuert die Untertitel-Benutzeroberfläche nur die Darstellung von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, sodass diese Steuerelemente keine Wirkung haben.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das komplette CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigerereignisse "durch" das Overlay gehen (siehe [Referenzdokumentation für Zeigerereignisse](/de/docs/Web/CSS/pointer-events) für weitere Details).

Das Problem mit der Untertitel-Benutzeroberfläche ist etwas schwieriger zu lösen. Obwohl wir auf Ereignisse hören können, aktiviert die Aktivierung eines Tracks über die Untertitel-Benutzeroberfläche auch die Darstellung der entsprechenden WebVTT. Da wir VTTCues für das IMSC-Rendering verwenden, kann dies zu einem unerwünschten Präsentationsverhalten führen. Der Text der VTTCue hat immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zu Rendering-Artefakten führen.

Die beste Lösung ist, Ihre eigenen benutzerdefinierten Steuerelemente zu erstellen. Finden Sie heraus, wie das in unserem [Anleitung zum Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) funktioniert.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">Grundlagen von IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videocodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
