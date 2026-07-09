---
title: AudioPlaybackStats
slug: Web/API/AudioPlaybackStats
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die **`AudioPlaybackStats`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bietet Zugriff auf Statistiken zu Dauer, Unterbrechungen und Latenz für den zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Diese Statistiken ermöglichen es, Audioverzögerungen und Aussetzer zu messen.

Auf das `AudioPlaybackStats`-Objekt eines Audio-Kontexts kann über die Eigenschaft [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) zugegriffen werden. Das zurückgegebene `AudioPlaybackStats`-Objekt ist live – die enthaltenen Eigenschaftswerte werden einmal pro Sekunde aktualisiert.

## Beschreibung

In Anwendungen, die Audio abspielen, ist es vorteilhaft, die Audio-{{Glossary("latency", "Latenz")}} und Unterbrechungen zu messen, da beide zu einer schlechten Audioerfahrung beitragen können:

- **Audio-Latenz**
  - : Ein Maß für die Verzögerung zwischen dem Aktivieren einer Steuerung (wie einer Wiedergabetaste) durch den Benutzer und der erwarteten Wiedergabe des Audios. Erhebliche Latenz kann eine Anwendung träge wirken lassen.
- **Unterbrechung**
  - : Ein Unterbrechung in der Wiedergabe, wenn die Audio-Anwendung keine gepufferten Audiodaten mehr hat, bevor neue Daten eintreffen, um sie zu ersetzen – mit anderen Worten, sie kann keine Audio-Frames schnell genug an das Ausgabegerät liefern. Dies kann aufgrund der Komplexität des Audionetzwerks, CPU-Überlastung oder Fehlfunktionen in anderen Audioprogrammen auftreten. Das Ergebnis ist ein hörbarer "Fehler" – ein Klick, ein Knacken oder ein Audioausfall – da die Anwendung nichts abzuspielen hat und die Lücke mit Stille oder Rauschen füllt.

Wenn Sie Unterbrechungen feststellen, ergreifen Sie Maßnahmen, um zukünftige zu vermeiden – zum Beispiel durch Bereitstellung eines größeren Puffers oder durch Freigabe von Systemressourcen. Verwenden Sie einen größeren Puffer vorsichtig, da er die Latenz erhöhen kann; es ist wichtig, ein Gleichgewicht zu finden. Sie können die Latenz reduzieren, indem Sie die erforderliche Verarbeitung vereinfachen oder die Größe des Wiedergabepuffers verringern.

Die Leistung von Web-Audio variiert stark zwischen Geräten, von modernen High-End-Desktops bis hin zu günstigen Low-End-Mobiltelefonen. Das `AudioPlaybackStats`-Objekt ermöglicht es Ihnen, Telemetriedaten von Ihren Benutzern zu sammeln, um zu verstehen, wie Ihre App in der "realen Welt" performt. Verwenden Sie diese Daten, um Latenz- und Unterbrechungsprobleme zu erkennen und darauf zu reagieren.

Zum Beispiel könnten Sie ein "adaptives" Audiosystem erstellen, das erkennt, wenn Unterbrechungen oder Latenz einen bestimmten Schwellenwert überschreiten (wenn das Audio zu stottern beginnt) und die folgenden Maßnahmen ergreift:

- Reduzieren Sie die Berechnungslast, indem Sie die maximale Anzahl gleichzeitiger Stimmen verringern oder komplexe Filter entfernen.
- Fordern Sie den Benutzer auf, andere Tabs oder Apps zu schließen oder das Audiowiedergabegerät zu wechseln.

### Durch die Schnittstelle bereitgestellte Unterbrechungsstatistiken

Unterbrechungen werden in Bezug auf **Unterbrechungs-Frames** und **Unterbrechungs-Ereignisse** definiert:

- Unterbrechungs-Frame
  - : Ein Audio-Frame, in der Regel Stille im Fall einer Webanwendung, der vom Ausgabegerät abgespielt wird, wenn keine tatsächlichen Audiodaten vom Audiokontext vorhanden sind.
- Unterbrechungs-Ereignis
  - : Die Wiedergabe einer kontinuierlichen Sequenz von Unterbrechungs-Frames. Die Dauer des Unterbrechungs-Ereignisses ist die Gesamtdauer der Sequenz von Unterbrechungs-Frames.

Die Anzahl der Unterbrechungs-Ereignisse seit der Initialisierung des Audiokontexts wird von der Eigenschaft [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) gemeldet, und die Dauer dieser Unterbrechungs-Ereignisse wird von der Eigenschaft [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) gemeldet. Dies ermöglicht es Ihnen herauszufinden, wie oft und wie lange das Audio aufgrund von Unterbrechungen unterbrochen wird.

### Durch die Schnittstelle bereitgestellte Latenzstatistiken

Die Latenz des Audiokontexts kann mit den Eigenschaften [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency), [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) und [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) gemessen werden.

Es ist möglich, die unmittelbare Wiedergabelatenz des Audiokontexts über die Eigenschaft [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) abzurufen; dies ist jedoch ein sofortiger Wert, der sich schnell ändert. `AudioPlaybackStats` bietet die durchschnittliche, minimale und maximale Latenz über die Zeit hinweg, was nützlicher ist, um anhaltende Leistungsprobleme zu identifizieren.

## Instanz-Eigenschaften

- [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die durchschnittliche Latenz seit der Initialisierung des Audiokontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die minimale Latenz seit der Initialisierung des Audiokontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die maximale Latenz seit der Initialisierung des Audiokontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.totalDuration`](/de/docs/Web/API/AudioPlaybackStats/totalDuration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die Gesamtdauer aller Audio-Frames seit der Initialisierung des Audiokontexts angibt.
- [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die Gesamtdauer der Unterbrechungs-Ereignisse angibt, die seit der Initialisierung des Audiokontexts aufgetreten sind.
- [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die angibt, wie viele Unterbrechungs-Ereignisse seit der Initialisierung des Audiokontexts aufgetreten sind.

## Instanz-Methoden

- [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) {{experimental_inline}}
  - : Setzt den Beginn des Intervalls zurück, in dem Latenzstatistiken gemessen werden, auf die aktuelle Zeit.
- [`AudioPlaybackStats.toJSON()`](/de/docs/Web/API/AudioPlaybackStats/toJSON) {{experimental_inline}}
  - : Ein {{Glossary("Serialization", "Serializer")}}, der eine JSON-Darstellung des `AudioPlaybackStats`-Objekts zurückgibt.

## Beispiele

### Berichterstellung von Audio-Wiedergabestatistiken

Dieses Beispiel zeigt, wie man Audiostatistiken meldet, die über das `AudioPlaybackStats`-Objekt abgerufen werden.

#### HTML

Wir fügen drei {{htmlelement("button")}}-Elemente ein – eines, um das Audio abzuspielen, eines, um eine Reihe von Statistiken abzurufen und anzuzeigen, und eines, um die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) auszuführen. Außerdem fügen wir ein {{htmlelement("ul")}}-Element ein, in dem die Statistiken angezeigt werden.

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

In unserem JavaScript beginnen wir, indem wir Referenzen zu den Schaltflächen und der Ausgabeliste erhalten. Wir deaktivieren auch unsere Statistik- und Zurücksetzen-Schaltflächen, da sie anfänglich nichts tun werden. Wir werden sie wieder aktivieren, sobald sie Event-Listener haben.

```js live-sample___playback-stats
const playBtn = document.querySelector(".play");
const statsBtn = document.querySelector(".stats");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");

statsBtn.disabled = true;
resetBtn.disabled = true;
```

Als nächstes fügen wir der Wiedergabetaste einen `click`-Event-Listener hinzu, damit wir beim Klicken:

- einen neuen [`AudioContext`](/de/docs/Web/API/AudioContext) erstellen und die Wiedergabetaste deaktivieren, damit sie nicht erneut gedrückt werden kann.
- etwas Feature-Detection-Code ausführen, der prüft, ob die Eigenschaft [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) existiert. Wenn nicht, zeigen wir eine Nachricht "Ihr Browser unterstützt `AudioPlaybackStats` nicht." in einem Listenelement in der Ausgabeliste an und verlassen die Funktion mit `return`.
- einen grundlegenden Audio-Graphen erstellen, bestehend aus einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einem [`GainNode`](/de/docs/Web/API/GainNode), und den Oszillator starten.
- die Statistikschaltfläche aktivieren und ihr einen `click`-Event-Listener geben, so dass wir beim Klicken die verschiedenen Statistiken, die im `AudioPlaybackStats`-Objekt des Audiokontexts verfügbar sind, in eine Textzeichenkette schreiben und in einem Listenelement in der Ausgabeliste anzeigen.
- die Zurücksetzen-Schaltfläche aktivieren und ihr einen `click`-Event-Listener geben, so dass wir beim Klicken die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) ausführen.

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

Klicken Sie auf die Schaltfläche "Audio abspielen", um den Oszillator-Ton zu starten. Wenn Sie jetzt auf die Schaltfläche "Statistiken anzeigen" klicken, sehen Sie die verschiedenen im `AudioPlaybackStats`-Objekt verfügbaren Statistiken in einem Listenelement angezeigt.

Wenn Sie auf die Schaltfläche "Latenz zurücksetzen" klicken und dann die Schaltfläche "Statistiken anzeigen" erneut drücken, erscheinen neue Statistiken, aber die minimale Latenz wird nicht mehr Null sein. Dies liegt daran, dass die Latenz jetzt ab dem Zeitpunkt gemessen wird, an dem Sie die Schaltfläche "Latenz zurücksetzen" gedrückt haben und nicht ab der Initialisierung des Audiokontexts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
