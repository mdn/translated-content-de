---
title: "PushSubscription: options-Eigenschaft"
short-title: options
slug: Web/API/PushSubscription/options
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`options`**-Eigenschaft
der [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Schnittstelle ist ein Objekt, das die Optionen enthält,
die zur Erstellung des Abonnements verwendet wurden.

## Wert

Ein schreibgeschütztes [`PushSubscriptionOptions`](/de/docs/Web/API/PushSubscriptionOptions)-Objekt, das die folgenden Werte enthält:

- `userVisibleOnly`
  - : Ein Boolean-Wert, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Effekt dem Nutzer sichtbar gemacht wird.
- `applicationServerKey`
  - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten über einen Push-Server an Client-Anwendungen zu senden. Dieser Wert ist Teil eines Signaturschlüssel-Paares, das von Ihrem Anwendungsserver generiert wird und mit der elliptischen Kurven-Digitalsignatur (ECDSA) über die P-256-Kurve verwendbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
