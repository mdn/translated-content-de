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

Verwenden Sie den `host_permissions`-Schlüssel, um Zugriff auf die APIs in Ihrer Erweiterung anzufordern, die Hostdaten lesen oder verändern, wie beispielsweise {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Strings, und jeder String ist ein Antrag auf eine Berechtigung.

### Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen jederzeit gewähren oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions). Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest V3-Erweiterung im Installationsdialog nicht angezeigt. Ab Firefox 127 werden Host-Berechtigungen, die in `host_permissions` und `content_scripts` aufgelistet sind, im Installationsdialog angezeigt. Wenn jedoch eine Erweiterungsaktualisierung neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt die angeforderten Host-Berechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann überprüfen, ob sie alle erforderlichen Berechtigungen unmittelbar nach der Installation besitzt, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Falls nicht alle erforderlichen Berechtigungen vorhanden sind, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Es könnte hilfreich sein, einen Einführungsschritt bereitzustellen, der erklärt, warum einige Berechtigungen notwendig sind, bevor sie angefordert werden.

Da die Anforderung von Host-Berechtigungen die Bereitschaft der Benutzer beeinträchtigen kann, Ihre Erweiterung zu installieren, sollte die Anforderung von Host-Berechtigungen sorgfältig abgewogen werden. Beispielsweise möchten Sie unnötige Host-Berechtigungen vermeiden und möglicherweise Informationen darüber bereitstellen, warum Sie Host-Berechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Der Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet mehr Informationen zu den Themen, die Sie bedenken sollten.

Informationen zum Testen und Vorschau von Berechtigungsanforderungen finden Sie unter [Berechtigungsanforderungen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

### Format

Host-Berechtigungen werden als [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Eine Host-Berechtigung könnte zum Beispiel `"*://developer.mozilla.org/*"` lauten.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)- und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen (jedoch nicht für Anfragen von Content Scripts, wie es bei Manifest V2 der Fall war).
- die Fähigkeit, tab-spezifische Metadaten ohne die Berechtigung "tabs" zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten.
- die Fähigkeit, Skripte programmgesteuert (mit {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) in Seiten einzufügen, die von diesen Ursprüngen stammen.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webrequest")}}-API für diese Hosts zu empfangen.
- die Fähigkeit, auf Cookies für diesen Host mithilfe der {{webextAPIref("cookies")}}-API zuzugreifen, solange die Berechtigung für die API "cookies" ebenfalls enthalten ist.
- das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Wildcards angegeben ist.

In Firefox erhalten Erweiterungen Host-Berechtigungen für ihren Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

wobei `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung ist. Die Erweiterung kann diese URL programmatisch abrufen, indem sie {{webextAPIref("extension/getURL", "extension.getURL()")}} aufruft:

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
