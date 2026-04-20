---
title: "`dynamic-range-limit` CSS property"
short-title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`dynamic-range-limit`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die maximale Helligkeit an, die für Inhalte im High Dynamic Range (HDR) erlaubt ist.

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

Die `dynamic-range-limit` Eigenschaft wird als eines der folgenden Schlüsselwörter oder als ein Aufruf der Funktion {{cssxref("dynamic-range-limit-mix()")}} angegeben.

Die folgenden Schlüsselwortwerte können angegeben werden:

- `standard`
  - : Gibt die maximale Helligkeit als **HDR-Referenzweiß** an, welches der CSS-Farbe `white` entspricht.
- `no-limit`
  - : Gibt die maximale Helligkeit als deutlich höher als die von HDR-Referenzweiß an. Das genaue Level wird nicht spezifiziert.
- `constrained`
  - : Gibt die maximale Helligkeit als etwas höher als die von HDR-Referenzweiß an, so dass eine Mischung aus Standard Dynamic Range (SDR) und HDR-Inhalten bequem zusammen angeschaut werden kann. Das genaue Level wird nicht spezifiziert.

Die Funktion {{cssxref("dynamic-range-limit-mix()")}} gibt die maximale Helligkeit als einen benutzerdefinierten Wert an, der eine Kombination der verschiedenen Schlüsselwortwerte im Verhältnis zu den angegebenen Prozentsätzen ist. Sie nimmt zwei oder mehr Paare, von denen jedes aus einem `dynamic-range-limit` Schlüsselwort (oder einer geschachtelten `dynamic-range-limit-mix()` Funktion) und einem Prozentsatz besteht.

## Beschreibung

Dynamikbereich ist der Unterschied in Helligkeit (Leuchtkraft) zwischen den hellsten und dunkelsten Teilen eines Inhalts. Der Dynamikbereich wird in fotografischen Blenden gemessen, wobei eine Erhöhung um eine Blende eine Verdopplung der Leuchtkraft darstellt.

### SDR, HDR und Headroom

Traditionelle Webinhalte verwenden den **Standard Dynamic Range (SDR)**, bei dem die hellste Farbe dem CSS-Farbwert `white` (`#ffffff` in Hexadezimal) entspricht. Die Helligkeit in **High Dynamic Range (HDR)** Inhalten kann hingegen über das Standardweiß hinausgehen. In der HDR-Terminologie wird das Standard-CSS-`white` auch als HDR-Referenzweiß bezeichnet.

Die Spitzenhelligkeit, bei der Inhalte angezeigt werden können, hängt von den Inhalten, der verfügbaren Hardware zum Anzeigen und den Benutzereinstellungen ab. Der Betrag, um den die Spitzenhelligkeit von Weiß das HDR-Referenzweiß überschreiten kann, wird als **HDR-Headroom** bezeichnet und wird typischerweise in fotografischen Blenden ausgedrückt.

SDR-Inhalte haben immer einen HDR-Headroom von `0`, da ihr hellstes Weiß das HDR-Referenzweiß _ist_. Ältere Monitore können ebenfalls einen HDR-Headroom von `0` haben, da sie keine helleren Farben anzeigen können. Neuere Monitore können einen HDR-Headroom größer als `0` haben, was es ihnen ermöglicht, die helleren Farben anzuzeigen, die in HDR-Inhalten verfügbar sind.

### Der Anwendungsfall für `dynamic-range-limit`

Die Helligkeit von HDR-Inhalten kann für den Betrachter erschreckend sein. Dies ist besonders in Apps auffällig, in denen eine Mischung aus HDR- und SDR-Inhalten angezeigt wird, was zu Inkonsistenzen in der Helligkeit führt.

Die `dynamic-range-limit` Eigenschaft ermöglicht es Ihnen, die Helligkeit von HDR-Inhalten zu steuern. Zum Beispiel möchten Sie möglicherweise die maximale Helligkeit aller Miniaturansichten in einer Foto- oder Videogalerie auf HDR-Referenzweiß beschränken (das ist es, was das Schlüsselwort `standard` bewirkt) oder auf eine Helligkeit, die nur geringfügig mehr als das HDR-Referenzweiß beträgt (unter Verwendung des `constrained` Schlüsselwortes oder eines benutzerdefinierten Limits, das mit {{cssxref("dynamic-range-limit-mix()")}} erstellt wurde). Wenn ein Benutzer dann ein einzelnes HDR-Bild betrachtet oder wenn der Benutzer eine Präferenz auswählt, um es zu aktivieren, könnten Sie das `dynamic-range-limit` des Bildes auf `no-limit` setzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `dynamic-range-limit`

In unserem [dynamic-range-limit Eigenschafts-Demo](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit) haben wir ein HDR-Bild eingebunden, das durch Hovern und Fokussieren den `dynamic-range-limit` Wert ändern kann. [Schauen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/dynamic-range-limit/) auf einem Display, das HDR-Farben darstellen kann, und probieren Sie es aus. Der Code wird unten erklärt.

#### HTML

Im Markup binden wir ein HDR-Bild mit einem {{htmlelement("img")}} Element ein. Wir fügen einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Wert von `0` hinzu, um das Bild über die Tastatur fokussierbar zu machen.

```html
<img
  src="gioia-pixel-ultrahdr.jpg"
  alt="A subway station, with white strip lights lighting the platform and ad posters in the background"
  tabindex="0" />
```

#### CSS

Wir geben unserem `<img>` Element einige rudimentäre Stile und setzen dann seine `dynamic-range-limit` Eigenschaft auf `standard`, was bedeutet, dass es nicht heller als HDR-Referenzweiß angezeigt wird. Wir setzen auch eine {{cssxref("transition")}} Eigenschaft, so dass der `dynamic-range-limit` Wert des `<img>` Elements über `0.6` Sekunden übergeht, wenn sich sein Zustand ändert.

```css
img {
  width: 50%;
  border: 1px solid black;
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Bei Hover oder Fokus ändern wir den Wert der `dynamic-range-limit` Eigenschaft des `<img>` Elements auf `no-limit`, sodass es so hell wie vom Browser und Display-Setup erlaubt angezeigt wird.

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

[`dynamic-range`](/de/docs/Web/CSS/Reference/At-rules/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range) Medienfeatures
