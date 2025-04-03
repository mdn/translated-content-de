---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements zusammengeschrumpft wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} können zusammen mit der Kurzform-Eigenschaft {{CSSxRef("white-space")}} deklariert werden.

## Syntax

```css
/* Keyword values */
white-space-collapse: collapse;
white-space-collapse: preserve;
white-space-collapse: preserve-breaks;
white-space-collapse: preserve-spaces;
white-space-collapse: break-spaces;

/* Global values */
white-space-collapse: inherit;
white-space-collapse: initial;
white-space-collapse: revert;
white-space-collapse: revert-layer;
white-space-collapse: unset;
```

Die Eigenschaft `white-space-collapse` wird als ein einzelnes Schlüsselwort aus der unten stehenden Wertliste angegeben.

### Werte

- `collapse`
  - : Weiße Leerraum-Sequenzen werden [zusammengeschrumpft](#schrumpfen_von_leerraum).
- `preserve`
  - : Weiße Leerraum-Sequenzen und Segmentbruchzeichen werden beibehalten.
- `preserve-breaks`
  - : Weiße Leerraum-Sequenzen werden zusammengeschrumpft, während Segmentbruchzeichen beibehalten werden.
- `preserve-spaces`
  - : Weiße Leerraum-Sequenzen werden beibehalten, während Tabs und Segmentbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch zu `preserve`, außer dass:
    - Jede beibehaltene weiße Leerraum-Sequenz nimmt immer Platz ein, auch am Ende der Zeile.
    - Eine Zeilenumbruchmöglichkeit existiert nach jedem beibehaltenen Leerzeichen, auch zwischen Leerzeichen.
    - Beibehaltene Leerzeichen nehmen Platz ein und hängen nicht, wodurch die intrinsischen Größen der Box beeinflusst werden ({{cssxref("min-content")}}-Größe und {{cssxref("max-content")}}-Größe).

> **Hinweis:** _Segmentbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die dazu führen, dass der Text auf neue Zeilen umbricht.

> [!NOTE]
> Das [CSS-Text](/de/docs/Web/CSS/CSS_text)-Modul definiert einen `discard`-Wert für die `white-space-collapse`-Eigenschaft, um alle Leerzeichen im Element zu verwerfen. Dieser wird jedoch von keinem Browser unterstützt.

## Schrumpfen von Leerraum

Benutzeragenten behandeln das Schrumpfen von Leerraum wie folgt:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentbrüche zusammengeschrumpft werden sollen:
  - Mehrfachfolgen von Segmentbrüchen werden auf einen einzelnen Segmentbruch reduziert.
  - Sie werden in Leerzeichen umgewandelt, wenn es sich um Sprachen handelt, die Wörter mit Leerzeichen trennen (wie Englisch), oder vollständig entfernt in Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch).
- Wenn Leerzeichen zusammengeschrumpft werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentbrüchen werden entfernt.
  - Mehrfachfolgen von Leerzeichen werden in ein einzelnes Leerzeichen umgewandelt oder "zusammengeschrumpft".
- Wenn Leerzeichen beibehalten werden, werden Mehrfachfolgen von Leerzeichen als nicht umbrechend behandelt, es sei denn, sie brechen am Ende jeder Sequenz weich um – d.h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Falle des `break-spaces`-Wertes könnte jedoch ein weicher Umbruch nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Default behavior;
  all   whitespace   is   collapsed
  in    the          heading       .</h2>

<h2 class="preserve">In this case
  all   whitespace   is   preserved
  in    the          heading       .</h2>

<h2 class="preserve-breaks">In this case only
  the   line breaks  are  preserved
  in    the          heading       .</h2>

<h2 class="preserve-spaces">In this case only
  the   spaces       are  preserved
  in    the          heading       .</h2>
```
<!-- prettier-ignore-end -->

### CSS

```css
.collapse {
  white-space-collapse: collapse;
}

.preserve {
  white-space-collapse: preserve;
}

.preserve-breaks {
  white-space-collapse: preserve-breaks;
}

.preserve-spaces {
  white-space-collapse: preserve-spaces;
}

h2 {
  font-size: 1.6rem;
  font-family: monospace;
  border-bottom: 1px dotted #ccc;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzform für `white-space-collapse` und {{CSSxRef("text-wrap-mode")}}: Die {{CSSxRef("white-space")}}-Eigenschaft.
- [CSS-Textmodul](/de/docs/Web/CSS/CSS_text)
