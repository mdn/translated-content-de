---
title: <display-box>
slug: Web/CSS/display-box
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Diese Schlüsselwörter definieren, ob ein Element überhaupt Anzeige-Boxen erzeugt.

## Syntax

Gültige `<display-box>` Werte:

- `contents`

  - : Diese Elemente erzeugen von sich aus keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kind-Boxen ersetzt. Beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der Wert `contents` "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    _Aufgrund eines Bugs in Browsern wird dieses Element derzeit aus dem Zugänglichkeitsbaum entfernt — Screenreader betrachten den Inhalt nicht. Siehe den Abschnitt [Barrierefreiheit](#barrierefreiheit) unten für weitere Details._

- `none`
  - : Schaltet die Anzeige eines Elements aus, sodass es keinen Effekt auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existieren würde). Alle Nachkommen-Elemente haben ebenfalls ihre Anzeige ausgeschaltet.
    Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, jedoch ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die Eigenschaft {{CSSxRef("visibility")}}.

## Barrierefreiheit

Aktuelle Implementierungen in den meisten Browsern entfernen aus dem [Zugänglichkeitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents`. Dies wird dazu führen, dass das Element — und in einigen Browserversionen auch dessen Nachkommenelemente — nicht mehr von Screenreader-Technologie angekündigt werden. Dies ist ein inkorrektes Verhalten gemäß der [CSSWG-Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties).

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem ersten Beispiel wird der Absatz mit der Klasse `secret` auf `display: none` gesetzt; die Box und jeglicher Inhalt werden nun nicht gerendert.

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

In diesem Beispiel hat das äußere {{htmlelement("div")}} einen 2-Pixel roten Rand und eine Breite von 300px. Es hat jedoch auch `display: contents` spezifiziert, daher wird dieses `<div>` nicht gerendert, der Rand und die Breite werden nicht mehr angewendet, und das Kindelement wird angezeigt, als ob das Elternteil nie existiert hätte.

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

- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [Mehr zugängliches Markup mit display: contents — hiddedevries.nl](https://hidde.blog/more-accessible-markup-with-display-contents/)
