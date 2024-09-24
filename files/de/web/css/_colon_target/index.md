---
title: ":target"
slug: Web/CSS/:target
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`:target`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein einzigartiges Element (das _Zielelement_) mit einer [`id`](/de/docs/Web/HTML/Global_attributes#id), die dem Fragment der URL entspricht.

```css
/* Wählt ein Element mit einer ID aus, die dem Fragment der aktuellen URL entspricht */
:target {
  border: 2px solid black;
}
```

Zum Beispiel hat die folgende URL ein Fragment (gekennzeichnet durch das _#_-Zeichen), das auf ein Element namens `section2` verweist:

```url
http://www.example.com/index.html#section2
```

Das folgende Element würde von einem `:target`-Selektor ausgewählt werden, wenn die aktuelle URL der obigen entspricht:

```html
<section id="section2">Beispiel</section>
```

## Syntax

```css
:target {
  /* ... */
}
```

> [!NOTE]
> Aufgrund [eines möglichen Fehlers in der CSS-Spezifikation](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070/) funktioniert `:target` nicht innerhalb eines [Web-Komponenten](/de/docs/Web/API/Web_components), da die [Shadow-Root](/de/docs/Web/API/ShadowRoot) das Zielelement nicht in den Shadow-Baum überträgt.

## Beispiele

### Ein Inhaltsverzeichnis

Die `:target`-Pseudoklasse kann verwendet werden, um den Teil einer Seite hervorzuheben, auf den aus einem Inhaltsverzeichnis verlinkt wurde.

#### HTML

```html
<h3>Inhaltsverzeichnis</h3>
<ol>
  <li><a href="#p1">Zum ersten Absatz springen!</a></li>
  <li><a href="#p2">Zum zweiten Absatz springen!</a></li>
  <li>
    <a href="#nowhere">
      Dieser Link führt nirgendwohin, da das Ziel nicht existiert.
    </a>
  </li>
</ol>

<h3>Mein lustiger Artikel</h3>
<p id="p1">
  Sie können auf diesen <i>Absatz</i> mit einem URL-Fragment zielen. Klicken Sie oben auf den Link, um es auszuprobieren!
</p>
<p id="p2">
  Dies ist <i>ein weiterer Absatz</i>, ebenfalls über die obigen Links zugänglich. Ist das nicht erfreulich?
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* Fügen Sie ein Pseudoelement innerhalb des Zielelements hinzu */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Stil für kursiv gedruckte Elemente innerhalb des Zielelements */
p:target i {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('A_table_of_contents', 500, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der :target-Pseudoklasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
