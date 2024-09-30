---
title: "ProgressEvent: total Eigenschaft"
short-title: total
slug: Web/API/ProgressEvent/total
l10n:
  sourceCommit: 76c3857b73a8d11d06dd2cd60d41df68682d7b20
---

{{APIRef("XMLHttpRequest API")}}

Die **`ProgressEvent.total`** schreibgeschützte Eigenschaft ist eine 64-Bit-Ganzzahl ohne Vorzeichen, die die Gesamtgröße, in Bytes, der gesendeten oder verarbeiteten Daten angibt.

Beim Herunterladen einer Ressource über HTTP wird dieser Wert aus dem `Content-Length` Antwort-Header entnommen. Er zählt nur den Körper der HTTP-Nachricht und schließt keine Header und anderen Overhead ein.

Wenn die [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable)
Eigenschaft des Ereignisses `false` ist, ist dieser Wert bedeutungslos und sollte ignoriert werden.

## Wert

Eine Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) Interface, zu dem es gehört.
