---
title: "Window: pageshow-Ereignis"
short-title: pageshow
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: 76bec44d5e9842f9ce4789303b989c36fd708cb8
---

{{APIRef("HTML DOM")}}

Das **`pageshow`**-Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser zu einem neuen Dokument navigiert.

Dies schließt ein:

- Das anfängliche Laden der Seite.
- Navigation zur Seite von einer anderen Seite im selben Fenster oder Tab.
- Wiederherstellen einer eingefrorenen Seite auf mobilen Betriebssystemen.
- Zurückkehren zur Seite über die Vorwärts- oder Rückwärts-Schaltflächen des Browsers (einschließlich, wenn sie aus dem {{Glossary("bfcache", "bfcache")}} wiederhergestellt wird).
- Öffnen einer Seite in einem Hintergrundtab.
- {{Glossary("Prerender", "Prerendering")}} einer Seite, selbst bevor sie aktiviert wird.

> [!WARNING]
> Trotz des Namens wird das `pageshow`-Ereignis nicht ausgelöst, wenn die Seite tatsächlich dem Benutzer _angezeigt_ wird. Zum Beispiel kann sie in einem Hintergrundtab geöffnet oder prerendered werden. Wenn Sie daran interessiert sind, auf die Anzeige der Seite für den Benutzer zu reagieren, verwenden Sie die folgenden Ereignisse:
>
> - [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event): Wird gesendet, wenn eine Seite erstmals gerendert wird.
> - [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event): Wird gesendet, wenn sich die Sichtbarkeit einer Seite ändert.
> - [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event): Wird gesendet, wenn eine prerendered Seite aktiviert wird.

> [!NOTE]
> Während der anfänglichen Seitennutzung wird das `pageshow`-Ereignis _nach_ dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onpageshow` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Dieses Beispiel richtet Ereignishandler für die im Array `events` aufgeführten Ereignisse ein. Der Handler `eventLogger()` protokolliert den Typ des Ereignisses, das aufgetreten ist, in der Konsole und schließt den Wert des [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted)-Flags bei `pageshow`- und `pagehide`-Ereignissen ein.

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
