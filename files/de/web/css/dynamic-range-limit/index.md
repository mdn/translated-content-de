---
title: dynamic-range-limit
slug: Web/CSS/dynamic-range-limit
l10n:
  sourceCommit: 54ac1367cb817a0079c30d2e36b5cbafc0a01431
---

Die **`dynamic-range-limit`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die maximale Helligkeit an, die für High Dynamic Range (HDR) Inhalte zulässig ist.

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

Die `dynamic-range-limit` Eigenschaft wird als einer der folgenden Schlüsselwortwerte oder als ein {{cssxref("dynamic-range-limit-mix()")}} Funktionsaufruf angegeben.

Die folgenden Schlüsselwortwerte können angegeben werden:

- `standard`
  - : Gibt die maximale Helligkeit als **HDR-Referenzweiß** an, das die CSS-Farbe `white` ist.
- `no-limit`
  - : Gibt die maximale Helligkeit als weit höher als die von HDR-Referenzweiß an. Das genaue Niveau wird nicht angegeben.
- `constrained`
  - : Gibt die maximale Helligkeit als etwas höher als die von HDR-Referenzweiß an, sodass eine Mischung aus Standard Dynamic Range (SDR) und HDR-Inhalten komfortabel zusammen betrachtet werden kann. Das genaue Niveau wird nicht angegeben.

Die {{cssxref("dynamic-range-limit-mix()")}} Funktion spezifiziert die maximale Helligkeit als einen benutzerdefinierten Wert, der eine Kombination der verschiedenen Schlüsselwortwerte im Verhältnis zu den angegebenen Prozentsätzen ist. Sie nimmt zwei oder mehr Paare an, bestehend aus einem `dynamic-range-limit` Schlüsselwort (oder einer verschachtelten `dynamic-range-limit-mix()` Funktion) und einem Prozentsatz.

## Beschreibung

Der Dynamikumfang ist der Unterschied in der Helligkeit zwischen den hellsten und dunkelsten Teilen eines Inhalts. Der Dynamikumfang wird in fotografischen Blendenstufen gemessen, wobei eine Erhöhung um eine Stufe eine Verdopplung der Helligkeit darstellt.

### SDR, HDR und Spielraum

Traditionelle Web-Inhalte verwenden **Standard Dynamic Range (SDR)**, bei dem die hellste Farbe der CSS-Farbe `white` (`#ffffff` in Hexadezimal) entspricht. Die Helligkeit in **High Dynamic Range (HDR)** Inhalten kann jedoch über das Standardweiß hinausgehen. In der HDR-Terminologie wird das Standard-CSS `white` auch als HDR-Referenzweiß bezeichnet.

Die maximale Helligkeit, bei der Inhalte angezeigt werden können, hängt vom Inhalt, der verfügbaren Display-Hardware und den Benutzerpräferenzen ab. Der Betrag, um den die maximale Helligkeit von Weiß das HDR-Referenzweiß übersteigen kann, wird als **HDR-Spielraum** bezeichnet und typischerweise in fotografischen Blendenstufen ausgedrückt.

SDR-Inhalte haben immer einen HDR-Spielraum von `0`, weil ihr hellstes Weiß das HDR-Referenzweiß _ist_. Ältere Monitore können ebenfalls einen HDR-Spielraum von `0` haben, weil sie nicht in der Lage sind, hellere Farben anzuzeigen. Neuere Monitore können einen HDR-Spielraum größer als `0` haben, was ihnen ermöglicht, die helleren Farben anzuzeigen, die in HDR-Inhalten verfügbar sind.

### Der Anwendungsfall für `dynamic-range-limit`

Die Helligkeit von HDR-Inhalten kann für den Betrachter schockierend sein. Dies ist besonders in Apps offensichtlich, in denen eine Mischung aus HDR- und SDR-Inhalten angezeigt wird, was zu Inkonsistenzen in der Helligkeit führen kann.

Die `dynamic-range-limit` Eigenschaft ermöglicht es Ihnen, die Helligkeit von HDR-Inhalten zu kontrollieren. Beispielsweise möchten Sie möglicherweise die maximale Helligkeit aller Thumbnails in einer Foto- oder Videogalerie auf HDR-Referenzweiß beschränken (dies ist, was der `standard` Schlüsselwortwert tut) oder auf eine Helligkeit, die nur geringfügig höher als das HDR-Referenzweiß ist (unter Verwendung des `constrained` Schlüsselwortwerts oder eines benutzerdefinierten Limits, das mit {{cssxref("dynamic-range-limit-mix()")}} erstellt wurde). Wenn ein Benutzer ein einzelnes HDR-Bild ansieht oder wenn der Benutzer eine Präferenz auswählt, um es zu aktivieren, könnten Sie dann das `dynamic-range-limit` des Bildes auf `no-limit` setzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `dynamic-range-limit`

In unserem [dynamic-range-limit Eigenschafts-Demo](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit) haben wir ein HDR-Bild aufgenommen, das durch Hover und Fokus den `dynamic-range-limit` Wert ändern kann. [Siehe das Beispiel live](https://mdn.github.io/dom-examples/dynamic-range-limit/) auf einem Display, das in der Lage ist, HDR-Farben darzustellen, und probieren Sie es aus. Der Code wird unten erklärt.

#### HTML

Im Markup betten wir ein HDR-Bild mit einem {{htmlelement("img")}} Element ein. Wir fügen einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Wert von `0` hinzu, damit das Bild über die Tastatur fokussierbar ist.

```html
<img
  src="gioia-pixel-ultrahdr.jpg"
  alt="A subway station, with white strip lights lighting the platform and ad posters in the background"
  tabindex="0" />
```

#### CSS

Wir geben unserem `<img>` Element einige grundlegende Styles und setzen dann seine `dynamic-range-limit` Eigenschaft auf `standard`, was bedeutet, dass es nicht heller als HDR-Referenzweiß angezeigt wird. Wir setzen auch eine {{cssxref("transition")}} Eigenschaft, sodass der `dynamic-range-limit` Wert des `<img>` Elements über `0.6` Sekunden übergeht, wenn sich sein Status ändert.

```css
img {
  width: 50%;
  border: 1px solid black;
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Bei Hover oder Fokus ändern wir den Wert der `dynamic-range-limit` Eigenschaft des `<img>` Elements zu `no-limit`, damit es so hell wie möglich angezeigt wird, wie es der Browser und die Display-Einstellungen erlauben.

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

[`dynamic-range`](/de/docs/Web/CSS/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/@media/video-dynamic-range) Medien-Features
