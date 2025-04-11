---
title: "HTMLImageElement: longDesc-Eigenschaft"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ Eigenschaft **`longDesc`** auf der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt die URL einer Text- oder HTML-Datei an, die eine ausführliche Beschreibung des Bildes enthält. Dies kann verwendet werden, um optionale zusätzliche Details über die kurze Beschreibung hinaus bereitzustellen, die im [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut angeboten werden.

## Wert

Ein String, der entweder ein leerer String sein kann (was anzeigt, dass keine ausführliche Beschreibung verfügbar ist) oder die URL einer Datei, die eine ausführliche Beschreibung des Bildinhalts enthält.

Zum Beispiel, wenn das Bild ein [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) eines Flussdiagramms ist. Die `longDesc`-Eigenschaft könnte verwendet werden, um eine Erklärung des dargestellten Kontrollflusses mit reinem Text bereitzustellen. Dies kann von Lesern sowohl als Erklärung, aber auch als Ersatz für sehbehinderte Nutzer verwendet werden.

## Hinweise zur Verwendung

Diese Eigenschaft ist _veraltet_ und sollte nicht mehr verwendet werden. Anstatt `longDesc` zu verwenden, um einen Link zu einer detaillierten Beschreibung eines Bildes bereitzustellen, betten Sie das Bild innerhalb eines Links mit dem {{HTMLElement("a")}}-Element ein.

Betrachten Sie das folgende ältere HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Hier wird `longDesc` verwendet, um anzugeben, dass der Benutzer in der Lage sein sollte, auf eine ausführliche Beschreibung des Bildes `taco-tuesday.jpg` in der HTML-Datei `image-descriptions/taco-tuesday.html` zuzugreifen.

Dies kann einfach in modernes HTML umgewandelt werden:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

Damit ist das Bild ein Link zur HTML-Datei, die das Bild genauer beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
