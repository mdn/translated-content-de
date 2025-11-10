---
title: "WebGL2RenderingContext: getSyncParameter() Methode"
short-title: getSyncParameter()
slug: Web/API/WebGL2RenderingContext/getSyncParameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getSyncParameter()`** Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) liefert Parameterinformationen
eines [`WebGLSync`](/de/docs/Web/API/WebGLSync) Objekts.

## Syntax

```js-nolint
getSyncParameter(sync, pname)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync) Objekt.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:
    - `gl.OBJECT_TYPE`
      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Typ des Sync-Objekts angibt (immer `gl.SYNC_FENCE`).
    - `gl.SYNC_STATUS`
      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das den Status des Sync-Objekts angibt (`gl.SIGNALED` oder `gl.UNSIGNALED`).
    - `gl.SYNC_CONDITION`
      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Bedingung des Sync-Objekts angibt (immer `gl.SYNC_GPU_COMMANDS_COMPLETE`).
    - `gl.SYNC_FLAGS`
      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Flags angibt, mit denen das Sync-Objekt erstellt wurde (immer 0, da keine Flags unterstützt werden).

### Rückgabewert

Abhängig vom `pname`-Parameter, entweder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) oder ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types).

## Beispiele

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
gl.getSyncParameter(sync, gl.SYNC_STATUS);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
