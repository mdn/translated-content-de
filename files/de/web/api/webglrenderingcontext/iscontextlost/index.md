---
title: "WebGLRenderingContext: isContextLost()-Methode"
short-title: isContextLost()
slug: Web/API/WebGLRenderingContext/isContextLost
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isContextLost()`**-Methode gibt einen booleschen Wert zurück, der angibt, ob der WebGL-Kontext verloren gegangen ist und vor dem Fortsetzen des Renderings neu hergestellt werden muss.

## Syntax

```js-nolint
isContextLost()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Kontext verloren ist, oder `false`, wenn nicht.

## Anwendungshinweise

Es gibt mehrere Gründe, warum ein WebGL-Kontext verloren gehen kann, was es erforderlich macht, den Kontext neu herzustellen, bevor das Rendering fortgesetzt werden kann. Beispiele hierfür sind:

- Zwei oder mehr Seiten nutzen die GPU und stellen zusammen eine zu hohe Belastung für die GPU dar. Der Browser teilt dann den beiden Kontexten mit, dass sie die Verbindung verloren haben und wählt einen der beiden aus, um den Zugriff wiederherzustellen.
- Der Computer des Benutzers verfügt über mehrere Grafikprozessoren (z. B. ein Laptop mit sowohl mobilen als auch Desktop-GPUs, wobei ersterer hauptsächlich im Batteriebetrieb verwendet wird), und der Benutzer oder das System entscheidet sich, die GPU zu wechseln. In diesem Fall gehen alle Kontexte verloren und werden nach dem Wechsel der GPU wiederhergestellt.
- Eine andere Seite, die im Browser des Benutzers läuft, führt eine Operation mit der GPU aus, die zu lange dauert, was den Browser veranlasst, die GPU zurückzusetzen, um den Stillstand zu beheben. Dies würde dazu führen, dass jeder WebGL-Kontext im gesamten Browser verloren geht.
- Der Benutzer aktualisiert seinen Grafiktreiber auf einem Betriebssystem, das es ermöglicht, Grafiktreiber zu aktualisieren, ohne das System neu zu starten.

## Beispiele

Wenn Sie zum Beispiel den Erfolg der Programmverknüpfung überprüfen, könnten Sie auch überprüfen, ob der Kontext nicht verloren gegangen ist:

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

- Der {{domxref("WebGLContextEvent")}} signalisiert Änderungen im Kontextzustand.
- [Handling lost context in WebGL](https://www.khronos.org/webgl/wiki/HandlingContextLost): Khronos WebGL-Wiki
