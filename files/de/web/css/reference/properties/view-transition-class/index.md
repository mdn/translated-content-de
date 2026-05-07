---
title: "`view-transition-class` CSS property"
short-title: view-transition-class
slug: Web/CSS/Reference/Properties/view-transition-class
l10n:
  sourceCommit: 7447816a276e95c5b4c2ab2f6a1f80b081371de2
---

Die **`view-transition-class`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet den ausgewählten Elementen eine oder mehrere identifizierende Klassen ({{cssxref("custom-ident")}}s) und stellt eine zusätzliche Methode zum Styling der Ansichtstransitionen für diese Elemente bereit.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-class: card;
view-transition-class: card fast-slide;

/* Keyword value */
view-transition-class: none;

/* Global values */
view-transition-class: inherit;
view-transition-class: initial;
view-transition-class: revert;
view-transition-class: revert-layer;
view-transition-class: unset;
```

### Werte

- {{cssxref("custom-ident")}}
  - : Ein identifizierender Name, der verwendet wird, um Pseudo-Elemente von Ansichtstransitionen für das Styling auszuwählen. Im Gegensatz zu `view-transition-name` muss eine Klasse nicht einzigartig sein und führt nicht dazu, dass das Element an einer separaten Ansichtstransitionsgruppe teilnimmt.
- `none`
  - : Es wird keine Klasse auf die benannten Ansichtstransitions-Pseudo-Elemente angewendet, die für dieses Element erstellt wurden.

## Beschreibung

Der `view-transition-class` Wert bietet einen Styling-Hook, ähnlich einem CSS-Klassennamen, der verwendet werden kann, um die gleichen Stile auf mehrere Pseudo-Elemente von Ansichtstransitionen anzuwenden. Es markiert ein Element nicht für die Erfassung. Jedes einzelne Element benötigt immer noch seinen eigenen einzigartigen {{cssxref("view-transition-name")}}; die `view-transition-class` wird nur als zusätzliche Möglichkeit verwendet, um Elemente zu stylen, die bereits einen `view-transition-name` haben. Die Unterstützung zur automatischen Bestimmung des `view-transition-name` wird in der [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) Spezifikation diskutiert.

Die `view-transition-class` wendet Stile mithilfe der Pseudo-Elemente der Ansichtstransition an, einschließlich {{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}}, und {{cssxref("::view-transition-new()")}}. Dies unterscheidet sich von `view-transition-name`, das die Ansichtstransitionen zwischen dem Element im alten Zustand mit seinem entsprechenden Element im neuen Zustand abgleicht.

Bis die `view-transition-class` Eigenschaft in allen Browsern, die Ansichtstransitionen unterstützen, vollständig unterstützt wird, sollten Sie ein benutzerdefiniertes `::view-transition-group()` für jedes Element einschließen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Styling einer gemeinsamen Klasse über mehrere Elemente

In diesem Beispiel haben drei Karten jeweils einen einzigartigen {{cssxref("view-transition-name")}} (erforderlich für das Paaren alter und neuer Zustände), aber sie teilen alle die gleiche `view-transition-class`. Dies ermöglicht es, eine einzige Regel zu schreiben, die alle ihre Übergänge gleichzeitig stylt, anstatt Stile für jeden Namen einzeln zu wiederholen. Im Gegensatz zu `view-transition-name` muss eine `view-transition-class` nicht einzigartig sein.

```html
<div class="card" id="card1">Card 1</div>
<div class="card" id="card2">Card 2</div>
<div class="card" id="card3">Card 3</div>
```

```css
/* Each element must have a unique view-transition-name */
#card1 {
  view-transition-name: card-1;
}

#card2 {
  view-transition-name: card-2;
}

#card3 {
  view-transition-name: card-3;
}

/* But they can all share the same view-transition-class */
.card {
  view-transition-class: card;
}

/* This single rule applies to all three cards' transitions */
::view-transition-group(.card) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}
```

### Verwendung mehrerer Klassen an einem einzelnen Element

Ein `view-transition-class` Wert kann eine durch Leerzeichen getrennte Liste von Identifikatoren sein, die es Ihnen ermöglicht, mehrere „atomare“ Stile auf das gleiche Element zu komponieren und jeden unabhängig von Ihren Ansichtstransitions-Pseudo-Elementen anzuvisieren. In diesem Beispiel teilen beide Karten die gleichen zwei Klassen — `slide` steuert die Animation und `fast-transition` ihre Dauer — während jede Karte immer noch ihren eigenen einzigartigen {{cssxref("view-transition-name")}} hat.

```html
<div class="card" id="card1">Card 1</div>
<div class="card" id="card2">Card 2</div>
```

```css
.card {
  view-transition-class: slide fast-transition;
}

#card1 {
  view-transition-name: card-1;
}

#card2 {
  view-transition-name: card-2;
}

/* The `slide` class drives which animation runs... */
::view-transition-new(.slide) {
  animation-name: slide-in;
}

::view-transition-old(.slide) {
  animation-name: slide-out;
}

/* ...while the `fast-transition` class drives how long it runs. */
::view-transition-group(.fast-transition) {
  animation-duration: 0.5s;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-name")}}
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) Leitfaden
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
