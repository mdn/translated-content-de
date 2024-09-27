---
title: PopStateEvent
slug: Web/API/PopStateEvent
l10n:
  sourceCommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{APIRef("History API")}}

**`PopStateEvent`** ist eine Schnittstelle für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis.

Ein `popstate`-Ereignis wird jedes Mal an das Fenster gesendet, wenn der aktive Verlaufseintrag zwischen zwei Verlaufs-Einträgen für dasselbe Dokument wechselt. Wenn der Verlaufseintrag, der aktiviert wird, durch einen Aufruf von `history.pushState()` erstellt oder durch einen Aufruf von `history.replaceState()` beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Zustandsobjekts des Verlaufseintrags.

{{InheritanceDiagram}}

## Konstruktor

- [`PopStateEvent()`](/de/docs/Web/API/PopStateEvent/PopStateEvent)
  - : Erstellt ein neues `PopStateEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`PopStateEvent.state`](/de/docs/Web/API/PopStateEvent/state) {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die an `pushState()` oder `replaceState()` übergeben wurden.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch die Methoden ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis
- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis
