---
title: "WebGLRenderingContext: Methode isContextLost()"
short-title: isContextLost()
slug: Web/API/WebGLRenderingContext/isContextLost
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.isContextLost()`** gibt einen booleschen Wert zurück, der angibt, ob der WebGL-Kontext verloren gegangen ist und neu erstellt werden muss, bevor das Rendering fortgesetzt werden kann.

## Syntax

```js-nolint
isContextLost()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Kontext verloren gegangen ist, oder `false`, wenn nicht.

## Hinweise zur Verwendung

Es gibt mehrere Gründe, warum ein WebGL-Kontext verloren gehen kann, sodass es notwendig ist, den Kontext neu zu erstellen, bevor das Rendering fortgesetzt werden kann. Beispiele hierfür sind:

- Zwei oder mehr Seiten nutzen die GPU, stellen jedoch zusammen eine zu hohe Belastung für die GPU dar, sodass der Browser den beiden Kontexten mitteilt, dass sie die Verbindung verloren haben, und dann einen der beiden auswählt, um den Zugriff wiederherzustellen.
- Der Computer des Benutzers verfügt über mehrere Grafikprozessoren (wie ein Laptop mit mobilen und Desktop-GPUs, wobei ersterer hauptsächlich im Akkubetrieb verwendet wird), und der Benutzer oder das System entscheidet sich für einen Wechsel der GPUs. In diesem Fall gehen alle Kontexte verloren und werden nach dem Wechsel der GPUs wiederhergestellt.
- Eine andere Seite im Browser des Benutzers führt einen Vorgang mit der GPU aus, der zu lange dauert, wodurch der Browser entscheidet, die GPU zurückzusetzen, um den Stillstand zu beenden. Dies würde dazu führen, dass jeder WebGL-Kontext im gesamten Browser verloren geht.
- Der Benutzer aktualisiert seinen Grafiktreiber auf einem Betriebssystem, das es erlaubt, Grafiktreiber zu aktualisieren, ohne das System neu zu starten.

## Beispiele

Zum Beispiel, wenn Sie den Erfolg der Programmverlinkung überprüfen, könnten Sie auch überprüfen, ob der Kontext nicht verloren ist:

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

- Der [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent) signalisiert Änderungen im Kontextstatus.
- [Umgang mit verlorenem Kontext in WebGL](https://www.khronos.org/webgl/wiki/HandlingContextLost): Khronos WebGL Wiki
