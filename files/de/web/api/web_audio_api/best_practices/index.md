---
title: Web Audio API Best Practices
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: a43e2d767bcb896ae9ba8e0dff1abd6135b63dba
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt keine strikt richtige oder falsche Methode beim Schreiben von kreativem Code. Solange Sie Sicherheit, Leistung und Barrierefreiheit berücksichtigen, können Sie Ihren eigenen Stil adaptieren. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um Sound mit der Web Audio API zu laden, und es kann etwas verwirrend sein zu entscheiden, welche davon Sie verwenden sollten.

Wenn Sie mit Dateien arbeiten, können Sie die Datei entweder von einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (z. B. einem {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element) beziehen, oder die Datei abrufen und in einen Puffer decodieren. Beide Wege sind legitim, jedoch ist es häufiger, erstere Methode für vollständige Tracks zu nutzen, während die letztere Methode für kürzere, mehr sample-artige Tracks verwendet wird.

Medienelemente unterstützen von Haus aus Streaming. Der Ton wird zu spielen beginnen, wenn der Browser feststellt, dass er die restliche Datei laden kann, bevor die Wiedergabe endet. Sie können ein Beispiel dafür, wie man dies mit der Web Audio API verwendet, im [Web Audio API Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) sehen.

Sie haben jedoch mehr Kontrolle, wenn Sie einen Pufferknoten verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([in diesem Abschnitt unseres fortgeschrittenen Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) wird ein guter Weg dafür gezeigt), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und genauere Manipulation bedeutet.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Nutzers arbeiten möchten, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Schnittstelle zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie Audio aufnehmen oder möglicherweise analysieren möchten.

Der letzte Weg ist, Ihren eigenen Sound zu generieren, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Puffers und Füllen mit Ihren eigenen Daten erfolgen kann. Schauen Sie sich das [Tutorial zum Erstellen Ihres eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) für Informationen zum Erstellen von Klängen mit Oszillatoren und Puffern an.

## Cross-Browser und Legacy-Unterstützung

Die Web Audio API-Spezifikation entwickelt sich ständig weiter und wie bei den meisten Dingen im Web gibt es einige Probleme mit ihrer konsistenten Funktionsweise über verschiedene Browser hinweg. Hier betrachten wir Optionen, um Probleme mit der Cross-Browser-Kompatibilität zu umgehen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das API-Funktionalität konsistent über alle Browser hinweg schafft und Lücken füllt, sobald sie gefunden werden. Es ist ständig in Entwicklung und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Es gibt auch die Option von Bibliotheken, von denen es je nach Ihrem Anwendungsfall einige gibt. Für eine gute Allrounder-Lösung ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet Cross-Browser-Unterstützung und eine nützliche Teilmenge von Funktionalitäten. Obwohl es nicht das gesamte Spektrum an Filtern und anderen Effekten nutzt, die die Web Audio API mit sich bringt, können Sie die meisten Dinge, die Sie tun möchten, erreichen.

Wenn Sie nach einer Option für die Tonerzeugung oder einem eher instrumentbasierten Ansatz suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet erweiterte Planungsfähigkeiten, Synthesizer und Effekte und intuitive musikalische Abstraktionen, die auf der Web Audio API basieren.

[R-audio](https://github.com/bbc/r-audio) von der [Entwicklungsabteilung der BBC](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c) ist eine Bibliothek von React-Komponenten, die darauf abzielt, eine „intuitivere, deklarative Schnittstelle zu Web Audio“ bereitzustellen. Wenn Sie es gewohnt sind, JSX zu schreiben, könnte sich ein Blick darauf lohnen.

## Autoplay-Policy

Browser haben begonnen, eine Autoplay-Policy zu implementieren, die im Allgemeinen zusammengefasst wie folgt lautet:

> "Erstellen oder Fortsetzen des Kontexts innerhalb einer Nutzeraktion."

Aber was bedeutet das in der Praxis? Eine Nutzeraktion wurde interpretiert, um ein vom Benutzer initiiertes Ereignis zu bedeuten, normalerweise ein `click`-Ereignis. Browser-Anbieter haben entschieden, dass Web Audio-Kontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen von einem Nutzer gestartet werden. Dies liegt daran, dass automatisch abspielendes Audio wirklich störend und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audio-Kontext erstellen (entweder offline oder online), wird er mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten, und Sie den Audio-Kontext innerhalb eines `click`-Ereignisses erstellen, sollte der Zustand automatisch auf `running` gesetzt werden. Hier ist ein Beispiel, wie man den Kontext innerhalb eines `click`-Ereignisses erstellt:

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

Wenn Sie den Kontext jedoch außerhalb einer Nutzeraktion erstellen, wird sein Zustand auf `suspended` gesetzt und er muss nach einer Nutzerinteraktion gestartet werden. Wir können hier dasselbe Klick-Event-Beispiel nutzen, den Zustand des Kontexts prüfen und ihn starten, falls er ausgesetzt ist, indem wir die [`resume()`](/de/docs/Web/API/AudioContext/resume)-Methode verwenden.

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

Sie arbeiten möglicherweise stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), in diesem Fall können Sie den ausgesetzten Audiokontext mit der [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering)-Methode fortsetzen.

## Nutzersteuerung

Falls Ihre Website oder Anwendung Sound enthält, sollten Sie dem Nutzer die Kontrolle darüber überlassen, da es sonst erneut störend wird. Dies kann durch Play/Stop- und Lautstärke-/Stummschaltschalter erreicht werden. Das [Web Audio API Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) behandelt, wie dies möglich ist.

Einige Bedienelemente, die Sie nützlich finden könnten, sind: {{HTMLElement("button")}}-Elemente für Play/Pause, {{HTMLElement("select")}}-Elemente zum Auswählen von Optionen wie Wiedergabegeschwindigkeit, [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Elemente zum Umschalten von Stumm, und [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente zur Lautstärkesteuerung und Eingabe anderer Zahlenwerte.

Alle allgemeinen Überlegungen zur Barrierefreiheit von Formularen gelten auch hier. Wenn Sie {{HTMLElement("button")}}-Elemente verwenden, sollten Sie sicherstellen, dass diese eine klare [Beschriftung](/de/docs/Web/HTML/Reference/Elements/label) haben. Dies hilft Screenreadern und anderen unterstützenden Technologien, den Zweck des Buttons zu verstehen. Wenn Sie Buttons haben, die Audio ein- und ausschalten, ist es eine gute Option, das ARIA-Attribut [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) darauf zu verwenden, um unterstützenden Technologien den genauen Zweck des Buttons zu signalisieren und somit die App zugänglicher zu machen.

## Einstellen von AudioParam-Werten

Es gibt zwei Möglichkeiten, um [`AudioNode`](/de/docs/Web/API/AudioNode)-Werte zu verändern, die selbst Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle sind. Die erste ist, den Wert direkt über die Eigenschaft zu setzen. Wenn wir zum Beispiel den `gain`-Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies so tun:

```js
gainNode.gain.value = 0.5;
```

Dies setzt unsere Lautstärke auf die Hälfte. Wenn Sie jedoch eine der im `AudioParam` definierten Methoden zum Setzen dieser Werte verwenden, haben diese Vorrang gegenüber der obigen Eigenschaftseinstellung. Wenn Sie zum Beispiel möchten, dass der `gain`-Wert in 2 Sekunden auf 1 erhöht wird, können Sie dies so tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel überschreiben (wie es sollte), selbst wenn es später in Ihrem Code vorkommt.

Wenn Sie dies im Hinterkopf behalten, ist es am besten, die Methoden von [`AudioParam`](/de/docs/Web/API/AudioParam) zum Setzen von Werten zu verwenden, falls Ihre Website oder Anwendung Timing und Planung erfordert. Wenn Sie sicher sind, dass dies nicht der Fall ist, ist das Setzen des Werts mit der `value`-Eigenschaft ausreichend.
