---
title: Web Audio API Best Practices
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt kein strikt richtig oder falsch, wenn es darum geht, kreativen Code zu schreiben. Solange Sie Sicherheit, Leistung und Zugänglichkeit berücksichtigen, können Sie Ihren eigenen Stil anpassen. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um Sounds mit der Web Audio API zu laden, und es kann ein wenig verwirrend sein, welche Methode Sie verwenden sollten.

Wenn Sie mit Dateien arbeiten, konzentrieren Sie sich entweder darauf, die Datei von einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (z.B. einem {{htmlelement("audio")}} oder {{htmlelement("video")}} Element) zu holen, oder darauf, die Datei abzurufen und in einen Puffer zu dekodieren. Beide sind legitime Methoden, jedoch ist es üblicher, erstere Methode zu verwenden, wenn Sie mit vollständigen Tracks arbeiten, und letztere, wenn Sie mit kürzeren, eher sampleartigen Tracks arbeiten.

Media-Elemente haben Streaming-Unterstützung direkt integriert. Das Audio beginnt zu spielen, wenn der Browser bestimmt, dass er den Rest der Datei laden kann, bevor das Abspielen beendet ist. Ein Beispiel, wie Sie dies mit der Web Audio API verwenden können, finden Sie im [Leitfaden zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Sie haben jedoch mehr Kontrolle, wenn Sie einen Buffernode verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres fortgeschrittenen Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt eine gute Methode dafür), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und genauere Manipulation bedeutet.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Benutzers arbeiten möchten, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) Schnittstelle zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie Audio aufnehmen oder möglicherweise analysieren möchten.

Der letzte Weg ist, Ihren eigenen Sound zu erzeugen, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Puffers und füllen dieses mit Ihren eigenen Daten möglich ist. Schauen Sie sich den [Leitfaden hier zur Erstellung Ihres eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um Informationen zum Erstellen von Sounds mit Oszillatoren und Puffern zu erhalten.

## Browser- und Legacy-Unterstützung

Die Web Audio API-Spezifikation entwickelt sich ständig weiter und wie bei den meisten Dingen im Internet gibt es einige Probleme mit der konsistenten Funktionsweise in verschiedenen Browsern. Hier werden wir uns Optionen ansehen, um Probleme mit der plattformübergreifenden Kompatibilität zu umgehen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das API-Funktionalität konsistent über verschiedene Browser hinweg bereitstellt, Lücken füllt, sobald sie gefunden werden. Es ist ständig in Entwicklung und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Es gibt auch die Möglichkeit von Bibliotheken, von denen es je nach Anwendungsfall einige gibt. Für eine gute Allround-Bibliothek ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet plattformübergreifende Unterstützung und stellt eine nützliche Teilmenge von Funktionalitäten bereit. Obwohl es nicht die volle Bandbreite an Filtern und anderen Effekten nutzt, die die Web Audio API bietet, können Sie damit das meiste tun, was Sie tun möchten.

Wenn Sie nach einer Option zur Sounderstellung oder einer eher instrumentenbasierten Option suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet erweiterte Planungsmöglichkeiten, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen auf Basis der Web Audio API.

[R-audio](https://github.com/bbc/r-audio), aus der [Forschungs- und Entwicklungsabteilung der BBC](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c), ist eine Bibliothek von React-Komponenten, die darauf abzielt, eine "intuitivere, deklarative Schnittstelle zu Web Audio" bereitzustellen. Wenn Sie gewohnt sind, JSX zu schreiben, könnte es sich lohnen, einen Blick darauf zu werfen.

## Autoplay-Richtlinie

Browser haben begonnen, eine Autoplay-Richtlinie umzusetzen, die im Allgemeinen so zusammengefasst werden kann:

> "Erstellen oder fortsetzen des Kontextes aus einer Benutzerinteraktion."

Aber was bedeutet das praktisch? Eine Benutzerinteraktion wird als ein vom Benutzer initiiertes Ereignis, normalerweise ein `click`-Ereignis, interpretiert. Browseranbieter haben entschieden, dass Web-Audio-Kontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen von einem Benutzer gestartet werden. Dies liegt daran, dass automatisch abgespieltes Audio wirklich störend und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audiokontext erstellen (entweder offline oder online), wird er mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Bei der Arbeit mit einem [`AudioContext`](/de/docs/Web/API/AudioContext), wenn Sie den Audiokontext innerhalb eines `click`-Ereignisses erstellen, sollte der Zustand automatisch auf `running` gesetzt werden. Hier ist ein Beispiel, wie man den Kontext innerhalb eines `click`-Ereignisses erstellt:

```js
const button = document.querySelector("button");
button.addEventListener(
  "click",
  () => {
    const audioCtx = new AudioContext();
    // Do something with the audio context
  },
  false,
);
```

Wenn Sie den Kontext jedoch außerhalb einer Benutzerinteraktion erstellen, wird sein Zustand auf `suspended` gesetzt und er muss nach einer Benutzerinteraktion gestartet werden. Wir können dasselbe `click`-Ereignisbeispiel hier verwenden, den Zustand des Kontexts überprüfen und ihn, falls er suspendiert ist, mit der [`resume()`](/de/docs/Web/API/AudioContext/resume)-Methode starten.

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");

button.addEventListener(
  "click",
  () => {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  },
  false,
);
```

Vielleicht arbeiten Sie stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), in welchem Fall Sie den suspendierten Audiokontext mit der [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering)-Methode fortsetzen können.

## Benutzerkontrolle

Wenn Ihre Website oder Anwendung Sound enthält, sollten Sie dem Benutzer die Kontrolle darüber ermöglichen, andernfalls wird es wieder störend. Dies kann durch Abspiel-/Stopp- und Lautstärke-/Stummschaltungskontrollen erreicht werden. Der [Leitfaden zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erläutert, wie dies gemacht werden kann.

Wenn Sie Schaltflächen haben, die Audio ein- und ausschalten, ist die Verwendung des ARIA-Attributs [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) eine gute Option, um assistiven Technologien zu signalisieren, welches genaue Ziel die Schaltfläche hat, und so die App zugänglicher zu machen. Es gibt eine [Demo zur Verwendung hier](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

Da Sie mit vielen sich ändernden Werten innerhalb der Web Audio API arbeiten und Benutzern die Kontrolle darüber ermöglichen möchten, ist die [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) oft eine gute Wahl der Kontrollelemente. Es ist eine gute Option, da Sie Mindest- und Höchstwerte sowie Inkremente mit dem [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festlegen können.

## Setzen von AudioParam-Werten

Es gibt zwei Möglichkeiten, die Werte von [`AudioNode`](/de/docs/Web/API/AudioNode)-Objekten, die selbst Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle sind, zu manipulieren. Die erste besteht darin, den Wert direkt über die Eigenschaft zu setzen. Wenn wir zum Beispiel den `gain`-Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies so tun:

```js
gainNode.gain.value = 0.5;
```

Dies wird unsere Lautstärke auf die Hälfte setzen. Wenn Sie jedoch eine der definierten Methoden des `AudioParam` verwenden, um diese Werte zu setzen, haben diese Vorrang gegenüber der obigen Eigenschaftseinstellung. Wenn Sie beispielsweise möchten, dass der `gain`-Wert in 2 Sekunden auf 1 erhöht wird, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel überschreiben (wie es sollte), selbst wenn es später in Ihrem Code kommen würde.

Unter Berücksichtigung dieser Tatsache, wenn Ihre Website oder Anwendung Timing und Planung erfordert, ist es am besten, sich auf die `AudioParam`-Methoden zum Setzen von Werten zu verlassen. Wenn Sie sicher sind, dass das nicht der Fall ist, ist das Setzen mit der `value`-Eigenschaft in Ordnung.
