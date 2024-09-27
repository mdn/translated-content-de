---
title: externally_connectable
slug: Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable
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
      <th scope="row">Pflicht</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre>
"externally_connectable": {
  "ids": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "cccccccccccccccccccccccccccccccc"
  ],
  "matches": [
    "https://example1.com/*",
    "*://*.example2.com/*"
  ]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Externally connectable steuert, welche anderen Erweiterungen und Webseiten mit einer Erweiterung kommunizieren können, unter Verwendung von {{WebExtAPIRef("runtime.connect","runtime.connect()")}} und {{WebExtAPIRef("runtime.sendMessage", "runtime.sendMessage()")}} Nachrichtenaustausch. Wenn `externally_connectable` nicht angegeben ist, können alle Erweiterungen miteinander kommunizieren, aber nicht mit Webseiten.

> [!NOTE]
> Für die Kommunikation mit Webseiten:
>
> - In Chrome werden `chrome.runtime.connect` und `chrome.runtime.sendMessage` verwendet. Diese Methoden sind nur verfügbar, wenn mindestens eine Erweiterung Nachrichten empfängt; siehe [chrome.runtime wird ab Chrome 106 nicht mehr bedingungslos definiert sein](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/tCWVZRq77cg/m/KB6-tvCdAgAJ) für mehr Details.
> - In Safari werden `browser.runtime.connect` und `browser.runtime.sendMessage` verwendet.
> - In Firefox wird keine der APIs unterstützt. Siehe [Firefox-Bug 1319168](https://bugzil.la/1319168).

### "ids"-Attribut

`ids` ermöglicht die Kommunikation zwischen dieser Erweiterung und anderen installierten Erweiterungen, die durch Erweiterungskennungen angegeben werden. Verwenden Sie das Muster `"*"` um mit allen Erweiterungen zu kommunizieren.

### "matches"-Attribut

`matches` ist eine Liste von regulären Ausdrücken, die die Kommunikation zwischen einer Erweiterung und den Webseiten ermöglicht, die dem Ausdruck entsprechen.

> [!NOTE]
> Wenn `externally_connectable` nicht angegeben ist, ist die Kommunikation unter Erweiterungen so erlaubt, als ob `externally_connectable` `{"ids": ["*"] }` angegeben hätte. Wenn Sie also `externally_connectable.matches` angeben, vergessen Sie nicht, `ids` hinzuzufügen, wenn Sie mit anderen Erweiterungen kommunizieren möchten.

## Browser-Kompatibilität

{{Compat}}
