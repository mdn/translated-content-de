---
title: "PushManager: permissionState() Methode"
short-title: permissionState()
slug: Web/API/PushManager/permissionState
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`permissionState()`** Methode der [`PushManager`](/de/docs/Web/API/PushManager) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich zu einem String auflöst, der den Berechtigungsstatus des Push-Managers angibt. Mögliche Werte sind `'prompt'`, `'denied'` oder `'granted'`.

> [!NOTE]
> Seit Firefox 44 wurden die Berechtigungen für [Benachrichtigungen](/de/docs/Web/API/Notifications_API) und [Push](/de/docs/Web/API/Push_API) zusammengeführt. Wenn die Berechtigung für Benachrichtigungen erteilt wird, wird auch Push aktiviert.

## Syntax

```js-nolint
permissionState()
permissionState(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das optionale Konfigurationsparameter enthält. Es kann die folgenden Eigenschaften haben:
    - `userVisibleOnly`
      - : Ein boolescher Wert, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Effekt dem Benutzer sichtbar gemacht wird.
    - `applicationServerKey`
      - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten über einen Push-Server an Client-Apps zu senden. Dieser Wert ist Teil eines Schlüsselpaares zur Signatur, das von Ihrem Anwendungsserver generiert wurde und mit elliptischer Kurven-Digitalsignatur (ECDSA) über die P-256-Kurve verwendbar ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem String mit einem Wert von `'prompt'`, `'denied'` oder `'granted'` auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
