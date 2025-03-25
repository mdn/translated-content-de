---
title: chrome_settings_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

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
      <td><pre class="brush:json">
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

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>homepage</code></td>
      <td><code>String</code></td>
      <td>
        <p>Definiert die Seite, die als Startseite des Browsers verwendet werden soll.</p>
        <p>Der Ersatz wird als URL angegeben. Die URL kann:</p>
        <ul>
          <li>
            auf eine mit der Erweiterung gebündelte Datei zeigen, in diesem Fall wird sie als URL relativ zur Datei manifest.json angegeben
          </li>
          <li>eine entfernte URL sein, wie beispielsweise "https://developer.mozilla.org/".</li>
        </ul>
        <p>
          Wenn zwei oder mehr Erweiterungen diesen Wert setzen, hat die am kürzesten zuvor installierte Vorrang.
        </p>
        <p>
          Um neue Tabs zu überschreiben, verwenden Sie stattdessen "<a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides"
            >chrome_url_overrides</a
          >".
        </p>
        <p>
          Dies ist eine
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json"
            >lokalisierbare Eigenschaft</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>search_provider</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Definiert einen Suchanbieter, der dem Browser hinzugefügt werden soll.</p>
        <p>
          Der Suchanbieter hat einen Namen und eine primäre Such-URL. Alternative URLs können bereitgestellt werden, einschließlich URLs für spezifischere Suchanfragen wie die Bildsuche. Verwenden Sie in der angegebenen URL
          <code>{searchTerms}</code>, um den Suchbegriff in die URL einzufügen, wie:
          <code>https://www.discogs.com/search/?q={searchTerms}</code>. Sie können auch POST-Parameter bereitstellen, die zusammen mit der Suche gesendet werden.
        </p>
        <p>
          Der Suchanbieter wird dem Benutzer neben den eingebauten Anbietern präsentiert. Wenn Sie die Eigenschaft
          <code>is_default</code> hinzufügen und auf <code>true</code> setzen, wird der neue Suchanbieter die Standardoption sein. Durch die Angabe der Eigenschaft <code>keyword</code> ermöglichen Sie dem Benutzer, Ihren Suchanbieter auszuwählen, indem er das Schlüsselwort vor dem Suchbegriff in die Such-/Adressleiste eingibt.
        </p>
        <p>
          Dies ist ein Objekt mit den unten aufgeführten Eigenschaften. Alle String-Eigenschaften sind
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json"
            >lokalisierbar</a
          >.
        </p>
        <dl>
          <dt><code>name</code></dt>
          <dd>String: Der Name der Suchmaschine, der dem Benutzer angezeigt wird.</dd>
          <dt><code>search_url</code></dt>
          <dd>
            String: URL, die von der Suchmaschine verwendet wird. Dies muss eine HTTPS-URL sein.
          </dd>
          <dt><code>is_default</code> {{optional_inline}}</dt>
          <dd>
            Boolesch: Wahr, wenn die Suchmaschine die Standardwahl sein soll. In Firefox ist dies opt-in, und der Benutzer wird nur beim ersten Mal gefragt, wenn die Erweiterung installiert wird. Wird eine Suchmaschine später hinzugefügt, wird nicht erneut gefragt.
          </dd>
          <dt><code>alternate_urls</code> {{optional_inline}}</dt>
          <dd>
            Array von Strings: Ein Array alternativer URLs, die anstelle von <code>search_url</code> verwendet werden können.
          </dd>
          <dt><code>encoding</code> {{optional_inline}}</dt>
          <dd>
            String: Kodierung des Suchbegriffs, angegeben als
            <a
              href="https://www.iana.org/assignments/character-sets/character-sets.xhtml"
              >Standard-Zeichensatzkodierungsname</a
            >, wie beispielsweise "UTF-8".
          </dd>
          <dt><code>favicon_url</code> {{optional_inline}}</dt>
          <dd>
            String: URL, die auf ein Icon für die Suchmaschine verweist. In Manifest V2 muss dies eine absolute HTTP- oder HTTPS-URL sein. In Manifest V3 muss dies ein Pfad relativ zur Wurzel der Erweiterung sein, der auf ein in der Erweiterung bereitgestelltes Icon verweist.
          </dd>
          <dt><code>image_url</code> {{optional_inline}}</dt>
          <dd>String: URL, die für die Bildsuche verwendet wird.</dd>
          <dt><code>image_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>image_url</code> gesendet werden.</dd>
          <dt><code>instant_url</code> {{optional_inline}}</dt>
          <dd>String: URL, die für die Instant-Suche verwendet wird.</dd>
          <dt><code>instant_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>instant_url</code> gesendet werden.</dd>
          <dt><code>keyword</code> {{optional_inline}}</dt>
          <dd>String: Adressleisten-Schlüsselwort für die Suchmaschine.</dd>
          <dt><code>prepopulated_id</code> {{optional_inline}}</dt>
          <dd>Die ID einer eingebauten Suchmaschine, die verwendet werden soll.</dd>
          <dt><code>search_url_get_params</code> {{optional_inline}}</dt>
          <dd>String: GET-Parameter, die an <code>search_url</code> gesendet werden. Nur in Firefox verfügbar, für optimale Kompatibilität über mehrere Browser hinweg verwenden Sie stattdessen <code>search_url</code>.</dd>
          <dt><code>search_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>search_url</code> gesendet werden.</dd>
          <dt><code>suggest_url</code> {{optional_inline}}</dt>
          <dd>
            String: URL, die für Suchvorschläge verwendet wird. Dies muss eine HTTPS-URL sein.
          </dd>
          <dt><code>suggest_url_get_params</code> {{optional_inline}}</dt>
          <dd>String: GET-Parameter, die an <code>suggest_url</code> gesendet werden. Nur in Firefox verfügbar, für optimale Kompatibilität über mehrere Browser hinweg verwenden Sie stattdessen <code>suggest_url</code>.</dd>
          <dt><code>suggest_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>suggest_url</code> gesendet werden.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

Dieses Beispiel zeigt, wie man einen Suchanbieter einrichtet.

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
