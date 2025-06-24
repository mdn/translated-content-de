---
title: "Berechtigungen: `query()` Methode"
short-title: query()
slug: Web/API/Permissions/query
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`query()`** Methode der [`Permissions`](/de/docs/Web/API/Permissions) Schnittstelle gibt den Status einer Benutzerberechtigung im globalen Umfang zurück.

Die Namen von Benutzerberechtigungen sind in den jeweiligen Spezifikationen für jede Funktion definiert.
Die von verschiedenen Browserversionen unterstützten Berechtigungen sind in den [Kompatibilitätsdaten der `Permissions`-Schnittstelle](/de/docs/Web/API/Permissions#browser_compatibility) aufgelistet (siehe auch den relevanten Quellcode für [Firefox-Werte](https://searchfox.org/mozilla-central/source/dom/webidl/Permissions.webidl#10), [Chromium-Werte](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl) und [WebKit-Werte](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl)).

Die APIs, die durch jede Berechtigung gesteuert werden, sind in [Berechtigungsbewusste APIs](/de/docs/Web/API/Permissions_API#permission-aware_apis) im [Übersichtsthema der Permissions-API](/de/docs/Web/API/Permissions_API) aufgelistet.

## Syntax

```js-nolint
query(permissionDescriptor)
```

### Parameter

- `permissionDescriptor`

  - : Ein Objekt, das Optionen für die `query`-Operation festlegt.
    Die verfügbaren Optionen für diesen Deskriptor hängen vom Berechtigungstyp ab.

    Alle Berechtigungen haben einen Namen:

    - `name`
      - : Ein String, der den Namen der API enthält, deren Berechtigungen Sie abfragen möchten, wie z.B. `camera`, `bluetooth`, `microphone`, `geolocation` (siehe [`Permissions`](/de/docs/Web/API/Permissions#browser_compatibility) für eine vollständigere Liste).
        Das zurückgegebene {{jsxref("Promise")}} wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn der Berechtigungsname vom Browser nicht unterstützt wird.

    Für die `push` Berechtigung können Sie auch festlegen:

    - `userVisibleOnly` {{optional_inline}}
      - : (Nur Push, nicht unterstützt in Firefox — siehe den Abschnitt Browser-Unterstützung unten) Gibt an, ob Sie für jede Nachricht eine Benachrichtigung anzeigen oder stille Push-Benachrichtigungen senden möchten.
        Der Standardwert ist `false`.

    Für die `midi` Berechtigung können Sie auch festlegen:

    - `sysex` {{optional_inline}}
      - : Gibt an, ob Sie System exklusive Nachrichten benötigen und/oder empfangen.
        Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf ein [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) Objekt auflöst.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `query()`-Methode im Browsing-Kontext aufgerufen wird und das zugehörige Dokument nicht vollständig aktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Abrufen der `PermissionDescriptor`-Informationen auf irgendeine Weise fehlgeschlagen ist oder die Berechtigung nicht existiert oder vom Benutzeragenten nicht unterstützt wird.

## Beispiele

### Nachrichten basierend auf der Geolokalisierungsberechtigung anzeigen

Dieses Beispiel zeigt, wie Sie möglicherweise Nachrichten im Zusammenhang mit dem aktuellen Standort anzeigen, wenn die `geolocation`-Berechtigung erteilt wird, und ansonsten den Benutzer auffordern, den Zugriff auf den Standort zu gewähren.

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // Don't do anything if the permission was denied.
});
```

### Unterstützung für verschiedene Berechtigungen testen

Dieses Beispiel zeigt das Ergebnis der Abfrage jeder der Berechtigungen.

Der Code verwendet `navigator.permissions.query()`, um jede Berechtigung abzufragen, und protokolliert entweder den Berechtigungsstatus oder die Tatsache, dass die Berechtigung im Browser nicht unterstützt wird.
Beachten Sie, dass `query()` innerhalb eines `try...catch` Blocks aufgerufen wird, da das zugehörige `Promise` abgelegt wird, wenn die Berechtigung nicht unterstützt wird.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 320px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
// Array of permissions
const permissions = [
  "accelerometer",
  "accessibility-events",
  "ambient-light-sensor",
  "background-sync",
  "camera",
  "clipboard-read",
  "clipboard-write",
  "geolocation",
  "gyroscope",
  "local-fonts",
  "magnetometer",
  "microphone",
  "midi",
  "notifications",
  "payment-handler",
  "persistent-storage",
  "push",
  "screen-wake-lock",
  "storage-access",
  "top-level-storage-access",
  "window-management",
];

processPermissions();

// Iterate through the permissions and log the result
async function processPermissions() {
  for (const permission of permissions) {
    const result = await getPermission(permission);
    log(result);
  }
}

// Query a single permission in a try...catch block and return result
async function getPermission(permission) {
  try {
    let result;
    if (permission === "top-level-storage-access") {
      result = await navigator.permissions.query({
        name: permission,
        requestedOrigin: window.location.origin,
      });
    } else {
      result = await navigator.permissions.query({ name: permission });
    }
    return `${permission}: ${result.state}`;
  } catch (error) {
    return `${permission} (not supported)`;
  }
}
```

Das Protokoll des Ausführens des Codes wird unten angezeigt:

{{EmbedLiveSample('Test support for various permissions',"100%","370px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
