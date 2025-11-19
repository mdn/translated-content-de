---
title: externally_connectable
slug: Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

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
        <pre class="brush: json">
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

Externally connectable bestimmt, welche anderen Erweiterungen und Webseiten mit einer Erweiterung über {{WebExtAPIRef("runtime.connect","runtime.connect()")}} und {{WebExtAPIRef("runtime.sendMessage", "runtime.sendMessage()")}} Nachrichtenübertragung kommunizieren können. Wenn `externally_connectable` nicht angegeben ist, können alle Erweiterungen miteinander kommunizieren, jedoch nicht mit Webseiten.

> [!NOTE]
> Für die Kommunikation mit Webseiten:
>
> - In Chrome werden `chrome.runtime.connect` und `chrome.runtime.sendMessage` verwendet. Diese Methoden sind nur verfügbar, wenn mindestens eine Erweiterung Nachrichten empfängt. Siehe [chrome.runtime will no longer be defined unconditionally in Chrome 106](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/tCWVZRq77cg/m/KB6-tvCdAgAJ) für weitere Details.
> - In Safari werden `browser.runtime.connect` und `browser.runtime.sendMessage` verwendet.
> - In Firefox wird keine der APIs unterstützt. Siehe [Firefox Bug 1319168](https://bugzil.la/1319168).

## "ids"-Attribut

`ids` ermöglicht die Kommunikation zwischen dieser Erweiterung und anderen installierten Erweiterungen, die durch Erweiterungskennungen angegeben sind. Verwenden Sie das Muster `"*"`, um mit allen Erweiterungen zu kommunizieren.

## "matches"-Attribut

`matches` ist eine Liste von regulären Ausdrücken, die die Kommunikation zwischen einer Erweiterung und den Webseiten ermöglicht, die dem Ausdruck entsprechen.

> [!NOTE]
> Wenn `externally_connectable` nicht angegeben ist, ist die Kommunikation zwischen Erweiterungen erlaubt, als ob `externally_connectable` mit `{"ids": ["*"] }` angegeben wäre. Daher sollten Sie, wenn Sie `externally_connectable.matches` angeben, nicht vergessen, `ids` hinzuzufügen, wenn Sie mit anderen Erweiterungen kommunizieren möchten.

## Browser-Kompatibilität

{{Compat}}
