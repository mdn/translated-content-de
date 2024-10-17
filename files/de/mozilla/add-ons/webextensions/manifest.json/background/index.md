---
title: Hintergrund
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
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
"background": {
  "scripts": ["background.js"]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `background`-Schlüssel, um ein oder mehrere Background-Skripte, eine Hintergrundseite oder einen Service Worker in Ihre Erweiterung einzubeziehen.

Background-Skripte sind der Ort, an dem Sie Code hinterlegen, der einen langfristigen Zustand aufrechterhalten oder langfristige Operationen unabhängig von der Lebensdauer bestimmter Webseiten oder Browserfenster durchführen muss.

Background-Skripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, es sei denn, `persistent` ist als `false` angegeben. Sie können in dem Skript jede WebExtension-API nutzen, sofern Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe [Background scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) für weitere Details.

Der `background`-Schlüssel ist ein Objekt, das eine der folgenden Eigenschaften haben muss (für weitere Informationen zur Unterstützung dieser Eigenschaften siehe [Browser-Kompatibilität](#browser-kompatibilität)):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie spezifische Inhalte auf der Hintergrundseite benötigen, können Sie eine Seite mit der <code>page</code>-Eigenschaft definieren. Dies ist ein <code>String</code>, der einen Pfad relativ zur Datei manifest.json zu einem HTML-Dokument in Ihrem Erweiterungspaket darstellt.
        </p>
        <p>
          Wenn Sie diese Eigenschaft verwenden, können Sie keine Background-Skripte mit <code>scripts</code> angeben, aber Sie können Skripte von der Seite einbinden, genau wie bei einer normalen Webseite.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>scripts</code></td>
      <td>
        <p>
          Ein <code>Array</code> von <code>Strings</code>, von denen jeder ein Pfad zu einer JavaScript-Quelle ist. Der Pfad ist relativ zur Datei manifest.json selbst. Diese sind die Skripte, die auf der Hintergrundseite der Erweiterung ausgeführt werden.
        </p>
        <p>Die Skripte teilen sich den gleichen globalen <code>window</code>-Kontext.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array erscheinen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite erstellt, auf der Ihre Skripte ausgeführt werden.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie ein Skript von einem entfernten Standort mit dem <code>&#x3C;script></code>-Tag abrufen möchten (z. B. <code>&#x3C;script src = "https://code.jquery.com/jquery-3.6.0.min.js"></code>), müssen Sie den <code><a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code>-Schlüssel in der manifest.json-Datei Ihrer Erweiterung ändern.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>service_worker</code></td>
      <td>
        <p>
          Geben Sie eine JavaScript-Datei als die Erweiterung <a href="/de/docs/Web/API/Service_Worker_API">service worker</a> an. Ein Service Worker ist ein Hintergrundskript, das als Hauptereignishandler der Erweiterung fungiert.
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
        <p>Ein <code>Boolean</code>-Wert.</p>
        <p>Wenn diese Eigenschaft weggelassen wird, ist der Standardwert <code>true</code> in Manifest V2 und <code>false</code> in Manifest V3. Setzen auf <code>true</code> in Manifest V3 führt zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher gehalten wird, von dem Zeitpunkt an, an dem die Erweiterung geladen wird oder der Browser gestartet wird, bis die Erweiterung entladen oder deaktiviert wird, oder der Browser geschlossen wird (d. h. die Hintergrundseite ist persistent).
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite aus dem Speicher entladen werden kann, wenn sie nicht aktiv ist, und bei Bedarf neu erstellt wird. Solche Hintergrundseiten werden oft als Ereignisseiten bezeichnet, da sie in den Speicher geladen werden, um es der Hintergrundseite zu ermöglichen, die Ereignisse zu bearbeiten, zu denen sie Listener hinzugefügt hat. Die Registrierung von Listenern ist persistent, wenn die Seite aus dem Speicher entladen wird, aber andere Werte sind nicht persistent. Wenn Sie Daten persistent in einer Ereignisseite speichern möchten, sollten Sie die <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage">Storage-API</a> verwenden.
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
            <code>classic</code> bedeutet, dass die Background-Skripte oder Service Worker nicht als ES-Modul einbezogen werden.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Background-Skripte oder Service Worker als ES-Modul einbezogen werden. Dies ermöglicht es der Hintergrundseite oder dem Service Worker, Code zu <code>import</code>ieren.
          </li>
        </ul>
        <p>Wenn weggelassen, lautet der Standardwert dieser Eigenschaft <code>classic</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

Die Unterstützung für die Eigenschaften `scripts`, `page` und `service_worker` variiert zwischen den Browsern wie folgt:

- Chrome:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (und `background.page`) nur in Manifest V2-Erweiterungen.
  - Vor Chrome 121 weigert sich Chrome, eine Manifest V3-Erweiterung zu laden, wenn `background.scripts` oder `background.page` vorhanden sind. Ab Chrome 121 wird ihre Anwesenheit in einer Manifest V3-Erweiterung ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox-Fehler 1573659](https://bugzil.la/1573659)).
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben oder die Service Worker-Funktion deaktiviert ist. Vor Firefox 120 startete Firefox die Hintergrundseite nicht, wenn `service_worker` vorhanden war (siehe [Firefox-Fehler 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite wie erwartet, unabhängig von der Anwesenheit von `service_worker`.
- Safari:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist.

Zur Veranschaulichung hier ein einfaches Beispiel für eine plattformübergreifende Erweiterung, die `scripts` und `service_worker` unterstützt. Das Beispiel hat folgende manifest.json-Datei:

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

- in Chrome wird die `service_worker`-Eigenschaft verwendet, und ein Service Worker wird gestartet, der den Tab öffnet, da Chrome in einer Manifest V3-Erweiterung nur Service Worker für Hintergrundskripte unterstützt.
- in Firefox wird die `scripts`-Eigenschaft verwendet, und ein Skript startet, das den Tab öffnet, da Firefox nur Skripte für Hintergrundskripte unterstützt.
- in Safari wird die `service_worker`-Eigenschaft verwendet, und ein Service Worker wird gestartet, der den Tab öffnet, da Safari der Verwendung von Service Workern für Hintergrundskripte Vorrang einräumt.

## Beispiele

```json
  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  }
```

Laden Sie zwei Background-Skripte.

```json
  "background": {
    "page": "my-background.html"
  }
```

Laden Sie eine benutzerdefinierte Hintergrundseite.

## Browser-Kompatibilität

{{Compat}}
