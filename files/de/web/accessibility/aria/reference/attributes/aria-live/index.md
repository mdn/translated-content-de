---
title: "ARIA: aria-live-Attribut"
short-title: aria-live
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-live
l10n:
  sourceCommit: 93e3c303704c560ce28cc7764ff0069e67c48e79
---

Das globale `aria-live`-Attribut zeigt an, dass ein Element aktualisiert wird und beschreibt die Arten von Aktualisierungen, die Benutzeragenten, unterstützende Technologien und der Benutzer von der Live-Region erwarten können.

## Beschreibung

Wenn sich Inhalte nach dem initialen Laden ändern, können Benutzer von unterstützender Technologie (AT) diese Änderungen möglicherweise nicht "sehen". Einige Änderungen sind wichtig, andere nicht. Das `aria-live`-Attribut ermöglicht es Entwicklern, den Benutzer über Updates zu informieren und je nach Wichtigkeit und Dringlichkeit zu entscheiden, ob AT-Nutzer sofort, proaktiv oder passiv über Änderungen des Inhalts informiert werden sollen.

Wenn ein Abschnitt des Bildschirms aktualisiert wird, fällt es den meisten sehenden Benutzern auf, wenn er so gestaltet ist, dass er auffällt. Bildschirmleseprogramme hingegen konzentrieren sich nur auf einen Teil der Seite zu einem Zeitpunkt, und dieser Teil muss nicht unbedingt der aktualisierte Bereich sein. Das `aria-live`-Attribut bietet Entwicklern die Möglichkeit, solche Änderungen an AT basierend auf vom Entwickler gesetzten Ereignisauslösern zu verkünden, anstatt durch benutzerinitiierte Aktionen, damit sie sich bewusst sind, dass sich der Inhalt geändert hat.

```html
<div id="announce" aria-live="polite"></div>
```

Das `aria-live`-Attribut wird auf ein **leeres** Element gesetzt. Wenn eine Aktualisierung der Seite erfolgt, sollte das leere Element mit diesem `aria-live`-Attribut mit einer kurzen Ankündigung aktualisiert werden, die den Benutzer darüber informiert, dass ein Update vorgenommen wurde.

```html
<div id="announce" aria-live="polite">
  <p>This message is announced.</p>
</div>
```

Wenn die Barrierefreiheits-API eine Änderung an der obigen Live-Region erkennt, wird sie den Inhalt dieser Live-Region basierend auf dem Wert des Attributs ankündigen. Dem Element wird **kein** Fokus gegeben.

Wenn Sie möchten, dass alle Inhalte der Live-Region vorgelesen werden, verwenden Sie [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic). Verwenden Sie [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), um nur die Abschnitte eines Updates zu definieren, die dem Benutzer erneut vorgelesen werden müssen. Verwenden Sie [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), um Ankündigungen zu verhindern, während Updates noch vorgenommen werden.

### Auswahl des `aria-live`-Werts

Da einige Benutzer von unterstützenden Technologien Live-Updates nicht "sehen" können, wird das `aria-live`-Attribut verwendet, um zu definieren, welche aktualisierten Informationen dem Benutzer:

- Sofort bewusst gemacht werden,
- Mitgeteilt werden, wenn sich die Gelegenheit bietet, und
- Proaktiv mitgeteilt werden, aber der Benutzer kann sich informieren, wenn er sich entscheidet, sich auf den aktualisierten Bereich zu konzentrieren.

Der Wert von `aria-live` beschreibt die Arten von Aktualisierungen, die Benutzeragenten, unterstützende Technologien und Benutzer von der Live-Region erwarten können, und wird verwendet, um Wichtigkeitsgrade auszudrücken.

Wenn das `aria-live`-Attribut auf `polite` gesetzt ist, werden unterstützende Technologien die Benutzer über Updates informieren, unterbrechen jedoch in der Regel nicht die aktuelle Aufgabe, wobei die Updates eine niedrige Priorität haben. Wenn es auf `assertive` gesetzt ist, informieren unterstützende Technologien den Benutzer sofort, möglicherweise wird die Sprachwarteschlange vorheriger Updates geleert.

Bildschirmlesegeräte puffern Inhalte, wenn die Seite geladen wird. Aufgrund dessen werden Inhalte, die nach dem initialen Aufbau des Barrierefreiheitsbaums hinzugefügt werden, möglicherweise nicht bemerkt, da AT-Benutzer beginnen, Inhalte zu konsumieren, bevor dynamische Widgets gefüllt werden - Benutzer wissen möglicherweise nicht, dass die Seite oder Inhalte aktualisiert werden, wenn Widgets geladen werden. In dieser Situation können Sie die Benutzer wissen lassen, dass die Seite aktualisiert wurde, indem Sie `aria-live="polite"` setzen.

Vollständig gefüllte Seiten können ebenfalls Updates haben. Beispiele sind Inhalte wie Echtzeit-Sportergebnisse, Nachrichtenticker und Börsenticker. Es sei denn, solche Updates sind die Hauptfunktion der Seite, Sie möchten den Benutzer wahrscheinlich nicht jedes Mal informieren, wenn es Updates gibt, aber ihm mitteilen, dass das Widget aktualisiert wird. Hier würden Sie `aria-live="off"` setzen. In diesen Szenarien besteht kein Grund, den Benutzer über Updates zu informieren, es sei denn, er fokussiert sich auf die Live-Region.

Einige Live-Updates sind wichtig und zeitkritisch. Wenn Sie beispielsweise Konzerttickets verkaufen und der Benutzer nur begrenzte Zeit hat, um den Kauf abzuschließen, möchten Sie nicht bis zu einer Pause im Ablauf warten, um ihn wissen zu lassen, dass seine Zeit fast um ist (oder bereits abgelaufen). Wenn es notwendig ist, so schnell wie möglich informiert zu werden, setzen Sie `aria-live="assertive"`. Wenn die aktualisierte Information ein [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) ist, wird das `aria-live`-Attribut nicht benötigt.

In diesem Szenario mit Zeitbegrenzung müssen Sie auch [eine Möglichkeit bereitstellen, dass Benutzer die verfügbare Zeit verlängern oder den Timer vollständig deaktivieren können](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).

### Verwendung von `aria-live`

Eine Live-Region umfasst das Element und alle seine Nachkommen. Wenn das `aria-live`-Attribut nicht auf aktualisierte Inhalte gesetzt ist, stammt der Wert von `aria-live` vom nächstgelegenen Vorfahren mit einem gültigen `aria-live`-Attributwert. Wenn es auf `off` gesetzt ist oder das Attribut insgesamt auf dem aktualisierten Element und allen Vorfahrenknoten im DOM-Baum weggelassen wird, wird der Benutzer nicht informiert. Benutzer können die Updates jedoch weiterhin hören, wenn sie zur Live-Region navigieren.

> [!WARNING]
> Da eine Unterbrechung Benutzer verwirren oder dazu führen kann, dass sie ihre aktuelle Aufgabe nicht abschließen, verwenden Sie den Wert `assertive` nur, wenn die Unterbrechung unabdingbar ist.

## Werte

- `assertive`
  - : Zeigt an, dass Updates für die Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `off` (Standardwert)
  - : Zeigt an, dass Updates für die Region dem Benutzer **nicht** präsentiert werden sollten, es sei denn, der Benutzer fokussiert sich derzeit auf diese Region.
- `polite`
  - : Zeigt an, dass Updates für die Region bei der nächsten passenden Gelegenheit präsentiert werden sollten, z. B. am Ende des aktuellen Satzes oder wenn der Benutzer aufhört zu tippen.

## Zugehörige Schnittstellen

- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Die [`ariaLive`](/de/docs/Web/API/Element/ariaLive)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-live`-Attributs wider.
- [`ElementInternals.ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)
  - : Die [`ariaLive`](/de/docs/Web/API/ElementInternals/ariaLive)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-live`-Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify), [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
