---
title: AudioPlaybackStats
slug: Web/API/AudioPlaybackStats
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die Schnittstelle **`AudioPlaybackStats`** der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bietet Zugriff auf Statistiken zu Wiedergabedauer, Underruns und Latenz für den zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Mit diesen Statistiken können Sie Audioverzögerungen und Wiedergabestörungen messen.

Auf das `AudioPlaybackStats`-Objekt eines Audiokontexts können Sie über dessen Eigenschaft [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) zugreifen. Das zurückgegebene `AudioPlaybackStats`-Objekt ist live – die darin enthaltenen Eigenschaftswerte werden einmal pro Sekunde aktualisiert.

## Beschreibung

In Anwendungen, die Audio wiedergeben, ist es sinnvoll, die {{Glossary("latency", "Latenz")}} und Underruns zu messen, da beides die Audioqualität beeinträchtigen kann:

- **Audiolatenz**
  - : Ein Maß für die Verzögerung zwischen dem Betätigen eines Bedienelements durch den Benutzer (etwa einer Wiedergabetaste) und der erwarteten Audiowiedergabe. Eine erhebliche Latenz kann dazu führen, dass eine Anwendung träge wirkt.
- **Underrun**
  - : Eine Lücke bei der Wiedergabe, die entsteht, wenn einer Audioanwendung die gepufferten Audiodaten ausgehen, bevor neue Daten eintreffen – sie kann dem Ausgabegerät also nicht schnell genug Audio-Frames bereitstellen. Dies kann durch einen komplexen Audiographen, eine Überlastung der CPU oder Fehlfunktionen anderer Audioprogramme verursacht werden. Das Ergebnis ist eine hörbare Störung – etwa ein Klicken, Knacken oder Audioaussetzer –, weil der Anwendung keine Daten zur Wiedergabe zur Verfügung stehen und sie die Lücke mit Stille oder Rauschen füllt.

Wenn Sie Underruns feststellen, ergreifen Sie Maßnahmen, um weitere zu vermeiden – etwa durch einen größeren Puffer oder indem Sie Systemressourcen freigeben. Verwenden Sie einen größeren Puffer mit Bedacht, da er die Latenz erhöhen kann; es ist wichtig, ein ausgewogenes Verhältnis zu finden. Sie können die Latenz verringern, indem Sie die erforderliche Verarbeitung vereinfachen oder den Wiedergabepuffer verkleinern.

Die Leistung von Web Audio variiert stark zwischen Geräten – von modernen High-End-Desktopcomputern bis hin zu günstigen Mobiltelefonen mit geringer Leistung. Mit dem `AudioPlaybackStats`-Objekt können Sie Telemetriedaten Ihrer Benutzer erfassen, um zu verstehen, wie Ihre Anwendung unter realen Bedingungen funktioniert. Nutzen Sie diese Daten, um Latenz- und Underrun-Probleme zu erkennen und darauf zu reagieren.

Sie könnten beispielsweise ein „adaptives“ Audiosystem erstellen, das erkennt, wenn Underruns oder die Latenz einen bestimmten Schwellenwert überschreiten (wenn hörbare Störungen auftreten), und dann Folgendes unternimmt:

- Die Rechenlast verringern, indem es die maximale Anzahl gleichzeitig wiedergegebener Stimmen reduziert oder komplexe Filter entfernt.
- Den Benutzer auffordern, andere Tabs oder Anwendungen zu schließen oder das Audioausgabegerät zu wechseln.

### Von der Schnittstelle bereitgestellte Underrun-Statistiken

Underruns werden anhand von **Underrun-Frames** und **Underrun-Ereignissen** definiert:

- Underrun-Frame
  - : Ein Audio-Frame, der vom Ausgabegerät wiedergegeben wird, obwohl keine tatsächlichen Audiodaten aus dem Audiokontext vorliegen. Bei einer Webanwendung handelt es sich dabei üblicherweise um Stille.
- Underrun-Ereignis
  - : Die Wiedergabe einer ununterbrochenen Folge von Underrun-Frames. Die Dauer des Underrun-Ereignisses entspricht der Gesamtdauer dieser Folge.

Die Anzahl der Underrun-Ereignisse seit der Initialisierung des Audiokontexts wird von der Eigenschaft [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) angegeben, ihre Gesamtdauer von der Eigenschaft [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration). So können Sie feststellen, wie häufig und wie lange die Audiowiedergabe aufgrund von Underruns aussetzt.

### Von der Schnittstelle bereitgestellte Latenzstatistiken

Die Latenz des Audiokontexts kann mit den Eigenschaften [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency), [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) und [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) gemessen werden.

Die momentane Wiedergabelatenz des Audiokontexts lässt sich zwar über die Eigenschaft [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) abrufen, doch dieser Momentanwert schwankt stark. `AudioPlaybackStats` stellt die durchschnittliche, minimale und maximale Latenz über einen Zeitraum bereit, was für die Erkennung dauerhafter Leistungsprobleme hilfreicher ist.

## Instanzeigenschaften

- [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die durchschnittliche Latenz seit der Initialisierung des Audiokontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die minimale Latenz seit der Initialisierung des Audiokontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die maximale Latenz seit der Initialisierung des Audiokontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.totalDuration`](/de/docs/Web/API/AudioPlaybackStats/totalDuration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die Gesamtdauer aller Audio-Frames seit der Initialisierung des Audiokontexts angibt.
- [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die die Gesamtdauer der Underrun-Ereignisse seit der Initialisierung des Audiokontexts angibt.
- [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die angibt, wie viele Underrun-Ereignisse seit der Initialisierung des Audiokontexts aufgetreten sind.

## Instanzmethoden

- [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) {{experimental_inline}}
  - : Setzt den Beginn des Zeitraums, in dem Latenzstatistiken gemessen werden, auf den aktuellen Zeitpunkt zurück.
- [`AudioPlaybackStats.toJSON()`](/de/docs/Web/API/AudioPlaybackStats/toJSON) {{experimental_inline}}
  - : Gibt ein einfaches, als JSON serialisierbares Objekt zurück, das das `AudioPlaybackStats`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

### Statistiken zur Audiowiedergabe anzeigen

Dieses Beispiel zeigt, wie Sie Audiostatistiken anzeigen, auf die über das `AudioPlaybackStats`-Objekt zugegriffen wird.

#### HTML

Wir fügen drei {{htmlelement("button")}}-Elemente hinzu: eines zum Starten der Audiowiedergabe, eines zum Abrufen und Anzeigen von Statistiken und eines zum Ausführen der Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency). Außerdem fügen wir ein {{htmlelement("ul")}}-Element hinzu, in dem die Statistiken angezeigt werden.

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

In unserem JavaScript holen wir zunächst Referenzen auf die Schaltflächen und die Ausgabeliste. Außerdem deaktivieren wir die Schaltflächen für die Statistiken und das Zurücksetzen, da sie anfangs noch keine Funktion haben. Sobald ihnen Event-Listener zugewiesen wurden, aktivieren wir sie wieder.

```js live-sample___playback-stats
const playBtn = document.querySelector(".play");
const statsBtn = document.querySelector(".stats");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");

statsBtn.disabled = true;
resetBtn.disabled = true;
```

Anschließend fügen wir der Wiedergabeschaltfläche einen Event-Listener für `click` hinzu. Wenn die Schaltfläche angeklickt wird, führen wir folgende Schritte aus:

- Wir erstellen einen neuen [`AudioContext`](/de/docs/Web/API/AudioContext) und deaktivieren die Wiedergabeschaltfläche, damit sie nicht erneut betätigt werden kann.
- Wir prüfen, ob die Eigenschaft [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) vorhanden ist. Falls nicht, zeigen wir die Meldung „Ihr Browser unterstützt `AudioPlaybackStats` nicht.“ in einem Listeneintrag der Ausgabeliste an und verlassen die Funktion mit `return`.
- Wir erstellen einen einfachen Audiographen aus einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einem [`GainNode`](/de/docs/Web/API/GainNode) und starten den Oszillator.
- Wir aktivieren die Statistikschaltfläche und weisen ihr einen Event-Listener für `click` zu. Wenn sie angeklickt wird, schreiben wir die verschiedenen Statistiken aus dem `AudioPlaybackStats`-Objekt des Audiokontexts in eine Zeichenfolge und zeigen diese in einem Listeneintrag der Ausgabeliste an.
- Wir aktivieren die Schaltfläche zum Zurücksetzen und weisen ihr einen Event-Listener für `click` zu. Wenn sie angeklickt wird, führen wir die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) aus.

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

Die gerenderte Ausgabe sieht so aus:

{{embedlivesample("playback-stats", "100%", "400")}}

Klicken Sie auf die Schaltfläche „Play audio“, um den Oszillatorton zu starten. Wenn Sie anschließend auf „Display stats“ klicken, werden die verschiedenen Statistiken aus dem `AudioPlaybackStats`-Objekt in einem Listeneintrag angezeigt.

Wenn Sie auf „Reset latency“ und danach auf „Display stats“ klicken, erscheinen neue Statistiken, aber die minimale Latenz ist nicht mehr null. Der Grund dafür ist, dass die Latenz nun ab dem Klick auf „Reset latency“ gemessen wird und nicht mehr ab der Initialisierung des Audiokontexts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
