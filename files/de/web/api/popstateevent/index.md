---
title: PopStateEvent
slug: Web/API/PopStateEvent
l10n:
  sourceCommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{APIRef("History API")}}

**`PopStateEvent`** ist eine Schnittstelle für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis.

Ein `popstate`-Ereignis wird jedes Mal an das Fenster gesendet, wenn sich der aktive Verlaufseintrag zwischen zwei Verlaufseinträgen für dasselbe Dokument ändert. Wenn der aktive Verlaufseintrag durch einen Aufruf von `history.pushState()` erstellt oder durch einen Aufruf von `history.replaceState()` beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Statusobjekts des Verlaufseintrags.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PopStateEvent.PopStateEvent", "PopStateEvent()")}}
  - : Erstellt ein neues `PopStateEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, {{domxref("Event")}}._

- {{domxref("PopStateEvent.state")}} {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die an `pushState()` oder `replaceState()` übergeben wurden.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch die Methoden ihres Elternteils, {{domxref("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis
- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis
