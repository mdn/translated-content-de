---
title: aria-live
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-live
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale `aria-live` Attribut zeigt an, dass ein Element aktualisiert wird und beschreibt die Art der Aktualisierungen, die Benutzeragenten, unterstützende Technologien und der Benutzer von der Live-Region erwarten können.

## Beschreibung

Wenn sich Inhalte nach dem ersten Laden ändern, können Benutzer von unterstützenden Technologien (AT) die Änderungen möglicherweise nicht "sehen". Einige Änderungen sind wichtig. Andere nicht. Das `aria-live` Attribut ermöglicht es Entwicklern, den Benutzer über Aktualisierungen zu informieren und basierend auf Wichtigkeit und Dringlichkeit zu entscheiden, ob Benutzer von AT sofort, proaktiv oder passiv über Änderungen am Inhalt informiert werden sollen.

Wenn ein Abschnitt des Bildschirms aktualisiert wird und so gestaltet ist, dass er auffällig ist, werden die meisten sehenden Benutzer im Allgemeinen Live-Aktualisierungen bemerken. Screenreader hingegen konzentrieren sich nur auf einen Teil der Seite; dieser Teil ist möglicherweise nicht dort, wo die Aktualisierung stattfindet. Das `aria-live` Attribut bietet Entwicklern eine Möglichkeit, solche Änderungen an AT aufgrund von vom Entwickler festgelegten Ereignisauslösern anzukündigen, anstatt durch vom Benutzer initiierte Aktionen, sodass sie sich bewusst sind, dass sich der Inhalt geändert hat.

```html
<div id="announce" aria-live="polite"></div>
```

Das `aria-live` Attribut wird auf einem **leeren** Element gesetzt. Wenn eine Aktualisierung der Seite erfolgt, sollte das leere Element mit diesem `aria-live` Attribut mit einer kurzen Ankündigung aktualisiert werden, die den Benutzer darüber informiert, dass eine Aktualisierung vorgenommen wurde.

```html
<div id="announce" aria-live="polite">
  <p>This message is announced.</p>
</div>
```

Wenn die Barrierefreiheits-API eine Änderung an der oben genannten Live-Region erkennt, wird sie den Inhalt dieser Live-Region basierend auf dem Wert des Attributs ankündigen. Das Element erhält **nicht** den Fokus.

Wenn Sie möchten, dass alle Inhalte der Live-Region gelesen werden, verwenden Sie [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Verwenden Sie [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), um nur die Abschnitte einer Aktualisierung zu definieren, die dem Benutzer erneut vorgelesen werden müssen. Verwenden Sie [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), um Ankündigungen zu verhindern, während Aktualisierungen noch vorgenommen werden.

### Auswahl des `aria-live` Wertes

Da einige Benutzer von unterstützenden Technologien Live-Aktualisierungen nicht "sehen" können, wird das `aria-live` Attribut verwendet, um zu definieren, welche aktualisierten Informationen der Benutzer:

- Sofort bemerken soll,
- darüber informiert wird, wenn sich die Gelegenheit bietet, und
- proaktiv informiert wird, aber in der Lage ist, mehr zu erfahren, wenn sie sich auf den aktualisierten Bereich konzentrieren.

Der Wert von `aria-live` beschreibt die Arten von Aktualisierungen, die Benutzeragenten, unterstützende Technologien und der Benutzer von der Live-Region erwarten können, und wird verwendet, um Grade der Wichtigkeit auszudrücken.

Wenn das `aria-live` Attribut auf `polite` gesetzt ist, werden unterstützende Technologien Benutzer über Aktualisierungen benachrichtigen, unterbrechen jedoch in der Regel nicht die aktuelle Aufgabe, wobei die Aktualisierungen eine niedrige Priorität haben. Wenn es auf `assertive` gesetzt ist, benachrichtigen unterstützende Technologien den Benutzer sofort, indem sie möglicherweise die Sprachwarteschlange vorheriger Aktualisierungen löschen.

Screenreader puffern Inhalte, wenn die Seite geladen wird. Aufgrund dessen können Inhalte, die nach dem Erstellen des ersten Barrierefreiheitsbaums hinzugefügt werden, möglicherweise nicht bemerkt werden, da AT-Benutzer beginnen, Inhalte zu konsumieren, bevor dynamische Widgets geladen sind—Benutzer wissen möglicherweise nicht, dass die Seite oder der Ansichtsinhalte aktualisiert werden, wenn Widgets das Laden abschließen. In dieser Situation können Sie den Benutzern mitteilen, dass die Seite aktualisiert wurde, indem Sie `aria-live="polite"` setzen.

Vollständig geladene Seiten können ebenfalls Aktualisierungen haben. Beispiele sind Inhalte wie Echtzeit-Sportpunktestände, Nachrichtenläufe und Börsenticker. Es sei denn, diese Arten von Aktualisierungen sind die Hauptfunktion der Seite, möchten Sie den Benutzer wahrscheinlich nicht jedes Mal informieren, wenn sie aktualisiert werden, sondern ihn darüber informieren, dass das Widget aktualisiert wird. Hier würden Sie `aria-live="off"` setzen. In diesen Szenarien gibt es keinen Grund, den Benutzer über Aktualisierungen zu informieren, es sei denn, sie konzentrieren sich auf die Live-Region.

Einige Live-Aktualisierungen sind wichtig und zeitkritisch. Zum Beispiel, wenn Sie Konzerttickets verkaufen und der Benutzer eine begrenzte Zeit hat, den Kauf zu tätigen, möchten Sie nicht warten, bis eine Pause in der Aktivität eintritt, um ihnen mitzuteilen, dass ihre Zeit fast abgelaufen ist (oder bereits vorbei ist). Wenn es notwendig ist, so schnell wie möglich informiert zu werden, setzen Sie `aria-live="assertive"`. Wenn die aktualisierte Information ein [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) ist, ist das `aria-live` Attribut nicht erforderlich.

In diesem Szenario mit Zeitlimit müssen Sie, um zugänglich zu sein, auch [einen Weg für Benutzer bereitstellen, die verfügbare Zeit zu verlängern oder den Timer vollständig auszuschalten](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).

### Verwendung von `aria-live`

Eine Live-Region umfasst das Element und alle seine Nachkommen. Wenn es nicht auf aktualisierten Inhalt gesetzt wird, stammt der Wert von `aria-live` vom nächstgelegenen Vorfahren mit einem gültigen `aria-live` Attributwert. Wenn es auf `off` gesetzt ist oder wenn das Attribut vollständig auf dem aktualisierten Element und allen Vorfahrenknoten im DOM-Baum fehlt, wird der Benutzer nicht informiert. Benutzer können die Aktualisierungen jedoch immer noch hören, wenn sie zur Live-Region navigieren.

> [!WARNING]
> Da eine Unterbrechung Benutzer desorientieren oder dazu führen kann, dass sie ihre aktuelle Aufgabe nicht abschließen, verwenden Sie den `assertive` Wert nur dann, wenn die Unterbrechung zwingend erforderlich ist.

## Werte

- `assertive`
  - : Gibt an, dass Aktualisierungen der Region höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `off` (Standard)
  - : Gibt an, dass Aktualisierungen der Region dem Benutzer **nicht** präsentiert werden sollten, es sei denn, der Benutzer konzentriert sich gerade auf diese Region.
- `polite`
  - : Gibt an, dass Aktualisierungen der Region bei der nächsten günstigen Gelegenheit präsentiert werden sollten, z.B. am Ende des aktuellen Satzes oder wenn der Benutzer das Tippen unterbricht.

## Zugehörige Schnittstellen

- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Die [`ariaLive`](/de/docs/Web/API/Element/ariaLive) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-live` Attributs wider.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Die [`ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-live` Attributs wider.

## Zugehörige Rollen

In **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
