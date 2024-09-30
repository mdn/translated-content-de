---
title: "HTMLImageElement: longDesc-Eigenschaft"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ Eigenschaft **`longDesc`** der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gibt die URL einer Text- oder HTML-Datei an, die eine ausführliche Beschreibung des Bildes enthält. Dies kann verwendet werden, um zusätzliche Details über die kurze Beschreibung hinaus bereitzustellen, die im [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut angegeben ist.

## Wert

Ein String, der entweder eine leere Zeichenkette sein kann (was darauf hinweist, dass keine ausführliche Beschreibung verfügbar ist) oder die URL einer Datei, die eine ausführliche Beschreibung des Bildinhaltes enthält.

Zum Beispiel, wenn das Bild ein [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) eines Flussdiagramms ist. Die `longDesc`-Eigenschaft könnte verwendet werden, um eine Erklärung des dargestellten Kontrollflusses nur mit Text zu geben. Dies kann von Lesern sowohl als Erklärung als auch als Ersatz für sehbehinderte Nutzer verwendet werden.

## Verwendungshinweise

Diese Eigenschaft ist _veraltet_ und sollte nicht mehr verwendet werden. Anstatt `longDesc` zu verwenden, um einen Link zu einer detaillierten Beschreibung eines Bildes bereitzustellen, sollte das Bild innerhalb eines Links mit dem {{HTMLElement("a")}}-Element eingebunden werden.

Betrachten Sie das folgende ältere HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Hier wird `longDesc` verwendet, um anzuzeigen, dass der Benutzer Zugriff auf eine ausführliche Beschreibung des Bildes `taco-tuesday.jpg` in der HTML-Datei `image-descriptions/taco-tuesday.html` haben sollte.

Das kann einfach in modernes HTML konvertiert werden:

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
