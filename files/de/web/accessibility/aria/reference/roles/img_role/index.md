---
title: "ARIA: img-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/img_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die ARIA-`img`-Rolle kann verwendet werden, um mehrere Elemente innerhalb des Seiteninhalts zu identifizieren, die als ein einziges Bild betrachtet werden sollten. Diese Elemente könnten Bilder, Code-Snippets, Text, Emojis oder andere Inhalte sein, die kombiniert werden können, um Informationen visuell zu vermitteln.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" />
</div>
```

## Beschreibung

Jeder Inhaltssatz, der als ein einziges Bild konsumiert werden sollte (dies könnte Bilder, Videos, Audio, Code-Snippets, Emojis oder andere Inhalte einschließen), kann durch `role="img"` identifiziert werden.

Sie sollten sich nicht auf den Alternativtext einzelner Bilder verlassen, um assistiven Technologien Kontext zu vermitteln; die meisten Screenreader werden das Element mit `role="img"` als eine Art Blackbox betrachten und nicht auf die darin enthaltenen individuellen Elemente zugreifen. Daher sollten Sie einen umfassenden, allgemeinen beschreibenden Alternativtext für das Bild bereitstellen, entweder im umgebenden Text oder mithilfe eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs, wobei `alt`-Attribute für Suchmaschinen oder sehende Nutzer verwendet werden, die auf der Seite geschrieben werden sollten, falls ein Bild nicht angezeigt wird:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Wenn Sie Ihrem Bild eine Beschriftung oder ein Label hinzufügen möchten, das auf der Seite sichtbar ist, können Sie dies mit den folgenden Attributen tun:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wenn der Text ein knappes Label ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) wenn der Text eine längere Beschreibung ist.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

Wenn ein Bild rein präsentativ ist, sollten Sie die [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)-Rolle in Betracht ziehen.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder in Ihrer Seite verwenden, ist es eine gute Idee, `role="img"` auf dem äußeren {{SVGElement('svg')}}-Element zu setzen und ihm ein Label zu geben. Dies führt dazu, dass Screenreader es nur als eine einzelne Einheit betrachten und es mit dem Label beschreiben, anstatt zu versuchen, alle Kindknoten auszulesen:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Verwendung von role="img" zum Vermitteln von Bedeutungen, die verschleiert oder impliziert sind

In bestimmten Fällen können Benutzer assistiver Technologien die Bedeutung von Inhalten, die auf bestimmte Weise ausgedrückt, durch bestimmte Medien vermittelt oder in bestimmter Weise impliziert werden, nicht erkennen. Dies lässt sich im Falle von Bildern offensichtlich leicht beheben (Sie können das `alt`-Attribut verwenden), doch im Falle von gemischten oder anderen bestimmten Arten von Inhalten ist dies nicht so offensichtlich, und `role="img"` kann zum Einsatz kommen.

Zum Beispiel, wenn Sie Emojis in Ihrem Text verwenden, mag die Bedeutung für einen sehenden Benutzer offensichtlich sein, aber jemand, der einen Screenreader verwendet, könnte verwirrt sein, da die Emojis entweder gar keine Textdarstellung haben oder der Alternativtext verwirrend sein könnte und nicht dem Kontext entspricht, in dem sie verwendet werden. Nehmen wir zum Beispiel den folgenden Code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entitätsreferenzen für Emojis, die als "Katze" und "Gesicht mit Freudentränen" vorgelesen werden, was nicht unbedingt Sinn ergibt — die implizierte Bedeutung ist wahrscheinlich eher "Diese Katze ist so süß", daher fügen wir dies in ein `aria-label` zusammen mit `role="img"` ein.

Dies scheint in einigen Browser/Screenreader-Kombinationen gut zu funktionieren, aber einige von ihnen lesen das Label am Ende doppelt. Verwenden Sie dies mit Vorsicht und testen Sie es gründlich.

Ein weiteres Beispiel, bei dem dies geeignet sein könnte, ist die Verwendung von {{Glossary("ASCII", "ASCII")}}-Emoji-Kombinationen, wie das legendäre "Table flip":

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Wenn `aria-labelledby` verwendet würde, würde der Screenreader es vorlesen. In diesem Fall wird den Nutzern von Screenreadern nur der Inhalt des `aria-label` mitgeteilt, wodurch das Geschreibsel der Zeichen versteckt wird, ohne dass nachfolgende ARIA erforderlich ist, um Dinge zu verbergen, aber auch potenzielle Inhalte, die Teil des Bildes sein könnten, versteckt werden.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei Darstellung in einer Plattform-Zugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `img` enthalten sind. Um mit dieser Einschränkung umzugehen, verwenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Unterelemente eines `img`-Elements, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `img`-Element, das eine Überschrift enthält.

```html
<div role="img"><h3>Title of my image</h3></div>
```

Da Nachkommen von `img` präsentativ sind, entspricht der folgende Code dem:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

Aus der Perspektive von Benutzern assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codeschnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="img">Title of my image</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Für das HTML {{HTMLElement('img')}}-Element verwenden Sie das `alt`-Attribut. Für alle anderen Elemente mit der `img`-Rolle verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`.

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
- [ARIA: `presentation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
