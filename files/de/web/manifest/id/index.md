---
title: id
slug: Web/Manifest/id
l10n:
  sourceCommit: b3d5659a6f16dc6cb8be5c48d19820a67434ecb9
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

Das `id`-Element ist ein String, der die _Identität der Webanwendung_ darstellt – der eindeutige Bezeichner für die Webanwendung. Wenn die Webanwendungs-ID nicht mit einer bestehenden ID übereinstimmt, wird die Anwendung als einzigartige Identität behandelt, selbst wenn sie von derselben URL stammt.

Ein gültiges `id` muss den gleichen Ursprung wie `start_url` haben. Wenn das `id` eine relative URL ist, wird sie unter Verwendung des Ursprungs von [`start_url`](/de/docs/Web/Manifest/start_url) aufgelöst. Das Fragment wird immer ignoriert.

Wenn das `id` nicht angegeben oder auf irgendeine Weise ungültig ist (z. B. kein String, keine gültige URL, nicht gleichen Ursprungs wie `start_url`), wird `start_url` verwendet.

> [!NOTE]
> Das `id`-Element kann verwendet werden, um Anwendungen eindeutig zu identifizieren. Das `id`-Element wird wie eine `start_url` verarbeitet, kann aber außerhalb des [scope](/de/docs/Web/Manifest/scope) liegen, da es nicht auf eine Ressource verweist, zu der navigiert werden kann.

## Beispiele

```json
"id": "?homescreen=1"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
