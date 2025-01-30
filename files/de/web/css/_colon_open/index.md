---
title: ":open"
slug: Web/CSS/:open
l10n:
  sourceCommit: 62a6f2dbd99b39212f4c4c12aa2a6d499e447f46
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente im offenen Zustand. Sie funktioniert nur bei Elementen, die sowohl offene als auch geschlossene Zustände haben. Sie passt zu {{HTMLElement("details")}} und {{HTMLElement("dialog")}}, wenn diese im offenen Zustand sind, und passt zu {{HTMLElement("select")}} und {{HTMLElement("input")}}, wenn sie sich in Modi befinden, in denen ein Picker vorhanden ist und der Picker angezeigt wird.

## Syntax

```css
:open {
  /* ... */
}
```

## Beispiele

Dieses Beispiel zeigt einige der HTML-Elemente, die einen offenen Zustand haben.

### CSS

```css
details:open > summary {
  background-color: pink;
}

:is(select, input):open {
  background-color: pink;
}
```

```css hidden
@supports not selector(:open) {
  body::before {
    content: "Your browser doesn't support :open selector.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

### HTML

```html
<details>
  <summary>Details</summary>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar dapibus
  lacus, sit amet finibus lectus mollis eu. Nullam quis orci dictum, porta lacus
  et, cursus nunc. Aenean pulvinar imperdiet neque fermentum facilisis. Nulla
  facilisi. Curabitur vitae sapien ut nunc pulvinar semper vitae vitae nisi.
</details>
<hr />

<label for="pet-select">Choose a pet:</label>
<select id="pet-select">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
</select>
<hr />

<label for="start">Start date:</label>
<input type="date" id="start" />
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":modal")}}
