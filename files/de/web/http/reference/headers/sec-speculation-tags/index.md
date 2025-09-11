---
title: Sec-Speculation-Tags header
short-title: Sec-Speculation-Tags
slug: Web/HTTP/Reference/Headers/Sec-Speculation-Tags
l10n:
  sourceCommit: 9c2dabaabc326c4a3fed27f6e9bcb3605958e516
---

{{SeeCompatTable}}{{non-standard_header}}

Der HTTP-**`Sec-Speculation-Tags`**-{{Glossary("request_header", "Request-Header")}} enthält einen oder mehrere `tag`-Werte aus den [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API), die zu der Spekulation geführt haben. Dies ermöglicht es einem Server zu identifizieren, welche Regel(n) die Spekulation verursacht haben, und sie gegebenenfalls zu blockieren.

Ein CDN kann beispielsweise automatisch Spekulationsregeln einfügen, jedoch Spekulationen für Ressourcen blockieren, die nicht im CDN zwischengespeichert sind, um unbeabsichtigte Konsequenzen zu vermeiden. Der `Sec-Speculation-Tags`-Header ermöglicht es dem CDN, zwischen den von ihm eingefügten Regeln (die in diesem Fall blockiert werden sollten) und den Spekulationsregeln des Website-Eigentümers (die nicht blockiert werden sollten) zu unterscheiden.

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
  - : Eine kommagetrennte Liste von Tags, die auf [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Regeln hinweisen, die diese Anfrage möglicherweise initiiert haben. Siehe [JSON-Darstellung der Spekulationsregeln](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

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

Wenn eine Spekulation aufgrund einer Spekulationsregel ohne Tag erfolgt, dann wird `null` im `Sec-Speculation-Tags`-Header gesendet.

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

Wenn eine Spekulation aufgrund einer Spekulationsregel mit einem Tag erfolgt, wird der Tag-Name im `Sec-Speculation-Tags`-Header gesendet.

```http
Sec-Speculation-Tags: "my-rule"
```

### Spekulation aus einer Regel mit mehreren Tags

Der `tag` kann auf mehreren Ebenen festgelegt werden:

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

Alle passenden Tags werden im `Sec-Speculation-Tags`-Header gesendet, in diesem Fall würden also sowohl `"my-ruleset"` als auch `"my-rule"` gesendet:

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

In diesem Beispiel, wenn die Spekulation dadurch initiiert wird, dass der Benutzer 200 Millisekunden über den Link schwebt (`"eagerness": "moderate"`), wird nur der `my-rule`-Tag im Header gesendet:

```http
Sec-Speculation-Tags: "my-rule"
```

Wird der Link jedoch sofort angeklickt, ohne auf das 200-Millisekunden-Hover zu warten, würden beide Regeln eine Spekulation auslösen, daher werden beide Tags im Header enthalten sein:

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

Ähnlich wie im vorherigen Beispiel würden, wenn der Link sofort angeklickt wird, beide Regeln eine Spekulation auslösen, daher werden beide Tags im Header enthalten sein. Da die erste Regel jedoch kein `tag`-Feld enthält, wird sie im Header durch einen `null`-Wert dargestellt:

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
