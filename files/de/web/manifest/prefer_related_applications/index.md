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

Das `prefer_related_applications`-Mitglied ist ein boolescher Wert, der angibt, dass die in [`related_applications`](/de/docs/Web/Manifest/related_applications) aufgeführten Anwendungen der Webanwendung vorgezogen werden sollten. Wenn das `prefer_related_applications`-Mitglied auf `true` gesetzt ist, kann der Benutzeragent vorschlagen, eine der verwandten Anwendungen anstelle dieser Web-App zu installieren.

Wenn weggelassen, ist der Standardwert von `prefer_related_applications` `false`.

## Beispiele

```json
"prefer_related_applications": true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
