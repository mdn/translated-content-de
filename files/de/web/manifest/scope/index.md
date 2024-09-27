---
title: scope
slug: Web/Manifest/scope
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `scope`-Element ist ein String, der den Navigationsbereich des Anwendungskontexts dieser Webanwendung definiert. Es beschränkt, welche Webseiten angezeigt werden können, während das Manifest angewendet wird. Navigiert der Benutzer außerhalb des Geltungsbereichs, kehrt die Ansicht zu einer normalen Webseite innerhalb eines Browser-Tabs oder -Fensters zurück.

Ein gültiger `scope` muss es ermöglichen, dass die [`start_url`](/de/docs/Web/Manifest/start_url) im Geltungsbereich liegt. Wenn der `scope` eine relative URL ist, wird die Basis-URL die URL des Manifests sein. Die Abfrage und das Fragment der URL werden immer ignoriert.

Wenn `scope` nicht angegeben oder in irgendeiner Weise ungültig ist (zum Beispiel kein String, keine gültige URL oder dazu führt, dass `start_url` außerhalb des Geltungsbereichs liegt), wird die `start_url` verwendet, wobei das letzte Pfadsegment entfernt wird.

## Beispiele

Wenn der Geltungsbereich relativ ist, wird die Manifest-URL als Basis-URL verwendet:

```json
"scope": "/app/"
```

Der folgende Geltungsbereich beschränkt die Navigation auf die aktuelle Seite:

```json
"scope": "https://example.com/"
```

Schließlich beschränkt das folgende Beispiel die Navigation auf ein Unterverzeichnis der aktuellen Seite:

```json
"scope": "https://example.com/subdirectory/"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
