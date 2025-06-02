---
title: "ProgressEvent: total-Eigenschaft"
short-title: total
slug: Web/API/ProgressEvent/total
l10n:
  sourceCommit: 03ca44d7f71637a4cad71413fac4e31d5de66638
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Die **`ProgressEvent.total`**-Eigenschaft ist eine Nur-Lese-Eigenschaft, die eine Zahl angibt, die die Gesamtgröße der übertragenen oder verarbeiteten Daten darstellt.

Für vom Browser ausgelöste `ProgressEvent`s bezieht sich der Wert auf die Größe einer Ressource in Bytes und wird aus dem `Content-Length` Antwort-Header abgeleitet.

In einem `ProgressEvent`, das Sie selbst erstellen, kann dies auch die Gesamtanzahl von Bytes einer Ressource sein, dies kann jedoch jede beliebige Zahl sein.
Beispielsweise möchten Sie `total` auf einen Wert wie `100` oder `1` normalisieren, wenn es Ihnen wichtig ist, die genaue Anzahl der Bytes einer Ressource nicht offenzulegen.
Wenn Sie `1` als Gesamtwert verwenden, wäre [`ProgressEvent.loaded`](/de/docs/Web/API/ProgressEvent/loaded) ein Dezimalwert zwischen `0` und `1`.

Wenn die [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable)-Eigenschaft des Ereignisses `false` ist, ist dieser Wert bedeutungslos und sollte ignoriert werden.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) Schnittstelle, zu der es gehört.
