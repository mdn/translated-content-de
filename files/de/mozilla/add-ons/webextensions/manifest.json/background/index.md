---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
l10n:
  sourceCommit: 8adfa9f21be15f90b5ee73dbfb9bc441038ac55d
---

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

Verwenden Sie den Schlüssel `background`, um ein oder mehrere Hintergrundskripte, eine Hintergrundseite oder einen Service Worker in Ihre Erweiterung einzubinden.

Hintergrundskripte eignen sich für Code, der einen langfristigen Zustand aufrechterhalten oder länger andauernde Vorgänge ausführen muss – unabhängig von der Lebensdauer einzelner Webseiten oder Browserfenster.

Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird, sofern `persistent` nicht auf `false` gesetzt ist. Sie können im Skript alle WebExtension-APIs verwenden, für die Sie die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Weitere Einzelheiten finden Sie unter [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts).

Der Schlüssel `background` ist ein Objekt, das eine der folgenden Eigenschaften enthalten muss. Weitere Informationen zur Unterstützung dieser Eigenschaften finden Sie unter [Browser-Unterstützung](#browser-unterstützung):

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          Wenn Sie bestimmte Inhalte auf der Hintergrundseite benötigen, können
          Sie mit der Eigenschaft <code>page</code> eine Seite festlegen. Der
          Wert ist ein <code>string</code>, der den Pfad zu einem HTML-Dokument
          im Erweiterungspaket angibt, relativ zur Datei manifest.json.
        </p>
        <p>
          Wenn Sie diese Eigenschaft verwenden, können Sie keine
          Hintergrundskripte mit <code>scripts</code> angeben. Sie können
          jedoch wie auf einer gewöhnlichen Webseite Skripte in die Seite
          einbinden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>scripts</code></td>
      <td>
        <p>
          Ein <code>array</code> aus <code>string</code>-Werten, von denen jeder
          einen Pfad zu einer JavaScript-Quelldatei angibt. Der Pfad ist
          relativ zur Datei manifest.json. Diese Skripte werden im
          Hintergrundkontext der Erweiterung ausgeführt.
        </p>
        <p>Die Skripte teilen sich denselben globalen <code>window</code>-Kontext.</p>
        <p>Die Skripte werden in der Reihenfolge geladen, in der sie im Array stehen.</p>
        <p>
          Wenn Sie <code>scripts</code> angeben, wird eine leere Seite
          erstellt, auf der Ihre Skripte ausgeführt werden.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie ein Skript mit dem
            <code>&#x3C;script></code>-Tag von einer externen Adresse laden
            möchten (z. B.
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
            in der Datei manifest.json Ihrer Erweiterung ändern.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>service_worker</code></td>
      <td>
        <p>
          Legen Sie eine JavaScript-Datei als <a href="/de/docs/Web/API/Service_Worker_API">Service Worker</a> der Erweiterung fest. Ein Service Worker ist ein Hintergrundskript, das als zentraler Event-Handler der Erweiterung dient.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Der Schlüssel `background` kann außerdem die folgenden optionalen Eigenschaften enthalten:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>persistent</code></td>
      <td>
        <p>Ein <code>boolean</code>-Wert.</p>
        <p>Wenn die Eigenschaft weggelassen wird, ist ihr Standardwert in Manifest V2 <code>true</code> und in Manifest V3 <code>false</code>. Wird sie in Manifest V3 auf <code>true</code> gesetzt, führt das zu einem Fehler.</p>
        <ul>
          <li>
            <code>true</code> bedeutet, dass die Hintergrundseite im Speicher
            bleibt, sobald die Erweiterung geladen oder der Browser gestartet
            wird, bis die Erweiterung entladen oder deaktiviert oder der
            Browser geschlossen wird. Die Hintergrundseite ist also persistent.
          </li>
          <li>
            <code>false</code> bedeutet, dass die Hintergrundseite bei
            Inaktivität aus dem Speicher entfernt und bei Bedarf neu erstellt
            werden kann. Solche Hintergrundseiten werden häufig Event Pages
            genannt, weil sie in den Speicher geladen werden, damit sie
            Ereignisse verarbeiten können, für die sie Listener registriert
            haben. Die Registrierung der Listener bleibt bestehen, wenn die
            Seite aus dem Speicher entfernt wird; andere Werte bleiben jedoch
            nicht erhalten. Wenn Sie Daten in einer Event Page dauerhaft
            speichern möchten, verwenden Sie die
            <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/storage"
              >storage-API</a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>preferred_environment</code></td>
      <td>
        <p>Ein <code>array</code> aus <code>string</code>-Werten, das die bevorzugten Umgebungen in der Reihenfolge ihrer Priorität auflistet.</p>
        <p>Wenn <code>background</code> sowohl <code>service_worker</code> als auch <code>page</code> oder <code>scripts</code> angibt, kann die Erweiterung dem Browser mit dieser Eigenschaft mitteilen, welchen verfügbaren Hintergrundkontext er verwenden soll. Einzelheiten zu den von den wichtigsten Browsern unterstützten Umgebungen finden Sie unter <a href="#browser_support">Browser-Unterstützung</a>.</p>
        <ul>
          <li>
            <code>document</code> fordert den Browser auf, die Hintergrundskripte der Erweiterung als Dokumente auszuführen, sofern dies unterstützt wird.
          </li>
          <li>
            <code>service_worker</code> fordert den Browser auf, die Hintergrundskripte der Erweiterung als Service Worker auszuführen, sofern dies unterstützt wird.
          </li>
        </ul>
        <p>Chrome unterstützt nur Service Worker und ignoriert daher diesen Schlüssel. Wenn die Eigenschaft weggelassen wird, führen Firefox und Safari Hintergrundskripte als Dokumente aus. Safari verwendet einen Service-Worker-Kontext, wenn die Erweiterung <code>scripts</code> angibt und <code>preferred_environment</code> auf <code>service_worker</code> gesetzt ist.</p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        <p>Ein <code>string</code>-Wert.</p>
        <p>Legt fest, ob die unter <code>scripts</code> angegebenen Skripte als ES-Module geladen werden.</p>
        <ul>
          <li>
            <code>classic</code> bedeutet, dass die Hintergrundskripte oder Service Worker nicht als ES-Module eingebunden werden.
          </li>
          <li>
            <code>module</code> bedeutet, dass die Hintergrundskripte oder Service Worker als ES-Module eingebunden werden. Dadurch kann die Hintergrundseite oder der Service Worker Code mit <code>import</code> importieren.
          </li>
        </ul>
        <p>Wenn die Eigenschaft weggelassen wird, ist ihr Standardwert <code>classic</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Browser-Unterstützung

Die Unterstützung für die Eigenschaften `scripts`, `page` und `service_worker` unterscheidet sich je nach Browser:

- Chrome:
  - Unterstützt `background.service_worker`.
  - Unterstützt `background.scripts` (und `background.page`) nur in Erweiterungen mit Manifest V2.
  - Vor Chrome 121 verweigert Chrome das Laden einer Erweiterung mit Manifest V3, wenn `background.scripts` oder `background.page` vorhanden ist. Ab Chrome 121 wird deren Vorhandensein in einer Erweiterung mit Manifest V3 ignoriert.
- Firefox:
  - `background.service_worker` wird nicht unterstützt (siehe [Firefox-Bug 1573659](https://bugzil.la/1573659)).
  - Unterstützt `background.scripts` (oder `background.page`), wenn `service_worker` nicht angegeben oder die Service-Worker-Funktion deaktiviert ist. Vor Firefox 120 startete Firefox die Hintergrundseite nicht, wenn `service_worker` vorhanden war (siehe [Firefox-Bug 1860304](https://bugzil.la/1860304)). Ab Firefox 121 startet die Hintergrundseite wie erwartet, unabhängig davon, ob `service_worker` vorhanden ist.
- Safari:
  - Unterstützt `background.scripts` (oder `background.page`) und `background.service_worker`.
  - Wenn beides angegeben ist, verwendet Safari `background.scripts` (oder `background.page`), sofern `preferred_environment` nicht auf `service_worker` gesetzt ist.
  - Wenn `preferred_environment` auf `service_worker` gesetzt und `background.service_worker` nicht angegeben ist, erstellt Safari einen Service Worker aus `background.scripts`, sofern diese Eigenschaft vorhanden ist.

### Browserübergreifende Hintergrundskripte mit Manifest V3

Um Browser mit unterschiedlichen Implementierungen von Hintergrundskripten für Manifest V3 zu unterstützen, geben Sie im Schlüssel `background` sowohl `scripts` als auch `service_worker` an. Browser, die Hintergrund-Service-Worker für Erweiterungen unterstützen, verwenden `service_worker`. Browser, die in diesem Fall Event Pages verwenden, greifen auf `scripts` zurück.

Für dieses Fallback-Verhalten müssen Sie `preferred_environment` nicht angeben. Verwenden Sie `preferred_environment` nur, wenn Safari oder ein anderer Browser, der mehrere Hintergrundumgebungen unterstützt, nach Möglichkeit `service_worker` bevorzugen soll.

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

Die Datei background.js enthält:

```js
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "http://example.com/first-run.html" });
});
```

Mit dieser `background`-Konfiguration geschieht Folgendes:

- In Chrome wird die Eigenschaft `service_worker` verwendet und ein Service Worker gestartet, da Chrome in Erweiterungen mit Manifest V3 für Hintergrundskripte nur Service Worker unterstützt.
- In Firefox wird die Eigenschaft `scripts` verwendet und eine Event Page gestartet, da Firefox als Hintergrundskripte nur Skripte unterstützt.
- In Safari wird standardmäßig die Eigenschaft `scripts` verwendet und eine Event Page gestartet.

Auch das Beispiel [script-on-click](https://github.com/mdn/webextensions-examples/tree/main/script-on-click) veranschaulicht dieses Muster.

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
