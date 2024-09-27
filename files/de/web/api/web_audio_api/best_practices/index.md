---
title: Best Practices für die Web Audio API
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt keinen strikt richtigen oder falschen Weg beim Schreiben von kreativem Code. Solange Sie Sicherheit, Leistung und Barrierefreiheit berücksichtigen, können Sie Ihren eigenen Stil einbringen. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Richtlinien, Tipps und Tricks zur Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmöglichkeiten, um mit der Web Audio API Sound zu laden, und es kann etwas verwirrend sein, welche Sie verwenden sollten.

Wenn Sie mit Dateien arbeiten, ziehen Sie entweder in Betracht, die Datei aus einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (d. h. ein {{htmlelement("audio")}} oder {{htmlelement("video")}} Element) zu entnehmen, oder Sie möchten die Datei abrufen und in einen Puffer dekodieren. Beide sind legitime Arbeitsmethoden, jedoch ist es üblicher, die erste Methode bei voll langen Tracks zu verwenden und die letztere bei kürzeren, mehr sample-ähnlichen Tracks.

Media-Elemente haben von Haus aus Streaming-Unterstützung. Das Audio wird gestartet, wenn der Browser entscheidet, dass er den Rest der Datei laden kann, bevor das Abspielen beendet ist. Ein Beispiel, wie man das mit der Web Audio API nutzt, finden Sie im [Tutorial zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Sie haben jedoch mehr Kontrolle, wenn Sie einen Buffer Node verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres fortgeschrittenen Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt eine gute Möglichkeit, dies zu tun), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und präzisere Manipulation bedeutet.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Benutzers arbeiten möchten, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) Schnittstelle zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie möglicherweise Audio aufnehmen oder analysieren möchten.

Die letzte Möglichkeit besteht darin, Ihren eigenen Sound zu erzeugen, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Puffers und Füllen mit eigenen Daten geschehen kann. Schauen Sie sich das [Tutorial hier zur Erstellung eigener Instrumente](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um Informationen zur Erstellung von Sounds mit Oszillatoren und Puffern zu erhalten.

## Unterstützung über Browser hinweg und für ältere Versionen

Die Spezifikation für die Web Audio API entwickelt sich ständig weiter und wie bei den meisten Dingen im Web gibt es einige Probleme mit ihrer einheitlichen Funktionsweise über verschiedene Browser hinweg. Hier betrachten wir Optionen zur Umgehung von Cross-Browser-Problemen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das die API-Funktionalität konsistent über Browser hinweg schafft und Lücken schließt, sobald sie entdeckt werden. Es ist ständig in Entwicklung und bemüht sich, der aktuellen Spezifikation zu entsprechen.

Es gibt auch die Option von Bibliotheken, von denen es je nach Anwendungsfall einige gibt. Für eine gute Allround-Lösung ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet Unterstützung für mehrere Browser und eine nützliche Untermenge von Funktionen. Obwohl es nicht das gesamte Spektrum an Filtern und anderen Effekten der Web Audio API nutzt, können Sie das meiste tun, was Sie möchten.

Wenn Sie nach Sounderstellung oder einer eher instrumentenbasierten Option suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet erweiterte Planungsfähigkeiten, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen, die auf der Web Audio API aufgebaut sind.

[R-audio](https://github.com/bbc/r-audio), aus der [Forschungs- und Entwicklungsabteilung der BBC](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c), ist eine Bibliothek von React-Komponenten, die darauf abzielt, eine "intuitivere, deklarative Schnittstelle zu Web Audio" bereitzustellen. Wenn Sie an das Schreiben von JSX gewöhnt sind, könnte es sich lohnen, sich das anzusehen.

## Autoplay-Richtlinie

Browser beginnen, eine Autoplay-Richtlinie umzusetzen, die im Allgemeinen folgendermaßen zusammengefasst werden kann:

> „Kontext innerhalb einer Benutzeraktion erstellen oder fortsetzen“.

Aber was bedeutet das in der Praxis? Eine Benutzeraktion wurde als ein vom Benutzer initiierter Event interpretiert, normalerweise ein `click` Event. Browseranbieter entschieden, dass Web Audio-Kontexte Audio nicht automatisch abspielen dürfen; sie sollten stattdessen vom Benutzer gestartet werden. Dies liegt daran, dass automatisch abgespieltes Audio wirklich störend und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audiokontext erstellen (entweder offline oder online), wird dieser mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten, wird der Status automatisch auf `running` gesetzt, wenn Sie den Audiokontext innerhalb eines `click` Events erstellen. Hier ist ein einfaches Beispiel für die Erstellung des Kontexts innerhalb eines `click` Events:

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

Wenn Sie den Kontext jedoch außerhalb einer Benutzeraktion erstellen, wird sein Status auf `suspended` gesetzt, und er muss nach Benutzerinteraktion gestartet werden. Wir können dasselbe Click-Event-Beispiel hier verwenden, um den Status des Kontextes zu testen und ihn zu starten, falls er auf „suspended“ gesetzt ist, indem wir die [`resume()`](/de/docs/Web/API/AudioContext/resume) Methode verwenden.

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

Möglicherweise arbeiten Sie stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), in welchem Fall Sie den suspendierten Audiokontext mit der Methode [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering) fortsetzen können.

## Benutzerkontrolle

Wenn Ihre Website oder Anwendung Sound enthält, sollten Sie dem Benutzer die Kontrolle darüber geben, andernfalls wird er wieder störend. Dies kann durch Play/Stop- und Lautstärke/Stummsteuerungen erreicht werden. Das [Tutorial zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erklärt, wie das geht.

Wenn Sie Schaltflächen haben, die Audio ein- und ausschalten, ist die Verwendung des ARIA-Attributs [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role) eine gute Option, um unterstützender Technologie zu signalisieren, was der genaue Zweck der Schaltfläche ist und somit die Anwendung zugänglicher zu machen. Es gibt [hier eine Demo, wie man es benutzt](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

Da Sie mit vielen sich ändernden Werten innerhalb der Web Audio API arbeiten und den Benutzern die Kontrolle darüber geben möchten, ist [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) oft eine gute Wahl als Steuerungsmöglichkeit. Es ist eine gute Option, da Sie Mindest- und Höchstwerte sowie Inkremente mit dem [`step`](/de/docs/Web/HTML/Element/input#step) Attribut festlegen können.

## Einstellen von AudioParam-Werten

Es gibt zwei Möglichkeiten, [`AudioNode`](/de/docs/Web/API/AudioNode) Werte zu manipulieren, die selbst Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) Schnittstelle sind. Die erste besteht darin, den Wert direkt über die Eigenschaft einzustellen. Wenn wir zum Beispiel den `gain` Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies so tun:

```js
gainNode.gain.value = 0.5;
```

Dies setzt unsere Lautstärke auf die Hälfte. Wenn Sie jedoch eine der durch `AudioParam` definierten Methoden verwenden, um diese Werte festzulegen, haben diese Vorrang vor der obigen Eigenschaftseinstellung. Wenn Sie zum Beispiel möchten, dass der `gain` Wert in 2 Sekunden auf 1 angehoben wird, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel (wie es sein sollte) überschreiben, selbst wenn es später in Ihrem Code erscheinen sollte.

Wenn Sie dies berücksichtigen, ist es am besten, wenn Ihre Website oder Anwendung Timing und Planung erfordert, die [`AudioParam`](/de/docs/Web/API/AudioParam) Methoden zum Einstellen von Werten zu verwenden. Wenn Sie sicher sind, dass dies nicht erforderlich ist, ist das Einstellen über die `value` Eigenschaft in Ordnung.
