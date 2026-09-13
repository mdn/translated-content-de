---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

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

Verwenden Sie den `background`-Schlüssel, um ein oder mehrere Hintergrundskripte, eine Hintergrundseite oder einen Service Worker in Ihre Erweiterung aufzunehmen.

Hintergrundskripte sind der Ort, an dem Sie Code platzieren, der einen langfristigen Zustand aufrechterhalten oder langfristige Operationen unabhängig von der Lebensdauer bestimmter Webseiten oder Browserfenster ausführen muss.

Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, es sei denn, `persistent` ist als `false` angegeben. Sie können alle WebExtension-APIs im Skript verwenden, wenn Sie die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) für weitere Details.

Der `background`-Schlüssel ist ein Objekt, das eine dieser Eigenschaften haben muss (für weitere Informationen dazu, wie diese Eigenschaften unterstützt werden, siehe [Browser-Unterstützung](#browser-unterstützung)):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie spezifische Inhalte auf der Hintergrundseite benötigen, können Sie eine Seite mit der Eigenschaft <code>page</code> definieren. Dies ist ein <code>string</code>, der einen relativen Pfad zur manifest.json-Datei zu einem in Ihrem Erweiterungspaket enthaltenen HTML-Dokument darstellt.
        </p>
        <p>
          Wenn Sie diese Eigenschaft verwenden, können Sie keine Hintergrundskripte mit <code>scripts</code> angeben, aber Sie können Skripte von der Seite einfügen, genau wie bei einer normalen Webseite.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>scripts</code></td>
      <td>
        <p>
          Ein <code>array</code> von <code>string</code>, wobei jeder Eintrag einen Pfad zu einer JavaScript-Quelle darstellt. Der Pfad ist relativ zur manifest.json-Datei selbst. Dies sind die Skripte, die im Hintergrundkontext der Erweiterung ausgeführt werden.
        </p>
        <p>Die Skripte teilen sich den gleichen globalen Kontext <code>window</code>.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array erscheinen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite erstellt, auf der Ihre Skripte ausgeführt werden.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie ein Skript von einem entfernten Standort mit dem <code>&#x3C;script></code>-Tag abrufen möchten (z.B. <code>&#x3C;script src = "https://code.jquery.com/jquery-3.6.0.min.js"></code>), müssen Sie den <code><a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code>-Schlüssel in der manifest.json-Datei Ihrer Erweiterung ändern.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>service_worker</code></td>
      <td>
        <p>
          Geben Sie eine JavaScript-Datei als Erweiterungs-<a href="/de/docs/Web/API/Service_Worker_API">Service Worker</a> an. Ein Service Worker ist ein Hintergrundskript, das als Hauptereignishandler der Erweiterung fungiert.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Der `background`-Schlüssel kann auch diese optionale Eigenschaft enthalten:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>persistent</code></td>
      <td>
        <p>Ein <code>boolean</code>-Wert.</p>
        <p>Wenn weggelassen, ist diese Eigenschaft in Manifest V2 standardmäßig <code>true</code> und in Manifest V3 <code>false</code>. Die Einstellung auf <code>true</code> in Manifest V3 führt zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher gehalten wird, von dem Zeitpunkt an, an dem die Erweiterung geladen oder der Browser gestartet wird, bis die Erweiterung entladen oder deaktiviert wird oder der Browser geschlossen wird (d.h. die Hintergrundseite ist persistent).
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite bei Inaktivität aus dem Speicher entladen und bei Bedarf neu erstellt werden kann. Solche Hintergrundseiten werden oft als Ereignisseiten bezeichnet, weil sie in den Speicher geladen werden, damit die Hintergrundseite die Ereignisse behandeln kann, für die sie Listener hinzugefügt hat. Die Registrierung von Listeners ist persistent, wenn die Seite aus dem Speicher entladen wird, aber andere Werte sind nicht persistent. Wenn Sie Daten in einer Ereignisseite persistent speichern möchten, sollten Sie die <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage">Storage-API</a> verwenden.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>preferred_environment</code></td>
      <td>
        <p>Ein <code>array</code> von <code>string</code>, das die bevorzugten Umgebungen in der Reihenfolge der Priorität auflistet.</p>
        <p>Wenn <code>background</code> sowohl <code>service_worker</code> als auch <code>page</code> oder <code>scripts</code> spezifiziert, ermöglicht diese Eigenschaft der Erweiterung, dem Browser mitzuteilen, welchen Hintergrundkontext er verwenden soll, falls verfügbar. Weitere Informationen zu den in den wichtigsten Browsern unterstützten Umgebungen finden Sie unter <a href="#browser_support">Browser-Unterstützung</a>.</p>
        <ul>
          <li>
            <code>document</code> fordert den Browser auf, die Hintergrundskripte der Erweiterung als Dokumente zu verwenden, wenn dies unterstützt wird.
          </li>
          <li>
            <code>service_worker</code> fordert den Browser auf, die Hintergrundskripte der Erweiterung als Service Worker auszuführen, wenn dies unterstützt wird.
          </li>
        </ul>
        <p>Chrome unterstützt nur Service Worker und ignoriert daher diesen Schlüssel. Wenn weggelassen, führen Firefox und Safari Hintergrundskripte als Dokumente aus. Safari verwendet einen Service Worker-Kontext, wenn die Erweiterung <code>scripts</code> spezifiziert und <code>preferred_environment</code> auf <code>service_worker</code> gesetzt ist.</p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>Ein <code>string</code>-Wert.</p>
        <p>Bestimmt, ob die in <code>scripts</code> angegebenen Skripte als ES-Module geladen werden.</p>
        <ul>
          <li>
            <code>classic</code> bedeutet, dass die Hintergrundskripte oder Service Worker nicht als ES-Module enthalten sind.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Hintergrundskripte oder Service Worker als ES-Module enthalten sind. Dies ermöglicht es der Hintergrundseite oder dem Service Worker, Code zu <code>import</code>.
          </li>
        </ul>
        <p>Wenn weggelassen, ist diese Eigenschaft standardmäßig <code>classic</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Unterstützung

Die Unterstützung für die Eigenschaften `scripts`, `page` und `service_worker` variiert zwischen den Browsern folgendermaßen:

- Chrome:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (und `background.page`) nur in Manifest V2-Erweiterungen.
  - vor Chrome 121 lehnt Chrome das Laden einer Manifest V3-Erweiterung mit `background.scripts` oder `background.page` ab. Ab Chrome 121 wird ihre Anwesenheit in einer Manifest V3-Erweiterung ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox-Bug 1573659](https://bugzil.la/1573659)).
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht spezifiziert ist oder das Service Worker-Feature deaktiviert ist. Vor Firefox 120 startete Firefox die Hintergrundseite nicht, wenn `service_worker` vorhanden war (siehe [Firefox-Bug 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite wie erwartet, unabhängig vom Vorhandensein von `service_worker`.
- Safari:
  - unterstützt `background.scripts` (oder `background.page`) und `background.service_worker`.
  - wenn beide angegeben sind, verwendet Safari `background.scripts` (oder `background.page`), es sei denn, `preferred_environment` ist auf `service_worker` gesetzt.
  - wenn `preferred_environment` auf `service_worker` gesetzt ist und `background.service_worker` nicht spezifiziert ist, generiert Safari einen Service Worker aus `background.scripts`, falls vorhanden.

### Plattformübergreifende Manifest V3 Hintergrundskripte

Um Browsers mit unterschiedlichen Manifest V3 Hintergrundskriptimplementierungen zu unterstützen, spezifizieren Sie sowohl `scripts` als auch `service_worker` im `background`-Schlüssel. Browser, die Service Worker für Hintergrundskripte unterstützen, verwenden `service_worker`, während Browser, die Ereignisseiten für diesen Fall verwenden, `scripts` verwenden.

Sie müssen `preferred_environment` für dieses Fallback-Verhalten nicht einbeziehen. Verwenden Sie `preferred_environment` nur, wenn Sie möchten, dass Safari oder ein anderer Browser, der mehr als eine Hintergrundumgebung unterstützt, `service_worker` bevorzugt, wenn verfügbar.

Dieses Beispiel zeigt die relevanten Teile eines Manifests, das sowohl `scripts` als auch `service_worker` enthält:

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

```js
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "http://example.com/first-run.html" });
});
```

Mit dieser `background`-Konfiguration passiert Folgendes:

- In Chrome wird die Eigenschaft `service_worker` verwendet, und ein Service Worker startet, da Chrome in einer Manifest V3-Erweiterung nur Service Worker für Hintergrundskripte unterstützt.
- In Firefox wird die Eigenschaft `scripts` verwendet, und eine Ereignisseite startet, da Firefox nur Skripte für Hintergrundskripte unterstützt.
- In Safari wird standardmäßig die Eigenschaft `scripts` verwendet, und eine Ereignisseite startet.

## Beispiele

```json
  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  }
```

Zwei Hintergrundskripte laden.

```json
  "background": {
    "page": "my-background.html"
  }
```

Eine benutzerdefinierte Hintergrundseite laden.

## Browser-Kompatibilität

{{Compat}}
