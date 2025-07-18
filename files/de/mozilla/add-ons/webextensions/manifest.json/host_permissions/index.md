---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
        <pre class="brush: json">
"host_permissions": [
  "*://developer.mozilla.org/*",
  "*://*.example.org/*"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `host_permissions`, um Zugriff für die APIs in Ihrer Erweiterung zu beantragen, die Host-Daten lesen oder ändern, wie zum Beispiel {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anforderung für eine Berechtigung.

### Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen ad hoc gewähren oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions). Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest V3-Erweiterung nicht im Installationsdialog angezeigt. Ab Firefox 127 werden die in `host_permissions` und `content_scripts` aufgeführten Host-Berechtigungen im Installationsdialog angezeigt. Wenn jedoch ein Erweiterungsupdate neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt angeforderte Host-Berechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann überprüfen, ob sie alle erforderlichen Berechtigungen direkt nach der Installation hat, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Falls nicht, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Es kann auch hilfreich sein, einen Onboarding-Schritt bereitzustellen, um zu erklären, warum einige Berechtigungen erforderlich sind, bevor Sie sie anfordern.

Da die Anforderung von Host-Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinträchtigen kann, lohnt es sich, Host-Berechtigungen sorgfältig abzuwägen. Zum Beispiel möchten Sie möglicherweise unnötige Host-Berechtigungen vermeiden und Informationen darüber bereitstellen, warum Sie Host-Berechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Der Artikel [Fordern Sie die richtigen Berechtigungen an](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den Überlegungen, die Sie anstellen sollten.

Informationen zum Testen und Vorschauen von Berechtigungsanfragen finden Sie unter [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

### Format

Host-Berechtigungen werden als [Muster für Übereinstimmungen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Ein Host-Berechtigungsmuster könnte zum Beispiel `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- Zugriff auf diese Ursprünge mittels [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) ohne Cross-Origin-Einschränkungen (jedoch nicht für Anfragen von Inhalts-Skripten, wie es bei Manifest V2 der Fall war).
- die Möglichkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten.
- die Möglichkeit, Skripte programmgesteuert in Seiten von diesen Ursprüngen einzufügen (unter Verwendung von {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}).
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen.
- die Möglichkeit, Cookies für diesen Host mit der {{webextAPIref("cookies")}}-API zuzugreifen, sofern die Berechtigung "cookies" ebenfalls enthalten ist.
- Umgehung des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domäne oder mit Platzhaltern angegeben ist.

In Firefox erhalten Erweiterungen Host-Berechtigungen für ihren Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmatisch durch Aufruf von {{webextAPIref("extension/getURL", "extension.getURL()")}} erhalten:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## Beispiel

```json
 "host_permissions": ["*://developer.mozilla.org/*"]
```

Privilegierten Zugriff auf Seiten unter `developer.mozilla.org` anfordern.

## Beispielerweiterungen

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
