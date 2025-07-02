---
title: WAI ARIA Live Regions/API-Unterstützung
slug: Mozilla/Firefox/Releases/3/WAI_ARIA_Live_Regions_API_Support
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

> [!WARNING]
> Diese Hinweise richten sich an Entwickler von Screenreadern. Entwickler sollten die [ARIA-Live-Regionen-Entwicklerdokumentation](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwenden.

Firefox 3 enthält wichtige Verbesserungen, wie die Mozilla-Engine Live-Änderungen in einem Dokument darstellt.

Diese Funktionen werden Screenreader-Entwicklern helfen, die Qualität und Leistung der Live-Regionen-Unterstützung zu verbessern, sowohl für Seiten, die mit ARIA Live-Regionen-Markup versehen sind, als auch für Seiten, bei denen der Autor kein zusätzliches Markup hinzugefügt hat.

Wie immer sind wir offen für Fragen und Anregungen zu Änderungen in [Community-Foren](https://support.mozilla.org/en-US/kb/get-community-support).

## Ereignisse, die bei Änderungen auf Webseiten ausgelöst werden

| Was hat sich im Dokument geändert?                                                                                                       | ATK/AT-SPI-Ereignis                                                                                                                                     | IAccessible2-Ereignis                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Objekt wird ausgeblendet oder entfernt                                                                                                   | children_changed::remove (wird beim Elternobjekt ausgelöst, mit Ereignisdaten, die auf den Kindindex des zu entfernenden barrierefreien Objekts zeigen) | EVENT_OBJECT_HIDE\* (wird beim tatsächlichen barrierefreien Objekt ausgelöst, das entfernt wird)                          |
| Objekt wird angezeigt oder eingefügt                                                                                                     | children_changed::add (wird beim Elternobjekt ausgelöst, mit Ereignisdaten, die auf den Kindindex des eingefügten barrierefreien Objekts zeigen)        | EVENT_OBJECT_SHOW\* (wird beim tatsächlichen neuen barrierefreien Objekt ausgelöst)                                       |
| Objekt wird durch anderes Objekt ersetzt (dies geschieht insbesondere, wenn sich die Schnittstellen oder die Rolle eines Objekts ändern) | children_changed::remove gefolgt von children_change::add                                                                                               | EVENT_OBJECT_HIDE gefolgt von EVENT_OBJECT_SHOW                                                                           |
| Text entfernt                                                                                                                            | text_changed::delete                                                                                                                                    | IA2_EVENT_TEXT_REMOVED (verwenden Sie IAccessibleText::get_oldText, um die Offsets und den entfernten Text zu erhalten)   |
| Text eingefügt                                                                                                                           | text_changed::insert                                                                                                                                    | IA2_EVENT_TEXT_INSERTED (verwenden Sie IAccessibleText::get_newText, um die Offsets und den eingefügten Text zu erhalten) |
| Text ersetzt                                                                                                                             | text_changed::delete gefolgt von text_changed::insert                                                                                                   | IA2_EVENT_TEXT_REMOVED gefolgt von IA2_EVENT_TEXT_INSERTED                                                                |

\* Wir verwenden nicht MSAA's CREATE/DESTROY auf Wunsch der Screenreader-Anbieter, die diese Ereignisse vermeiden, da sie auf einigen wichtigen Systemen Abstürze verursachen — SHOW/HIDE sind die Entsprechung dieser Ereignisse.

## Abrufen von vom Autor bereitgestellten ARIA Live-Region-Semantiken aus einem Ereignis

Für jedes Änderungsevent in einer Seite kann der Autor die folgenden Objekteigenschaften aus dem Ereignisobjekt abrufen, wenn sie auf einem Vorfahrenelement definiert sind (nächster Vorfahre gewinnt):

| Objektname           | Mögliche Werte                                                                                                                                                      | Standardwert                                    | Erforderliches ARIA-Markup              | Bedeutung                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container-live`     | `"off" \| "polite" \| "assertive"`                                                                                                                                  | `"off"`                                         | `aria-live` auf Vorfahrenelement        | Unterbrechung                                                                                                                                                                                                                                                                                                                                                                      |
| `container-relevant` | `'additions'` `'removals'` `'text' \| "all"`                                                                                                                        | `"additions text"`                              | `aria-relevant` auf Vorfahrenelement    | Welche Arten von Änderungen sind möglicherweise relevant? Siehe [Abschnitt](#events_fired_for_web_page_mutations_the_mutation_events_list), um den Ereignistyp mit dem Wert dieses Attributs abzugleichen und zu bestimmen, ob der Autor glaubt, dass das Ereignis dem Benutzer präsentiert werden sollte.                                                                         |
| `container-busy`     | `"true" \| "false" \| "error"`                                                                                                                                      | `"false"`                                       | `aria-busy` auf Vorfahrenelement        | Die aktuellen Änderungen sind noch nicht abgeschlossen. Ein Zustandsänderungsevent für den BUSY-Zustand der Barrierefreiheits-API wird auf dem Containerobjekt ausgelöst, das derzeit als BUSY markiert ist, sobald es nicht mehr BUSY ist. Dies ist besonders in atomaren Regionen wichtig. Die gesamte atomare Region sollte präsentiert werden, sobald sie nicht mehr BUSY ist. |
| `container-atomic`   | `"true" \| "false"`                                                                                                                                                 | `"false"`                                       | `aria-atomic` auf Vorfahrenelement      | Befindet sich diese Änderung in einer Region, die immer auf einmal präsentiert werden sollte. Falls ja, wird die "member-of"-Beziehung auf die Wurzel der Region verweisen (siehe nächster Abschnitt).                                                                                                                                                                             |
| `member-of`          | Wenn `container-atomic=true`, zeigt auf ein Vorfahrenobjekt mit Barrierefreiheit (daher ist es eigentlich eine Beziehung der Barrierefreiheit, kein Objektattribut) | Nicht in atomarer Region, wenn nicht angegeben. | `aria-atomic` auf Vorfahrenelement      | Verweist auf die Wurzel des atomaren Containers, in dem sich dieses Objekt befindet. Dies wird immer ein Vorfahre des aktuellen Objekts sein.                                                                                                                                                                                                                                      |
| `event-from-input`   | `"true" \| "false"` (siehe unten für mehr Details)                                                                                                                  | Browser konnte dies nicht berechnen             | Erfordert keine Kooperation des Autors. | War die Wurzel dieses Ereignisses explizite Benutzereingabe?                                                                                                                                                                                                                                                                                                                       |

Das Präfix "container-" ist so benannt, weil das Attribut beschreibt, was die endgültige berechnete Eigenschaft ähnlichen Namens für diesen Knoten ist. Das bedeutet, dass die AT die Elternkette nicht nach oben durchsuchen müssen, um diese Informationen zu erhalten. Zu diesem Zeitpunkt muss die AT für Eigenschaften, bei denen das `container-*` Attribut nicht gesetzt wurde, Code haben, um auf den Standardwert zurückzugreifen, wie in der W3C-Spezifikation definiert.

## Bestimmen, ob ein Ereignis von Benutzereingaben stammt

Alle Ereignisse bieten nun Informationen darüber, ob das Ereignis durch Benutzereingaben verursacht wurde oder etwas war, das die Webseite verursacht hat. Diese Informationen werden auf jeder Plattform unterschiedlich abgerufen, da einige Plattformen asynchrone Ereignisse verwenden.

In IAccessible2 wird dies durch das Objektattribut "event-from-input" abgerufen, das auf "true" oder "false" gesetzt wird. Wenn es nicht vorhanden ist, ist etwas schief gelaufen und Mozilla konnte diese Information nicht bereitstellen. Diese Information ist nur für EVENT_SHOW, EVENT_HIDE, IA2_EVENT_TEXT_INSERTED und IA2_EVENT_TEXT_REMOVED verfügbar.

Für ATK/AT-SPI wird diese Information durch Überprüfung des Ereignisnamens abgerufen. Wenn der Ereignisname das Suffix ":system" hat, stammt es /nicht/ von Benutzereingaben. Der ":system"-String wird für Events "children-changed" und "text-changed" berechnet.

Warum ist das nützlich? Die Mehrheit der AJAX-Seiten liefert kein Live-Regionen-Markup, muss aber dennoch so benutzbar wie möglich sein. Es ist schwierig für einen Screenreader zu entscheiden, wann ein Benutzer durch Änderungen auf einer Seite unterbrochen werden soll. Wenn der Screenreader zu viel automatisch liest, wird die Webseite zu lästig zu benutzen. Wenn der Screenreader gar nichts liest, kann der Benutzer wichtige Informationen verpassen.

Es wird angenommen, dass diese Informationen für Heuristiken nützlich sein werden. Häufig sollten Änderungen auf einer Seite, die direkt von den Tastenanschlägen des Benutzers verursacht werden, vorgelesen werden. Sie sind synchron mit dem, was der Benutzer tut und können deshalb wahrscheinlich gelesen werden, ohne den Benutzer zu desorientieren. Sobald der Benutzer die nächste Taste drückt, wird die Sprache sowieso fortfahren, um diese Taste widerzuspiegeln. Der Screenreader kann auch andere Faktoren berücksichtigen, wie z. B. die Art der Änderung, die Größe der Änderung, wo die Änderung erfolgte usw. Dies ist ein potenzielles Innovationsgebiet für Screenreader.

| Neueste Vorkommnis | Benutzereingabe? |
| ------------------ | ---------------- |
| Tastenanschläge    | Ja               |
| Mausklicks         | Ja               |
| Maus-Hover         | Nein             |
| Seitenevent laden  | Nein             |

Alles andere, einschließlich Fokusänderungen, Timer-Callbacks, XMLHttpRequest-Callbacks usw., ist neutral. Sie werden nur als Benutzereingabe gezählt, wenn der ursprüngliche Grund dafür war, dass sie aufgrund von Benutzereingaben stattfanden.

## Was sollten Screenreader präsentieren?

Bitte lesen Sie den Abschnitt über Live-Regionen im [WAI-ARIA Screen Reader Implementor's Guide](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors#live_regions).
