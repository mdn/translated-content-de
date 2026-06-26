---
title: "WindowSharedStorage: selectURL()-Methode"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`selectURL()`**-Methode des [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Interfaces führt eine [URL-Auswahloperation](/de/docs/Web/API/SharedStorageSelectURLOperation) aus, die in einem Modul registriert ist, das der [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) der aktuellen Herkunft hinzugefügt wurde.

> [!NOTE]
> Das [URL Selection output gate](/de/docs/Web/API/Shared_Storage_API#url_selection) wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer basierend auf geteilten Speicherdaten angezeigt wird.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der registrierten Operation im Shared-Storage-Worklet-Modul darstellt. Er muss mit dem Namen übereinstimmen, der der Operation bei der Registrierung mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) gegeben wurde.
- `urls`
  - : Ein Array von Objekten, das die URLs darstellt, zwischen denen von der URL-Auswahloperation gewählt wird. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt mit Eigenschaften, bei denen die Namen Ereignistypen und die Werte URLs sind, die auf Berichterstattungsziele verweisen, z.B. `"click" : "my-reports/report1.html"`. Die URLs fungieren als Ziele für Berichte, die mit einem Ziel des Typs `"shared-storage-select-url"` übermittelt werden, typischerweise über einen Aufruf der Methode [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten darstellt, die zur Ausführung der Operation benötigt werden.
    - `keepAlive` {{optional_inline}}
      - : Ein Boolean-Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher muss `keepAlive` für jede Operation auf `true` gesetzt werden, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.
    - `resolveToConfig` {{optional_inline}}
      - : Ein Boolean-Wert. Wenn auf `true` gesetzt, ist der Erfüllungswert des von `run()` zurückgegebenen {{jsxref("Promise")}} ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das verwendet werden kann, um Inhalte in einem {{htmlelement("fencedframe")}} über dessen `config`-Attribut zu laden. Der Standardwert `false` bedeutet, dass der Erfüllungswert eine URL ist, die verwendet werden kann, um Inhalte in ein {{htmlelement("iframe")}} zu laden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt oder einem String erfüllt wird, der eine URL darstellt, abhängig vom Wert der `resolveToConfig`-Option.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - `urls` leer ist oder die maximal zulässige Länge (die browserabhängig ist) überschreitet.
    - Die `url`-Eigenschaft eines Objekts eine ungültige URL enthält.
    - Shared Storage deaktiviert ist (zum Beispiel über eine Browser-Einstellung).
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Einschreibungsprozess für das Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) aufgenommen hat.

## Beispiele

### Einfaches A/B-Testen

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Add the module to the shared storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in shared storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Run the URL selection operation
  const fencedFrameConfig = await window.sharedStorage.selectURL(
    "ab-testing",
    [
      { url: `https://your-server.example/content/default-content.html` },
      { url: `https://your-server.example/content/experiment-content-a.html` },
    ],
    {
      resolveToConfig: true,
    },
  );

  // Render the chosen URL into a fenced frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

Besuchen Sie die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Hauptseite für eine detaillierte Anleitung zu diesem Beispiel und Links zu anderen Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
