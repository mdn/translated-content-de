---
title: AudioPlaybackStats
slug: Web/API/AudioPlaybackStats
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("Web Audio API")}}

Die **`AudioPlaybackStats`** Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bietet Zugriff auf Dauer-, Unterbrechungs- und Latenzstatistiken für den zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Diese Statistiken ermöglichen es, Audiodelays und Störungen zu messen.

Das `AudioPlaybackStats`-Objekt eines Audio-Kontexts kann über seine [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) Eigenschaft zugegriffen werden. Das zurückgegebene `AudioPlaybackStats`-Objekt ist live – die enthaltenen Eigenschaftswerte werden jede Sekunde aktualisiert.

## Beschreibung

In Anwendungen, die Audio abspielen, ist es vorteilhaft, Audio-{{Glossary("latency", "Latenz")}} und Unterbrechung zu messen, da beide zu einem schlechten Audioerlebnis beitragen können:

- **Audio-Latenz**
  - : Ein Maß für die Verzögerung zwischen der Aktivierung eines Steuerungselements durch den Benutzer (wie z.B. einem Wiedergabeknopf) und dem erwarteten Abspielen des Audios. Eine signifikante Latenz kann eine Anwendung unempfindlich erscheinen lassen.
- **Unterbrechung**
  - : Eine Lücke in der Wiedergabe, wenn der Audioanwendung der gepufferte Audiodaten ausgeht, bevor neue Daten ankommen, um sie zu ersetzen – mit anderen Worten, wenn sie nicht schnell genug Audio-Frames zum Ausgabegerät liefern kann. Dies kann aufgrund der Komplexität des Audiografen, CPU-Überlastung oder Fehlfunktionen in anderen Audioprogrammen geschehen. Das Ergebnis ist ein hörbarer "Glitch" – ein Klicken, ein Knacken oder ein Audioaussetzer – weil die Anwendung nichts abzuspielen hat und die Lücke mit Stille oder Rauschen füllt.

Wenn Sie Unterbrechungen feststellen, sollten Sie Maßnahmen ergreifen, um zukünftig mehr zu vermeiden – zum Beispiel, indem Sie einen größeren Puffer bereitstellen oder Systemressourcen freigeben. Verwenden Sie einen größeren Puffer mit Vorsicht, da dies die Latenz erhöhen kann; es ist wichtig, ein Gleichgewicht zu finden. Sie können die Latenz verringern, indem Sie die erforderliche Verarbeitung vereinfachen oder die Wiedergabepuffergröße reduzieren.

Die Web-Audio-Leistung variiert stark zwischen Geräten, von modernen High-End-Desktop-Computern bis hin zu preisgünstigen mobilen Geräten. Das `AudioPlaybackStats`-Objekt ermöglicht es Ihnen, Telemetriedaten von Ihren Nutzern zu sammeln, um zu verstehen, wie Ihre App in der "realen Welt" performt. Verwenden Sie diese Daten, um Latenz- und Unterbrechungsprobleme zu identifizieren und darauf zu reagieren.

Zum Beispiel könnten Sie ein "adaptives" Audiosystem erstellen, das erkennt, wann Unterbrechungen oder Latenzwerte einen bestimmten Schwellenwert überschreiten (wenn das Audio beginnt zu stocken), und folgende Maßnahmen ergreifen:

- Reduzieren der Rechenlast durch Verringern der maximal gleichzeitig gespielten Stimmenanzahl oder Entfernen komplexer Filter.
- Den Benutzer auffordern, andere Tabs oder Apps zu schließen oder das Audioausgabegerät zu wechseln.

### Unterbrechungsstatistiken, die die Schnittstelle bereitstellt

Unterbrechungen werden in Bezug auf **Unterbrechungsframes** und **Unterbrechungsereignisse** definiert:

- Unterbrechungsframe
  - : Ein Audioframe, typischerweise Stille im Fall einer Webanwendung, der vom Ausgabegerät abgespielt wird, wenn es keine tatsächlichen Audiodaten aus dem Audiokontext gibt.
- Unterbrechungsereignis
  - : Die Wiedergabe einer kontinuierlichen Reihenfolge von Unterbrechungsframes. Die Dauer des Unterbrechungsereignisses ist die Gesamtdauer der Reihenfolge von Unterbrechungsframes.

Die Anzahl der Unterbrechungsereignisse seit der Initialisierung des Audiokontextes wird durch die Eigenschaft [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) berichtet, und die Dauer dieser Unterbrechungsereignisse wird durch die Eigenschaft [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) berichtet. Dies ermöglicht es Ihnen, herauszufinden, wie oft und wie lange das Audio aufgrund von Unterbrechungen ausfällt.

### Latenzstatistiken, die die Schnittstelle bereitstellt

Die Latenz des Audiokontexts kann mit den Eigenschaften [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency), [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) und [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) gemessen werden.

Es ist möglich, die unmittelbare Wiedergabelatenz des Audiokontexts über die Eigenschaft [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) abzurufen; dies ist jedoch ein Momentanwert, der sich schnell ändert. `AudioPlaybackStats` bietet die durchschnittliche, minimale und maximale Latenz über die Zeit, was nützlicher ist, um persistente Leistungsprobleme zu identifizieren.

## Instanzeigenschaften

- [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die durchschnittliche Latenz seit der Initialisierung des Audiokontextes oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die minimale Latenz seit der Initialisierung des Audiokontextes oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die maximale Latenz seit der Initialisierung des Audiokontextes oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.totalDuration`](/de/docs/Web/API/AudioPlaybackStats/totalDuration) {{ReadOnlyInline}}
  - : Eine Zahl, die die Gesamtdauer aller Audioframes seit der Initialisierung des Audiokontextes angibt.
- [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) {{ReadOnlyInline}}
  - : Eine Zahl, die die Gesamtdauer der Unterbrechungsereignisse angibt, die seit der Initialisierung des Audiokontextes aufgetreten sind.
- [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) {{ReadOnlyInline}}
  - : Eine Zahl, die angibt, wie viele Unterbrechungsereignisse seit der Initialisierung des Audiokontextes aufgetreten sind.

## Instanzmethoden

- [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency)
  - : Setzt den Start des Intervalls zurück, in dem die Latenzstatistiken gemessen werden, auf die aktuelle Zeit.
- [`AudioPlaybackStats.toJSON()`](/de/docs/Web/API/AudioPlaybackStats/toJSON)
  - : Ein {{Glossary("Serialization", "Serializer")}}, der eine JSON-Darstellung des `AudioPlaybackStats`-Objekts zurückgibt.

## Beispiele

### Berichterstellung der Audiowiedergabestatistiken

Dieses Beispiel zeigt, wie Audiostatistiken gemeldet werden, die über das `AudioPlaybackStats`-Objekt zugänglich sind.

#### HTML

Wir fügen drei {{htmlelement("button")}} Elemente ein — eines, um das Audio abzuspielen, eines, um ein Set von Statistiken abzurufen und anzuzeigen, und eines, um die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) auszuführen. Wir fügen auch ein {{htmlelement("ul")}} Element hinzu, in dem die Statistiken angezeigt werden.

```html live-sample___playback-stats
<p>
  <button class="play">Play audio</button>
  <button class="stats">Display stats</button>
  <button class="reset">Reset latency</button>
</p>
<hr />
<ul class="output"></ul>
```

```css hidden live-sample___playback-stats
ul {
  width: 80%;
  margin: 0 auto;
}
li {
  margin-bottom: 10px;
}
```

#### JavaScript

In unserem JavaScript beginnen wir damit, Referenzen zu den Schaltflächen und der Ausgabeliste zu holen. Wir deaktivieren auch unsere Statistik- und Zurücksetzen-Schaltflächen, da sie zunächst nichts bewirken. Wir werden sie wieder aktivieren, sobald ihnen Event-Listener zugewiesen sind.

```js live-sample___playback-stats
const playBtn = document.querySelector(".play");
const statsBtn = document.querySelector(".stats");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");

statsBtn.disabled = true;
resetBtn.disabled = true;
```

Als nächstes fügen wir einen `click` Event-Listener zur Wiedergabe-Schaltfläche hinzu, sodass beim Klick darauf:

- Ein neuer [`AudioContext`](/de/docs/Web/API/AudioContext) erstellt und die Wiedergabe-Schaltfläche deaktiviert wird, sodass sie nicht erneut gedrückt werden kann.
- Ein Code zur Funktionserkennung ausgeführt wird, der überprüft, ob die Eigenschaft [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) existiert. Wenn nicht, wird eine "Ihr Browser unterstützt `AudioPlaybackStats` nicht." Nachricht in einem Listenelement der Ausgabeliste angezeigt und aus der Funktion `return` zurückgekehrt.
- Ein grundlegender Audiograf bestehend aus einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einem [`GainNode`](/de/docs/Web/API/GainNode) erstellt und der Oszillator gestartet wird.
- Die Statistik-Schaltfläche aktiviert und ein `click` Event-Listener hinzugefügt wird, sodass beim Klick darauf die verschiedenen in dem `AudioPlaybackStats`-Objekt des Audiokontextes verfügbaren Statistiken in eine Textzeichenkette geschrieben und in einem Listenelement der Ausgabeliste angezeigt werden.
- Die Zurücksetzen-Schaltfläche aktiviert und ein `click` Event-Listener hinzugefügt wird, sodass beim Klick darauf die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) ausgeführt wird.

```js live-sample___playback-stats
playBtn.addEventListener("click", () => {
  const audioCtx = new AudioContext();
  playBtn.disabled = true;

  if (!audioCtx.playbackStats) {
    const listItem = document.createElement("li");
    listItem.textContent = "Your browser doesn't support AudioPlaybackStats.";
    output.appendChild(listItem);
    return;
  }

  const oscillator = audioCtx.createOscillator();
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(100, audioCtx.currentTime);
  const gain = audioCtx.createGain();
  gain.gain.value = 0.006;

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);
  oscillator.start();

  const stats = audioCtx.playbackStats;

  statsBtn.disabled = false;
  statsBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    const statsText = `Underrun duration: ${stats.underrunDuration}
                       Underrun events: ${stats.underrunEvents}
                       Total duration: ${stats.totalDuration}
                       Average latency: ${stats.averageLatency}
                       Min latency: ${stats.minimumLatency}
                       Max latency: ${stats.maximumLatency}`;
    listItem.textContent = statsText;
    output.appendChild(listItem);
  });

  resetBtn.disabled = false;
  resetBtn.addEventListener("click", () => {
    stats.resetLatency();
  });
});
```

#### Ergebnis

Die gerenderte Ausgabe sieht folgendermaßen aus:

{{embedlivesample("playback-stats", "100%", "400")}}

Klicken Sie auf die Schaltfläche "Audio abspielen", um den Oszillator-Ton abzuspielen. Wenn Sie jetzt auf die Schaltfläche "Statistiken anzeigen" klicken, werden die verschiedenen verfügbaren Statistiken im `AudioPlaybackStats`-Objekt in einem Listenelement angezeigt.

Wenn Sie die Schaltfläche "Latenz zurücksetzen" klicken und dann die Schaltfläche "Statistiken anzeigen" klicken, erscheinen neue Statistiken, aber die minimale Latenz ist nicht mehr null. Dies liegt daran, dass die Latenz jetzt von dem Zeitpunkt an gemessen wird, an dem Sie die Schaltfläche "Latenz zurücksetzen" geklickt haben, nicht von dem Zeitpunkt, an dem der Audiokontext initialisiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
