---
title: AbortController
slug: Web/API/AbortController
l10n:
  sourceCommit: a4fd602696976d79d8690f9c86a2a1c1f2b9b9eb
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`AbortController`** Interface stellt ein Controller-Objekt dar, das es Ihnen ermöglicht, eine oder mehrere Webanfragen nach Belieben abzubrechen.

Sie können ein neues `AbortController`-Objekt mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController) Konstruktor erstellen. Die Kommunikation mit einem asynchronen Vorgang erfolgt über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Konstruktor

- [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)
  - : Erstellt eine neue Instanz eines `AbortController`-Objekts.

## Instanzeigenschaften

- [`AbortController.signal`](/de/docs/Web/API/AbortController/signal) {{ReadOnlyInline}}
  - : Gibt eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts zurück, das verwendet werden kann, um mit einem asynchronen Vorgang zu kommunizieren oder ihn abzubrechen.

## Instanzmethoden

- [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort)
  - : Bricht einen asynchronen Vorgang ab, bevor er abgeschlossen ist. Dies kann [Fetch-Anfragen](/de/docs/Web/API/Window/fetch), die Verarbeitung von Antwortkörpern und Streams abbrechen.

## Beispiele

Siehe die [`AbortSignal` Seite](/de/docs/Web/API/AbortSignal#examples) für Anwendungsbeispiele.

Ein [voll funktionsfähiges Beispiel finden Sie auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald
