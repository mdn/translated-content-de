---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
l10n:
  sourceCommit: 213721977b6853cbf73fca4c33ab73ba1144acd0
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

Manchmal möchten Sie Ressourcen wie Bilder, HTML, CSS oder JavaScript mit Ihrer Erweiterung paketieren und diese für Webseiten und andere Erweiterungen zugänglich machen.

> [!NOTE]
> Bis Firefox 105 konnten Erweiterungen standardmäßig auf Ressourcen zugreifen, die in anderen Erweiterungen gepackt waren. Ab Firefox 105 müssen Sie, um Ressourcen Ihrer Erweiterung für andere Erweiterungen zugänglich zu machen, diese in diesem Schlüssel aufnehmen.

Zum Beispiel ersetzt die [Beastify Beispiel-Erweiterung](https://github.com/mdn/webextensions-examples/tree/main/beastify) eine Webseite mit einem Bild eines Monsters, das vom Benutzer ausgewählt wurde. Die Monster-Bilder sind in der Erweiterung gepackt. Um das ausgewählte Bild sichtbar zu machen, fügt die Erweiterung [`<img>`](/de/docs/Web/HTML/Element/img)-Elemente hinzu, deren `src`-Attribut auf das Bild des Monsters zeigt. Damit die Webseite die Bilder laden kann, müssen diese webzugänglich gemacht werden.

Mit dem Schlüssel `web_accessible_resources` listen Sie alle gepackten Ressourcen auf, die für Webseiten verfügbar gemacht werden sollen. Sie geben diese als Pfade relativ zur Datei manifest.json an.

Beachten Sie, dass Content-Skripte nicht als webzugängliche Ressourcen aufgeführt werden müssen.

Wenn eine Erweiterung {{WebExtAPIRef("webRequest")}} oder {{WebExtAPIRef("declarativeNetRequest")}} verwenden möchte, um eine öffentliche URL (z. B. HTTPS) auf eine Seite umzuleiten, die in der Erweiterung gepackt ist, muss die Erweiterung diese Seite im Schlüssel `web_accessible_resources` aufführen.

### Syntax von Manifest V2

In Manifest V2 werden webzugängliche Ressourcen als Array unter dem Schlüssel hinzugefügt, wie folgt:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Syntax von Manifest V3

In Manifest V3 ist der Schlüssel `web_accessible_resources` ein Array von Objekten wie dieses:

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

Jedes Objekt muss eine `"resources"`-Eigenschaft und entweder eine `"matches"`- oder `"extension_ids"`-Eigenschaft von den folgenden Eigenschaften enthalten:

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
        Optional. Standardwert: <code>[]</code>, was bedeutet, dass andere Erweiterungen nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von Erweiterungs-IDs, die die Erweiterungen angeben, die auf die Ressourcen zugreifen können.
        "*" erlaubt Zugriff für alle Erweiterungen.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Optional. Standardwert: <code>[]</code>, was bedeutet, dass andere Webseiten nicht auf die Ressource zugreifen können.
        <p>
        Eine Liste von URL <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Match-Mustern</a>, die die Seiten angeben, die auf die Ressourcen zugreifen können. Nur der Ursprung wird verwendet, um URLs abzugleichen. Allerdings:
        <ul>
          <li>In Firefox und Safari kann jeder Pfad eingeschlossen sein.</li>
          <li>In Chrome muss der Pfad auf <code>/*</code> gesetzt werden.</li>
        </ul>
        Ursprünge beinhalten Subdomain-Abgleich.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        Ein Array von Ressourcen, die freigegeben werden sollen. Ressourcen werden als Strings angegeben und können <code>*</code> für Wildcard-Abgleiche enthalten. Zum Beispiel gibt <code>"/images/*"</code> alle Dateien im Verzeichnis <code>/images</code> der Erweiterung rekursiv frei, während <code>"*.png"</code> alle PNG-Dateien freigibt.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Optional. Standardwert: <code>false</code>.
        <p>
        Gibt an, ob Ressourcen durch die dynamische ID zugänglich gemacht werden sollen. Die dynamische ID wird pro Sitzung generiert und bei jedem Browser-Neustart oder Erweiterungs-Neuladen neu erstellt.
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

Um einer Webseite zu erlauben, ein [`<img>`](/de/docs/Web/HTML/Element/img)-Element zu verwenden, dessen `src`-Attribut auf dieses Bild zeigt, würden Sie `web_accessible_resources` wie folgt angeben:

```json
"web_accessible_resources": ["images/my-image.png"]
```

Die Datei ist dann unter einer URL wie dieser verfügbar:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` ist **nicht** die ID Ihrer Erweiterung. Diese ID wird zufällig für jede Browser-Instanz generiert. Dies verhindert, dass Webseiten einen Browser durch Prüfung der installierten Erweiterungen identifizieren können.

> [!NOTE]
> In Chrome unter Manifest V2 ist die ID einer Erweiterung festgelegt. Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie unter `chrome-extension://<your-extension-id>/<path/to/resource>` zugänglich. Unter Manifest V3 kann Chrome eine dynamische URL verwenden, indem `use_dynamic_url` auf `true` gesetzt wird.

Der empfohlene Weg, die URL der Ressource zu erhalten, ist die Verwendung von [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) und die Übergabe des relativen Pfades zur manifest.json, zum Beispiel:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Dieser Ansatz gibt Ihnen die korrekte URL, unabhängig davon, auf welchem Browser Ihre Erweiterung läuft.

### Wildcards

Einträge in `web_accessible_resources` können Wildcards enthalten. Zum Beispiel würde der folgende Eintrag auch funktionieren, um die Ressource unter "images/my-image.png" einzuschließen:

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sicherheit

Wenn Sie eine Seite webzugänglich machen, kann jede Webseite auf diese Seite verlinken oder zu ihr umleiten. Die Seite sollte dann jede Eingabe (z. B. POST-Daten) so behandeln, als käme sie von einer nicht vertrauenswürdigen Quelle, genauso wie es eine normale Webseite tun sollte.

Webzugängliche Erweiterungsressourcen werden nicht durch [CORS](/de/docs/Web/HTTP/CORS) oder [CSP](/de/docs/Web/HTTP/CSP) blockiert. Aufgrund dieser Möglichkeit, Sicherheitsprüfungen zu umgehen, sollten Erweiterungen möglichst keine webzugänglichen Skripte verwenden. Ein webzugängliches Erweiterungsskript kann unerwartet von bösartigen Webseiten missbraucht werden, um die Sicherheit anderer Webseiten zu schwächen. Befolgen Sie die [Sicherheits-Best-Practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/), indem Sie die Einbettung von moz-extension:-URLs in Webseiten vermeiden und sicherstellen, dass Drittanbieter-Bibliotheken aktuell sind.

## Beispiel

### Beispiel für Manifest V2

```json
"web_accessible_resources": ["images/my-image.png"]
```

Machen Sie die Datei unter "images/my-image.png" für jede Webseite und Erweiterung webzugänglich.

### Beispiel für Manifest V3

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

Es wird empfohlen, nur dann `extension_ids` oder `matches` anzugeben, wenn es nötig ist. Zum Beispiel, wenn die Ressource nur für Webseiten unter example.com zugänglich sein soll:

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
