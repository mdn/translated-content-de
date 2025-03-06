---
title: WAI ARIA Live Regions/API-Unterstützung
slug: Mozilla/Firefox/Releases/3/WAI_ARIA_Live_Regions_API_Support
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{FirefoxSidebar}}

> [!WARNING]
> Diese Hinweise richten sich an Entwickler von Bildschirmleseprogrammen. Entwickler sollten die [ARIA-live-Regionen-Entwicklerdokumentation](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden.

Firefox 3 enthält wichtige Verbesserungen in der Art und Weise, wie die Mozilla-Engine Live-Änderungen in einem Dokument darstellt.

Diese Funktionen werden Bildschirmleseprogramm-Entwicklern helfen, die Qualität und Leistung der Unterstützung von Live-Regionen sowohl für Seiten, die mit ARIA-Live-Regionen-Markup versehen sind, als auch für Seiten, auf denen der Autor kein zusätzliches Markup hinzugefügt hat, zu verbessern.

Wie immer freuen wir uns über Fragen und Vorschläge für Änderungen in den [Community-Foren](https://support.mozilla.org/en-US/kb/get-community-support).

## Ereignisse bei Änderungen an Webseiten

| Was hat sich im Dokument geändert?                                                                                                          | ATK/AT-SPI-Ereignis                                                                                                                                                | IAccessible2-Ereignis                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Objekt wird ausgeblendet oder entfernt                                                                                                      | children_changed::remove (wird auf das übergeordnete Element ausgelöst, mit Ereignisdaten, die auf den Index des zu entfernenden barrierefreien Objekts verweisen) | EVENT_OBJECT_HIDE\* (wird auf das eigentliche barrierefreie Objekt ausgelöst, das entfernt wird)                        |
| Objekt wird angezeigt oder eingefügt                                                                                                        | children_changed::add (wird auf das übergeordnete Element ausgelöst, mit Ereignisdaten, die auf den Index des eingefügten barrierefreien Objekts verweisen)        | EVENT_OBJECT_SHOW\* (wird auf das neue barrierefreie Objekt ausgelöst)                                                  |
| Objekt wird durch ein anderes Objekt ersetzt (dies passiert insbesondere, wenn sich die Schnittstellen oder die Rolle eines Objekts ändern) | children_changed::remove gefolgt von children_change::add                                                                                                          | EVENT_OBJECT_HIDE gefolgt von EVENT_OBJECT_SHOW                                                                         |
| Text entfernt                                                                                                                               | text_changed::delete                                                                                                                                               | IA2_EVENT_TEXT_REMOVED (verwenden Sie IAccessibleText::get_oldText, um die Offsets und den entfernten Text abzurufen)   |
| Text eingefügt                                                                                                                              | text_changed::insert                                                                                                                                               | IA2_EVENT_TEXT_INSERTED (verwenden Sie IAccessibleText::get_newText, um die Offsets und den eingefügten Text abzurufen) |
| Text ersetzt                                                                                                                                | text_changed::delete gefolgt von text_changed::insert                                                                                                              | IA2_EVENT_TEXT_REMOVED gefolgt von IA2_EVENT_TEXT_INSERTED                                                              |

\* MSAA's CREATE/DESTROY wird auf Wunsch der Anbieter von Bildschirmleseprogrammen nicht verwendet, da diese Ereignisse auf einigen wichtigen Systemen Abstürze verursachen — SHOW/HIDE entsprechen diesen Ereignissen.

## Abrufen der vom Autor bereitgestellten ARIA-Live-Region-Semantik aus einem Ereignis

Für jedes Mutationsevent auf einer Seite kann der Autor die folgenden Objektattribute aus dem Ereignisobjekt abrufen, wenn sie auf einem Vorfahrenelement definiert sind (der nächste Vorfahre gewinnt):

| Objektattributname   | Mögliche Werte                                                                                                                                         | Standardwert                                    | ARIA-Markup, falls erforderlich            | Bedeutung                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container-live`     | `"off" \| "polite" \| "assertive"`                                                                                                                     | `"off"`                                         | `aria-live` auf Vorfahrenelement           | Unterbrechung                                                                                                                                                                                                                                                                                                                                                                            |
| `container-relevant` | `'additions'` `'removals'` `'text' \| "all"`                                                                                                           | `"additions text"`                              | `aria-relevant` auf Vorfahrenelement       | Welche Arten von Mutationen sind möglicherweise relevant? Siehe [Abschnitt](#events_fired_for_web_page_mutations_the_mutation_events_list), um den Ereignistyp mit dem Wert dieses Attributs abzugleichen und zu bestimmen, ob der Autor glaubt, dass das Ereignis dem Benutzer präsentiert werden sollte.                                                                               |
| `container-busy`     | `"true" \| "false" \| "error"`                                                                                                                         | `"false"`                                       | `aria-busy` auf Vorfahrenelement           | Die aktuellen Änderungen sind noch nicht abgeschlossen. Ein Zustandsänderungsereignis für den BUSY-Zustand der A11y-API wird auf dem Containerobjekt ausgelöst, das derzeit als BUSY markiert ist, sobald es nicht mehr BUSY ist. Dies ist besonders in atomaren Bereichen wichtig. Der gesamte atomare Bereich sollte einmal präsentiert werden, wenn er endgültig nicht mehr BUSY ist. |
| `container-atomic`   | `"true" \| "false"`                                                                                                                                    | `"false"`                                       | `aria-atomic` auf Vorfahrenelement         | Befindet sich diese Änderung in einem Bereich, der immer auf einmal präsentiert werden sollte. Wenn ja, wird die Mitgliedschafts-Beziehung auf die Wurzel des Bereichs hinweisen (siehe nächsten Abschnitt)                                                                                                                                                                              |
| `member-of`          | Wenn `container-atomic=true`, zeigt es auf ein Vorfahren zugängliches Objekt (es ist also tatsächlich eine zugängliche Beziehung, kein Objektattribut) | Nicht in atomarem Bereich, wenn nicht angegeben | `aria-atomic` auf Vorfahrenelement         | Zeigt auf die Wurzel des atomaren Containers, in dem sich dieses Objekt befindet. Dies wird immer ein Vorfahre des aktuellen Objekts sein.                                                                                                                                                                                                                                               |
| `event-from-input`   | `"true" \| "false"` (unten näher beschrieben)                                                                                                          | Browser konnte dies nicht berechnen             | Erfordert keine Zusammenarbeit des Autors. | War die Hauptursache dieses Ereignisses explizite Benutzereingabe?                                                                                                                                                                                                                                                                                                                       |

Das Präfix "container-" ist so benannt, weil das Attribut beschreibt, was die endgültige berechnete Eigenschaft gleichen Namens für diesen Knoten ist. Das bedeutet, dass das AT nicht die Elternkette nach oben durchsuchen muss, um diese Informationen zu erhalten. Zu diesem Zeitpunkt, für Eigenschaften, bei denen das `container-`_name_ Attribut nicht gesetzt ist, muss das AT Code haben, um auf den Standardwert gemäß der W3C-Spezifikation zurückzugreifen.

## Bestimmen, ob das Ereignis von Benutzereingaben stammt

Alle Ereignisse werden nun Informationen darüber bereitstellen, ob das Ereignis durch Benutzereingaben verursacht wurde oder von der Webseite ausgelöst wurde. Diese Informationen werden auf jeder Plattform unterschiedlich abgerufen, da einige Plattformen asynchrone Ereignisse verwenden.

In IAccessible2 wird dies aus dem Objektattribut "event-from-input" abgerufen, das auf "true" oder "false" gesetzt wird. Wenn es nicht vorhanden ist, dann ist etwas schiefgelaufen und Mozilla konnte diese Informationen nicht bereitstellen. Diese Informationen sind nur für EVENT_SHOW, EVENT_HIDE, IA2_EVENT_TEXT_INSERTED und IA2_EVENT_TEXT_REMOVED verfügbar.

Für ATK/AT-SPI werden diese Informationen durch Überprüfung des Ereignisnamens abgerufen. Wenn der Ereignisname ":system" angehängt hat, dann stammt es /nicht/ von Benutzereingaben. Die Zeichenfolge ":system" wird für Kinder-geänderte- und Text-geänderte-Ereignisse berechnet.

Warum ist das nützlich? Die Mehrheit der AJAX-Seiten bietet kein Live-Regionen-Markup, muss aber dennoch so benutzbar wie möglich sein. Es ist schwierig für ein Bildschirmleseprogramm zu entscheiden, wann es einen Benutzer mit Änderungen auf einer Seite unterbrechen soll. Wenn das Bildschirmleseprogramm automatisch zu viel vorliest, wird die Webseite zu lästig zu nutzen. Wenn das Bildschirmleseprogramm nichts vorliest, kann der Benutzer wichtige Informationen verpassen.

Es wird angenommen, dass diese Informationen für Heuristiken nützlich sein werden. Oft sollten Änderungen auf einer Seite, die direkt durch Tastendrücke eines Benutzers verursacht wurden, gelesen werden. Sie sind synchron mit dem, was der Benutzer gerade tut, und können daher wahrscheinlich gelesen werden, ohne den Benutzer zu desorientieren. Sobald der Benutzer die nächste Taste drückt, wird die Sprache ohnehin auf das Echo dieser Taste übergehen. Das Bildschirmleseprogramm könnte andere Faktoren berücksichtigen, wie z.B. den Änderungsart, die Größe der Änderung, wo die Änderung auftrat usw. Dies ist ein potenzieller Bereich für Innovationen in Bildschirmleseprogrammen.

| Letztes Vorkommen    | Benutzereingabe? |
| -------------------- | ---------------- |
| Tastendrücke         | Ja               |
| Mausklicks           | Ja               |
| Mausbewegungen       | Nein             |
| Seitenladeereignisse | Nein             |

Alles andere, einschließlich Fokusänderungen, Timer-Rückrufe, XMLHttpRequest-Rückrufe usw., ist neutral. Sie werden nur dann als Benutzereingabe gezählt, wenn der ursprüngliche Grund, warum sie auftraten, durch Benutzereingaben verursacht wurde.

## Was sollten Bildschirmleseprogramme präsentieren?

Bitte lesen Sie den Abschnitt über Live-Regionen im [Implementierungsleitfaden für Bildschirmleseprogramme von WAI-ARIA](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors#live_regions).
