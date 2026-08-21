---
title: SharedStorageSelectURLOperation
slug: Web/API/SharedStorageSelectURLOperation
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}

Die **`SharedStorageSelectURLOperation`**-Schnittstelle der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert einen [URL-Auswahlausgangs-Gate](/de/docs/Web/API/Shared_Storage_API#url_selection)-Vorgang.

{{InheritanceDiagram}}

## Instanzmethoden

- [`run()`](/de/docs/Web/API/SharedStorageSelectURLOperation/run) {{Deprecated_Inline}}
  - : Definiert die Struktur, der die innerhalb eines URL-Auswahlausgangs-Gate-Vorgangs definierte `run()`-Methode entsprechen sollte.

## Beispiele

In diesem Beispiel wird eine Klasse namens `SelectURLOperation` in einem Worklet definiert und mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) unter dem Namen `ab-testing` registriert. `SharedStorageSelectURLOperation` definiert die Struktur, der diese Klasse entsprechen muss, im Wesentlichen die Parameter, die für die `run()`-Methode erforderlich sind. Abgesehen von dieser Anforderung kann die Funktionalität der Klasse flexibel definiert werden.

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Read the user's experiment group from Shared Storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Return the group number
    return experimentGroup;
  }
}

// Register the operation
register("ab-testing", SelectURLOperation);
```

> [!NOTE]
> Es ist möglich, mehrere Vorgänge im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

Im Hauptbrowsing-Kontext wird die `ab-testing`-Operation mit der [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Methode aufgerufen:

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Register the Shared Storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in Shared Storage
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

Für mehr Details zu diesem Beispiel und Links zu weiteren Beispielen siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Übersichtsseite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
