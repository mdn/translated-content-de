---
title: aria-live
slug: Web/Accessibility/ARIA/Attributes/aria-live
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale `aria-live`-Attribut zeigt an, dass ein Element aktualisiert wird, und beschreibt die Arten von Updates, die die Benutzeragenten, Unterstützungstechnologien und der Benutzer von dem Live-Bereich erwarten können.

## Beschreibung

Wenn sich Inhalte nach dem ersten Laden ändern, sehen Benutzer von Unterstützungstechnologien (AT) die Änderungen möglicherweise nicht. Einige Änderungen sind wichtig, andere nicht. Das `aria-live`-Attribut ermöglicht es Entwicklern, den Benutzer über Updates zu informieren und je nach Wichtigkeit und Dringlichkeit zu entscheiden, ob AT-Benutzern sofort, proaktiv oder passiv über Änderungen am Inhalt informiert werden soll.

Wenn ein Abschnitt des Bildschirms aktualisiert wird und er so gestaltet ist, dass er bemerkbar ist, werden die meisten sehenden Benutzer Live-Updates im Allgemeinen bemerken. Bildschirmleser hingegen konzentrieren sich immer nur auf einen Teil der Seite; und dieser Teil ist möglicherweise nicht dort, wo sich das Update befindet. Das `aria-live`-Attribut bietet Entwicklern eine Möglichkeit, solche Änderungen an AT aufgrund von vom Entwickler festgelegten Ereignis-Triggern und nicht durch benutzerinitiierte Aktionen bekannt zu geben, damit sie darauf aufmerksam gemacht werden, dass sich der Inhalt geändert hat.

```html
<div id="announce" aria-live="polite"></div>
```

Das `aria-live`-Attribut wird auf einem **leeren** Element gesetzt. Wenn eine Aktualisierung der Seite erfolgt, sollte das leere Element mit diesem `aria-live`-Attribut mit einer kurzen Ankündigung aktualisiert werden, die den Benutzer darüber informiert, dass ein Update erfolgt ist.

```html
<div id="announce" aria-live="polite">
  <p>This message is announced.</p>
</div>
```

Wenn die Zugangs-API eine Änderung des oben genannten Live-Bereichs erkennt, wird sie den Inhalt dieses Live-Bereichs auf der Grundlage des Wertes des Attributs ankündigen. Dem Element wird **nicht** der Fokus gegeben.

Wenn Sie möchten, dass alle Inhalte des Live-Bereichs gelesen werden, verwenden Sie [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). Verwenden Sie [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant), um nur die Abschnitte eines Updates zu definieren, die dem Benutzer erneut vorgelesen werden müssen. Verwenden Sie [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy), um Ankündigungen zu verhindern, während Updates noch stattfinden.

### Wahl des `aria-live`-Werts

Da einige Benutzer von Unterstützungstechnologien Live-Updates nicht "sehen" können, wird das `aria-live`-Attribut verwendet, um zu definieren, welche aktualisierten Informationen dem Benutzer:

- Unmittelbar bekannt gemacht werden sollten,
- Bei Gelegenheit mitgeteilt werden sollten, und
- proaktiv mitgeteilt werden sollten, wobei der Benutzer lernen kann, wann sie sich auf den aktualisierten Bereich konzentrieren.

Der Wert von `aria-live` beschreibt die Arten von Updates, die die Benutzeragenten, Unterstützungstechnologien und der Benutzer aus dem Live-Bereich erwarten können, und wird verwendet, um die Wichtigkeit zu definieren.

Wenn das `aria-live`-Attribut auf `polite` gesetzt ist, werden Unterstützungstechnologien Benutzer über Updates benachrichtigen, unterbrechen jedoch im Allgemeinen die aktuelle Aufgabe nicht, wobei die Updates eine niedrige Priorität haben. Bei `assertive` benachrichtigen Unterstützungstechnologien Benutzer sofort, möglicherweise werden die vorherigen Updates aus der Sprachwarteschlange gelöscht.

Bildschirmleser puffern Inhalte, wenn die Seite geladen wird. Aus diesem Grund werden Inhalte, die nach dem initialen Aufbau des Zugänglichkeitsbaums hinzugefügt werden, möglicherweise nicht bemerkt, da AT-Benutzer beginnen, Inhalte zu konsumieren, bevor dynamische Widgets gefüllt sind - Benutzer wissen möglicherweise nicht, dass die Seite oder der Inhalt aktualisiert wird, während Widgets geladen werden. In dieser Situation können Sie die Benutzer darüber informieren, dass die Seite aktualisiert wurde, indem Sie `aria-live="polite"` setzen.

Vollständig gepopulierte Seiten können ebenfalls Updates haben. Beispiele sind Inhalte wie Echtzeitsportergebnisse, Nachrichtenticker und Börsenkurse. Es sei denn, diese Arten von Updates sind die Hauptfunktion der Seite, Sie möchten den Benutzer wahrscheinlich nicht jedes Mal darüber informieren, wenn es aktualisiert wird, aber Sie möchten ihm mitteilen, dass das Widget aktualisiert wird. Hier würden Sie `aria-live="off"` setzen. In diesen Szenarien gibt es keinen Grund, den Benutzer über Updates zu informieren, es sei denn, sie fokussieren den Live-Bereich.

Einige Live-Updates sind wichtig und zeitkritisch. Wenn Sie zum Beispiel Konzerttickets verkaufen und der Benutzer nur begrenzt Zeit hat, um den Kauf abzuschließen, möchten Sie nicht warten, bis eine Pause in der Aktivität eintritt, um ihnen mitzuteilen, dass ihre Zeit fast abgelaufen ist (oder bereits abgelaufen ist). Wenn es notwendig ist, sofort informiert zu werden, setzen Sie `aria-live="assertive"`. Wenn die aktualisierten Informationen eine [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) sind, ist das `aria-live`-Attribut nicht notwendig.

In diesem Zeitlimit-Szenario müssen Sie, um zugänglich zu sein, auch [eine Möglichkeit bieten, die verfügbare Zeit zu verlängern oder den Timer vollständig auszuschalten](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).

### Verwendung von `aria-live`

Ein Live-Bereich umfasst das Element und alle seine Nachkommen. Wenn er nicht auf zu aktualisierenden Inhalten gesetzt ist, kommt der Wert von `aria-live` vom nächsten Vorfahren mit einem gültigen `aria-live`-Attributwert. Wenn der Wert auf `off` gesetzt ist, oder wenn das Attribut auf dem aktualisierten Element und allen Vorfahrenknoten im DOM-Baum weggelassen wird, wird der Benutzer nicht informiert. Benutzer werden die Updates dennoch hören, wenn sie zum Live-Bereich navigieren.

> [!WARNING]
> Da eine Unterbrechung dazu führen kann, dass Benutzer verwirrt werden oder ihre aktuelle Aufgabe nicht abschließen, verwenden Sie den Wert `assertive` nur, wenn die Unterbrechung zwingend notwendig ist.

## Werte

- `assertive`
  - : Gibt an, dass Updates der Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `off` (Standard)
  - : Gibt an, dass Updates der Region dem Benutzer **nicht** präsentiert werden sollten, es sei denn, der Benutzer konzentriert sich derzeit auf diese Region.
- `polite`
  - : Gibt an, dass Updates der Region bei der nächsten günstigen Gelegenheit präsentiert werden sollten, beispielsweise am Ende des Lesens des aktuellen Satzes oder wenn der Benutzer eine Tipp-Pause einlegt.

## Zugehörige Schnittstellen

- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Die [`ariaLive`](/de/docs/Web/API/Element/ariaLive) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-live`-Attributs wider.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Die [`ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-live`-Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [`alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
