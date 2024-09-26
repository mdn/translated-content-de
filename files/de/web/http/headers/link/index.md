---
title: Link
slug: Web/HTTP/Headers/Link
l10n:
  sourceCommit: a2847ff3788f224ffb4cdf05cb0139e07fde7533
---

{{HTTPSidebar}}

Das HTTP-**`Link`**-[Entity-Header](/de/docs/Glossary/Entity_header)-Feld bietet eine Möglichkeit, eine oder mehrere Links in HTTP-Headern zu serialisieren. Dieser Header hat die gleichen Semantik wie das HTML-{{HTMLElement("link")}}-Element. Der Vorteil der Verwendung des `Link`-Headers besteht darin, dass der Browser vorab mit dem Vorverbindungs- oder Vorladungsprozess von Ressourcen beginnen kann, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [Link-Typen](/de/docs/Web/HTML/Attributes/rel) keine Auswirkungen im HTTP-Header. Zum Beispiel funktioniert die `icon`-Relation nur in HTML, und `stylesheet` funktioniert nicht zuverlässig in allen Browsern (nur in Firefox). Die einzigen Relationen, die zuverlässig funktionieren, sind `preconnect` und `preload`, die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

## Syntax

```http
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : Die URI-Referenz muss zwischen `<` und `>` eingeschlossen und {{Glossary("Percent-encoding", "percent-encoded")}} sein.

### Parameter

Der Link-Header enthält Parameter, die mit `;` getrennt sind und den Attributen des {{HTMLElement("link")}}-Elements entsprechen.

## Beispiele

Die URI (absolut oder relativ) muss in `<` und `>` eingeschlossen sein:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### URLs kodieren

Die URI (absolut oder relativ) muss Zeichencodes größer als 255 kodieren:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Mehrere Links angeben

Sie können mehrere Links angeben, die durch Kommata getrennt sind, zum Beispiel:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus(103, "103 Early Hints")}}
- {{HTMLElement("link")}}
