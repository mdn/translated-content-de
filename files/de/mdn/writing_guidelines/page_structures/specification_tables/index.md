---
title: Spezifikationstabellen
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

Jede Referenzseite auf MDN sollte Informationen über die Spezifikation oder Spezifikationen bereitstellen, in denen diese API oder Technologie definiert wurde. Dieser Artikel zeigt, wie diese Tabellen aussehen und erklärt, wie sie hinzugefügt werden.

Die Definition des Spezifikationsabschnitts ist ähnlich der Definition der [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables), wird häufig aus derselben Datenquelle generiert und erscheint typischerweise unmittelbar davor auf einer Seite.

## Standard-Spezifikationstabellen

Der Standard-Spezifikationsabschnitt sollte so aussehen:

```md
## Specifications

\{{Specifications}}
```

Das `\{{Specifications}}`-Makro generiert die Spezifikationstabelle basierend auf dem oder den Werten in den Seiten-Frontmatter.

Standardmäßig werden die Werte im Schlüssel `browser-compat` verwendet.
Jeder Wert verweist auf ein bestimmtes Merkmal und die dazugehörigen Kompatibilitäts- und Spezifikationsinformationen im [browser-compat-data](https://github.com/mdn/browser-compat-data) Repository.
Zum Beispiel hat die {{cssxref("text-align")}}-Seite den folgenden Schlüssel, mit dem sie die zugehörigen Spezifikationsinformationen abruft.

```yaml
browser-compat: css.property.text-align
```

Einige Merkmale werden in dem oben genannten Repository nicht gepflegt.
In diesen Fällen können Spezifikationsinformationen mithilfe des Schlüssels `spec-urls` in den Seiten-Frontmatter hinzugefügt werden.
Zum Beispiel hat das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) -Attribut den Frontmatter-Schlüssel:

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

Die Spezifikationstabelle für den `css.property.text-align`-Schlüssel oben wird wie folgt in einer Tabelle dargestellt:

### Spezifikationen

{{Specifications}}

## Nicht standardisierte Merkmale

Beim Dokumentieren eines nicht standardisierten Merkmals, insbesondere eines, das von einer Standardisierungsspur entfernt wurde, verwenden Sie nicht das `\{{Specifications}}`-Makro.

Versuchen Sie stattdessen, Informationen über den Status des Merkmals und mögliche Alternativen bereitzustellen. Beispiele:

- Diese Methode ist nicht mehr auf einer Standardisierungsspur. Sie wird aus Kompatibilitätsgründen beibehalten. Verwenden Sie stattdessen _diese andere Methode_.
- Diese Methode war ursprünglich Teil des [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), fehlt jedoch in der aktuellen DOM-Spezifikation. Dieses Merkmal ist nicht mehr auf dem Weg, ein Standard zu werden.
- Dieser Ereignishandler war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR-Device-API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.
