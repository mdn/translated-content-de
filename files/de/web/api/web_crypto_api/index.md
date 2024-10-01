---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Web Crypto API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **Web Crypto API** ist eine Schnittstelle, die es einem Skript ermöglicht, kryptografische Primitive zu nutzen, um Systeme mit Kryptografie zu erstellen.

Einige Browser haben eine Schnittstelle namens [`Crypto`](/de/docs/Web/API/Crypto) implementiert, ohne sie klar zu definieren oder kryptografisch sicher zu gestalten. Um Verwirrung zu vermeiden, wurden Methoden und Eigenschaften dieser Schnittstelle aus Browsern entfernt, die die Web Crypto API implementieren, und alle Web Crypto API-Methoden sind auf einer neuen Schnittstelle verfügbar: [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto). Die Eigenschaft [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle) gibt Zugriff auf ein Objekt, das diese implementiert.

> [!WARNING]
> Die Web Crypto API stellt eine Anzahl von niedrigstufigen kryptografischen Primitiven bereit. Diese sind sehr leicht fehlerhaft zu verwenden, und die damit verbundenen Fallstricke können sehr subtil sein.
>
> Selbst wenn Sie die grundlegenden kryptografischen Funktionen korrekt verwenden, ist das sichere Schlüsselmanagement und die Gesamtgestaltung des Sicherheitssystems äußerst schwierig korrekt durchzuführen und ist in der Regel das Gebiet von spezialisierten Sicherheitsexperten.
>
> Fehler bei der Gestaltung und Implementierung des Sicherheitssystems können die Sicherheit des Systems völlig unwirksam machen.
>
> Bitte lernen und experimentieren Sie, aber versichern oder implizieren Sie nicht die Sicherheit Ihrer Arbeit, bevor eine fachkundige Person in diesem Themenbereich sie gründlich überprüft hat. Der [Crypto 101 Kurs](https://www.crypto101.io/) kann ein guter Ausgangspunkt sein, um über die Gestaltung und Implementierung sicherer Systeme zu lernen.

## Schnittstellen

- [`Crypto`](/de/docs/Web/API/Crypto)
  - : Bietet grundlegende kryptografische Funktionen, wie einen kryptografisch starken Zufallszahlengenerator und Zugriff auf kryptografische Primitive über ein [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Objekt. Ein Objekt dieses Typs kann im globalen Gültigkeitsbereich über [`Window.crypto`](/de/docs/Web/API/Window/crypto) oder [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) zugegriffen werden.
- [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)
  - : Stellt ein Objekt dar, das grundlegende kryptografische Funktionen für Schlüsselgenerierung, Verschlüsselung, Entschlüsselung, Schlüsselverpackung und Entpackung usw. bietet.
- [`CryptoKey`](/de/docs/Web/API/CryptoKey)
  - : Stellt einen kryptografischen {{Glossary("key", "Schlüssel")}} dar, der aus einer der Methoden von [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) wie [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) gewonnen wurde.

### Wörterbücher

- [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)-Algorithmus verwendet wird.
- [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)-Algorithmus verwendet wird.
- [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)-Algorithmus verwendet wird.
- [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein AES-Schlüssel generiert wird: das heißt, wenn der Algorithmus als einer der [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) identifiziert wird.
- [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair)
  - : Stellt ein öffentlicher und privater Schlüsselpaar dar, das für einen asymmetrischen Kryptografiealgorithmus verwendet wird.
- [`EcKeyGenParams`](/de/docs/Web/API/EcKeyGenParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein elliptische-Kurve-basiertes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als entweder [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.
- [`EcKeyImportParams`](/de/docs/Web/API/EcKeyImportParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn ein elliptische-Kurve-basiertes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als entweder [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.
- [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)-Algorithmus verwendet wird.
- [`EcdsaParams`](/de/docs/Web/API/EcdsaParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) übergeben werden sollte, wenn der [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)-Algorithmus verwendet wird.
- [`HkdfParams`](/de/docs/Web/API/HkdfParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus verwendet wird.
- [`HmacImportParams`](/de/docs/Web/API/HmacImportParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.
- [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.
- [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)-Algorithmus verwendet wird.
- [`RsaHashedImportParams`](/de/docs/Web/API/RsaHashedImportParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn jedes RSA-basierte Schlüsselpaar importiert wird: das heißt, wenn der Algorithmus als einer der [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.
- [`RsaHashedKeyGenParams`](/de/docs/Web/API/RsaHashedKeyGenParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn jedes RSA-basierte Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als einer der [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.
- [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [RSA_OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)-Algorithmus verwendet wird.
- [`RsaPssParams`](/de/docs/Web/API/RsaPssParams)
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) übergeben werden sollte, wenn der [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss)-Algorithmus verwendet wird.

### Erweiterungen zu anderen Schnittstellen

- [`Window.crypto`](/de/docs/Web/API/Window/crypto)
  - : Stellt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt dar, das mit dem globalen Objekt im Hauptthread-Bereich assoziiert ist.
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)
  - : Stellt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt dar, das mit dem globalen Objekt im Worker-Bereich assoziiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
