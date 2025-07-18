---
title: offline_enabled
slug: Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Boolean</code></td>
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
      <td><pre class="brush: json">"offline_enabled": true</pre></td>
    </tr>
  </tbody>
</table>

{{Non-standard_Header}}

Gibt an, ob die App oder Erweiterung offline funktionieren soll. Wenn Chrome erkennt, dass es offline ist, werden Apps mit diesem Feld auf der Neuen-Tab-Seite hervorgehoben, wenn es auf `true` gesetzt ist.

Ab Chrome 35 wird angenommen, dass Apps (ChromeOS nur ab 2018) offline-aktiviert sind, und der Standardwert von `"offline_enabled"` ist `true`, es sei denn, die Berechtigung `"webview"` wird angefordert. In diesem Fall wird angenommen, dass eine Netzwerkverbindung erforderlich ist, und `"offline_enabled"` hat standardmäßig `false`.

Der Wert `"offline_enabled"` wird auch verwendet, um zu bestimmen, ob beim Starten einer App im [ChromeOS-Kiosk-Modus](https://developer.chrome.com/docs/apps/manifest/kiosk_enabled/) eine Netzwerkverbindungsprüfung durchgeführt wird. Eine Netzwerkverbindungsprüfung wird durchgeführt, wenn Apps nicht offline-aktiviert sind, und das Starten der App wird zurückgestellt, bis das Gerät eine Internetverbindung erhält.

## Browser-Kompatibilität

{{Compat}}
