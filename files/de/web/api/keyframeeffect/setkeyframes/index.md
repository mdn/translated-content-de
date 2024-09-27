---
title: "KeyframeEffect: Die setKeyframes()-Methode"
short-title: setKeyframes()
slug: Web/API/KeyframeEffect/setKeyframes
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ APIRef("Web Animations") }}

Die **`setKeyframes()`**-Methode der [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Schnittstelle ersetzt die Keyframes, die das betroffene `KeyframeEffect` ausmachen, durch einen neuen Satz von Keyframes.

## Syntax

```js-nolint
setKeyframes(keyframes)
```

### Parameter

- `keyframes`

  - : Ein Keyframe-Objekt oder `null`. Wenn auf `null` gesetzt, werden die Keyframes durch eine Sequenz leerer Keyframes ersetzt.

    Weitere Informationen über das Format eines Keyframe-Objekts finden Sie unter [Format](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#syntax).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ausnahme</th>
      <th scope="col">Erklärung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        Eines oder mehrere der Frames waren nicht vom richtigen Objekttyp, die
        Keyframes waren nicht
        <a href="https://w3c.github.io/web-animations/#loosely-sorted-by-offset"
          >ungefähr nach Versatz sortiert</a
        >, oder ein Keyframe existierte mit einem Versatz von weniger als 0 oder mehr als 1.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn die Keyframes nicht verarbeitet werden können oder fehlerhaft sind, werden die Keyframes des `KeyframeEffect` nicht modifiziert.

## Beispiele

```js
// passing an array of keyframe objects
existingKeyframeEffect.setKeyframes([
  { color: "blue" },
  { color: "green", left: "10px" },
]);

// passing an object with arrays for values
existingKeyframeEffect.setKeyframes({
  color: ["blue", "green"],
  left: ["0", "10px"],
});

// passing a single-member object
existingKeyframeEffect.setKeyframes({
  color: "blue",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [KeyframeEffect-Schnittstelle](/de/docs/Web/API/KeyframeEffect)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
