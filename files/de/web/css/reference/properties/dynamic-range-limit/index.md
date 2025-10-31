---
title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`dynamic-range-limit`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die maximale Leuchtdichte an, die für High Dynamic Range (HDR) Inhalte erlaubt ist.

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

Die `dynamic-range-limit` Eigenschaft wird als eines der folgenden Schlüsselwortwerte oder als ein {{cssxref("dynamic-range-limit-mix()")}} Funktionsaufruf angegeben.

Die folgenden Schlüsselwortwerte können angegeben werden:

- `standard`
  - : Gibt die maximale Leuchtdichte als **HDR-Referenzweiß** an, was der CSS-Farbe `white` entspricht.
- `no-limit`
  - : Gibt die maximale Leuchtdichte als weit größer als die von HDR-Referenzweiß an. Das genaue Niveau wird nicht angegeben.
- `constrained`
  - : Gibt die maximale Leuchtdichte als etwas größer als die von HDR-Referenzweiß an, sodass eine Mischung aus Standard Dynamic Range (SDR) und HDR-Inhalten angenehm zusammen gesehen werden kann. Das genaue Niveau wird nicht angegeben.

Die {{cssxref("dynamic-range-limit-mix()")}} Funktion gibt die maximale Leuchtdichte als benutzerdefinierten Wert an, der eine Kombination der verschiedenen Schlüsselwortwerte, proportional zu den bereitgestellten Prozentsätzen, ist. Sie nimmt zwei oder mehr Paare an, die jeweils aus einem `dynamic-range-limit` Schlüsselwort (oder einer verschachtelten `dynamic-range-limit-mix()` Funktion) und einem Prozentsatz bestehen.

## Beschreibung

Der Dynamikumfang ist der Unterschied in der Leuchtdichte (Helligkeit) zwischen den hellsten und dunkelsten Teilen des Inhalts. Der Dynamikumfang wird in fotografischen Blenden gemessen, wobei eine Erhöhung um eine Blendenstufe eine Verdopplung der Leuchtdichte darstellt.

### SDR, HDR und Headroom

Traditionelle Webinhalte verwenden **Standard Dynamic Range (SDR)**, wobei die hellste Farbe der CSS-Farbe `white` entspricht (`#ffffff` im Hexadezimalformat). Die Helligkeit in **High Dynamic Range (HDR)** Inhalten kann hingegen über das standardmäßige Weiß hinausgehen. In der HDR-Terminologie wird das standardmäßige CSS `white` auch als HDR-Referenzweiß bezeichnet.

Die Spitzenleuchtdichte, bei der Inhalte angezeigt werden können, hängt vom Inhalt, der verfügbaren Display-Hardware und den Benutzerpräferenzen ab. Der Betrag, um den die Spitzenleuchtdichte von Weiß das HDR-Referenzweiß überschreiten kann, wird als **HDR-Headroom** bezeichnet und wird typischerweise in fotografischen Blenden ausgedrückt.

SDR-Inhalte haben immer einen HDR-Headroom von `0`, da ihr hellstes Weiß _das_ HDR-Referenzweiß ist. Ältere Monitore können ebenfalls einen HDR-Headroom von `0` haben, da sie nicht in der Lage sind, hellere Farben anzuzeigen. Neuere Monitore können einen HDR-Headroom größer als `0` haben, wodurch sie die helleren Farben, die in HDR-Inhalten verfügbar sind, anzeigen können.

### Der Anwendungsfall für `dynamic-range-limit`

Die Helligkeit von HDR-Inhalten kann für den Betrachter störend sein. Dies wird besonders in Anwendungen offensichtlich, in denen eine Mischung aus HDR- und SDR-Inhalten angezeigt wird, was zu einer Inkonsistenz in der Helligkeit führt.

Die `dynamic-range-limit` Eigenschaft ermöglicht es Ihnen, die Helligkeit von HDR-Inhalten zu kontrollieren. Zum Beispiel könnten Sie die maximale Helligkeit aller Thumbnails in einer Foto- oder Video-Galerie auf HDR-Referenzweiß beschränken (dies ist, was der `standard` Schlüsselwortwert tut) oder auf eine Helligkeit, die nur geringfügig mehr als das HDR-Referenzweiß ist (mithilfe des `constrained` Schlüsselwortwerts oder eines benutzerdefinierten Limits, das mit {{cssxref("dynamic-range-limit-mix()")}} erstellt wurde). Wenn ein Benutzer ein einzelnes HDR-Bild betrachtet oder wenn der Benutzer eine Präferenz auswählt, um es zu aktivieren, könnten Sie dann das `dynamic-range-limit` des Bildes auf `no-limit` setzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `dynamic-range-limit`

In unserem [Demo zur dynamic-range-limit Eigenschaft](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit) haben wir ein HDR-Bild eingebunden, das bei Hover und Fokus den `dynamic-range-limit` Wert wechseln kann. [Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/dynamic-range-limit/) auf einem Display, das HDR-Farben anzeigen kann, und probieren Sie es aus. Der Code wird unten erläutert.

#### HTML

Im Markup binden wir ein HDR-Bild mit einem {{htmlelement("img")}} Element ein. Wir fügen einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Wert von `0` hinzu, um das Bild über die Tastatur fokussierbar zu machen.

```html
<img
  src="gioia-pixel-ultrahdr.jpg"
  alt="A subway station, with white strip lights lighting the platform and ad posters in the background"
  tabindex="0" />
```

#### CSS

Wir geben unserem `<img>` Element einige rudimentäre Stile und setzen dann seine `dynamic-range-limit` Eigenschaft auf `standard`, was bedeutet, dass es nicht heller als HDR-Referenzweiß angezeigt wird. Wir setzen auch eine {{cssxref("transition")}} Eigenschaft, sodass der `dynamic-range-limit` Wert des `<img>` Elements innerhalb von `0.6` Sekunden übergeht, wenn sich sein Zustand ändert.

```css
img {
  width: 50%;
  border: 1px solid black;
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Bei Hover oder Fokus ändern wir den `dynamic-range-limit` Wert des `<img>` Elements zu `no-limit`, sodass es so hell angezeigt wird, wie es der Browser und die Display-Einstellungen erlauben.

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

[`dynamic-range`](/de/docs/Web/CSS/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/@media/video-dynamic-range) Medienmerkmale
