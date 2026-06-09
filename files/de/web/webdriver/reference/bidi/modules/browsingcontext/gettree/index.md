---
title: "`browsingContext.getTree` Befehl"
short-title: getTree
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree
l10n:
  sourceCommit: a3d6e24e23dccd757487d9ed97b0eb241f107d96
---

Der `browsingContext.getTree` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls gibt den Baum aller [Top-Level-Kontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) oder den Teilbaum zurück, der mit dem angegebenen Kontext beginnt.

## Syntax

```json-nolint
/* Without optional parameters */
{
  "method": "browsingContext.getTree",
  "params": {}
}

/* With optional parameters */
{
  "method": "browsingContext.getTree",
  "params": {
    "maxDepth": 1,
    "root": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

### Parameter

Das `params` Feld kann enthalten:

- `maxDepth` {{optional_inline}}
  - : Eine nicht-negative Ganzzahl, die die maximale Tiefe des zurückzugebenden Baumes angibt.
    Wenn nicht enthalten, was dem Wert `null` entspricht, wird der vollständige Baum zurückgegeben.
    Ein Wert von `0` gibt nur den Wurzelkontext selbst zurück.
    Wenn beispielsweise ein Top-Level-Kontext ein `<iframe>` enthält, welches selbst ein weiteres `<iframe>` enthält, gibt ein `maxDepth` von `0` nur den Top-Level-Kontext zurück; ein `maxDepth` von `1` gibt den Top-Level-Kontext und das erste `<iframe>` zurück, aber nicht das verschachtelte.

- `root` {{optional_inline}}
  - : Ein String, der die ID des Kontextes enthält, der als Wurzel des zurückgegebenen Baumes verwendet werden soll.
    Kontext-IDs werden von Befehlen wie [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) oder Ereignissen wie [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated) zurückgegeben.
    Wenn nicht enthalten, werden alle [Top-Level-Kontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) zurückgegeben.

### Rückgabewert

Das `result` Objekt in der Antwort enthält die folgenden Felder:

- `contexts`
  - : Ein Array von Kontextobjekten, die jeweils die Eigenschaften eines Kontextes repräsentieren. Jedes Objekt hat die folgenden Felder:
    - `children`
      - : Ein Array von Kontextobjekten, das die untergeordneten Kontexte dieses Kontextes darstellt. Jedes untergeordnete Objekt hat die gleiche Struktur mit seinem eigenen `children` Array, was eine rekursive Darstellung des Kontextbaumes ergibt.
        Ein leeres Array zeigt an, dass der Kontext keine Kinder hat, während ein `null` Wert anzeigt, dass Kinder von der Antwort ausgeschlossen sind, z.B. wenn das `maxDepth` Limit erreicht ist.
    - `clientWindow`
      - : Ein String, der die ID des [Client-Fensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) enthält, das diesen Kontext wiedergibt.
    - `context`
      - : Ein String, der die ID des Kontextes enthält.
    - `originalOpener`
      - : Ein String, der die ID des Kontextes enthält, der diesen Kontext ursprünglich geöffnet hat.
        Der Wert ist `null`, wenn der Kontext direkt geöffnet wurde (nicht von einem anderen Kontext).

        > [!NOTE]
        > `originalOpener` wird einmal gesetzt, wenn der Kontext erstellt wird. Es ändert sich nie und behält immer die ID des öffnenden Kontextes. Dies unterscheidet sich von der JavaScript [`window.opener`](/de/docs/Web/API/Window/opener) Eigenschaft, die das Fenster referenziert, das das aktuelle Fenster geöffnet hat — es wird `null`, wenn das [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) Attribut im Link oder das [`noopener`](/de/docs/Web/API/Window/open#noopener) Fenstermerkmal in [`window.open()`](/de/docs/Web/API/Window/open) angegeben ist.

    - `parent` {{optional_inline}}
      - : Ein String, der die ID des übergeordneten Kontextes enthält.
        Der Wert ist `null`, wenn der Kontext keinen übergeordneten Kontext hat.
        Dieses Feld ist nur für die Wurzel-Einträge im zurückgegebenen Array vorhanden.
    - `url`
      - : Ein String, der die URL des Kontextes einschließlich des Fragments enthält.
    - `userContext`
      - : Ein String, der die ID des [Benutzerkontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, der mit diesem Kontext verknüpft ist.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `no such frame`
  - : Kein Kontext mit der gegebenen `root` ID gefunden.

## Beispiele

### Abrufen aller Top-Level-Kontexte

Bei einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) betrachten Sie ein Szenario, in dem zwei Tabs im Browser geöffnet sind: Der erste Tab bei `https://example.com/page1.html` hat ein `<iframe>`, das `https://example.com/frame.html` lädt, und der zweite Tab zeigt `https://example.com/page2.html`:

```plain
Browser
├── https://example.com/page1.html (Tab 1)
│   └── https://example.com/frame.html (<iframe>)
└── https://example.com/page2.html (Tab 2)
```

Senden Sie die folgende Nachricht, um den vollständigen Kontextbaum zu erhalten:

```json
{
  "id": 1,
  "method": "browsingContext.getTree",
  "params": {}
}
```

Das `contexts` Array listet die zwei Top-Level-Kontexte auf. Das `<iframe>` innerhalb von Tab 1 erscheint verschachtelt unter seinem `children`. Der Browser antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "contexts": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f", // Tab 1
        "children": [
          // Tab 1 has one child <iframe>
          {
            "context": "6442450945", // The <iframe>
            "children": [], // No child contexts
            "originalOpener": null,
            "url": "https://example.com/frame.html",
            "userContext": "default",
            "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
          }
        ],
        "originalOpener": null,
        "url": "https://example.com/page1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      },
      {
        "context": "32ed30da-24ad-459d-8f0d-660526e92d96", // Tab 2
        "children": [], // No child contexts
        "originalOpener": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "url": "https://example.com/page2.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      }
    ]
  }
}
```

### Abrufen eines Teilbaums von einem bestimmten Kontext

Verwenden Sie das gleiche Setup wie im vorherigen Beispiel, um nur Tab 1 und seinen unmittelbaren untergeordneten Kontext zu erhalten, senden Sie die folgende Nachricht mit der Kontext-ID von Tab 1 als `root` und setzen Sie `maxDepth` auf `1`:

```json
{
  "id": 2,
  "method": "browsingContext.getTree",
  "params": {
    "root": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "maxDepth": 1
  }
}
```

Der Browser antwortet mit Tab 1 und seinem unmittelbaren Kind. Das `children` Feld für das iframe ist `null`; die `maxDepth` Einstellung von `1` begrenzt die Antwort auf eine Ebene unterhalb der Wurzel, sodass die eigenen Kinder des `<iframe>` nicht enthalten sind:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "contexts": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "children": [
          {
            "context": "6442450945",
            "children": null,
            "originalOpener": null,
            "url": "https://example.com/frame.html",
            "userContext": "default",
            "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
          }
        ],
        "originalOpener": null,
        "url": "https://example.com/page1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      }
    ]
  }
}
```

In diesem Beispiel, wenn der `root` Parameter der `browsingContext.getTree` Nachricht auf die Kontext-ID des iframes gesetzt ist (`"6442450945"`), wäre das `parent` Feld des `<iframe>` in der Antwort `"93ee5bd6-d256-4608-a002-9a8995cc0e5f"` (die Kontext-ID von Tab 1) anstelle von `null`.

Um die Suche auf nur den Wurzelkontext ohne Kinder zu beschränken, setzen Sie `maxDepth` auf `0`:

```json
{
  "id": 3,
  "method": "browsingContext.getTree",
  "params": {
    "root": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "maxDepth": 0
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "contexts": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "children": null,
        "originalOpener": null,
        "url": "https://example.com/page1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      }
    ]
  }
}
```

### Identifizierung des Öffners eines Kontextes

Erweitern Sie das gleiche Setup und beachten Sie, dass Tab 2 (`https://example.com/page2.html`) von Tab 1 (`https://example.com/page1.html`) mit `window.open()` geöffnet wurde. Senden Sie die folgende Nachricht, um zu sehen, wie diese Beziehung in der Antwort übermittelt wird:

```json
{
  "id": 4,
  "method": "browsingContext.getTree",
  "params": {}
}
```

Der Browser antwortet mit dem vollständigen Kontextbaum. Das `originalOpener` Feld identifiziert den Kontext, der Tab 2 geöffnet hat:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "contexts": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "children": [
          {
            "context": "6442450945",
            "children": [],
            "originalOpener": null,
            "url": "https://example.com/frame.html",
            "userContext": "default",
            "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
          }
        ],
        "originalOpener": null, // Opened directly
        "url": "https://example.com/page1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      },
      {
        "context": "32ed30da-24ad-459d-8f0d-660526e92d96",
        "children": [],
        "originalOpener": "93ee5bd6-d256-4608-a002-9a8995cc0e5f", // Opened by Tab 1
        "url": "https://example.com/page2.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      }
    ]
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) Befehl
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) Befehl
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) Befehl
- [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated) Ereignis
- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) Ereignis
