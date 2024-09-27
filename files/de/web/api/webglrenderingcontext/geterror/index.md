---
title: "WebGLRenderingContext: getError()-Methode"
short-title: getError()
slug: Web/API/WebGLRenderingContext/getError
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getError()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Fehlerinformationen zurück.

## Syntax

```js-nolint
getError()
```

### Parameter

Keine.

### Rückgabewert

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.NO_ERROR</code></td>
      <td>Es wurde kein Fehler aufgezeichnet. Der Wert dieser Konstanten ist 0.</td>
    </tr>
    <tr>
      <td><code>gl.INVALID_ENUM</code></td>
      <td>
        Ein unzulässiger Wert wurde für ein Enumerationsargument angegeben. Der
        Befehl wird ignoriert und das Fehlerflag wird gesetzt.
      </td>
    </tr>
    <tr>
      <td><code>gl.INVALID_VALUE</code></td>
      <td>
        Ein numerisches Argument liegt außerhalb des zulässigen Bereichs. Der
        Befehl wird ignoriert und das Fehlerflag wird gesetzt.
      </td>
    </tr>
    <tr>
      <td><code>gl.INVALID_OPERATION</code></td>
      <td>
        Der angegebene Befehl ist im aktuellen Zustand nicht erlaubt. Der Befehl
        wird ignoriert und das Fehlerflag wird gesetzt.
      </td>
    </tr>
    <tr>
      <td><code>gl.INVALID_FRAMEBUFFER_OPERATION</code></td>
      <td>
        Der aktuell gebundene Framebuffer ist nicht vollständig, wenn versucht
        wird, auf ihn zu rendern oder von ihm zu lesen.
      </td>
    </tr>
    <tr>
      <td><code>gl.OUT_OF_MEMORY</code></td>
      <td>Nicht genug Speicher ist verfügbar, um den Befehl auszuführen.</td>
    </tr>
    <tr>
      <td><code>gl.CONTEXT_LOST_WEBGL</code></td>
      <td>
        Wenn der WebGL-Kontext verloren geht, wird dieser Fehler beim ersten
        Aufruf von <code>getError</code> zurückgegeben. Danach und bis der
        Kontext wiederhergestellt ist, wird <code>gl.NO_ERROR</code>
        zurückgegeben.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

```js
gl.getError(); // gl.NO_ERROR (0)

gl.enable(gl.FOOBAR);
gl.getError(); // gl.INVALID_ENUM;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
- [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent)
