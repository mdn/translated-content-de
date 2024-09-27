---
title: prefer_related_applications
slug: Web/Manifest/prefer_related_applications
l10n:
  sourceCommit: 0c015b80f786ecc4547c3e37a70c7f6aafdfbf74
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Boolean</code></td>
    </tr>
  </tbody>
</table>

Das `prefer_related_applications`-Mitglied ist ein boolescher Wert, der angibt, dass Anwendungen, die in [`related_applications`](/de/docs/Web/Manifest/related_applications) aufgeführt sind, der Webanwendung vorgezogen werden sollen. Wenn das `prefer_related_applications`-Mitglied auf `true` gesetzt ist, kann der Benutzeragent vorschlagen, eine der verwandten Anwendungen anstelle dieser Webanwendung zu installieren.

Wenn es weggelassen wird, ist `prefer_related_applications` standardmäßig auf `false` gesetzt.

## Beispiele

```json
"prefer_related_applications": true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
