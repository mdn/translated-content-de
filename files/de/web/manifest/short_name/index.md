---
title: Kurzname
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

Das `short_name`-Element ist eine Zeichenkette, die den Namen der Webanwendung darstellt, der dem Benutzer angezeigt wird, wenn nicht genügend Platz vorhanden ist, um [`name`](/de/docs/Web/Manifest/name) anzuzeigen (z. B. als Beschriftung für ein Symbol auf dem Startbildschirm des Telefons). Das `short_name`-Element unterstützt die Textrichtungsfähigkeit, was bedeutet, dass es abhängig vom Wert der [`dir`](/de/docs/Web/Manifest) und [`lang`](/de/docs/Web/Manifest) Manifest-Elemente entweder von links nach rechts oder von rechts nach links angezeigt werden kann.

## Beispiele

Einfacher `short_name` in einer Links-nach-Rechts-Sprache:

```json
"name": "Awesome application",
"short_name": "Awesome app"
```

`short_name` in Arabisch, das von rechts nach links angezeigt wird:

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
