---
title: "HTMLImageElement: longDesc-Eigenschaft"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ Eigenschaft **`longDesc`** der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt die URL einer Text- oder HTML-Datei an, die eine ausführliche Beschreibung des Bildes enthält. Dies kann verwendet werden, um optional zusätzliche Details über die kurze Beschreibung hinaus bereitzustellen, die im [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut angegeben ist.

## Wert

Ein String, der entweder ein leerer String sein kann (was bedeutet, dass keine ausführliche Beschreibung verfügbar ist) oder die URL einer Datei, die eine ausführliche Beschreibung des Bildinhalts enthält.

Zum Beispiel, wenn das Bild ein [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) eines Flussdiagramms ist. Die `longDesc`-Eigenschaft könnte verwendet werden, um eine Erklärung des Kontrollflusses, der durch das Diagramm dargestellt wird, nur mithilfe von Text bereitzustellen. Dies kann von Lesern sowohl als Erklärung als auch als Ersatz für sehbehinderte Nutzer verwendet werden.

## Verwendungshinweise

Diese Eigenschaft ist _veraltet_ und sollte nicht mehr verwendet werden. Anstatt `longDesc` zu verwenden, um einen Link zu einer ausführlichen Beschreibung eines Bildes bereitzustellen, sollten Sie das Bild in einen Link innerhalb des {{HTMLElement("a")}}-Elements kapseln.

Betrachten Sie das folgende ältere HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Hier wird `longDesc` verwendet, um anzugeben, dass der Benutzer in der Lage sein sollte, eine ausführliche Beschreibung des Bildes `taco-tuesday.jpg` in der HTML-Datei `image-descriptions/taco-tuesday.html` zu erreichen.

Dies kann einfach in modernes HTML umgewandelt werden:

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

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
