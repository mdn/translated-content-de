---
title: <display-box>
slug: Web/CSS/display-box
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Diese Schlüsselwörter definieren, ob ein Element überhaupt Anzeige-Boxen erzeugt.

## Syntax

Gültige `<display-box>` Werte:

- `contents`

  - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und deren Kinder-Boxen ersetzt. Bitte beachten Sie, dass die CSS Display Level 3 Spezifikation beschreibt, wie der `contents` Wert "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Weitere Details finden Sie in [Anhang B: Eﬀekte von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox).

    _Aufgrund eines Bugs in Browsern wird dieses Element derzeit aus dem Zugänglichkeitsbaum entfernt — Bildschirmleseprogramme berücksichtigen nicht, was sich darin befindet. Weitere Einzelheiten finden Sie im Abschnitt [Barrierefreiheit](#barrierefreiheit) unten._

- `none`
  - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existieren würde). Alle Nachfahren-Elemente werden ebenfalls nicht mehr angezeigt.
    Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die Eigenschaft {{CSSxRef("visibility")}}.

## Barrierefreiheit

Aktuelle Implementierungen in den meisten Browsern entfernen aus dem [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display` Wert von `contents`. Dies führt dazu, dass das Element — und in einigen Browserversionen auch seine Nachfahren-Elemente — von Bildschirmlesetechnologien nicht mehr angesagt werden. Dies ist ein inkorrektes Verhalten gemäß der [CSSWG-Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties).

- [Barrierefreieres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

Im ersten Beispiel wird der Absatz mit einer Klasse von secret auf `display: none` gesetzt; die Box und jeglicher Inhalt wird nun nicht mehr gerendert.

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

In diesem Beispiel hat der äußere {{htmlelement("div")}} einen 2-Pixel breiten roten Rand und eine Breite von 300px. Da jedoch auch `display: contents` angegeben ist, wird dieser `<div>` nicht gerendert, der Rahmen und die Breite gelten nicht mehr, und das Kind-Element wird angezeigt, als ob das Elternelement nie existiert hätte.

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
