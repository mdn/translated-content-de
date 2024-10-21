---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

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
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"web_accessible_resources": [
  "images/my-image.png"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## Beschreibung

Manchmal möchten Sie Ressourcen wie Bilder, HTML, CSS oder JavaScript mit Ihrer Erweiterung packen und sie Webseiten und anderen Erweiterungen zur Verfügung stellen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf Ressourcen zugreifen, die in anderen Erweiterungen verpackt waren. Ab Firefox 105 müssen die Ressourcen in diesem Schlüssel enthalten sein, damit andere Erweiterungen darauf zugreifen können.

Zum Beispiel ersetzt die [Beastify-Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite mit einem Bild eines vom Benutzer ausgewählten Tieres. Die Tierbilder sind mit der Erweiterung verpackt. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Element/img)-Elemente hinzu, deren `src`-Attribut auf das Bild des Tieres zeigt. Damit die Webseite die Bilder laden kann, müssen sie webbasiert zugänglich gemacht werden.

Mit dem `web_accessible_resources`-Schlüssel listen Sie alle verpackten Ressourcen auf, die Sie Webseiten zur Verfügung stellen möchten. Sie geben sie als Pfade relativ zur manifest.json-Datei an.

Beachten Sie, dass Inhalts-Skripte nicht als webbasiert zugängliche Ressourcen aufgeführt werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z.B. HTTPS) auf eine Seite umzuleiten, die in der Erweiterung verpackt ist, muss die Seite im `web_accessible_resources`-Schlüssel aufgeführt sein.

### Manifest V2-Syntax

In Manifest V2 werden webbasierte Ressourcen als Array unter dem Schlüssel hinzugefügt, wie folgt:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Manifest V3-Syntax

In Manifest V3 ist der `web_accessible_resources`-Schlüssel ein Array von Objekten, wie folgt:

```json
{
  // …
  "web_accessible_resources": [
    {
      "resources": ["test1.png", "test2.png"],
      "matches": ["https://web-accessible-resources-1.glitch.me/*"]
    },
    {
      "resources": ["test3.png", "test4.png"],
      "matches": ["https://web-accessible-resources-2.glitch.me/*"],
      "use_dynamic_url": true
    }
  ]
  // …
}
```

Jedes Objekt muss eine `"resources"`-Eigenschaft und entweder eine `"matches"`- oder `"extension_ids"`-Eigenschaft aus den folgenden Eigenschaften enthalten:

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
      <td>
        <code>extension_ids</code>
      </td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardwert ist <code>[]</code>, was bedeutet, dass andere Erweiterungen nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen angeben, die auf die Ressourcen zugreifen können.
        "*" entspricht allen Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardwert ist <code>[]</code>, was bedeutet, dass andere Webseiten nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL-<a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Übereinstimmungsmustern</a>, die die Seiten angeben, die auf die Ressourcen zugreifen können. Es wird nur der Ursprung verwendet, um URLs abzugleichen. Ursprünge schließen Subdomain-Abgleich ein. Pfade müssen auf <code>/*</code> gesetzt werden.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die offengelegt werden sollen. Ressourcen werden als Zeichenfolgen angegeben und können <code>*</code> für Platzhalter-Matches enthalten. Zum Beispiel, <code>"/images/*"</code> macht alles im <code>/images</code>-Verzeichnis der Erweiterung rekursiv zugänglich, während <code>"*.png"</code> alle PNG-Dateien freigibt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standardwert ist <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich sein sollen. Die dynamische ID wird pro Sitzung generiert und wird beim Neustart des Browsers oder beim Neuladen der Erweiterung neu generiert.
      </td>
    </tr>
  </tbody>
</table>

### Verwendung von web_accessible_resources

Angenommen, Ihre Erweiterung enthält eine Bilddatei unter `images/my-image.png`, wie folgt:

```plain
my-extension-files/
    manifest.json
    my-background-script.js
    images/
        my-image.png
```

Um einer Webseite die Verwendung eines [`<img>`](/de/docs/Web/HTML/Element/img)-Elements zu ermöglichen, dessen `src`-Attribut auf dieses Bild zeigt, würden Sie `web_accessible_resources` wie folgt spezifizieren:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann über eine URL verfügbar wie:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird zufällig für jede Instanz des Browsers generiert. Dies verhindert, dass Websites den Browser durch Überprüfung der installierten Erweiterungen identifizieren.

> [!NOTE]
> In Chrome bei Manifest V2 ist die ID einer Erweiterung festgelegt. Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie als `chrome-extension://<your-extension-id>/<path/to/resource>` zugänglich. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Ansatz, um die URL der Ressource zu erhalten, ist die Verwendung von [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) mit dem Pfad relativ zur manifest.json, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz liefert Ihnen die korrekte URL, unabhängig davon, in welchem Browser Ihre Erweiterung ausgeführt wird.

### Platzhalter

Einträge von `web_accessible_resources` können Platzhalter enthalten. Zum Beispiel würde der folgende Eintrag genauso funktionieren, um die Ressource bei "images/my-image.png" einzuschließen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webbasiert zugänglich machen, kann jede Website auf diese Seite verlinken oder umleiten. Die Seite sollte dann Eingaben (z.B. POST-Daten) so behandeln, als kämen sie von einer nicht vertrauenswürdigen Quelle, so wie es eine normale Webseite tun sollte.

Webbasierte Erweiterungsressourcen werden nicht durch [CORS](/de/docs/Web/HTTP/CORS) oder [CSP](/de/docs/Web/HTTP/CSP) blockiert. Aufgrund dieser Fähigkeit zur Umgehung von Sicherheitsüberprüfungen sollten Erweiterungen die Verwendung von webbasierten Skripten möglichst vermeiden. Ein webbasiertes Erweiterungsskript kann unerwartet von böswilligen Websites missbraucht werden, um die Sicherheit anderer Webseiten zu schwächen. Befolgen Sie die [Sicherheitsbest-Praktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die Einspeisung von moz-extension:-URLs in Webseiten vermeiden und sicherstellen, dass Drittanbieter-Bibliotheken auf dem neuesten Stand sind.

## Beispiel

### Manifest V2 Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei bei "images/my-image.png" webbasiert zugänglich für jede Website und Erweiterung.

### Manifest V3 Beispiel

```json
"web_accessible_resources": [
  {
    "resources": [ "images/my-image.png" ],
    "extension_ids": ["*"],
    "matches": [ "*://*/*" ]
  }
]
```

Machen Sie die Datei bei "images/my-image.png" webbasiert zugänglich für jede Website und Erweiterung.

Es wird empfohlen, `extension_ids` oder `matches` nur anzugeben, wenn erforderlich.
Zum Beispiel, wenn die Ressource nur für Webseiten bei example.com zugänglich sein muss:

```json
"web_accessible_resources": [
  {
    "resources": [ "images/my-image.png" ],
    "matches": [ "https://example.com/*" ]
  }
]
```

## Beispielerweiterungen

- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
