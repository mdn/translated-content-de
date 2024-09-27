---
title: FontFaceSetLoadEvent
slug: Web/API/FontFaceSetLoadEvent
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("CSS Font Loading API")}}

Die **`FontFaceSetLoadEvent`** Schnittstelle der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) stellt Ereignisse dar, die bei einem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) ausgelöst werden, nachdem es beginnt, Schriftarten zu laden.

Ereignisse werden ausgelöst, wenn das Laden der Schriftarten beginnt ([`loading`](/de/docs/Web/API/FontFaceSet/loading_event)), das Laden abgeschlossen ist ([`loadingdone`](/de/docs/Web/API/FontFaceSet/loadingdone_event)) oder ein Fehler beim Laden einer der Schriftarten auftritt ([`loadingerror`](/de/docs/Web/API/FontFaceSet/loadingerror_event)).

{{InheritanceDiagram}}

## Konstruktor

- [`FontFaceSetLoadEvent()`](/de/docs/Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent)
  - : Erstellt ein neues `FontFaceSetLoadEvent` Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`FontFaceSetLoadEvent.fontfaces`](/de/docs/Web/API/FontFaceSetLoadEvent/fontfaces) {{ReadOnlyInline}}
  - : Gibt ein Array von [`FontFace`](/de/docs/Web/API/FontFace) Instanzen zurück.
    Je nach Ereignis enthält das Array Schriftarten, die gerade laden (`loading`), erfolgreich geladen wurden (`loadingdone`) oder deren Laden fehlgeschlagen ist (`loadingerror`).

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.fonts`](/de/docs/Web/API/Document/fonts)
- [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts)
