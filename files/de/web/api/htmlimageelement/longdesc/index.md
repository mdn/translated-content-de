---
title: "HTMLImageElement: longDesc-Eigenschaft"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ Eigenschaft **`longDesc`** des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die URL einer Text- oder HTML-Datei an, die eine ausführliche Beschreibung des Bildes enthält. Dies kann verwendet werden, um optionale zusätzliche Details über die kurze Beschreibung im [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut hinaus bereitzustellen.

## Wert

Ein String, der entweder ein leerer String sein kann (was anzeigt, dass keine ausführliche Beschreibung verfügbar ist) oder die URL einer Datei, die eine ausführliche Beschreibung des Bildinhalts enthält.

Beispielsweise, wenn das Bild ein [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) eines Flussdiagramms ist. Die `longDesc`-Eigenschaft könnte verwendet werden, um eine Erklärung des dargestellten Kontrollflusses nur in Textform bereitzustellen. Dies kann von Lesern sowohl als Erklärung als auch als Ersatz für sehbehinderte Nutzer verwendet werden.

## Nutzungshinweise

Diese Eigenschaft ist _veraltet_ und sollte nicht mehr verwendet werden. Anstatt `longDesc` zu verwenden, um einen Link zu einer detaillierten Beschreibung eines Bildes bereitzustellen, sollte das Bild mit einem Link unter Verwendung des {{HTMLElement("a")}}-Elements umschlossen werden.

Betrachten Sie das folgende ältere HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Hier wird `longDesc` verwendet, um anzuzeigen, dass der Benutzer in der Lage sein sollte, eine detaillierte Beschreibung des Bildes `taco-tuesday.jpg` in der HTML-Datei `image-descriptions/taco-tuesday.html` abzurufen.

Dies kann leicht in modernes HTML konvertiert werden:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

Damit ist das Bild ein Link zu der HTML-Datei, die das Bild ausführlicher beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
