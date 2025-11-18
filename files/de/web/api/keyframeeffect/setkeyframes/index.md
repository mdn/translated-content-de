---
title: "KeyframeEffect: setKeyframes() Methode"
short-title: setKeyframes()
slug: Web/API/KeyframeEffect/setKeyframes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Animations") }}

Die **`setKeyframes()`**-Methode der [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Schnittstelle ersetzt die Keyframes, die den betroffenen `KeyframeEffect` ausmachen, durch einen neuen Satz von Keyframes.

## Syntax

```js-nolint
setKeyframes(keyframes)
```

### Parameter

- `keyframes`
  - : Ein Keyframe-Objekt oder `null`. Wenn auf `null` gesetzt, werden die Keyframes durch eine Sequenz leerer Keyframes ersetzt.

    Weitere Informationen über das [Format](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#syntax) eines Keyframe-Objekts.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
        Eines oder mehrere der Frames waren nicht vom richtigen Objekttyp, die Keyframes waren nicht
        <a href="https://w3c.github.io/web-animations/#loosely-sorted-by-offset"
          >ungefähr nach Offset sortiert</a
        >, oder ein Keyframe existierte mit einem Offset von weniger als 0 oder mehr als 1.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn die Keyframes nicht verarbeitet werden können oder fehlerhaft sind, werden die Keyframes des `KeyframeEffect` nicht geändert.

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
