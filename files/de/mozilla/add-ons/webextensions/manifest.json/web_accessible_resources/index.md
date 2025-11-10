---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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

Manchmal möchten Sie Ressourcen wie Bilder, HTML, CSS oder JavaScript mit Ihrer Erweiterung paketieren und sie für Webseiten und andere Erweiterungen verfügbar machen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf in anderen Erweiterungen gepackte Ressourcen zugreifen. Ab Firefox 105 müssen, um anderen Erweiterungen den Zugriff auf die Ressourcen einer Erweiterung zu ermöglichen, diese in diesem Schlüssel enthalten sein.

Zum Beispiel ersetzt die [Beastify-Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite durch ein vom Benutzer ausgewähltes Bild einer Bestie. Die Bestienbilder sind mit der Erweiterung gepackt. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Elemente hinzu, deren `src`-Attribut auf das Bild der Bestie verweist. Damit die Webseite die Bilder laden kann, müssen sie webzugänglich gemacht werden.

Mit dem Schlüssel `web_accessible_resources` listen Sie alle gepackten Ressourcen auf, die Sie für Webseiten verfügbar machen möchten. Sie geben sie als Pfade relativ zur manifest.json-Datei an.

Beachten Sie, dass Inhalts-Skripte nicht als webzugängliche Ressourcen aufgeführt werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z.B. HTTPS) auf eine Seite umzuleiten, die in der Erweiterung gepackt ist, muss die Erweiterung die Seite im Schlüssel `web_accessible_resources` auflisten.

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
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Erweiterungen nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen spezifizieren, die auf die Ressourcen zugreifen können.
        "*" stimmt mit allen Erweiterungen überein.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Webseiten nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL-<a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Musterübereinstimmungen</a>, die die Seiten spezifizieren, die auf die Ressourcen zugreifen können. Nur der Ursprung wird verwendet, um URLs abzugleichen. Allerdings:
        <ul>
          <li>In Firefox und Safari kann jeder Pfad enthalten sein.</li>
          <li>In Chrome muss der Pfad auf <code>/*</code> gesetzt werden.</li>
        </ul>
        Ursprünge beinhalten Subdomain-Übereinstimmungen.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die offengelegt werden sollen. Ressourcen werden als Zeichenketten spezifiziert und können <code>*</code> für Platzhalter-Matches enthalten. Zum Beispiel macht <code>"/images/*"</code> alles im <code>/images</code>-Verzeichnis der Erweiterung rekursiv verfügbar, während <code>"*.png"</code> alle PNG-Dateien freigibt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standardmäßig <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich sein sollen. Die dynamische ID wird pro Sitzung generiert und bei einem Browser-Neustart oder einer Erweiterungs-Neuinstallation neu erstellt.
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

Um einer Webseite die Verwendung eines [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Elements zu ermöglichen, dessen `src`-Attribut auf dieses Bild verweist, würden Sie `web_accessible_resources` wie folgt spezifizieren:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann über eine URL wie folgt verfügbar:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird für jede Browser-Instanz zufällig generiert. Dies verhindert, dass Webseiten einen Browser durch Untersuchung der installierten Erweiterungen fingerabdrücken.

> [!NOTE]
> In Chrome mit Manifest V2 ist die ID einer Erweiterung festgelegt. Wenn eine Ressource in `web_accessible_resources` aufgelistet ist, ist sie zugänglich als `chrome-extension://<your-extension-id>/<path/to/resource>`. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Die empfohlene Methode, die URL der Ressource zu erhalten, besteht darin, [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) zu verwenden, wobei der Pfad relativ zu manifest.json übergeben wird, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz liefert Ihnen die korrekte URL, unabhängig davon, auf welchem Browser Ihre Erweiterung läuft.

### Platzhalter

`web_accessible_resources`-Einträge können Platzhalter enthalten. Zum Beispiel würde der folgende Eintrag ebenfalls funktionieren, um die Ressource bei "images/my-image.png" zu einzuschließen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webzugänglich machen, kann jede Webseite auf diese Seite verlinken oder umleiten. Die Seite sollte dann jede Eingabe (z.B. POST-Daten) so behandeln, als kämen sie aus einer nicht vertrauenswürdigen Quelle, genau wie eine normale Webseite es tun sollte.

Webzugängliche Erweiterungsressourcen werden nicht durch [CORS](/de/docs/Web/HTTP/Guides/CORS) oder [CSP](/de/docs/Web/HTTP/Guides/CSP) blockiert. Aufgrund dieser Fähigkeit, Sicherheitsprüfungen zu umgehen, sollten Erweiterungen vermeiden, webzugängliche Skripte zu verwenden, wenn möglich. Ein webzugängliches Erweiterungsskript kann unerwartet von bösartigen Webseiten missbraucht werden, um die Sicherheit anderer Webseiten zu schwächen. Befolgen Sie die [Sicherheitsbest-Praktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die Einspeisung von moz-extension:-URLs in Webseiten vermeiden und sicherstellen, dass Drittanbieter-Bibliotheken auf dem neuesten Stand sind.

## Beispiel

### Manifest V2 Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei bei "images/my-image.png" webzugänglich für jede Webseite und Erweiterung.

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

Machen Sie die Datei bei "images/my-image.png" webzugänglich für jede Webseite und Erweiterung.

Es wird empfohlen, `extension_ids` oder `matches` nur anzugeben, wenn erforderlich. Zum Beispiel, wenn die Ressource nur für Webseiten bei example.com zugänglich sein muss:

```json
"web_accessible_resources": [
  {
    "resources": [ "images/my-image.png" ],
    "matches": [ "https://example.com/*" ]
  }
]
```

## Beispielerweiterungen

<!-- Ideally we'd use the WebExtExamples template, but examples are not categorized by manifest keys yet - https://github.com/mdn/webextensions-examples/issues/524 -->

- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
