---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: a8ba5c33ed4ac90f67bcb0d8dcfb171f625c5f46
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

Verwenden Sie den Schlüssel `background`, um ein oder mehrere Hintergrundskripte, eine Hintergrundseite oder einen Service Worker in Ihre Erweiterung einzuschließen.

Hintergrundskripte sind der Ort, an dem Code platziert wird, der einen langfristigen Zustand aufrechterhalten oder langfristige Operationen unabhängig von der Lebensdauer einzelner Webseiten oder Browserfenster ausführen muss.

Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, es sei denn, `persistent` ist als `false` angegeben. Sie können alle WebExtension-APIs im Skript verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Für weitere Details siehe [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts).

Der Schlüssel `background` ist ein Objekt, das eine der folgenden Eigenschaften enthalten muss (für weitere Informationen zur Unterstützung dieser Eigenschaften siehe [Browser-Unterstützung](#browser-unterstützung)):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie spezifische Inhalte auf der Hintergrundseite benötigen, können Sie eine Seite mithilfe der Eigenschaft <code>page</code> definieren. Dies ist ein <code>string</code>, der einen Pfad relativ zur Datei manifest.json zu einem HTML-Dokument darstellt, das in Ihrem Erweiterungspaket enthalten ist.
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
          Ein <code>array</code> von <code>string</code>, wobei jeder ein Pfad zu einem JavaScript-Quellcode ist. Der Pfad ist relativ zur Datei manifest.json selbst. Dies sind die Skripte, die im Hintergrundkontext der Erweiterung ausgeführt werden.
        </p>
        <p>Die Skripte teilen denselben globalen Kontext <code>window</code>.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array erscheinen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite erstellt, auf der Ihre Skripte ausgeführt werden.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie ein Skript von einem entfernten Standort mit dem Tag <code>&#x3C;script></code> abrufen möchten (z.B., <code>&#x3C;script src = "https://code.jquery.com/jquery-3.6.0.min.js"></code>), müssen Sie den Schlüssel <code><a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy">content_security_policy</a></code> in der Datei manifest.json Ihrer Erweiterung ändern.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>service_worker</code></td>
      <td>
        <p>
          Geben Sie eine JavaScript-Datei als den <a href="/de/docs/Web/API/Service_Worker_API">Service Worker</a> der Erweiterung an. Ein Service Worker ist ein Hintergrundskript, das als Hauptereignishandler der Erweiterung fungiert.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Der Schlüssel `background` kann auch diese optionale Eigenschaft enthalten:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>persistent</code></td>
      <td>
        <p>Ein <code>boolean</code>-Wert.</p>
        <p>Wenn weggelassen, ist diese Eigenschaft standardmäßig <code>true</code> in Manifest V2 und <code>false</code> in Manifest V3. Das Setzen auf <code>true</code> in Manifest V3 führt zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher behalten wird, von dem Zeitpunkt an, an dem die Erweiterung geladen oder der Browser gestartet wird, bis die Erweiterung entladen oder deaktiviert wird oder der Browser geschlossen wird (d.h. die Hintergrundseite ist persistent).
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite aus dem Speicher entladen werden kann, wenn sie nicht genutzt wird, und bei Bedarf wieder erstellt werden kann. Solche Hintergrundseiten werden oft als Ereignisseiten bezeichnet, da sie in den Speicher geladen werden, um es der Hintergrundseite zu ermöglichen, die Ereignisse zu bearbeiten, für die sie Listener hinzugefügt hat. Die Registrierung von Listenern bleibt persistent, wenn die Seite aus dem Speicher entladen wird, andere Werte jedoch nicht. Wenn Sie Daten persistent in einer Ereignisseite speichern möchten, sollten Sie die <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage">Speicher-API</a> verwenden.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>preferred_environment</code></td>
      <td>
        <p>Ein <code>array</code> von <code>string</code>, das die bevorzugten Umgebungen in Reihenfolge der Priorität auflistet.</p>
        <p>Wenn <code>background</code> sowohl <code>service_worker</code> als auch <code>page</code> oder <code>scripts</code> spezifiziert, ermöglicht diese Eigenschaft der Erweiterung, dem Browser mitzuteilen, welcher Hintergrundkontext verwendet werden soll, wenn er verfügbar ist. Siehe <a href="#browser_support">Browser-Unterstützung</a> für Details zu den Umgebungen, die in den wichtigsten Browsern unterstützt werden.</p>
        <ul>
          <li>
            <code>document</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Dokumente verwendet, falls unterstützt.
          </li>
          <li>
            <code>service_worker</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Service Worker ausführt, falls unterstützt.
          </li>
        </ul>
        <p>Chrome unterstützt nur Service Worker, daher ignoriert es diesen Schlüssel. Wenn er weggelassen wird, führen Firefox und Safari Hintergrundskripte als Dokumente aus. Safari verwendet einen Service-Worker-Kontext, wenn die Erweiterung <code>scripts</code> angibt und <code>preferred_environment</code> auf <code>service_worker</code> gesetzt ist.</p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>Ein <code>string</code>-Wert.</p>
        <p>Bestimmt, ob die in <code>scripts</code> angegebenen Skripte als ES-Module geladen werden.</p>
        <ul>
          <li>
            <code>classic</code> bedeutet, dass die Hintergrundskripte oder Service Worker nicht als ES-Module eingebunden sind.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Hintergrundskripte oder Service Worker als ES-Module eingebunden sind. Dadurch kann die Hintergrundseite oder der Service Worker Code <code>importieren</code>.
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
  - vor Chrome 121 lehnt Chrome das Laden einer Manifest V3-Erweiterung mit vorhandenem `background.scripts` oder `background.page` ab. Ab Chrome 121 wird deren Vorhandensein in einer Manifest V3-Erweiterung ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox Fehler 1573659](https://bugzil.la/1573659)).
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist oder die Service Worker-Funktion deaktiviert ist. Vor Firefox 120 hat Firefox die Hintergrundseite nicht gestartet, wenn `service_worker` vorhanden war (siehe [Firefox Fehler 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite wie erwartet, unabhängig von der Anwesenheit von `service_worker`.
- Safari:
  - unterstützt `background.scripts` (oder `background.page`) und `background.service_worker`. Wenn beide angegeben sind, werden `background.scripts` (oder `background.page`) verwendet, es sei denn, `preferred_environment` ist auf `service_worker` gesetzt.

Um dies zu veranschaulichen, ist hier ein Beispiel für eine plattformübergreifende Erweiterung, die `scripts` und `service_worker` unterstützt. Das Beispiel hat diese manifest.json-Datei:

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

Wenn die Erweiterung ausgeführt wird, passiert Folgendes:

- In Chrome wird die Eigenschaft `service_worker` verwendet und ein Service Worker gestartet, der die Registerkarte öffnet, weil Chrome in einer Manifest V3-Erweiterung nur Service Worker für Hintergrundskripte unterstützt.
- In Firefox wird die Eigenschaft `scripts` verwendet und ein Skript gestartet, das die Registerkarte öffnet, weil Firefox nur Skripte für Hintergrundskripte unterstützt.
- In Safari wird die Eigenschaft `service_worker` verwendet und ein Service Worker gestartet, der die Registerkarte öffnet, weil Safari Vorrang darauf legt, Service Worker für Hintergrundskripte zu verwenden.

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
