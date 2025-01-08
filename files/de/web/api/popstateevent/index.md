---
title: PopStateEvent
slug: Web/API/PopStateEvent
l10n:
  sourceCommit: 082221e2a29b7bea7a3029cd71442c8f294a8422
---

{{APIRef("History API")}}

**`PopStateEvent`** ist eine Schnittstelle für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis.

Ein `popstate`-Ereignis wird an das Fenster gesendet, jedes Mal wenn der aktive Verlaufseintrag zwischen zwei Verlaufseinträgen für dasselbe Dokument wechselt. Wenn der aktive Verlaufseintrag durch einen Aufruf von `history.pushState()` erstellt wurde oder von einem Aufruf von `history.replaceState()` betroffen war, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Statusobjekts des Verlaufseintrags.

{{InheritanceDiagram}}

## Konstruktor

- [`PopStateEvent()`](/de/docs/Web/API/PopStateEvent/PopStateEvent)
  - : Erstellt ein neues `PopStateEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`PopStateEvent.state`](/de/docs/Web/API/PopStateEvent/state) {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die `pushState()` oder `replaceState()` bereitgestellt wurden.
- [`hasUAVisualTransition`](/de/docs/Web/API/PopStateEvent/hasUAVisualTransition) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent für diese Navigation vor dem Senden dieses Ereignisses eine visuelle Übergang durchgeführt hat, oder `false` andernfalls.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch die Methoden ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis
- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis
