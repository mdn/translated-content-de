---
title: "Benachrichtigung: requireInteraction Eigenschaft"
short-title: requireInteraction
slug: Web/API/Notification/requireInteraction
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`requireInteraction`** schreibgeschützte Eigenschaft des {{domxref("Notification")}} Interfaces gibt einen booleschen Wert zurück, der angibt, dass eine Benachrichtigung aktiv bleiben sollte, bis der Nutzer sie anklickt oder schließt, anstatt automatisch zu schließen.

> [!NOTE]
> Dies kann festgelegt werden, wenn die Benachrichtigung erstmals erstellt wird, indem die `requireInteraction` Option im Optionsobjekt des {{domxref("Notification.Notification", "Notification()")}} Konstruktors auf `true` gesetzt wird.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
