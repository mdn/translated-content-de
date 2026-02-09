---
title: "AudioNode: disconnect() Methode"
short-title: disconnect()
slug: Web/API/AudioNode/disconnect
l10n:
  sourceCommit: 836b5e302ced89bee4bf662a64adb7495386ae91
---

{{ APIRef("Web Audio API") }}

Die **`disconnect()`**-Methode der [`AudioNode`](/de/docs/Web/API/AudioNode)-Schnittstelle ermöglicht es Ihnen, einen oder mehrere Knoten von dem Knoten zu trennen, auf dem die Methode aufgerufen wird.

## Syntax

```js-nolint
disconnect()
disconnect(output)
disconnect(destination)
disconnect(destination, output)
disconnect(destination, output, input)
```

### Parameter

Es gibt mehrere Versionen der `disconnect()`-Methode, die verschiedene Kombinationen von Parametern akzeptieren, um zu steuern, welche Knoten getrennt werden sollen. Wenn keine Parameter angegeben sind, werden alle ausgehenden Verbindungen getrennt.

- `destination` {{optional_inline}}
  - : Ein [`AudioNode`](/de/docs/Web/API/AudioNode) oder [`AudioParam`](/de/docs/Web/API/AudioParam), das den Knoten oder die Knoten angibt, von denen getrennt werden soll. Wenn dieser Wert ein `AudioNode` ist, wird ein einzelner Knoten getrennt, wobei weitere optionale Parameter (`output` und/oder `input`) darüber hinaus einschränken, welche Eingänge und/oder Ausgänge getrennt werden sollen. Wenn dieser Wert ein `AudioParam` ist, wird die Verbindung zu diesem `AudioParam` beendet, und die Beiträge des Knotens zu diesem berechneten Parameter werden zukünftig 0, sobald die Änderung wirksam wird.
- `output` {{optional_inline}}
  - : Ein Index, der beschreibt, welcher Ausgang des aktuellen `AudioNode` getrennt werden soll. Die Indexnummern sind entsprechend der Anzahl der Ausgangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)).
- `input` {{optional_inline}}
  - : Ein Index, der beschreibt, welcher Eingang in den angegebenen Ziel-`AudioNode` getrennt werden soll. Die Indexnummern sind entsprechend der Anzahl der Eingangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). Nicht anwendbar, wenn `destination` ein `AudioParam` ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der als `input` oder `output` angegebene Wert ungültig ist, sich auf einen Knoten bezieht, der nicht existiert, oder außerhalb des zulässigen Bereichs liegt.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten, auf dem `disconnect()` aufgerufen wird, nicht mit dem angegebenen Zielknoten verbunden ist.

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
