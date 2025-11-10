---
title: "IntersectionObserver: thresholds-Eigenschaft"
short-title: thresholds
slug: Web/API/IntersectionObserver/thresholds
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`thresholds`**-Eigenschaft der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Liste der Schnittpunkt-Schwellenwerte zurückgibt, die beim Erstellen des Observers mit [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) spezifiziert wurden.

Wenn beim Erstellen des Objekts nur ein Schwellenwert-Verhältnis angegeben wurde, ist dies ein Array, das diesen einzelnen Wert enthält.

Siehe die [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API#thresholds)-Seite, um zu lernen, wie Schwellenwerte funktionieren.

## Wert

Ein Array von Schnittpunkt-Schwellenwerten, ursprünglich bei der Instanziierung des Observers über die `threshold`-Eigenschaft spezifiziert. Wenn nur ein Observer ohne ein Array angegeben wurde, ist dieser Wert ein Ein-Eintrag-Array, das diesen Schwellenwert enthält. Unabhängig von der Reihenfolge Ihres ursprünglichen `threshold`-Arrays ist dieses immer in numerisch aufsteigender Reihenfolge sortiert.

Wenn keine `threshold`-Option einbezogen wurde, als `IntersectionObserver()` zum Instanziieren des Observers verwendet wurde, ist der Wert von `thresholds` `[0]`.

> [!NOTE]
> Obwohl das `options`-Objekt, das Sie im [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor angeben können, ein Feld namens `threshold` hat, heißt diese Eigenschaft `thresholds`.
> Wenn Sie versehentlich `thresholds` als Namen des Feldes in Ihren `options` verwenden, wird das `thresholds`-Array `[0.0]` sein, was wahrscheinlich nicht das ist, was Sie erwarten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
