---
title: "ARIA: img-Rolle"
short-title: img
slug: Web/Accessibility/ARIA/Reference/Roles/img_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die ARIA-`img`-Rolle kann verwendet werden, um mehrere Elemente innerhalb von Seiteninhalten zu identifizieren, die als einzelnes Bild betrachtet werden sollten. Diese Elemente könnten Bilder, Codeausschnitte, Text, Emojis oder andere Inhalte sein, die kombiniert werden können, um Informationen visuell zu vermitteln.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" alt="" />
</div>
```

## Beschreibung

Jeder Satz von Inhalten, der als einzelnes Bild konsumiert werden soll (was Bilder, Videos, Audio, Codeausschnitte, Emojis oder andere Inhalte einschließen könnte), kann mit `role="img"` gekennzeichnet werden.

Sie sollten sich nicht auf den Alt-Text einzelner Bilder verlassen, um Kontext an unterstützende Technologien zu vermitteln; die meisten Screenreader werden das Element mit gesetztem `role="img"` als eine Art Blackbox betrachten und nicht auf die einzelnen Elemente darin zugreifen. Daher ist es wichtig, einen umfassenden, übergreifenden beschreibenden Alt-Text für das Bild bereitzustellen, entweder im umgebenden Text oder durch Verwendung eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs. Die `alt`-Attribute sollten für Suchmaschinen oder sehende Nutzer auf der Seite vorhanden sein, falls ein Bild fehlschlägt:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Falls Sie Ihrer Bilddarstellung auf der Seite eine sichtbare Beschriftung oder ein Label hinzufügen möchten, können Sie dies tun, indem Sie verwenden:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn der Text ein prägnantes Label ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung darstellt.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

Falls ein Bild rein präsentativ ist, ziehen Sie in Betracht, die [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)-Rolle zu verwenden.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder auf Ihrer Seite verwenden, ist es ratsam, `role="img"` auf dem äußeren {{SVGElement('svg')}}-Element zu setzen und ihm ein Label zu geben. Dies führt dazu, dass Screenreader es nur als einzelne Einheit betrachten und mit dem Label beschreiben, anstatt zu versuchen, alle untergeordneten Knoten vorzulesen:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Verwendung von role="img", um verdeutlichten oder implizierten Bedeutungen Ausdruck zu verleihen

In bestimmten Fällen können Benutzer von unterstützender Technologie die Bedeutung von Inhalten, die auf bestimmte Weise ausgedrückt werden, durch bestimmte Medien oder implizit auf bestimmte Weise, nicht erfassen. Dies ist im Fall von Bildern einfach zu beheben (Sie können das `alt`-Attribut verwenden), aber im Fall von gemischten oder anderen bestimmten Arten von Inhalten nicht so offensichtlich, wobei `role="img"` zum Einsatz kommen kann.

Beispielsweise kann die Bedeutung von Emojis im Text für einen sehenden Benutzer offensichtlich sein, aber jemand, der einen Screenreader verwendet, könnte verwirrt sein, weil die Emojis entweder keine Textrepräsentation haben oder der alternative Text verwirrend ist und nicht zum Zusammenhang passt, in dem er verwendet wird. Zum Beispiel, nehmen wir den folgenden Code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entitätsreferenzen für Emojis, die als "Katze" und "Gesicht mit Freudentränen" vorgelesen werden, was möglicherweise keinen Sinn ergibt — die implizierte Bedeutung ist möglicherweise eher "Diese Katze ist so niedlich", sodass wir das in ein `aria-label` zusammen mit `role="img"` aufnehmen.

Dies scheint in einigen Browser-/Screenreader-Kombinationen gut zu funktionieren, aber einige davon lesen das Label zweimal aus. Verwenden Sie dies mit Vorsicht und testen Sie es gründlich.

Ein weiteres Beispiel, bei dem dies geeignet sein könnte, ist die Verwendung von {{Glossary("ASCII", "ASCII")}}-Emoji-Kombinationen, wie das legendäre "Table flip":

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Wenn `aria-labelledby` verwendet würde, würde der Screenreader es vorlesen. In diesem Fall werden nur die Inhalte des `aria-label` den Screenreader-Nutzer*innen angesagt, während das Kauderwelsch der Zeichen ohne die Notwendigkeit von Nachfahren-ARIA, um Dinge zu verbergen, verbirgt, aber auch potenzielle Inhalte versteckt, die Teil des Bildes sein könnten.

### Alle Nachfahren sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer plattformunabhängigen Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `img` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrelemente eines `img`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `img`-Element, das eine Überschrift enthält.

```html
<div role="img"><h3>Title of my image</h3></div>
```

Da Nachfahren von `img` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

Aus der Perspektive der unterstützenden Technologie-Nutzer*innen existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen.:

```html
<div role="img">Title of my image</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Für das HTML-{{HTMLElement('img')}}-Element verwenden Sie das `alt`-Attribut. Für alle anderen Elemente mit der `img`-Rolle verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, ansonsten verwenden Sie `aria-label`.

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
- [ARIA: `presentation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
