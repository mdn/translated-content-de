---
title: <display-box>
slug: Web/CSS/display-box
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Diese Schlüsselwörter definieren, ob ein Element überhaupt Darstellungsboxen erzeugt.

## Syntax

Gültige `<display-box>` Werte:

- `contents`
  - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinderboxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation festlegt, wie der Wert `contents` "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie z.B. ersetzte Elemente. Weitere Details finden Sie in [Anhang B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox).

    _Aufgrund eines Fehlers in Browsern wird dies derzeit das Element aus dem Accessibility-Baum entfernen — Screenreader werden nicht auf den Inhalt zugreifen. Weitere Informationen finden Sie im Abschnitt [Barrierefreiheit](#barrierefreiheit) unten._

- `none`
  - : Schaltet die Anzeige eines Elements ab, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existiert). Alle untergeordneten Elemente werden ebenfalls nicht angezeigt.
    Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, aber ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}} Eigenschaft.

## Barrierefreiheit

Aktuelle Implementierungen in den meisten Browsern entfernen aus dem [Accessibility-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display`-Wert von `contents`. Dies führt dazu, dass das Element — und in einigen Browserversionen auch seine Kindelemente — nicht mehr von Screenreadern angekündigt werden. Dies ist ein falsches Verhalten gemäß der [CSSWG-Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties).

- [Barrierefreieres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem ersten Beispiel wird der Absatz mit der Klasse secret auf `display: none` gesetzt; die Box und jeglicher Inhalt werden nun nicht gerendert.

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

In diesem Beispiel hat das äußere {{htmlelement("div")}} einen 2-Pixel roten Rand und eine Breite von 300px. Da jedoch auch `display: contents` angegeben ist, wird dieses `<div>` nicht gerendert, der Rand und die Breite entfallen, und das Kindelement wird angezeigt, als hätte der Elternteil nie existiert.

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
- [Barrierefreieres Markup mit display: contents](https://hidde.blog/more-accessible-markup-with-display-contents/) von Hidde de Vries (2018)
