---
title: dynamic-range-limit-mix()
slug: Web/CSS/dynamic-range-limit-mix
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{SeeCompatTable}}

Die **`dynamic-range-limit-mix()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erstellt ein benutzerdefiniertes maximales Luminanzlimit, indem sie verschiedene {{cssxref("dynamic-range-limit")}} Schlagwörter in angegebenen Mengen mischt.

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
  - : Ein Paar bestehend aus einem `dynamic-range-limit`-Wert (der eine andere `dynamic-range-limit-mix()`-Funktion sein kann) und einem `<percentage>` zwischen `0%` und `100%` (einschließlich). Das `<percentage>` gibt den Anteil eines `dynamic-range-limit`-Schlüsselwortwerts im benutzerdefinierten Limit an. Die `dynamic-range-limit-mix()`-Funktion kann zwei oder mehr dieser Paare als Parameter aufnehmen.

### Rückgabewert

Ein benutzerdefiniertes maximales Luminanzlimit, ausgedrückt als eine Anzahl von fotografischen Blendenstufen über dem HDR-Referenzweiß. Aus Datenschutzgründen wird das tatsächlich berechnete Ergebnis nicht offengelegt.

## Beschreibung

Die Eigenschaft {{cssxref("dynamic-range-limit")}} ermöglicht es Ihnen, die Helligkeit von High Dynamic Range (HDR)-Inhalten zu kontrollieren. Die `dynamic-range-limit-mix()`-Funktion kann als Wert von `dynamic-range-limit` bereitgestellt werden und ermöglicht es Ihnen, benutzerdefinierte Helligkeitslimits zu erstellen, indem Prozentsätze der `dynamic-range-limit`-Schlüsselwortwerte gemischt werden.

### Berechnung der Prozentsätze

Wenn die angegebenen Prozentsätze `100%` ergeben, ist das Ergebnis offensichtlich:

```css
/* standard 70%, no-limit 30% */
dynamic-range-limit-mix(standard 70%, no-limit 30%);
```

Wenn die angegebenen Prozentsätze nicht `100%` ergeben, entsprechen die resultierenden Prozentsätze den angegebenen Prozentsätzen, die proportional zueinander ausgedrückt werden, sodass die Summe `100%` ergibt:

```css
/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 20%, constrained 30%);

/* no-limit 20%, constrained 40%, standard 40% */
dynamic-range-limit-mix(no-limit 40%, constrained 80%, standard 80%);
```

Wenn ein `dynamic-range-limit`-Schlüsselwortwert mehrmals verwendet wird, werden die Prozentsätze für diesen Schlüsselwortwert addiert, um den Gesamtprozentsatz zu erhalten:

```css
/* constrained 70%, standard 30% */
dynamic-range-limit-mix(constrained 40%, standard 30%, constrained 30%);

/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 10%, constrained 30%, no-limit 10%);
```

Wenn ein angegebener Prozentsatz weniger als `0%` oder mehr als `100%` beträgt, ist die `dynamic-range-limit-mix()`-Funktion - und damit der zugehörige Wert der `dynamic-range-limit`-Eigenschaft - ungültig. Wenn ein Schlüsselwort mehrmals verwendet wird und der kumulierte Prozentsatz mehr als `100%` beträgt, ist der Wert gültig, und die oben beschriebenen Verhältnisse werden angewendet.

### Verschachteln von `dynamic-range-limit-mix()`-Funktionen

Sie können `dynamic-range-limit-mix()`-Funktionen ineinander verschachteln. Wenn Sie dies tun, gelten die zuvor erläuterten Regeln, und jeder Satz von Prozentsätzen wird separat berechnet und dann hinzugefügt. Im folgenden Beispiel:

```css
dynamic-range-limit-mix(
    no-limit 10%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%,
    dynamic-range-limit-mix(constrained 10%, no-limit 30%) 20%
)
```

- Die erste Zeile ergibt `no-limit 10%`.
- Da `25%` und `75%` zusammen `100%` ergeben, ergibt die zweite Zeile `standard 5%` (`25%` von `20%`) und `constrained 15%` (`75%` von `20%`).
- In der dritten Zeile, da `10%` und `30%` nur `40%` ergeben, nicht `100%`, normalisieren wir beide als Anteile von `40%`: 10/40 = `25%` und 30/40 = `75%`. Dies ergibt `constrained 5%` (`25%` von `20%`) und `no-limit 15%` (`75%` von `20%`).

Die Addition dieser Werte ergibt die Rohprozentsätze:

```css
dynamic-range-limit-mix(standard 5%, constrained 20%, no-limit 25%)
```

Die obigen Prozentsätze ergeben zusammen `50%`, daher müssen sie verdoppelt werden, um die endgültigen Prozentsätze zu erhalten. Der berechnete Wert ist daher:

```css
dynamic-range-limit-mix(standard 10%, constrained 40%, no-limit 50%)
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Nutzung

Betrachten Sie ein {{htmlelement("img")}}-Element, das verwendet wird, um ein HDR-Bild auf einer Webseite einzubetten:

```html
<img src="my-hdr-image.jpg" alt="my image" />
```

Auf HDR-Displays könnten die hellsten Bereiche des Bildes als unangenehm und störend empfunden werden. Um dieses Problem zu lösen, könnten wir die Eigenschaft `dynamic-range-limit` des Bildes auf `dynamic-range-limit-mix(standard 70%, no-limit 30%)` setzen, was ihm ein maximales Luminanzlimit von nur etwas heller als HDR-Referenzweiß gibt:

```css
img {
  dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);
}
```

Sie können die `dynamic-range-limit`-Eigenschaft in unserer [dynamic-range-limit-Eigenschaft Demonstration](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit) in Aktion sehen, die ein HDR-Bild enthält, das beim Überfahren und Fokussieren den `dynamic-range-limit`-Wert ändert. [Sehen Sie das Beispiel live](https://mdn.github.io/dom-examples/dynamic-range-limit/) auf einem Display, das HDR-Farben anzeigen kann, und probieren Sie es aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("dynamic-range-limit")}}
