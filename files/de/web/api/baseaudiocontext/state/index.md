---
title: "BaseAudioContext: state-Eigenschaft"
short-title: state
slug: Web/API/BaseAudioContext/state
l10n:
  sourceCommit: fc37858b298a5e81a455084bf91477fcbf3f3ab7
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `state` der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle gibt den aktuellen Zustand des `AudioContext` zurück.

## Wert

Ein String. Mögliche Werte sind:

- `closed`
  - : Der Audio-Kontext wurde geschlossen (mit der [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)-Methode).
- `interrupted`
  - : Der Audio-Kontext wurde durch ein Ereignis außerhalb der Kontrolle der Web-App unterbrochen.
- `running`
  - : Der Audio-Kontext läuft normal.
- `suspended`
  - : Der Audio-Kontext wurde angehalten (mit der [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)-Methode).

## Beschreibung

Die `state`-Eigenschaft eines Audio-Kontextes wird verwendet, um dessen aktuellen Betriebszustand anzuzeigen. Dies erfolgt normalerweise, indem die `state` innerhalb eines [`statechange`](/de/docs/Web/API/BaseAudioContext/statechange_event)-Ereignishandlers abgefragt wird, sodass auf Zustandsänderungen angemessen reagiert werden kann.

Die Werte `running` und `closed` sind selbsterklärend — sie zeigen an, ob der Audio-Kontext entweder normal läuft oder geschlossen ist (über die [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)-Methode).

Die Zustände `interrupted` und `suspended` stellen beide einen "Pausenzustand" dar, der später fortgesetzt werden kann, unterscheiden sich jedoch darin, was sie signalisieren:

- Der `suspended`-Zustand zeigt an, dass der Audio-Kontext als Reaktion auf eine Benutzeraktion innerhalb der Web-App angehalten wurde, indem die [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)-Methode innerhalb eines `click`- (oder ähnlichen) Ereignishandlers ausgeführt wurde. In diesem Fall würde der Kontext durch Ausführen der [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume)-Methode fortgesetzt werden.
- Der `interrupted`-Zustand zeigt an, dass der Audio-Kontext als Reaktion auf eine Unterbrechung außerhalb der Kontrolle der Web-App angehalten wurde. In diesem Fall entscheidet der Browser, wann die App pausiert wird und wann sie wieder fortgesetzt wird. Die Web-App kann dann den `interrupted`-Zustand angemessen handhaben, indem sie beispielsweise einen Audiostream pausiert, um Ressourcen zu sparen, während eine App nicht verwendet wird.

Unterbrechungen, die den `interrupted`-Zustand auslösen können, umfassen:

- Eine Konferenz- oder Telefon-App auf demselben System, die exklusiven Zugriff auf die Audiogeräte benötigt.
- Der Benutzer schließt sein Laptop.
- API-Funktionen, die entwickelt wurden, um Audio-Unterbrechungen zu initiieren oder darauf zu reagieren.

> [!NOTE]
> Wie der `interrupted`-Zustand ausgelöst wird, kann zwischen verschiedenen Browsern variieren.

Beachten Sie auch das potenzielle Wechselspiel zwischen den `interrupted`- und `suspended`-Zuständen:

- Wenn `suspend()` auf einen Audio-Kontext während einer Unterbrechung aufgerufen wird (der `state` ist `interrupted`), wechselt der Zustand sofort zu `suspended`.
- Wenn `resume()` auf einen `suspended` Audio-Kontext während einer Unterbrechung aufgerufen wird, wechselt der Zustand sofort zu `interrupted`.
- Wenn eine Unterbrechung auftritt, während der Audio-Kontext `suspended` ist, wechselt der Kontext nicht zu `interrupted`. Dieser Wechsel erfolgt erst, wenn `resume()` auf dem Kontext aufgerufen wird (wie durch den vorherigen Punkt beschrieben). Diese Wahl wurde getroffen, um zu vermeiden, dass zu viele Geräteinformationen auf Webseiten offengelegt werden – zum Beispiel, indem jedes Mal protokolliert wird, wenn das Laptop geschlossen wird, was ein Datenschutzproblem darstellen könnte.

## Beispiele

### Umgang mit Zustandsänderungen

Der folgende Codeausschnitt stammt aus unserem [AudioContext-Zustandsdemo](https://github.com/mdn/webaudio-examples) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/)). Der [`onstatechange`](/de/docs/Web/API/BaseAudioContext/statechange_event)-Handler wird verwendet, um den aktuellen Zustand jedes Mal, wenn er sich ändert, in der Konsole zu protokollieren.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

### Wiederaufnahme von unterbrochenen Wiedergabeständen in iOS Safari

In iOS Safari, wenn ein Benutzer die Seite verlässt (z.B. Tabs wechselt, den Browser minimiert oder den Bildschirm ausschaltet)
ändert sich der Status des Audio-Kontexts zu "interrupted" und muss fortgesetzt werden. Zum Beispiel:

```js
function play() {
  if (audioCtx.state === "interrupted") {
    audioCtx.resume().then(() => play());
    return;
  }
  // rest of the play() function
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
