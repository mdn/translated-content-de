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
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Instruieren Sie den Browser, ein im Add-on enthaltenes Skript zu laden, bekannt als das API-Skript, das verwendet wird, um eine Reihe von benutzerdefinierten API-Methoden für die Verwendung in Benutzerskripten bereitzustellen. Der Pfad des API-Skripts, relativ zur manifest.json-Datei, wird als `string` in `"api_script"` definiert.

> [!NOTE]
> Der Schlüssel `user_script` ist erforderlich, damit die {{WebExtAPIRef("userScripts")}} API funktioniert, auch wenn kein API-Skript angegeben ist. Zum Beispiel `user_scripts: {}`.

Das API-Skript:

- läuft in den Inhaltsprozessen.
- hat Zugriff auf die `window`- und `document`-Globals, die mit der Webseite verbunden sind, an die es angehängt ist.
- hat Zugriff auf dasselbe Unterset von WebExtension-APIs, das normalerweise in einem Inhalts-Skript verfügbar ist.

Das Skript wird automatisch auf jeder Webseite ausgeführt, die in `matches` von {{WebExtAPIRef("userScripts.register")}} definiert ist. Dies geschieht jedoch, bevor das Benutzer-Skript-Sandbox-Objekt erstellt wird und die benutzerdefinierten API-Methoden exportiert werden können.

Um die benutzerdefinierten API-Methoden zu exportieren, hört das Skript auf {{WebExtAPIRef("userScripts.onBeforeScript")}} und exportiert dann die benutzerdefinierten API-Methoden.

Nicht jedes Benutzerskript muss alle der benutzerdefinierten API-Methoden konsumieren. Sie können daher Details zu den benötigten APIs in `scriptMetadata` angeben, wenn {{WebExtAPIRef("userScripts.register")}} ausgeführt wird. Das API-Skript greift dann über den `script`-Parameter, der vom {{WebExtAPIRef("userScripts.onBeforeScript")}} Listener empfangen wird, auf das `scriptMetadata` zu (als `script.metadata`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("userScripts")}}
- {{WebExtAPIRef("contentScripts")}}
