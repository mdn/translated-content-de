---
title: "::-webkit-meter-bar"
slug: Web/CSS/::-webkit-meter-bar
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}{{Non-standard_header}}{{deprecated_header}}

Das **`::-webkit-meter-bar`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Glossary/Pseudo-element) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), die den Hintergrund eines {{HTMLElement("meter")}}-Elements darstellt. Es wird verwendet, um Stile auf den Container eines Messgeräts anzuwenden.

## Syntax

```css
::-webkit-meter-bar {
  /* ... */
}
```

## Spezifikationen

Kein Bestandteil eines Standards.

## Beispiele

### HTML

```html
Normal: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Gestylt: &nbsp;&nbsp;<meter id="styled" min="0" max="10" value="6">
  Score 6/10
</meter>
```

### CSS

```css hidden
meter {
  height: 30px;
  width: 200px;
  vertical-align: -0.8rem;
}
```

```css
.safari meter {
  /* Setzt das Standardaussehen nur für Safari zurück */
  /* .safari-Klasse wird über JavaScript hinzugefügt */
  -webkit-appearance: none;
}

#styled::-webkit-meter-bar {
  background: lime;
  box-shadow: 0 10px 20px grey inset;
  border-radius: 10px;
}
```

### JavaScript

```js
// Safari erfordert, dass <meter>-Elemente ein `appearance` von `none` haben,
// um benutzerdefinierte Stile mit `::-webkit-meter-*`-Selektoren zu ermöglichen,
// aber `appearance: none` beeinträchtigt die Darstellung in Chrome.
// Daher müssen wir überprüfen, ob der Browser auf Safari basiert.

const is_safari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (is_safari) {
  document.body.classList.add("safari");
}
```

### Ergebnis

{{ EmbedLiveSample('Examples') }}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von WebKit/Blink zur Stilgestaltung anderer Teile eines {{htmlelement("meter")}}-Elements verwendet werden, sind wie folgt:

  - {{cssxref("::-webkit-meter-inner-element")}}
  - {{cssxref("::-webkit-meter-even-less-good-value")}}
  - {{cssxref("::-webkit-meter-optimum-value")}}
  - {{cssxref("::-webkit-meter-suboptimum-value")}}

- [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
