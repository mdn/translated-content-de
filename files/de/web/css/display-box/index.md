---
title: <display-box>
slug: Web/CSS/display-box
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Diese Schlüsselwörter definieren, ob ein Element überhaupt Darstellungsboxen erzeugt.

## Syntax

Gültige `<display-box>` Werte:

- `contents`

  - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und die Boxen ihrer Kinder ersetzt. Beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie sich der Wert `contents` auf „ungewöhnliche Elemente“ auswirken soll – Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie zum Beispiel ersetzte Elemente. Sehen Sie sich [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details an.

    _Aufgrund eines Fehlers in Browsern wird das Element derzeit aus dem Barrierefreiheit-Baum entfernt — Bildschirmlesegeräte betrachten nicht, was sich darin befindet. Siehe den Abschnitt [Barrierefreiheit](#barrierefreiheit) unten für weitere Details._

- `none`
  - : Schaltet die Anzeige eines Elements aus, sodass es sich nicht auf das Layout auswirkt (das Dokument wird gerendert, als ob das Element nicht existierte). Auch alle nachfolgenden Elemente werden ausgeschaltet.
    Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}} Eigenschaft.

## Barrierefreiheit

Aktuelle Implementierungen in den meisten Browsern entfernen jedes Element mit einem `display` Wert von `contents` aus dem [Barrierefreiheit-Baum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element – und in einigen Browserversionen auch seine nachfolgenden Elemente – nicht mehr von Bildschirmlesetechnologien angesagt werden. Dies ist ein fehlerhaftes Verhalten laut der [CSSWG-Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties).

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

Im ersten Beispiel wird der Absatz mit einer Klasse von secret auf `display: none` gesetzt; die Box und alle Inhalte werden jetzt nicht gerendert.

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

In diesem Beispiel hat das äußere {{htmlelement("div")}} einen 2-Pixel roten Rahmen und eine Breite von 300px. Es hat jedoch auch `display: contents` angegeben, daher wird dieses `<div>` nicht gerendert, der Rahmen und die Breite gelten nicht mehr, und das Kindelement wird angezeigt, als hätte der Elternteil nie existiert.

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
- [Mehr zugängliches Markup mit display: contents — hiddedevries.nl](https://hidde.blog/more-accessible-markup-with-display-contents/)
