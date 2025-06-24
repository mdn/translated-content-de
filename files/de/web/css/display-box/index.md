---
title: <display-box>
slug: Web/CSS/display-box
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Diese Schlüsselwörter definieren, ob ein Element überhaupt Display-Boxen erzeugt.

## Syntax

Gültige `<display-box>` Werte:

- `contents`

  - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3-Spezifikation beschreibt, wie der Wert `contents` sich auf "ungewöhnliche Elemente" auswirken sollte — Elemente, die nicht ausschließlich durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Weitere Informationen finden Sie in [Anhang B: Effekte von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox).

    _Aufgrund eines Bugs entfernen Browser derzeit das Element aus dem Accessibility-Tree — Bildschirmlesegeräte werden den Inhalt nicht wahrnehmen. Weitere Informationen finden Sie im Abschnitt [Barrierefreiheit](#barrierefreiheit) unten._

- `none`
  - : Schaltet die Anzeige eines Elements ab, sodass es keine Auswirkung auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht vorhanden wäre). Alle untergeordneten Elemente werden ebenfalls nicht angezeigt. Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}} Eigenschaft.

## Barrierefreiheit

Aktuelle Implementierungen in den meisten Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Accessibility-Tree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element — und in einigen Browserversionen auch seine Kindelemente — von Bildschirmlesetechnologien nicht mehr angekündigt werden. Dies ist laut der [CSSWG-Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties) ein fehlerhaftes Verhalten.

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem ersten Beispiel wird der Absatz mit der Klasse secret auf `display: none` gesetzt; die Box und der Inhalt werden nun nicht gerendert.

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

In diesem Beispiel hat der äußere {{htmlelement("div")}} einen 2-Pixel roten Rand und eine Breite von 300px. Es ist jedoch auch `display: contents` angegeben, daher wird diese `<div>` nicht gerendert, der Rand und die Breite gelten nicht mehr, und das Kindelement wird angezeigt, als ob das Elternelement nie existiert hätte.

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
- [Mehr zugängliches Markup mit display: contents](https://hidde.blog/more-accessible-markup-with-display-contents/) von Hidde de Vries (2018)
