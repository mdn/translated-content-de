---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
l10n:
  sourceCommit: dde3b68583059fd7b6a43f844d7960f0eea8e562
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Pflichtfeld</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
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

Manchmal möchten Sie Ressourcen – zum Beispiel Bilder, HTML, CSS oder JavaScript – mit Ihrer Erweiterung verpacken und sie Webseiten und anderen Erweiterungen verfügbar machen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf Ressourcen zugreifen, die in anderen Erweiterungen verpackt sind. Ab Firefox 105 müssen Erweiterungen, um den Zugriff auf die Ressourcen einer anderen Erweiterung zu ermöglichen, in diesem Schlüssel aufgenommen werden.

Zum Beispiel ersetzt die [Beastify Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite mit einem vom Benutzer ausgewählten Bild eines Monsters. Die Monsterbilder sind mit der Erweiterung verpackt. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Elemente hinzu, deren `src`-Attribut auf das Bild des Monsters zeigt. Damit die Webseite die Bilder laden kann, müssen sie webzugänglich gemacht werden.

Mit dem Schlüssel `web_accessible_resources` können Sie alle verpackten Ressourcen auflisten, die Sie Webseiten zur Verfügung stellen möchten. Sie geben sie als Pfade relativ zur manifest.json-Datei an.

Beachten Sie, dass Inhalts-Skripte nicht als webzugängliche Ressourcen aufgelistet werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z.B. HTTPS) auf eine Seite umzuleiten, die in der Erweiterung verpackt ist, muss die Erweiterung die Seite im Schlüssel `web_accessible_resources` auflisten.

### Syntax in Manifest V2

In Manifest V2 werden webzugängliche Ressourcen als Array unter dem Schlüssel hinzugefügt, so:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Syntax in Manifest V3

In Manifest V3 ist der Schlüssel `web_accessible_resources` ein Array von Objekten, so:

```json
{
  // …
  "web_accessible_resources": [
    {
      "resources": ["test1.png", "test2.png"],
      "matches": ["https://web-accessible-resources-1.example.com/*"]
    },
    {
      "resources": ["test3.png", "test4.png"],
      "matches": ["https://web-accessible-resources-2.example.com/*"],
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
        Optional. Standard ist <code>[]</code>, bedeutet, dass andere Erweiterungen nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen spezifizieren, die auf die Ressourcen zugreifen können.
        "*" passt auf alle Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standard ist <code>[]</code>, bedeutet, dass andere Websites nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL-<a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Muster</a>, die die Seiten spezifizieren, die auf die Ressourcen zugreifen können. Nur der Ursprung wird verwendet, um URLs abzugleichen. Allerdings:
        <ul>
          <li>In Firefox und Safari kann jeder Pfad einbezogen werden.</li>
          <li>In Chrome muss der Pfad auf <code>/*</code> gesetzt werden.</li>
        </ul>
        Ursprünge beinhalten Subdomain-Matching.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die offengelegt werden sollen. Ressourcen werden als Strings angegeben und können <code>*</code> für Platzhalter-Matches enthalten. Zum Beispiel exponiert <code>"/images/*"</code> alles im Verzeichnis <code>/images</code> der Erweiterung rekursiv, während <code>"*.png"</code> alle PNG-Dateien exponiert.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standard ist <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich sein sollen. Die dynamische ID wird pro Sitzung generiert und bei Neustart des Browsers oder Neuladen der Erweiterung regeneriert.
      </td>
    </tr>
  </tbody>
</table>

### Verwendung von web_accessible_resources

Angenommen, Ihre Erweiterung enthält eine Bilddatei unter `images/my-image.png`, so:

```plain
my-extension-files/
    manifest.json
    my-background-script.js
    images/
        my-image.png
```

Um einer Webseite die Verwendung eines [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Elements zu ermöglichen, dessen `src`-Attribut auf dieses Bild zeigt, würden Sie `web_accessible_resources` so spezifizieren:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann über eine URL verfügbar. Diese URL verwendet ein browser-spezifisches Schema:

- Chrome und auf Chromium-basierten Browsern verwenden `chrome-extension://`.
- Firefox verwendet `moz-extension://`.
- Safari verwendet `safari-web-extension://` (WebKit verwendet `webkit-extension://`).

Zum Beispiel nimmt die Ressourcen-URL in Firefox diese Form an:

```plain
moz-extension://<extension-UUID>/images/my-image.png
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird für jede Browserinstanz zufällig generiert. Dies verhindert, dass Websites einen Browser durch Überprüfung der installierten Erweiterungen erkennen.

> [!NOTE]
> In Chrome in Manifest V2 ist die ID einer Erweiterung festgelegt. Wenn eine Ressource in `web_accessible_resources` aufgelistet ist, ist sie als `chrome-extension://<your-extension-id>/<path/to/resource>` zugängig. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Ansatz, um die URL der Ressource zu erhalten, besteht darin, [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) zu verwenden und den Pfad relativ zur manifest.json zu übergeben, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz gibt Ihnen die korrekte URL, unabhängig davon, auf welchem Browser Ihre Erweiterung läuft.

In Chrome kann eine statische CSS-Datei die Nachricht `@@extension_id` verwenden, um eine URL für eine Erweiterungsressource zu erstellen:

```css
body {
  background-image: url("chrome-extension://__MSG_@@extension_id__/images/my-image.png");
}
```

### Platzhalter

Einträge in `web_accessible_resources` können Platzhalter enthalten. Zum Beispiel würde der folgende Eintrag auch funktionieren, um die Ressource unter "images/my-image.png" einzubeziehen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webzugänglich machen, kann jede Website auf diese Seite verlinken oder sie umleiten. Die Seite sollte dann alle Eingaben (z. B. POST-Daten) so behandeln, als kämen sie aus einer nicht vertrauenswürdigen Quelle, genau wie eine normale Webseite.

Webzugängliche Erweiterungsressourcen werden nicht von [CORS](/de/docs/Web/HTTP/Guides/CORS) oder [CSP](/de/docs/Web/HTTP/Guides/CSP) blockiert. Aufgrund dieser Fähigkeit, Sicherheitsüberprüfungen zu umgehen, sollten Erweiterungen die Verwendung von webzugänglichen Skripten nach Möglichkeit vermeiden. Ein webzugängliches Erweiterungsskript kann unerwartet von bösartigen Websites missbraucht werden, um die Sicherheit anderer Websites zu schwächen. Befolgen Sie die [Sicherheitsbest Practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die injektion von moz-extension:-URLs in Webseiten vermeiden und sicherstellen, dass Drittanbieterbibliotheken auf dem neuesten Stand sind.

## Beispiel

### Manifest V2 Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei unter "images/my-image.png" webzugänglich für jede Website und Erweiterung.

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

Machen Sie die Datei unter "images/my-image.png" webzugänglich für jede Website und Erweiterung.

Es wird empfohlen, `extension_ids` oder `matches` nur anzugeben, wenn erforderlich. Zum Beispiel, wenn die Ressource nur für Webseiten unter example.com zugänglich sein muss:

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
