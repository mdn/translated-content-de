---
title: "`<display-box>` CSS-Typ"
short-title: <display-box>
slug: Web/CSS/Reference/Values/display-box
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Diese Schlüsselwörter definieren, ob ein Element überhaupt Display-Boxen erzeugt.

## Syntax

Gültige `<display-box>` Werte:

- `contents`
  - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der Wert `contents` sich auf "ungewöhnliche Elemente" auswirken sollte — Elemente, die nicht ausschließlich durch CSS-Box-Konzepte wie ersetzbare Elemente gerendert werden. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    _Aufgrund eines Fehlers in den Browsern wird dies derzeit das Element aus dem Accessibility-Baum entfernen — Bildschirmlesegeräte werden den Inhalt nicht berücksichtigen. Weitere Details finden Sie im Abschnitt [Accessibility](#barrierefreiheit) unten._

- `none`
  - : Schaltet die Anzeige eines Elements aus, sodass es keine Auswirkungen auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existieren würde). Alle Nachkommenelemente haben ebenfalls ihre Anzeige ausgeschaltet.
    Um ein Element den Raum einnehmen zu lassen, den es normalerweise einnehmen würde, ohne jedoch tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}} Eigenschaft.

## Barrierefreiheit

Aktuelle Implementierungen in den meisten Browsern werden jedes Element mit einem `display`-Wert von `contents` aus dem [Accessibility-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) entfernen. Dies führt dazu, dass das Element — und in einigen Browserversionen seine Nachkommenelemente — nicht mehr von Bildschirmlesetechnologie angekündigt werden. Dies ist ein fehlerhaftes Verhalten gemäß der [CSSWG Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties).

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

Im ersten Beispiel wird der Absatz mit einer Klasse von secret auf `display: none` gesetzt; die Box und jeglicher Inhalt wird jetzt nicht gerendert.

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

In diesem Beispiel hat das äußere {{htmlelement("div")}} einen 2-Pixel roten Rand und eine Breite von 300px. Es hat jedoch auch `display: contents` angegeben, daher wird dieses `<div>` nicht gerendert, der Rand und die Breite gelten nicht mehr, und das Kindelement wird angezeigt, als ob das Elternelement nie existiert hätte.

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

- [Display: Contents ist kein CSS-Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [Mehr zugängliches Markup mit display: contents](https://hidde.blog/more-accessible-markup-with-display-contents/) von Hidde de Vries (2018)
