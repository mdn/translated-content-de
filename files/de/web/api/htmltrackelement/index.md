---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTrackElement`** Interface repräsentiert ein [HTML](/de/docs/Glossary/HTML) {{HTMLElement("track")}} Element innerhalb des [DOM](/de/docs/Glossary/DOM). Dieses Element kann als Kind entweder von {{HTMLElement("audio")}} oder {{HTMLElement("video")}} verwendet werden, um eine Textspur anzugeben, die Informationen wie Untertitel oder Beschriftungen enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTrackElement.kind`](/de/docs/Web/API/HTMLTrackElement/kind)
  - : Ein String, der das [`kind`](/de/docs/Web/HTML/Element/track#kind) HTML-Attribut widerspiegelt und angibt, wie die Textspur verwendet werden soll. Mögliche Werte sind: `subtitles`, `captions`, `descriptions`, `chapters` oder `metadata`.
- [`HTMLTrackElement.src`](/de/docs/Web/API/HTMLTrackElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/track#src) HTML-Attribut widerspiegelt und die Adresse der Textspur-Daten angibt.
- [`HTMLTrackElement.srclang`](/de/docs/Web/API/HTMLTrackElement/srclang)
  - : Ein String, der das [`srclang`](/de/docs/Web/HTML/Element/track#srclang) HTML-Attribut widerspiegelt und die Sprache der Textspur-Daten angibt.
- [`HTMLTrackElement.label`](/de/docs/Web/API/HTMLTrackElement/label)
  - : Ein String, der das [`label`](/de/docs/Web/HTML/Element/track#label) HTML-Attribut widerspiegelt und einen benutzerlesbaren Titel für die Spur angibt.
- [`HTMLTrackElement.default`](/de/docs/Web/API/HTMLTrackElement/default)
  - : Ein Boolean-Wert, der das [`default`](/de/docs/Web/HTML/Element/track#default) Attribut widerspiegelt und angibt, dass die Spur aktiviert werden soll, wenn die Benutzerpräferenzen nicht anzeigen, dass eine andere Spur geeigneter wäre.
- [`HTMLTrackElement.readyState`](/de/docs/Web/API/HTMLTrackElement/readyState) {{ReadOnlyInline}}

  - : Gibt ein `unsigned short` zurück, das den Bereitschaftszustand der Spur anzeigt:

    | Konstante | Wert | Beschreibung                                                                                                                                                                                                         |
    | --------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0    | Gibt an, dass die Hinweise der Textspur nicht abgerufen wurden.                                                                                                                                                      |
    | `LOADING` | 1    | Gibt an, dass die Textspur geladen wird und bisher keine schwerwiegenden Fehler aufgetreten sind. Weitere Hinweise können vom Parser weiterhin zur Spur hinzugefügt werden.                                          |
    | `LOADED`  | 2    | Gibt an, dass die Textspur ohne schwerwiegende Fehler geladen wurde.                                                                                                                                                 |
    | `ERROR`   | 3    | Gibt an, dass die Textspur aktiviert, aber als der Benutzeragent versuchte, sie abzurufen, dies in irgendeiner Weise fehlgeschlagen ist. Einige oder alle Hinweise fehlen wahrscheinlich und werden nicht abgerufen. |

- [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) {{ReadOnlyInline}}
  - : Gibt [`TextTrack`](/de/docs/Web/API/TextTrack) zurück, das die Textspur-Daten des Spurelements darstellt.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder indem ein Event-Listener der `oneventname`-Eigenschaft dieses Interfaces zugewiesen wird:

- [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)
  - : Wird ausgelöst, wenn sich die aktuell präsentierten Hinweise der zugrundeliegenden [`TextTrack`](/de/docs/Web/API/TextTrack) ändern. Dieses Ereignis wird immer an die `TextTrack` gesendet, aber _auch_ an das `HTMLTrackElement`, wenn eines mit der Spur verbunden ist.
    Sie können auch den `oncuechange`-Event-Handler verwenden, um einen Handler für dieses Ereignis zu etablieren.

## Nutzungshinweise

### Laden der Textressource der Spur

Die WebVTT oder TTML Daten, die die tatsächlichen Hinweise für die Textspur beschreiben, werden nicht geladen, wenn der [`mode`](/de/docs/Web/API/TextTrack/mode) der Spur anfänglich im Zustand `disabled` ist. Wenn Sie in der Lage sein müssen, eine Verarbeitung der Spur nach dem Einrichten des `<track>` durchzuführen, sollten Sie stattdessen sicherstellen, dass der `mode` der Spur entweder `hidden` (wenn Sie nicht möchten, dass sie dem Benutzer angezeigt wird) oder `showing` (um die Spur zunächst anzuzeigen) ist. Sie können den Modus später nach Belieben ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("track") }}.
