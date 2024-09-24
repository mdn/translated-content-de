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
      <th scope="row">Type</th>
      <td><code>Boolean</code></td>
    </tr>
  </tbody>
</table>

Das `prefer_related_applications`-Mitglied ist ein boolescher Wert, der angibt, dass die in [`related_applications`](/de/docs/Web/Manifest/related_applications) aufgeführten Anwendungen der Webanwendung vorgezogen werden sollten. Wenn das `prefer_related_applications`-Mitglied auf `true` gesetzt ist, könnte der Benutzer-Agent vorschlagen, eine der verwandten Anwendungen anstelle dieser Web-App zu installieren.

Wenn es weggelassen wird, ist der Standardwert für `prefer_related_applications` `false`.

## Beispiele

```json
"prefer_related_applications": true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
