---
title: Best Practices für die Web Audio API
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web Audio API")}}

Es gibt kein strikt richtig oder falsch beim Schreiben von kreativem Code. Solange Sie Sicherheit, Leistung und Barrierefreiheit beachten, können Sie Ihren eigenen Stil anpassen. In diesem Artikel teilen wir eine Reihe von _Best Practices_—Richtlinien, Tipps und Tricks für die Arbeit mit der Web Audio API.

## Laden von Sounds/Dateien

Es gibt vier Hauptmethoden, um Sound mit der Web Audio API zu laden, und es kann etwas verwirrend sein, welche Sie verwenden sollten.

Wenn Sie mit Dateien arbeiten, schauen Sie entweder auf das Abrufen der Datei von einem {{domxref("HTMLMediaElement")}} (z.B. ein {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element) oder darauf, die Datei abzurufen und in einen Puffer zu dekodieren. Beide sind legitime Arbeitsweisen, jedoch ist es üblicher, die erstere Methode bei der Arbeit mit vollständigen Tracks zu verwenden und die letztere bei kürzeren, mehr sampleähnlichen Tracks.

Medienelemente unterstützen Streaming standardmäßig. Der Ton beginnt zu spielen, wenn der Browser feststellt, dass er den Rest der Datei laden kann, bevor das Abspielen abgeschlossen ist. Ein Beispiel, wie man dies mit der Web Audio API verwenden kann, finden Sie im [Tutorial zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Sie haben jedoch mehr Kontrolle, wenn Sie einen Pufferknoten verwenden. Sie müssen die Datei anfordern und warten, bis sie geladen ist ([dieser Abschnitt unseres fortgeschrittenen Artikels](/de/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) zeigt einen guten Weg, dies zu tun), aber dann haben Sie direkten Zugriff auf die Daten, was mehr Präzision und genauere Manipulation bedeutet.

Wenn Sie mit Audio von der Kamera oder dem Mikrofon des Nutzers arbeiten wollen, können Sie darauf über die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) und die {{domxref("MediaStreamAudioSourceNode")}}-Schnittstelle zugreifen. Dies ist gut für WebRTC und Situationen, in denen Sie möglicherweise Audio aufnehmen oder analysieren wollen.

Die letzte Möglichkeit ist, Ihren eigenen Sound zu erzeugen, was entweder mit einem {{domxref("OscillatorNode")}} oder durch das Erstellen eines Puffers und dessen Befüllen mit eigenen Daten geschehen kann. Schauen Sie sich das [Tutorial zur Erstellung Ihres eigenen Instruments](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) an, um Informationen zur Erzeugung von Klängen mit Oszillatoren und Puffern zu erhalten.

## Unterstützung über verschiedene Browser und ältere Versionen

Die Spezifikation der Web Audio API entwickelt sich ständig weiter und wie die meisten Dinge im Web, gibt es einige Probleme mit der konsistenten Funktionsweise über verschiedene Browser hinweg. Hier werden wir uns Optionen ansehen, um sich mit plattformübergreifenden Problemen auseinanderzusetzen.

Es gibt das npm-Paket [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context), das API-Funktionalität konsistent über verschiedene Browser hinweg definiert und dabei Lücken füllt, sobald sie entdeckt werden. Es ist ständig in der Entwicklung und bemüht sich, mit der aktuellen Spezifikation Schritt zu halten.

Es gibt auch die Option von Bibliotheken, von denen es einige gibt, abhängig von Ihrem Anwendungsfall. Eine gute Allrounder-Option ist [howler.js](https://howlerjs.com/). Es bietet plattformübergreifende Unterstützung und einen nützlichen Funktionsumfang. Obwohl es nicht die gesamte Bandbreite von Filtern und anderen Effekten bietet, die die Web Audio API mit sich bringt, können Sie das meiste damit tun, was Sie wollen.

Wenn Sie nach einer Option zur Klangerzeugung oder einer instrumentenbasierten Lösung suchen, ist [tone.js](https://tonejs.github.io/) eine großartige Bibliothek. Sie bietet fortgeschrittene Terminplanungsfunktionen, Synthesizer und Effekte sowie intuitive musikalische Abstraktionen, die auf der Web Audio API basieren.

[R-audio](https://github.com/bbc/r-audio) von der [Forschungs- und Entwicklungsabteilung der BBC](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c) ist eine Bibliothek von React-Komponenten, die darauf abzielen, eine "intuitivere, deklarative Schnittstelle zur Web Audio zu bieten". Wenn Sie es gewohnt sind, JSX zu schreiben, könnte es sich lohnen, es sich anzusehen.

## Autoplay-Richtlinie

Browser haben angefangen, eine Autoplay-Richtlinie zu implementieren, die im Allgemeinen so zusammengefasst werden kann:

> "Erstellen oder Fortsetzen eines Kontextes innerhalb einer Nutzeraktion".

Aber was bedeutet das in der Praxis? Eine Nutzeraktion wird als ein vom Nutzer initiierter Event interpretiert, normalerweise ein `click`-Event. Browseranbieter haben entschieden, dass Web Audio-Kontexte nicht automatisch Audio abspielen dürfen; sie sollten stattdessen durch einen Nutzer gestartet werden. Dies liegt daran, dass automatisch abgespieltes Audio wirklich störend und aufdringlich sein kann. Aber wie gehen wir damit um?

Wenn Sie einen Audiokontext erstellen (entweder offline oder online), wird er mit einem `state` erstellt, der `suspended`, `running` oder `closed` sein kann.

Wenn Sie mit einem {{domxref("AudioContext")}} arbeiten, sollte der Status automatisch auf `running` gesetzt werden, wenn Sie den Audiokontext innerhalb eines `click`-Events erstellen. Hier ist ein einfaches Beispiel für die Erstellung des Kontexts innerhalb eines `click`-Events:

```js
const button = document.querySelector("button");
button.addEventListener(
  "click",
  () => {
    const audioCtx = new AudioContext();
    // Machen Sie etwas mit dem Audiokontext
  },
  false,
);
```

Wenn Sie den Kontext jedoch außerhalb einer Nutzeraktion erstellen, wird sein Status auf `suspended` gesetzt und muss nach einer Nutzerinteraktion gestartet werden. Wir können das gleiche Klick-Event-Beispiel hier verwenden, den Status des Kontexts überprüfen und ihn starten, falls er angehalten ist, unter Verwendung der [`resume()`](/de/docs/Web/API/AudioContext/resume)-Methode.

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");

button.addEventListener(
  "click",
  () => {
    // Überprüfen, ob der Kontext im angehaltenen Zustand ist (Autoplay-Richtlinie)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  },
  false,
);
```

Sie können stattdessen mit einem {{domxref("OfflineAudioContext")}} arbeiten. In diesem Fall können Sie den angehaltenen Audiokontext mit der [`startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering)-Methode fortsetzen.

## Benutzerkontrolle

Wenn Ihre Webseite oder Anwendung Ton enthält, sollten Sie dem Nutzer die Kontrolle darüber geben, sonst wird es wieder lästig. Dies kann durch Play/Stop- und Lautstärke/Stummschaltsteuerungen erreicht werden. Das [Tutorial zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) behandelt, wie dies gemacht wird.

Wenn Sie Schaltflächen haben, die Audio ein- und ausschalten, ist die Verwendung des ARIA-Attributs [`role="switch"`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role) eine gute Option, um assistiven Technologien mitzuteilen, was der genaue Zweck der Schaltfläche ist, und so die App barrierefreier zu machen. Es gibt [ein Demobeispiel, wie man es verwendet](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

Da Sie mit vielen sich ändernden Werten innerhalb der Web Audio API arbeiten und Nutzern Kontrolle darüber geben wollen, ist [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) oft eine gute Wahl als Steuerung. Es ist eine gute Option, da Sie Mindest- und Höchstwerte sowie Schritte mit dem [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut festlegen können.

## AudioParam-Werte setzen

Es gibt zwei Möglichkeiten, Werte von {{domxref("AudioNode")}} zu manipulieren, die selbst Objekte des Typs {{domxref("AudioParam")}} sind. Die erste Möglichkeit ist das direkte Setzen des Wertes über die Eigenschaft. Wenn wir zum Beispiel den `gain`-Wert eines {{domxref("GainNode")}} ändern wollen, würden wir dies so tun:

```js
gainNode.gain.value = 0.5;
```

Dies setzt unsere Lautstärke auf die Hälfte. Wenn Sie jedoch eine der definierten Methoden des `AudioParam` verwenden, um diese Werte zu setzen, haben diese Vorrang vor dem oben genannten Setzen der Eigenschaft. Wenn Sie beispielsweise möchten, dass der `gain`-Wert in 2 Sekunden auf 1 erhöht wird, können Sie dies so tun:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

Dies überschreibt das vorherige Beispiel (wie es sollte), auch wenn es später in Ihrem Code vorkommt.

Unter Berücksichtigung dessen, wenn Ihre Webseite oder Anwendung Timing und Planung erfordert, ist es am besten, sich an die {{domxref("AudioParam")}}-Methoden zum Setzen von Werten zu halten. Wenn Sie sicher sind, dass dies nicht der Fall ist, ist das Setzen mit der `value`-Eigenschaft in Ordnung.
