---
title: "`dynamic-range-limit` CSS property"
short-title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`dynamic-range-limit`**- [CSS](/de/docs/Web/CSS) Eigenschaft gibt die maximale Helligkeit an, die für High Dynamic Range (HDR) Inhalte erlaubt ist.

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

Diese Eigenschaft wird als ein einzelner Wert aus der folgenden Liste angegeben:

- `standard`
  - : Gibt die maximale Helligkeit als High Dynamic Range (HDR) Referenzweiß an, welches die CSS-Farbe `white` ist.
- `no-limit`
  - : Gibt die maximale Helligkeit als wesentlich höher als die des HDR-Referenzweißes an. Der genaue Wert ist nicht spezifiziert. Dies ist der Anfangswert.
- `constrained`
  - : Gibt die maximale Helligkeit als etwas höher als die des HDR-Referenzweißes an, sodass eine Mischung von Standard-Dynamik-Bereich (SDR) und HDR-Inhalten komfortabel zusammen angezeigt werden kann. Der genaue Wert ist nicht spezifiziert.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Gibt die maximale Helligkeit als einen benutzerdefinierten Wert an, der eine Kombination der verschiedenen Schlüsselwortwerte proportional zu den angegebenen Prozentsätzen ist. Er besteht aus zwei oder mehr Paaren, die jeweils aus einem `dynamic-range-limit` Schlüsselwort oder einer verschachtelten `dynamic-range-limit-mix()` Funktion und einem Prozentsatz bestehen.

## Beschreibung

Die `dynamic-range-limit`-Eigenschaft gibt die maximale Helligkeit an, die in Bildschirmen angezeigt werden kann, die in der Lage sind, Farben mit hohem Dynamikumfang darzustellen. Ein **Dynamikumfang** ist der Unterschied in der Helligkeit zwischen den hellsten und dunkelsten Teilen eines Inhalts. Der Dynamikumfang wird in fotografischen Blenden gemessen, wobei eine Erhöhung um eine Blendenstufe eine Verdoppelung der Helligkeit darstellt.

### SDR, HDR und Puffer

Traditionelle Webinhalte verwenden den **Standard-Dynamikbereich (SDR)**, bei dem die hellste Farbe dem CSS-Farbwert `white` (`#ffffff` im Hexadezimalwert) entspricht. Die Helligkeit in **High Dynamic Range (HDR)** Inhalten kann über das Standardweiß hinausgehen. In der HDR-Terminologie wird das Standard-CSS-`white` auch als HDR-Referenzweiß bezeichnet.

Die maximale Helligkeit, mit der Inhalte angezeigt werden können, hängt vom Inhalt, der verfügbaren Hardware des Displays und den Benutzerpräferenzen ab. Der Betrag, um den die Spitzenhelligkeit des Weißes das HDR-Referenzweiß überschreiten kann, wird als **HDR-Puffer** bezeichnet und typischerweise in fotografischen Blenden ausgedrückt.

SDR-Inhalte haben immer einen HDR-Puffer von `0`, da ihr hellstes Weiß _dem_ HDR-Referenzweiß entspricht. Ältere Monitore können ebenfalls einen HDR-Puffer von `0` haben, da sie keine helleren Farben darstellen können. Neuere Monitore können einen HDR-Puffer größer als `0` haben, der es ihnen ermöglicht, die helleren Farben darzustellen, die in HDR-Inhalten verfügbar sind.

### Anwendungsfall für `dynamic-range-limit`

Die Helligkeit von HDR-Inhalten kann für den Betrachter auffällig sein. Dies ist besonders bei Apps offensichtlich, in denen eine Mischung aus HDR- und SDR-Inhalten angezeigt wird, die zu Inkonsistenzen in der Helligkeit führen kann.

Die Eigenschaft `dynamic-range-limit` ermöglicht es Ihnen, die Helligkeit von HDR-Inhalten zu steuern. Zum Beispiel möchten Sie möglicherweise die maximale Helligkeit aller Thumbnails in einer Foto- oder Videogalerie auf HDR-Referenzweiß beschränken (dies ist der Wert des `standard`-Schlüsselworts) oder auf eine Helligkeit, die nur etwas mehr als das HDR-Referenzweiß ist (unter Verwendung des `constrained`-Schlüsselworts oder einer benutzerdefinierten Grenze, die mit {{cssxref("dynamic-range-limit-mix()")}} erstellt wurde). Wenn ein Benutzer ein einzelnes HDR-Bild betrachtet oder wenn der Benutzer eine Präferenz auswählt, um es zu aktivieren, könnten Sie dann das `dynamic-range-limit` des Bildes auf `no-limit` setzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `dynamic-range-limit`

Dieses Beispiel demonstriert die grundlegende Verwendung der `dynamic-range-limit`-Eigenschaft und den Unterschied zwischen HDR- und SDR-Bildern.

#### HTML

Im Markup binden wir ein HDR-Bild mit einem {{htmlelement("img")}}-Element ein. Wir fügen einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Wert von `0` hinzu, um das Bild über die Tastatur fokussierbar zu machen.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/ultra-hdr.jpg"
  alt="A subway station platform with bright white overhead strip lights"
  tabindex="0" />
```

#### CSS

Wir begrenzen das Bild auf SDR-Helligkeit, indem wir die `dynamic-range-limit`-Eigenschaft auf `standard` setzen, wodurch das Bild nicht heller als HDR-Referenzweiß wird. Wir setzen auch eine {{cssxref("transition")}}-Eigenschaft, sodass der `dynamic-range-limit`-Wert des `<img>`-Elements beim Zustandswechsel über `0,6` Sekunden übergeht.

```css
img {
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Beim Hover oder Fokussieren ändern wir den Wert des `<img>`-Elements auf `dynamic-range-limit` auf `no-limit`, sodass es so hell dargestellt wird, wie es der Browser und die Display-Einstellungen erlauben.

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

Das Bild ist ultra HDR, aber standardmäßig auf SDR-Helligkeit beschränkt. Bewegen Sie den Mauszeiger über das Bild oder fokussieren Sie es. Beachten Sie, wie es auf fähigen Displays zu lebendigen HDR-Farben übergeht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`dynamic-range`](/de/docs/Web/CSS/Reference/At-rules/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range) Medienfunktionen
