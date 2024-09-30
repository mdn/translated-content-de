---
title: <display-box>
slug: Web/CSS/display-box
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Diese Schlüsselwörter definieren, ob ein Element überhaupt Anzeige-Boxen generiert.

## Syntax

Gültige `<display-box>` Werte:

- `contents`

  - : Diese Elemente erzeugen nicht selbst eine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kind-Boxen ersetzt. Beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der Wert `contents` "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht ausschließlich durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    _Aufgrund eines Fehlers in Browsern wird das Element derzeit aus dem Accessibility-Baum entfernt — Screenreader betrachten nicht, was sich darin befindet. Weitere Details finden Sie im Abschnitt [Barrierefreiheit](#barrierefreiheit) unten._

- `none`
  - : Schaltet die Anzeige eines Elements aus, sodass es keinen Einfluss auf das Layout hat (das Dokument wird gerendert, als ob das Element nicht existieren würde). Alle Nachfahr-Elemente haben ebenfalls ihre Anzeige ausgeschaltet.
    Um ein Element den Platz einnehmen zu lassen, den es normalerweise einnehmen würde, ohne tatsächlich etwas zu rendern, verwenden Sie stattdessen die {{CSSxRef("visibility")}}-Eigenschaft.

## Barrierefreiheit

Aktuelle Implementierungen in den meisten Browsern entfernen aus dem [Accessibility-Baum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) jedes Element mit einem `display` Wert von `contents`. Dies führt dazu, dass das Element — und in einigen Browserversionen seine Nachfahr-Elemente — von Screenreader-Technologie nicht mehr angekündigt wird. Dies ist ein inkorrektes Verhalten gemäß der [CSSWG Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties).

- [Mehr zugängliches Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem ersten Beispiel wird der Absatz mit der Klasse secret auf `display: none` gesetzt; die Box und der gesamte Inhalt werden jetzt nicht mehr gerendert.

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

In diesem Beispiel hat das äußere {{htmlelement("div")}} einen 2-Pixel roten Rand und eine Breite von 300px. Da es jedoch auch `display: contents` spezifiziert hat, wird dieses `<div>` nicht gerendert, der Rand und die Breite gelten nicht mehr, und das Kindelement wird angezeigt, als ob der übergeordnete nie existiert hätte.

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
