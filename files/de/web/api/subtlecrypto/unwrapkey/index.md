---
title: "SubtleCrypto: unwrapKey()-Methode"
short-title: unwrapKey()
slug: Web/API/SubtleCrypto/unwrapKey
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`unwrapKey()`**-Methode des {{domxref("SubtleCrypto")}}-Interfaces "entpackt" einen Schlüssel. Dies bedeutet, dass sie als Eingang einen Schlüssel nimmt, der exportiert und dann verschlüsselt (auch "eingewickelt" genannt) wurde. Sie entschlüsselt den Schlüssel und importiert ihn anschließend, wobei sie ein {{domxref("CryptoKey")}}-Objekt zurückgibt, das in der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) verwendet werden kann.

Wie bei [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) geben Sie das [Importformat des Schlüssels](/de/docs/Web/API/SubtleCrypto/importKey#supported_formats) und andere Attribute des Schlüssels an, um Details wie die Extrahierbarkeit und für welche Operationen er verwendet werden kann, festzulegen.

Da `unwrapKey()` jedoch auch den zu importierenden Schlüssel entschlüsselt, müssen Sie zusätzlich den Schlüssel übergeben, der zur Entschlüsselung verwendet werden muss. Dies wird manchmal als "Entpackungsschlüssel" bezeichnet.

Das Gegenteil von `unwrapKey()` ist {{domxref("SubtleCrypto.wrapKey()")}}: während `unwrapKey` aus Entschlüsseln + Import besteht, setzt sich `wrapKey` aus Verschlüsseln + Export zusammen.

## Syntax

```js-nolint
unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsages)
```

### Parameter

- `format`
  - : Ein String, der das Datenformat des zu entpackenden Schlüssels beschreibt. Es kann eines der folgenden sein:
    - `raw`: [Rohformat](/de/docs/Web/API/SubtleCrypto/importKey#raw).
    - `pkcs8`: [PKCS #8](/de/docs/Web/API/SubtleCrypto/importKey#pkcs_8) Format.
    - `spki`: [SubjectPublicKeyInfo](/de/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) Format.
    - `jwk`: [JSON Web Key](/de/docs/Web/API/SubtleCrypto/importKey#json_web_key) Format.
- `wrappedKey`
  - : Ein {{jsxref("ArrayBuffer")}}, das den eingewickelten Schlüssel im angegebenen Format enthält.
- `unwrappingKey`
  - : Der {{domxref("CryptoKey")}}, der verwendet wird, um den eingewickelten Schlüssel zu entschlüsseln. Der Schlüssel muss die Verwendung `unwrapKey` gesetzt haben.
- `unwrapAlgo`
  - : Ein Objekt, das den [Algorithmus](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms) zur Entschlüsselung des eingewickelten Schlüssels und alle erforderlichen zusätzlichen Parameter spezifiziert:
    - Um [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) zu verwenden, übergeben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)-Objekt.
    - Um [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) zu verwenden, übergeben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)-Objekt.
    - Um [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) zu verwenden, übergeben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)-Objekt.
    - Um [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) zu verwenden, übergeben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)-Objekt.
    - Um [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) zu verwenden, übergeben Sie den String `"AES-KW"` oder ein Objekt in der Form `{ "name": "AES-KW" }`.
- `unwrappedKeyAlgo`
  - : Ein Objekt, das die Art des zu entpackenden Schlüssels definiert und zusätzliche algorithmenspezifische Parameter bereitstellt.
    - Für [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep): Übergeben Sie ein [`RsaHashedImportParams`](/de/docs/Web/API/RsaHashedImportParams)-Objekt.
    - Für [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh): Übergeben Sie ein [`EcKeyImportParams`](/de/docs/Web/API/EcKeyImportParams)-Objekt.
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac): Übergeben Sie ein [`HmacImportParams`](/de/docs/Web/API/HmacImportParams)-Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw): Übergeben Sie den Algorithmus-Namen als String oder ein Objekt in der Form `{ "name": ALGORITHMUS }`, wobei `ALGORITHMUS` der Name des Algorithmus ist.
    - Für [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519): Übergeben Sie ein Objekt in der Form `{ "name": "Ed25519" }`.
    - Für [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519): Übergeben Sie ein Objekt in der Form: `{name: 'X25519'}`.
- `extractable`
  - : Ein Boolean, der anzeigt, ob es möglich sein wird, den Schlüssel mit [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) zu exportieren.
- `keyUsages`
  - : Ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), das angibt, was mit dem Schlüssel gemacht werden kann. Mögliche Werte des Arrays sind:
    - `encrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
    - `decrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
    - `sign`: Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
    - `verify`: Der Schlüssel kann verwendet werden, um Signaturen zu [verifizieren](/de/docs/Web/API/SubtleCrypto/verify).
    - `deriveKey`: Der Schlüssel kann verwendet werden, um einen neuen Schlüssel [abzuleiten](/de/docs/Web/API/SubtleCrypto/deriveKey).
    - `deriveBits`: Der Schlüssel kann verwendet werden, um Bits [abzuleiten](/de/docs/Web/API/SubtleCrypto/deriveBits).
    - `wrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [umwickeln](/de/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu entpacken.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem entpackten Schlüssel als [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt erfüllt wird.

### Ausnahmen

Das Versprechen wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Entpackungsschlüssel kein Schlüssel für den angeforderten Entpackungsalgorithmus ist oder wenn der `keyUsages`-Wert dieses Schlüssels nicht `unwrap` enthält.
- `NotSupported` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt ist oder nicht zum Verschlüsseln oder Verpacken geeignet ist.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `keyUsages` leer ist, aber der entpackte Schlüssel vom Typ `secret` oder `private` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, ein ungültiges Format zu verwenden.

## Unterstützte Algorithmen

Die `unwrapKey()`-Methode unterstützt dieselben Algorithmen wie die [`wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey#supported_algorithms)-Methode.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/unwrap-key/index.html) auf GitHub ausprobieren.

### Entpacken eines "raw"-Schlüssels

In diesem Beispiel entpacken wir einen symmetrischen AES-GCM-Schlüssel. Der Schlüssel wurde im "raw"-Format exportiert und mit dem AES-KW-Algorithmus verschlüsselt, mit einem aus einem Passwort abgeleiteten Schlüssel.

Zum Entpacken bitten wir den Benutzer um das Passwort und verwenden PBKDF2 und etwas Salz, um den AES-KW-Entpackungsschlüssel abzuleiten. Das Salz muss dasselbe sein wie das Salz, das verwendet wurde, um den ursprünglichen AES-KW-Schlüsselwickelungsschlüssel abzuleiten.

Sobald wir den Entpackungsschlüssel haben, übergeben wir ihn an `unwrapKey()` zusammen mit dem eingewickelten Schlüssel und anderen Parametern. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/unwrap-key/raw.js)

```js
/*
Salz, das zur Ableitung des Schlüssels verwendet werden soll, der den Schlüssel wickelt,
neben dem Passwort, das der Benutzer angibt.
Dieser Wert muss mit dem ursprünglich zur Ableitung
des Schlüssels verwendeten Salz übereinstimmen.
*/
const saltBytes = [
  89, 113, 135, 234, 168, 204, 21, 36, 55, 93, 1, 132, 242, 242, 192, 156,
];

/*
Der eingewickelte Schlüssel selbst.
*/
const wrappedKeyBytes = [
  171, 223, 14, 36, 201, 233, 233, 120, 164, 68, 217, 192, 226, 80, 224, 39,
  199, 235, 239, 60, 212, 169, 100, 23, 61, 54, 244, 197, 160, 80, 109, 230,
  207, 225, 57, 197, 175, 71, 80, 209,
];

/*
Konvertieren eines Arrays von Byte-Werten in ein ArrayBuffer.
*/
function bytesToArrayBuffer(bytes) {
  const bytesAsArrayBuffer = new ArrayBuffer(bytes.length);
  const bytesUint8 = new Uint8Array(bytesAsArrayBuffer);
  bytesUint8.set(bytes);
  return bytesAsArrayBuffer;
}

/*
Holen Sie sich etwas Schlüsselmateral zur Verwendung als Eingabe in die Methode deriveKey.
Das Schlüsselmaterail ist ein vom Benutzer bereitgestelltes Passwort.
*/
function getKeyMaterial() {
  let password = window.prompt("Enter your password");
  let enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Ableiten eines AES-KW-Schlüssels mittels PBKDF2.
*/
async function getUnwrappingKey() {
  // 1. das Schlüsselmateral bekommen (vom Benutzer bereitgestelltes Passwort)
  const keyMaterial = await getKeyMaterial();
  // 2 das Salzparameter initialisiseren.
  // Das Salz muss mit dem ursprünglich zur Ableitung des Schlüssels verwendeten übereinstimmen.
  // In diesem Beispiel wird es als konstantes "saltBytes" bereitgestellt.
  const saltBuffer = bytesToArrayBuffer(saltBytes);
  // 3 den Schüssel aus Schlüsselmateral und Salz ableiten
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-KW", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Entpacken eines AES-Schlüssels aus einem ArrayBuffer, der die Rohbytes enthält.
Nimmt ein Array, das die Bytes enthält, und gibt ein Promise zurück,
das zu einem CryptoKey wird, der den geheimen Schlüssel darstellt.
*/
async function unwrapSecretKey(wrappedKey) {
  // 1. den Entpackungsschlüssel erhalten
  const unwrappingKey = await getUnwrappingKey();
  // 2. den eingewickelten Schlüssel initialisieren
  const wrappedKeyBuffer = bytesToArrayBuffer(wrappedKey);
  // 3. den Schlüssel entpacken
  return window.crypto.subtle.unwrapKey(
    "raw", // Importformat
    wrappedKeyBuffer, // ArrayBuffer, der den zu entpackenden Schlüssel darstellt
    unwrappingKey, // CryptoKey, der den Schlüsselverschlüsselungsschlüssel darstellt
    "AES-KW", // Algorithmus-Identifier für Schlüsselverschlüsselungsschlüssel
    "AES-GCM", // Algorithmus-Identifier für den zu entpackenden Schlüssel
    true, // Extrahierbarkeit des zu entpackenden Schlüssels
    ["encrypt", "decrypt"], // Schlüsselverwendungen für den zu entpackenden Schlüssel
  );
}
```

### Entpacken eines "pkcs8"-Schlüssels

In diesem Beispiel entpacken wir einen RSA-PSS-Schlüssel zum Signieren. Der Schlüssel wurde im "pkcs8"-Format exportiert und mit dem AES-GCM-Algorithmus verschlüsselt, mit einem aus einem Passwort abgeleiteten Schlüssel.

Zum Entpacken bitten wir den Benutzer um das Passwort und verwenden PBKDF2 und etwas Salz, um den AES-GCM-Entpackungsschlüssel abzuleiten. Das Salz muss dasselbe sein wie das Salz, das verwendet wurde, um den ursprünglichen AES-GCM-Schlüsselwickelungsschlüssel abzuleiten.

Sobald wir den Entpackungsschlüssel haben, übergeben wir ihn an `unwrapKey()` zusammen mit dem eingewickelten Schlüssel und anderen Parametern. Beachten Sie, dass wir bei Verwendung von AES-GCM den iv-Wert an `unwrapKey()` übergeben müssen, und dieser muss derselbe sein wie der iv, der in der entsprechenden `wrapKey()`-Operation verwendet wurde. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/unwrap-key/pkcs8.js)

```js
/*
Salz, das zur Ableitung des Schlüssels verwendet werden soll, der den Schlüssel wickelt,
neben dem Passwort, das der Benutzer angibt.
Dieser Wert muss mit dem ursprünglich zur Ableitung
des Schlüssels verwendeten Salz übereinstimmen.
*/
const saltBytes = [
  180, 253, 62, 216, 47, 35, 90, 55, 218, 233, 103, 10, 172, 143, 161, 177,
];

/*
IV, das zum Entschlüsseln des zu entpackenden Schlüssels verwendet wird.
Dieser Wert muss derselbe IV sein, der ursprünglich zur
Verschlüsselung des Schlüssels verwendet wurde.
*/
const ivBytes = [212, 187, 26, 247, 172, 51, 37, 151, 27, 177, 249, 142];

/*
Der eingewickelte Schlüssel selbst.
*/
const wrappedKeyBytes = [
  6, 155, 182, 208, 7, 141, 44, 18, 3, 151, 58, 126, 68, 100, 252, 225, 241, 11,
  25, 201, 153, 171, 102, 174, 150, 29, 62, 195, 110, 138, 106, 109, 14, 6, 108,
  148, 104, 221, 22, 93, 102, 221, 146, 25, 65, 112, 4, 140, 79, 194, 164, 163,
  156, 250, 108, 11, 14, 220, 78, 194, 161, 17, 14, 57, 121, 70, 13, 28, 220,
  210, 78, 32, 46, 217, 36, 165, 220, 170, 244, 152, 214, 150, 83, 2, 138, 128,
  11, 251, 227, 213, 72, 100, 158, 10, 162, 40, 195, 60, 248, 77, 37, 156, 34,
  10, 213, 171, 67, 147, 73, 231, 31, 63, 80, 176, 103, 206, 187, 164, 214, 250,
  49, 223, 185, 5, 48, 241, 17, 1, 253, 59, 185, 181, 209, 255, 42, 223, 175,
  90, 159, 174, 169, 205, 156, 120, 195, 1, 135, 165, 226, 46, 119, 27, 97, 183,
  23, 197, 227, 85, 138, 235, 79, 158, 167, 59, 62, 194, 34, 210, 214, 240, 215,
  101, 233, 63, 138, 53, 87, 253, 189, 27, 66, 150, 76, 242, 76, 102, 174, 179,
  163, 184, 205, 11, 161, 224, 19, 110, 34, 175, 192, 101, 117, 169, 86, 66, 56,
  241, 128, 13, 156, 165, 125, 139, 110, 138, 50, 108, 129, 251, 137, 26, 186,
  110, 117, 113, 207, 179, 59, 213, 18, 175, 14, 203, 192, 2, 97, 131, 125, 167,
  227, 182, 87, 72, 123, 54, 156, 60, 195, 88, 224, 96, 46, 126, 245, 251, 247,
  147, 110, 147, 173, 82, 106, 93, 210, 55, 71, 127, 133, 41, 37, 181, 17, 106,
  16, 158, 220, 136, 43, 75, 133, 96, 240, 151, 116, 40, 44, 254, 2, 32, 74,
  226, 193, 172, 48, 211, 71, 109, 163, 143, 30, 92, 28, 30, 183, 25, 16, 176,
  207, 77, 93, 139, 242, 114, 91, 218, 126, 123, 234, 18, 9, 245, 53, 46, 172,
  215, 62, 92, 249, 191, 17, 27, 0, 58, 151, 33, 23, 169, 93, 177, 253, 152,
  147, 198, 196, 226, 42, 202, 166, 99, 250, 127, 40, 221, 196, 121, 195, 198,
  235, 30, 159, 159, 95, 182, 107, 175, 137, 177, 49, 72, 63, 131, 162, 198,
  186, 22, 255, 230, 237, 195, 56, 147, 177, 101, 52, 227, 125, 32, 180, 242,
  47, 92, 212, 6, 148, 218, 107, 125, 137, 123, 15, 51, 107, 159, 228, 238, 212,
  60, 54, 184, 48, 110, 248, 252, 208, 46, 23, 149, 78, 169, 201, 68, 242, 193,
  251, 156, 227, 42, 90, 109, 102, 172, 61, 207, 124, 96, 98, 79, 37, 218, 16,
  212, 139, 162, 0, 183, 235, 171, 75, 18, 84, 160, 120, 173, 156, 187, 99, 24,
  58, 88, 213, 148, 24, 193, 111, 75, 169, 10, 158, 207, 148, 84, 249, 156, 248,
  19, 221, 2, 175, 1, 8, 74, 221, 212, 244, 123, 34, 223, 175, 54, 166, 101, 51,
  175, 141, 80, 87, 9, 146, 72, 223, 46, 251, 199, 192, 2, 22, 125, 16, 15, 99,
  26, 159, 165, 133, 172, 169, 26, 236, 44, 86, 182, 162, 81, 143, 249, 15, 207,
  12, 232, 15, 205, 199, 78, 133, 199, 19, 232, 183, 33, 183, 72, 117, 72, 27,
  43, 254, 13, 17, 252, 1, 143, 137, 154, 10, 4, 77, 85, 24, 85, 143, 200, 81,
  76, 171, 43, 124, 42, 191, 150, 70, 10, 90, 178, 198, 40, 233, 233, 225, 146,
  231, 209, 254, 2, 90, 216, 5, 97, 105, 204, 82, 88, 81, 99, 92, 159, 116, 192,
  223, 148, 252, 12, 24, 197, 211, 187, 212, 98, 252, 201, 154, 184, 65, 54, 47,
  13, 106, 151, 168, 208, 112, 212, 74, 204, 36, 233, 98, 104, 58, 103, 1, 194,
  13, 26, 109, 101, 60, 42, 3, 215, 20, 25, 99, 176, 63, 28, 112, 102, 121, 190,
  96, 198, 228, 196, 78, 38, 82, 37, 248, 42, 150, 115, 6, 10, 22, 101, 42, 237,
  175, 69, 232, 212, 231, 40, 193, 70, 211, 245, 106, 231, 175, 150, 88, 105,
  170, 139, 238, 196, 64, 218, 250, 47, 165, 22, 36, 196, 161, 30, 79, 175, 14,
  133, 88, 129, 182, 56, 140, 147, 168, 134, 91, 68, 172, 110, 195, 134, 156,
  68, 78, 249, 215, 68, 250, 11, 23, 70, 59, 156, 99, 75, 249, 159, 84, 16, 206,
  93, 16, 130, 34, 66, 210, 82, 252, 53, 251, 84, 59, 226, 212, 154, 15, 20,
  163, 58, 228, 109, 53, 214, 151, 237, 10, 169, 107, 180, 123, 174, 159, 182,
  8, 240, 115, 115, 220, 131, 128, 79, 80, 61, 133, 58, 24, 98, 193, 225, 56,
  36, 159, 254, 199, 49, 44, 160, 28, 81, 140, 163, 24, 143, 114, 31, 237, 235,
  250, 83, 72, 215, 44, 232, 182, 45, 39, 182, 193, 248, 65, 174, 186, 52, 219,
  30, 198, 48, 1, 134, 151, 81, 114, 38, 124, 7, 213, 205, 138, 28, 22, 216, 76,
  46, 224, 241, 88, 156, 7, 62, 23, 104, 34, 54, 25, 156, 93, 212, 133, 182, 61,
  93, 255, 195, 68, 244, 234, 53, 132, 151, 140, 72, 146, 127, 113, 227, 34,
  243, 218, 222, 47, 218, 113, 18, 173, 203, 158, 133, 90, 156, 214, 77, 20,
  113, 1, 231, 164, 52, 55, 69, 132, 24, 68, 131, 212, 7, 153, 34, 179, 113,
  156, 81, 127, 83, 57, 29, 195, 90, 64, 211, 115, 202, 188, 5, 42, 188, 142,
  203, 109, 231, 53, 206, 72, 220, 90, 23, 12, 1, 178, 122, 60, 221, 68, 6, 14,
  154, 108, 203, 171, 142, 159, 249, 13, 55, 52, 110, 214, 33, 147, 164, 181,
  50, 79, 164, 200, 83, 251, 40, 105, 223, 50, 0, 115, 240, 146, 23, 122, 80,
  204, 169, 38, 198, 154, 31, 29, 23, 236, 39, 35, 131, 147, 242, 163, 138, 158,
  236, 117, 7, 108, 33, 132, 98, 50, 111, 46, 146, 251, 82, 34, 85, 5, 130, 237,
  67, 40, 170, 235, 124, 92, 66, 71, 239, 12, 97, 136, 251, 1, 206, 13, 51, 232,
  92, 46, 35, 95, 5, 123, 24, 183, 99, 243, 124, 75, 155, 89, 66, 54, 72, 17,
  255, 99, 137, 199, 232, 204, 9, 248, 78, 35, 218, 136, 117, 239, 102, 240,
  187, 40, 89, 244, 140, 109, 229, 120, 116, 54, 207, 171, 11, 248, 190, 199,
  81, 53, 109, 8, 188, 51, 93, 165, 34, 255, 165, 191, 198, 130, 220, 41, 192,
  166, 194, 69, 104, 124, 158, 122, 236, 176, 24, 60, 87, 240, 42, 158, 143, 37,
  143, 208, 155, 249, 230, 21, 4, 230, 56, 194, 62, 235, 132, 14, 50, 180, 216,
  134, 28, 25, 159, 64, 199, 161, 236, 60, 233, 160, 172, 68, 169, 2, 5, 252,
  190, 20, 54, 115, 248, 63, 93, 107, 156, 8, 96, 85, 32, 189, 118, 66, 114,
  126, 64, 203, 97, 235, 13, 18, 102, 192, 51, 59, 5, 122, 171, 96, 129, 40, 32,
  154, 4, 191, 234, 75, 184, 112, 201, 244, 110, 50, 216, 44, 88, 139, 175, 58,
  112, 7, 52, 25, 64, 112, 40, 148, 187, 39, 234, 96, 151, 16, 158, 114, 113,
  109, 164, 47, 108, 94, 148, 35, 232, 221, 33, 110, 126, 170, 25, 234, 45, 165,
  180, 210, 193, 120, 247, 155, 127,
];

/*
Der entpackte Signaturschlüssel.
*/
let signingKey;

const signButton = document.querySelector(".pkcs8 .sign-button");

/*
Konvertieren eines Arrays von Byte-Werten in ein ArrayBuffer.
*/
function bytesToArrayBuffer(bytes) {
  const bytesAsArrayBuffer = new ArrayBuffer(bytes.length);
  const bytesUint8 = new Uint8Array(bytesAsArrayBuffer);
  bytesUint8.set(bytes);
  return bytesAsArrayBuffer;
}

/*
Holen Sie sich etwas Schlüsselmateral zur Verwendung als Eingabe in die Methode deriveKey.
Das Schlüsselmaterail ist ein vom Benutzer bereitgestelltes Passwort.
*/
function getKeyMaterial() {
  let password = window.prompt("Enter your password");
  let enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Ableiten eines AES-GCM-Schlüssels mittels PBKDF2.
*/
async function getUnwrappingKey() {
  // 1. das Schlüsselmateral bekommen (vom Benutzer bereitgestelltes Passwort)
  const keyMaterial = await getKeyMaterial();
  // 2 das Salzparameter initialisiseren.
  // Das Salz muss mit dem ursprünglich zur Ableitung des Schlüssels verwendeten übereinstimmen.
  // In diesem Beispiel wird es als konstantes "saltBytes" bereitgestellt.
  const saltBuffer = bytesToArrayBuffer(saltBytes);
  // 3 den Schüssel aus Schlüsselmateral und Salz ableiten
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Entwickeln eines RSA-PSS-Schlüssels zum Signieren aus einem ArrayBuffer
der die Rohbytes enthält.
Nimmt ein Array, das die Bytes enthält, und gibt ein Promise zurück,
das zu einem CryptoKey wird, der den privaten Schlüssel darstellt.
*/
async function unwrapPrivateKey(wrappedKey) {
  // 1. den Entpackungsschlüssel erhalten
  const unwrappingKey = await getUnwrappingKey();
  // 2. den eingewickelten Schlüssel initialisieren
  const wrappedKeyBuffer = bytesToArrayBuffer(wrappedKey);
  // 3. die iv initialisieren
  const ivBuffer = bytesToArrayBuffer(ivBytes);
  // 4. den Schlüssel entpacken
  return window.crypto.subtle.unwrapKey(
    "pkcs8", // Importformat
    wrappedKeyBuffer, // ArrayBuffer, der den zu entpackenden Schlüssel darstellt
    unwrappingKey, // CryptoKey, der den Schlüsselverschlüsselungsschlüssel darstellt
    {
      // Algorithmus-Parameter für Schlüsselverschlüsselungsschlüssel
      name: "AES-GCM",
      iv: ivBuffer,
    },
    {
      // Algorithmus-Parameter für den zu entpackenden Schlüssel
      name: "RSA-PSS",
      hash: "SHA-256",
    },
    true, // Extrahierbarkeit des zu entpackenden Schlüssels
    ["sign"], // Schlüsselverwendungen für den zu entpackenden Schlüssel
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- [PKCS #8-Format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo-Format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key-Format](https://datatracker.ietf.org/doc/html/rfc7517).
- [AES-KW-Spezifikation](https://datatracker.ietf.org/doc/html/rfc3394).
