---
title: "HTMLImageElement: longDesc Eigenschaft"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ Eigenschaft **`longDesc`** auf der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gibt die URL einer Text- oder HTML-Datei an, die eine ausführliche Beschreibung des Bildes enthält. Diese kann verwendet werden, um optionale zusätzliche Details über die kurze Beschreibung hinaus, die im [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut angegeben werden, bereitzustellen.

## Wert

Ein String, der entweder ein leerer String sein kann (was anzeigt, dass keine ausführliche Beschreibung verfügbar ist) oder die URL einer Datei, die eine ausführliche Beschreibung des Bildinhalts enthält.

Ein Beispiel könnte ein [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) eines Flussdiagramms sein. Die `longDesc`-Eigenschaft könnte verwendet werden, um mit nur Text eine Erklärung des Kontrollflusses zu geben, der durch das Diagramm dargestellt wird. Dieser kann sowohl als Erklärung für Leser, als auch als Ersatz für sehbehinderte Benutzer verwendet werden.

## Verwendungshinweise

Diese Eigenschaft ist _veraltet_ und sollte nicht mehr verwendet werden. Anstatt `longDesc` zu verwenden, um einen Link zu einer detaillierten Beschreibung eines Bildes bereitzustellen, kapseln Sie das Bild innerhalb eines Links mit dem {{HTMLElement("a")}} Element.

Betrachten Sie folgendes älteres HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Hier wird `longDesc` verwendet, um anzugeben, dass der Benutzer eine detaillierte Beschreibung des Bildes `taco-tuesday.jpg` in der HTML-Datei `image-descriptions/taco-tuesday.html` aufrufen können sollte.

Dies kann leicht in modernes HTML umgewandelt werden:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

Damit ist das Bild ein Link zur HTML-Datei, die das Bild detaillierter beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
