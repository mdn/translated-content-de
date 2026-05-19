---
title: "`dynamic-range-limit` CSS property"
short-title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: 468c261821b7443db6fdb748f733f21186597501
---

Die **`dynamic-range-limit`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die maximale Luminanz für Inhalte mit hohem Dynamikumfang (HDR) fest.

## Syntax

```css
/* Keyword values */
dynamic-range-limit: standard;
dynamic-range-limit: no-limit;
dynamic-range-limit: constrained;

/* dynamic-range-limit-mix() function */
dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);

/* Global values */
dynamic-range-limit: inherit;
dynamic-range-limit: initial;
dynamic-range-limit: revert;
dynamic-range-limit: revert-layer;
dynamic-range-limit: unset;
```

### Werte

- `standard`
  - : Spezifiziert die maximale Luminanz als Referenzweiß für High Dynamic Range (HDR), welches der CSS-Farbe `white` entspricht.
- `no-limit`
  - : Spezifiziert die maximale Luminanz als weit größer als die des HDR-Referenzweiß. Das genaue Niveau ist nicht spezifiziert. Dies ist der Ausgangswert.
- `constrained`
  - : Spezifiziert die maximale Luminanz als etwas größer als die des HDR-Referenzweiß, sodass eine Mischung aus Standard Dynamic Range (SDR) und HDR-Inhalten angenehm zusammen betrachtet werden kann. Das genaue Niveau ist nicht spezifiziert.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Spezifiziert die maximale Luminanz als einen benutzerdefinierten Wert, der eine Kombination der verschiedenen Schlüsselwortwerte proportional zu den bereitgestellten Prozentsätzen ist. Er erfordert zwei oder mehr Paare, die jeweils aus einem `dynamic-range-limit`-Schlüsselwort oder einer verschachtelten `dynamic-range-limit-mix()`-Funktion und einem Prozentsatz bestehen.

## Beschreibung

Die `dynamic-range-limit`-Eigenschaft legt die maximale Luminanz fest, die in Displays erlaubt ist, die in der Lage sind, Farben mit hohem Dynamikumfang darzustellen. Ein **Dynamikumfang** ist der Unterschied in der Luminanz (Helligkeit) zwischen den hellsten und dunkelsten Teilen eines Inhalts. Der Dynamikumfang wird in fotografischen Blenden gemessen, wobei eine Erhöhung um eine Blende eine Verdopplung der Luminanz darstellt.

### SDR, HDR und Spielraum

Traditionelle Webinhalte verwenden **Standard-Dynamikumfang (SDR)**, bei dem die hellste Farbe dem CSS-Farbwert `white` (`#ffffff` im Hexadezimalformat) entspricht. Die Helligkeit in **High Dynamic Range (HDR)**-Inhalten kann hingegen über das Standardweiß hinausgehen. Im HDR-Bereich wird das Standard-CSS-`white` auch als HDR-Referenzweiß bezeichnet.

Die Spitzenluminanz, bei der Inhalte angezeigt werden können, hängt vom Inhalt, der verfügbaren Displayhardware und den Vorlieben des Benutzers ab. Der Betrag, um den die Spitzenluminanz des Weiß über das HDR-Referenzweiß hinausgehen kann, wird als **HDR-Spielraum** bezeichnet und typischerweise in fotografischen Blenden ausgedrückt.

SDR-Inhalte haben immer einen HDR-Spielraum von `0`, da ihr hellstes Weiß _das_ HDR-Referenzweiß ist. Ältere Monitore haben möglicherweise auch einen HDR-Spielraum von `0`, da sie nicht in der Lage sind, hellere Farben darzustellen. Neuere Monitore können einen HDR-Spielraum größer als `0` haben, wodurch sie die helleren Farben, die in HDR-Inhalten verfügbar sind, darstellen können.

### Der Anwendungsfall für `dynamic-range-limit`

Die Helligkeit von HDR-Inhalten kann den Betrachter verblüffen. Dies ist besonders in Anwendungen offensichtlich, bei denen eine Mischung aus HDR und SDR-Inhalten angezeigt wird, was zu einer Inkonsistenz in der Helligkeit führt.

Die `dynamic-range-limit`-Eigenschaft ermöglicht es Ihnen, die Helligkeit von HDR-Inhalten zu kontrollieren. Beispielsweise könnten Sie die maximale Helligkeit aller Miniaturansichten in einer Foto- oder Videogallerie auf das HDR-Referenzweiß beschränken (das ist, was der `standard`-Schlüsselwortwert tut) oder auf eine Helligkeit, die nur geringfügig mehr als das HDR-Referenzweiß ist (unter Verwendung des `constrained`-Schlüsselwortwertes oder eines benutzerdefinierten Limits, das mit {{cssxref("dynamic-range-limit-mix()")}} erstellt wurde). Wenn ein Benutzer ein einzelnes HDR-Bild ansieht oder wenn der Benutzer eine Präferenz auswählt, um es zu aktivieren, könnten Sie dann das `dynamic-range-limit` des Bildes auf `no-limit` setzen.

## Formelle Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `dynamic-range-limit`

Dieses Beispiel demonstriert die grundlegende Verwendung der `dynamic-range-limit`-Eigenschaft und den Unterschied zwischen HDR- und SDR-Bildern.

#### HTML

Im Markup betten wir ein HDR-Bild mit einem {{htmlelement("img")}}-Element ein. Wir fügen einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Wert von `0` hinzu, um das Bild für die Tastatur fokussierbar zu machen.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/ultra-hdr.jpg"
  alt="A subway station platform with bright white overhead strip lights"
  tabindex="0" />
```

#### CSS

Wir beschränken das Bild auf SDR-Helligkeit, indem wir die `dynamic-range-limit`-Eigenschaft auf `standard` setzen, wodurch das Bild nicht heller als das HDR-Referenzweiß wird. Wir legen auch eine {{cssxref("transition")}}-Eigenschaft fest, sodass der `dynamic-range-limit`-Wert des `<img>`-Elements über `0.6` Sekunden übergeht, wenn sich der Zustand ändert.

```css
img {
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Beim Überfahren oder Fokussieren ändern wir den `dynamic-range-limit`-Wert des `<img>`-Elements in `no-limit`, sodass es sich so hell darstellt, wie es der Browser und die Displaykonfiguration erlauben.

```css
img:hover,
img:focus {
  dynamic-range-limit: no-limit;
}
```

```css hidden
img {
  max-height: 100vh;
}
@media not (dynamic-range: high) {
  body::before {
    content: "Your device may not display the image at full brightness.";
    background-color: wheat;
    display: block;
    text-align: center;
  }
}
@supports not (dynamic-range-limit: standard) {
  body::before {
    content: "Your browser doesn't support the dynamic-range-limit property.";
    background-color: wheat;
    display: block;
    text-align: center;
  }
}
```

#### Ergebnisse

{{EmbedLiveSample("Examples", 300, 400)}}

Das Bild ist ultra HDR, wird aber standardmäßig auf SDR-Helligkeit begrenzt. Fahren Sie mit der Maus über das Bild oder fokussieren Sie es. Beachten Sie, wie es auf fähigen Displays zu lebhaften HDR-Farben übergeht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`dynamic-range`](/de/docs/Web/CSS/Reference/At-rules/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range) Medienmerkmale
