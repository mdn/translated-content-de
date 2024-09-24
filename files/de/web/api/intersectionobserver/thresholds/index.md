---
title: "IntersectionObserver: thresholds-Eigenschaft"
short-title: thresholds
slug: Web/API/IntersectionObserver/thresholds
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`thresholds`**-Eigenschaft des {{domxref("IntersectionObserver")}}-Interfaces gibt die Liste der Schnittschwellen zurück, die beim Erstellen des Beobachters mit {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} angegeben wurden. Wenn beim Erstellen des Objekts nur ein Schwellenwert angegeben wurde, wird dies ein Array sein, das diesen einzelnen Wert enthält.

Sehen Sie sich die Seite [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API#thresholds) an, um zu erfahren, wie Schwellenwerte funktionieren.

## Wert

Ein Array von Schnittschwellen, ursprünglich angegeben mit der `threshold`-Eigenschaft beim Erstellen des Beobachters. Wenn nur ein Beobachter angegeben wurde, ohne in einem Array zu sein, ist dieser Wert ein Array mit einem Eintrag, das diese Schwelle enthält. Unabhängig von der Reihenfolge, in der Ihr ursprüngliches `threshold`-Array war, ist dieses immer numerisch aufsteigend sortiert.

Wenn keine `threshold`-Option enthalten war, als `IntersectionObserver()` zur Instanzierung des Beobachters verwendet wurde, ist der Wert von `thresholds` `[0]`.

> [!NOTE]
> Obwohl das `options`-Objekt, das Sie beim Erstellen eines {{domxref("IntersectionObserver")}} angeben können, ein Feld namens `threshold` hat, heißt diese Eigenschaft `thresholds`. Verwirrend? Ja. Wenn Sie versehentlich `thresholds` als Name des Felds in Ihren `options` verwenden, wird das `thresholds`-Array letztendlich `[0.0]` sein, was wahrscheinlich nicht erwartet wird. Es könnte zu chaotischem Debuggen führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
