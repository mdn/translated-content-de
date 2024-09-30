---
title: scope
slug: Web/Manifest/scope
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `scope`-Element ist eine Zeichenfolge, die den Navigationsbereich des Anwendungsbereichs dieser Webanwendung definiert. Es beschränkt, welche Webseiten angezeigt werden können, während das Manifest angewendet wird. Wenn der Benutzer außerhalb des Bereichs navigiert, wird es auf eine normale Webseite in einem Browser-Tab oder -Fenster zurückgesetzt.

Ein gültiger `scope` muss zulassen, dass [`start_url`](/de/docs/Web/Manifest/start_url) im Bereich ist. Wenn `scope` eine relative URL ist, wird die Basis-URL die URL des Manifests sein. Die Abfrage und das Fragment der URL werden immer ignoriert.

Wenn `scope` nicht angegeben oder in irgendeiner Weise ungültig ist (zum Beispiel keine Zeichenfolge, keine gültige URL, oder `start_url` aus dem Bereich herausbringt), wird `start_url` verwendet, wobei das letzte Pfadsegment entfernt wird.

## Beispiele

Ist der Bereich relativ, wird die Manifest-URL als Basis-URL verwendet:

```json
"scope": "/app/"
```

Der folgende Bereich beschränkt die Navigation auf die aktuelle Website:

```json
"scope": "https://example.com/"
```

Schließlich beschränkt das folgende Beispiel die Navigation auf ein Unterverzeichnis der aktuellen Website:

```json
"scope": "https://example.com/subdirectory/"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
