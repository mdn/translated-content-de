---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
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

Verwenden Sie den Schlüssel `host_permissions`, um Zugriff für die APIs in Ihrer Erweiterung anzufordern, die Hostdaten lesen oder ändern, wie z.B. {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenketten, und jede Zeichenkette ist eine Anfrage für eine Berechtigung.

### Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen gewähren oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) auf einer Ad-hoc-Basis. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest V3-Erweiterung nicht im Installationsdialog angezeigt. Ab Firefox 127 werden Host-Berechtigungen, die in `host_permissions` und `content_scripts` aufgeführt sind, im Installationsdialog angezeigt. Wenn jedoch eine Erweiterungsaktualisierung neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt die angeforderten Host-Berechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann überprüfen, ob sie alle erforderlichen Berechtigungen unmittelbar nach der Installation hat, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Sollte sie nicht die notwendigen Berechtigungen haben, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Es kann auch hilfreich sein, einen Einführungsabschnitt bereitzustellen, der erklärt, warum einige Berechtigungen notwendig sind, bevor Sie sie anfordern.

Da die Anfrage zur Gewährung von Host-Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinflussen kann, lohnt sich eine sorgfältige Überlegung der angeforderten Host-Berechtigungen. Beispielsweise möchten Sie möglicherweise unnötige Host-Berechtigungen vermeiden und könnten Informationen darüber bereitstellen, warum Sie Host-Berechtigungen in der Store-Beschreibung Ihrer Erweiterung anfordern. Der Artikel [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den Überlegungen, die Sie anstellen sollten.

Für Informationen, wie Sie Berechtigungsanfragen testen und Vorschauen anzeigen, siehe [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Extension Workshop-Website.

### Format

Host-Berechtigungen werden als [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) spezifiziert, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Zum Beispiel könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne cross-origin Einschränkungen (jedoch nicht für Anfragen von content scripts, wie es bei Manifest V2 der Fall war).
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten.
- die Fähigkeit, Skripte programmatisch (mithilfe von {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) in Seiten einzufügen, die von diesen Ursprüngen bereitgestellt werden.
- die Fähigkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen.
- die Fähigkeit, Cookies für diesen Host mithilfe der {{webextAPIref("cookies")}} API zuzugreifen, solange die `"cookies"` API-Berechtigung ebenfalls enthalten ist.
- Umgehung des Tracking-Schutzes für Erweiterungsseiten, wo ein Host als vollständige Domain oder mit Platzhaltern angegeben ist.

In Firefox erhalten Erweiterungen Host-Berechtigungen für ihren Ursprung, der folgende Form hat:

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

## Beispielerweiterungen

<!-- Idealerweise würden wir die WebExtExamples-Vorlage verwenden, aber Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
