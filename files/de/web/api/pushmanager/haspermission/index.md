---
title: "PushManager: hasPermission()-Methode"
short-title: hasPermission()
slug: Web/API/PushManager/hasPermission
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`PushManager.hasPermission()`**-Methode des [`PushManager`](/de/docs/Web/API/PushManager)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das den `PushPermissionStatus` der anfragenden Web-App auflöst, welcher einer von `granted`, `denied` oder `default` sein wird.

> [!NOTE]
> Diese Funktion wurde durch die [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState)-Methode ersetzt.

## Syntax

```js-nolint
hasPermission()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zum `PushPermissionStatus` auflöst.

## Beispiele

```js
// TBD
```

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie steht nicht mehr im Plan, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}
