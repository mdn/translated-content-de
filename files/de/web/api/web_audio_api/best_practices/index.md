---
title: Best Practices für die Web Audio API
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt keinen strikt richtigen oder falschen Weg bei der Erstellung von kreativem Code. Solange Sie Sicherheit, Leistung und Zugänglichkeit berücksichtigen, können Sie Ihren eigenen Stil anpassen. In diesem Artikel teilen wir eine Reihe von _best practices_ — Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um Sound mit der Web Audio API zu laden, und es kann etwas verwirrend sein, welche man verwenden sollte.

Wenn Sie mit Dateien arbeiten, betrachten Sie entweder das Abrufen der Datei von einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (d.h. ein {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element), oder Sie wollen die Datei abrufen und in einen Buffer dekodieren. Beide Methoden sind legitim; jedoch ist es üblicher, die erstere Methode bei langen Tracks und die letztere bei kürzeren, eher sampleartigen Tracks zu verwenden.

Medien-Elemente haben standardmäßig Streaming-Unterstützung. Das Audio wird zu spielen beginnen, wenn der Browser bestimmt, dass er den Rest der Datei laden kann, bevor das Abspielen endet. Ein Beispiel für die Verwendung mit der Web Audio API finden Sie im [Tutorial zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Mit einem Buffer-Node haben Sie jedoch mehr Kontrolle. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres erweiterten Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt einen guten Weg dazu), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und genauere Manipulation bedeutet.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Benutzers arbeiten möchten, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Schnittstelle zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie möglicherweise Audio aufnehmen oder analysieren möchten.

Die letzte Möglichkeit besteht darin, Ihren eigenen Sound zu generieren, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Buffers und Befüllen mit eigenen Daten erfolgen kann. Schauen Sie sich das [Tutorial zum Erstellen eines eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um Informationen zum Erstellen von Klängen mit Oszillatoren und Buffern zu erhalten.

## Cross-Browser- und Legacy-Unterstützung

Die Web Audio API-Spezifikation entwickelt sich ständig weiter und wie bei den meisten Dingen im Web gibt es einige Probleme, die ein konsistentes Arbeiten in verschiedenen Browsern erschweren. Hier werden wir Optionen zur Überwindung von Cross-Browser-Problemen betrachten.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das API-Funktionalität konsistent über verschiedene Browser hinweg bereitstellt und Lücken füllt, sobald sie gefunden werden. Es wird ständig weiterentwickelt und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Es gibt auch die Option von Bibliotheken, von denen es einige abhängig von Ihrem Anwendungsfall gibt. Für eine gute Allzweck-Lösung ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet Cross-Browser-Unterstützung und ein nützliches Subset an Funktionalität. Obwohl es nicht die ganze Bandbreite an Filtern und anderen Effekten der Web Audio API ausnutzt, können Sie damit das meiste machen, was Sie möchten.

Wenn Sie nach Sounderstellung oder einer instrumentbasierten Option suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet erweiterte Planungsmöglichkeiten, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen auf Basis der Web Audio API.

[R-audio](https://github.com/bbc/r-audio) von der [BBCs Forschungs- und Entwicklungsabteilung](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c) ist eine Bibliothek von React-Komponenten, die eine "intuitivere, deklarative Schnittstelle zu Web Audio" bieten soll. Wenn Sie es gewohnt sind, JSX zu schreiben, könnte es sich lohnen, einen Blick darauf zu werfen.

## Autoplay-Richtlinie

Browser haben begonnen, eine Autoplay-Richtlinie zu implementieren, die im Allgemeinen so zusammengefasst werden kann:

> „Erstellen oder Fortsetzen eines Kontextes aus einem Benutzerbefehl heraus“.

Aber was bedeutet das in der Praxis? Ein Benutzerbefehl wird als benutzerinitiierte Aktion interpretiert, normalerweise ein `click`-Ereignis. Browser-Anbieter haben entschieden, dass Web-Audiokontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen von einem Benutzer gestartet werden. Dies liegt daran, dass automatisch abgespieltes Audio sehr störend und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audiokontext erstellen (entweder offline oder online), wird er mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten, sollte der Status automatisch auf `running` gesetzt werden, wenn Sie den Audiokontext aus einem `click`-Ereignis heraus erstellen. Hier ist ein Beispiel, wie der Kontext aus einem `click`-Ereignis heraus erstellt wird:

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

Wenn Sie jedoch den Kontext außerhalb eines Benutzerbefehls erstellen, wird sein Status auf `suspended` gesetzt und er muss nach einer Benutzerinteraktion gestartet werden. Wir können hier das gleiche Klickereignisbeispiel verwenden und den Status des Kontextes testen und ihn, falls er suspendiert ist, mit der [`resume()`](/de/docs/Web/API/AudioContext/resume)-Methode starten.

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

Möglicherweise arbeiten Sie stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), in welchem Fall Sie den suspendierten Audiokontext mit der [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering)-Methode fortsetzen können.

## Benutzersteuerung

Wenn Ihre Website oder Anwendung Ton enthält, sollten Sie dem Benutzer Kontrolle darüber gewähren, andernfalls wird es wieder ärgerlich. Dies kann durch Play/Stop- und Lautstärke/Stummschaltungskontrollen erreicht werden. Das [Tutorial zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erklärt, wie dies zu tun ist.

Wenn Sie Schaltflächen haben, die Audio ein- und ausschalten, ist die Verwendung des ARIA-Attributs [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role) auf ihnen eine gute Option, um unterstützenden Technologien das genaue Ziel der Schaltfläche zu signalisieren und dadurch die App zugänglicher zu machen. Es gibt [hier eine Demo, wie man es verwendet](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

Da Sie mit vielen sich ändernden Werten innerhalb der Web Audio API arbeiten und den Benutzern Kontrolle darüber geben möchten, ist die [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) oft eine gute Wahl für die Steuerung. Es ist eine gute Option, da Sie minimale und maximale Werte sowie Inkremente mit dem [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festlegen können.

## Einstellen von AudioParam-Werten

Es gibt zwei Möglichkeiten, [`AudioNode`](/de/docs/Web/API/AudioNode)-Werte zu manipulieren, die selbst Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle sind. Die erste besteht darin, den Wert direkt über die Eigenschaft festzulegen. Wenn wir beispielsweise den `gain`-Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern möchten, würden wir dies so tun:

```js
gainNode.gain.value = 0.5;
```

Dies wird unsere Lautstärke auf die Hälfte setzen. Wenn Sie jedoch eine der von `AudioParam` definierten Methoden verwenden, um diese Werte festzulegen, haben diese Vorrang vor der oben genannten Eigenschaftszuführung. Wenn Sie beispielsweise möchten, dass der `gain`-Wert in 2 Sekunden auf 1 ansteigt, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel überschreiben (wie es sein sollte), selbst wenn es später in Ihrem Code käme.

Dies im Hinterkopf behalten, ist es am besten, die Methoden von [`AudioParam`](/de/docs/Web/API/AudioParam) für die Wertzuweisung zu verwenden, wenn Ihre Website oder Anwendung Zeitplanung und -steuerung erfordert. Wenn Sie sicher sind, dass dies nicht der Fall ist, ist das Einstellen mit der `value`-Eigenschaft in Ordnung.
