---
title: chrome_settings_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
l10n:
  sourceCommit: 2feffd401d983cdcecf87afe1eb39d109121607e
---

{{AddonSidebar}}

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

Der Schlüssel `chrome_settings_overrides` ist ein Objekt, das die folgenden Eigenschaften besitzen kann:

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
        <p>Definiert die Seite, die als Startseite des Browsers verwendet wird.</p>
        <p>Der Ersatz wird als URL angegeben. Die URL kann:</p>
        <ul>
          <li>
            auf eine Datei verweisen, die mit der Erweiterung gebündelt ist, wobei sie als URL relativ zur Datei manifest.json angegeben ist
          </li>
          <li>eine entfernte URL sein, wie "https://developer.mozilla.org/".</li>
        </ul>
        <p>
          Wenn zwei oder mehr Erweiterungen diesen Wert festlegen, hat die Einstellung der zuletzt installierten Erweiterung Vorrang.
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
        <p>Definiert einen Suchanbieter, der dem Browser hinzugefügt wird.</p>
        <p>
          Der Suchanbieter hat einen Namen und eine primäre Such-URL. Alternative
          URLs können bereitgestellt werden, einschließlich URLs für speziellere Suchen
          wie Bildersuche. In der bereitgestellten URL können Sie
          "<code>{searchTerms}</code>" verwenden, um den Suchbegriff in die
          URL zu interpolieren, wie:
          <code>https://www.discogs.com/search/?q={searchTerms}</code>. Sie können
          auch POST-Parameter bereitstellen, die zusammen mit der Suche gesendet werden.
        </p>
        <p>
          Der Suchanbieter wird dem Benutzer neben den integrierten Anbietern präsentiert. Wenn Sie die
          Eigenschaft <code>is_default</code> einschließen und auf <code>true</code> setzen, wird der
          neue Suchanbieter die Standardoption sein. Durch die Bereitstellung der
          Eigenschaft <code>keyword</code> ermöglichen Sie dem Benutzer, Ihren
          Suchanbieter zu wählen, indem er das Schlüsselwort in die Such-/Adressleiste
          vor dem Suchbegriff eingibt.
        </p>
        <p>
          Dies ist ein Objekt mit den unten aufgeführten Eigenschaften. Alle
          String-Eigenschaften sind
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
            String: Die von der Suchmaschine verwendete URL. Dies muss eine HTTPS-URL sein.
          </dd>
          <dt><code>is_default</code> {{optional_inline}}</dt>
          <dd>
            Boolean: Wahr, wenn die Suchmaschine die Standardwahl sein sollte. In
            Firefox ist dies opt-in und der Benutzer wird nur beim ersten
            Installieren der Erweiterung gefragt. Sie werden nicht erneut
            gefragt, wenn später eine Suchmaschine hinzugefügt wird.
          </dd>
          <dt><code>alternate_urls</code> {{optional_inline}}</dt>
          <dd>
            Array von Strings: Ein Array alternativer URLs, die anstelle von <code>search_url</code> verwendet werden können.
          </dd>
          <dt><code>encoding</code> {{optional_inline}}</dt>
          <dd>
            String: Kodierung des Suchbegriffs, angegeben als eine
            <a
              href="https://www.iana.org/assignments/character-sets/character-sets.xhtml"
              >Standard-Zeichenkodierungsname</a
            >, wie "UTF-8".
          </dd>
          <dt><code>favicon_url</code> {{optional_inline}}</dt>
          <dd>
            String: URL, die auf ein Symbol für die Suchmaschine verweist. In Manifest V2,
            muss dies eine absolute HTTP- oder HTTPS-URL sein. In Manifest V3 muss dies
            auf ein Symbol verweisen, das innerhalb der Erweiterung als Pfad relativ zum
            Wurzelverzeichnis der Erweiterung bereitgestellt wird.
          </dd>
          <dt><code>image_url</code> {{optional_inline}}</dt>
          <dd>String: URL, die für die Bildersuche verwendet wird.</dd>
          <dt><code>image_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>image_url</code> gesendet werden.</dd>
          <dt><code>instant_url</code> {{optional_inline}}</dt>
          <dd>String: URL, die für die Sofortsuche verwendet wird.</dd>
          <dt><code>instant_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>instant_url</code> gesendet werden.</dd>
          <dt><code>keyword</code> {{optional_inline}}</dt>
          <dd>String: Schlüsselwort in der Adressleiste für die Suchmaschine.</dd>
          <dt><code>prepopulated_id</code> {{optional_inline}}</dt>
          <dd>Die ID einer integrierten Suchmaschine, die verwendet werden soll.</dd>
          <dt><code>search_url_get_params</code> {{optional_inline}}</dt>
          <dd>String: GET-Parameter, die an <code>search_url</code> gesendet werden. Nur in Firefox verfügbar, für optimale Kompatibilität mit anderen Browsern verwenden Sie stattdessen <code>search_url</code>.</dd>
          <dt><code>search_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>search_url</code> gesendet werden.</dd>
          <dt><code>suggest_url</code> {{optional_inline}}</dt>
          <dd>
            String: URL, die für Suchvorschläge verwendet wird. Dies muss eine HTTPS-URL sein.
          </dd>
          <dt><code>suggest_url_get_params</code> {{optional_inline}}</dt>
          <dd>String: GET-Parameter, die an <code>suggest_url</code> gesendet werden. Nur in Firefox verfügbar, für optimale Kompatibilität mit anderen Browsern verwenden Sie stattdessen <code>suggest_url</code>.</dd>
          <dt><code>suggest_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>suggest_url</code> gesendet werden.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

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
