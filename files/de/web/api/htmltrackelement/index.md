---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTrackElement`**-Interface repräsentiert ein {{Glossary("HTML", "HTML")}} {{HTMLElement("track")}}-Element innerhalb des {{Glossary("DOM", "DOM")}}. Dieses Element kann als Kind von entweder {{HTMLElement("audio")}} oder {{HTMLElement("video")}} verwendet werden, um einen Texttrack anzugeben, der Informationen wie Untertitel oder Bildunterschriften enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTrackElement.kind`](/de/docs/Web/API/HTMLTrackElement/kind)
  - : Ein String, der das HTML-Attribut [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) wiedergibt und angibt, wie der Texttrack verwendet werden soll. Mögliche Werte sind: `subtitles`, `captions`, `descriptions`, `chapters` oder `metadata`.
- [`HTMLTrackElement.src`](/de/docs/Web/API/HTMLTrackElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/track#src) wiedergibt und die Adresse der Texttrack-Daten angibt.
- [`HTMLTrackElement.srclang`](/de/docs/Web/API/HTMLTrackElement/srclang)
  - : Ein String, der das HTML-Attribut [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang) wiedergibt und die Sprache der Texttrack-Daten angibt.
- [`HTMLTrackElement.label`](/de/docs/Web/API/HTMLTrackElement/label)
  - : Ein String, der das HTML-Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) wiedergibt und einen benutzerlesbaren Titel für den Track angibt.
- [`HTMLTrackElement.default`](/de/docs/Web/API/HTMLTrackElement/default)
  - : Ein boolescher Wert, der das Attribut [`default`](/de/docs/Web/HTML/Reference/Elements/track#default) wiedergibt und angibt, dass der Track aktiviert werden soll, wenn die Präferenzen des Benutzers nicht angeben, dass ein anderer Track geeigneter wäre.
- [`HTMLTrackElement.readyState`](/de/docs/Web/API/HTMLTrackElement/readyState) {{ReadOnlyInline}}
  - : Gibt ein `unsigned short` zurück, das den Bereitschaftszustand des Tracks zeigt:

    | Konstante | Wert | Beschreibung                                                                                                                                                                                            |
    | --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0    | Gibt an, dass die Cues des Texttracks noch nicht beschafft wurden.                                                                                                                                      |
    | `LOADING` | 1    | Gibt an, dass der Texttrack geladen wird und bisher keine fatalen Fehler aufgetreten sind. Weitere Cues könnten vom Parser dem Track noch hinzugefügt werden.                                           |
    | `LOADED`  | 2    | Gibt an, dass der Texttrack fehlerfrei geladen wurde.                                                                                                                                                   |
    | `ERROR`   | 3    | Gibt an, dass der Texttrack aktiviert wurde, jedoch das Abrufen durch den Benutzeragenten in irgendeiner Weise gescheitert ist. Einige oder alle Cues fehlen wahrscheinlich und werden nicht beschafft. |

- [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) {{ReadOnlyInline}}
  - : Gibt [`TextTrack`](/de/docs/Web/API/TextTrack) zurück, das die Texttrack-Daten des Track-Elements ist.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen:

- [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)
  - : Wird gesendet, wenn die zugrunde liegenden [`TextTrack`](/de/docs/Web/API/TextTrack) die aktuell präsentierten Cues geändert wurden. Dieses Ereignis wird immer an das `TextTrack` gesendet, wird aber _auch_ an das `HTMLTrackElement` gesendet, wenn eines mit dem Track verbunden ist. Sie können auch den `oncuechange`-Ereignishandler verwenden, um einen Handler für dieses Ereignis festzulegen.

## Hinweise zur Verwendung

### Laden der Textressource des Tracks

Die WebVTT- oder TTML-Daten, die die eigentlichen Cues für den Texttrack beschreiben, werden nicht geladen, wenn der [`mode`](/de/docs/Web/API/TextTrack/mode) des Tracks anfänglich im `disabled`-Zustand ist. Wenn Sie eine Verarbeitung des Tracks nach dem Einrichten des `<track>` benötigen, sollten Sie stattdessen sicherstellen, dass der `mode` des Tracks entweder `hidden` ist (wenn er nicht sofort angezeigt werden soll) oder `showing` (um den Track anfänglich anzuzeigen). Sie können den Modus später nach Bedarf ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("track") }}.
