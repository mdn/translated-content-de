---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTrackElement`** Interface repräsentiert ein {{Glossary("HTML")}} {{HTMLElement("track")}} Element innerhalb des {{Glossary("DOM")}}. Dieses Element kann als Kind von entweder {{HTMLElement("audio")}} oder {{HTMLElement("video")}} verwendet werden, um eine Textspur anzugeben, die Informationen wie Untertitel oder Bildunterschriften enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTrackElement.kind")}}
  - : Ein String, der das [`kind`](/de/docs/Web/HTML/Element/track#kind) HTML-Attribut widerspiegelt und angibt, wie die Textspur verwendet werden soll. Mögliche Werte sind: `subtitles`, `captions`, `descriptions`, `chapters` oder `metadata`.
- {{domxref("HTMLTrackElement.src")}}
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/track#src) HTML-Attribut widerspiegelt und die Adresse der Textspur-Daten angibt.
- {{domxref("HTMLTrackElement.srclang")}}
  - : Ein String, der das [`srclang`](/de/docs/Web/HTML/Element/track#srclang) HTML-Attribut widerspiegelt und die Sprache der Textspur-Daten angibt.
- {{domxref("HTMLTrackElement.label")}}
  - : Ein String, der das [`label`](/de/docs/Web/HTML/Element/track#label) HTML-Attribut widerspiegelt und einen für den Benutzer lesbaren Titel für die Spur angibt.
- {{domxref("HTMLTrackElement.default")}}
  - : Ein boolescher Wert, der das [`default`](/de/docs/Web/HTML/Element/track#default) Attribut widerspiegelt und angibt, dass die Spur aktiviert werden soll, falls die Präferenzen des Benutzers nicht anzeigen, dass eine andere Spur geeigneter wäre.
- {{domxref("HTMLTrackElement.readyState")}} {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Bereitschaftszustand der Spur anzeigt:

    | Konstante | Wert | Beschreibung                                                                                                                                                             |
    | --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `NONE`    | 0    | Zeigt an, dass die Cues der Textspur nicht abgerufen wurden.                                                                                                             |
    | `LOADING` | 1    | Zeigt an, dass die Textspur geladen wird und bisher keine schwerwiegenden Fehler aufgetreten sind. Weitere Cues könnten vom Parser der Spur hinzugefügt werden.           |
    | `LOADED`  | 2    | Zeigt an, dass die Textspur ohne schwerwiegende Fehler geladen wurde.                                                                                                    |
    | `ERROR`   | 3    | Zeigt an, dass die Textspur aktiviert wurde, aber beim Versuch des Benutzeragenten, sie abzurufen, auf irgendeine Weise fehlgeschlagen ist. Einige oder alle Cues fehlen. |

- {{domxref("HTMLTrackElement.track")}} {{ReadOnlyInline}}
  - : Gibt {{Domxref("TextTrack")}} zurück, welche die Textspurdaten des Trackagelements sind.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, {{domxref("HTMLElement")}}._

Sie können diesen Ereignissen mit {{domxref("EventTarget/addEventListener", "addEventListener()")}} lauschen oder indem Sie einen Ereignislistener der `oneventname` Eigenschaft dieses Interfaces zuweisen:

- {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}}
  - : Wird gesendet, wenn die zugrunde liegende {{domxref("TextTrack")}} die aktuell dargestellten Cues geändert hat. Dieses Ereignis wird immer an die `TextTrack` gesendet, aber _auch_ an das `HTMLTrackElement`, falls eines mit der Spur verknüpft ist. Sie können auch den `oncuechange` Ereignishandler verwenden, um einen Handler für dieses Ereignis festzulegen.

## Nutzungs-Hinweise

### Laden der Textressource der Spur

Die WebVTT- oder TTML-Daten, die die eigentlichen Cues für die Textspur beschreiben, werden nicht geladen, wenn der {{domxref("TextTrack.mode", "mode")}} der Spur initially im `disabled` Zustand ist. Wenn Sie nach der Einrichtung des `<track>` eine Verarbeitung der Spur durchführen möchten, sollten Sie sicherstellen, dass der `mode` der Spur entweder `hidden` ist (wenn Sie nicht möchten, dass er dem Benutzer zunächst angezeigt wird) oder `showing` (um die Spur anfänglich anzuzeigen). Sie können den Modus später nach Bedarf ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("track") }}.
