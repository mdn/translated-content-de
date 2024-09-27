---
title: "WebGLRenderingContext: isContextLost() Methode"
short-title: isContextLost()
slug: Web/API/WebGLRenderingContext/isContextLost
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isContextLost()`**-Methode gibt einen booleschen Wert zurück, der angibt, ob der WebGL-Kontext verloren gegangen ist und neu hergestellt werden muss, bevor das Rendering fortgesetzt werden kann.

## Syntax

```js-nolint
isContextLost()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Kontext verloren gegangen ist, oder `false`, wenn nicht.

## Nutzungshinweise

Es gibt mehrere Gründe, warum ein WebGL-Kontext verloren gehen kann, was es notwendig macht, den Kontext neu herzustellen, bevor das Rendering fortgesetzt werden kann. Beispiele sind:

- Zwei oder mehr Seiten nutzen die GPU, üben jedoch zusammen eine zu hohe Belastung auf die GPU aus, sodass der Browser den beiden Kontexten mitteilt, dass sie die Verbindung verloren haben, und dann einen der beiden auswählt, um den Zugriff wiederherzustellen.
- Der Computer des Benutzers verfügt über mehrere Grafikprozessoren (wie ein Laptop mit sowohl mobilen als auch Desktop-GPUs, wobei erstere hauptsächlich bei Batteriebetrieb verwendet wird), und der Benutzer oder das System entscheidet, die GPUs zu wechseln. In diesem Fall gehen alle Kontexte verloren und werden nach dem GPU-Wechsel wiederhergestellt.
- Eine andere Seite, die im Browser des Benutzers läuft, führt eine Operation auf der GPU aus, die zu lange dauert, was den Browser dazu veranlasst, die GPU zurückzusetzen, um den Stillstand zu beenden. Dies würde dazu führen, dass jeder WebGL-Kontext im gesamten Browser verloren geht.
- Der Benutzer aktualisiert seinen Grafiktreiber auf einem Betriebssystem, das es erlaubt, Grafiktreiber zu aktualisieren, ohne das System neu zu starten.

## Beispiele

Zum Beispiel, wenn Sie den Erfolg des Programmlinkens überprüfen, könnten Sie auch überprüfen, ob der Kontext nicht verloren gegangen ist:

```js
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS) && !gl.isContextLost()) {
  const info = gl.getProgramInfoLog(program);
  console.log(`Error linking program:\n${info}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent) signalisiert Änderungen im Kontextzustand.
- [Umgang mit verlorenem Kontext in WebGL](https://www.khronos.org/webgl/wiki/HandlingContextLost): Khronos WebGL-Wiki
