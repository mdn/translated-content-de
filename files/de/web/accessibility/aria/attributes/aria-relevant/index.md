---
title: aria-relevant
slug: Web/Accessibility/ARIA/Attributes/aria-relevant
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{AccessibilitySidebar}}

Das globale `aria-relevant`-Attribut, das in ARIA-Live-Regionen verwendet wird, gibt an, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der [Barrierefreiheitsbaum](/de/docs/Glossary/Accessibility_tree) innerhalb einer Live-Region geändert wird.

## Beschreibung

[ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) sind Bereiche einer Webseite, die aktualisiert werden, wenn die Aufmerksamkeit des Benutzers möglicherweise woanders liegt. Wenn eine Aktualisierung außerhalb des Tastaturfokus des Benutzers erfolgt, verwenden unterstützende Technologien wie Bildschirmleser einen Live-Regionsbereich, um dem Benutzer die Aktualisierungen mitzuteilen.

Beispiele für Live-Regionen sind Nachrichtenkarusselle, Börsenticker, Chatfenster und Punktetafeln. Diese werden ohne Benutzerinteraktion aktualisiert. Einige Aktualisierungen sind wichtig für den Benutzer, um davon Kenntnis zu haben. Sie sind relevant. Andere nicht. Das `aria-relevant` wird verwendet, um zu beschreiben, welche Arten von Änderungen in einer [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Region aufgetreten sind und welche relevant sind und angesagt werden sollten.

Der Wert ist eine durch Leerzeichen getrennte Liste von Änderungstypen, einschließlich `additions`, `removals` und `text`, wobei `all` eine Abkürzung für alle drei bedeutet.

Wenn `aria-relevant` nicht definiert ist, wird der Wert vom nächstgelegenen Vorfahren mit einem definierten Wert geerbt. Geerbte Werte sind nicht additiv; der auf einem Nachkommelement angegebene Wert überschreibt vollständig jeden geerbten Wert eines Vorfahrenelements. Wenn eine Live-Region kein `aria-relevant`-Attribut gesetzt hat und keinen Vorfahren mit einem gesetzten Attribut hat, wird `additions text` als Standard verwendet. Das bedeutet, dass Elementknoten zum Barrierefreiheitsbaum innerhalb der Live-Region hinzugefügt werden, UND Textinhalt oder eine Textalternative zu einem Nachkommen im Barrierefreiheitsbaum der Live-Region hinzugefügt wird. Dies liegt daran, dass im Allgemeinen Textänderungen und Knotenhinzufügungen relevant sind, Knotenentfernungen jedoch nicht.

Obwohl es kein unterstützter Wert ist, sollte `none` nicht als Live-Region verwendet werden, wenn dieser Wert am sinnvollsten ist.

Die Werte `removals` und `all` sollten sparsam verwendet werden. Zum Beispiel, wenn ein Tor bei der Weltmeisterschaft fällt, ist der neue Punktestand (die Hinzufügung) wichtig, der alte Wert (die Entfernung) nicht. Unterstützende Technologien müssen nur über die Entfernung von Inhalten informiert werden, wenn deren Entfernung eine wichtige Änderung darstellt, wie zum Beispiel, wenn ein Spieler vom Spiel ausgeschlossen wird.

## Werte

- `additions`
  - : Elementknoten werden zum Barrierefreiheitsbaum innerhalb der Live-Region hinzugefügt.
- `all`
  - : Abkürzung für `additions removals text`.
- `removals`
  - : Textinhalt, eine Textalternative oder ein Elementknoten innerhalb der Live-Region wird aus dem Barrierefreiheitsbaum entfernt.
- `text`
  - : Textinhalt oder eine Textalternative wird zu einem Nachkommen im Barrierefreiheitsbaum der Live-Region hinzugefügt.

## Zugehörige Schnittstellen

- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-relevant`-Attributs wider.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-relevant`-Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
