---
title: dynamic-range-limit-mix()
slug: Web/CSS/dynamic-range-limit-mix
l10n:
  sourceCommit: 54ac1367cb817a0079c30d2e36b5cbafc0a01431
---

{{SeeCompatTable}}

Die **`dynamic-range-limit-mix()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein benutzerdefiniertes Maximum für die Leuchtkraftbegrenzung, indem verschiedene {{cssxref("dynamic-range-limit")}} Schlüsselwörter in angegebenen Mengen gemischt werden.

## Syntax

```css
dynamic-range-limit-mix(standard 70%, no-limit 30%);
dynamic-range-limit-mix(no-limit 10%, constrained 20%);
dynamic-range-limit-mix(no-limit 30%, constrained 30%, standard 30%);
dynamic-range-limit-mix(
    no-limit 20%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%
)
```

### Parameter

- {{cssxref("dynamic-range-limit")}} {{cssxref("&lt;percentage>")}}
  - : Ein Paar, bestehend aus einem `dynamic-range-limit` Wert (der auch eine weitere `dynamic-range-limit-mix()` Funktion sein kann) und einem `<percentage>` zwischen `0%` und `100%` (inklusiv). Das `<percentage>` gibt den Anteil eines `dynamic-range-limit` Schlüsselwortwerts in dem benutzerdefinierten Limit an. Die `dynamic-range-limit-mix()` Funktion kann zwei oder mehr dieser Paare als Parameter aufnehmen.

### Rückgabewert

Ein benutzerdefiniertes Maximum für die Leuchtkraft, ausgedrückt als Anzahl an fotografischen Blendenstufen, die höher sind als das HDR-Referenzweiß. Aus Datenschutzgründen wird das tatsächlich berechnete Ergebnis nicht offengelegt.

## Beschreibung

Die {{cssxref("dynamic-range-limit")}} Eigenschaft ermöglicht es Ihnen, die Helligkeit von High Dynamic Range (HDR) Inhalten zu steuern. Die `dynamic-range-limit-mix()` Funktion kann als Wert von `dynamic-range-limit` angegeben werden und ermöglicht es Ihnen, benutzerdefinierte Helligkeitsbegrenzungen zu erstellen, indem Sie Prozentanteile der `dynamic-range-limit` Schlüsselwortwerte mischen.

### Berechnung der Prozentsätze

Wenn die angegebenen Prozentsätze `100%` ergeben, ist das Ergebnis offensichtlich:

```css
/* standard 70%, no-limit 30% */
dynamic-range-limit-mix(standard 70%, no-limit 30%);
```

Wenn die angegebenen Prozentsätze nicht `100%` ergeben, sind die resultierenden Prozentsätze gleich den angegebenen Prozentsätzen, die proportional zueinander ausgedrückt werden, sodass sie insgesamt `100%` ergeben:

```css
/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 20%, constrained 30%);

/* no-limit 20%, constrained 40%, standard 40% */
dynamic-range-limit-mix(no-limit 40%, constrained 80%, standard 80%);
```

Wenn ein `dynamic-range-limit` Schlüsselwortwert mehr als einmal verwendet wird, werden die Prozentsätze für diesen Schlüsselwortwert zusammengezählt, um den Gesamtprozentsatz zu erhalten:

```css
/* constrained 70%, standard 30% */
dynamic-range-limit-mix(constrained 40%, standard 30%, constrained 30%);

/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 10%, constrained 30%, no-limit 10%);
```

Wenn ein angegebener Prozentsatz kleiner als `0%` oder größer als `100%` ist, ist die `dynamic-range-limit-mix()` Funktion – und somit der zugehörige `dynamic-range-limit` Eigenschaftswert – ungültig. Wenn ein Schlüsselwort mehrmals verwendet wird und der kumulative Prozentsatz mehr als `100%` beträgt, ist der Wert gültig und die oben beschriebenen Proportionsregeln greifen.

### Verschachtelung von `dynamic-range-limit-mix()` Funktionen

Sie können `dynamic-range-limit-mix()` Funktionen ineinander verschachteln. Dabei gelten die gleichen Regeln, die zuvor erklärt wurden, und jedes Set von Prozentsätzen wird separat berechnet und dann hinzugefügt. Im folgenden Beispiel:

```css
dynamic-range-limit-mix(
    no-limit 10%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%,
    dynamic-range-limit-mix(constrained 10%, no-limit 30%) 20%
)
```

- Die erste Zeile ergibt `no-limit 10%`.
- Da `25%` und `75%` zusammen `100%` ergeben, ergibt die zweite Zeile `standard 5%` (`25%` von `20%`) und `constrained 15%` (`75%` von `20%`).
- In der dritten Zeile, da `10%` und `30%` nur `40%`, nicht `100%` ergeben, normalisieren wir beide als Anteile von `40%`: 10/40=`25%` und 30/40=`75%`. Dies ergibt `constrained 5%` (`25%` von `20%`) und `no-limit 15%` (`75%` von `20%`).

Diese Prozentsätze ergeben zusammen `50%`, sodass sie verdoppelt werden müssen, um die endgültigen Prozentsätze zu erreichen. Der berechnete Wert ist daher:

```css
dynamic-range-limit-mix(standard 10%, constrained 40%, no-limit 50%)
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

Betrachten Sie ein {{htmlelement("img")}} Element, das verwendet wird, um ein HDR-Bild auf einer Webseite einzubinden:

```html
<img src="my-hdr-image.jpg" alt="my image" />
```

Auf HDR-Displays könnten die hellsten Bereiche des Bildes störend und unangenehm anzusehen sein. Um dieses Problem zu lösen, könnten wir die `dynamic-range-limit` Eigenschaft des Bildes auf `dynamic-range-limit-mix(standard 70%, no-limit 30%)` setzen, was ihm ein Maximum an Leuchtkraft verleiht, das nur geringfügig heller als das HDR-Referenzweiß ist:

```css
img {
  dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);
}
```

Sie können die `dynamic-range-limit` Eigenschaft in unserer [Demo zur dynamic-range-limit Eigenschaft](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit) in Aktion sehen, die ein HDR-Bild enthält, das beim Hover und Fokus den `dynamic-range-limit` Wert ändert. [Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/dynamic-range-limit/) auf einem Display, das in der Lage ist, HDR-Farben darzustellen, und probieren Sie es aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("dynamic-range-limit")}}
