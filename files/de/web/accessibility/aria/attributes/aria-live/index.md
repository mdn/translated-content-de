---
title: aria-live
slug: Web/Accessibility/ARIA/Attributes/aria-live
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale Attribut `aria-live` zeigt an, dass ein Element aktualisiert wird und beschreibt die Arten von Aktualisierungen, die Benutzeragenten, unterstützende Technologien und der Benutzer von der Live-Region erwarten können.

## Beschreibung

Wenn sich der Inhalt nach dem ersten Laden ändert, können Benutzer assistierender Technologien (AT) die Änderungen möglicherweise nicht "sehen". Einige Änderungen sind wichtig, andere nicht. Das Attribut `aria-live` ermöglicht es Entwicklern, den Benutzer über Aktualisierungen zu informieren und je nach Wichtigkeit und Dringlichkeit zu entscheiden, ob die AT-Benutzer sofort, proaktiv oder passiv über Änderungen am Inhalt informiert werden sollten.

Wenn ein Abschnitt des Bildschirms aktualisiert wird, wird er in der Regel von den meisten sehenden Benutzern bemerkt, vor allem, wenn er auffällig gestaltet ist. Bildschirmlesegeräte hingegen konzentrieren sich jeweils nur auf einen Teil der Seite; dieser Teil ist möglicherweise nicht dort, wo die Aktualisierung stattfindet. Das Attribut `aria-live` bietet Entwicklern eine Möglichkeit, solche Änderungen den assistierenden Technologien basierend auf vom Entwickler festgelegten Ereignisauslösern bekanntzugeben, anstatt durch vom Benutzer initiierte Aktionen, sodass ihnen bewusst wird, dass sich der Inhalt geändert hat.

```html
<div id="announce" aria-live="polite"></div>
```

Das Attribut `aria-live` wird auf ein **leeres** Element gesetzt. Wenn eine Aktualisierung der Seite erfolgt, sollte das leere Element mit diesem `aria-live`-Attribut mit einer kurzen Ankündigung aktualisiert werden, die den Benutzer informiert, dass eine Aktualisierung stattgefunden hat.

```html
<div id="announce" aria-live="polite">
  <p>This message is announced.</p>
</div>
```

Wenn die Zugänglichkeits-API eine Änderung der darüber liegenden Live-Region erkennt, wird der Inhalt dieser Live-Region basierend auf dem Wert des Attributs angekündigt. Dem Element wird **nicht** der Fokus gegeben.

Wenn Sie möchten, dass der gesamte Inhalt der Live-Region gelesen wird, verwenden Sie [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). Verwenden Sie [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant), um nur die Abschnitte einer Aktualisierung zu definieren, die dem Benutzer vorgelesen werden müssen. Verwenden Sie [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy), um Ankündigungen zu verhindern, während Aktualisierungen noch vorgenommen werden.

### Auswahl des `aria-live`-Wertes

Da einige Benutzer assistierender Technologien Live-Aktualisierungen nicht "sehen" können, wird das Attribut `aria-live` verwendet, um festzulegen, über welche aktualisierten Informationen der Benutzer:

- Sofort informiert werden soll,
- Informiert wird, wenn sich die Gelegenheit bietet, und
- Proaktiv informiert wird, er jedoch selbst entscheiden kann, wann er sich auf den aktualisierten Bereich konzentriert.

Der Wert von `aria-live` beschreibt die Arten von Aktualisierungen, die Benutzeragenten, unterstützende Technologien und der Benutzer von der Live-Region erwarten können, und wird verwendet, um Grade der Wichtigkeit auszudrücken.

Wenn das Attribut `aria-live` auf `polite` gesetzt ist, benachrichtigen assistierende Technologien die Benutzer über Aktualisierungen, unterbrechen jedoch im Allgemeinen nicht die aktuelle Aufgabe, da die Aktualisierungen eine niedrige Priorität haben. Wenn auf `assertive` gesetzt, benachrichtigen assistierende Technologien den Benutzer sofort, was die Sprachwarteschlange vorheriger Aktualisierungen möglicherweise löscht.

Wenn Bildschirmlesegeräte die Seite laden, puffern sie Inhalte. Daher kann es sein, dass Inhalte, die nach dem initialen Aufbau des Zugänglichkeitsbaums hinzugefügt werden, nicht bemerkt werden, da AT-Benutzer Inhalte konsumieren, bevor dynamische Widgets gefüllt sind—Benutzer bemerken möglicherweise nicht, dass die Seite oder der Ansichtsinhalt aktualisiert wird, während Widgets geladen werden. In dieser Situation können Sie den Benutzern mitteilen, dass die Seite aktualisiert wurde, indem Sie `aria-live="polite"` setzen.

Auch vollständig geladene Seiten können aktualisiert werden. Beispiele für Inhalte sind Live-Sportergebnisse, Nachrichtenticker und Börsenkurse. Sofern diese Arten von Aktualisierungen nicht die Hauptfunktion der Seite sind, möchten Sie den Benutzer wahrscheinlich nicht jedes Mal informieren, wenn es zu einer Aktualisierung kommt, aber ihm dennoch mitteilen, dass das Widget aktualisiert wird. Hier sollten Sie `aria-live="off"` setzen. In diesen Szenarien besteht kein Grund, den Benutzer über Aktualisierungen zu informieren, es sei denn, er konzentriert sich auf die Live-Region.

Einige Live-Aktualisierungen sind wichtig und zeitkritisch. Wenn Sie zum Beispiel Konzertkarten verkaufen und der Benutzer nur begrenzt Zeit hat, den Kauf abzuschließen, möchten Sie ihm nicht in einer Aktivitätspause mitteilen, dass seine Zeit fast um oder bereits abgelaufen ist. Wenn es notwendig ist, so schnell wie möglich informiert zu werden, setzen Sie `aria-live="assertive"`. Wenn die aktualisierte Information ein [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) ist, ist das Attribut `aria-live` nicht erforderlich.

In diesem Zeitlimit-Szenario müssen Sie auch [eine Möglichkeit bereitstellen, die verfügbare Zeit zu verlängern oder den Timer vollständig auszuschalten](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html), um barrierefrei zu sein.

### Verwendung von `aria-live`

Eine Live-Region umfasst das Element und alle seine Nachkommen. Wenn es nicht auf aktualisierten Inhalten eingestellt ist, stammt der Wert von `aria-live` vom nächsten Vorfahren mit einem gültigen `aria-live`-Attributwert. Wenn auf `off` gesetzt oder das Attribut auf dem aktualisierten Element und allen Vorfahrenknoten im DOM-Baum insgesamt weggelassen wird, wird der Benutzer nicht informiert. Benutzer können die Aktualisierungen jedoch weiterhin hören, wenn sie zur Live-Region navigieren.

> [!WARNING]
> Da eine Unterbrechung Benutzer desorientieren oder dazu führen kann, dass sie ihre aktuelle Aufgabe nicht abschließen, verwenden Sie den Wert `assertive` nur, wenn die Unterbrechung unbedingt erforderlich ist.

## Werte

- `assertive`
  - : Gibt an, dass Aktualisierungen der Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `off` (Standard)
  - : Gibt an, dass Aktualisierungen der Region dem Benutzer **nicht** präsentiert werden sollten, es sei denn, der Benutzer ist aktuell auf diese Region fokussiert.
- `polite`
  - : Gibt an, dass Aktualisierungen der Region bei der nächsten geeigneten Gelegenheit präsentiert werden sollten, zum Beispiel am Ende des aktuellen Satzes oder wenn der Benutzer das Tippen unterbricht.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaLive")}}
  - : Die [`ariaLive`](/de/docs/Web/API/Element/ariaLive)-Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-live`-Attributs wider.
- {{domxref("ElementInternals.ariaLive")}}
  - : Die [`ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)-Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-live`-Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [`alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
