---
title: "HTMLImageElement: longDesc-Eigenschaft"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ Eigenschaft **`longDesc`** der {{domxref("HTMLImageElement")}}-Schnittstelle spezifiziert die URL einer Text- oder HTML-Datei, die eine ausführliche Beschreibung des Bildes enthält. Diese kann verwendet werden, um zusätzliche Details über die kurze Beschreibung hinaus bereitzustellen, die im [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut gegeben wird.

## Wert

Ein String, der entweder ein leerer String sein kann (was darauf hinweist, dass keine ausführliche Beschreibung verfügbar ist) oder die URL einer Datei, die eine ausführliche Beschreibung des Bildinhalts enthält.

Zum Beispiel, wenn das Bild ein [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) eines Flussdiagramms ist. Die Eigenschaft `longDesc` könnte verwendet werden, um eine Erklärung des dargestellten Kontrollflusses nur mit Text bereitzustellen. Dies kann von Lesern sowohl als Erklärung verwendet werden, als auch als Ersatz für sehbehinderte Benutzer.

## Verwendungshinweise

Diese Eigenschaft ist _veraltet_ und sollte nicht mehr verwendet werden. Anstatt `longDesc` zu verwenden, um einen Link zu einer detaillierten Beschreibung eines Bildes bereitzustellen, sollten Sie das Bild mit einem {{HTMLElement("a")}}-Element in einen Link einbetten.

Betrachten Sie das folgende ältere HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Hier wird `longDesc` verwendet, um anzugeben, dass der Benutzer Zugriff auf eine detaillierte Beschreibung des Bildes `taco-tuesday.jpg` in der HTML-Datei `image-descriptions/taco-tuesday.html` haben sollte.

Dies kann leicht in modernes HTML umgewandelt werden:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

Damit wird das Bild zu einem Link zur HTML-Datei, die das Bild ausführlicher beschreibt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details)
