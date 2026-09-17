---
title: chrome_settings_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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
    - auf eine mit der Erweiterung gebündelte Datei verweisen; in diesem Fall
      wird sie als URL relativ zur Datei manifest.json angegeben
    - eine Remote-URL sein, beispielsweise "https://developer.mozilla.org/".

    Wenn zwei oder mehr Erweiterungen diesen Wert festlegen, hat die Einstellung
    der zuletzt installierten Erweiterung Vorrang.

    Verwenden Sie stattdessen [chrome_url_overrides](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides), um neue Tabs zu überschreiben.

    Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `search_provider`
  - : `object`. Definiert einen Suchanbieter, der dem Browser hinzugefügt werden soll.

    Der Suchanbieter hat einen Namen und eine primäre Such-URL. Es können
    alternative URLs bereitgestellt werden, einschließlich URLs für stärker
    spezialisierte Suchen wie die Bildsuche. Verwenden Sie in der angegebenen URL
    `{searchTerms}`, um den Suchbegriff in die URL einzufügen,
    beispielsweise:
    `https://www.discogs.com/search/?q={searchTerms}`. Sie können außerdem
    POST-Parameter angeben, die zusammen mit der Suche gesendet werden sollen.

    Der Suchanbieter wird dem Benutzer zusammen mit den integrierten Anbietern
    angezeigt. Wenn Sie die Eigenschaft `is_default` einschließen
    und auf `true` setzen, wird der neue Suchanbieter zur Standardoption.
    Durch Angabe der Eigenschaft `keyword` ermöglichen Sie dem Benutzer,
    Ihren Suchanbieter auszuwählen, indem er das Schlüsselwort vor dem
    Suchbegriff in die Such-/Adressleiste eingibt.

    Dieses Objekt hat die folgenden Eigenschaften. Alle String-Eigenschaften
    sind [lokalisierbar](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
    - `name`
      - : `string`. Der Name der Suchmaschine, der dem Benutzer angezeigt wird.

    - `search_url`
      - : `string`. Von der Suchmaschine verwendete URL. Dies muss eine HTTPS-URL sein.

    - `is_default` {{optional_inline}}
      - : `boolean`. `true`, wenn die Suchmaschine die Standardauswahl sein soll. In
        Firefox ist dies eine Opt-in-Funktion, und der Benutzer wird nur beim ersten
        Installieren der Erweiterung gefragt. Er wird nicht erneut gefragt, wenn später
        eine Suchmaschine hinzugefügt wird.

    - `alternate_urls` {{optional_inline}}
      - : `array` von `string`. Ein Array alternativer URLs, die anstelle von `search_url` verwendet werden können.

    - `encoding` {{optional_inline}}
      - : `string`. Kodierung des Suchbegriffs, angegeben als [standardisierter Zeichenkodierungsname](https://www.iana.org/assignments/character-sets), beispielsweise „UTF-8“.

    - `favicon_url` {{optional_inline}}
      - : `string`. URL, die auf ein Symbol für die Suchmaschine verweist. In Manifest V2
        muss dies eine absolute HTTP- oder HTTPS-URL sein. In Manifest V3 muss dies
        auf ein in der Erweiterung bereitgestelltes Symbol als Pfad relativ zum
        Stammverzeichnis der Erweiterung verweisen.

    - `image_url` {{optional_inline}}
      - : `string`. URL, die für die Bildsuche verwendet wird.

    - `image_url_post_params` {{optional_inline}}
      - : `string`. POST-Parameter, die an `image_url` gesendet werden.

    - `instant_url` {{optional_inline}}
      - : `string`. URL, die für die sofortige Suche verwendet wird.

    - `instant_url_post_params` {{optional_inline}}
      - : `string`. POST-Parameter, die an `instant_url` gesendet werden.

    - `keyword` {{optional_inline}}
      - : `string`. Schlüsselwort für die Adressleiste der Suchmaschine.

    - `prepopulated_id` {{optional_inline}}
      - : `string`. Die ID einer integrierten Suchmaschine, die verwendet werden soll.

    - `search_url_get_params` {{optional_inline}}
      - : `string`. GET-Parameter, die an `search_url` gesendet werden. Nur in Firefox verfügbar; verwenden Sie für optimale Browser-Kompatibilität stattdessen `search_url`.

    - `search_url_post_params` {{optional_inline}}
      - : `string`. POST-Parameter, die an `search_url` gesendet werden.

    - `suggest_url` {{optional_inline}}
      - : `string`. URL, die für Suchvorschläge verwendet wird. Dies muss eine HTTPS-URL sein.

    - `suggest_url_get_params` {{optional_inline}}
      - : `string`. GET-Parameter, die an `suggest_url` gesendet werden. Nur in Firefox verfügbar; verwenden Sie für optimale Browser-Kompatibilität stattdessen `suggest_url`.

    - `suggest_url_post_params` {{optional_inline}}
      - : `string`. POST-Parameter, die an `suggest_url` gesendet werden.

## Beispiel

Dieses Beispiel zeigt, wie ein Suchanbieter festgelegt wird.

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
