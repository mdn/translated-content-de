---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
l10n:
  sourceCommit: a62600788f390d326859cfbf6171013a3f351690
---

{{APIRef("HTML DOM")}}

Das Interface **`HTMLDetailsElement`** stellt spezielle Eigenschaften bereit (zusätzlich zu den regulären, die es durch Vererbung auch von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erbt) zum Manipulieren von {{HTMLElement("details")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDetailsElement.name`](/de/docs/Web/API/HTMLDetailsElement/name)
  - : Ein String, der das HTML-Attribut [`name`](/de/docs/Web/HTML/Element/details#name) widerspiegelt und es Ihnen erlaubt, eine Gruppe von sich gegenseitig ausschließenden {{htmlelement("details")}}-Elementen zu erstellen. Das Öffnen eines der benannten `<details>`-Elemente dieser Gruppe bewirkt, dass andere Elemente der Gruppe geschlossen werden.
- [`HTMLDetailsElement.open`](/de/docs/Web/API/HTMLDetailsElement/open)
  - : Ein boolescher Wert, der das HTML-Attribut [`open`](/de/docs/Web/HTML/Element/details#open) widerspiegelt und angibt, ob die Inhalte des Elements (ohne das {{HTMLElement("summary")}}) dem Benutzer angezeigt werden sollen oder nicht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt Ereignisse von seiner Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Kapitel protokollieren, wenn sie geöffnet und geschlossen werden

Dieses Beispiel verwendet das `HTMLElement`-[`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, um Kapitel zu einem Protokoll zu hinzufügen oder davon zu entfernen, wenn sie geöffnet und geschlossen werden.

#### HTML

```html
<section id="summaries">
  <p>Chapter summaries:</p>
  <details id="ch1">
    <summary>Chapter I</summary>
    Philosophy reproves Boethius for the foolishness of his complaints against
    Fortune. Her very nature is caprice.
  </details>
  <details id="ch2">
    <summary>Chapter II</summary>
    Philosophy in Fortune's name replies to Boethius' reproaches, and proves
    that the gifts of Fortune are hers to give and to take away.
  </details>
  <details id="ch3">
    <summary>Chapter III</summary>
    Boethius falls back upon his present sense of misery. Philosophy reminds him
    of the brilliancy of his former fortunes.
  </details>
</section>
<aside id="log">
  <p>Open chapters:</p>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
```

#### CSS

```css
body {
  display: flex;
}

#log {
  flex-shrink: 0;
  padding-left: 3em;
}

#summaries {
  flex-grow: 1;
}
```

#### JavaScript

```js
function logItem(e) {
  console.log(e);
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute("hidden");
}

const chapters = document.querySelectorAll("details");
chapters.forEach((chapter) => {
  chapter.addEventListener("toggle", logItem);
});
```

#### Ergebnis

{{EmbedLiveSample("Log chapters as they are opened and closed", 700, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("details")}}
