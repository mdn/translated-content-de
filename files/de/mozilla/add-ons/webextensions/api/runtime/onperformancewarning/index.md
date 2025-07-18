---
title: runtime.onPerformanceWarning
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onPerformanceWarning
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dieses Ereignis wird ausgelöst, wenn ein Laufzeitleistungsproblem für die Erweiterung erkannt wird. Beobachten Sie dieses Ereignis, um über Laufzeitleistungsprobleme Ihrer Erweiterung benachrichtigt zu werden.

## Syntax

```js-nolint
browser.runtime.onPerformanceWarning.addListener(listener)
browser.runtime.onPerformanceWarning.removeListener(listener)
browser.runtime.onPerformanceWarning.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu beobachten. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob mindestens ein Listener für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es überwacht wird, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Ein Objekt mit den folgenden Eigenschaften:
        - `category`
          - : {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}. Die Kategorie der Warnung.
        - `severity`
          - : {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}. Die Schwere der Warnung.
        - `tabId` {{optional_inline}}
          - : `integer`. Die ID des Tabs, auf den sich die Leistungswarnung bezieht, falls vorhanden.
        - `description`
          - : `string`. Eine Erklärung, was die Warnung bedeutet, möglicherweise mit Informationen darüber, wie sie behoben werden kann.

## Beispiele

```js
function handlePerformanceWarning(details) {
  console.log(`Performance warning: ${details.description}`);
}

browser.runtime.onPerformanceWarning.addListener(handlePerformanceWarning);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
