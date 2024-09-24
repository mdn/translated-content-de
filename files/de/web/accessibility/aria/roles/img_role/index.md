---
title: "ARIA: img-Rolle"
slug: Web/Accessibility/ARIA/Roles/img_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die ARIA `img`-Rolle kann verwendet werden, um mehrere Elemente im Seiteninhalt zu kennzeichnen, die als einzelnes Bild betrachtet werden sollen. Diese Elemente könnten Bilder, Code-Snippets, Text, Emojis oder andere Inhalte sein, die kombiniert werden, um visuelle Informationen zu liefern.

```html
<div role="img" aria-label="Beschreibung des Gesamtbildes">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" />
</div>
```

## Beschreibung

Jeder Satz von Inhalten, der als einzelnes Bild betrachtet werden soll (was Bilder, Videos, Audios, Code-Snippets, Emojis oder andere Inhalte einschließen könnte), kann mit `role="img"` identifiziert werden.

Sie sollten sich nicht auf den Alt-Text einzelner Bilder verlassen, um Kontext an unterstützende Technologien zu vermitteln; die meisten Screenreader werden das Element mit `role="img"` wie eine Blackbox betrachten und nicht auf die einzelnen Elemente darin zugreifen. Daher sollten Sie einen umfassenden erläuternden Alt-Text für das Bild bereitstellen, entweder im umgebenden Text oder durch Verwendung eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs, mit `alt`-Attributen für Suchmaschinen oder sehende Nutzer, die auf der Seite erscheinen sollen, falls ein Bild nicht geladen wird:

```html
<div role="img" aria-label="Beschreibung des Gesamtbildes">
  <img src="graphic1.png" alt="alternativer Text" />
  <img src="graphic2.png" alt="falls die Bilder nicht geladen werden" />
</div>
```

Wenn Sie Ihrem Bild eine auf der Seite sichtbare Bildunterschrift oder ein Label hinzufügen möchten, können Sie dies tun, indem Sie:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden, wenn der Text ein kurzes Label ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verwenden, wenn der Text eine längere Beschreibung ist.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text, der die Gruppe von Bildern beschreibt.</p>
</div>
```

Wenn ein Bild rein dekorativ ist, sollten Sie die Verwendung der Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) in Betracht ziehen.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder auf Ihrer Seite verwenden, ist es sinnvoll, `role="img"` auf dem äußeren {{SVGElement('svg')}}-Element zu setzen und ihm ein Label zu geben. Dies führt dazu, dass Screenreader es als einzelne Einheit betrachten und es mithilfe des Labels beschreiben, anstatt alle untergeordneten Knoten vorzulesen:

```html
<svg role="img" aria-label="Beschreibung Ihres SVG-Bildes">
  <!-- Inhalt des SVG-Bildes -->
</svg>
```

### Verwendung von role="img" zur Vermittlung eines verborgenen oder implizierten Bedeutungsgehaltes

In bestimmten Fällen werden Nutzer assistiver Technologien nicht in der Lage sein, die Bedeutung von Inhalten zu erfassen, die auf bestimmte Weise ausgedrückt, durch bestimmte Medien vermittelt oder auf bestimmte Weise impliziert werden. Dies ist bei Bildern offensichtlich zu beheben (Sie können das `alt`-Attribut verwenden), aber bei gemischten oder anderen bestimmten Arten von Inhalten ist es nicht so offensichtlich, und `role="img"` kann ins Spiel kommen.

Zum Beispiel, wenn Sie Emojis in Ihrem Text verwenden, könnte die Bedeutung einem sehenden Nutzer offensichtlich sein, aber jemand, der einen Screenreader verwendet, könnte verwirrt sein, weil die Emojis möglicherweise gar keine Textdarstellung oder eine verwirrende alternative Textdarstellung haben, die nicht zum Kontext passt, in dem sie verwendet werden. Zum Beispiel könnte der folgende Code genommen werden:

```html
<div role="img" aria-label="Diese Katze ist so süß">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entitätsreferenzen für Emojis, die als „Katze“ und „Gesicht mit Freudentränen“ vorgelesen werden, aber das macht nicht unbedingt Sinn — die implizierte Bedeutung ist möglicherweise eher „Diese Katze ist so süß“, daher fügen wir das in ein `aria-label` zusammen mit `role="img"` ein.

Dies scheint bei einigen Browser/Screenreader-Kombinationen gut zu funktionieren, aber einige von ihnen lesen das Label doppelt vor. Nutzen Sie dies mit Vorsicht und testen Sie gründlich.

Ein weiteres Beispiel, bei dem dies geeignet sein könnte, ist die Verwendung von {{Glossary("ASCII")}}-Emojikombinationen, wie das legendäre „Tisch umdrehen“:

```html
<div role="img" aria-label="Tisch umdrehen">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Wenn `aria-labelledby` verwendet würde, würde der Screenreader es vorlesen. In diesem Fall werden den Screenreader-Nutzern nur die Inhalte des `aria-label`-Attributs mitgeteilt, wodurch das Kauderwelsch der Zeichen ohne die Notwendigkeit, nachgeordnete ARIA zu verbergen, verborgen wird, aber auch potenzieller Inhalt, der Teil des Bildes sein könnte.

### Alle Nachkommen sind dekorativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `img` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle untergeordneten Elemente eines `img`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `img`-Element, das eine Überschrift enthält.

```html
<div role="img"><h3>Titel meines Bildes</h3></div>
```

Da Nachkommen von `img` darstellend sind, ist der folgende Code gleichwertig:

```html
<div role="img"><h3 role="presentation">Titel meines Bildes</h3></div>
```

Aus der Perspektive eines Nutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichwertig mit dem folgenden sind, was den [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) betrifft:

```html
<div role="img">Titel meines Bildes</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Für das HTML-{{HTMLElement('img')}}-Element verwenden Sie das `alt`-Attribut. Für alle anderen Elemente mit der `img`-Rolle verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, ansonsten verwenden Sie `aria-label`.

## Beispiele

```html
<span role="img" aria-label="Bewertung: 4 von 5 Sternen">
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
