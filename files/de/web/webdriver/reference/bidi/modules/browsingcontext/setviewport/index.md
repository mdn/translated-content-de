---
title: "`browsingContext.setViewport`-Befehl"
short-title: setViewport
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/setViewport
l10n:
  sourceCommit: e5999f9b30c19ca727cbf28ec254f2111f7d36c8
---

Der `browsingContext.setViewport`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls ändert die Eigenschaften des Viewports, wie z.B. die Größe des Viewports und das Gerät-Pixel-Verhältnis, für einen oder mehrere [Top-Level-Kontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Syntax

```json-nolint
/* With the required `context` parameter */
{
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With the required `userContexts` parameter */
{
  "method": "browsingContext.setViewport",
  "params": {
    "userContexts": ["a812d4d0-8c8f-4c78-9de1-3e5c5b3b3c3c"]
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "viewport": {
      "width": 1280,
      "height": 720
    },
    "devicePixelRatio": 3.0
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Eine Zeichenkette, die die ID des [Top-Level-Kontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthält, in dem die Viewport-Einstellungen angewendet werden sollen.
    Kontext-IDs werden durch Befehle wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

    Dieses Feld kann nicht verwendet werden, wenn `userContexts` ebenfalls angegeben ist.
- `userContexts`
  - : Ein Array von einem oder mehreren ID-Zeichenketten von [Benutzerkontexten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), die jeweils einen Benutzerkontext identifizieren, in dem die Viewport-Einstellungen angewendet werden sollen.
    Benutzerkontext-IDs werden durch Befehle wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.

    Dieses Feld kann nicht verwendet werden, wenn `context` ebenfalls angegeben ist.

Für sowohl `context` als auch `userContexts` kann das `params`-Feld auch enthalten:

- `devicePixelRatio` {{optional_inline}}
  - : Eine Zahl größer als `0,0`, die das [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) überschreibt, oder `null`, um die Überschreibung zu entfernen und das tatsächliche Gerät-Pixel-Verhältnis wiederherzustellen.
    Wenn nicht angegeben, bleibt das Gerät-Pixel-Verhältnis unverändert.
- `viewport` {{optional_inline}}
  - : Ein Objekt, das die neue Größe des Viewports mit den folgenden Feldern angibt oder `null`, um die Standardgröße des Viewports des Browsers zurückzusetzen:
    - `height`
      - : Eine nicht-negative ganze Zahl, die die Höhe des Viewports in CSS-Pixeln angibt.
    - `width`
      - : Eine nicht-negative ganze Zahl, die die Breite des Viewports in CSS-Pixeln angibt.

    Wenn nicht angegeben, bleibt die Größe des Viewports unverändert.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in jedem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    - Sowohl `context` als auch `userContexts` sind in derselben Anforderung angegeben.
    - Weder `context` noch `userContexts` sind angegeben.
    - Der durch `context` angegebene Kontext ist kein Top-Level-Kontext.
- `no such frame`
  - : Kein Kontext mit der angegebenen `context`-ID gefunden.
- `no such user context`
  - : Kein Benutzerkontext mit der angegebenen Benutzerkontext-ID gefunden.
- `unsupported operation`
  - : Der Browser kann den Viewport mit den angegebenen Parametern nicht anpassen.

## Beschreibung

Dieser Befehl ermöglicht es Ihnen, die Eigenschaften des Viewports eines bestimmten Kontexts zu ändern, was nützlich sein kann, um schmale Viewports zu emulieren oder responsives Design zu testen.
Geben Sie `context` an, um die Viewport-Einstellungen auf einen einzelnen Top-Level-Kontext anzuwenden oder `userContexts`, um sie auf jeden Top-Level-Kontext in einem oder mehreren [Benutzerkontexten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) anzuwenden.

Wenn `userContexts` angegeben ist, gelten die von Ihnen angegebenen Viewport-Größe und das `devicePixelRatio` für jeden aktuell in jedem angegebenen Benutzerkontext vorhandenen Top-Level-Kontext.
Sie gelten auch für jeden später in diesem Benutzerkontext erstellten Top-Level-Kontext, bis Sie sie mit einem weiteren `setViewport`-Befehl ändern oder löschen.

## Beispiele

### Ändern der Größe des Viewports eines einzelnen Tabs

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um die Größe des Viewports eines Tabs auf 480x640 CSS-Pixel zu ändern:

```json
{
  "id": 1,
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "viewport": {
      "width": 480,
      "height": 640
    }
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Überschreiben des Gerät-Pixel-Verhältnisses

Verwenden Sie die gleiche Verbindung und Sitzung wie im ersten Beispiel, um die folgende Nachricht zu senden, um ein hochdichtes Display zu simulieren, ohne die Größe des Viewports zu ändern:

```json
{
  "id": 2,
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "devicePixelRatio": 3.0
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

### Anwenden einer Viewport-Überschreibung auf einen Benutzerkontext

Verwenden Sie die gleiche Verbindung und Sitzung wie im ersten Beispiel, um die folgende Nachricht zu senden, um die Viewport-Einstellungen auf jeden Top-Level-Kontext im angegebenen Benutzerkontext anzuwenden:

```json
{
  "id": 3,
  "method": "browsingContext.setViewport",
  "params": {
    "userContexts": ["a812d4d0-8c8f-4c78-9de1-3e5c5b3b3c3c"],
    "viewport": {
      "width": 375,
      "height": 667
    }
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

### Entfernen einer Viewport-Überschreibung

Verwenden Sie die gleiche Verbindung und Sitzung wie im ersten Beispiel, um die folgende Nachricht zu senden, um die Standardgröße des Viewports in einem Kontext wiederherzustellen, indem `viewport` auf `null` gesetzt wird:

```json
{
  "id": 4,
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "viewport": null
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.captureScreenshot`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot)-Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)-Befehl
