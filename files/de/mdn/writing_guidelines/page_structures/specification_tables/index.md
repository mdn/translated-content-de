---
title: Spezifikationstabellen
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Jede Referenzseite auf MDN sollte Informationen über die Spezifikation oder Spezifikationen enthalten, in denen diese API oder Technologie definiert wurde. Dieser Artikel zeigt, wie diese Tabellen aussehen und erklärt, wie sie hinzugefügt werden.

Die Definition des Spezifikationsbereichs ist ähnlich wie die Definition der [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables), wird häufig aus der gleichen Datenquelle generiert und erscheint typischerweise direkt davor auf einer Seite.

## Standard-Spezifikationstabellen

Der Standard-Spezifikationsbereich sollte wie folgt aussehen:

```md
## Specifications

\{{Specifications}}
```

Das `\{{Specifications}}`-Makro generiert die Spezifikationstabelle basierend auf dem oder den Werten im Seiten-Front-Matter.

Standardmäßig werden die Werte im `browser-compat`-Schlüssel verwendet.
Jeder Wert verweist auf ein bestimmtes Feature und die dazugehörigen Kompatibilitäts- und Spezifikationsinformationen im [browser-compat-data](https://github.com/mdn/browser-compat-data)-Repository.
Zum Beispiel hat die {{cssxref("text-align")}}-Seite den folgenden Schlüssel, den sie verwendet, um die zugehörigen Spezifikationsinformationen abzurufen.

```yaml
browser-compat: css.property.text-align
```

Einige Features werden nicht in dem oben genannten Repository gepflegt.
In diesen Fällen können Spezifikationsinformationen mittels des `spec-urls`-Schlüssels zum Seiten-Front-Matter hinzugefügt werden.
Zum Beispiel hat das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Attribut den Front-Matter-Schlüssel:

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

Die Spezifikationstabelle für den `css.property.text-align`-Schlüssel oben wird in einer Tabelle wie folgt dargestellt:

### Spezifikationen

{{Specifications}}

## Nicht-standardisierte Features

Beim Dokumentieren eines nicht-standardisierten Features, insbesondere eines, das aus einem Standardisierungsprozess entfernt wurde, rufen Sie nicht das `\{{Specifications}}`-Makro auf.

Stattdessen versuchen Sie, Informationen über den Status des Features und mögliche Alternativen bereitzustellen. Beispiele:

- Diese Methode befindet sich nicht mehr auf einem Standardisierungspfad. Sie wird aus Kompatibilitätsgründen behalten. Verwenden Sie stattdessen _diese andere Methode_.
- Diese Methode war ursprünglich Teil von [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), ist aber in der aktuellen DOM-Spezifikation nicht enthalten. Dieses Feature ist nicht mehr auf dem Weg, ein Standard zu werden.
- Dieser Ereignis-Handler war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.
