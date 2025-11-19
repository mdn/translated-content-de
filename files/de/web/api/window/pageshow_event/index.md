---
title: "Window: pageshow-Ereignis"
short-title: pageshow
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

Das **`pageshow`**-Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser das Dokument des Fensters aufgrund von Navigation anzeigt.

Dies schließt ein:

- Erstmaliges Laden der Seite
- Navigation zur Seite von einer anderen Seite im selben Fenster oder Tab
- Wiederherstellen einer eingefrorenen Seite auf mobilen Betriebssystemen
- Rückkehr zur Seite mit den Vorwärts- oder Rückwärts-Schaltflächen des Browsers

> [!NOTE]
> Beim erstmaligen Laden der Seite wird das `pageshow`-Ereignis _nach_ dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("pageshow", (event) => { })

onpageshow = (event) => { }
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Ereigniseigenschaften

- [`PageTransitionEvent.persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument aus einem Cache geladen wird.

## Alias-Ereignisbehandler

Zusätzlich zur `Window`-Schnittstelle ist die Ereignisbehandler-Eigenschaft `onpageshow` auch bei den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Dieses Beispiel richtet Ereignisbehandler für die im Array `events` aufgeführten Ereignisse ein. Der Behandler `eventLogger()` protokolliert die Art des aufgetretenen Ereignisses in der Konsole und enthält den Wert der [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted)-Markierung bei `pageshow` und `pagehide`-Ereignissen.

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
