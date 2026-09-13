---
title: Web Audio API Best Practices
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt kein strikt richtiges oder falsches Vorgehen beim Schreiben von kreativem Code. Solange Sie Sicherheit, Leistung und Zugänglichkeit berücksichtigen, können Sie sich Ihren eigenen Stil aneignen. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um mit der Web Audio API Sounds zu laden, und es kann etwas verwirrend sein, welche man verwenden sollte.

Wenn Sie mit Dateien arbeiten, können Sie die Datei entweder von einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (also einem {{htmlelement("audio")}} oder {{htmlelement("video")}} Element) abrufen oder die Datei abrufen und in einen Puffer dekodieren. Beide Methoden sind legitim, jedoch ist es üblicher, die erstere Methode bei der Arbeit mit kompletten Tracks zu verwenden, und die letztere bei kürzeren, sampleartigen Tracks.

Media-Elemente haben von Haus aus Streaming-Unterstützung. Das Audio wird starten, wenn der Browser bestimmt, dass er den Rest der Datei laden kann, bevor die Wiedergabe endet. Ein Beispiel dafür, wie man dies mit der Web Audio API verwendet, finden Sie im [Anleitung zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Sie haben jedoch mehr Kontrolle, wenn Sie einen Pufferknoten verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres fortgeschritten Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt eine gute Vorgehensweise), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und genauere Manipulation ermöglicht.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Benutzers arbeiten wollen, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) Schnittstelle zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie möglicherweise Audio aufnehmen oder analysieren möchten.

Die letzte Möglichkeit ist, Ihren eigenen Sound zu erzeugen, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Puffers und Befüllen mit eigenen Daten erfolgen kann. Schauen Sie sich das [Tutorial zur Erstellung eines eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um mehr über das Erzeugen von Klängen mit Oszillatoren und Puffern zu erfahren.

## Browser-Kompatibilität & Unterstützung älterer Versionen

Die Web Audio API-Spezifikation entwickelt sich ständig weiter und wie bei den meisten Dingen im Web gibt es Probleme mit der konsistenten Funktion über verschiedene Browser. Hier betrachten wir Optionen, um Browser-Übergreifende Probleme zu umgehen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das die API-Funktionalität konsistent über verschiedene Browser hinweg erstellt und Lücken füllt, sobald sie gefunden werden. Es befindet sich in ständiger Entwicklung und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Es besteht auch die Möglichkeit, Bibliotheken zu verwenden, von denen es je nach Anwendungsfall einige gibt. Für eine gute Allrounder-Option ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet plattformübergreifende Unterstützung und stellt eine nützliche Funktionalitätsuntermenge bereit. Obwohl es nicht das volle Spektrum an Filtern und anderen Effekten nutzt, die die Web Audio API bietet, können Sie damit das Meiste von dem, was Sie tun möchten, erreichen.

Wenn Sie nach Sound-Erzeugung oder einer stärker instrumentenbasierten Option suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet fortgeschrittene Planungsfunktionen, Synths und Effekte sowie intuitive musikalische Abstraktionen, die auf der Web Audio API aufbauen.

[R-audio](https://github.com/bbc/r-audio) von der [BBC's Research & Development-Abteilung](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c) ist eine Bibliothek von React-Komponenten, die darauf abzielt, eine „intuitivere, deklarative Schnittstelle zu Web Audio“ bereitzustellen. Wenn Sie mit dem Schreiben von JSX vertraut sind, könnte es sich lohnen, einen Blick darauf zu werfen.

## Autoplay-Politik

Browser haben begonnen, eine Autoplay-Politik umzusetzen, die im Allgemeinen wie folgt zusammengefasst werden kann:

> "Einen Kontext innerhalb einer Benutzeraktion erstellen oder fortsetzen".

Aber was bedeutet das in der Praxis? Eine Benutzeraktion wurde interpretiert als ein vom Benutzer initiiertes Ereignis, normalerweise ein `click`-Ereignis. Browser-Anbieter entschieden, dass Web Audio-Kontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen vom Benutzer gestartet werden. Dies liegt daran, dass automatisch abgespieltes Audio wirklich störend und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audio-Kontext erstellen (entweder offline oder online), wird er mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten und den Audio-Kontext innerhalb eines `click`-Ereignisses erstellen, sollte der Status automatisch auf `running` gesetzt werden. Hier ist ein Beispiel für die Erstellung des Kontexts innerhalb eines `click`-Ereignisses:

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const audioCtx = new AudioContext();
  // Do something with the audio context
});
```

Wenn Sie den Kontext jedoch außerhalb einer Benutzeraktion erstellen, wird sein Status auf `suspended` gesetzt und muss nach einer Benutzerinteraktion gestartet werden. Wir können hier dasselbe Klickereignis-Beispiel verwenden, den Zustand des Kontexts testen und ihn, falls er suspendiert ist, mit der Methode [`resume()`](/de/docs/Web/API/AudioContext/resume) starten.

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

Wenn Sie stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) arbeiten, können Sie den suspendierten Audio-Kontext mit der Methode [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering) fortsetzen.

## Benutzerkontrolle

Wenn Ihre Website oder Anwendung Ton enthält, sollten Sie dem Benutzer die Kontrolle darüber ermöglichen, andernfalls wird es erneut störend. Dies kann durch Play/Stop- und Lautstärke/Stummschalten-Steuerungen erreicht werden. Das [Anleitung zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) geht darauf ein, wie man dies tut.

Einige Steuerungen, die Sie möglicherweise nützlich finden, sind: {{HTMLElement("button")}}-Elemente für Play/Pause, {{HTMLElement("select")}}-Elemente zum Auswählen von Optionen wie Wiedergabegeschwindigkeit, [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Elemente zum Umschalten der Stummschaltung und [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Elemente zur Lautstärkeregelung und zur Eingabe anderer Zahlenwerte.

Alle allgemeinen Überlegungen zur Barrierefreiheit von Formularen gelten. Beim Einsatz von {{HTMLElement("button")}}-Elementen sollten Sie sicherstellen, dass diese eine klare [Bezeichnung](/de/docs/Web/HTML/Reference/Elements/label) haben. Dies hilft Bildschirmlesegeräten und anderen unterstützenden Technologien, den Zweck der Schaltfläche zu verstehen. Wenn Sie Schaltflächen haben, die Audio ein- und ausschalten, ist es eine gute Option, das ARIA-Attribut [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) auf ihnen zu verwenden, um unterstützender Technologie mitzuteilen, was der genaue Zweck der Schaltfläche ist, und damit die App zugänglicher zu machen.

## Einstellen von AudioParam-Werten

Es gibt zwei Möglichkeiten, Werte von [`AudioNode`](/de/docs/Web/API/AudioNode) zu manipulieren, die selbst Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam) Interface sind. Die erste besteht darin, den Wert direkt über die Eigenschaft festzulegen. Wenn wir beispielsweise den Wert `gain` eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies wie folgt tun:

```js
gainNode.gain.value = 0.5;
```

Dadurch wird unsere Lautstärke auf die Hälfte gesetzt. Wenn Sie jedoch eine der im `AudioParam` definierten Methoden verwenden, um diese Werte festzulegen, haben diese Vorrang vor der obigen Eigenschaftseinstellung. Wenn Sie beispielsweise den `gain`-Wert in 2 Sekunden auf 1 anheben möchten, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Dies wird das vorherige Beispiel überschreiben (wie es sein sollte), selbst wenn es später in Ihrem Code steht.

Vor diesem Hintergrund ist es, wenn Ihre Website oder Anwendung Timing und Planung erfordert, am besten, bei den Methoden von [`AudioParam`](/de/docs/Web/API/AudioParam) zur Werteinstellung zu bleiben. Wenn Sie sicher sind, dass dies nicht der Fall ist, ist das Einstellen mit der `value`-Eigenschaft in Ordnung.
