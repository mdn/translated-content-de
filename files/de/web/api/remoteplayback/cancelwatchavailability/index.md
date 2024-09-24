---
title: "RemotePlayback: cancelWatchAvailability()-Methode"
short-title: cancelWatchAvailability()
slug: Web/API/RemotePlayback/cancelWatchAvailability
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Die **`cancelWatchAvailability()`** Methode der {{domxref("RemotePlayback")}} Schnittstelle storniert die Anforderung zur Überwachung für ein oder alle verfügbaren Geräte.

## Syntax

```js-nolint
cancelWatchAvailability()
cancelWatchAvailability(id)
```

### Parameter

- `id` {{optional_inline}}

  - : Die `callbackId` eines bestimmten Remote-Wiedergabegeräts.

    Wenn eine `callbackId` eines bestimmten Geräts übergeben wird, wird dieses Gerät aus der Liste der überwachten Geräte entfernt. Andernfalls wird die gesamte Liste gelöscht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref("HTMLMediaElement.disableRemotePlayback","disableRemotePlayback")}} für das Medien-Element `true` ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine `id` übergeben wird, die keiner verfügbaren `callbackId` entspricht.

## Beispiele

Sobald ein Remote-Wiedergabegerät identifiziert und verbunden wurde, kann die Überwachung der verfügbaren Geräte mit `cancelWatchAvailability()` gestoppt werden.

```js
function switchToRemoteUI() {
  // Geben Sie dem Benutzer an, dass der Status 'connecting' oder 'connected' ist.
  // Zum Beispiel das Videoelement ausblenden, da nur Steuerungen benötigt werden.
  videoElem.style.display = "none";

  // Überwachung der Verfügbarkeit von Remote-Wiedergabegeräten stoppen.
  videoElem.remote.cancelWatchAvailability();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
