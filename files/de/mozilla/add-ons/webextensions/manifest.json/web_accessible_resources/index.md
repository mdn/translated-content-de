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
      <th scope="row">Pflicht</th>
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

Manchmal möchten Sie Ressourcen wie Bilder, HTML, CSS oder JavaScript mit Ihrer Erweiterung bündeln und sie für Webseiten und andere Erweiterungen verfügbar machen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf Ressourcen zugreifen, die in anderen Erweiterungen gebündelt sind. Ab Firefox 105 müssen Ressourcen, auf die andere Erweiterungen zugreifen können sollen, in diesem Schlüssel enthalten sein.

Zum Beispiel ersetzt die [Beispiel-Erweiterung Beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite mit einem Bild eines Kreaturs, das vom Benutzer ausgewählt wird. Die Kreaturbilder sind mit der Erweiterung gebündelt. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Element/img)-Elemente hinzu, deren `src`-Attribut auf das Bild der Kreatur zeigt. Damit die Webseite die Bilder laden kann, müssen sie webfähig gemacht werden.

Mit dem Schlüssel `web_accessible_resources` listen Sie alle gebündelten Ressourcen auf, die Sie für Webseiten zugänglich machen möchten. Sie geben sie als Pfade relativ zur manifest.json Datei an.

Beachten Sie, dass Inhalts-Skripte nicht als webfähige Ressourcen aufgelistet werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z. B. HTTPS) zu einer Seite umzuleiten, die in der Erweiterung verpackt ist, muss die Erweiterung die Seite im Schlüssel `web_accessible_resources` auflisten.

### Manifest V2 Syntax

Im Manifest V2 werden webfähige Ressourcen als Array unter dem Schlüssel hinzugefügt, wie hier:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Manifest V3 Syntax

Im Manifest V3 ist der Schlüssel `web_accessible_resources` ein Array von Objekten, wie folgt:

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
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Erweiterungen nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen spezifizieren, die auf die Ressourcen zugreifen können.
        "*" entspricht allen Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Websites nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL-<a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Muster</a>, die die Seiten spezifizieren, die auf die Ressourcen zugreifen können. Nur der Ursprung wird verwendet, um URLs abzugleichen. Ursprünge beinhalten Subdomain-Abgleich. Pfade müssen auf <code>/*</code> gesetzt werden.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die offen gelegt werden sollen. Ressourcen werden als Zeichenketten angegeben und können <code>*</code> für Platzhalter enthalten. Zum Beispiel, <code>"/images/*"</code> macht alles im Verzeichnis <code>/images</code> der Erweiterung rekursiv zugänglich, während <code>"*.png"</code> alle PNG-Dateien offenlegt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standardwert ist <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich sein sollen. Die dynamische ID wird pro Sitzung generiert und bei Browser-Neustart oder Erweiterungsaktualisierung neu erstellt.
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

Um einer Webseite zu ermöglichen, ein [`<img>`](/de/docs/Web/HTML/Element/img)-Element zu verwenden, dessen `src`-Attribut auf dieses Bild zeigt, würden Sie `web_accessible_resources` wie folgt spezifizieren:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann mit einer URL wie dieser verfügbar:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird für jede Instanz des Browsers zufällig generiert. Dies verhindert, dass Webseiten durch die Untersuchung der installierten Erweiterungen den Browser identifizieren.

> [!NOTE]
> In Chrome unter Manifest V2 ist die ID einer Erweiterung fest. Wenn eine Ressource in `web_accessible_resources` aufgelistet ist, ist sie als `chrome-extension://<your-extension-id>/<path/to/resource>` zugänglich. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Ansatz, um die URL der Ressource zu erhalten, ist die Verwendung von [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL), wobei der Pfad relativ zur manifest.json angegeben wird, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz gibt Ihnen die korrekte URL, unabhängig davon, auf welchem Browser Ihre Erweiterung läuft.

### Platzhalter

Einträge in `web_accessible_resources` können Platzhalter enthalten. Zum Beispiel würde auch der folgende Eintrag funktionieren, um die Ressource unter "images/my-image.png" einzuschließen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webfähig machen, kann jede Website einen Link zu dieser Seite herstellen oder auf diese umleiten. Die Seite sollte dann jede Eingabe (z.B. POST-Daten) so behandeln, als ob sie aus einer nicht vertrauenswürdigen Quelle stammt, genauso wie eine normale Webseite.

Webfähige Erweiterungsressourcen werden nicht von [CORS](/de/docs/Web/HTTP/CORS) oder [CSP](/de/docs/Web/HTTP/CSP) blockiert. Aufgrund dieser Fähigkeit, Sicherheitsüberprüfungen zu umgehen, sollten Erweiterungen nach Möglichkeit darauf verzichten, webfähige Skripte zu verwenden. Ein webfähiges Erweiterungsskript kann unerwartet von bösartigen Websites missbraucht werden, um die Sicherheit anderer Websites zu schwächen. Befolgen Sie die [Sicherheitsbest-Praktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die Injektion von URLs im moz-extension:-Format auf Webseiten vermeiden und sicherstellen, dass Drittanbieter-Bibliotheken auf dem neuesten Stand sind.

## Beispiel

### Manifest V2 Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei unter "images/my-image.png" für jede Website und Erweiterung zugänglich.

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

Machen Sie die Datei unter "images/my-image.png" für jede Website und Erweiterung zugänglich.

Es wird empfohlen, nur `extension_ids` oder `matches` zu spezifizieren, wenn es notwendig ist.
Zum Beispiel, wenn die Ressource nur für Webseiten unter example.com zugänglich sein muss:

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
