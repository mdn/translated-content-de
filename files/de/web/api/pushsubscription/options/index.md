---
title: "PushSubscription: options-Eigenschaft"
short-title: options
slug: Web/API/PushSubscription/options
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`options`**-Eigenschaft der {{domxref("PushSubscription")}}-Schnittstelle ist ein schreibgeschütztes Objekt, das die Optionen enthält, die zum Erstellen des Abonnements verwendet wurden.

## Wert

Ein schreibgeschütztes {{domxref("PushSubscriptionOptions")}}-Objekt mit den folgenden Werten:

- `userVisibleOnly`
  - : Ein boolescher Wert, der anzeigt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Wirkung dem Benutzer sichtbar gemacht wird.
- `applicationServerKey`
  - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten über einen Push-Server an Client-Apps zu senden. Dieser Wert ist Teil eines signierenden Schlüsselpaares, das von Ihrem Anwendungserver generiert wird und mit elliptischen Kurven-Digitalsignaturen (ECDSA) über die P-256-Kurve genutzt werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
