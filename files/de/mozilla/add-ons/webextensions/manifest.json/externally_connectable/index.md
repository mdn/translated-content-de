---
title: extern anbindbar
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
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
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

Externally connectable steuert, welche anderen Erweiterungen und Webseiten mit einer Erweiterung über die Nachrichtenübermittlung mithilfe von {{WebExtAPIRef("runtime.connect","runtime.connect()")}} und {{WebExtAPIRef("runtime.sendMessage", "runtime.sendMessage()")}} kommunizieren können. Wenn `externally_connectable` nicht angegeben ist, können alle Erweiterungen miteinander kommunizieren, aber nicht mit Webseiten.

> [!NOTE]
> Für die Kommunikation mit Webseiten:
>
> - In Chrome werden `chrome.runtime.connect` und `chrome.runtime.sendMessage` verwendet. Diese Methoden sind nur verfügbar, wenn mindestens eine Erweiterung Nachrichten empfängt. Weitere Details finden Sie unter [chrome.runtime wird ab Chrome 106 nicht mehr bedingungslos definiert](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/tCWVZRq77cg/m/KB6-tvCdAgAJ).
> - In Safari werden `browser.runtime.connect` und `browser.runtime.sendMessage` verwendet.
> - In Firefox wird keine der APIs unterstützt. Siehe [Firefox Fehler 1319168](https://bugzil.la/1319168).

### "ids"-Attribut

`ids` ermöglicht die Kommunikation zwischen dieser Erweiterung und anderen installierten Erweiterungen, die durch Erweiterungskennungen angegeben sind. Verwenden Sie das Muster `"*"`, um mit allen Erweiterungen zu kommunizieren.

### "matches"-Attribut

`matches` ist eine Liste regulärer Ausdrücke, die die Kommunikation zwischen einer Erweiterung und den Webseiten ermöglicht, die dem Ausdruck entsprechen.

> [!NOTE]
> Wenn `externally_connectable` nicht angegeben ist, ist die Kommunikation unter Erweiterungen erlaubt, als ob `externally_connectable` mit `{"ids": ["*"] }` spezifiziert wäre. Daher sollten Sie nicht vergessen, `ids` hinzuzufügen, wenn Sie `externally_connectable.matches` angeben und mit anderen Erweiterungen kommunizieren möchten.

## Browser-Kompatibilität

{{Compat}}
