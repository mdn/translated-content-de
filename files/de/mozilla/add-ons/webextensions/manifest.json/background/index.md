---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: 51ddae7fc3de3712eef57434f8fc85c1e10bc67b
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
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
"background": {
  "scripts": ["background.js"]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `background` Schlüssel, um ein oder mehrere Hintergrundskripte, eine Hintergrundseite oder einen Service Worker in Ihrer Erweiterung einzuschließen.

Hintergrundskripte sind der Ort, um Code zu platzieren, der einen langfristigen Zustand beibehalten muss oder langfristige Operationen unabhängig von der Lebenszeit bestimmter Webseiten oder Browserfenster ausführen muss.

Hintergrundskripte werden geladen, sobald die Erweiterung geladen ist, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, es sei denn, `persistent` ist als `false` angegeben. Sie können alle WebExtension-APIs im Skript verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) für weitere Details.

Der `background` Schlüssel ist ein Objekt, das eine dieser Eigenschaften haben muss (für weitere Informationen darüber, wie diese Eigenschaften unterstützt werden, siehe [Browser-Unterstützung](#browser-unterstützung)):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie spezifische Inhalte auf der Hintergrundseite benötigen, können Sie eine Seite mit der <code>page</code> Eigenschaft definieren. Dies ist ein <code>String</code>, der einen Pfad relativ zur manifest.json-Datei zu einem HTML-Dokument darstellt, das in Ihrem Erweiterungsbündel enthalten ist.
        </p>
        <p>
          Wenn Sie diese Eigenschaft verwenden, können Sie keine Hintergrundskripte mit <code>scripts</code> angeben, aber Sie können Skripte aus der Seite einfügen, genau wie bei einer normalen Webseite.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>scripts</code></td>
      <td>
        <p>
          Ein <code>Array</code> von <code>Strings</code>, von denen jeder ein Pfad zu einer JavaScript-Quelle ist. Der Pfad ist relativ zur manifest.json-Datei selbst. Dies sind die Skripte, die auf der Hintergrundseite der Erweiterung ausgeführt werden.
        </p>
        <p>Die Skripte teilen den gleichen <code>window</code> globalen Kontext.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array erscheinen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite erstellt, auf der Ihre Skripte ausgeführt werden.
        </p>
        <div class="note">
          <p>
            <strong>Note:</strong> Wenn Sie ein Skript von einem entfernten Standort mit dem <code>&#x3C;script></code>-Tag abrufen möchten (z.B. <code>&#x3C;script src="https://code.jquery.com/jquery-3.6.0.min.js"></code>), müssen Sie den <code><a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code> Schlüssel in der manifest.json-Datei Ihrer Erweiterung ändern.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>service_worker</code></td>
      <td>
        <p>
          Geben Sie eine JavaScript-Datei als Extension <a href="/de/docs/Web/API/Service_Worker_API">service worker</a> an. Ein Service Worker ist ein Hintergrundskript, das als Hauptereignis-Handler der Erweiterung fungiert.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Der `background` Schlüssel kann auch diese optionale Eigenschaft enthalten:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>persistent</code></td>
      <td>
        <p>Ein <code>Boolean</code>-Wert.</p>
        <p>Wenn weggelassen, ist diese Eigenschaft standardmäßig <code>true</code> in Manifest V2 und <code>false</code> in Manifest V3. Das Setzen auf <code>true</code> in Manifest V3 führt zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher gehalten wird, von dem Zeitpunkt an, zu dem die Erweiterung geladen wird oder der Browser startet, bis die Erweiterung entladen oder deaktiviert wird oder der Browser geschlossen wird (d.h., die Hintergrundseite ist persistent).
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite bei Inaktivität aus dem Speicher entladen und bei Bedarf neu erstellt werden kann. Solche Hintergrundseiten werden häufig als Event Pages bezeichnet, da sie in den Speicher geladen werden, um es der Hintergrundseite zu ermöglichen, die Ereignisse zu behandeln, für die sie Listener hinzugefügt hat. Das Registrieren von Listenern ist persistent, wenn die Seite aus dem Speicher entladen wird, aber andere Werte sind nicht persistent. Wenn Sie Daten in einer Event Page persistent speichern möchten, sollten Sie die <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage">Speicher-API</a> verwenden.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>Ein <code>String</code>-Wert.</p>
        <p>Bestimmt, ob die in <code>"scripts"</code> angegebenen Skripte als ES-Module geladen werden.</p>
        <ul>
          <li>
            <code>classic</code> bedeutet, dass die Hintergrundskripte oder Service Worker nicht als ES Module inkludiert sind.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Hintergrundskripte oder Service Worker als ES Module inkludiert sind. Dies ermöglicht es der Hintergrundseite oder dem Service Worker, Code zu <code>import</code>.
          </li>
        </ul>
        <p>Wenn weggelassen, ist dieser Wert standardmäßig <code>classic</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Unterstützung

Die Unterstützung für die Eigenschaften `scripts`, `page` und `service_worker` variiert zwischen den Browsern folgendermaßen:

- Chrome:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (und `background.page`) nur in Manifest V2-Erweiterungen.
  - vor Chrome 121 lädt Chrome keine Manifest V3-Erweiterung mit `background.scripts` oder `background.page`. Ab Chrome 121 wird ihre Präsenz in einer Manifest V3-Erweiterung ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox-Bug 1573659](https://bugzilla.mozilla.org/show_bug.cgi?id=1573659)).
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist oder die Service Worker-Funktion deaktiviert ist. Vor Firefox 120 hat Firefox die Hintergrundseite nicht gestartet, wenn `service_worker` vorhanden war (siehe [Firefox-Bug 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite wie erwartet, unabhängig von der Anwesenheit des `service_worker`.
- Safari:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist.

Um dies zu veranschaulichen, ist hier ein einfaches Beispiel für eine browserübergreifende Erweiterung, die `scripts` und `service_worker` unterstützt. Das Beispiel enthält diese manifest.json-Datei:

```json
{
  "name": "Demo of service worker + event page",
  "version": "1",
  "manifest_version": 3,
  "background": {
    "scripts": ["background.js"],
    "service_worker": "background.js"
  }
}
```

Und, background.js enthält:

```javascript
if (typeof browser == "undefined") {
  // Chrome does not support the browser namespace yet.
  globalThis.browser = chrome;
}
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "http://example.com/firstrun.html" });
});
```

Beim Ausführen der Erweiterung passiert Folgendes:

- In Chrome wird die `service_worker`-Eigenschaft verwendet, und ein Service Worker startet, der den Tab öffnet, da in einer Manifest V3-Erweiterung Chrome nur Service Worker für Hintergrundskripte unterstützt.
- In Firefox wird die `scripts`-Eigenschaft verwendet, und ein Skript startet, das den Tab öffnet, da Firefox nur Skripte für Hintergrundskripte unterstützt.
- In Safari wird die `service_worker`-Eigenschaft verwendet, und ein Service Worker startet, der den Tab öffnet, da Safari Priorität hat, Service Worker für Hintergrundskripte zu verwenden.

## Beispiele

```json
  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  }
```

Laden Sie zwei Hintergrundskripte.

```json
  "background": {
    "page": "my-background.html"
  }
```

Laden Sie eine benutzerdefinierte Hintergrundseite.

## Browser-Kompatibilität

{{Compat}}
