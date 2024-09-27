---
title: "IntersectionObserver: thresholds-Eigenschaft"
short-title: thresholds
slug: Web/API/IntersectionObserver/thresholds
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`thresholds`**-Eigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces gibt die Liste der Schnittmengen-Schwellenwerte zurück, die beim Instanziieren des Observers mit [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) festgelegt wurden. Wurde beim Instanziieren des Objekts nur ein Schwellenwert angegeben, handelt es sich um ein Array, das diesen einzelnen Wert enthält.

Weitere Informationen darüber, wie Schwellenwerte funktionieren, finden Sie auf der [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API#thresholds)-Seite.

## Wert

Ein Array von Schnittmengen-Schwellenwerten, ursprünglich festgelegt durch die `threshold`-Eigenschaft beim Instanziieren des Observers. Wurde nur ein Schwellenwert ohne ein Array angegeben, besteht dieser Wert aus einem eintragigen Array mit diesem Schwellenwert. Unabhängig von der Reihenfolge Ihres ursprünglichen `threshold`-Arrays ist dieses immer in numerisch aufsteigender Reihenfolge sortiert.

Wenn beim Instanziieren des Observers mit `IntersectionObserver()` keine `threshold`-Option angegeben wurde, beträgt der Wert von `thresholds` `[0]`.

> [!NOTE]
> Obwohl das `options`-Objekt, das Sie beim Erstellen eines [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angeben können, ein Feld namens `threshold` enthält, heißt diese Eigenschaft `thresholds`. Verwirrend? Ja. Wenn Sie versehentlich `thresholds` als Namen des Feldes in Ihren `options` verwenden, wird das `thresholds`-Array letztendlich `[0.0]` sein, was wahrscheinlich nicht das ist, was Sie erwarten. Debugging-Chaos kann folgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
