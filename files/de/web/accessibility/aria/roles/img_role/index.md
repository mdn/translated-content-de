---
title: "ARIA: img-Rolle"
slug: Web/Accessibility/ARIA/Roles/img_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die ARIA `img`-Rolle kann verwendet werden, um mehrere Elemente innerhalb von Seiteninhalten zu identifizieren, die als einzelnes Bild betrachtet werden sollten. Diese Elemente könnten Bilder, Code-Snippets, Text, Emojis oder andere Inhalte sein, die kombiniert werden können, um Informationen visuell zu vermitteln.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" />
</div>
```

## Beschreibung

Jeder Inhaltssatz, der als einzelnes Bild konsumiert werden soll (was Bilder, Videos, Audio, Code-Snippets, Emojis oder andere Inhalte umfassen könnte), kann mit `role="img"` identifiziert werden.

Man sollte sich nicht auf den Alt-Text einzelner Bilder verlassen, um Assistenztechnologien Kontext zu vermitteln; die meisten Screenreader werden das Element, auf dem `role="img"` gesetzt wurde, als eine Art Blackbox betrachten und nicht auf die einzelnen darin enthaltenen Elemente zugreifen. Daher sollte man eine umfassende allgemeine beschreibende Alt-Text für das Bild entweder im umgebenden Text oder durch das Verwenden eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs bereitstellen, mit `alt`-Attributen für Suchmaschinen oder sehende Benutzer, die auf der Seite geschrieben werden sollten, falls ein Bild ausfällt:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Möchten Sie Ihrem Bild eine Bildunterschrift oder ein Label hinzufügen, das auf der Seite sichtbar ist, können Sie dies tun, indem Sie:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden, wenn der Text ein prägnantes Label ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verwenden, wenn der Text eine längere Beschreibung ist.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

Wenn ein Bild rein dekorativ ist, sollten Sie in Betracht ziehen, die [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role)-Rolle zu verwenden.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder auf Ihrer Seite verwenden, ist es sinnvoll, `role="img"` auf dem äußeren {{SVGElement('svg')}}-Element zu setzen und ihm ein Label zu geben. Dies wird dazu führen, dass Screenreader es einfach als eine einzelne Einheit betrachten und mit dem Label beschreiben, statt alle Kindknoten vorzulesen:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Verwendung von role="img", um eine Bedeutung zu verleihen, die verdeckt oder angedeutet ist

In bestimmten Fällen werden Benutzer von Assistenztechnologien möglicherweise die Bedeutung von Inhalten nicht verstehen, die auf bestimmte Weise ausgedrückt, durch bestimmte Medien vermittelt oder auf bestimmte Weise angedeutet werden. Dies ist leicht zu beheben bei Bildern (man kann das `alt`-Attribut verwenden), aber im Fall von gemischten oder anderen bestimmten Inhaltstypen ist dies nicht so offensichtlich, und `role="img"` kann hier zum Einsatz kommen.

Zum Beispiel, wenn Sie Emojis in Ihrem Text verwenden, könnte die Bedeutung für einen sehenden Benutzer offensichtlich sein, aber jemand, der einen Screenreader verwendet, könnte verwirrt werden, weil die Emojis entweder keine Textdarstellung haben oder der alternative Text verwirrend ist und nicht zum Kontext passt, in dem er verwendet wird. Nehmen Sie zum Beispiel den folgenden Code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entity-Referenzen für Emojis, die als "Katze" und "Gesicht mit Freudentränen" vorgelesen werden, aber dies ergibt nicht unbedingt Sinn — die implizite Bedeutung könnte eher "Diese Katze ist so süß" sein, also fügen wir das in ein `aria-label` zusammen mit `role="img"` ein.

Dies scheint in einigen Browser-/Screenreader-Kombinationen gut zu funktionieren, aber einige von ihnen lesen das Label doppelt vor. Verwenden Sie es mit Vorsicht und testen Sie es gründlich.

Ein weiteres Beispiel, bei dem dies geeignet sein könnte, ist die Verwendung von {{Glossary("ASCII", "ASCII")}}-Emoji-Kombinationen, wie das legendäre "Table Flip":

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Würde `aria-labelledby` verwendet, würde der Screenreader es vorlesen. In diesem Fall werden nur die Inhalte des `aria-label` den Benutzern von Screenreadern vorgelesen, wodurch die wirren Zeichen ohne die Notwendigkeit, nachfolgende ARIA-Elemente zu verbergen, verborgen werden, aber auch potenzieller Inhalt, der Teil des Bildes sein könnte.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `img` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) automatisch auf alle Nachfahrenelemente eines `img`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `img`-Element, das eine Überschrift enthält.

```html
<div role="img"><h3>Title of my image</h3></div>
```

Weil Nachfahren von `img` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

Aus der Perspektive des Benutzers von Assistenztechnologie existiert die Überschrift nicht, da die vorherigen Code-Snippets im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig sind:

```html
<div role="img">Title of my image</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Für das HTML-{{HTMLElement('img')}}-Element verwenden Sie das `alt`-Attribut. Für alle anderen Elemente mit der `img`-Rolle verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

## Beispiele

```html
<span role="img" aria-label="Rating: 4 out of 5 stars">
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>☆</span>
</span>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('img')}}-Element
- Das {{SVGElement('svg')}}-Element
- Das {{HTMLElement('picture')}}-Element
- Das {{HTMLElement('audio')}}-Element
- Das {{HTMLElement('video')}}-Element
- [ARIA: `presentation` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
