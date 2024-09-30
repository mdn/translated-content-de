---
title: WAI ARIA Live Regions/API-Unterstützung
slug: Mozilla/Firefox/Releases/3/WAI_ARIA_Live_Regions_API_Support
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

> [!WARNING]
> Diese Hinweise sind für Entwickler von Screenreadern. Entwickler sollten die [ARIA Live Regions Entwicklerdokumentation](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden.

Firefox 3 enthält wichtige Verbesserungen, wie die Mozilla-Engine Live-Änderungen in einem Dokument offenlegt.

Diese Funktionen werden Entwicklern von Screenreadern helfen, die Qualität und Leistung der Unterstützung für Live-Bereiche zu verbessern, sowohl für Seiten, die mit ARIA-Live-Region-Markup versehen sind, als auch für Seiten, bei denen der Autor kein zusätzliches Markup hinzugefügt hat.

Wie immer sind wir offen für Fragen und Änderungsvorschläge in den [Community-Foren](https://support.mozilla.org/en-US/kb/get-community-support).

## Ereignisse bei Änderungen an Webseiten

| Was hat sich im Dokument geändert?                                                                       | ATK/AT-SPI-Ereignis                                                                                                                  | IAccessible2-Ereignis                                                                                    |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Objekt wird ausgeblendet oder entfernt                                                                    | children_changed::remove (wird für das Elternteil ausgelöst, mit Ereignisdaten, die auf den Kindindex des zu entfernenden zugänglichen Objekts verweisen) | EVENT_OBJECT_HIDE\* (wird für das tatsächliche zugängliche Objekt ausgelöst, das entfernt wird)          |
| Objekt angezeigt oder eingefügt                                                                           | children_changed::add (wird für das Elternteil ausgelöst, mit Ereignisdaten, die auf den Kindindex des eingefügten zugänglichen Objekts verweisen)         | EVENT_OBJECT_SHOW\* (wird für das tatsächliche neue zugängliche Objekt ausgelöst)                        |
| Objekt durch ein anderes Objekt ersetzt (dies geschieht insbesondere, wenn sich die Schnittstellen oder Rollen eines Objekts ändern) | children_changed::remove gefolgt von children_change::add                                                              | EVENT_OBJECT_HIDE gefolgt von EVENT_OBJECT_SHOW                                         |
| Text entfernt                                                                                             | text_changed::delete                                                                                                                   | IA2_EVENT_TEXT_REMOVED (verwenden Sie IAccessibleText::get_oldText, um die Offsets und den entfernten Text abzurufen)   |
| Text eingefügt                                                                                            | text_changed::insert                                                                                                                   | IA2_EVENT_TEXT_INSERTED (verwenden Sie IAccessibleText::get_newText, um die Offsets und den eingefügten Text abzurufen) |
| Text ersetzt                                                                                              | text_changed::delete gefolgt von text_changed::insert                                                                  | IA2_EVENT_TEXT_REMOVED gefolgt von IA2_EVENT_TEXT_INSERTED                               |

\* Wir verwenden nicht MSAA's CREATE/DESTROY auf Wunsch der Screenreader-Anbieter, die diese Ereignisse vermeiden, da sie auf einigen wichtigen Systemen Abstürze verursachen — SHOW/HIDE sind das Äquivalent dieser Ereignisse.

## Abrufen von vom Autor bereitgestellten ARIA-Live-Regions-Semantiken aus einem Ereignis

Für jedes Mutationsevent in einer Seite kann der Autor die folgenden Objektattribute vom Ereignisobjekt abrufen, wenn sie auf einem übergeordneten Element definiert sind (der nächstgelegene Vorfahre gewinnt):

| Objektattributname    | Mögliche Werte                                                                                                                          | Standardwert                          | ARIA-Markup erforderlich               | Bedeutung                                                                                                                                                                                                                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `container-live`      | `"off" \| "polite" \| "assertive"`                                                                                                      | `"off"`                               | `aria-live` auf übergeordnetem Element | Unterbrechung                                                                                                                                                                                                                                                                                                               |
| `container-relevant`  | `'additions'` `'removals'` `'text' \| "all"`                                                                                            | `"additions text"`                    | `aria-relevant` auf übergeordnetem Element | Welche Arten von Veränderungen sind möglicherweise relevant? Siehe [Abschnitt](#events_fired_for_web_page_mutations_the_mutation_events_list), um den Ereignistyp mit dem Wert dieses Attributs abzugleichen, um festzustellen, ob der Autor glaubte, dass das Ereignis dem Benutzer präsentiert werden sollte oder nicht. |
| `container-busy`      | `"true" \| "false" \| "error"`                                                                                                          | `"false"`                             | `aria-busy` auf übergeordnetem Element  | Die aktuellen Änderungen sind noch nicht abgeschlossen. Ein Zustandsänderungsevent für den BUSY-Zustand der A11y-API wird auf dem Containerobjekt ausgelöst, das derzeit als BUSY markiert ist, sobald es nicht mehr BUSY ist. Dies ist besonders wichtig in atomaren Regionen. Die gesamte atomare Region sollte einmal präsentiert werden, wenn sie schließlich nicht mehr BUSY ist. |
| `container-atomic`    | `"true" \| "false"`                                                                                                                     | `"false"`                             | `aria-atomic` auf übergeordnetem Element | Befindet sich diese Änderung in einem Bereich, der immer auf einmal präsentiert werden sollte? Wenn ja, wird die "member-of"-Relation auf die Wurzel des Bereichs verweisen (siehe nächsten Abschnitt).                                                                                                                                                                  |
| `member-of`           | Bei `container-atomic=true`, verweist auf ein übergeordnetes zugängliches Objekt (daher ist es eigentlich eine zugängliche Relation, kein Objektattribut) | Nicht in atomarer Region, wenn nicht angegeben | `aria-atomic` auf übergeordnetem Element | Verweist auf die Wurzel des atomaren Containers, in dem sich dieses Objekt befindet. Dies wird immer ein Vorfahre des aktuellen Objekts sein.                                                                                                                                                                          |
| `event-from-input`    | `"true" \| "false"` (weiter unten näher beschrieben)                                                                                    | Browser konnte dies nicht berechnen   | Keine Mitwirkung des Autors erforderlich | War die eigentliche Ursache dieses Ereignisses eine explizite Benutzereingabe?                                                                                                                                                                                                                                              |

Das Präfix "container-" wurde so benannt, weil das Attribut beschreibt, was die endgültige berechnete Eigenschaft ähnlichen Namens für diesen Knoten ist. Dies bedeutet, dass das AT nicht die Elternkette durchlaufen muss, um diese Informationen zu erhalten. Zu dieser Zeit muss das AT für Eigenschaften, bei denen das `container-`_Name_-Attribut nicht gesetzt wurde, über einen Code verfügen, um auf den Standardwert gemäß der W3C-Spezifikation zurückzugreifen.

## Bestimmung, ob das Ereignis von einer Benutzereingabe stammt

Alle Ereignisse liefern nun Informationen darüber, ob das Ereignis durch Benutzereingaben verursacht wurde oder etwas ist, das die Webseite verursacht hat. Diese Informationen werden auf jeder Plattform unterschiedlich abgerufen, da einige Plattformen asynchrone Ereignisse verwenden.

In IAccessible2 wird dies aus dem Objektattribut "event-from-input" abgerufen, das auf "true" oder "false" gesetzt wird. Wenn es nicht vorhanden ist, ging etwas schief und Mozilla konnte diese Informationen nicht bereitstellen. Diese Informationen sind nur für EVENT_SHOW, EVENT_HIDE, IA2_EVENT_TEXT_INSERTED und IA2_EVENT_TEXT_REMOVED verfügbar.

Für ATK/AT-SPI werden diese Informationen durch Überprüfung des Ereignisnamens abgerufen. Wenn dem Ereignisnamen ":system" angehängt ist, dann stammt es /nicht/ von einer Benutzereingabe. Der ":system"-String wird für children-changed- und text-changed-Ereignisse berechnet.

Warum ist das nützlich? Die Mehrheit der AJAX-Seiten bietet kein Live-Region-Markup, muss aber dennoch so benutzerfreundlich wie möglich sein. Es ist schwierig für einen Screenreader zu entscheiden, wann ein Benutzer mit Änderungen auf einer Seite unterbrochen werden sollte. Wenn der Screenreader automatisch zu viel liest, wird die Webseite zu irritierend, um sie zu verwenden. Wenn der Screenreader gar nichts liest, kann der Benutzer wichtige Informationen verpassen.

Es wird angenommen, dass diese Informationen für Heuristiken nützlich sein werden. Oft sollten Änderungen auf einer Seite, die direkt durch Tastenanschläge eines Benutzers verursacht werden, vorgelesen werden. Sie sind synchron mit dem, was der Benutzer tut, und können daher wahrscheinlich gelesen werden, ohne den Benutzer zu verwirren. Sobald der Benutzer die nächste Taste drückt, geht die Sprachausgabe ohnehin dazu über, diese Taste zu wiederholen. Der Screenreader könnte andere Faktoren berücksichtigen wollen, wie die Art der Änderung, die Größe der Änderung, wo die Änderung stattfand usw. Dies ist ein potenzielles Innovationsgebiet für Screenreader.

| Jüngstes Vorkommen     | Benutzereingabe? |
| ---------------------- | ---------------- |
| Tastatureingaben       | Ja               |
| Maus-Klicks            | Ja               |
| Maus-Hover             | Nein             |
| Seitenlade-Ereignisse  | Nein             |

Alles andere, einschließlich Fokusänderungen, Timer-Callbacks, XMLHttpRequest-Callbacks usw., ist neutral. Sie werden nur als Benutzereingabe gezählt, wenn der ursprüngliche Grund für ihr Auftreten eine Benutzereingabe war.

## Was sollten Screenreader präsentieren?

Bitte lesen Sie den Live-Region-Abschnitt des [WAI-ARIA Screenreader-Implementierer-Leitfadens](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide#live_regions).
