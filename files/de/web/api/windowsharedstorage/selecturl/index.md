---
title: "WindowSharedStorage: selectURL() Methode"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Shared Storage API")}}

Die **`selectURL()`** Methode der [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage) Schnittstelle führt eine [URL-Auswahloperation](/de/docs/Web/API/SharedStorageSelectURLOperation) aus, die in einem Modul registriert ist, das dem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) des aktuellen Ursprungs hinzugefügt wurde.

> [!NOTE]
> Das [URL-Auswahl-Ausgabegate](/de/docs/Web/API/Shared_Storage_API#url_selection) wird verwendet, um basierend auf den Daten des geteilten Speichers eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer angezeigt werden soll.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der registrierten Operation innerhalb des Shared-Storage-Worklet-Moduls darstellt. Dieser muss mit dem Namen übereinstimmen, der der Operation bei der Registrierung mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) gegeben wurde.
- `urls`
  - : Ein Array von Objekten, die die URLs repräsentieren, zwischen denen die URL-Auswahloperation gewählt werden soll. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt mit Eigenschaften, bei denen die Namen Ereignistypen und die Werte URLs sind, die auf Berichtszielorte verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs dienen als Zielorte für Berichte, die mit einem Zielort-Typ `"shared-storage-select-url"` übermittelt werden, typischerweise über einen Aufruf der Methode [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das folgende Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten darstellt, die für die Durchführung der Operation erforderlich sind.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` auf `true` setzen für jede Operation, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.
    - `resolveToConfig` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist der Erfüllungswert des von `selectURL()` zurückgegebenen {{jsxref("Promise")}} ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) Objekt, das verwendet werden kann, um Inhalte in ein {{htmlelement("fencedframe")}} über dessen `config`-Attribut zu laden. Der Standardwert `false` bedeutet, dass der Erfüllungswert eine URL ist, die verwendet werden kann, um Inhalte in ein {{htmlelement("iframe")}} zu laden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) Objekt oder einem String, der eine URL darstellt, je nach Wert der `resolveToConfig` Option erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - `urls` leer ist oder die maximal zulässige Länge (die browserabhängig ist) überschreitet.
    - Die `url`-Eigenschaft eines Objekts eine ungültige URL enthält.
    - Der geteilte Speicher deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) enthalten hat.

## Beispiele

### Basis A/B-Tests

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Einstiegsseite für eine Schritt-für-Schritt-Anleitung dieses Beispiels und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
