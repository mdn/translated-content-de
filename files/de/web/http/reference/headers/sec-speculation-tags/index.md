---
title: Sec-Speculation-Tags header
short-title: Sec-Speculation-Tags
slug: Web/HTTP/Reference/Headers/Sec-Speculation-Tags
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-**`Sec-Speculation-Tags`**-{{Glossary("request_header", "Request-Header")}} enthält einen oder mehrere `tag`-Werte aus den [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API), die zu der Spekulation geführt haben. Dadurch kann ein Server feststellen, welche Regel(n) eine Spekulation verursacht haben und sie gegebenenfalls blockieren.

Ein CDN kann beispielsweise automatisch Spekulationsregeln einfügen, jedoch Spekulationen für Ressourcen, die nicht im CDN zwischengespeichert sind, blockieren, um unbeabsichtigte Konsequenzen zu vermeiden. Der `Sec-Speculation-Tags`-Header ermöglicht dem CDN, zwischen den von ihm eingefügten Regeln (die in diesem Fall blockiert werden sollten) und den vom Website-Eigentümer hinzugefügten Spekulationsregeln (die nicht blockiert werden sollten) zu unterscheiden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Speculation-Tags: <tag-list>
```

## Direktiven

- `<tag-list>`
  - : Eine durch Komma getrennte Liste von Tags, die Regeln der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) anzeigen, die möglicherweise diese Anfrage initiiert haben. Siehe [JSON-Darstellung der Spekulationsregeln](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

## Beispiele

### Spekulation aus einer Regel ohne expliziten Tag

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

Wenn eine Spekulation aufgrund einer Spekulationsregel ohne Tag auftritt, wird `null` im `Sec-Speculation-Tags`-Header gesendet.

```http
Sec-Speculation-Tags: null
```

### Spekulation aus einer Regel mit einem Tag

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "my-rule",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

Wenn eine Spekulation aufgrund einer Spekulationsregel mit einem Tag auftritt, wird der Tag-Name im `Sec-Speculation-Tags`-Header gesendet.

```http
Sec-Speculation-Tags: "my-rule"
```

### Spekulation aus einer Regel mit mehreren Tags

Das `tag` kann auf mehreren Ebenen festgelegt werden:

```html
<script type="speculationrules">
  {
    "tag": "my-ruleset",
    "prefetch": [
      {
        "tag": "my-rule",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

Alle passenden Tags werden im `Sec-Speculation-Tags`-Header gesendet, sodass in diesem Fall sowohl `"my-ruleset"` als auch `"my-rule"` gesendet werden:

```http
Sec-Speculation-Tags: "my-ruleset", "my-rule"
```

### Spekulation aus mehreren Regeln

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "my-rule",
        "urls": ["next.html", "next2.html"],
        "eagerness": "moderate"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "cdn-rule",
        "urls": ["next.html", "next.html"],
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

In diesem Beispiel, wenn die Spekulation durch das Überfahren des Links mit der Maus für 200 Millisekunden initiiert wird (`"eagerness": "moderate"`), wird nur der `my-rule`-Tag im Header gesendet:

```http
Sec-Speculation-Tags: "my-rule"
```

Wenn jedoch der Link sofort, ohne das Warten der 200 Millisekunden, angeklickt wird, hätten beide Regeln eine Spekulation ausgelöst, daher werden beide Tags im Header enthalten sein:

```http
Sec-Speculation-Tags: "my-rule", "cdn-rule"
```

### Spekulation aus mehreren Regeln mit und ohne Tags

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "eagerness": "moderate"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "cdn-rule",
        "urls": ["next.html", "next.html"],
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

Ähnlich wie im vorherigen Beispiel, wenn der Link sofort ohne das Warten der 200 Millisekunden angeklickt wird, hätten beide Regeln eine Spekulation ausgelöst, daher werden beide Tags im Header enthalten sein. Da jedoch die erste Regel kein `tag`-Feld enthält, wird sie im Header mit einem `null`-Wert dargestellt:

```http
Sec-Speculation-Tags: null, "cdn-rule"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
