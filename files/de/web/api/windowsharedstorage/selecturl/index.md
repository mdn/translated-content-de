---
title: "WindowSharedStorage: selectURL()-Methode"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}

Die **`selectURL()`**-Methode der
[`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Schnittstelle führt eine [URL-Auswahloperation](/de/docs/Web/API/SharedStorageSelectURLOperation) aus, die in einem Modul registriert ist, das dem aktuellen Ursprung's [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) hinzugefügt wurde.

> [!NOTE]
> Das [URL-Auswahl-Ausgabegatter](/de/docs/Web/API/Shared_Storage_API#url_selection) wird verwendet, um aus einer bereitgestellten Liste eine URL auszuwählen, die dem Benutzer angezeigt wird, basierend auf gemeinsam genutzten Speicherdaten.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameter

- `name`
  - : Ein String, der den registrierten Namen der Operation innerhalb des Shared Storage Worklet-Moduls darstellt. Er muss exakt mit dem Namen übereinstimmen, der der Operation bei der Registrierung mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) gegeben wurde.
- `urls`
  - : Ein Array von Objekten, das die zwischen der URL-Auswahloperation auszuwählenden URLs repräsentiert. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, wobei die Namen Ereignistypen und die Werte URLs sind, die auf Meldungsziele verweisen, zum Beispiel `"click" : "my-reports/report1.html"`. Die URLs dienen als Ziele für Berichte, die mit einem Zieltyp von `"shared-storage-select-url"` eingereicht werden, typischerweise eingereicht über einen Aufruf der Methode [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) oder [`Fence.setReportEventDataForAutomaticBeacons()`](/de/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten darstellt, die für die Ausführung der Operation erforderlich sind.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` auf `true` setzen für jede Operation, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.
    - `resolveToConfig` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist der Erfüllungswert des zurückgegebenen {{jsxref("Promise")}} ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das zum Laden von Inhalten in ein {{htmlelement("fencedframe")}} über dessen `config`-Attribut verwendet werden kann. Der Standardwert `false` bedeutet, dass der Erfüllungswert eine URL ist, die zum Laden von Inhalten in ein {{htmlelement("iframe")}} verwendet werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt oder einem String, der eine URL darstellt, erfüllt wird, abhängig vom Wert der `resolveToConfig`-Option.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - `urls` leer ist oder die maximal zulässige Länge überschreitet (was browser-spezifisch ist).
    - Die `url`-Eigenschaft eines Objekts eine ungültige URL enthält.
    - Gemeinsamer Speicher deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Seite nicht die Shared Storage API in einem erfolgreichen [Datenschutz-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) beinhaltet.

## Beispiele

### Einfaches A/B Testing

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

Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für eine detaillierte Anleitung zu diesem Beispiel und Links zu anderen Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
