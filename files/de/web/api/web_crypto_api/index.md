---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{DefaultAPISidebar("Web Crypto API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **Web Crypto API** ist eine Schnittstelle, die es einem Skript ermöglicht, kryptografische Primitive zu verwenden, um Systeme mit Kryptografie zu erstellen.

Einige Browser implementierten eine Schnittstelle namens {{domxref("Crypto")}}, ohne dass sie gut definiert oder kryptografisch sicher war.
Um Verwirrung zu vermeiden, wurden Methoden und Eigenschaften dieser Schnittstelle aus Browsern entfernt, die die Web Crypto API implementieren, und alle Methoden der Web Crypto API sind nun in einer neuen Schnittstelle verfügbar: {{domxref("SubtleCrypto")}}.
Die Eigenschaft {{domxref("Crypto.subtle")}} gewährt Zugriff auf ein Objekt, das sie implementiert.

> [!WARNING]
> Die Web Crypto API bietet eine Reihe von kryptografischen Low-Level-Primitiven. Es ist sehr einfach, diese falsch zu verwenden, und die Fallstricke können sehr subtil sein.
>
> Selbst wenn Sie die grundlegenden kryptografischen Funktionen korrekt verwenden, ist das sichere Schlüsselmanagement und die gesamte Sicherheitsarchitektur äußerst schwierig zu meistern und gehört in der Regel in den Bereich von Sicherheitsexperten.
>
> Fehler bei der Gestaltung und Implementierung von Sicherheitssystemen können die Sicherheit des Systems völlig unwirksam machen.
>
> Bitte lernen und experimentieren Sie, garantieren oder implizieren Sie jedoch nicht die Sicherheit Ihrer Arbeit, bevor eine in diesem Thema sachkundige Person diese gründlich überprüft. Der [Crypto 101 Kurs](https://www.crypto101.io/) kann ein guter Ausgangspunkt sein, um mehr über das Design und die Implementierung sicherer Systeme zu erfahren.

## Schnittstellen

- {{domxref("Crypto")}}
  - : Bietet grundlegende Kryptografiefunktionen, wie einen kryptografisch sicheren Zufallszahlengenerator, und Zugriff auf kryptografische Primitive über ein {{domxref("SubtleCrypto")}}-Objekt.
    Ein Objekt dieses Typs kann im globalen Bereich über {{domxref("Window.crypto")}} oder {{domxref("WorkerGlobalScope.crypto")}} abgerufen werden.
- {{domxref("SubtleCrypto")}}
  - : Stellt ein Objekt dar, das Low-Level-Kryptografiefunktionen wie Schlüsselerzeugung, Verschlüsselung, Entschlüsselung, Schlüsselverpackung und -auspackung bereitstellt.
- {{domxref("CryptoKey")}}
  - : Repräsentiert einen kryptografischen {{glossary("key", "Schlüssel")}}, der von einer der {{domxref("SubtleCrypto")}}-Methoden {{domxref("SubtleCrypto.generateKey", "generateKey()")}}, {{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}, {{domxref("SubtleCrypto.importKey", "importKey()")}} oder {{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}} abgerufen wird.

### Wörterbücher

- {{domxref("AesCbcParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn der [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)-Algorithmus verwendet wird.
- {{domxref("AesCtrParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn der [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)-Algorithmus verwendet wird.
- {{domxref("AesGcmParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn der [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)-Algorithmus verwendet wird.
- {{domxref("AesKeyGenParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.generateKey()")}} übergeben werden sollte, wenn ein AES-Schlüssel generiert wird: das heißt, wenn der Algorithmus als [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) identifiziert wird.
- {{domxref("CryptoKeyPair")}}
  - : Stellt ein öffentliches und privates Schlüsselpaar dar, das für einen asymmetrischen Kryptografiealgorithmus verwendet wird.
- {{domxref("EcKeyGenParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.generateKey()")}} übergeben werden sollte, wenn ein elliptisches Kurven-basiertes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.
- {{domxref("EcKeyImportParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.importKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn ein elliptisches Kurven-basiertes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.
- {{domxref("EcdhKeyDeriveParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.deriveKey()")}} übergeben werden sollte, wenn der [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)-Algorithmus verwendet wird.
- {{domxref("EcdsaParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.sign()")}} oder {{domxref("SubtleCrypto.verify()")}} übergeben werden sollte, wenn der [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)-Algorithmus verwendet wird.
- {{domxref("HkdfParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.deriveKey()")}} übergeben werden sollte, wenn der [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus verwendet wird.
- {{domxref("HmacImportParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.importKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.
- {{domxref("HmacKeyGenParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.generateKey()")}} übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.
- {{domxref("Pbkdf2Params")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.deriveKey()")}} übergeben werden sollte, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)-Algorithmus verwendet wird.
- {{domxref("RsaHashedImportParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.importKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn ein auf RSA basierendes Schlüsselpaar importiert wird: das heißt, wenn der Algorithmus als [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1_v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.
- {{domxref("RsaHashedKeyGenParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.generateKey()")}} übergeben werden sollte, wenn ein auf RSA basierendes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1_v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) identifiziert wird.
- {{domxref("RsaOaepParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn der [RSA_OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)-Algorithmus verwendet wird.
- {{domxref("RsaPssParams")}}
  - : Stellt das Objekt dar, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.sign()")}} oder {{domxref("SubtleCrypto.verify()")}} übergeben werden sollte, wenn der [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss)-Algorithmus verwendet wird.

### Erweiterungen für andere Schnittstellen

- {{domxref("Window.crypto")}}
  - : Stellt das {{domxref("Crypto")}}-Objekt dar, das mit dem globalen Objekt im Hauptthread-Bereich verknüpft ist.
- {{domxref("WorkerGlobalScope.crypto")}}
  - : Stellt das {{domxref("Crypto")}}-Objekt dar, das mit dem globalen Objekt im Worker-Bereich verknüpft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
