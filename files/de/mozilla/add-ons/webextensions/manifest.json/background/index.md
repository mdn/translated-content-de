---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
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

Verwenden Sie den Schlüssel `background`, um ein oder mehrere Background-Skripte, eine Hintergrundseite oder einen Service Worker in Ihre Erweiterung einzufügen.

Background-Skripte sind der Ort, um Code zu platzieren, der einen langfristigen Zustand beibehalten oder langfristige Operationen unabhängig von der Lebensdauer bestimmter Webseiten oder Browserfenster ausführen muss.

Background-Skripte werden geladen, sobald die Erweiterung geladen wird und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, es sei denn, `persistent` ist auf `false` gesetzt. Sie können in dem Skript alle WebExtension-APIs verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Weitere Details finden Sie unter [Background-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts).

Der `background`-Schlüssel ist ein Objekt, das eine der folgenden Eigenschaften haben muss (für weitere Informationen, wie diese Eigenschaften unterstützt werden, siehe [Browser-Unterstützung](#browser-unterstützung)):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie spezifischen Inhalt in der Hintergrundseite benötigen, können Sie eine Seite mit der Eigenschaft <code>page</code> definieren. Dies ist ein <code>string</code> der einen Pfad relativ zur manifest.json-Datei zu einem in Ihrem Erweiterungspaket enthaltenen HTML-Dokument repräsentiert.
        </p>
        <p>
          Wenn Sie diese Eigenschaft verwenden, können Sie keine Background-Skripte mit <code>scripts</code> angeben, aber Sie können Skripte von der Seite aus einbeziehen, genau wie auf einer normalen Webseite.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>scripts</code></td>
      <td>
        <p>
          Ein <code>array</code> von <code>string</code>, von denen jeder ein Pfad zu einer JavaScript-Quelle ist. Der Pfad ist relativ zur manifest.json-Datei selbst. Dies sind die Skripte, die im Hintergrundkontext der Erweiterung ausgeführt werden.
        </p>
        <p>Die Skripte teilen denselben <code>window</code>-globalen Kontext.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array erscheinen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite erstellt, auf der Ihre Skripte laufen.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie ein Skript von einem entfernten Standort mit dem <code>&#x3C;script></code>-Tag abrufen möchten (z.B.,
            <code
              >&#x3C;script src =
              "https://code.jquery.com/jquery-3.6.0.min.js"></code
            >), müssen Sie den Schlüssel
            <code
              ><a
                href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy"
                >content_security_policy</a
              ></code
            >
            in der manifest.json-Datei Ihrer Erweiterung ändern.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>service_worker</code></td>
      <td>
        <p>
          Geben Sie eine JavaScript-Datei als den <a href="/de/docs/Web/API/Service_Worker_API">Service Worker</a> der Erweiterung an. Ein Service Worker ist ein Hintergrundskript, das als Haupt-Event-Handler der Erweiterung fungiert.
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
        <p>Wenn nicht angegeben, ist diese Eigenschaft standardmäßig <code>true</code> in Manifest V2 und <code>false</code> in Manifest V3. Das Setzen auf <code>true</code> in Manifest V3 führt zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher gehalten wird, von dem Zeitpunkt, an dem die Erweiterung geladen wird oder der Browser startet, bis die Erweiterung entladen oder deaktiviert wird, oder der Browser geschlossen wird (das heißt, die Hintergrundseite ist persistent).
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite aus dem Speicher entladen werden kann, wenn sie im Leerlauf ist, und bei Bedarf neu erstellt wird. Solche Hintergrundseiten werden oft als Event Pages bezeichnet, da sie in den Speicher geladen werden, um es der Hintergrundseite zu ermöglichen, die Ereignisse zu verarbeiten, für die sie Listener hinzugefügt hat. Die Registrierung von Listeners bleibt bestehen, wenn die Seite aus dem Speicher entladen wird, aber andere Werte sind nicht persistent. Wenn Sie Daten in einer Event Page persistent speichern möchten, sollten Sie die <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage API</a> verwenden.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>preferred_environment</code></td>
      <td>
        <p>Ein <code>array</code> von <code>string</code>, das die bevorzugten Umgebungen in Reihenfolge der Präferenz auflistet.</p>
        <p>Wenn <code>background</code> sowohl einen <code>service_worker</code> als auch eine <code>page</code> oder <code>scripts</code> angibt, ermöglicht diese Eigenschaft der Erweiterung, dem Browser mitzuteilen, welchen Hintergrundkontext dieser verwenden soll, wenn er verfügbar ist. Siehe <a href="#browser_support">Browser-Unterstützung</a> für Details zu den von den wichtigsten Browsern unterstützten Umgebungen.</p>
        <ul>
          <li>
            <code>document</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Dokumente verwendet, wenn dies unterstützt wird.
          </li>
          <li>
            <code>service_worker</code> fordert, dass der Browser die Hintergrundskripte der Erweiterung als Service Workers ausführt, wenn dies unterstützt wird.
          </li>
        </ul>
        <p>Chrome unterstützt nur Service Workers und ignoriert daher diesen Schlüssel. Wenn nicht angegeben, führen Firefox und Safari Background-Skripte als Dokumente aus. Safari verwendet einen Service Worker-Kontext, wenn die Erweiterung <code>scripts</code> angibt und <code>preferred_environment</code> auf <code>service_worker</code> gesetzt ist.</p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>Ein <code>string</code>-Wert.</p>
        <p>Bestimmt, ob die in <code>scripts</code> angegebenen Skripte als ES-Module geladen werden.</p>
        <ul>
          <li>
            <code>classic</code> bedeutet, dass die Hintergrundskripte oder Service Workers nicht als ES Module aufgenommen sind.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Hintergrundskripte oder Service Workers als ES Module aufgenommen sind. Dies ermöglicht es der Hintergrundseite oder dem Service Worker, Code zu <code>importieren</code>.
          </li>
        </ul>
        <p>Wenn nicht angegeben, ist diese Eigenschaft standardmäßig auf <code>classic</code> gesetzt.</p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Unterstützung

Die Unterstützung für die Eigenschaften `scripts`, `page` und `service_worker` variiert zwischen den Browsern wie folgt:

- Chrome:
  - unterstützt `background.service_worker`.
  - unterstützt `background.scripts` (und `background.page`) nur in Manifest V2-Erweiterungen.
  - vor Chrome 121 weigert sich Chrome, eine Manifest V3-Erweiterung mit `background.scripts` oder `background.page` zu laden. Ab Chrome 121 wird ihre Anwesenheit in einer Manifest V3-Erweiterung ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox-Bug 1573659](https://bugzil.la/1573659)).
  - unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben ist oder das Service Worker-Feature deaktiviert ist. Vor Firefox 120 startete Firefox die Hintergrundseite nicht, wenn `service_worker` vorhanden war (siehe [Firefox-Bug 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite wie erwartet, unabhängig von der Anwesenheit von `service_worker`.
- Safari:
  - unterstützt `background.scripts` (oder `background.page`) und `background.service_worker`. Wenn beide angegeben sind, verwendet es `background.scripts` (oder `background.page`), es sei denn, `preferred_environment` ist auf `service_worker` gesetzt.

Zur Veranschaulichung ein Beispiel einer plattformübergreifenden Erweiterung, die `scripts` und `service_worker` unterstützt. Das Beispiel hat folgende manifest.json-Datei:

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

Und, in background.js steht:

```js
if (typeof browser === "undefined") {
  // Chrome does not support the browser namespace yet.
  globalThis.browser = chrome;
}
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "http://example.com/first-run.html" });
});
```

Wenn die Erweiterung ausgeführt wird, passiert Folgendes:

- in Chrome wird die Eigenschaft `service_worker` verwendet, und ein Service Worker startet, der den Tab öffnet, weil Chrome in einer Manifest V3-Erweiterung nur Service Workers für Hintergrundskripte unterstützt.
- in Firefox wird die Eigenschaft `scripts` verwendet, und ein Skript startet, das den Tab öffnet, weil Firefox nur Skripte für Hintergrundskripte unterstützt.
- in Safari wird die Eigenschaft `service_worker` verwendet, und ein Service Worker startet, der den Tab öffnet, weil Safari der Verwendung von Service Workers für Hintergrundskripte Priorität einräumt.

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
