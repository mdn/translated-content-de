---
title: WAI ARIA Live Regions/API-Unterstützung
slug: Mozilla/Firefox/Releases/3/WAI_ARIA_Live_Regions_API_Support
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

> [!WARNING]
> Diese Hinweise sind für Entwickler von Bildschirmlesegeräten. Entwickler sollten die [ARIA Live Regions Entwicklerdokumentation](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) nutzen.

Firefox 3 enthält wichtige Verbesserungen für die Art und Weise, wie die Mozilla-Engine Live-Änderungen in einem Dokument exponiert.

Diese Funktionen helfen Entwicklern von Bildschirmlesegeräten, die Qualität und Leistung der Unterstützung für Live-Regionen zu verbessern, sowohl für Seiten, die mit ARIA Live-Region-Markierungen ausgezeichnet sind, als auch für Seiten, bei denen der Autor keine zusätzlichen Markierungen hinzugefügt hat.

Wie immer sind wir offen für Fragen und Änderungsvorschläge in den [Community-Foren](https://support.mozilla.org/en-US/kb/get-community-support).

## Ereignisse, die bei Webseitentransformationen ausgelöst werden

| Was hat sich im Dokument geändert?                                                                                                   | ATK/AT-SPI-Ereignis                                                                                                                                     | IAccessible2-Ereignis                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Objekt, das aufgrund von Versteckung oder Entfernung im Begriff ist, versteckt zu werden                                             | children_changed::remove (wird beim Elternteil ausgelöst, mit Ereignisdaten, die auf den Kinderindex des zu entfernenden barrierefreien Objekts zeigen) | EVENT_OBJECT_HIDE\* (wird beim eigentlichen barrierefreien Objekt ausgelöst, das entfernt wird)                         |
| Objekt gezeigt oder eingefügt                                                                                                        | children_changed::add (wird beim Elternteil ausgelöst, mit Ereignisdaten, die auf den Kinderindex des eingefügten barrierefreien Objekts zeigen)        | EVENT_OBJECT_SHOW\* (wird beim eigentlichen neuen barrierefreien Objekt ausgelöst)                                      |
| Objekt mit einem anderen Objekt ersetzt (dies geschieht besonders, wenn sich die Schnittstellen oder die Rolle eines Objekts ändern) | children_changed::remove gefolgt von children_change::add                                                                                               | EVENT_OBJECT_HIDE gefolgt von EVENT_OBJECT_SHOW                                                                         |
| Text entfernt                                                                                                                        | text_changed::delete                                                                                                                                    | IA2_EVENT_TEXT_REMOVED (verwenden Sie IAccessibleText::get_oldText, um die Offsets und den entfernten Text abzurufen)   |
| Text eingefügt                                                                                                                       | text_changed::insert                                                                                                                                    | IA2_EVENT_TEXT_INSERTED (verwenden Sie IAccessibleText::get_newText, um die Offsets und den eingefügten Text abzurufen) |
| Text ersetzt                                                                                                                         | text_changed::delete gefolgt von text_changed::insert                                                                                                   | IA2_EVENT_TEXT_REMOVED gefolgt von IA2_EVENT_TEXT_INSERTED                                                              |

\* Wir verwenden nicht MSAA's CREATE/DESTROY auf Wunsch von Bildschirmlesegeräteanbietern, die diese Ereignisse vermeiden, weil sie auf einigen wichtigen Systemen Abstürze verursachen — SHOW/HIDE sind das Äquivalent dieser Ereignisse.

## Abrufen der vom Autor bereitgestellten ARIA Live-Region-Semantik aus einem Ereignis

Für jedes Mutationsevent auf einer Seite kann der Autor die folgenden Objektattribute vom Ereignisobjekt abrufen, sofern sie auf einem übergeordneten Element definiert sind (das nächste übergeordnete Element gewinnt):

| Objekt-Attributname  | Mögliche Werte                                                                                                                                                                   | Standardwert                                   | ARIA-Markup falls erforderlich             | Bedeutung                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `container-live`     | `"off" \| "polite" \| "assertive"`                                                                                                                                               | `"off"`                                        | `aria-live` auf übergeordnetem Element     | Unterbrechung                                                                                                                                                                                                                                                                                                                                                                  |
| `container-relevant` | `'additions'` `'removals'` `'text' \| "all"`                                                                                                                                     | `"additions text"`                             | `aria-relevant` auf übergeordnetem Element | Welche Arten von Veränderungen sind möglicherweise relevant? Siehe [Abschnitt](#ereignisse,_die_bei_webseitentransformationen_ausgelöst_werden), um den Ereignistyp mit dem Wert dieses Attributs abzugleichen und zu bestimmen, ob der Autor dachte, das Ereignis sollte dem Benutzer präsentiert werden oder nicht.                                                          |
| `container-busy`     | `"true" \| "false" \| "error"`                                                                                                                                                   | `"false"`                                      | `aria-busy` auf übergeordnetem Element     | Die aktuellen Änderungen sind noch nicht abgeschlossen. Ein Zustandsänderungsereignis für den BUSY-Zustand der A11y-API wird beim aktuell als BUSY markierten Container-Objekt ausgelöst, sobald es nicht mehr BUSY ist. Dies ist besonders in atomaren Regionen wichtig. Die gesamte atomare Region sollte einmal präsentiert werden, wenn sie endgültig nicht mehr BUSY ist. |
| `container-atomic`   | `"true" \| "false"`                                                                                                                                                              | `"false"`                                      | `aria-atomic` auf übergeordnetem Element   | Ist diese Änderung in einer Region, die immer auf einmal präsentiert werden sollte. Falls ja, wird die member-of Relation auf die Wurzel der Region verweisen (siehe nächster Abschnitt)                                                                                                                                                                                       |
| `member-of`          | Falls `container-atomic=true`, weist auf ein übergeordnetes barrierefreies Objekt (es handelt sich also tatsächlich um eine barrierefreie Relation, nicht um ein Objektattribut) | Nicht in atomarer Region, wenn nicht angegeben | `aria-atomic` auf übergeordnetem Element   | Verweist auf die Wurzel des atomaren Containers, in dem sich dieses Objekt befindet. Dies wird immer ein Vorfahre des aktuellen Objekts sein.                                                                                                                                                                                                                                  |
| `event-from-input`   | `"true" \| "false"` (weiter unten ausführlicher beschrieben)                                                                                                                     | Browser konnte dies nicht berechnen            | Erfordert keine Zusammenarbeit des Autors. | War die Hauptursache dieses Ereignisses eine explizite Benutzereingabe?                                                                                                                                                                                                                                                                                                        |

Das Präfix „container-“ ist so benannt, weil das Attribut beschreibt, was die endgültige berechnete Eigenschaft ähnlichen Namens für diesen Knoten ist. Das bedeutet, dass das AT nicht die übergeordnete Kette hochgehen muss, um diese Informationen zu erhalten. Derzeit muss das AT für Eigenschaften, bei denen das `container-*`-Attribut nicht gesetzt wurde, auf den Standardwert zurückgreifen, wie im W3C-Spezifikationsentwurf definiert.

## Bestimmen, ob das Ereignis aus Benutzereingaben stammte

Alle Ereignisse werden jetzt Informationen darüber liefern, ob das Ereignis von Benutzereingaben verursacht wurde oder ob es durch die Webseite ausgelöst wurde. Diese Informationen werden auf jeder Plattform unterschiedlich abgerufen, da einige Plattformen asynchrone Ereignisse verwenden.

In IAccessible2 wird dies über das Objektattribut "event-from-input" abgerufen, das auf "true" oder "false" gesetzt wird. Ist es nicht vorhanden, dann ist etwas schiefgelaufen und Mozilla konnte diese Information nicht bereitstellen. Diese Information ist nur für die Ereignisse EVENT_SHOW, EVENT_HIDE, IA2_EVENT_TEXT_INSERTED und IA2_EVENT_TEXT_REMOVED verfügbar.

Für ATK/AT-SPI werden diese Informationen durch das Überprüfen des Ereignisnamens abgerufen. Wenn der Ereignisname ":system" angehängt hat, stammt es nicht von Benutzereingaben. Der ":system"-String wird für die Ereignisse children-changed und text-changed berechnet.

Warum ist das nützlich? Die Mehrheit der AJAX-Seiten bietet kein Live-Region-Markup, muss aber dennoch so benutzbar wie möglich sein. Es ist schwierig für ein Bildschirmlesegerät zu entscheiden, wann ein Benutzer mit Änderungen auf einer Seite unterbrochen werden sollte. Liest das Bildschirmlesegerät zu viel automatisch, wird die Webseite zu nervig in der Benutzung. Liest das Bildschirmlesegerät nichts, kann der Benutzer wichtige Informationen verpassen.

Es wird angenommen, dass diese Informationen für Heuristiken nützlich sein werden. Oft sollten Änderungen auf einer Seite, die direkt durch die Tastenanschläge eines Benutzers verursacht werden, vorgelesen werden. Sie sind synchron mit dem, was der Benutzer tut, und können daher wahrscheinlich vorgelesen werden, ohne den Benutzer zu desorientieren. Sobald der Benutzer die nächste Taste drückt, wird die Sprachausgabe ohnehin fortfahren und diese Taste wiederholen. Das Bildschirmlesegerät könnte andere Faktoren berücksichtigen, wie die Art der Änderung, die Größe der Änderung, wo die Änderung auftrat etc. Dies ist ein potenzieller Bereich für Innovationen bei Bildschirmlesegeräten.

| Zuletzt aufgetreten | Benutzereingabe? |
| ------------------- | ---------------- |
| Tastendrücke        | Ja               |
| Mausklicks          | Ja               |
| Maus-Hovers         | Nein             |
| Seite wird geladen  | Nein             |

Alles andere, einschließlich Fokusänderungen, Timer-Callbacks, XMLHttpRequest-Callbacks etc., sind neutral. Sie werden nur als Benutzereingabe gezählt, wenn der ursprüngliche Grund, warum sie passiert sind, auf Benutzereingaben zurückzuführen ist.

## Was sollten Bildschirmlesegeräte präsentieren?

Bitte lesen Sie den Live-Region-Abschnitt des [WAI-ARIA Bildschirmleser-Implementierungsleitfadens](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors#live_regions).
