---
title: Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web anzuzeigen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast die gesamte Bandbreite der IMSC-Funktionen abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und in Ihre eigene Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden gehen wir zunächst ein Beispiel durch, wie imscJS verwendet wird, und betrachten dann ein komplexeres Beispiel, das tatsächlich Untertitel zu geeigneten Zeiten über einem Video rendert. Den Quellcode des [ersten Beispiels finden Sie auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbindung von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbinden:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js"></script>
```

Sobald die imscJS-Bibliothek geladen ist, kann sie in drei verschiedenen Schritten verwendet werden, um ein IMSC-Dokument zu rendern, die in den folgenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zunächst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc` in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal für jedes IMSC-Dokument durchgeführt werden. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitoffsets (in Sekunden) zurückgibt, die anzeigen, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erzeugung eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mit `imsc.generateISD()` erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, ist es aber normalerweise. Im obigen Beispiel wird der Snapshot am zweiten Zeitpunkt erstellt, an dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung vor der Medienwiedergabe und für jeden von `getMediaTimeEvents()` zurückgegebenen Offset einen Snapshot erstellen und dessen Präsentation zu dem angegebenen Offset planen.

## Rendern eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot in ein HTML-{{htmlelement("div")}} unter Verwendung von `imsc.renderHTML()` gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Aufbau eines IMSC-Players

Schauen wir uns ein erweitertes Beispiel an und zeigen Ihnen, wie Untertitel mit imscJS auf einem eingebetteten HTML-Video gerendert werden können. Als Beispiel verwenden wir das folgende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Den [HTML-Code](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) finden Sie im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples).

## Zugang zum DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit inline CSS gerendert. Es repräsentiert die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitachse des zugehörigen Medienelements. Wie wir im Abschnitt [Rendern eines IMSC-Snapshots](#rendern_eines_imsc-snapshots) oben gesehen haben, wird das Markup mithilfe der `renderHtml()`-Methode in ein `<div>`-Element eingefügt. Wir können dieses `<div>`-Element als Container für das aus IMSC-Code generierte HTML betrachten. Später übergeben wir das entsprechende DOM-Element als Parameter an die `renderHtml()`-Methode.

Aus Bequemlichkeit weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Hinweise, die mit HTML-Textspuren verbunden sind, um Ereignisse auszulösen, wenn ein IMSC-Untertitel erscheinen oder verschwinden soll. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben, aber wir könnten auch eine Textspur im Flug erstellen und sie dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser wird das Dokument nicht automatisch für uns abrufen. In den meisten Browsern ist momentan nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei verweist. Wenn dies nicht der Fall ist, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut daher nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit leisten, die Datei abzurufen und in einen JavaScript-String zu lesen. Im Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Textspurenmodus

Es gibt einen weiteren Nebeneffekt. Da die Browser keine gültige WebVTT-Datei vom `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur wird auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus löst ein Hinweis keine Ereignisse zu seinen Start- und Endzeiten aus. Da wir diese Ereignisse zum Rendern der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur in `hidden`. In diesem Modus löst der Browser die Ereignisse der Hinweise aus, wird jedoch den Wert der Hinweistext-Eigenschaft nicht rendern.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung des Renderns der IMSC-Untertitel konzentrieren.

## Erzeugen von "Untertitelzuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots erzeugen müssen. Im folgenden Abschnitt gehen wir etwas näher darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, besteht der erste Schritt darin, das IMSC-Dokument in ein imscJS-Objekt zu parsen.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Hinweise verwenden, um die IMSC-Untertitel zu rendern. Jeder Hinweis hat Eigenschaften, die seine Start- und Endzeit darstellen. Die Browser-Engine löst Ereignisse aus, wann immer die Zeitachse des Mediums die Start- und Endzeit eines Hinweises erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das von imscJS generierte HTML zu rendern und es bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Hinweisen ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt zur Schnittstelle der Hinweise mit ihren `start`- und `end`-Eigenschaften passen.

Aber betrachten Sie den folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies eine übliche Praxis für die Live-Untertitelung.

Folgendes passiert:

- In Sekunde 0 gibt es keinen Untertitel.
- In Sekunde 1 muss der Text "Hello" erscheinen.
- In Sekunde 2 muss der Text "Hello" weiterhin "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also gibt es von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Hinweise: einen, der den Text "Hello" von Sekunde 1-2 darstellt, und den anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber dies ist ein vereinfachtes einfaches Szenario. Stellen Sie sich vor, Sie haben 5 weitere Wörter, die sich ansammeln. Sie können alle dieselbe Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z.B. der einen anderen Sprecher darstellt). Dieser Untertitel wird parallel zum anderen Untertitel angezeigt, aber die sich ansammelnden Wörter können unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS ziemlich einfach abzudecken, da IMSC einen Mechanismus für zustandsloses Untertitel-Rendering hat.

Schauen wir uns genauer an, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir IMSC-Untertitel als eine Rendering-Schicht betrachten, die über dem Video liegt. Zu jedem Zeitpunkt auf der Medienzeitachse hat die Rendering-Schicht einen bestimmten Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "Intermediate Synchronous Document Format", das darstellt, was schließlich in dieser Schicht gerendert wird. Jedes Mal, wenn sich das Rendering ändern muss, wird eine neue Darstellung erstellt. Was erstellt wird, wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD hat keine Abhängigkeit von den ISDs, die davor oder danach kommen. Es ist völlig zustandslos und enthält alle Informationen, die notwendig sind, um den Untertitel zu rendern.

Wie können wir also die Zeiten herausfinden, zu denen sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumenten-Objekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz im Abschnitt [Erzeugen eines IMSC-Snapshots](#erzeugung_eines_imsc-snapshots) erklärt. Für das ISD bei Sekunde 2 müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Textspur-Hinweisen

Mit zwei Methoden können wir jetzt alle notwendigen Zustände der IMSC-Rendering-Schicht erzeugen. Dies tun wir wie folgt:

- Iterieren Sie über das Array, das wir von `getMediaEvents()` zurückbekommen
- Für jedes Zeitereignis:
  - Erstellen Sie einen entsprechenden Hinweis.
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

Schauen wir uns das genauer an.

Während wir durch die `timeEvents`-Schleife iterieren, können wir den Wert des Zeitereignisses als Startzeit des Hinweises nehmen. Wir können dann den Wert des nächsten Zeitereignisses für die Endzeit des Hinweises verwenden, da dies anzeigt, dass sich die Rendering-Schicht ändern muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Hinweise derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie also einen Hinweis mit allen WebVTT-Eigenschaften einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig, sich daran zu erinnern, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es hat kein "nächstes" Zeitereignis, von dem wir die Endzeit nehmen können.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Rendering-Schicht bis zum Ende der Spielzeit des Mediums aktiv ist. Wir können die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruieren, können wir die Funktion registrieren, die "beim Eingang" des Hinweises aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir erzeugen das ISD, das mit dem Hinweis verbunden ist, und verwenden dann die imscJS-Methode `renderHTML()`, um das entsprechende HTML im "Rendering-Container" zu rendern.

Um sicherzugehen, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir zuerst die Untertitelschicht, falls eine vorhanden ist. Dazu definieren wir eine Funktion, die wir später beim Ende des Hinweises erneut verwenden können:

```js
function clearSubFromScreen() {
  const subtitleActive = renderDiv.getElementsByTagName("div")[0];
  if (subtitleActive) {
    renderDiv.removeChild(subtitleActive);
  }
}
```

Wir rufen diese Funktion erneut auf, sobald das `onexit`-Ereignis des Hinweises ausgelöst wird:

```js
myCue.onexit = function () {
  clearSubFromScreen();
};
```

Am Ende müssen wir nur den generierten Hinweis der Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung nativer Videoplayer-Steuerungen

Normalerweise möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Zumindest sollten sie in der Lage sein, abzuspielen, zu pausieren und zu suchen. Die einfachste Methode wäre es, die nativen Videosteuerungen des Webbrowsers zu verwenden, oder? Ja, das ist wahr, wenn Sie keine zusätzlichen Funktionen wünschen.

Native Videoplayer-Steuerungen sind Teil des Browsers und nicht des HTML-Codes. Obwohl sie auf DOM-Ereignisse reagieren und einige ihrer eigenen generieren, haben Sie als Webentwickler keinen direkten Zugriff darauf.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Das IMSC-HTML-Overlay überdeckt das gesamte Video. Es liegt über dem `<video>`-Element. Obwohl Sie die Player-Steuerungen sehen können (weil der Großteil des Overlays einen transparenten Hintergrund hat), kommen Zeigerereignisse wie Mausklicks nicht zu den Steuerungen durch. Da sie nicht mit Standard-CSS zugänglich sind, können Sie den z-index der Steuerungen auch nicht ändern, um dieses Problem zu lösen. Wenn Sie also immer ein Untertiteldisplay haben, können Sie das Video nicht stoppen, sobald es gestartet wurde. Dies wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videoplayer-Steuerungen eine Benutzeroberfläche für Untertitel. Sie können eine Textspur auswählen oder das Rendern von Untertiteln deaktivieren. Leider steuert die Untertitelschnittstelle nur das Rendern von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, sodass diese Steuerungen keine Wirkung haben.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (sehen Sie sich den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS an).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigerereignisse "durch" das Overlay gehen (siehe [Referenzdokumentation für Zeigerereignisse](/de/docs/Web/CSS/Reference/Properties/pointer-events) für weitere Details).

Das Problem mit der Untertitelschnittstelle ist etwas schwieriger zu lösen. Obwohl wir Ereignisse mithören können, führt die Aktivierung einer Spur über die Untertitelschnittstelle auch zur Aktivierung des entsprechenden WebVTT-Renderings. Da wir VTTCues für das IMSC-Rendering verwenden, kann dies zu unerwünschtem Präsentationsverhalten führen. Die Texteigenschaft des VTTCue hat immer den leeren String als Wert, aber in einigen Browsern kann dies trotzdem zur Darstellung von Artefakten führen.

Die beste Lösung ist, Ihre eigenen benutzerdefinierten Steuerungen zu erstellen. Finden Sie heraus, wie das geht, in unserem [Anleitung zur Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).
