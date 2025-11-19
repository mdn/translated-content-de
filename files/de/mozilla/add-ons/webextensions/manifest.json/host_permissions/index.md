---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
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

Verwenden Sie den Schlüssel `host_permissions`, um Zugriff für die APIs in Ihrer Erweiterung anzufordern, die Hostdaten lesen oder ändern, wie z.B. {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Strings, und jeder String stellt eine Anfrage für eine Berechtigung dar.

## Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Hostberechtigungen gewähren oder entziehen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) je nach Bedarf. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Hostberechtigungen einer Manifest V3-Erweiterung nicht im Installationsdialog angezeigt. Ab Firefox 127 werden Hostberechtigungen, die in `host_permissions` und `content_scripts` aufgelistet sind, im Installationsdialog angezeigt. Wenn jedoch ein Erweiterungsupdate neue Hostberechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt die angeforderten Hostberechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann unmittelbar nach der Installation überprüfen, ob sie alle erforderlichen Berechtigungen hat, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Wenn sie nicht die notwendigen Berechtigungen hat, kann sie sie mit {{WebExtAPIRef("permissions.request")}} anfordern. Es könnte auch hilfreich sein, einen Einführungsschritt bereitzustellen, der erklärt, warum einige Berechtigungen notwendig sind, bevor sie angefordert werden.

Da die Anfrage, Hostberechtigungen zu gewähren, die Bereitschaft der Benutzer, Ihre Erweiterung zu installieren, beeinflussen kann, lohnt es sich, die Anforderung von Hostberechtigungen sorgfältig zu überlegen. Beispielsweise sollten Sie vermeiden, unnötige Hostberechtigungen anzufordern und möglicherweise Informationen darüber bereitstellen, warum Sie Hostberechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Der Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den Überlegungen, die Sie anstellen sollten.

Für Informationen dazu, wie Sie Berechtigungsanfragen testen und in der Vorschau anzeigen können, siehe [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Seite.

### Format

Hostberechtigungen werden als [Matchmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Beispielsweise könnte eine Hostberechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- Zugriff auf [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) für diese Ursprünge ohne Cross-Origin-Beschränkungen (allerdings nicht für Anfragen von Content-Skripts, wie es in Manifest V2 der Fall war).
- die Möglichkeit, tabbezogene Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}}-Objekten.
- die Fähigkeit, Skripte programmatisch (unter Verwendung von {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) in von jenen Ursprüngen bereitgestellte Seiten einzufügen.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen.
- die Möglichkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, sofern die Berechtigung für die `"cookies"` API ebenfalls enthalten ist.
- die Umgehung des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist.

In Firefox erhalten Erweiterungen Hostberechtigungen für ihren Ursprung, der folgendermaßen aussieht:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

dabei ist `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung. Die Erweiterung kann diese URL programmgesteuert durch Aufruf von {{webextAPIref("extension/getURL", "extension.getURL()")}} abrufen:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## Beispiel

```json
 "host_permissions": ["*://developer.mozilla.org/*"]
```

Fordern Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

## Beispielerweiterungen

<!-- Idealerweise würden wir die WebExtExamples-Vorlage verwenden, aber die Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
