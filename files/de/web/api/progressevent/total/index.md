---
title: "ProgressEvent: total Eigenschaft"
short-title: total
slug: Web/API/ProgressEvent/total
l10n:
  sourceCommit: 76c3857b73a8d11d06dd2cd60d41df68682d7b20
---

{{APIRef("XMLHttpRequest API")}}

Die schreibgeschützte Eigenschaft **`ProgressEvent.total`** ist eine 64-Bit-Ganzzahl ohne Vorzeichen, die die Gesamtgröße in Bytes der Daten angibt, die übertragen oder verarbeitet werden.

Beim Herunterladen einer Ressource mit HTTP wird dieser Wert aus dem `Content-Length` Antwort-Header entnommen. Er zählt nur den Körper der HTTP-Nachricht und schließt Header und andere Overhead-Daten nicht ein.

Wenn die {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}}-Eigenschaft des Ereignisses `false` ist, ist dieser Wert bedeutungslos und sollte ignoriert werden.

## Wert

Eine Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("ProgressEvent")}} Interface, zu dem es gehört.
