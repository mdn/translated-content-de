---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Timing-Allow-Origin`** Antwort-Header gibt an, welche Ursprünge die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, welche ansonsten aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Der Server kann "\*" als Platzhalter angeben und damit jedem Ursprung erlauben, die Timing-Ressourcen zu sehen.
- \<origin>
  - : Gibt eine URI an, die die Timing-Ressourcen sehen darf. Sie können mehrere Ursprünge durch Kommas getrennt angeben.

## Beispiele

Um jeglicher Ressource das Sehen von Timing-Ressourcen zu erlauben:

```http
Timing-Allow-Origin: *
```

Um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, können Sie angeben:

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
