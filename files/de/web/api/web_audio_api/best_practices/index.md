---
title: Web Audio API Best Practices
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt keinen strikten richtigen oder falschen Weg beim Schreiben von kreativem Code. Solange Sie Sicherheit, Leistung und Barrierefreiheit berücksichtigen, können Sie Ihren eigenen Stil anpassen. In diesem Artikel teilen wir eine Reihe von _Best Practices_ — Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um mit der Web Audio API Sound zu laden, und es kann etwas verwirrend sein, welche Sie verwenden sollten.

Wenn Sie mit Dateien arbeiten, betrachten Sie entweder das Abrufen der Datei aus einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) (z.B. einem {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element), oder Sie möchten die Datei abrufen und in einen Puffer dekodieren. Beide sind legitime Arbeitsweisen, jedoch wird die erstere Methode häufiger verwendet, wenn Sie mit vollständigen Tracks arbeiten, und die letztere, wenn Sie mit kürzeren, mehr sampleartigen Tracks arbeiten.

Media-Elemente haben standardmäßig Streaming-Unterstützung. Der Ton wird abgespielt, wenn der Browser feststellt, dass er den Rest der Datei laden kann, bevor das Abspielen endet. Ein Beispiel, wie dies mit der Web Audio API verwendet werden kann, finden Sie im [Anleitungsartikel zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Sie haben jedoch mehr Kontrolle, wenn Sie einen Pufferknoten verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres erweiterten Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt eine gute Möglichkeit, dies zu tun), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und genauere Manipulation bedeutet.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Benutzers arbeiten möchten, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)-Schnittstelle zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie Audio möglicherweise aufnehmen oder analysieren möchten.

Die letzte Methode besteht darin, Ihren eigenen Ton zu erzeugen, was entweder mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) oder durch Erstellen eines Puffers und Auffüllen mit Ihren eigenen Daten geschehen kann. Schauen Sie sich das [Tutorial zur Erstellung Ihres eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um Informationen zur Erstellung von Sounds mit Oszillatoren und Puffern zu erhalten.

## Unterstützung für verschiedene Browser und ältere Versionen

Die Web Audio API-Spezifikation entwickelt sich ständig weiter, und wie bei den meisten Dingen im Web gibt es einige Probleme mit der konsistenten Funktion über verschiedene Browser hinweg. Hier schauen wir uns Optionen an, um browserübergreifende Probleme zu umgehen.

Es gibt das [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm-Paket, das API-Funktionalität konsistent über verschiedene Browser hinweg erstellt und Lücken füllt, sobald sie gefunden werden. Es ist ständig in Entwicklung und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Es gibt auch die Möglichkeit von Bibliotheken, von denen es je nach Anwendungsfall einige gibt. Für einen guten Alleskönner ist [howler.js](https://howlerjs.com/) eine gute Wahl. Es bietet Unterstützung für verschiedene Browser und eine nützliche Teilmenge an Funktionalitäten. Obwohl es nicht das volle Spektrum an Filtern und anderen Effekten ausschöpft, die die Web Audio API bietet, können Sie die meisten Dinge tun, die Sie tun möchten.

Wenn Sie nach Klangerschaffung oder einer instrumentbasierten Option suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet fortschrittliche Planungsfähigkeiten, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen, die auf der Web Audio API aufbauen.

[R-audio](https://github.com/bbc/r-audio) von der [Forschungs- & Entwicklungsabteilung der BBC](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c) ist eine Bibliothek von React-Komponenten, die darauf abzielt, eine "intuitivere, deklarativere Schnittstelle zur Web Audio" bereitzustellen. Wenn Sie es gewohnt sind, JSX zu schreiben, könnte es sich lohnen, einen Blick darauf zu werfen.

## Autoplay-Richtlinie

Browser haben begonnen, eine Autoplay-Richtlinie zu implementieren, die im Allgemeinen zusammengefasst werden kann als:

> "Erstellen oder fortsetzen eines Kontexts aus einer Benutzeraktion heraus".

Aber was bedeutet das in der Praxis? Eine Benutzeraktion wurde so interpretiert, dass sie ein benutzerinitiiertes Ereignis darstellt, normalerweise ein `click`-Ereignis. Browserentwickler entschieden, dass Web Audio-Kontexte nicht automatisch Audio abspielen dürfen; vielmehr sollen sie von einem Benutzer gestartet werden. Dies liegt daran, dass automatisch abspielendes Audio wirklich nervig und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audiokontext erstellen (entweder offline oder online), wird dieser mit einem `state` erstellt, das entweder `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) arbeiten, sollte der Zustand automatisch auf `running` gesetzt werden, wenn Sie den Audiokontext in einem `click`-Ereignis erstellen. Hier ist ein einfaches Beispiel dafür, wie man den Kontext in einem `click`-Ereignis erstellt:

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

Wenn Sie jedoch den Kontext außerhalb einer Benutzeraktion erstellen, wird sein Zustand auf `suspended` gesetzt und er muss nach der Benutzerinteraktion gestartet werden. Wir können hier das gleiche Klickereignis-Beispiel verwenden, den Zustand des Kontextes testen und ihn starten, falls er angehalten ist, indem wir die [`resume()`](/de/docs/Web/API/AudioContext/resume)-Methode verwenden.

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

Sie arbeiten möglicherweise stattdessen mit einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext), und in diesem Fall können Sie den angehaltenen Audiokontext mit der [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering)-Methode fortsetzen.

## Benutzerkontrolle

Wenn Ihre Website oder Anwendung Ton enthält, sollten Sie dem Benutzer die Kontrolle darüber geben, sonst wird es wieder nervig. Dies kann durch Play/Stop- und Lautstärke/Stummschaltungssteuerungen erreicht werden. Das [Tutorial zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) behandelt, wie dies gemacht wird.

Wenn Sie Tasten haben, die Audio ein- und ausschalten, ist die Verwendung des ARIA-Attributs [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role) auf ihnen eine gute Option, um unterstützenden Technologien zu signalisieren, welches die genaue Funktion der Taste ist, und somit die App zugänglicher zu machen. Es gibt [hier ein Demo, wie man es verwendet](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

Da Sie innerhalb der Web Audio API mit vielen sich ändernden Werten arbeiten und den Benutzern Kontrolle darüber geben möchten, ist der [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) häufig eine gute Wahl, um diese Steuerung zu nutzen. Es ist eine gute Option, da Sie Mindest- und Höchstwerte sowie Inkremente mit dem [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festlegen können.

## Einstellen von AudioParam-Werten

Es gibt zwei Möglichkeiten, [`AudioNode`](/de/docs/Web/API/AudioNode)-Werte zu manipulieren, die selbst Objekte der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle sind. Die erste besteht darin, den Wert direkt über die Eigenschaft festzulegen. Wenn wir zum Beispiel den `gain`-Wert eines [`GainNode`](/de/docs/Web/API/GainNode) ändern wollen, würden wir dies so tun:

```js
gainNode.gain.value = 0.5;
```

Dies wird unsere Lautstärke auf die Hälfte einstellen. Wenn Sie jedoch eine der durch `AudioParam` definierten Methoden verwenden, um diese Werte einzustellen, werden sie Vorrang vor der oben beschriebenen Eigenschaftseinstellung haben. Wenn Sie zum Beispiel den `gain`-Wert in 2 Sekunden auf 1 erhöhen möchten, können Sie dies tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Es wird das vorherige Beispiel (wie es sollte) überschreiben, selbst wenn es später in Ihrem Code kommt.

Wenn Ihre Website oder Anwendung daher Timing und Planung erfordert, ist es am besten, die [`AudioParam`](/de/docs/Web/API/AudioParam)-Methoden zur Einstellung der Werte zu verwenden. Wenn Sie sicher sind, dass dies nicht der Fall ist, ist es in Ordnung, ihn mit der `value`-Eigenschaft einzustellen.
