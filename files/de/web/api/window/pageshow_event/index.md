---
title: "Window: pageshow-Event"
short-title: pageshow
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("HTML DOM")}}

Das **`pageshow`**-Event wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser zu einem neuen Dokument navigiert.

Dies umfasst:

- Initiales Laden der Seite.
- Navigieren zur Seite von einer anderen Seite im gleichen Fenster oder Tab.
- Wiederherstellen einer eingefrorenen Seite auf mobilen Betriebssystemen.
- Zurückkehr zur Seite mittels der Vorwärts- oder Rückwärtsbuttons des Browsers (einschließlich wenn sie aus dem {{Glossary("bfcache", "bfcache")}} wiederhergestellt wird).
- Öffnen einer Seite in einem Hintergrund-Tab.
- {{Glossary("Prerender", "Prerendern")}} einer Seite, noch bevor diese aktiviert wird.

> [!WARNING]
> Trotz des Namens wird das `pageshow`-Event nicht ausgelöst, wenn die Seite tatsächlich dem Benutzer _gezeigt_ wird. Zum Beispiel könnte sie in einem Hintergrund-Tab geöffnet oder prerendert werden. Wenn Sie interessiert daran sind zu reagieren, wenn die Seite dem Benutzer gezeigt wird, nutzen Sie die folgenden Ereignisse:
>
> - [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event): Wird gesendet, wenn eine Seite erstmals gerendert wird.
> - [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event): Wird jedes Mal gesendet, wenn sich die Sichtbarkeit einer Seite ändert.
> - [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event): Wird gesendet, wenn eine prerendered Seite aktiviert wird.

> [!NOTE]
> Während des initialen Seitenladens wird das `pageshow`-Event _nach_ dem [`load`](/de/docs/Web/API/Window/load_event)-Event ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("pageshow", (event) => { })

onpageshow = (event) => { }
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Event-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onpageshow` ebenfalls auf folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Dieses Beispiel richtet Event-Handler für Ereignisse ein, die im Array `events` aufgelistet sind. Der Handler `eventLogger()` protokolliert den Typ des aufgetretenen Ereignisses in die Konsole und enthält den Wert des [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted)-Flags bei `pageshow`- und `pagehide`-Ereignissen.

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
