---
title: "WebGL2RenderingContext: Methode getSyncParameter()"
short-title: getSyncParameter()
slug: Web/API/WebGL2RenderingContext/getSyncParameter
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getSyncParameter()`**-Methode des
[WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen eines {{domxref("WebGLSync")}}-Objekts zurück.

## Syntax

```js-nolint
getSyncParameter(sync, pname)
```

### Parameter

- `sync`
  - : Ein {{domxref("WebGLSync")}}-Objekt.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:

    - `gl.OBJECT_TYPE`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das den Typ des Synchronisationsobjekts angibt (immer `gl.SYNC_FENCE`).
    - `gl.SYNC_STATUS`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das den Status des Synchronisationsobjekts angibt (`gl.SIGNALED` oder `gl.UNSIGNALED`).
    - `gl.SYNC_CONDITION`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das die Bedingung des Synchronisationsobjekts angibt (immer `gl.SYNC_GPU_COMMANDS_COMPLETE`).
    - `gl.SYNC_FLAGS`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLenum")}} zurück, das die Flags angibt, mit denen das Synchronisationsobjekt erstellt wurde (immer 0, da keine Flags unterstützt werden).

### Rückgabewert

Abhängig vom `pname`-Parameter, entweder ein {{domxref("WebGL_API/Types", "GLenum")}} oder ein {{domxref("WebGL_API/Types", "GLbitfield")}}.

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

- {{domxref("WebGLSync")}}
