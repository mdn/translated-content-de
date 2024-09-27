---
title: Native Manifeste
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Native Manifeste sind JSON-Dateien, die auf dem Computer des Benutzers auf andere Weise als durch den Erweiterungsinstallationsprozess bereitgestellt werden. Zum Beispiel könnte ein Native Manifest durch einen Geräteadministrator oder einen nativen Anwendungsinstallateur bereitgestellt werden.

Es gibt drei Arten von Native Manifesten:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a href="#native_messaging_manifests">Native Messaging Manifeste</a>
      </td>
      <td>
        Ermöglicht ein Feature namens
        <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
          >Native Messaging</a
        >, bei dem eine Erweiterung mit einer auf dem Gerät installierten nativen App kommunizieren kann.
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
        Ermöglicht einer Erweiterung die Nutzung der {{WebExtAPIRef("pkcs11")}} API,
        um PKCS #11 Sicherheitsmodule aufzulisten und sie in Firefox zu installieren.
      </td>
    </tr>
  </tbody>
</table>

Für alle Native Manifeste müssen Sie die Datei so speichern, dass der Browser sie finden kann. Der Abschnitt über den [Speicherort des Manifests](#speicherort_des_manifests) beschreibt, wie das geht. Unter Linux und macOS befinden sich die Dateien an einem festen Speicherort, unter Windows wird der Speicherort der Datei in die Windows-Registrierung geschrieben.

## Native Messaging Manifeste

Das Native Messaging Manifest ist eine Datei mit einem Namen, der mit dem von der Erweiterung an {{WebExtAPIRef("runtime.connectNative()")}} oder {{WebExtAPIRef("runtime.sendNativeMessage()")}} übergebenen String und der Erweiterung `.json` übereinstimmt. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

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
          Dieser muss mit dem Namen übereinstimmen, der von der Erweiterung an
          {{WebExtAPIRef("runtime.connectNative()")}} oder
          {{WebExtAPIRef("runtime.sendNativeMessage()")}} übergeben wird.
        </p>
        <p>
          Unter Windows verwenden Sie diesen Wert als Namen des Registrierungsschlüssels, den Sie erstellen
          und der den Speicherort des Native Messaging Manifests enthält.
        </p>
        <p>
          Der Name muss dem regulären Ausdruck entsprechen:
          <code>"^\w+(\.\w+)*$"</code>. Das bedeutet, er darf nur (Klein- oder Großbuchstaben) alphanumerische Zeichen, Unterstriche und Punkte enthalten. Er darf nicht mit einem Punkt beginnen oder enden, und ein Punkt darf nicht auf einen anderen Punkt folgen.
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
          Unter Windows kann dieser relativ zum Manifest selbst sein. Unter MacOS und
          Linux muss er absolut sein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>Beschreibt die Methode, mit der die Erweiterung mit der App verbunden wird.</p>
        <p>
          Nimmt nur den Wert <code>"stdio"</code> an,
          was anzeigt, dass Nachrichten von der App mit Standardeingabe
          (<code>stdin</code>) empfangen und mit Standardausgabe
          (<code>stdout</code>) gesendet werden.
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
            >Add-on ID</a
          >
          Werten. Jeder Wert repräsentiert eine Erweiterung, die mit dieser nativen Anwendung kommunizieren darf.
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
            Schlüssel in der <code>manifest.json</code>-Datei Ihrer Erweiterung aufnehmen sollten, um während der Entwicklung eine explizite ID festzulegen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel hier ist der Inhalt der `ping_pong.json` Manifestdatei für die `ping_pong` native Anwendung aus dem [Beispiel für Native Messaging](https://github.com/mdn/webextensions-examples/tree/main/native-messaging):

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies ermöglicht der Erweiterung mit der ID `ping_pong@example.org` sich zu verbinden, indem der Name `ping_pong` in die relevante {{WebExtAPIRef("runtime")}} API-Funktion übergeben wird. Die native Anwendung befindet sich unter `/path/to/native-messaging/app/ping_pong.py`.

## Managed Storage Manifeste

Das Managed Storage Manifest ist eine Datei mit einem Namen, der mit der im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel der Erweiterung angegebenen ID und der Erweiterung `.json` übereinstimmt. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

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
          Die ID der Erweiterung, die auf diesen Speicher zugreifen kann, angegeben als die ID
          die im
          <code
            ><a
              href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >browser_specific_settings</a
            ></code
          >
          Schlüssel der Erweiterung.
        </p>
        <p>
          Unter Windows verwenden Sie diesen Namen als Namen des Registrierungsschlüssels, den Sie erstellen,
          der den Speicherort des Manifests enthält.
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
      <td>Objekt</td>
      <td>
        <p>
          Ein JSON-Objekt, das alle gültigen JSON-Werte enthalten kann, einschließlich
          Strings, Zahlen, Booleschen, Arrays oder Objekten. Dies wird zu den
          Daten im <code>browser.storage.managed</code> Speicherbereich.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel im [favourite-colour Beispiel](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) werden verwaltete Speicherdaten in der Datei `favourite-colour-examples@mozilla.org.json` festgelegt, die Folgendes enthält:

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

Das PKCS #11 Manifest ist eine Datei mit einem Namen, der mit dem Namen des PKCS #11 Moduls (wie in der <code>pkcs11</code> API) übereinstimmt und der Erweiterung `.json`. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

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
        <p>Dies muss mit dem in der {{WebExtAPIRef("pkcs11")}} API verwendeten Namen übereinstimmen.</p>
        <p>
          Unter Windows verwenden Sie diesen Namen als Namen des Registrierungsschlüssels, den Sie erstellen,
          der den Speicherort des Manifests enthält.
        </p>
        <p>
          Der Name muss dem regulären Ausdruck entsprechen:
          <code>"^\w+(\.\w+)*$"</code>. Das bedeutet, es darf nur
          Kleinbuchstaben-alphanumerische Zeichen, Unterstriche und Punkte enthalten. Es darf nicht
          mit einem Punkt beginnen oder enden, und ein Punkt darf nicht auf einen anderen Punkt folgen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>
        <p>Beschreibung des PKCS #11 Moduls.</p>
        <p>
          Dies legt den Anzeigenamen für das Modul in der Benutzeroberfläche des Browsers fest
          (zum Beispiel der "Sicherheitsgeräte"-Dialog in Firefox).
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
      <td>Array von Strings</td>
      <td>
        <p>
          Ein Array von
          <a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >Add-on ID</a
          >
          Werten. Jeder Wert repräsentiert eine Erweiterung, die mit dem Modul interagieren darf.
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
            Schlüssel in der <code>manifest.json</code>-Datei Ihrer Erweiterung aufnehmen sollten, um während der Entwicklung eine explizite ID festzulegen.
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

Mit diesem JSON-Manifest, gespeichert als `my_module.json`, könnte die `my-extension@mozilla.org` Erweiterung das Sicherheitsmodul unter `/path/to/libpkcs11testmodule.dylib` mit folgendem Code installieren:

```js
browser.pkcs11.installModule("my_module");
```

## Speicherort des Manifests

Unter Linux und macOS müssen Sie das Manifest an einem bestimmten Platz speichern. Unter Windows müssen Sie einen Registrierungsschlüssel erstellen, der auf den Speicherort des Manifests verweist.

Die detaillierten Regeln sind für alle Typen von Manifesten gleich, außer dass die vorletzte Komponente des Pfads den Manifesttyp identifiziert. Die unten stehenden Beispiele zeigen die Form für jeden der drei verschiedenen Typen. In allen Beispielen ist `<name>` der Wert der `name` Eigenschaft im Manifest.

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

Der Schlüssel sollte einen einzelnen Standardwert haben, der den Pfad zum Manifest darstellt.

> [!WARNING]
> Ab Firefox 64 wird zuerst die 32-Bit-Ansicht der Registrierung [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) für diese Schlüssel überprüft, gefolgt von der "nativen" Ansicht der Registrierung. Verwenden Sie diejenige, die für Ihre Anwendung geeignet ist.
>
> **Für Firefox 63 und älter:** Dieser Schlüssel sollte _nicht_ unter [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) erstellt werden, auch wenn die App 32-Bit ist. Frühere Versionen des Browsers suchen immer nach dem Schlüssel unter der "nativen" Ansicht der Registrierung, nicht der 32-Bit-Emulation. Um sicherzustellen, dass der Schlüssel in der "nativen" Ansicht erstellt wird, können Sie die `KEY_WOW64_64KEY` oder `KEY_WOW64_32KEY` Flags in `RegCreateKeyEx` übergeben. Siehe [Accessing an Alternate Registry View](https://learn.microsoft.com/en-us/windows/win32/winprog64/accessing-an-alternate-registry-view).

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

Der Schlüssel sollte einen einzelnen Standardwert haben, der den Pfad zum Manifest darstellt.

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

Für globale Sichtbarkeit speichern Sie das Manifest in einem der folgenden Verzeichnisse:

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
