---
title: Verwendung des imscJS-Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Im Moment benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast alle IMSC-Funktionen abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und in Ihre eigene Webseite integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Unten werden wir zunächst ein einfaches Beispiel dafür durchgehen, wie man imscJS verwendet, dann schauen wir uns ein komplexeres Beispiel an, das Untertitel zeitlich passend über einem Video anzeigt. Sie können den Quellcode des [ersten Beispiels auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html) finden.

## Einbetten von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js"></script>
```

Sobald die imscJS-Bibliothek geladen ist, kann sie in drei verschiedenen Schritten verwendet werden, um ein IMSC-Dokument darzustellen, die in den folgenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zuerst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt geparst (`doc` in unserem Fall):

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss für jedes IMSC-Dokument nur einmal erfolgen. Das `doc`-Objekt hat eine einzige Methode, `getMediaTimeEvents()`, die ein Array von Zeitversätzen (in Sekunden) zurückgibt, welche angeben, wann sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erzeugen eines IMSC-Snapshots

Im zweiten Schritt wird ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) mithilfe von `imsc.generateISD()` erzeugt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der Werte sein, die von `getMediaTimeEvents()` zurückgegeben werden, aber das ist normalerweise der Fall. Im obigen Beispiel wird der Snapshot zum zweiten Zeitpunkt erstellt, an dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung, vor der Medienwiedergabe und für jeden Versatz, der von `getMediaTimeEvents()` zurückgegeben wird, einen Snapshot erstellen und dessen Präsentation zum angegebenen Versatz planen.

## Darstellung eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot in ein HTML-{{htmlelement("div")}} mithilfe von `imsc.renderHTML()` dargestellt:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Aufbau eines IMSC-Players

Lassen Sie uns ein ausführlicheres Beispiel betrachten und zeigen, wie Sie Untertitel mit imscJS auf einem eingebetteten HTML-Video darstellen können. Als Beispiel verwenden wir das untenstehende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie können das [HTML-Markup](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repository für IMSC-Beispiele](https://github.com/mdn/imsc-examples) finden.

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit eingebettetem CSS dargestellt. Es stellt die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitachse des zugehörigen Medienelements dar. Wie wir im Abschnitt [Rendering eines IMSC-Snapshots](#darstellung_eines_imsc-snapshots) oben gesehen haben, wird das Markup in ein `<div>`-Element eingefügt, indem die Methode `renderHtml()` verwendet wird. Wir können uns dieses `<div>`-Element als einen Container für das aus dem IMSC-Code generierte HTML vorstellen. Später übergeben wir das entsprechende DOM-Element als einen Parameter an die `renderHtml()`-Methode.

Aus Bequemlichkeit weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Hinweise, die mit HTML-Textspuren verknüpft sind, um Ereignisse auszulösen, wann immer ein IMSC-Untertitel erscheinen oder verschwinden soll. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben, wir könnten aber auch eine Textspur dynamisch erstellen und sie dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist im Moment nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei zeigt. Wenn dies nicht der Fall ist, verwenden sie es nicht, und wir haben auch keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Wir verwenden das `src`-Attribut also nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit selbst erledigen, um die Datei abzurufen und sie in einen JavaScript-String einzulesen. Im Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellung des Textspurmodus

Es gibt noch eine weitere Nebenwirkung. Da die Browser keine gültige WebVTT-Datei vom `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur ist auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. In deaktiviertem Modus löst ein Hinweis bei seinen Start- und Endzeiten keine Ereignisse aus. Da wir diese Ereignisse benötigen, um die IMSC-Untertitel darzustellen, ändern wir den Modus der Textspur auf `hidden`. In diesem Modus löst der Browser die Ereignisse der Hinweise aus, stellt aber den Wert der Texteigenschaft des Hinweises nicht dar.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung der Darstellung der IMSC-Untertitel konzentrieren.

## Erzeugen von "Untertitel-Zuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots erzeugen müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir im Abschnitt [Parsing des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, ist der erste Schritt das Parsen des IMSC-Dokuments in ein imscJS-Objekt.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Hinweise verwenden, um die IMSC-Untertitel darzustellen. Jeder Hinweis hat Eigenschaften, die seine Start- und Endzeit repräsentieren. Die Browser-Engine löst Ereignisse aus, wann immer die Zeitachse des Mediums die Start- und Endzeit eines Hinweises erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das von imscJS generierte HTML darzustellen und wieder zu entfernen, wenn es erforderlich ist.

Aber die Zuordnung der IMSC-Untertitel zu Start- und Endzeiten von Hinweisen ist nicht so einfach, wie Sie vielleicht denken. Natürlich könnten Sie einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt auf das Hinweis-Interface mit ihren `start`- und `end`-Eigenschaften abbilden.

Aber nehmen Sie den folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies gängige Praxis für Live-Untertitelung.

Folgendes passiert:

- In Sekunde 0 gibt es keinen Untertitel.
- In Sekunde 1 muss der Text "Hello" erscheinen.
- In Sekunde 2 muss der Text "Hello" weiterhin "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. So haben wir von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" darstellt.

Um dies in HTML abzubilden, benötigen wir mindestens zwei Hinweise: einen, der den Text "Hello" von Sekunde 1-2 darstellt, und den anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber dies ist ein vereinfachtes, leicht zu verstehendes Szenario. Stellen Sie sich vor, dass Sie 5 weitere Wörter akkumulieren. Sie können alle die gleiche Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z. B. um einen anderen Sprecher zu repräsentieren). Dieser Untertitel wird parallel zum anderen Untertitel angezeigt, aber die akkumulierten Wörter können unterschiedliche Startzeiten und somit unterschiedliche Intervalle haben.

Glücklicherweise ist dieses Szenario in IMSC und imscJS ziemlich einfach abzudecken, da IMSC einen Mechanismus zur zustandslosen Untertitel-Darstellung hat.

Werfen wir einen genaueren Blick darauf, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir uns IMSC-Untertitel als eine Darstellungsschicht vorstellen, die über das Video gelegt wird. Zu jedem Zeitpunkt auf der Zeitachse des Mediums hat die Darstellungsschicht einen bestimmten Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "intermediate synchronous document format", das darstellt, was letztendlich in dieser Schicht dargestellt wird. Jedes Mal, wenn sich die Darstellung ändern muss, wird eine neue Darstellung erstellt. Was erstellt wird, wird als **Intermediate Synchronous Document** oder **ISD** bezeichnet. Dieses ISD hängt nicht von den ISDs davor oder danach ab. Es ist vollständig zustandslos und enthält alle Informationen, die für die Darstellung des Untertitels benötigt werden.

Wie können wir also die Zeiten ermitteln, wann sich das ISD ändert?

Das ist einfach: Wir rufen einfach die Methode `getMediaTimeEvents()` auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsing des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitgeber-Ereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz in [Erzeugen eines IMSC-Snapshots](#erzeugen_eines_imsc-snapshots) erklärt. Also für das ISD in Sekunde 2 müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Textspur-Hinweisen

Mit den zwei Methoden können wir nun alle notwendigen Zustände der IMSC-Darstellungschicht erzeugen. Wir tun dies wie folgt:

- Iterieren Sie über das Array, das wir von `getMediaEvents()` zurückerhalten
- Für jedes Zeit-Ereignis:
  - Erstellen Sie einen entsprechenden Hinweis.
  - Verwenden Sie ein `onenter`-Ereignis, um das ISD darzustellen.
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

Betrachten wir dies etwas detaillierter.

Während wir durch die `timeEvents` schleifen, können wir den Wert des Zeitereignisses als Startzeit des Hinweises verwenden. Wir können dann den Wert des nächsten Zeitereignisses für die Endzeit des Hinweises verwenden, da dies darauf hinweist, dass sich die Darstellungsschicht ändern muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Hinweise derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie also einen Hinweis mit allen WebVTT-Eigenschaften einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig, daran zu denken, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es hat kein "nächstes" Zeitereignis, von dem wir die Endzeit entnehmen könnten.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Darstellungsschicht bis zum Ende der Wiedergabezeit des Mediums aktiv bleibt. So können wir die Endzeit auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Hinweisobjekt konstruieren, können wir die Funktion registrieren, die beim Betreten des Hinweises aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir erzeugen das ISD, das dem Hinweis zugeordnet ist, und verwenden dann die imscJS-Methode `renderHTML()`, um sein entsprechendes HTML im "Darstellungscontainer" darzustellen.

Um sicherzugehen, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir zuerst die Untertitelschicht, falls eine vorhanden ist. Dafür definieren wir eine Funktion, die wir wiederverwenden können, wenn der Hinweis endet:

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

Am Ende müssen wir den generierten Hinweis nur der Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung von nativen Video-Player-Steuerelementen

Normalerweise möchten Sie dem Benutzer einige Optionen zur Steuerung der Videowiedergabe geben. Zumindest sollten sie in der Lage sein, das Video zu spielen, zu pausieren und zu spulen. Die einfachste Methode wäre es, die nativen Videosteuerungen des Webbrowsers zu verwenden, oder? Ja, das ist richtig, wenn Sie keine zusätzlichen Funktionen wünschen.

Native Videoplayer-Steuerungen sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige eigene generieren, haben Sie als Webentwickler keinen direkten Zugriff auf sie.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Die IMSC-HTML-Überlagerung deckt das gesamte Video ab. Sie sitzt auf dem `<video>`-Element. Obwohl Sie die Player-Steuerungen sehen können (da der größte Teil der Überlagerung einen transparenten Hintergrund hat), kommen Zeigereignisse wie Mausklicks nicht bei den Steuerungen an. Da sie nicht standardmäßig per CSS zugänglich sind, können Sie den z-index der Steuerelemente nicht ändern, um dieses Problem zu lösen. Wenn Sie immer eine Untertitel-Überlagerung haben, können Sie das Video nicht stoppen, sobald es gestartet wurde. Dies wäre eine sehr schlechte Benutzererfahrung.
2. Normalerweise haben die nativen Videoplayer-Steuerungen eine Untertitel-Benutzeroberfläche. Sie können eine Textspur auswählen oder die Darstellung von Untertiteln abschalten. Leider steuert die Untertitel-Oberfläche nur die Darstellung von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS darstellen, sodass diese Steuerelemente keine Wirkung haben.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (sehen Sie sich den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS an).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat den Effekt, dass Zeigereignisse "durch" die Überlagerung gehen (siehe [Referenzdokumentation zu Zeigereignissen](/de/docs/Web/CSS/Reference/Properties/pointer-events) für weitere Details).

Das Problem mit der Untertitel-Benutzeroberfläche ist etwas schwieriger zu lösen. Obwohl wir Ereignisse abfangen können, aktiviert das Aktivieren einer Spur über die Untertitel-Benutzeroberfläche auch die Darstellung der entsprechenden WebVTT-Texte. Da wir VTTCues für die IMSC-Darstellung verwenden, kann dies zu unerwünschtem Anzeigeverhalten führen. Die Texteigenschaft des VTTCue hat immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung ist, eigene benutzerdefinierte Steuerungen zu erstellen. Erfahren Sie, wie das geht, in unserem [Leitfaden zur Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).
