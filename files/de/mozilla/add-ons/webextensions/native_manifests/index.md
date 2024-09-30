---
title: Native Manifeste
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Native Manifeste sind JSON-Dateien, die auf dem Computer des Benutzers durch andere Mittel als den Erweiterungsinstallationsprozess bereitgestellt werden. Beispielsweise könnte ein nativer Manifest von einem Geräteadministrator oder einem nativen Anwendungsinstaller bereitgestellt werden.

Es gibt drei Arten von nativen Manifesten:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a href="#native_messaging_manifests">Native Messaging Manifeste</a>
      </td>
      <td>
        Ermöglicht eine Funktion namens
        <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
          >native messaging</a
        >, bei der eine Erweiterung mit einer auf dem Gerät installierten nativen App kommunizieren kann.
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
        Ermöglicht einer Erweiterung die Verwendung der {{WebExtAPIRef("pkcs11")}} API,
        um PKCS #11 Sicherheitsmodule aufzuzählen und in Firefox zu installieren.
      </td>
    </tr>
  </tbody>
</table>

Für alle nativen Manifeste müssen Sie die Datei so ablegen, dass der Browser sie findet. Der Abschnitt über den [Speicherort des Manifests](#speicherort_des_manifests) beschreibt, wie das gemacht wird. Unter Linux und macOS befinden sich die Dateien an einem festen Ort, unter Windows wird der Dateipfad in die Windows-Registrierung geschrieben.

## Native Messaging Manifeste

Das Native Messaging Manifest ist eine Datei mit einem Namen, der dem von der Erweiterung in {{WebExtAPIRef("runtime.connectNative()")}} oder {{WebExtAPIRef("runtime.sendNativeMessage()")}} übergebenen String mit der Erweiterung `.json` entspricht. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

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
          Unter Windows verwenden Sie diesen Wert als Namen des Registrierungsschlüssels, den Sie erstellen,
          der den Standort des Native Messaging Manifests enthält.
        </p>
        <p>
          Der Name muss dem regulären Ausdruck entsprechen:
          <code>"^\w+(\.\w+)*$"</code>. Dies bedeutet, dass er nur alphanumerische Zeichen (Klein- oder Großbuchstaben), Unterstriche und Punkte enthalten darf. Er darf nicht mit einem Punkt beginnen oder enden, und ein Punkt darf nicht auf einen anderen Punkt folgen.
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
          Unter Windows kann dieser relativ zum Manifest selbst sein. Auf MacOS und Linux muss er absolut sein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>Beschreibt die Methode, um die Erweiterung mit der App zu verbinden.</p>
        <p>
          Nimmt nur den Wert <code>"stdio"</code> an, was bedeutet, dass Nachrichten von der App über die Standardeingabe (<code>stdin</code>) empfangen und über die Standardausgabe (<code>stdout</code>) gesendet werden.
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
          Werten. Jeder Wert repräsentiert eine Erweiterung, die berechtigt ist, mit dieser nativen Anwendung zu kommunizieren.
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
            Schlüssel in der <code>manifest.json</code>-Datei Ihrer Erweiterung einfügen sollten, damit Sie während der Entwicklung eine explizite ID festlegen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel hier ist der Inhalt der `ping_pong.json` Manifestdatei für die `ping_pong` native Anwendung aus dem [native messaging Beispiel](https://github.com/mdn/webextensions-examples/tree/main/native-messaging):

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies erlaubt der Erweiterung mit der ID `ping_pong@example.org`, sich zu verbinden, indem sie den Namen `ping_pong` in die entsprechende {{WebExtAPIRef("runtime")}} API-Funktion übergibt. Die native Anwendung befindet sich unter `/path/to/native-messaging/app/ping_pong.py`.

## Managed Storage Manifeste

Das Managed Storage Manifest ist eine Datei mit einem Namen, der der im Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) der Erweiterung angegebenen ID entspricht, mit der Erweiterung `.json`. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

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
          im Schlüssel
          <code
            ><a
              href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >browser_specific_settings</a
            ></code
          >
          der Erweiterung.
        </p>
        <p>
          Unter Windows verwenden Sie dies als Namen des Registrierungsschlüssels, den Sie erstellen,
          der den Standort des Manifests enthält.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>Menschenlesbare Beschreibung, von Firefox ignoriert.</td>
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
          Strings, Zahlen, Booleans, Arrays oder Objekten. Dies wird zu den
          Daten im <code>browser.storage.managed</code> Speicherbereich.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel wird im [favourite-colour Beispiel](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) das Managed Storage Daten in der Datei `favourite-colour-examples@mozilla.org.json` gesetzt, die Folgendes enthält:

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

Das PKCS #11 Manifest ist eine Datei mit einem Namen, der dem Namen des PKCS #11 Moduls entspricht (wie in der <code>pkcs11</code> API verwendet) mit der Erweiterung `.json`. Es enthält ein JSON-Objekt mit diesen Eigenschaften:

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
        <p>Dieses muss mit dem in der {{WebExtAPIRef("pkcs11")}} API verwendeten Namen übereinstimmen.</p>
        <p>
          Unter Windows verwenden Sie dies als Namen des Registrierungsschlüssels, den Sie erstellen,
          der den Standort des Manifests enthält.
        </p>
        <p>
          Der Name muss dem regulären Ausdruck entsprechen:
          <code>"^\w+(\.\w+)*$"</code>. Dies bedeutet, dass er nur alphanumerische Zeichen, Unterstriche und Punkte enthalten darf. Er darf nicht mit einem Punkt beginnen oder enden, und ein Punkt darf nicht auf einen anderen Punkt folgen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>
        <p>Beschreibung des PKCS #11 Moduls.</p>
        <p>
          Dies stellt den freundlichen Namen für das Modul in der Benutzeroberfläche
          des Browsers bereit (zum Beispiel im "Sicherheitsgeräte" Dialog in Firefox).
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
          Werten. Jeder Wert repräsentiert eine Erweiterung, die berechtigt ist, mit dem Modul zu interagieren.
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
            Schlüssel in Ihrer <code>manifest.json</code>-Datei einfügen sollten, damit Sie während der Entwicklung eine explizite ID festlegen.
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

Mit diesem JSON-Manifest, gespeichert als `my_module.json`, könnte die `my-extension@mozilla.org` Erweiterung das Sicherheitsmodul unter `/path/to/libpkcs11testmodule.dylib` installieren, indem sie Code wie diesen verwendet:

```js
browser.pkcs11.installModule("my_module");
```

## Speicherort des Manifests

Unter Linux und macOS müssen Sie das Manifest an einem bestimmten Ort speichern. Unter Windows müssen Sie einen Registrierungsschlüssel erstellen, der auf den Speicherort des Manifests verweist.

Die detaillierten Regeln sind für alle Manifests gleich, abgesehen davon, dass die vorletzte Komponente des Pfades den Typ des Manifests identifiziert. Die unten stehenden Beispiele zeigen die Form für jeden der drei verschiedenen Typen. In allen Beispielen ist `<name>` der Wert der `name` Eigenschaft im Manifest.

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

Der Schlüssel sollte einen einzigen Standardwert haben, der der Pfad zum Manifest ist.

> [!WARNING]
> Seit Firefox 64 wird zuerst die 32-Bit-Registry-Ansicht [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) für diese Schlüssel geprüft, gefolgt von der "nativen" Registry-Ansicht. Verwenden Sie, was für Ihre Anwendung geeignet ist.
>
> **Für Firefox 63 und älter:** Dieser Schlüssel sollte _nicht_ unter [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) erstellt werden, selbst wenn die App 32-Bit ist. Frühere Versionen des Browsers suchen den Schlüssel immer unter der "nativen" Ansicht der Registry, nicht unter der 32-Bit-Emulation. Um sicherzustellen, dass der Schlüssel in der "nativen" Ansicht erstellt wird, können Sie die `KEY_WOW64_64KEY` oder `KEY_WOW64_32KEY` Flags bei `RegCreateKeyEx` übergeben. Siehe [Accessing an Alternate Registry View](https://learn.microsoft.com/en-us/windows/win32/winprog64/accessing-an-alternate-registry-view).

Für Benutzer-Visibilität erstellen Sie einen Registrierungsschlüssel mit dem folgenden Namen:

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

Für Benutzer-Visibilität speichern Sie das Manifest in:

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

Für globale Sichtbarkeit speichern Sie das Manifest in entweder:

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

Für Benutzer-Visibilität speichern Sie das Manifest in:

```plain
~/.mozilla/native-messaging-hosts/<name>.json
```

```plain
~/.mozilla/managed-storage/<name>.json
```

```plain
~/.mozilla/pkcs11-modules/<name>.json
```
