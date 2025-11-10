---
title: declarativeNetRequest.URLTransform
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/URLTransform
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Details zur Beschreibung einer URL-Transformation, die für eine Umleitungsregel durchgeführt werden soll. Dieses Objekt kann bei {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}.redirect.transform angegeben werden.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `fragment` {{optional_inline}}
  - : Ein `string`. Das neue Fragment für die Anfrage. Sollte entweder leer sein, in diesem Fall wird das vorhandene Fragment gelöscht; oder es sollte mit '#' beginnen.
- `host` {{optional_inline}}
  - : Ein `string`. Der neue Hostname für die Anfrage.
- `password` {{optional_inline}}
  - : Ein `string`. Das neue Passwort für die Anfrage.
- `path` {{optional_inline}}
  - : Ein `string`. Der neue Pfad für die Anfrage. Wenn leer, wird der vorhandene Pfad gelöscht.
- `port` {{optional_inline}}
  - : Ein `string`. Der neue Port für die Anfrage. Wenn leer, wird der vorhandene Port gelöscht.
- `query` {{optional_inline}}
  - : Ein `string`. Die neue Abfrage für die Anfrage. Sollte entweder leer sein, in diesem Fall wird die vorhandene Abfrage gelöscht; oder es sollte mit '?' beginnen.
- `queryTransform` {{optional_inline}}
  - : Ein Objekt, das beschreibt, wie Abfrage-Schlüssel-Wert-Paare hinzugefügt, entfernt oder ersetzt werden. Kann nicht angegeben werden, wenn 'query' angegeben ist.
    - `addOrReplaceParams` {{optional_inline}}
      - : Ein Array von Objekten, die die Liste der hinzuzufügenden oder zu ersetzenden Abfrage-Schlüssel-Wert-Paare beschreiben.
        - `key`
          - : Ein `string`. Der Schlüsselwert.
        - `replaceOnly` {{optional_inline}}
          - : Ein `boolean`. Wenn wahr, wird der Abfrageschlüssel nur ersetzt, wenn er bereits vorhanden ist. Andernfalls wird der Schlüssel auch hinzugefügt, wenn er fehlt. Standardwert ist false.
        - `value`
          - : Ein `string`. Der Wert.

    - `removeParams` {{optional_inline}}
      - : Ein Array von `string`. Die Liste der zu entfernenden Abfrageschlüssel.

- `scheme` {{optional_inline}}
  - : Ein `string`. Das neue Schema für die Anfrage. Zulässige Werte sind `"http"`, `"https"` und das Schema der Erweiterung, zum Beispiel "moz-extension" in Firefox oder "chrome-extension" in Chrome. Wenn das Erweiterungsschema verwendet wird, muss der `host` angegeben werden, um ein sinnvolles Umleitungsziel zu generieren.
- `username` {{optional_inline}}
  - : Ein `string`. Der neue Benutzername für die Anfrage.

## Browser-Kompatibilität

{{Compat}}
