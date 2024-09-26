---
title: runtime.onPerformanceWarning
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onPerformanceWarning
l10n:
  sourceCommit: 0bbf7b0f1c3e0966ce9534e70de5e8749a23e2b2
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, wenn ein Laufzeitleistungsproblem für die Erweiterung festgestellt wird. Beobachten Sie dieses Ereignis, um über Laufzeitleistungsprobleme Ihrer Erweiterung informiert zu werden.

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
  - : Hört auf, auf dieses Ereignis zu lauschen. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob mindestens ein Listener für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

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
          - : `integer`. Die ID des Tabs, auf das sich die Leistungswarnung bezieht, falls vorhanden.
        - `description`
          - : `string`. Eine Erklärung, was die Warnung bedeutet, möglicherweise mit Informationen, wie man sie beheben kann.

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