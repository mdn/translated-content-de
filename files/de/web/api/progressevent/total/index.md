---
title: "ProgressEvent: total-Eigenschaft"
short-title: total
slug: Web/API/ProgressEvent/total
l10n:
  sourceCommit: 76c3857b73a8d11d06dd2cd60d41df68682d7b20
---

{{APIRef("XMLHttpRequest API")}}

Die schreibgeschützte Eigenschaft **`ProgressEvent.total`** ist eine 64-Bit große vorzeichenlose Ganzzahl, die die Gesamtgröße in Bytes der Daten angibt, die übertragen oder verarbeitet werden.

Beim Herunterladen einer Ressource über HTTP wird dieser Wert aus dem `Content-Length`-Antwortheader entnommen. Es zählt nur den Körper der HTTP-Nachricht und schließt Header und andere Überköpfe nicht ein.

Wenn die [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable)-Eigenschaft des Ereignisses `false` ist, ist dieser Wert bedeutungslos und sollte ignoriert werden.

## Wert

Eine Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) Schnittstelle, zu der sie gehört.
