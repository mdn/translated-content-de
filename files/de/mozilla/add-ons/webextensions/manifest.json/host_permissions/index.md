---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: 81b27da7107783b4a4d9ff245a99d93f6d3efc3a
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>3 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json;">
"host_permissions": [
  "*://developer.mozilla.org/*",
  "*://*.example.org/*"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `host_permissions` Schlüssel, um den Zugriff auf die APIs in Ihrer Erweiterung anzufordern, die Hostdaten lesen oder modifizieren, wie {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}}, und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Strings, und jeder String ist eine Anforderung für eine Berechtigung.

### Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen erteilen oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) nach Bedarf. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest V3-Erweiterung im Installationsdialog nicht angezeigt. Ab Firefox 127 werden die in `host_permissions` und `content_scripts` aufgeführten Host-Berechtigungen im Installationsdialog angezeigt. Wenn jedoch ein Erweiterungsupdate neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt angeforderte Host-Berechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann überprüfen, ob sie alle erforderlichen Berechtigungen direkt nach der Installation hat, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Wenn sie nicht die notwendigen Berechtigungen hat, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Es kann auch hilfreich sein, einen Onboarding-Schritt anzubieten, um zu erklären, warum einige Berechtigungen notwendig sind, bevor sie angefordert werden.

Da die Anforderung von Host-Berechtigungen die Bereitschaft der Benutzer, Ihre Erweiterung zu installieren, beeinflussen kann, lohnt es sich, die Host-Berechtigungen sorgfältig zu überlegen. Zum Beispiel möchten Sie unnötige Host-Berechtigungen vermeiden und eventuell Informationen darüber bereitstellen, warum Sie Host-Berechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Der Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den Themen, die Sie berücksichtigen sollten.

Für Informationen dazu, wie Sie Berechtigungsanfragen testen und prüfen können, siehe [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop Site.

### Format

Host-Berechtigungen werden als [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen (jedoch nicht für Anfragen von Content Scripts, wie es im Manifest V2 der Fall war).
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title`, und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten.
- die Fähigkeit, Skripte programmatisch zu injizieren (mithilfe von {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) in Seiten, die von diesen Ursprüngen bereitgestellt werden.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webrequest")}} API für diese Hosts zu empfangen.
- die Fähigkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, solange die `"cookies"` API-Berechtigung ebenfalls enthalten ist.
- Umgehung des Tracking-Schutzes für Erweiterungsseiten, auf denen ein Host als vollständige Domain oder mit Wildcards angegeben ist.

In Firefox erhalten Erweiterungen Host-Berechtigungen für ihren Ursprung, der folgende Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmatisch erhalten, indem sie {{webextAPIref("extension/getURL", "extension.getURL()")}} aufruft:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## Beispiel

```json
 "host_permissions": ["*://developer.mozilla.org/*"]
```

Fordern Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

## Beispiel-Erweiterungen

<!-- Idealerweise würden wir die WebExtExamples-Vorlage verwenden, aber Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
