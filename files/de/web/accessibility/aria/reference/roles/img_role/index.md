---
title: "ARIA: img-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/img_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die ARIA-`img`-Rolle kann verwendet werden, um mehrere Elemente im Seiteninhalt zu identifizieren, die als ein einzelnes Bild betrachtet werden sollten. Diese Elemente können Bilder, Codeausschnitte, Text, Emojis oder andere Inhalte sein, die kombiniert werden können, um Informationen visuell darzustellen.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" />
</div>
```

## Beschreibung

Jeder Satz von Inhalten, der als ein einzelnes Bild konsumiert werden sollte (der Bilder, Videos, Audio, Codeausschnitte, Emojis oder andere Inhalte umfassen könnte), kann durch `role="img"` identifiziert werden.

Sie sollten sich nicht auf den Alternativtext einzelner Bilder verlassen, um assistierenden Technologien den Kontext zu vermitteln; die meisten Screenreader werden das Element mit `role="img"` als eine Art Black Box betrachten und die darin enthaltenen einzelnen Elemente nicht beachten. Daher sollte ein umfassender beschreibender Alternativtext für das Bild bereitgestellt werden, entweder im umgebenden Text oder durch Verwendung eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs, wobei `alt`-Attribute für Suchmaschinen oder sehende Benutzer auf der Seite geschrieben werden sollten, falls ein Bild ausfällt:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Wenn Sie Ihrer Abbildung eine Bildunterschrift oder ein Etikett hinzufügen möchten, das auf der Seite sichtbar ist, können Sie dies tun mit:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn der Text ein prägnantes Etikett ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

Wenn ein Bild rein präsentational ist, sollten Sie die Verwendung der [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)-Rolle in Betracht ziehen.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder auf Ihrer Seite verwenden, ist es ratsam, `role="img"` auf das äußere {{SVGElement('svg')}}-Element zu setzen und ihm ein Etikett zu geben. Dies führt dazu, dass Screenreader es als einzelne Einheit betrachten und es mit dem Etikett beschreiben, anstatt zu versuchen, alle Knoten der Kinder zu lesen:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Verwenden von role="img", um Bedeutung zu vermitteln, die verdeckt oder impliziert ist

In bestimmten Fällen können Nutzer assistiver Technologien die Bedeutung von Inhalten, die auf bestimmte Weise ausgedrückt werden, über bestimmte Medien oder auf bestimmte Weise impliziert sind, nicht erkennen. Dies ist im Falle von Bildern leicht zu beheben (Sie können das `alt`-Attribut verwenden), aber im Falle gemischter oder anderer bestimmter Inhalte ist es nicht so offensichtlich, und `role="img"` kann zum Einsatz kommen.

Zum Beispiel, wenn Sie Emojis in Ihrem Text verwenden, könnte die Bedeutung für einen sehenden Benutzer offensichtlich sein, aber jemand, der einen Screenreader verwendet, könnte verwirrt sein, da die Emojis entweder keine Textdarstellung haben oder der alternative Text verwirrend ist und nicht mit dem Kontext übereinstimmt, in dem er verwendet wird. Zum Beispiel, nehmen Sie den folgenden Code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entitätsreferenzen für Emojis, die als "Katze" und "Gesicht mit Freudentränen" vorgelesen werden, aber das muss nicht unbedingt sinnvoll sein — die implizierte Bedeutung ist möglicherweise eher "Diese Katze ist so süß", also schließen wir das in ein `aria-label` zusammen mit `role="img"` ein.

Dies scheint in einigen Browser-/Screenreader-Kombinationen gut zu funktionieren, aber einige von ihnen lesen das Label letztlich zweimal vor. Verwenden Sie dies mit Vorsicht und testen Sie es gründlich.

Ein weiteres Beispiel, bei dem dies geeignet sein könnte, ist die Verwendung von {{Glossary("ASCII", "ASCII")}}-Emoji-Kombinationen, wie das legendäre "Tischflippen":

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Wenn `aria-labelledby` verwendet würde, würde der Screenreader es lesen. In diesem Fall wird nur der Inhalt des `aria-labels` den Nutzern von Screenreader vorgelesen, wodurch das Kauderwelsch der Zeichen verborgen wird, ohne dass nachkommende ARIA-Elemente verborgen werden müssen, aber auch potenzieller Inhalt ausgeblendet wird, der Teil des Bildes sein könnte.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente in einem `img` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrnelemente eines `img`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `img`-Element, das eine Überschrift enthält.

```html
<div role="img"><h3>Title of my image</h3></div>
```

Da die Nachkommen von `img` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

Aus der Perspektive eines assistiven Technologiebenutzers existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Accessibility-Baum")}} gleichwertig sind:

```html
<div role="img">Title of my image</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Für das HTML-{{HTMLElement('img')}}-Element verwenden Sie das `alt`-Attribut. Für alle anderen Elemente mit der `img`-Rolle verwenden Sie `aria-labelledby`, wenn ein sichtbares Etikett vorhanden ist, andernfalls verwenden Sie `aria-label`.

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
