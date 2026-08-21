---
title: "PushManager: hasPermission() Methode"
short-title: hasPermission()
slug: Web/API/PushManager/hasPermission
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("Push API")}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`PushManager.hasPermission()`** Methode des [`PushManager`](/de/docs/Web/API/PushManager) Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich in den `PushPermissionStatus` der anfragenden Web-App auflöst und einen der Werte `granted`, `denied` oder `default` annimmt.

> [!NOTE]
> Diese Funktion wurde durch die [`PushManager.permissionState()`](/de/docs/Web/API/PushManager/permissionState) Methode ersetzt.

## Syntax

```js-nolint
hasPermission()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich in den `PushPermissionStatus` auflöst.

## Beispiele

```js
// TBD
```

## Spezifikationen

Diese Funktion ist Teil keiner Spezifikation mehr. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}
