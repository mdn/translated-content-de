---
title: Unterstützung von WAI ARIA Live-Regions-API
slug: Mozilla/Firefox/Releases/3/WAI_ARIA_Live_Regions_API_Support
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

> [!WARNING]
> Diese Hinweise sind für Entwickler von Bildschirmleseprogrammen. Entwickler sollten die [ARIA Entwicklerdokumentation für Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden.

Firefox 3 enthält wichtige Verbesserungen, wie die Mozilla-Engine Änderungen in einem Dokument in Echtzeit sichtbar macht.

Diese Funktionen helfen Entwicklern von Bildschirmleseprogrammen, die Qualität und Leistung der Unterstützung von Live-Regionen zu verbessern, sowohl für Seiten, die mit ARIA Live Regions-Markup ausgezeichnet sind, als auch für Seiten, bei denen der Autor kein zusätzliches Markup hinzugefügt hat.

Wie immer sind wir offen für Fragen und Anregungen zu Änderungen in den [Community-Foren](https://support.mozilla.org/en-US/kb/get-community-support).

## Ereignisse, die bei Änderungen an Webseiten ausgelöst werden

| Was hat sich im Dokument geändert?                                                                                         | ATK/AT-SPI-Ereignis                                                                                                                          | IAccessible2-Ereignis                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Objekt wird ausgeblendet oder entfernt                                                                                     | children_changed::remove (ausgelöst im Elternobjekt, mit Ereignisdaten, die auf den Index des zu entfernenden barrierefreien Objekts zeigen) | EVENT_OBJECT_HIDE\* (ausgelöst im eigentlichen barrierefreien Objekt, das entfernt wird)                                |
| Objekt wird angezeigt oder eingefügt                                                                                       | children_changed::add (ausgelöst im Elternobjekt, mit Ereignisdaten, die auf den Index des eingefügten barrierefreien Objekts zeigen)        | EVENT_OBJECT_SHOW\* (ausgelöst im eigentlichen neuen barrierefreien Objekt)                                             |
| Objekt ersetzt ein anderes Objekt (dies passiert besonders, wenn sich die Schnittstellen oder Rollen eines Objekts ändern) | children_changed::remove gefolgt von children_change::add                                                                                    | EVENT_OBJECT_HIDE gefolgt von EVENT_OBJECT_SHOW                                                                         |
| Text entfernt                                                                                                              | text_changed::delete                                                                                                                         | IA2_EVENT_TEXT_REMOVED (verwenden Sie IAccessibleText::get_oldText, um die Offsets und den entfernten Text abzurufen)   |
| Text eingefügt                                                                                                             | text_changed::insert                                                                                                                         | IA2_EVENT_TEXT_INSERTED (verwenden Sie IAccessibleText::get_newText, um die Offsets und den eingefügten Text abzurufen) |
| Text ersetzt                                                                                                               | text_changed::delete gefolgt von text_changed::insert                                                                                        | IA2_EVENT_TEXT_REMOVED gefolgt von IA2_EVENT_TEXT_INSERTED                                                              |

\* MSAA's CREATE/DESTROY wird auf Wunsch der Anbieter von Bildschirmleseprogrammen nicht verwendet, da diese Ereignisse in einigen wichtigen Systemen Abstürze verursachen — SHOW/HIDE entsprechen diesen Ereignissen.

## Abrufen von vom Autor bereitgestellten ARIA Live Regions-Semantiken aus einem Ereignis

Für jedes Mutationsereignis auf einer Seite kann der Autor die folgenden Objektattribute vom Ereignisobjekt abrufen, wenn sie für ein übergeordnetes Element definiert sind (nächstgelegenes übergeordnetes Element gewinnt):

| Name des Objektattributs | Mögliche Werte                                                                                                                                                | Standardwert                                   | Erforderliches ARIA-Markup                 | Bedeutung                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container-live`         | `"off" \| "polite" \| "assertive"`                                                                                                                            | `"off"`                                        | `aria-live` im übergeordneten Element      | Unterbrechung                                                                                                                                                                                                                                                                                                                                                                               |
| `container-relevant`     | `'additions'` `'removals'` `'text' \| "all"`                                                                                                                  | `"additions text"`                             | `aria-relevant` im übergeordneten Element  | Welche Mutationen sind möglicherweise relevant? Vergleichen Sie die Art des Ereignisses mit dem Wert dieses Attributs, um festzustellen, ob der Autor glaubte, dass das Ereignis dem Benutzer präsentiert werden sollte oder nicht.                                                                                                                                                         |
| `container-busy`         | `"true" \| "false" \| "error"`                                                                                                                                | `"false"`                                      | `aria-busy` im übergeordneten Element      | Die aktuellen Änderungen sind noch nicht abgeschlossen. Ein Zustandsänderungsereignis für den BUSY-Zustand der barrierefreien API wird für das aktuell als BUSY markierte Containerobjekt ausgelöst, sobald es nicht mehr BUSY ist. Dies ist besonders wichtig in atomaren Regionen. Die gesamte atomare Region sollte einmal präsentiert werden, wenn sie schließlich nicht mehr BUSY ist. |
| `container-atomic`       | `"true" \| "false"`                                                                                                                                           | `"false"`                                      | `aria-atomic` im übergeordneten Element    | Ist diese Änderung in einer Region, die immer auf einmal präsentiert werden soll. Wenn ja, zeigt die Mitglied-von-Beziehung auf die Wurzel der Region (siehe nächster Abschnitt)                                                                                                                                                                                                            |
| `member-of`              | Wenn `container-atomic=true`, zeigt auf ein übergeordnetes barrierefreies Objekt (daher ist es tatsächlich eine barrierefreie Beziehung, kein Objektattribut) | Nicht in atomarer Region, wenn nicht angegeben | `aria-atomic` im übergeordneten Element    | Zeigt auf die Wurzel des atomaren Containers, in dem sich dieses Objekt befindet. Dies wird immer ein Vorfahr des aktuellen Objekts sein.                                                                                                                                                                                                                                                   |
| `event-from-input`       | `"true" \| "false"` (weiter unten näher beschrieben)                                                                                                          | Browser konnte dies nicht berechnen            | Keine Beteiligung des Autors erforderlich. | War die Ursache dieses Ereignisses eine explizite Benutzereingabe?                                                                                                                                                                                                                                                                                                                          |

Das Präfix "container-" ist so benannt, weil das Attribut beschreibt, was die endgültig berechnete Eigenschaft ähnlichen Namens für diesen Knoten ist. Dies bedeutet, dass die AT (Assistive Technology) nicht die übergeordnete Kette durchsuchen muss, um diese Informationen zu erhalten. Zu diesem Zeitpunkt muss die AT, wenn für Eigenschaften, bei denen das `container-`_name_ Attribut nicht gesetzt wurde, Code haben, um auf den Standardwert zurückzufallen, wie in der W3C-Spezifikation definiert.

## Feststellung, ob das Ereignis von Benutzereingaben stammte

Alle Ereignisse geben jetzt Informationen darüber, ob das Ereignis durch Benutzereingaben verursacht wurde oder ob die Webseite dies verursacht hat. Diese Informationen werden auf jeder Plattform unterschiedlich abgerufen, da einige Plattformen asynchrone Ereignisse verwenden.

In IAccessible2 wird dies aus dem Objektattribut "event-from-input" abgerufen, das auf "true" oder "false" gesetzt wird. Wenn es nicht vorhanden ist, ist etwas schiefgelaufen und Mozilla konnte diese Informationen nicht bereitstellen. Diese Informationen sind nur für EVENT_SHOW, EVENT_HIDE, IA2_EVENT_TEXT_INSERTED und IA2_EVENT_TEXT_REMOVED verfügbar.

Für ATK/AT-SPI werden diese Informationen durch Überprüfung des Ereignisnamens abgerufen. Wenn dem Ereignisnamen ":system" angehängt ist, stammt es /nicht/ von Benutzereingaben. Der String ":system" wird für child-changed und text-changed Ereignisse berechnet.

Warum ist das nützlich? Die Mehrheit der AJAX-Seiten bietet keine Live-Region-Markup, muss aber dennoch so benutzerfreundlich wie möglich sein. Es ist schwierig für ein Bildschirmleseprogramm zu entscheiden, wann ein Benutzer mit Änderungen auf einer Seite unterbrochen werden soll. Wenn das Bildschirmleseprogramm automatisch zu viel liest, wird die Webseite zu nervig zu verwenden. Wenn das Bildschirmleseprogramm nichts liest, kann der Benutzer wichtige Informationen verpassen.

Es wird angenommen, dass diese Informationen für Heuristiken nützlich sein werden. Oft sollten Änderungen an einer Seite, die direkt durch die Tastenanschläge eines Benutzers verursacht werden, gelesen werden. Sie sind synchron mit dem, was der Benutzer tut, und können daher wahrscheinlich gelesen werden, ohne den Benutzer zu desorientieren. Sobald der Benutzer die nächste Taste drückt, geht die Sprachwiedergabe sowieso dazu über, diese Taste wiederzugeben. Das Bildschirmleseprogramm kann andere Faktoren berücksichtigen, wie die Art der Änderung, die Größe der Änderung, wo die Änderung erfolgte usw. Dies ist ein potenzieller Bereich für Innovationen in Bildschirmleseprogrammen.

| Jüngster Vorfall       | Benutzereingabe? |
| ---------------------- | ---------------- |
| Tastenanschläge        | Ja               |
| Mausklicks             | Ja               |
| Mauszeigerbewegungen   | Nein             |
| Seitene Ladeereignisse | Nein             |

Alles andere, einschließlich Fokusänderungen, Timer-Rückrufe, XMLHttpRequest-Rückrufe usw., ist neutral. Sie werden nur als Benutzereingaben gezählt, wenn der ursprüngliche Grund, warum sie aufgetreten sind, auf Benutzereingaben zurückzuführen ist.

## Was sollten Bildschirmleseprogramme präsentieren?

Bitte lesen Sie den Abschnitt über Live-Regionen im [WAI-ARIA-Leitfaden für Entwickler von Bildschirmleseprogrammen](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide#live_regions).
