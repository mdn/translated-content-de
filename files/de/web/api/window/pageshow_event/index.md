---
title: "Fenster: pageshow-Ereignis"
short-title: pageshow
slug: Web/API/Window/pageshow_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}

Das **`pageshow`**-Ereignis wird an ein {{domxref("Window")}} gesendet, wenn der Browser das Dokument des Fensters aufgrund einer Navigation anzeigt.

Dies umfasst:

- Das erstmalige Laden der Seite
- Die Navigation zur Seite von einer anderen Seite im selben Fenster oder Tab
- Das Wiederherstellen einer eingefrorenen Seite auf mobilen Betriebssystemen
- Das Zurückkehren zur Seite mittels der Vorwärts- oder Rückwärts-Tasten des Browsers

> [!NOTE]
> Beim erstmaligen Laden der Seite wird das `pageshow`-Ereignis _nach_ dem {{domxref("Window/load_event", "load")}}-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pageshow", (event) => {});
onpageshow = (event) => {};
```

## Ereignistyp

Ein {{domxref("PageTransitionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PageTransitionEvent")}}

## Ereigniseigenschaften

- {{domxref("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument aus einem Cache geladen wird.

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onpageshow` auch auf den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Beispiele

Dieses Beispiel richtet Ereignis-Handler für Ereignisse ein, die im Array `events` aufgeführt sind. Der Handler `eventLogger()` protokolliert die Art des aufgetretenen Ereignisses in der Konsole und umfasst den Wert des {{domxref("PageTransitionEvent.persisted", "persisted")}}-Flags bei `pageshow`- und `pagehide`-Ereignissen.

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
  Öffnen Sie die Konsole und beobachten Sie die Ausgabe, während Sie zu und von dieser Seite navigieren.
  Versuchen Sie, neue Seiten in diesem Tab zu laden, dann navigieren Sie vorwärts und rückwärts
  durch die Historie und beachten Sie die Ausgabe der Ereignisse im Log.
</p>
```

### Ergebnisse

{{EmbedLiveSample("Examples", 640, 250)}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Window.pagehide_event", "pagehide")}}
