---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
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

Verwenden Sie den `background`-Schlüssel, um ein oder mehrere Hintergrundskripte, eine Hintergrundseite oder einen Service Worker in Ihre Erweiterung einzubinden.

Hintergrundskripte sind der Ort, an dem Sie Code platzieren, der einen langfristigen Zustand aufrechterhalten oder langfristige Operationen unabhängig von der Lebensdauer einer bestimmten Webseite oder eines Browserfensters ausführen muss.

Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, es sei denn, `persistent` ist auf `false` gesetzt. Sie können in dem Skript jede WebExtension-API verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe [Background scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) für weitere Details.

Der `background`-Schlüssel ist ein Objekt, das eines der folgenden Eigenschaften haben muss (für weitere Informationen zur Unterstützung dieser Eigenschaften siehe [Browser-Kompatibilität](#browser-kompatibilität)):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie spezifische Inhalte in der Hintergrundseite benötigen, können Sie eine Seite mithilfe der <code>page</code>-Eigenschaft definieren. Dies ist ein <code>string</code>, der einen Pfad relativ zur Datei manifest.json zu einem HTML-Dokument darstellt, das in ihrem Erweiterungspaket enthalten ist.
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
          Ein <code>array</code> von <code>string</code>, von denen jeder ein Pfad zu einem JavaScript-Quellcode ist. Der Pfad ist relativ zur Datei manifest.json selbst. Dies sind die Skripte, die im Hintergrundkontext der Erweiterung ausgeführt werden.
        </p>
        <p>Die Skripte teilen sich denselben <code>window</code> globalen Kontext.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array erscheinen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite erstellt, auf der Ihre Skripte ausgeführt werden.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie ein Skript von einem entfernten Ort mit dem <code>&#x3C;script></code>-Tag abrufen möchten (z.B.
            <code
              >&#x3C;script src =
              "https://code.jquery.com/jquery-3.6.0.min.js"></code
            >), müssen Sie den
            <code
              ><a
                href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy"
                >content_security_policy</a
              ></code
            >
            Schlüssel in der Datei manifest.json Ihrer Erweiterung ändern.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>service_worker</code></td>
      <td>
        <p>
          Geben Sie eine JavaScript-Datei als <a href="/de/docs/Web/API/Service_Worker_API">Service Worker</a> der Erweiterung an. Ein Service Worker ist ein Hintergrundskript, das als Hauptereignis-Handler der Erweiterung fungiert.
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
        <p>Wenn diese Eigenschaft weggelassen wird, ist der Standardwert <code>true</code> in Manifest V2 und <code>false</code> in Manifest V3. Das Setzen auf <code>true</code> in Manifest V3 führt zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher gehalten wird, sobald die Erweiterung geladen oder der Browser gestartet wird, bis die Erweiterung entladen, deaktiviert oder der Browser geschlossen wird (d.h. die Hintergrundseite ist persistent).
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite aus dem Speicher entladen werden kann, wenn sie inaktiv ist, und bei Bedarf neu erstellt wird. Solche Hintergrundseiten werden häufig als Ereignisseiten bezeichnet, da sie in den Speicher geladen werden, um die Ereignisse zu verarbeiten, für die sie Hörer hinzugefügt hat. Die Registrierung von Hörern ist persistent, wenn die Seite aus dem Speicher entladen wird, aber andere Werte sind nicht persistent. Wenn Sie Daten dauerhaft in einer Ereignisseite speichern möchten, sollten Sie die <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage API</a> verwenden.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>preferred_environment</code></td>
      <td>
        <p>Ein <code>array</code> von <code>string</code>, das die bevorzugten Umgebungen in der Reihenfolge der Priorität auflistet.</p>
        <p>Wenn <code>background</code> sowohl einen <code>service_worker</code> als auch <code>page</code> oder <code>scripts</code> angibt, ermöglicht diese Eigenschaft der Erweiterung, dem Browser mitzuteilen, welche Hintergrundkontexte verwendet werden sollen, wenn sie verfügbar sind. Siehe <a href="#browser_support">Browser-Kompatibilität</a> für Details zu den in den wichtigsten Browsern unterstützten Umgebungen.</p>
        <ul>
          <li>
            <code>document</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Dokumente verwendet, falls unterstützt.
          </li>
          <li>
            <code>service_worker</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Service Worker ausführt, falls unterstützt.
          </li>
        </ul>
        <p>Chrome unterstützt nur Service Worker und ignoriert daher diesen Schlüssel. Wenn weggelassen, führen Firefox und Safari Hintergrundskripte als Dokumente aus. Safari verwendet einen Service Worker-Kontext, wenn die Erweiterung <code>scripts</code> angibt und <code>preferred_environment</code> auf <code>service_worker</code> gesetzt ist.</p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>Ein <code>string</code>-Wert.</p>
        <p>Bestimmt, ob die in <code>scripts</code> angegebenen Skripte als ES-Module geladen werden.</p>
        <ul>
          <li>
            <code>classic</code> bedeutet, dass die Hintergrundskripte oder Service Worker nicht als ES-Modul enthalten sind.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Hintergrundskripte oder Service Worker als ES-Modul enthalten sind. Dies ermöglicht es der Hintergrundseite oder dem Service Worker, Code zu <code>import</code>.
          </li>
        </ul>
        <p>Wenn diese Eigenschaft weggelassen wird, ist der Standardwert <code>classic</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

Die Unterstützung für die Eigenschaften `scripts`, `page` und `service_worker` variiert zwischen Browsern wie folgt:

- Chrome:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (und `background.page`) nur in Manifest V2 Erweiterungen.
  - vor Chrome 121 weigert sich Chrome, eine Manifest V3 Erweiterung mit vorhandenen `background.scripts` oder `background.page` zu laden. Ab Chrome 121 wird deren Vorhandensein in einer Manifest V3 Erweiterung ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox-Bug 1573659](https://bugzil.la/1573659)).
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben oder das Service-Worker-Feature deaktiviert ist. Vor Firefox 120 startete Firefox die Hintergrundseite nicht, wenn `service_worker` vorhanden war (siehe [Firefox-Bug 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite erwartungsgemäß, unabhängig von der Anwesenheit von `service_worker`.
- Safari:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist.

Zur Veranschaulichung ist hier ein Beispiel einer plattformübergreifenden Erweiterung, die `scripts` und `service_worker` unterstützt. Beispielhaft hat diese eine manifest.json Datei:

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
if (typeof browser == "undefined") {
  // Chrome does not support the browser namespace yet.
  globalThis.browser = chrome;
}
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "http://example.com/first-run.html" });
});
```

Wenn die Erweiterung ausgeführt wird, geschieht Folgendes:

- In Chrome wird die `service_worker`-Eigenschaft verwendet, und ein Service Worker wird gestartet, der den Tab öffnet, da Chrome in einer Manifest V3 Erweiterung nur Service Worker für Hintergrundskripte unterstützt.
- In Firefox wird die `scripts`-Eigenschaft verwendet, und ein Skript wird gestartet, das den Tab öffnet, da Firefox nur Skripte für Hintergrundskripte unterstützt.
- In Safari wird die `service_worker`-Eigenschaft verwendet, und ein Service Worker wird gestartet, der den Tab öffnet, da Safari Service Workern für Hintergrundskripte Priorität einräumt.

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
