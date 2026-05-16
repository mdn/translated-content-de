---
title: AudioPlaybackStats
slug: Web/API/AudioPlaybackStats
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`AudioPlaybackStats`** Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bietet Zugriff auf Dauer-, Underrun- und Latenzstatistiken für den zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Diese Statistiken ermöglichen es, Audioverschiebungen und Aussetzer zu messen.

Das `AudioPlaybackStats`-Objekt eines Audio-Kontexts kann über die [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats)-Eigenschaft zugegriffen werden. Das zurückgegebene `AudioPlaybackStats`-Objekt ist live — die enthaltenen Eigenschaftswerte werden einmal pro Sekunde aktualisiert.

## Beschreibung

In Anwendungen, die Audio abspielen, ist es vorteilhaft, Audio-{{Glossary("latency", "Latenz")}} und Underrun zu messen, da beides zu einer schlechten Audioerfahrung beitragen kann:

- **Audio-Latenz**
  - : Ein Maß für die Verzögerung zwischen der Aktivierung einer Steuerung durch den Benutzer (z. B. einer Wiedergabetaste) und der erwarteten Wiedergabe des Audios. Eine signifikante Latenz kann eine Anwendung unresponsiv wirken lassen.
- **Underrun**
  - : Eine Unterbrechung bei der Wiedergabe, wenn die Audioanwendung keine gepufferten Audiodaten mehr zur Wiedergabe hat, bevor neue Daten ankommen, um sie zu ersetzen — mit anderen Worten, sie kann nicht schnell genug Audioframes an das Ausgabegerät liefern. Dies kann aufgrund der Komplexität des Audiografen, Überlastung der CPU oder Fehlfunktionen in anderen Audioanwendungen passieren. Das Ergebnis ist ein hörbares "Glitch" — ein Klicken, ein Knacken oder ein Audioausfall — weil die Anwendung nichts abzuspielen hat und die Lücke mit Stille oder Rauschen füllt.

Wenn Sie Underruns feststellen, ergreifen Sie Maßnahmen, um zukünftige zu vermeiden – zum Beispiel durch Bereitstellung eines größeren Puffers oder durch Freigabe von Systemressourcen. Verwenden Sie einen größeren Puffer jedoch vorsichtig, da er die Latenz erhöhen kann; es ist wichtig, ein Gleichgewicht zu erreichen. Sie können die Latenz reduzieren, indem Sie die erforderliche Verarbeitung vereinfachen oder die Größe des Wiedergabepuffers verringern.

Die Leistung von Web-Audio variiert stark zwischen Geräten, von modernen Desktop-Computern bis hin zu günstigen Mobiltelefonen. Das `AudioPlaybackStats`-Objekt ermöglicht es Ihnen, Telemetriedaten von Ihren Benutzern zu sammeln, um zu verstehen, wie Ihre Anwendung in der "realen Welt" performt. Nutzen Sie diese Daten, um Latenz- und Underrun-Probleme zu identifizieren und darauf zu reagieren.

Zum Beispiel könnten Sie ein "adaptives" Audiosystem schaffen, das erkennt, wenn Underrun oder Latenz einen bestimmten Schwellenwert überschreitet (wenn Audio zu "glitchen" beginnt), und folgende Maßnahmen ergreift:

- Reduzieren Sie die Rechenlast, indem Sie die maximale Anzahl der gleichzeitig gespielten Stimmen verringern oder komplexe Filter entfernen.
- Fordern Sie den Benutzer auf, andere Tabs oder Apps zu schließen oder das Audioausgabegerät zu wechseln.

### Underrun-Statistiken, die von der Schnittstelle bereitgestellt werden

Underruns werden in Bezug auf **Underrun-Frames** und **Underrun-Ereignisse** definiert:

- Underrun-Frame
  - : Ein Audioframe, typischerweise Stille im Fall einer Webanwendung, der vom Ausgabegerät abgespielt wird, wenn es keine tatsächlichen Audiodaten vom Audiokontext gibt.
- Underrun-Ereignis
  - : Die Wiedergabe einer kontinuierlichen Abfolge von Underrun-Frames. Die Dauer des Underrun-Ereignisses ist die Gesamtdauer der Abfolge von Underrun-Frames.

Die Anzahl der Underrun-Ereignisse seit der Initialisierung des Audiokontexts wird durch die [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents)-Eigenschaft gemeldet, und die Dauer dieser Underrun-Ereignisse wird durch die [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration)-Eigenschaft gemeldet. Dadurch können Sie herausfinden, wie oft und wie lange das Audio aufgrund von Underrun ausfällt.

### Latenzstatistiken, die von der Schnittstelle bereitgestellt werden

Die Latenz des Audiokontexts kann mit den Eigenschaften [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency), [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) und [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) gemessen werden.

Es ist möglich, die unmittelbare Wiedergabelatenz des Audiokontexts über die [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency)-Eigenschaft abzurufen; dies ist jedoch ein sofortiger Wert, der schnell schwankt. `AudioPlaybackStats` bietet die durchschnittliche, minimale und maximale Latenz über die Zeit, was nützlicher ist, um anhaltende Leistungsprobleme zu identifizieren.

## Instanz-Eigenschaften

- [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die durchschnittliche Latenz angibt, seit der Audiokontext initialisiert wurde oder seit [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) zuletzt aufgerufen wurde.
- [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die minimale Latenz angibt, seit der Audiokontext initialisiert wurde oder seit [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) zuletzt aufgerufen wurde.
- [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die maximale Latenz angibt, seit der Audiokontext initialisiert wurde oder seit [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) zuletzt aufgerufen wurde.
- [`AudioPlaybackStats.totalDuration`](/de/docs/Web/API/AudioPlaybackStats/totalDuration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die Gesamtdauer aller Audioframes angibt, seit der Audiokontext initialisiert wurde.
- [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die Gesamtdauer der aufgetretenen Underrun-Ereignisse angibt, seit der Audiokontext initialisiert wurde.
- [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die angibt, wie viele Underrun-Ereignisse seit der Initialisierung des Audiokontexts aufgetreten sind.

## Instanz-Methoden

- [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) {{experimental_inline}}
  - : Setzt den Beginn des Intervalls zurück, während dessen die Latenzstatistiken gemessen werden, auf die aktuelle Zeit.
- [`AudioPlaybackStats.toJSON()`](/de/docs/Web/API/AudioPlaybackStats/toJSON) {{experimental_inline}}
  - : Ein {{Glossary("Serialization", "Serializer")}}, der eine JSON-Darstellung des `AudioPlaybackStats`-Objekts zurückgibt.

## Beispiele

### Melden von Audiowiedergabestatistiken

Dieses Beispiel zeigt, wie Audiostatistiken gemeldet werden, die über das `AudioPlaybackStats`-Objekt abgerufen werden.

#### HTML

Wir inkludieren drei {{htmlelement("button")}}-Elemente — eines, um die Audiowiedergabe zu starten, eines, um einen Satz Statistiken abzurufen und anzuzeigen, und eines, um die [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency)-Methode auszuführen. Wir inkludieren auch ein {{htmlelement("ul")}}-Element, innerhalb dessen die Statistiken angezeigt werden.

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

In unserem JavaScript beginnen wir damit, Referenzen zu den Buttons und der Ausgabeliste abzurufen. Wir deaktivieren auch unsere Stats- und Reset-Buttons, da sie anfangs nichts tun werden. Wir aktivieren sie erneut, sobald sie Event-Listener haben.

```js live-sample___playback-stats
const playBtn = document.querySelector(".play");
const statsBtn = document.querySelector(".stats");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");

statsBtn.disabled = true;
resetBtn.disabled = true;
```

Als nächstes fügen wir dem Wiedergabebutton einen `click`-Event-Listener hinzu, sodass, wenn er geklickt wird, wir:

- Einen neuen [`AudioContext`](/de/docs/Web/API/AudioContext) erstellen und den Play-Button deaktivieren, damit er nicht erneut gedrückt werden kann.
- Einige Feature-Erkennungscode ausführen, der überprüft, ob die [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats)-Eigenschaft existiert. Wenn nicht, zeigen wir eine Nachricht "Ihr Browser unterstützt `AudioPlaybackStats` nicht." in einem Listenelement in der Ausgabeliste an und verlassen die Funktion mit `return`.
- Einen grundlegenden Audiografen erstellen, der aus einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einem [`GainNode`](/de/docs/Web/API/GainNode) besteht, und den Oszillator spielen lassen.
- Den Stats-Button aktivieren und ihm einen `click`-Event-Listener geben, sodass, wenn er geklickt wird, wir die verschiedenen verfügbaren Stats aus dem `AudioPlaybackStats`-Objekt des Audiokontexts in einen Textstring schreiben und diesen in einem Listenelement in der Ausgabeliste anzeigen.
- Den Reset-Button aktivieren und ihm einen `click`-Event-Listener geben, sodass, wenn er geklickt wird, wir die [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency)-Methode ausführen.

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

Klicken Sie auf die Schaltfläche "Audio abspielen", um den Oszillator-Ton zu starten. Jetzt, wenn Sie auf die Schaltfläche "Statistiken anzeigen" klicken, sehen Sie die verschiedenen verfügbaren Statistiken im `AudioPlaybackStats`-Objekt, die in einem Listenpunkt angezeigt werden.

Wenn Sie auf die Schaltfläche "Latenz zurücksetzen" klicken und dann auf die Schaltfläche "Statistiken anzeigen" klicken, werden neue Statistiken angezeigt, aber die minimale Latenz wird nicht mehr null sein. Dies liegt daran, dass die Latenz jetzt von dem Zeitpunkt gemessen wird, an dem Sie auf die Schaltfläche "Latenz zurücksetzen" geklickt haben, nicht von der Initialisierung des Audiokontexts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
