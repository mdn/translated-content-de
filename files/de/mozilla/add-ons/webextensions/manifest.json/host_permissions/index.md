---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: 03482f82cba9c871042bbf4972b754f65eb3cb90
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

Verwenden Sie den Schlüssel `host_permissions`, um Zugriff für die APIs in Ihrer Erweiterung anzufordern, die Hostdaten lesen oder ändern, wie zum Beispiel {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage nach einer Berechtigung.

### Angeforderte Berechtigungen und Benutzereingabeaufforderungen

Benutzer können [Hostberechtigungen gewähren oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) nach Bedarf. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Hostberechtigungen einer Manifest V3-Erweiterung nicht in der Installationsaufforderung angezeigt. Ab Firefox 127 werden Hostberechtigungen, die in `host_permissions` und `content_scripts` aufgeführt sind, in der Installationsaufforderung angezeigt. Wenn jedoch bei einem Erweiterungsupdate neue Hostberechtigungen angefordert werden, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Fehler 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen in der Installationsaufforderung an.
- Safari zeigt die angeforderten Hostberechtigungen nicht in der Installationsaufforderung an.

Ihre Erweiterung kann überprüfen, ob sie alle erforderlichen Berechtigungen unmittelbar nach der Installation besitzt, indem Sie {{WebExtAPIRef("permissions.contains")}} verwenden. Wenn sie nicht die notwendigen Berechtigungen hat, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Es könnte auch hilfreich sein, einen Einführungsschritt bereitzustellen, der erklärt, warum einige Berechtigungen notwendig sind, bevor Sie sie anfordern.

Da die Anfrage, Hostberechtigungen zu gewähren, die Bereitschaft der Benutzer beeinträchtigen kann, Ihre Erweiterung zu installieren, lohnt es sich, die Anforderung von Hostberechtigungen sorgfältig abzuwägen. Zum Beispiel sollten Sie vermeiden, unnötige Hostberechtigungen anzufordern, und möglicherweise Informationen darüber bereitstellen, warum Sie Hostberechtigungen in der Beschreibung Ihrer Erweiterung im Store anfordern. Der Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den zu berücksichtigenden Punkten.

Informationen zum Testen und Vorschauen von Berechtigungsanfragen finden Sie unter [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Seite des Erweiterungsworkshops.

### Format

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Hostberechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen (jedoch nicht für Anfragen aus Content-Scripts, wie es bei Manifest V2 der Fall war).
- Die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die Eigenschaften `url`, `title` und `favIconUrl` von {{WebExtAPIRef("tabs.Tab")}} Objekten.
- Die Fähigkeit, Skripte programmgesteuert (mit {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) in von diesen Ursprüngen bereitgestellte Seiten einzufügen.
- Die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen.
- Die Fähigkeit, auf Cookies für diesen Host zuzugreifen, wenn die API-Berechtigung `"cookies"` ebenfalls enthalten ist.
- Umgehung des Tracking-Schutzes für Erweiterungsseiten, wo ein Host als vollständige Domain oder mit Platzhaltern angegeben ist.

In Firefox erhalten Erweiterungen Hostberechtigungen für ihren Ursprung, der die Form hat:

```url
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

Dabei ist `60a20a9b-1ad4-af49-9b6c-c64c98c37920` die interne ID der Erweiterung. Die Erweiterung kann diese URL programmgesteuert durch Aufruf von {{webextAPIref("extension/getURL", "extension.getURL()")}} erhalten:

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

<!-- Ideally we'd use the WebExtExamples template, but examples are not categorized by manifest keys yet - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
