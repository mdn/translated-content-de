---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
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

Verwenden Sie den Schlüssel `host_permissions`, um Zugriff für die APIs in Ihrer Erweiterung anzufordern, die Hostdaten lesen oder ändern, wie z.B. {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

### Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen gewähren oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) nach Bedarf. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest V3-Erweiterung nicht im Installationsdialog angezeigt. Ab Firefox 127 werden im Installationsdialog die Berechtigungen angezeigt, die in `host_permissions` und `content_scripts` aufgelistet sind. Wenn jedoch ein Update der Erweiterung neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox Fehler 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt angeforderte Host-Berechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann prüfen, ob sie direkt nach der Installation alle erforderlichen Berechtigungen hat, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Wenn sie nicht über die notwendigen Berechtigungen verfügt, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Es könnte auch hilfreich sein, einen Onboarding-Schritt bereitzustellen, um zu erklären, warum einige Berechtigungen notwendig sind, bevor Sie sie anfordern.

Da die Anfrage zur Gewährung von Host-Berechtigungen die Bereitschaft der Benutzer beeinflussen kann, Ihre Erweiterung zu installieren, ist es wichtig, die Anfrage von Host-Berechtigungen sorgfältig zu erwägen. Beispielsweise sollten Sie es vermeiden, unnötige Host-Berechtigungen anzufordern und in der Beschreibung Ihres Erweiterungsspeichers Informationen darüber zur Verfügung stellen, warum Sie Host-Berechtigungen anfordern. Der Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den zu berücksichtigenden Aspekten.

Informationen zum Testen und Vorschauen von Berechtigungsanfragen finden Sie unter [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

### Format

Host-Berechtigungen werden als [match patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Ein Beispiel für eine Host-Berechtigung könnte `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen (obwohl dies nicht für Anfragen von Content-Skripten gilt, wie es in Manifest V2 der Fall war).
- die Möglichkeit, tab-spezifische Metadaten ohne die Berechtigung "tabs" zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten.
- die Möglichkeit, Skripte programmgesteuert (mit {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) in Seiten von diesen Ursprüngen einzufügen.
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen.
- die Möglichkeit, Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, solange die API-Berechtigung "cookies" ebenfalls enthalten ist.
- Umgehung des Tracking-Schutzes für Erweiterungsseiten, auf denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist.

In Firefox erhalten Erweiterungen Host-Berechtigungen für ihren Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wo `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmgesteuert abrufen, indem sie {{webextAPIref("extension/getURL", "extension.getURL()")}} aufruft:

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

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
