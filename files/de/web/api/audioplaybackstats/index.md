---
title: AudioPlaybackStats
slug: Web/API/AudioPlaybackStats
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die Schnittstelle **`AudioPlaybackStats`** der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bietet Zugriff auf Statistiken zu Dauer, Underruns und Latenz des zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Mit diesen Statistiken können Sie Audioverzögerungen und hörbare Störungen messen.

Auf das `AudioPlaybackStats`-Objekt eines Audio-Kontexts können Sie über dessen Eigenschaft [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) zugreifen. Das zurückgegebene `AudioPlaybackStats`-Objekt ist live – die enthaltenen Eigenschaftswerte werden einmal pro Sekunde aktualisiert.

## Instanzeigenschaften

- [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die durchschnittliche Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die minimale Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die maximale Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.totalDuration`](/de/docs/Web/API/AudioPlaybackStats/totalDuration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die Gesamtdauer aller Audio-Frames seit der Initialisierung des Audio-Kontexts angibt.
- [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die Gesamtdauer aller Underrun-Ereignisse seit der Initialisierung des Audio-Kontexts angibt.
- [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die angibt, wie viele Underrun-Ereignisse seit der Initialisierung des Audio-Kontexts aufgetreten sind.

## Instanzmethoden

- [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) {{experimental_inline}}
  - : Setzt den Beginn des Zeitraums, in dem Latenzstatistiken gemessen werden, auf den aktuellen Zeitpunkt zurück.
- [`AudioPlaybackStats.toJSON()`](/de/docs/Web/API/AudioPlaybackStats/toJSON) {{experimental_inline}}
  - : Gibt ein als JSON serialisierbares einfaches Objekt zurück, das das `AudioPlaybackStats`-Objekt darstellt. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beschreibung

In Anwendungen, die Audio wiedergeben, ist es hilfreich, die Audio-{{Glossary("latency", "Latenz")}} und Underruns zu messen, da beides die Audioqualität beeinträchtigen kann:

- **Audiolatenz**
  - : Ein Maß für die Verzögerung zwischen dem Betätigen eines Steuerelements durch den Benutzer (etwa einer Wiedergabeschaltfläche) und dem erwarteten Beginn der Audiowiedergabe. Eine erhebliche Latenz kann dazu führen, dass eine Anwendung träge wirkt.
- **Underrun**
  - : Eine Unterbrechung der Wiedergabe, die entsteht, wenn der Audioanwendung die gepufferten Audiodaten ausgehen, bevor neue Daten eintreffen – sie kann dem Ausgabegerät also nicht schnell genug Audio-Frames bereitstellen. Dies kann durch einen komplexen Audiographen, eine Überlastung der CPU oder Fehlfunktionen anderer Audioprogramme verursacht werden. Das Ergebnis ist eine hörbare Störung – ein Klicken, Knacken oder Tonaussetzer –, weil der Anwendung nichts zur Wiedergabe zur Verfügung steht und sie die Lücke mit Stille oder Rauschen füllt.

Wenn Sie Underruns feststellen, ergreifen Sie Maßnahmen, um weitere zu vermeiden – beispielsweise durch einen größeren Puffer oder indem Sie Systemressourcen freigeben. Setzen Sie einen größeren Puffer mit Bedacht ein, da er die Latenz erhöhen kann; es ist wichtig, ein Gleichgewicht zu finden. Sie können die Latenz verringern, indem Sie die erforderliche Verarbeitung vereinfachen oder den Wiedergabepuffer verkleinern.

Die Leistung von Web Audio variiert stark zwischen Geräten – von modernen, leistungsstarken Desktop-Computern bis hin zu günstigen Mobiltelefonen mit geringer Leistung. Mit dem `AudioPlaybackStats`-Objekt können Sie Telemetriedaten von Ihren Benutzern sammeln, um zu verstehen, wie Ihre Anwendung unter realen Bedingungen funktioniert. Nutzen Sie diese Daten, um Latenz- und Underrun-Probleme zu erkennen und darauf zu reagieren.

Sie könnten beispielsweise ein „adaptives“ Audiosystem erstellen, das erkennt, wenn Underruns oder die Latenz einen bestimmten Schwellenwert überschreiten (wenn hörbare Störungen auftreten), und dann folgende Maßnahmen ergreift:

- Die Rechenlast verringern, indem die maximale Anzahl gleichzeitig wiedergegebener Stimmen reduziert oder komplexe Filter entfernt werden.
- Den Benutzer auffordern, andere Tabs oder Anwendungen zu schließen oder ein anderes Audioausgabegerät zu wählen.

### Von der Schnittstelle bereitgestellte Underrun-Statistiken

Underruns werden anhand von **Underrun-Frames** und **Underrun-Ereignissen** definiert:

- Underrun-Frame
  - : Ein Audio-Frame, der vom Ausgabegerät wiedergegeben wird, wenn keine tatsächlichen Audiodaten aus dem Audio-Kontext vorliegen. Bei einer Webanwendung handelt es sich dabei üblicherweise um Stille.
- Underrun-Ereignis
  - : Die Wiedergabe einer zusammenhängenden Folge von Underrun-Frames. Die Dauer des Underrun-Ereignisses entspricht der Gesamtdauer dieser Folge.

Die Eigenschaft [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) gibt die Anzahl der Underrun-Ereignisse seit der Initialisierung des Audio-Kontexts an, und die Eigenschaft [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) gibt deren Gesamtdauer an. So können Sie feststellen, wie häufig und wie lange der Ton aufgrund von Underruns aussetzt.

### Von der Schnittstelle bereitgestellte Latenzstatistiken

Die Latenz des Audio-Kontexts kann mit den Eigenschaften [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency), [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) und [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) gemessen werden.

Über die Eigenschaft [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) lässt sich die aktuelle Ausgabelatenz des Audio-Kontexts abrufen. Dieser Momentanwert schwankt jedoch schnell. `AudioPlaybackStats` liefert die durchschnittliche, minimale und maximale Latenz über einen Zeitraum hinweg. Das ist hilfreicher, um anhaltende Leistungsprobleme zu erkennen.

## Beispiele

### Statistiken zur Audiowiedergabe anzeigen

Dieses Beispiel zeigt, wie Sie Audiostatistiken aus dem `AudioPlaybackStats`-Objekt anzeigen.

#### HTML

Wir fügen drei {{htmlelement("button")}}-Elemente ein: eines zum Starten der Audiowiedergabe, eines zum Abrufen und Anzeigen von Statistiken und eines zum Aufrufen der Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency). Außerdem fügen wir ein {{htmlelement("ul")}}-Element hinzu, in dem die Statistiken angezeigt werden.

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

In unserem JavaScript rufen wir zunächst Referenzen auf die Schaltflächen und die Ausgabeliste ab. Außerdem deaktivieren wir die Schaltflächen für die Statistiken und das Zurücksetzen, da sie anfangs keine Funktion haben. Wir aktivieren sie wieder, sobald ihnen Event-Listener zugewiesen wurden.

```js live-sample___playback-stats
const playBtn = document.querySelector(".play");
const statsBtn = document.querySelector(".stats");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");

statsBtn.disabled = true;
resetBtn.disabled = true;
```

Als Nächstes fügen wir der Wiedergabeschaltfläche einen `click`-Event-Listener hinzu. Wenn die Schaltfläche angeklickt wird, führen wir folgende Schritte aus:

- Wir erstellen einen neuen [`AudioContext`](/de/docs/Web/API/AudioContext) und deaktivieren die Wiedergabeschaltfläche, damit sie nicht erneut betätigt werden kann.
- Wir prüfen, ob die Eigenschaft [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) vorhanden ist. Falls nicht, zeigen wir die Meldung „Ihr Browser unterstützt `AudioPlaybackStats` nicht.“ in einem Listenelement der Ausgabeliste an und verlassen die Funktion mit `return`.
- Wir erstellen einen einfachen Audiographen aus einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einem [`GainNode`](/de/docs/Web/API/GainNode) und starten den Oszillator.
- Wir aktivieren die Statistikschaltfläche und weisen ihr einen `click`-Event-Listener zu. Wird sie angeklickt, schreiben wir die verschiedenen Statistiken aus dem `AudioPlaybackStats`-Objekt des Audio-Kontexts in eine Textzeichenfolge und zeigen diese in einem Listenelement der Ausgabeliste an.
- Wir aktivieren die Schaltfläche zum Zurücksetzen und weisen ihr einen `click`-Event-Listener zu, der beim Anklicken die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) aufruft.

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

Die gerenderte Ausgabe sieht wie folgt aus:

{{embedlivesample("playback-stats", "100%", "400")}}

Klicken Sie auf die Schaltfläche „Audio abspielen“, um den Oszillatorton zu starten. Wenn Sie anschließend auf „Statistiken anzeigen“ klicken, erscheinen die verschiedenen Statistiken aus dem `AudioPlaybackStats`-Objekt in einem Listenelement.

Wenn Sie auf „Latenz zurücksetzen“ und danach auf „Statistiken anzeigen“ klicken, werden neue Statistiken angezeigt. Die minimale Latenz beträgt dann jedoch nicht mehr null. Das liegt daran, dass die Latenz nun ab dem Klick auf „Latenz zurücksetzen“ gemessen wird und nicht mehr ab der Initialisierung des Audio-Kontexts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
