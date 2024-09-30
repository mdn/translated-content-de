---
title: "IntersectionObserver: thresholds-Eigenschaft"
short-title: thresholds
slug: Web/API/IntersectionObserver/thresholds
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte Eigenschaft **`thresholds`** des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces gibt die Liste der Überschneidungsschwellen zurück, die beim Erstellen des Beobachters mit [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) angegeben wurde. Wenn beim Erstellen des Objekts nur ein Schwellenwert angegeben wurde, handelt es sich um ein Array, das diesen einzelnen Wert enthält.

Sehen Sie sich die Seite [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API#thresholds) an, um zu erfahren, wie Schwellenwerte funktionieren.

## Wert

Ein Array von Überschneidungsschwellen, ursprünglich unter Verwendung der `threshold`-Eigenschaft beim Erstellen des Beobachters angegeben. Wenn nur ein Beobachter angegeben wurde, ohne in einem Array zu sein, ist dieser Wert ein Array mit einem Eintrag, der diese Schwelle enthält. Unabhängig von der Reihenfolge, in der Ihr ursprüngliches `threshold`-Array vorlag, ist dieses immer in numerisch aufsteigender Reihenfolge sortiert.

Wenn keine `threshold`-Option enthalten war, als `IntersectionObserver()` verwendet wurde, um den Beobachter zu erstellen, beträgt der Wert von `thresholds` `[0]`.

> [!NOTE]
> Obwohl das `options`-Objekt, das Sie beim Erstellen eines [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angeben können, ein Feld namens `threshold` hat, wird diese Eigenschaft `thresholds` genannt. Verwirrend? Ja. Wenn Sie versehentlich `thresholds` als Namen des Felds in Ihren `options` verwenden, wird das `thresholds`-Array bei `[0.0]` enden, was wahrscheinlich nicht das ist, was Sie erwarten. Chaos beim Debuggen könnte die Folge sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
