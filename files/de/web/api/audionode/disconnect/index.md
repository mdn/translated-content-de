---
title: "AudioNode: Methode disconnect()"
short-title: disconnect()
slug: Web/API/AudioNode/disconnect
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

Die **`disconnect()`**-Methode des [`AudioNode`](/de/docs/Web/API/AudioNode)-Interfaces ermöglicht es, ein oder mehrere Knoten von dem Knoten zu trennen, auf dem die Methode aufgerufen wird.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Es gibt mehrere Versionen der `disconnect()`-Methode, die verschiedene Kombinationen von Parametern akzeptieren, um zu steuern, welche Knoten getrennt werden sollen. Wenn keine Parameter angeben sind, werden alle ausgehenden Verbindungen getrennt.

- `destination` {{optional_inline}}
  - : Ein [`AudioNode`](/de/docs/Web/API/AudioNode) oder [`AudioParam`](/de/docs/Web/API/AudioParam), das den oder die Knoten angibt, von dem getrennt werden soll. Wenn dieser Wert ein `AudioNode` ist, wird ein einzelner Knoten getrennt, wobei alle anderen optionalen Parameter (`output` und/oder `input`) weiter einschränken, welche Eingänge und/oder Ausgänge getrennt werden sollen. Wenn dieser Wert ein `AudioParam` ist, wird die Verbindung zu diesem `AudioParam` beendet, und die Beiträge des Knotens zu diesem berechneten Parameter werden ab dem Zeitpunkt der Änderung 0.
- `output` {{optional_inline}}
  - : Ein Index, der beschreibt, welcher Ausgang vom aktuellen `AudioNode` getrennt werden soll. Die Indexnummern sind entsprechend der Anzahl der Ausgangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)).
- `input` {{optional_inline}}
  - : Ein Index, der beschreibt, welcher Eingang in den angegebenen `AudioNode`-Zielknoten getrennt werden soll. Die Indexnummern sind entsprechend der Anzahl der Eingangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Wert als `input` oder `output` ungültig ist, sich auf einen Knoten bezieht, der nicht existiert oder außerhalb des zulässigen Bereichs liegt.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten, auf dem `disconnect()` aufgerufen wird, nicht mit dem angegebenen `destination`-Knoten verbunden ist.

## Beispiele

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

gainNode.disconnect();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
