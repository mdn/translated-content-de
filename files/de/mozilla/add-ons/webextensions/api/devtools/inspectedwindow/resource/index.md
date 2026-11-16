---
title: devtools.inspectedWindow.Resource
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/Resource
l10n:
  sourceCommit: 7036af62231b680d0ef5229bb034ce84440ba690
---

{{AddonSidebar()}}

Eine Ressource innerhalb der untersuchten Seite, beispielsweise ein Dokument, ein Skript oder ein Bild. Dieses Objekt wird von {{WebExtAPIRef('devtools.inspectedWindow.getResources()')}}, {{WebExtAPIRef('devtools.inspectedWindow.onResourceAdded')}} und {{WebExtAPIRef('devtools.inspectedWindow.onResourceContentCommitted')}} zurückgegeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `url`
  - : `string`. Die URL der Ressource.
- `getContent`
  - : `function`. Ruft den Inhalt der Ressource ab. Diese Funktion erwartet keine Parameter und gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem Objekt erfüllt wird, das Folgendes enthält:
    - `content`
      - : `string`. Der Inhalt der Ressource, der kodiert sein kann.
    - `encoding`
      - : `string`. Leer, wenn der Inhalt nicht kodiert ist; andernfalls der Name der Kodierung.
- `setContent`
  - : `function`. Legt den Inhalt der Ressource fest. Diese Funktion erwartet die folgenden Parameter:
    - `content`
      - : `string`. Der neue Inhalt der Ressource. Es werden nur Ressourcen vom Typ „Text“ unterstützt.
    - `commit`
      - : `boolean`. `true`, wenn der Benutzer die Bearbeitung der Ressource abgeschlossen hat und der neue Inhalt dauerhaft gespeichert werden soll; `false`, wenn es sich um eine kleinere Änderung handelt, die während der Bearbeitung der Ressource übermittelt wird.

    Gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das bei erfolgreicher Festlegung des Ressourceninhalts mit einem Fehlerobjekt erfüllt wird, dessen Wert `undefined` ist; andernfalls beschreibt das Fehlerobjekt den Fehler.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
