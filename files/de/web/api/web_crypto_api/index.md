---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Web Crypto API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **Web Crypto API** ist eine Schnittstelle, die es einem Skript ermöglicht, kryptographische Primitive zu verwenden, um Systeme mit Kryptographie aufzubauen.

Einige Browser implementierten eine Schnittstelle namens [`Crypto`](/de/docs/Web/API/Crypto), ohne dass sie gut definiert oder kryptographisch sicher war.
Um Verwirrung zu vermeiden, wurden Methoden und Eigenschaften dieser Schnittstelle aus Browsern entfernt, die die Web Crypto API implementieren, und alle Web Crypto API-Methoden sind auf einer neuen Schnittstelle verfügbar: [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto).
Die Eigenschaft [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle) bietet Zugriff auf ein Objekt, das diese implementiert.

> [!WARNING]
> Die Web Crypto API bietet eine Reihe von kryptographischen Low-Level-Primitiven. Es ist sehr einfach, diese falsch zu verwenden, und die Fallstricke können sehr subtil sein.
>
> Selbst wenn Sie die grundlegenden kryptographischen Funktionen korrekt verwenden, sind sicheres Schlüsselmanagement und das gesamte Sicherheitsdesign extrem schwer korrekt umzusetzen und liegen im Allgemeinen im Bereich von spezialisiertem Sicherheitsexperten.
>
> Fehler im Sicherheitsdesign und bei der Implementierung können die Sicherheit des Systems völlig wirkungslos machen.
>
> Bitte lernen und experimentieren Sie, garantieren oder implizieren Sie jedoch nicht die Sicherheit Ihrer Arbeit, bevor ein sachkundiges Individuum Ihren Entwurf gründlich überprüft hat. Der [Crypto 101 Kurs](https://www.crypto101.io/) kann ein guter Ausgangspunkt sein, um sich über das Design und die Implementierung sicherer Systeme zu informieren.

## Schnittstellen

- [`Crypto`](/de/docs/Web/API/Crypto)
  - : Bietet grundlegende Kryptographiefunktionen, wie einen kryptographisch starken Zufallszahlengenerator und Zugriff auf kryptographische Primitive über ein [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Objekt.
    Ein Objekt dieses Typs kann im globalen Bereich über [`Window.crypto`](/de/docs/Web/API/Window/crypto) oder [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) abgerufen werden.
- [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)
  - : Repräsentiert ein Objekt, das Low-Level-Kryptographiefunktionen für Schlüsselgenerierung, Verschlüsselung, Entschlüsselung, Schlüsselverpackung und -entpackung usw. bereitstellt.
- [`CryptoKey`](/de/docs/Web/API/CryptoKey)
  - : Repräsentiert einen kryptographischen [Schlüssel](/de/docs/Glossary/key), der von einer der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) erhalten wurde.

### Wörterbücher

- [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn der [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)-Algorithmus verwendet wird.
- [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn der [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)-Algorithmus verwendet wird.
- [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn der [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)-Algorithmus verwendet wird.
- [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden soll, wenn ein AES-Schlüssel generiert wird: also, wenn der Algorithmus als einer von [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) identifiziert wird.
- [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair)
  - : Repräsentiert ein öffentliches und privates Schlüsselpaar, das für einen asymmetrischen Kryptographiealgorithmus verwendet wird.
- [`EcKeyGenParams`](/de/docs/Web/API/EcKeyGenParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden soll, wenn ein beliebiges elliptisches Kurven-basiertes Schlüsselpaar generiert wird: also, wenn der Algorithmus als entweder [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.
- [`EcKeyImportParams`](/de/docs/Web/API/EcKeyImportParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn ein beliebiges elliptisches Kurven-basiertes Schlüsselpaar generiert wird: also, wenn der Algorithmus als entweder [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.
- [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden soll, wenn der [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)-Algorithmus verwendet wird.
- [`EcdsaParams`](/de/docs/Web/API/EcdsaParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) übergeben werden soll, wenn der [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)-Algorithmus verwendet wird.
- [`HkdfParams`](/de/docs/Web/API/HkdfParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden soll, wenn der [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus verwendet wird.
- [`HmacImportParams`](/de/docs/Web/API/HmacImportParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.
- [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden soll, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.
- [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden soll, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)-Algorithmus verwendet wird.
- [`RsaHashedImportParams`](/de/docs/Web/API/RsaHashedImportParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn ein beliebiges RSA-basiertes Schlüsselpaar importiert wird: also, wenn der Algorithmus als einer von [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.
- [`RsaHashedKeyGenParams`](/de/docs/Web/API/RsaHashedKeyGenParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden soll, wenn ein beliebiges RSA-basiertes Schlüsselpaar generiert wird: also, wenn der Algorithmus als einer von [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.
- [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn der [RSA_OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)-Algorithmus verwendet wird.
- [`RsaPssParams`](/de/docs/Web/API/RsaPssParams)
  - : Repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) übergeben werden soll, wenn der [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss)-Algorithmus verwendet wird.

### Erweiterungen zu anderen Schnittstellen

- [`Window.crypto`](/de/docs/Web/API/Window/crypto)
  - : Repräsentiert das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt, das mit dem globalen Objekt im Hauptthread-Bereich verknüpft ist.
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)
  - : Repräsentiert das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt, das mit dem globalen Objekt im Worker-Bereich verknüpft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
