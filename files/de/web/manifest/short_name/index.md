---
title: short_name
slug: Web/Manifest/short_name
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
    </tr>
  </tbody>
</table>

Das `short_name`-Mitglied ist ein String, der den Namen der Webanwendung darstellt, der dem Benutzer angezeigt wird, falls nicht genug Platz vorhanden ist, um [`name`](/de/docs/Web/Manifest/name) anzuzeigen (z. B. als Beschriftung für ein Symbol auf dem Startbildschirm des Telefons). `short_name` ist richtungsfähig, was bedeutet, dass es basierend auf dem Wert der Manifestmitglieder [`dir`](/de/docs/Web/Manifest) und [`lang`](/de/docs/Web/Manifest) von links nach rechts oder von rechts nach links angezeigt werden kann.

## Beispiele

Einfaches `short_name` in einer von links nach rechts geschriebenen Sprache:

```json
"name": "Awesome application",
"short_name": "Awesome app"
```

`short_name` auf Arabisch, das von rechts nach links angezeigt wird:

```json
"dir": "rtl",
"lang": "ar",
"name": "تطبيق رائع",
"short_name": "رائع"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
