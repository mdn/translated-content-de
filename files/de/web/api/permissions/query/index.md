---
title: "Berechtigungen: query()-Methode"
short-title: query()
slug: Web/API/Permissions/query
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`query()`**-Methode der {{domxref("Permissions")}}-Schnittstelle gibt den Status einer Benutzerberechtigung im globalen Kontext zurück.

Die Benutzernamen der Berechtigungen sind in den jeweiligen Spezifikationen für jede Funktion definiert. Die von den verschiedenen Browserversionen unterstützten Berechtigungen sind in den [Kompatibilitätsdaten der `Permissions` Schnittstelle](/de/docs/Web/API/Permissions#browser_compatibility) aufgeführt (siehe auch den relevanten Quellcode für [Firefox-Werte](https://searchfox.org/mozilla-central/source/dom/webidl/Permissions.webidl#10), [Chromium-Werte](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl), und [WebKit-Werte](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl)).

Die APIs, die jeweils durch eine Berechtigung gesteuert werden, sind in den [bevorzugten APIs für Berechtigungen](/de/docs/Web/API/Permissions_API#permission-aware_apis) im Überblicksthema der [Permissions API](/de/docs/Web/API/Permissions_API) aufgelistet.

## Syntax

```js-nolint
query(permissionDescriptor)
```

### Parameter

- `permissionDescriptor`

  - : Ein Objekt, das Optionen für die `query`-Operation festlegt.
    Die verfügbaren Optionen für diesen Deskriptor hängen von der Berechtigungsart ab.

    Alle Berechtigungen haben einen Namen:

    - `name`
      - : Ein String, der den Namen der API enthält, deren Berechtigungen Sie abfragen möchten, wie z. B. `camera`, `bluetooth`, `camera`, `geolocation` (siehe [`Permissions`](/de/docs/Web/API/Permissions#browser_compatibility) für eine vollständigere Liste).
        Das zurückgegebene {{jsxref("Promise")}} wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn der Berechtigungsname vom Browser nicht unterstützt wird.

    Für die `push`-Berechtigungen können Sie auch folgendes angeben:

    - `userVisibleOnly` {{optional_inline}}
      - : (Nur Push, nicht unterstützt in Firefox — siehe untenstehende Browservergleichstabelle) Gibt an, ob Sie für jede Nachricht eine Benachrichtigung anzeigen möchten oder stille Push-Benachrichtigungen senden können.
        Standard ist `false`.

    Für die `midi`-Berechtigung können Sie auch folgendes angeben:

    - `sysex` {{optional_inline}}
      - : Gibt an, ob Sie System-exklusive Nachrichten benötigen und/oder empfangen.
        Standard ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein {{domxref("PermissionStatus")}}-Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `query()`-Methode im Browsing-Kontext aufgerufen wird und das zugehörige Dokument nicht vollständig aktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Abrufen der `PermissionDescriptor`-Informationen auf irgendeine Weise fehlgeschlagen ist oder die Berechtigung nicht existiert oder vom Nutzeragenten nicht unterstützt wird.

## Beispiele

### Nachrichten basierend auf Geolokalisierungsberechtigung anzeigen

Dieses Beispiel zeigt, wie Sie Nachrichten anzeigen könnten, die sich auf den aktuellen Standort beziehen, wenn die `geolocation`-Berechtigung erteilt wird, und andernfalls den Benutzer auffordern, den Zugriff auf den Standort zu gewähren.

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // Nichts tun, wenn die Berechtigung verweigert wurde.
});
```

### Unterstützung für verschiedene Berechtigungen testen

Dieses Beispiel zeigt das Ergebnis der Abfrage jeder der Berechtigungen.

Der Code verwendet `navigator.permissions.query()`, um jede Berechtigung abzufragen, wobei entweder der Berechtigungsstatus protokolliert oder festgehalten wird, dass die Berechtigung im Browser nicht unterstützt wird. Beachten Sie, dass `query()` innerhalb eines `try...catch`-Blocks aufgerufen wird, da das zugehörige `Promise` abgelehnt wird, wenn die Berechtigung nicht unterstützt wird.

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
// Array von Berechtigungen
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

// Durchlaufen der Berechtigungen und Protokollieren des Ergebnisses
async function processPermissions() {
  for (const permission of permissions) {
    const result = await getPermission(permission);
    log(result);
  }
}

// Eine einzelne Berechtigung in einem try...catch-Block abfragen und Ergebnis zurückgeben
async function getPermission(permission) {
  try {
    const result = await navigator.permissions.query({ name: permission });
    return `${permission}: ${result.state}`;
  } catch (error) {
    return `${permission} (nicht unterstützt)`;
  }
}
```

Der Log des ausgeführten Codes wird unten angezeigt:

{{EmbedLiveSample('Test support for various permissions',"100%", "370px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
