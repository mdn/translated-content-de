---
title: declarativeNetRequest.URLTransform
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/URLTransform
l10n:
  sourceCommit: 2290fdbf9d5cf68482245d07d388b883156058ac
---

Details zur Beschreibung einer URL-Transformation, die für eine Umleitungsregel durchgeführt werden soll. Dieses Objekt kann bei {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}.redirect.transform angegeben werden.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `fragment` {{optional_inline}}
  - : Ein `string`. Das neue Fragment für die Anfrage. Sollte entweder leer sein, in diesem Fall wird das vorhandene Fragment entfernt, oder sollte mit '#' beginnen.
- `host` {{optional_inline}}
  - : Ein `string`. Der neue Hostname für die Anfrage.
- `password` {{optional_inline}}
  - : Ein `string`. Das neue Passwort für die Anfrage.
- `path` {{optional_inline}}
  - : Ein `string`. Der neue Pfad für die Anfrage. Wenn leer, wird der vorhandene Pfad entfernt.
- `port` {{optional_inline}}
  - : Ein `string`. Der neue Port für die Anfrage. Wenn leer, wird der vorhandene Port entfernt.
- `query` {{optional_inline}}
  - : Ein `string`. Die neue Abfrage für die Anfrage. Sollte entweder leer sein, in diesem Fall wird die vorhandene Abfrage entfernt, oder sollte mit '?' beginnen.
- `queryTransform` {{optional_inline}}
  - : Ein Objekt, das beschreibt, wie Abfrage-Schlüssel-Wert-Paare hinzugefügt, entfernt oder ersetzt werden. Kann nicht angegeben werden, wenn 'query' angegeben ist.
    - `addOrReplaceParams` {{optional_inline}}
      - : Ein Array von Objekten, das die Liste der Abfrage-Schlüssel-Wert-Paare (`key=value`) beschreibt, die hinzugefügt oder ersetzt werden sollen.
        - `key`
          - : Ein `string`. Der `key`-Teil von `key=value`.
        - `replaceOnly` {{optional_inline}}
          - : Ein `boolean`. Wenn true, wird der Abfrageschlüssel nur ersetzt, wenn er bereits vorhanden ist. Andernfalls wird der Schlüssel auch hinzugefügt, falls er fehlt. Standardmäßig `false`.
        - `value`
          - : Ein `string`. Der `value`-Teil von `key=value`.

    - `removeParams` {{optional_inline}}
      - : Ein Array von `string`. Die Liste der zu entfernenden Abfrageschlüssel.

- `scheme` {{optional_inline}}
  - : Ein `string`. Das neue Schema für die Anfrage. Zulässige Werte sind `"http"`, `"https"` und das Schema der Erweiterung, zum Beispiel "moz-extension" in Firefox oder "chrome-extension" in Chrome. Wenn das Erweiterungsschema verwendet wird, muss der `host` angegeben werden, um ein sinnvolles Umleitungsziel zu erzeugen.
- `username` {{optional_inline}}
  - : Ein `string`. Der neue Benutzername für die Anfrage.

## Browser-Kompatibilität

{{Compat}}
