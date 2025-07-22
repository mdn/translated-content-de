---
title: "BaseAudioContext: state-Eigenschaft"
short-title: state
slug: Web/API/BaseAudioContext/state
l10n:
  sourceCommit: 1d4acd0cc450af2e293b9856d5763b92a0812e30
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `state` des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces gibt den aktuellen Zustand des `AudioContext` zurück.

## Wert

Ein String. Mögliche Werte sind:

- `closed`
  - : Der Audio-Kontext wurde geschlossen (mit der
    [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)-Methode).
- `interrupted` {{experimental_inline}}
  - : Der Audio-Kontext wurde durch ein Ereignis außerhalb der Kontrolle der Web-App unterbrochen.
- `running`
  - : Der Audio-Kontext läuft normal.
- `suspended`
  - : Der Audio-Kontext wurde angehalten (mit der
    [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)-Methode).

## Beschreibung

Die `state`-Eigenschaft eines Audio-Kontextes wird verwendet, um seinen aktuellen Betriebszustand offenzulegen. Dies wird normalerweise durch eine Abfrage des `state` innerhalb eines [`statechange`](/de/docs/Web/API/BaseAudioContext/statechange_event)-Ereignishandlers durchgeführt, sodass Änderungen im Zustand angemessen beantwortet werden können.

Die Werte `running` und `closed` sind selbsterklärend – sie zeigen an, dass der Audio-Kontext entweder normal läuft oder geschlossen wurde (über die [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)-Methode).

Die `interrupted` und `suspended` Zustände stellen beide einen "pausierten" Zustand dar, der später fortgesetzt werden kann, unterscheiden sich jedoch in dem, was sie bedeuten:

- Der `suspended` Zustand zeigt an, dass der Audio-Kontext als Reaktion auf eine Benutzeraktion innerhalb der Web-App pausiert wurde, indem die [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)-Methode innerhalb eines `click` (oder ähnlichen) Ereignishandlers ausgeführt wurde. In diesem Fall würde der Kontext durch Ausführen der [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume)-Methode fortgesetzt.
- Der `interrupted` Zustand zeigt an, dass der Audio-Kontext als Reaktion auf eine Unterbrechung außerhalb der Kontrolle der Web-App pausiert wurde. In diesem Fall entscheidet der Browser, wann die App pausiert und fortgesetzt wird. Die Web-App kann den `interrupted` Zustand dann entsprechend behandeln, zum Beispiel indem sie einen Audio-Stream pausiert, um Ressourcen zu sparen, während eine App nicht genutzt wird.

Unterbrechungen, die den `interrupted` Zustand auslösen können, umfassen:

- Eine Konferenz- oder Telefon-App auf demselben System erfordert exklusiven Zugriff auf die Audiohardware des Geräts.
- Der Benutzer schließt seinen Laptop.
- API-Funktionen, die entwickelt wurden, um Audio-Unterbrechungen zu initiieren oder darauf zu reagieren.

> [!NOTE]
> Wie der `interrupted` Zustand ausgelöst wird, kann je nach Browser variieren.

Beachten Sie auch das Potenzial für Übergänge zwischen den `interrupted` und `suspended` Zuständen:

- Wenn `suspend()` auf einem Audio-Kontext während einer Unterbrechung (`state` ist `interrupted`) aufgerufen wird, wechselt der Zustand sofort zu `suspended`.
- Wenn `resume()` auf einem `suspended` Audio-Kontext während einer Unterbrechung aufgerufen wird, wechselt der Zustand sofort zu `interrupted`.
- Wenn eine Unterbrechung erfolgt, während der Audio-Kontext `suspended` ist, wird der Kontext nicht zu `interrupted` wechseln. Dieser Übergang erfolgt nicht, es sei denn, `resume()` wird auf dem Kontext aufgerufen (wie im vorherigen Punkt beschrieben). Diese Entscheidung wurde getroffen, um zu vermeiden, dass zu viele Geräteinformationen an Webseiten preisgegeben werden - beispielsweise könnte das Protokollieren jedes Mal, wenn der Laptop geschlossen wird, ein Datenschutzproblem darstellen.

## Beispiele

### Umgang mit Zustandsänderungen

Das folgende Snippet stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples) ([sie es live laufend](https://mdn.github.io/webaudio-examples/audiocontext-states/)). Der [`onstatechange`](/de/docs/Web/API/BaseAudioContext/statechange_event) Handler wird verwendet, um den aktuellen Zustand bei jeder Änderung in der Konsole zu protokollieren.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

### Fortsetzten von unterbrochenen Wiedergabeständen in iOS Safari

In iOS Safari, wenn ein Benutzer die Seite verlässt (z.B. Tabs wechselt, den Browser minimiert oder
den Bildschirm ausschaltet)
ändert sich der Zustand des Audio-Kontextes zu "interrupted" und muss fortgesetzt werden. Zum Beispiel:

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
