---
title: Sec-Speculation-Tags
slug: Web/HTTP/Reference/Headers/Sec-Speculation-Tags
l10n:
  sourceCommit: 31f1214fbabf51aa60ed6a3dae71b8d257e634d7
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Sec-Speculation-Tags`** {{Glossary("request_header", "Request-Header")}} enthält einen oder mehrere `tag`-Werte aus den [speculation rules](/de/docs/Web/API/Speculation_Rules_API), die zur Spekulation führten. Dies ermöglicht es einem Server, zu identifizieren, welche Regel(n) eine Spekulation verursacht haben, und sie möglicherweise zu blockieren.

Ein CDN kann beispielsweise automatisch Spekulationsregeln einfügen, aber Spekulationen für Ressourcen blockieren, die nicht im CDN zwischengespeichert sind, um unbeabsichtigte Konsequenzen zu vermeiden. Der `Sec-Speculation-Tags`-Header erlaubt es dem CDN, zwischen den von ihm eingefügten Regeln (die in diesem Fall blockiert werden sollen) und den vom Seitenbetreiber hinzugefügten Spekulationsregeln (die nicht blockiert werden sollen) zu unterscheiden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Speculation-Tags: <tag-list>
```

## Direktiven

- `<tag-list>`
  - : Eine kommagetrennte Liste von Tags, die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Regeln angeben, die diese Anfrage initiiert haben könnten. Siehe [Speculation rules JSON representation](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

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

Der `tag` kann auf mehreren Ebenen gesetzt werden:

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

Alle passenden Tags werden im `Sec-Speculation-Tags`-Header gesendet, daher würden in diesem Fall sowohl `"my-ruleset"` als auch `"my-rule"` gesendet werden:

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

In diesem Beispiel, wenn die Spekulation durch das Hovern des Benutzers über den Link für 200 Millisekunden initiiert wird (`"eagerness": "moderate"`), wird nur der `my-rule` Tag im Header gesendet:

```http
Sec-Speculation-Tags: "my-rule"
```

Wenn jedoch der Link sofort geklickt wird, ohne auf das 200-Millisekunden-Hovern zu warten, würden beide Regeln eine Spekulation ausgelöst haben, daher werden beide Tags im Header enthalten sein:

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

Ähnlich wie im vorherigen Beispiel, wenn der Link sofort geklickt wird, ohne auf das 200-Millisekunden-Hovern zu warten, würden beide Regeln eine Spekulation ausgelöst haben, daher werden beide Tags im Header enthalten sein. Da die erste Regel jedoch kein `tag`-Feld enthält, wird sie im Header mit einem `null`-Wert dargestellt:

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
