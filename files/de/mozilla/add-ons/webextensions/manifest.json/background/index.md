---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: fd6d4ce2829e6fbeed293d66255d84e05e2aa8ea
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatorisch</th>
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

Verwenden Sie den `background`-Schlüssel, um ein oder mehrere Hintergrundskripte, eine Hintergrundseite oder einen Service-Worker in Ihre Erweiterung einzubinden.

Hintergrundskripte sind der Ort, an dem Code platziert werden sollte, der einen langfristigen Zustand aufrechterhalten muss oder langfristige Operationen unabhängig von der Lebensdauer bestimmter Webseiten oder Browser-Fenster ausführen muss.

Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, es sei denn, `persistent` ist als `false` angegeben. Sie können beliebige WebExtension-APIs im Skript verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) für weitere Details.

Der `background`-Schlüssel ist ein Objekt, das eine dieser Eigenschaften haben muss (für weitere Informationen dazu, wie diese Eigenschaften unterstützt werden, siehe [Browser-Unterstützung](#browser-unterstützung)):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie spezifischen Inhalt in der Hintergrundseite benötigen, können Sie eine Seite mit der <code>page</code>-Eigenschaft definieren. Dies ist ein <code>string</code>, der einen Pfad relativ zur manifest.json-Datei zu einem HTML-Dokument darstellt, das in Ihrem Erweiterungsbundle enthalten ist.
        </p>
        <p>
          Wenn Sie diese Eigenschaft verwenden, können Sie keine Hintergrundskripte mit <code>scripts</code> angeben, aber Sie können Skripte von der Seite einbinden, genau wie bei einer normalen Webseite.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>scripts</code></td>
      <td>
        <p>
          Ein <code>array</code> von <code>string</code>, von denen jeder ein Pfad zu einer JavaScript-Quelle ist. Der Pfad ist relativ zur manifest.json-Datei selbst. Dies sind die Skripte, die im Hintergrundkontext der Erweiterung ausgeführt werden.
        </p>
        <p>Die Skripte teilen den gleichen globalen Kontext <code>window</code>.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array erscheinen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite erstellt, auf der Ihre Skripte ausgeführt werden.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie ein Skript von einem entfernten Standort mit dem <code>&#x3C;script></code>-Tag (zum Beispiel
            <code
              >&#x3C;script src =
              "https://code.jquery.com/jquery-3.6.0.min.js"></code
            >) abrufen möchten, müssen Sie den
            <code
              ><a
                href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy"
                >content_security_policy</a
              ></code
            >
            -Schlüssel in der manifest.json-Datei Ihrer Erweiterung ändern.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>service_worker</code></td>
      <td>
        <p>
          Geben Sie eine JavaScript-Datei als Service-Worker der Erweiterung an. Ein Service-Worker ist ein Hintergrundskript, das als Hauptereignis-Handler der Erweiterung fungiert.
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
        <p>Wenn weggelassen, ist diese Eigenschaft standardmäßig <code>true</code> in Manifest V2 und <code>false</code> in Manifest V3. Eine Einstellung auf <code>true</code> in Manifest V3 führt zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher gehalten wird, vom Zeitpunkt, an dem die Erweiterung geladen oder der Browser gestartet wird, bis die Erweiterung entladen oder deaktiviert wird oder der Browser geschlossen wird (d.h. die Hintergrundseite ist persistent).
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite bei Inaktivität aus dem Speicher entladen und bei Bedarf neu erstellt werden kann. Solche Hintergrundseiten werden oft als Ereignisseiten bezeichnet, da sie in den Speicher geladen werden, damit die Hintergrundseite die Ereignisse behandeln kann, zu denen sie Listener hinzugefügt hat. Die Registrierung von Listeners ist persistent, wenn die Seite aus dem Speicher entladen wird, andere Werte jedoch nicht. Wenn Sie Daten persistent in einer Ereignisseite speichern möchten, sollten Sie die
            <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage"
              >Speicher-API</a
            >
            verwenden.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>preferred_environment</code></td>
      <td>
        <p>Ein <code>array</code> von <code>string</code>, das die bevorzugten Umgebungen in der Reihenfolge der Priorität auflistet.</p>
        <p>Wenn <code>background</code> einen <code>service_worker</code> und eine <code>page</code> oder <code>scripts</code> angibt, ermöglicht diese Eigenschaft der Erweiterung, dem Browser mitzuteilen, welchen Hintergrundkontext verwendet werden soll, falls verfügbar. Siehe <a href="#browser_support">Browser-Unterstützung</a> für Details zu den in den Hauptbrowsern unterstützten Umgebungen.</p>
        <ul>
          <li>
            <code>document</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Dokumente verwendet, falls unterstützt.
          </li>
          <li>
            <code>service_worker</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Service-Worker ausführt, falls unterstützt.
          </li>
        </ul>
        <p>Chrome unterstützt nur Service-Worker und ignoriert diesen Schlüssel. Wenn weggelassen, führt Firefox und Safari Hintergrundskripte als Dokumente aus. Safari verwendet einen Service-Worker-Kontext, wenn die Erweiterung <code>scripts</code> angibt und <code>preferred_environment</code> auf <code>service_worker</code> gesetzt ist.</p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>Ein <code>string</code>-Wert.</p>
        <p>Bestimmt, ob die in <code>scripts</code> angegebenen Skripte als ES-Module geladen werden.</p>
        <ul>
          <li>
            <code>classic</code> bedeutet, dass die Hintergrundskripte oder Service-Worker nicht als ES-Module enthalten sind.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Hintergrundskripte oder Service-Worker als ES-Module enthalten sind. Dies ermöglicht es der Hintergrundseite oder dem Service-Worker, Code zu <code>import</code>ieren.
          </li>
        </ul>
        <p>Wenn weggelassen, ist diese Eigenschaft standardmäßig auf <code>classic</code> gesetzt.</p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Unterstützung

Die Unterstützung für die Eigenschaften `scripts`, `page` und `service_worker` variiert zwischen den Browsern wie folgt:

- Chrome:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (und `background.page`) nur in Manifest V2-Erweiterungen.
  - vor Chrome 121 lehnt Chrome das Laden einer Manifest V3-Erweiterung mit `background.scripts` oder `background.page` ab. Ab Chrome 121 wird ihre Präsenz in einer Manifest V3-Erweiterung ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox-Bug 1573659](https://bugzil.la/1573659)).
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist oder das Service-Worker-Feature deaktiviert ist. Vor Firefox 120 startete Firefox die Hintergrundseite nicht, wenn `service_worker` vorhanden war (siehe [Firefox-Bug 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite wie erwartet, unabhängig von der Präsenz von `service_worker`.
- Safari:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist.

Zum Veranschaulichen ist hier ein Beispiel für eine plattformübergreifende Erweiterung, die `scripts` und `service_worker` unterstützt. Das Beispiel hat diese manifest.json-Datei:

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
  browser.tabs.create({ url: "http://example.com/first-run.html" });
});
```

Wenn die Erweiterung ausgeführt wird, passiert Folgendes:

- in Chrome wird die `service_worker`-Eigenschaft verwendet und ein Service-Worker gestartet, der den Tab öffnet, da Chrome in einer Manifest V3-Erweiterung nur Service-Worker für Hintergrundskripte unterstützt.
- in Firefox wird die `scripts`-Eigenschaft verwendet und ein Skript gestartet, das den Tab öffnet, da Firefox nur Skripte für Hintergrundskripte unterstützt.
- in Safari wird die `service_worker`-Eigenschaft verwendet und ein Service-Worker gestartet, der den Tab öffnet, da Safari die Priorität hat, Service-Worker für Hintergrundskripte zu verwenden.

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
