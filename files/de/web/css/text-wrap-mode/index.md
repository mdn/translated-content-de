---
title: text-wrap-mode
slug: Web/CSS/text-wrap-mode
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Diese Eigenschaft kann auch über die Kurzschreibweise {{CSSXRef("text-wrap")}} gesetzt und zurückgesetzt werden.

> [!NOTE]
> Der Name dieser Eigenschaft ist ein Platzhalter, bis die CSSWG einen besseren Namen findet.

{{EmbedInteractiveExample("pages/css/text-wrap-mode.html")}}

## Syntax

```css
/* Keyword values */
text-wrap-style: wrap;
text-wrap-style: nowrap;

/* Global values */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

## Werte

Diese Eigenschaft legt fest, ob Zeilen an erzwungenen oder nicht erzwungenen Umbruchmöglichkeiten umbrechen können. Mögliche Werte:

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen, in Sprachen wie Englisch, die Leerzeichentrennzeichen verwenden) über Zeilen hinweg umbrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umbrochen. Er läuft über das enthaltene Element hinaus, anstatt auf eine neue Zeile zu unterbrechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

> [!NOTE]
> Überprüfen Sie die Browser-Kompatibilität für diese Eigenschaft.

### Inhalt umbrechen

Die Standardeinstellung ist das Umbrechen des Inhalts, sodass die `text-wrap-mode`-Eigenschaft nicht erforderlich ist. In diesem Beispiel fließt der Inhalt in die nächste Zeile über, damit er in die Box passt. Die letzte Zeile ist länger als die umgebende Box und läuft über.

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

In diesem Beispiel wird der Inhalt **nicht** in die nächste Zeile überlaufen, damit er in die Box passt, da der Inhalt ausdrücklich angewiesen wurde, nicht mit `text-wrap-mode: nowrap;` umbrochen zu werden. Der Inhalt ist länger als die umgebende Box und läuft über.

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
