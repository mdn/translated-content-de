---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: 286918035156c33cc4ed073304f4c51ab5cfacfe
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

Verwenden Sie den `host_permissions`-Schlüssel, um Zugriff auf die APIs in Ihrer Erweiterung anzufordern, die Hostdaten lesen oder ändern, wie {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anfrage für eine Berechtigung.

## Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen erteilen oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) nach Bedarf. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest V3-Erweiterung nicht im Installationsdialog angezeigt. Ab Firefox 127 werden Host-Berechtigungen, die in `host_permissions` und `content_scripts` aufgelistet sind, im Installationsdialog angezeigt. Wenn jedoch ein Erweiterungsupdate neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt angeforderte Host-Berechtigungen nicht im Installationsdialog an.

Ihre Erweiterung kann nach der Installation überprüfen, ob sie alle notwendigen Berechtigungen hat, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Falls nicht, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Ein Onboarding-Schritt, der erklärt, warum einige Berechtigungen notwendig sind, kann ebenfalls hilfreich sein, bevor Sie sie anfordern.

Da die Anfrage zu Host-Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, sollten Sie die Anfrage solcher Berechtigungen sorgfältig abwägen. Zum Beispiel sollten Sie vermeiden, unnötige Host-Berechtigungen anzufordern, und möglicherweise Informationen darüber bereitstellen, warum Sie Host-Berechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Der Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den Überlegungen, die Sie anstellen sollten.

Für Informationen dazu, wie Sie Berechtigungsanfragen testen und in der Vorschau anzeigen können, siehe [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

## Format

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) angegeben, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` lauten.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API)-Zugriff auf diese Ursprünge ohne Cross-Origin-Einschränkungen, jedoch nicht für Anfragen von Content-Skripten.
- Die Möglichkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}}-Objekten.
- Die Möglichkeit, Skripte programmatisch (unter Verwendung von {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) in Seiten zu injizieren, die von diesen Ursprüngen geliefert werden.
- Die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}}-API für diese Hosts zu empfangen.
- Die Möglichkeit, Cookies für diesen Host unter Verwendung der {{webextAPIref("cookies")}}-API zuzugreifen, solange die `"cookies"`-API-Berechtigung ebenfalls enthalten ist.
- Das Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domäne oder mit Wildcards angegeben ist.

## Beispiel

```json
 "host_permissions": ["*://developer.mozilla.org/*"]
```

Fordern Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

## Beispielerweiterungen

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
