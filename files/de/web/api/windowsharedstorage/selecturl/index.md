---
title: "WindowSharedStorage: selectURL()-Methode"
short-title: selectURL()
slug: Web/API/WindowSharedStorage/selectURL
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`selectURL()`**-Methode des
{{domxref("WindowSharedStorage")}}-Interfaces führt eine [URL-Auswahloperation](/de/docs/Web/API/SharedStorageSelectURLOperation) aus, die in einem Modul registriert ist und zum aktuellen Ursprungs-{{domxref("SharedStorageWorklet")}} hinzugefügt wurde.

> [!NOTE]
> Das [URL-Auswahl-Ausgabegate](/de/docs/Web/API/Shared_Storage_API#url_selection) wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer angezeigt werden soll, basierend auf den gemeinsamen Storage-Daten.

## Syntax

```js-nolint
selectURL(name, urls)
selectURL(name, urls, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der registrierten Operation innerhalb des Shared Storage Worklet-Moduls darstellt. Der Name muss mit dem Namen übereinstimmen, der der Operation bei der Registrierung mit {{domxref("SharedStorageWorkletGlobalScope.register()")}} gegeben wurde.
- `urls`
  - : Ein Array von Objekten, das die URLs darstellt, zwischen denen die URL-Auswahloperation wählen soll. Jedes Objekt enthält zwei Eigenschaften:
    - `url`
      - : Ein String, der die URL darstellt.
    - `reportingMetadata` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, bei denen die Namen Ereignistypen sind und die Werte URLs sind, die auf Berichtsziele verweisen, z. B. `"click" : "my-reports/report1.html"`. Die URLs dienen als Ziele für Berichte, die mit einem Zieltyp von `"shared-storage-select-url"` eingereicht werden, typischerweise über einen Aufruf der Methode {{domxref("Fence.reportEvent()")}} oder {{domxref("Fence.setReportEventDataForAutomaticBeacons()")}}.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das folgende Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle für die Ausführung der Operation erforderlichen Daten darstellt.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der {{domxref("SharedStorageWorkletGlobalScope")}} des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Deshalb müssen Sie `keepAlive` für jede Operation auf `true` setzen, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der {{domxref("SharedStorageWorkletGlobalScope")}} nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.
    - `resolveToConfig` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist der Erfüllungswert des {{jsxref("Promise")}}, der von `run()` zurückgegeben wird, ein {{domxref("FencedFrameConfig")}}-Objekt, das verwendet werden kann, um Inhalte in ein {{htmlelement("fencedframe")}} über sein `config`-Attribut zu laden. Der Standardwert `false` bedeutet, dass der Erfüllungswert eine URL ist, die verwendet werden kann, um Inhalte in ein {{htmlelement("iframe")}} zu laden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das entweder mit einem {{domxref("FencedFrameConfig")}}-Objekt oder einem String, der eine URL darstellt, erfüllt wird, abhängig vom Wert der `resolveToConfig`-Option.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit {{domxref("Worklet.addModule", "addModule()")}} hinzugefügt wurde.
    - `urls` leer ist oder die maximal zulässige Länge überschreitet (die browserabhängig ist).
    - Die `url`-Eigenschaft eines Objekts eine ungültige URL enthält.
    - Gemeinsamer Speicher deaktiviert ist (z. B. durch eine Browsereinstellung).
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.

## Beispiele

### Grundlegendes A/B-Testing

```js
// Weist einen Benutzer zufällig einer Gruppe 0 oder 1 zu
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Fügen Sie das Modul zum Shared Storage Worklet hinzu
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Weisen Sie einem Benutzer zufällig eine Gruppe (0 oder 1) zu und speichern Sie sie im Shared Storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Führen Sie die URL-Auswahloperation aus
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

  // Rendern Sie die ausgewählte URL in einem abgeschlossenen Frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
