---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: 2cfef1ac3bd1afe2710bcb5807ae6cf39ce42b91
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

Verwenden Sie den Schlüssel `host_permissions`, um Zugang für die APIs in Ihrer Erweiterung anzufordern, die Hostdaten lesen oder ändern, wie {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenketten, und jede Zeichenkette ist eine Anforderung für eine Berechtigung.

## Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen gewähren oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) nach Bedarf. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest V3-Erweiterung nicht im Installationsdialog angezeigt. Ab Firefox 127 werden die in `host_permissions` und `content_scripts` aufgelisteten Host-Berechtigungen im Installationsdialog angezeigt. Wenn jedoch eine Erweiterungsaktualisierung neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt angeforderte Host-Berechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann überprüfen, ob sie alle erforderlichen Berechtigungen unmittelbar nach der Installation hat, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Wenn sie nicht die erforderlichen Berechtigungen hat, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Es könnte auch hilfreich sein, einen Onboarding-Schritt bereitzustellen, um zu erklären, warum einige Berechtigungen erforderlich sind, bevor sie angefordert werden.

Da die Anforderung von Host-Berechtigungen die Bereitschaft der Benutzer, Ihre Erweiterung zu installieren, beeinflussen kann, ist die Anforderung von Host-Berechtigungen sorgfältig zu überlegen. Zum Beispiel sollten Sie vermeiden, unnötige Host-Berechtigungen anzufordern, und möchten möglicherweise Informationen darüber bereitstellen, warum Sie Host-Berechtigungen in der Beschreibung Ihres Erweiterungs-Stores anfordern. Der Artikel [Fordern Sie die richtigen Berechtigungen an](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu diesen Überlegungen.

Informationen dazu, wie Sie Berechtigungsanfragen testen und anzeigen können, finden Sie unter [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

## Format

Host-Berechtigungen werden als [Musterabgleiche](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Berechtigungen anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Berechtigungen umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen, aber nicht für Anfragen von Inhalts-Skripten.
- Die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten.
- Die Fähigkeit, Skripte programmatisch in Seiten von diesen Ursprüngen einzuspeisen (mithilfe von {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}).
- Die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen.
- Die Fähigkeit, Cookies für diesen Host mithilfe der {{webextAPIref("cookies")}}-API zuzugreifen, solange die Berechtigung für "cookies" API ebenfalls enthalten ist.
- Das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist.

In Firefox erhalten Erweiterungen Host-Berechtigungen für ihren Ursprung, der in der Form ist:

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

Fordern Sie einen privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

## Beispiel-Erweiterungen

<!-- Idealerweise würden wir die WebExtExamples-Vorlage verwenden, aber Beispiele sind noch nicht nach manifest keys kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
