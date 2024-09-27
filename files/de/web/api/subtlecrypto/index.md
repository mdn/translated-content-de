---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`SubtleCrypto`**-Schnittstelle der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) bietet eine Reihe von niedrigschwelligen kryptografischen Funktionen.

Der Name der Schnittstelle enthält den Begriff „subtil“, um darauf hinzuweisen, dass viele ihrer Algorithmen subtile Nutzungsanforderungen haben und dass sie daher sorgfältig eingesetzt werden müssen, um geeignete Sicherheitsgarantien zu bieten.

Eine Instanz von `SubtleCrypto` ist als die [`subtle`](/de/docs/Web/API/Crypto/subtle)-Eigenschaft der [`Crypto`](/de/docs/Web/API/Crypto)-Schnittstelle verfügbar, die wiederum in Fenstern über die [`Window.crypto`](/de/docs/Web/API/Window/crypto)-Eigenschaft und in Arbeitern über die [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)-Eigenschaft verfügbar ist.

> [!WARNING]
> Diese API bietet eine Reihe von niedrigschwelligen, kryptografischen Primitiven. Es ist sehr einfach, diese falsch zu verwenden, und die Fallstricke können sehr subtil sein.
>
> Selbst wenn Sie die grundlegenden kryptografischen Funktionen korrekt verwenden, sind das sichere Schlüsselmanagement und das Design eines sicheren Gesamtsystems extrem schwer zu realisieren und gehören im Allgemeinen in den Bereich von Spezialisten für Sicherheit.
>
> Fehler im Design und in der Implementierung von Sicherheitssystemen können die Sicherheit des Systems völlig unwirksam machen.
>
> Bitte lernen und experimentieren Sie, aber garantieren oder implizieren Sie nicht die Sicherheit Ihrer Arbeit, bevor eine in diesem Themenbereich fachkundige Person sie gründlich geprüft hat. Der [Crypto 101-Kurs](https://www.crypto101.io/) kann ein guter Ausgangspunkt sein, um das Design und die Implementierung sicherer Systeme zu erlernen.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften, da sie keine übergeordnete Schnittstelle hat._

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden, da sie keine übergeordnete Schnittstelle hat._

- [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den verschlüsselten Daten erfüllt wird, die dem Klartext, dem Algorithmus und dem Schlüssel entsprechen, die als Parameter angegeben wurden.
- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den Klartextdaten erfüllt wird, die dem verschlüsselten Text, dem Algorithmus und dem Schlüssel entsprechen, die als Parameter angegeben wurden.
- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der Signatur erfüllt wird, die dem Text, Algorithmus und Schlüssel entspricht, die als Parameter angegeben wurden.
- [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob die als Parameter gegebene Signatur mit dem Text, Algorithmus und Schlüssel übereinstimmt, die ebenfalls als Parameter angegeben wurden.
- [`SubtleCrypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem aus dem Algorithmus und dem Text erstellten Digest erfüllt wird, die als Parameter angegeben wurden.
- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten [`CryptoKey`](/de/docs/Web/API/CryptoKey) für symmetrische Algorithmen oder einem [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair) mit zwei neu generierten Schlüsseln für asymmetrische Algorithmen erfüllt wird. Diese entsprechen dem Algorithmus, den Verwendungen und der Extrahierbarkeit, die als Parameter angegeben wurden.
- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird, der aus dem Master-Schlüssel und dem spezifischen Algorithmus abgeleitet ist, die als Parameter angegeben wurden.
- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten Puffer pseudozufälliger Bits erfüllt wird, die aus dem Master-Schlüssel und dem spezifischen Algorithmus abgeleitet sind, die als Parameter angegeben wurden.
- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird, der dem Format, dem Algorithmus, den Rohschlüsseldaten, den Verwendungen und der Extrahierbarkeit entspricht, die als Parameter angegeben wurden.
- [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den Rohschlüsseldaten erfüllt wird, die den Schlüssel im angeforderten Format enthalten.
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem verpackten symmetrischen Schlüssel zur Verwendung (Übertragung und Speicherung) in unsicheren Umgebungen erfüllt wird. Der verpackte Schlüssel entspricht dem im gegebenen Parameter angegebenen Format und wird durch den angegebenen Verpackungsschlüssel unter Verwendung des spezifizierten Algorithmus verpackt.
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird, der dem in dem Parameter angegebenen verpackten Schlüssel entspricht.

## Verwendung von SubtleCrypto

Wir können die von dieser API implementierten Funktionen in zwei Gruppen unterteilen: Kryptografiefunktionen und Schlüsselverwaltungsfunktionen.

### Kryptografiefunktionen

Dies sind die Funktionen, die Sie verwenden können, um Sicherheitsmerkmale wie Datenschutz und Authentifizierung in einem System zu implementieren. Die `SubtleCrypto`-API bietet die folgenden Kryptografiefunktionen:

- [`sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`verify()`](/de/docs/Web/API/SubtleCrypto/verify): Erstellen und überprüfen digitale Signaturen.
- [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) und [`decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt): Verschlüsseln und entschlüsseln Daten.
- [`digest()`](/de/docs/Web/API/SubtleCrypto/digest): Erstellen eines festen, kollisionsresistenten Digest aus einigen Daten.

### Schlüsselverwaltungsfunktionen

Mit Ausnahme von [`digest()`](/de/docs/Web/API/SubtleCrypto/digest) verwenden alle Kryptografiefunktionen in der API kryptografische Schlüssel. In der `SubtleCrypto`-API wird ein kryptografischer Schlüssel mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt dargestellt. Um Operationen wie Signieren und Verschlüsseln durchzuführen, übergeben Sie ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt an die [`sign()`](/de/docs/Web/API/SubtleCrypto/sign)- oder [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt)-Funktion.

#### Erzeugen und Ableiten von Schlüsseln

Die Funktionen [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) und [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) erstellen beide ein neues [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt.

Der Unterschied besteht darin, dass `generateKey()` bei jedem Aufruf einen neuen eindeutigen Schlüsselwert generiert, während `deriveKey()` einen Schlüssel aus einem anfänglichen Schlüsselmaterial ableitet. Wenn Sie dem `deriveKey()`-Aufruf zweimal dasselbe Schlüsselmaterial übergeben, erhalten Sie zwei `CryptoKey`-Objekte, die denselben zugrunde liegenden Wert haben. Dies ist nützlich, wenn Sie beispielsweise einen Verschlüsselungsschlüssel aus einem Passwort ableiten und später denselben Schlüssel aus demselben Passwort ableiten möchten, um die Daten zu entschlüsseln.

#### Importieren und Exportieren von Schlüsseln

Um Schlüssel außerhalb Ihrer Anwendung verfügbar zu machen, müssen Sie den Schlüssel exportieren, was der Zweck von [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ist. Sie können eines von mehreren Exportformaten wählen.

Das Gegenteil von `exportKey()` ist [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey). Sie können Schlüssel aus anderen Systemen importieren, und die Unterstützung für Standardformate wie [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) und [JSON Web Key](https://datatracker.ietf.org/doc/html/rfc7517) hilft Ihnen dabei. Die Funktion `exportKey()` exportiert den Schlüssel in einem unverschlüsselten Format.

Wenn der Schlüssel sensibel ist, sollten Sie [`wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) verwenden, das den Schlüssel exportiert und dann mit einem anderen Schlüssel verschlüsselt; die API nennt einen "Key-wrapping-Key".

Das Gegenteil von `wrapKey()` ist [`unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey), das den Schlüssel entschlüsselt und dann importiert.

#### Speichern von Schlüsseln

`CryptoKey` ist ein [serialisierbares Objekt](/de/docs/Glossary/serializable_object), das es ermöglicht, Schlüssel zu speichern und abzurufen, indem Standard-Webspeicher-APIs verwendet werden.

Die Spezifikation erwartet, dass die meisten Entwickler die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um `CryptoKey`-Objekte gegen einen für die Anwendung sinnvollen Schlüsselzeichenfolgen-Identifikator zusammen mit anderen nützlichen Metadaten zu speichern.
Dies ermöglicht die Speicherung und das Abrufen des `CryptoKey`, ohne dass das zugrunde liegende Schlüsselmaterial an die Anwendung oder die JavaScript-Umgebung freigegeben werden muss.

### Unterstützte Algorithmen

Die von der Web Crypto API bereitgestellten Kryptografiefunktionen können mit einem oder mehreren unterschiedlichen _kryptografischen Algorithmen_ durchgeführt werden: Das `algorithm`-Argument der Funktion gibt an, welcher Algorithmus verwendet werden soll. Einige Algorithmen benötigen zusätzliche Parameter: In diesen Fällen ist das `algorithm`-Argument ein Wörterbuch-Objekt, das die zusätzlichen Parameter enthält.

Die folgende Tabelle fasst zusammen, welche Algorithmen für welche kryptografischen Operationen geeignet sind:

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
- [Nicht-kryptografische Verwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Web Sicherheit](/de/docs/Web/Security)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [`Crypto`](/de/docs/Web/API/Crypto) und [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle).
- [Crypto 101](https://www.crypto101.io/): ein Einführungskurs in die Kryptographie.
