---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTrackElement`** Interface repräsentiert ein {{Glossary("HTML", "HTML")}} {{HTMLElement("track")}}-Element innerhalb des {{Glossary("DOM", "DOM")}}. Dieses Element kann als Kind von entweder {{HTMLElement("audio")}} oder {{HTMLElement("video")}} verwendet werden, um eine Textspur anzugeben, die Informationen wie Untertitel oder Audiodeskriptionen enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTrackElement.kind`](/de/docs/Web/API/HTMLTrackElement/kind)
  - : Ein String, der das [`kind`](/de/docs/Web/HTML/Element/track#kind)-HTML-Attribut widerspiegelt und angibt, wie die Textspur verwendet werden soll. Mögliche Werte sind: `subtitles`, `captions`, `descriptions`, `chapters` oder `metadata`.
- [`HTMLTrackElement.src`](/de/docs/Web/API/HTMLTrackElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/track#src)-HTML-Attribut widerspiegelt und die Adresse der Textspurdaten angibt.
- [`HTMLTrackElement.srclang`](/de/docs/Web/API/HTMLTrackElement/srclang)
  - : Ein String, der das [`srclang`](/de/docs/Web/HTML/Element/track#srclang)-HTML-Attribut widerspiegelt und die Sprache der Textspurdaten angibt.
- [`HTMLTrackElement.label`](/de/docs/Web/API/HTMLTrackElement/label)
  - : Ein String, der das [`label`](/de/docs/Web/HTML/Element/track#label)-HTML-Attribut widerspiegelt und einen für den Nutzer lesbaren Titel für die Spur angibt.
- [`HTMLTrackElement.default`](/de/docs/Web/API/HTMLTrackElement/default)
  - : Ein Boolescher Wert, der das [`default`](/de/docs/Web/HTML/Element/track#default)-Attribut widerspiegelt und angibt, dass die Spur aktiviert werden soll, wenn die Benutzereinstellungen nicht anzeigen, dass eine andere Spur geeigneter wäre.
- [`HTMLTrackElement.readyState`](/de/docs/Web/API/HTMLTrackElement/readyState) {{ReadOnlyInline}}

  - : Gibt ein `unsigned short` zurück, das den Bereitschaftszustand der Spur anzeigt:

    | Konstante | Wert | Beschreibung                                                                                                                                                                                                |
    | --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0    | Zeigt an, dass die Cues der Textspur nicht abgerufen wurden.                                                                                                                                                |
    | `LOADING` | 1    | Zeigt an, dass die Textspur geladen wird und noch keine schwerwiegenden Fehler aufgetreten sind. Weitere Cues könnten durch den Parser noch zur Spur hinzugefügt werden.                                    |
    | `LOADED`  | 2    | Zeigt an, dass die Textspur ohne schwerwiegende Fehler geladen wurde.                                                                                                                                       |
    | `ERROR`   | 3    | Zeigt an, dass die Textspur aktiviert wurde, aber als der User-Agent versuchte sie abzurufen, dies in irgendeiner Weise scheiterte. Einige oder alle Cues fehlen wahrscheinlich und werden nicht abgerufen. |

- [`HTMLTrackElement.track`](/de/docs/Web/API/HTMLTrackElement/track) {{ReadOnlyInline}}
  - : Gibt [`TextTrack`](/de/docs/Web/API/TextTrack) zurück, was die Textspurdaten des Track-Elements sind.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen:

- [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)
  - : Wird gesendet, wenn die zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack) die aktuell angezeigten Cues geändert hat. Dieses Ereignis wird immer an die `TextTrack` gesendet, aber _auch_ an das `HTMLTrackElement`, wenn eines mit der Spur verknüpft ist.
    Sie können auch den `oncuechange`-Ereignishandler verwenden, um einen Handler für dieses Ereignis festzulegen.

## Anwendungshinweise

### Laden der Textressource der Spur

Die WebVTT- oder TTML-Daten, die die tatsächlichen Cues für die Textspur beschreiben, werden nicht geladen, wenn sich der [`mode`](/de/docs/Web/API/TextTrack/mode) der Spur anfangs im `disabled`-Zustand befindet. Wenn Sie nach dem Einrichten des `<track>`-Elements eine Verarbeitung der Spur durchführen müssen, sollten Sie stattdessen sicherstellen, dass sich der `mode` der Spur entweder im `hidden`-Zustand (wenn Sie nicht möchten, dass es dem Benutzer angezeigt wird) oder im `showing`-Zustand befindet (um die Spur initial anzuzeigen). Sie können den Modus dann später nach Bedarf ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("track") }}.
