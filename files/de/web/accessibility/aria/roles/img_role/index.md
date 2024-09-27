---
title: "ARIA: img Rolle"
slug: Web/Accessibility/ARIA/Roles/img_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die ARIA-`img`-Rolle kann verwendet werden, um mehrere Elemente im Seiteninhalt zu identifizieren, die als ein einziges Bild betrachtet werden sollen. Diese Elemente können Bilder, Code-Snippets, Text, Emojis oder andere Inhalte sein, die kombiniert werden können, um Informationen visuell darzustellen.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" />
</div>
```

## Beschreibung

Jeder Inhaltsblock, der als einzelnes Bild betrachtet werden sollte (der Bilder, Video, Audio, Code-Snippets, Emojis oder andere Inhalte umfassen kann), kann mit `role="img"` gekennzeichnet werden.

Sie sollten nicht auf den `alt`-Text einzelner Bilder zählen, um Kontext für unterstützende Technologien bereitzustellen; die meisten Screenreader werden das Element, auf das `role="img"` gesetzt ist, wie eine Black Box behandeln und nicht auf die darin enthaltenen Elemente zugreifen. Daher sollten Sie einen umfassenden Gesamt-`alt`-Text für das Bild bereitstellen, entweder im umgebenden Text oder durch das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wobei `alt`-Attribute für Suchmaschinen oder sehende Benutzer geschrieben werden sollten, falls ein Bild ausfällt:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Wenn Sie Ihrem Bild eine Bildunterschrift oder ein Label hinzufügen möchten, das auf der Seite sichtbar ist, können Sie Folgendes verwenden:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn der Text ein prägnantes Label ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

Wenn ein Bild rein dekorativ ist, sollten Sie die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) in Betracht ziehen.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder auf Ihrer Seite verwenden, ist es eine gute Idee, `role="img"` auf das äußere {{SVGElement('svg')}}-Element zu setzen und ihm ein Label zu geben. Dadurch werden Screenreader es als ein einziges Objekt betrachten und es mit dem Label beschreiben, anstatt zu versuchen, alle Knoten zu lesen:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Verwendung von role="img" zur Vermittlung von Bedeutung, die verschleiert oder angedeutet ist

In bestimmten Fällen können Benutzer unterstützender Technologien die Bedeutung von Inhalten, die auf bestimmte Weise ausgedrückt werden oder durch bestimmte Medien oder implizit sind, möglicherweise nicht erkennen. Dies ist im Fall von Bildern offensichtlich zu beheben (Sie können das `alt`-Attribut verwenden), aber im Fall von gemischten oder anderen bestimmten Inhaltstypen ist es nicht so offensichtlich, und `role="img"` kann hilfreich sein.

Zum Beispiel, wenn Sie Emojis in Ihrem Text verwenden, könnte die Bedeutung einem sehenden Benutzer offensichtlich sein, aber jemand, der einen Screenreader verwendet, könnte verwirrt sein, weil die Emojis entweder keine Textdarstellung haben oder der alternative Text verwirrend ist und nicht mit dem Kontext übereinstimmt, in dem er verwendet wird. Ein Beispiel:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entity-Referenzen für Emojis, die als "Katze" und "Gesicht mit Freudentränen" vorgelesen werden, aber das ergibt nicht unbedingt einen Sinn — die angedeutete Bedeutung ist möglicherweise eher wie "Diese Katze ist so niedlich", also fügen wir das in einem `aria-label` zusammen mit `role="img"` ein.

Dies scheint in einigen Browser-/Screenreader-Kombinationen gut zu funktionieren, aber einige von ihnen lesen das Label zweimal aus. Verwenden Sie es mit Vorsicht und testen Sie gründlich.

Ein weiteres Beispiel, wo dies geeignet sein könnte, ist bei der Verwendung von [ASCII](/de/docs/Glossary/ASCII)-Emoji-Kombinationen, wie dem legendären "Tischumdrehen":

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Wenn `aria-labelledby` verwendet würde, würde der Screenreader es lesen. In diesem Fall wird nur der Inhalt des `aria-label` den Screenreader-Benutzern bekannt gegeben, wodurch das Kauderwelsch der Zeichen verborgen wird, ohne dass descendant ARIA benötigt wird, um Dinge zu verstecken, aber auch potenziell Inhalte verbergen, die Teil des Bildes sein könnten.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die in einer Plattform-Zugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `img` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `img`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `img`-Element, das eine Überschrift enthält.

```html
<div role="img"><h3>Title of my image</h3></div>
```

Da Nachkommen von `img` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

Aus der Perspektive des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) gleichwertig sind:

```html
<div role="img">Title of my image</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Für das HTML-{{HTMLElement('img')}}-Element verwenden Sie das `alt`-Attribut. Für alle anderen Elemente mit der `img`-Rolle verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls `aria-label`.

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
