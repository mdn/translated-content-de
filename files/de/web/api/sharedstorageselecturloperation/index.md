---
title: SharedStorageSelectURLOperation
slug: Web/API/SharedStorageSelectURLOperation
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`SharedStorageSelectURLOperation`**-Schnittstelle der {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} repräsentiert eine [URL-Auswahl-Ausgabesperre](/de/docs/Web/API/Shared_Storage_API#url_selection) Operation.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("SharedStorageSelectURLOperation.run", "run()")}} {{Experimental_Inline}}
  - : Definiert die Struktur, der die `run()`-Methode innerhalb einer URL-Auswahl-Ausgabesperre-Operation entsprechen sollte.

## Beispiele

In diesem Beispiel wird eine Klasse namens `SelectURLOperation` in einem Worklet definiert und mit {{domxref("SharedStorageWorkletGlobalScope.register()")}} unter dem Namen `ab-testing` registriert. `SharedStorageSelectURLOperation` definiert die Struktur, der diese Klasse entsprechen muss, im Wesentlichen die Parameter, die für die `run()`-Methode erforderlich sind. Abgesehen von dieser Anforderung kann die Funktionalität der Klasse flexibel definiert werden.

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Die Experimentgruppe des Benutzers aus dem Shared Storage lesen
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Die Gruppennummer zurückgeben
    return experimentGroup;
  }
}

// Die Operation registrieren
register("ab-testing", SelectURLOperation);
```

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe {{domxref("SharedStorageOperation")}} für ein Beispiel.

Im Hauptbrowserkontext wird die `ab-testing`-Operation mit der {{domxref("WindowSharedStorage.selectURL()")}}-Methode aufgerufen:

```js
// Weise einem Benutzer zufällig eine Gruppe 0 oder 1 zu
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Das Shared Storage Worklet registrieren
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Benutzer einer zufälligen Gruppe (0 oder 1) zuweisen und im Shared Storage speichern
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Die URL-Auswahl-Operation ausführen
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

  // Die gewählte URL in einen eingeschlossenen Frame rendern
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

Für weitere Details zu diesem Beispiel und Links zu anderen Beispielen siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Hauptseite.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
