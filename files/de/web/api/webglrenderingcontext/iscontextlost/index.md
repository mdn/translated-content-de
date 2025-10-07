---
title: "WebGLRenderingContext: isContextLost() Methode"
short-title: isContextLost()
slug: Web/API/WebGLRenderingContext/isContextLost
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.isContextLost()`** -Methode gibt einen boolean-Wert zurück, der angibt, ob der WebGL-Kontext verloren gegangen ist und neu etabliert werden muss, bevor das Rendering fortgesetzt werden kann.

## Syntax

```js-nolint
isContextLost()
```

### Parameter

Keine.

### Rückgabewert

Ein boolean-Wert, der `true` ist, wenn der Kontext verloren ist, oder `false`, wenn nicht.

## Verwendungshinweise

Es gibt mehrere Gründe, warum ein WebGL-Kontext verloren gehen kann, was es erforderlich macht, den Kontext neu zu etablieren, bevor das Rendering fortgesetzt wird. Beispiele beinhalten:

- Zwei oder mehr Seiten verwenden die GPU, stellen aber zusammen eine zu hohe Anforderung an die GPU, sodass der Browser den beiden Kontexten mitteilt, dass sie die Verbindung verloren haben, und dann einen der beiden auswählt, um den Zugang wiederherzustellen.
- Der Computer des Benutzers hat mehrere Grafikkarten (wie ein Laptop mit sowohl mobilen als auch Desktop-klassigen GPUs, wobei die erstere hauptsächlich bei Batteriebetrieb verwendet wird), und der Benutzer oder das System entscheidet, die GPU zu wechseln. In diesem Fall gehen alle Kontexte verloren und werden nach dem Wechsel der GPUs wiederhergestellt.
- Eine andere Seite, die im Browser des Benutzers ausgeführt wird, führt eine Operation mit der GPU durch, die zu lange dauert, was den Browser dazu veranlasst, die GPU zurückzusetzen, um den Stillstand zu brechen. Dies würde dazu führen, dass jeder WebGL-Kontext im gesamten Browser verloren geht.
- Der Benutzer aktualisiert seinen Grafikkartentreiber auf einem Betriebssystem, das es erlaubt, Grafikkartentreiber zu aktualisieren, ohne das System neu zu starten.

## Beispiele

Wenn Sie beispielsweise den Erfolg des Programms beim Verknüpfen überprüfen, könnten Sie auch prüfen, ob der Kontext nicht verloren ist:

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
- [Umgang mit verlorenem Kontext in WebGL](https://wikis.khronos.org/webgl/HandlingContextLost): Khronos WebGL Wiki
