---
title: "ARIA: img Rolle"
short-title: img
slug: Web/Accessibility/ARIA/Reference/Roles/img_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die ARIA `img` Rolle kann verwendet werden, um mehrere Elemente innerhalb des Seiteninhalts als ein einziges Bild zu identifizieren. Diese Elemente könnten Bilder, Code-Snippets, Text, Emojis oder andere Inhalte sein, die kombiniert werden können, um Informationen auf visuelle Weise zu vermitteln.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" />
</div>
```

## Beschreibung

Jeder Inhaltssatz, der als ein einziges Bild konsumiert werden soll (was Bilder, Videos, Audios, Code-Snippets, Emojis oder andere Inhalte umfassen könnte), kann mit `role="img"` identifiziert werden.

Sie sollten sich nicht auf den Alt-Text einzelner Bilder verlassen, um assistiven Technologien Kontext zu vermitteln; die meisten Bildschirmlesegeräte werden das Element mit `role="img"` als eine Art Black Box betrachten und nicht auf die individuellen Elemente darin zugreifen. Daher sollten Sie einen umfassenden, übergreifenden beschreibenden Alt-Text für das Bild bereitstellen, entweder im umgebenden Text oder durch die Verwendung eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs, mit `alt` Attributen für Suchmaschinen oder sehende Nutzer, die auf der Seite geschrieben stehen sollten, falls ein Bild nicht geladen werden kann:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Wenn Sie Ihrem Bild eine auf der Seite sichtbare Beschriftung oder ein Label hinzufügen möchten, können Sie dies tun mit:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn der Text ein prägnantes Label ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

Wenn ein Bild rein präsentativ ist, ziehen Sie in Betracht, die [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) Rolle zu verwenden.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder in Ihrer Seite verwenden, ist es eine gute Idee, `role="img"` auf das äußere {{SVGElement('svg')}} Element zu setzen und ihm ein Label zu geben. Dies führt dazu, dass Bildschirmlesegeräte es einfach als ein einzelnes Gebilde betrachten und es mithilfe des Labels beschreiben, anstatt alle Knoten im Inneren auszulesen:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Verwendung von role="img", um Bedeutung zu verleihen, die verdeckt oder impliziert ist

In bestimmten Fällen können Benutzer von assistiven Technologien die Bedeutung von Inhalten, die auf bestimmte Art ausgedrückt oder durch bestimmte Medien dargestellt werden, nicht erfassen. Dies lässt sich offensichtlich bei Bildern beheben (Sie können das `alt` Attribut verwenden), aber bei gemischten oder anderen bestimmten Arten von Inhalten ist dies nicht so offensichtlich, und `role="img"` kann angewendet werden.

Zum Beispiel, wenn Sie Emojis in Ihrem Text verwenden, könnte die Bedeutung für einen sehenden Nutzer offensichtlich sein, aber jemand, der ein Bildschirmlesegerät verwendet, könnte verwirrt sein, da Emojis möglicherweise gar keine Textdarstellung haben oder der alternative Text verwirrend ist und nicht zum Kontext passt. Zum Beispiel, betrachten Sie den folgenden Code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entity-Referenzen für Emojis, die als "Katze" und "Gesicht mit Freudentränen" vorgelesen werden, aber das macht nicht unbedingt Sinn — die implizierte Bedeutung könnte eher "Diese Katze ist so süß" sein, also fügen wir das in ein `aria-label` zusammen mit `role="img"` ein.

Dies scheint in einigen Kombinationen von Browsern/Bildschirmlesegeräten ganz gut zu funktionieren, aber einige von ihnen lesen das Label am Ende doppelt vor. Verwenden Sie dies mit Vorsicht und testen Sie gründlich.

Ein weiteres Beispiel, wo dies geeignet sein könnte, ist die Verwendung von {{Glossary("ASCII", "ASCII")}} Emoji-Kombinationen, wie das legendäre "Table Flip":

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Wenn `aria-labelledby` verwendet würde, würde das Bildschirmlesegerät es lesen. In diesem Fall wird nur der Inhalt des `aria-label` den Nutzern von Bildschirmlesegeräten mitgeteilt, wodurch das Kauderwelsch der Zeichen ohne die Notwendigkeit, nachkommende ARIA zu verbergen, versteckt wird, jedoch wird auch potenzieller Inhalt, der Teil des Bildes sein könnte, verborgen.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `img` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines `img` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie folgendes `img` Element, das eine Überschrift enthält.

```html
<div role="img"><h3>Title of my image</h3></div>
```

Da Nachkommen von `img` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

Aus der Perspektive des Nutzers von assistiver Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichwertig sind mit dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}}:

```html
<div role="img">Title of my image</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Für das HTML {{HTMLElement('img')}} Element verwenden Sie das `alt` Attribut. Für alle anderen Elemente mit der `img` Rolle verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

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

- Das {{HTMLElement('img')}} Element
- Das {{SVGElement('svg')}} Element
- Das {{HTMLElement('picture')}} Element
- Das {{HTMLElement('audio')}} Element
- Das {{HTMLElement('video')}} Element
- [ARIA: `presentation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
