---
title: Best Practices für die Web Audio API
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt keinen strikt richtigen oder falschen Weg beim Schreiben von kreativem Code. Solange Sie Sicherheit, Leistung und Zugänglichkeit berücksichtigen, können Sie Ihren eigenen Stil entwickeln. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um Sound mit der Web Audio API zu laden, und es kann etwas verwirrend sein, welche davon Sie nutzen sollten.

Wenn Sie mit Dateien arbeiten, haben Sie die Möglichkeit, die Datei entweder aus einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (z.B. einem {{htmlelement("audio")}} oder {{htmlelement("video")}} Element) zu extrahieren oder die Datei abzurufen und in einen Puffer zu dekodieren. Beide Methoden sind legitim, jedoch ist es üblicher, die erstere zu verwenden, wenn Sie mit vollständigen Tracks arbeiten, und die letztere, wenn Sie mit kürzeren, sampleähnlichen Tracks arbeiten.

Media-Elemente unterstützen Streaming von Haus aus. Das Audio beginnt zu spielen, wenn der Browser feststellt, dass er den Rest der Datei laden kann, bevor das Abspielen endet. Ein Beispiel, wie Sie dies mit der Web Audio API nutzen können, finden Sie im [Using the Web Audio API tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Sie haben jedoch mehr Kontrolle, wenn Sie einen Pufferknoten verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres fortgeschrittenen Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt eine gute Methode, dies zu tun), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und präzisere Manipulation bedeutet.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Benutzers arbeiten möchten, können Sie über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) Schnittstelle darauf zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie Audio aufnehmen oder möglicherweise analysieren möchten.

Die letzte Möglichkeit besteht darin, Ihren eigenen Sound zu erzeugen, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch das Erstellen eines Puffers und dem Befüllen mit eigenen Daten geschehen kann. Sehen Sie sich das [Tutorial hier zur Erstellung Ihres eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um Informationen über die Erstellung von Klängen mit Oszillatoren und Puffern zu erhalten.

## Browser-Kompatibilität & ältere Unterstützung

Die Web Audio API-Spezifikation entwickelt sich ständig weiter und wie bei den meisten Dingen im Web gibt es einige Probleme mit der konsistenten Funktionsweise in allen Browsern. Hier betrachten wir Optionen, um plattformübergreifende Probleme zu umgehen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das API-Funktionalität konsistent über Browser hinweg erstellt und Lücken füllt, sobald sie entdeckt werden. Es ist ständig in Entwicklung und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Es gibt auch die Option von Bibliotheken, von denen je nach Anwendungsfall einige verfügbar sind. Für eine gute Allround-Option ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es verfügt über plattformübergreifende Unterstützung und bietet einen nützlichen Teil der Funktionalität. Obwohl es nicht die gesamte Palette an Filtern und anderen Effekten der Web Audio API nutzt, kann man das meiste damit erreichen, was man möchte.

Wenn Sie nach Sounderzeugung oder einer eher instrumentenbasierten Option suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet fortschrittliche Zeitplanfähigkeiten, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen auf Basis der Web Audio API.

[R-audio](https://github.com/bbc/r-audio), von der [BBC's Research & Development-Abteilung](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c), ist eine Bibliothek von React-Komponenten, die eine „intuitivere, deklarative Schnittstelle zu Web Audio“ bieten soll. Wenn Sie an die Arbeit mit JSX gewöhnt sind, lohnt es sich vielleicht, einen Blick darauf zu werfen.

## Autoplay-Politik

Die Browser beginnen eine Autoplay-Politik umzusetzen, die im Allgemeinen folgendermaßen zusammengefasst werden kann:

> „Erstellen oder fortsetzen des Kontextes aus einer Benutzeraktion heraus.“

Aber was bedeutet das in der Praxis? Eine Benutzeraktion wird als ein vom Benutzer initiiertes Ereignis interpretiert, normalerweise ein `click` Ereignis. Browserhersteller entschieden, dass Web Audio-Kontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen von einem Benutzer gestartet werden. Dies liegt daran, dass automatisch abspielendes Audio wirklich lästig und aufdringlich sein kann. Aber wie handhaben wir das?

Wenn Sie einen Audiokontext erstellen (entweder offline oder online), wird er mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten, sollte der State automatisch auf `running` gesetzt werden, wenn Sie den Audiokontext innerhalb eines `click` Ereignisses erstellen. Hier ist ein Beispiel, wie Sie den Kontext innerhalb eines `click` Ereignisses erstellen:

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

Wenn Sie den Kontext jedoch außerhalb einer Benutzeraktion erstellen, wird sein Zustand auf `suspended` gesetzt und er muss nach einer Benutzerinteraktion gestartet werden. Wir können hier das gleiche Click-Event-Beispiel verwenden, um den Zustand des Kontextes zu prüfen und ihn, falls er ausgesetzt ist, mit der [`resume()`](/de/docs/Web/API/AudioContext/resume) Methode zu starten.

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

Vielleicht arbeiten Sie stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), in welchem Fall Sie den ausgesetzten Audiokontext mit der [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering) Methode fortsetzen können.

## Benutzerkontrolle

Wenn Ihre Website oder Anwendung Sound enthält, sollten Sie dem Benutzer die Kontrolle darüber geben, andernfalls wird er wieder als lästig empfunden. Dies kann durch Play/Stop- und Lautstärke/Stummschaltungskontrollen erreicht werden. Das [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) Tutorial erklärt, wie man das macht.

Wenn Sie Knöpfe haben, die Audio ein- und ausschalten, ist die Verwendung des ARIA Attributs [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) eine gute Option, um assistiver Technologie den genauen Zweck des Knopfes zu signalisieren und somit die App zugänglicher zu machen. Es gibt [hier ein Demo, wie man es benutzt](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

Da Sie mit vielen sich ändernden Werten innerhalb der Web Audio API arbeiten und den Benutzern die Kontrolle darüber geben möchten, ist das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) oft eine gute Wahl der Steuerung. Es ist eine gute Option, da Sie Mindest- und Höchstwerte sowie Inkremente mit dem [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut festlegen können.

## Einstellen von AudioParam-Werten

Es gibt zwei Möglichkeiten, [`AudioNode`](/de/docs/Web/API/AudioNode) Werte zu manipulieren, die selbst Objekte der [`AudioParam`](/de/docs/Web/API/AudioParam) Schnittstelle sind. Die erste besteht darin, den Wert direkt über die Eigenschaft zu setzen. Wenn wir zum Beispiel den `gain` Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies wie folgt tun:

```js
gainNode.gain.value = 0.5;
```

Dies wird unsere Lautstärke auf die Hälfte setzen. Wenn Sie jedoch eine der von `AudioParam` definierten Methoden verwenden, um diese Werte zu setzen, haben diese Vorrang vor der oben genannten Einstellung. Wenn Sie zum Beispiel möchten, dass der `gain` Wert in 2 Sekunden auf 1 erhöht wird, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel überschreiben (wie es sollte), selbst wenn es später in Ihrem Code kommen würde.

Beachten Sie dies, wenn Ihre Website oder Anwendung Timing und Planung erfordert, ist es am besten, die Methoden der [`AudioParam`](/de/docs/Web/API/AudioParam) für das Setzen von Werten zu verwenden. Wenn Sie sicher sind, dass dies nicht der Fall ist, ist das Setzen mit der `value` Eigenschaft in Ordnung.
