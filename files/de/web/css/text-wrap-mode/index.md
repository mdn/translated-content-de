---
title: text-wrap-mode
slug: Web/CSS/text-wrap-mode
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Text in einem Element umgebrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch durch die Verwendung der {{CSSXRef("text-wrap")}} Kurzform gesetzt und zurückgesetzt werden.

> [!NOTE]
> Der Name dieser Eigenschaft ist ein Platzhalter, solange das CSSWG einen besseren Namen findet.

{{EmbedInteractiveExample("pages/css/text-wrap-mode.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
text-wrap-style: wrap;
text-wrap-style: nowrap;

/* Globale Werte */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

## Werte

Diese Eigenschaft legt fest, ob Zeilen bei nicht erzwungenen weichen Umbruchmöglichkeiten umbrochen werden dürfen. Mögliche Werte:

- `wrap`
  - : Text wird bei geeigneten Zeichen (z.B. Leerzeichen, in Sprachen wie Englisch, die Leerzeichentrenner verwenden) umgebrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umgebrochen. Er wird über sein enthaltendes Element hinaus überlaufen, anstatt in eine neue Zeile zu brechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

> [!NOTE]
> Überprüfen Sie die Browserunterstützung für diese Eigenschaft.

### Inhalt umbrechen

Die Standardeinstellung ist, den Inhalt so umzubrechen, dass die `text-wrap-mode` Eigenschaft nicht erforderlich ist. In diesem Beispiel wird der Inhalt in die nächste Zeile übergehen, damit er in die Box passt, die letzte Zeile ist länger als die enthaltende Box und fließt über.

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: wrap;
}
```

#### Ergebnis

{{EmbedLiveSample("wrapping_content", "100%", 250)}}

### Inhalt nicht umbrechen

In diesem Beispiel wird der Inhalt **nicht** in die nächste Zeile übergehen, damit er in die Box passt, da der Inhalt ausdrücklich angewiesen wurde, nicht mit `text-wrap-mode: nowrap;` umbrochen zu werden, der Inhalt ist länger als die enthaltende Box und fließt über.

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: nowrap;
}
```

#### Ergebnis

{{EmbedLiveSample("nowrapping_content", "100%",100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-style")}}
