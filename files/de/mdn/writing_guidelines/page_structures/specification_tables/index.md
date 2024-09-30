---
title: Spezifikationstabellen
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

Jede Referenzseite auf MDN sollte Informationen über die Spezifikation oder Spezifikationen bereitstellen, in denen diese API oder Technologie definiert wurde. Dieser Artikel zeigt, wie diese Tabellen aussehen, und erklärt, wie man sie hinzufügt.

Die Definition des Spezifikationsabschnitts ähnelt der Definition der [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables), wird häufig aus derselben Datenquelle generiert und erscheint typischerweise unmittelbar davor auf einer Seite.

## Standard-Spezifikationstabellen

Der Standard-Spezifikationsabschnitt sollte folgendermaßen aussehen:

```md
## Specifications

\{{Specifications}}
```

Das `\{{Specifications}}`-Makro generiert die Spezifikationstabelle basierend auf den Werten im Front-Matter der Seite.

Standardmäßig werden die Werte im `browser-compat`-Schlüssel verwendet. Jeder Wert verweist auf ein bestimmtes Merkmal und dessen zugehörige Kompatibilitäts- und Spezifikationsinformationen im [browser-compat-data](https://github.com/mdn/browser-compat-data) Repository. Zum Beispiel hat die Seite {{cssxref("text-align")}} den folgenden Schlüssel, den sie verwendet, um die zugehörigen Spezifikationsinformationen abzurufen.

```yaml
browser-compat: css.property.text-align
```

Einige Merkmale werden im obigen Repository nicht gepflegt. In diesen Fällen können Spezifikationsinformationen über den Schlüssel `spec-urls` im Front-Matter der Seite hinzugefügt werden. Zum Beispiel hat das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Attribut den Front-Matter-Schlüssel:

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

Die Spezifikationstabelle für den `css.property.text-align`-Schlüssel oben wird in einer Tabelle wie folgt dargestellt:

### Spezifikationen

{{Specifications}}

## Nicht-standardisierte Merkmale

Beim Dokumentieren eines nicht-standardisierten Merkmals, insbesondere eines, das von einem Standardisierungsprozess entfernt wurde, sollte das `\{{Specifications}}`-Makro nicht verwendet werden.

Stattdessen sollten Sie versuchen, Informationen über den Status des Merkmals und mögliche Alternativen bereitzustellen. Beispiele:

- Diese Methode befindet sich nicht mehr in einem Standardisierungsprozess. Sie wird aus Kompatibilitätsgründen beibehalten. Verwenden Sie stattdessen _diese andere Methode_.
- Diese Methode war ursprünglich Teil von [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), aber in der aktuellen DOM-Spezifikation nicht enthalten. Dieses Merkmal ist nicht mehr auf dem Weg, ein Standard zu werden.
- Dieser Ereignis-Handler war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.
