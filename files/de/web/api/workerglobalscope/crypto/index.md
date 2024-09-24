---
title: "WorkerGlobalScope: crypto-Eigenschaft"
short-title: crypto
slug: Web/API/WorkerGlobalScope/crypto
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers("worker")}}

Die **`crypto`** schreibgeschützte Eigenschaft des {{domxref("WorkerGlobalScope")}}-Interfaces gibt das {{domxref("Crypto")}}-Objekt für diesen Worker zurück. Dieses Objekt gibt Arbeitern Zugang zu bestimmten kryptografischen Diensten.

Obwohl die Eigenschaft selbst schreibgeschützt ist, sind alle ihre Methoden (und die Methoden ihres
Kindobjekts, {{domxref("SubtleCrypto")}}) nicht schreibgeschützt und daher anfällig
für Angriffe mittels {{glossary("polyfill")}}.

Obwohl `crypto` in allen Workern verfügbar ist, hat das zurückgegebene `Crypto`-Objekt in unsicheren Kontexten nur eine nutzbare Funktion: die Methode {{domxref("Crypto.getRandomValues", "getRandomValues()")}}. Im Allgemeinen sollte diese API nur in sicheren Kontexten verwendet werden.

## Wert

Eine Instanz der {{domxref("Crypto")}}-Schnittstelle, die Zugang zu allgemeiner Kryptografie und einem starken Zufallszahlengenerator bietet.

## Beispiele

Siehe das Beispiel auf der Seite für {{domxref("Window.crypto")}}, das die `crypto`-Eigenschaft verwendet, um auf die Methode {{domxref("Crypto.getRandomValues", "getRandomValues()")}} zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Crypto")}}-Schnittstelle
- {{domxref("Window.crypto")}}
