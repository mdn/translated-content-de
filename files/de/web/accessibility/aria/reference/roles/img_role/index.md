---
title: "ARIA: img Rolle"
short-title: img
slug: Web/Accessibility/ARIA/Reference/Roles/img_role
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

Die ARIA `img` Rolle kann verwendet werden, um mehrere Elemente innerhalb des Seiteninhalts zu identifizieren, die als ein einziges Bild betrachtet werden sollen. Diese Elemente könnten Bilder, Codeausschnitte, Text, Emojis oder anderer Inhalt sein, der kombiniert werden kann, um Informationen visuell zu vermitteln.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" alt="" />
</div>
```

## Beschreibung

Jeder Inhaltssatz, der als ein einzelnes Bild betrachtet werden soll (der Bilder, Videos, Audio, Codeausschnitte, Emojis oder anderen Inhalt enthalten könnte), kann unter Verwendung von `role="img"` identifiziert werden.

Sie sollten sich nicht auf den Alt-Text einzelner Bilder verlassen, um Kontext für unterstützende Technologien zu vermitteln; die meisten Screenreader betrachten das Element, auf dem `role="img"` gesetzt ist, als eine Art "Blackbox" und greifen nicht auf die einzelnen Elemente darin zu. Daher sollten Sie einen umfassenden, allgemein beschreibenden Alt-Text für das Bild bereitstellen, entweder im umgebenden Text oder durch Verwendung eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs, mit `alt` Attributen für Suchmaschinen oder sehende Benutzer, die auf der Seite angezeigt werden sollen, falls ein Bild fehlschlägt:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Wenn Sie Ihrem Bild eine Bildunterschrift oder eine Bezeichnung hinzufügen möchten, die auf der Seite sichtbar ist, können Sie dies tun, indem Sie verwenden:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn der Text eine prägnante Bezeichnung ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

Wenn ein Bild rein präsentational ist, sollten Sie in Betracht ziehen, die [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) Rolle zu verwenden.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder auf Ihrer Seite verwenden, ist es eine gute Idee, `role="img"` auf das äußere {{SVGElement('svg')}} Element zu setzen und ihm eine Bezeichnung zu geben. Dadurch betrachten Screenreader es einfach als ein einziges Objekt und beschreiben es unter Verwendung der Bezeichnung, anstatt zu versuchen, alle untergeordneten Knoten zu lesen:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Verwendung der role="img", um Bedeutung zu vermitteln, die verdeckt oder impliziert ist

In bestimmten Fällen können Benutzer assistiver Technologien die Bedeutung von Inhalten, die auf bestimmten Wegen ausgedrückt werden, durch bestimmte Medien oder auf bestimmte Weise impliziert sind, nicht verstehen. Dies lässt sich im Fall von Bildern offensichtlich beheben (Sie können das `alt` Attribut verwenden), aber im Fall von gemischtem oder anderem bestimmten Inhalt ist es nicht so offensichtlich, und `role="img"` kann ins Spiel kommen.

Zum Beispiel, wenn Sie Emojis in Ihrem Text verwenden, könnte die Bedeutung für einen sehenden Benutzer offensichtlich sein, aber jemand, der einen Screenreader verwendet, könnte verwirrt sein, da die Emojis entweder keine Textrepräsentation haben oder der alternative Text verwirrend sein könnte und nicht zum Kontext passt, in dem er verwendet wird. Zum Beispiel, betrachten Sie den folgenden Code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entitätsverweise für Emojis, die als "Katze" und "Gesicht mit Freudentränen" gelesen werden, aber das ergibt nicht notwendigerweise Sinn — die implizierte Bedeutung ist möglicherweise eher "Diese Katze ist so süß", also fügen wir das in einem `aria-label` zusammen mit `role="img"` hinzu.

Dies scheint über einige Browser/Screenreader-Kombinationen hinweg gut zu funktionieren, aber einige von ihnen lesen die Bezeichnung zweimal vor. Verwenden Sie dies mit Vorsicht und testen Sie es gründlich.

Ein weiteres Beispiel, bei dem dies geeignet sein könnte, ist die Verwendung von {{Glossary("ASCII", "ASCII")}} Emojis, wie der legendäre "Tischumwurf":

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Wenn `aria-labelledby` verwendet würde, würde der Screenreader es lesen. In diesem Fall wird nur der Inhalt des `aria-label` den Screenreader-Benutzern angesagt, wodurch das Kauderwelsch der Zeichen ohne die Notwendigkeit von nachfolgendem ARIA, um Dinge zu verstecken, verborgen wird, aber auch potenzieller Inhalt versteckt wird, der Teil des Bildes sein könnte.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `img` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines `img` Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `img` Element, das eine Überschrift enthält.

```html
<div role="img"><h3>Title of my image</h3></div>
```

Da Nachfahren von `img` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

Aus der Sicht des Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "accessibility tree")}} gleichwertig sind:

```html
<div role="img">Title of my image</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Für das HTML {{HTMLElement('img')}} Element verwenden Sie das `alt` Attribut. Für alle anderen Elemente mit der `img` Rolle verwenden Sie `aria-labelledby`, wenn eine sichtbare Bezeichnung vorhanden ist, andernfalls verwenden Sie `aria-label`.

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
