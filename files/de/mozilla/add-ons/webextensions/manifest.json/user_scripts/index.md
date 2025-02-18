---
title: user_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> Dieser Schlüssel wird durch die Legacy-{{WebExtAPIRef("userScripts_legacy","userScripts")}}-API verwendet, die für Erweiterungen mit Manifest V2 verfügbar ist. Dieser Schlüssel ist nicht erforderlich für die Version der {{WebExtAPIRef("userScripts","userScripts")}}-API, die mit Manifest V3 verwendet werden kann.

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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

Weist den Browser an, ein im Add-on enthaltenes Skript zu laden, bekannt als API-Skript. Dieses Skript wird verwendet, um eine Reihe benutzerdefinierter API-Methoden für die Verwendung in User-Skripten bereitzustellen. Der Pfad des API-Skripts, relativ zur Datei `manifest.json`, wird als `string` in `"api_script"` definiert.

> [!NOTE]
> Der Schlüssel `user_script` ist erforderlich, damit die {{WebExtAPIRef("userScripts_legacy","userScripts")}}-API funktioniert, selbst wenn kein API-Skript angegeben ist. Zum Beispiel: `user_scripts: {}`.

Das API-Skript:

- läuft in den Inhaltsprozessen.
- hat Zugriff auf die `window`- und `document`-Globals, die mit der Webseite verbunden sind, auf der es eingesetzt wird.
- hat Zugriff auf dieselbe Teilmenge der WebExtension-APIs, die normalerweise in einem Content-Script verfügbar sind.

Das Skript wird automatisch auf jeder Webseite ausgeführt, die in `matches` von {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}} definiert ist. Dies geschieht jedoch, bevor das User-Skript-Sandbox-Objekt erstellt wird und die benutzerdefinierten API-Methoden exportiert werden können.

Um die benutzerdefinierten API-Methoden zu exportieren, hört das Skript auf {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}} und exportiert dann die benutzerdefinierten API-Methoden.

Nicht jedes User-Skript muss alle benutzerdefinierten API-Methoden nutzen. Daher können Sie Details zu den benötigten APIs in `scriptMetadata` angeben, wenn Sie {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}} ausführen. Das API-Skript greift dann über den `script`-Parameter, der vom {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}-Listener empfangen wird, auf die `scriptMetadata` zu (als `script.metadata`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("userScripts_legacy","userScripts")}} (Legacy)
- {{WebExtAPIRef("contentScripts")}}
