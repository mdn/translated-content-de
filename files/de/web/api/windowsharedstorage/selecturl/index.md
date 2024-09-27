---
title: "WindowSharedStorage: selectURL()-Methode"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`selectURL()`**-Methode der [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Schnittstelle führt eine [URL-Auswahloperation](/de/docs/Web/API/SharedStorageSelectURLOperation) aus, die in einem Modul registriert ist, das dem aktuellen Ursprung zugehörigen [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) hinzugefügt wurde.

> [!NOTE]
> Das [URL-Auswahl-Ausgabegate](/de/docs/Web/API/Shared_Storage_API#url_selection) wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer basierend auf den Daten des Shared Storage angezeigt wird.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der innerhalb des Shared Storage Worklet-Moduls registrierten Operation darstellt. Er muss mit dem Namen übereinstimmen, der der Operation bei der Registrierung mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) gegeben wurde.
- `urls`
  - : Ein Array von Objekten, das die URLs repräsentiert, zwischen denen die URL-Auswahloperation wählen soll. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt mit Eigenschaften, bei denen Namen Ereignistypen sind und Werte URLs zu Berichtszielen zeigen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs fungieren als Ziele für Berichte, die mit einem Zieltyp von `"shared-storage-select-url"` eingereicht werden, typischerweise über einen Aufruf der Methode [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle für die Ausführung der Operation erforderlichen Daten darstellt.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` für jede Operation auf `true` setzen, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht wieder ausgeführt werden kann.
    - `resolveToConfig` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true` gesetzt, wird der Erfüllungswert des von `run()` zurückgegebenen {{jsxref("Promise")}} ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt sein, das verwendet werden kann, um Inhalte in ein {{htmlelement("fencedframe")}} über sein `config`-Attribut zu laden. Der Standardwert `false` bedeutet, dass der Erfüllungswert eine URL sein wird, die verwendet werden kann, um Inhalte in ein {{htmlelement("iframe")}} zu laden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das entweder mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt oder einem String, der eine URL darstellt, erfüllt wird, abhängig vom Wert der `resolveToConfig`-Option.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - `urls` leer ist oder die maximal erlaubte Länge überschreitet (browser-spezifisch).
    - Eine URL-Eigenschaft eines Objekts eine ungültige URL enthält.
    - Der Shared Storage deaktiviert ist (z.B. über eine Browsereinstellung).
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingebunden hat.

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

Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite an, um eine Einführung in dieses Beispiel zu erhalten und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
