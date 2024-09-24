---
title: Spezifikationstabellen
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

Jede Referenzseite auf MDN sollte Informationen über die Spezifikation oder Spezifikationen bereitstellen, in denen diese API oder Technologie definiert wurde. Dieser Artikel zeigt, wie diese Tabellen aussehen, und erklärt, wie man sie hinzufügt.

Die Definition des Abschnitts zu den Spezifikationen ist ähnlich der [Kompatibilitätstabellen-Definition](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables), wird üblicherweise aus derselben Datenquelle generiert und erscheint typischerweise direkt davor auf einer Seite.

## Standardmäßige Spezifikationstabellen

Der standardmäßige Spezifikationsabschnitt sollte so aussehen:

```md
## Specifications

\{{Specifications}}
```

Das Makro `\{{Specifications}}` generiert die Spezifikationstabelle basierend auf dem/den Wert(en) im Frontmatter der Seite.

Standardmäßig werden die Wert(e) des Schlüssels `browser-compat` verwendet.
Jeder Wert verweist auf ein bestimmtes Merkmal und dessen zugehörige Kompatibilitäts- und Spezifikationsinformationen im [browser-compat-data](https://github.com/mdn/browser-compat-data) Repository.
Zum Beispiel hat die Seite {{cssxref("text-align")}} den folgenden Schlüssel, mit dem sie die zugehörigen Spezifikationsinformationen abruft.

```yaml
browser-compat: css.property.text-align
```

Einige Merkmale werden im obigen Repository nicht gepflegt.
In diesen Fällen können Spezifikationsinformationen über den Schlüssel `spec-urls` zum Frontmatter der Seite hinzugefügt werden.
Zum Beispiel hat das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Attribut den Frontmatter-Schlüssel:

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

Die Spezifikationstabelle für den oben genannten Schlüssel `css.property.text-align` wird in einer Tabelle wie folgt gerendert:

### Specifications

{{Specifications}}

## Nicht standardisierte Merkmale

Beim Dokumentieren eines nicht standardisierten Merkmals, insbesondere wenn es aus einer Standardisierungsschiene entfernt wurde, verwenden Sie nicht das Makro `\{{Specifications}}`.

Stattdessen versuchen Sie, Informationen über den Status des Merkmals und mögliche Alternativen bereitzustellen. Beispiele:

- Diese Methode ist nicht länger auf einer Standardisierungsschiene. Sie wird aus Kompatibilitätsgründen beibehalten. Verwenden Sie stattdessen _diese andere Methode_.
- Diese Methode war ursprünglich Teil von [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), ist aber in der aktuellen DOM-Spezifikation nicht enthalten. Dieses Merkmal ist nicht länger auf dem Weg, ein Standard zu werden.
- Dieser Ereignis-Handler war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht länger auf dem Weg, ein Standard zu werden.
