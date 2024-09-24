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
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
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

Manchmal möchten Sie Ressourcen wie Bilder, HTML, CSS oder JavaScript mit Ihrer Erweiterung bündeln und sie Webseiten und anderen Erweiterungen zugänglich machen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf Ressourcen zugreifen, die in anderen Erweiterungen gebündelt waren. Ab Firefox 105 müssen die Ressourcen einer Erweiterung in diesem Schlüssel enthalten sein, damit andere Erweiterungen darauf zugreifen können.

Zum Beispiel ersetzt die [Beastify-Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite durch ein Bild eines vom Benutzer ausgewählten Fabelwesens. Die Fabelwesen-Bilder sind mit der Erweiterung gebündelt. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Element/img) Elemente hinzu, deren `src` Attribut auf das Bild des Fabelwesens zeigt. Damit die Webseite die Bilder laden kann, müssen sie webbasiert zugänglich gemacht werden.

Mit dem Schlüssel `web_accessible_resources` listen Sie alle gebündelten Ressourcen auf, die Sie für Webseiten verfügbar machen möchten. Diese sind relativ zur manifest.json-Datei anzugeben.

Beachten Sie, dass Inhalts-Skripte nicht als webbasiert zugängliche Ressourcen aufgeführt werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z. B. HTTPS) zu einer Seite umzuleiten, die in der Erweiterung gepackt ist, muss die Erweiterung die Seite im Schlüssel `web_accessible_resources` auflisten.

### Manifest V2 Syntax

Im Manifest V2 werden webbasierte zugängliche Ressourcen als Array unter dem Schlüssel hinzugefügt, so:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Manifest V3 Syntax

Im Manifest V3 ist der Schlüssel `web_accessible_resources` ein Array von Objekten wie folgt:

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

Jedes Objekt muss eine `"resources"` Eigenschaft und entweder eine `"matches"` oder `"extension_ids"` Eigenschaft aus den folgenden Eigenschaften enthalten:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
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
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Erweiterungen nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen angeben, die auf die Ressourcen zugreifen können.
        "*" entspricht allen Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Webseiten nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Muster</a>, die die Seiten angeben, die auf die Ressourcen zugreifen können. Nur der Ursprung wird verwendet, um URLs abzugleichen. Ursprünge beinhalten Subdomain-Abgleich. Pfade müssen auf <code>/*</code> gesetzt sein.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die offengelegt werden sollen. Ressourcen sind als Strings angegeben und können <code>*</code> zur Platzhalterpassung enthalten. Beispielsweise legt <code>"/images/*"</code> alles im Verzeichnis der Erweiterung <code>/images</code> rekursiv offen, während <code>"*.png"</code> alle PNG-Dateien freigibt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standardmäßig <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich gemacht werden sollen. Die dynamische ID wird pro Sitzung generiert und bei Browser-Neustart oder Erweiterungs-Neuladen neu generiert.
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

Um eine Webseite zu ermöglichen, ein [`<img>`](/de/docs/Web/HTML/Element/img) Element zu verwenden, dessen `src` Attribut auf dieses Bild zeigt, würden Sie `web_accessible_resources` wie folgt angeben:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann mit einer URL wie dieser verfügbar:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird für jede Browser-Instanz zufällig generiert. Dies verhindert, dass Webseiten einen Browser durch Prüfung der installierten Erweiterungen fingerabdrücken.

> [!NOTE]
> In Chrome im Manifest V2 ist die ID einer Erweiterung fest. Wenn eine Ressource in `web_accessible_resources` aufgeführt wird, ist sie zugänglich als `chrome-extension://<your-extension-id>/<path/to/resource>`. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Ansatz, um die URL der Ressource zu erhalten, ist die Verwendung von [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL), wobei der Pfad relativ zur manifest.json angegeben wird, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// etwas wie:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz gibt Ihnen die korrekte URL, unabhängig davon, auf welchem Browser Ihre Erweiterung ausgeführt wird.

### Platzhalter

Einträge in `web_accessible_resources` können Platzhalter enthalten. Zum Beispiel würde der folgende Eintrag ebenfalls funktionieren, um die Ressource bei "images/my-image.png" einzuschließen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webbasiert zugänglich machen, kann jede Website auf diese Seite verlinken oder zu ihr umleiten. Die Seite sollte dann jeden Input (zum Beispiel POST-Daten) so behandeln, als käme er von einer nicht vertrauenswürdigen Quelle, genauso wie eine normale Webseite.

Webbasiert zugängliche Erweiterungsressourcen werden nicht durch [CORS](/de/docs/Web/HTTP/CORS) oder [CSP](/de/docs/Web/HTTP/CSP) blockiert. Aufgrund dieser Fähigkeit, Sicherheitsprüfungen zu umgehen, sollten Erweiterungen nach Möglichkeit vermeiden, webbasiert zugängliche Skripte zu verwenden. Ein webbasiert zugängliches Erweiterungsskript kann unerwartet von böswilligen Webseiten missbraucht werden, um die Sicherheit anderer Webseiten zu schwächen. Befolgen Sie die [Sicherheitsbest practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die Injektion von moz-extension:-URLs in Webseiten vermeiden und sicherstellen, dass Bibliotheken von Drittanbietern aktuell sind.

## Beispiel

### Manifest V2 Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Macht die Datei bei "images/my-image.png" webbasiert zugänglich für jede Webseite und Erweiterung.

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

Macht die Datei bei "images/my-image.png" webbasiert zugänglich für jede Webseite und Erweiterung.

Es wird empfohlen, `extension_ids` oder `matches` nur anzugeben, wenn es notwendig ist.
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

<!-- Ideal wäre die Verwendung der WebExtExamples-Vorlage, aber Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
