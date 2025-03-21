---
title: aria-relevant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-relevant
l10n:
  sourceCommit: cac6b8cffc3c23c754a1abf0a65cc0d6f09b83d7
---

Das globale `aria-relevant` Attribut, das in ARIA Live-Regionen verwendet wird, gibt an, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} innerhalb einer Live-Region verändert wird.

## Beschreibung

[ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) sind Bereiche einer Webseite, die aktualisiert werden, wenn die Aufmerksamkeit des Benutzers möglicherweise woanders ist. Wenn eine Aktualisierung außerhalb des Tastaturfokus des Benutzers erfolgt, verwenden unterstützende Technologien wie Bildschirmleser einen Live-Bereich, um dem Benutzer Updates zu melden.

Beispiele für Live-Regionen sind Nachrichten-Laufschriften, Börsenticker, Chatfenster und Anzeigetafeln. Diese aktualisieren sich ohne Benutzerinteraktion. Einige Updates sind wichtig für den Benutzer zu wissen. Sie sind relevant. Andere sind es nicht. Das `aria-relevant` Attribut wird verwendet, um zu beschreiben, welche Arten von Änderungen in einer [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Region aufgetreten sind und welche relevant sind und angesagt werden sollten.

Der Wert ist eine durch Leerzeichen getrennte Liste von Änderungsarten, einschließlich `additions`, `removals` und `text`, mit einer Kurzform `all`, die alle drei bedeutet.

Wenn `aria-relevant` nicht definiert ist, wird der Wert vom nächstgelegenen Vorgänger mit einem definierten Wert geerbt. Geerbte Werte sind nicht kumulativ; der Wert, der auf einem nachgeordneten Element angegeben wird, überschreibt vollständig jeden geerbten Wert von einem Vorgängerelement. Wenn eine Live-Region kein `aria-relevant` Attribut gesetzt hat und keinen Vorgänger hat, der es gesetzt hat, lautet der Standardwert `additions text`, was bedeutet, dass Elementknoten zum Zugänglichkeitsbaum der Live-Region hinzugefügt werden, UND Textinhalt oder eine Textalternative zu jedem Nachfahren im Zugänglichkeitsbaum der Live-Region hinzugefügt wird. Das liegt daran, dass im Allgemeinen Textänderungen und Knotenhinzufügungen relevant sind, Knotenentfernungen jedoch nicht.

Auch wenn es kein unterstützter Wert ist, sollte `none` nicht als Live-Region verwendet werden, wenn dieser Wert am sinnvollsten erscheint.

Die Werte `removals` und `all` sollten sparsam verwendet werden. Zum Beispiel, wenn ein Tor in der Weltmeisterschaft fällt, ist der neue Spielstand (die Hinzufügung) wichtig, der alte Wert (die Entfernung) ist es nicht. Unterstützende Technologien müssen nur über das Entfernen von Inhalten informiert werden, wenn deren Entfernung eine wichtige Änderung darstellt, wie zum Beispiel, wenn ein Spieler aus dem Spiel genommen wird.

## Werte

- `additions`
  - : Elementknoten werden dem Zugänglichkeitsbaum innerhalb der Live-Region hinzugefügt.
- `all`
  - : Kurzform für `additions removals text`.
- `removals`
  - : Textinhalt, eine Textalternative oder ein Elementknoten innerhalb der Live-Region wird aus dem Zugänglichkeitsbaum entfernt.
- `text`
  - : Textinhalt oder eine Textalternative wird einem Nachfahren im Zugänglichkeitsbaum der Live-Region hinzugefügt.

## Zugehörige Schnittstellen

- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-relevant` Attributs wider.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-relevant` Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
