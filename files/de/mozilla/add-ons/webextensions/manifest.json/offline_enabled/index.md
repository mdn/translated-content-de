---
title: offline_enabled
slug: Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled
l10n:
  sourceCommit: ec9e109c42eeb2b910dc11b7d7d5c7e251bf4f89
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Boolean</code></td>
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
      <td><pre class="brush: json">"offline_enabled": true</pre></td>
    </tr>
  </tbody>
</table>

{{Non-standard_Header}}

Ob die App oder Erweiterung offline funktionieren soll. Wenn Chrome erkennt, dass es offline ist, werden Apps mit diesem auf "true" gesetzten Feld auf der Neuen-Tab-Seite hervorgehoben.

Seit Chrome 35 wird davon ausgegangen, dass Apps (ab 2018 nur ChromeOS) offline-fähig sind, und der Standardwert von `"offline_enabled"` ist `true`, es sei denn, dass die Berechtigung `"webview"` angefordert wird. In diesem Fall wird angenommen, dass Netzwerkverbindung erforderlich ist, und `"offline_enabled"` wird standardmäßig auf `false` gesetzt.

Der Wert `"offline_enabled"` wird auch verwendet, um zu bestimmen, ob beim Starten einer App im [ChromeOS-Kioskmode](https://developer.chrome.com/docs/apps/manifest/kiosk_enabled/) eine Netzwerkverbindungsprüfung durchgeführt wird. Eine Netzwerkverbindungsprüfung wird durchgeführt, wenn Apps nicht offline-fähig sind, und der App-Start wird zurückgestellt, bis das Gerät eine Verbindung zum Internet hergestellt hat.

## Browser-Kompatibilität

{{Compat}}
