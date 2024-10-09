---
title: "ProgressEvent: total-Eigenschaft"
short-title: total
slug: Web/API/ProgressEvent/total
l10n:
  sourceCommit: 6b8c7b7dade8173f148031a0695bbf609e10f9f9
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ProgressEvent.total`**-Eigenschaft ist eine 64-Bit-Integer-Zahl ohne Vorzeichen, die die Gesamtgröße in Bytes der übertragenen oder verarbeiteten Daten angibt.

Beim Herunterladen einer Ressource über HTTP wird dieser Wert aus dem `Content-Length`-Antwortheader entnommen. Er zählt nur den Hauptteil der HTTP-Nachricht und schließt Header und andere Überhead-Informationen nicht ein.

Wenn die [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable)-Eigenschaft des Ereignisses `false` ist, ist dieser Wert bedeutungslos und sollte ignoriert werden.

## Wert

Ein Integer.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface, zu dem es gehört.
