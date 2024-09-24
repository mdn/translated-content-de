---
title: name
slug: Web/Manifest/name
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
  </tbody>
</table>

Das `name`-Mitglied ist ein String, der den Namen der Webanwendung repräsentiert, wie er dem Nutzer in der Regel angezeigt wird (z. B. in einer Liste anderer Anwendungen oder als Beschriftung für ein Symbol). `name` ist richtungsfähif, was bedeutet, dass es je nach den Werten der [`dir`](/de/docs/Web/Manifest) und [`lang`](/de/docs/Web/Manifest)-Manifestmitglieder von links nach rechts oder von rechts nach links angezeigt werden kann.

## Beispiele

Einfacher `name` in einer von links nach rechts geschriebenen Sprache:

```json
"name": "Awesome application"
```

Von rechts nach links `name` in Arabisch:

```json
"dir": "rtl",
"lang": "ar",
"name": "!أنا من التطبيق"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
