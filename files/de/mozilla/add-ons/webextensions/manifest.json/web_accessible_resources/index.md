---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
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

Manchmal möchten Sie Ressourcen wie Bilder, HTML, CSS oder JavaScript mit Ihrer Erweiterung verpacken und sie für Webseiten und andere Erweiterungen zugänglich machen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf Ressourcen zugreifen, die in anderen Erweiterungen verpackt waren. Ab Firefox 105 müssen, um anderen Erweiterungen den Zugriff auf die Ressourcen einer Erweiterung zu ermöglichen, diese in diesem Schlüssel eingeschlossen sein.

Zum Beispiel ersetzt die [Beastify-Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite mit einem Bild eines vom Benutzer ausgewählten Tieres. Die Tierbilder sind in der Erweiterung enthalten. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Element/img)-Elemente hinzu, deren `src`-Attribut auf das Bild des Tieres verweist. Damit die Webseite die Bilder laden kann, müssen sie webzugänglich gemacht werden.

Mit dem Schlüssel `web_accessible_resources` listen Sie alle verpackten Ressourcen auf, die Sie für Webseiten zugänglich machen möchten. Sie geben sie als Pfade relativ zur Datei manifest.json an.

Beachten Sie, dass Inhaltsskripte nicht als webzugängliche Ressourcen aufgelistet werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z.B. HTTPS) auf eine Seite umzuleiten, die in der Erweiterung verpackt ist, dann muss die Erweiterung die Seite im Schlüssel `web_accessible_resources` auflisten.

### Manifest V2-Syntax

In Manifest V2 werden webzugängliche Ressourcen als Array unter dem Schlüssel hinzugefügt, wie folgt:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Manifest V3-Syntax

In Manifest V3 ist der Schlüssel `web_accessible_resources` ein Array von Objekten wie folgt:

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
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen angeben, die auf die Ressourcen zugreifen können.
        "*" steht für alle Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardmäßig <code>[]</code>, was bedeutet, dass andere Webseiten nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL-<a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Übereinstimmungsmustern</a>, die die Seiten angeben, die auf die Ressourcen zugreifen können. Nur der Ursprung wird verwendet, um URLs zu matchen. Allerdings:
        <ul>
          <li>In Firefox und Safari kann jeder Pfad eingeschlossen werden.</li>
          <li>In Chrome muss der Pfad auf <code>/*</code> gesetzt werden.</li>
        </ul>
        Ursprünge schließen die Übereinstimmung von Subdomains ein.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die offengelegt werden sollen. Ressourcen werden als Zeichenketten angegeben und können <code>*</code> für Platzhalter-Matches enthalten. Zum Beispiel, <code>"/images/*"</code> gibt alles im Verzeichnis <code>/images</code> der Erweiterung rekursiv frei, während <code>"*.png"</code> alle PNG-Dateien freigibt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standardmäßig <code>false</code>.
        <p>
        Ob Ressourcen über die dynamische ID zugänglich sein sollen. Die dynamische ID wird pro Sitzung generiert und bei jedem Neustart des Browsers oder beim Neuladen der Erweiterung neu erstellt.
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

Um einer Webseite die Nutzung eines [`<img>`](/de/docs/Web/HTML/Element/img)-Elements zu ermöglichen, dessen `src`-Attribut auf dieses Bild verweist, würden Sie `web_accessible_resources` wie folgt angeben:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann über eine URL wie diese verfügbar:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird für jede Browser-Instanz zufällig generiert. Dies verhindert, dass Webseiten einen Browser über die installierten Erweiterungen erkennen.

> [!NOTE]
> In Chrome in Manifest V2 ist die ID einer Erweiterung fest. Wenn eine Ressource in `web_accessible_resources` aufgelistet ist, ist sie als `chrome-extension://<your-extension-id>/<path/to/resource>` zugänglich. In Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Ansatz, um die URL der Ressource zu erhalten, ist die Verwendung von [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) mit dem Pfad relativ zu manifest.json, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz gibt Ihnen die korrekte URL unabhängig vom Browser, auf dem Ihre Erweiterung läuft.

### Platzhalter

`web_accessible_resources`-Einträge können Platzhalter enthalten. Zum Beispiel würde der folgende Eintrag auch funktionieren, um die Ressource unter "images/my-image.png" einzuschließen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webzugänglich machen, kann jede Webseite diese Seite verlinken oder zu dieser umleiten. Die Seite sollte dann jede Eingabe (beispielsweise POST-Daten) behandeln, als würde sie von einer nicht vertrauenswürdigen Quelle stammen, genau wie eine normale Webseite.

Webzugängliche Erweiterungsressourcen werden nicht von [CORS](/de/docs/Web/HTTP/Guides/CORS) oder [CSP](/de/docs/Web/HTTP/Guides/CSP) blockiert. Aufgrund dieser Fähigkeit, Sicherheitsüberprüfungen zu umgehen, sollten Erweiterungen es vermeiden, webzugängliche Skripte zu verwenden, wann immer möglich. Ein webzugängliches Skript einer Erweiterung kann unerwartet von bösartigen Webseiten missbraucht werden, um die Sicherheit anderer Webseiten zu schwächen. Befolgen Sie die [Sicherheitsbest-Praktiken](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/) durch Vermeidung der Injektion von moz-extension:-URLs in Webseiten und die Sicherstellung, dass Drittanbieter-Bibliotheken aktuell sind.

## Beispiel

### Manifest V2-Beispiel

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei unter "images/my-image.png" für jede Webseite und Erweiterung webzugänglich.

### Manifest V3-Beispiel

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

Es wird empfohlen, `extension_ids` oder `matches` nur anzugeben, wenn nötig. Zum Beispiel, wenn die Ressource nur für Webseiten bei example.com zugänglich sein muss:

```json
"web_accessible_resources": [
  {
    "resources": [ "images/my-image.png" ],
    "matches": [ "https://example.com/*" ]
  }
]
```

## Beispielerweiterungen

<!-- Idealerweise würden wir die WebExtExamples-Vorlage verwenden, aber Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
