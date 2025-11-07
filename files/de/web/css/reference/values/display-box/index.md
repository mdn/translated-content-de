---
title: <display-box>
slug: Web/CSS/Reference/Values/display-box
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Diese Schlüsselwörter definieren, ob ein Element überhaupt Anzeige-Boxen erzeugt.

## Syntax

Gültige `<display-box>`-Werte:

- `contents`
  - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudobox und deren Kindboxen ersetzt. Beachten Sie bitte, dass die CSS Display Level 3-Spezifikation definiert, wie der Wert `contents` "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Boxkonzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    _Aufgrund eines Fehlers in Browsern wird das Element derzeit aus dem Barrierefreiheitsbaum entfernt — Screenreader werden den Inhalt nicht erkennen. Siehe den Abschnitt [Barrierefreiheit](#accessibility) unten für weitere Details._

- `none`
  - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existiert). Alle Nachfahren-Elemente werden ebenfalls nicht angezeigt.
    Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

## Accessibility

Derzeitige Implementierungen in den meisten Browsern werden aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents` entfernen. Dies führt dazu, dass das Element — und in einigen Browserversionen auch seine Nachfahr-Elemente — nicht mehr von Screenreader-Technologie angekündigt werden. Dies ist ein inkorrektes Verhalten gemäß der [CSSWG-Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties).

- [Barrierefreiere Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Ist Kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

Im ersten Beispiel wird der Absatz mit der Klasse secret auf `display: none` gesetzt; die Box und jeder Inhalt wird nun nicht gerendert.

### display: none

#### HTML

```html
<p>Visible text</p>
<p class="secret">Invisible text</p>
```

#### CSS

```css
p.secret {
  display: none;
}
```

#### Ergebnis

{{EmbedLiveSample("display_none", "100%", 60)}}

### display: contents

In diesem Beispiel hat das äußere {{htmlelement("div")}} einen 2-Pixel roten Rand und eine Breite von 300px. Da es jedoch auch `display: contents` angegeben hat, wird dieses `<div>` nicht gerendert, der Rand und die Breite gelten nicht mehr, und das Kindelement wird angezeigt, als ob das übergeordnete Element nie existiert hätte.

#### HTML

```html
<div class="outer">
  <div>Inner div.</div>
</div>
```

#### CSS

```css
.outer {
  border: 2px solid red;
  width: 300px;
  display: contents;
}

.outer > div {
  border: 1px solid green;
}
```

#### Ergebnis

{{EmbedLiveSample("display_contents", 300, 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Display: Contents Ist Kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [Barrierefreiere Markup mit display: contents](https://hidde.blog/more-accessible-markup-with-display-contents/) von Hidde de Vries (2018)
