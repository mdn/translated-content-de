---
title: "PushManager: permissionState()-Methode"
short-title: permissionState()
slug: Web/API/PushManager/permissionState
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`permissionState()`**-Methode des [`PushManager`](/de/docs/Web/API/PushManager)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf einen String aufgelöst wird, der den Berechtigungsstatus des Push-Managers angibt. Mögliche Werte sind `'prompt'`, `'denied'` oder `'granted'`.

> [!NOTE]
> Ab Firefox 44 wurden die Berechtigungen für [Notifications](/de/docs/Web/API/Notifications_API) und [Push](/de/docs/Web/API/Push_API) zusammengeführt. Wenn die Berechtigung für Benachrichtigungen erteilt ist, wird auch Push aktiviert.

## Syntax

```js-nolint
permissionState()
permissionState(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit optionalen Konfigurationsparametern. Es kann die folgenden Eigenschaften haben:

    - `userVisibleOnly`
      - : Ein boolescher Wert, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Wirkung dem Benutzer sichtbar gemacht wird.
    - `applicationServerKey`
      - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten über einen Push-Server an Client-Apps zu senden. Dieser Wert ist Teil eines Signaturschlüsselpaares, das von Ihrem Anwendungsserver generiert wurde und mit elliptic curve digital signature (ECDSA) über die P-256-Kurve verwendbar ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen String mit einem Wert von `'prompt'`, `'denied'` oder `'granted'` aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
