---
title: "ARIA: aria-relevant Attribut"
short-title: aria-relevant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-relevant
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Verwendet in ARIA-Live-Regionen zeigt das globale `aria-relevant` Attribut an, welche Benachrichtigungen der User-Agent auslöst, wenn der {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} innerhalb einer Live-Region modifiziert wird.

## Beschreibung

[ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) sind Bereiche einer Webseite, die aktualisiert werden, wenn die Aufmerksamkeit des Benutzers woanders sein könnte. Wenn eine Aktualisierung außerhalb des Tastaturfokus des Benutzers erfolgt, nutzen unterstützende Technologien wie Bildschirmleser eine Live-Region, um dem Benutzer Updates zu melden.

Beispiele für Live-Regionen sind Nachrichtenticker, Aktienkursticker, Chat-Fenster und Punktetafeln. Diese aktualisieren sich ohne Benutzereingriff. Einige Updates sind wichtig für den Benutzer. Diese sind relevant. Andere wiederum nicht. `aria-relevant` wird verwendet, um zu beschreiben, welche Arten von Änderungen an einer [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Region erfolgt sind, welche relevant sind und angesagt werden sollten.

Der Wert ist eine durch Leerzeichen getrennte Liste von Änderungsarten, einschließlich `additions`, `removals` und `text`, mit der Kurzform `all`, die alle drei bedeutet.

Wenn `aria-relevant` nicht definiert ist, wird der Wert vom nächsten Vorfahren mit einem definierten Wert geerbt. Vererbte Werte sind nicht additiv; der auf einem Nachfahrelement angegebene Wert überschreibt vollständig jeden geerbten Wert von einem Vorfahrelement. Wenn eine Live-Region kein `aria-relevant` Attribut gesetzt hat und kein Vorfahr sie hat, ist der Standard `additions text`, was bedeutet, dass Elementknoten dem Zugänglichkeitsbaum innerhalb der Live-Region hinzugefügt werden, UND Textinhalt oder eine textuelle Alternative zu jedem Nachfahren im Zugänglichkeitsbaum der Live-Region hinzugefügt wird. Dies liegt daran, dass generell Textänderungen und Knotenhinzufügungen relevant sind, Knotenentfernungen jedoch nicht.

Obwohl kein unterstützter Wert, sollte, wenn der Wert `none` am sinnvollsten ist, es keine Live-Region sein.

Die Werte `removals` und `all` sollten sparsam genutzt werden. Beispielweise, wenn ein Tor bei der Weltmeisterschaft fällt, ist der neue Spielstand (die Hinzufügung) wichtig, der alte Wert (die Entfernung) nicht. Unterstützende Technologien müssen nur über die Entfernung von Inhalten informiert werden, wenn deren Entfernung eine wichtige Änderung darstellt, wie zum Beispiel, wenn ein Spieler aus dem Spiel genommen wird.

## Werte

- `additions`
  - : Elementknoten werden dem Zugänglichkeitsbaum innerhalb der Live-Region hinzugefügt.
- `all`
  - : Kurzform für `additions removals text`.
- `removals`
  - : Textinhalt, eine textuelle Alternative oder ein Elementknoten innerhalb der Live-Region wird aus dem Zugänglichkeitsbaum entfernt.
- `text`
  - : Textinhalt oder eine textuelle Alternative wird zu einem Nachfahren im Zugänglichkeitsbaum der Live-Region hinzugefügt.

## Zugehörige Schnittstellen

- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-relevant` Attributs wider.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-relevant` Attributs wider.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
