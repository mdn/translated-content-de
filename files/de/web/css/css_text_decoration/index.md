---
title: CSS-Textdekoration
slug: Web/CSS/CSS_text_decoration
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

Das **CSS-Textdekoration**-Modul definiert Funktionen im Zusammenhang mit Textdekorationen, wie Unterstreichungen, Textschatten und Betonungszeichen.

## Referenz

### Eigenschaften

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-skip-ink")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-shadow")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("text-underline-position")}}

## Beispiele

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">Dieser Text hat eine Linie darunter.</p>
<p class="over">Dieser Text hat eine Linie darüber.</p>
<p class="line">Dieser Text hat eine Linie, die ihn durchkreuzt.</p>
<p>
  Dieser <a class="plain" href="#">Link wird nicht unterstrichen</a>, wie es
  normalerweise bei Links der Fall ist. Seien Sie vorsichtig, wenn Sie die
  Textdekoration bei Ankern entfernen, da Benutzer oft auf die Unterstreichung
  als Hinweis für Hyperlinks angewiesen sind.
</p>
<p class="underover">Dieser Text hat Linien über <em>und</em> unter ihm.</p>
<p class="thick">
  Dieser Text hat eine wirklich dicke lila Unterstreichung in unterstützenden
  Browsern.
</p>
<p class="blink">
  Dieser Text könnte für Sie blinken, je nachdem, welchen Browser Sie verwenden.
</p>
```

{{EmbedLiveSample('Examples','auto','320')}}

## Spezifikationen

{{Specifications}}
