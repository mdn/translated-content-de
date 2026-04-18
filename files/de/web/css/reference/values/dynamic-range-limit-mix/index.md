---
title: "`dynamic-range-limit-mix()` CSS-Funktion"
short-title: dynamic-range-limit-mix()
slug: Web/CSS/Reference/Values/dynamic-range-limit-mix
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

Die **`dynamic-range-limit-mix()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein benutzerdefiniertes maximales Leuchtkraftlimit, indem verschiedene {{cssxref("dynamic-range-limit")}} Schlüsselwörter in angegebenen Mengen gemischt werden.

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
  - : Ein Paar aus einem `dynamic-range-limit` Wert (der eine weitere `dynamic-range-limit-mix()` Funktion sein kann) und einem `<percentage>` zwischen `0%` und `100%` (einschließlich). Das `<percentage>` gibt den Anteil eines `dynamic-range-limit` Schlüsselwortwerts im benutzerdefinierten Limit an. Die `dynamic-range-limit-mix()` Funktion kann zwei oder mehr solcher Paare als Parameter aufnehmen.

### Rückgabewert

Ein benutzerdefiniertes maximales Leuchtkraftlimit, ausgedrückt als Anzahl fotografischer Stopps höher als das HDR-Referenzweiß. Aus Datenschutzgründen wird das tatsächlich berechnete Ergebnis nicht offengelegt.

## Beschreibung

Die {{cssxref("dynamic-range-limit")}} Eigenschaft ermöglicht es Ihnen, die Helligkeit von High Dynamic Range (HDR) Inhalten zu steuern. Die `dynamic-range-limit-mix()` Funktion kann als Wert von `dynamic-range-limit` angegeben werden und ermöglicht es Ihnen, benutzerdefinierte Helligkeitslimits zu erstellen, indem Prozentsätze der `dynamic-range-limit` Schlüsselwortwerte gemischt werden.

### Berechnung der Prozentsätze

Wenn die angegebenen Prozentsätze `100%` ergeben, ist das Ergebnis offensichtlich:

```css
/* standard 70%, no-limit 30% */
dynamic-range-limit-mix(standard 70%, no-limit 30%);
```

Wenn die angegebenen Prozentsätze nicht `100%` ergeben, entsprechen die resultierenden Prozentsätze den angegebenen Prozentsätzen, die im Verhältnis zueinander ausgedrückt werden, sodass die Gesamtsumme `100%` ergibt:

```css
/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 20%, constrained 30%);

/* no-limit 20%, constrained 40%, standard 40% */
dynamic-range-limit-mix(no-limit 40%, constrained 80%, standard 80%);
```

Wenn ein `dynamic-range-limit` Schlüsselwortwert mehrmals verwendet wird, werden die Prozentsätze für diesen Schlüsselwortwert addiert, um den Gesamtprozentsatz zu erhalten:

```css
/* constrained 70%, standard 30% */
dynamic-range-limit-mix(constrained 40%, standard 30%, constrained 30%);

/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 10%, constrained 30%, no-limit 10%);
```

Wenn ein angegebener Prozentsatz kleiner als `0%` oder größer als `100%` ist, ist die `dynamic-range-limit-mix()` Funktion – und damit der zugehörige `dynamic-range-limit` Eigenschaftswert – ungültig. Wenn ein Schlüsselwort mehrmals verwendet wird und der kumulative Prozentsatz mehr als `100%` beträgt, ist der Wert gültig, und die oben beschriebenen Verhältnisregeln kommen zur Anwendung.

### Verschachtelung von `dynamic-range-limit-mix()` Funktionen

Sie können `dynamic-range-limit-mix()` Funktionen ineinander verschachteln. Dabei gelten die gleichen Regeln wie zuvor erläutert, und jede Menge Prozentsätze wird separat berechnet und dann addiert. Im folgenden Beispiel:

```css
dynamic-range-limit-mix(
    no-limit 10%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%,
    dynamic-range-limit-mix(constrained 10%, no-limit 30%) 20%
)
```

- Die erste Zeile ergibt `no-limit 10%`.
- Da `25%` und `75%` zusammen `100%` ergeben, ergibt die zweite Zeile `standard 5%` (`25%` von `20%`) und `constrained 15%` (`75%` von `20%`).
- In der dritten Zeile, weil `10%` und `30%` nur `40%` und nicht `100%` ergeben, normalisieren wir beide als Anteile von `40%`: 10/40 = `25%` und 30/40 = `75%`. Das ergibt uns `constrained 5%` (`25%` von `20%`) und `no-limit 15%` (`75%` von `20%`).

Diese aufaddiert, um die Rohprozentsätze zu erhalten, ergibt:

```css
dynamic-range-limit-mix(standard 5%, constrained 20%, no-limit 25%)
```

Die oben genannten Prozentsätze ergeben `50%`, daher müssen sie verdoppelt werden, um die endgültigen Prozentsätze zu erhalten. Der berechnete Wert ist daher:

```css
dynamic-range-limit-mix(standard 10%, constrained 40%, no-limit 50%)
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

Betrachten Sie ein {{htmlelement("img")}} Element, das verwendet wird, um ein HDR-Bild auf einer Webseite einzubetten:

```html
<img src="my-hdr-image.jpg" alt="my image" />
```

Auf HDR-Bildschirmen könnten die hellsten Bereiche des Bildes als störend und unangenehm empfunden werden. Um dieses Problem zu lösen, könnten wir die `dynamic-range-limit` Eigenschaft des Bildes auf `dynamic-range-limit-mix(standard 70%, no-limit 30%)` setzen, was ihm ein maximales Leuchtkraftlimit gibt, das nur leicht heller als das HDR-Referenzweiß ist:

```css
img {
  dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);
}
```

Sie können die `dynamic-range-limit` Eigenschaft in unserem [dynamic-range-limit Eigenschafts-Demo](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit) in Aktion sehen, das ein HDR-Bild enthält, das bei Hover und Fokussierung den `dynamic-range-limit` Wert überblendet. [Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/dynamic-range-limit/) auf einem Display, das in der Lage ist, HDR-Farben anzuzeigen, und probieren Sie es aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("dynamic-range-limit")}}
