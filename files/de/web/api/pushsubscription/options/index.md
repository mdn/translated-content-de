---
title: "PushSubscription: options-Eigenschaft"
short-title: options
slug: Web/API/PushSubscription/options
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`options`** schreibgeschützte Eigenschaft
des [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Interfaces ist ein Objekt, das die zum Erstellen des Abonnements verwendeten Optionen enthält.

## Wert

Ein schreibgeschütztes [`PushSubscriptionOptions`](/de/docs/Web/API/PushSubscriptionOptions)-Objekt, das die folgenden Werte enthält:

- `userVisibleOnly`
  - : Ein Boolean, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Wirkung dem Benutzer sichtbar gemacht wird.
- `applicationServerKey`
  - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten über einen Push-Server an Client-Anwendungen zu senden. Dieser Wert ist Teil eines Schlüsselpaares zur Signierung, das von Ihrem Anwendungsserver generiert wird und mit elliptischen Kurven-Digitalsignaturen (ECDSA) über die P-256-Kurve verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
