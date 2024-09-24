---
title: aria-relevant
slug: Web/Accessibility/ARIA/Attributes/aria-relevant
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{AccessibilitySidebar}}

Das globale Attribut `aria-relevant`, das in ARIA-Live-Regionen verwendet wird, gibt an, welche Benachrichtigungen der Benutzeragent auslöst, wenn der [Barrierefreiheitsbaum](/de/docs/Glossary/Accessibility_tree) innerhalb einer Live-Region modifiziert wird.

## Beschreibung

[ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) sind Bereiche einer Webseite, die aktualisiert werden, wenn die Aufmerksamkeit des Nutzers möglicherweise woanders ist. Wenn ein Update außerhalb des Tastaturfokus des Nutzers liegt, nutzen unterstützende Technologien wie Bildschirmleser einen Live-Region-Bereich, um dem Nutzer Updates zu melden.

Beispiele für Live-Regionen sind Nachrichtenmarquees, Börsenticker, Chatfenster und Anzeigetafeln. Diese aktualisieren sich ohne Benutzerinteraktion. Einige Updates sind wichtig für den Nutzer. Sie sind relevant. Andere sind es nicht. Das `aria-relevant` wird verwendet, um zu beschreiben, welche Arten von Änderungen an einer [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Region aufgetreten sind und welche relevant sind und angesagt werden sollten.

Der Wert ist eine durch Leerzeichen getrennte Liste von Änderungstypen, einschließlich `additions`, `removals` und `text`, wobei `all` als Abkürzung für alle drei steht.

Wenn `aria-relevant` nicht definiert ist, wird der Wert von dem nächstgelegenen Vorfahren mit einem definierten Wert geerbt. Geerbte Werte sind nicht additiv; der auf einem Nachfahrenelement angegebene Wert überschreibt vollständig jeden geerbten Wert von einem Vorfahrelement. Wenn eine Live-Region kein `aria-relevant`-Attribut besitzt und keinen Vorfahren mit einem solchen Wert hat, wird standardmäßig `additions text` verwendet, was bedeutet, dass Elementknoten zum Barrierefreiheitsbaum innerhalb der Live-Region hinzugefügt werden UND Textinhalte oder eine Textalternative zu einem beliebigen Nachfahren im Barrierefreiheitsbaum der Live-Region hinzugefügt werden. Dies liegt daran, dass im Allgemeinen Textänderungen und Knotenhinzufügungen relevant sind, aber Knotenentfernungen nicht.

Obwohl nicht als unterstützter Wert vorgesehen, sollte ein Wert von `none` nicht als Live-Region verwendet werden, wenn es am meisten Sinn macht.

Die Werte `removals` und `all` sollten sparsam verwendet werden. Zum Beispiel, wenn ein Tor bei der Weltmeisterschaft erzielt wird, ist der neue Spielstand (die Hinzufügung) wichtig, der alte Wert (die Entfernung) nicht. Unterstützende Technologien müssen nur über eine Inhaltsentfernung informiert werden, wenn deren Entfernung eine wichtige Änderung darstellt, wie wenn ein Spieler aus dem Spiel genommen wird.

## Werte

- `additions`
  - : Elementknoten werden innerhalb der Live-Region zum Barrierefreiheitsbaum hinzugefügt.
- `all`
  - : Abkürzung für `additions removals text`.
- `removals`
  - : Textinhalt, eine Textalternative oder ein Elementknoten innerhalb der Live-Region wird aus dem Barrierefreiheitsbaum entfernt.
- `text`
  - : Textinhalt oder eine Textalternative wird zu einem beliebigen Nachfahren im Barrierefreiheitsbaum der Live-Region hinzugefügt.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaRelevant")}}
  - : Die [`ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-relevant` Attributs wider.
- {{domxref("ElementInternals.ariaRelevant")}}
  - : Die [`ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-relevant` Attributs wider.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
