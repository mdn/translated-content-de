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
      <th scope="row">Verpflichtend</th>
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

Manchmal möchten Sie Ressourcen wie Bilder, HTML, CSS oder JavaScript mit Ihrer Erweiterung verpacken und für Webseiten und andere Erweiterungen zugänglich machen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf in anderen Erweiterungen verpackte Ressourcen zugreifen. Ab Firefox 105 müssen die Ressourcen, um von anderen Erweiterungen zugänglich gemacht zu werden, in diesem Schlüssel aufgeführt werden.

Zum Beispiel ersetzt die [Beastify-Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite durch ein vom Benutzer ausgewähltes Bild eines Biests. Die Biest-Bilder sind in der Erweiterung verpackt. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Element/img)-Elemente hinzu, deren `src`-Attribut auf das Bild des Biests verweist. Damit die Webseite die Bilder laden kann, müssen sie webzugänglich gemacht werden.

Mit dem Schlüssel `web_accessible_resources` listen Sie alle verpackten Ressourcen auf, die Sie für Webseiten verfügbar machen möchten. Sie geben diese als Pfade relativ zur manifest.json-Datei an.

Beachten Sie, dass Inhaltsskripte nicht als webzugängliche Ressourcen aufgeführt werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z. B. HTTPS) auf eine in der Erweiterung verpackte Seite umzuleiten, muss die Erweiterung die Seite im Schlüssel `web_accessible_resources` auflisten.

### Manifest V2 Syntax

In Manifest V2 werden webzugängliche Ressourcen als Array unter dem Schlüssel hinzugefügt, wie folgt:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Manifest V3 Syntax

In Manifest V3 ist der Schlüssel `web_accessible_resources` ein Array von Objekten, wie folgt:

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

Jedes Objekt muss eine `"resources"`-Eigenschaft und entweder eine `"matches"`- oder eine `"extension_ids"`-Eigenschaft aus den folgenden Eigenschaften enthalten:

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
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Erweiterungen nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen angeben, die auf die Ressourcen zugreifen können. "*" entspricht allen Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Webseiten nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL-<a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Übereinstimmungsmustern</a>, die die Seiten angeben, die auf die Ressourcen zugreifen können. Es wird nur der Ursprung verwendet, um URLs abzugleichen. Ursprünge beinhalten die Übereinstimmung von Subdomains. Pfade müssen auf <code>/*</code> gesetzt werden.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die einsehbar gemacht werden sollen. Ressourcen werden als Strings angegeben und können <code>*</code> für Platzhalterabgleiche enthalten. Zum Beispiel exposes <code>"/images/*"</code> alles im Verzeichnis <code>/images</code> der Erweiterung rekursiv, während <code>"*.png"</code> alle PNG-Dateien freigibt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standardmäßig <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich sein sollen. Die dynamische ID wird pro Sitzung generiert und bei einem Browserneustart oder Neustart der Erweiterung neu erstellt.
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

Um einer Webseite die Verwendung eines [`<img>`](/de/docs/Web/HTML/Element/img)-Elements zu ermöglichen, dessen `src`-Attribut auf dieses Bild verweist, würden Sie `web_accessible_resources` wie folgt angeben:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann über eine URL wie diese verfügbar:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird für jede Instanz des Browsers zufällig generiert. Dies verhindert, dass Webseiten den Browser durch Abfragen der installierten Erweiterungen identifizieren können.

> [!NOTE]
> In Chrome in Manifest V2 ist die ID einer Erweiterung fest. Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie als `chrome-extension://<your-extension-id>/<path/to/resource>` zugänglich. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Weg, um die URL der Ressource zu erhalten, ist die Verwendung von [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) und Übergabe des Pfads relativ zu manifest.json, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz gibt Ihnen die korrekte URL unabhängig davon, in welchem Browser Ihre Erweiterung ausgeführt wird.

### Platzhalter

Einträge in `web_accessible_resources` können Platzhalter enthalten. Zum Beispiel würde der folgende Eintrag auch funktionieren, um die Ressource unter "images/my-image.png" zu umfassen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webzugänglich machen, kann jede Webseite auf diese Seite verlinken oder zu dieser Seite umleiten. Die Seite sollte dann jede Eingabe (z. B. POST-Daten) so behandeln, als käme sie von einer nicht vertrauenswürdigen Quelle, genauso wie es eine normale Webseite sollte.

Webzugängliche Erweiterungsressourcen werden nicht durch [CORS](/de/docs/Web/HTTP/CORS) oder [CSP](/de/docs/Web/HTTP/CSP) blockiert. Aufgrund dieser Fähigkeit, Sicherheitsprüfungen zu umgehen, sollten Erweiterungen, wenn möglich, die Verwendung von webzugänglichen Skripten vermeiden. Ein webzugängliches Erweiterungsskript kann unerwartet von bösartigen Webseiten missbraucht werden, um die Sicherheit anderer Webseiten zu schwächen. Befolgen Sie die [Sicherheitsbest practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die Injektion von moz-extension:-URLs in Webseiten vermeiden und sicherstellen, dass Drittanbieter-Bibliotheken auf dem neuesten Stand sind.

## Beispiel

### Manifest V2 Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei unter "images/my-image.png" für jede Webseite und Erweiterung webzugänglich.

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

Machen Sie die Datei unter "images/my-image.png" für jede Webseite und Erweiterung webzugänglich.

Es wird empfohlen, `extension_ids` oder `matches` nur bei Bedarf anzugeben.
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

<!-- Idealerweise würden wir die WebExtExamples-Vorlage verwenden, aber die Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
