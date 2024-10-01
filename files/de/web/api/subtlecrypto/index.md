---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`SubtleCrypto`**-Schnittstelle der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) bietet eine Reihe von niedrigstufigen kryptografischen Funktionen.

Der Name der Schnittstelle enthält den Begriff "subtle" (subtil), um anzuzeigen, dass viele ihrer Algorithmen subtile Anforderungen an die Verwendung haben und daher mit Vorsicht verwendet werden müssen, um geeignete Sicherheitsgarantien zu bieten.

Eine Instanz von `SubtleCrypto` ist als die [`subtle`](/de/docs/Web/API/Crypto/subtle)-Eigenschaft der [`Crypto`](/de/docs/Web/API/Crypto)-Schnittstelle verfügbar, die wiederum in Fenstern über die [`Window.crypto`](/de/docs/Web/API/Window/crypto)-Eigenschaft und in Workern über die [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)-Eigenschaft verfügbar ist.

> [!WARNING]
> Diese API bietet eine Reihe von niedrigstufigen kryptografischen Primitiven. Es ist sehr einfach, sie falsch zu verwenden, und die Fallstricke können sehr subtil sein.
>
> Selbst wenn Sie die grundlegenden kryptografischen Funktionen korrekt verwenden, sind sichere Schlüsselverwaltung und das Gesamtdesign des Sicherheitssystems extrem schwer richtig hinzubekommen und gehören im Allgemeinen in das Gebiet von Sicherheitsexperten.
>
> Fehler im Design und in der Implementierung des Sicherheitssystems können die Sicherheit des Systems vollständig unwirksam machen.
>
> Bitte lernen und experimentieren Sie, aber garantieren oder implizieren Sie nicht die Sicherheit Ihrer Arbeit, bevor ein Experte auf diesem Gebiet sie gründlich überprüft hat. Der [Crypto 101 Kurs](https://www.crypto101.io/) kann ein großartiger Einstieg in das Design und die Implementierung sicherer Systeme sein.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften, da sie keine übergeordnete Schnittstelle hat._

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden, da sie keine übergeordnete Schnittstelle hat._

- [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit den verschlüsselten Daten entsprechend dem Klartext, dem Algorithmus und dem Schlüssel, die als Parameter übergeben wurden.
- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit den Klartextdaten entsprechend dem verschlüsselten Text, dem Algorithmus und dem Schlüssel, die als Parameter übergeben wurden.
- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit der Signatur, die dem Text, dem Algorithmus und dem Schlüssel entspricht, die als Parameter übergeben wurden.
- [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit einem booleschen Wert, der angibt, ob die als Parameter übergebene Signatur dem Text, dem Algorithmus und dem Schlüssel entspricht, die ebenfalls als Parameter übergeben wurden.
- [`SubtleCrypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit einem Digest, der durch den Algorithmus und den Text generiert wird, die als Parameter übergeben wurden.
- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit einem neu generierten [`CryptoKey`](/de/docs/Web/API/CryptoKey), für symmetrische Algorithmen, oder einem [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair), das zwei neu generierte Schlüssel für asymmetrische Algorithmen enthält. Diese entsprechen dem Algorithmus, den Verwendungen und der Extraktionsfähigkeit, die als Parameter übergeben wurden.
- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit einem neu generierten [`CryptoKey`](/de/docs/Web/API/CryptoKey), der aus dem Master-Key und dem spezifischen Algorithmus abgeleitet wird, die als Parameter übergeben wurden.
- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit einem neu generierten Puffer von pseudo-zufälligen Bits, die aus dem Master-Key und dem spezifischen Algorithmus abgeleitet werden, die als Parameter übergeben wurden.
- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey), der dem Format, dem Algorithmus, den Rohschlüsseldaten, den Verwendungen und der Extraktionsfähigkeit entspricht, die als Parameter übergeben wurden.
- [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit den Rohschlüsseldaten, die den Schlüssel im gewünschten Format enthalten.
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit einem verpackten symmetrischen Schlüssel zur Verwendung (Übertragung und Speicherung) in unsicheren Umgebungen. Der verpackte Schlüssel entspricht dem im Parameter angegebenen Format und die Verpackung erfolgt durch den angegebenen Verpackungsschlüssel unter Verwendung des angegebenen Algorithmus.
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey), der dem im Parameter angegebenen verpackten Schlüssel entspricht.

## Verwendung von SubtleCrypto

Die von dieser API implementierten Funktionen können in zwei Gruppen unterteilt werden: Kryptografiefunktionen und Schlüsselverwaltungsfunktionen.

### Kryptografiefunktionen

Dies sind die Funktionen, die Sie verwenden können, um Sicherheitsfunktionen wie Datenschutz und Authentifizierung in einem System zu implementieren. Die `SubtleCrypto`-API bietet die folgenden Kryptografiefunktionen:

- [`sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`verify()`](/de/docs/Web/API/SubtleCrypto/verify): Erstellen und Überprüfen digitaler Signaturen.
- [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) und [`decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt): Verschlüsseln und Entschlüsseln von Daten.
- [`digest()`](/de/docs/Web/API/SubtleCrypto/digest): Erstellen eines kollisionsresistenten Digests fester Länge aus einigen Daten.

### Schlüsselverwaltungsfunktionen

Mit Ausnahme von [`digest()`](/de/docs/Web/API/SubtleCrypto/digest) verwenden alle kryptografischen Funktionen in der API kryptografische Schlüssel. In der `SubtleCrypto`-API wird ein kryptografischer Schlüssel durch ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt dargestellt. Um Operationen wie Signieren und Verschlüsseln durchzuführen, übergeben Sie ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt in die Funktion [`sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt).

#### Generieren und Ableiten von Schlüsseln

Die Funktionen [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) und [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) erstellen beide ein neues [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt.

Der Unterschied besteht darin, dass `generateKey()` bei jedem Aufruf einen neuen, einzigartigen Schlüsselwert erzeugt, während `deriveKey()` einen Schlüssel aus einem anfänglichen Schlüsselmateriel ableitet. Wenn Sie dasselbe Schlüsselmateriel in zwei separate Aufrufe von `deriveKey()` geben, erhalten Sie zwei `CryptoKey`-Objekte mit demselben zugrunde liegenden Wert. Dies ist nützlich, wenn Sie beispielsweise einen Verschlüsselungsschlüssel aus einem Passwort ableiten und später denselben Schlüssel aus demselben Passwort ableiten möchten, um die Daten zu entschlüsseln.

#### Importieren und Exportieren von Schlüsseln

Um Schlüssel außerhalb Ihrer App verfügbar zu machen, müssen Sie den Schlüssel exportieren, und dafür ist [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) da. Sie können eines von mehreren Exportformaten auswählen.

Das Gegenteil von `exportKey()` ist [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey). Sie können Schlüssel aus anderen Systemen importieren, und die Unterstützung von Standardformaten wie [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) und [JSON Web Key](https://datatracker.ietf.org/doc/html/rfc7517) hilft Ihnen dabei. Die `exportKey()`-Funktion exportiert den Schlüssel in einem unverschlüsselten Format.

Wenn der Schlüssel sensitiv ist, sollten Sie [`wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) verwenden, welche den Schlüssel exportiert und dann mit einem anderen Schlüssel verschlüsselt; die API nennt dies einen "Schlüssel-Umwickel-Schlüssel".

Das Gegenteil von `wrapKey()` ist [`unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey), welche den Schlüssel entschlüsselt und dann importiert.

#### Speicherung von Schlüsseln

`CryptoKey` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, das es ermöglicht, Schlüssel mithilfe standardmäßiger Web-Storage-APIs zu speichern und abzurufen.

Die Spezifikation geht davon aus, dass die meisten Entwickler die [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) verwenden, um `CryptoKey`-Objekte anhand eines Schlüsselzeichenspeichers, der für die Anwendung sinnvoll ist, sowie anderer nützlicher Metadaten zu speichern. Dies ermöglicht die Speicherung und den Abruf des `CryptoKey`, ohne dass das zugrunde liegende Schlüsselmateriel der Anwendung oder der JavaScript-Umgebung offengelegt werden muss.

### Unterstützte Algorithmen

Die kryptografischen Funktionen der Web Crypto API können von einem oder mehreren verschiedenen _kryptografischen Algorithmen_ durchgeführt werden: Das `algorithm`-Argument der Funktion gibt an, welcher Algorithmus verwendet werden soll. Einige Algorithmen benötigen zusätzliche Parameter: In diesen Fällen ist das `algorithm`-Argument ein Wörterbuchobjekt, das die zusätzlichen Parameter enthält.

Die folgende Tabelle fasst zusammen, welche Algorithmen für welche kryptografische Operationen geeignet sind:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">
        <a href="/de/docs/Web/API/SubtleCrypto/sign">sign</a><br /><a href="/de/docs/Web/API/SubtleCrypto/verify">verify</a>
      </th>
      <th scope="col">
        <a href="/de/docs/Web/API/SubtleCrypto/encrypt">encrypt</a><br /><a href="/de/docs/Web/API/SubtleCrypto/decrypt">decrypt</a>
      </th>
      <th scope="col">
        <a href="/de/docs/Web/API/SubtleCrypto/digest">digest</a>
      </th>
      <th scope="col">
        <a href="/de/docs/Web/API/SubtleCrypto/deriveBits">deriveBits</a><br /><a href="/de/docs/Web/API/SubtleCrypto/deriveKey">deriveKey</a>
      </th>
      <th scope="col">
        <a href="/de/docs/Web/API/SubtleCrypto/wrapKey">wrapKey</a><br /><a href="/de/docs/Web/API/SubtleCrypto/unwrapKey">unwrapKey</a>
      </th>
      <th scope="col">
        <a href="/de/docs/Web/API/SubtleCrypto/generateKey">generateKey</a><br /><a href="/de/docs/Web/API/SubtleCrypto/exportKey">exportKey</a>
      </th>
      <th scope="col">
        <a href="/de/docs/Web/API/SubtleCrypto/importKey">importKey</a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5">RSASSA-PKCS1-v1_5</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/sign#rsa-pss">RSA-PSS</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/sign#ecdsa">ECDSA</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/sign#ed25519">Ed25519</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/sign#hmac">HMAC</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep">RSA-OAEP</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr">AES-CTR</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc">AES-CBC</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm">AES-GCM</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw">AES-KW</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-1</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-256</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-384</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-512</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh">ECDH</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/deriveKey#x25519">X25519</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf">HKDF</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2">PBKDF2</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Nicht-kryptographische Nutzungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Web-Sicherheit](/de/docs/Web/Security)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [`Crypto`](/de/docs/Web/API/Crypto) und [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle).
- [Crypto 101](https://www.crypto101.io/): ein Einführungskurs in die Kryptographie.
