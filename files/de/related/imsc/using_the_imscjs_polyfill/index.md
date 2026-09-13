---
title: Verwendung des imscJS Polyfills
slug: Related/IMSC/Using_the_imscJS_polyfill
l10n:
  sourceCommit: d28946cceb323b82879d512c0c28d5325c344a0d
---

Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast alle IMSC-Funktionen abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und es in Ihre eigene Website integrieren können.

## Einführung in imscJS

[imscJS](https://github.com/sandflow/imscJS) ist eine JavaScript-Bibliothek zur Darstellung von IMSC-Dokumenten in HTML. Im Folgenden werden wir zunächst ein einfaches Beispiel zur Verwendung von imscJS durchgehen, dann werfen wir einen Blick auf ein komplexeres Beispiel, das Untertitel korrekt zeitlich über ein Video rendert. Den Quellcode des [ersten Beispiels finden Sie auf GitHub](https://github.com/mdn/imsc-examples/blob/main/imscjs-simple-sample/imscjs-simple-sample.html).

## Einbettung von imscJS

Zuerst müssen Sie die imscJS-Bibliothek einbetten:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js"></script>
```

Sobald die imscJS-Bibliothek geladen ist, kann sie verwendet werden, um ein IMSC-Dokument in drei unterschiedlichen Schritten zu rendern, die in den folgenden Abschnitten erklärt werden.

## Parsen des IMSC-Dokuments

Zuerst wird das IMSC-Dokument in ein unveränderliches JavaScript-Objekt (`doc` in unserem Fall) geparst:

```js
const doc = imsc.fromXML(source);
```

Dieser Schritt muss nur einmal für jedes IMSC-Dokument durchgeführt werden. Das `doc`-Objekt hat eine einzelne Methode, `getMediaTimeEvents()`, die ein Array von Zeitversätzen (in Sekunden) zurückgibt, an denen sich die visuelle Darstellung des IMSC-Dokuments ändert.

```js
const t = doc.getMediaTimeEvents();
```

## Erzeugen eines IMSC-Snapshots

Im zweiten Schritt wird mit `imsc.generateISD()` ein Snapshot des IMSC-Dokuments zu einem bestimmten Zeitpunkt (`isd`) erstellt.

```js
const isd = imsc.generateISD(doc, t[1]);
```

Dieser Zeitpunkt muss nicht einer der von `getMediaTimeEvents()` zurückgegebenen Werte sein, aber meistens ist er es. Im obigen Beispiel wird der Snapshot zu dem zweiten Zeitpunkt erstellt, an dem sich das IMSC-Dokument ändert (`t[1]`). In einem typischen Szenario würde eine Anwendung vor der Medienwiedergabe und für jeden Versatz, der von `getMediaTimeEvents()` zurückgegeben wird, einen Snapshot erstellen und seine Präsentation zum angegebenen Versatz planen.

## Rendern eines IMSC-Snapshots

Im dritten und letzten Schritt wird ein Snapshot in ein HTML {{htmlelement("div")}} mit `imsc.renderHTML()` gerendert:

```js
const renderDiv = document.getElementById("render-div");
imsc.renderHTML(isd, renderDiv);
```

## Aufbau eines IMSC-Players

Lassen Sie uns ein erweitertes Beispiel ansehen und Ihnen zeigen, wie Sie mit imscJS Untertitel über ein eingebettetes HTML-Video rendern können. Als Beispiel verwenden wir das unten stehende Video mit Untertiteln.

{{EmbedGHLiveSample("imsc-examples/imscjs-demo/imscjs-demo.html", '100%', 320)}}

Sie können die [HTML-Markup](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/imscjs-demo.html) und den [JavaScript-Quellcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/js/index.js) im [MDN-Repositorium für IMSC-Beispiele](https://github.com/mdn/imsc-examples) finden.

## Zugriff auf das DOM

Ein IMSC-Untertitel wird durch HTML-Markup mit eingebettetem CSS gerendert. Er repräsentiert die IMSC-Untertitel während eines bestimmten Zeitraums auf der Zeitleiste des zugehörigen Medienelements. Wie wir im Abschnitt [Rendern eines IMSC-Snapshots](#rendern_eines_imsc-snapshots) gesehen haben, wird das Markup mit der `renderHTML()`-Methode in ein `<div>`-Element eingefügt. Wir können uns dieses `<div>`-Element als einen Container für das aus dem IMSC-Code generierte HTML vorstellen. Später übergeben wir das entsprechende DOM-Element als Parameter an die `renderHTML()`-Methode.

Zur Bequemlichkeit weisen wir dieses DOM-Element einer Variablen zu.

```js
const renderDiv = document.getElementById("render-div");
```

Wir verwenden HTML-Hinweise, die mit HTML-Textspuren verknüpft sind, um jedes Mal Ereignisse auszulösen, wenn ein IMSC-Untertitel erscheinen oder verschwinden soll. In diesem Beispiel verwenden wir ein {{htmlelement("track")}}-Element, das wir im HTML-Markup deklariert haben, aber wir könnten auch eine Textspur "on the fly" erstellen und sie dem {{htmlelement("video")}} hinzufügen.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

Wir verwenden das `src`-Attribut des `<track>`-Elements als Zeiger auf das IMSC-Dokument, das unseren Untertitel enthält:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Abrufen der IMSC-Datei

Der Browser ruft das Dokument nicht automatisch für uns ab. In den meisten Browsern ist derzeit nur [WebVTT](/de/docs/Web/API/WebVTT_API) implementiert. Daher erwarten diese Browser, dass der Wert des `src`-Attributs auf eine WebVTT-Datei verweist. Wenn dies nicht der Fall ist, verwenden sie sie nicht, und wir haben keinen direkten Zugriff auf die Datei, auf die das `src`-Attribut zeigt. Daher verwenden wir das `src`-Attribut nur, um die URL der IMSC-Datei zu speichern. Wir müssen die Arbeit leisten, die Datei abzurufen und in einen JavaScript-String zu lesen. Im Beispiel verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch) API für diese Aufgabe:

```js
const response = await fetch(ttmlUrl);
initTrack(await response.text());
```

## Einstellen des Textspurmodus

Es gibt einen Nebeneffekt. Da Browser keine gültige WebVTT-Datei vom `src`-Attribut erhalten, deaktivieren sie die Spur. Die `mode`-Eigenschaft der Textspur wird auf den Wert `disable` gesetzt.

Aber das ist nicht das, was wir wollen. Im deaktivierten Modus wirft ein Hinweis keine Ereignisse zu seinen Start- und Endzeiten. Da wir diese Ereignisse für das Rendern der IMSC-Untertitel benötigen, ändern wir den Modus der Textspur auf `hidden`. In diesem Modus wirft der Browser die Ereignisse der Hinweise, rendert jedoch nicht den Wert der Hinweistext-Eigenschaft.

```js
myTrack.mode = "hidden";
```

Nachdem wir alles eingerichtet haben, können wir uns auf die Implementierung des IMSC-Untertitel-Renderings konzentrieren.

## Erzeugen von "Untertitel-Zuständen"

Oben haben wir erklärt, dass wir IMSC-Snapshots generieren müssen. Im folgenden Abschnitt gehen wir etwas tiefer darauf ein, was das bedeutet und warum dies notwendig ist.

Wie wir in [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments) gelernt haben, ist der erste Schritt das Parsen des IMSC-Dokuments in ein imscJS-Objekt.

```js
const imscDoc = imsc.fromXML(text);
```

Wir möchten Hinweise verwenden, um die IMSC-Untertitel zu rendern. Jeder Hinweis hat Eigenschaften, die seine Start- und Endzeit darstellen. Die Rendering-Engine des Browsers löst Ereignisse aus, wann immer die Zeitleiste des Mediums den Start- und Endzeitpunkt eines Hinweises erreicht. Wir können Funktionsaufrufe für diese Ereignisse registrieren. Wir verwenden sie, um das von imscJS generierte HTML zu rendern und es bei Bedarf wieder zu entfernen.

Aber die Zuordnung von IMSC-Untertiteln zu Start- und Endzeiten von Hinweisen ist nicht so einfach, wie man vielleicht denkt. Natürlich könnte man einfach `<p>`-Elemente mit `begin`- und `end`-Attributen verwenden. Dies würde perfekt zur Hinweis-Schnittstelle mit ihren `start`- und `end`-Eigenschaften passen.

Aber nehmen Sie den folgenden IMSC-Code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

Dies kann als Beispiel für einen "akkumulierenden" Untertitel genommen werden, bei dem Wort für Wort zu einer Zeile hinzugefügt wird. In einigen Ländern ist dies gängige Praxis für Live-Untertitel.

Was passiert, ist folgendes:

- Bei Sekunde 0 gibt es keinen Untertitel.
- Bei Sekunde 1 muss der Text "Hello" erscheinen.
- Bei Sekunde 2 muss der Text "Hello" noch "auf dem Bildschirm" bleiben, aber der Text "world!" muss hinzugefügt werden. Also haben wir von Sekunde 2 bis 3 einen Untertitel, der den Text "Hello world!" repräsentiert.

Um dies in HTML zu übertragen, benötigen wir mindestens zwei Hinweise: einen, der den Text "Hello" von Sekunde 1-2 darstellt, und den anderen, der den Text "Hello world!" von Sekunde 2-3 darstellt.

Aber das ist ein einfaches Szenario. Stellen Sie sich vor, Sie haben 5 weitere Worte, die akkumuliert werden. Diese könnten alle dieselbe Endzeit, aber unterschiedliche Startzeiten haben. Oder stellen Sie sich vor, Sie haben einen Untertitel an einem anderen Ort (z.B. einen anderen Sprecher repräsentierend). Dieser Untertitel wird parallel zu dem anderen Untertitel angezeigt, aber die akkumulierten Worte können unterschiedliche Startzeiten und daher unterschiedliche Intervalle haben.

Glücklicherweise ist in IMSC und imscJS dieses Szenario recht einfach abzudecken, denn IMSC hat einen Mechanismus zum zustandslosen Rendern von Untertiteln.

Lassen Sie uns genauer ansehen, was das bedeutet.

In unserer HTML/CSS-Implementierung können wir uns IMSC-Untertitel als eine Darstellungsfläche vorstellen, die auf das Video gelegt wird. Zu jedem Zeitpunkt auf der Medienzeitleiste hat die Darstellungsfläche einen bestimmten Zustand. Für diese "Zustände" hat IMSC ein konzeptionelles Modell, das "Intermediate Synchronous Document Format", das repräsentiert, was letztlich auf dieser Fläche dargestellt wird. Jedes Mal, wenn das Rendering geändert werden muss, wird eine neue Darstellung erstellt. Was erstellt wird, nennt sich ein **Intermediate Synchronous Document** oder **ISD**. Dieses ISD hat keine Abhängigkeit von den ISDs davor oder danach. Es ist vollständig zustandslos und enthält alle Informationen, die erforderlich sind, um den Untertitel darzustellen.

Wie können wir also die Zeiten ermitteln, zu denen sich das ISD ändert?

Das ist einfach: Wir rufen einfach die `getMediaTimeEvents()`-Methode auf dem imscJS-Dokumentobjekt auf (siehe auch [Parsen des IMSC-Dokuments](#parsen_des_imsc-dokuments)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

Um ein ISD-Dokument zu erhalten, das einem Zeitereignis entspricht, müssen wir die imscJS-Methode `generateISD()` aufrufen. Wir haben dies kurz in [Erzeugen eines IMSC-Snapshots](#erzeugen_eines_imsc-snapshots) erklärt. Für das ISD bei Sekunde 2 müssen wir Folgendes tun:

```js
imsc.generateISD(imscDoc, 2);
```

## Erstellen von Textspur-Hinweisen

Mit zwei Methoden können wir nun alle erforderlichen Zustände der IMSC-Darstellungsfläche erzeugen. Wir machen dies wie folgt:

- Iterieren über das Array, das wir von `getMediaEvents()` zurückbekommen.
- Für jedes Zeitereignis:
  - Erzeugen Sie einen entsprechenden Hinweis.
  - Verwenden Sie ein `onenter`-Ereignis, um das ISD zu rendern.
  - Verwenden Sie ein `onexit`-Ereignis, um die Darstellungsfläche wieder zu entfernen.

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

Lassen Sie uns genauer darauf eingehen.

Während wir durch die `timeEvents` schleifen, können wir den Wert des Zeitereignisses als Startzeit des Hinweises nehmen. Wir können dann den Wert des nächsten Zeitereignisses für die Endzeit des Hinweises verwenden, da dies anzeigt, dass sich die Darstellungsfläche ändern muss:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> [!NOTE]
> In den meisten Browsern sind Textspur-Hinweise derzeit nur für das WebVTT-Format implementiert. Normalerweise erstellen Sie also einen Hinweis mit allen WebVTT-Eigenschaften, einschließlich der WebVTT-Text-Eigenschaft. Wir verwenden diese Eigenschaften nie, aber es ist wichtig sich daran zu erinnern, dass sie immer noch vorhanden sind. Im Konstruktor müssen wir auch den VTTCue-Text als dritten Parameter hinzufügen.

Aber wie sollten wir die Endzeit des letzten Zeitereignisses berechnen? Es gibt kein "nächstes" Zeitereignis, von dem wir die Endzeit nehmen könnten.

Wenn es kein weiteres Zeitereignis gibt, bedeutet dies tatsächlich, dass die Darstellungsfläche bis zum Ende der Wiedergabezeit des Mediums aktiv ist. Wir können die Endzeit also auf die Dauer des zugehörigen Mediums setzen:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Sobald wir das Cue-Objekt konstruiert haben, können wir die Funktion registrieren, die "beim Eintritt" des Hinweises aufgerufen wird:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

Wir erzeugen das mit dem Hinweis verknüpfte ISD und verwenden dann die imscJS-Methode `renderHTML()`, um das entsprechende HTML in den "Rendering-Container" zu rendern.

Um sicher zu sein, dass keine verbleibende Untertitelschicht vorhanden ist, entfernen wir diese zuerst, falls vorhanden. Dazu definieren wir eine Funktion, die wir später wiederverwenden können, wenn das Cue endet:

```js
function clearSubFromScreen() {
  const subtitleActive = renderDiv.getElementsByTagName("div")[0];
  if (subtitleActive) {
    renderDiv.removeChild(subtitleActive);
  }
}
```

Diese Funktion rufen wir erneut auf, sobald das `onexit`-Ereignis des Hinweises ausgelöst wird:

```js
myCue.onexit = function () {
  clearSubFromScreen();
};
```

Am Ende müssen wir nur noch den erstellten Hinweis zur Textspur hinzufügen:

```js
myTrack.addCue(myCue);
```

## Verwendung nativer Videoplayer-Steuerelemente

In der Regel möchten Sie den Benutzern einige Optionen zur Steuerung der Videowiedergabe geben. Sie sollten mindestens in der Lage sein, die Wiedergabe zu starten, zu pausieren und zu suchen. Die einfachste Methode wäre die Verwendung der nativen Videosteuerungen des Webbrowsers, oder? Ja, das stimmt, wenn Sie keine zusätzlichen Funktionen benötigen.

Native Videoplayer-Steuerelemente sind Teil des Browsers und nicht des HTML-Markups. Obwohl sie auf DOM-Ereignisse reagieren und einige ihrer eigenen generieren, haben Sie als Webentwickler keinen direkten Zugriff darauf.

Dies verursacht zwei Probleme bei der Verwendung von imscJS:

1. Die IMSC HTML-Überlagerung deckt das gesamte Video ab. Sie sitzt auf dem `<video>`-Element. Obwohl Sie die Player-Controls sehen können (da der größte Teil der Überlagerung einen transparenten Hintergrund hat), erreichen Zeigerereignisse wie Mausklicks die Steuerelemente nicht. Da sie über standardmäßiges CSS nicht zugänglich sind, können Sie auch nicht die z-Index der Steuerelemente ändern, um dieses Problem zu lösen. Wenn Sie also immer eine Untertitel-Überlagerung haben, können Sie das Video nicht anhalten, wenn es einmal gestartet wurde. Dies wäre ein sehr schlechtes Benutzererlebnis.
2. Normalerweise haben die nativen Videoplayer-Steuerelemente eine Schnittstellenbenutzeroberfläche für Untertitel. Sie können eine Textspur auswählen oder das Rendern von Untertiteln ausschalten. Leider steuert die Schnittstellenbenutzeroberfläche nur das Rendern von WebVTT-Untertiteln. Der Browser weiß nicht, dass wir Untertitel mit imscJS rendern, daher haben diese Steuerelemente keine Wirkung.

Für das erste Problem gibt es eine einfache CSS-Lösung. Wir müssen die CSS-Eigenschaft `pointer-events` auf `none` setzen (siehe den [Beispielcode](https://github.com/mdn/imsc-examples/blob/main/imscjs-demo/css/style.css) auf GitHub für das vollständige CSS).

```css
#render-div {
  pointer-events: none;
}
```

Dies hat zur Folge, dass Zeiger-Ereignisse durch die Überlagerung "gehen" (siehe [Referenzdokumentation für Zeiger-Ereignisse](/de/docs/Web/CSS/Reference/Properties/pointer-events) für weitere Details).

Das Problem der Schnittstellenbenutzeroberfläche ist etwas schwieriger zu lösen. Obwohl wir Ereignissen lauschen können, aktiviert das Aktivieren einer Spur mithilfe der Schnittstellenbenutzeroberfläche auch das Rendern des entsprechenden WebVTT. Da wir VTTCues für das IMSC-Rendering verwenden, kann dies zu unerwünschten Darstellungsverhalten führen. Die Textei-Eigenschaft von VTTCue hat immer den leeren String als Wert, aber in einigen Browsern kann dies dennoch zur Darstellung von Artefakten führen.

Die beste Lösung ist es, eigene benutzerdefinierte Steuerelemente zu erstellen. Erfahren Sie, wie das in unserem [Leitfaden für die Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) funktioniert.
