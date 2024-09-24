---
title: "PushManager: permissionState()-Methode"
short-title: permissionState()
slug: Web/API/PushManager/permissionState
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`permissionState()`**-Methode der {{domxref("PushManager")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zu einem String aufgelöst wird, der den Berechtigungsstatus des Push-Managers angibt. Mögliche Werte sind `'prompt'`, `'denied'` oder `'granted'`.

> [!NOTE]
> Seit Firefox 44 wurden die Berechtigungen für [Benachrichtigungen](/de/docs/Web/API/Notifications_API) und [Push](/de/docs/Web/API/Push_API) zusammengeführt. Wenn die Berechtigung für Benachrichtigungen erteilt wird, wird Push ebenfalls aktiviert.

## Syntax

```js-nolint
permissionState()
permissionState(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das optionale Konfigurationsparameter enthält. Es kann die folgenden Eigenschaften haben:

    - `userVisibleOnly`
      - : Ein boolescher Wert, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Effekt für den Benutzer sichtbar gemacht wird.
    - `applicationServerKey`
      - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten an Client-Apps über einen Push-Server zu senden. Dieser Wert ist Teil eines Signaturschlüsselpaares, das von Ihrem Anwendungsserver generiert wird und mit elliptischer Kurve Digitale Signatur (ECDSA) über die P-256-Kurve verwendbar ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem String mit einem Wert von `'prompt'`, `'denied'` oder `'granted'` aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
