---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Timing-Allow-Origin`** Antwort-Header gibt an, welche Ursprünge die Werte von Attributen einsehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden und die sonst aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>[, <origin>]*
```

## Direktiven

- `*`
  - : Der Server kann "\*" als Platzhalter angeben, um damit jedem Ursprung zu erlauben, die Timing-Ressourcen einzusehen.
- \<origin>
  - : Gibt eine URI an, die die Timing-Ressourcen einsehen darf. Sie können mehrere Ursprünge angeben, getrennt durch Kommata.

## Beispiele

Um jeglicher Quelle das Einsehen von Timing-Ressourcen zu ermöglichen:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` das Einsehen von Timing-Ressourcen zu gestatten, können Sie Folgendes angeben:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- {{HTTPHeader("Vary")}}
