---
title: aria-relevant
slug: Web/Accessibility/ARIA/Attributes/aria-relevant
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{AccessibilitySidebar}}

Das globale `aria-relevant`-Attribut wird in ARIA-Live-Regionen verwendet und gibt an, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der [Accessibility Tree](/de/docs/Glossary/Accessibility_tree) innerhalb einer Live-Region geändert wird.

## Beschreibung

[ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) sind Bereiche einer Webseite, die aktualisiert werden, wenn die Aufmerksamkeit des Nutzers möglicherweise woanders liegt. Wenn eine Aktualisierung außerhalb des Tastaturfokus des Nutzers liegt, nutzen unterstützende Technologien wie Bildschirmleseprogramme einen Live-Region-Bereich, um dem Nutzer Aktualisierungen mitzuteilen.

Beispiele für Live-Regionen sind Nachrichtenticker, Aktienkurse, Chatfenster und Anzeigetafeln. Diese aktualisieren sich ohne Benutzereingriff. Einige Aktualisierungen sind für den Nutzer wichtig zu wissen. Sie sind relevant. Andere sind es nicht. Das `aria-relevant` wird verwendet, um zu beschreiben, welche Arten von Änderungen in einer [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Region aufgetreten sind, und welche relevant sind und angekündigt werden sollten.

Der Wert ist eine durch Leerzeichen getrennte Liste von Änderungstypen, einschließlich `additions`, `removals` und `text`, mit einer Kurzform `all`, die alle drei bedeutet.

Wenn `aria-relevant` nicht definiert ist, wird der Wert vom nächsten Vorfahren mit einem definierten Wert geerbt. Geerbte Werte sind nicht additiv; der auf einem Nachkommenelement angegebene Wert überschreibt vollständig jeden geerbten Wert eines Vorfahrelements. Wenn eine Live-Region kein `aria-relevant`-Attribut gesetzt hat und keinen Vorfahren mit gesetztem Attribut hat, lautet der Standardwert `additions text`, was bedeutet, dass Knotenelemente dem Accessibility Tree innerhalb der Live-Region hinzugefügt werden, UND dass Textinhalt oder eine Textalternative zu jedem Nachkommen im Accessibility Tree der Live-Region hinzugefügt wird. Dies liegt daran, dass im Allgemeinen Textmodifikationen und Knotenzugänge relevant sind, Knotenentfernungen jedoch nicht.

Obwohl kein unterstützter Wert, sollte `none` nicht für eine Live-Region verwendet werden, wenn es am sinnvollsten ist.

Die Werte `removals` und `all` sollten sparsam eingesetzt werden. Wenn zum Beispiel ein Tor in der Weltmeisterschaft fällt, ist der neue Spielstand (die Hinzufügung) wichtig, der alte Wert (die Entfernung) jedoch nicht. Unterstützende Technologien müssen nur über Inhaltsentfernung informiert werden, wenn deren Entfernung eine wichtige Änderung darstellt, wie z. B. wenn ein Spieler aus dem Spiel genommen wird.

## Werte

- `additions`
  - : Knotenelemente werden dem Accessibility Tree innerhalb der Live-Region hinzugefügt.
- `all`
  - : Kurzform für `additions removals text`.
- `removals`
  - : Textinhalt, eine Textalternative oder ein Knotenelement innerhalb der Live-Region wird aus dem Accessibility Tree entfernt.
- `text`
  - : Textinhalt oder eine Textalternative wird zu jedem Nachkommen im Accessibility Tree der Live-Region hinzugefügt.

## Zugehörige Schnittstellen

- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant)-Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist, spiegelt den Wert des `aria-relevant`-Attributs wider.
- [`ElementInternals.ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant)
  - : Die [`ariaRelevant`](/de/docs/Web/API/ElementInternals/ariaRelevant)-Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist, spiegelt den Wert des `aria-relevant`-Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
