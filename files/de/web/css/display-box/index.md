---
title: <display-box>
slug: Web/CSS/display-box
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Diese Schlüsselwörter definieren, ob ein Element überhaupt Display-Boxen generiert.

## Syntax

Gültige `<display-box>` Werte:

- `contents`

  - : Diese Elemente erzeugen selbst keine spezifische Box. Sie werden durch ihre Pseudo-Box und ihre Kinder-Boxen ersetzt. Beachten Sie, dass die CSS Display Level 3 Spezifikation definiert, wie der `contents` Wert "ungewöhnliche Elemente" beeinflussen sollte — Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente. Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für weitere Details.

    _Aufgrund eines Fehlers in Browsern wird das Element momentan aus dem Barrierefreiheitsbaum entfernt — Bildschirmleser erkennen den Inhalt nicht. Weitere Informationen finden Sie im Abschnitt [Barrierefreiheit](#barrierefreiheit) unten._

- `none`
  - : Deaktiviert die Anzeige eines Elements, sodass es keinen Einfluss auf das Layout hat (das Dokument wird so angezeigt, als ob das Element nicht existiert). Alle nachfolgenden Elemente haben ebenfalls ihre Anzeige ausgeschaltet.
    Um ein Element den Raum einnehmen zu lassen, den es normalerweise beanspruchen würde, ohne tatsächlich etwas anzuzeigen, verwenden Sie stattdessen die Eigenschaft {{CSSxRef("visibility")}}.

## Barrierefreiheit

Aktuelle Implementierungen in den meisten Browsern entfernen jedes Element mit einem `display`-Wert von `contents` aus dem [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dadurch wird das Element — und in einigen Browserversionen auch seine nachfolgenden Elemente — nicht mehr von Bildschirmlese-Technologien angekündigt. Dies ist ein falsches Verhalten gemäß der [CSSWG-Spezifikation](https://drafts.csswg.org/css-display/#the-display-properties).

- [Zugänglicheres Markup mit display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formaler Syntax

{{csssyntax}}

## Beispiele

In diesem ersten Beispiel wird der Absatz mit einer Klasse von secret auf `display: none` gesetzt; die Box und jeder Inhalt wird nun nicht gerendert.

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

In diesem Beispiel hat das äußere {{htmlelement("div")}} einen 2-Pixel roten Rand und eine Breite von 300px. Es hat jedoch auch `display: contents` angegeben, daher wird dieses `<div>` nicht gerendert, der Rand und die Breite gelten nicht mehr, und das Kindelement wird angezeigt, als ob das übergeordnete Element nie existiert hätte.

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
- [Zugänglicheres Markup mit display: contents](https://hidde.blog/more-accessible-markup-with-display-contents/) von Hidde de Vries (2018)
