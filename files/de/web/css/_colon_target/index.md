---
title: :target
slug: Web/CSS/:target
l10n:
  sourceCommit: b460458fa125f4ee252d01466c1390d16ba19215
---

Die **`:target`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt das _Zielelement des Dokuments_ aus. Wenn das Dokument geladen wird, wird das Zielelement mithilfe des [Fragment-Identifiers der URL](/de/docs/Web/URI/Reference/Fragment#fragment) des Dokuments bestimmt.

```css
/* Selects document's target element */
:target {
  border: 2px solid black;
}
```

Zum Beispiel hat die folgende URL einen Fragment-Identifier (gekennzeichnet durch das Zeichen _#_), der das Element mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `setup` als Zielelement des Dokuments markiert:

```url
http://www.example.com/help/#setup
```

Das folgende Element würde durch einen `:target`-Selektor ausgewählt werden, wenn die aktuelle URL der obigen entspricht:

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

Wenn ein HTML-Dokument geladen wird, setzt der Browser sein Zielelement. Das Element wird anhand des Fragment-Identifiers der URL identifiziert. Ohne den Fragment-Identifier hat das Dokument kein Zielelement. Die `:target`-Pseudoklasse ermöglicht es, das Zielelement des Dokuments zu stylen. Das Element könnte fokussiert, hervorgehoben, animiert usw. werden.

Das Zielelement wird beim Laden des Dokuments und bei Aufrufen der Methoden [`history.back()`](/de/docs/Web/API/History/back), [`history.forward()`](/de/docs/Web/API/History/forward) und [`history.go()`](/de/docs/Web/API/History/forward) gesetzt. Es wird jedoch _nicht_ geändert, wenn die Methoden [`history.pushState()`](/de/docs/Web/API/History/pushState) und [`history.replaceState()`](/de/docs/Web/API/History/replaceState) aufgerufen werden.

> [!NOTE]
> Aufgrund [eines möglichen Fehlers in der CSS-Spezifikation](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070/) funktioniert `:target` nicht innerhalb eines [Webkomponenten](/de/docs/Web/API/Web_components), da die [Schattenwurzel](/de/docs/Web/API/ShadowRoot) das Zielelement nicht in den Schattenbaum weiterleitet.

## Beispiele

### Ein Inhaltsverzeichnis

Die `:target`-Pseudoklasse kann verwendet werden, um den Teil einer Seite hervorzuheben, der aus einem Inhaltsverzeichnis verlinkt wurde.

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

- [Verwendung der :target Pseudoklasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
- {{cssxref("::target-text")}} (zum Hervorheben von Textfragmenten)
