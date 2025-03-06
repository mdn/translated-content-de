---
title: Web Audio API Best Practices
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt keinen strikten richtigen oder falschen Weg beim Schreiben kreativen Codes. Solange Sie Sicherheit, Leistung und Zugänglichkeit berücksichtigen, können Sie Ihren eigenen Stil anpassen. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Leitlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um Sound mit der Web Audio API zu laden, und es kann etwas verwirrend sein, welche Sie verwenden sollten.

Wenn Sie mit Dateien arbeiten, betrachten Sie entweder das Abrufen der Datei von einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (d. h. ein {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element) oder Sie möchten die Datei abrufen und in einen Puffer dekodieren. Beide sind legitime Vorgehensweisen, allerdings wird die erster genannte Methode häufiger genutzt, wenn Sie mit vollständigen Tracks arbeiten, und die zweite Methode, wenn Sie mit kürzeren, eher sampleartigen Tracks arbeiten.

Medienelemente haben von Haus aus Streaming-Unterstützung. Das Audio wird zu spielen beginnen, wenn der Browser feststellt, dass er den Rest der Datei laden kann, bevor das Abspielen beendet ist. Ein Beispiel, wie man dies mit der Web Audio API verwendet, finden Sie in der [Web Audio API Anleitung](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Sie haben jedoch mehr Kontrolle, wenn Sie einen Buffer-Node verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt in unserem fortgeschrittenen Artikel](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt eine gute Methode dafür), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und präzisere Manipulation bedeutet.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Benutzers arbeiten möchten, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Schnittstelle zugreifen. Dies ist nützlich für WebRTC und Situationen, in denen Sie aufnehmen oder möglicherweise Audio analysieren möchten.

Die letzte Möglichkeit besteht darin, Ihren eigenen Sound zu generieren, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Puffers und Auffüllen mit eigenen Daten erfolgen kann. Sehen Sie sich die [Anleitung zur Erstellung eines eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um Informationen zur Erstellung von Sounds mit Oszillatoren und Puffern zu erhalten.

## Cross-Browser- & Legacy-Unterstützung

Die Web Audio API-Spezifikation entwickelt sich ständig weiter, und wie bei den meisten Dingen im Web gibt es einige Probleme, damit sie konsistent in allen Browsern funktioniert. Hier werden wir Möglichkeiten betrachten, um Cross-Browser-Probleme zu umgehen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das die API-Funktionalität konsistent in allen Browsern erzeugt und Lücken füllt, sobald sie gefunden werden. Es befindet sich ständig in der Entwicklung und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Eine weitere Möglichkeit sind Bibliotheken, von denen es je nach Anwendungsfall einige gibt. Für eine gute Allround-Lösung ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet Unterstützung für verschiedene Browser und stellt eine nützliche Teilmenge von Funktionen bereit. Auch wenn es nicht die volle Bandbreite an Filtern und anderen Effekten der Web Audio API nutzt, können Sie damit die meisten gewünschten Dinge tun.

Wenn Sie eine Lösung zur Sound-Erstellung oder ein instrumentenbasiertes Option suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet erweiterte Planungsfunktionen, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen, die auf der Web Audio API aufbauen.

[R-audio](https://github.com/bbc/r-audio), aus der [Abteilung für Forschung & Entwicklung der BBC](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c), ist eine Bibliothek von React-Komponenten, die darauf abzielt, eine "intuitivere, deklarativere Schnittstelle zu Web Audio" bereitzustellen. Wenn Sie es gewohnt sind, JSX zu schreiben, könnte es sich lohnen, es sich anzusehen.

## Autoplay-Richtlinie

Browser beginnen, eine Autoplay-Richtlinie zu implementieren, die im Allgemeinen folgendermaßen zusammengefasst werden kann:

> "Erstellen oder weiterführen des Kontexts innerhalb einer Benutzeraktion".

Aber was bedeutet das in der Praxis? Eine Benutzeraktion wird als benutzerinitiiertes Ereignis interpretiert, normalerweise ein `click`-Ereignis. Browserhersteller haben entschieden, dass Web-Audio-Kontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen vom Benutzer gestartet werden. Dies liegt daran, dass automatisch abgespieltes Audio wirklich nervig und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audio-Kontext erstellen (entweder offline oder online), wird er mit einem `state` erstellt, das `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten und den Audio-Kontext innerhalb eines `click`-Ereignisses erstellen, sollte der Zustand automatisch auf `running` gesetzt werden. Hier ist ein Beispiel, wie der Kontext innerhalb eines `click`-Ereignisses erstellt wird:

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

Wenn Sie jedoch den Kontext außerhalb einer Benutzeraktion erstellen, wird sein Zustand auf `suspended` gesetzt und muss nach Benutzerinteraktion gestartet werden. Wir können hier dasselbe `click`-Ereignis verwenden, den Zustand des Kontexts testen und ihn starten, falls er `suspended` ist, indem wir die [`resume()`](/de/docs/Web/API/AudioContext/resume)-Methode verwenden.

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

Sie arbeiten möglicherweise stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), in diesem Fall können Sie den unterbrochenen Audio-Kontext mit der [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering)-Methode wieder aufnehmen.

## Benutzerkontrolle

Wenn Ihre Website oder Anwendung Sound enthält, sollten Sie dem Benutzer die Kontrolle darüber ermöglichen, andernfalls wird es wieder nervig. Dies kann durch Abspiel-/Stopp- und Lautstärke-/Stummschalteinstellungen erreicht werden. Die [Web Audio API Anleitung](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) behandelt, wie dies getan wird.

Wenn Sie Schaltflächen haben, die Audio ein- und ausschalten, ist es eine gute Option, das ARIA [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)-Attribut auf ihnen zu verwenden, um assistive Technologie darauf hinzuweisen, was der genaue Zweck der Schaltfläche ist, und damit die App zugänglicher zu machen. Es gibt [hier eine Demo, wie man es verwendet](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

Da Sie mit der Web Audio API viele sich ändernde Werte bearbeiten und den Benutzern die Kontrolle darüber ermöglichen möchten, ist das [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Element oft eine gute Wahl für die Steuerung. Es ist eine gute Option, da Sie Mindest- und Höchstwerte sowie Schritte mit dem [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festlegen können.

## Einstellen von AudioParam-Werten

Es gibt zwei Möglichkeiten, [`AudioNode`](/de/docs/Web/API/AudioNode)-Werte zu manipulieren, die selbst Objekte der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle sind. Die erste Möglichkeit ist, den Wert direkt über die Eigenschaft zu setzen. Wenn wir zum Beispiel den `gain`-Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies so tun:

```js
gainNode.gain.value = 0.5;
```

Dies setzt unsere Lautstärke auf die Hälfte. Wenn Sie jedoch eine der definierten Methoden von `AudioParam` verwenden, um diese Werte zu setzen, haben diese Vorrang vor der obigen Eigenschaftseinstellung. Wenn Sie beispielsweise den `gain`-Wert in 2 Sekunden auf 1 erhöhen möchten, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel überschreiben (wie es sollte), selbst wenn es später in Ihrem Code kommen würde.

In diesem Sinne, wenn Ihre Website oder Anwendung Timing und Planung erfordert, ist es am besten, die [`AudioParam`](/de/docs/Web/API/AudioParam)-Methoden zum Einstellen von Werten zu verwenden. Wenn Sie sicher sind, dass dies nicht erforderlich ist, ist das Setzen über die `value`-Eigenschaft in Ordnung.
