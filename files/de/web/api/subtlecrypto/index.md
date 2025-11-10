---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
l10n:
  sourceCommit: 44b15fff6c156ec81c2290e252e20c4519089688
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`SubtleCrypto`**-Schnittstelle der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) bietet eine Reihe von niedrigstufigen kryptografischen Funktionen.

Der Schnittstellenname enthält den Begriff „subtil“, um anzuzeigen, dass viele ihrer Algorithmen subtile Verwendungsanforderungen haben und daher sorgfältig verwendet werden müssen, um geeignete Sicherheitsgarantien zu bieten.

Eine Instanz von `SubtleCrypto` ist als die [`subtle`](/de/docs/Web/API/Crypto/subtle)-Eigenschaft der [`Crypto`](/de/docs/Web/API/Crypto)-Schnittstelle verfügbar, die ihrerseits in Fenstern über die [`Window.crypto`](/de/docs/Web/API/Window/crypto)-Eigenschaft und in Workern über die [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)-Eigenschaft verfügbar ist.

> [!WARNING]
> Diese API bietet eine Reihe von niedrigstufigen kryptografischen Primitiven. Es ist sehr einfach, sie falsch zu verwenden, und die damit verbundenen Fallstricke können sehr subtil sein.
>
> Selbst wenn Sie die grundlegenden kryptografischen Funktionen korrekt verwenden, sind sicheres Schlüsselmanagement und das Gesamtdesign von Sicherheitssystemen extrem schwer richtig zu gestalten und liegen in der Regel im Bereich von Spezialisten für Sicherheit.
>
> Fehler im Design und in der Implementierung von Sicherheitssystemen können die Sicherheit des Systems völlig unwirksam machen.
>
> Bitte lernen und experimentieren Sie, aber garantieren oder implizieren Sie nicht die Sicherheit Ihrer Arbeit, bevor eine sachkundige Person in diesem Fachgebiet sie gründlich überprüft hat. Der [Crypto 101-Kurs](https://www.crypto101.io/) kann ein guter Ausgangspunkt sein, um über das Design und die Implementierung sicherer Systeme zu lernen.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften, da sie keine übergeordnete Schnittstelle hat._

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden, da sie keine übergeordnete Schnittstelle hat._

- [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den verschlüsselten Daten erfüllt wird, die dem angegebenen Klartext, Algorithmus und Schlüssel entsprechen.
- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den Klartextdaten erfüllt wird, die dem verschlüsselten Text, Algorithmus und Schlüssel entsprechen, die als Parameter angegeben sind.
- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der Signatur erfüllt wird, die dem Text, Algorithmus und Schlüssel entspricht, die als Parameter angegeben sind.
- [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob die als Parameter angegebene Signatur mit dem Text, Algorithmus und Schlüssel übereinstimmt, die ebenfalls als Parameter angegeben sind.
- [`SubtleCrypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Digest erfüllt wird, der aus dem angegebenen Algorithmus und Text generiert wurde.
- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten [`CryptoKey`](/de/docs/Web/API/CryptoKey) für symmetrische Algorithmen oder einem [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair) erfüllt wird, das zwei neu generierte Schlüssel für asymmetrische Algorithmen enthält, die dem Algorithmus, den Verwendungen und der Extraktionsfähigkeit entsprechen, die als Parameter angegeben wurden.
- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird, der aus dem Master-Schlüssel und dem spezifischen Algorithmus abgeleitet wurde, die als Parameter angegeben sind.
- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten Puffer von pseudorandomisierten Bits erfüllt wird, die aus dem Master-Schlüssel und dem spezifischen Algorithmus abgeleitet wurden, die als Parameter angegeben sind.
- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird, der dem Format, dem Algorithmus, den rohen Schlüsseldaten, den Verwendungen und der Extraktionsfähigkeit entspricht, die als Parameter angegeben sind.
- [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den rohen Schlüsseldaten erfüllt wird, die den Schlüssel im angeforderten Format enthalten.
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem umschlossenen symmetrischen Schlüssel erfüllt wird, um ihn in unsicheren Umgebungen zu verwenden (Übertragung und Speicherung). Der umschlossene Schlüssel entspricht dem im gegebenen Parameter angegebenen Format, und das Umschließen wird durch den gegebenen Umschlüssel mit dem angegebenen Algorithmus durchgeführt.
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird, der dem im Parameter angegebenen umschlossenen Schlüssel entspricht.

## Verwendung von SubtleCrypto

Wir können die von dieser API implementierten Funktionen in zwei Gruppen aufteilen: kryptografische Funktionen und Schlüsselmanagement-Funktionen.

### Kryptografische Funktionen

Dies sind die Funktionen, die Sie verwenden können, um Sicherheitsmerkmale wie Vertraulichkeit und Authentifizierung in einem System zu implementieren. Die `SubtleCrypto`-API bietet die folgenden kryptografischen Funktionen:

- [`sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`verify()`](/de/docs/Web/API/SubtleCrypto/verify): Erstellen und Überprüfen digitaler Signaturen.
- [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) und [`decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt): Verschlüsseln und Entschlüsseln von Daten.
- [`digest()`](/de/docs/Web/API/SubtleCrypto/digest): Erstellen eines festgelegten, kollisionsresistenten Digests von Daten.

### Schlüsselmanagement-Funktionen

Mit Ausnahme von [`digest()`](/de/docs/Web/API/SubtleCrypto/digest) verwenden alle kryptografischen Funktionen in der API kryptografische Schlüssel. In der `SubtleCrypto`-API wird ein kryptografischer Schlüssel durch ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt dargestellt. Um Operationen wie das Signieren und Verschlüsseln durchzuführen, übergeben Sie ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt an die [`sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) Funktion.

#### Erzeugen und Ableiten von Schlüsseln

Die Funktionen [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) und [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) erstellen beide ein neues [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt.

Der Unterschied ist, dass `generateKey()` bei jedem Aufruf einen neuen, unterschiedlichen Schlüsselwert generiert, während `deriveKey()` einen Schlüssel aus einem anfänglichen Schlüsselmaterial ableitet. Wenn Sie das gleiche Schlüsselmaterial zwei separaten Aufrufen von `deriveKey()` zur Verfügung stellen, erhalten Sie zwei `CryptoKey`-Objekte, die denselben zugrunde liegenden Wert haben. Dies ist nützlich, wenn Sie beispielsweise einen Verschlüsselungsschlüssel aus einem Passwort ableiten und später denselben Schlüssel aus demselben Passwort ableiten möchten, um die Daten zu entschlüsseln.

#### Importieren und Exportieren von Schlüsseln

Um Schlüssel außerhalb Ihrer App verfügbar zu machen, müssen Sie den Schlüssel exportieren, was die Funktion [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) tut. Sie können eines von mehreren Exportformaten wählen.

Das Gegenteil von `exportKey()` ist [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey). Sie können Schlüssel aus anderen Systemen importieren, und die Unterstützung für Standardformate wie [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) und [JSON Web Key](https://datatracker.ietf.org/doc/html/rfc7517) hilft Ihnen dabei. Die Funktion `exportKey()` exportiert den Schlüssel in einem unverschlüsselten Format.

Wenn der Schlüssel sensitiv ist, sollten Sie [`wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) verwenden, die den Schlüssel exportiert und ihn dann mit einem anderen Schlüssel verschlüsselt; die API nennt dies einen "Key-Wrapping-Schlüssel".

Das Gegenteil von `wrapKey()` ist [`unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey), das den Schlüssel entschlüsselt und dann importiert.

#### Speichern von Schlüsseln

`CryptoKey` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, das es ermöglicht, Schlüssel mit den Standard-Web-Speicher-APIs zu speichern und abzurufen.

Die Spezifikation erwartet, dass die meisten Entwickler die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um `CryptoKey`-Objekte gegen einen klassischen Schlüsselstring-Identifikator zu speichern, der für die Anwendung sinnvoll ist, sowie alle anderen Metadaten, die sie nützlich finden.
Dies ermöglicht das Speichern und Abrufen des `CryptoKey`, ohne das zugrunde liegende Schlüsselmateriel der Anwendung oder der JavaScript-Umgebung auszusetzen.

### Unterstützte Algorithmen

Die von der Web Crypto API bereitgestellten kryptografischen Funktionen können durch einen oder mehrere verschiedene _kryptografische Algorithmen_ ausgeführt werden: das `algorithm`-Argument der Funktion gibt an, welcher Algorithmus verwendet werden soll. Einige Algorithmen benötigen zusätzliche Parameter: In diesen Fällen ist das `algorithm`-Argument ein Wörterbuchobjekt, das die zusätzlichen Parameter enthält.

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
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2">PBKDF2</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
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
- [Websicherheit](/de/docs/Web/Security)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [`Crypto`](/de/docs/Web/API/Crypto) und [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle).
- [Crypto 101](https://www.crypto101.io/): ein Einführungskurs in die Kryptografie.
