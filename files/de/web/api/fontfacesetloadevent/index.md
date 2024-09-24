---
title: FontFaceSetLoadEvent
slug: Web/API/FontFaceSetLoadEvent
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("CSS Font Loading API")}}

Das **`FontFaceSetLoadEvent`**-Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert Ereignisse, die bei einem {{domxref("FontFaceSet")}} ausgelöst werden, nachdem das Laden der Schriftarten beginnt.

Ereignisse werden ausgelöst, wenn das Laden der Schriftarten beginnt ([`loading`](/de/docs/Web/API/FontFaceSet/loading_event)), abgeschlossen ist ([`loadingdone`](/de/docs/Web/API/FontFaceSet/loadingdone_event)) oder ein Fehler beim Laden einer der Schriftarten auftritt ([`loadingerror`](/de/docs/Web/API/FontFaceSet/loadingerror_event)).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("FontFaceSetLoadEvent.FontFaceSetLoadEvent","FontFaceSetLoadEvent()")}}
  - : Erstellt ein neues `FontFaceSetLoadEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("FontFaceSetLoadEvent.fontfaces")}} {{ReadOnlyInline}}
  - : Gibt ein Array von {{domxref("FontFace")}}-Instanzen zurück. Je nach Ereignis enthält das Array Schriftarten, die gerade laden (`loading`), erfolgreich geladen wurden (`loadingdone`) oder nicht geladen werden konnten (`loadingerror`).

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("Event")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.fonts")}}
- {{domxref("WorkerGlobalScope.fonts")}}
