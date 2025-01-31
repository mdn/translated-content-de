---
title: Spezifikationstabellen
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Jede Referenzseite auf MDN sollte Informationen über die Spezifikation(en) bereitstellen, in der/denen diese API oder Technologie definiert wurde. Dieser Artikel zeigt, wie diese Tabellen aussehen und erklärt, wie man sie hinzufügt.

Die Definition des Spezifikationsabschnitts ist ähnlich der Definition der [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables), wird häufig aus derselben Datenquelle generiert und erscheint typischerweise direkt davor auf einer Seite.

## Standard-Spezifikationstabellen

Der Standard-Spezifikationsabschnitt sollte wie folgt aussehen:

```md
## Specifications

\{{Specifications}}
```

Das `\{{Specifications}}`-Makro generiert die Spezifikationstabelle basierend auf dem/den Wert(en) im Front-Matter der Seite.

Standardmäßig werden die Werte im `browser-compat`-Schlüssel verwendet.
Jeder Wert verweist auf ein bestimmtes Feature sowie dessen zugehörige Kompatibilitäts- und Spezifikationsinformationen im [browser-compat-data](https://github.com/mdn/browser-compat-data)-Repository.
Zum Beispiel hat die {{cssxref("text-align")}}-Seite den folgenden Schlüssel, den sie verwendet, um die zugehörigen Spezifikationsinformationen abzurufen.

```yaml
browser-compat: css.property.text-align
```

Einige Features werden in dem oben genannten Repository nicht gepflegt.
In diesen Fällen können Spezifikationsinformationen mithilfe des `spec-urls`-Schlüssels zum Front-Matter der Seite hinzugefügt werden.
Zum Beispiel hat das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Attribut den Front-Matter-Schlüssel:

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

Die Spezifikationstabelle für den `css.property.text-align`-Schlüssel oben wird in einer Tabelle wie folgt dargestellt:

### Spezifikationen

{{Specifications}}

## Nicht standardisierte Features

Beim Dokumentieren eines nicht standardisierten Features, insbesondere eines, das aus einem Standardisierungspfad entfernt wurde, sollten Sie das `\{{Specifications}}`-Makro nicht aufrufen.

Stattdessen versuchen Sie, Informationen über den Status des Features und mögliche Alternativen bereitzustellen. Beispiele:

- Diese Methode befindet sich nicht mehr auf einem Standardisierungspfad. Sie wird aus Kompatibilitätsgründen beibehalten. Verwenden Sie stattdessen _diese andere Methode_.
- Diese Methode war ursprünglich Teil von [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), ist aber in der aktuellen DOM-Spezifikation nicht vorhanden. Dieses Feature befindet sich nicht mehr auf dem Weg, ein Standard zu werden.
- Dieser Ereignis-Handler war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.
