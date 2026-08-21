---
title: "HTMLImageElement: longDesc-Eigenschaft"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die _veraltete_ **`longDesc`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die URL einer Text- oder HTML-Datei an, die eine ausführliche Beschreibung des Bildes enthält. Dies kann verwendet werden, um optionale zusätzliche Details über die kurze Beschreibung hinaus bereitzustellen, die im [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut angegeben ist. Sie spiegelt das [`longdesc`](/de/docs/Web/HTML/Reference/Elements/img#longdesc)-Inhaltsattribut des `<img>`-Elements wider.

Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden. Sie können das Bild auch in einem Link mit dem {{HTMLElement("a")}}-Element einbetten.

## Wert

Ein String, der entweder eine leere Zeichenkette (was anzeigt, dass keine ausführliche Beschreibung verfügbar ist) oder die URL einer Datei enthält, die eine ausführliche Beschreibung des Bildinhalts enthält.

## Beispiele

Betrachten Sie das folgende ältere HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Hier wird `longDesc` verwendet, um anzuzeigen, dass der Benutzer in der Lage sein sollte, auf eine detaillierte Beschreibung des Bildes `taco-tuesday.jpg` in der HTML-Datei `image-descriptions/taco-tuesday.html` zuzugreifen.

Dies sollte in das folgende HTML umgewandelt werden:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

Damit wird das Bild zu einem Link zur HTML-Datei, die das Bild ausführlicher beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
