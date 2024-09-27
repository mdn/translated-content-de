---
title: aria-live
slug: Web/Accessibility/ARIA/Attributes/aria-live
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale `aria-live`-Attribut gibt an, dass ein Element aktualisiert wird und beschreibt die Art der Updates, die Benutzeragenten, unterstützende Technologien und Benutzer von der Live-Region erwarten können.

## Beschreibung

Wenn sich der Inhalt nach dem ersten Laden ändert, können Benutzer von unterstützender Technologie (AT) die Änderungen möglicherweise nicht "sehen". Einige Änderungen sind wichtig, andere nicht. Mit dem `aria-live`-Attribut können Entwickler den Benutzer über Updates informieren und basierend auf Wichtigkeit und Dringlichkeit wählen, ob sie AT-Benutzer sofort, proaktiv oder passiv über Änderungen des Inhalts informieren möchten.

Wenn ein Abschnitt des Bildschirms aktualisiert wird und dieser so gestaltet ist, dass er auffällt, werden die meisten sehenden Benutzer Live-Updates im Allgemeinen bemerken. Screenreader hingegen konzentrieren sich nur auf einen Teil der Seite gleichzeitig, und dieser Teil ist möglicherweise nicht dort, wo das Update ist. Das `aria-live`-Attribut bietet Entwicklern die Möglichkeit, solche Änderungen basierend auf Ereignisauslösern, die vom Entwickler und nicht durch Benutzerinitiierten Aktionen gesetzt werden, AT anzukündigen, damit sie darüber informiert werden, dass sich der Inhalt geändert hat.

```html
<div id="announce" aria-live="polite"></div>
```

Das `aria-live`-Attribut wird auf ein **leeres** Element gesetzt. Wenn eine Aktualisierung der Seite erfolgt, sollte das leere Element mit diesem `aria-live`-Attribut mit einer kurzen Ankündigung aktualisiert werden, um den Benutzer darüber zu informieren, dass ein Update vorgenommen wurde.

```html
<div id="announce" aria-live="polite">
  <p>This message is announced.</p>
</div>
```

Wenn die Zugänglichkeits-API eine Änderung der obigen Live-Region erkennt, wird sie den Inhalt dieser Live-Region basierend auf dem Wert des Attributs ankündigen. Das Element erhält **nicht** den Fokus.

Wenn Sie möchten, dass alle Inhalte der Live-Region gelesen werden, verwenden Sie [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). Verwenden Sie [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant), um nur die Abschnitte eines Updates zu definieren, die dem Benutzer erneut vorgelesen werden müssen. Verwenden Sie [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy), um Ankündigungen zu verhindern, während Updates noch vorgenommen werden.

### Wahl des `aria-live`-Wertes

Da einige Benutzer von unterstützenden Technologien Live-Updates nicht "sehen" können, wird das `aria-live`-Attribut verwendet, um zu definieren, welche aktualisierten Informationen dem Benutzer sein sollen:

- Sofort zur Kenntnis gebracht,
- Informiert, wenn sich Gelegenheit bietet, und
- Proaktiv informiert, aber sie können es erfahren, wenn sie sich auf den aktualisierten Bereich konzentrieren.

Der Wert von `aria-live` beschreibt die Art der Updates, die von den Benutzeragenten, unterstützenden Technologien und Benutzern aus der Live-Region erwartet werden können, und wird verwendet, um die Wichtigkeitsgrade auszudrücken.

Wenn das `aria-live`-Attribut auf `polite` gesetzt ist, benachrichtigen unterstützende Technologien die Benutzer über Updates, unterbrechen jedoch im Allgemeinen nicht die aktuelle Aufgabe, wobei die Updates eine niedrige Priorität haben. Wenn es auf `assertive` gesetzt ist, benachrichtigen unterstützende Technologien den Benutzer sofort, was möglicherweise die Sprach-Warteschlange vorheriger Updates löscht.

Screenreader puffern Inhalte, wenn die Seite geladen wird. Aus diesem Grund werden Inhalte, die nach dem ersten Aufbau des Barrierefreiheitsbaums hinzugefügt werden, möglicherweise nicht bemerkt, da AT-Benutzer beginnen, Inhalte zu konsumieren, bevor dynamische Widgets gefüllt sind – Benutzer wissen möglicherweise nicht, dass die Seite oder der Inhalt aktualisiert wird, während Widgets geladen werden. In diesem Fall können Sie den Benutzern mitteilen, dass die Seite aktualisiert wurde, indem Sie `aria-live="polite"` setzen.

Vollständig gefüllte Seiten können ebenfalls Updates haben. Beispiele sind Inhalte wie Echtzeitsport-Ergebnisse, Nachrichtenläufe und Börsenticker. Sofern diese Arten von Updates nicht die Hauptfunktion der Seite sind, möchten Sie den Benutzer möglicherweise nicht jedes Mal informieren, wenn sie aktualisiert werden, aber sie darüber informieren, dass das Widget aktualisiert wird. Hier würden Sie `aria-live="off"` setzen. In diesen Szenarien gibt es keinen Grund, den Benutzer über Updates zu informieren, es sei denn, sie konzentrieren sich auf die Live-Region.

Einige Live-Updates sind wichtig und zeitkritisch. Zum Beispiel, wenn Sie Konzertkarten verkaufen und der Benutzer eine begrenzte Zeit hat, um den Kauf abzuschließen, möchten Sie nicht bis zu einer ruhigen Phase warten, um ihm mitzuteilen, dass seine Zeit fast abgelaufen ist (oder bereits vorbei). Wenn es notwendig ist, so schnell wie möglich informiert zu werden, setzen Sie `aria-live="assertive"`. Wenn die aktualisierten Informationen eine [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) sind, wird das `aria-live`-Attribut nicht benötigt.

In diesem Zeitlimit-Szenario müssen Sie, um barrierefrei zu sein, auch [eine Möglichkeit bieten, die verfügbare Zeit zu verlängern oder den Timer vollständig auszuschalten](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).

### Verwendung von `aria-live`

Eine Live-Region umfasst das Element und alle seine Nachkommen. Wenn es nicht auf dem aktualisierten Inhalt gesetzt ist, stammt der Wert von `aria-live` von dem nächstgelegenen Vorfahren mit einem gültigen `aria-live`-Attributwert. Wenn auf `off` gesetzt oder wenn das Attribut auf dem aktualisierten Element und allen Vorfahrenknoten im DOM-Baum vollständig weggelassen wird, wird der Benutzer nicht informiert. Die Benutzer können die Updates jedoch hören, wenn sie zur Live-Region navigieren.

> [!WARNING]
> Da eine Unterbrechung die Benutzer verwirren oder dazu führen kann, dass sie ihre aktuelle Aufgabe nicht abschließen, verwenden Sie den Wert `assertive` nur dann, wenn die Unterbrechung zwingend erforderlich ist.

## Werte

- `assertive`
  - : Gibt an, dass Updates der Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `off` (Standard)
  - : Gibt an, dass Updates der Region dem Benutzer **nicht** präsentiert werden sollten, es sei denn, der Benutzer fokussiert die Region aktuell.
- `polite`
  - : Gibt an, dass Updates der Region bei der nächsten günstigen Gelegenheit präsentiert werden sollten, zum Beispiel am Ende des aktuellen Satzes oder wenn der Benutzer eine Tipp-Pause macht.

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
- [`alert` role](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
