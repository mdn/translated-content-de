---
title: "RTCStatsReport: get()-Methode"
short-title: get()
slug: Web/API/RTCStatsReport/get
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`get()`**-Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Schnittstelle gibt ein angegebenes Element aus einem `RTCStatsReport` zurück.

Elemente im `RTCStatsReport` werden durch eindeutige `id`-Werte identifiziert, die die überwachten Statistikobjekte repräsentieren, aus denen die Statistiken abgeleitet werden.
Das zurückgegebene Element wird eine Instanz eines der [Statistik-Wörterbuchobjekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types) sein und Statistiken für das Objekt mit der angegebenen `id` enthalten.
Der abgerufene Wert ist eine Referenz auf das Statistik-Wörterbuch, und jede Änderung an diesem Objekt wird effektiv innerhalb des `RTCStatsReport`-Objekts modifiziert.

Die Methode verhält sich ansonsten genauso wie {{jsxref("Map.prototype.get()")}}.

## Syntax

```js-nolint
get(id)
```

### Parameter

- `id`
  - : Ein String, der die ID des Elements angibt, das vom `RTCStatsReport`-Objekt zurückgegeben werden soll.
    IDs sind eindeutige Zeichenfolgen, die das überwachte Objekt identifizieren, aus dem die entsprechenden Statistiken abgeleitet werden.

### Rückgabewert

Das Element, das dem angegebenen `id`-Schlüssel zugeordnet ist, oder {{jsxref("undefined")}}, wenn der Schlüssel im `Map`-Objekt nicht gefunden werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.get()")}}
