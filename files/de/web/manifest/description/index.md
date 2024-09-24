---
title: Beschreibung
slug: Web/Manifest/description
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

Das `description`-Mitglied ist eine Zeichenkette, in der Entwickler erklären können, was die Anwendung macht. `description` ist richtungsfähig, was bedeutet, dass es entweder von links nach rechts oder von rechts nach links angezeigt werden kann, basierend auf den Werten der [`dir`](/de/docs/Web/Manifest) und [`lang`](/de/docs/Web/Manifest) Manifest-Mitglieder.

## Beispiele

Einfache `description` in einer von links nach rechts Sprache:

```json
"description": "Awesome application that will help you achieve your dreams."
```

`description` auf Arabisch, das von rechts nach links angezeigt wird:

```json
"dir": "rtl",
"lang": "ar",
"description": ".تطبيق رائع سيساعدك على تحقيق أحلامك"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
