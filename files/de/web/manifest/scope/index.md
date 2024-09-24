---
title: Geltungsbereich
slug: Web/Manifest/scope
l10n:
  sourceCommit: 6652e671b837cb407f07784b4eaf0f51f5c18652
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

Das `scope`-Mitglied ist ein String, der den Navigationsbereich des Anwendungskontexts dieser Webanwendung definiert. Es beschränkt, welche Webseiten angezeigt werden können, während das Manifest angewendet wird. Wenn der Benutzer außerhalb des Geltungsbereichs navigiert, kehrt es zu einer normalen Webseite in einem Browser-Tab oder Fenster zurück.

Ein gültiger `scope` muss erlauben, dass [`start_url`](/de/docs/Web/Manifest/start_url) im Geltungsbereich liegt. Wenn der `scope` eine relative URL ist, wird die Basis-URL die URL des Manifests sein. Die Abfrage und das Fragment der URL werden immer ignoriert.

Wenn `scope` nicht angegeben oder in irgendeiner Weise ungültig ist (zum Beispiel kein String, keine gültige URL oder es führt dazu, dass `start_url` außerhalb des Bereichs liegt), wird die `start_url` verwendet, wobei ihr letztes Pfadsegment entfernt wird.

## Beispiele

Wenn der Geltungsbereich relativ ist, wird die Manifest-URL als Basis-URL verwendet:

```json
"scope": "/app/"
```

Der folgende Geltungsbereich beschränkt die Navigation auf die aktuelle Website:

```json
"scope": "https://example.com/"
```

Abschließend beschränkt das folgende Beispiel die Navigation auf ein Unterverzeichnis der aktuellen Website:

```json
"scope": "https://example.com/subdirectory/"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
