---
title: Best Practices für die Web Audio API
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt keine strikt richtige oder falsche Methode, wenn es um das Schreiben von kreativem Code geht. Solange Sie Sicherheit, Leistung und Zugänglichkeit berücksichtigen, können Sie Ihren eigenen Stil anpassen. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um Klang mit der Web Audio API zu laden, und es kann etwas verwirrend sein, welche man verwenden sollte.

Wenn Sie mit Dateien arbeiten, ziehen Sie entweder in Betracht, die Datei von einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (d.h. einem {{htmlelement("audio")}} oder {{htmlelement("video")}} Element) abzurufen oder die Datei abzurufen und sie in einen Puffer zu decodieren. Beide sind legitime Arbeitsweisen, jedoch ist die erstere Methode häufiger, wenn Sie mit vollständigen Tracks arbeiten, und die letztere, wenn Sie mit kürzeren, eher sampleartigen Tracks arbeiten.

Medienelemente unterstützen von Haus aus Streaming. Der Ton wird abgespielt, sobald der Browser bestimmt, dass er den Rest der Datei laden kann, bevor die Wiedergabe endet. Ein Beispiel für die Verwendung mit der Web Audio API finden Sie im [Anleitung zur Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Sie haben jedoch mehr Kontrolle, wenn Sie einen Puffernode verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres fortgeschrittenen Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt eine gute Methode, dies zu tun), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und genauere Manipulation bedeutet.

Wenn Sie Audio von der Kamera oder dem Mikrofon des Benutzers verarbeiten möchten, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) Schnittstelle zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie Audio aufnehmen oder möglicherweise analysieren möchten.

Die letzte Möglichkeit besteht darin, Ihren eigenen Ton zu erzeugen, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Puffers und Befüllen mit eigenen Daten geschehen kann. Schauen Sie sich die [Anleitung zum Erstellen eines eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um Informationen zum Erstellen von Klängen mit Oszillatoren und Puffern zu erhalten.

## Cross-Browser- und Legacy-Unterstützung

Die Web Audio API-Spezifikation entwickelt sich ständig weiter und wie die meisten Dinge im Web gibt es einige Probleme mit der Konsistenz über verschiedene Browser hinweg. Hier betrachten wir Optionen, um Cross-Browser-Probleme zu umgehen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das API-Funktionalitäten konsistent über verschiedene Browser hinweg schafft und Lücken füllt, sobald sie entdeckt werden. Es ist ständig in der Entwicklung und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Es gibt auch die Möglichkeit von Bibliotheken, von denen es mehrere je nach Anwendungsfall gibt. Für eine gute Allzwecklösung ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet Cross-Browser-Unterstützung und eine nützliche Teilmenge von Funktionen. Obwohl es nicht das volle Spektrum an Filtern und anderen Effekten nutzt, die die Web Audio API bietet, können Sie das meiste tun, was Sie möchten.

Wenn Sie an Klanggestaltung oder einer mehr instrumentenbasierten Option interessiert sind, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet erweiterte Zeitplanfähigkeiten, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen, die auf der Web Audio API basieren.

[R-audio](https://github.com/bbc/r-audio), von der [BBC's Research & Development Abteilung](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c), ist eine Bibliothek von React-Komponenten, die darauf abzielt, eine „intuitivere, deklarative Schnittstelle zur Web Audio“ zu bieten. Wenn Sie es gewohnt sind, JSX zu schreiben, könnte es sich lohnen, einen Blick darauf zu werfen.

## Autoplay-Richtlinie

Browser haben begonnen, eine Autoplay-Richtlinie zu implementieren, die im Allgemeinen wie folgt zusammengefasst werden kann:

> "Erstellen oder Fortsetzen des Kontexts innerhalb einer Benutzeraktion".

Aber was bedeutet das in der Praxis? Eine Benutzeraktion wurde als ein benutzerinitiierter Event interpretiert, normalerweise ein `click`-Event. Browseranbieter entschieden, dass Web Audio-Kontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen von einem Benutzer gestartet werden. Dies liegt daran, dass das automatische Abspielen von Audio sehr störend und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audiokontext erstellen (entweder offline oder online), wird er mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten und den Audiokontext innerhalb eines `click`-Events erstellen, sollte der Status automatisch auf `running` gesetzt werden. Hier ist ein Beispiel für das Erstellen des Kontexts innerhalb eines `click`-Events:

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const audioCtx = new AudioContext();
  // Do something with the audio context
});
```

Wenn Sie jedoch den Kontext außerhalb einer Benutzeraktion erstellen, wird sein Status auf `suspended` gesetzt und muss nach Benutzerinteraktion gestartet werden. Wir können das gleiche Click-Event-Beispiel hier verwenden, den Status des Kontexts testen und ihn starten, falls er aufgehängt ist, indem wir die [`resume()`](/de/docs/Web/API/AudioContext/resume)-Methode verwenden.

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");

button.addEventListener("click", () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
});
```

Möglicherweise arbeiten Sie stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), in diesem Fall können Sie den suspendierten Audiokontext mit der [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering)-Methode fortsetzen.

## Benutzerkontrolle

Wenn Ihre Website oder Anwendung Ton enthält, sollten Sie dem Benutzer die Kontrolle darüber geben, andernfalls wird es wieder einmal störend. Dies kann durch Wiedergabe-/Stopp- und Lautstärke-/Stummschalttasten erreicht werden. Die [Anleitung zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erklärt, wie man dies macht.

Einige nützliche Steuerungen, die Sie finden könnten, sind: {{HTMLElement("button")}} Elemente für Wiedergabe/Pause, {{HTMLElement("select")}} Elemente für die Auswahl von Optionen wie Wiedergabegeschwindigkeit, [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Elemente zum Umschalten der Stummschaltung und [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente zur Lautstärkeregelung und Eingabe anderer Zahlenwerte.

Alle üblichen Überlegungen zur Zugänglichkeit von Formularen gelten. Bei der Verwendung von {{HTMLElement("button")}}-Elementen sollten Sie sicherstellen, dass diese eine klare [Label](/de/docs/Web/HTML/Reference/Elements/label) haben. Dies hilft Screenreader und anderen unterstützenden Technologien, den Zweck des Buttons zu verstehen. Wenn Sie Tasten haben, die Audio ein- und ausschalten, ist die Verwendung des ARIA-Attributs [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) darauf eine gute Option, um unterstützenden Technologien anzuzeigen, was der genaue Zweck des Buttons ist, und damit die App zugänglicher zu machen.

## Werte von AudioParam setzen

Es gibt zwei Möglichkeiten, Werte von [`AudioNode`](/de/docs/Web/API/AudioNode) zu manipulieren, die selbst Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle sind. Die erste besteht darin, den Wert direkt über die Eigenschaft zu setzen. Wenn wir beispielsweise den `gain`-Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies so tun:

```js
gainNode.gain.value = 0.5;
```

Dies setzt unsere Lautstärke auf die Hälfte. Wenn Sie jedoch eine der definierten Methoden von `AudioParam` verwenden, um diese Werte zu setzen, haben diese Vorrang vor der obigen Eigenschaftseinstellung. Wenn Sie beispielsweise möchten, dass der `gain`-Wert in 2 Sekunden auf 1 erhöht wird, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel überschreiben (wie es sollte), selbst wenn es später in Ihrem Code kommt.

Unter Berücksichtigung dessen, wenn Ihre Website oder Anwendung Timing und Planung erfordert, ist es am besten, sich an die Methoden von [`AudioParam`](/de/docs/Web/API/AudioParam) zu halten, um Werte zu setzen. Wenn Sie sicher sind, dass dies nicht der Fall ist, ist die Einstellung mit der `value`-Eigenschaft ausreichend.
