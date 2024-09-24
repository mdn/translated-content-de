---
title: background_color
slug: Web/Manifest/background_color
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

Das Mitglied `background_color` definiert eine Platzhalter-Hintergrundfarbe für die Anwendungsseite, die angezeigt wird, bevor ihr Stylesheet geladen ist. Dieser Wert wird vom Benutzeragenten verwendet, um die Hintergrundfarbe eines Kurzbefehls zu zeichnen, wenn das Manifest verfügbar ist, bevor das Stylesheet geladen wurde.

Daher sollte `background_color` mit der {{cssxref("background-color")}} CSS-Eigenschaft im Stylesheet der Seite übereinstimmen, um einen reibungslosen Übergang zwischen dem Start der Webanwendung und dem Laden des Seiteninhalts zu gewährleisten.

> [!NOTE]
> Das Mitglied `background_color` soll nur die Benutzererfahrung verbessern, während das Haupt-Stylesheet aus dem Netzwerk oder den Speichermedien geladen wird; es wird vom Benutzeragenten nicht als {{cssxref("background-color")}} CSS-Eigenschaft verwendet, wenn das Stylesheet der progressiven Web-App verfügbar ist.

## Beispiele

```json
"background_color": "red"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
