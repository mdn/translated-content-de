---
title: "WindowSharedStorage: selectURL() Methode"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`selectURL()`** Methode des [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Interfaces führt eine [URL-Auswahloperation](/de/docs/Web/API/SharedStorageSelectURLOperation) aus, die in einem Modul registriert ist, das dem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) der aktuellen Herkunft hinzugefügt wurde.

> [!NOTE]
> Das [URL-Ausgabe-Gatter](/de/docs/Web/API/Shared_Storage_API#url_selection) wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer angezeigt werden soll, basierend auf gemeinsamen Speicher-Daten.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der innerhalb des shared storage worklet Moduls registrierten Operation darstellt. Er muss mit dem Namen übereinstimmen, der der Operation gegeben wurde, als sie mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert wurde.
- `urls`
  - : Ein Array von Objekten, das die URLs repräsentiert, zwischen denen die URL-Auswahloperation wählen soll. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL repräsentiert.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, bei denen Namen Ereignistypen sind und Werte URLs sind, die auf Berichtsziele verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs fungieren als Ziele für Berichte, die mit einem Ziel des Typs `"shared-storage-select-url"` eingereicht werden, typischerweise eingereicht durch einen Aufruf der Methoden [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten repräsentiert, die zur Ausführung der Operation erforderlich sind.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt wird der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets am Leben gehalten, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` auf `true` setzen für jede Operation, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.
    - `resolveToConfig` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt wird der Erfüllungswert des {{jsxref("Promise")}}, das von `run()` zurückgegeben wird, ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt sein, das verwendet werden kann, um Inhalte in ein {{htmlelement("fencedframe")}} über sein `config`-Attribut zu laden. Der Standardwert `false` bedeutet, dass der Erfüllungswert eine URL sein wird, die verwendet werden kann, um Inhalte in ein {{htmlelement("iframe")}} zu laden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das entweder mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) Objekt oder einem String, der eine URL repräsentiert, erfüllt wird, abhängig vom Wert der `resolveToConfig`-Option.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - `urls` leer ist oder die maximal erlaubte Länge überschreitet (welche browser-spezifisch ist).
    - Eine `url`-Eigenschaft eines Objekts eine ungültige URL enthält.
    - Gemeinsamer Speicher ist deaktiviert (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Seite die Shared Storage API nicht erfolgreich in einen [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) aufgenommen hat.

## Beispiele

### Einfaches A/B-Testing

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
