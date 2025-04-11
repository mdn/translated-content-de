---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
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

Manchmal möchten Sie Ressourcen – zum Beispiel Bilder, HTML, CSS oder JavaScript – mit Ihrer Erweiterung paketieren und sie Webseiten und anderen Erweiterungen zugänglich machen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf Ressourcen zugreifen, die in anderen Erweiterungen gepackt sind. Ab Firefox 105 müssen Erweiterungen, um auf die Ressourcen einer anderen Erweiterung zugreifen zu können, in diesem Schlüssel eingeschlossen werden.

Zum Beispiel ersetzt die [Beastify-Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite mit einem von der Nutzerin oder dem Nutzer ausgewählten Bild eines Biests. Die Biest-Bilder sind in der Erweiterung enthalten. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Elemente hinzu, deren `src`-Attribut auf das Bild des Biests verweist. Damit die Webseite die Bilder laden kann, müssen sie webbasiert zugänglich gemacht werden.

Mit dem Schlüssel `web_accessible_resources` können Sie alle gepackten Ressourcen auflisten, die Sie Webseiten zugänglich machen möchten. Sie geben sie als Pfade relativ zur manifest.json-Datei an.

Beachten Sie, dass Content-Skripte nicht als webbasierte Ressourcen aufgelistet werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z.B. HTTPS) auf eine in der Erweiterung gepackte Seite umzuleiten, dann muss die Erweiterung die Seite im Schlüssel `web_accessible_resources` auflisten.

### Syntax Manifest V2

In Manifest V2 werden webbasierte Ressourcen als Array unter dem Schlüssel hinzugefügt, wie folgt:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Syntax Manifest V3

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
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen angibt, die auf die Ressourcen zugreifen dürfen.
        "*" entspricht allen Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardwert ist <code>[]</code>, was bedeutet, dass andere Webseiten nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL-<a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Match-Mustern</a>, die die Seiten spezifizieren, die auf die Ressourcen zugreifen können. Nur der Ursprung wird verwendet, um URLs zu vergleichen. Allerdings:
        <ul>
          <li>In Firefox und Safari kann jeder Pfad enthalten sein.</li>
          <li>In Chrome muss der Pfad auf <code>/*</code> gesetzt werden.</li>
        </ul>
        Ursprünge umfassen Subdomain-Abgleiche.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die freigegeben werden sollen. Ressourcen werden als Strings spezifiziert und können <code>*</code> für Platzhalterabgleiche enthalten. Zum Beispiel macht <code>"/images/*"</code> alles im Verzeichnis <code>/images</code> der Erweiterung rekursiv verfügbar, während <code>"*.png"</code> alle PNG-Dateien freigibt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standardwert ist <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich gemacht werden sollen. Die dynamische ID wird pro Sitzung generiert und bei jedem Neustart des Browsers oder Neuladen der Erweiterung neu generiert.
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

Um einer Webseite zu ermöglichen, ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img)-Element zu verwenden, dessen `src`-Attribut auf dieses Bild verweist, würden Sie `web_accessible_resources` wie folgt spezifizieren:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann unter Verwendung einer URL wie folgt verfügbar:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird zufällig für jede Instanz des Browsers generiert. Dadurch wird verhindert, dass Webseiten einen Browser über die installierten Erweiterungen fingerabdrucken.

> [!NOTE]
> In Chrome in Manifest V2 ist die ID einer Erweiterung fest. Wenn eine Ressource in `web_accessible_resources` aufgelistet ist, ist sie als `chrome-extension://<your-extension-id>/<path/to/resource>` zugänglich. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Ansatz, um die URL der Ressource zu erhalten, ist die Verwendung von [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL), wobei der Pfad relativ zur manifest.json übergeben wird, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz liefert Ihnen die korrekte URL unabhängig vom Browser, auf dem Ihre Erweiterung läuft.

### Platzhalter

Einträge in `web_accessible_resources` können Platzhalter enthalten. Zum Beispiel würde der folgende Eintrag ebenfalls funktionieren, um die Ressource bei "images/my-image.png" einzuschließen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webbasiert zugänglich machen, kann jede Webseite auf diese Seite verlinken oder umleiten. Die Seite sollte dann jede Eingabe (zum Beispiel POST-Daten) so behandeln, als kämen sie von einer nicht vertrauenswürdigen Quelle, genau wie eine normale Webseite.

Webbasierte Erweiterungsressourcen werden nicht durch [CORS](/de/docs/Web/HTTP/Guides/CORS) oder [CSP](/de/docs/Web/HTTP/Guides/CSP) blockiert. Aufgrund dieser Fähigkeit, Sicherheitschecks zu umgehen, sollten Erweiterungen nach Möglichkeit die Verwendung von webbasierten Skripten vermeiden. Ein webbasiertes Erweiterungsskript kann unerwartet von böswilligen Webseiten missbraucht werden, um die Sicherheit anderer Webseiten zu schwächen. Befolgen Sie die [Best Practices zur Sicherheit](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die Injektion von moz-extension:-URLs in Webseiten vermeiden und sicherstellen, dass Drittanbieter-Bibliotheken auf dem neuesten Stand sind.

## Beispiel

### Manifest V2 Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei bei "images/my-image.png" webbasiert zugänglich für jede Webseite und Erweiterung.

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

Machen Sie die Datei bei "images/my-image.png" webbasiert zugänglich für jede Webseite und Erweiterung.

Es wird empfohlen, nur `extension_ids` oder `matches` zu spezifizieren, wenn nötig. Zum Beispiel, wenn die Ressource nur für Webseiten bei example.com zugänglich sein muss:

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
