---
title: Native Manifeste
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Native Manifeste sind JSON-Dateien, die auf dem Computer des Nutzers durch andere Mittel als den Erweiterungsinstallationsprozess bereitgestellt werden. Zum Beispiel könnte ein Native Manifest von einem Geräteadministrator oder einem nativen Anwendungsinstallationsprogramm bereitgestellt werden.

Es gibt drei Arten von nativen Manifesten:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a href="#native_messaging_manifests">Native Messaging Manifeste</a>
      </td>
      <td>
        Ermöglicht eine Funktion, die
        <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
          >Native Messaging</a
        > genannt wird, bei der eine Erweiterung mit einer auf dem Gerät installierten nativen App kommunizieren kann.
      </td>
    </tr>
    <tr>
      <td>
        <a href="#managed_storage_manifests">Managed Storage Manifeste</a>
      </td>
      <td>
        Definiert schreibgeschützte Daten, auf die eine Erweiterung mit der
        {{WebExtAPIRef("storage.managed")}} API zugreifen kann.
      </td>
    </tr>
    <tr>
      <td><a href="#pkcs_11_manifests">PKCS #11 Manifeste</a></td>
      <td>
        Ermöglicht es einer Erweiterung, die {{WebExtAPIRef("pkcs11")}} API zu verwenden,
        um PKCS #11 Sicherheitsmodule aufzulisten und sie in Firefox zu installieren.
      </td>
    </tr>
  </tbody>
</table>

Für alle nativen Manifeste müssen Sie die Datei so speichern, dass der Browser sie finden kann. Der Abschnitt über [Manifest-Standorte](#manifest-standort) beschreibt, wie dies zu tun ist. Unter Linux und macOS befinden sich die Dateien an einem festen Standort, unter Windows wird der Dateistandort in die Windows-Registrierung geschrieben.

## Native Messaging Manifeste

Das Native Messaging Manifest ist eine Datei mit einem Namen, der mit dem von der Erweiterung in {{WebExtAPIRef("runtime.connectNative()")}} oder {{WebExtAPIRef("runtime.sendNativeMessage()")}} übergebenen String übereinstimmt, und der Endung `.json`. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>Name der nativen Anwendung.</p>
        <p>
          Dieser muss mit dem Namen übereinstimmen, der in
          {{WebExtAPIRef("runtime.connectNative()")}} oder
          {{WebExtAPIRef("runtime.sendNativeMessage()")}} von
          der Erweiterung übergeben wird.
        </p>
        <p>
          Unter Windows verwenden Sie diesen Wert als Namen des Registrierungsschlüssels, den Sie erstellen und der den Standort des Native Messaging Manifests enthält.
        </p>
        <p>
          Der Name muss dem regulären Ausdruck entsprechen:
          <code>"^\w+(\.\w+)*$"</code>. Das bedeutet, dass er nur (kleine oder große) alphanumerische Zeichen, Unterstriche und Punkte enthalten darf. Er darf nicht mit einem Punkt beginnen oder enden, und ein Punkt darf nicht von einem weiteren Punkt gefolgt werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>Beschreibung der nativen Anwendung.</td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>String</td>
      <td>
        <p>Pfad zur nativen Anwendung.</p>
        <p>
          Unter Windows kann dies relativ zum Manifest selbst sein. Unter MacOS und
          Linux muss es absolut sein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>Beschreibt die Methode, die verwendet wird, um die Erweiterung mit der App zu verbinden.</p>
        <p>
          Nimmt nur den Wert <code>"stdio"</code> an,
          was bedeutet, dass Nachrichten von der App über Standardeingabe
          (<code>stdin</code>) empfangen und über Standardausgabe
          (<code>stdout</code>) gesendet werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>Array von String</td>
      <td>
        <p>
          Ein Array von
          <a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >Add-on-ID</a
          >
          Werten. Jeder Wert stellt eine Erweiterung dar, die mit dieser nativen Anwendung kommunizieren darf.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> Dies bedeutet, dass Sie den
            <code
              ><a
                href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
                >browser_specific_settings</a
              ></code
            >
            Schlüssel in Ihrer Erweiterung's <code>manifest.json</code> Datei einschließen möchten, um eine explizite ID während der Entwicklung festzulegen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel, hier ist der Inhalt der Datei `ping_pong.json` für die native Anwendung `ping_pong` aus dem [Native Messaging Beispiel](https://github.com/mdn/webextensions-examples/tree/main/native-messaging):

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies erlaubt der Erweiterung mit der ID `ping_pong@example.org`, sich zu verbinden, indem der Name `ping_pong` in die relevante {{WebExtAPIRef("runtime")}} API-Funktion übergeben wird. Die native Anwendung befindet sich unter `/path/to/native-messaging/app/ping_pong.py`.

## Managed Storage Manifeste

Das Managed Storage Manifest ist eine Datei mit einem Namen, der mit der ID übereinstimmt, die im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel der Erweiterung angegeben ist, und der Endung `.json`. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>
          Die ID der Erweiterung, die auf diesen Speicher zugreifen kann, angegeben als die ID,
          die im Schlüssel der Erweiterung
          <code
            ><a
              href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >browser_specific_settings</a
            ></code
          >
          angegeben ist.
        </p>
        <p>
          Unter Windows verwenden Sie dies als den Namen des Registrierungsschlüssels, den Sie erstellen und der den Standort des Manifests enthält.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>Menschlich lesbare Beschreibung, von Firefox ignoriert.</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>Dies muss <code>"storage"</code> sein.</p>
      </td>
    </tr>
    <tr>
      <td><code>data</code></td>
      <td>Object</td>
      <td>
        <p>
          Ein JSON-Objekt, das alle gültigen JSON-Werte enthalten kann, einschließlich
          Strings, Zahlen, Booleans, Arrays oder Objekte. Dies wird zu den
          Daten im <code>browser.storage.managed</code> Speicherbereich.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel, im [favourite-colour Beispiel](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) werden verwaltete Speicher-Daten in der Datei mit dem Namen `favourite-colour-examples@mozilla.org.json` gesetzt, die folgendes enthält:

```json
{
  "name": "favourite-colour-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data": {
    "color": "management thinks it should be blue!"
  }
}
```

Die `favourite-colour-examples@mozilla.org` Erweiterung greift dann mit folgendem Code auf die Daten zu:

```js
let storageItem = browser.storage.managed.get("color");
storageItem.then((res) => {
  console.log(`Managed color is: ${res.color}`);
});
```

## PKCS #11 Manifeste

Das PKCS #11 Manifest ist eine Datei mit einem Namen, der dem Namen des PKCS #11 Moduls entspricht (wie in der <code>pkcs11</code> API verwendet) und der Endung `.json`. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>Name des PKCS #11 Moduls.</p>
        <p>Dieser muss mit dem in der {{WebExtAPIRef("pkcs11")}} API verwendeten Namen übereinstimmen.</p>
        <p>
          Unter Windows verwenden Sie dies als den Namen des Registrierungsschlüssels, den Sie erstellen und der den Standort des Manifests enthält.
        </p>
        <p>
          Der Name muss dem regulären Ausdruck entsprechen:
          <code>"^\w+(\.\w+)*$"</code>. Das bedeutet, dass er nur kleine alphanumerische Zeichen, Unterstriche und Punkte enthalten darf. Er darf nicht mit einem Punkt beginnen oder enden, und ein Punkt darf nicht von einem weiteren Punkt gefolgt werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>
        <p>Beschreibung des PKCS #11 Moduls.</p>
        <p>
          Dies setzt den freundlichen Namen für das Modul in der Benutzeroberfläche des Browsers
          (zum Beispiel im "Sicherheitsgeräte"-Dialog in Firefox).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>String</td>
      <td>
        <p>Pfad zum PKCS #11 Modul.</p>
        <p>
          Der Pfad zum PKCS #11 Modul kann absolut oder relativ zum Manifest selbst sein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>Dies muss <code>"pkcs11"</code> sein.</td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>Array von String</td>
      <td>
        <p>
          Ein Array von
          <a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >Add-on-ID</a
          >
          Werten. Jeder Wert stellt eine Erweiterung dar, die mit dem Modul interagieren darf.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> Dies bedeutet, dass Sie den
            <code
              ><a
                href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
                >browser_specific_settings</a
              ></code
            >
            Schlüssel in Ihrer Erweiterung's <code>manifest.json</code> Datei einschließen möchten, um eine explizite ID während der Entwicklung festzulegen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel:

```json
{
  "name": "my_module",
  "description": "My test module",
  "type": "pkcs11",
  "path": "/path/to/libpkcs11testmodule.dylib",
  "allowed_extensions": ["my-extension@mozilla.org"]
}
```

Angesichts dieses JSON-Manifests, gespeichert als `my_module.json`, könnte die `my-extension@mozilla.org` Erweiterung das Sicherheitsmodul unter `/path/to/libpkcs11testmodule.dylib` mit folgendem Code installieren:

```js
browser.pkcs11.installModule("my_module");
```

## Manifest-Standort

Unter Linux und macOS müssen Sie das Manifest an einem bestimmten Ort speichern. Unter Windows müssen Sie einen Registrierungsschlüssel erstellen, der auf den Standort des Manifests verweist.

Die detaillierten Regeln sind für alle Manifesttypen gleich, außer dass die vorletzte Komponente des Pfads den Typ des Manifests identifiziert. Die folgenden Beispiele zeigen die Form für jede der drei verschiedenen Arten. In allen Beispielen ist `<name>` der Wert der `name` Eigenschaft im Manifest.

### Windows

Für globale Sichtbarkeit erstellen Sie einen Registrierungsschlüssel mit folgendem Namen:

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

Der Schlüssel sollte einen einzigen Standardwert haben, der der Pfad zum Manifest ist.

> [!WARNING]
> Ab Firefox 64 wird die 32-Bit-Registrierungsansicht [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) zuerst für diese Schlüssel überprüft, gefolgt von der "nativen" Registrierungsansicht. Verwenden Sie diejenige, die für Ihre Anwendung geeignet ist.
>
> **Für Firefox 63 und älter:** Dieser Schlüssel sollte _nicht_ unter [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) erstellt werden, selbst wenn die App 32-Bit ist. Frühere Versionen des Browsers suchen immer nach dem Schlüssel unter der "nativen" Ansicht der Registrierung, nicht unter der 32-Bit-Emulation. Um sicherzustellen, dass der Schlüssel in der "nativen" Ansicht erstellt wird, können Sie die `KEY_WOW64_64KEY` oder `KEY_WOW64_32KEY` Flags in `RegCreateKeyEx` übergeben. Siehe [Zugriff auf eine alternative Registrierungsansicht](https://learn.microsoft.com/en-us/windows/win32/winprog64/accessing-an-alternate-registry-view).

Für die Benutzersichtbarkeit erstellen Sie einen Registrierungsschlüssel mit folgendem Namen:

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

Der Schlüssel sollte einen einzigen Standardwert haben, der der Pfad zum Manifest ist.

### macOS

Für globale Sichtbarkeit speichern Sie das Manifest in:

```plain
/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
```

```plain
/Library/Application Support/Mozilla/ManagedStorage/<name>.json
```

```plain
/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

Für Benutzersichtbarkeit speichern Sie das Manifest in:

```plain
~/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
```

```plain
~/Library/Application Support/Mozilla/ManagedStorage/<name>.json
```

```plain
~/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

### Linux

Für globale Sichtbarkeit speichern Sie das Manifest entweder in:

```plain
/usr/lib/mozilla/native-messaging-hosts/<name>.json
```

```plain
/usr/lib/mozilla/managed-storage/<name>.json
```

```plain
/usr/lib/mozilla/pkcs11-modules/<name>.json
```

oder:

```plain
/usr/lib64/mozilla/native-messaging-hosts/<name>.json
```

```plain
/usr/lib64/mozilla/managed-storage/<name>.json
```

```plain
/usr/lib64/mozilla/pkcs11-modules/<name>.json
```

Für Benutzersichtbarkeit speichern Sie das Manifest in:

```plain
~/.mozilla/native-messaging-hosts/<name>.json
```

```plain
~/.mozilla/managed-storage/<name>.json
```

```plain
~/.mozilla/pkcs11-modules/<name>.json
```