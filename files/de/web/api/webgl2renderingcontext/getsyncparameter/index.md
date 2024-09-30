---
title: "WebGL2RenderingContext: Methode getSyncParameter()"
short-title: getSyncParameter()
slug: Web/API/WebGL2RenderingContext/getSyncParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getSyncParameter()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen eines [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekts zurück.

## Syntax

```js-nolint
getSyncParameter(sync, pname)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:

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
