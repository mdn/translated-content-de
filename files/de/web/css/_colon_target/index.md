---
title: ":target"
slug: Web/CSS/:target
l10n:
  sourceCommit: 5bcc3c7f96984e42dd8bb61ff97b7c5d64dd3e95
---

{{CSSRef}}

Die **`:target`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt das _Zielelement des Dokuments_ aus. Wenn das Dokument geladen wird, wird das Zielelement mit Hilfe des [URL-Fragmentbezeichners](/de/docs/Web/URI/Fragment#fragment) des Dokuments ermittelt.

```css
/* Selects document's target element */
:target {
  border: 2px solid black;
}
```

Zum Beispiel enthält die folgende URL einen Fragmentbezeichner (gekennzeichnet durch das _#_-Zeichen), der das Element mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) von `setup` als Zielelement des Dokuments markiert:

```url
http://www.example.com/help/#setup
```

Das folgende Element würde durch einen `:target`-Selektor ausgewählt, wenn die aktuelle URL der obigen entspricht:

```html
<section id="setup">Installation instructions</section>
```

## Syntax

```css
:target {
  /* ... */
}
```

## Beschreibung

Wenn ein HTML-Dokument geladen wird, legt der Browser sein Zielelement fest. Das Element wird mithilfe des URL-Fragmentbezeichners identifiziert. Ohne den URL-Fragmentbezeichner hat das Dokument kein Zielelement. Die `:target`-Pseudoklasse erlaubt es, das Zielelement des Dokuments zu stylen. Das Element könnte fokussiert, hervorgehoben, animiert usw. werden.

Das Zielelement wird beim Laden des Dokuments sowie bei Aufrufen der Methoden [`history.back()`](/de/docs/Web/API/History/back), [`history.forward()`](/de/docs/Web/API/History/forward) und [`history.go()`](/de/docs/Web/API/History/forward) festgelegt. Es wird jedoch _nicht_ geändert, wenn die Methoden [`history.pushState()`](/de/docs/Web/API/History/pushState) und [`history.replaceState()`](/de/docs/Web/API/History/replaceState) aufgerufen werden.

> [!NOTE]
> Aufgrund [eines möglichen Fehlers in der CSS-Spezifikation](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070/) funktioniert `:target` nicht innerhalb eines [Web-Komponents](/de/docs/Web/API/Web_components), da die [Shadow-Wurzel](/de/docs/Web/API/ShadowRoot) das Zielelement nicht in den Shadow-Baum hinunterreicht.

## Beispiele

### Ein Inhaltsverzeichnis

Die `:target`-Pseudoklasse kann verwendet werden, um den Teil einer Seite hervorzuheben, der von einem Inhaltsverzeichnis aus verlinkt wurde.

#### HTML

```html
<h3>Table of Contents</h3>
<ol>
  <li><a href="#p1">Jump to the first paragraph!</a></li>
  <li><a href="#p2">Jump to the second paragraph!</a></li>
  <li>
    <a href="#nowhere">
      This link goes nowhere, because the target doesn't exist.
    </a>
  </li>
</ol>

<h3>My Fun Article</h3>
<p id="p1">
  You can target <i>this paragraph</i> using a URL fragment. Click on the first
  link above to try out!
</p>
<p id="p2">
  This is <i>another paragraph</i>, also accessible from the second link above.
  Isn't that delightful?
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* Add a pseudo-element inside the target element */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Style italic elements within the target element */
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
