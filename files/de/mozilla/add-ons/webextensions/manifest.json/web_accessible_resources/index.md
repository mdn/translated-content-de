---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
l10n:
  sourceCommit: 72d51eab0cf7140e7edcca663fe24fae1a4166f8
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

Manchmal möchten Sie Ressourcen – zum Beispiel Bilder, HTML, CSS oder JavaScript – mit Ihrer Erweiterung verpacken und sie Webseiten und anderen Erweiterungen zur Verfügung stellen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf Ressourcen zugreifen, die in anderen Erweiterungen verpackt sind. Ab Firefox 105 müssen Sie diese Ressourcen in diesem Schlüssel einfügen, damit andere Erweiterungen darauf zugreifen können.

Zum Beispiel ersetzt die [Beastify Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite mit einem vom Benutzer ausgewählten Bild eines Monsters. Die Monsterbilder werden mit der Erweiterung verpackt. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Elemente hinzu, deren `src`-Attribut auf das Bild des Monsters zeigt. Damit die Webseite die Bilder laden kann, müssen sie zugänglich gemacht werden.

Mit dem `web_accessible_resources`-Schlüssel listen Sie alle verpackten Ressourcen auf, die Sie Webseiten verfügbar machen möchten. Sie geben sie als Pfade relativ zur manifest.json-Datei an.

Beachten Sie, dass Inhalts-Skripte nicht als webzugängliche Ressourcen gelistet werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z. B. HTTPS) auf eine in der Erweiterung verpackte Seite umzuleiten, dann muss die Erweiterung die Seite im `web_accessible_resources`-Schlüssel auflisten.

### Manifest V2 Syntax

Im Manifest V2 werden webzugängliche Ressourcen als Array unter dem Schlüssel hinzugefügt, wie folgt:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Manifest V3 Syntax

Im Manifest V3 ist der `web_accessible_resources`-Schlüssel ein Array von Objekten, wie folgt:

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
        Optional. Standard ist <code>[]</code>, was bedeutet, dass andere Erweiterungen nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen angeben, die auf die Ressourcen zugreifen können.
        "*" erlaubt den Zugriff für alle Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standard ist <code>[]</code>, was bedeutet, dass andere Webseiten nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL-<a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Muster-Übereinstimmungen</a>, die die Seiten angeben, die auf die Ressourcen zugreifen können. Nur der Ursprung wird verwendet, um URLs zu vergleichen. Jedoch:
        <ul>
          <li>In Firefox und Safari kann jeder Pfad enthalten sein.</li>
          <li>In Chrome muss der Pfad auf <code>/*</code> gesetzt werden.</li>
        </ul>
        Ursprünge umfassen die Übereinstimmung von Subdomains.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die freigegeben werden sollen. Ressourcen werden als Zeichenketten angegeben und können <code>*</code> für Platzhalter-Übereinstimmungen enthalten. Zum Beispiel gibt <code>"/images/*"</code> alles im Verzeichnis <code>/images</code> der Erweiterung rekursiv frei, während <code>"*.png"</code> alle PNG-Dateien freigibt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standard ist <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich sein sollen. Die dynamische ID wird für jede Sitzung generiert und bei Browser-Neustart oder Erweiterungs-Neuladen neu erstellt.
      </td>
    </tr>
  </tbody>
</table>

### Verwendung von web_accessible_resources

Angenommen, Ihre Erweiterung enthält eine Bilddatei in `images/my-image.png`, wie folgt:

```plain
my-extension-files/
    manifest.json
    my-background-script.js
    images/
        my-image.png
```

Um einer Webseite zu ermöglichen, ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element zu verwenden, dessen `src`-Attribut auf dieses Bild zeigt, würden Sie `web_accessible_resources` wie folgt angeben:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann unter Verwendung einer URL wie dieser verfügbar:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird für jede Browser-Instanz zufällig generiert. Dies verhindert, dass Webseiten einen Browser durch das Prüfen der installierten Erweiterungen identifizieren können.

> [!NOTE]
> In Chrome in Manifest V2 ist die ID einer Erweiterung fest. Wenn eine Ressource in `web_accessible_resources` aufgelistet ist, ist sie als `chrome-extension://<your-extension-id>/<path/to/resource>` zugänglich. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Ansatz, um die URL der Ressource zu erhalten, ist die Verwendung von [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) unter Angabe des Pfads relativ zur manifest.json, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz gibt Ihnen die korrekte URL, unabhängig davon, auf welchem Browser Ihre Erweiterung ausgeführt wird.

### Platzhalter

`web_accessible_resources`-Einträge können Platzhalter enthalten. Zum Beispiel würde der folgende Eintrag ebenfalls funktionieren, um die Ressource bei "images/my-image.png" einzuschließen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite web zugänglich machen, kann jede Webseite auf diese Seite verweisen oder umleiten. Die Seite sollte dann jede Eingabe (zum Beispiel POST-Daten) behandeln, als käme sie von einer nicht vertrauenswürdigen Quelle, genau wie eine normale Webseite.

Webzugängliche Erweiterungsressourcen werden nicht von [CORS](/de/docs/Web/HTTP/Guides/CORS) oder [CSP](/de/docs/Web/HTTP/Guides/CSP) blockiert. Aufgrund dieser Möglichkeit, Sicherheitsprüfungen zu umgehen, sollten Erweiterungen möglichst vermeiden, webzugängliche Skripte zu verwenden. Ein webzugängliches Erweiterungsskript kann unerwartet von bösartigen Webseiten missbraucht werden, um die Sicherheit anderer Webseiten zu schwächen. Befolgen Sie die [Sicherheitsrichtlinien](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die Injektion von moz-extension:-URLs in Webseiten vermeiden und sicherstellen, dass Drittanbieter-Bibliotheken auf dem neuesten Stand sind.

## Beispiel

### Manifest V2 Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei bei "images/my-image.png" webbasiert für jede Webseite und Erweiterung zugänglich.

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

Machen Sie die Datei bei "images/my-image.png" webbasiert für jede Webseite und Erweiterung zugänglich.

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

- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
