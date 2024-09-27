---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Timing-Allow-Origin`** Antwort-Header gibt Ursprünge an, die berechtigt sind, die Werte von Attributen einzusehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden und die ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Der Server kann "\*" als Platzhalter angeben und damit jedem Ursprung gestatten, Timing-Ressourcen zu sehen.
- \<origin>
  - : Gibt eine URI an, die die Timing-Ressourcen einsehen darf. Sie können mehrere Ursprünge angeben, getrennt durch Kommas.

## Beispiele

Um jeder Ressource zu gestatten, Timing-Ressourcen zu sehen:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` zu gestatten, die Timing-Ressourcen einzusehen, können Sie angeben:

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
