---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: c09d604573caae5ab369806a27c98cd2a396bdca
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

Verwenden Sie den `background`-Schlüssel, um ein oder mehrere Hintergrundskripte, eine Hintergrundseite oder einen Service Worker in Ihre Erweiterung einzubinden.

Hintergrundskripte sind der Ort, um Code zu platzieren, der einen langfristigen Zustand aufrechterhalten oder langfristige Operationen unabhängig von der Lebensdauer bestimmter Webseiten oder Browserfenster ausführen muss.

Hintergrundskripte werden geladen, sobald die Erweiterung geladen ist, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, es sei denn, `persistent` ist als `false` angegeben. Sie können in dem Skript alle WebExtension-APIs verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Details finden Sie unter [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts).

Der `background`-Schlüssel ist ein Objekt, das eine dieser Eigenschaften haben muss (für weitere Informationen darüber, wie diese Eigenschaften unterstützt werden, siehe [Browser-Unterstützung](#browser-unterstützung)):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie spezifischen Inhalt auf der Hintergrundseite benötigen, können Sie eine Seite mit der Eigenschaft <code>page</code> definieren. Dies ist ein <code>string</code>, der einen Pfad relativ zur manifest.json-Datei zu einem in Ihrem Erweiterungspaket enthaltenen HTML-Dokument darstellt.
        </p>
        <p>
          Wenn Sie diese Eigenschaft verwenden, können Sie keine Hintergrundskripte mit <code>scripts</code> angeben, aber Sie können Skripte von der Seite aus einbinden, genau wie bei einer normalen Webseite.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>scripts</code></td>
      <td>
        <p>
          Ein <code>array</code> von <code>string</code>, von denen jeder ein Pfad zu einer JavaScript-Quelle ist. Der Pfad ist relativ zur manifest.json-Datei selbst. Dies sind die Skripte, die im Hintergrundkontext der Erweiterung ausgeführt werden.
        </p>
        <p>Die Skripte teilen sich den gleichen globalen Kontext <code>window</code>.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array erscheinen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite erstellt, auf der Ihre Skripte ausgeführt werden.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie ein Skript von einem entfernten Ort mit dem <code>&#x3C;script></code>-Tag abrufen möchten (z. B. <code>&#x3C;script src = "https://code.jquery.com/jquery-3.6.0.min.js"></code>), müssen Sie den Schlüssel <code><a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code> in der manifest.json-Datei Ihrer Erweiterung ändern.
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
        <p>Wenn weggelassen, ist diese Eigenschaft standardmäßig <code>true</code> in Manifest V2 und <code>false</code> in Manifest V3. Das Setzen auf <code>true</code> in Manifest V3 führt zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher gehalten wird, von dem Zeitpunkt an, an dem die Erweiterung geladen wird oder der Browser startet, bis die Erweiterung entladen oder deaktiviert wird, oder der Browser geschlossen wird (d.h. die Hintergrundseite ist persistent).
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite aus dem Speicher entladen werden kann, wenn sie inaktiv ist und bei Bedarf wieder erstellt wird. Solche Hintergrundseiten werden oft als Ereignisseiten bezeichnet, weil sie in den Speicher geladen werden, um den Hintergrundseiten die Bearbeitung der Ereignisse zu ermöglichen, für die sie Listener hinzugefügt haben. Die Registrierung von Listenern ist persistent, wenn die Seite aus dem Speicher entladen wird, aber andere Werte sind nicht persistent. Wenn Sie Daten persistent in einer Ereignisseite speichern möchten, sollten Sie die <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage">Storage-API</a> verwenden.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>preferred_environment</code></td>
      <td>
        <p>Ein <code>array</code> von <code>string</code>, das die bevorzugten Umgebungen in der Reihenfolge der Priorität auflistet.</p>
        <p>Wenn <code>background</code> sowohl <code>service_worker</code> als auch <code>page</code> oder <code>scripts</code> spezifiziert, ermöglicht diese Eigenschaft der Erweiterung, dem Browser mitzuteilen, welchen Hintergrundkontext er verwenden soll, falls verfügbar. Siehe <a href="#browser_support">Browser-Unterstützung</a> für Details zu den in den großen Browsern unterstützten Umgebungen.</p>
        <ul>
          <li>
            <code>document</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Dokumente verwendet, falls unterstützt.
          </li>
          <li>
            <code>service_worker</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Service Worker ausführt, falls unterstützt.
          </li>
        </ul>
        <p>Chrome unterstützt nur Service Worker, daher ignoriert es diesen Schlüssel. Wenn weggelassen, führen Firefox und Safari Hintergrundskripte als Dokumente aus. Safari verwendet einen Service Worker Kontext, wenn die Erweiterung <code>scripts</code> spezifiziert und <code>preferred_environment</code> auf <code>service_worker</code> gesetzt ist.</p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>Ein <code>string</code>-Wert.</p>
        <p>Bestimmt, ob die in <code>scripts</code> angegebenen Skripte als ES-Module geladen werden.</p>
        <ul>
          <li>
            <code>classic</code> bedeutet, dass die Hintergrundskripte oder Service Worker nicht als ES-Modul eingebunden sind.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Hintergrundskripte oder Service Worker als ES-Modul eingebunden sind. Dies ermöglicht, dass die Hintergrundseite oder der Service Worker Code <code>importieren</code> kann.
          </li>
        </ul>
        <p>Wenn weggelassen, ist diese Eigenschaft standardmäßig <code>classic</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Unterstützung

Die Unterstützung für die Eigenschaften `scripts`, `page` und `service_worker` variiert zwischen den Browsern wie folgt:

- Chrome:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (und `background.page`) nur in Manifest V2 Erweiterungen.
  - vor Chrome 121 verweigert Chrome das Laden einer Manifest V3 Erweiterung mit vorhandenem `background.scripts` oder `background.page`. Ab Chrome 121 wird deren Vorhandensein in einer Manifest V3 Erweiterung ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox-Bug 1573659](https://bugzil.la/1573659)).
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist oder die Service Worker Funktion deaktiviert ist. Vor Firefox 120 startete Firefox die Hintergrundseite nicht, wenn `service_worker` vorhanden war (siehe [Firefox-Bug 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite wie erwartet, unabhängig von der Anwesenheit von `service_worker`.
- Safari:
  - unterstützt `background.scripts` (oder `background.page`) und `background.service_worker`.
  - wenn beide angegeben sind, verwendet Safari `background.scripts` (oder `background.page`), es sei denn `preferred_environment` ist auf `service_worker` gesetzt.
  - wenn `preferred_environment` auf `service_worker` gesetzt ist und `background.service_worker` nicht angegeben ist, generiert Safari einen Service Worker von `background.scripts`, wenn vorhanden.

### Cross-Browser Manifest V3 Hintergrundskripte

Um Browser mit unterschiedlichen Implementierungen für Manifest V3 Hintergrundskripte zu unterstützen, geben Sie sowohl `scripts` als auch `service_worker` im `background`-Schlüssel an. Browser, die Service Worker für Hintergrunddienste unterstützen, verwenden `service_worker`, während Browser, die Ereignisseiten für diesen Fall verwenden, `scripts` einsetzen.

Sie müssen `preferred_environment` für dieses Fallback-Verhalten nicht einschließen. Verwenden Sie `preferred_environment` nur, wenn Sie möchten, dass Safari oder ein anderer Browser, der mehr als eine Hintergrundumgebung unterstützt, `service_worker` bevorzugt, wo verfügbar.

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

- in Chrome wird die `service_worker`-Eigenschaft verwendet und ein Service Worker gestartet, da Chrome in einer Manifest V3 Erweiterung nur Service Worker für Hintergrundskripte unterstützt.
- in Firefox wird die `scripts`-Eigenschaft verwendet und eine Ereignisseite gestartet, da Firefox nur Skripte für Hintergrundskripte unterstützt.
- in Safari wird standardmäßig die `scripts`-Eigenschaft verwendet und eine Ereignisseite gestartet.

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
