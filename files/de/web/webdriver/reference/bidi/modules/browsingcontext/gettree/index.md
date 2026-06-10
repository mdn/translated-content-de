---
title: "`browsingContext.getTree`-Befehl"
short-title: getTree
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree
l10n:
  sourceCommit: 52a247932646cc4cb4b3a9bb50d7bd66d1fdc713
---

Der `browsingContext.getTree`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls gibt den Baum aller [obersten Kontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) oder den Teilbaum ab dem angegebenen Kontext zurück.

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

Das `params`-Feld kann enthalten:

- `maxDepth` {{optional_inline}}
  - : Eine nicht-negative Ganzzahl, die die maximale Tiefe des Baumes angibt, der zurückgegeben werden soll.
    Wenn nicht enthalten, was dem Wert `null` entspricht, wird der vollständige Baum zurückgegeben.
    Ein Wert von `0` gibt nur den Wurzelkontext selbst zurück.
    Wenn beispielsweise ein oberster Kontext ein `<iframe>` enthält, welches selbst ein weiteres `<iframe>` enthält, gibt ein `maxDepth` von `0` nur den obersten Kontext zurück; ein `maxDepth` von `1` gibt den obersten Kontext und das erste `<iframe>` zurück, jedoch nicht das verschachtelte.
- `root` {{optional_inline}}
  - : Ein String, der die ID des Kontexts enthält, der als Wurzel des zurückgegebenen Baumes verwendet werden soll.
    Kontext-IDs werden durch Befehle wie [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) oder Ereignisse wie [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated) zurückgegeben.
    Wenn nicht enthalten, werden alle [obersten Kontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) zurückgegeben.

### Rückgabewert

Das `result`-Objekt in der Antwort enthält die folgenden Felder:

- `contexts`
  - : Ein Array von Kontextobjekten, die jeweils die Eigenschaften eines Kontextes darstellen. Jedes Objekt hat die folgenden Felder:
    - `children`
      - : Ein Array von Kontextobjekten, das die untergeordneten Kontexte dieses Kontexts darstellt. Jedes untergeordnete Objekt hat die gleiche Struktur mit seinem eigenen `children`-Array, was dies zu einer rekursiven Darstellung des Kontextbaums macht.
        Ein leeres Array zeigt an, dass der Kontext keine untergeordneten Elemente hat, während ein `null`-Wert anzeigt, dass untergeordnete Elemente von der Antwort ausgeschlossen sind, beispielsweise wenn das `maxDepth`-Limit erreicht ist.
    - `clientWindow`
      - : Ein String, der die ID des [Client-Fensters](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) enthält, das diesen Kontext enthält.
    - `context`
      - : Ein String, der die ID des Kontexts enthält.
    - `originalOpener`
      - : Ein String, der die ID des Kontexts enthält, der diesen Kontext ursprünglich geöffnet hat.
        Der Wert ist `null`, wenn der Kontext direkt (nicht von einem anderen Kontext) geöffnet wurde.

        > [!NOTE]
        > `originalOpener` wird einmal festgelegt, wenn der Kontext erstellt wird. Es ändert sich nie und behält immer die Kontext-ID des Öffners bei. Dies unterscheidet sich von der JavaScript-Eigenschaft [`window.opener`](/de/docs/Web/API/Window/opener), die das Fenster referenziert, das das aktuelle Fenster geöffnet hat — es wird `null`, wenn das [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener)-Attribut auf dem Link verwendet wird oder wenn das [`noopener`](/de/docs/Web/API/Window/open#noopener)-Fenstermerkmal in [`window.open()`](/de/docs/Web/API/Window/open) angegeben ist.

    - `parent` {{optional_inline}}
      - : Ein String, der die ID des übergeordneten Kontexts enthält.
        Der Wert ist `null`, wenn der Kontext kein übergeordnetes Element hat.
        Dieses Feld ist nur für die Wurzelelemente im zurückgegebenen Array vorhanden.
    - `url`
      - : Ein String, der die URL des Kontexts einschließlich des Fragments enthält.
    - `userContext`
      - : Ein String, der die ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, der mit diesem Kontext verknüpft ist.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `no such frame`
  - : Kein Kontext mit der angegebenen `root`-ID wird gefunden.

## Beispiele

### Abrufen aller obersten Kontexte

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), betrachten Sie ein Szenario, in dem zwei Tabs im Browser geöffnet sind: der erste Tab unter `https://example.com/page1.html` hat ein `<iframe>`, das `https://example.com/frame.html` lädt, und der zweite Tab zeigt `https://example.com/page2.html`:

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

Das `contexts`-Array listet die beiden obersten Kontexte auf. Das `<iframe>` innerhalb von Tab 1 erscheint unter seinen `children` verschachtelt. Der Browser antwortet wie folgt:

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

### Abrufen eines Teilbaums ab einem bestimmten Kontext

Verwenden Sie dasselbe Setup wie im vorherigen Beispiel, um nur Tab 1 und seinen unmittelbar untergeordneten Kontext zu erhalten, senden Sie die folgende Nachricht mit der Kontext-ID von Tab 1 als `root` und `maxDepth` auf `1` gesetzt:

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

Der Browser antwortet mit Tab 1 und seinen unmittelbaren untergeordneten Elementen. Das `children`-Feld für das iframe ist `null`; die Einstellung `maxDepth` von `1` beschränkt die Antwort auf eine Ebene unterhalb der Wurzel, sodass die eigenen Kinder des `<iframe>` nicht enthalten sind:

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

In diesem Beispiel, wenn der `root`-Parameter der `browsingContext.getTree`-Nachricht auf die Kontext-ID des iframe (`"6442450945"`) gesetzt wäre, würde das `parent`-Feld des `<iframe>` in der Antwort `"93ee5bd6-d256-4608-a002-9a8995cc0e5f"` (Kontext-ID von Tab 1) anstelle von `null` sein.

Um die Suche nur auf den Wurzelkontext ohne untergeordnete Elemente zu beschränken, setzen Sie `maxDepth` auf `0`:

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

### Identifizierung des Öffners eines Kontexts

Basierend auf demselben Setup, betrachten Sie, dass Tab 2 (`https://example.com/page2.html`) von Tab 1 (`https://example.com/page1.html`) mittels `window.open()` geöffnet wurde. Senden Sie die folgende Nachricht, um zu sehen, wie diese Beziehung in der Antwort dargestellt wird:

```json
{
  "id": 4,
  "method": "browsingContext.getTree",
  "params": {}
}
```

Der Browser antwortet mit dem vollständigen Kontextbaum. Das `originalOpener`-Feld identifiziert den Kontext, der Tab 2 geöffnet hat:

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

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate)-Befehl
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)-Befehl
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)-Befehl
- [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated)-Ereignis
- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed)-Ereignis
