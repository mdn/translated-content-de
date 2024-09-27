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

Verwenden Sie den Schlüssel `host_permissions`, um den Zugriff auf die APIs in Ihrer Erweiterung anzufordern, die auf Host-Daten zugreifen oder diese ändern, wie z.B. {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}}, und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anforderung für eine Berechtigung.

### Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen gewähren oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) nach Bedarf. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest-V3-Erweiterung nicht im Installationsdialog angezeigt. Ab Firefox 127 werden die Host-Berechtigungen, die in `host_permissions` und `content_scripts` aufgeführt sind, im Installationsdialog angezeigt. Wenn jedoch ein Erweiterungsupdate neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt die angeforderten Host-Berechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann überprüfen, ob sie alle erforderlichen Berechtigungen unmittelbar nach der Installation besitzt, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Wenn die notwendigen Berechtigungen fehlen, können diese mit {{WebExtAPIRef("permissions.request")}} angefordert werden. Es kann auch hilfreich sein, einen Onboarding-Schritt bereitzustellen, um zu erklären, warum einige Berechtigungen notwendig sind, bevor sie angefordert werden.

Da die Anforderung von Host-Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen könnte, lohnt es sich, die Anforderung von Host-Berechtigungen sorgfältig zu durchdenken. Zum Beispiel möchten Sie unnötige Host-Berechtigungen vermeiden und sollten möglicherweise Informationen darüber bereitstellen, warum Sie Host-Berechtigungen in der Beschreibung Ihrer Erweiterung im Store anfordern. Der Artikel [Fordern Sie die richtigen Berechtigungen an](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den Überlegungen, die Sie anstellen sollten.

Informationen zum Testen und Vorschauen von Berechtigungsanforderungen finden Sie unter [Testen von Berechtigungsanforderungen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

### Format

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` lauten.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen (jedoch nicht für Anfragen von Content-Skripten, wie es in Manifest V2 der Fall war).
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}} Objekten.
- die Möglichkeit, Skripte programmatisch in Seiten dieser Ursprünge einzufügen (mithilfe von {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}).
- die Möglichkeit, Ereignisse von der {{webextAPIref("webrequest")}} API für diese Hosts zu empfangen.
- die Möglichkeit, auf Cookies für diesen Host zuzugreifen, indem die {{webextAPIref("cookies")}} API verwendet wird, sofern die `"cookies"` API-Berechtigung ebenfalls enthalten ist.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domäne oder mit Platzhaltern angegeben ist.

In Firefox-Erweiterungen erhalten Host-Berechtigungen für ihren Ursprung, der folgendermaßen aussieht:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wo `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmatisch abrufen, indem sie {{webextAPIref("extension/getURL", "extension.getURL()")}} aufruft:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## Beispiel

```json
 "host_permissions": ["*://developer.mozilla.org/*"]
```

Fordern Sie privilegierten Zugang zu Seiten unter `developer.mozilla.org` an.

## Beispielerweiterungen

<!-- Ideal wäre es, die WebExtExamples-Vorlage zu verwenden, aber Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
