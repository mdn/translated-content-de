---
title: "WorkerGlobalScope: crypto-Eigenschaft"
short-title: crypto
slug: Web/API/WorkerGlobalScope/crypto
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers("worker")}}

Die **`crypto`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt für diesen Worker zurück. Dieses Objekt ermöglicht es Workern, auf bestimmte kryptographische Dienste zuzugreifen.

Obwohl die Eigenschaft selbst schreibgeschützt ist, sind alle ihre Methoden (und die Methoden ihres
Unterobjekts, [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)) nicht schreibgeschützt und daher anfällig
für Angriffe durch [Polyfill](/de/docs/Glossary/polyfill).

Obwohl `crypto` in allen Workern verfügbar ist, hat das zurückgegebene `Crypto`-Objekt in unsicheren Kontexten nur eine nutzbare Funktion: die [`getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)-Methode. Im Allgemeinen sollten Sie diese API nur in sicheren Kontexten verwenden.

## Wert

Eine Instanz des [`Crypto`](/de/docs/Web/API/Crypto)-Interfaces, die Zugriff auf allgemeine Kryptografie und einen starken Zufallszahlengenerator bietet.

## Beispiele

Siehe das Beispiel auf der Seite für [`Window.crypto`](/de/docs/Web/API/Window/crypto), das die `crypto`-Eigenschaft verwendet, um auf die [`getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)-Methode zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Crypto`](/de/docs/Web/API/Crypto)-Interface
- [`Window.crypto`](/de/docs/Web/API/Window/crypto)
