---
title: "ARIA: aria-live Attribut"
short-title: aria-live
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-live
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-live` Attribut zeigt an, dass ein Element aktualisiert wird, und beschreibt die Art der Aktualisierungen, die von den Benutzeragenten, unterstützenden Technologien und dem Benutzer von der Live-Region erwartet werden können.

## Beschreibung

Wenn sich der Inhalt nach dem initialen Laden ändert, bemerken Nutzer unterstützender Technologien (AT) diese Änderungen möglicherweise nicht. Einige Änderungen sind wichtig, andere nicht. Das `aria-live` Attribut ermöglicht es Entwicklern, den Benutzer über Aktualisierungen zu informieren und basierend auf Wichtigkeit und Dringlichkeit zu entscheiden, ob AT-Nutzer sofort, proaktiv oder passiv über Änderungen am Inhalt informiert werden sollen.

Wenn ein Abschnitt des Bildschirms aktualisiert wird, und dieser so gestaltet ist, dass er auffällt, werden die meisten sehenden Benutzer die Live-Aktualisierungen bemerken. Screenreader hingegen fokussieren jeweils nur auf einen Teil der Seite; und das könnte nicht der Teil sein, in dem sich die Aktualisierung befindet. Das `aria-live` Attribut bietet Entwicklern eine Möglichkeit, solche Änderungen den AT basierend auf Ereignis-Triggern, die vom Entwickler gesetzt werden und nicht durch benutzerinitiierte Aktionen, bekannt zu geben, damit sie darauf aufmerksam werden, dass sich der Inhalt geändert hat.

```html
<div id="announce" aria-live="polite"></div>
```

Das `aria-live` Attribut wird auf einem **leeren** Element gesetzt. Wenn eine Aktualisierung der Seite erfolgt, sollte das leere Element mit diesem `aria-live` Attribut mit einer kurzen Ankündigung aktualisiert werden, die den Benutzer darüber informiert, dass eine Aktualisierung stattgefunden hat.

```html
<div id="announce" aria-live="polite">
  <p>This message is announced.</p>
</div>
```

Wenn die Zugänglichkeit-API eine Änderung in der oben liegenden Live-Region erkennt, wird sie den Inhalt dieser Live-Region basierend auf dem Wert des Attributs ankündigen. Das Element wird **nicht** fokussiert.

Wenn Sie möchten, dass alle Inhalte der Live-Region gelesen werden, verwenden Sie [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Verwenden Sie [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), um nur die Abschnitte einer Aktualisierung zu definieren, die erneut für den Benutzer gelesen werden müssen. Verwenden Sie [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), um Ankündigungen zu verhindern, während Aktualisierungen noch vorgenommen werden.

### Auswahl des `aria-live` Wertes

Da einige Nutzer unterstützender Technologien Live-Aktualisierungen nicht "sehen" können, wird das `aria-live` Attribut verwendet, um zu definieren, über welche aktualisierten Informationen der Benutzer:

- Sofort informiert werden sollte,
- Informiert werden soll, wenn sich die Gelegenheit ergibt, und
- Proaktiv informiert werden soll, aber selbst entscheiden kann, wann sie sich auf den aktualisierten Bereich konzentrieren.

Der Wert von `aria-live` beschreibt die Arten von Aktualisierungen, die die Benutzeragenten, unterstützenden Technologien und Nutzer von der Live-Region erwarten können und wird verwendet, um Wichtigkeitsgrade auszudrücken.

Wenn das `aria-live` Attribut auf `polite` gesetzt ist, werden unterstützende Technologien die Benutzer über Aktualisierungen informieren, jedoch in der Regel die aktuelle Aufgabe nicht unterbrechen, wobei die Aktualisierungen eine niedrige Priorität haben. Wenn es auf `assertive` gesetzt ist, benachrichtigen unterstützende Technologien den Benutzer sofort, möglicherweise wird die Sprachwarteschlange vorheriger Aktualisierungen gelöscht.

Screenreader puffern den Inhalt, wenn die Seite geladen wird. Aufgrund dessen, können Inhalte, die nach dem initialen Aufbau des Barrierefreiheitsbaums hinzugefügt werden, übersehen werden, da AT-Nutzer mit dem Konsumieren von Inhalten beginnen, bevor dynamische Widgets geladen sind – Nutzer könnten nicht wissen, dass die Seite oder der Inhalt aktualisiert wird, während Widgets geladen werden. In dieser Situation können Sie die Nutzer wissen lassen, dass die Seite aktualisiert wurde, indem Sie `aria-live="polite"` setzen.

Auch auf vollständig geladenen Seiten können Aktualisierungen stattfinden. Beispiele sind Inhalte wie Echtzeit-Sportergebnisse, Nachrichtenticker und Börsenticker. Sofern diese Art von Aktualisierungen nicht die Hauptfunktion der Seite darstellen, möchten Sie den Nutzer wahrscheinlich nicht jedes Mal informieren, wenn sie aktualisiert werden, aber dennoch sicherstellen, dass das Widget aktualisiert wird. Hier würden Sie `aria-live="off"` setzen. In diesen Szenarien besteht kein Grund, den Benutzer über Aktualisierungen zu informieren, es sei denn, sie konzentrieren sich auf die Live-Region.

Einige Live-Aktualisierungen sind wichtig und zeitkritisch. Zum Beispiel, wenn Sie Konzertkarten verkaufen und der Benutzer eine begrenzte Zeit für den Kauf hat, möchten Sie nicht bis zu einer Aktivitätspause warten, um ihm mitzuteilen, dass seine Zeit fast oder bereits abgelaufen ist. Wenn eine sofortige Benachrichtigung notwendig ist, setzen Sie `aria-live="assertive"`. Wenn die aktualisierte Information eine [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) ist, wird das `aria-live` Attribut nicht benötigt.

In diesem Zeitlimitszenario müssen Sie für Barrierefreiheit auch [eine Möglichkeit bereitstellen, um die verfügbare Zeit zu verlängern oder den Timer vollständig zu deaktivieren](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).

### Verwendung von `aria-live`

Eine Live-Region umfasst das Element und all seine Nachkommen. Wenn es nicht auf zu aktualisierende Inhalte gesetzt ist, kommt der Wert von `aria-live` vom nächsten übergeordneten Element mit einem gültigen `aria-live` Attributswert. Wenn es auf `off` gesetzt ist oder wenn das Attribut auf dem aktualisierten Element und allen übergeordneten Knoten im DOM-Baum insgesamt fehlt, wird der Benutzer nicht informiert. Benutzer werden die Aktualisierungen jedoch weiterhin hören können, wenn sie zur Live-Region navigieren.

> [!WARNING]
> Da eine Unterbrechung die Benutzer verwirren oder dazu führen kann, dass sie ihre aktuelle Aufgabe nicht abschließen, verwenden Sie den Wert `assertive` nur, wenn die Unterbrechung zwingend erforderlich ist.

## Werte

- `assertive`
  - : Zeigt an, dass Aktualisierungen der Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `off` (Standard)
  - : Zeigt an, dass Aktualisierungen der Region **nicht** dem Benutzer präsentiert werden sollten, es sei denn, der Benutzer konzentriert sich derzeit auf diese Region.
- `polite`
  - : Zeigt an, dass Aktualisierungen der Region bei der nächsten Gelegenheit ohne Eile präsentiert werden sollen, z.B. am Ende des aktuellen Satzes oder wenn der Benutzer eine Pause beim Tippen einlegt.

## Zugehörige Schnittstellen

- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Die [`ariaLive`](/de/docs/Web/API/Element/ariaLive) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-live` Attributs wider.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Die [`ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-live` Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
