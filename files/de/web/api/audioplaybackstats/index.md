---
title: AudioPlaybackStats
slug: Web/API/AudioPlaybackStats
l10n:
  sourceCommit: a1c2691b9ef6120e81ef3e08f51bfcacb6d4dc00
---

{{APIRef("Web Audio API")}}

Die **`AudioPlaybackStats`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bietet Zugriff auf Dauer-, Underrun- und Latenzstatistiken für den zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Diese Statistiken ermöglichen es Ihnen, die Audiowiedergabeverzögerung und -störungen zu messen.

Das `AudioPlaybackStats`-Objekt eines Audio-Kontexts kann über seine [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats)-Eigenschaft abgerufen werden. Das zurückgegebene `AudioPlaybackStats`-Objekt ist live — die enthaltenen Eigenschaftswerte werden einmal pro Sekunde aktualisiert.

## Beschreibung

In Anwendungen, die Audio abspielen, ist es vorteilhaft, Audio-{{Glossary("latency", "Latenz")}} und Underrun zu messen, da beide zu einer schlechten Audioerfahrung beitragen können:

- **Audio-Latenz**
  - : Ein Maß für die Verzögerung zwischen der Aktivierung eines Steuerungsmechanismus durch den Benutzer (wie einer Wiedergabetaste) und dem erwartungsgemäßen Abspielen des Audios. Eine erhebliche Latenz kann dazu führen, dass sich eine Anwendung als nicht reaktionsfähig anfühlt.
- **Underrun**
  - : Eine Lücke in der Wiedergabe, wenn der Audioanwendung die gepufferten Audiodaten ausgehen, bevor neue Daten eintreffen, um sie zu ersetzen — mit anderen Worten, sie kann dem Ausgabegerät die Audioframes nicht schnell genug bereitstellen. Dies kann aufgrund der Komplexität des Audio-Graphs, einer Überlastung der CPU oder von Fehlfunktionen in anderen Audioprogrammen geschehen. Das Ergebnis ist ein hörbarer "Fehler" — ein Klick, ein Knall oder ein Audioaussetzer — weil die Anwendung nichts abzuspielen hat und die Lücke mit Stille oder Rauschen füllt.

Wenn Sie Underruns feststellen, ergreifen Sie Maßnahmen, um zukünftige zu vermeiden – zum Beispiel durch Bereitstellung eines größeren Puffers oder durch Freigabe von Systemressourcen. Verwenden Sie einen größeren Puffer mit Bedacht, denn er kann die Latenz erhöhen; es ist wichtig, ein Gleichgewicht zu finden. Sie können die Latenz verringern, indem Sie die erforderliche Verarbeitung vereinfachen oder die Größe des Wiedergabepuffers reduzieren.

Die Webaudio-Leistung variiert stark zwischen Geräten, von modernen High-End-Desktop-Computern bis hin zu kostengünstigen mobilen Budgethandys. Das `AudioPlaybackStats`-Objekt ermöglicht es Ihnen, Telemetriedaten von Ihren Benutzern zu sammeln, um zu verstehen, wie Ihre App in der "realen Welt" funktioniert. Verwenden Sie diese Daten, um Latenz- und Underrun-Probleme zu identifizieren und darauf zu reagieren.

Zum Beispiel könnten Sie ein "adaptives" Audiosystem erstellen, das erkennt, wenn der Underrun oder die Latenz einen bestimmten Schwellenwert überschreitet (wenn das Audio zu stottern beginnt), und die folgenden Maßnahmen ergreift:

- Verringerung der Rechenlast durch Reduzierung der maximal gleichzeitig abgespielten Stimmenzahl oder durch Entfernen komplexer Filter.
- Den Benutzer auffordern, andere Tabs oder Apps zu schließen oder das Audioausgabegerät zu wechseln.

### Von der Schnittstelle bereitgestellte Underrun-Statistiken

Underruns sind in Bezug auf **Underrun-Frames** und **Underrun-Ereignisse** definiert:

- Underrun-Frame
  - : Ein Audio-Frame, typischerweise Stille im Fall einer Webanwendung, der vom Ausgabegerät abgespielt wird, wenn keine tatsächlichen Audiodaten vom Audio-Kontext vorliegen.
- Underrun-Ereignis
  - : Die Wiedergabe einer durchgängigen Sequenz von Underrun-Frames. Die Dauer des Underrun-Ereignisses ist die Gesamtdauer der Sequenz von Underrun-Frames.

Die Anzahl der seit der Initialisierung des Audio-Kontexts aufgetretenen Underrun-Ereignisse wird von der [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents)-Eigenschaft gemeldet, und die Dauer dieser Underrun-Ereignisse wird von der [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration)-Eigenschaft gemeldet. Dies ermöglicht es Ihnen herauszufinden, wie häufig und wie lange das Audio aufgrund von Underrun ausfällt.

### Von der Schnittstelle bereitgestellte Latenzstatistiken

Die Latenz des Audio-Kontexts kann mithilfe der Eigenschaften [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency), [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) und [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) gemessen werden.

Es ist möglich, die unmittelbare Wiedergabelatenz des Audio-Kontexts über die [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency)-Eigenschaft abzurufen; dies ist jedoch ein sofortiger Wert, der schnell schwankt. `AudioPlaybackStats` bietet die durchschnittliche, minimale und maximale Latenz im Zeitverlauf, welche nützlicher zur Identifizierung von anhaltenden Leistungsproblemen ist.

## Instanzeigenschaften

- [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die durchschnittliche Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die minimale Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die maximale Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.totalDuration`](/de/docs/Web/API/AudioPlaybackStats/totalDuration) {{ReadOnlyInline}}
  - : Eine Zahl, die die Gesamtdauer aller Audioframes seit der Initialisierung des Audio-Kontexts angibt.
- [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) {{ReadOnlyInline}}
  - : Eine Zahl, die die Gesamtdauer der Underrun-Ereignisse angibt, die seit der Initialisierung des Audio-Kontexts aufgetreten sind.
- [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) {{ReadOnlyInline}}
  - : Eine Zahl, die angibt, wie viele Underrun-Ereignisse seit der Initialisierung des Audio-Kontexts aufgetreten sind.

## Instanzmethoden

- [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency)
  - : Setzt den Beginn des Intervalls zurück, in dem Latenzstatistiken gemessen werden, auf die aktuelle Zeit.
- [`AudioPlaybackStats.toJSON()`](/de/docs/Web/API/AudioPlaybackStats/toJSON)
  - : Ein {{Glossary("Serialization", "Serializer")}}, der eine JSON-Darstellung des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekts zurückgibt.

## Beispiele

### Audiowiedergabestatistiken berichten

Dieses Beispiel zeigt, wie Audiostatistiken gemeldet werden, die über das [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekt abgerufen werden.

#### HTML

Wir fügen drei {{htmlelement("button")}}-Elemente ein — eines, um die Audio-Wiedergabe zu starten, eines, um einen Satz Statistiken abzurufen und anzuzeigen, und eines, um die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) auszuführen. Wir fügen außerdem ein {{htmlelement("ul")}}-Element ein, in dem die Statistiken angezeigt werden.

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

In unserem JavaScript beginnen wir mit dem Erfassen von Referenzen auf die Schaltflächen und die Ausgabeliste. Wir deaktivieren auch unsere Statistik- und Reset-Schaltflächen, da sie anfangs nichts bewirken. Wir aktivieren sie erneut, sobald sie Event-Listener zugewiesen bekommen.

```js live-sample___playback-stats
const playBtn = document.querySelector(".play");
const statsBtn = document.querySelector(".stats");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");

statsBtn.disabled = true;
resetBtn.disabled = true;
```

Als nächstes fügen wir dem Wiedergabe-Button einen `click`-Event-Listener hinzu, sodass beim Klicken:

- Ein neuer [`AudioContext`](/de/docs/Web/API/AudioContext) erstellt und der Wiedergabe-Button deaktiviert wird, damit er nicht erneut gedrückt werden kann.
- Ein Code zur Funktionsprüfung ausgeführt wird, der überprüft, ob die [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats)-Eigenschaft existiert. Wenn nicht, wird die Nachricht "Ihr Browser unterstützt `AudioPlaybackStats` nicht." in einem Listenelement in der Ausgabeliste angezeigt, und der Funktionsaufruf wird beendet.
- Ein einfacher Audio-Graph erstellt, der aus einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einem [`GainNode`](/de/docs/Web/API/GainNode) besteht. Der Oszillator wird gestartet.
- Die Statistik-Schaltfläche aktiviert und mit einem `click`-Event-Listener versehen, sodass beim Klicken die verschiedenen in der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Eigenschaft verfügbaren Statistiken in einen Textstring geschrieben und in einem Listenelement in der Ausgabeliste angezeigt werden.
- Die Reset-Schaltfläche aktiviert und mit einem `click`-Event-Listener versehen, sodass beim Klicken die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) ausgeführt wird.

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

Klicken Sie auf die Schaltfläche "Audio abspielen", um den Oszillator-Ton abzuspielen. Wenn Sie jetzt auf die Schaltfläche "Statistiken anzeigen" klicken, sehen Sie die verschiedenen in der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Eigenschaft verfügbaren Statistiken, die in einem Listenelement angezeigt werden.

Wenn Sie auf die Schaltfläche "Latenz zurücksetzen" klicken und dann auf die Schaltfläche "Statistiken anzeigen", erscheinen neue Statistiken, aber die minimale Latenz wird nicht mehr null sein. Dies liegt daran, dass die Latenz nun ab dem Zeitpunkt gemessen wird, an dem Sie die Schaltfläche "Latenz zurücksetzen" gedrückt haben und nicht ab dem Zeitpunkt, an dem der Audio-Kontext initialisiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
