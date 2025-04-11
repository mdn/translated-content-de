---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTrackElement`**-Interface repräsentiert ein {{Glossary("HTML", "HTML")}} {{HTMLElement("track")}}-Element innerhalb des {{Glossary("DOM", "DOM")}}. Dieses Element kann als Kind von entweder {{HTMLElement("audio")}} oder {{HTMLElement("video")}} verwendet werden, um eine Textspur anzugeben, die Informationen wie Untertitel oder Captions enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTrackElement.kind`](/de/docs/Web/API/HTMLTrackElement/kind)
  - : Ein String, der das HTML-Attribut [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) widerspiegelt und angibt, wie die Textspur verwendet werden soll. Mögliche Werte sind: `subtitles`, `captions`, `descriptions`, `chapters` oder `metadata`.
- [`HTMLTrackElement.src`](/de/docs/Web/API/HTMLTrackElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/track#src) widerspiegelt und die Adresse der Textspur-Daten angibt.
- [`HTMLTrackElement.srclang`](/de/docs/Web/API/HTMLTrackElement/srclang)
  - : Ein String, der das HTML-Attribut [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang) widerspiegelt und die Sprache der Textspur-Daten angibt.
- [`HTMLTrackElement.label`](/de/docs/Web/API/HTMLTrackElement/label)
  - : Ein String, der das HTML-Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) widerspiegelt und einen benutzerlesbaren Titel für die Spur angibt.
- [`HTMLTrackElement.default`](/de/docs/Web/API/HTMLTrackElement/default)
  - : Ein boolescher Wert, der das Attribut [`default`](/de/docs/Web/HTML/Reference/Elements/track#default) widerspiegelt und anzeigt, dass die Spur aktiviert werden soll, wenn die Präferenzen des Nutzers nicht anzeigen, dass eine andere Spur geeigneter wäre.
- [`HTMLTrackElement.readyState`](/de/docs/Web/API/HTMLTrackElement/readyState) {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Bereitschaftszustand der Spur anzeigt:

    | Konstante | Wert | Beschreibung                                                                                                                                                                                                      |
    | --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0    | Zeigt an, dass die Hinweise der Textspur nicht abgerufen wurden.                                                                                                                                                  |
    | `LOADING` | 1    | Zeigt an, dass die Textspur geladen wird und bisher keine schwerwiegenden Fehler aufgetreten sind. Weitere Hinweise könnten noch per Parser zur Spur hinzugefügt werden.                                          |
    | `LOADED`  | 2    | Zeigt an, dass die Textspur ohne schwerwiegende Fehler geladen wurde.                                                                                                                                             |
    | `ERROR`   | 3    | Zeigt an, dass die Textspur aktiviert war, aber als der Benutzeragent versuchte, sie abzurufen, dies auf irgendeine Weise fehlschlug. Einige oder alle Hinweise fehlen möglicherweise und werden nicht abgerufen. |

- [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) {{ReadOnlyInline}}
  - : Gibt [`TextTrack`](/de/docs/Web/API/TextTrack) zurück, das die Textspur-Daten des Spur-Elements darstellt.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces:

- [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)
  - : Wird gesendet, wenn die zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack) die aktuell dargestellten Hinweise geändert hat. Dieses Ereignis wird immer an die `TextTrack` gesendet, aber _auch_ an das `HTMLTrackElement`, wenn eines mit der Spur verknüpft ist.
    Sie können auch den `oncuechange`-Ereignishandler verwenden, um einen Handler für dieses Ereignis festzulegen.

## Verwendungshinweise

### Laden der Text-Ressource der Spur

Die WebVTT- oder TTML-Daten, die die tatsächlichen Hinweise für die Textspur beschreiben, werden nicht geladen, wenn der [`mode`](/de/docs/Web/API/TextTrack/mode) der Spur ursprünglich im `disabled`-Zustand ist. Wenn Sie in der Lage sein müssen, nach der Einrichtung des `<track>`-Elements eine Verarbeitung auf der Spur durchzuführen, sollten Sie stattdessen sicherstellen, dass der `mode` der Spur entweder `hidden` ist (wenn Sie nicht möchten, dass sie dem Nutzer zu Beginn angezeigt wird) oder `showing` (um die Spur initial anzuzeigen). Sie können den Modus dann später nach Bedarf ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("track") }}.
