---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Timing-Allow-Origin`** Antwort-Header spezifiziert Ursprünge, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die sonst aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Der Server kann "\*" als Platzhalter spezifizieren, wodurch jeder Ursprung berechtigt ist, Timing-Ressourcen zu sehen.
- \<origin>
  - : Spezifiziert eine URI, die die Timing-Ressourcen sehen darf. Es können mehrere Ursprünge angegeben werden, getrennt durch Kommas.

## Beispiele

Um jeglicher Ressource zu erlauben, Timing-Ressourcen zu sehen:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, können Sie spezifizieren:

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
