---
title: PopStateEvent
slug: Web/API/PopStateEvent
l10n:
  sourceCommit: 875b84034211b6e83150ba33efac9b0665074f17
---

{{APIRef("History API")}}

**`PopStateEvent`** ist eine Schnittstelle für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis.

Ein `popstate`-Ereignis wird an das Fenster gesendet, jedes Mal, wenn der aktive Verlaufseintrag zwischen zwei Verlaufseinträgen für dasselbe Dokument wechselt. Wenn der aktive Verlaufseintrag durch einen Aufruf von `history.pushState()` erstellt wurde oder durch einen Aufruf von `history.replaceState()` beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Zustandsobjekts des Verlaufseintrags.

{{InheritanceDiagram}}

## Konstruktor

- [`PopStateEvent()`](/de/docs/Web/API/PopStateEvent/PopStateEvent)
  - : Erstellt ein neues `PopStateEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`PopStateEvent.state`](/de/docs/Web/API/PopStateEvent/state) {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die `pushState()` oder `replaceState()` übergeben wurden.
- [`hasUAVisualTransition`](/de/docs/Web/API/PopStateEvent/hasUAVisualTransition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der User-Agent vor der Zustellung dieses Ereignisses eine visuelle Übergangsanimation für diese Navigation durchgeführt hat, andernfalls `false`.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt aber die Methoden ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis
- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis
