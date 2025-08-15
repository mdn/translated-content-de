---
title: tabGroups.query
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/query
l10n:
  sourceCommit: 0ddea08f7bbefccc38ae86977a2d138420cc8a67
---

Gibt alle Tab-Gruppen zurück oder findet Gruppen mit bestimmten Eigenschaften.

## Syntax

```js-nolint
let group = await browser.tabGroups.query(
    queryInfo                // object
);
```

### Parameter

- `queryInfo`
  - : Ein Objekt, das Details zu den Eigenschaftswerten enthält, die in den zurückgegebenen Tab-Gruppen übereinstimmen sollen.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Ob die zurückgegebenen Tab-Gruppen in der Tableiste zusammengeklappt oder erweitert sind.
        - In Firefox kann eine zusammengeklappte Gruppe den aktiven Tab enthalten. Der aktive Tab bleibt sichtbar und inaktive Tabs sind zusammengeklappt.
        - In Chrome sind Gruppen vollständig zusammengeklappt. Wenn die Gruppe den aktiven Tab enthält, wenn sie zusammengeklappt ist, wird der aktive Tab auf den ersten Tab rechts von der Gruppe verschoben. Wenn es keinen Tab rechts von der Gruppe gibt, wird er auf den Tab direkt links von der Gruppe verschoben.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der Farbe, die die zurückgegebenen Tab-Gruppen verwenden.
    - `shared` {{optional_inline}}
      - : `boolean`. Ob die zurückgegebenen Tab-Gruppen gemeinsam genutzt werden.
    - `title` {{optional_inline}}
      - : `string`. Der Name der zurückzugebenden Tab-Gruppen.
    - `windowId` {{optional_inline}}
      - : `integer`. Die ID des Fensters, in dem sich die zurückgegebene Tab-Gruppe befindet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("tabGroups.TabGroup")}}-Objekten erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
