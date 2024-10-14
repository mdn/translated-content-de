---
title: Link
slug: Web/HTTP/Headers/Link
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{HTTPSidebar}}

Das HTTP-**`Link`**-{{Glossary("Entity_header", "Entitäts-Header")}}-Feld ermöglicht die Serialisierung von einem oder mehreren Links in HTTP-Headern. Dieser Header hat die gleichen Semantiken wie das HTML-{{HTMLElement("link")}}-Element. Der Vorteil der Verwendung des `Link`-Headers besteht darin, dass der Browser mit dem Vorverbindung oder Vorladen von Ressourcen beginnen kann, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel`-Link-Typen](/de/docs/Web/HTML/Attributes/rel) keine Wirkung, wenn sie mit dem HTTP-Header verwendet werden. Zum Beispiel funktioniert die `icon`-Relation nur in HTML, und `stylesheet` funktioniert nicht zuverlässig in allen Browsern (nur in Firefox). Die einzigen Relationen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

## Syntax

```http
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : Die URI-Referenz muss zwischen `<` und `>` eingeschlossen und {{Glossary("Percent-encoding", "prozentcodiert")}} sein.

### Parameter

Der Link-Header enthält Parameter, die mit `;` getrennt sind und den Attributen des {{HTMLElement("link")}}-Elements entsprechen.

## Beispiele

### URLs in spitze Klammern einschließen

Die URI (absolut oder relativ) muss zwischen `<` und `>` eingeschlossen werden:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### URLs kodieren

Die URI (absolut oder relativ) muss Zeichenkodierungen größer als 255 kodieren:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Mehrere Links angeben

Sie können mehrere Links angeben, die durch Kommas getrennt sind, zum Beispiel:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

### Abrufpriorität steuern

Auch wenn Sie [`preload`](/de/docs/Web/HTML/Attributes/rel/preload) verwenden, um eine Ressource so früh wie möglich zu holen, werden verschiedene Inhaltstypen basierend auf der internen Priorisierung des Browsers früher oder später abgerufen.
Das [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority)-Attribut kann verwendet werden, um dem Browser einen Hinweis zu geben, dass eine bestimmte Ressource einen größeren oder geringeren relativen Einfluss auf die Benutzererfahrung hat als andere Ressourcen desselben Typs.

Zum Beispiel könnte der folgende Header verwendet werden, um `style.css` mit höherer Priorität als andere Stylesheets vorzubereiten:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung für das Abrufen von Ressourcen als auch die Wirkung der `fetchpriority`-Direktive vom Browser abhängen.
Die `fetchpriority`-Direktive sollte sparsam verwendet werden und nur in Fällen, in denen ein Browser nicht erkennen kann, dass eine bestimmte Ressource mit einer anderen Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus(103, "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Optimieren der Ressourcennutzung mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
