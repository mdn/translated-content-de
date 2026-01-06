---
title: chrome_settings_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
l10n:
  sourceCommit: 8ba42490fa8be04d5751399274c40a00e1ac9a52
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>

  <tr>
      <th scope="row">Beispiel</th>
      <td><pre class="brush: json">
"chrome_settings_overrides" : {
  "homepage": "https://developer.mozilla.org/"
 },
</pre></td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `chrome_settings_overrides`, um die Startseite des Browsers zu überschreiben und eine neue Suchmaschine hinzuzufügen.

## Syntax

Der Schlüssel `chrome_settings_overrides` ist ein Objekt, das die folgenden Eigenschaften haben kann:

- `homepage`
  - : `string`. Definiert die Seite, die als Startseite des Browsers verwendet werden soll.

    Der Ersatz wird als URL angegeben. Die URL kann:
    - auf eine mit der Erweiterung gebündelte Datei verweisen, in diesem Fall wird
      sie als URL relativ zur Datei manifest.json angegeben
    - eine externe URL sein, wie zum Beispiel "https://developer.mozilla.org/".

    Wenn zwei oder mehr Erweiterungen diesen Wert setzen, dann hat die Einstellung der zuletzt installierten Erweiterung Vorrang.

    Um neue Tabs zu überschreiben, verwenden Sie stattdessen [chrome_url_overrides](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides).

    Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `search_provider`
  - : `object`. Definiert einen Suchanbietenden, der dem Browser hinzugefügt wird.

    Der Suchanbieter hat einen Namen und eine primäre Such-URL. Alternative
    URLs können angegeben werden, einschließlich URLs für spezialisierte Suchen
    wie die Bildersuche. Verwenden Sie in der bereitgestellten URL
    `{searchTerms}`, um den Suchbegriff in die
    URL einzufügen, wie:
    `https://www.discogs.com/search/?q={searchTerms}`. Sie können
    auch POST-Parameter angeben, die zusammen mit der Suche gesendet werden.

    Der Suchanbieter wird dem Nutzenden neben den
    eingebauten Anbietern angezeigt. Wenn Sie die
    Eigenschaft `is_default` einschließen und auf `true` setzen,
    wird der neue Suchanbieter die Standardoption sein. Durch die Angabe der
    Eigenschaft `keyword` ermöglichen Sie dem Nutzenden, Ihren
    Suchanbieter auszuwählen, indem er das Schlüsselwort in die Such-/Adressleiste
    vor dem Suchbegriff eingibt.

    Dieses Objekt hat folgende Eigenschaften. Alle Zeichenfolgen-Eigenschaften
    sind [lokalisierbar](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
    - `name`
      - : `string`. Der Name der Suchmaschine, der dem Nutzenden angezeigt wird.

    - `search_url`
      - : `string`. URL, die von der Suchmaschine verwendet wird. Dies muss eine HTTPS-URL sein.

    - `is_default` {{optional_inline}}
      - : `boolean`. Wahr, wenn die Suchmaschine die Standardwahl sein soll. In
        Firefox ist dies eine Option, und der Nutzende wird nur beim ersten
        Installieren der Erweiterung danach gefragt. Wenn eine Suchmaschine später hinzugefügt wird, wird er nicht erneut gefragt.

    - `alternate_urls` {{optional_inline}}
      - : `array` von `string`. Ein Array von alternativen URLs, die anstelle von `search_url` verwendet werden können.

    - `encoding` {{optional_inline}}
      - : `string`. Kodierung des Suchbegriffs, angegeben als [Standard-Zeichenkodierungsname](https://www.iana.org/assignments/character-sets/character-sets.xhtml), wie "UTF-8".

    - `favicon_url` {{optional_inline}}
      - : `string`. URL, die auf ein Symbol für die Suchmaschine verweist. In Manifest V2
        muss dies eine absolute HTTP- oder HTTPS-URL sein. In Manifest V3 muss dies
        ein Symbol referenzieren, das in der Erweiterung als Pfad relativ zum
        Stamm der Erweiterung bereitgestellt wird.

    - `image_url` {{optional_inline}}
      - : `string`. URL, die für die Bildersuche verwendet wird.

    - `image_url_post_params` {{optional_inline}}
      - : `string`. POST-Parameter, die an `image_url` gesendet werden.

    - `instant_url` {{optional_inline}}
      - : `string`. URL, die für die Sofortsuche verwendet wird.

    - `instant_url_post_params` {{optional_inline}}
      - : `string`. POST-Parameter, die an `instant_url` gesendet werden.

    - `keyword` {{optional_inline}}
      - : `string`. Schlüsselwort in der Adressleiste für die Suchmaschine.

    - `prepopulated_id` {{optional_inline}}
      - : `string`. Die ID einer eingebauten Suchmaschine, die verwendet werden soll.

    - `search_url_get_params` {{optional_inline}}
      - : `string`. GET-Parameter, die an `search_url` gesendet werden. Nur in Firefox verfügbar, für eine optimale plattformübergreifende Kompatibilität verwenden Sie stattdessen `search_url`.

    - `search_url_post_params` {{optional_inline}}
      - : `string`. POST-Parameter, die an `search_url` gesendet werden.

    - `suggest_url` {{optional_inline}}
      - : `string`. URL, die für Suchvorschläge verwendet wird. Dies muss eine HTTPS-URL sein.

    - `suggest_url_get_params` {{optional_inline}}
      - : `string`. GET-Parameter, die an `suggest_url` gesendet werden. Nur in Firefox verfügbar, für eine optimale plattformübergreifende Kompatibilität verwenden Sie stattdessen `suggest_url`.

    - `suggest_url_post_params` {{optional_inline}}
      - : `string`. POST-Parameter, die an `suggest_url` gesendet werden.

## Beispiel

Dieses Beispiel zeigt, wie man einen Suchanbieter festlegt.

```json
"chrome_settings_overrides": {
  "search_provider": {
    "name": "Discogs",
    "search_url": "https://www.discogs.com/search/?q={searchTerms}",
    "keyword": "disc",
    "favicon_url": "https://www.discogs.com/favicon.ico"
  }
}
```

## Browser-Kompatibilität

{{Compat}}
