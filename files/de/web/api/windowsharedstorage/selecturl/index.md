---
title: "WindowSharedStorage: selectURL()-Methode"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`selectURL()`**-Methode der [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Schnittstelle führt eine [URL-Auswahloperation](/de/docs/Web/API/SharedStorageSelectURLOperation) aus, die in einem Modul registriert ist, das zum aktuellen Ursprung des [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) hinzugefügt wurde.

> [!NOTE]
> Das [URL-Ausgabeauswahl-Gate](/de/docs/Web/API/Shared_Storage_API#url_selection) wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer basierend auf gemeinsam genutzten Speicherdaten angezeigt werden soll.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der registrierten Operation innerhalb des Shared Storage Worklet-Moduls darstellt. Er muss mit dem Namen übereinstimmen, der der Operation gegeben wurde, als sie mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert wurde.
- `urls`
  - : Ein Array von Objekten, das die URLs darstellt, zwischen denen die URL-Auswahloperation wählen soll. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, bei denen die Namen Ereignistypen und die Werte URLs sind, die auf Berichtsziele verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs fungieren als Ziele für Berichte, die mit einem Ziel vom Typ `"shared-storage-select-url"` eingereicht werden, typischerweise eingereicht über einen Aufruf der Methode [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten darstellt, die zum Ausführen der Operation benötigt werden.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aufrechterhalten, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` für jede Operation auf `true` setzen, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.
    - `resolveToConfig` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, wird der Erfüllungswert des von `run()` zurückgegebenen {{jsxref("Promise")}} ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt sein, das verwendet werden kann, um Inhalte in einen {{htmlelement("fencedframe")}} über sein `config`-Attribut zu laden. Der Standardwert `false` bedeutet, dass der Erfüllungswert eine URL sein wird, mit der Inhalte in ein {{htmlelement("iframe")}} geladen werden können.

### Rückgabewert

Ein {{jsxref("Promise")}}, das entweder mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt oder einem String, der eine URL darstellt, erfüllt wird, abhängig vom Wert der `resolveToConfig`-Option.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - `urls` leer ist oder die maximal zulässige Länge überschreitet (wird von Browser zu Browser unterschiedlich gehandhabt).
    - Die `url`-Eigenschaft eines Objekts eine ungültige URL enthält.
    - Gemeinsamer Speicher deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Seite nicht über die Shared Storage API verfügt, die in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten ist.

## Beispiele

### Grundlegendes A/B-Testing

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Hauptseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
