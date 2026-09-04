---
title: "ProgressEvent: total Eigenschaft"
short-title: total
slug: Web/API/ProgressEvent/total
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ProgressEvent.total`**-Eigenschaft ist eine Zahl, die die Gesamtgröße der übertragenen oder verarbeiteten Daten anzeigt.

Für vom Browser ausgelöste `ProgressEvent`s bezieht sich der Wert auf die Größe einer Ressource in Byte und wird aus dem `Content-Length`-Antwortheader abgeleitet.

In einem selbst erstellten `ProgressEvent` kann dies ebenfalls die Gesamtzahl der Bytes einer Ressource sein, obwohl dies jede beliebige Zahl sein kann.
Beispielsweise könnten Sie `total` auf einen Wert wie `100` oder `1` normalisieren, wenn die Offenlegung der genauen Bytezahl einer Ressource ein Problem darstellt.
Wenn Sie `1` als Gesamtwert verwenden, wäre [`ProgressEvent.loaded`](/de/docs/Web/API/ProgressEvent/loaded) ein Dezimalwert zwischen `0` und `1`.

Wenn die [`lengthComputable`](/de/docs/Web/API/ProgressEvent/lengthComputable)-Eigenschaft des Ereignisses `false` ist, ist dieser Wert bedeutungslos und sollte ignoriert werden.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface, zu dem es gehört.
