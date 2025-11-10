---
title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die CSS-Eigenschaft **`dynamic-range-limit`** gibt die maximal zulässige Leuchtdichte für HDR-Inhalte (High Dynamic Range) an.

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

Die `dynamic-range-limit`-Eigenschaft wird als einer der folgenden Schlüsselwortwerte oder als Funktion {{cssxref("dynamic-range-limit-mix()")}} angegeben.

Die folgenden Schlüsselwertbegriffe können angegeben werden:

- `standard`
  - : Gibt die maximale Leuchtdichte als **HDR-Referenzweiß** an, das ist die CSS-Farbe `white`.
- `no-limit`
  - : Gibt die maximale Leuchtdichte als weit über der von HDR-Referenzweiß an. Der genaue Wert ist nicht spezifiziert.
- `constrained`
  - : Gibt die maximale Leuchtdichte als etwas höher als die von HDR-Referenzweiß an, sodass eine Mischung aus Standard-Dynamic-Range (SDR) und HDR-Inhalten bequem gemeinsam angezeigt werden kann. Der genaue Wert ist nicht spezifiziert.

Die Funktion {{cssxref("dynamic-range-limit-mix()")}} gibt die maximale Leuchtdichte als benutzerdefinierten Wert an, der eine Kombination der verschiedenen Schlüsselwortwerte im Verhältnis zu den angegebenen Prozentsätzen darstellt. Sie nimmt zwei oder mehr Paare entgegen, die jeweils aus einem `dynamic-range-limit`-Schlüsselwort (oder einer verschachtelten `dynamic-range-limit-mix()`-Funktion) und einem Prozentsatz bestehen.

## Beschreibung

Der Dynamikbereich ist der Unterschied in der Leuchtdichte (Helligkeit) zwischen den hellsten und dunkelsten Teilen eines Inhalts. Der Dynamikbereich wird in fotografischen Blendenstufen gemessen, wobei eine Erhöhung um eine Stufe eine Verdoppelung der Leuchtdichte darstellt.

### SDR, HDR und Spielraum

Traditionelle Webinhalte nutzen den **Standard-Dynamic-Range (SDR)**, bei dem die hellste Farbe der CSS-Farbe `white` (`#ffffff` in Hexadezimal) entspricht. Die Helligkeit von **High Dynamic Range (HDR)**-Inhalten kann hingegen über das Standardweiß hinausgehen. In der HDR-Terminologie wird das Standard-CSS-`white` auch als HDR-Referenzweiß bezeichnet.

Die Spitzenleuchtdichte, bei der Inhalte angezeigt werden können, hängt vom Inhalt, der verfügbaren Hardware und den Benutzereinstellungen ab. Das Maß, um das die Spitzenleuchtdichte von Weiß das HDR-Referenzweiß überschreiten kann, wird als **HDR-Spielraum** bezeichnet und typischerweise in fotografischen Blendenstufen ausgedrückt.

SDR-Inhalte haben immer einen HDR-Spielraum von `0`, da ihr hellstes Weiß das HDR-Referenzweiß _ist_. Ältere Monitore haben möglicherweise auch einen HDR-Spielraum von `0`, da sie nicht in der Lage sind, hellere Farben darzustellen. Neuere Monitore können einen HDR-Spielraum größer als `0` haben und die helleren Farben, die in HDR-Inhalten verfügbar sind, darstellen.

### Der Anwendungsfall für `dynamic-range-limit`

Die Helligkeit von HDR-Inhalten kann für den Betrachter schockierend sein. Dies ist besonders offensichtlich in Apps, in denen eine Mischung aus HDR- und SDR-Inhalten angezeigt wird, was zu Inkonsistenzen in der Helligkeit führt.

Die `dynamic-range-limit`-Eigenschaft ermöglicht es Ihnen, die Helligkeit von HDR-Inhalten zu steuern. Beispielsweise möchten Sie die maximale Helligkeit aller Thumbnails in einer Foto- oder Videogalerie auf HDR-Referenzweiß beschränken (das ist der Wert des Schlüsselworts `standard`) oder auf eine Helligkeit, die nur geringfügig über dem HDR-Referenzweiß liegt (mit dem Schlüsselwortwert `constrained` oder einem benutzerdefinierten Limit, das mit {{cssxref("dynamic-range-limit-mix()")}} erstellt wurde). Wenn ein Benutzer ein einzelnes HDR-Bild ansieht oder eine Benutzerpräferenz zur Aktivierung auswählt, könnten Sie das `dynamic-range-limit` des Bildes auf `no-limit` setzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `dynamic-range-limit`

In unserem [Beispiel zur `dynamic-range-limit`-Eigenschaft](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit) enthalten wir ein HDR-Bild, das gehovt und fokussiert werden kann, um den `dynamic-range-limit`-Wert zu ändern. [Das Beispiel live ansehen](https://mdn.github.io/dom-examples/dynamic-range-limit/) auf einem Display, das HDR-Farben darstellen kann, und ausprobieren. Der Code wird unten erklärt.

#### HTML

Im Markup binden wir ein HDR-Bild mit einem {{htmlelement("img")}} Element ein. Wir fügen einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Wert von `0` hinzu, um das Bild per Tastatur fokussierbar zu machen.

```html
<img
  src="gioia-pixel-ultrahdr.jpg"
  alt="A subway station, with white strip lights lighting the platform and ad posters in the background"
  tabindex="0" />
```

#### CSS

Wir geben unserem `<img>` Element einige rudimentäre Stile und setzen dann seine `dynamic-range-limit`-Eigenschaft auf `standard`, was bedeutet, dass es nicht heller als das HDR-Referenzweiß dargestellt wird. Wir setzen auch eine {{cssxref("transition")}}-Eigenschaft, sodass der `dynamic-range-limit`-Wert des `<img>` Elements über `0.6` Sekunden hinweg übergeht, wenn sich sein Zustand ändert.

```css
img {
  width: 50%;
  border: 1px solid black;
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Bei Hover oder Fokus ändern wir den Wert des `dynamic-range-limit` des `<img>` Elements auf `no-limit`, sodass es so hell wie möglich dargestellt wird, wie es Browser und Anzeige ermöglichen.

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
