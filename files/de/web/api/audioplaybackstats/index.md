---
title: AudioPlaybackStats
slug: Web/API/AudioPlaybackStats
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die **`AudioPlaybackStats`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) bietet Zugriff auf Dauer-, Unterlauf- und Latenzstatistiken für den zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Diese Statistiken ermöglichen es Ihnen, Audioverzögerungen und -störungen zu messen.

Auf das `AudioPlaybackStats`-Objekt eines Audio-Kontexts kann über die [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats)-Eigenschaft zugegriffen werden. Das zurückgegebene `AudioPlaybackStats`-Objekt ist live – die enthaltenen Eigenschaftswerte werden jede Sekunde aktualisiert.

## Beschreibung

In Anwendungen, die Audio abspielen, ist es vorteilhaft, Audio-{{Glossary("latency", "Latenz")}} und Unterläufe zu messen, da beides zu einer schlechten Audioerfahrung beitragen kann:

- **Audio-Latenz**
  - : Ein Maß für die Verzögerung zwischen der Aktivierung eines Bedienelements (wie einer Wiedergabetaste) durch den Benutzer und der erwarteten Audiowiedergabe. Signifikante Latenz kann eine Anwendung träge erscheinen lassen.
- **Unterlauf**
  - : Eine Unterbrechung bei der Wiedergabe, wenn der Audiopuffer der Anwendung leer ist, bevor neue Daten eintreffen, um diese zu ersetzen – mit anderen Worten, das System kann der Ausgabegerät nicht schnell genug Audiodaten zur Verfügung stellen. Dies kann aufgrund der Komplexität des Audiografen, CPU-Überlastung oder Störungen in anderen Audioprogrammen auftreten. Das Ergebnis ist ein hörbares „Glitch“ – ein Klick, ein Knacken oder ein Audioausfall – da die Anwendung nichts zum Abspielen hat und die Lücke mit Stille oder Rauschen füllt.

Falls Sie Unterläufe feststellen, sollten Sie Maßnahmen ergreifen, um zukünftig weitere zu vermeiden – z.B. durch Bereitstellung eines größeren Puffers oder durch Freigabe von Systemressourcen. Ein größerer Puffer sollte sorgfältig verwendet werden, da er die Latenz erhöhen kann; es ist wichtig, ein Gleichgewicht zu erreichen. Sie können die Latenz verringern, indem Sie die erforderliche Verarbeitung vereinfachen oder die Größe des Wiedergabepuffers reduzieren.

Die Web-Audio-Leistung variiert erheblich zwischen Geräten, von modernen High-End-Desktop-Computern bis hin zu kostengünstigen Mobiltelefonen. Das `AudioPlaybackStats`-Objekt ermöglicht es Ihnen, Telemetriedaten von Ihren Nutzern zu sammeln, um zu verstehen, wie sich Ihre App in der „realen Welt“ verhält. Verwenden Sie diese Daten, um Latenz- und Unterlaufprobleme zu identifizieren und darauf zu reagieren.

Beispielsweise könnten Sie ein „adaptives“ Audiosystem erstellen, das erkennt, wenn Unterlauf oder Latenz einen bestimmten Schwellenwert überschreiten (wenn das Audio zu stottern beginnt) und dann die folgenden Maßnahmen ergreifen:

- Reduzieren der Rechenlast, indem die maximale Anzahl gleichzeitig spielender Stimmen verringert oder komplexe Filter entfernt werden.
- Den Benutzer auffordern, andere Tabs oder Apps zu schließen oder das Audio-Ausgabegerät zu wechseln.

### Von der Schnittstelle bereitgestellte Unterlaufstatistiken

Unterläufe sind definiert in Bezug auf **Unterlauf-Frames** und **Unterlauf-Ereignisse**:

- Unterlauf-Frame
  - : Ein Audio-Frame, typischerweise Stille im Fall einer Webanwendung, der vom Ausgabegerät gespielt wird, wenn keine tatsächlichen Audiodaten aus dem Audio-Kontext bereitstehen.
- Unterlauf-Ereignis
  - : Die Wiedergabe einer kontinuierlichen Sequenz von Unterlauf-Frames. Die Dauer des Unterlauf-Ereignisses entspricht der Gesamtdauer der Sequenz von Unterlauf-Frames.

Die Anzahl der Unterlauf-Ereignisse seit der Initialisierung des Audio-Kontexts wird durch die [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents)-Eigenschaft gemeldet, und die Dauer dieser Unterlauf-Ereignisse wird durch die [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration)-Eigenschaft gemeldet. Dadurch können Sie herausfinden, wie oft und wie lange die Audioausgabe aufgrund eines Unterlaufs ausfällt.

### Von der Schnittstelle bereitgestellte Latenzstatistiken

Die Latenz des Audio-Kontexts kann mit den Eigenschaften [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency), [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) und [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) gemessen werden.

Es ist möglich, die unmittelbare Wiedergabelatenz des Audio-Kontexts über die [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency)-Eigenschaft abzurufen; dies ist jedoch ein sofortiger Wert, der schnell schwankt. `AudioPlaybackStats` bietet die durchschnittliche, minimale und maximale Latenz über die Zeit, was nützlicher ist, um dauerhafte Leistungsprobleme zu identifizieren.

## Instanzeigenschaften

- [`AudioPlaybackStats.averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die durchschnittliche Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die minimale Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency) {{ReadOnlyInline}}
  - : Eine Zahl, die die maximale Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.
- [`AudioPlaybackStats.totalDuration`](/de/docs/Web/API/AudioPlaybackStats/totalDuration) {{ReadOnlyInline}}
  - : Eine Zahl, die die Gesamtdauer aller Audio-Frames seit der Initialisierung des Audio-Kontexts angibt.
- [`AudioPlaybackStats.underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration) {{ReadOnlyInline}}
  - : Eine Zahl, die die Gesamtdauer der Unterlauf-Ereignisse seit der Initialisierung des Audio-Kontexts angibt.
- [`AudioPlaybackStats.underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Anzahl der Unterlauf-Ereignisse seit der Initialisierung des Audio-Kontexts angibt.

## Instanzmethoden

- [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency)
  - : Setzt den Beginn des Intervalls, in dem die Latenzstatistiken gemessen werden, auf die aktuelle Zeit zurück.
- [`AudioPlaybackStats.toJSON()`](/de/docs/Web/API/AudioPlaybackStats/toJSON)
  - : Ein {{Glossary("Serialization", "Serializer")}}, der eine JSON-Darstellung des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekts zurückgibt.

## Beispiele

### Bericht über Audio-Wiedergabestatistiken

Dieses Beispiel zeigt, wie Audiostatistiken gemeldet werden, die über das [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekt abgerufen werden.

#### HTML

Wir inkludieren drei {{htmlelement("button")}}-Elemente — eines zum Starten der Audiowiedergabe, eines zum Abrufen und Anzeigen eines Satzes von Statistiken und eines zum Ausführen der Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency). Außerdem inkludieren wir ein {{htmlelement("ul")}}-Element, in dem die Statistiken angezeigt werden.

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

In unserem JavaScript beginnen wir damit, Referenzen zu den Tasten und der Ausgabeliste zu holen. Wir deaktivieren auch unsere Statistik- und Reset-Buttons, da sie anfänglich nichts tun werden. Wir aktivieren sie erneut, sobald sie Ereignislistener angehängt haben.

```js live-sample___playback-stats
const playBtn = document.querySelector(".play");
const statsBtn = document.querySelector(".stats");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");

statsBtn.disabled = true;
resetBtn.disabled = true;
```

Dann fügen wir dem Wiedergabeknopf einen `click`-Ereignislistener hinzu, sodass beim Klicken:

- Ein neuer [`AudioContext`](/de/docs/Web/API/AudioContext) erstellt und die Wiedergabetaste deaktiviert wird, damit sie nicht erneut gedrückt werden kann.
- Ein Feature-Erkennungscode ausgeführt wird, der prüft, ob die Eigenschaft [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) existiert. Falls nicht, wird eine Nachricht "Ihr Browser unterstützt AudioPlaybackStats nicht." in einem Listenelement in der Ausgabeliste angezeigt, und es wird aus der Funktion `return` herausgesprungen.
- Ein einfacher Audiograf bestehend aus einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einem [`GainNode`](/de/docs/Web/API/GainNode) wird erstellt und der Oszillator gestartet.
- Der Statistik-Button aktiviert wird und ihm ein `click`-Ereignislistener zugefügt wird, sodass bei Klick die verschiedenen verfügbaren Statistiken im `AudioPlaybackStats`-Objekt des Audio-Kontexts in eine Textzeichenfolge geschrieben und in einem Listenelement der Ausgabeliste angezeigt werden.
- Der Reset-Button aktiviert wird und ihm ein `click`-Ereignislistener zugefügt wird, sodass bei Klick die Methode [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) ausgeführt wird.

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

Klicken Sie auf die Schaltfläche "Audio abspielen", um den Oszillator-Ton zu starten. Wenn Sie jetzt auf die Schaltfläche "Statistiken anzeigen" klicken, werden die verschiedenen verfügbaren Statistiken im [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekt in einem Listenelement angezeigt.

Wenn Sie die Schaltfläche "Latenz zurücksetzen" drücken und dann die Schaltfläche "Statistiken anzeigen" klicken, werden neue Statistiken angezeigt, aber die minimale Latenz wird nicht mehr null sein. Dies liegt daran, dass die Latenzstatistiken nun nur noch ab dem Zeitpunkt gemessen werden, an dem Sie auf die Schaltfläche "Latenz zurücksetzen" geklickt haben und nicht mehr ab dem Beginn des Audiografen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
