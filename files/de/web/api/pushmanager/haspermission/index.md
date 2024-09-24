---
title: "PushManager: hasPermission()-Methode"
short-title: hasPermission()
slug: Web/API/PushManager/hasPermission
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`PushManager.hasPermission()`**-Methode des {{domxref("PushManager")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich auf den `PushPermissionStatus` der anfragenden Web-App auflöst. Dieser Status ist entweder `granted`, `denied` oder `default`.

> [!NOTE]
> Diese Funktion wurde durch die {{domxref("PushManager.permissionState()")}}-Methode ersetzt.

## Syntax

```js-nolint
hasPermission()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf den `PushPermissionStatus` auflöst.

## Beispiele

```js
// TBD
```

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browserkompatibilität

{{Compat}}
