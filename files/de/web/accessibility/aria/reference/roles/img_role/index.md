---
title: "ARIA: img-Rolle"
short-title: img
slug: Web/Accessibility/ARIA/Reference/Roles/img_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Die ARIA-Rolle `img` kann verwendet werden, um mehrere Elemente innerhalb eines Seiteninhalts als ein einziges Bild zu kennzeichnen. Bei diesen Elementen kann es sich um Bilder, Codeausschnitte, Text, Emojis oder andere Inhalte handeln, die zusammen Informationen visuell vermitteln.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" alt="" />
</div>
```

## Beschreibung

Jede Gruppe von Inhalten, die als ein einziges Bild wahrgenommen werden soll – darunter auch Bilder, Videos, Audio, Codeausschnitte, Emojis oder andere Inhalte –, kann mit `role="img"` gekennzeichnet werden.

Verlassen Sie sich nicht darauf, dass der Alternativtext einzelner Bilder den Kontext für Hilfstechnologien vermittelt. Die meisten Screenreader behandeln ein Element mit `role="img"` wie eine Blackbox und greifen nicht auf seine einzelnen untergeordneten Elemente zu. Stellen Sie daher eine umfassende Beschreibung für das gesamte Bild bereit: entweder im umgebenden Text oder mit einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut. Verwenden Sie zusätzlich `alt`-Attribute für Suchmaschinen oder damit bei einem Ladefehler des Bildes Text für sehende Nutzer auf der Seite erscheint:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Wenn Sie Ihrem Bild eine auf der Seite sichtbare Bildunterschrift oder Beschriftung hinzufügen möchten, können Sie Folgendes verwenden:

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn der Text eine kurze Beschriftung ist.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.

Zum Beispiel:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

Wenn ein Bild rein dekorativ ist, sollten Sie die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) verwenden.

### SVG und role="img"

Wenn Sie eingebettete SVG-Bilder auf Ihrer Seite verwenden, empfiehlt es sich, `role="img"` auf dem äußeren {{SVGElement('svg')}}-Element zu setzen und es mit einer Beschriftung zu versehen. Dadurch behandeln Screenreader es als eine einzige Einheit und geben die Beschriftung aus, statt zu versuchen, alle untergeordneten Knoten vorzulesen:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Mit role="img" verdeckte oder implizite Bedeutungen vermitteln

In bestimmten Fällen können Nutzer von Hilfstechnologien die Bedeutung von Inhalten nicht erfassen, weil diese auf eine bestimmte Weise oder über bestimmte Medien ausgedrückt oder nur angedeutet wird. Bei Bildern lässt sich das mit dem `alt`-Attribut lösen. Bei gemischten Inhalten oder bestimmten anderen Inhaltsarten ist die Lösung weniger offensichtlich; hier kann `role="img"` helfen.

Wenn Sie beispielsweise Emojis in Ihrem Text verwenden, ist deren Bedeutung für sehende Nutzer möglicherweise offensichtlich. Eine Person, die einen Screenreader verwendet, könnte dagegen verwirrt sein: Für die Emojis gibt es möglicherweise gar keine Textdarstellung, oder ihr Alternativtext ist missverständlich und passt nicht zum Kontext. Betrachten Sie beispielsweise den folgenden Code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 und 😂, sind Entity-Referenzen für Emojis, die als „Katze“ und „Gesicht mit Freudentränen“ vorgelesen werden. Das ergibt jedoch nicht unbedingt Sinn – die gemeinte Bedeutung könnte eher „Diese Katze ist so süß“ sein. Deshalb geben wir diese Bedeutung zusammen mit `role="img"` in einem `aria-label` an.

Das scheint bei einigen Kombinationen aus Browser und Screenreader gut zu funktionieren; bei anderen wird die Beschriftung jedoch zweimal vorgelesen. Verwenden Sie diese Methode mit Vorsicht und testen Sie sie gründlich.

Ein weiteres Beispiel, für das sich dies eignen könnte, sind Emoji-Kombinationen aus {{Glossary("ASCII", "ASCII")}}-Zeichen, etwa das legendäre „Table flip“:

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Wenn `aria-labelledby` verwendet würde, würde der Screenreader den damit verknüpften Text vorlesen. In diesem Fall wird Screenreader-Nutzern nur der Inhalt von `aria-label` ausgegeben. So werden die schwer verständlichen Zeichen nicht vorgelesen, ohne dass untergeordnete Elemente mit ARIA verborgen werden müssen. Allerdings werden dadurch auch mögliche Inhalte verborgen, die Teil des Bildes sein könnten.

### Alle untergeordneten Elemente sind präsentational

Manche Komponenten einer Benutzeroberfläche können in einer Accessibility-API der Plattform nur Text enthalten. Accessibility-APIs können semantische Elemente innerhalb eines `img` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen untergeordneten Elementen eines Elements mit der Rolle `img` automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da die Rolle `img` keine semantischen untergeordneten Elemente unterstützt.

Betrachten Sie beispielsweise das folgende Element mit der Rolle `img`, das eine Überschrift enthält:

```html
<div role="img"><h3>Title of my image</h3></div>
```

Da untergeordnete Elemente von `img` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

Aus Sicht von Nutzern von Hilfstechnologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte im {{Glossary("Accessibility_tree", "Accessibility-Baum")}} dem Folgenden entsprechen:

```html
<div role="img">Title of my image</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- `aria-label` oder `aria-labelledby`
  - : Ein zugänglicher Name ist erforderlich. Verwenden Sie für das HTML-Element {{HTMLElement('img')}} das `alt`-Attribut. Verwenden Sie für alle anderen Elemente mit der Rolle `img` `aria-labelledby`, wenn eine sichtbare Beschriftung vorhanden ist, andernfalls `aria-label`.

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

- Das Element {{HTMLElement('img')}}
- Das Element {{SVGElement('svg')}}
- Das Element {{HTMLElement('picture')}}
- Das Element {{HTMLElement('audio')}}
- Das Element {{HTMLElement('video')}}
- [ARIA: Rolle `presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA: Rolle `graphics-document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
- [ARIA: Rolle `graphics-symbol`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role)
