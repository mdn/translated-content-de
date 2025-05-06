---
title: Web Audio API Best Practices
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: 4f20f3217f2ec33a2eee2661444abaeb2fec3051
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt keinen strikt richtigen oder falschen Weg, wenn Sie kreativen Code schreiben. Solange Sie Sicherheit, Leistung und Zugänglichkeit berücksichtigen, können Sie Ihren eigenen Stil anpassen. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um Sound mit der Web Audio API zu laden, und es kann etwas verwirrend sein, welche Sie verwenden sollten.

Bei der Arbeit mit Dateien betrachten Sie entweder das Abrufen der Datei von einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (d.h. einem {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element), oder Sie möchten die Datei abrufen und in einen Puffer dekodieren. Beide sind legitime Arbeitsweisen. Es ist jedoch üblich, die erstere Methode bei der Arbeit mit vollständigen Tracks zu verwenden und die letztere bei der Arbeit mit kürzeren, sampleartigen Tracks.

Media-Elemente unterstützen Streaming von Haus aus. Der Ton beginnt zu spielen, wenn der Browser feststellt, dass er den Rest der Datei laden kann, bevor die Wiedergabe beendet ist. Ein Beispiel für die Verwendung mit der Web Audio API finden Sie im [Leitfaden zur Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Mit einem Pufferknoten haben Sie jedoch mehr Kontrolle. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres erweiterten Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt eine gute Möglichkeit, dies zu tun), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und präzisere Manipulation bedeutet.

Wenn Sie Audio von der Kamera oder dem Mikrofon des Benutzers verwenden möchten, können Sie es über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Schnittstelle abrufen. Dies ist gut für WebRTC und Situationen, in denen Sie möglicherweise Audio aufzeichnen oder analysieren möchten.

Die letzte Methode besteht darin, Ihren eigenen Sound zu generieren, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Puffers und Füllen mit Ihren eigenen Daten erfolgen kann. Siehe den [Leitfaden hier zur Erstellung Ihres eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) für Informationen zur Erstellung von Sounds mit Oszillatoren und Puffern.

## Browserübergreifende & Legacy-Unterstützung

Die Web Audio API-Spezifikation entwickelt sich ständig weiter und wie bei den meisten Dingen im Web gibt es einige Probleme mit der konsistenten Funktionalität in verschiedenen Browsern. Hier schauen wir uns Optionen an, um browserübergreifende Probleme zu lösen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das API-Funktionalität konsistent über verschiedene Browser hinweg erstellt und Lücken füllt, sobald sie gefunden werden. Es befindet sich ständig in Entwicklung und bemüht sich, die aktuelle Spezifikation einzuhalten.

Es besteht auch die Möglichkeit, Bibliotheken zu verwenden, von denen es einige je nach Anwendungsfall gibt. Für eine gute Allround-Lösung ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet browserübergreifende Unterstützung und eine nützliche Teilmenge an Funktionalität. Auch wenn es nicht das volle Spektrum an Filtern und anderen Effekten der Web Audio API umfasst, können Sie damit die meisten gewünschten Dinge tun.

Wenn Sie nach einer Option zur Sounderstellung oder einer mehr instrumentenbasierten Lösung suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet erweiterte Planungsmöglichkeiten, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen, die auf der Web Audio API basieren.

[R-audio](https://github.com/bbc/r-audio), aus der [BBC-Abteilung für Forschung & Entwicklung](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c), ist eine Bibliothek von React-Komponenten, die darauf abzielt, eine "intuitivere, deklarative Schnittstelle zu Web Audio" bereitzustellen. Wenn Sie es gewohnt sind, JSX zu schreiben, könnte es sich lohnen, einen Blick darauf zu werfen.

## Autoplay-Richtlinie

Browser haben begonnen, eine Autoplay-Richtlinie zu implementieren, die im Allgemeinen zusammengefasst werden kann als:

> "Erstellen oder Fortsetzen des Kontexts aus einer Benutzeraktion heraus".

Aber was bedeutet das in der Praxis? Eine Benutzeraktion wurde als benutzerinitiierte Aktion interpretiert, normalerweise ein `click`-Ereignis. Browseranbieter entschieden, dass Web Audio-Kontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen durch einen Benutzer gestartet werden. Dies liegt daran, dass automatisch abspielendes Audio wirklich störend und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audio-Kontext erstellen (entweder offline oder online), wird dieser mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten, sollte der Zustand automatisch auf `running` gesetzt werden, wenn Sie den Audio-Kontext innerhalb eines `click`-Ereignisses erstellen. Hier ist ein Beispiel, wie der Kontext innerhalb eines `click`-Ereignisses erstellt wird:

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

Wenn Sie jedoch den Kontext außerhalb einer Benutzeraktion erstellen, wird sein Zustand auf `suspended` gesetzt und er muss nach einer Benutzerinteraktion gestartet werden. Wir können dasselbe Click-Event-Beispiel verwenden, um den Zustand des Kontextes zu testen und ihn zu starten, falls er ausgesetzt ist, mit der Methode [`resume()`](/de/docs/Web/API/AudioContext/resume).

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

Möglicherweise arbeiten Sie stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), in diesem Fall können Sie den ausgesetzten Audio-Kontext mit der Methode [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering) fortsetzen.

## Benutzerkontrolle

Wenn Ihre Website oder Anwendung Sound enthält, sollten Sie den Benutzern die Kontrolle darüber ermöglichen, andernfalls wird es wieder störend. Dies kann durch Play/Stop- und Lautstärke-/Stummschalt-Kontrollen erreicht werden. Der [Leitfaden zur Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erklärt, wie man das macht.

Wenn Sie Schaltflächen haben, die Audio ein- und ausschalten, ist die Verwendung des ARIA-Attributs [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) auf ihnen eine gute Option, um assistiven Technologien mitzuteilen, wozu die Schaltfläche genau dient, und somit die App zugänglicher zu machen. Es gibt [hier ein Demo zur Verwendung](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

Da Sie mit vielen sich ändernden Werten innerhalb der Web Audio API arbeiten und den Benutzern Kontrolle darüber geben möchten, ist das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) oft eine gute Wahl, um es zu verwenden. Es ist eine gute Option, da Sie minimale und maximale Werte sowie Inkremente mit dem Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) festlegen können.

## Einstellen von AudioParam-Werten

Es gibt zwei Möglichkeiten, die Werte eines [`AudioNode`](/de/docs/Web/API/AudioNode) zu manipulieren, die selbst Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam) sind. Die erste besteht darin, den Wert direkt über die Eigenschaft zu setzen. Wenn wir beispielsweise den `gain`-Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies tun:

```js
gainNode.gain.value = 0.5;
```

Dies stellt unsere Lautstärke auf die Hälfte ein. Wenn Sie jedoch eine der definierten Methoden von `AudioParam` verwenden, um diese Werte festzulegen, werden diese Vorrang vor der oben genannten Eigenschaftseinstellung haben. Wenn Sie beispielsweise möchten, dass der `gain`-Wert in 2 Sekunden auf 1 angehoben wird, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel (wie es sollte) überschreiben, selbst wenn es später in Ihrem Code erscheinen würde.

Unter Berücksichtigung dessen, wenn Ihre Website oder Anwendung Timing und Planung erfordert, ist es am besten, die Methoden von [`AudioParam`](/de/docs/Web/API/AudioParam) zum Einstellen von Werten zu verwenden. Wenn Sie sicher sind, dass dies nicht erforderlich ist, ist das Setzen mit der `value`-Eigenschaft in Ordnung.
