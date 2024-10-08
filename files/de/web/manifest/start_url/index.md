---
title: start_url
slug: Web/Manifest/start_url
l10n:
  sourceCommit: b3d5659a6f16dc6cb8be5c48d19820a67434ecb9
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

Das `start_url`-Mitglied ist ein String, der die _Start-URL der Webanwendung_ darstellt — die bevorzugte URL, die geladen werden sollte, wenn der Benutzer die Webanwendung startet (z. B. wenn der Benutzer auf das Symbol der Webanwendung im Anwendungsmenü oder auf dem Startbildschirm eines Geräts tippt).

Eine gültige `start_url` muss vom selben Ursprung wie das Dokument sein, das das Manifest referenziert. Wenn `start_url` nicht spezifiziert oder in irgendeiner Weise ungültig ist (z. B. kein String, keine gültige URL oder nicht vom selben Ursprung wie das Dokument), wird die Dokument-URL verwendet.

> [!NOTE]
> Das `start_url`-Mitglied ist rein beratend, und ein Benutzeragent kann es ignorieren oder dem Benutzer erlauben, es zur Installationszeit oder danach zu ändern.

## Beispiele

### Absolute URL

```json
"start_url": "https://example.com"
```

### Relative URL

Wenn die URL relativ ist, wird die Manifest-URL als Basis-URL verwendet, um sie aufzulösen.

```json
"start_url": "../startpoint.html"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
