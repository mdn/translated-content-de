---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
l10n:
  sourceCommit: 223d903a52fb6a381b7c14f10e956822af38930c
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`SubtleCrypto`**-Schnittstelle der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) bietet eine Reihe von grundlegenden kryptografischen Funktionen.

Der Schnittstellenname beinhaltet den Begriff "subtle" (fein), um anzuzeigen, dass viele ihrer Algorithmen subtile Nutzungsvorgaben haben und daher sorgfältig verwendet werden müssen, um geeignete Sicherheitsgarantien zu bieten.

Eine Instanz von `SubtleCrypto` ist als die {{domxref("Crypto.subtle", "subtle")}}-Eigenschaft der {{domxref("Crypto")}}-Schnittstelle verfügbar, die wiederum in Fenstern über die {{domxref("Window.crypto")}}-Eigenschaft und in Workern über die {{domxref("WorkerGlobalScope.crypto")}}-Eigenschaft verfügbar ist.

> [!WARNING]
> Diese API bietet eine Reihe von grundlegenden kryptografischen Primitive. Es ist sehr leicht, sie falsch zu verwenden, und die damit verbundenen Fallstricke können sehr subtil sein.
>
> Selbst wenn Sie die grundlegenden kryptografischen Funktionen korrekt verwenden, sind sicheres Schlüsselmanagement und das insgesamt sichere Systemdesign extrem schwer richtig umzusetzen und gehören in der Regel in den Bereich von spezialisierten Sicherheitsexperten.
>
> Fehler im Systemdesign und in der Implementierung können die Sicherheit des Systems vollständig unwirksam machen.
>
> Bitte lernen und experimentieren Sie, aber garantieren oder implizieren Sie nicht die Sicherheit Ihrer Arbeit, bevor eine in dieser Materie sachkundige Person sie gründlich überprüft hat. Der [Crypto 101 Kurs](https://www.crypto101.io/) kann ein guter Ausgangspunkt sein, um über das Design und die Implementierung sicherer Systeme zu lernen.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften, da sie keine übergeordnete Schnittstelle hat._

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden, da sie keine übergeordnete Schnittstelle hat._

- {{domxref("SubtleCrypto.encrypt()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den verschlüsselten Daten erfüllt wird, die dem Klartext, Algorithmus und Schlüssel entsprechen, die als Parameter angegeben wurden.
- {{domxref("SubtleCrypto.decrypt()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den Klartextdaten erfüllt wird, die dem verschlüsselten Text, Algorithmus und Schlüssel entsprechen, die als Parameter angegeben wurden.
- {{domxref("SubtleCrypto.sign()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der Signatur erfüllt wird, die dem Text, Algorithmus und Schlüssel entsprechen, die als Parameter angegeben wurden.
- {{domxref("SubtleCrypto.verify()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob die als Parameter angegebene Signatur zum Text, Algorithmus und Schlüssel passt, die ebenfalls als Parameter angegeben sind.
- {{domxref("SubtleCrypto.digest()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Digest erfüllt wird, der aus dem Algorithmus und dem als Parameter angegebenen Text generiert wird.
- {{domxref("SubtleCrypto.generateKey()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten {{domxref("CryptoKey")}} für symmetrische Algorithmen oder einem {{domxref("CryptoKeyPair")}}, das zwei neu generierte Schlüssel enthält, für asymmetrische Algorithmen erfüllt wird. Diese entsprechen dem Algorithmus, den Verwendungen und der Extrahierbarkeit, die als Parameter angegeben wurden.
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten {{domxref("CryptoKey")}} erfüllt wird, der aus dem Master-Schlüssel und dem als Parameter angegebenen spezifischen Algorithmus abgeleitet wird.
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem neu generierten Puffer von pseudorandomisierten Bits erfüllt wird, die aus dem Master-Schlüssel und dem als Parameter angegebenen spezifischen Algorithmus abgeleitet werden.
- {{domxref("SubtleCrypto.importKey()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("CryptoKey")}} erfüllt wird, der dem Format, dem Algorithmus, den Rohschlüsseldaten, den Verwendungen und der Extrahierbarkeit entspricht, die als Parameter angegeben wurden.
- {{domxref("SubtleCrypto.exportKey()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit den Rohschlüsseldaten erfüllt wird, die den Schlüssel im angeforderten Format enthalten.
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem umhüllten symmetrischen Schlüssel für die Nutzung (Übertragung und Speicherung) in unsicheren Umgebungen erfüllt wird. Der umhüllte Schlüssel entspricht dem Format, das in den angegebenen Parametern spezifiziert ist, und die Umhüllung erfolgt durch den angegebenen Umhüllungsschlüssel unter Verwendung des spezifizierten Algorithmus.
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("CryptoKey")}} erfüllt wird, der dem als Parameter angegebenen umhüllten Schlüssel entspricht.

## Verwendung von SubtleCrypto

Wir können die von dieser API implementierten Funktionen in zwei Gruppen aufteilen: Kryptografiefunktionen und Schlüsselverwaltungsfunktionen.

### Kryptografiefunktionen

Dies sind die Funktionen, die Sie verwenden können, um Sicherheitsmerkmale wie Datenschutz und Authentifizierung in einem System zu implementieren. Die `SubtleCrypto`-API bietet die folgenden Kryptografiefunktionen:

- {{DOMxRef("SubtleCrypto.sign","sign()")}} und {{DOMxRef("SubtleCrypto.verify","verify()")}}: erstellen und prüfen digitale Signaturen.
- {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} und {{DOMxRef("SubtleCrypto.decrypt","decrypt()")}}: verschlüsseln und entschlüsseln Daten.
- {{DOMxRef("SubtleCrypto.digest","digest()")}}: erstellen eines festgelegten, kollisionsresistenten Digest von Daten.

### Schlüsselverwaltungsfunktionen

Mit Ausnahme von {{DOMxRef("SubtleCrypto.digest","digest()")}} verwenden alle Kryptografiefunktionen der API kryptografische Schlüssel. In der `SubtleCrypto`-API wird ein kryptografischer Schlüssel durch ein {{DOMxRef("CryptoKey")}}-Objekt dargestellt. Um Operationen wie Signieren und Verschlüsseln durchzuführen, übergeben Sie ein {{DOMxRef("CryptoKey")}}-Objekt an die {{DOMxRef("SubtleCrypto.sign","sign()")}}- oder {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}}-Funktion.

#### Erstellen und Ableiten von Schlüsseln

Die {{DOMxRef("SubtleCrypto.generateKey","generateKey()")}}- und {{DOMxRef("SubtleCrypto.deriveKey","deriveKey()")}}-Funktionen erstellen beide ein neues {{DOMxRef("CryptoKey")}}-Objekt.

Der Unterschied besteht darin, dass `generateKey()` bei jedem Aufruf einen neuen eindeutigen Schlüsselwert erzeugt, während `deriveKey()` einen Schlüssel aus einem anfänglichen Schlüsselmaterial ableitet. Wenn Sie das gleiche Schlüsselmaterial in zwei separate Aufrufe von `deriveKey()` übergeben, erhalten Sie zwei `CryptoKey`-Objekte, die denselben zugrunde liegenden Wert haben. Dies ist nützlich, wenn Sie beispielsweise einen Verschlüsselungsschlüssel aus einem Passwort ableiten und später denselben Schlüssel aus demselben Passwort ableiten möchten, um die Daten zu entschlüsseln.

#### Importieren und Exportieren von Schlüsseln

Um Schlüssel außerhalb Ihrer Anwendung verfügbar zu machen, müssen Sie den Schlüssel exportieren, wofür {{DOMxRef("SubtleCrypto.exportKey","exportKey()")}} verwendet wird. Sie können eines von mehreren Exportformaten auswählen.

Das Gegenstück zu `exportKey()` ist {{DOMxRef("SubtleCrypto.importKey","importKey()")}}. Sie können Schlüssel aus anderen Systemen importieren, und die Unterstützung für Standardformate wie [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) und [JSON Web Key](https://datatracker.ietf.org/doc/html/rfc7517) hilft Ihnen dabei. Die `exportKey()`-Funktion exportiert den Schlüssel in einem unverschlüsselten Format.

Wenn der Schlüssel sensibel ist, sollten Sie {{DOMxRef("SubtleCrypto.wrapKey","wrapKey()")}} verwenden, das den Schlüssel exportiert und dann mit einem anderen Schlüssel verschlüsselt; die API nennt dies einen "Key-Wrapping Key".

Das Gegenstück zu `wrapKey()` ist {{DOMxRef("SubtleCrypto.unwrapKey","unwrapKey()")}}, das den Schlüssel entschlüsselt und dann importiert.

#### Speichern von Schlüsseln

`CryptoKey` ist ein {{glossary("serialisierbares Objekt")}}, das es ermöglicht, Schlüssel mit Standard-Webspeicher-APIs zu speichern und abzurufen.

Die Spezifikation erwartet, dass die meisten Entwickler die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden und `CryptoKey`-Objekte gegen einen Schlüsselzeichenfolgen-Identifikator speichern, der für die Anwendung sinnvoll ist, sowie weitere Metadaten, die sie nützlich findet. Dies ermöglicht die Speicherung und den Abruf des `CryptoKey`, ohne dass das zugrunde liegende Schlüsselmaterial der Anwendung oder der JavaScript-Umgebung offengelegt wird.

### Unterstützte Algorithmen

Die von der Web Crypto API bereitgestellten kryptografischen Funktionen können durch einen oder mehrere unterschiedliche _kryptografische Algorithmen_ durchgeführt werden: das `algorithm`-Argument der Funktion gibt an, welcher Algorithmus verwendet werden soll. Einige Algorithmen benötigen zusätzliche Parameter: in diesen Fällen ist das `algorithm`-Argument ein Wörterbuchobjekt, das die zusätzlichen Parameter enthält.

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
- [Web-Sicherheit](/de/docs/Web/Security)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- {{domxref("Crypto")}} und {{domxref("Crypto.subtle")}}.
- [Crypto 101](https://www.crypto101.io/): ein Einführungskurs in die Kryptographie.
