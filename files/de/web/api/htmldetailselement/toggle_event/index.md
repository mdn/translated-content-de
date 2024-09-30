---
title: "HTMLDetailsElement: toggle-Ereignis"
short-title: toggle
slug: Web/API/HTMLDetailsElement/toggle_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Das **`toggle`**-Ereignis wird ausgelöst, wenn der `open`/`closed`-Zustand eines {{HtmlElement("details")}}-Elements umgeschaltet wird.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

> [!NOTE]
> Das `toggle`-Ereignis ist auch in einer anderen Form auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) verfügbar; diese Version wird bei [Popover-Elementen](/de/docs/Web/API/Popover_API) ausgelöst, unmittelbar nachdem sie angezeigt oder verborgen wurden. Weitere Informationen finden Sie auf der `HTMLElement`-[`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisseite.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js example-good
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

```html example-bad
<details ontoggle="console.log(this.open)" open>...</details>
```

> [!NOTE]
> Im obigen Beispiel wird der Ereignis-Listener einmal aufgerufen, ohne dass eine Benutzerinteraktion stattfindet, da das `open`-Attribut gesetzt ist. Der Einsatz von Ereignishandlern auf diese Weise [wird nicht empfohlen](/de/docs/Web/HTML/Attributes#event_handler_attributes).

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Dieses Beispiel protokolliert Kapitel, die geöffnet sind. Kapitel werden aus dem Protokoll entfernt, wenn sie geschlossen werden.

### HTML

```html
<aside id="log">
  <p>Open chapters:</p>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
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
```

### CSS

```css
body {
  display: flex;
  flex-direction: row-reverse;
}

#log {
  flex-shrink: 0;
  padding-left: 3em;
}

#summaries {
  flex-grow: 1;
}
```

### JavaScript

```js
function logItem(e) {
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute("hidden");
}

const chapters = document.querySelectorAll("details");
chapters.forEach((chapter) => {
  chapter.addEventListener("toggle", logItem);
});
```

### Ergebnis

{{EmbedLiveSample("Examples", 700, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
