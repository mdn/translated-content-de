---
title: WAI ARIA Live-Bereiche/API-Unterstützung
slug: Mozilla/Firefox/Releases/3/WAI_ARIA_Live_Regions_API_Support
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{FirefoxSidebar}}

> [!WARNING]
> Diese Hinweise richten sich an Entwickler von Screenreadern. Entwickler sollten die [ARIA Live-Bereiche Entwicklerdokumentation](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden.

Firefox 3 enthält wichtige Verbesserungen in der Art und Weise, wie die Mozilla-Engine Live-Änderungen in einem Dokument offenlegt.

Diese Funktionen helfen Entwicklern von Screenreadern, die Qualität und Leistung der Unterstützung für Live-Bereiche zu verbessern, sowohl für Seiten, die mit ARIA Live-Bereich-Markup versehen sind, als auch für Seiten, bei denen der Autor kein zusätzliches Markup hinzugefügt hat.

Wie immer sind wir offen für Fragen und Vorschläge für Änderungen in [Community-Foren](https://support.mozilla.org/en-US/kb/get-community-support).

## Ereignisse, die bei Änderungen an Webseiten ausgelöst werden

| Was hat sich im Dokument geändert?                                                                                                     | ATK/AT-SPI-Ereignis                                                                                                                                         | IAccessible2-Ereignis                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Objekt, das verborgen oder entfernt werden soll                                                                                        | children_changed::remove (ausgelöst auf dem übergeordneten Element, mit Ereignisdaten, die auf den Index des zu entfernenden barrierefreien Objekts zeigen) | EVENT_OBJECT_HIDE\* (ausgelöst auf dem tatsächlichen barrierefreien Objekt, das entfernt wird)                            |
| Objekt angezeigt oder eingefügt                                                                                                        | children_changed::add (ausgelöst auf dem übergeordneten Element, mit Ereignisdaten, die auf den Index des eingefügten barrierefreien Objekts zeigen)        | EVENT_OBJECT_SHOW\* (ausgelöst auf dem tatsächlichen neuen barrierefreien Objekt)                                         |
| Objekt durch ein anderes Objekt ersetzt (dies passiert insbesondere, wenn sich die Schnittstellen oder die Rolle eines Objekts ändern) | children_changed::remove gefolgt von children_change::add                                                                                                   | EVENT_OBJECT_HIDE gefolgt von EVENT_OBJECT_SHOW                                                                           |
| Text entfernt                                                                                                                          | text_changed::delete                                                                                                                                        | IA2_EVENT_TEXT_REMOVED (verwenden Sie IAccessibleText::get_oldText, um die Offsets und den entfernten Text zu erhalten)   |
| Text eingefügt                                                                                                                         | text_changed::insert                                                                                                                                        | IA2_EVENT_TEXT_INSERTED (verwenden Sie IAccessibleText::get_newText, um die Offsets und den eingefügten Text zu erhalten) |
| Text ersetzt                                                                                                                           | text_changed::delete gefolgt von text_changed::insert                                                                                                       | IA2_EVENT_TEXT_REMOVED gefolgt von IA2_EVENT_TEXT_INSERTED                                                                |

\* Wir verwenden nicht MSAA's CREATE/DESTROY auf Bitte von Screenreader-Anbietern, die diese Ereignisse vermeiden, da sie bei einigen wichtigen Systemen Abstürze verursachen — SHOW/HIDE sind das Äquivalent dieser Ereignisse.

## Abrufen von vom Autor bereitgestellten ARIA Live-Bereich-Semantik aus einem Ereignis

Für jedes Mutationsevent in einer Seite kann der Autor die folgenden Objektattribute aus dem Ereignisobjekt abrufen, wenn sie auf einem Vorfahrenelement definiert sind (der nächstgelegene Vorfahre gewinnt):

| Objektattributname   | Mögliche Werte                                                                                                                                                              | Standardwert                                          | ARIA-Markup, wenn erforderlich         | Bedeutung                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container-live`     | `"off" \| "polite" \| "assertive"`                                                                                                                                          | `"off"`                                               | `aria-live` auf Vorfahrenelement       | Unterbrechung                                                                                                                                                                                                                                                                                                                                                                             |
| `container-relevant` | `'additions'` `'removals'` `'text' \| "all"`                                                                                                                                | `"additions text"`                                    | `aria-relevant` auf Vorfahrenelement   | Welche Arten von Mutationen sind möglicherweise relevant? Siehe [Abschnitt](#events_fired_for_web_page_mutations_the_mutation_events_list), um den Ereignistyp mit dem Wert dieses Attributs abzugleichen und zu bestimmen, ob der Autor glaubte, dass das Ereignis dem Benutzer präsentiert werden sollte oder nicht.                                                                    |
| `container-busy`     | `"true" \| "false" \| "error"`                                                                                                                                              | `"false"`                                             | `aria-busy` auf Vorfahrenelement       | Die aktuellen Änderungen sind noch nicht abgeschlossen. Ein Zustandsänderungsereignis für den BUSY-Status der A11y-API wird auf dem Containerobjekt ausgelöst, das derzeit als BUSY markiert ist, sobald es nicht mehr BUSY ist. Dies ist besonders wichtig in atomaren Bereichen. Der gesamte atomare Bereich sollte einmal präsentiert werden, wenn er schließlich nicht mehr BUSY ist. |
| `container-atomic`   | `"true" \| "false"`                                                                                                                                                         | `"false"`                                             | `aria-atomic` auf Vorfahrenelement     | Befindet sich diese Änderung in einem Bereich, der immer auf einmal präsentiert werden sollte? Wenn ja, zeigt die "member-of"-Beziehung auf die Wurzel des Bereichs (siehe nächsten Abschnitt)                                                                                                                                                                                            |
| `member-of`          | Wenn `container-atomic=true`, zeigt auf ein Vorfahrenobjekt mit Barrierefreiheit (daher ist es tatsächlich eine Beziehungsangabe der Barrierefreiheit, kein Objektattribut) | Nicht in einem atomaren Bereich, wenn nicht angegeben | `aria-atomic` auf Vorfahrenelement     | Zeigt auf die Wurzel des atomaren Containers, in dem sich dieses Objekt befindet. Dies ist immer ein Vorfahr des aktuellen Objekts.                                                                                                                                                                                                                                                       |
| `event-from-input`   | `"true" \| "false"` (weiter unten näher beschrieben)                                                                                                                        | Der Browser konnte dies nicht berechnen               | Erfordert keine Mitwirkung des Autors. | War die eigentliche Ursache dieses Ereignisses explizite Benutzereingabe?                                                                                                                                                                                                                                                                                                                 |

Das Präfix "container-" heißt so, weil das Attribut beschreibt, was die endgültige berechnete Eigenschaft ähnlichen Namens für diesen Knoten ist. Dies bedeutet, dass die AT nicht die übergeordnete Kette durchsuchen muss, um diese Informationen zu erhalten. Derzeit muss die AT für Eigenschaften, bei denen das `container-*`-Attribut nicht gesetzt wurde, einen Code haben, um auf den Standardwert zurückzugreifen, wie im W3C-Spezifikationen definiert.

## Bestimmen, ob Ereignis durch Benutzereingabe verursacht wurde

Alle Ereignisse werden nun Informationen darüber bereitstellen, ob das Ereignis durch Benutzereingaben verursacht wurde oder etwas, das die Webseite verursacht hat. Diese Informationen werden auf jeder Plattform unterschiedlich abgerufen, da einige Plattformen asynchrone Ereignisse verwenden.

In IAccessible2 wird dies vom Objektattribut "event-from-input" abgerufen, das auf "true" oder "false" gesetzt wird. Wenn es nicht vorhanden ist, ist etwas schief gelaufen und Mozilla konnte diese Information nicht bereitstellen. Diese Informationen sind nur für EVENT_SHOW, EVENT_HIDE, IA2_EVENT_TEXT_INSERTED und IA2_EVENT_TEXT_REMOVED verfügbar.

Für ATK/AT-SPI werden diese Informationen durch Überprüfung des Ereignisnamens abgerufen. Wenn dem Ereignisnamen ":system" angefügt ist, ist es /nicht/ von Benutzereingaben. Der ":system"-String wird für "children-changed" und "text-changed"-Events berechnet.

Warum ist das nützlich? Die Mehrheit der AJAX-Seiten bietet kein Live-Bereich-Markup, muss aber dennoch so benutzbar wie möglich sein. Es ist schwierig für einen Screenreader zu entscheiden, wann er einen Benutzer mit Änderungen auf einer Seite unterbrechen soll. Wenn der Screenreader automatisch zu viel liest, wird die Webseite zu nervig zu verwenden. Wenn der Screenreader nichts liest, könnte der Benutzer wichtige Informationen verpassen.

Es wird angenommen, dass diese Informationen für Heuristiken nützlich sein werden. Oft sollten Änderungen auf einer Seite, die direkt durch die Tastenanschläge eines Benutzers verursacht werden, vorgelesen werden. Sie sind synchron mit dem, was der Benutzer tut, und können daher wahrscheinlich vorgelesen werden, ohne den Benutzer zu verwirren. Sobald der Benutzer die nächste Taste drückt, wird die Sprachausgabe ohnehin zu dieser Taste weitergehen. Der Screenreader könnte andere Faktoren berücksichtigen, wie die Art der Änderung, die Größe der Änderung, wo die Änderung aufgetreten ist usw. Dies ist ein potenzieller Bereich für Innovationen in Screenreadern.

| Letztes Vorkommen    | Benutzereingabe? |
| -------------------- | ---------------- |
| Tastenanschläge      | Ja               |
| Mausklicks           | Ja               |
| Maus-Hover           | Nein             |
| Seitenladeereignisse | Nein             |

Alles andere, einschließlich Fokusänderungen, Timer-Callbacks, XMLHttpRequest-Callbacks usw., ist neutral. Sie werden nur als Benutzereingabe gezählt, wenn der ursprüngliche Grund, warum sie auftraten, Benutzereingaben waren.

## Was sollten Screenreader präsentieren?

Bitte lesen Sie den Abschnitt zu Live-Bereichen im [WAI-ARIA Screen Reader Implementor's Guide](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors#live_regions).
