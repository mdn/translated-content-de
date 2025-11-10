---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLDetailsElement`**-Interface bietet spezielle Eigenschaften (zusätzlich zu den regulären Eigenschaften, die es durch Vererbung auch vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface hat) zur Manipulation von {{HTMLElement("details")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDetailsElement.name`](/de/docs/Web/API/HTMLDetailsElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name)-HTML-Attribut wiedergibt, das es Ihnen ermöglicht, eine Gruppe von sich gegenseitig ausschließenden {{htmlelement("details")}}-Elementen zu erstellen. Das Öffnen eines der benannten `<details>`-Elemente dieser Gruppe führt dazu, dass andere Elemente der Gruppe geschlossen werden.
- [`HTMLDetailsElement.open`](/de/docs/Web/API/HTMLDetailsElement/open)
  - : Ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Reference/Elements/details#open)-HTML-Attribut wiedergibt und angibt, ob die Inhalte des Elements (ausgenommen das {{HTMLElement("summary")}}) dem Benutzer angezeigt werden sollen oder nicht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt Ereignisse von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Kapitel protokollieren, wenn sie geöffnet und geschlossen werden

Dieses Beispiel verwendet das `HTMLElement`-[`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, um Kapitel beim Öffnen und Schließen einem Protokoll aside hinzuzufügen und daraus zu entfernen.

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

{{EmbedLiveSample("Kapitel protokollieren, wenn sie geöffnet und geschlossen werden", 700, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("details")}}
