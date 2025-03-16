---
title: Native-Manifeste
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
l10n:
  sourceCommit: a6579e93790c428b743976b246ee8563c3ea464b
---

{{AddonSidebar}}

Native Manifeste sind JSON-Dateien, die auf dem Computer des Benutzers durch andere Mittel als den Erweiterungsinstallationsprozess bereitgestellt werden. Beispielsweise kann ein natives Manifest von einem Geräteadministrator oder einem nativen Anwendungsinstaller bereitgestellt werden.

Es gibt drei Typen von nativen Manifesten:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a href="#native_messaging_manifests">Native Messaging Manifeste</a>
      </td>
      <td>
        Aktiviert eine Funktion namens
        <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
          >Native Messaging</a
        >, bei der eine Erweiterung mit einer auf dem Gerät installierten nativen App kommunizieren kann.
      </td>
    </tr>
    <tr>
      <td>
        <a href="#managed_storage_manifests">Managed Storage Manifeste</a>
      </td>
      <td>
        Definiert schreibgeschützte Daten, auf die eine Erweiterung mithilfe der
        {{WebExtAPIRef("storage.managed")}} API zugreifen kann.
      </td>
    </tr>
    <tr>
      <td><a href="#pkcs_11_manifests">PKCS #11 Manifeste</a></td>
      <td>
        Ermöglicht einer Erweiterung die Verwendung der {{WebExtAPIRef("pkcs11")}} API, um PKCS #11-Sicherheitsmodule aufzulisten und in Firefox zu installieren.
      </td>
    </tr>
  </tbody>
</table>

Für alle nativen Manifeste müssen Sie die Datei so speichern, dass der Browser sie finden kann. Der Abschnitt über den [Standort des Manifests](#manifeststandort) beschreibt, wie dies zu tun ist. Auf Linux und macOS befinden sich die Dateien an einem festen Ort, auf Windows wird der Dateispeicherort in der Windows-Registrierungsdatenbank festgehalten.

## Native Messaging Manifeste

Das Native Messaging Manifest ist eine Datei mit einem Namen, der mit dem von der Erweiterung an {{WebExtAPIRef("runtime.connectNative()")}} oder {{WebExtAPIRef("runtime.sendNativeMessage()")}} übergebenen String übereinstimmt, mit der Erweiterung `.json`. Es enthält ein JSON-Objekt mit folgenden Eigenschaften:

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
          Dies muss mit dem von der Erweiterung an
          {{WebExtAPIRef("runtime.connectNative()")}} oder
          {{WebExtAPIRef("runtime.sendNativeMessage()")}} übergebenen Namen übereinstimmen.
        </p>
        <p>
          Unter Windows verwenden Sie diesen Wert als Namen des Registrierungsschlüssels, den Sie erstellen, um den Speicherort des Native Messaging Manifests anzugeben.
        </p>
        <p>
          Der Name muss regulären Ausdruck entsprechen:
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
          Unter Windows darf dieser relativ zum Manifest selbst sein. Unter macOS und Linux muss er absolut sein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>Beschreibt die Methode, mit der die Erweiterung mit der App verbunden wird.</p>
        <p>
          Nimmt den Wert <code>"stdio"</code> an, was bedeutet, dass Nachrichten von der App mithilfe des Standardeingangs (<code>stdin</code>) empfangen und mithilfe des Standardausgangs (<code>stdout</code>) gesendet werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>Array von Strings</td>
      <td>
        <p>
          Ein Array von
          <a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >Add-on-IDs</a
          >. Jeder Wert repräsentiert eine Erweiterung, die mit dieser nativen Anwendung kommunizieren darf.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies bedeutet, dass Sie den
            <code
              ><a
                href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
                >browser_specific_settings</a
              ></code
            >
            Schlüssel in Ihrer <code>manifest.json</code>-Datei der Erweiterung einschließen möchten, um während der Entwicklung eine explizite ID festzulegen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel, hier ist der Inhalt der `ping_pong.json` Manifestdatei für die `ping_pong` native Anwendung aus dem [Native Messaging Beispiel](https://github.com/mdn/webextensions-examples/tree/main/native-messaging):

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dadurch kann die Erweiterung mit der ID `ping_pong@example.org` eine Verbindung herstellen, indem sie den Namen `ping_pong` in die relevante {{WebExtAPIRef("runtime")}} API-Funktion übergibt. Die native Anwendung befindet sich unter `/path/to/native-messaging/app/ping_pong.py`.

## Managed Storage Manifeste

Das Managed Storage Manifest ist eine Datei mit einem Namen, der mit der in der Erweiterung unter dem Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) angegebenen ID übereinstimmt, mit der Erweiterung `.json`. Es enthält ein JSON-Objekt mit folgenden Eigenschaften:

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
          Die ID der Erweiterung, die auf diesen Speicher zugreifen kann, angegeben als die ID, die im
          <code
            ><a
              href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >browser_specific_settings</a
            ></code
          >
          Schlüssel der Erweiterung angegeben ist.
        </p>
        <p>
          Unter Windows verwenden Sie dies als Namen des Registrierungsschlüssels, den Sie erstellen, der den Speicherort des Manifests enthält.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>Menschlich lesbare Beschreibung, die von Firefox ignoriert wird.</td>
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
      <td>Objekt</td>
      <td>
        <p>
          Ein JSON-Objekt, das alle gültigen JSON-Werte enthalten kann, einschließlich Strings, Zahlen, Booleans, Arrays oder Objekte. Dies wird zu den Daten im <code>browser.storage.managed</code> Speicherbereich.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel wird im [favourite-colour Beispiel](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) Managed Storage Data in der Datei `favourite-colour-examples@mozilla.org.json` festgelegt, die folgendes enthält:

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

Die Erweiterung `favourite-colour-examples@mozilla.org` greift dann mit folgendem Code auf die Daten zu:

```js
let storageItem = browser.storage.managed.get("color");
storageItem.then((res) => {
  console.log(`Managed color is: ${res.color}`);
});
```

## PKCS #11 Manifeste

Das PKCS #11 Manifest ist eine Datei mit einem Namen, der mit dem Namen des PKCS #11 Moduls übereinstimmt (wie in der <code>pkcs11</code> API verwendet) und die Erweiterung `.json` aufweist. Es enthält ein JSON-Objekt mit folgenden Eigenschaften:

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
        <p>Dies muss mit dem Namen übereinstimmen, der in der {{WebExtAPIRef("pkcs11")}} API verwendet wird.</p>
        <p>
          Unter Windows verwenden Sie dies als Namen des Registrierungsschlüssels, den Sie erstellen, der den Speicherort des Manifests enthält.
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
          Dies setzt den benutzerfreundlichen Namen für das Modul in der Benutzeroberfläche des Browsers (zum Beispiel im Dialogfeld "Sicherheitsgeräte" in Firefox).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>String</td>
      <td>
        <p>Pfad zum PKCS #11 Modul.</p>
        <p>
          Der Pfad zum PKCS #11 Modul kann absolut sein oder relativ zum Manifest selbst.
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
      <td>Array von Strings</td>
      <td>
        <p>
          Ein Array von
          <a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >Add-on-IDs</a
          >. Jeder Wert repräsentiert eine Erweiterung, die mit dem Modul interagieren darf.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies bedeutet, dass Sie den
            <code
              ><a
                href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
                >browser_specific_settings</a
              ></code
            >
            Schlüssel in Ihrer <code>manifest.json</code>-Datei der Erweiterung einschließen möchten, um während der Entwicklung eine explizite ID festzulegen.
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

Angenommen, dieses JSON-Manifest wird als `my_module.json` gespeichert, könnte die Erweiterung `my-extension@mozilla.org` das Sicherheitsmodul unter `/path/to/libpkcs11testmodule.dylib` mit einem Code installieren:

```js
browser.pkcs11.installModule("my_module");
```

## Manifeststandort

Auf Linux und macOS müssen Sie das Manifest an einem bestimmten Ort speichern. Unter Windows müssen Sie einen Registrierungsschlüssel erstellen, der auf den Speicherort des Manifests verweist.

Die detaillierten Regeln sind für alle Manifesttypen gleich, außer dass die vorletzte Komponente des Pfades den Typ des Manifests identifiziert. Die folgenden Beispiele zeigen die Form für jede der drei verschiedenen Typen. In allen Beispielen ist `<name>` der Wert der Namen-Eigenschaft im nativen Manifest.

### Windows

Für globale Sichtbarkeit erstellen Sie einen Registrierungsschlüssel mit dem folgenden Namen:

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

Der Schlüssel sollte einen einzigen Standardwert haben, der der Weg zum Manifest ist.

> [!WARNING]
> Seit Firefox 64 wird die 32-Bit-Registrierungsansicht [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) zuerst für diese Schlüssel überprüft, gefolgt von der "nativen" Registrierungsansicht. Verwenden Sie diejenige, die für Ihre Anwendung geeignet ist.
>
> **Für Firefox 63 und ältere Versionen:** Dieser Schlüssel sollte _nicht_ unter [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) erstellt werden, selbst wenn die App 32-Bit ist. Frühere Versionen des Browsers suchen immer nach dem Schlüssel unter der "nativen" Ansicht der Registrierung, nicht in der 32-Bit-Emulation. Um sicherzustellen, dass der Schlüssel in der "nativen" Ansicht erstellt wird, können Sie die Flags `KEY_WOW64_64KEY` oder `KEY_WOW64_32KEY` in `RegCreateKeyEx` übergeben. Siehe [Zugriff auf eine alternative Registrierungsansicht](https://learn.microsoft.com/en-us/windows/win32/winprog64/accessing-an-alternate-registry-view).

Für benutzerspezifische Sichtbarkeit erstellen Sie einen Registrierungsschlüssel mit dem folgenden Namen:

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

Der Schlüssel sollte einen einzigen Standardwert haben, der den Pfad zum Manifest angibt.

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

Für benutzerspezifische Sichtbarkeit speichern Sie das Manifest in:

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

Für benutzerspezifische Sichtbarkeit speichern Sie das Manifest in:

```plain
~/.mozilla/native-messaging-hosts/<name>.json
```

```plain
~/.mozilla/managed-storage/<name>.json
```

```plain
~/.mozilla/pkcs11-modules/<name>.json
```
