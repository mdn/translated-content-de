---
title: "WindowSharedStorage: selectURL()-Methode"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`selectURL()`**-Methode der [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Schnittstelle führt eine [URL-Auswahloperation](/de/docs/Web/API/SharedStorageSelectURLOperation) aus, die in einem Modul registriert ist, das zum `SharedStorageWorklet` des aktuellen Ursprungs hinzugefügt wurde.

> [!NOTE]
> Das [URL-Auswahl-Ausgabegate](/de/docs/Web/API/Shared_Storage_API#url_selection) wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die basierend auf Daten des gemeinsamen Speichers dem Benutzer angezeigt wird.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der registrierten Operation im Shared Storage Worklet-Modul darstellt. Er muss mit dem Namen übereinstimmen, der der Operation zugewiesen wurde, als sie mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert wurde.
- `urls`
  - : Ein Array von Objekten, das die URLs repräsentiert, zwischen denen durch die URL-Auswahloperation gewählt werden soll. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, bei denen die Namen Ereignistypen und die Werte URLs sind, die auf Berichtsziele verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs dienen als Ziele für Berichte, die mit einem Zieltyp `"shared-storage-select-url"` übermittelt werden, typischerweise über einen Aufruf der Methoden [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das die für die Durchführung des Vorgangs erforderlichen Daten darstellt.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Falls auf `true` gesetzt, bleibt der `SharedStorageWorkletGlobalScope` des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` für jede Operation, die nicht als letzte gedacht ist, auf `true` setzen. Der Standardwert, `false`, bedeutet, dass der `SharedStorageWorkletGlobalScope` nach der Ausführung des Vorgangs beendet wird und nicht erneut ausgeführt werden kann.
    - `resolveToConfig` {{optional_inline}}
      - : Ein boolescher Wert. Falls auf `true` gesetzt, wird der Erfüllungswert des von `run()` zurückgegebenen {{jsxref("Promise")}} ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt sein, das verwendet werden kann, um Inhalte in ein {{htmlelement("fencedframe")}} über dessen `config`-Attribut zu laden. Der Standardwert, `false`, bedeutet, dass der Erfüllungswert eine URL sein wird, die verwendet werden kann, um Inhalte in ein {{htmlelement("iframe")}} zu laden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das entweder mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt oder einem String, der eine URL darstellt, erfüllt wird, abhängig vom Wert der `resolveToConfig`-Option.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Das Worklet-Modul wurde noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt.
    - `urls` leer ist oder die maximal zulässige Länge (die browserspezifisch ist) überschreitet.
    - Eine `url`-Eigenschaft eines Objekts eine ungültige URL enthält.
    - Gemeinsamer Speicher deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldungsvorgang](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.

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

Sehen Sie die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Einstiegsseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
