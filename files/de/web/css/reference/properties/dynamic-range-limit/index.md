---
title: "`dynamic-range-limit` CSS property"
short-title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: 314e1451345c061ad4ecc7a9d1845e3e8a9a23f4
---

Die **`dynamic-range-limit`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die maximal zulässige Leuchtdichte für High Dynamic Range (HDR)-Inhalte an.

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
  - : Gibt die maximale Leuchtdichte als High Dynamic Range (HDR) Referenzweiß an, welches die CSS-Farbe `white` ist.
- `no-limit`
  - : Gibt die maximale Leuchtdichte an, die viel höher ist als die des HDR-Referenzweiß. Das genaue Niveau ist nicht spezifiziert. Dies ist der Anfangswert.
- `constrained`
  - : Gibt die maximale Leuchtdichte etwas höher als die des HDR-Referenzweiß an, sodass eine Mischung aus Standard Dynamic Range (SDR) und HDR-Inhalten bequem zusammen betrachtet werden kann. Das genaue Niveau ist nicht spezifiziert.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Gibt die maximale Leuchtdichte als benutzerdefinierten Wert an, der eine Kombination der unterschiedlichen Schlüsselwortwerte proportional zu den angegebenen Prozentsätzen darstellt. Es erfordert zwei oder mehr Paare, die jeweils aus einem `dynamic-range-limit` Schlüsselwort oder einer verschachtelten `dynamic-range-limit-mix()` Funktion und einem Prozentsatz bestehen.

## Beschreibung

Die `dynamic-range-limit`-Eigenschaft gibt die maximal zulässige Leuchtdichte auf Bildschirmen an, die in der Lage sind, Farben mit hohem Dynamikumfang darzustellen. Ein **dynamischer Bereich** ist der Unterschied in der Leuchtdichte (Helligkeit) zwischen den hellsten und dunkelsten Teilen von Inhalten. Der Dynamikumfang wird in Fotografiestufen gemessen, wobei eine Erhöhung um eine Stufe einer Verdoppelung der Leuchtdichte entspricht.

### SDR, HDR und Puffer

Traditionelle Web-Inhalte verwenden **Standard Dynamic Range (SDR)**, bei dem die hellste Farbe dem CSS-Farbe `white` (`#ffffff` im Hexadezimal) entspricht. Die Helligkeit in **High Dynamic Range (HDR)**-Inhalten kann jedoch über das Standard-Weiß hinausgehen. In der HDR-Nomenklatur wird das Standard-CSS-`white` auch als HDR-Referenzweiß bezeichnet.

Die maximale Leuchtdichte, mit der Inhalte angezeigt werden können, hängt von den Inhalten, der verfügbaren Hardware und den Benutzerpräferenzen ab. Der Betrag, um den die Spitzenleuchtdichte von Weiß das HDR-Referenzweiß übersteigen kann, wird als **HDR-Puffer** bezeichnet und typischerweise in Fotografiestufen ausgedrückt.

SDR-Inhalte haben immer einen HDR-Puffer von `0`, da ihr hellstes Weiß das HDR-Referenzweiß _ist_. Ältere Monitore können ebenfalls einen HDR-Puffer von `0` haben, da sie nicht in der Lage sind, hellere Farben darzustellen. Neuere Monitore können einen HDR-Puffer größer als `0` haben, wodurch sie die helleren Farben anzeigen können, die in HDR-Inhalten verfügbar sind.

### Der Anwendungsfall für `dynamic-range-limit`

Die Helligkeit von HDR-Inhalten kann für den Betrachter überraschend sein. Dies ist insbesondere in Anwendungen offensichtlich, in denen eine Mischung aus HDR- und SDR-Inhalten angezeigt wird, was zu Inkonsistenzen in der Helligkeit führt.

Die `dynamic-range-limit`-Eigenschaft ermöglicht es Ihnen, die Helligkeit von HDR-Inhalten zu kontrollieren. Beispielsweise könnten Sie die maximale Helligkeit aller Thumbnails in einer Foto- oder Videogalerie auf HDR-Referenzweiß beschränken (das ist, was der `standard`-Schlüsselwortwert macht) oder auf eine Helligkeit, die nur geringfügig über dem HDR-Referenzweiß liegt (unter Verwendung des `constrained`-Schlüsselwortwerts oder eines benutzerdefinierten Limits, das mit {{cssxref("dynamic-range-limit-mix()")}} erstellt wurde). Wenn ein Benutzer ein einzelnes HDR-Bild betrachtet oder falls der Benutzer eine Präferenz auswählt, um es zu aktivieren, könnten Sie dann das `dynamic-range-limit` des Bildes auf `no-limit` setzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `dynamic-range-limit` Verwendung

In unserem [dynamic-range-limit Eigenschaft Demo](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit) binden wir ein HDR-Bild ein, das beim Überfahren und Fokussieren den `dynamic-range-limit`-Wert ändern kann. [Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/dynamic-range-limit/) auf einem Display, das in der Lage ist, HDR-Farben darzustellen, und probieren Sie es aus. Der Code wird unten erklärt.

#### HTML

Im Markup binden wir ein HDR-Bild mit einem {{htmlelement("img")}} Element ein. Wir fügen einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Wert von `0` hinzu, um das Bild über die Tastatur fokussierbar zu machen.

```html
<img
  src="gioia-pixel-ultrahdr.jpg"
  alt="A subway station, with white strip lights lighting the platform and ad posters in the background"
  tabindex="0" />
```

#### CSS

Wir verleihen unserem `<img>` Element einige grundlegende Stile und setzen dann seine `dynamic-range-limit`-Eigenschaft auf `standard`, was bedeutet, dass es nicht heller als HDR-Referenzweiß angezeigt wird. Wir setzen ebenfalls eine {{cssxref("transition")}}-Eigenschaft, sodass der `dynamic-range-limit`-Wert des `<img>`-Elements über `0.6` Sekunden übergeht, wenn sich sein Zustand ändert.

```css
img {
  width: 50%;
  border: 1px solid black;
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Beim Überfahren oder Fokussieren ändern wir den Wert des `dynamic-range-limit` des `<img>`-Elements auf `no-limit`, sodass es so hell wie möglich angezeigt wird, wie der Browser und das Display-Setup es zulassen.

```css
img:hover,
img:focus {
  dynamic-range-limit: no-limit;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`dynamic-range`](/de/docs/Web/CSS/Reference/At-rules/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range) Medien-Features
