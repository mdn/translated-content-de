---
title: aria-relevant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-relevant
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale `aria-relevant`-Attribut wird in ARIA-Live-Regionen verwendet und gibt an, welche Benachrichtigungen der Benutzeragent auslöst, wenn der {{Glossary("Accessibility_tree", "Accessibility-Baum")}} innerhalb einer Live-Region verändert wird.

## Beschreibung

[ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) sind Bereiche einer Webseite, die aktualisiert werden können, während die Aufmerksamkeit des Benutzers möglicherweise anderswo ist. Wenn eine Aktualisierung außerhalb des Fokus der Tastatur des Benutzers erfolgt, verwenden unterstützende Technologien wie Screenreader einen Live-Region-Bereich, um dem Benutzer von den Aktualisierungen zu berichten.

Beispiele für Live-Regionen sind Nachrichtenticker, Börsenticker, Chatfenster und Anzeigetafeln. Diese aktualisieren sich ohne Benutzerinteraktion. Einige Aktualisierungen sind wichtig für den Benutzer. Sie sind relevant. Andere sind es nicht. `aria-relevant` wird verwendet, um zu beschreiben, welche Arten von Änderungen an einer [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Region stattgefunden haben und welche relevant sind und angekündigt werden sollten.

Der Wert ist eine durch Leerzeichen getrennte Liste von Änderungsarten, einschließlich `additions`, `removals` und `text`, mit einer Kurzform `all`, die alle drei bedeutet.

Wenn `aria-relevant` nicht definiert ist, wird der Wert des nächstgelegenen Vorfahren mit einem definierten Wert übernommen. Geerbte Werte sind nicht additiv; der auf einem Nachkommenelement angegebene Wert überschreibt vollständig jeden geerbten Wert von einem Vorfahrenelement. Wenn eine Live-Region kein `aria-relevant`-Attribut gesetzt hat und auch kein Vorfahre dies hat, wird sie standardmäßig auf `additions text` gesetzt. Dies bedeutet, dass Knoten mit Elementen zum Accessibility-Baum innerhalb der Live-Region hinzugefügt werden und Textinhalte oder eine Textalternative zu jedem Nachkommen im Accessibility-Baum der Live-Region hinzugefügt werden. Dies liegt daran, dass allgemein Textänderungen und Knotenzugänge relevant sind, Knotentfernungen jedoch nicht.

Obwohl kein unterstützter Wert, sollte `none` nicht verwendet werden, wenn es am sinnvollsten erscheint, da es dann keine Live-Region sein sollte.

Die Werte `removals` und `all` sollten sparsam verwendet werden. Zum Beispiel, wenn ein Tor bei der Weltmeisterschaft fällt, ist die neue Punktzahl (die Hinzufügung) wichtig, der alte Wert (die Entfernung) ist es nicht. Unterstützende Technologien müssen nur über die Entfernung von Inhalten informiert werden, wenn deren Entfernung eine wichtige Änderung darstellt, zum Beispiel wenn ein Spieler aus dem Spiel genommen wird.

## Werte

- `additions`
  - : Elementknoten werden zum Accessibility-Baum innerhalb der Live-Region hinzugefügt.
- `all`
  - : Kurzform für `additions removals text`.
- `removals`
  - : Textinhalte, eine Textalternative oder ein Elementknoten innerhalb der Live-Region werden aus dem Accessibility-Baum entfernt.
- `text`
  - : Textinhalte oder eine Textalternative werden zu jedem Nachkommen im Accessibility-Baum der Live-Region hinzugefügt.

## Zugehörige Schnittstellen

- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-relevant`-Attributs wider.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-relevant`-Attributs wider.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
