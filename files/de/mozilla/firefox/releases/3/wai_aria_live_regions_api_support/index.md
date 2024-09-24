---
title: WAI ARIA Live-Bereiche/API-Unterstützung
slug: Mozilla/Firefox/Releases/3/WAI_ARIA_Live_Regions_API_Support
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

> [!WARNING]
> Diese Anmerkungen sind für Entwickler von Screenreadern gedacht. Entwickler sollten die [ARIA Live-Bereiche Entwicklerdokumentation](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden.

Firefox 3 enthält wichtige Verbesserungen hinsichtlich der Art und Weise, wie die Mozilla-Engine Live-Änderungen in einem Dokument offenlegt.

Diese Funktionen werden Entwicklern von Screenreadern helfen, die Qualität und Leistung der Live-Bereich-Unterstützung zu verbessern, sowohl für Seiten, die mit ARIA-Live-Bereich-Markup versehen sind, als auch für Seiten, bei denen der Autor kein zusätzliches Markup hinzugefügt hat.

Wie immer sind wir für Fragen und Vorschläge zu Änderungen in [Community-Foren](https://support.mozilla.org/en-US/kb/get-community-support) offen.

## Ereignisse, die bei Änderungen auf Webseiten ausgelöst werden

| Was hat sich im Dokument geändert?                                                                       | ATK/AT-SPI-Ereignis                                                                                                              | IAccessible2-Ereignis                                                                                    |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Objekt wird ausgeblendet oder entfernt                                                                   | children_changed::remove (wird an dem Elternteil ausgelöst, mit Ereignisdaten, die auf den Index des zu entfernenden zugänglichen Objekts verweisen) | EVENT_OBJECT_HIDE\* (wird auf dem tatsächlichen zugänglichen Objekt ausgelöst, das entfernt wird)         |
| Objekt wird angezeigt oder eingefügt                                                                     | children_changed::add (wird an dem Elternteil ausgelöst, mit Ereignisdaten, die auf den Index des eingefügten zugänglichen Objekts verweisen)        | EVENT_OBJECT_SHOW\* (wird auf dem tatsächlichen neuen zugänglichen Objekt ausgelöst)                      |
| Objekt wurde durch ein anderes Objekt ersetzt (dies passiert insbesondere, wenn sich die Schnittstellen oder Rollen eines Objekts ändern) | children_changed::remove gefolgt von children_change::add                                                                | EVENT_OBJECT_HIDE gefolgt von EVENT_OBJECT_SHOW                                                         |
| Text entfernt                                                                                            | text_changed::delete                                                                                                             | IA2_EVENT_TEXT_REMOVED (verwenden Sie IAccessibleText::get_oldText, um die Offsets und den entfernten Text abzurufen)   |
| Text eingefügt                                                                                           | text_changed::insert                                                                                                             | IA2_EVENT_TEXT_INSERTED (verwenden Sie IAccessibleText::get_newText, um die Offsets und den eingefügten Text abzurufen) |
| Text ersetzt                                                                                             | text_changed::delete gefolgt von text_changed::insert                                                                           | IA2_EVENT_TEXT_REMOVED gefolgt von IA2_EVENT_TEXT_INSERTED                                              |

\* Wir verwenden nicht MSAAs CREATE/DESTROY auf Wunsch von Screenreader-Anbietern, die diese Ereignisse vermeiden, da sie Abstürze auf einigen wichtigen Systemen verursachen — SHOW/HIDE sind die Entsprechungen dieser Ereignisse.

## Abrufen von vom Autor bereitgestellten ARIA-Live-Bereich-Semantiken aus einem Ereignis

Für jedes Änderungsereignis auf einer Seite kann der Autor die folgenden Objektattribute aus dem Ereignisobjekt erhalten, wenn sie auf einem übergeordneten Element definiert sind (das nächste übergeordnete Element hat Vorrang):

| Objektattributname    | Mögliche Werte                                                                                                                        | Standardwert                          | ARIA-Markup, falls erforderlich            | Bedeutung                                                                                                                                                                                                                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container-live`      | `"off" \| "polite" \| "assertive"`                                                                                                     | `"off"`                                | `aria-live` auf dem übergeordneten Element | Unterbrechung                                                                                                                                                                                                                                                                                                            |
| `container-relevant`  | `'additions'` `'removals'` `'text' \| "all"`                                                                                           | `"additions text"`                     | `aria-relevant` auf dem übergeordneten Element | Welche Arten von Änderungen sind möglicherweise relevant? Siehe [Abschnitt](#events_fired_for_web_page_mutations_the_mutation_events_list), um den Ereignistyp mit dem Wert dieses Attributs abzugleichen und festzustellen, ob der Autor glaubte, dass das Ereignis dem Benutzer präsentiert werden sollte oder nicht.      |
| `container-busy`      | `"true" \| "false" \| "error"`                                                                                                         | `"false"`                              | `aria-busy` auf dem übergeordneten Element | Die aktuellen Änderungen sind noch nicht abgeschlossen. Ein Zustandsänderungsereignis für den BUSY-Zustand der A11y-API wird für das derzeit als BUSY markierte Containerobjekt ausgelöst, sobald es nicht mehr BUSY ist. Dies ist besonders in atomaren Bereichen wichtig. Der gesamte atomare Bereich sollte einmal präsentiert werden, wenn er schließlich nicht mehr BUSY ist. |
| `container-atomic`    | `"true" \| "false"`                                                                                                                    | `"false"`                              | `aria-atomic` auf dem übergeordneten Element | Ist diese Änderung innerhalb eines Bereichs, der immer auf einmal präsentiert werden sollte? Wenn ja, verweist die Mitgliedschaftsbeziehung auf die Wurzel des Bereichs (siehe nächsten Abschnitt)                                                                                                                         |
| `member-of`           | Wenn `container-atomic=true`, verweist auf ein übergeordnetes zugängliches Objekt (daher ist es eigentlich eine zugängliche Beziehung, nicht ein Objektattribut) | Nicht in einem atomaren Bereich, falls nicht bereitgestellt | `aria-atomic` auf dem übergeordneten Element | Verweist auf die Wurzel des atomaren Containers, in dem sich dieses Objekt befindet. Dies wird immer ein Vorfahr des aktuellen Objekts sein.                                                                                                                                                                              |
| `event-from-input`    | `"true" \| "false"` (unten näher beschrieben)                                                                                           | Browser konnte dies nicht berechnen    | Erfordert keine Mitarbeit des Autors.      | War die eigentliche Ursache dieses Ereignisses eine explizite Benutzereingabe?                                                                                                                                                                                                                                                                                    |

Das Präfix "container-" ist so benannt, weil das Attribut beschreibt, was die endgültige berechnete Eigenschaft gleichen Namens für diesen Knoten ist. Das bedeutet, dass das AT nicht den übergeordneten Knoten durchlaufen muss, um diese Informationen zu erhalten. Zu diesem Zeitpunkt, für Eigenschaften, bei denen das Attribut `container-`_name_ nicht gesetzt wurde, muss das AT über Code verfügen, um auf den Standardwert gemäß der W3C-Spezifikation zurückzufallen.

## Feststellen, ob ein Ereignis durch Benutzereingabe verursacht wurde

Alle Ereignisse bieten nun Informationen darüber, ob das Ereignis durch Benutzereingabe verursacht wurde oder durch etwas, das die Webseite verursachte. Diese Informationen werden unterschiedlich auf jeder Plattform abgerufen, da einige Plattformen asynchrone Ereignisse verwenden.

In IAccessible2 wird dies über das Objektattribut "event-from-input" abgerufen, das auf "true" oder "false" gesetzt wird. Ist es nicht vorhanden, ging etwas schief und Mozilla konnte diese Informationen nicht bereitstellen. Diese Informationen sind nur für EVENT_SHOW, EVENT_HIDE, IA2_EVENT_TEXT_INSERTED und IA2_EVENT_TEXT_REMOVED verfügbar.

Für ATK/AT-SPI werden diese Informationen angezeigt, indem der Ereignisname überprüft wird. Wenn der Ereignisname ":system" angehängt hat, dann stammt es /nicht/ aus einer Benutzereingabe. Der String ":system" wird für children-changed- und text-changed-Ereignisse berechnet.

Warum ist das nützlich? Die Mehrheit der AJAX-Seiten bietet kein Live-Bereich-Markup, muss aber dennoch so benutzerfreundlich wie möglich sein. Es ist schwierig für einen Screenreader zu entscheiden, wann er den Benutzer mit Änderungen auf einer Seite unterbrechen sollte. Wenn der Screenreader zu viel automatisch liest, wird die Webseite zu störend. Liest der Screenreader nichts, kann der Benutzer wichtige Informationen verpassen.

Man glaubt, dass diese Informationen für Heuristiken nützlich sein werden. Oft sollten Änderungen auf einer Seite, die direkt durch Tastendrücke des Benutzers verursacht wurden, gelesen werden. Sie sind synchron mit dem, was der Benutzer tut, und können daher wahrscheinlich gelesen werden, ohne den Benutzer zu desorientieren. Sobald der Benutzer die nächste Taste drückt, wird die Sprachausgabe ohnehin fortgesetzt, um diese Taste widerzuspiegeln. Der Screenreader möchte möglicherweise andere Faktoren berücksichtigen, wie die Art der Änderung, die Größe der Änderung, wo die Änderung auftrat usw. Dies ist ein potenzieller Bereich für Innovationen bei Screenreadern.

| Jüngster Vorfall       | Benutzereingabe? |
| ---------------------- | ---------------- |
| Tastenanschläge        | Ja               |
| Mausklicks             | Ja               |
| Mauszeigerbewegungen   | Nein             |
| Seitenladeereignisse   | Nein             |

Alles andere, einschließlich Fokusänderungen, Timer-Rückrufe, XMLHttpRequest-Rückrufe usw., ist neutral. Diese werden nur als Benutzereingaben gezählt, wenn der ursprüngliche Grund, warum sie auftraten, Benutzereingaben waren.

## Was sollten Screenreader präsentieren?

Bitte lesen Sie den Live-Bereichsabschnitt des [WAI-ARIA Screen Reader Implementor's Guide](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide#live_regions).
