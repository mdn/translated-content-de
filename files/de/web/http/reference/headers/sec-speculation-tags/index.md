---
title: Sec-Speculation-Tags header
short-title: Sec-Speculation-Tags
slug: Web/HTTP/Reference/Headers/Sec-Speculation-Tags
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Der HTTP-{{Glossary("request_header", "Request-Header")}} **`Sec-Speculation-Tags`** enthält einen oder mehrere `tag`-Werte aus den [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API), die zur Spekulation geführt haben. So kann ein Server erkennen, welche Regel oder Regeln eine Spekulation ausgelöst haben, und sie gegebenenfalls blockieren.

Beispielsweise kann ein CDN automatisch Spekulationsregeln einfügen, aber Spekulationen für Ressourcen blockieren, die nicht im CDN zwischengespeichert sind, um unbeabsichtigte Folgen zu vermeiden. Anhand des Headers `Sec-Speculation-Tags` kann das CDN zwischen den von ihm eingefügten Regeln (die in diesem Fall blockiert werden sollten) und den vom Websitebetreiber hinzugefügten Spekulationsregeln (die nicht blockiert werden sollten) unterscheiden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (Präfix <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Speculation-Tags: <tag-list>
```

## Direktiven

- `<tag-list>`
  - : Eine durch Kommas getrennte Liste von Tags, die angeben, welche Regeln der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) diese Anfrage ausgelöst haben könnten. Die Syntax finden Sie unter [JSON-Darstellung von Spekulationsregeln](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation).

## Beispiele

### Spekulation durch eine Regel ohne explizites Tag

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

Wenn eine Spekulation durch eine Spekulationsregel ohne Tag ausgelöst wird, wird `null` im Header `Sec-Speculation-Tags` gesendet.

```http
Sec-Speculation-Tags: null
```

### Spekulation durch eine Regel mit einem Tag

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

Wenn eine Spekulation durch eine Spekulationsregel mit einem Tag ausgelöst wird, wird der Name des Tags im Header `Sec-Speculation-Tags` gesendet.

```http
Sec-Speculation-Tags: "my-rule"
```

### Spekulation durch eine Regel mit mehreren Tags

`tag` kann auf mehreren Ebenen festgelegt werden:

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

Alle zutreffenden Tags werden im Header `Sec-Speculation-Tags` gesendet. In diesem Fall würden also sowohl `"my-ruleset"` als auch `"my-rule"` gesendet:

```http
Sec-Speculation-Tags: "my-ruleset", "my-rule"
```

### Spekulation durch mehrere Regeln

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

Wenn die Spekulation in diesem Beispiel dadurch ausgelöst wird, dass der Benutzer den Mauszeiger 200 Millisekunden lang über dem Link hält (`"eagerness": "moderate"`), wird nur das Tag `my-rule` im Header gesendet:

```http
Sec-Speculation-Tags: "my-rule"
```

Wird der Link dagegen sofort angeklickt, ohne die 200 Millisekunden mit dem Mauszeiger darüber zu verweilen, hätten beide Regeln eine Spekulation ausgelöst. Daher werden beide Tags in den Header aufgenommen:

```http
Sec-Speculation-Tags: "my-rule", "cdn-rule"
```

### Spekulation durch mehrere Regeln mit und ohne Tags

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

Ähnlich wie im vorherigen Beispiel hätten beide Regeln eine Spekulation ausgelöst, wenn der Link sofort angeklickt wird, ohne die 200 Millisekunden mit dem Mauszeiger darüber zu verweilen. Daher werden beide Tags in den Header aufgenommen. Da die erste Regel jedoch kein `tag`-Feld enthält, wird sie im Header durch den Wert `null` dargestellt:

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
