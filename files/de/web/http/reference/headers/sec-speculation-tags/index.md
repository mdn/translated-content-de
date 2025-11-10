---
title: Sec-Speculation-Tags header
short-title: Sec-Speculation-Tags
slug: Web/HTTP/Reference/Headers/Sec-Speculation-Tags
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{SeeCompatTable}}

Der HTTP-**`Sec-Speculation-Tags`**-{{Glossary("request_header", "Anforderungsheader")}} enthält einen oder mehrere `tag`-Werte aus den [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API), die zur Spekulation geführt haben. Dies ermöglicht es einem Server, zu identifizieren, welche Regel(n) eine Spekulation verursacht haben und diese möglicherweise zu blockieren.

Zum Beispiel könnte ein CDN automatisch Spekulationsregeln einfügen, aber Spekulationen für Ressourcen blockieren, die nicht im CDN zwischengespeichert sind, um unbeabsichtigte Konsequenzen zu vermeiden. Der `Sec-Speculation-Tags`-Header ermöglicht es dem CDN, zwischen den von ihm eingefügten Regeln (die in diesem Fall blockiert werden sollten) und den von Seitenbetreibern hinzugefügten Spekulationsregeln (die nicht blockiert werden sollten) zu unterscheiden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Eine durch Kommas getrennte Liste von Tags, die auf Regeln der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) hinweisen, die diese Anforderung möglicherweise initiiert haben. Siehe [Spekulationsregeln JSON-Darstellung](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation) für die Syntaxreferenz.

## Beispiele

### Spekulation aus einer Regel ohne explizites Tag

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

Wenn eine Spekulation aufgrund einer Spekulationsregel ohne Tag erfolgt, wird `null` im `Sec-Speculation-Tags`-Header gesendet.

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

Alle passenden Tags werden im `Sec-Speculation-Tags`-Header gesendet, also würden in diesem Fall sowohl `"my-ruleset"` als auch `"my-rule"` gesendet werden:

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

In diesem Beispiel, wenn die Spekulation durch das Überfahren des Links für 200 Millisekunden veranlasst wird (`"eagerness": "moderate"`), dann wird nur das `my-rule`-Tag im Header gesendet:

```http
Sec-Speculation-Tags: "my-rule"
```

Wird der Link jedoch sofort angeklickt, ohne auf die 200 Millisekunden Hover zu warten, dann hätten beide Regeln eine Spekulation ausgelöst, daher werden beide Tags im Header enthalten sein:

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

Ähnlich wie im vorherigen Beispiel würden, wenn der Link sofort angeklickt wird, ohne auf die 200 Millisekunden Hover zu warten, beide Regeln eine Spekulation auslösen, daher werden beide Tags im Header enthalten sein. Da die erste Regel jedoch kein `tag`-Feld enthält, wird sie im Header mit einem `null`-Wert dargestellt:

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
