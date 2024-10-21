---
title: user_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
  "user_scripts": {
    "api_script": "apiscript.js",
  }
</pre>
      </td>
    </tr>
  </tbody>
</table>

Weist den Browser an, ein im Add-on verpacktes Skript zu laden, bekannt als das API-Skript. Dieses Skript wird verwendet, um eine Reihe von benutzerdefinierten API-Methoden für die Verwendung in Benutzer-Skripten bereitzustellen. Der Pfad des API-Skripts, relativ zur Datei manifest.json, wird als `string` in `"api_script"` definiert.

> [!NOTE]
> Der Schlüssel `user_script` ist erforderlich, damit die {{WebExtAPIRef("userScripts")}} API funktioniert, auch wenn kein API-Skript angegeben ist. Zum Beispiel. `user_scripts: {}`.

Das API-Skript:

- läuft in den Inhaltsprozessen.
- hat Zugriff auf die globalen Fenster- und Dokumentobjekte, die sich auf die Webseite beziehen, an die es angehängt ist.
- hat Zugriff auf dasselbe Teilset der WebExtension-APIs, die normalerweise in einem Inhaltsskript verfügbar sind.

Das Skript wird automatisch auf jeder Webseite ausgeführt, die in `matches` durch {{WebExtAPIRef("userScripts.register")}} definiert ist. Dies geschieht jedoch bevor das Benutzer-Skript-Sandbox-Objekt erstellt wird und die benutzerdefinierten API-Methoden exportiert werden können.

Um die benutzerdefinierten API-Methoden zu exportieren, hört das Skript auf {{WebExtAPIRef("userScripts.onBeforeScript")}} und exportiert dann die benutzerdefinierten API-Methoden.

Nicht jedes Benutzer-Skript muss alle benutzerdefinierten API-Methoden verwenden. Sie können daher Details der benötigten APIs in `scriptMetadata` angeben, wenn Sie {{WebExtAPIRef("userScripts.register")}} ausführen. Das API-Skript greift dann über den `script` Parameter, der vom {{WebExtAPIRef("userScripts.onBeforeScript")}} Listener empfangen wird, auf die `scriptMetadata` zu (als `script.metadata`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("userScripts")}}
- {{WebExtAPIRef("contentScripts")}}
