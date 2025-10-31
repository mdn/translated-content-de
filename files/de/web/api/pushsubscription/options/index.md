---
title: "PushSubscription: options-Eigenschaft"
short-title: options
slug: Web/API/PushSubscription/options
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`options`**-Eigenschaft der [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Schnittstelle ist ein Objekt, das die Optionen enthält, die zur Erstellung des Abonnements verwendet wurden.

## Wert

Ein schreibgeschütztes [`PushSubscriptionOptions`](/de/docs/Web/API/PushSubscriptionOptions)-Objekt, das die folgenden Werte enthält:

- `userVisibleOnly`
  - : Ein Boolean-Wert, der angibt, dass das zurückgegebene Push-Abonnement nur für Nachrichten verwendet wird, deren Effekt dem Benutzer sichtbar gemacht wird.
- `applicationServerKey`
  - : Ein öffentlicher Schlüssel, den Ihr Push-Server verwenden wird, um Nachrichten an Client-Anwendungen über einen Push-Server zu senden. Dieser Wert ist Teil eines Signaturschlüsselpaares, das von Ihrem Anwendungsserver generiert wird und mit elliptischen Kurven-Digitalsignaturen (ECDSA) über die P-256-Kurve verwendbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
