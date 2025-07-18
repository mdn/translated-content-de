---
title: user_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dieser Schlüssel wird von der veralteten {{WebExtAPIRef("userScripts_legacy","userScripts")}}-API verwendet, die für Erweiterungen mit Manifest V2 verfügbar ist. Dieser Schlüssel ist für die Version der {{WebExtAPIRef("userScripts","userScripts")}}-API, die mit Manifest V3 verwendet werden kann, nicht erforderlich.

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

Weist den Browser an, ein im Add-on gepacktes Skript zu laden, das als API-Skript bekannt ist. Dieses Skript wird verwendet, um eine Reihe benutzerdefinierter API-Methoden zur Verwendung in Benutzerskripten zu exportieren. Der API-Skriptpfad, relativ zur Datei manifest.json, wird im `"api_script"` als `string` definiert.

> [!NOTE]
> Der `user_script`-Schlüssel ist erforderlich, damit die {{WebExtAPIRef("userScripts_legacy","userScripts")}}-API funktioniert, auch wenn kein API-Skript angegeben ist. Zum Beispiel: `user_scripts: {}`.

Das API-Skript:

- läuft in den Inhaltsprozessen.
- hat Zugriff auf die globalen `window`- und `document`-Objekte, die mit der Webseite verbunden sind, an die es angehängt ist.
- hat Zugriff auf denselben Unterbereich der WebExtension-APIs, die normalerweise in einem Inhaltsskript verfügbar sind.

Das Skript wird automatisch auf jeder Webseite ausgeführt, die in `matches` von {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}} definiert ist. Dies geschieht jedoch, bevor das Benutzerskript-Sandbox-Objekt erstellt wird und die benutzerdefinierten API-Methoden exportiert werden können.

Um die benutzerdefinierten API-Methoden zu exportieren, hört das Skript auf {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}} und exportiert dann die benutzerdefinierten API-Methoden.

Nicht jedes Benutzerskript muss alle benutzerdefinierten API-Methoden verwenden. Sie können daher Details der benötigten APIs in `scriptMetadata` angeben, wenn Sie {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}} ausführen. Das API-Skript greift dann über den `script`-Parameter, den es vom {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}-Listener erhält (als `script.metadata`), auf das `scriptMetadata` zu.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("userScripts_legacy","userScripts")}} (Veraltet)
- {{WebExtAPIRef("contentScripts")}}
