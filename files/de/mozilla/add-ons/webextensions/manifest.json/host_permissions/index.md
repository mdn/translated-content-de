---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
l10n:
  sourceCommit: 674d6c8868cde1654eaba3c285afde9d3b60ce9f
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

Verwenden Sie den Schlüssel `host_permissions`, um Zugriff auf die APIs in Ihrer Erweiterung anzufordern, die Host-Daten lesen oder ändern, wie {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("tabs")}}. Dieser Schlüssel ist ein Array von Zeichenfolgen, und jede Zeichenfolge ist eine Anforderung für eine Berechtigung.

## Angeforderte Berechtigungen und Benutzeraufforderungen

Benutzer können [Host-Berechtigungen gewähren oder widerrufen](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) nach Bedarf. Daher behandeln die meisten Browser `host_permissions` als optional.

Bei der Installation, wenn Sie Berechtigungen mit diesem Schlüssel anfordern:

- Bis Firefox 126 wurden die angeforderten Host-Berechtigungen einer Manifest V3-Erweiterung nicht im Installationsdialog angezeigt. Ab Firefox 127 werden die in `host_permissions` und `content_scripts` aufgeführten Host-Berechtigungen im Installationsdialog angezeigt. Wenn jedoch bei einem Erweiterungs-Update neue Host-Berechtigungen angefordert werden, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox Bug 1893232](https://bugzil.la/1893232)).
- Chrome zeigt die Berechtigungen im Installationsdialog an.
- Safari zeigt angeforderte Host-Berechtigungen im Installationsdialog nicht an.

Ihre Erweiterung kann überprüfen, ob sie alle erforderlichen Berechtigungen unmittelbar nach der Installation hat, indem sie {{WebExtAPIRef("permissions.contains")}} verwendet. Wenn sie nicht die notwendigen Berechtigungen hat, kann sie diese mit {{WebExtAPIRef("permissions.request")}} anfordern. Es könnte auch hilfreich sein, einen Einführungsschritt bereitzustellen, um zu erklären, warum einige Berechtigungen notwendig sind, bevor sie angefordert werden.

Da die Anfrage zur Gewährung von Host-Berechtigungen die Bereitschaft der Benutzer zur Installation Ihrer Erweiterung beeinträchtigen kann, lohnt sich eine sorgfältige Überlegung bei der Anforderung von Host-Berechtigungen. Beispielsweise sollten Sie vermeiden, unnötige Host-Berechtigungen anzufordern, und können Informationen in der Beschreibung Ihrer Erweiterung im Store bereitstellen, warum Sie Host-Berechtigungen anfordern. Der Artikel [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) bietet weitere Informationen zu den Überlegungen, die Sie anstellen sollten.

Informationen zum Testen und Vorschauen von Berechtigungsanfragen finden Sie unter [Berechtigungsanfragen testen](https://extensionworkshop.com/documentation/develop/test-permission-requests/) auf der Website des Extension Workshops.

## Format

Host-Berechtigungen werden als [Matchmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) spezifiziert, und jedes Muster identifiziert eine Gruppe von URLs, für die die Erweiterung zusätzliche Privilegien anfordert. Beispielsweise könnte eine Host-Berechtigung `"*://developer.mozilla.org/*"` sein.

Die zusätzlichen Privilegien umfassen:

- [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) und [fetch](/de/docs/Web/API/Fetch_API) Zugriff auf diese Ursprünge ohne Cross-Origin-Beschränkungen, jedoch nicht für Anfragen aus Content-Skripten.
- die Fähigkeit, tab-spezifische Metadaten ohne die "tabs"-Berechtigung zu lesen, wie die `url`, `title` und `favIconUrl` Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} Objekten.
- die Möglichkeit, Skripte programmatisch (mit {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) in Seiten einzuspeisen, die von diesen Ursprüngen bedient werden.
- die Möglichkeit, Ereignisse von der {{webextAPIref("webRequest")}} API für diese Hosts zu empfangen.
- die Möglichkeit, auf Cookies für diesen Host mit der {{webextAPIref("cookies")}} API zuzugreifen, vorausgesetzt, dass die `"cookies"` API-Berechtigung auch enthalten ist.
- Umgehen des Tracking-Schutzes für Erweiterungsseiten, bei denen ein Host als vollständige Domain oder mit Platzhaltern angegeben ist.
- die Fähigkeit, WebAuthn-Anmeldeinformationen zu erstellen und abzurufen. Siehe [Verwendung der Web Authn API in Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) für Details.

## Beispiel

```json
 "host_permissions": ["*://developer.mozilla.org/*"]
```

Fordern Sie privilegierten Zugriff auf Seiten unter `developer.mozilla.org` an.

## Beispielerweiterungen

<!-- Im Idealfall würden wir die WebExtExamples-Vorlage verwenden, aber Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
