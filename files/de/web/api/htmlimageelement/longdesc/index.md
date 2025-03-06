---
title: "HTMLImageElement: longDesc-Eigenschaft"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ Eigenschaft **`longDesc`** auf der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) spezifiziert die URL einer Text- oder HTML-Datei, die eine ausführliche Beschreibung des Bildes enthält. Diese kann verwendet werden, um optionale zusätzliche Details über die kurze Beschreibung im [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut hinaus bereitzustellen.

## Wert

Ein String, der entweder ein leerer String sein kann (was anzeigt, dass keine ausführliche Beschreibung verfügbar ist) oder die URL einer Datei enthält, die eine ausführliche Beschreibung der Inhalte des Bildes bereitstellt.

Zum Beispiel, wenn das Bild ein [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) eines Flussdiagramms ist. Die `longDesc`-Eigenschaft könnte verwendet werden, um eine Erklärung des dargestellten Kontrollflusses ausschließlich in Textform bereitzustellen. Dies kann sowohl als Erklärung für Leser als auch als Ersatz für sehbehinderte Benutzer dienen.

## Anwendungshinweise

Diese Eigenschaft ist _veraltet_ und sollte nicht mehr verwendet werden. Statt `longDesc` zu verwenden, um einen Link zu einer detaillierten Beschreibung eines Bildes bereitzustellen, sollten Sie das Bild in einen Link mithilfe des {{HTMLElement("a")}}-Elements einbetten.

Betrachten Sie das folgende ältere HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Hier wird `longDesc` verwendet, um anzugeben, dass der Benutzer in der Lage sein sollte, eine detaillierte Beschreibung des Bildes `taco-tuesday.jpg` in der HTML-Datei `image-descriptions/taco-tuesday.html` abzurufen.

Dies kann leicht in modernes HTML konvertiert werden:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

Damit ist das Bild ein Link zur HTML-Datei, die das Bild ausführlicher beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
