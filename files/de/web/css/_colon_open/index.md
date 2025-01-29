---
title: ":open"
slug: Web/CSS/:open
l10n:
  sourceCommit: 284fb56ed77bac755053d141d898d48d948548b0
---

{{CSSRef}}

Die CSS-**`:open`**-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente im offenen Zustand. Sie funktioniert nur bei Elementen, die sowohl einen offenen als auch einen geschlossenen Zustand haben. Sie passt auf {{HTMLElement("details")}} und {{HTMLElement("dialog")}}, wenn diese sich im offenen Zustand befinden, und auf {{HTMLElement("select")}} und {{HTMLElement("input")}}, wenn sie in einem Modus sind, bei dem ein Auswahlfenster existiert und dieses angezeigt wird.

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
