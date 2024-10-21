---
title: chrome_settings_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
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
        <p>Definiert die Seite, die als Startseite des Browsers verwendet wird.</p>
        <p>Der Ersatz wird als URL angegeben. Die URL kann:</p>
        <ul>
          <li>
            auf eine mit der Erweiterung gebündelte Datei verweisen, in diesem Fall wird sie
            als eine URL relativ zur Datei manifest.json angegeben
          </li>
          <li>eine Remote-URL sein, wie zum Beispiel "https://developer.mozilla.org/".</li>
        </ul>
        <p>
          Wenn zwei oder mehr Erweiterungen diesen Wert setzen, hat die Einstellung
          der zuletzt installierten Vorrang.
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
          Der Suchanbieter hat einen Namen und eine primäre Such-URL. Es können alternative
          URLs bereitgestellt werden, einschließlich URLs für spezialisiertere Suchen wie die Bildersuche. In der von Ihnen
          angegebenen URL verwenden Sie "<code>{searchTerms}</code>", um den Suchbegriff in die
          URL zu interpolieren, wie:
          <code>https://www.discogs.com/search/?q={searchTerms}</code>. Sie können
          auch POST-Parameter angeben, die mit der Suche gesendet werden sollen.
        </p>
        <p>
          Der Suchanbieter wird dem Benutzer neben den integrierten Anbietern angezeigt. Wenn Sie die
          Eigenschaft <code>is_default</code> einfügen und auf <code>true</code> setzen, wird der
          neue Suchanbieter die Standardoption sein. Durch Angabe der
          <code>keyword</code>-Eigenschaft ermöglichen Sie dem Benutzer, Ihren
          Suchanbieter auszuwählen, indem er das Schlüsselwort vor dem Suchbegriff in die
          Such-/Adressleiste eingibt.
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
            String: Von der Suchmaschine verwendete URL. Dies muss eine HTTPS-URL sein.
          </dd>
          <dt><code>is_default</code> {{optional_inline}}</dt>
          <dd>
            Boolean: True, wenn die Suchmaschine die Standardwahl sein soll. In
            Firefox ist dies eine Opt-In Funktion und der Benutzer wird nur beim ersten
            Mal gefragt, wenn die Erweiterung installiert wird. Sie werden nicht erneut gefragt,
            wenn später eine Suchmaschine hinzugefügt wird.
          </dd>
          <dt><code>alternate_urls</code> {{optional_inline}}</dt>
          <dd>
            Array von Strings: Ein Array alternativer URLs, die
            anstelle der <code>search_url</code> verwendet werden können.
          </dd>
          <dt><code>encoding</code> {{optional_inline}}</dt>
          <dd>
            String: Kodierung des Suchbegriffs, angegeben als ein
            <a
              href="https://www.iana.org/assignments/character-sets/character-sets.xhtml"
              >Standard-Zeichencodierungsname</a
            >, wie zum Beispiel "UTF-8".
          </dd>
          <dt><code>favicon_url</code> {{optional_inline}}</dt>
          <dd>
            String: URL, die auf ein Symbol für die Suchmaschine verweist. In Manifest V2,
            muss dies eine absolute HTTP- oder HTTPS-URL sein. In Manifest V3 muss
            dies auf ein Symbol verweisen, das in der Erweiterung als Pfad relativ zum
            Stammverzeichnis der Erweiterung bereitgestellt wird.
          </dd>
          <dt><code>image_url</code> {{optional_inline}}</dt>
          <dd>String: Für die Bildsuche verwendete URL.</dd>
          <dt><code>image_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>image_url</code> gesendet werden.</dd>
          <dt><code>instant_url</code> {{optional_inline}}</dt>
          <dd>String: Für die Sofortsuche verwendete URL.</dd>
          <dt><code>instant_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>instant_url</code> gesendet werden.</dd>
          <dt><code>keyword</code> {{optional_inline}}</dt>
          <dd>String: Adressleisten-Schlüsselwort für die Suchmaschine.</dd>
          <dt><code>prepopulated_id</code> {{optional_inline}}</dt>
          <dd>Die ID einer integrierten Suchmaschine, die verwendet werden soll.</dd>
          <dt><code>search_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>search_url</code> gesendet werden.</dd>
          <dt><code>suggest_url</code> {{optional_inline}}</dt>
          <dd>
            String: Für Suchvorschläge verwendete URL. Dies muss eine HTTPS-URL sein.
          </dd>
          <dt><code>suggest_url_post_params</code> {{optional_inline}}</dt>
          <dd>String: POST-Parameter, die an <code>suggest_url</code> gesendet werden.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

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
