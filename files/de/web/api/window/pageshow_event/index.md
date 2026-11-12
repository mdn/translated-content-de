---
title: "Window: pageshow-Ereignis"
short-title: pageshow
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("HTML DOM")}}

Das **`pageshow`**-Ereignis wird an ein [`Window`](/de/docs/Web/API/Window) gesendet, wenn der Browser zu einem neuen Dokument navigiert.

Dazu gehören:

- Das erstmalige Laden der Seite.
- Die Navigation von einer anderen Seite im selben Fenster oder Tab zu dieser Seite.
- Die Wiederherstellung einer eingefrorenen Seite auf mobilen Betriebssystemen.
- Die Rückkehr zur Seite über die Vorwärts- oder Zurück-Schaltfläche des Browsers (auch wenn sie aus dem {{Glossary("bfcache", "bfcache")}} wiederhergestellt wird).
- Das Öffnen einer Seite in einem Hintergrund-Tab.
- Das {{Glossary("Prerender", "Prerendering")}} einer Seite, noch bevor sie aktiviert wird.

> [!WARNING]
> Trotz seines Namens wird das `pageshow`-Ereignis nicht ausgelöst, wenn die Seite dem Benutzer tatsächlich _angezeigt_ wird. Sie kann beispielsweise in einem Hintergrund-Tab geöffnet oder vorgerendert werden. Wenn Sie darauf reagieren möchten, dass die Seite dem Benutzer angezeigt wird, verwenden Sie die folgenden Ereignisse:
>
> - [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event): Wird gesendet, wenn eine Seite erstmals gerendert wird.
> - [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event): Wird jedes Mal gesendet, wenn sich die Sichtbarkeit einer Seite ändert.
> - [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event): Wird gesendet, wenn eine vorgerenderte Seite aktiviert wird.

> [!NOTE]
> Beim erstmaligen Laden der Seite wird das `pageshow`-Ereignis _nach_ dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pageshow", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpageshow = (event) => { }
```

## Ereignistyp

Ein [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PageTransitionEvent")}}

## Event-Handler-Aliasse

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onpageshow` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Dieses Beispiel richtet Event-Handler für die im Array `events` aufgeführten Ereignisse ein. Der Handler `eventLogger()` protokolliert den Typ des aufgetretenen Ereignisses in der Konsole und gibt bei `pageshow`- und `pagehide`-Ereignissen auch den Wert des Flags [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) aus.

### HTML

```html
<p>
  Open the console and watch the output as you navigate to and from this page.
  Try loading new pages into this tab, then navigating forward and backward
  through history, noting the events' output to the log.
</p>
```

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

### Ergebnis

{{EmbedLiveSample("Examples", 640, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)
