---
title: "HTMLDetailsElement: toggle Ereignis"
short-title: toggle
slug: Web/API/HTMLDetailsElement/toggle_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Das **`toggle`**-Ereignis wird ausgelöst, wenn der `open`/`closed`-Zustand eines {{HtmlElement("details")}}-Elements umgeschaltet wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

> [!NOTE]
> Das `toggle`-Ereignis ist auch in einer anderen Form auf {{domxref("HTMLElement")}} verfügbar; diese Version wird bei [Popover-Elementen](/de/docs/Web/API/Popover_API) unmittelbar nach deren Anzeige oder Ausblendung ausgelöst. Weitere Informationen finden Sie auf der `HTMLElement` {{domxref("HTMLElement.toggle_event", "toggle")}} Ereignisseite.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js example-good
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

```html example-bad
<details ontoggle="console.log(this.open)" open>...</details>
```

> [!NOTE]
> Im obigen Beispiel wird der Ereignis-Listener einmal ohne Benutzereingriff aufgerufen, da das `open`-Attribut gesetzt ist. Die Verwendung von Ereignis-Handlern auf diese Weise [wird nicht empfohlen](/de/docs/Web/HTML/Attributes#event_handler_attributes).

## Ereignistyp

Ein {{domxref("ToggleEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Dieses Beispiel protokolliert Kapitel, die geöffnet sind. Kapitel werden aus dem Protokoll entfernt, wenn sie geschlossen werden.

### HTML

```html
<aside id="log">
  <p>Offene Kapitel:</p>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
<section id="summaries">
  <p>Kurzfassungen der Kapitel:</p>
  <details id="ch1">
    <summary>Kapitel I</summary>
    Die Philosophie tadelt Boethius wegen der Torheit seiner Klagen gegen das
    Glück. Ihre Natur selbst ist Wechselhaftigkeit.
  </details>
  <details id="ch2">
    <summary>Kapitel II</summary>
    Die Philosophie erwidert im Namen des Glücks auf Boethius' Vorwürfe und
    beweist, dass die Gaben des Glücks ihre eigenen sind, zu geben oder zu
    nehmen.
  </details>
  <details id="ch3">
    <summary>Kapitel III</summary>
    Boethius fällt auf sein gegenwärtiges Gefühl des Elends zurück. Die
    Philosophie erinnert ihn an den Glanz seines früheren Schicksals.
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
