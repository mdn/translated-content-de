---
title: "Window: pageshow Ereignis"
short-title: pageshow
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}

Das **`pageshow`** Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser das Dokument des Fensters aufgrund von Navigation anzeigt.

Dazu gehören:

- Initiales Laden der Seite
- Navigation zur Seite von einer anderen Seite im gleichen Fenster oder Tab
- Wiederherstellung einer eingefrorenen Seite auf mobilen Betriebssystemen
- Rückkehr zur Seite mit den Vorwärts- oder Rückwärtsschaltflächen des Browsers

> [!NOTE]
> Während des initialen Seitenladens wird das `pageshow` Ereignis _nach_ dem [`load`](/de/docs/Web/API/Window/load_event) Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("pageshow", (event) => {});
onpageshow = (event) => {};
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Ereigniseigenschaften

- [`PageTransitionEvent.persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument aus einem Cache geladen wird.

## Ereignishandler-Aliase

Neben der `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onpageshow` auch auf folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Dieses Beispiel richtet Ereignishandler für Ereignisse ein, die im Array `events` aufgelistet sind. Der Handler `eventLogger()` protokolliert den Typ des aufgetretenen Ereignisses in der Konsole und enthält den Wert des [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) Flags bei `pageshow` und `pagehide` Ereignissen.

### JavaScript

```js
const events = ["pagehide", "pageshow", "unload", "load"];

const eventLogger = (event) => {
  switch (event.type) {
    case "pagehide":
    case "pageshow": {
      let isPersisted = event.persisted ? "persisted" : "not persisted";
      console.log(`Event: ${event.type} - ${isPersisted}`);
      break;
    }
    default:
      console.log(`Event: ${event.type}`);
      break;
  }
};

events.forEach((eventName) => window.addEventListener(eventName, eventLogger));
```

### HTML

```html
<p>
  Open the console and watch the output as you navigate to and from this page.
  Try loading new pages into this tab, then navigating forward and backward
  through history, noting the events' output to the log.
</p>
```

### Ergebnisse

{{EmbedLiveSample("Examples", 640, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
